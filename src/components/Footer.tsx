import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold text-indigo-400">
              FM<span className="text-white">Gueye</span>
            </div>
            <p className="text-slate-400 mt-2">
              Technicien en Systèmes, Réseaux et Télécommunications
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-8">
            <div>
              <h4 className="text-indigo-400 font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-300 hover:text-white transition-colors duration-300">Accueil</a></li>
                <li><a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300">À propos</a></li>
                <li><a href="#skills" className="text-slate-300 hover:text-white transition-colors duration-300">Compétences</a></li>
                <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-300">Projets</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-indigo-400 font-semibold mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="tel:+221782807490" className="text-slate-300 hover:text-white transition-colors duration-300">+221 78 280 74 90</a></li>
                <li><a href="mailto:falliloumbacke.gueye@uadb.edu.sn" className="text-slate-300 hover:text-white transition-colors duration-300 break-all">falliloumbacke.gueye@uadb.edu.sn</a></li>
                <li><a href="https://www.linkedin.com/in/fallilou-mbacke-gueye" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors duration-300">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p className="flex items-center justify-center">
            © {currentYear} Fallilou Mbacke Gueye. Tous droits réservés. Créé avec 
            <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" /> 
            par Fallilou
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;