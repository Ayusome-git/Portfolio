import { useEffect, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import marketplace from "@/assets/marketplace.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayush Gupta — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ayush Gupta, a full stack developer building bold, fast web applications with React, Node.js, and TypeScript.",
      },
      { property: "og:title", content: "Ayush Gupta — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Ayush Gupta, a full stack developer building bold, fast web applications with React, Node.js, and TypeScript.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STACK_MARQUEE = [
  "React",
  "NextJs",
  "TypeScript",
  "Python",
  "TailwindCSS",
  "Zustand",
  "ShadcnUI",
  "Node.js",
  "FastApi",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
];

const RESUME_URL = "https://drive.google.com/file/d/1CM_FxR-bgnqQdczndywGHMxNsg3A6ctn/view?usp=drive_link";

const SKILL_GROUPS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "C++"] },
  {
    label: "Frontend",
    items: ["React.js", "NextJs", "HTML", "CSS", "TailwindCSS", "Zustand", "ShadcnUI"],
  },
  { label: "Backend", items: ["Node.js", "Express.js", "FastApi"] },
  { label: "Database", items: ["MySQL", "MongoDB", "PostgreSQL"] },
  { label: "Tools", items: ["Prisma", "Git", "Postman", "VS Code", "Docker"] },
];

const JOURNEY: { period: string; title: string; place: string; type: "experience" | "education" }[] = [
  {
    period: "May 2026 — Jul 2026",
    title: "Advanced Application Engineering Analyst Intern",
    place: "Accenture India · Hybrid, Bangalore",
    type: "experience",
  },
  {
    period: "Apr 2025 — Aug 2025",
    title: "Frontend Developer",
    place: "MBC Department, MANIT Bhopal · Remote, Bhopal",
    type: "experience",
  },
  {
    period: "2024 — 2027",
    title: "Master Of Computer Application · CGPA 8.67",
    place: "Maulana Azad National Institute Of Technology Bhopal",
    type: "education",
  },
  {
    period: "2020 — 2023",
    title: "Bachelor Of Computer Application · CGPA 9.28",
    place: "Techno India, Kolkata",
    type: "education",
  },
];

const popShadow = "shadow-[6px_6px_0_var(--color-ink)]";
const popShadowHover =
  "hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--color-ink)]";

