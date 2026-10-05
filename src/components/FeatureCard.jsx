import React from 'react';

export default function FeatureCard({ icon: Icon, title, description, badge }) {
  return (
    <div className="group relative p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Gradient top highlight accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-xs">
            <Icon className="w-6 h-6" />
          </div>
          {badge && (
            <span className="px-2.5 py-1 text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-100 rounded-full">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
        Learn more &rarr;
      </div>
    </div>
  );
}
