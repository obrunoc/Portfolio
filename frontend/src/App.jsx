import { useState, useEffect, useCallback } from 'react';
import { Github, Linkedin, Mail, MapPin, Twitter, Facebook, Copy, Plus, Trash2, CheckCheck, Zap, Clock, Terminal } from 'lucide-react';

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
  { id: 'noc-incident-logger', label: 'NOC Incident Logger' }, // << ADICIONADO
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

// DADOS DOS PROJETOS
const PROJECTS_DATA = [
  { id: 1, title: 'Radar de estágios inteligente', role: 'Jr Front End | Back End Developer', year: '2026', link: null }
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

// Hook para animar seções ao entrar na tela
const useReveal = (id, threshold = 0.15) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [id, threshold]);
  return visible;
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
      className="min-h-screen flex items-center relative bg-[#0f0f0f] select-none overflow-hidden"
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
            <span className="text-white">Oi,</span><br />
            <span className="text-white">Eu sou</span>
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
            Front End Developer
          </p>

          <button
            onClick={() => scrollToSection('contato')}
            className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              padding: '12px 32px',
              borderRadius: '9999px',
              border: '2px solid transparent',
              backgroundImage: `linear-gradient(#0f0f0f, #0f0f0f), ${GRADIENT_COLORS.primary}`,
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              color: '#ec4899',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
            }}
          >
            Contate-me!
          </button>
        </article>
      </div>
    </section>
  );
};

