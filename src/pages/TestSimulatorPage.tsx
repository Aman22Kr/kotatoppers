import React, { useState, useEffect } from 'react';
import { sampleCbtQuestions, Question } from '../data/testSeriesData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Clock, CheckCircle2, XCircle, AlertCircle, RotateCcw, Award, ArrowLeft, ArrowRight, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export interface TestAttempt {
  id: string;
  testTitle: string;
  score: number;
  maxScore: number;
  correctCount: number;
  wrongCount: number;
  unattemptedCount: number;
  accuracy: number;
  completedAt: string;
}

export const TestSimulatorPage: React.FC = () => {
  const [questions] = useState<Question[]>(sampleCbtQuestions);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({ 0: true });
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attempts, setAttempts] = useLocalStorage<TestAttempt[]>('kotatoppers_test_attempts', []);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const handleSelectQuestion = (idx: number) => {
    setCurrentIdx(idx);
    setVisited(prev => ({ ...prev, [idx]: true }));
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIdx]: optionIdx
    }));
  };

  const handleClearResponse = () => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIdx];
      return copy;
    });
  };

  const handleToggleReview = () => {
    if (isSubmitted) return;
    setMarkedForReview(prev => ({
      ...prev,
      [currentIdx]: !prev[currentIdx]
    }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      handleSelectQuestion(currentIdx + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      handleSelectQuestion(currentIdx - 1);
    }
  };

  const handleSubmitTest = () => {
    let score = 0;
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    questions.forEach((q, idx) => {
      const ans = selectedAnswers[idx];
      if (ans === undefined) {
        unattempted++;
      } else if (ans === q.correctOptionIndex) {
        correct++;
        score += 4;
      } else {
        wrong++;
        score -= 1;
      }
    });

    const maxScore = questions.length * 4;
    const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;

    const newAttempt: TestAttempt = {
      id: `ATTEMPT-${Date.now()}`,
      testTitle: 'Kota Diagnostic All India Mock Sprint',
      score,
      maxScore,
      correctCount: correct,
      wrongCount: wrong,
      unattemptedCount: unattempted,
      accuracy,
      completedAt: new Date().toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setAttempts([newAttempt, ...attempts]);
    setIsSubmitted(true);

    if (score > 12) {
      try {
        confetti({ particleCount: 70, spread: 60 });
      } catch {
        // ignore
      }
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setMarkedForReview({});
    setVisited({ 0: true });
    setCurrentIdx(0);
    setTimeLeft(900);
    setIsSubmitted(false);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentIdx];

  // Scoring tally
  const correctCount = questions.filter((q, idx) => selectedAnswers[idx] === q.correctOptionIndex).length;
  const attemptedCount = Object.keys(selectedAnswers).length;
  const wrongCount = attemptedCount - correctCount;
  const totalScore = correctCount * 4 - wrongCount * 1;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* CBT Header */}
      <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/test-series" className="text-slate-400 hover:text-white p-1 rounded">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-sm sm:text-base font-bold">
              KotaToppers CBT Simulator: All India Diagnostic Mock
            </h1>
            <p className="text-[11px] text-slate-400">
              Pattern: NTA JEE / NEET (+4 for correct, -1 for negative marking)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!isSubmitted && (
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-sm font-bold text-amber-300">
                {formatTime(timeLeft)}
              </span>
            </div>
          )}

          {!isSubmitted ? (
            <button
              onClick={handleSubmitTest}
              className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Submit Test
            </button>
          ) : (
            <button
              onClick={handleRetake}
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Test</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Examination View */}
      {isSubmitted ? (
        <div className="max-w-4xl mx-auto w-full p-4 sm:p-6 my-6 bg-white rounded-xl shadow-lg border border-slate-200">
          <div className="text-center pb-6 border-b border-slate-200">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Test Performance Report</h2>
            <p className="text-xs text-slate-500 mt-1">
              Attempt saved to your Student Dashboard under local storage.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-xs text-slate-500">Total Score</div>
                <div className="text-xl font-black text-slate-900 tabular-nums">
                  {totalScore} <span className="text-xs text-slate-400 font-normal">/ {questions.length * 4}</span>
                </div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="text-xs text-emerald-700">Correct (+4)</div>
                <div className="text-xl font-black text-emerald-800 tabular-nums">
                  {correctCount}
                </div>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <div className="text-xs text-rose-700">Incorrect (-1)</div>
                <div className="text-xl font-black text-rose-800 tabular-nums">
                  {wrongCount}
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-xs text-slate-500">Unattempted</div>
                <div className="text-xl font-black text-slate-600 tabular-nums">
                  {questions.length - attemptedCount}
                </div>
              </div>
            </div>
          </div>

          {/* Solutions & Analysis */}
          <div className="mt-6 space-y-6">
            <h3 className="text-base font-bold text-slate-900">
              Detailed Question Analysis & Kota Solutions
            </h3>
            {questions.map((q, idx) => {
              const userAns = selectedAnswers[idx];
              const isCorrect = userAns === q.correctOptionIndex;
              const isUnattempted = userAns === undefined;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border ${
                    isUnattempted
                      ? 'border-slate-200 bg-slate-50/50'
                      : isCorrect
                      ? 'border-emerald-200 bg-emerald-50/30'
                      : 'border-rose-200 bg-rose-50/30'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-slate-800">
                      Question {idx + 1} · {q.subject}
                    </span>
                    {isUnattempted ? (
                      <span className="text-slate-500 font-medium">Unattempted (0 marks)</span>
                    ) : isCorrect ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+4)
                      </span>
                    ) : (
                      <span className="text-rose-700 font-bold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Incorrect (-1)
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-medium text-slate-900 mb-3">{q.text}</p>

                  <div className="space-y-1.5 text-xs">
                    {q.options.map((opt, optIdx) => (
                      <div
                        key={optIdx}
                        className={`p-2 rounded-lg border flex items-center gap-2 ${
                          optIdx === q.correctOptionIndex
                            ? 'bg-emerald-100 border-emerald-300 font-semibold text-emerald-900'
                            : optIdx === userAns
                            ? 'bg-rose-100 border-rose-300 text-rose-900 line-through'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="w-5 font-bold">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-amber-800">Kota Faculty Solution:</strong>{' '}
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full p-4 gap-4">
          {/* Question Panel */}
          <div className="flex-1 bg-white rounded-xl shadow-xs border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              {/* Question Sub-header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs text-slate-500">
                <span className="font-bold text-amber-800 uppercase tracking-wide">
                  Section: {currentQ.subject}
                </span>
                <span>Question {currentIdx + 1} of {questions.length}</span>
              </div>

              {/* Question Text */}
              <div className="text-slate-900 text-base font-semibold leading-relaxed mb-6">
                {currentQ.text}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleOptionSelect(optIdx)}
                      className={`w-full text-left p-3.5 rounded-lg border text-sm transition-all flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/80 text-amber-950 font-semibold shadow-xs ring-1 ring-amber-500'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleReview}
                  className={`px-3 py-2 rounded-lg border font-medium transition-colors cursor-pointer ${
                    markedForReview[currentIdx]
                      ? 'bg-purple-100 border-purple-300 text-purple-800'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {markedForReview[currentIdx] ? 'Marked for Review' : 'Mark for Review'}
                </button>
                <button
                  onClick={handleClearResponse}
                  disabled={selectedAnswers[currentIdx] === undefined}
                  className="px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                >
                  Clear Response
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIdx === questions.length - 1}
                  className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
                >
                  <span>Save & Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Question Palette Sidebar */}
          <div className="w-full md:w-80 bg-white rounded-xl shadow-xs border border-slate-200 p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Question Palette
              </h3>

              {/* Status Legend */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-purple-500" />
                  <span>Marked Review</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span>Not Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-200" />
                  <span>Not Visited</span>
                </div>
              </div>

              {/* Palette Grid */}
              <div className="grid grid-cols-4 gap-2">
                {questions.map((_, idx) => {
                  const isCurrent = currentIdx === idx;
                  const hasAnswered = selectedAnswers[idx] !== undefined;
                  const isReview = markedForReview[idx];
                  const hasVisited = visited[idx];

                  let bgClass = 'bg-slate-100 text-slate-700 border-slate-200';
                  if (hasAnswered && isReview) {
                    bgClass = 'bg-purple-600 text-white border-purple-700';
                  } else if (hasAnswered) {
                    bgClass = 'bg-emerald-600 text-white border-emerald-700';
                  } else if (isReview) {
                    bgClass = 'bg-purple-500 text-white border-purple-600';
                  } else if (hasVisited) {
                    bgClass = 'bg-rose-500 text-white border-rose-600';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuestion(idx)}
                      className={`h-9 rounded-lg font-bold text-xs flex items-center justify-center border transition-all cursor-pointer ${bgClass} ${
                        isCurrent ? 'ring-2 ring-slate-900 ring-offset-1 scale-105' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              <div><strong>Exam ID:</strong> KT-CBT-2026-01</div>
              <div className="mt-1">Candidates must not leave examination view before submission.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
