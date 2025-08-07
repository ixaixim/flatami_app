// InfoItem component for icon + text pair
import { ReactNode } from 'react';

interface InfoItemProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}

export function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <li className="flex items-center text-gray-700">
      <span className="mr-2">{icon}</span>
      <span className="font-medium">{label}:</span>&nbsp;{value}
    </li>
  );
}
