import * as ScrollArea from '@radix-ui/react-scroll-area';
import { type Flatmate, FlatmateCard } from './FlatmateCard';

export function FlatmateFeed({ data }: { data: Flatmate[] }) {
  return (
    <ScrollArea.Root className='h-full w-full rounded-xl-clip border border-slate-300 bg-white'>
      <ScrollArea.Viewport className='h-full w-full p-4 flex flex-col gap-4'>
        {data.map((item) => (
          <FlatmateCard key={item.id} flatmate={item} />
        ))}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation='vertical'
        className='flex select-none touch-none p-0.5 bg-transparent hover:bg-slate-100'
      >
        <ScrollArea.Thumb className='flex-1 rounded-full bg-slate-400' />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
