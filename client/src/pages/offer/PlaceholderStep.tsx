import { Link, useParams } from 'react-router-dom';

export default function PlaceholderStep() {
  const params = useParams();
  return (
    <div>
      <h2 className='text-xl font-semibold text-slate-900'>
        Placeholder for step: {params['*'] || 'unknown'}
      </h2>
      <p className='mt-2 text-slate-700'>
        We will implement this step next. Continue from
        <Link to="/create/offer" className='ml-1 text-indigo-600 underline'>start</Link>.
      </p>
    </div>
  );
}

