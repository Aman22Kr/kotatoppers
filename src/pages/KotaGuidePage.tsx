import React, { useState } from 'react';
import { kotaGuideTopics, KotaGuideTopic } from '../data/kotaGuideData';
import { Compass, Clock, Home, Heart, Utensils, Phone, CheckCircle, AlertTriangle } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

interface KotaGuidePageProps {
  onOpenDemo: (title?: string) => void;
}

export const KotaGuidePage: React.FC<KotaGuidePageProps> = ({ onOpenDemo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Daily Routine of a Topper',
    'Accommodation & Hostels',
    'Mental Wellness & Support',
    'Mess & Food'
  ];

  const filteredTopics = kotaGuideTopics.filter(t => {
    if (activeCategory === 'All') return true;
    return t.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Student Life & Local Support
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kota Student Life & City Guide
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            Everything an outstation student and parent needs to know about thriving in Kota: verified hostels, daily routines, food messes, and 24/7 mental wellness support.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full space-y-8">
        {/* Wellness Helpline Banner */}
        <div className="bg-amber-500/10 border border-amber-300/80 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Kota Student Wellness & Support Cell
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Feeling stressed or homesick? Our certified counselors are available 24 hours a day, completely confidential and free of charge.
              </p>
            </div>
          </div>
          <a
            href="tel:+919602281833"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-xs flex items-center gap-2 shrink-0 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call Wellness Line: +91 9602281833</span>
          </a>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTopics.map(topic => (
            <div
              key={topic.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-semibold text-amber-700 mb-2">
                  {topic.category}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {topic.summary}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Actionable Insights:
                  </h4>
                  {topic.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {topic.tips.length > 0 && (
                <div className="mt-6 pt-4 border-t border-amber-100 bg-amber-50/50 p-3.5 rounded-lg">
                  <div className="text-xs font-bold text-amber-900 mb-1">
                    Topper's Pro-Tip:
                  </div>
                  <ul className="text-xs text-amber-800 space-y-1">
                    {topic.tips.map((tip, idx) => (
                      <li key={idx}>· {tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo('Kota Hostel Counseling')} />
    </div>
  );
};
