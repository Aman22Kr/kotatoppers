import React, { useState } from 'react';
import { toppersData, Topper } from '../data/toppersData';
import { Award, Star, Quote, ChevronRight } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

interface ResultsPageProps {
  onOpenDemo: (title?: string) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onOpenDemo }) => {
  const [selectedExam, setSelectedExam] = useState<string>('All');

  const filteredToppers = toppersData.filter(t => {
    if (selectedExam === 'All') return true;
    return t.exam.includes(selectedExam);
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Hall of Fame & Track Record
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            KotaToppers Hall of Fame
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            Real ranks, real hard work, and authentic Kota pedagogy. Meet the students who transformed their dedication into Top All India Ranks.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {(['All', 'JEE Advanced', 'JEE Main', 'NEET (UG)', 'Olympiad'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setSelectedExam(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedExam === tab
                    ? 'bg-amber-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredToppers.map(topper => (
            <div
              key={topper.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all hover:border-amber-400"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-amber-700">{topper.exam} ({topper.year})</span>
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    {topper.badge}
                  </span>
                </div>

                <div className="text-2xl font-black text-slate-900 tabular-nums">
                  {topper.rankOrScore}
                </div>

                <div className="text-base font-bold text-slate-900 mt-1">
                  {topper.name}
                </div>

                <div className="text-xs text-slate-500 mt-0.5">
                  Admitted to: <span className="font-semibold text-slate-800">{topper.collegeAdmitted}</span>
                </div>
                <div className="text-xs text-slate-400">
                  Hometown: {topper.hometown}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-600 italic leading-relaxed">
                    <Quote className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>"{topper.testimonial}"</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Batch: {topper.courseTaken}</span>
                <button
                  onClick={() => onOpenDemo(`Join similar batch as ${topper.name}`)}
                  className="text-amber-700 font-semibold hover:underline"
                >
                  Join Batch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo('Toppers Batch Admission')} />
    </div>
  );
};
