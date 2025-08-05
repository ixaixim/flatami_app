import ReactDOM from 'react-dom/client';
import './index.css' 

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import SearchPage from './pages/SearchPage'

const router = createBrowserRouter([
  { path: '/', element: <MainScreen /> },
  { path: '/search', element: <SearchPage /> },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

