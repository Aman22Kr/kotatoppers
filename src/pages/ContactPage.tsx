import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AdBanner } from '../components/AdBanner';

interface ContactInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  targetCourse: string;
  message: string;
  submittedAt: string;
}

export const ContactPage: React.FC = () => {
  const [inquiries, setInquiries] = useLocalStorage<ContactInquiry[]>('kotatoppers_contact_inquiries', []);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [targetCourse, setTargetCourse] = useState('JEE Main & Advanced');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const newInquiry: ContactInquiry = {
      id: `INQ-${Date.now()}`,
      name,
      phone,
      email,
      targetCourse,
      message,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setInquiries([newInquiry, ...inquiries]);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Admissions & Student Welfare
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact KotaToppers
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            Have questions about admissions, batches, test series or hostel accommodations? Our Kota counselor team is here to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details & Center Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Kota Headquarters & Campus
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Kota Academic Campus</strong>
                    <span>New Rajeev Gandhi Nagar, Near City Mall, Jhalawar Road, Kota, Rajasthan - 324005</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Telephone & WhatsApp</strong>
                    <div className="space-y-0.5 mt-0.5">
                      <a href="tel:+919602281833" className="block hover:underline font-mono">+91 9602281833 (Admissions)</a>
                      <a href="tel:+918306581833" className="block hover:underline font-mono">+91 8306581833 (Counseling)</a>
                      <a href="tel:+919079016079" className="block hover:underline font-mono">+91 9079016079 (Hostel Cell)</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Email Desk</strong>
                    <span className="font-mono text-xs">admissions@kotatoppers.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Campus Visiting Hours</strong>
                    <span>Monday - Saturday: 8:00 AM - 8:00 PM</span>
                    <span className="block text-slate-500">Sunday: 9:00 AM - 4:00 PM (Counseling Only)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kota Map Visual Card */}
            <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Center Proximity
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Located right in the heart of Kota's premier educational district (New Rajeev Gandhi Nagar). Easily accessible within 15 minutes from Kota Junction Railway Station.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Nearest Landmark: City Mall & Electronic Complex, Jhalawar Road
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send an Admission Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Our Kota counselor will get in touch within 2 working hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Inquiry Received</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you {name}. Your inquiry regarding {targetCourse} has been logged in our system. A senior Kota academic counselor will call you on {phone}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Student / Parent Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-xs sm:text-sm py-2 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs sm:text-sm py-2 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs sm:text-sm py-2 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Program of Interest
                      </label>
                      <select
                        value={targetCourse}
                        onChange={(e) => setTargetCourse(e.target.value)}
                        className="w-full text-xs sm:text-sm py-2 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 bg-white"
                      >
                        <option value="JEE Main & Advanced">IIT JEE (Main & Advanced)</option>
                        <option value="NEET Pre-Medical">NEET (UG Medical)</option>
                        <option value="Foundation & Olympiad">Foundation Class 6th-10th</option>
                        <option value="Kota Offline Hostel Assistance">Kota Offline Hostel Assistance</option>
                        <option value="K-SAT Scholarship Test">K-SAT Scholarship Test</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Query or Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about batch start dates, scholarship cutoff, hostel recommendations, etc."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs sm:text-sm py-2 px-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                  >
                    Submit Admission Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <AdBanner onOpenDemo={() => {}} />
    </div>
  );
};
