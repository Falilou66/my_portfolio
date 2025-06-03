import React, { useState } from 'react';
import { Server, Globe, Database, Terminal, Shield, Monitor } from 'lucide-react';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill}</span>
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 group">
        <div 
          className="bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-500 group-hover:to-indigo-600 dark:group-hover:from-blue-300 dark:group-hover:to-indigo-400" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 hover:border-l-4 hover:border-indigo-600 dark:hover:border-indigo-400">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-indigo-100 dark:bg-slate-700 rounded-full mr-4">
          <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-slate-700 dark:text-slate-300">{description}</p>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  
  const tabItems = [
    { id: 'technical', label: 'Compétences Techniques' },
    { id: 'languages', label: 'Langages' },
    { id: 'software', label: 'Logiciels' },
  ];
  
  const technicalSkills = [
    { skill: 'Administration système et réseau', percentage: 85 },
    { skill: 'Routage (RIP, OSPF, EIGRP)', percentage: 80 },
    { skill: 'Services réseau (DHCP, DNS, FTP, etc.)', percentage: 90 },
    { skill: 'Sécurité réseau', percentage: 85 },
    { skill: 'Virtualisation', percentage: 80 },
    { skill: 'Maintenance des périphériques', percentage: 85 },
    { skill: 'Pentesting', percentage: 40 },
  ];
  
  const languageSkills = [
    { skill: 'HTML/CSS', percentage: 90 },
    { skill: 'PHP', percentage: 85 },
    { skill: 'SQL', percentage: 80 },
    { skill: 'Java', percentage: 75 },
    { skill: 'Python', percentage: 80 },
    { skill: 'JavaScript', percentage: 85 },
    { skill: 'Bash', percentage: 70 },
    { skill: 'C', percentage: 65 },
    { skill: 'Laravel', percentage: 50 },
    { skill: 'Django', percentage: 75 },
  ];
  
  const softwareSkills = [
    
    { skill: 'SGBD : MySQL - MariaDB - PostgreSQL', percentage: 85 },
    { skill: 'Simulation réseaux : Cisco packet Tracert, GNS3', percentage: 80 },
    { skill: 'Virtualisation : VMware/VirtualBox', percentage: 90 },
    { skill: 'Ubuntu/Debian', percentage: 95 },
    { skill: 'Windows Server', percentage: 80 },
    { skill: 'Pentest : Metasploit, nmap ...', percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          <span className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-indigo-600 dark:after:bg-indigo-400">
            Mes Compétences
          </span>
        </h2>
        
        {/* Skill Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <SkillCard 
            icon={Server} 
            title="Administration Système" 
            description="Gestion des systèmes Linux (Ubuntu, Debian) et Windows Server, installation et configuration de services(DHCP,DNS,FTP,SMTP,SSH ...)."
          />
          <SkillCard 
            icon={Server} 
            title="Support IT" 
            description="Maintenance des outils matériels et logiciels."
          />
          <SkillCard 
            icon={Server} 
            title="Administration Réseau" 
            description="Conception, implémentation et configuration de réseaux informatiques pour les entreprises."
          />
          <SkillCard 
            icon={Shield} 
            title="Sécurité Réseau" 
            description="Mise en place de VLAN, NAT, ACL, VPN, firewalls et certificats SSL pour sécuriser les infrastructures."
          />
          <SkillCard 
            icon={Monitor} 
            title="Virtualisation" 
            description="Création et gestion d'environnements virtuels avec VMware et VirtualBox."
          />
          <SkillCard 
            icon={Monitor} 
            title="Pentesting" 
            description="Test de pénétration dans des systèmes informatiques(application web, réseaux informatiques, ...)."
          />
          <SkillCard 
            icon={Globe} 
            title="Développement Web" 
            description="Création d'applications web avec HTML, CSS, PHP, et frameworks comme Laravel et Django."
          />
          <SkillCard 
            icon={Database} 
            title="Bases de données" 
            description="Conception, implémentation et maintenance de bases de données MySQL, MariaDB et PostgreSQL."
          />
          <SkillCard 
            icon={Terminal} 
            title="Programmation" 
            description="Développement d'applications en divers langages incluant Python, Java, C et JavaScript."
          />
          
        </div>
        
        {/* Skill Bars */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap mb-6 border-b border-slate-200 dark:border-slate-700">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                className={`py-3 px-6 font-medium transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="py-4">
            {activeTab === 'technical' && (
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
                ))}
              </div>
            )}
            
            {activeTab === 'languages' && (
              <div className="space-y-4">
                {languageSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
                ))}
              </div>
            )}
            
            {activeTab === 'software' && (
              <div className="space-y-4">
                {softwareSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;