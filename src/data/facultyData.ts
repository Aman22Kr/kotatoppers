export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology (Botany/Zoology)' | 'Foundation';
  education: string;
  experienceYears: number;
  kotaExperience: string;
  specialization: string;
  bio: string;
  highlights: string[];
  studentsTrained: string;
  topRankProduced: string;
  imageFallbackLabel: string;
}

export const facultyData: FacultyMember[] = [
  {
    id: 'fac-rakesh-sharma',
    name: 'Er. Rakesh Sharma',
    title: 'Head of Department - Physics',
    department: 'Physics',
    education: 'B.Tech, IIT Delhi (Mechanical)',
    experienceYears: 18,
    kotaExperience: '18+ Years in Kota top institutes',
    specialization: 'Rotational Mechanics, Electrodynamics & Advanced Problem Solving',
    bio: 'Renowned across Kota for his intuitive visual demonstrations of complex mechanics and electrodynamics. He has trained more than 35 students who scored top 100 AIR in JEE Advanced.',
    highlights: ['Author of "Mechanics for IIT JEE"', 'Former Senior Faculty at Premier Kota Institutes', 'Mentored AIR 4, 11, and 23 in JEE Advanced'],
    studentsTrained: '45,000+',
    topRankProduced: 'AIR 4 (JEE Advanced)',
    imageFallbackLabel: 'RS'
  },
  {
    id: 'fac-vivek-singhal',
    name: 'Dr. Vivek Singhal',
    title: 'Head of Department - Biology (Zoology & Human Physiology)',
    department: 'Biology (Botany/Zoology)',
    education: 'M.B.B.S., M.D., SMS Medical College Jaipur',
    experienceYears: 16,
    kotaExperience: '16 Years leading Kota Medical Coaching',
    specialization: 'Human Physiology, Genetics & Molecular Biology',
    bio: 'Dr. Singhal translates dry medical anatomy and genetics into engaging clinical stories that stick with students for life. Over 800 of his students are currently practicing doctors.',
    highlights: ['Master of NCERT line-by-line decoding', 'Guided 90+ students to 350+ marks in NEET Biology', 'Gold medalist in Medical Biochemistry'],
    studentsTrained: '38,000+',
    topRankProduced: 'AIR 1 (NEET 715/720)',
    imageFallbackLabel: 'VS'
  },
  {
    id: 'fac-amit-verma',
    name: 'Er. Amit Verma',
    title: 'Head of Department - Mathematics',
    department: 'Mathematics',
    education: 'M.Tech, IIT Kharagpur',
    experienceYears: 15,
    kotaExperience: '15 Years in Kota System',
    specialization: 'Calculus, Coordinate Geometry & Complex Numbers',
    bio: 'Known as the "Shortcut Wizard" among Kota aspirants, Er. Verma teaches students how to solve seemingly impossible 5-minute JEE Advanced math questions in under 90 seconds using geometric invariants.',
    highlights: ['Creator of the 3-Step Conic Sections Algorithm', 'IOQM & INMO coach', 'Popular mentor for repeaters and Olympiad qualifiers'],
    studentsTrained: '30,000+',
    topRankProduced: 'AIR 14 (JEE Advanced)',
    imageFallbackLabel: 'AV'
  },
  {
    id: 'fac-sunita-rathore',
    name: 'Dr. Sunita Rathore',
    title: 'Senior Faculty - Chemistry (Organic & Inorganic)',
    department: 'Chemistry',
    education: 'Ph.D in Organic Chemistry, Rajasthan University',
    experienceYears: 14,
    kotaExperience: '14 Years in Kota Coaching Centers',
    specialization: 'Reaction Mechanisms, Named Reactions & Periodic Tables',
    bio: 'Dr. Sunita eliminates fear of Organic Chemistry by teaching core electron push mechanisms rather than rote memorization. Her colored reaction flowcharts are legendary among students.',
    highlights: ['Pioneer of "Organic Reaction Mindmaps"', 'Produced 100/100 scores in CBSE Board Chemistry', 'Top mentor for NEET Chemistry 170+ marks'],
    studentsTrained: '28,000+',
    topRankProduced: 'AIR 28 (NEET)',
    imageFallbackLabel: 'SR'
  },
  {
    id: 'fac-manish-gupta',
    name: 'Er. Manish Gupta',
    title: 'Senior Faculty - Physical Chemistry',
    department: 'Chemistry',
    education: 'B.Tech, NIT Kurukshetra (Chemical)',
    experienceYears: 12,
    kotaExperience: '12 Years teaching in Kota',
    specialization: 'Thermodynamics, Electrochemistry & Chemical Equilibrium',
    bio: 'A master of numerical calculations and dimensional analysis, Er. Manish makes thermodynamics and ionic equilibrium feel effortless and fun.',
    highlights: ['Calculations without calculator expert', 'Author of 200 Tricky Physical Chemistry Problems', 'Specialist in JEE Main 100 percentiles'],
    studentsTrained: '22,000+',
    topRankProduced: 'AIR 32 (JEE Main)',
    imageFallbackLabel: 'MG'
  },
  {
    id: 'fac-narendra-saini',
    name: 'Prof. Narendra Saini',
    title: 'Director - Foundation & Junior Olympiads',
    department: 'Foundation',
    education: 'M.Sc (Physics), B.Ed',
    experienceYears: 13,
    kotaExperience: '13 Years nurturing Foundation batches',
    specialization: 'Mental Ability, Junior Science Olympiads & NTSE',
    bio: 'Prof. Saini specializes in igniting curiosity in grades 6th-10th, transforming average students into state rankers and NTSE scholars with kind, encouraging pedagogy.',
    highlights: ['Trained 120+ NTSE Scholars', 'Expert in Vedic Math & Logical Reasoning', 'Keynote speaker on student psychology'],
    studentsTrained: '19,000+',
    topRankProduced: 'State Rank 1 (NTSE & IOQM)',
    imageFallbackLabel: 'NS'
  }
];
