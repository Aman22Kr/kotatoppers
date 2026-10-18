import React, { useState } from 'react';
import { Sparkles, CheckCircle, Calendar, Phone, Mail, User, BookOpen, Clock, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { DemoBooking } from '../components/DemoBookingModal';
import { AdBanner } from '../components/AdBanner';

export const BookDemoPage: React.FC = () => {
  const [bookings, setBookings] = useLocalStorage<DemoBooking[]>('kotatoppers_demo_bookings', []);
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [targetExam, setTargetExam] = useState('JEE Main & Advanced');
  const [targetClass, setTargetClass] = useState('Class 12 / Dropper');
  const [mode, setMode] = useState<'Live Interactive Online' | 'Kota Campus Offline'>('Live Interactive Online');
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow, 4:00 PM - 5:30 PM');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim()) return;

    const newBooking: DemoBooking = {
      id: `DEMO-${Date.now()}`,
      studentName,
      phone,
      email: email || `${studentName.toLowerCase().replace(/\s+/g, '')}@example.com`,
      targetExam,
      targetClass,
      mode,
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      timeSlot: selectedSlot,
      bookedAt: new Date().toISOString()
    };

    setBookings([newBooking, ...bookings]);
    setIsSuccess(true);

    try {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-md border border-amber-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>100% Free · Real Classroom Demonstration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Book a Free Kota Demo Class & Academic Counseling
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl mx-auto">
            Experience the precision of our Ex-IITian teaching methodology before enrolling. Available live online or in-person at our New Rajeev Gandhi Nagar campus in Kota.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {isSuccess ? (
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Demo Class Slot Reserved!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Congratulations <span className="font-semibold text-slate-900">{studentName}</span>! Your demo session for <span className="font-semibold text-slate-900">{targetExam}</span> ({mode}) is booked for <span className="font-semibold text-slate-900">{selectedSlot}</span>.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 text-left space-y-1.5 max-w-md mx-auto">
              <div><strong>Registered Mobile:</strong> {phone}</div>
              <div><strong>Learning Mode:</strong> {mode}</div>
              <div><strong>Campus Center:</strong> New Rajeev Gandhi Nagar, Kota (Helpline: +91 9602281833)</div>
              <div><strong>Status:</strong> Saved to your Student Portal Dashboard.</div>
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                setStudentName('');
                setPhone('');
              }}
              className="px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-lg text-xs hover:bg-slate-800 transition-colors"
            >
              Book Another Demo or Counseling
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Student Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Priyanshu Singh"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full text-xs sm:text-sm py-2.5 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="student@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Target Exam
                </label>
                <select
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 bg-white"
                >
                  <option value="JEE Main & Advanced">IIT JEE (Main & Advanced)</option>
                  <option value="NEET Pre-Medical">NEET (UG Pre-Medical)</option>
                  <option value="Foundation & Olympiad">Foundation & Olympiad (Class 6-10)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Target Class
                </label>
                <select
                  value={targetClass}
                  onChange={(e) => setTargetClass(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 bg-white"
                >
                  <option value="Class 11">Class 11 (2-Year Program)</option>
                  <option value="Class 12">Class 12 (1-Year Program)</option>
                  <option value="Class 12 / Dropper">Class 12th Pass / Dropper Batch</option>
                  <option value="Class 9-10">Class 9th or 10th</option>
                  <option value="Class 6-8">Class 6th to 8th</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Preferred Mode of Demo
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMode('Live Interactive Online')}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                    mode === 'Live Interactive Online'
                      ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-xs'
                      : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Live Interactive Online
                </button>
                <button
                  type="button"
                  onClick={() => setMode('Kota Campus Offline')}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                    mode === 'Kota Campus Offline'
                      ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-xs'
                      : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Kota Campus (In-Person)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Preferred Demo Time Slot
              </label>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="w-full text-xs sm:text-sm py-2.5 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 bg-white"
              >
                <option value="Tomorrow, 4:00 PM - 5:30 PM">Tomorrow, 4:00 PM - 5:30 PM (Physics Live)</option>
                <option value="Tomorrow, 6:00 PM - 7:30 PM">Tomorrow, 6:00 PM - 7:30 PM (Chemistry Live)</option>
                <option value="This Saturday, 10:30 AM - 12:00 PM">This Saturday, 10:30 AM - 12:00 PM (Maths / Bio)</option>
                <option value="This Sunday, 11:00 AM - 1:00 PM">This Sunday, 11:00 AM - 1:00 PM (Kota Campus Counseling)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-sm shadow-md transition-all cursor-pointer"
            >
              Reserve Free Demo Seat & Consultation
            </button>
          </form>
        )}
      </div>

      <AdBanner onOpenDemo={() => {}} />
    </div>
  );
};
