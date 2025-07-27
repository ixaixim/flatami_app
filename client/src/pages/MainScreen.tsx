import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/molecules/Header';
import { MainActions } from '../components/organisms/MainActions';

export default function MainScreen() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-bold tracking-tight">FlataMi</h1>
        <MainActions />
      </main>

      <footer className="py-4 text-center">
        <Link to="/auth" className="text-sm text-gray-500">
          Login / Sign Up
        </Link>
      </footer>
    </div>
  );
}
