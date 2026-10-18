/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DemoBookingModal } from './components/DemoBookingModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { TestSeriesPage } from './pages/TestSeriesPage';
import { TestSimulatorPage } from './pages/TestSimulatorPage';
import { FacultyPage } from './pages/FacultyPage';
import { StudyMaterialPage } from './pages/StudyMaterialPage';
import { ResultsPage } from './pages/ResultsPage';
import { KotaGuidePage } from './pages/KotaGuidePage';
import { BookDemoPage } from './pages/BookDemoPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardPage } from './pages/DashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on hash route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedCourseForDemo, setSelectedCourseForDemo] = useState<string | undefined>(undefined);

  const handleOpenDemo = (courseTitle?: string) => {
    setSelectedCourseForDemo(courseTitle);
    setDemoModalOpen(true);
  };

  const handleOpenSearch = () => {
    setSearchModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
        <Header
          onOpenDemo={() => handleOpenDemo()}
          onOpenSearch={handleOpenSearch}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenDemo={handleOpenDemo} />} />
            <Route path="/about" element={<AboutPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/courses" element={<CoursesPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/courses/:slug" element={<CourseDetailPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/test-series" element={<TestSeriesPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/test-series/simulator" element={<TestSimulatorPage />} />
            <Route path="/faculty" element={<FacultyPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/study-material" element={<StudyMaterialPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/results" element={<ResultsPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/kota-guide" element={<KotaGuidePage onOpenDemo={handleOpenDemo} />} />
            <Route path="/book-demo" element={<BookDemoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dashboard" element={<DashboardPage onOpenDemo={handleOpenDemo} />} />
            <Route path="*" element={<NotFoundPage onOpenDemo={handleOpenDemo} />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Modals */}
        <DemoBookingModal
          isOpen={demoModalOpen}
          onClose={() => setDemoModalOpen(false)}
          defaultCourseTitle={selectedCourseForDemo}
        />

        <GlobalSearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
        />
      </div>
    </Router>
  );
}
