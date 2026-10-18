export interface Question {
  id: number;
  subject: 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology';
  text: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface TestPackage {
  id: string;
  slug: string;
  title: string;
  targetExam: 'JEE Main' | 'JEE Advanced' | 'NEET UG' | 'Foundation NTSE';
  testsCount: number;
  fullMockCount: number;
  chapterTestsCount: number;
  durationMinutes: number;
  totalMarks: number;
  priceINR: number;
  originalPriceINR: number;
  features: string[];
  isPopular?: boolean;
  sampleQuestions: Question[];
}

export const sampleCbtQuestions: Question[] = [
  {
    id: 1,
    subject: 'Physics',
    text: 'A block of mass m is placed on a smooth inclined plane of inclination θ. What horizontal force F must be applied to the incline of mass M so that the block remains stationary relative to the incline?',
    options: [
      '(M + m) g tan θ',
      '(M + m) g cot θ',
      'm g sin θ',
      '(M + m) g cos θ'
    ],
    correctOptionIndex: 0,
    explanation: 'For the block to be stationary relative to the incline, the pseudo force ma must balance the component of gravity. Here a = g tan θ. Therefore total force on (M + m) is F = (M + m) a = (M + m) g tan θ.'
  },
  {
    id: 2,
    subject: 'Physics',
    text: 'A charged particle enters a uniform magnetic field with its velocity vector inclined at an angle of 60° to the direction of the magnetic field. The path of the particle is a:',
    options: [
      'Circle',
      'Helix with constant pitch',
      'Straight line',
      'Parabola'
    ],
    correctOptionIndex: 1,
    explanation: 'The component of velocity parallel to B remains unaffected (v cos θ), producing uniform linear motion. The perpendicular component (v sin θ) produces uniform circular motion. The superposition yields a helix with constant pitch.'
  },
  {
    id: 3,
    subject: 'Chemistry',
    text: 'Which of the following compounds exhibits maximum enol content at equilibrium in gaseous or non-polar solvent?',
    options: [
      'CH3 - CO - CH3 (Acetone)',
      'CH3 - CO - CH2 - CO - CH3 (Acetylacetone)',
      'CH3 - CHO (Acetaldehyde)',
      'CH3 - CO - CH2 - CH3 (Butanone)'
    ],
    correctOptionIndex: 1,
    explanation: 'In acetylacetone (a β-diketone), the enol form is stabilized by resonance conjugation with the adjacent carbonyl group and by strong intramolecular hydrogen bonding, yielding over 75% enol content.'
  },
  {
    id: 4,
    subject: 'Chemistry',
    text: 'According to Crystal Field Theory, the magnetic moment of [CoF6]3- (atomic number of Co = 27) in Bohr Magnetons (BM) is approximately:',
    options: [
      '0 BM (Diamagnetic)',
      '1.73 BM',
      '4.90 BM (High Spin)',
      '3.87 BM'
    ],
    correctOptionIndex: 2,
    explanation: 'Co3+ is d6 configuration. Fluoride (F-) is a weak field ligand, so pairing does not occur (high spin t2g4 eg2). Number of unpaired electrons n = 4. Magnetic moment = sqrt(4(4+2)) = sqrt(24) ≈ 4.90 BM.'
  },
  {
    id: 5,
    subject: 'Mathematics',
    text: 'The value of the definite integral ∫ from 0 to π/2 of (sin³ x) / (sin³ x + cos³ x) dx is:',
    options: [
      'π',
      'π / 2',
      'π / 4',
      '0'
    ],
    correctOptionIndex: 2,
    explanation: 'By King\'s property of definite integrals: I = ∫ f(x) dx = ∫ f(a+b-x) dx. Adding both equations gives 2I = ∫ from 0 to π/2 of 1 dx = π/2, hence I = π/4.'
  },
  {
    id: 6,
    subject: 'Mathematics',
    text: 'If the roots of the equation x² - px + q = 0 differ by 1, then which of the following relationships holds true?',
    options: [
      'p² = 4q + 1',
      'p² = 4q - 1',
      'q² = 4p + 1',
      'p² = q² + 4'
    ],
    correctOptionIndex: 0,
    explanation: 'Let roots be α and β with |α - β| = 1. (α - β)² = (α + β)² - 4αβ. Since α + β = p and αβ = q, we have 1² = p² - 4q => p² = 4q + 1.'
  },
  {
    id: 7,
    subject: 'Biology',
    text: 'In human heart physiology, the "pacemaker" of the heart is located in:',
    options: [
      'Atrioventricular Node (AV Node)',
      'Bundle of His',
      'Sinoatrial Node (SA Node) in the right atrium',
      'Purkinje fibers in the left ventricle'
    ],
    correctOptionIndex: 2,
    explanation: 'The SA Node (Sinoatrial node), located in the upper right wall of the right atrium, generates intrinsic electrical impulses at 70-75 times per minute, acting as the primary cardiac pacemaker.'
  },
  {
    id: 8,
    subject: 'Biology',
    text: 'During aerobic cellular respiration, the net yield of ATP molecules per molecule of glucose oxidized in eukaryotic cells is typically:',
    options: [
      '2 ATP',
      '18 ATP',
      '30 to 32 ATP',
      '44 ATP'
    ],
    correctOptionIndex: 2,
    explanation: 'Complete aerobic respiration of 1 molecule of glucose yields 2 ATP in glycolysis, 2 ATP/GTP in Krebs cycle, and approximately 26-28 ATP via the electron transport chain (oxidative phosphorylation), totaling 30-32 ATP.'
  }
];

export const testPackagesData: TestPackage[] = [
  {
    id: 'jee-adv-all-india',
    slug: 'jee-advanced-all-india-test-series',
    title: 'KotaToppers All India JEE Advanced Test Series 2027',
    targetExam: 'JEE Advanced',
    testsCount: 36,
    fullMockCount: 20,
    chapterTestsCount: 16,
    durationMinutes: 180,
    totalMarks: 360,
    priceINR: 4999,
    originalPriceINR: 7999,
    features: [
      'Exact NTA & IIT JEE Advanced CBT software interface',
      'All India Percentile, Rank & Peer Comparison report',
      'Step-by-step video solution for every single problem',
      'Question-level time analysis (time spent on correct vs wrong)',
      'Weak chapter heatmaps powered by Kota diagnostic metrics'
    ],
    isPopular: true,
    sampleQuestions: sampleCbtQuestions.filter(q => q.subject !== 'Biology')
  },
  {
    id: 'neet-omr-all-india',
    slug: 'neet-ug-all-india-mock-series',
    title: 'KotaToppers NEET (UG) 720 Grand Test Series',
    targetExam: 'NEET UG',
    testsCount: 42,
    fullMockCount: 24,
    chapterTestsCount: 18,
    durationMinutes: 200,
    totalMarks: 720,
    priceINR: 3999,
    originalPriceINR: 6499,
    features: [
      '720-mark full syllabus simulation matching latest NTA pattern',
      'NCERT page-number references for every Biology & Chem question',
      'Special Assertion-Reason and Statement I/II question drills',
      'Negative marking audit to reduce silly mistakes'
    ],
    isPopular: true,
    sampleQuestions: sampleCbtQuestions.filter(q => q.subject !== 'Mathematics')
  },
  {
    id: 'jee-main-speed-booster',
    slug: 'jee-main-speed-booster-tests',
    title: 'JEE Main 300-Marks Speed & Accuracy Booster',
    targetExam: 'JEE Main',
    testsCount: 30,
    fullMockCount: 15,
    chapterTestsCount: 15,
    durationMinutes: 180,
    totalMarks: 300,
    priceINR: 2999,
    originalPriceINR: 4999,
    features: [
      'Shift-wise pattern matching previous January & April attempts',
      'Numerical value section accuracy optimizer',
      'Instant percentile predictor based on historical cutoffs'
    ],
    sampleQuestions: sampleCbtQuestions.filter(q => q.subject !== 'Biology')
  },
  {
    id: 'foundation-olympiad-drill',
    slug: 'foundation-olympiad-test-pack',
    title: 'Junior Olympiad & NTSE Mock Sprint (Class 8-10)',
    targetExam: 'Foundation NTSE',
    testsCount: 20,
    fullMockCount: 10,
    chapterTestsCount: 10,
    durationMinutes: 120,
    totalMarks: 200,
    priceINR: 1999,
    originalPriceINR: 3299,
    features: [
      'Mental Ability & Logical Aptitude speed tests',
      'IOQM Math puzzle challenge series',
      'Detailed diagnostic report card for parents'
    ],
    sampleQuestions: sampleCbtQuestions
  }
];
