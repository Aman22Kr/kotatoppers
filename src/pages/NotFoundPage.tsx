import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, BookOpen, ArrowLeft } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

interface NotFoundPageProps {
  onOpenDemo: (title?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onOpenDemo }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-lg space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
            <Compass className="w-8 h-8" />
          </div>

          <div className="text-4xl font-black text-slate-900">404</div>

          <h1 className="text-xl font-bold text-slate-900">
            Page Not Found
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The link you followed may be broken or the syllabus batch might have migrated. Let's get you back on track.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
            <Link
              to="/"
              className="px-4 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/courses"
              className="px-4 py-2.5 bg-amber-600 text-white rounded-lg text-xs font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Browse Batches</span>
            </Link>
          </div>
        </div>
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo('404 Page Admission')} />
    </div>
  );
};
