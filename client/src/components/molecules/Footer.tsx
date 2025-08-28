import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:grid-cols-3 md:grid-cols-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900">About</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/about" className="hover:text-gray-900">Our story</Link></li>
            <li><Link to="/careers" className="hover:text-gray-900">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-gray-900">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/help" className="hover:text-gray-900">Help Center</Link></li>
            <li><Link to="/safety" className="hover:text-gray-900">Safety</Link></li>
            <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/terms" className="hover:text-gray-900">Terms</Link></li>
            <li><Link to="/privacy" className="hover:text-gray-900">Privacy</Link></li>
            <li><Link to="/cookies" className="hover:text-gray-900">Cookies</Link></li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-1">
          <h4 className="text-sm font-semibold text-gray-900">Get started</h4>
          <p className="mt-3 text-sm text-gray-600">Create an account and post your first listing today.</p>
          <Link
            to="/auth"
            className="mt-3 inline-block rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
          >
            Join FlataMi
          </Link>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} FlataMi</span>
          <span>Built with ❤️ in MERN</span>
        </div>
      </div>
    </footer>
  );
}
// Footer: App footer with links, branding, and secondary navigation.
