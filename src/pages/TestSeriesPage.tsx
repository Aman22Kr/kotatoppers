import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { testPackagesData, TestPackage } from '../data/testSeriesData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Check, Clock, Award, ShieldCheck, ArrowRight, Play, Bookmark, FileText } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

interface TestSeriesPageProps {
  onOpenDemo: (title?: string) => void;
}

export const TestSeriesPage: React.FC<TestSeriesPageProps> = ({ onOpenDemo }) => {
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [savedPackages, setSavedPackages] = useLocalStorage<string[]>('kotatoppers_saved_tests', []);

  const filteredPackages = testPackagesData.filter(pkg => {
    if (selectedExam === 'All') return true;
    return pkg.targetExam.includes(selectedExam);
  });

  const toggleSave = (id: string) => {
    if (savedPackages.includes(id)) {
      setSavedPackages(savedPackages.filter(item => item !== id));
    } else {
      setSavedPackages([...savedPackages, id]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              All India Kota Test Series (CBT)
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Benchmarked Against Real IIT & NEET Cutoffs
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Every Kota topper knows that regular test taking separates dreamers from rankers. Practice on our identical NTA interface with in-depth question video solutions.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/test-series/simulator"
              className="px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg transition-all text-sm inline-flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Launch Free CBT Test Simulator</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 p-1 bg-slate-200/80 rounded-lg">
            {(['All', 'JEE Advanced', 'JEE Main', 'NEET UG', 'Foundation'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setSelectedExam(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  selectedExam === tab
                    ? 'bg-white text-slate-900 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <Link
            to="/test-series/simulator"
            className="text-xs font-semibold text-amber-700 hover:underline flex items-center gap-1"
          >
            <span>Live Interactive Mock (8 Questions Sample)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Test Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPackages.map(pkg => {
            const isSaved = savedPackages.includes(pkg.id);
            return (
              <div
                key={pkg.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-amber-700">{pkg.targetExam}</span>
                    <button
                      onClick={() => toggleSave(pkg.id)}
                      className="p-1 text-slate-400 hover:text-slate-600"
                      title={isSaved ? 'Bookmarked' : 'Bookmark test pack'}
                      aria-label="Save test package"
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600 text-amber-600' : ''}`} />
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">
                    <span><strong>{pkg.testsCount}</strong> Total Tests</span>
                    <span aria-hidden="true">·</span>
                    <span>{pkg.fullMockCount} Full Mocks</span>
                    <span aria-hidden="true">·</span>
                    <span>{pkg.durationMinutes} Mins Each</span>
                  </div>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-slate-400 line-through">
                      ₹{pkg.originalPriceINR.toLocaleString('en-IN')}
                    </div>
                    <div className="text-xl font-bold text-slate-900 tabular-nums">
                      ₹{pkg.priceINR.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to="/test-series/simulator"
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>Try Sample</span>
                      <Play className="w-3 h-3 fill-slate-800" />
                    </Link>
                    <button
                      onClick={() => onOpenDemo(pkg.title)}
                      className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      Enroll in Series
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Feature Highlight */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">NTA Micro-Analytics</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Know where you spent too much time and which questions you changed at the last minute to eliminate negative marking.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">All India Rank Predictor</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                See your projected All India Rank computed against over 35,000 students taking the same mock across India.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Video Solutions</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Detailed step-by-step video solutions by Kota HODs accessible immediately after submitting the test paper.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo('Test Series Scholarship')} />
    </div>
  );
};
