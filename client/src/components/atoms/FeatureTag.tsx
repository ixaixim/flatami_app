// FeatureTag component for feature badges
interface FeatureTagProps {
  label: string;
}

export function FeatureTag({ label }: FeatureTagProps) {
  return (
    <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
      {label}
    </span>
  );
}
