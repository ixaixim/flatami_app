import { Link, useParams } from 'react-router-dom';
import { CurrencyEuroIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ImageCarousel, InfoItem } from "../components/molecules";
import { FeatureTag } from "../components/atoms";
import { sampleListings } from '../data/sampleListings';

function ApartmentOfferPage() {
  const { id } = useParams();
  const apartment = sampleListings.find(listing => listing.id === id);

  if (!apartment) {
    return <div className="max-w-4xl mx-auto p-4">Apartment not found</div>;
  }

  return (
    <main className="min-h-dvh bg-slate-50">
      <div className="mx-auto max-w-5xl p-4 md:p-6">
        <div className="mb-3 flex items-center justify-between">
          <Link to="/search" className="text-sm text-slate-600 hover:text-slate-900">← Back to results</Link>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
            <CurrencyEuroIcon className="h-5 w-5" /> {apartment.price}€ / month
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow ring-1 ring-slate-200">
          <div className="p-0">
            <ImageCarousel images={apartment.images} title={apartment.title} />
          </div>

          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h1 className="mb-1 text-2xl font-bold text-slate-900">{apartment.title}</h1>
              <div className="mb-4 flex items-center gap-2 text-slate-600">
                <MapPinIcon className="h-5 w-5" />
                <span>{apartment.district}</span>
              </div>

              {apartment.features && apartment.features.length > 0 && (
                <div className="mb-6">
                  <div className="mb-2 text-sm font-semibold text-slate-800">Features</div>
                  <div className="flex flex-wrap gap-2">
                    {apartment.features.map((feat) => (
                      <FeatureTag key={feat} label={feat} />
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className="mb-2 text-sm font-semibold text-slate-800">Description</div>
                <p className="leading-relaxed text-slate-700">{apartment.description}</p>
              </div>
            </div>

            <aside className="md:col-span-1">
              <div className="sticky top-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <ul className="mb-4 space-y-2">
                  <InfoItem icon={<CurrencyEuroIcon className="h-5 w-5 text-gray-700" />} label="Rent" value={`${apartment.price}€ / month`} />
                  <InfoItem icon={<MapPinIcon className="h-5 w-5 text-gray-700" />} label="District" value={apartment.district} />
                </ul>
                <button type="button" className="w-full rounded-md bg-blue-600 py-3 font-medium text-white shadow hover:bg-blue-700">Contact Host</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ApartmentOfferPage;


