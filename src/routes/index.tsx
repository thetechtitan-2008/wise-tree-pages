import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent } from "react";
import logoAsset from "@/assets/logo.png.asset.json";
import heroTree from "@/assets/hero-tree.jpg";
import aboutHands from "@/assets/about-hands.jpg";
import roots from "@/assets/roots.jpg";
import { useReveal, useScrollProgress } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mind Health Solutions" },
      {
        name: "description",
        content:
          "A sanctuary for the mind. Confidential counselling & therapy with Abhinjana R Ajay — healing minds, transforming lives. Online & offline sessions from Kerala, India.",
      },
    ],
  }),
});

const INSTAGRAM_URL =
  "https://www.instagram.com/abhinjana.r.ajay?igsh=MWQ2bzlpN2QzdXo4cA%3D%3D&utm_source=qr";
const INSTAGRAM_USERNAME = "abhinjana.r.ajay";

function openInstagram(e: MouseEvent<HTMLAnchorElement>) {
  if (typeof window === "undefined") return;
  const ua = window.navigator.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);
  if (!isMobile) return; // desktop → open web in new tab (default)
  e.preventDefault();
  const deepLink = `instagram://user?username=${INSTAGRAM_USERNAME}`;
  const fallback = window.setTimeout(() => {
    window.location.href = INSTAGRAM_URL;
  }, 800);
  const onHide = () => {
    window.clearTimeout(fallback);
    document.removeEventListener("visibilitychange", onHide);
  };
  document.addEventListener("visibilitychange", onHide);
  window.location.href = deepLink;
}

const services = [
  {
    title: "Mental Health Assessment",
    desc: "A gentle, structured evaluation to understand where you are and what you need — a compass for your inner world.",
  },
  {
    title: "Counselling & Therapy",
    desc: "Confidential one-to-one sessions rooted in empathy, evidence, and quiet courage.",
  },
  {
    title: "Stress & Anxiety Management",
    desc: "Practical, personalised techniques to soften overwhelm and reclaim steadiness in daily life.",
  },
  {
    title: "Life Coaching & Guidance",
    desc: "Clarity for crossroads — direction, purpose, and momentum for the life you want to build.",
  },
];

const specialties = [
  "Anxiety & Stress",
  "Depression Support",
  "Academic Pressure",
  "Self-Esteem & Confidence",
  "Relationship Counselling",
  "Anger Management",
  "Sleep & Overthinking",
  "Life Transitions",
];

const journey = [
  {
    step: "I",
    title: "Reach Out",
    desc: "Send a message via WhatsApp, email or Instagram. Every message is met with warmth and complete confidentiality.",
  },
  {
    step: "II",
    title: "Discovery Call",
    desc: "A gentle 15-minute conversation to understand your world and see if we are a good fit for the path ahead.",
  },
  {
    step: "III",
    title: "Your First Session",
    desc: "Online or in-person — a safe, unhurried space to begin. No labels, no judgement, only understanding.",
  },
  {
    step: "IV",
    title: "Grow, Together",
    desc: "Personalised sessions at your pace. Tools, insight, and steady support — for the life you deserve.",
  },
];

const testimonials = [
  {
    quote:
      "I walked in carrying years of noise. I left feeling heard for the very first time. Abhinjana's presence is medicine.",
    author: "— Client, Kochi",
  },
  {
    quote:
      "She held space with such grace. What I discovered about myself changed the way I love, work and live.",
    author: "— Client, Bengaluru",
  },
  {
    quote:
      "Warm, wise and deeply grounded. The kind of counsellor who makes healing feel less lonely.",
    author: "— Client, Trivandrum",
  },
];

const faqs = [
  {
    q: "Is everything I share truly confidential?",
    a: "Absolutely. What is spoken in session remains in session. Confidentiality is the foundation of every therapeutic relationship.",
  },
  {
    q: "How long is a typical session?",
    a: "Sessions are 50–60 minutes. The first session is a gentle discovery — no pressure, no commitments.",
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes. Sessions are available online via secure video call, or in-person in Kerala — whichever feels safer for you.",
  },
  {
    q: "How do I know if I need counselling?",
    a: "If something inside you feels unheard, heavy or unclear — that is enough. You do not need a crisis to deserve support.",
  },
];

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 md:w-24 divider-gold" />
      <svg width="14" height="14" viewBox="0 0 24 24" className="text-gold shrink-0" aria-hidden>
        <path fill="currentColor" d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
      </svg>
      <span className="h-px w-16 md:w-24 divider-gold" />
    </div>
  );
}

