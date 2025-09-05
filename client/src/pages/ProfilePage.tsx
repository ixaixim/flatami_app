import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ConfirmDialog } from '../components/shared/ConfirmDialog';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [logoutOpen, setLogoutOpen] = useState(false);
  if (loading) {
    return (
      <div className="mx-auto max-w-3xl p-6">
        <p className="text-slate-600">Loading your profile…</p>
      </div>
    );
  }
  if (!user) {
    return (
      <div className="mx-auto max-w-3xl p-6">
        <h1 className="text-2xl font-bold">You’re not logged in</h1>
        <p className="mt-2 text-slate-600">
          Please <Link to="/auth" className="text-rose-600 underline">log in</Link> to view your profile.
        </p>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="flex items-center gap-4">
        <img
          src={
            user.avatarUrl ??
            `https://api.dicebear.com/9.x/identicon/svg?seed=${encodeURIComponent(user.name)}`
          }
          alt={user.name}
          className="h-16 w-16 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-slate-600">{user.email}</p>
        </div>
      </div>
      <div className="mt-6 rounded-xl border bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold">My Posts</h2>
        <p className="mt-1 text-sm text-slate-600">Coming soon…</p>
      </div>
      <div className="mt-8">
        <button
          type="button"
          onClick={() => {
            logout();
            setLogoutOpen(true);
          }}
          className="w-full rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-100"
        >
          Log Out
        </button>
      </div>
      <ConfirmDialog
        open={logoutOpen}
        onOpenChange={(o) => {
          setLogoutOpen(o);
          if (!o) navigate('/');
        }}
        title="You have been logged out"
        description="Come back soon!"
        confirmLabel="OK"
      />
    </div>
  );
}
