import React from 'react';
import { Award, CheckCircle, ShieldCheck, Target, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdBanner } from '../components/AdBanner';

interface AboutPageProps {
  onOpenDemo: (title?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenDemo }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            The Kota Legacy
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About KotaToppers (Formerly TPLive Kota)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            Born in the coaching capital of India, KotaToppers exists to bridge the gap between hard work and top ranks through authentic Kota classroom pedagogy.
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full space-y-12">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Our Genesis
            </h2>
            <h3 className="text-2xl font-bold text-slate-900">
              Why We Rebuilt the Coaching Experience
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded by veteran mathematics educator A. S. Jadon and senior Ex-IITian faculty members, our institute began with a clear diagnosis: thousands of students arrive in Kota or sign up for online apps, only to get lost in anonymous crowds of 500-student batches.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              KotaToppers caps batch sizes, eliminates teacher rotation, and ensures that the very HOD who gives the lecture also conducts the afternoon doubt counter. Every student is known by name, by their strengths, and by their error patterns.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-2xl font-extrabold text-slate-900 tabular-nums">18+</div>
                <div className="text-xs text-slate-500 mt-0.5">Years of Kota coaching history</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-2xl font-extrabold text-amber-600 tabular-nums">45k+</div>
                <div className="text-xs text-slate-500 mt-0.5">Engineers & Doctors produced</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="/src/assets/images/kota_campus_building_1792295352346.jpg"
                alt="KotaToppers academic campus"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-white text-xs text-slate-600 border-t border-slate-100">
                Kota Academic Campus at New Rajeev Gandhi Nagar, Kota
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table: KotaToppers vs Others */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            KotaToppers vs. Factory Coaching vs. Generic Apps
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                  <th className="py-3 pr-4">Pedagogical Parameter</th>
                  <th className="py-3 px-4 text-amber-700 bg-amber-50/50">KotaToppers</th>
                  <th className="py-3 px-4">Mass Kota Factories</th>
                  <th className="py-3 pl-4">Generic EdTech Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-900">Batch Size</td>
                  <td className="py-3 px-4 font-semibold text-amber-800 bg-amber-50/50">Capped (45-60 Students)</td>
                  <td className="py-3 px-4">300 to 500 Students</td>
                  <td className="py-3 pl-4">Infinite / Automated</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-900">Faculty Credentials</td>
                  <td className="py-3 px-4 font-semibold text-amber-800 bg-amber-50/50">Ex-IIT/NIT HODs only</td>
                  <td className="py-3 px-4">Junior trainees in lower batches</td>
                  <td className="py-3 pl-4">Freelance tutors</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-900">Doubt Resolution</td>
                  <td className="py-3 px-4 font-semibold text-amber-800 bg-amber-50/50">Same HOD at doubt counter</td>
                  <td className="py-3 px-4">Separate junior doubt faculty</td>
                  <td className="py-3 pl-4">Chatbot / Text reply hours later</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-900">Test Series Platform</td>
                  <td className="py-3 px-4 font-semibold text-amber-800 bg-amber-50/50">Exact NTA CBT Software</td>
                  <td className="py-3 px-4">Pen & Paper OMR only</td>
                  <td className="py-3 pl-4">Basic web form</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-900">Mental Wellness Care</td>
                  <td className="py-3 px-4 font-semibold text-amber-800 bg-amber-50/50">24/7 Counselor Helpline</td>
                  <td className="py-3 px-4">Rarely available</td>
                  <td className="py-3 pl-4">None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Experience the KotaToppers Difference</h3>
            <p className="text-xs text-slate-400 mt-1">
              Attend a live class or book an in-person orientation at our New Rajeev Gandhi Nagar campus.
            </p>
          </div>
          <button
            onClick={() => onOpenDemo('About Us - Campus Orientation')}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer shrink-0"
          >
            Schedule Free Orientation
          </button>
        </div>
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo('About Page Scholarship')} />
    </div>
  );
};
