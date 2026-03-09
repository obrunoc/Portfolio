import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Twitter, Facebook, Code, ExternalLink } from 'lucide-react';

// ============================================================================
// CONSTANTS
// ============================================================================

const SITE_CONFIG = {
  name: 'Bruno',
  title: 'Web Developer',
  subtitle: 'Front End Developer / WordPress Expert',
  email: 'bruno@socdefense.com',
  location: 'Brazópolis, Minas Gerais, Brasil'
};

const NAVIGATION_ITEMS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' }
];

const SOCIAL_LINKS = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' }
];

const SKILLS_DATA = [
  { name: 'React', level: 60 },
  { name: 'JavaScript', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'TypeScript', level: 30 },
  { name: 'Tailwind CSS', level: 60 },
  { name: 'HTML/CSS', level: 85 }
];

// DADOS DOS PROJETOS - NOVA CONSTANTE
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com/usuario/projeto1',
    featured: true
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo com gráficos em tempo real e análise de dados.',
    image: '/images/project2.jpg',
    technologies: ['React', 'Chart.js', 'Firebase'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com/usuario/projeto2',
    featured: false
  },
  {
    id: 3,
    title: 'Portfolio Pessoal',
    description: 'Site portfolio moderno com animações e design responsivo.',
    image: '/images/project3.jpg',
    technologies: ['React', 'Tailwind', 'Framer Motion'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com/usuario/projeto3',
    featured: false
  }
];

const GRADIENT_COLORS = {
  primary: 'linear-gradient(90deg, #ec4899, #a855f7, #06b6d4)',
  icon: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)'
};

// ============================================================================
// CUSTOM HOOKS
// ============================================================================

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return { activeSection, scrollToSection };
};

// ============================================================================
// UI COMPONENTS
// ============================================================================

const Logo = () => (
  <div className="flex items-center gap-4">
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-12 h-12 rounded-lg animate-pulse"
        style={{ background: GRADIENT_COLORS.icon }}
        aria-hidden="true"
      />
      <div
        className="w-12 h-1 rounded-full animate-glow"
        style={{ background: '#06b6d4' }}
        aria-hidden="true"
      />
    </div>

    <div>
      <h1 className="text-2xl font-bold text-white">{SITE_CONFIG.name}</h1>
      <p className="text-sm text-gray-400">{SITE_CONFIG.title}</p>
    </div>
  </div>
);

const NavigationItem = ({ id, label, isActive, onClick }) => (
  <li>
    <button
      onClick={() => onClick(id)}
      className={`
        w-full text-left px-6 py-3 rounded-lg 
        transition-all duration-300
        ${isActive
          ? 'bg-cyan-400/10 text-cyan-400 border-l-4 border-cyan-400 translate-x-1'
          : 'text-gray-400 hover:text-white hover:bg-white/5 hover:translate-x-2'
        }
      `}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </button>
  </li>
);

const SocialLink = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-5 h-5" aria-hidden="true" />
  </a>
);

// NOVO COMPONENTE - Card de Projeto
const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <article
      className={`
        group bg-gray-900/50 rounded-2xl overflow-hidden 
        border border-white/5 hover:border-cyan-400/50 
        transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* Imagem do Projeto */}
      <div className="relative h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Code className="w-16 h-16 text-white/20" />
        </div>

        {/* Overlay no hover */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.demoLink}
            className="p-3 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
            aria-label="Ver demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5 text-black" />
          </a>
          <a
            href={project.githubLink}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Ver código"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Badge se for destaque */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-cyan-400 text-black text-xs rounded-full font-bold">
              DESTAQUE
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags de Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-md border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

// ============================================================================
// LAYOUT COMPONENTS
// ============================================================================

const SideMenu = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a1a1a] border-r border-white/5 z-50 flex flex-col animate-slideInLeft">
      <header className="p-8 border-b border-white/5">
        <Logo />
      </header>

      <nav className="flex-1 py-8" aria-label="Main navigation">
        <ul className="space-y-2 px-4">
          {NAVIGATION_ITEMS.map(({ id, label }, index) => (
            <div
              key={id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fadeIn"
            >
              <NavigationItem
                id={id}
                label={label}
                isActive={activeSection === id}
                onClick={scrollToSection}
              />
            </div>
          ))}
        </ul>
      </nav>

      <footer className="p-8 border-t border-white/5">
        <div className="flex gap-4 justify-center" role="list">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </div>
      </footer>
    </aside>
  );
};

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

const InicioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToSection } = useActiveSection();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative bg-[#0a0a0a] select-none overflow-hidden"
    >
      <div className="container mx-auto px-12 relative z-10">
        <article className="max-w-3xl">
          <h2
            className={`
              text-7xl md:text-8xl font-bold mb-6 leading-tight 
              transition-all duration-1000
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <span className="text-white">Olá,</span><br />
            <span className="text-white">Eu sou </span>
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: GRADIENT_COLORS.primary }}
            >
              {SITE_CONFIG.name}
            </span>
            <span className="text-white">,</span><br />
            <span className="text-white">web developer</span>
          </h2>

          <p className={`text-gray-400 text-lg mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {SITE_CONFIG.subtitle}
          </p>
        </article>
      </div>
    </section>
  );
};

const SobreSection = () => (
  <section
    id="sobre"
    className="min-h-screen flex items-center bg-[#0f0f0f] relative select-none"
  >
    <div className="container mx-auto px-12">
      <article className="max-w-4xl">
        <h2 className="text-6xl font-bold text-white mb-8">SOBRE</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Desenvolvedor Front End com foco em criar experiências web incríveis e funcionais.
        </p>
      </article>
    </div>
  </section>
);

const SkillsSection = () => (
  <section
    id="skills"
    className="min-h-screen flex items-center bg-[#0a0a0a] relative select-none"
  >
    <div className="container mx-auto px-12">
      <article className="max-w-4xl">
        <h2 className="text-6xl font-bold text-white mb-12">SKILLS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    background: GRADIENT_COLORS.primary
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  </section>
);

// ============================================================================
// NOVA SEÇÃO - PROJETOS
// ============================================================================

const ProjetosSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projetos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center bg-[#0f0f0f] relative select-none py-20"
    >
      <div className="container mx-auto px-12">
        <article className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h2
              className={`
                text-6xl font-bold text-white mb-4 
                transition-all duration-1000
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              PROJETOS
            </h2>
            <p
              className={`
                text-gray-400 text-lg transition-all duration-1000 delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              Confira alguns dos meus trabalhos recentes
            </p>
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

const ContatoSection = () => (
  <section
    id="contato"
    className="min-h-screen flex items-center bg-[#0a0a0a] relative select-none"
  >
    <div className="container mx-auto px-12">
      <article className="max-w-4xl">
        <h2 className="text-6xl font-bold text-white mb-12">CONTATO</h2>
        <p className="text-gray-300 text-xl mb-12">
          Vamos trabalhar juntos? Entre em contato!
        </p>
        <address className="space-y-6 not-italic">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-4 text-xl text-white hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
            {SITE_CONFIG.email}
          </a>
        </address>
      </article>
    </div>
  </section>
);

// ============================================================================
// MAIN APP
// ============================================================================

function App() {
  return (
    <div className="bg-black">
      <SideMenu />

      <main className="ml-64">
        <InicioSection />
        <SobreSection />
        <SkillsSection />
        <ProjetosSection /> {/* NOVA SEÇÃO ADICIONADA */}
        <ContatoSection />
      </main>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px #06b6d4, 0 0 10px #06b6d4;
          }
          50% {
            box-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;