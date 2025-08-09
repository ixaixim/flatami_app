import ReactDOM from 'react-dom/client';
import './index.css' 
import "swiper/css";
import "swiper/css/pagination";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import SearchPage from './pages/SearchPage'
import FlatmateSearchPage from './pages/FlatmateSearchPage';
import ApartmentOfferPage from './pages/ApartmentOfferPage';

const router = createBrowserRouter([
  { path: '/', element: <MainScreen /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/flatmates', element: <FlatmateSearchPage /> },
  { path: '/listings/:id', element: <ApartmentOfferPage /> },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