const SobreSection = () => {
  const visible = useReveal('sobre');
  return (
    <section id="sobre" className="min-h-screen flex items-center bg-[#0f0f0f] relative select-none">
      <div className="container mx-auto px-12">
        <article className="max-w-4xl">
          <h2 className={`text-6xl font-bold text-white mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>SOBRE</h2>
          <p className={`text-gray-300 text-lg leading-relaxed mb-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Desenvolvedor Front End com foco em criar experiências web incríveis e funcionais.
          </p>
        </article>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const visible = useReveal('skills', 0.2);
  return (
    <section id="skills" className="min-h-screen flex items-center bg-[#0a0a0a] relative select-none">
      <div className="container mx-auto px-12">
        <article className="max-w-4xl">
          <h2 className={`text-6xl font-bold text-white mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>SKILLS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS_DATA.map((skill, i) => (
              <div key={skill.name} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100 + 200}ms` }}>
                <div className="flex justify-between mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${skill.level}%` : '0%',
                      background: GRADIENT_COLORS.primary,
                      transitionDelay: `${i * 120 + 400}ms`,
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
};

// ============================================================================
// SEÇÃO - PROJETOS
// ============================================================================

const ProjetosSection = () => {
  const visible = useReveal('projetos');
  return (
    <section id="projetos" className="min-h-screen flex items-center bg-[#0f0f0f] relative select-none">
      <div className="container mx-auto px-12">
        <article className="max-w-3xl">
          <h2 className={`text-6xl font-bold text-white mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>PROJETOS</h2>
          <div className="space-y-10">
            {PROJECTS_DATA.map((proj, i) => (
              <div key={proj.id} className={`flex gap-6 group transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${i * 150 + 200}ms` }}>
                <div className="w-1 rounded-full flex-shrink-0" style={{ background: '#06b6d4', minHeight: '70px' }} />
                <div>
                  <h3 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors">
                    {proj.link ? <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.title}</a> : proj.title}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-1">{proj.role}</p>
                  <p className="text-gray-500 text-sm">{proj.year}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

const ContatoSection = () => {
  const visible = useReveal('contato');
  return (
    <section id="contato" className="min-h-screen flex items-center bg-[#0a0a0a] relative select-none">
      <div className="container mx-auto px-12">
        <article className="max-w-4xl">
          <h2 className={`text-6xl font-bold text-white mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>CONTATO</h2>
          <p className={`text-gray-300 text-xl mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Vamos trabalhar juntos? Entre em contato!
          </p>
          <address className={`space-y-6 not-italic transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
};

// ============================================================================
// SEÇÃO - NOC INCIDENT LOGGER  <<<< BLOCO ADICIONADO — NADA ACIMA FOI ALTERADO
// ============================================================================

function calcSlaEnd(recebimento, slaHoras) {
  try {
    const [datePart, timePart] = recebimento.split(' ');
    const [day, month, year] = datePart.split('/');
    const [hour, min] = timePart.split(':');
    const d = new Date(year, month - 1, day, parseInt(hour), parseInt(min));
    d.setHours(d.getHours() + parseInt(slaHoras));
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  } catch {
    return '??:??';
  }
}

function nowHHMM() {
  const n = new Date();
  return `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}`;
}

const TRJ_DATA = {
  TRJ1: {
    label: 'TRJ 1',
    supervisores: [
      { nome: 'JHUAN', regiao: 'BAIXADA' },
      { nome: 'DANIEL', regiao: 'OESTE-1 NORTE 1' },
      { nome: 'MARCUS VINICIUS', regiao: 'OESTE 2' },
      { nome: 'CARAZZA', regiao: 'INTELIG' },
    ],
    formatarRegiao: (sups) => {
      const partes = sups.map(s => `(${s.nome} - ${s.regiao})`);
      const linha1 = partes.slice(0, 3).join(' ');
      const linha2 = partes.slice(3).join(' ');
      return linha2 ? `${linha1}\n${linha2}` : linha1;
    },
  },
  TRJ2: {
    label: 'TRJ 2',
    supervisores: [
      { nome: 'TIAGO MACEDO', regiao: 'MEIER' },
      { nome: 'YURI DIAS', regiao: 'CENTRO/SUL/SÃO CRISTÓVÃO' },
      { nome: 'THIAGO GOMES', regiao: 'TIJUCA' },
      { nome: 'ES/INTELIG', regiao: 'CARAZA' },
    ],
    formatarRegiao: (sups) => sups.map(s => `(${s.nome} — ${s.regiao})`).join(' • '),
  },
};

function gerarTexto(form, equipamentos, atualizacoes, regiaoForm) {
  const slaEnd = calcSlaEnd(form.recebimento, form.sla);
  const anel = form.anel ? form.anel.toUpperCase() : 'ROC X ALOG';
  const titulo = `${form.chamado} - ${anel} - RECEBIMENTO ${form.recebimento} (ALTA ${String(form.sla).padStart(2, '0')}H TÉRMINO SLA ${slaEnd})`;
  const equipFormatado = equipamentos.filter(e => e.trim()).join('\nX\n');

  let blocoRegiao = '';
  if (regiaoForm && regiaoForm.trj) {
    const data = TRJ_DATA[regiaoForm.trj];
    const sups = regiaoForm.selectedSups && regiaoForm.selectedSups.length > 0
      ? data.supervisores.filter(s => regiaoForm.selectedSups.includes(`${s.nome}|${s.regiao}`))
      : data.supervisores;
    const regiaoStr = data.formatarRegiao(sups);
    const tsk = regiaoForm.tskAtendida ? regiaoForm.tskAtendida.trim() : 'TSKXXX';
    const tec = regiaoForm.tecnicoAtivo ? regiaoForm.tecnicoAtivo.trim() : 'XXXXX';
    blocoRegiao = [
      regiaoForm.trj,
      `REGIÃO: ${regiaoStr}`,
      `STATUS: Realizado acionamento junto à operação.`,
      `No momento, estamos atendendo a TSK ${tsk}, chamado em fila de prioridade do técnico ${tec}.`,
    ].join('\n');
  }

  const supervisor = `SUPERVISOR: ${form.supervisor.toUpperCase()}`;
  const n1n2 = `N1/N2: ${form.n1n2 || ''}`;
  const tecnico = `TÉCNICO:${form.tecnico.toUpperCase()}`;

  const atuLines = atualizacoes
    .filter(a => a.hora || a.descricao)
    .map(a => {
      let lines = `${a.hora} ${a.descricao}.`;
      if (a.txDistancia) lines += `\nRocha fibra TX parada em ${a.txDistancia}.`;
      if (a.rxFibra) lines += `\nFibra RX em ${a.rxFibra} evidenciando dois defeitos na rede.`;
      return lines;
    })
    .join('\n\n');

  return [titulo, equipFormatado, blocoRegiao, [supervisor, n1n2, tecnico].join('\n'), atuLines]
    .filter(Boolean).join('\n\n').trim();
}

const NocField = ({ label, value, onChange, placeholder, error, hint }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs uppercase tracking-widest font-mono" style={{ color: error ? '#f87171' : '#6b7280' }}>
      {label}{error && ' *'}
    </label>
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`bg-black/40 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none transition-all font-mono border ${
        error ? 'border-red-500/70 focus:border-red-400' : 'border-white/10 focus:border-cyan-400/60 focus:bg-black/60'
      }`}
    />
    {error && hint && <span className="text-xs text-red-400 font-mono mt-0.5">{hint}</span>}
  </div>
);

const NocSectionTitle = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 mb-4 mt-2">
    <Icon className="w-4 h-4 text-cyan-400" />
    <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold">{children}</span>
    <div className="flex-1 h-px bg-white/5" />
  </div>
);

const NocIncidentLoggerSection = () => {
  const [form, setForm] = useState({
    chamado: '', recebimento: '', sla: '4', anel: '', supervisor: '', n1n2: '', tecnico: '',
  });
  const [equipamentos, setEquipamentos] = useState(['', '']);
  const [atualizacoes, setAtualizacoes] = useState([{ hora: '', descricao: '', txDistancia: '', rxFibra: '' }]);
  const [regiaoForm, setRegiaoForm] = useState({ trj: 'TRJ1', tskAtendida: '', tecnicoAtivo: '', selectedSups: [] });
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});

  const setField = useCallback((key) => (val) => {
    setForm(f => ({ ...f, [key]: val }));
    setErrors(e => ({ ...e, [key]: false }));
  }, []);

  const addEquip = () => setEquipamentos(e => [...e, '']);
  const removeEquip = (i) => setEquipamentos(e => e.filter((_, idx) => idx !== i));
  const setEquip = (i, val) => {
    setEquipamentos(e => e.map((x, idx) => idx === i ? val : x));
    setErrors(e => ({ ...e, equipamentos: false }));
  };

  const addAtu = () => setAtualizacoes(a => [...a, { hora: nowHHMM(), descricao: '', txDistancia: '', rxFibra: '' }]);
  const removeAtu = (i) => setAtualizacoes(a => a.filter((_, idx) => idx !== i));
  const setAtu = (i, key, val) => {
    setAtualizacoes(a => a.map((x, idx) => idx === i ? { ...x, [key]: val } : x));
    if (key === 'descricao') setErrors(e => ({ ...e, [`atu_${i}`]: false }));
  };

  const gerar = () => {
    const newErrors = {};
    const recebimentoValido = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/.test(form.recebimento.trim());
    if (!recebimentoValido) newErrors.recebimento = true;
    if (!form.supervisor.trim()) newErrors.supervisor = true;
    if (!form.tecnico.trim()) newErrors.tecnico = true;
    if (!equipamentos.some(e => e.trim())) newErrors.equipamentos = true;
    atualizacoes.forEach((a, i) => {
      if (!a.descricao.trim()) newErrors[`atu_${i}`] = true;
    });
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    setOutput(gerarTexto(form, equipamentos, atualizacoes, regiaoForm));
  };

  const copiar = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const slaEnd = form.recebimento && form.sla ? calcSlaEnd(form.recebimento, form.sla) : null;

  return (
    <section
      id="noc-incident-logger"
      className="min-h-screen flex items-start bg-[#0a0a0a] relative select-none py-20"
    >
      <div className="container mx-auto px-12 relative z-10 w-full">
        <div className="mb-10">
          <h2 className="text-6xl font-bold text-white mb-2">NOC Incident Logger</h2>
          <p className="text-gray-400 text-lg">Gerador de Registro de Incidente · N1 Tools</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* ── ESQUERDA: FORMULÁRIO ── */}
          <div className="space-y-6">

            {/* 1. Dados do Chamado */}
            <div className="bg-gray-900/40 border border-white/5 rounded-2xl p-6">
              <NocSectionTitle icon={Zap}>Dados do Chamado</NocSectionTitle>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <NocField label="Chamado" value={form.chamado} onChange={setField('chamado')} placeholder="TSK260300210502" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <NocField label="Recebimento" value={form.recebimento} onChange={setField('recebimento')} placeholder="09/03/2026 16:21" error={errors.recebimento} hint="Use o formato DD/MM/AAAA HH:MM" />
                </div>
                <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
                  <label className="text-xs text-gray-500 uppercase tracking-widest font-mono">SLA (horas)</label>
                  <div className="flex gap-2">
                    {['2', '4', '8', '24'].map(h => (
                      <button
                        key={h}
                        onClick={() => setField('sla')(h)}
                        className={`flex-1 py-2 rounded-lg text-sm font-mono font-bold transition-all border ${
                          form.sla === h
                            ? 'bg-cyan-400/10 border-cyan-400 text-cyan-400'
                            : 'bg-black/20 border-white/10 text-gray-500 hover:border-white/20'
                        }`}
                      >
                        {h}h
                      </button>
                    ))}
                  </div>
                  {slaEnd && (
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3 text-pink-400" />
                      <span className="text-xs text-pink-400 font-mono">Término SLA: {slaEnd}</span>
                    </div>
                  )}
                </div>
                <div className="col-span-2">
                  <NocField label="Anel" value={form.anel} onChange={setField('anel')} placeholder="DIST OCHA X POP DDC" />
                </div>
              </div>
            </div>

            {/* 2. Site */}
            <div className={`bg-gray-900/40 rounded-2xl p-6 border ${errors.equipamentos ? 'border-red-500/40' : 'border-white/5'}`}>
              <NocSectionTitle icon={Terminal}>Site</NocSectionTitle>
              {errors.equipamentos && <p className="text-xs text-red-400 font-mono mb-3">Adicione ao menos um equipamento</p>}
              <div className="space-y-2">
                {equipamentos.map((eq, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <span className="text-xs text-gray-600 font-mono w-4">{i + 1}</span>
                    <input
                      value={eq}
                      onChange={e => setEquip(i, e.target.value)}
                      placeholder="RNDIRJO-RJO03-01 @Interface: esat-1/1/27"
                      className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-all font-mono"
                    />
                    {equipamentos.length > 1 && (
                      <button onClick={() => removeEquip(i)} className="text-gray-600 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button onClick={addEquip} className="mt-3 flex items-center gap-2 text-xs text-gray-500 hover:text-cyan-400 transition-colors font-mono">
                <Plus className="w-3 h-3" /> Adicionar equipamento
              </button>
            </div>

            {/* 3. Script Obrigatório */}
            <div className="bg-gray-900/40 border border-white/5 rounded-2xl p-6 space-y-4">
              <NocSectionTitle icon={MapPin}>Script Obrigatório</NocSectionTitle>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest font-mono">Selecione o TRJ</label>
                <div className="flex gap-3">
                  {Object.keys(TRJ_DATA).map(trj => (
                    <button
                      key={trj}
                      onClick={() => setRegiaoForm(r => ({ ...r, trj, selectedSups: [] }))}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-mono font-bold transition-all border ${
                        regiaoForm.trj === trj
                          ? 'bg-cyan-400/10 border-cyan-400 text-cyan-400'
                          : 'bg-black/20 border-white/10 text-gray-500 hover:border-white/20'
                      }`}
                    >
                      {TRJ_DATA[trj].label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest font-mono">Supervisor responsável</label>
                <div className="flex flex-wrap gap-2">
                  {TRJ_DATA[regiaoForm.trj].supervisores.map(s => {
                    const key = `${s.nome}|${s.regiao}`;
                    const selected = regiaoForm.selectedSups.includes(key);
                    return (
                      <button
                        key={key}
                        onClick={() => setRegiaoForm(r => ({ ...r, selectedSups: selected ? [] : [key] }))}
                        className={`px-3 py-2 rounded-lg text-xs font-mono transition-all border text-left ${
                          selected
                            ? 'bg-cyan-400/15 border-cyan-400 text-cyan-300'
                            : 'bg-black/20 border-white/10 text-gray-400 hover:border-white/25 hover:text-gray-200'
                        }`}
                      >
                        {selected && <span className="text-cyan-400 mr-1">✓</span>}
                        <span className="font-bold">{s.nome}</span>
                        <span className="opacity-50 ml-1">· {s.regiao}</span>
                      </button>
                    );
                  })}
                </div>
                {regiaoForm.selectedSups.length === 0 && (
                  <p className="text-xs text-gray-600 font-mono mt-1">Nenhum selecionado — todos aparecerão</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500 uppercase tracking-widest font-mono">TSK em fila</label>
                  <input
                    value={regiaoForm.tskAtendida}
                    onChange={e => setRegiaoForm(r => ({ ...r, tskAtendida: e.target.value }))}
                    placeholder="TSK260300206461"
                    className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-all font-mono"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500 uppercase tracking-widest font-mono">Técnico em fila</label>
                  <input
                    value={regiaoForm.tecnicoAtivo}
                    onChange={e => setRegiaoForm(r => ({ ...r, tecnicoAtivo: e.target.value }))}
                    placeholder="Gaspar"
                    className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-all font-mono"
                  />
                </div>
              </div>
            </div>

            {/* 4. Responsáveis */}
            <div className="bg-gray-900/40 border border-white/5 rounded-2xl p-6">
              <NocSectionTitle icon={Zap}>Responsáveis</NocSectionTitle>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <NocField label="Supervisor" value={form.supervisor} onChange={setField('supervisor')} placeholder="Yuri Dias" error={errors.supervisor} hint="Campo obrigatório" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <NocField label="N1/N2" value={form.n1n2} onChange={setField('n1n2')} placeholder="-" />
                </div>
                <div className="col-span-2">
                  <NocField label="Técnico" value={form.tecnico} onChange={setField('tecnico')} placeholder="Eduardo Valviesse" error={errors.tecnico} hint="Campo obrigatório" />
                </div>
              </div>
            </div>

            {/* 5. Atualizações */}
            <div className="bg-gray-900/40 border border-white/5 rounded-2xl p-6">
              <NocSectionTitle icon={Clock}>Atualizações</NocSectionTitle>
              <div className="space-y-4">
                {atualizacoes.map((a, i) => (
                  <div key={i} className="border border-white/5 rounded-xl p-4 bg-black/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-cyan-400/60 font-mono">Atualização #{i + 1}</span>
                      {atualizacoes.length > 1 && (
                        <button onClick={() => removeAtu(i)} className="text-gray-600 hover:text-red-400 transition-colors">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-1">
                        <label className="text-xs text-gray-500 uppercase tracking-widest font-mono block mb-1">Hora</label>
                        <div className="flex gap-1">
                          <input
                            value={a.hora}
                            onChange={e => setAtu(i, 'hora', e.target.value)}
                            placeholder="17:29"
                            className="flex-1 min-w-0 bg-black/40 border border-white/10 rounded-lg px-2 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-all font-mono"
                          />
                          <button
                            onClick={() => setAtu(i, 'hora', nowHHMM())}
                            title="Hora atual"
                            className="px-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-400/20 transition-all"
                          >
                            <Clock className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label className="text-xs text-gray-500 uppercase tracking-widest font-mono block mb-1">Descrição</label>
                        <input
                          value={a.descricao}
                          onChange={e => setAtu(i, 'descricao', e.target.value)}
                          placeholder="Equipe informa medições"
                          className={`w-full bg-black/40 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none transition-all font-mono border ${
                            errors[`atu_${i}`] ? 'border-red-500/70 focus:border-red-400' : 'border-white/10 focus:border-cyan-400/60'
                          }`}
                        />
                        {errors[`atu_${i}`] && <span className="text-xs text-red-400 font-mono mt-0.5 block">Descrição obrigatória</span>}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-500 uppercase tracking-widest font-mono block mb-1">Distância TX</label>
                        <input
                          value={a.txDistancia}
                          onChange={e => setAtu(i, 'txDistancia', e.target.value)}
                          placeholder="3857m"
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 uppercase tracking-widest font-mono block mb-1">Fibra RX</label>
                        <input
                          value={a.rxFibra}
                          onChange={e => setAtu(i, 'rxFibra', e.target.value)}
                          placeholder="14.505km"
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-all font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={addAtu} className="mt-3 flex items-center gap-2 text-xs text-gray-500 hover:text-cyan-400 transition-colors font-mono">
                <Plus className="w-3 h-3" /> Adicionar atualização
              </button>
            </div>

            {/* Botão Gerar */}
            <button
              onClick={gerar}
              className="w-full py-4 rounded-xl font-bold text-black text-sm tracking-widest uppercase font-mono transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
              style={{ background: GRADIENT_COLORS.primary }}
            >
              ⚡ Gerar Texto para DOCS
            </button>
          </div>

          {/* ── DIREITA: SAÍDA ── */}
          <div className="flex flex-col">
            <div className="bg-gray-900/40 border border-white/5 rounded-2xl p-6 flex flex-col flex-1 sticky top-8">
              <div className="flex items-center justify-between mb-4">
                <NocSectionTitle icon={Terminal}>Saída Gerada</NocSectionTitle>
                {output && (
                  <button
                    onClick={copiar}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all border ${
                      copied
                        ? 'bg-green-400/10 border-green-400/50 text-green-400'
                        : 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20'
                    }`}
                  >
                    {copied ? <CheckCheck className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>
                )}
              </div>

              {output ? (
                <pre className="flex-1 font-mono text-xs text-gray-300 whitespace-pre-wrap leading-relaxed bg-black/40 rounded-xl p-4 border border-white/5 overflow-auto min-h-[400px]">
                  {output}
                </pre>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center border border-white/5 bg-white/5">
                    <Terminal className="w-7 h-7 text-gray-600" />
                  </div>
                  <p className="text-gray-600 text-sm font-mono">Preencha o formulário e clique em</p>
                  <p className="text-gray-500 text-xs font-mono mt-1">⚡ Gerar Texto para DOCS</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN APP
// ============================================================================

function App() {
  return (
    <div className="bg-black">

      {/* ── PARTÍCULAS GLOBAIS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
        {[
          { top:  '5%', left: '18%', color: '#ec4899', dur: '16s', delay:  '0s'  },
          { top: '12%', left: '74%', color: '#06b6d4', dur: '22s', delay: '-6s'  },
          { top: '28%', left: '42%', color: '#a855f7', dur: '19s', delay: '-11s' },
          { top: '38%', left: '88%', color: '#ec4899', dur: '25s', delay: '-3s'  },
          { top: '52%', left:  '8%', color: '#06b6d4', dur: '20s', delay: '-15s' },
          { top: '61%', left: '55%', color: '#a855f7', dur: '18s', delay: '-8s'  },
          { top: '74%', left: '32%', color: '#ec4899', dur: '23s', delay: '-13s' },
          { top: '82%', left: '80%', color: '#06b6d4', dur: '17s', delay: '-4s'  },
          { top: '91%', left: '60%', color: '#a855f7', dur: '21s', delay: '-9s'  },
        ].map((p, i) => (
          <div key={i} className="animate-gparticle" style={{
            position: 'absolute',
            top: p.top, left: p.left,
            width: '3px', height: '3px',
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 6px 2px ${p.color}88`,
            animationDuration: p.dur,
            animationDelay: p.delay,
          }} />
        ))}
      </div>

      <SideMenu />

      <main className="ml-64" style={{ position: 'relative', zIndex: 1 }}>
        <InicioSection />
        <SobreSection />
        <SkillsSection />
        <ProjetosSection />
        <NocIncidentLoggerSection />
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

        @keyframes drift {
          0%   { transform: translate(0px,  0px);  opacity: 0.5; }
          33%  { transform: translate(8px, -14px); opacity: 0.9; }
          66%  { transform: translate(-6px, -8px); opacity: 0.6; }
          100% { transform: translate(0px,  0px);  opacity: 0.5; }
        }

        .animate-particle {
          animation: drift ease-in-out infinite;
        }

        @keyframes linearFloat {
          0%   { transform: translateY(0px);   opacity: 0;   }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-120px); opacity: 0; }
        }

        .animate-gparticle {
          animation: linearFloat linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
