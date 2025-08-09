import { NavLink, Link } from 'react-router-dom';

export type User = { id: string; name: string; avatarUrl?: string } | null;

export function Header({ user }: { user?: User }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-rose-500 text-white font-bold">F</div>
          <span className="text-lg font-bold tracking-tight">FlataMi</span>
        </Link>

        {/* Nav */}
        <nav className="hidden gap-6 md:flex">
          <NavLink
            to="/flats"
            className={({ isActive }) =>
              `text-sm font-medium transition hover:text-rose-600 ${isActive ? 'text-rose-600' : 'text-gray-700'}`
            }
          >
            Find Apartment
          </NavLink>
          <NavLink
            to="/flatmates"
            className={({ isActive }) =>
              `text-sm font-medium transition hover:text-rose-600 ${isActive ? 'text-rose-600' : 'text-gray-700'}`
            }
          >
            Find Flatmate
          </NavLink>
          <NavLink
            to="/post"
            className={({ isActive }) =>
              `text-sm font-medium transition hover:text-rose-600 ${isActive ? 'text-rose-600' : 'text-gray-700'}`
            }
          >
            Post Listing
          </NavLink>
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-3">
          {!user ? (
            <Link
              to="/auth"
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Login / Sign Up
            </Link>
          ) : (
            <Link to="/profile" className="flex items-center gap-2">
              <img
                src={user.avatarUrl ?? `https://api.dicebear.com/9.x/identicon/svg?seed=${encodeURIComponent(user.name)}`}
                alt={user.name}
                className="h-8 w-8 rounded-full"
              />
              <span className="hidden text-sm font-medium text-gray-700 sm:inline">{user.name}</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
