import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ConfirmDialog } from '../shared/ConfirmDialog';

export type User = { id?: string; name: string; avatarUrl?: string } | null;

export function Header(_props: { user?: User }) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

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
            to="/search"
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
        <div className="relative flex items-center gap-3" ref={menuRef}>
          {!user ? (
            <Link
              to="/auth"
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Login / Sign Up
            </Link>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100"
              >
                <img
                  src={
                    user.avatarUrl ??
                    `https://api.dicebear.com/9.x/identicon/svg?seed=${encodeURIComponent(user.name)}`
                  }
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="hidden text-sm font-medium text-gray-700 sm:inline">{user.name}</span>
              </button>
              {open && (
                <div className="absolute right-0 top-12 w-44 overflow-hidden rounded-md border bg-white shadow-md">
                  <button
                    type="button"
                    className="block w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                    onClick={() => {
                      setOpen(false);
                      navigate('/profile');
                    }}
                  >
                    Profile
                  </button>
                  <button
                    type="button"
                    className="block w-full px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50"
                    onClick={() => {
                      setOpen(false);
                      logout();
                      setLogoutDialog(true);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        <ConfirmDialog
          open={logoutDialog}
          onOpenChange={(o) => {
            setLogoutDialog(o);
            if (!o) navigate('/');
          }}
          title="You have been logged out"
          description="Come back soon!"
          confirmLabel="OK"
        />
      </div>
    </header>
  );
}
// Header: Top navigation/header bar with branding and actions.
