import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ArrowLeft, Check, Star, Calendar, Clock, Bookmark, ShieldCheck, Share2, Award, UserCheck } from 'lucide-react';
import { BlankSquareSpace } from '../components/BlankSquareSpace';
import { AdBanner } from '../components/AdBanner';

interface CourseDetailPageProps {
  onOpenDemo: (courseTitle?: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ onOpenDemo }) => {
  const { slug } = useParams<{ slug: string }>();
  const [savedCourses, setSavedCourses] = useLocalStorage<string[]>('kotatoppers_saved_courses', []);

  const course = coursesData.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Course Not Found</h2>
          <p className="text-sm text-slate-600 mb-6">
            The course you are looking for may have been updated or moved.
          </p>
          <Link
            to="/courses"
            className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-700"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  const isSaved = savedCourses.includes(course.id);
  const toggleSave = () => {
    if (isSaved) {
      setSavedCourses(savedCourses.filter(id => id !== course.id));
    } else {
      setSavedCourses([...savedCourses, course.id]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Breadcrumb & Hero */}
      <div className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Courses</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <span>{course.targetExam}</span>
                <span aria-hidden="true">·</span>
                <span>{course.targetClass}</span>
                <span aria-hidden="true">·</span>
                <span>{course.mode}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{course.rating.toFixed(1)}</span>
                  <span className="text-slate-400 font-normal">({course.reviewCount} reviews)</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>{course.studentsEnrolled.toLocaleString('en-IN')} students enrolled</span>
                <span aria-hidden="true">·</span>
                <span>Lead: {course.facultyLead}</span>
              </div>
            </div>

            {/* Price Box Desktop */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shrink-0 w-full lg:w-80 space-y-4">
              <div>
                <div className="text-xs text-slate-400 line-through">
                  ₹{course.originalPriceINR.toLocaleString('en-IN')}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tabular-nums">
                  ₹{course.priceINR.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium mt-1">
                  Save ₹{(course.originalPriceINR - course.priceINR).toLocaleString('en-IN')} with Early Admission
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onOpenDemo(course.title)}
                  className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg text-sm transition-colors text-center cursor-pointer shadow-xs"
                >
                  Book Free Demo Class
                </button>
                <button
                  onClick={toggleSave}
                  className={`w-full py-2 border rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    isSaved
                      ? 'border-amber-400 bg-amber-950/40 text-amber-300'
                      : 'border-slate-600 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-300' : ''}`} />
                  <span>{isSaved ? 'Saved to Portal' : 'Save for Later'}</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 space-y-1 pt-2 border-t border-slate-700/80">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Batch Starts: <strong>{course.batchStartDate}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 mb-3">About This Program</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {course.description}
              </p>

              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-6 mb-3">
                Key Deliverables & Inclusions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Breakdown */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 mb-4">Detailed Curriculum & Topic Matrix</h2>
              <div className="space-y-4">
                {course.syllabus.map((subj, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      {subj.subject}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                      {subj.topics.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Lecture Space - Using requested BlankSquareSpace */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 mb-1">
                Classroom Preview & Orientation
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Sample lecture clip from this batch.
              </p>
              <div className="max-w-md mx-auto">
                <BlankSquareSpace label="Course Lecture Area" />
              </div>
            </div>
          </div>

          {/* Right Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Batch Schedule & Timings
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {course.schedule}
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                <span>Doubt counter is active daily immediately following lecture hours.</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Need Guidance?
              </h3>
              <p className="text-xs text-slate-600">
                Speak directly with a Kota academic counselor about batch selection, syllabus pace, or scholarship eligibility.
              </p>
              <div className="p-3 bg-amber-50 rounded-lg text-xs text-amber-900 font-semibold">
                Helpline: +91 9602281833
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo(course.title)} />
    </div>
  );
};
