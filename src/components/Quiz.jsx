import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';

export default function Quiz({ 
  questions, 
  userAnswers, 
  setUserAnswers, 
  onCompleteQuiz 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedOptionForCurrent = userAnswers[currentIndex];

  const handleSelectOption = (optionIndex) => {
    setShowWarning(false);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (selectedOptionForCurrent === null || selectedOptionForCurrent === undefined) {
      setShowWarning(true);
      return;
    }

    setShowWarning(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Submit Quiz
      onCompleteQuiz();
    }
  };

  const handlePrevious = () => {
    setShowWarning(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isFinalQuestion = currentIndex === questions.length - 1;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 animate-fade-in">
      
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-1">
            <HelpCircle className="w-3.5 h-3.5" /> Assessment Session
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            AI Knowledge Quiz
          </h1>
        </div>
        
        <div className="text-xs text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs font-medium">
          Select one option & click Next to proceed
        </div>
      </div>

      {/* Progress Bar Component */}
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      {/* Question Card Component */}
      <QuestionCard
        questionObj={currentQuestion}
        questionIndex={currentIndex}
        totalQuestions={questions.length}
        selectedAnswerIndex={selectedOptionForCurrent}
        onSelectOption={handleSelectOption}
      />

      {/* Warning Notice if user clicks Next without selecting an answer */}
      {showWarning && (
        <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold flex items-center gap-3 animate-fade-in">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Please select an answer option before moving to the next question.</span>
        </div>
      )}

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`px-6 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 text-sm cursor-pointer ${
            currentIndex === 0
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200 opacity-60'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-2xs'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        {/* Next / Submit Button */}
        <button
          type="button"
          onClick={handleNext}
          className={`px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 text-sm text-white shadow-lg cursor-pointer ${
            isFinalQuestion
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/25'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-indigo-500/25'
          }`}
        >
          {isFinalQuestion ? (
            <>
              Submit Quiz
              <CheckCircle2 className="w-4 h-4" />
            </>
          ) : (
            <>
              Next
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

    </div>
  );
}
