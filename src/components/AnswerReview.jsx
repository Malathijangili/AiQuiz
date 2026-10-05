import React from 'react';
import { CheckCircle, XCircle, Info, Sparkles, BookOpen } from 'lucide-react';

export default function AnswerReview({ questions, userAnswers }) {
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" /> Academic Evaluation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Detailed Answer Breakdown
          </h2>
        </div>
        <div className="px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-800">
          Reviewing {questions.length} Knowledge Items
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((q, idx) => {
          const userSelectedIdx = userAnswers[idx];
          const isCorrect = userSelectedIdx === q.correctAnswerIndex;
          const userSelectedText = userSelectedIdx !== null && userSelectedIdx !== undefined
            ? `${optionLabels[userSelectedIdx]}. ${q.options[userSelectedIdx]}`
            : 'No answer selected';
          const correctText = `${optionLabels[q.correctAnswerIndex]}. ${q.options[q.correctAnswerIndex]}`;

          return (
            <div
              key={q.id}
              className={`p-6 rounded-2xl border transition-all ${
                isCorrect 
                  ? 'bg-emerald-50/40 border-emerald-200/80' 
                  : 'bg-rose-50/40 border-rose-200/80'
              }`}
            >
              {/* Header line: Question index + Status pill */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Question {idx + 1} of {questions.length} • <span className="text-indigo-600">{q.category}</span>
                </span>

                {isCorrect ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Correct (+1 Pt)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    Incorrect (0 Pts)
                  </span>
                )}
              </div>

              {/* Question Text */}
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-heading">
                {q.question}
              </h3>

              {/* User answer vs Correct answer comparison grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                {/* User selection */}
                <div className={`p-4 rounded-xl border ${
                  isCorrect 
                    ? 'bg-emerald-100/50 border-emerald-200 text-emerald-950' 
                    : 'bg-rose-100/50 border-rose-200 text-rose-950'
                }`}>
                  <span className="block text-xs font-bold uppercase tracking-wider mb-1 opacity-75">
                    Your Answer:
                  </span>
                  <span className="font-semibold">{userSelectedText}</span>
                </div>

                {/* Correct Answer */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-900 shadow-2xs">
                  <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                    Correct Answer:
                  </span>
                  <span className="font-semibold text-slate-900">{correctText}</span>
                </div>
              </div>

              {/* Academic Explanation Box */}
              {q.explanation && (
                <div className="flex items-start gap-2.5 p-3.5 bg-slate-100/80 rounded-xl border border-slate-200/60 text-xs text-slate-700 leading-relaxed">
                  <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Explanation: </span>
                    {q.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
