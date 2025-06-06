"use client"
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const ApologyWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFlower, setCurrentFlower] = useState(0);

  useEffect(() => {
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
          <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            I'm truly sorry
          </p>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <p className="text-lg mb-4">
              I know my words or actions may have hurt you, and I want you to know that it was never my intention.
            </p>
            <p className="text-lg mb-4">
              Your friendship means the world to me, and I deeply regret any pain I may have caused.
            </p>
            <p className="text-lg font-medium text-pink-600">
              I hope you can find it in your heart to forgive me.
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
            With love and sincere apologies ❤️
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

export default ApologyWebsite;