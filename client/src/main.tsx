import ReactDOM from 'react-dom/client';
import './index.css' 

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainScreen from './pages/MainScreen';

const router = createBrowserRouter([{ path: '/', element: <MainScreen /> }]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

