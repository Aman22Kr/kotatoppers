import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Sparkles, BookOpen, User, Phone, Mail, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface DemoBooking {
  id: string;
  studentName: string;
  phone: string;
  email: string;
  targetExam: string;
  targetClass: string;
  mode: string;
  date: string;
  timeSlot: string;
  bookedAt: string;
}

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseTitle?: string;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  onClose,
  defaultCourseTitle
}) => {
  const [bookings, setBookings] = useLocalStorage<DemoBooking[]>('kotatoppers_demo_bookings', []);
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [targetExam, setTargetExam] = useState(
    defaultCourseTitle?.includes('NEET')
      ? 'NEET Pre-Medical'
      : defaultCourseTitle?.includes('Foundation')
      ? 'Foundation & Olympiad'
      : 'JEE Main & Advanced'
  );
  const [targetClass, setTargetClass] = useState('Class 12 / Dropper');
  const [mode, setMode] = useState<'Live Interactive Online' | 'Kota Campus Offline'>('Live Interactive Online');
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow, 4:00 PM - 5:30 PM');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

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
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setStudentName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 id="modal-title" className="text-base font-bold">
              Book Free Demo Class & Kota Counseling
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Demo Class Slot Reserved!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Congratulations <span className="font-semibold text-slate-900">{studentName}</span>! Your demo session for <span className="font-semibold text-slate-900">{targetExam}</span> ({mode}) has been reserved for <span className="font-semibold text-slate-900">{selectedSlot}</span>.
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 text-left space-y-1">
              <div><strong>Student Phone:</strong> {phone}</div>
              <div><strong>Mode:</strong> {mode}</div>
              <div><strong>Kota Center:</strong> New Rajeev Gandhi Nagar, Kota (Helpline: +91 9602281833)</div>
              <div><strong>Note:</strong> Zoom access link and classroom badge have been saved to your Student Dashboard.</div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {defaultCourseTitle && (
              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Selected Course: <strong>{defaultCourseTitle}</strong></span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Student Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Target Exam
                </label>
                <select
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
                >
                  <option value="JEE Main & Advanced">IIT JEE (Main & Adv)</option>
                  <option value="NEET Pre-Medical">NEET (Pre-Medical)</option>
                  <option value="Foundation & Olympiad">Foundation & Olympiad</option>
                  <option value="CBSE Board 10/12">CBSE Board Exam</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Current Grade / Class
                </label>
                <select
                  value={targetClass}
                  onChange={(e) => setTargetClass(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
                >
                  <option value="Class 11">Class 11 (Starting Prep)</option>
                  <option value="Class 12">Class 12 (Board + Entrance)</option>
                  <option value="Class 12 / Dropper">Class 12th Pass / Dropper</option>
                  <option value="Class 9-10">Class 9th or 10th</option>
                  <option value="Class 6-8">Class 6th to 8th</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Learning Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMode('Live Interactive Online')}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    mode === 'Live Interactive Online'
                      ? 'border-amber-500 bg-amber-50 text-amber-900 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  Live Interactive Online
                </button>
                <button
                  type="button"
                  onClick={() => setMode('Kota Campus Offline')}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    mode === 'Kota Campus Offline'
                      ? 'border-amber-500 bg-amber-50 text-amber-900 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  Kota Campus (Offline)
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
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
              >
                <option value="Tomorrow, 4:00 PM - 5:30 PM">Tomorrow, 4:00 PM - 5:30 PM (Physics Live)</option>
                <option value="Tomorrow, 6:00 PM - 7:30 PM">Tomorrow, 6:00 PM - 7:30 PM (Chemistry Live)</option>
                <option value="This Saturday, 10:30 AM - 12:00 PM">This Saturday, 10:30 AM - 12:00 PM (Maths / Bio)</option>
                <option value="This Sunday, 11:00 AM - 1:00 PM">This Sunday, 11:00 AM - 1:00 PM (Kota Campus Counseling)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-sm transition-all text-sm cursor-pointer"
              >
                Confirm Free Demo & Consultation
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                100% Free · No obligation · Includes Kota Diagnostic Test & Study Notes
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
