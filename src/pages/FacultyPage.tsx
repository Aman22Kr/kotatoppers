import React, { useState } from 'react';
import { facultyData, FacultyMember } from '../data/facultyData';
import { Award, BookOpen, GraduationCap, CheckCircle, MessageSquare } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

interface FacultyPageProps {
  onOpenDemo: (title?: string) => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onOpenDemo }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const filteredFaculty = facultyData.filter(fac => {
    if (selectedDept === 'All') return true;
    return fac.department.includes(selectedDept);
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            The Kota Mentorship Legacy
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Master Faculty & HODs
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            Meet the experienced educators who have shaped thousands of doctors and IIT engineers. No junior trainees—every lecture is taken by a proven master.
          </p>

          {/* Department Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {(['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Foundation'] as const).map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-amber-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Faculty Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map(fac => (
            <div
              key={fac.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all hover:border-amber-400"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm shrink-0 border border-slate-700 shadow-sm">
                    {fac.imageFallbackLabel}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {fac.name}
                    </h3>
                    <div className="text-xs text-amber-700 font-medium">
                      {fac.title}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-500 space-y-1 mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{fac.education}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{fac.kotaExperience}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {fac.bio}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Key Highlights:
                  </div>
                  {fac.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Top Result</div>
                  <div className="text-xs font-bold text-slate-900">{fac.topRankProduced}</div>
                </div>
                <button
                  onClick={() => onOpenDemo(`Mentorship with ${fac.name}`)}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Book Demo Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo('Faculty Counseling Session')} />
    </div>
  );
};
