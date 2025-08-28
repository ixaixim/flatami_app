// components/atoms/CapacityEmojis.tsx
type Props = {
  capacity: number;
  occupants: { male: number; female: number; other: number };
  className?: string;
};

export function CapacityEmojis({ capacity, occupants, className }: Props) {
  const filled: string[] = [
    ...Array.from({ length: occupants.male }, () => '👨'),
    ...Array.from({ length: occupants.female }, () => '👩'),
    ...Array.from({ length: occupants.other }, () => '🧑'),
  ];
  const empties = Math.max(capacity - filled.length, 0);

  return (
    <div className={`flex items-center gap-1 text-base leading-none ${className ?? ''}`}>
      {filled.map((e, i) => (
        <span key={`f-${i}`} aria-hidden>
          {e}
        </span>
      ))}
      {Array.from({ length: empties }).map((_, i) => (
        <span key={`e-${i}`} className="opacity-30" aria-hidden>
          🧑
        </span>
      ))}
      <span className="sr-only">
        {filled.length} of {capacity} occupants
      </span>
    </div>
  );
}
// CapacityEmojis: Shows occupant/bedroom counts using emoji indicators.
