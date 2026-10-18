export interface Topper {
  id: string;
  name: string;
  exam: 'JEE Advanced' | 'JEE Main' | 'NEET (UG)' | 'Olympiad / NTSE';
  rankOrScore: string;
  year: number;
  courseTaken: string;
  collegeAdmitted: string;
  hometown: string;
  testimonial: string;
  avatarInitials: string;
  badge: string;
}

export const toppersData: Topper[] = [
  {
    id: 'top-1',
    name: 'Aayush Verma',
    exam: 'JEE Advanced',
    rankOrScore: 'AIR 4',
    year: 2025,
    courseTaken: 'Kota Sangram Dropper Batch',
    collegeAdmitted: 'IIT Bombay (Computer Science & Engg.)',
    hometown: 'Jaipur, Rajasthan',
    testimonial: 'Joining KotaToppers changed my entire approach to Physics and Advanced Calculus. The HOD doubt sessions and daily test analysis removed every single conceptual flaw before exam day.',
    avatarInitials: 'AV',
    badge: 'State Topper'
  },
  {
    id: 'top-2',
    name: 'Priyanka Sen',
    exam: 'NEET (UG)',
    rankOrScore: '715 / 720 (AIR 11)',
    year: 2025,
    courseTaken: 'Kota Arjuna 2-Year Classroom Program',
    collegeAdmitted: 'AIIMS, New Delhi',
    hometown: 'Lucknow, Uttar Pradesh',
    testimonial: 'Dr. Vivek Singhal sir’s Biology diagrams and NCERT line decoding were unmatched. KotaToppers test series simulated the exact pressure of the actual NEET examination.',
    avatarInitials: 'PS',
    badge: 'AIIMS Delhi Admit'
  },
  {
    id: 'top-3',
    name: 'Rohan Deshmukh',
    exam: 'JEE Main',
    rankOrScore: '100.00 Percentile (AIR 18)',
    year: 2025,
    courseTaken: 'Kota Pratham Class 12 Batch',
    collegeAdmitted: 'IIT Delhi (Electrical Engg.)',
    hometown: 'Pune, Maharashtra',
    testimonial: 'The structured daily schedule, high-caliber DPPs, and continuous mentorship kept my morale high through 12th boards and JEE preparation simultaneously.',
    avatarInitials: 'RD',
    badge: '100 Percentile'
  },
  {
    id: 'top-4',
    name: 'Ananya Mehra',
    exam: 'NEET (UG)',
    rankOrScore: '705 / 720 (AIR 48)',
    year: 2024,
    courseTaken: 'Kota Achiever Dropper Program',
    collegeAdmitted: 'Maulana Azad Medical College (MAMC), Delhi',
    hometown: 'Bhopal, Madhya Pradesh',
    testimonial: 'In my first attempt I had scored 540. KotaToppers faculty pinpointed my weak zones in Physical Chemistry and Genetics, lifting my score to 705!',
    avatarInitials: 'AM',
    badge: 'Repeater Success'
  },
  {
    id: 'top-5',
    name: 'Karthik Raja',
    exam: 'JEE Advanced',
    rankOrScore: 'AIR 27',
    year: 2024,
    courseTaken: 'Kota 2-Year Pinnacle Program',
    collegeAdmitted: 'IIT Madras (Computer Science)',
    hometown: 'Hyderabad, Telangana',
    testimonial: 'The peer group at KotaToppers is intensely focused. Everyone around you is solving Irodov and Krotov, creating an environment where excellence is the minimum baseline.',
    avatarInitials: 'KR',
    badge: 'IIT Madras'
  },
  {
    id: 'top-6',
    name: 'Divyansh Agrawal',
    exam: 'Olympiad / NTSE',
    rankOrScore: 'IOQM Merit List & NTSE Scholar',
    year: 2025,
    courseTaken: 'Kota Pinnacle Foundation (Class 10)',
    collegeAdmitted: 'Selected for National Science Camp',
    hometown: 'Indore, Madhya Pradesh',
    testimonial: 'Prof. Narendra Saini sir made mathematics feel like an exciting detective game. Foundation at KotaToppers built an unshakable base for my future JEE goals.',
    avatarInitials: 'DA',
    badge: 'Olympiad Qualifier'
  }
];
