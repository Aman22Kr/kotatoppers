import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, BookOpen, GraduationCap, FileText, Compass, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { facultyData } from '../data/facultyData';
import { testPackagesData } from '../data/testSeriesData';
import { studyMaterialData } from '../data/studyMaterialData';
import { kotaGuideTopics } from '../data/kotaGuideData';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [searchHistory, setSearchHistory] = useLocalStorage<string[]>('kotatoppers_search_history', [
    'JEE Advanced Dropper',
    'Physics Formula Handbook',
    'NEET 720 Mock Series',
    'Kota Hostels'
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle if handled externally
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedCourses = coursesData.filter(
      c => c.title.toLowerCase().includes(q) ||
           c.targetExam.toLowerCase().includes(q) ||
           c.features.some(f => f.toLowerCase().includes(q))
    ).map(c => ({
      type: 'Course' as const,
      title: c.title,
      subtitle: `${c.targetExam} · ${c.mode}`,
      link: `/courses/${c.slug}`
    }));

    const matchedFaculty = facultyData.filter(
      f => f.name.toLowerCase().includes(q) ||
           f.department.toLowerCase().includes(q) ||
           f.specialization.toLowerCase().includes(q)
    ).map(f => ({
      type: 'Faculty' as const,
      title: f.name,
      subtitle: `${f.title} · ${f.kotaExperience}`,
      link: `/faculty`
    }));

    const matchedTests = testPackagesData.filter(
      t => t.title.toLowerCase().includes(q) ||
           t.targetExam.toLowerCase().includes(q)
    ).map(t => ({
      type: 'Test Series' as const,
      title: t.title,
      subtitle: `${t.testsCount} Tests · ${t.targetExam}`,
      link: `/test-series`
    }));

    const matchedMaterials = studyMaterialData.filter(
      m => m.title.toLowerCase().includes(q) ||
           m.subject.toLowerCase().includes(q) ||
           m.category.toLowerCase().includes(q)
    ).map(m => ({
      type: 'Study Material' as const,
      title: m.title,
      subtitle: `${m.subject} · ${m.category} (${m.fileSize})`,
      link: `/study-material`
    }));

    const matchedGuide = kotaGuideTopics.filter(
      g => g.title.toLowerCase().includes(q) ||
           g.summary.toLowerCase().includes(q) ||
           g.category.toLowerCase().includes(q)
    ).map(g => ({
      type: 'Kota Guide' as const,
      title: g.title,
      subtitle: g.category,
      link: `/kota-guide`
    }));

    return [...matchedCourses, ...matchedTests, ...matchedMaterials, ...matchedFaculty, ...matchedGuide];
  }, [query]);

  const handleSelect = (item: { title: string; link: string }) => {
    if (query.trim() && !searchHistory.includes(query.trim())) {
      setSearchHistory([query.trim(), ...searchHistory.slice(0, 4)]);
    }
    onClose();
    navigate(item.link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search courses, test series, faculty, Kota hostels, formula notes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-700 px-1 py-0.5"
            >
              Clear
            </button>
          ) : (
            <kbd className="hidden sm:inline-block text-[11px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
              ESC
            </kbd>
          )}
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results or Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-slate-100">
          {filteredResults === null ? (
            <div className="space-y-4">
              {searchHistory.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Recent Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {searchHistory.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setQuery(item)}
                        className="text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Popular Categories
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => { setQuery('JEE'); }}
                    className="p-2.5 text-left rounded-lg border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 flex items-center justify-between transition-colors"
                  >
                    <span>IIT JEE Main & Advanced</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    onClick={() => { setQuery('NEET'); }}
                    className="p-2.5 text-left rounded-lg border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 flex items-center justify-between transition-colors"
                  >
                    <span>NEET Medical 720</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    onClick={() => { setQuery('Formula'); }}
                    className="p-2.5 text-left rounded-lg border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 flex items-center justify-between transition-colors"
                  >
                    <span>Formula Handbooks</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <button
                    onClick={() => { setQuery('Hostel'); }}
                    className="p-2.5 text-left rounded-lg border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 flex items-center justify-between transition-colors"
                  >
                    <span>Kota Hostel & Life Guide</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            </div>
          ) : filteredResults.length > 0 ? (
            <div className="space-y-1">
              <div className="text-xs text-slate-500 pb-2">
                Found {filteredResults.length} matching resources:
              </div>
              {filteredResults.map((item, idx) => {
                const getIcon = () => {
                  switch (item.type) {
                    case 'Course': return <BookOpen className="w-4 h-4 text-amber-600" />;
                    case 'Faculty': return <GraduationCap className="w-4 h-4 text-blue-600" />;
                    case 'Test Series': return <FileText className="w-4 h-4 text-emerald-600" />;
                    case 'Kota Guide': return <Compass className="w-4 h-4 text-purple-600" />;
                    default: return <FileText className="w-4 h-4 text-slate-500" />;
                  }
                };

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(item)}
                    className="w-full text-left p-3 hover:bg-slate-50 rounded-lg flex items-center justify-between gap-3 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="p-1.5 bg-slate-100 rounded-md shrink-0 mt-0.5 group-hover:bg-white group-hover:shadow-xs transition-all">
                        {getIcon()}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-900 truncate group-hover:text-amber-700">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 truncate mt-0.5">
                          <span className="font-medium text-slate-700">{item.type}</span> · {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm">No results found for "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for 'JEE', 'NEET', 'Formula', 'Physics', or 'Hostel'.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
