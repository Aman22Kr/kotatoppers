import React, { useState } from 'react';
import { Sparkles, X, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AdBannerProps {
  onOpenDemo?: () => void;
}

export const AdBanner: React.FC<AdBannerProps> = ({ onOpenDemo }) => {
  const [isDismissed, setIsDismissed] = useLocalStorage<boolean>('kotatoppers_ad_dismissed', false);
  const [minimized, setMinimized] = useState<boolean>(false);

  if (isDismissed) {
    return (
      <div className="w-full bg-slate-100 py-1.5 px-4 text-center border-t border-slate-200 text-xs text-slate-500 flex items-center justify-center gap-2">
        <span>Advertisement hidden.</span>
        <button
          onClick={() => setIsDismissed(false)}
          className="text-amber-700 hover:underline font-medium"
        >
          Restore partner announcement
        </button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Partner Announcement and Advertisement"
      className="w-full border-t border-amber-200 bg-linear-to-r from-amber-50 via-orange-50/60 to-amber-50 text-slate-900 py-3.5 px-4 sm:px-6 relative shadow-inner"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Award className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/90 px-1.5 py-0.5 rounded">
                ADVERTISEMENT
              </span>
              <span className="font-semibold text-slate-900">
                KotaToppers All India Scholarship Admission Test (K-SAT 2027)
              </span>
            </div>
            <p className="text-slate-600 text-xs mt-0.5">
              Secure up to 90% tuition fee waiver for IIT JEE, NEET & Foundation Classroom batches. Next national test slot this Sunday!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
          <button
            onClick={onOpenDemo}
            className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md text-xs transition-colors flex items-center gap-1.5 shadow-xs whitespace-nowrap cursor-pointer"
          >
            <span>Register Free for K-SAT</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-amber-200/50 transition-colors"
            title="Dismiss ad"
            aria-label="Dismiss ad banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
