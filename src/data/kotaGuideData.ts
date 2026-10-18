export interface KotaGuideTopic {
  id: string;
  category: 'Accommodation & Hostels' | 'Daily Routine of a Topper' | 'Mess & Food' | 'Mental Wellness & Support' | 'City Landmarks';
  title: string;
  summary: string;
  details: string[];
  tips: string[];
}

export const kotaGuideTopics: KotaGuideTopic[] = [
  {
    id: 'guide-daily-routine',
    category: 'Daily Routine of a Topper',
    title: 'The Proven 14-Hour Kota Topper Timetable',
    summary: 'A balanced, non-burnout daily blueprint followed by top 100 AIR students in Kota to maintain peak mental focus across 365 days.',
    details: [
      '6:30 AM - Wake up, light hydration, 15-min mindfulness breathing and physical stretch.',
      '7:30 AM to 1:30 PM - Intensive Classroom Lectures / Live sessions with note-taking and concept consolidation.',
      '1:30 PM to 2:30 PM - Wholesome lunch and 30-min power nap for neuro-cognitive reset.',
      '2:30 PM to 5:00 PM - Slot 1 Self Study: Daily DPP solving and homework problem sheets without looking at solutions.',
      '5:00 PM to 5:30 PM - Evening snack, outdoor walk or physical badminton with peers.',
      '5:30 PM to 8:30 PM - Slot 2 Self Study: Deep Theory reading (NCERT line-by-line & standard reference texts).',
      '8:30 PM to 9:30 PM - Dinner and brief conversation with family/parents.',
      '9:30 PM to 11:30 PM - Slot 3: Error Logbook review, formula revision, and planning the next day’s task checklist.',
      '11:30 PM - Sleep (uninterrupted 7 hours minimum is non-negotiable).'
    ],
    tips: [
      'Never study with social media apps active. Keep phone in airplane mode during study blocks.',
      'Maintain an "Error Diary" for every mock test. Review it every Sunday morning before taking any new test.'
    ]
  },
  {
    id: 'guide-hostels',
    category: 'Accommodation & Hostels',
    title: 'Hostel Guide: New Rajeev Gandhi Nagar & Landmarks',
    summary: 'Key factors when choosing student accommodation in Kota, safety protocols, biometric gates, and essential amenities.',
    details: [
      'New Rajeev Gandhi Nagar & Vigyan Nagar: Located within 5-10 minutes walking distance from KotaToppers campus, eliminating daily commute fatigue.',
      'Key Amenities to Verify: Ergonomic study table and chair with good back support, high-lumens LED desk lamp, silent air-cooling or AC, and verified RO water purifier.',
      'Security Protocols: 24/7 CCTV surveillance, biometric parent-notified attendance, dedicated warden, and zero ragging tolerance.',
      'Budget Guidelines: Single AC rooms average ₹12,000 - ₹16,000/month including meals; Non-AC rooms range from ₹8,000 - ₹11,000/month.'
    ],
    tips: [
      'Prioritize natural ventilation and quiet surroundings over flashy hostel lobbies.',
      'Ensure the hostel is in a zone where walking to morning class takes under 7 minutes.'
    ]
  },
  {
    id: 'guide-wellness',
    category: 'Mental Wellness & Support',
    title: 'Mental Health, Stress Management & KotaToppers Helpline',
    summary: 'Proactive emotional wellness support, certified counselors, peer buddy systems, and round-the-clock guidance.',
    details: [
      'KotaToppers Wellness Center: Free, confidential 1-on-1 counseling with licensed clinical psychologists specialized in adolescent academic pressure.',
      '24/7 Kota Student Helpline: Dedicated crisis and stress listening line (+91 9602281833) operated by trained counselors.',
      'Sunday Recreational Sessions: Meditation, group yoga, light music, and interactive sessions with senior faculty mentors.',
      'Parent-Student Connect: Fortnightly orientation webinars helping parents support their children constructively without unrealistic score pressure.'
    ],
    tips: [
      'Remember: An entrance exam rank does not define your intrinsic human worth or lifetime potential.',
      'If you ever feel overwhelmed or anxious, walk straight to KotaToppers counseling room—our doors are open 24/7.'
    ]
  },
  {
    id: 'guide-mess-food',
    category: 'Mess & Food',
    title: 'Nutrition & Digestive Health for Long Study Hours',
    summary: 'Staying physically energetic and avoiding common Kota gastrointestinal fatigue during peak prep seasons.',
    details: [
      'Kota student messes serve fresh Rajasthani, North Indian, and South Indian vegetarian thalis with rotis, dal, seasonal sabzi, and curd.',
      'Avoid oily street snacks outside coaching centers. Greasy foods cause post-lunch lethargy and reduce retention span.',
      'Hydration Routine: Drink at least 3 liters of purified water daily, especially during Kota summers (April-June) when temperatures reach 44°C.',
      'Brain Foods: Keep roasted almonds, walnuts, bananas, and roasted chana at your study desk for quick healthy snacking.'
    ],
    tips: [
      'Never skip morning breakfast; your brain needs glucose for the morning 8:30 AM problem-solving lecture.',
      'Carry your own insulated water flask to class and test centers.'
    ]
  }
];
