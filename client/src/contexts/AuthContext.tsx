import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { apiLogin, apiMe, apiRegister, type AuthUser } from '../lib/api';

type AuthContextValue = {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() =>
    typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  );
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(!!token);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function loadMe(t: string) {
      try {
        setLoading(true);
        const u = await apiMe(t);
        if (mounted) setUser(u);
      } catch (_e) {
        if (mounted) {
          setUser(null);
          setToken(null);
          localStorage.removeItem('token');
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }
    if (token) loadMe(token);
    return () => {
      mounted = false;
    };
  }, [token]);

  const login = async (email: string, password: string) => {
    setError(null);
    const { token: t } = await apiLogin(email, password);
    setToken(t);
    localStorage.setItem('token', t);
    const u = await apiMe(t);
    setUser(u);
  };

  const signup = async (name: string, email: string, password: string) => {
    setError(null);
    const { token: t } = await apiRegister(name, email, password);
    setToken(t);
    localStorage.setItem('token', t);
    const u = await apiMe(t);
    setUser(u);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  const value = useMemo(
    () => ({ user, token, loading, error, login, signup, logout }),
    [user, token, loading, error],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

