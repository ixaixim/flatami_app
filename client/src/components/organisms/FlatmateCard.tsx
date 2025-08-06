import { AvatarPlaceholder } from '../atoms/AvatarPlaceholder';
import { InfoRow } from '../molecules/InfoRow';

export type Flatmate = {
  id: string;
  name: string;
  budget: number;
  preferredArea: string;
  avatarUrl?: string;
};

export function FlatmateCard({ flatmate }: { flatmate: Flatmate }) {
  return (
    <article className='flex gap-4 rounded-2xl border border-slate-300 bg-white p-4 shadow-sm'>
      <AvatarPlaceholder uri={flatmate.avatarUrl} />
      <div className='flex flex-1 flex-col'>
        <h3 className='text-base font-semibold text-slate-700'>
          {flatmate.name}
        </h3>
        <InfoRow price={flatmate.budget} location={flatmate.preferredArea} />
      </div>
    </article>
  );
}
