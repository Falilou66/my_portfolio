import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Code, Terminal, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          <span className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-indigo-600 dark:after:bg-indigo-400">
            À Propos
          </span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 rounded-full overflow-hidden relative z-10 shadow-xl transform transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-2 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Fallilou Mbacke</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">Étudiant en SRT</p>
                    <div className="space-y-2">
                      <p className="flex items-center justify-center text-sm text-slate-700 dark:text-slate-300">
                        <MapPin className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                        Dakar, Tivaouane Peulh
                      </p>
                      <p className="flex items-center justify-center text-sm text-slate-700 dark:text-slate-300">
                        <Phone className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                        +221 78 280 74 90
                      </p>
                      <p className="flex items-center justify-center text-sm text-slate-700 dark:text-slate-300">
                        <Mail className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                        falliloumbacke.gueye@uadb.edu.sn
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 w-64 h-64 md:w-80 md:h-80 border-4 border-indigo-300 dark:border-indigo-800 rounded-full z-0"></div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Qui suis-je?</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Je suis un étudiant passionné en troisième année de Système, Réseau et Télécommunication à l'Université Alioune DIOP de Bambey. 
              Mon parcours combine une solide formation académique avec une expérience pratique dans le support IT, le développement de projets innovants et la cybersécurité.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Ma curiosité pour les nouvelles technologies et mon aptitude à résoudre des problèmes complexes me permettent 
              d'aborder chaque défi avec créativité et rigueur. Je suis particulièrement intéressé par l'IoT, l'IA et la cybersécurité, 
              comme le démontre mon projet phare RavaGuard.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Formation</h4>
                <p className="text-slate-700 dark:text-slate-300">
                  Licence en Système réseaux et télécommunication (2021-2024)<br />
                  <span className="text-indigo-600 dark:text-indigo-400">Université Alioune DIOP de Bambey</span>
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Domaines d'expertise</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <Terminal className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                    <span>Cybersécurité & Réseaux</span>
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <Code className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                    <span>Développement Web & Mobile</span>
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <Server className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                    <span>IoT & Intelligence Artificielle</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/fallilou-mbacke-gueye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Falilou66" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/30"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;