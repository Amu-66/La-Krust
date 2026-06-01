interface Props {
  variant: 'dark-to-light' | 'light-to-dark' | 'dark-to-amber' | 'amber-to-dark' | 'dark-to-dark' | 'light-to-amber';
}

export default function SectionTransition({ variant }: Props) {
  const gradients: Record<string, string> = {
    'dark-to-light': 'linear-gradient(180deg, #1C0F0A 0%, #2D1A12 25%, #5C3A24 50%, #C4906A 75%, #F5ECD7 100%)',
    'light-to-dark': 'linear-gradient(180deg, #F5ECD7 0%, #C4906A 25%, #5C3A24 50%, #2D1A12 75%, #1C0F0A 100%)',
    'dark-to-amber': 'linear-gradient(180deg, #1C0F0A 0%, #2D1A12 40%, #3A2315 100%)',
    'amber-to-dark': 'linear-gradient(180deg, #3A2315 0%, #2D1A12 60%, #1C0F0A 100%)',
    'dark-to-dark': 'linear-gradient(180deg, #1C0F0A 0%, #2D1A12 50%, #1C0F0A 100%)',
    'light-to-amber': 'linear-gradient(180deg, #F5ECD7 0%, #C4906A 30%, #5C3A24 60%, #3A2315 100%)',
  };

  return (
    <div
      className="relative w-full pointer-events-none"
      style={{
        height: variant.includes('amber') ? '80px' : '100px',
        background: gradients[variant] || gradients['dark-to-light']
      }}
    >
      <div className="paper-grain absolute inset-0" />
    </div>
  );
}
