import React, { useState } from 'react';
import { Brain, Home as HomeIcon, HelpCircle, Info, Menu, X, Sparkles, Award } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, resetQuizState }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'quiz', label: 'Quiz', icon: HelpCircle },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-xl bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-700 bg-clip-text text-transparent">
                  AI Quiz System
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  <Sparkles className="w-3 h-3 mr-1 text-indigo-500" /> Demo Project
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block font-medium">Knowledge-Based Assessment</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm shadow-indigo-500/25'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  {item.label}
                </button>
              );
            })}

            {/* Direct Start Quiz CTA in Nav */}
            <button
              onClick={() => {
                resetQuizState();
                handleNavClick('quiz');
              }}
              className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Award className="w-4 h-4 text-purple-400" />
              Start Quiz
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-2 pb-4 space-y-2 animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-left transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
          
          <button
            onClick={() => {
              resetQuizState();
              handleNavClick('quiz');
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold bg-slate-900 text-white shadow-md"
          >
            <Award className="w-5 h-5 text-purple-400" />
            Start Quiz Now
          </button>
        </div>
      )}
    </header>
  );
}
