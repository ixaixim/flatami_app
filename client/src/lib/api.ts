export type AuthUser = {
  id?: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt?: string;
};

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

async function request<T>(path: string, init?: RequestInit) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    let message = 'Request failed';
    try {
      const data = await res.json();
      message = data?.message || message;
    } catch {}
    throw new Error(message);
  }
  return (await res.json()) as T;
}

export async function apiRegister(name: string, email: string, password: string) {
  return request<{ token: string }>(`/api/auth/register`, {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
}

export async function apiLogin(email: string, password: string) {
  return request<{ token: string }>(`/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function apiMe(token: string) {
  const res = await fetch(`${BASE_URL}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    let message = 'Unauthorized';
    try {
      const data = await res.json();
      message = data?.message || message;
    } catch {}
    throw new Error(message);
  }
  const data = (await res.json()) as { user: AuthUser };
  return data.user;
}

