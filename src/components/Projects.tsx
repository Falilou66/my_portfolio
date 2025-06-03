import React, { useState } from 'react';
import { 
  ExternalLink, 
  Shield, 
  Server, 
  Brain, 
  Smartphone, 
  Palette, 
  MonitorSmartphone,
  Users,
  Megaphone,
  Terminal,
  Cpu,
  Radio,
  Eye,
  Code,
  Database
} from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
  technologies: string[];
  category: 'security' | 'web' | 'ai' | 'mobile' | 'design' | 'desktop' | 'community';
  highlight?: boolean;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Project['category'] | 'all'>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projectData: Project[] = [
    {
      id: 1,
      title: "RavaGuard - Protection Intelligente des Cultures",
      description: "Système IoT & IA pour la détection et la protection contre les oiseaux ravageurs",
      icon: Brain,
      details: [
        "Intégration Raspberry Pi avec capteur PIR pour détection de mouvement",
        "Backend Django avec API REST et stockage local optimisé",
        "Frontend React (web) et Flutter (mobile) pour une expérience unifiée",
        "Machine Learning avec YOLO pour détection visuelle et analyse audio",
        "Dashboard temps réel avec historique et notifications",
        "Authentification JWT et gestion sécurisée des données"
      ],
      technologies: ["Raspberry Pi", "Python", "Django", "React", "Flutter", "TensorFlow", "JWT", "REST API"],
      category: "ai",
      highlight: true
    },
    {
      id: 2,
      title: "HackLab Personnel",
      description: "Laboratoire de cybersécurité pour tests de pénétration",
      icon: Shield,
      details: [
        "Configuration d'un environnement de test sécurisé avec VMware",
        "Déploiement de Kali Linux pour tests offensifs",
        "Installation de Metasploitable2 comme cible d'entraînement",
        "Configuration d'Ubuntu Server pour services réseau",
        "Pratique des techniques de pentest éthique"
      ],
      technologies: ["Kali Linux", "VMware", "Metasploit", "Ubuntu Server", "Wireshark"],
      category: "security"
    },
    {
      id: 3,
      title: "Infrastructure Réseau Sécurisée",
      description: "Configuration et sécurisation d'un serveur Ubuntu",
      icon: Server,
      details: [
        "Déploiement complet d'Ubuntu Server avec services essentiels",
        "Configuration DHCP, DNS et SSH optimisée",
        "Mise en place de Fail2Ban pour protection contre les attaques",
        "Configuration firewall UFW/IPTables avancée",
        "Monitoring réseau avec Wireshark"
      ],
      technologies: ["Ubuntu Server", "DHCP", "DNS", "SSH", "Fail2Ban", "UFW", "IPTables"],
      category: "security"
    },
    {
      id: 4,
      title: "Système de Gestion Admin/User",
      description: "Interface web complète avec gestion des rôles",
      icon: Database,
      details: [
        "Interface d'administration complète avec CRUD",
        "Système de connexion et gestion des sessions sécurisé",
        "Gestion des rôles et permissions",
        "Interface utilisateur intuitive",
        "Base de données optimisée"
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "web"
    },
    {
      id: 5,
      title: "Application Laravel",
      description: "Découverte du framework MVC Laravel",
      icon: Code,
      details: [
        "Architecture MVC complète",
        "Routing et contrôleurs avancés",
        "Utilisation de l'ORM Eloquent",
        "Migrations et seeding de base de données",
        "Authentification et autorisation"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Blade", "Eloquent"],
      category: "web"
    },
    {
      id: 6,
      title: "RavaGuard Mobile",
      description: "Application mobile Flutter pour le système IoT",
      icon: Smartphone,
      details: [
        "Interface utilisateur Flutter moderne",
        "Dashboard en temps réel",
        "Système de notifications push",
        "Gestion des capteurs IoT",
        "Authentification sécurisée"
      ],
      technologies: ["Flutter", "Dart", "REST API", "Firebase", "Material Design"],
      category: "mobile"
    },
    {
      id: 7,
      title: "Design UX/UI RavaGuard",
      description: "Conception d'interfaces pour web et mobile",
      icon: Palette,
      details: [
        "Maquettes Figma complètes",
        "Design system unifié",
        "Prototypes interactifs",
        "Tests d'utilisabilité",
        "Guidelines de design"
      ],
      technologies: ["Figma", "Adobe XD", "Material Design", "Prototyping"],
      category: "design"
    },
    {
      id: 8,
      title: "Dictionnaire Interactif",
      description: "Application Java Swing moderne",
      icon: MonitorSmartphone,
      details: [
        "Interface graphique Java Swing",
        "Recherche de mots optimisée",
        "Base de données de définitions",
        "Design inspiré du Concise Oxford Dictionary",
        "Fonctionnalités de favoris"
      ],
      technologies: ["Java", "Swing", "SQLite", "XML"],
      category: "desktop"
    },
    {
      id: 9,
      title: "Animation UADB Tech Club",
      description: "Leadership technique et formation",
      icon: Users,
      details: [
        "Organisation de soirées de codage",
        "Formation au développement web",
        "Mentorat d'étudiants",
        "Production de contenu pédagogique",
        "Animation de la communauté tech"
      ],
      technologies: ["Leadership", "Formation", "Communication", "Gestion de projet"],
      category: "community"
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous', icon: Terminal },
    { id: 'ai', label: 'IA & IoT', icon: Cpu },
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'web', label: 'Web', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'desktop', label: 'Desktop', icon: MonitorSmartphone },
    { id: 'community', label: 'Communauté', icon: Users }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          <span className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-indigo-600 dark:after:bg-indigo-400">
            Projets & Réalisations
          </span>
        </h2>
        
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="inline-flex bg-white dark:bg-slate-900 rounded-lg p-1 shadow-md">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as any)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === filter.id
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            const isHovered = hoveredProject === project.id;
            
            return (
              <div 
                key={project.id}
                className={`relative bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:transform hover:-translate-y-2 group ${
                  project.highlight ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-blue-500/5 dark:from-indigo-400/5 dark:to-blue-300/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="h-2 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300"></div>
                <div className="p-6 relative">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-4 transition-colors duration-300 ${
                      isHovered 
                        ? 'bg-indigo-600 dark:bg-indigo-500' 
                        : 'bg-indigo-100 dark:bg-slate-800'
                    }`}>
                      <Icon className={`h-6 w-6 transition-colors duration-300 ${
                        isHovered 
                          ? 'text-white' 
                          : 'text-indigo-600 dark:text-indigo-400'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-slate-900 dark:text-white mb-2">Caractéristiques :</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      {project.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isHovered
                          ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                          : 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>Voir détails</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-700 dark:text-slate-300 text-lg">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;