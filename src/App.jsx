import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import About from './components/About';
import Footer from './components/Footer';
import { QUIZ_QUESTIONS } from './data/quizData';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'quiz' | 'result' | 'about'
  const [userAnswers, setUserAnswers] = useState(Array(QUIZ_QUESTIONS.length).fill(null));

  const handleStartQuiz = () => {
    setUserAnswers(Array(QUIZ_QUESTIONS.length).fill(null));
    setActivePage('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteQuiz = () => {
    setActivePage('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetQuiz = () => {
    setUserAnswers(Array(QUIZ_QUESTIONS.length).fill(null));
    setActivePage('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 bg-grid-pattern selection:bg-indigo-500 selection:text-white">
      
      {/* Global Navigation Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        resetQuizState={handleStartQuiz} 
      />

      {/* Main Page View Routing */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activePage === 'home' && (
          <Home 
            onStartQuiz={handleStartQuiz} 
            onNavigateToAbout={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}

        {activePage === 'quiz' && (
          <Quiz 
            questions={QUIZ_QUESTIONS}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            onCompleteQuiz={handleCompleteQuiz}
          />
        )}

        {activePage === 'result' && (
          <Result 
            questions={QUIZ_QUESTIONS}
            userAnswers={userAnswers}
            onRestart={handleResetQuiz}
            onGoHome={handleGoHome}
          />
        )}

        {activePage === 'about' && (
          <About 
            onStartQuiz={handleStartQuiz}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={setActivePage} />

    </div>
  );
}
