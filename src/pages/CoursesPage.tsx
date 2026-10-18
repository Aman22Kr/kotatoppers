import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Check } from 'lucide-react';
import { coursesData, Course } from '../data/coursesData';
import { CourseCard } from '../components/CourseCard';
import { AdBanner } from '../components/AdBanner';

interface CoursesPageProps {
  onOpenDemo: (courseTitle?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenDemo }) => {
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [selectedMode, setSelectedMode] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchExam = selectedExam === 'All' || course.targetExam === selectedExam;
      const matchMode = selectedMode === 'All' || course.mode.includes(selectedMode);
      const matchQuery = !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.targetClass.toLowerCase().includes(searchQuery.toLowerCase());

      return matchExam && matchMode && matchQuery;
    });
  }, [selectedExam, selectedMode, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Academic Programs 2026-27
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Explore KotaToppers Courses & Batches
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            Choose from comprehensive classroom programs in Kota or immersive live online interactive batches led by veteran Kota HODs.
          </p>

          {/* Quick Filter Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search batches by keyword, class or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-slate-900 text-white placeholder:text-slate-400 rounded-lg border border-slate-700 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full sm:w-auto text-xs py-2 px-3 bg-slate-900 text-slate-200 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="All">All Exams</option>
                <option value="JEE Main & Advanced">JEE Main & Adv</option>
                <option value="NEET Pre-Medical">NEET Medical</option>
                <option value="Foundation">Foundation & Junior</option>
              </select>

              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full sm:w-auto text-xs py-2 px-3 bg-slate-900 text-slate-200 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="All">All Modes</option>
                <option value="Offline">Kota Offline</option>
                <option value="Online">Live Online</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 pb-2 border-b border-slate-200">
          <span>Showing <strong>{filteredCourses.length}</strong> available batches</span>
          {(selectedExam !== 'All' || selectedMode !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedExam('All');
                setSelectedMode('All');
                setSearchQuery('');
              }}
              className="text-amber-700 hover:underline font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onOpenDemo={onOpenDemo}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200 p-8">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No matching batches found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try broadening your search query or reset filters to see all Kota programs.
            </p>
          </div>
        )}
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo('Course Enrollment Scholarship')} />
    </div>
  );
};
