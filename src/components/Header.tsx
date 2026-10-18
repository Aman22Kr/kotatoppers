import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Phone, UserCheck, GraduationCap } from 'lucide-react';

interface HeaderProps {
  onOpenDemo: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Courses', path: '/courses' },
    { label: 'Test Series', path: '/test-series' },
    { label: 'Study Material', path: '/study-material' },
    { label: 'Faculty', path: '/faculty' },
    { label: 'Kota Guide', path: '/kota-guide' },
    { label: 'Results', path: '/results' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Helpline Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Kota Admissions & 24/7 Helpline: </span>
            <a href="tel:+919602281833" className="font-semibold text-white hover:underline">
              +91 9602281833
            </a>
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">
            Campus: New Rajeev Gandhi Nagar, Kota (Raj.)
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Student Portal</span>
          </Link>
          <span className="text-slate-600">|</span>
          <Link
            to="/contact"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Main Navigation Row - Adhering to the Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <span className="text-amber-600 font-black">Kota</span>
          <span>Toppers</span>
        </Link>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                isActive(item.path)
                  ? 'text-slate-900 font-semibold border-b-2 border-amber-600'
                  : 'hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Zone 3: 1 primary action CTA + Quick search affordance */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Search KotaToppers resources (Ctrl+K)"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenDemo}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book Free Demo
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-amber-50 text-amber-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Student Portal / Saved Items</span>
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg text-sm text-center cursor-pointer"
            >
              Book Free Demo Class
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
