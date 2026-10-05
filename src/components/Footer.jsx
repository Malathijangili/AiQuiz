import React from 'react';
import { Brain, Heart, Sparkles } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                <Brain className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                AI Quiz System
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-4">
              Knowledge-Based Quiz Application developed for academic evaluation, interactive learning, and performance scoring.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              University Mini-Project Demo
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Take Quiz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Project
                </button>
              </li>
            </ul>
          </div>

          {/* Evaluation Criteria */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 font-heading">
              Assessment Topics
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Artificial Intelligence & ML</li>
              <li>• Neural Networks & NLP</li>
              <li>• Data Structures & Complexity</li>
              <li>• Web Technologies & Cloud</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AI Quiz System — Academic Presentation Demo.</p>
          <p className="flex items-center gap-1">
            Designed for interactive learning & assessment
          </p>
        </div>
      </div>
    </footer>
  );
}
