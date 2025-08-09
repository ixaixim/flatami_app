export function PromoVideo() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <video
          className="w-full rounded-lg shadow"
          controls
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        Learn how FlataMi can help you find your perfect flatmate.
      </p>
    </section>
  );
}

