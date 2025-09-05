import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, ShieldCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function AuthPage() {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const modeParam = params.get('mode');
  const [mode, setMode] = useState<'login' | 'signup'>(
    modeParam === 'signup' ? 'signup' : 'login',
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
      navigate('/');
    } catch (err: any) {
      setError(err?.message || 'Authentication error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-full items-center justify-center px-4 py-12">
      {/* Soft blue/purple gradient background to match app palette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(42%_42%_at_18%_18%,#e6f0ff_0%,transparent_60%),radial-gradient(42%_42%_at_82%_82%,#efe7ff_0%,transparent_60%)]" />

      <div className="relative w-full max-w-md px-2 sm:px-0">
          {/* Brand Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo-flatami.svg"
              alt="FlatAmi logo"
              className="h-24 md:h-28"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Switch mode */}
          <div className="mb-4 flex justify-center gap-2 text-sm">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`rounded-full px-3 py-1 ${
                mode === 'login'
                  ? 'bg-indigo-600 text-white'
                  : 'text-indigo-700 hover:bg-indigo-50'
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`rounded-full px-3 py-1 ${
                mode === 'signup'
                  ? 'bg-indigo-600 text-white'
                  : 'text-indigo-700 hover:bg-indigo-50'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            {mode === 'signup' && (
              <div>
                <label className="sr-only">Name</label>
                <div className="relative">
                  <input
                    className="peer w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 pl-10 text-sm shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    required
                  />
                  <ShieldCheck className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-500" />
                </div>
              </div>
            )}

            <div>
              <label className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="peer w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 pl-10 text-sm shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-600" />
              </div>
            </div>

            <div>
              <label className="sr-only">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="peer w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 pl-10 text-sm shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  minLength={6}
                />
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-500" />
              </div>
            </div>

            {error && (
              <p className="text-sm text-rose-600" role="alert">
                {error}
              </p>
            )}

            {/* Primary CTA */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-70"
            >
              {submitting ? 'Please wait…' : mode === 'login' ? 'Log In' : 'Sign Up'}
            </button>

            {/* Secondary CTA (switch) */}
            <button
              type="button"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="w-full rounded-xl border border-sky-200 bg-white/60 px-4 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              {mode === 'login' ? 'Sign Up' : 'Have an account? Log In'}
            </button>

            {/* Forgot password placeholder route */}
            <div className="pt-1 text-center">
              <button
                type="button"
                className="text-sm text-gray-600 underline-offset-4 hover:underline"
                onClick={() => alert('Forgot password coming soon')}
              >
                Forgot Password?
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}
