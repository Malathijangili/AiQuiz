import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, RotateCcw, Home as HomeIcon, CheckCircle2, XCircle, Percent, Target, Sparkles, TrendingUp } from 'lucide-react';
import AnswerReview from './AnswerReview';

export default function Result({ questions, userAnswers, onRestart, onGoHome }) {
  // Calculate score statistics
  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correctAnswerIndex) {
      correctCount++;
    }
  });

  const totalQuestions = questions.length;
  const wrongCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Trigger confetti burst if user scores >= 50%
  useEffect(() => {
    if (percentage >= 50) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [percentage]);

  // Performance message evaluation
  let performanceTitle = "Great job!";
  let performanceMsg = "You have a strong understanding of the concepts.";
  let badgeColor = "bg-indigo-100 text-indigo-800 border-indigo-200";

  if (percentage >= 90) {
    performanceTitle = "Outstanding Mastery!";
    performanceMsg = "Exceptional performance! You possess an expert-level understanding of AI & CS concepts.";
    badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-200";
  } else if (percentage >= 70) {
    performanceTitle = "Great Job!";
    performanceMsg = "You have a strong understanding of the core knowledge-based concepts.";
    badgeColor = "bg-indigo-100 text-indigo-800 border-indigo-200";
  } else if (percentage >= 50) {
    performanceTitle = "Good Effort!";
    performanceMsg = "You have a solid foundation, but reviewing a few concepts will help boost your score.";
    badgeColor = "bg-amber-100 text-amber-800 border-amber-200";
  } else {
    performanceTitle = "Needs Practice!";
    performanceMsg = "Don't worry! Review the answer key below and try the quiz again to improve your score.";
    badgeColor = "bg-rose-100 text-rose-800 border-rose-200";
  }

  // SVG Circular Ring calculation
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in">
      
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-purple-500/10 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-purple-200 border border-white/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            Evaluation Complete
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading mb-3 tracking-tight">
            Quiz Completed!
          </h1>
          <p className="text-indigo-200 text-sm sm:text-base max-w-xl mx-auto">
            Your evaluation session has been computed. Review your score, performance statistics, and full answer key below.
          </p>
        </div>

        {/* Score Ring & Message Content */}
        <div className="p-8 sm:p-12 text-center">
          
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 mb-10">
            
            {/* Circular Ring Visualization */}
            <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                {/* Background Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  className="stroke-slate-100"
                  strokeWidth="14"
                  fill="transparent"
                />
                {/* Foreground Animated Gradient Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  className="stroke-indigo-600 transition-all duration-1000 ease-out"
                  strokeWidth="14"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              {/* Centered Score Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-slate-900 font-heading">
                  {correctCount} / {totalQuestions}
                </span>
                <span className="text-indigo-600 font-extrabold text-lg">
                  {percentage}%
                </span>
              </div>
            </div>

            {/* Performance Text Summary */}
            <div className="text-center md:text-left max-w-md">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${badgeColor}`}>
                {performanceTitle}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                Performance Result
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                "{performanceMsg}"
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Target className="w-4 h-4 text-indigo-500" /> Demo Quiz Evaluator
                </span>
                •
                <span className="inline-flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-purple-500" /> Instant Scoring
                </span>
              </div>
            </div>

          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {/* Total Questions */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">
                Total Questions
              </span>
              <span className="text-2xl font-extrabold text-slate-900 font-heading">
                {totalQuestions}
              </span>
            </div>

            {/* Correct Answers */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Correct
              </div>
              <span className="text-2xl font-extrabold text-emerald-800 font-heading">
                {correctCount}
              </span>
            </div>

            {/* Wrong Answers */}
            <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200/80 text-center">
              <div className="flex items-center justify-center gap-1 text-rose-700 text-xs font-bold uppercase tracking-wider mb-1">
                <XCircle className="w-3.5 h-3.5" /> Wrong
              </div>
              <span className="text-2xl font-extrabold text-rose-800 font-heading">
                {wrongCount}
              </span>
            </div>

            {/* Percentage */}
            <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200/80 text-center">
              <div className="flex items-center justify-center gap-1 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-1">
                <Percent className="w-3.5 h-3.5" /> Score %
              </div>
              <span className="text-2xl font-extrabold text-indigo-800 font-heading">
                {percentage}%
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRestart}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>

            <button
              onClick={onGoHome}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <HomeIcon className="w-5 h-5" />
              Back to Home
            </button>
          </div>

        </div>
      </div>

      {/* Answer Review Section */}
      <AnswerReview questions={questions} userAnswers={userAnswers} />

    </div>
  );
}
