export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  targetExam: 'JEE Main & Advanced' | 'NEET Pre-Medical' | 'Foundation' | 'Olympiad & CBSE';
  targetClass: 'Class 11' | 'Class 12' | 'Class 12th Pass (Dropper)' | 'Class 9-10' | 'Class 6-8';
  mode: 'Live Interactive Online' | 'Kota Classroom Offline' | 'Self-Paced Hybrid';
  duration: string;
  batchStartDate: string;
  priceINR: number;
  originalPriceINR: number;
  rating: number;
  reviewCount: number;
  studentsEnrolled: number;
  badge?: string;
  features: string[];
  description: string;
  syllabus: {
    subject: string;
    topics: string[];
  }[];
  schedule: string;
  facultyLead: string;
}

export const coursesData: Course[] = [
  {
    id: 'jee-sangram-dropper',
    slug: 'jee-dropper-sangram-batch',
    title: 'Kota Sangram Batch: JEE Main + Advanced 2027',
    subtitle: 'Comprehensive 1-Year Repeater/Dropper rigorous Kota program engineered for top 500 AIR.',
    targetExam: 'JEE Main & Advanced',
    targetClass: 'Class 12th Pass (Dropper)',
    mode: 'Kota Classroom Offline',
    duration: '12 Months (720+ Lecture Hours)',
    batchStartDate: '15 May 2026',
    priceINR: 84999,
    originalPriceINR: 115000,
    rating: 4.9,
    reviewCount: 342,
    studentsEnrolled: 1850,
    badge: 'Kota Flagship',
    features: [
      'Daily 4 Hours Lectures by Ex-IITian Kota HODs',
      'Daily Practice Problem (DPP) with video solutions',
      '1-on-1 Personalized Kota Mentor & Doubt Clearing Cell',
      'Bi-weekly All India CBT Mock Test with NTA simulation',
      'Physical Kota Study Material & Modules dispatched home'
    ],
    description: 'Designed exclusively for dedicated drop-year engineering aspirants who want the uncompromising Kota pedagogical system. We rebuild core fundamentals from Ground Zero up to advanced multi-concept Olympiad problems.',
    syllabus: [
      {
        subject: 'Physics',
        topics: ['Mechanics & Rotational Dynamics', 'Electrodynamics & Magnetism', 'Wave Optics & SHM', 'Thermodynamics & Kinetic Theory', 'Modern Physics & Semiconductors']
      },
      {
        subject: 'Chemistry',
        topics: ['General Organic Chemistry & Reaction Mechanisms', 'Thermodynamics & Chemical Equilibrium', 'Coordination Compounds & Metallurgy', 'Electrochemistry & Solutions', 'Polymers & Biomolecules']
      },
      {
        subject: 'Mathematics',
        topics: ['Calculus (Differential & Integral)', 'Coordinate Geometry & Conic Sections', 'Vectors & 3D Geometry', 'Algebra & Complex Numbers', 'Permutations, Combinations & Probability']
      }
    ],
    schedule: 'Mon - Sat (8:30 AM to 1:30 PM) + Doubt Session (3:00 PM to 6:00 PM)',
    facultyLead: 'Er. Rakesh Sharma (B.Tech IIT Delhi, 18+ yrs Kota)'
  },
  {
    id: 'neet-arjuna-class11',
    slug: 'neet-arjuna-two-year-program',
    title: 'Kota Arjuna 2-Year Batch: NEET (UG) 2028',
    subtitle: 'Two-year rigorous foundation and advanced NEET medical program for Class 11 students.',
    targetExam: 'NEET Pre-Medical',
    targetClass: 'Class 11',
    mode: 'Live Interactive Online',
    duration: '24 Months (900+ Live Hours)',
    batchStartDate: '1 June 2026',
    priceINR: 69999,
    originalPriceINR: 95000,
    rating: 4.8,
    reviewCount: 289,
    studentsEnrolled: 2400,
    badge: 'Popular',
    features: [
      '100% NCERT Word-to-Word Analysis & Memory Maps',
      'Botany & Zoology by Senior Kota Medical Faculties',
      'Formula & Reaction Sheet booklets provided',
      'Weekly 720-Marks Full OMR Simulation tests',
      'Daily Doubt Counters active from 7 AM to 10 PM'
    ],
    description: 'A transformative 2-year journey aligning NCERT mastery with deep problem-solving skills for Physics, Chemistry, and Biology. Our students regularly achieve 680+ out of 720.',
    syllabus: [
      {
        subject: 'Biology (Botany + Zoology)',
        topics: ['Cell Biology & Genetics', 'Human Physiology & Anatomy', 'Plant Physiology & Morphology', 'Ecology & Biodiversity', 'Biotechnology & Applications']
      },
      {
        subject: 'Chemistry',
        topics: ['Atomic Structure & Periodic Trends', 'Chemical Bonding & Molecular Structure', 'Hydrocarbons & Organic Synthesis', 'Ionic Equilibrium', 'States of Matter']
      },
      {
        subject: 'Physics',
        topics: ['Units & Dimensions', 'Kinematics & Laws of Motion', 'Gravitation & Fluid Mechanics', 'Oscillations & Waves', 'Thermal Physics']
      }
    ],
    schedule: 'Mon - Fri (4:00 PM to 8:30 PM) + Sunday Mock Test',
    facultyLead: 'Dr. Vivek Singhal (MD, Senior Kota Medical Expert)'
  },
  {
    id: 'jee-pratham-class12',
    slug: 'jee-pratham-target-class12',
    title: 'Kota Pratham Batch: JEE Main + Advanced 2027',
    subtitle: 'Class 12th intensive course covering 12th board syllabus + complete 11th fast-track revision.',
    targetExam: 'JEE Main & Advanced',
    targetClass: 'Class 12',
    mode: 'Live Interactive Online',
    duration: '10 Months (550+ Live Hours)',
    batchStartDate: '20 May 2026',
    priceINR: 59999,
    originalPriceINR: 79999,
    rating: 4.9,
    reviewCount: 198,
    studentsEnrolled: 1620,
    features: [
      'Dual-Track: 12th Board 95%+ guarantee & JEE Adv focus',
      'Archive Question Banks (last 20 years with video explanations)',
      'Kota Rank-Booster Test Series (24 Part + 16 Full Tests)',
      'Direct WhatsApp access to your personal HOD mentor'
    ],
    description: 'Perfect for Class 12 students aiming to crack JEE in their very first attempt without compromising on Board exam marks.',
    syllabus: [
      {
        subject: 'Physics',
        topics: ['Electrostatics & Current Electricity', 'Magnetism & Matter', 'Electromagnetic Induction & AC', 'Ray & Wave Optics', 'Nuclear Physics']
      },
      {
        subject: 'Chemistry',
        topics: ['Aldehydes, Ketones & Carboxylic Acids', 'Haloalkanes & Haloarenes', 'd & f-block Elements', 'Chemical Kinetics', 'Biomolecules']
      },
      {
        subject: 'Mathematics',
        topics: ['Relations, Functions & Inverse Trig', 'Matrices & Determinants', 'Calculus Mastery', 'Linear Programming', 'Vector & 3D Geometry']
      }
    ],
    schedule: 'Mon - Sat (5:00 PM to 9:00 PM)',
    facultyLead: 'Er. Amit Verma (M.Tech IIT Kharagpur)'
  },
  {
    id: 'neet-achiever-dropper',
    slug: 'neet-achiever-dropper-batch',
    title: 'Kota Achiever Batch: NEET Repeater 2027',
    subtitle: 'Specialized dropper batch for students targeting Government Medical Colleges & AIIMS.',
    targetExam: 'NEET Pre-Medical',
    targetClass: 'Class 12th Pass (Dropper)',
    mode: 'Kota Classroom Offline',
    duration: '11 Months (680+ Class Hours)',
    batchStartDate: '25 May 2026',
    priceINR: 79999,
    originalPriceINR: 105000,
    rating: 4.95,
    reviewCount: 420,
    studentsEnrolled: 2100,
    badge: 'High Conversion',
    features: [
      'Rank-booster workshops for tricky Physics calculations',
      '10,000+ NCERT Biology Assertion-Reason drills',
      'Daily 200 question OMR speed practice',
      'Individual performance audit every 15 days'
    ],
    description: 'Specifically engineered to transform 450-550 NEET scores into 670+ toppers through rigorous question drilling, conceptual micro-corrections, and exam temperament training.',
    syllabus: [
      {
        subject: 'Complete PCB',
        topics: ['Comprehensive 11th + 12th NCERT Syllabus Revision', 'Topical Problem Solving Sheets', 'Speed Drills', 'Error Analysis Logbooks']
      }
    ],
    schedule: 'Mon - Sat (9:00 AM to 2:00 PM)',
    facultyLead: 'Dr. Sunita Rathore (Ex-Dean Allen/Resonance Kota)'
  },
  {
    id: 'foundation-olympiad-class9-10',
    slug: 'foundation-olympiad-pinnacle',
    title: 'Kota Pinnacle Foundation: Class 9th & 10th',
    subtitle: 'Early start for IOQM, NTSE, CBSE Boards & IIT/NEET foundation building.',
    targetExam: 'Foundation',
    targetClass: 'Class 9-10',
    mode: 'Live Interactive Online',
    duration: '10 Months (320+ Live Hours)',
    batchStartDate: '10 June 2026',
    priceINR: 34999,
    originalPriceINR: 48000,
    rating: 4.85,
    reviewCount: 167,
    studentsEnrolled: 1350,
    features: [
      'Strong logical thinking & mathematical Olympiad puzzles',
      'Conceptual Science experiments & virtual 3D models',
      'CBSE School curriculum 100% covered',
      'National Talent Search (NTSE) & IOQM specialized modules'
    ],
    description: 'Nurture scientific curiosity and logical rigor in young minds before Class 11. Our foundation alumni consistently secure Top 100 ranks in JEE and NEET.',
    syllabus: [
      {
        subject: 'Foundation Science',
        topics: ['Motion, Gravitation & Optics', 'Chemical Reactions, Acids & Carbon', 'Life Processes & Reproduction', 'Environmental Systems']
      },
      {
        subject: 'Foundation Mathematics',
        topics: ['Number Theory & Real Numbers', 'Polynomials & Quadratic Equations', 'Coordinate Geometry & Trigonometry', 'Olympiad Combinatorics']
      }
    ],
    schedule: 'Tue, Thu, Sat (5:30 PM to 8:00 PM) + Sunday Mentorship',
    facultyLead: 'Prof. Narendra Saini (Kota Foundation Lead)'
  },
  {
    id: 'foundation-junior-class6-8',
    slug: 'foundation-junior-ignite',
    title: 'Kota Ignite Junior: Class 6th to 8th',
    subtitle: 'Building mental ability, math olympiad aptitude, and science intuition.',
    targetExam: 'Foundation',
    targetClass: 'Class 6-8',
    mode: 'Live Interactive Online',
    duration: '9 Months (200+ Live Hours)',
    batchStartDate: '15 June 2026',
    priceINR: 24999,
    originalPriceINR: 35000,
    rating: 4.75,
    reviewCount: 114,
    studentsEnrolled: 980,
    features: [
      'Mental Ability & Speed Math Vedic techniques',
      'Visual interactive science simulations',
      'Homework assist & regular parent-teacher reviews',
      'Fun weekly quizzes and scholarship badges'
    ],
    description: 'A fun yet academically rigorous program that prepares middle school students for science exhibitions, math olympiads, and school excellence.',
    syllabus: [
      {
        subject: 'Math & Mental Ability',
        topics: ['Speed Arithmetic & Number Puzzles', 'Algebra Fundamentals', 'Basic Geometry & Angles', 'Patterns & Logical Reasoning']
      },
      {
        subject: 'General Science',
        topics: ['Matter & Energy', 'Living Organisms & Habitat', 'Basic Forces & Machines', 'Light, Shadow & Reflection']
      }
    ],
    schedule: 'Mon, Wed, Fri (4:30 PM to 6:30 PM)',
    facultyLead: 'Ms. Pooja Meena (M.Sc, B.Ed Kota)'
  }
];
