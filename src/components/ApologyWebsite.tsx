"use client"
import React, { useState } from 'react';
import { Heart, Sparkles, ChevronRight, Star } from 'lucide-react';

const OpeningPage = ({ onEnter }: { onEnter: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
            }}
          >
            <Star className="w-1 h-1 text-white opacity-60" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="text-center relative z-10 max-w-2xl mx-auto">
        {/* Opening message */}
        <div 
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mb-6 animate-pulse">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
            For Lily.
          </h1>
        
          
          <div className="text-lg text-purple-300 mb-12 space-y-2">
            <p>Made with ♡ </p>
          </div>
        </div>

        {/* Enter button */}
        <div 
          className={`transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            <span className="mr-2">Enter</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </button>
          
          <p className="text-purple-300 text-sm mt-4 opacity-70">
            Click to continue
          </p>
        </div>

        {/* Floating hearts */}
        <div className="absolute -top-10 -left-10 animate-bounce" style={{animationDelay: '1s'}}>
          <Heart className="w-6 h-6 text-pink-400 fill-pink-400 opacity-60" />
        </div>
        <div className="absolute -top-5 -right-10 animate-bounce" style={{animationDelay: '1.5s'}}>
          <Heart className="w-4 h-4 text-purple-400 fill-purple-400 opacity-60" />
        </div>
        <div className="absolute -bottom-10 left-10 animate-bounce" style={{animationDelay: '0.5s'}}>
          <Heart className="w-5 h-5 text-pink-400 fill-pink-400 opacity-60" />
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

// Apology Website Component
const ApologyWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFlower, setCurrentFlower] = useState(0);

  React.useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFlower(prev => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const flowers = ['🌸', '🌺', '🌷', '🌹', '🌻'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-3 h-3 text-pink-300 opacity-60" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div 
        className={`max-w-2xl mx-auto text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Animated flower */}
        <div className="mb-8 relative">
          <div className="text-6xl animate-pulse">
            {flowers[currentFlower]}
          </div>
          <div className="absolute -top-2 -right-2 animate-spin">
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6 tracking-wide">
          Dear{' '}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-medium animate-pulse">
            Lily
          </span>
        </h1>

        {/* Apology message */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p
            className="text-xl md:text-2xl font-light animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            HALLOOOOWWW, GOOD (
            <span className="text-yellow-500">MORNING</span>,{' '}
            <span className="text-orange-500">AFTERNOON</span>,{' '}
            <span className="text-purple-500">EVENING</span>, or even{' '}
            <span className="text-blue-500">NIGHT</span>)
          </p>
          <p
            className="text-xl md:text-2xl font-light animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            depends on what time you open up this simple website that i made.
          </p>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <p className="text-lg">
              I know I might've been a little much sometimes with all my messages, and if it ever felt overwhelming, I'm really sorry. That was never my intention. But, I just wanna say… I genuinely love you
            </p>
            <p className="text-lg mb-4">
              (AS A FRIEND.)
            </p>
            <p className="text-lg mb-4">
              like for real.. for the kind, warm, funny, thoughtful human you are. As a friend, you're such a special part of my life, and I honestly feel lucky to know you. 💛
            </p>
            <p className="text-lg mb-4">
              Alsooo, I'm sorry if I spam your messages a little too often 😭 I just enjoy talking to you so much that sometimes I forget to chill a bit hahaha. But if it ever gets too much, just let me know, okay? I'll totally understand!
            </p>
            <p className="text-lg font-medium text-pink-600">
              I hope you can find it in your heart to forgive me. Love u always, in the softest way possible 💌💗
            </p>
          </div>
        </div>

        {/* Animated hearts */}
        <div className="mt-12 flex justify-center space-x-4">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className="w-8 h-8 text-pink-400 fill-pink-400 animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Footer message */}
        <div className="mt-8 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <p className="text-gray-600 italic">
            Made with ♡
          </p>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

// Main App Component
const MainApp = () => {
  const [currentPage, setCurrentPage] = useState('opening');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('apology');
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative">
      {/* Transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-gradient-to-r from-pink-500 to-purple-600 z-50 flex items-center justify-center">
          <div className="text-white text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 animate-pulse fill-white" />
            <p className="text-xl font-light">Opening your message...</p>
          </div>
        </div>
      )}
      
      {/* Page Content */}
      {currentPage === 'opening' && <OpeningPage onEnter={handleEnter} />}
      {currentPage === 'apology' && <ApologyWebsite />}
    </div>
  );
};

export default MainApp;