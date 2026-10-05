import React from 'react';
import { Play, Brain, Zap, BarChart3, CheckCircle2, ArrowRight, Sparkles, BookOpen, Layers, Award } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { SYSTEM_INFO } from '../data/quizData';

export default function Home({ onStartQuiz, onNavigateToAbout }) {
  const featureIcons = [Brain, Zap, BarChart3];

  const topicBadges = [
    "Artificial Intelligence", "Machine Learning", "Neural Networks", 
    "Natural Language Processing", "Computer Science", "JavaScript", 
    "React", "Databases", "Cloud Computing", "Generative AI"
  ];

  return (
    <div className="animate-fade-in space-y-16 py-8 sm:py-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-purple-50/30 to-transparent pt-8 pb-16 px-4 sm:px-6 lg:px-8 rounded-3xl border border-indigo-100/60 shadow-2xs">
        
        {/* Background decorative glowing blur elements */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 right-10 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Academic Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-200/80 shadow-xs text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            {SYSTEM_INFO.subtitle}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 font-heading tracking-tight mb-6 leading-tight">
            {SYSTEM_INFO.projectTitle}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Test your knowledge with an interactive AI-powered quiz. Answer questions, track your score, and view your final performance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartQuiz}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-3 cursor-pointer group hover:scale-105 active:scale-95 text-base"
            >
              <Play className="w-5 h-5 fill-white" />
              Start Quiz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateToAbout}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
            >
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Project Specs
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-indigo-100/80 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
            <div>
              <div className="text-2xl font-extrabold text-slate-900 font-heading">10</div>
              <div className="text-xs font-semibold text-slate-500">Demo Questions</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-indigo-600 font-heading">100%</div>
              <div className="text-xs font-semibold text-slate-500 font-sans">Instant Score</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-purple-600 font-heading">Real-Time</div>
              <div className="text-xs font-semibold text-slate-500">Evaluation</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FEATURE CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">
            System Features
          </h2>
          <p className="text-slate-600 text-sm">
            Designed for interactive learning, instant score feedback, and comprehensive evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SYSTEM_INFO.features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={featureIcons[idx]}
              title={feature.title}
              description={feature.description}
              badge={`Module 0${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 sm:p-12">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-bold uppercase tracking-wider">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-3 mb-2">
              How It Works
            </h2>
            <p className="text-slate-600 text-sm">
              Follow these simple steps to test your knowledge and review your performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {SYSTEM_INFO.steps.map((item, idx) => (
              <div 
                key={item.step}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all group"
              >
                {/* Step Number Circle */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md shadow-indigo-500/20 mb-4 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. COVERED TOPICS BADGES */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-950 text-white shadow-xl">
          <div className="flex items-center justify-center gap-2 text-purple-300 font-semibold text-xs uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" /> Curriculum Knowledge Domains
          </div>
          <h3 className="text-2xl font-bold font-heading mb-6">
            10 Assessment Topics Covered
          </h3>

          <div className="flex flex-wrap justify-center gap-2.5">
            {topicBadges.map((topic, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
