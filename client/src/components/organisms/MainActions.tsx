import { Link } from 'react-router-dom';

export function MainActions() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
      <Link
        to="/flatmates"
        className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Look for Flatmate</h3>
          <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">Popular</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Post your profile and match with people who vibe with your lifestyle.
        </p>
        <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-rose-50 to-rose-100 transition group-hover:scale-[1.01]" />
      </Link>

      <Link
        to="/search"
        className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
      >
        <h3 className="text-lg font-semibold text-gray-900">Look for Apartment</h3>
        <p className="mt-2 text-sm text-gray-600">Browse verified listings with transparent details.</p>
        <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 transition group-hover:scale-[1.01]" />
      </Link>
    </section>
  );
}
// MainActions: Prominent entry actions to browse flats or find flatmates.
