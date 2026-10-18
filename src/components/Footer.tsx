import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, Clock, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand & Kota Story */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-white inline-flex items-center gap-1">
              <span className="text-amber-500">Kota</span>
              <span>Toppers</span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              KotaToppers (formerly TPLive Kota) brings the authentic, rigorous Kota coaching ecosystem to ambitious engineering and medical aspirants across India. Driven by Ex-IITian and senior Kota HODs with over 18 years of classroom excellence.
            </p>
            <div className="text-xs text-slate-400 space-y-1.5 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Kota Academic Campus: New Rajeev Gandhi Nagar, Near City Mall, Kota, Rajasthan 324005</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Student Admission Helpline: +91 9602281833 / 8306581833</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>admissions@kotatoppers.com / info@kotatoppers.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Programs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Programs & Batches
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/courses/jee-dropper-sangram-batch" className="hover:text-amber-400 transition-colors">
                  JEE Dropper Sangram Batch
                </Link>
              </li>
              <li>
                <Link to="/courses/neet-arjuna-two-year-program" className="hover:text-amber-400 transition-colors">
                  NEET Arjuna 2-Year Batch
                </Link>
              </li>
              <li>
                <Link to="/courses/jee-pratham-target-class12" className="hover:text-amber-400 transition-colors">
                  JEE Class 12 Pratham Batch
                </Link>
              </li>
              <li>
                <Link to="/courses/neet-achiever-dropper-batch" className="hover:text-amber-400 transition-colors">
                  NEET Dropper Achiever Batch
                </Link>
              </li>
              <li>
                <Link to="/courses/foundation-olympiad-pinnacle" className="hover:text-amber-400 transition-colors">
                  Foundation (Class 9 & 10)
                </Link>
              </li>
              <li>
                <Link to="/courses/foundation-junior-ignite" className="hover:text-amber-400 transition-colors">
                  Junior Ignite (Class 6 - 8)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Academic Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/test-series" className="hover:text-amber-400 transition-colors">
                  Kota All India Test Series (CBT)
                </Link>
              </li>
              <li>
                <Link to="/test-series/simulator" className="hover:text-amber-400 transition-colors">
                  Live CBT Simulator Practice
                </Link>
              </li>
              <li>
                <Link to="/study-material" className="hover:text-amber-400 transition-colors">
                  Free Formula Handbooks
                </Link>
              </li>
              <li>
                <Link to="/study-material" className="hover:text-amber-400 transition-colors">
                  Kota DPPs with Solutions
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-amber-400 transition-colors">
                  Kota Rankers Hall of Fame
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-amber-400 transition-colors">
                  Star HOD Faculty Profiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Kota Student Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Kota Student Welfare
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/kota-guide" className="hover:text-amber-400 transition-colors">
                  Hostel & Mess Guide
                </Link>
              </li>
              <li>
                <Link to="/kota-guide" className="hover:text-amber-400 transition-colors">
                  Daily 14-Hour Timetable
                </Link>
              </li>
              <li>
                <Link to="/kota-guide" className="hover:text-amber-400 transition-colors">
                  Stress & Wellness Cell
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About KotaToppers
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-amber-400 transition-colors">
                  Student Portal Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Kota Campus Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Note & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} KotaToppers (Formerly TPLive Kota). All rights reserved.</p>
            <p className="text-[11px] text-slate-600 mt-1">
              Maintained by Aman22kr · Built with Vite, React & Tailwind CSS for GitHub Pages deployment.
            </p>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <Link to="/about" className="hover:underline">Pedagogy</Link>
            <Link to="/contact" className="hover:underline">Admissions</Link>
            <Link to="/kota-guide" className="hover:underline">Helpline</Link>
            <Link to="/dashboard" className="hover:underline">Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
