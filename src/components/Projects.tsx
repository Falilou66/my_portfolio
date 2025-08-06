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
      description: "Projet principal IoT, IA, Web & Mobile - Application complète pour la détection d'oiseaux ravageurs",
      icon: Brain,
      details: [
        "Backend Django avec API REST sécurisées et PostgreSQL",
        "Frontend React pour interface web administrative",
        "Application mobile Flutter avec Provider et JWT",
        "Modèle IA pour classification d'espèces nuisibles",
        "Collecte de données via capteur PIR sur Raspberry Pi",
        "Tableaux de bord web et mobile temps réel",
        "Historique des événements et notifications push",
        "Sécurité d'accès et authentification complète"
      ],
      technologies: ["Django", "React", "Flutter", "PostgreSQL", "Python", "IA", "Raspberry Pi", "JWT", "Provider"],
      category: "ai",
      highlight: true
    },
    {
      id: 2,
      title: "Application Mobile RavaGuard",
      description: "Version mobile autonome avec interface stylisée et gestion complète des capteurs",
      icon: Smartphone,
      details: [
        "Interface Flutter moderne avec Provider pour state management",
        "Authentification JWT et gestion sécurisée des tokens",
        "Dashboard mobile stylisé avec graphiques interactifs",
        "Historique complet des détections avec filtres",
        "Gestion des paramètres utilisateur et notifications",
        "Connexion temps réel avec capteurs distants",
        "Interface responsive et animations fluides"
      ],
      technologies: ["Flutter", "Dart", "JWT", "HTTP", "Provider", "Material Design"],
      category: "mobile"
    },
    {
      id: 3,
      title: "Dictionnaire Interactif Java Swing",
      description: "Application desktop avec interface attrayante inspirée d'Oxford Dictionary",
      icon: Code,
      details: [
        "Interface graphique Java Swing moderne et intuitive",
        "Design inspiré du Concise Oxford Dictionary",
        "Système de recherche rapide et efficace",
        "Base de données locale intégrée",
        "Affichage structuré des définitions",
        "Interface responsive et navigation fluide"
      ],
      technologies: ["Java", "Java Swing", "SQLite", "UI/UX Design"],
      category: "desktop"
    },
    {
      id: 4,
      title: "Plateforme de Gestion des Lignes de Bus",
      description: "Prototype web avec localisation en temps réel et gestion des itinéraires",
      icon: MonitorSmartphone,
      details: [
        "Carte interactive avec Google Maps API",
        "Gestion complète des lignes et horaires",
        "Suivi en temps réel de la position des bus",
        "Interface administrative pour la gestion des routes",
        "Système de notifications pour les usagers",
        "Dashboard de monitoring du trafic"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Google Maps API", "Backend API"],
      category: "web"
    },
    {
      id: 5,
      title: "Infrastructure Web Sécurisée",
      description: "Application de démonstration intégrée à un environnement réseau sécurisé",
      icon: Shield,
      details: [
        "Hébergement sécurisé avec pare-feu Linux configuré",
        "Serveur web Apache/Django dans environnement protégé",
        "Simulations d'attaques DoS pour tests de robustesse",
        "Monitoring de sécurité en temps réel",
        "Tests de pénétration et analyse de vulnérabilités",
        "Documentation complète des mesures de sécurité"
      ],
      technologies: ["Linux", "Apache", "Django", "iptables", "Monitoring", "Pentesting"],
      category: "security"
    },
    {
      id: 6,
      title: "Infrastructure Réseau Sécurisée avec pfSense",
      description: "Mise en place d'un réseau d'entreprise sécurisé avec protection contre les attaques",
      icon: Shield,
      details: [
        "Configuration de pfSense comme pare-feu principal",
        "Mise en place de Snort pour détection d'intrusions (IDS)",
        "Protection contre attaques DoS et scan de ports",
        "Configuration de VPN et certificats SSL/TLS",
        "Segmentation réseau avec VLANs et ACL",
        "Monitoring et analyse de trafic en temps réel"
      ],
      technologies: ["pfSense", "Snort", "SSL/TLS", "VPN", "VLAN", "ACL", "Wireshark"],
      category: "security"
    },
    {
      id: 7,
      title: "Services Réseaux Multi-Plateformes",
      description: "Déploiement complet de services réseau sur Ubuntu Server et Windows Server",
      icon: Server,
      details: [
        "Configuration DNS, DHCP, SMTP, VOIP sur Ubuntu Server",
        "Déploiement Active Directory sur Windows Server",
        "Routage dynamique avec RIP et OSPF",
        "Gestion centralisée des utilisateurs et permissions",
        "Services de messagerie et téléphonie IP",
        "Monitoring et maintenance des services critiques"
      ],
      technologies: ["Ubuntu Server", "Windows Server", "DNS", "DHCP", "SMTP", "VOIP", "Active Directory", "OSPF", "RIP"],
      category: "security"
    },
    {
      id: 8,
      title: "Serveur Linux & Windows avec Services Réseaux",
      description: "Configuration complète de serveurs avec services réseau essentiels",
      icon: Server,
      details: [
        "Configuration de DNS, DHCP, SMTP, VOIP sur Ubuntu Server",
        "Mise en place d'Active Directory sur Windows Server",
        "Configuration de services SSH sécurisés",
        "Gestion des utilisateurs et permissions LDAP",
        "Virtualisation avec VMware et VirtualBox",
        "Monitoring et maintenance des services"
      ],
      technologies: ["Ubuntu Server", "Windows Server", "DNS", "DHCP", "SMTP", "VOIP", "Active Directory", "LDAP"],
      category: "security"
    },
    {
      id: 9,
      title: "Réseau avec Routage Dynamique",
      description: "Déploiement d'un réseau avec routage dynamique OSPF et RIP",
      icon: Radio,
      details: [
        "Configuration de routage dynamique OSPF et RIP",
        "Mise en place de routage statique pour segments critiques",
        "Configuration de VLANs pour segmentation réseau",
        "Implémentation de NAT et ACL pour sécurité",
        "Tests de connectivité et optimisation des routes",
        "Documentation complète de l'architecture réseau"
      ],
      technologies: ["OSPF", "RIP", "EIGRP", "VLAN", "NAT", "ACL", "GNS3", "Packet Tracer"],
      category: "security"
    },
    {
      id: 10,
      title: "Application de Gestion de Stock",
      description: "Application web de gestion basique pour entreprise avec interface CRUD",
      icon: Database,
      details: [
        "Interface CRUD pour produits et commandes",
        "Base de données PostgreSQL optimisée",
        "Authentification utilisateur sécurisée",
        "Interface simple pour ajout et gestion des stocks",
        "Gestion des commandes et fournisseurs",
        "Rapports de stock et statistiques"
      ],
      technologies: ["Django", "HTML/CSS", "PostgreSQL", "Authentication"],
      category: "web"
    },
    {
      id: 11,
      title: "Tests d'Intrusion et Analyse de Vulnérabilités",
      description: "Tests de pénétration éthique et analyse de sécurité",
      icon: Eye,
      details: [
        "Tests d'intrusion DoS et scan de ports avec Nmap",
        "Analyse de vulnérabilités sur applications web",
        "Configuration de pare-feu Linux avec iptables",
        "Analyse de trafic réseau avec Wireshark",
        "Documentation des failles et recommandations",
        "Tests de sécurité sur infrastructures virtualisées"
      ],
      technologies: ["Nmap", "Wireshark", "iptables", "Kali Linux", "VMware"],
      category: "security"
    },
    {
      id: 12,
      title: "Design UX/UI RavaGuard",
      description: "Conception d'interfaces pour web et mobile",
      icon: Palette,
      details: [
        "Maquettes Figma complètes",
        "Design system unifié et cohérent",
        "Prototypes interactifs et wireframes",
        "Interface responsive et accessible",
        "Guidelines de design et composants réutilisables"
      ],
      technologies: ["Figma", "Material Design", "Prototyping"],
      category: "design"
    },
    {
      id: 13,
      title: "Coordination UADB Tech Club",
      description: "Leadership technique et organisation d'événements",
      icon: Users,
      details: [
        "Organisation d'événements (Coding Night, Bootcamp, Graduation Day)",
        "Animation et modération de la commission scientifique",
        "Encadrement de projets étudiants et mentorat technique",
        "Création de contenu tech et formation des membres",
        "Gestion d'équipe et coordination des activités"
      ],
      technologies: ["Leadership", "Gestion de projet", "Formation", "Communication", "Animation"],
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