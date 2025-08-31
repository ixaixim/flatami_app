import ReactDOM from 'react-dom/client';
import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import SearchPage from './pages/SearchPage';
import FlatmateSearchPage from './pages/FlatmateSearchPage';
import ApartmentOfferPage from './pages/ApartmentOfferPage';
import FlatmateOfferPage from './pages/FlatmateOfferPage';
import FavsPage from './pages/FavsPage';
import CreatePage from './pages/CreatePage';
import CreateOfferStart from './pages/CreateOfferStart';
import CreateSearchStart from './pages/CreateSearchStart';
import OfferWizardLayout from './pages/offer/OfferWizardLayout';
import TypeStep from './pages/offer/TypeStep';
import LocationStep from './pages/offer/LocationStep';
import TimePeriodStep from './pages/offer/TimePeriodStep';
import PlaceholderStep from './pages/offer/PlaceholderStep';
import RoomsStep from './pages/offer/RoomsStep';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
  { path: '/', element: <MainScreen /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/flatmates', element: <FlatmateSearchPage /> },
  { path: '/flatmates/:id', element: <FlatmateOfferPage /> },
  { path: '/listings/:id', element: <ApartmentOfferPage /> },
  { path: '/favs', element: <FavsPage /> },
  { path: '/create', element: <CreatePage /> },
  // Redirect entry to nested wizard (back-compat)
  { path: '/create/offer/start', element: <CreateOfferStart /> },
  {
    path: '/create/offer',
    element: <OfferWizardLayout />,
    children: [
      { index: true, element: <TypeStep /> },
      { path: 'location', element: <LocationStep /> },
      { path: 'availability', element: <TimePeriodStep /> },
      { path: 'rooms', element: <RoomsStep /> },
      { path: 'rent', element: <PlaceholderStep /> },
      { path: 'bills', element: <PlaceholderStep /> },
      { path: 'availability', element: <PlaceholderStep /> },
      { path: 'amenities', element: <PlaceholderStep /> },
      { path: 'photos', element: <PlaceholderStep /> },
      { path: 'description', element: <PlaceholderStep /> },
      { path: 'review', element: <PlaceholderStep /> },
    ],
  },
  { path: '/create/search', element: <CreateSearchStart /> },
  { path: '/chat', element: <ChatPage /> },
  { path: '/profile', element: <ProfilePage /> },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
