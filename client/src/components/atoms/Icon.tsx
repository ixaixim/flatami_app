import * as LucideIcons from 'lucide-react';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

// Any icon name from lucide-react (e.g. 'Search', 'DollarSign')
export type IconName = keyof typeof LucideIcons;

type Props = {
  name: IconName;
} & ComponentPropsWithoutRef<ElementType>;

export function Icon({ name, ...rest }: Props) {
  const LucideIcon = LucideIcons[name] as ElementType;
  return <LucideIcon size={18} {...rest} />;
}
