import React, { useState } from 'react';
import { studyMaterialData, StudyMaterial } from '../data/studyMaterialData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Download, FileText, CheckCircle, Search, Filter, BookOpen } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

interface StudyMaterialPageProps {
  onOpenDemo: (title?: string) => void;
}

export const StudyMaterialPage: React.FC<StudyMaterialPageProps> = ({ onOpenDemo }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [downloadedItems, setDownloadedItems] = useLocalStorage<string[]>('kotatoppers_downloaded_materials', []);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredMaterials = studyMaterialData.filter(item => {
    const matchSubj = selectedSubject === 'All' || item.subject === selectedSubject;
    const matchCat = selectedCat === 'All' || item.category === selectedCat;
    const matchSearch = !search.trim() ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.keyTopics.some(t => t.toLowerCase().includes(search.toLowerCase()));

    return matchSubj && matchCat && matchSearch;
  });

  const handleDownload = (item: StudyMaterial) => {
    if (!downloadedItems.includes(item.id)) {
      setDownloadedItems([item.id, ...downloadedItems]);
    }
    setToastMessage(`Downloading "${item.title}"... Saved to Student Portal.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-700 text-xs">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Free Open Educational Resources
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kota Revision Notes & Formula Booklets
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            Download verified Kota study modules, Daily Practice Problems (DPP), formula sheets, and chapter-wise question banks for JEE, NEET, and Olympiads.
          </p>

          {/* Search & Filters */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <div className="sm:col-span-1">
              <input
                type="text"
                placeholder="Search notes by topic or formula..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-xs sm:text-sm py-2 px-3 bg-slate-900 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full text-xs py-2 px-3 bg-slate-900 text-slate-200 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500"
              >
                <option value="All">All Subjects</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Biology">Biology</option>
                <option value="Mental Ability">Mental Ability</option>
              </select>
            </div>
            <div>
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
                className="w-full text-xs py-2 px-3 bg-slate-900 text-slate-200 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500"
              >
                <option value="All">All Categories</option>
                <option value="Formula Sheets">Formula Sheets</option>
                <option value="Daily Practice Problems (DPP)">Daily Practice Problems (DPP)</option>
                <option value="NCERT Line-by-Line">NCERT Line-by-Line</option>
                <option value="PYQ Chapterwise">PYQs Chapterwise</option>
                <option value="Revision Mindmaps">Revision Mindmaps</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Material List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="text-xs text-slate-500 mb-6">
          Showing <strong>{filteredMaterials.length}</strong> study modules available for free download
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map(item => {
            const isDownloaded = downloadedItems.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all hover:border-amber-400"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-amber-700">{item.subject}</span>
                    <span>{item.category}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.keyTopics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    <span>{item.pages} Pages</span> · <span>{item.fileSize}</span>
                  </div>

                  <button
                    onClick={() => handleDownload(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isDownloaded
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {isDownloaded ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AdBanner onOpenDemo={() => onOpenDemo('Free Study Box Consultation')} />
    </div>
  );
};
