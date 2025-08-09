import * as Accordion from '@radix-ui/react-accordion';

const faqs = [
  { q: 'What is FlataMi?', a: 'FlataMi helps you find verified flats and compatible flatmates.' },
  { q: 'How do I post a listing?', a: 'Sign up and use the "Add Listing" button to share your space.' },
  { q: 'Is FlataMi free?', a: 'Yes, browsing and posting listings are free of charge.' },
];

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out">
      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Faq() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-slate-500">Quick answers to common questions about using FlataMi.</p>
      </div>

      <div className="relative mt-8">
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-50 via-indigo-50 to-white" />

        <Accordion.Root
          type="single"
          collapsible
          className="mt-2 overflow-hidden rounded-2xl border border-slate-100 bg-white/90 shadow-lg backdrop-blur-sm divide-y divide-slate-100"
        >
          {faqs.map((item, i) => (
            <Accordion.Item key={item.q} value={`item-${i}`} className="group">
              <Accordion.Header>
                <Accordion.Trigger
                  className="
                    flex w-full items-center justify-between gap-4 px-6 py-5 text-left
                    text-[17px] font-medium text-slate-700
                    transition-all duration-300 ease-out
                    hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                    data-[state=open]:bg-white data-[state=open]:text-slate-900
                  "
                >
                  <span>{item.q}</span>
                  <span
                    className="text-slate-400 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-slate-500"
                    aria-hidden
                  >
                    <Chevron />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content
                className="
                  overflow-hidden bg-transparent px-6
                  data-[state=open]:animate-accordion-down
                  data-[state=closed]:animate-accordion-up
                "
              >
                <div className="py-4">
                  <p className="text-[15px] leading-7 text-slate-600">
                    {item.a}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
