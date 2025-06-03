import React, { useEffect, useRef } from 'react';
import { ArrowDown, Shield, Server, Brain, Code } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    title.classList.add('animate-fade-in');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const expertiseAreas = [
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Pentesting, SSL, Firewall"
    },
    {
      icon: Server,
      title: "Réseaux",
      description: "Routage, ACL, VLANs"
    },
    {
      icon: Brain,
      title: "IoT & IA",
      description: "RavaGuard, ML, Vision"
    },
    {
      icon: Code,
      title: "Développement",
      description: "Web, Mobile, Desktop"
    }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Animated circuit lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-indigo-600 dark:bg-indigo-400 animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-blue-600 dark:bg-blue-400 animate-pulse delay-150"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-indigo-600 dark:bg-indigo-400 animate-pulse delay-300"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 opacity-0 transform translate-y-10 transition-all duration-1000"
          >
            Fallilou Mbacke GUEYE
          </h1>
          <br />
          <br />
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-slate-700 dark:text-slate-300 animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 delay-300">
            EXPERT EN SYSTÈMES, RÉSEAUX ET CYBERSÉCURITÉ
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-12 animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 delay-500">
            Passionné par l'innovation technologique, je développe des solutions de pointe en cybersécurité, 
            IoT et intelligence artificielle. Créateur de RavaGuard, une solution innovante de protection des cultures.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 delay-700">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-indigo-100 dark:bg-slate-700 rounded-full group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{area.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{area.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 delay-700">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/30"
            >
              Me Contacter
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-transparent border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Découvrir mes projets
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll to About section"
      >
        <span className="text-sm mb-2">Découvrir</span>
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default Hero;
