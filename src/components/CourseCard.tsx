import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Star, ArrowRight, Check } from 'lucide-react';
import { Course } from '../data/coursesData';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface CourseCardProps {
  course: Course;
  onOpenDemo?: (courseTitle: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onOpenDemo }) => {
  const [savedCourses, setSavedCourses] = useLocalStorage<string[]>('kotatoppers_saved_courses', []);
  const isSaved = savedCourses.includes(course.id);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSaved) {
      setSavedCourses(savedCourses.filter(id => id !== course.id));
    } else {
      setSavedCourses([...savedCourses, course.id]);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-amber-400/80 transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden group">
      <div className="p-6">
        {/* Top unboxed metadata row */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <div className="flex items-center gap-1.5 font-medium text-amber-700">
            <span>{course.targetExam}</span>
            <span aria-hidden="true">·</span>
            <span>{course.targetClass}</span>
          </div>

          <button
            onClick={toggleSave}
            className={`p-1.5 rounded-md transition-colors ${
              isSaved ? 'text-amber-600 bg-amber-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
            title={isSaved ? 'Remove from saved' : 'Save course'}
            aria-label="Bookmark course"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`} />
          </button>
        </div>

        {/* Course Title */}
        <Link to={`/courses/${course.slug}`}>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </Link>
        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {course.subtitle}
        </p>

        {/* Clean unboxed secondary metadata */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
          <span>{course.mode}</span>
          <span aria-hidden="true">·</span>
          <span>{course.duration}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-0.5 text-slate-700 font-medium">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>{course.rating.toFixed(1)}</span>
          </span>
        </div>

        {/* Features preview */}
        <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
          {course.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Pricing and Actions */}
      <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <div className="text-xs text-slate-400 line-through">
            ₹{course.originalPriceINR.toLocaleString('en-IN')}
          </div>
          <div className="text-base font-extrabold text-slate-900">
            ₹{course.priceINR.toLocaleString('en-IN')}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onOpenDemo && (
            <button
              onClick={() => onOpenDemo(course.title)}
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 px-2.5 py-1.5 rounded hover:bg-amber-100/50 transition-colors cursor-pointer"
            >
              Free Demo
            </button>
          )}
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
