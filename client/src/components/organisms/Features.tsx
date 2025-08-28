export function Features() {
  const items = [
    {
      title: 'Verified Listings',
      desc: 'Owner verification and anti‑spam checks keep the feed clean.',
    },
    {
      title: 'Built‑in Chat',
      desc: 'Message hosts and flatmates directly — no phone number needed.',
    },
    {
      title: 'Smart Matching',
      desc: 'Filters + preferences help you find people you’ll actually like.',
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14">
      <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">Why FlataMi?</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
// Features: Highlights key app benefits in a grid of feature items.
