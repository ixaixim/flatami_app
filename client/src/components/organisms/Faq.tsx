export function Faq() {
  const faqs = [
    {
      q: 'What is FlataMi?',
      a: 'FlataMi helps you find verified flats and compatible flatmates.',
    },
    {
      q: 'How do I post a listing?',
      a: 'Sign up and use the "Add Listing" button to share your space.',
    },
    {
      q: 'Is FlataMi free?',
      a: 'Yes, browsing and posting listings are free of charge.',
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14">
      <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
        FAQ
      </h2>
      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <summary className="cursor-pointer text-lg font-medium text-gray-900">
              {item.q}
            </summary>
            <p className="mt-2 text-sm text-gray-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