function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !(dark ?? false);
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — theme just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border-2 border-ink bg-card shadow-[3px_3px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-ink)]"
    >
      {dark ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-sun"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-grape"
          aria-hidden="true"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground selection:bg-coral selection:text-cream">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Contact />
      <footer className="border-t-2 border-ink bg-background py-8 text-center text-sm font-medium text-foreground/60">
        © 2026 Ayush Gupta — Full Stack Developer · Built with React, TypeScript
        &amp; TailwindCSS
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl font-extrabold tracking-tight"
        >
          Ayush<span className="text-coral">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#about" className="transition-colors hover:text-coral">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-coral">
            Stack
          </a>
          <a href="#contact" className="transition-colors hover:text-coral">
            Contact
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-coral">
            Resume ↗
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className={`rounded-full border-2 border-ink bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground shadow-[4px_4px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-ink)]`}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [projectIdx, setProjectIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIdx((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-ink min-h-[90vh] flex items-center bg-background">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
      `}</style>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-ink)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-ink)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.04]"></div>
      
      {/* Subtle Radial Lighting */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground opacity-[0.02] blur-[120px]"></div>

      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:py-12 flex flex-col lg:flex-row items-center gap-12 xl:gap-8 relative z-10">
        
        {/* Left Side: Personal Intro */}
        <div className="w-full lg:w-[48%] xl:w-[45%] flex flex-col items-start shrink-0">
          <div className="animate-fade-up flex w-fit items-center rounded-full border border-ink/20 bg-card/30 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-foreground/80 shadow-sm transition-all hover:border-ink/50">
             <span className="mr-[-0.1em]">Full Stack Developer</span>
             <span className="hidden sm:block mx-3 h-1 w-1 shrink-0 rounded-full bg-foreground/30"></span>
             <span className="hidden sm:block mr-[-0.1em]">React</span>
             <span className="hidden sm:block mx-3 h-1 w-1 shrink-0 rounded-full bg-foreground/30"></span>
             <span className="hidden sm:block mr-[-0.1em]">Node</span>
             <span className="hidden sm:block mx-3 h-1 w-1 shrink-0 rounded-full bg-foreground/30"></span>
             <span className="hidden sm:block mr-[-0.1em]">TypeScript</span>
          </div>
          
          <h1 className="animate-fade-up animation-delay-100 mt-8 font-display text-4xl md:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground">
            Full stack developer <br className="hidden sm:block" />
            <span className="text-foreground/70">building modern web experiences.</span>
          </h1>
          
          <p className="animate-fade-up animation-delay-200 mt-6 max-w-md text-lg leading-relaxed text-foreground/70">
            I build fast, interactive and production-ready web applications across the frontend and backend with React, TypeScript, Node.js and modern web technologies.
          </p>
          
          <div className="animate-fade-up animation-delay-300 mt-10 flex flex-wrap items-center gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3.5 text-sm font-bold text-cream shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:bg-coral/90"
            >
              View Resume ↗
            </a>
          </div>

          <div className="animate-fade-up animation-delay-400 mt-14 flex flex-wrap items-center gap-3.5 text-[11px] font-bold text-foreground/40 uppercase tracking-widest">
             <span>React</span>
             <span className="w-[3px] h-[3px] rounded-full bg-foreground/30"></span>
             <span>TypeScript</span>
             <span className="w-[3px] h-[3px] rounded-full bg-foreground/30"></span>
             <span>Node.js</span>
             <span className="hidden sm:block w-[3px] h-[3px] rounded-full bg-foreground/30"></span>
             <span className="hidden sm:block">Express</span>
             <span className="hidden sm:block w-[3px] h-[3px] rounded-full bg-foreground/30"></span>
             <span className="hidden sm:block">PostgreSQL</span>
          </div>
        </div>

        {/* Right Side: Project Showcase (Deck Shuffle) */}
        <div className="animate-fade-up animation-delay-400 animate-float w-full lg:w-[52%] xl:w-[55%] relative perspective-1000 group mt-16 lg:mt-0 h-[480px]">
          
          {/* Card 1: SentinelSOC */}
          <a href="https://sentinel-soc-sigma.vercel.app/" target="_blank" rel="noreferrer" 
             className={`block absolute inset-0 w-full rounded-xl border border-[#222] bg-[#0a0a0a] shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02] ${
               projectIdx === 0 
                 ? 'opacity-100 translate-y-0 translate-x-0 rotate-0 z-20 hover:border-lime/30 hover:shadow-[0_20px_60px_-15px_rgba(132,204,22,0.1)]' 
                 : 'opacity-40 translate-y-8 translate-x-8 rotate-3 z-10 pointer-events-none'
             }`}>
            
            <div className="absolute -top-3 -left-3 z-30">
               <div className="text-[10px] font-bold uppercase tracking-widest text-black bg-lime px-3 py-1.5 rounded-sm shadow-lg">Featured Project</div>
            </div>

            <div className="relative w-full h-full overflow-hidden rounded-xl">
              {/* Browser Header */}
              <div className="flex items-center px-4 py-3 border-b border-[#222] bg-[#111]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-md bg-[#1a1a1a] px-4 py-1 text-[10px] text-[#888] border border-[#222]">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  sentinelsoc.example.com
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex h-[430px] bg-[#050505] text-[#eee] font-sans overflow-hidden">
                {/* Sidebar */}
                <div className="w-[25%] hidden sm:flex border-r border-[#1a1a1a] p-5 flex-col gap-8">
                  <div className="flex items-center gap-2 text-lime font-bold text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    SentinelSOC
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-[9px] font-bold text-[#555] tracking-widest mb-3">OVERVIEW</div>
                      <div className="flex items-center gap-2 bg-[#111] border border-[#222] rounded px-2.5 py-2 text-xs text-lime">
                         <span className="w-3 h-3 rounded-full border border-lime/50 flex items-center justify-center"><div className="w-1 h-1 bg-lime rounded-full"></div></span>
                         Dashboard
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-[#555] tracking-widest mb-3">MONITOR</div>
                      <div className="flex flex-col gap-3 pl-1.5">
                        <div className="text-xs text-[#888] flex items-center gap-2.5"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> Events</div>
                        <div className="text-xs text-[#888] flex items-center gap-2.5"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> Alerts</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 p-6 flex flex-col gap-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] text-[#666] mb-1.5">
                        Overview / <span className="text-[#ccc]">Dashboard</span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Security Command Center</h3>
                      <p className="text-xs text-[#888] mt-1">Real-time visibility across your connected applications.</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#888] bg-[#111] border border-[#222] px-2.5 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 bg-lime rounded-full animate-pulse shadow-[0_0_8px_var(--color-lime)]"></span> OPERATIONAL
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-[#111] border border-[#222] rounded p-3 relative overflow-hidden">
                      <div className="text-[9px] text-[#888] uppercase tracking-wider mb-2">Security Events</div>
                      <div className="flex justify-between items-end">
                        <div className="text-2xl font-bold text-lime">128.4K</div>
                        <div className="text-[10px] bg-[#1a1a1a] text-lime px-1.5 py-0.5 rounded">+12%</div>
                      </div>
                    </div>
                    <div className="bg-[#111] border border-[#222] rounded p-3 relative overflow-hidden">
                      <div className="text-[9px] text-[#888] uppercase tracking-wider mb-2">Active Alerts</div>
                      <div className="flex justify-between items-end">
                        <div className="text-2xl font-bold text-[#eab308]">24</div>
                        <div className="text-[10px] bg-[#1a1a1a] text-[#888] px-1.5 py-0.5 rounded">-4</div>
                      </div>
                    </div>
                    <div className="bg-[#111] border border-[#222] rounded p-3 relative overflow-hidden">
                      <div className="text-[9px] text-[#888] uppercase tracking-wider mb-2">Open Incidents</div>
                      <div className="flex justify-between items-end">
                        <div className="text-2xl font-bold text-red-500">3</div>
                        <div className="text-[10px] bg-[#1a1a1a] text-[#888] px-1.5 py-0.5 rounded">+1</div>
                      </div>
                    </div>
                    <div className="bg-[#111] border border-[#222] rounded p-3 relative overflow-hidden">
                      <div className="text-[9px] text-[#888] uppercase tracking-wider mb-2">Avg Risk Score</div>
                      <div className="flex justify-between items-end">
                        <div className="text-2xl font-bold text-lime">42</div>
                        <div className="text-[10px] bg-[#1a1a1a] text-[#888] px-1.5 py-0.5 rounded">-5</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 flex-1 min-h-0">
                    {/* Chart */}
                    <div className="flex-[3] bg-[#111] border border-[#222] rounded p-4 flex flex-col relative overflow-hidden">
                       <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-lime/5 to-transparent pointer-events-none"></div>
                       <div className="text-[10px] text-[#888] uppercase tracking-wider mb-4">Event Volume (24h)</div>
                       <div className="flex-1 flex items-end gap-[3px] pt-2">
                         {[40,60,45,30,80,90,70,50,40,65,75,85,95,60,50,40,70,80,60,40,50,65,75,90,60,45,30,80,90,70].map((h, i) => (
                           <div key={i} className="flex-1 bg-lime/70 rounded-t-[1px]" style={{height: `${h}%`}}></div>
                         ))}
                       </div>
                    </div>
                    {/* Incidents */}
                    <div className="hidden sm:flex flex-[2] bg-[#111] border border-[#222] rounded p-4 flex-col">
                       <div className="text-[10px] text-[#888] uppercase tracking-wider mb-4">Active Incidents</div>
                       <div className="flex flex-col gap-2.5 flex-1 overflow-hidden">
                         <div className="border border-[#222] bg-[#0a0a0a] p-2.5 rounded">
                           <div className="flex justify-between items-center mb-1.5">
                             <div className="text-[10px] text-[#666] font-mono">INC-042</div>
                             <div className="text-[10px] text-[#666]">12m ago</div>
                           </div>
                           <div className="text-xs text-[#ddd]">Brute Force Activity</div>
                         </div>
                         <div className="border border-[#222] bg-[#0a0a0a] p-2.5 rounded">
                           <div className="flex justify-between items-center mb-1.5">
                             <div className="text-[10px] text-[#666] font-mono">INC-041</div>
                             <div className="text-[10px] text-[#666]">1h ago</div>
                           </div>
                           <div className="text-xs text-[#ddd]">Multiple Failed Logins</div>
                         </div>
                       </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Hover overlay link */}
              <div className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center pointer-events-none ${projectIdx === 0 ? 'group-hover:opacity-100' : ''}`}>
                 <div className={`translate-y-4 transition-transform duration-300 flex flex-col items-center ${projectIdx === 0 ? 'group-hover:translate-y-0' : ''}`}>
                   <div className="text-2xl font-display font-bold text-white mb-1">SentinelSOC</div>
                   <div className="text-sm font-medium text-[#aaa] mb-5">Security Operations Center</div>
                   <div className="bg-lime text-black px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_var(--color-lime)]">
                     View project <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                   </div>
                 </div>
              </div>
            </div>
          </a>

          {/* Card 2: Manit Marketplace */}
          <a href="https://manit-marketplace.vercel.app/" target="_blank" rel="noreferrer" 
             className={`block absolute inset-0 w-full rounded-xl border border-[#222] bg-[#0a0a0a] shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02] ${
               projectIdx === 1 
                 ? 'opacity-100 translate-y-0 translate-x-0 rotate-0 z-20 hover:border-sky-500/30 hover:shadow-[0_20px_60px_-15px_rgba(14,165,233,0.1)]' 
                 : 'opacity-40 translate-y-8 translate-x-8 rotate-3 z-10 pointer-events-none'
             }`}>
            
            <div className="absolute -top-3 -left-3 z-30">
               <div className="text-[10px] font-bold uppercase tracking-widest text-white bg-sky-500 px-3 py-1.5 rounded-sm shadow-lg">Featured Project</div>
            </div>

            <div className="relative w-full h-full overflow-hidden rounded-xl">
              {/* Browser Header */}
              <div className="flex items-center px-4 py-3 border-b border-[#222] bg-[#111]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-md bg-[#1a1a1a] px-4 py-1 text-[10px] text-[#888] border border-[#222]">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  manit-marketplace.vercel.app
                </div>
              </div>

              {/* Content */}
              <div className="flex h-[430px] bg-[#050505] overflow-hidden relative">
                 <img src={marketplace} className="w-full h-full object-cover object-left-top opacity-90" alt="Manit Marketplace" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
              </div>
              
              {/* Hover overlay link */}
               <div className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center pointer-events-none ${projectIdx === 1 ? 'group-hover:opacity-100' : ''}`}>
                 <div className={`translate-y-4 transition-transform duration-300 flex flex-col items-center ${projectIdx === 1 ? 'group-hover:translate-y-0' : ''}`}>
                   <div className="text-2xl font-display font-bold text-white mb-1">Manit Marketplace</div>
                   <div className="text-sm font-medium text-[#aaa] mb-5">Campus Buy & Sell Platform</div>
                   <div className="bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(14,165,233,0.5)]">
                     View project <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                   </div>
                 </div>
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

function Marquee() {
  const row = [...STACK_MARQUEE, ...STACK_MARQUEE];
  return (
    <div className="overflow-hidden border-b-2 border-ink bg-coral py-4">
      <div className="marquee-track font-display text-2xl font-extrabold uppercase text-cream md:text-3xl">
        {[0, 1].map((half) => (
          <span key={half} className="flex shrink-0">
            {row.map((tech, i) => (
              <span key={`${half}-${i}`} className="whitespace-nowrap px-6">
                {tech} <span className="text-lime">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y-2 border-ink bg-ink text-cream dark:bg-background dark:text-foreground dark:border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-cream bg-lime px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-accent shadow-[3px_3px_0_var(--color-coral)] dark:border-background">
            Accenture India · Analyst Intern
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Engineering solutions with Gen AI &amp; Agentic AI.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/75 dark:text-foreground/75">
            I interned at Accenture focusing on software development and building Agentic AI solutions. I also led the frontend for the ICGAMS-2K25 national MANIT conference, improving accessibility and responsiveness. I care about building performant UIs that feel alive.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {JOURNEY.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border-2 p-6 ${
                item.type === "experience"
                  ? "border-coral bg-coral/10"
                  : "border-cream/25 bg-cream/5 dark:border-border dark:bg-muted/30"
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-lime">
                {item.period}
              </div>
              <h3 className="mt-2 font-display text-lg font-extrabold leading-snug">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-cream/70 dark:text-foreground/70">{item.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <h2 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
        The <span className="text-coral">stack.</span>
      </h2>
      <div className="mt-12 space-y-8">
        {SKILL_GROUPS.map((group, gi) => (
          <div key={group.label} className="flex flex-wrap items-center gap-3">
            <span
              className={`mr-2 shrink-0 whitespace-nowrap font-display text-sm font-extrabold uppercase tracking-widest ${
                gi % 2 === 0 ? "text-grape" : "text-coral"
              }`}
            >
              {group.label}
            </span>
            {group.items.map((skill) => (
              <span
                key={skill}
                className="rounded-full border-2 border-ink bg-card px-4 py-2 text-sm font-bold shadow-[3px_3px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-ink)]"
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1 w-full rounded-[2rem] border-2 border-ink bg-sun p-8 text-center shadow-[8px_8px_0_var(--color-ink)] dark:border-border">
          <div className="font-display text-6xl font-extrabold text-on-accent">
            600+
          </div>
          <div className="mt-2 text-sm font-bold uppercase tracking-widest text-on-accent/80">
            LeetCode solved
          </div>
        </div>
        <div className="flex-1 w-full rounded-[2rem] border-2 border-ink bg-coral p-8 text-center shadow-[8px_8px_0_var(--color-ink)] dark:border-border">
          <div className="font-display text-6xl font-extrabold text-cream dark:text-foreground">
            Top 20%
          </div>
          <div className="mt-2 text-sm font-bold uppercase tracking-widest text-cream/80 dark:text-foreground/80">
            Globally
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28 text-center"
    >
      <h2 className="font-display text-4xl sm:text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
        Let&apos;s build
        <br />
        something <span className="text-coral">loud.</span>
      </h2>
      <a
        href="mailto:ayush.ayush552@gmail.com"
        className={`mt-10 inline-flex max-w-full items-center justify-center rounded-full border-2 border-ink bg-secondary px-6 md:px-10 py-4 md:py-5 text-base md:text-lg lg:text-xl font-bold text-secondary-foreground shadow-[8px_8px_0_var(--color-ink)] transition hover:-translate-y-1 hover:shadow-[11px_11px_0_var(--color-ink)]`}
      >
        ayush.ayush552@gmail.com
      </a>
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold">
        <a
          href="tel:+919007353066"
          className="rounded-full border-2 border-ink bg-card px-5 py-2 transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)]"
        >
          +91 9007353066
        </a>
        <a
          href="https://www.linkedin.com/in/ayush-gupta-b58217320/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border-2 border-ink bg-card px-5 py-2 transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)]"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/ayusome-git"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border-2 border-ink bg-card px-5 py-2 transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)]"
        >
          GitHub ↗
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-ink bg-card px-5 py-2 transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)]"
        >
          Resume ↗
        </a>
      </div>
    </section>
  );
}
