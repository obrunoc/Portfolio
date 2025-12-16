import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Twitter, Facebook } from 'lucide-react';

// Componente de Menu Lateral
function SideMenu() {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'My Skills' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a1a1a] border-r border-white/5 z-50 flex flex-col">
      {/* Logo/Nome */}
      <div className="p-8 border-b border-white/5">
        <div className="flex items-start gap-3 mb-2">
          <div className="flex flex-col gap-1">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded"></div>
            <div className="w-8 h-1 bg-cyan-400"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Bruno</h1>
            <p className="text-xs text-gray-400">Web Developer</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-8">
        <ul className="space-y-2 px-4">
          {menuItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`w-full text-left px-6 py-3 rounded-lg transition-all ${
                  activeSection === id
                    ? 'bg-cyan-400/10 text-cyan-400 border-l-4 border-cyan-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Redes Sociais */}
      <div className="p-8 border-t border-white/5">
        <div className="flex gap-4 justify-center">
          <a href="https://twitter.com" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}

// Componente de Animação de Linhas
function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute right-0 top-1/4 w-2/3 h-2/3 opacity-60" viewBox="0 0 800 600">
        {/* Linhas animadas estilo wireframe */}
        <path
          d="M 700 100 Q 500 200 600 400 T 400 500"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="3s"
            fill="freeze"
          />
        </path>
        <path
          d="M 650 150 Q 450 250 550 450 T 350 550"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="3s"
            begin="0.3s"
            fill="freeze"
          />
        </path>
        <path
          d="M 600 80 Q 400 180 500 380 T 300 480"
          stroke="url(#gradient3)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="3s"
            begin="0.6s"
            fill="freeze"
          />
        </path>
        
        {/* Gradientes */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Seção Hero
function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-[#0a0a0a] select-none"
    >
      <AnimatedLines />
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">Hi,</span><br />
            <span className="text-white">I'm </span>
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #ec4899 0%, #a855f7 50%, #06b6d4 100%)' }}
            >
              Bruno
            </span>
            <span className="text-white">,</span><br />
            <span className="text-white">web developer</span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 tracking-wide">
            Front End Developer / WordPress Expert
          </p>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-all font-medium select-none"
          >
            Contact me!
          </button>
        </div>
      </div>
    </section>
  );
}

// Seção About
function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-[#0f0f0f] relative select-none"
    >
      <div className="container mx-auto px-12">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold text-white mb-8">ABOUT</h2>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Desenvolvedor Front End com foco em criar experiências web incríveis e funcionais. 
              Especializado em HTML, JavaScript, React e Tailwind CSS.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Implemento estratégias eficazes em projetos locais e globais. Minha maior força é a 
              consciência de negócios, que me permite otimizar continuamente infraestrutura e aplicações.
            </p>

            <div className="flex items-center gap-3 pt-6 text-gray-400">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Brazópolis, Minas Gerais, Brasil</span>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href="mailto:bruno@socdefense.com" className="hover:text-cyan-400 transition-colors">
                bruno@socdefense.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção Skills
function SkillsSection() {
  const skills = [
    { name: 'React', level: 60 },
    { name: 'JavaScript', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'TypeScript', level: 30 },
    { name: 'Tailwind CSS', level: 60 },
    { name: 'HTML/CSS', level: 85 }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-[#0a0a0a] relative select-none"
    >
      <div className="container mx-auto px-12">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold text-white mb-12">MY SKILLS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <div
                    className="h-full rounded-full shadow-lg shadow-pink-500/50"
                    style={{ 
                      width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, #ec4899 0%, #a855f7 50%, #06b6d4 100%)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• React & Next.js</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Node.js</li>
                <li>• APIs RESTful</li>
                <li>• MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Git & GitHub</li>
                <li>• VS Code</li>
                <li>• Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção Work
function WorkSection() {
  return (
    <section
      id="work"
      className="min-h-screen flex items-center bg-[#0f0f0f] relative select-none"
    >
      <div className="container mx-auto px-12">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold text-white mb-12">WORK</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-cyan-400 pl-8 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Jr Front End Developer</h3>
              <p className="text-cyan-400 mb-2">Projeto de própria autoria</p>
              <p className="text-gray-400">2025 - Presente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção Contact
function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-[#0a0a0a] relative select-none"
    >
      <div className="container mx-auto px-12">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold text-white mb-12">CONTACT</h2>
          
          <p className="text-gray-300 text-xl mb-12">
            Vamos trabalhar juntos? Entre em contato!
          </p>

          <div className="space-y-6">
            <a
              href="mailto:bruno@socdefense.com"
              className="flex items-center gap-4 text-xl text-white hover:text-cyan-400 transition-colors select-text"
            >
              <Mail className="w-6 h-6" />
              bruno@socdefense.com
            </a>
            
            <div className="flex items-center gap-4 text-xl text-white">
              <MapPin className="w-6 h-6 text-cyan-400" />
              Brazópolis, Minas Gerais, Brasil
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// App Principal
function App() {
  return (
    <div className="bg-black">
      <SideMenu />
      <main className="ml-64">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;