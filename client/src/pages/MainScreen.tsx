import { Header } from '../components/molecules/Header';
import { Hero } from '../components/organisms/Hero';
import { MainActions } from '../components/organisms/MainActions';
import { Features } from '../components/organisms/Features';
import { PromoVideo } from '../components/organisms/PromoVideo';
import { Faq } from '../components/organisms/Faq';
import { Footer } from '../components/molecules/Footer';

export default function MainScreen() {
  // If you have auth later, pass the real user: <Header user={currentUser} />
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section
          className="relative min-h-[60vh]"
          style={{
            backgroundImage: "url('/public/backgrounds/cozy_apartment_background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="mx-auto mt-10 max-w-6xl px-4">
            <MainActions />
          </div>
          <div className="relative">
            <Features />
          </div>
        </section>
        <PromoVideo />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