function IntroOverlay() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1900);
    return () => clearTimeout(t);
  }, []);
  if (gone) return null;
  return (
    <div className="intro-overlay" aria-hidden>
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <img src={logoAsset.url} alt="" className="intro-mark h-24 w-24 sm:h-32 sm:w-32 object-contain drop-shadow-[0_10px_40px_rgba(212,175,80,0.6)]" />
        <div className="intro-line h-px w-40 sm:w-64 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p
          className="intro-text font-display text-gold text-sm sm:text-base"
          style={{ letterSpacing: "0.4em", fontFamily: 'var(--font-cinzel)' }}
        >
          MIND HEALTH SOLUTIONS
        </p>
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("mhs-theme")) as
      | "dark"
      | "light"
      | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("mhs-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <IntroOverlay />
      <div id="scroll-progress" className="scroll-progress" />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/90 border-b border-border/40">
        <nav className="max-w-7xl mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-6 py-3.5 sm:py-4">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img src={logoAsset.url} alt="Mind Health Solutions" className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 object-contain" />
            <span
              className="truncate text-[10px] sm:text-xs text-gold"
              style={{ fontFamily: 'var(--font-cinzel)', letterSpacing: '0.28em' }}
            >
              MIND HEALTH SOLUTIONS
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            <a href="#about" className="nav-link hover:text-gold-soft transition-colors">About</a>
            <a href="#journey" className="nav-link hover:text-gold-soft transition-colors">Journey</a>
            <a href="#services" className="nav-link hover:text-gold-soft transition-colors">Services</a>
            <a href="#philosophy" className="nav-link hover:text-gold-soft transition-colors">Philosophy</a>
            <a href="#contact" className="nav-link hover:text-gold-soft transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
              title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            >
              <span aria-hidden className="text-sm">{theme === "dark" ? "☀" : "☾"}</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-sm border border-gold/60 text-gold text-[10px] tracking-[0.28em] uppercase hover:bg-gold-gradient hover:text-primary-foreground transition-all duration-500"
            >
              Book Session
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gold/40 text-gold"
            >
              <span aria-hidden className="text-sm">{theme === "dark" ? "☀" : "☾"}</span>
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex flex-col justify-center items-end gap-1.5 h-9 w-9 text-gold"
            >
              <span className={`h-px w-6 bg-gold transition-transform ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-gold transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px w-6 bg-gold transition-transform ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} border-t border-gold/20 bg-background/95`}
        >
          <div className="flex flex-col px-6 py-6 gap-5 text-sm tracking-[0.25em] uppercase text-muted-foreground">
            {[
              ["About", "#about"],
              ["Journey", "#journey"],
              ["Services", "#services"],
              ["Philosophy", "#philosophy"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors">
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-gold-gradient text-primary-foreground text-[11px] tracking-[0.3em] uppercase"
            >
              Book a Session
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroTree}
            alt="Ancient golden tree providing shelter — a metaphor for healing and protection"
            width={1600}
            height={1200}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7">
            <div className="reveal flex items-center gap-3 mb-6 sm:mb-8">
              <span className="h-px w-10 sm:w-12 bg-gold" />
              <span className="text-gold tracking-[0.35em] text-[10px] sm:text-xs uppercase">A Sanctuary For The Mind</span>
            </div>
            <h1 className="hero-title font-display text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02]">
              <span className="reveal reveal-delay-1 block text-foreground/95">Healing Minds.</span>
              <span className="reveal reveal-delay-2 block italic font-serif text-sheen">Transforming</span>
              <span className="reveal reveal-delay-3 block text-foreground/95">Lives.</span>
            </h1>
            <p className="reveal reveal-delay-4 mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
              Under the shade of a great tree, every weary heart finds rest. Step into a space of empathy,
              discretion and quiet strength — where your story is honoured and your growth is nurtured.
            </p>
            <div className="reveal reveal-delay-5 mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gold-gradient text-primary-foreground text-[11px] tracking-[0.3em] uppercase font-medium shadow-gold hover:opacity-95 transition-all"
              >
                Begin Your Journey
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-gold/40 text-gold-soft text-[11px] tracking-[0.3em] uppercase hover:border-gold transition-colors"
              >
                Meet Your Counsellor
              </a>
            </div>

            <div className="reveal mt-10 sm:mt-14 flex flex-wrap gap-x-6 gap-y-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted-foreground">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> 100% Confidential</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Compassionate Care</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Online & Offline</span>
            </div>
          </div>

          <div className="md:col-span-5 hidden md:flex justify-center animate-float-slow">
            <div className="relative reveal reveal-scale">
              <div className="absolute -inset-6 rounded-full bg-gold/10 opacity-70" />
              <img
                src={logoAsset.url}
                alt="Mind Health Solutions crest"
                className="relative h-[380px] w-[380px] lg:h-[420px] lg:w-[420px] object-contain drop-shadow-[0_20px_60px_rgba(212,175,80,0.35)]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center z-10">
          <span className="text-[10px] tracking-[0.5em] uppercase text-gold/70 animate-float-slow">Scroll ▾</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 sm:py-32 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="reveal reveal-left relative">
            <div className="absolute -inset-3 sm:-inset-4 border border-gold/30" />
            <img
              src={aboutHands}
              alt="Hands nurturing a young sapling — symbolising care and growth"
              width={1200}
              height={1400}
              loading="lazy"
              className="relative w-full h-[420px] sm:h-[560px] object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-8 bg-onyx border border-gold/40 px-5 py-4 sm:px-8 sm:py-6 max-w-[220px] sm:max-w-[240px]">
              <p className="font-display text-gold text-3xl sm:text-4xl">7+</p>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2">Years of listening, guiding & healing</p>
            </div>
          </div>

          <div className="reveal reveal-right">
            <span className="text-gold tracking-[0.4em] text-[10px] sm:text-xs uppercase">The Counsellor</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              Abhinjana <span className="italic font-serif text-gold">R Ajay</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">Certified Psychologist</p>
            <Ornament className="my-6 sm:my-8 justify-start" />
            <p className="text-base sm:text-lg leading-relaxed text-foreground/85 font-light">
              I believe every mind carries a quiet forest within — layered, luminous and worth tending.
              My practice is built on empathy, discretion and evidence-based care, offering you a
              sanctuary where feelings are met without judgement and growth unfolds at your own pace.
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground font-light">
              From anxiety and relationships to purpose and self-worth, I walk beside you — a steady
              presence while you rediscover your own light.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-6 text-sm">
              {["I Listen.", "I Support.", "I Empower.", "I Care."].map((v, i) => (
                <div key={v} className={`reveal reveal-delay-${i + 1} border-l-2 border-gold pl-4`}>
                  <p className="font-display text-xl sm:text-2xl text-gold">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="relative py-24 sm:py-32 px-5 sm:px-6 border-y border-gold/10 bg-onyx/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-20 reveal">
            <span className="text-gold tracking-[0.4em] text-[10px] sm:text-xs uppercase">Your Path</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">A Journey, Gently Held</h2>
            <Ornament className="mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {journey.map((j, i) => (
              <div
                key={j.title}
                className={`reveal reveal-delay-${i + 1} lux-card relative p-7 sm:p-8 border border-gold/25 bg-card/50`}
              >
                <p className="font-display text-gold text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-cinzel)' }}>{j.step}</p>
                <div className="w-10 h-px bg-gold my-4" />
                <h3 className="font-display text-xl sm:text-2xl">{j.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed font-light">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="relative py-24 sm:py-32 px-5 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={roots} alt="" width={1600} height={900} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="reveal text-gold tracking-[0.4em] text-[10px] sm:text-xs uppercase">Our Philosophy</span>
          <Ornament className="my-6 reveal reveal-delay-1" />
          <h2 className="reveal reveal-delay-2 font-display text-3xl sm:text-4xl md:text-6xl leading-tight">
            <span className="italic text-gold">“</span>Like a tree, the mind grows
            <span className="block">strong not by escaping the storm,</span>
            <span className="block">but by rooting deeply through it.<span className="italic text-gold">”</span></span>
          </h2>
          <p className="reveal reveal-delay-3 mt-8 sm:mt-10 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Roots you cannot see hold the tree that shelters everyone beneath it. Together we tend
            those roots — the beliefs, memories and patterns that quietly shape your life — so your
            canopy can grow wide enough to shade the ones you love.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 sm:py-32 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-20 reveal">
            <span className="text-gold tracking-[0.4em] text-[10px] sm:text-xs uppercase">What I Offer</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">Services & Sanctuary</h2>
            <Ornament className="mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${(i % 4) + 1} lux-card group relative bg-card/60 border border-border p-7 sm:p-10 hover:border-gold/60`}
              >
                <div className="absolute top-0 left-0 right-0 h-px divider-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-display text-gold text-xs sm:text-sm tracking-[0.4em]" style={{ fontFamily: 'var(--font-cinzel)' }}>0{i + 1}</p>
                <h3 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl text-foreground">{s.title}</h3>
                <div className="w-12 h-px bg-gold my-4 sm:my-5" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Specialties */}
          <div className="mt-20 sm:mt-24">
            <div className="text-center mb-10 sm:mb-12 reveal">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl">Areas of Specialisation</h3>
              <Ornament className="mt-6" />
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {specialties.map((sp, i) => (
                <span
                  key={sp}
                  className={`reveal reveal-delay-${(i % 5) + 1} px-4 sm:px-5 py-2.5 sm:py-3 border border-gold/30 text-xs sm:text-sm tracking-wider text-foreground/85 hover:bg-gold/10 hover:border-gold transition-all`}
                >
                  {sp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 sm:py-32 px-5 sm:px-6 bg-onyx/60 border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-20 reveal">
            <span className="text-gold tracking-[0.4em] text-[10px] sm:text-xs uppercase">Kind Words</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">Voices of Healing</h2>
            <Ornament className="mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className={`reveal reveal-delay-${i + 1} lux-card relative p-7 sm:p-8 border border-gold/25 bg-background/50`}
              >
                <span className="absolute -top-4 left-6 text-gold font-serif text-6xl leading-none">“</span>
                <blockquote className="font-serif italic text-base sm:text-lg text-foreground/90 leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold/80">
                  {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 sm:py-32 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <span className="text-gold tracking-[0.4em] text-[10px] sm:text-xs uppercase">Questions</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">Gentle Answers</h2>
            <Ornament className="mt-6" />
          </div>
          <div className="divide-y divide-gold/15 border-y border-gold/15">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="reveal">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left py-5 sm:py-6"
                  >
                    <span className="font-display text-lg sm:text-2xl text-foreground/95">{f.q}</span>
                    <span className={`shrink-0 text-gold text-2xl transition-transform duration-500 ${open ? "rotate-45" : ""}`}>＋</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${open ? "max-h-40 pb-5 sm:pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20 sm:py-24 px-5 sm:px-6 border-y border-gold/20 bg-onyx/60">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-soft leading-relaxed">
            “You don't have to face it alone. I'm here to listen, support and guide you
            towards a better you.”
          </p>
          <p className="mt-5 sm:mt-6 text-[10px] sm:text-xs tracking-[0.4em] uppercase text-muted-foreground">— Abhinjana R Ajay</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 sm:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <span className="text-gold tracking-[0.4em] text-[10px] sm:text-xs uppercase">Let's Connect</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
              Ready To Take <span className="italic font-serif text-gold">The First Step?</span>
            </h2>
            <Ornament className="mt-6" />
            <p className="mt-6 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-light">
              Let's talk. Let's heal. Let's grow together. Reach out through any channel below —
              your message is received with care and complete confidentiality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="https://wa.me/919778783018"
              target="_blank"
              rel="noreferrer"
              className="reveal reveal-delay-1 lux-card group border border-gold/30 p-6 sm:p-8 hover:border-gold hover:bg-gold/5 flex items-start gap-4 sm:gap-5"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground text-xl">☎</div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">Call / WhatsApp</p>
                <p className="mt-2 font-display text-xl sm:text-2xl text-gold">+91 97787 83018</p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">WhatsApp Available</p>
              </div>
            </a>

            <a
              href="mailto:abhinjanarajayy@gmail.com"
              className="reveal reveal-delay-2 lux-card group border border-gold/30 p-6 sm:p-8 hover:border-gold hover:bg-gold/5 flex items-start gap-4 sm:gap-5"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground text-xl">✉</div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">Email</p>
                <p className="mt-2 font-display text-lg sm:text-2xl text-gold break-all">abhinjanarajayy@gmail.com</p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Replies within 24 hours</p>
              </div>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              onClick={openInstagram}
              className="reveal reveal-delay-3 lux-card group border border-gold/30 p-6 sm:p-8 hover:border-gold hover:bg-gold/5 flex items-start gap-4 sm:gap-5"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground text-xl">◎</div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">Instagram</p>
                <p className="mt-2 font-display text-xl sm:text-2xl text-gold break-words">@abhinjana.r.ajay</p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Daily wellness reflections</p>
              </div>
            </a>

            <div className="reveal reveal-delay-4 lux-card border border-gold/30 p-6 sm:p-8 flex items-start gap-4 sm:gap-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground text-xl">✦</div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">Sessions</p>
                <p className="mt-2 font-display text-xl sm:text-2xl text-gold">Kerala, India</p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Online & offline — flexible for you</p>
              </div>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 text-center reveal">
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-foreground/90">
              It's okay to not be okay. But it's not okay to stay that way.
            </p>
            <p className="mt-4 text-gold tracking-[0.35em] sm:tracking-[0.4em] text-xs sm:text-sm uppercase">Choose Yourself · Choose Healing · Choose Hope</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/20 py-10 sm:py-12 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-9 w-9 shrink-0 object-contain" />
            <div>
              <p className="font-display tracking-[0.3em] text-xs text-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>MIND HEALTH SOLUTIONS</p>
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mt-1">Empowering Minds · Enriching Lives</p>
            </div>
          </div>
          <p className="text-[10px] sm:text-xs tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Mind Health Solutions · Crafted with care
          </p>
        </div>
      </footer>
    </div>
  );
}