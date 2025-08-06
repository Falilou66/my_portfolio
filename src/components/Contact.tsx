import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          <span className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-indigo-600 dark:after:bg-indigo-400">
            Me Contacter
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-md">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Informations de Contact</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Technicien diplômé en Systèmes, Réseaux et Télécommunications - Disponible pour opportunités professionnelles
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 bg-indigo-100 dark:bg-slate-700 rounded-full mr-4">
                <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Téléphone</h4>
                <p className="text-slate-700 dark:text-slate-300">+221 78 280 74 90</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 bg-indigo-100 dark:bg-slate-700 rounded-full mr-4">
                <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Email</h4>
                <p className="text-slate-700 dark:text-slate-300 break-all">falliloumbacke.gueye@uadb.edu.sn</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 bg-indigo-100 dark:bg-slate-700 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Localisation</h4>
                <p className="text-slate-700 dark:text-slate-300">Dakar, Tivaouane Peulh</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Réseaux professionnels :</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/cv-fallilou-mbacke-gueye.pdf" 
                download="CV-Fallilou-Mbacke-Gueye.pdf"
                className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger CV
              </a>
              <a 
                href="https://www.linkedin.com/in/fallilou-mbacke-gueye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/Falilou66" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-10 bg-white dark:bg-slate-900 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Références Professionnelles</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-slate-900 dark:text-white">Dr Diery NGOM</h5>
                <p className="text-slate-600 dark:text-slate-400">Enseignant-Chercheur, UADB</p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                  <p className="text-slate-700 dark:text-slate-300">📞 +221 77 428 00 19</p>
                  <p className="text-slate-700 dark:text-slate-300">📧 diery.ngom@uadb.edu.sn</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Langues</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="text-slate-700 dark:text-slate-300 mr-2">Français :</span>
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-slate-700 dark:text-slate-300 mr-2">Anglais :</span>
                <div className="flex">
                  {[1,2,3].map(i => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                  <span className="text-slate-400 ml-1">(technique + documentation)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;