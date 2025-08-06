import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Shield, 
  Server, 
  Terminal, 
  Brain,
  Users,
  Code,
  Cpu
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Coordinateur",
      company: "UADB Tech Club",
      period: "2025 - présent",
      icon: Users,
      description: "Leadership technique et animation de la communauté étudiante",
      achievements: [
        "Organisation d'événements techniques (Coding Night, Bootcamp, Graduation Day)",
        "Animation et modération de la commission scientifique",
        "Encadrement de projets étudiants et mentorat technique",
        "Création de contenu tech et formation des membres",
        "Gestion d'équipe et coordination des activités du club"
      ],
      skills: ["Leadership", "Gestion de projet", "Formation", "Communication", "Animation"]
    },
    {
      title: "Assistant IT",
      company: "Agence immobilière BICO",
      period: "2020 - 2023",
      icon: Server,
      description: "Support technique et digitalisation des processus",
      achievements: [
        "Maintenance des équipements informatiques",
        "Mise en place de solutions de digitalisation",
        "Support technique et gestion du parc informatique",
        "Optimisation des processus métier",
        "Formation des utilisateurs aux nouveaux outils"
      ],
      skills: ["Support IT", "Maintenance", "Digitalisation", "Gestion de parc"]
    },
    {
      title: "Spécialiste Cybersécurité",
      company: "Projets Académiques & Personnels",
      period: "2022 - 2025",
      icon: Shield,
      description: "Tests d'intrusion et sécurisation d'infrastructures",
      achievements: [
        "Tests d'intrusion (DoS, scan de ports, détection de vulnérabilités)",
        "Configuration de pare-feu Linux (iptables) et pfSense",
        "Mise en place d'IDS avec Snort pour détection d'intrusions",
        "Analyse réseau approfondie avec Wireshark et Nmap",
        "Sécurisation SSL/TLS et gestion de certificats"
      ],
      skills: ["Pentesting", "pfSense", "Snort", "iptables", "SSL/TLS", "Wireshark", "Nmap"]
    },
    {
      title: "Administrateur Systèmes & Réseaux",
      company: "Projets d'Infrastructure",
      period: "2022 - 2024",
      icon: Server,
      description: "Conception et déploiement d'infrastructures réseau",
      achievements: [
        "Configuration de services réseau : DNS, DHCP, SMTP, VOIP",
        "Routage IP (statique et dynamique : RIP, OSPF, EIGRP)",
        "Mise en place de VLANs, ACL, NAT et VPN",
        "Administration Linux (Ubuntu Server) et Windows Server",
        "Virtualisation avec VMware et VirtualBox",
        "Active Directory et LDAP"
      ],
      skills: ["OSPF", "EIGRP", "VLAN", "ACL", "VMware", "Active Directory", "Linux"]
    },
    {
      title: "Développeur IoT & IA",
      company: "Projet RavaGuard",
      period: "2025 - en cours",
      icon: Brain,
      description: "Application IoT & IA pour détection d'oiseaux ravageurs",
      achievements: [
        "Développement web (Django) avec API REST sécurisées",
        "Application mobile Flutter avec authentification JWT",
        "Modèle IA pour classification d'espèces nuisibles",
        "Collecte de données via capteur PIR sur Raspberry Pi",
        "Tableaux de bord temps réel et historique des alertes",
        "Design UX/UI complet avec Figma"
      ],
      skills: ["Django", "Flutter", "IA", "IoT", "Raspberry Pi", "JWT", "Figma"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          <span className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-indigo-600 dark:after:bg-indigo-400">
            Parcours Professionnel
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="relative border-l-4 border-indigo-600 dark:border-indigo-400 pl-8 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute w-8 h-8 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-4 top-0 flex items-center justify-center shadow-md">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {exp.company}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 text-sm font-bold mr-3">✓</span>
                        <p>{achievement}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Additional sections for soft skills and interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center">
                <Terminal className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                Compétences Techniques
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <p>Junior en sécurité réseau et pentesting</p>
                </li>
                <li className="flex items-center">
                  <Server className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <p>Administration système Linux avancée</p>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <p>Développement full-stack moderne</p>
                </li>
                <li className="flex items-center">
                  <Cpu className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <p>IoT et Intelligence Artificielle</p>
                </li>
                <li className="flex items-center">
                  <Brain className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <p>Machine Learning et Vision par Ordinateur</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                Leadership & Communication
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <div className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3">•</div>
                  <p>Modérateur évènement du UADB Tech Club</p>
                </li>
                <li className="flex items-center">
                  <div className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3">•</div>
                  <p>Vice coordinateur du UADB Tech Club</p>
                </li>
                <li className="flex items-center">
                  <div className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3">•</div>
                  <p>Formation et mentorat technique</p>
                </li>
                <li className="flex items-center">
                  <div className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3">•</div>
                  <p>Rédaction technique sur LinkedIn</p>
                </li>
                <li className="flex items-center">
                  <div className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3">•</div>
                  <p>Gestion de projets innovants</p>
                </li>
                <li className="flex items-center">
                  <div className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-3">•</div>
                  <p>Communication technique efficace</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;