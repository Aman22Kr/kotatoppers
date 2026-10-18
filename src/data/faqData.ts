export interface FAQItem {
  id: string;
  category: 'Admissions & Scholarships' | 'Courses & Pedagogy' | 'Test Series' | 'Hostels & Campus';
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Admissions & Scholarships',
    question: 'What is KotaToppers Admission Scholarship Test (K-SAT)?',
    answer: 'K-SAT is our national aptitude and scholarship exam conducted both online and offline. Students can secure up to a 90% scholarship on tuition fees based on their performance in Physics, Chemistry, Mathematics/Biology, and Mental Ability.'
  },
  {
    id: 'faq-2',
    category: 'Admissions & Scholarships',
    question: 'Can I switch from Live Online classes to Kota Offline Classroom later?',
    answer: 'Yes! KotaToppers offers seamless migration between Online Live batches and Kota Offline batches at the end of each academic quarter with fee balance adjustments.'
  },
  {
    id: 'faq-3',
    category: 'Courses & Pedagogy',
    question: 'How does KotaToppers handle doubt solving for online students?',
    answer: 'Online students have access to dedicated 2-way live audio/video doubt counters from 7:00 AM to 10:00 PM, plus an in-app doubt resolution portal where HOD mentors respond with step-by-step video solutions within 20 minutes.'
  },
  {
    id: 'faq-4',
    category: 'Courses & Pedagogy',
    question: 'What study materials will I receive upon enrollment?',
    answer: 'Enrolled students receive our complete physical Kota study box: comprehensive theory modules, graded Exercise 1, 2, 3 sheets, 20-year PYQ archives, Formula Handbooks, and 120+ Daily Practice Problem (DPP) booklets delivered directly to their address.'
  },
  {
    id: 'faq-5',
    category: 'Test Series',
    question: 'Are KotaToppers mock tests based on the exact latest NTA pattern?',
    answer: 'Yes. Our CBT (Computer-Based Test) portal mirrors the exact interface, screen resolution, question navigation, timer countdown, and scoring schemes (+4/-1 for MCQs, decimal inputs for numerical sections) of the official NTA JEE Main and Advanced portals.'
  },
  {
    id: 'faq-6',
    category: 'Hostels & Campus',
    question: 'Does KotaToppers provide verified hostel accommodation assistance?',
    answer: 'Yes, our student welfare wing partners with verified, safety-audited hostels in New Rajeev Gandhi Nagar and Vigyan Nagar. We inspect hygiene, security, biometric gates, mess food quality, and RO water before recommending facilities to outstation parents.'
  }
];
