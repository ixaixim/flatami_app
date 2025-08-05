export function PriceText({ value }: { value: number | string }) {
  const display = typeof value === 'number' ? `$${value}` : value;
  return <span className='font-medium text-slate-700'>{display}</span>;
}
