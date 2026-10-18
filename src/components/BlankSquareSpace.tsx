import React from 'react';

interface BlankSquareSpaceProps {
  className?: string;
  label?: string;
  aspectSquare?: boolean;
}

/**
 * Replaces any YouTube video link or thumbnail area with a clean blank square space
 * as specified in project requirements:
 * "If there is an area for a YouTube video link or thumbnail that takes you to YouTube,
 * just put a blank square space there."
 */
export const BlankSquareSpace: React.FC<BlankSquareSpaceProps> = ({
  className = '',
  label,
  aspectSquare = true,
}) => {
  return (
    <div
      className={`bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden ${
        aspectSquare ? 'aspect-square w-full' : 'w-full h-full min-h-[180px]'
      } ${className}`}
      aria-label={label || 'Video placeholder area'}
    >
      {/* Intentionally blank square space as required */}
      <div className="absolute inset-0 bg-slate-50/50" />
      {label && (
        <span className="relative z-10 text-xs font-medium text-slate-400 select-none px-3 py-1 bg-white/80 rounded border border-slate-200">
          {label}
        </span>
      )}
    </div>
  );
};
