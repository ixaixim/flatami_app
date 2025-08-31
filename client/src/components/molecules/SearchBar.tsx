import { Icon } from '../atoms/Icon';
import { SearchInput } from '../atoms/SearchInput';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <label className='flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 shadow-sm'>
      <Icon name='Search' className='text-slate-500' />
      <SearchInput
        placeholder='Search flat‑shares'
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
// SearchBar: Combined keyword/location inputs for listing queries.
