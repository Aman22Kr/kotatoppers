export interface StudyMaterial {
  id: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology' | 'Mental Ability';
  category: 'Formula Sheets' | 'Daily Practice Problems (DPP)' | 'NCERT Line-by-Line' | 'PYQ Chapterwise' | 'Revision Mindmaps';
  targetExam: 'JEE Main & Adv' | 'NEET UG' | 'Foundation';
  pages: number;
  fileSize: string;
  downloadCount: number;
  description: string;
  keyTopics: string[];
}

export const studyMaterialData: StudyMaterial[] = [
  {
    id: 'mat-phy-formula',
    title: 'Complete Physics Formula Handbook for JEE & NEET (11th + 12th)',
    subject: 'Physics',
    category: 'Formula Sheets',
    targetExam: 'JEE Main & Adv',
    pages: 48,
    fileSize: '4.2 MB',
    downloadCount: 14200,
    description: 'Every formula, sign convention, dimensional equation, and edge case from Kinematics to Modern Physics, curated by Kota HODs.',
    keyTopics: ['Mechanics', 'Electrostatics', 'Magnetism', 'Ray Optics', 'Modern Physics']
  },
  {
    id: 'mat-chem-reactions',
    title: 'Organic Chemistry Master Flowchart & Named Reactions Book',
    subject: 'Chemistry',
    category: 'Revision Mindmaps',
    targetExam: 'JEE Main & Adv',
    pages: 36,
    fileSize: '6.8 MB',
    downloadCount: 18500,
    description: 'Visual roadmaps of 65+ reaction mechanisms, reagents chart, inter-conversions, and acidity-basicity comparisons.',
    keyTopics: ['GOC', 'Aldol & Cannizzaro', 'Grignard Reagents', 'Diazonium Salts', 'Biomolecules']
  },
  {
    id: 'mat-bio-ncert',
    title: 'NEET Biology 360/360 NCERT Line-by-Line Highlighted Extracts',
    subject: 'Biology',
    category: 'NCERT Line-by-Line',
    targetExam: 'NEET UG',
    pages: 72,
    fileSize: '8.1 MB',
    downloadCount: 22100,
    description: 'Every tricky line, diagram label, scientist footnote, and hidden statement from Class 11 & 12 NCERT decoded with expected question types.',
    keyTopics: ['Human Physiology', 'Genetics & Evolution', 'Plant Reproduction', 'Cell Cycle', 'Ecology']
  },
  {
    id: 'mat-math-calculus-dpp',
    title: 'Kota Advanced DPP Series: Differential & Integral Calculus',
    subject: 'Mathematics',
    category: 'Daily Practice Problems (DPP)',
    targetExam: 'JEE Main & Adv',
    pages: 54,
    fileSize: '5.4 MB',
    downloadCount: 9800,
    description: '150 handpicked multi-concept problems with step-by-step analytical solutions, grading from Level 1 to JEE Advanced Level 3.',
    keyTopics: ['Limits & Continuity', 'Application of Derivatives', 'Definite Integrals', 'Differential Equations']
  },
  {
    id: 'mat-chem-inorganic-periodic',
    title: 'Inorganic Chemistry Short Notes & Exception Cheat Sheet',
    subject: 'Chemistry',
    category: 'Formula Sheets',
    targetExam: 'NEET UG',
    pages: 28,
    fileSize: '3.1 MB',
    downloadCount: 16400,
    description: 'Consolidated notes on trends, anomalies, ionization enthalpy, oxidation states, and colored complexes.',
    keyTopics: ['Periodic Table', 'Chemical Bonding', 'p-Block Elements', 'Coordination Compounds']
  },
  {
    id: 'mat-pyq-jee-10yr',
    title: 'JEE Advanced Last 10 Years Topic-wise Solved Question Bank',
    subject: 'Physics',
    category: 'PYQ Chapterwise',
    targetExam: 'JEE Main & Adv',
    pages: 110,
    fileSize: '12.5 MB',
    downloadCount: 25700,
    description: 'Original IIT JEE Advanced papers with comprehensive analytical solutions and alternate shortcut methods.',
    keyTopics: ['Rotational Motion', 'Electromagnetic Induction', 'Thermodynamics', 'Fluid Mechanics']
  },
  {
    id: 'mat-foundation-ntse-mat',
    title: 'Mental Ability (MAT) Speed Workbook for NTSE & Foundation',
    subject: 'Mental Ability',
    category: 'Daily Practice Problems (DPP)',
    targetExam: 'Foundation',
    pages: 42,
    fileSize: '3.9 MB',
    downloadCount: 7600,
    description: 'Number series, verbal & non-verbal reasoning, blood relations, and coding-decoding drills for Classes 8-10.',
    keyTopics: ['Series Completion', 'Analogy', 'Venn Diagrams', 'Cube & Dice', 'Direction Sense']
  }
];
