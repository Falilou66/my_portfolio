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
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Me trouver sur :</h4>
            <div className="flex space-x-4">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;