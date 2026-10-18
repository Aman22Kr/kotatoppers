import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { coursesData } from '../data/coursesData';
import { studyMaterialData } from '../data/studyMaterialData';
import { DemoBooking } from '../components/DemoBookingModal';
import { TestAttempt } from './TestSimulatorPage';
import { Bookmark, Award, Calendar, Download, Trash2, ArrowRight, UserCheck, CheckCircle, Play } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

interface DashboardPageProps {
  onOpenDemo: (title?: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onOpenDemo }) => {
  const [savedCourseIds, setSavedCourseIds] = useLocalStorage<string[]>('kotatoppers_saved_courses', []);
  const [demoBookings, setDemoBookings] = useLocalStorage<DemoBooking[]>('kotatoppers_demo_bookings', []);
  const [testAttempts, setTestAttempts] = useLocalStorage<TestAttempt[]>('kotatoppers_test_attempts', []);
  const [downloadedMaterialIds, setDownloadedMaterialIds] = useLocalStorage<string[]>('kotatoppers_downloaded_materials', []);
  const [activeTab, setActiveTab] = useState<'courses' | 'demos' | 'tests' | 'downloads'>('courses');

  const savedCourses = coursesData.filter(c => savedCourseIds.includes(c.id));
  const downloadedMaterials = studyMaterialData.filter(m => downloadedMaterialIds.includes(m.id));

  const removeSavedCourse = (id: string) => {
    setSavedCourseIds(savedCourseIds.filter(item => item !== id));
  };

  const removeBooking = (id: string) => {
    setDemoBookings(demoBookings.filter(b => b.id !== id));
  };

  const clearAttempts = () => {
    setTestAttempts([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
              Personalized Learning Hub
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Student Portal & Saved Items
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Manage your bookmarked batches, upcoming demo classes, and CBT mock test scores. Persisted securely via local storage.
            </p>
          </div>

          <button
            onClick={() => onOpenDemo()}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg text-xs self-start md:self-auto cursor-pointer"
          >
            Schedule New Demo Session
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'courses'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            Saved Batches ({savedCourses.length})
          </button>
          <button
            onClick={() => setActiveTab('demos')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'demos'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            Demo Reservations ({demoBookings.length})
          </button>
          <button
            onClick={() => setActiveTab('tests')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'tests'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            CBT Mock History ({testAttempts.length})
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'downloads'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            Downloaded Notes ({downloadedMaterials.length})
          </button>
        </div>

        {/* Tab 1: Saved Courses */}
        {activeTab === 'courses' && (
          <div>
            {savedCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedCourses.map(course => (
                  <div
                    key={course.id}
                    className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span className="font-semibold text-amber-700">{course.targetExam}</span>
                        <button
                          onClick={() => removeSavedCourse(course.id)}
                          className="text-slate-400 hover:text-rose-600 p-1"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{course.title}</h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">{course.subtitle}</p>
                      <div className="mt-3 text-xs text-slate-500">
                        <span>{course.mode}</span> · <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-base font-extrabold text-slate-900">
                        ₹{course.priceINR.toLocaleString('en-IN')}
                      </div>
                      <Link
                        to={`/courses/${course.slug}`}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg"
                      >
                        View Curriculum
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-xl border border-slate-200 text-center">
                <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-slate-900">No courses saved yet</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Browse our course catalog and click the bookmark icon on any course card to save it here for comparison.
                </p>
                <Link
                  to="/courses"
                  className="mt-4 inline-block px-4 py-2 bg-amber-600 text-white text-xs font-semibold rounded-lg hover:bg-amber-700"
                >
                  Browse All Batches
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Booked Demos */}
        {activeTab === 'demos' && (
          <div>
            {demoBookings.length > 0 ? (
              <div className="space-y-4">
                {demoBookings.map(booking => (
                  <div
                    key={booking.id}
                    className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <h3 className="text-base font-bold text-slate-900">{booking.targetExam}</h3>
                        <span className="text-xs text-slate-500">({booking.mode})</span>
                      </div>
                      <div className="text-xs text-slate-600 mt-1 space-x-3">
                        <span><strong>Student:</strong> {booking.studentName}</span>
                        <span><strong>Phone:</strong> {booking.phone}</span>
                        <span><strong>Slot:</strong> {booking.timeSlot}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Booked: {booking.date} · Booking ID: {booking.id}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                        Confirmed Slot
                      </span>
                      <button
                        onClick={() => removeBooking(booking.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                        title="Cancel reservation"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-xl border border-slate-200 text-center">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-slate-900">No demo classes scheduled</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Experience a live interactive session with our Kota HODs for free.
                </p>
                <button
                  onClick={() => onOpenDemo()}
                  className="mt-4 px-4 py-2 bg-amber-600 text-white text-xs font-semibold rounded-lg hover:bg-amber-700 cursor-pointer"
                >
                  Book Free Demo Class
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: CBT Mock Attempts */}
        {activeTab === 'tests' && (
          <div>
            {testAttempts.length > 0 ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs text-slate-500">Completed Mock Tests</span>
                  <button
                    onClick={clearAttempts}
                    className="text-xs text-rose-600 hover:underline"
                  >
                    Clear History
                  </button>
                </div>
                {testAttempts.map(attempt => (
                  <div
                    key={attempt.id}
                    className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
                  >
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{attempt.testTitle}</h3>
                      <div className="text-xs text-slate-500 mt-0.5">Attempted on: {attempt.completedAt}</div>
                      <div className="flex items-center gap-4 text-xs mt-2">
                        <span>Correct: <strong className="text-emerald-700">{attempt.correctCount}</strong></span>
                        <span>Incorrect: <strong className="text-rose-700">{attempt.wrongCount}</strong></span>
                        <span>Accuracy: <strong className="text-slate-900">{attempt.accuracy}%</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-xs text-slate-400">Score</div>
                        <div className="text-xl font-black text-slate-900 tabular-nums">
                          {attempt.score} / {attempt.maxScore}
                        </div>
                      </div>
                      <Link
                        to="/test-series/simulator"
                        className="px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 flex items-center gap-1"
                      >
                        <span>Retake</span>
                        <Play className="w-3 h-3 fill-white" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-xl border border-slate-200 text-center">
                <Award className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-slate-900">No mock test attempts recorded</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Take our diagnostic NTA pattern mock test to benchmark your preparation score.
                </p>
                <Link
                  to="/test-series/simulator"
                  className="mt-4 inline-block px-4 py-2 bg-amber-600 text-white text-xs font-semibold rounded-lg hover:bg-amber-700"
                >
                  Start Diagnostic Test
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Downloaded Materials */}
        {activeTab === 'downloads' && (
          <div>
            {downloadedMaterials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {downloadedMaterials.map(mat => (
                  <div
                    key={mat.id}
                    className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-semibold text-amber-700 mb-1">{mat.subject}</div>
                      <h4 className="text-sm font-bold text-slate-900">{mat.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{mat.category} · {mat.pages} Pages</p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-emerald-700 flex items-center gap-1 font-medium">
                        <CheckCircle className="w-3.5 h-3.5" /> Downloaded
                      </span>
                      <Link
                        to="/study-material"
                        className="text-amber-700 hover:underline"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-xl border border-slate-200 text-center">
                <Download className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-slate-900">No notes downloaded yet</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Access free Kota formula sheets, DPPs, and chapter-wise question banks.
                </p>
                <Link
                  to="/study-material"
                  className="mt-4 inline-block px-4 py-2 bg-amber-600 text-white text-xs font-semibold rounded-lg hover:bg-amber-700"
                >
                  Explore Free Materials
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Local Storage Privacy Note */}
        <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-500">
          <p>
            <strong>Note on Data Persistence:</strong> All saved courses, mock attempts, and demo reservations are saved in your local browser storage (<code className="font-mono">localStorage</code>). No passwords or private server accounts are required. Your data remains on this device across browser refreshes.
          </p>
        </div>
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo('Portal Scholarship Admission')} />
    </div>
  );
};
