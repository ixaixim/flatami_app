import { Link } from 'react-router-dom';
// If you want Radix Select later, install @radix-ui/react-select and swap the <select> blocks.

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-sky-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Find your next home, flatmate, or apartment
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Smart search, verified listings, and built‑in chat to seal the deal faster.
          </p>
        </div>
        {/* TODO: tackle this text visibility */}

        {/* Search bar */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
          <form
            className="flex flex-col gap-3 md:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const formData = new FormData(form);
              const type = formData.get('type');
              const params = new URLSearchParams(formData as any).toString();
              if (type === 'flatmate') {
                window.location.href = `/flatmates?${params}`;
              } else {
                window.location.href = `/search?${params}`;
              }
            }}
          >
            <input
              name="q"
              placeholder="City, district, or address"
              className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <select
              name="type"
              className="rounded-xl border border-gray-200 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              defaultValue="apartment"
            >
              <option value="apartment">Apartment</option>
              <option value="flatmate">Flatmate</option>
            </select>
            <select
              name="price"
              className="rounded-xl border border-gray-200 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              defaultValue=""
            >
              <option value="">Any price</option>
              <option value="0-800">€0–800</option>
              <option value="800-1200">€800–1200</option>
              <option value="1200-2000">€1200–2000</option>
              <option value="2000+">€2000+</option>
            </select>
            <button
              type="submit"
              className="rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white hover:bg-rose-700"
            >
              Start Searching
            </button>
          </form>
          {/* Quick actions for mobile */}
          <div className="mt-3 flex gap-2 md:hidden">
            <Link to="/flatmates" className="flex-1 rounded-xl border px-3 py-2 text-center text-sm">
              Find Flatmate
            </Link>
            <Link to="/search" className="flex-1 rounded-xl border px-3 py-2 text-center text-sm">
              Find Apartment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
