import React from 'react';
import { CheckCircle2, Circle, Tag } from 'lucide-react';

export default function QuestionCard({ 
  questionObj, 
  questionIndex, 
  totalQuestions, 
  selectedAnswerIndex, 
  onSelectOption 
}) {
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8 animate-fade-in transition-all">
      {/* Category badge & Question counter */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
          <Tag className="w-3.5 h-3.5" />
          {questionObj.category}
        </span>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Multiple Choice • 1 Point
        </span>
      </div>

      {/* Question Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 font-heading leading-snug">
        {questionObj.question}
      </h2>

      {/* Options List */}
      <div className="space-y-3.5">
        {questionObj.options.map((optionText, idx) => {
          const isSelected = selectedAnswerIndex === idx;
          const letter = optionLabels[idx];

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectOption(idx)}
              className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-indigo-50/90 to-purple-50/90 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50/80 shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Letter Box (A, B, C, D) */}
                <div
                  className={`w-9 h-9 rounded-lg font-extrabold text-sm flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700'
                  }`}
                >
                  {letter}
                </div>

                {/* Option Text */}
                <span className={`text-base font-semibold transition-colors ${
                  isSelected ? 'text-indigo-950 font-bold' : 'text-slate-700 group-hover:text-slate-900'
                }`}>
                  {optionText}
                </span>
              </div>

              {/* Radio Icon */}
              <div className="ml-3 shrink-0">
                {isSelected ? (
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 fill-indigo-100 animate-fade-in" />
                ) : (
                  <Circle className="w-6 h-6 text-slate-300 group-hover:text-slate-400" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
