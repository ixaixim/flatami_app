import { NavLink } from 'react-router-dom';
import { Icon } from '../atoms/Icon';

type Item = {
  to: string;
  label: string;
  icon: React.ComponentProps<typeof Icon>['name'];
};

const items: Item[] = [
  { to: '/', label: 'Explore', icon: 'Search' },
  { to: '/favs', label: 'Favs', icon: 'Heart' },
  { to: '/create', label: 'Create', icon: 'Plus' },
  { to: '/chat', label: 'Chat', icon: 'MessageSquare' },
  { to: '/profile', label: 'Profile', icon: 'UserRound' },
];

export function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 md:hidden"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                'flex w-16 flex-col items-center gap-1 rounded-xl px-2 py-1 text-xs',
                isActive ? 'text-slate-900' : 'text-slate-600',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  name={item.icon}
                  className={[
                    'h-5 w-5',
                    isActive ? 'text-slate-900' : 'text-slate-500',
                  ].join(' ')}
                />
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;

