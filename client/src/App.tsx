import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

// import React from 'react';
// import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
// import MainPage from './pages/MainPage';
// import ProfilePage from './pages/ProfilePage';
// import LookForFlatPage from './pages/LookForFlatPage';
// import LookForFlatmatePage from './pages/LookForFlatmatePage';
// import ApartmentOffersListPage from './pages/ApartmentOffersListPage';
// import FlatmateOffersListPage from './pages/FlatmateOffersListPage';
// import ApartmentOfferPage from './pages/ApartmentOfferPage';
// import FlatmateOfferPage from './pages/FlatmateOfferPage';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <nav>
//           <Link to="/">Home</Link> |{' '}
//           <Link to="/profile">Profile</Link> |{' '}
//           <Link to="/look-for-flat">Look for Flat</Link> |{' '}
//           <Link to="/look-for-flatmate">Look for Flatmate</Link> |{' '}
//           <Link to="/apartment-offers">Apartment Offers</Link> |{' '}
//           <Link to="/flatmate-offers">Flatmate Offers</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/look-for-flat" element={<LookForFlatPage />} />
//           <Route path="/look-for-flatmate" element={<LookForFlatmatePage />} />
//           <Route
//             path="/apartment-offers"
//             element={<ApartmentOffersListPage />}
//           />
//           <Route
//             path="/flatmate-offers"
//             element={<FlatmateOffersListPage />}
//           />
//           <Route path="/apartment-offer" element={<ApartmentOfferPage />} />
//           <Route path="/flatmate-offer" element={<FlatmateOfferPage />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
