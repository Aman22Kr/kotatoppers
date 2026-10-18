import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, CheckCircle, ShieldCheck, Users, Sparkles, ChevronRight, Download, Award, Clock } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { toppersData } from '../data/toppersData';
import { facultyData } from '../data/facultyData';
import { studyMaterialData } from '../data/studyMaterialData';
import { faqData } from '../data/faqData';
import { CourseCard } from '../components/CourseCard';
import { BlankSquareSpace } from '../components/BlankSquareSpace';
import { AdBanner } from '../components/AdBanner';

interface HomePageProps {
  onOpenDemo: (courseTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDemo }) => {
  const [activeCourseTab, setActiveCourseTab] = useState<'All' | 'JEE Main & Advanced' | 'NEET Pre-Medical' | 'Foundation'>('All');

  const filteredCourses = coursesData.filter(c => {
    if (activeCourseTab === 'All') return true;
    return c.targetExam === activeCourseTab;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* 1. Hero Section: 2-Column Desktop Split with Authentic Kota Classroom */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline and Call to Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Admissions Open for 2026-27 Kota Offline & Live Batches</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
                Master IIT JEE & NEET with Kota’s Legendary Pedagogy
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                KotaToppers (formerly TPLive Kota) brings direct classroom mentorship from Ex-IITian HODs, daily DPP drills, 1-on-1 doubt resolution, and authentic NTA CBT mock testing to students across India.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenDemo()}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-semibold rounded-lg shadow-sm transition-all text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/courses"
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  <span>Explore All Batches</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/test-series/simulator"
                  className="px-5 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold rounded-lg transition-colors text-sm"
                >
                  Try Free CBT Test
                </Link>
              </div>

              {/* Unboxed Proof Row */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ex-IITian & Medico HODs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Daily 1-on-1 Doubt Counters</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Up to 90% K-SAT Scholarship</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/hero_kota_classroom_1792295351926.jpg"
                  alt="KotaToppers interactive smart classroom in Kota"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="text-white text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Kota Academic Center
                  </div>
                  <div className="text-white text-base font-bold mt-1">
                    Live Smart Classroom Session in Progress
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    New Rajeev Gandhi Nagar, Kota Campus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Strip */}
        <div className="border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                  45,000+
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Students Trained in Kota System</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 tabular-nums">
                  AIR 4 & 11
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Top Ranks in JEE & NEET 2025</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                  18+ Years
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Average Faculty Kota Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tabular-nums">
                  100%
                </div>
                <div className="text-xs text-slate-500 mt-0.5">NCERT Word-by-Word Decoding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Courses & Batches Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
              Engineered for Top AIR Ranks
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Popular Programs for JEE, NEET & Foundation
            </h3>
          </div>

          {/* Functional Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg overflow-x-auto">
            {(['All', 'JEE Main & Advanced', 'NEET Pre-Medical', 'Foundation'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveCourseTab(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeCourseTab === tab
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.slice(0, 6).map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onOpenDemo={(title) => onOpenDemo(title)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-700 hover:underline"
          >
            <span>View All Batches, Schedules & Fee Structures</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. The 4 Pillars of the KotaToppers System */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
              Why Kota Works
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              The 4 Uncompromising Pillars of KotaToppers
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Our proven pedagogical architecture has consistently converted sincere effort into triple-digit and double-digit All India Ranks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h4 className="text-base font-bold text-slate-900">Daily DPP & Homework Drill</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Every lecture is paired with a Daily Practice Problem (DPP) containing 15-20 handpicked multi-concept problems solved before the next class.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h4 className="text-base font-bold text-slate-900">1-on-1 Faculty Doubt Cell</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                No doubt remains pending. Walk into physical doubt counters in Kota or jump into 2-way live video counters daily from 7 AM to 10 PM.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h4 className="text-base font-bold text-slate-900">Exact NTA CBT Test Simulation</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Bi-weekly CBT mock tests on the identical test software used by IITs and NTA, providing micro-level time analysis per problem.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h4 className="text-base font-bold text-slate-900">Student Mental Wellness Center</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Full-time clinical psychologists and 24/7 listening helpline (+91 9602281833) ensuring our students remain confident, calm, and resilient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Faculty Mentorship Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
              <img
                src="/src/assets/images/faculty_mentorship_1792295351633.jpg"
                alt="Senior Kota faculty mentoring students"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] object-cover"
              />
              <div className="p-4 bg-slate-50 text-xs text-slate-600 border-t border-slate-100 flex items-center justify-between">
                <span>Personalized guidance session</span>
                <span className="font-semibold text-slate-900">Kota Academic Wing</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Experienced Kota Educators
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Learn Directly from HODs with 15+ Years in Kota
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              At KotaToppers, you are never taught by inexperienced trainees or automated bots. Our master faculty are Ex-IITians, doctors, and veteran Kota educators who have designed study materials and test series for over a decade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {facultyData.slice(0, 4).map(fac => (
                <div key={fac.id} className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-xs font-bold text-slate-900">{fac.name}</div>
                  <div className="text-[11px] text-amber-700 font-medium">{fac.title}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{fac.education} · {fac.kotaExperience}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/faculty"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-amber-700"
              >
                <span>Read Full Faculty Profiles & Credentials</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Kota Toppers Hall of Fame / Results */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Hall of Fame
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Celebrating Our Recent Kota Rankers
              </h2>
            </div>
            <Link
              to="/results"
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>View All Past Results</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppersData.slice(0, 3).map(topper => (
              <div
                key={topper.id}
                className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold text-amber-400">{topper.exam} ({topper.year})</span>
                    <span>{topper.hometown}</span>
                  </div>
                  <div className="text-2xl font-black text-white tabular-nums tracking-tight">
                    {topper.rankOrScore}
                  </div>
                  <div className="text-base font-bold text-slate-100 mt-1">
                    {topper.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Admitted to: <span className="text-white font-medium">{topper.collegeAdmitted}</span>
                  </div>
                  <p className="text-xs text-slate-300 italic mt-4 leading-relaxed border-t border-slate-700/80 pt-3">
                    "{topper.testimonial}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Batch: {topper.courseTaken}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Video Highlights Section with Required Blank Square Spaces */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-2xl mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
            Classroom & Concept Previews
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Recorded Lecture Demonstrations & Webinars
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Preview our lecture structure and problem-solving pedagogy.
          </p>
        </div>

        {/* Video Area Grid - Per requirement: "If there is an area for a YouTube video link or thumbnail that takes you to YouTube, just put a blank square space there." */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
            <BlankSquareSpace label="Video Lecture Area" />
            <div>
              <div className="text-xs font-medium text-amber-700">Physics Masterclass</div>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">Rotational Mechanics: Instantaneous Axis of Rotation</h4>
              <p className="text-xs text-slate-500 mt-1">Er. Rakesh Sharma · 45 Mins</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
            <BlankSquareSpace label="Video Lecture Area" />
            <div>
              <div className="text-xs font-medium text-amber-700">NEET Biology Extraction</div>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">Cardiac Cycle & ECG Wave Decoding</h4>
              <p className="text-xs text-slate-500 mt-1">Dr. Vivek Singhal · 38 Mins</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
            <BlankSquareSpace label="Video Lecture Area" />
            <div>
              <div className="text-xs font-medium text-amber-700">Organic Chemistry Mindmap</div>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">Aldol Condensation & Cannizzaro Electron Push</h4>
              <p className="text-xs text-slate-500 mt-1">Dr. Sunita Rathore · 50 Mins</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Kota Campus Life & Library Showcase */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Life in the Coaching Capital
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Kota Campus & Dedicated Self-Study Library
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Success in JEE and NEET requires uncompromised concentration. Our campus in New Rajeev Gandhi Nagar features ergonomic study carrels, silent AC study halls open until midnight, and biometric access.
              </p>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Individual study carrels with warm LED task lights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>On-site faculty doubt desk staffed till 10 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Safe walking distance to verified student hostels and food messes</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/kota-guide"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-amber-700"
                >
                  <span>Explore Kota Hostel & Accommodation Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/src/assets/images/student_study_library_1792295352632.jpg"
                  alt="Students studying in Kota library"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-slate-50 text-[11px] font-medium text-slate-700">
                  Silent Reading Library Hall
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/src/assets/images/kota_campus_building_1792295352346.jpg"
                  alt="KotaToppers academic building"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-slate-50 text-[11px] font-medium text-slate-700">
                  New Rajeev Gandhi Nagar Campus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
            Questions & Answers
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqData.map(item => (
            <div key={item.id} className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                {item.question}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Smaller Ad section at the bottom of the page */}
      <AdBanner onOpenDemo={() => onOpenDemo('K-SAT Scholarship Admission')} />
    </div>
  );
};
