import React from 'react';
import { Brain, Cpu, CheckCircle2, ShieldAlert, Sparkles, Layers, BookOpen, Code2, ServerOff, Award } from 'lucide-react';

export default function About({ onStartQuiz }) {
  const demoHighlights = [
    {
      title: "Question Generation",
      desc: "Curated dataset covering Artificial Intelligence, Machine Learning, Computer Science, and Web technologies.",
      icon: Brain,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    },
    {
      title: "Answer Evaluation",
      desc: "Real-time state validation ensuring options are selected before advancing through the evaluation pipeline.",
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      title: "Score Calculation",
      desc: "Instant deterministic scoring metric computing overall point totals and percentages dynamically.",
      icon: Cpu,
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      title: "Result Visualization",
      desc: "Interactive SVG ring metrics and performance feedback breakdown with topic answer keys.",
      icon: Layers,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "Interactive Learning",
      desc: "Comprehensive answer key explanations fostering knowledge retention and revision.",
      icon: BookOpen,
      color: "bg-pink-50 text-pink-600 border-pink-200"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 sm:py-16 animate-fade-in">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Project Overview & Technical Details
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
          About the AI Quiz System
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          The AI Quiz System is a knowledge-based quiz application designed to provide an interactive learning and assessment experience. The system presents questions, evaluates user answers, calculates scores, and displays performance results.
        </p>
      </div>

      {/* Demo Scope & Academic Presentation Card */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800 mb-6">
          <div>
            <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" /> Academic Showcase Standard
            </div>
            <h2 className="text-2xl font-bold font-heading text-white">
              Demonstration Objectives
            </h2>
          </div>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg text-xs font-semibold">
            Frontend Architecture Demo
          </span>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          This system serves as a demonstration prototype for university computer science and AI course presentations. It highlights modern user interface patterns, deterministic client-side evaluation, dynamic state management, and accessible user feedback loop without requiring backend server overhead.
        </p>

        {/* Demo Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold">
          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
            <Code2 className="w-4 h-4 text-indigo-400" /> React 19 + Vite
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
            <Layers className="w-4 h-4 text-purple-400" /> Tailwind CSS v4
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
            <Cpu className="w-4 h-4 text-pink-400" /> React State Logic
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
            <ServerOff className="w-4 h-4 text-emerald-400" /> 100% Frontend-Only
          </div>
        </div>
      </div>

      {/* Demo Highlights Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 font-heading text-center mb-8">
          Core Demonstrated Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scope Disclaimer / Explicit Demo Note */}
      <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-4 mb-12 text-amber-950 text-sm">
        <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block text-base text-amber-900 mb-1">
            Demo Environment Specification
          </span>
          <p className="leading-relaxed text-amber-900/90">
            This demo application is designed specifically for client-side testing and presentation. In accordance with system specifications, it does <strong>not</strong> include backend authentication, external OpenAI/AI API integrations, databases, or payment gateways. All questions are driven by optimized knowledge structures.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button
          onClick={onStartQuiz}
          className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
        >
          <Brain className="w-5 h-5" />
          Test System Now
        </button>
      </div>

    </div>
  );
}
