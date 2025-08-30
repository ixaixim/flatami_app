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
  { path: '/chat', element: <ChatPage /> },
  { path: '/profile', element: <ProfilePage /> },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
