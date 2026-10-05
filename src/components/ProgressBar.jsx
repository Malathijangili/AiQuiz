import React from 'react';

export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-slate-200 shadow-xs mb-6">
      <div className="flex items-center justify-between text-sm font-semibold mb-2">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 font-medium">Question Progress</span>
          <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
            {current} of {total}
          </span>
        </div>
        <span className="text-indigo-600 font-bold">{percentage}% Completed</span>
      </div>

      {/* Track */}
      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
        {/* Progress Bar */}
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-500 ease-out shadow-xs"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
