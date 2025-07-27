import { NavLink } from 'react-router-dom';


export const Header = () => (
  <header className="flex justify-end p-4">
    <NavLink to="/auth" className="text-sm font-semibold text-gray-700">
      Login / Sign Up
    </NavLink>
  </header>
);
