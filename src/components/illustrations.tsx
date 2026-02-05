type IllustrationProps = {
  className?: string;
};

// Linework is intentionally sparse to preserve negative space and structural calm.
export function SubmergedRidge({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 280"
      role="img"
      aria-label="Submerged ridge linework"
    >
      <rect width="600" height="280" fill="transparent" />
      <path d="M40 80 H560" stroke="currentColor" strokeWidth="1.2" />
      <path d="M60 160 C120 140, 180 150, 240 170 S360 205, 420 190 S500 165, 540 180" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M80 210 H520" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <path d="M120 120 H240" stroke="var(--accent-blue)" strokeWidth="0.9" opacity="0.8" />
    </svg>
  );
}

export function FaultLineDivider({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 120"
      role="img"
      aria-label="Fault line divider"
    >
      <rect width="600" height="120" fill="transparent" />
      <path d="M40 60 H260" stroke="currentColor" strokeWidth="1" />
      <path d="M340 60 H560" stroke="currentColor" strokeWidth="1" />
      <path d="M290 20 L310 100" stroke="currentColor" strokeWidth="1.1" />
      <path d="M300 20 L320 100" stroke="var(--accent-sea)" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}

export function SedimentLayers({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 220"
      role="img"
      aria-label="Sediment layer linework"
    >
      <rect width="600" height="220" fill="transparent" />
      <path d="M60 60 C140 50, 200 70, 280 65 S420 70, 540 58" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M60 110 C160 100, 230 120, 320 115 S460 120, 540 108" stroke="currentColor" strokeWidth="0.9" opacity="0.8" fill="none" />
      <path d="M60 160 C180 150, 260 170, 340 165 S470 170, 540 158" stroke="currentColor" strokeWidth="0.8" opacity="0.6" fill="none" />
      <path d="M120 135 H240" stroke="var(--accent-blue)" strokeWidth="0.8" opacity="0.75" />
    </svg>
  );
}
