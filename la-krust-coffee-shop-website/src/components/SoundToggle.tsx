import { useState, useRef, useEffect } from 'react';

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [show, setShow] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ brownNoise?: AudioBufferSourceNode; gain?: GainNode }>({});

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const createBrownNoise = (ctx: AudioContext) => {
    const bufferSize = 2 * ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5;
    }
    return buffer;
  };

  const toggleSound = () => {
    if (isPlaying) {
      // Stop
      try {
        nodesRef.current.brownNoise?.stop();
        audioContextRef.current?.close();
      } catch { /* ignore */ }
      audioContextRef.current = null;
      nodesRef.current = {};
      setIsPlaying(false);
    } else {
      // Start ambient café noise
      try {
        const ctx = new AudioContext();
        audioContextRef.current = ctx;

        // Brown noise for ambient
        const brownBuffer = createBrownNoise(ctx);
        const brownSource = ctx.createBufferSource();
        brownSource.buffer = brownBuffer;
        brownSource.loop = true;

        // Low pass filter to make it warm
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 400;

        // Very low volume
        const gain = ctx.createGain();
        gain.gain.value = 0;
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 2);

        brownSource.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        brownSource.start();

        nodesRef.current = { brownNoise: brownSource, gain };
        setIsPlaying(true);
      } catch {
        /* Web Audio not available */
      }
    }
  };

  useEffect(() => {
    return () => {
      try {
        nodesRef.current.brownNoise?.stop();
        audioContextRef.current?.close();
      } catch { /* ignore */ }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full 
        bg-espresso/80 border border-gold/20 flex items-center justify-center
        hover:border-gold/50 transition-all duration-500 sound-toggle cursor-pointer
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      title={isPlaying ? 'Mute ambient sound' : 'Play ambient café sound'}
      aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient café sound'}
    >
      {isPlaying ? (
        <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-cream/40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
        </svg>
      )}
    </button>
  );
}
