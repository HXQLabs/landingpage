"use client";

import React, { useState, useEffect } from 'react';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { 
  User, 
  Target, 
  Users, 
  Video, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const HelixQueWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-timer for carousel (changes every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 5);
      setProgress(0); // Reset progress when tab changes
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Progress animation for active tab
  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + (100 / 40); // 100% over 4 seconds (4000ms / 100ms intervals)
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  const tabContent = [
    {
      id: 0,
      title: "Create Your Profile",
      description: "Sign up and create your professional profile with your skills, experience, and what you're looking to practice.",
      icon: (
        <User className="shrink-0" width="16" height="17" />
      ),
      rightContent: (
        <div className="p-8 flex flex-col items-center">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center mb-4">
            <User className="text-blue-600 dark:text-blue-400" width="40" height="40" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professional Profile</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Build your professional identity with skills, experience, and goals
          </p>
        </div>
      )
    },
    {
      id: 1,
      title: "Choose Your Mode",
      description: "Select between mock interviews, random networking, or VC pitching based on your current needs.",
      icon: (
        <Target className="shrink-0" width="16" height="17" />
      ),
      rightContent: (
        <div className="p-8 flex flex-col items-center">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 flex items-center justify-center mb-4">
            <Target className="text-green-600 dark:text-green-400" width="40" height="40" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Select Your Focus</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Choose from mock interviews, networking, or VC pitching sessions
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Get Matched",
      description: "Our algorithm matches you with the perfect partner based on your preferences and goals.",
      icon: (
        <Users className="shrink-0" width="16" height="17" />
      ),
      rightContent: (
        <div className="p-8 flex flex-col items-center">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 flex items-center justify-center mb-4">
            <Users className="text-purple-600 dark:text-purple-400" width="40" height="40" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Matching</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Get paired with professionals who match your goals and preferences
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Connect & Practice",
      description: "Join a video call and start practicing. Use our built-in tools for feedback and improvement.",
      icon: (
        <Video className="shrink-0" width="16" height="17" />
      ),
      rightContent: (
        <div className="p-8 flex flex-col items-center">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 flex items-center justify-center mb-4">
            <Video className="text-orange-600 dark:text-orange-400" width="40" height="40" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Practice Session</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Join video calls with built-in tools for real-time practice
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Receive Feedback",
      description: "Get detailed feedback from your partner and our AI analysis to help you improve.",
      icon: (
        <MessageSquare className="shrink-0" width="16" height="17" />
      ),
      rightContent: (
        <div className="p-8 flex flex-col items-center">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 flex items-center justify-center mb-4">
            <MessageSquare className="text-indigo-600 dark:text-indigo-400" width="40" height="40" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Get Feedback</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Receive detailed feedback from professionals and AI analysis
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="w-full min-h-screen relative bg-white dark:bg-black z-10">
      <div className="max-w-7xl mx-auto relative overflow-hidden px-4 py-20 md:px-8">
        <div className="flex flex-col items-center pt-16">
          <AnimatedShinyText>
            How Helix Que Works
          </AnimatedShinyText>
          <h2 className="text-charcoal-700 text-center text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl dark:text-neutral-100 mt-4">
            A Simple Process for Professional Growth
          </h2>
          <p className="text-center text-sm font-medium tracking-tight text-gray-600 md:text-sm lg:text-base dark:text-gray-300 mx-auto mt-6 max-w-lg">
            A simple process designed to help you connect, practice, and improve your professional skills.
          </p>

          {/* Desktop grid layout */}
          <div className="border-divide divide-divide mt-16 hidden w-full grid-cols-2 divide-x border-t lg:grid">
            {/* Left side - Navigation buttons */}
            <div className="divide-divide divide-y">
              {tabContent.map((tab, index) => (
                <button 
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`group relative flex w-full flex-col items-start overflow-hidden px-12 py-8 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all duration-300 ${
                    activeTab === index ? 'bg-gray-50 dark:bg-neutral-800' : ''
                  }`}
                >
                  {/* Background overlay for active tab */}
                  {activeTab === index && (
                    <div className="absolute inset-x-0 z-10 h-full w-full bg-white mask-t-from-50% dark:bg-neutral-900"></div>
                  )}
                  <canvas className="w-full h-full absolute inset-0 scale-[1.01] opacity-20" style={{imageRendering: "pixelated"}}></canvas>
                  
                  <div className={`text-charcoal-700 relative z-20 flex items-center gap-2 font-medium dark:text-neutral-100 transition-colors duration-200 ${
                    activeTab === index ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}>
                    {tab.icon}
                    {tab.title}
                  </div>
                  <p className="relative z-20 mt-2 text-left text-sm dark:text-neutral-300 text-charcoal-700">
                    {tab.description}
                  </p>

                  {/* Progress bar at bottom - only show for active tab */}
                  {activeTab === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-neutral-700 z-20">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-200"
                        style={{
                          width: `${progress}%`
                        }}
                      ></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Right side - Dynamic content based on active tab */}
            <div className="relative h-full max-h-[370px] overflow-hidden bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-r-from-90% mask-l-from-90% mask-radial-from-20%" style={{backgroundSize: "10px 10px"}}>
              <div className="absolute inset-0" style={{filter: "blur(0px)", opacity: 1}}>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="transition-all duration-500 ease-in-out">
                    {tabContent[activeTab].rightContent}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="divide-divide border-divide mt-16 flex w-full flex-col divide-y overflow-hidden border-t lg:hidden">
            {tabContent.map((tab, index) => (
              <div key={tab.id} className="group relative flex w-full flex-col items-start overflow-hidden px-4 py-4 md:px-12 md:py-8">
                <div className="text-charcoal-700 relative z-20 flex items-center gap-2 font-medium dark:text-neutral-100">
                  {tab.icon}
                  {tab.title}
                </div>
                <p className="relative z-20 mt-2 text-left text-sm text-gray-600 dark:text-neutral-300">
                  {tab.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelixQueWorksSection;