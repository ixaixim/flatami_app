import { Outlet } from 'react-router-dom';
import BottomNav from '../components/molecules/BottomNav';

export default function RootLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <div className="flex-1">
        <Outlet />
      </div>
      {/* Global bottom navigation on mobile */}
      <BottomNav />
    </div>
  );
}

