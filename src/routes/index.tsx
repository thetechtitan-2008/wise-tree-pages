import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import heroTree from "@/assets/hero-tree.jpg";
import aboutHands from "@/assets/about-hands.jpg";
import roots from "@/assets/roots.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

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

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 md:w-24 divider-gold" />
      <svg width="14" height="14" viewBox="0 0 24 24" className="text-gold" aria-hidden>
        <path fill="currentColor" d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
      </svg>
      <span className="h-px w-16 md:w-24 divider-gold" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-onyx/60 border-b border-border/40">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Mind Health Solutions" className="h-10 w-10 object-contain" />
            <span className="hidden sm:block font-display tracking-[0.28em] text-xs text-gold">
              MIND HEALTH SOLUTIONS
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase text-muted-foreground">
            <a href="#about" className="hover:text-gold-soft transition-colors">About</a>
            <a href="#services" className="hover:text-gold-soft transition-colors">Services</a>
            <a href="#philosophy" className="hover:text-gold-soft transition-colors">Philosophy</a>
            <a href="#contact" className="hover:text-gold-soft transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-sm border border-gold/60 text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold-gradient hover:text-primary-foreground transition-all duration-500"
          >
            Book Session
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroTree}
            alt="Ancient golden tree providing shelter — a metaphor for healing and protection"
            width={1600}
            height={1200}
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/50 to-onyx" />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7 animate-reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold tracking-[0.4em] text-xs uppercase">A Sanctuary For The Mind</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02]">
              <span className="block text-foreground/90">Healing Minds.</span>
              <span className="block text-gold italic font-serif">Transforming</span>
              <span className="block text-foreground/90">Lives.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed font-light">
              Under the shade of a great tree, every weary heart finds rest. Step into a space of empathy,
              discretion and quiet strength — where your story is honoured and your growth is nurtured.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold-gradient text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium shadow-gold hover:opacity-95 transition-all"
              >
                Begin Your Journey
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold-soft text-xs tracking-[0.3em] uppercase hover:border-gold transition-colors"
              >
                Meet Your Counsellor
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-8 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> 100% Confidential</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Compassionate Care</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Online & Offline</span>
            </div>
          </div>

          <div className="md:col-span-5 hidden md:flex justify-center animate-float-slow">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl animate-shimmer" />
              <img
                src={logoAsset.url}
                alt="Mind Health Solutions crest"
                className="relative h-[420px] w-[420px] object-contain drop-shadow-[0_20px_60px_rgba(212,175,80,0.35)]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 inset-x-0 flex justify-center z-10">
          <span className="text-[10px] tracking-[0.5em] uppercase text-gold/70">Scroll ▾</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/30" />
            <img
              src={aboutHands}
              alt="Hands nurturing a young sapling — symbolising care and growth"
              width={1200}
              height={1400}
              loading="lazy"
              className="relative w-full h-[560px] object-cover shadow-elegant"
            />
            <div className="absolute -bottom-8 -right-8 bg-onyx border border-gold/40 px-8 py-6 max-w-[240px]">
              <p className="font-display text-gold text-4xl">7+</p>
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2">Years of listening, guiding & healing</p>
            </div>
          </div>

          <div>
            <span className="text-gold tracking-[0.4em] text-xs uppercase">The Counsellor</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-tight">
              Abhinjana <span className="italic text-gold">R Ajay</span>
            </h2>
            <p className="mt-3 text-sm tracking-[0.3em] uppercase text-muted-foreground">Certified Psychologist</p>
            <Ornament className="my-8 justify-start" />
            <p className="text-lg leading-relaxed text-foreground/85 font-light">
              I believe every mind carries a quiet forest within — layered, luminous and worth tending.
              My practice is built on empathy, discretion and evidence-based care, offering you a
              sanctuary where feelings are met without judgement and growth unfolds at your own pace.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-light">
              From anxiety and relationships to purpose and self-worth, I walk beside you — a steady
              presence while you rediscover your own light.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
              {["I Listen.", "I Support.", "I Empower.", "I Care."].map((v) => (
                <div key={v} className="border-l-2 border-gold pl-4">
                  <p className="font-display text-2xl text-gold">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / TREE METAPHOR */}
      <section id="philosophy" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={roots} alt="" width={1600} height={900} loading="lazy" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-gold tracking-[0.4em] text-xs uppercase">Our Philosophy</span>
          <Ornament className="my-6" />
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            <span className="italic text-gold">“</span>Like a tree, the mind grows
            <span className="block">strong not by escaping the storm,</span>
            <span className="block">but by rooting deeply through it.<span className="italic text-gold">”</span></span>
          </h2>
          <p className="mt-10 text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Roots you cannot see hold the tree that shelters everyone beneath it. Together we tend
            those roots — the beliefs, memories and patterns that quietly shape your life — so your
            canopy can grow wide enough to shade the ones you love.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gold tracking-[0.4em] text-xs uppercase">What I Offer</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Services & Sanctuary</h2>
            <Ornament className="mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-card/60 border border-border p-10 hover:border-gold/60 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-px divider-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-display text-gold text-sm tracking-[0.4em]">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl text-foreground">{s.title}</h3>
                <div className="w-12 h-px bg-gold my-5" />
                <p className="text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Specialties */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="font-display text-3xl md:text-4xl">Areas of Specialisation</h3>
              <Ornament className="mt-6" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {specialties.map((sp) => (
                <span
                  key={sp}
                  className="px-5 py-3 border border-gold/30 text-sm tracking-wider text-foreground/85 hover:bg-gold/10 hover:border-gold transition-all"
                >
                  {sp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 px-6 border-y border-gold/20 bg-onyx/60">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display italic text-3xl md:text-4xl text-gold-soft leading-relaxed">
            “You don't have to face it alone. I'm here to listen, support and guide you
            towards a better you.”
          </p>
          <p className="mt-6 text-xs tracking-[0.4em] uppercase text-muted-foreground">— Abhinjana R Ajay</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold tracking-[0.4em] text-xs uppercase">Let's Connect</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Ready To Take <span className="italic text-gold">The First Step?</span>
            </h2>
            <Ornament className="mt-6" />
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto font-light">
              Let's talk. Let's heal. Let's grow together. Reach out through any channel below —
              your message is received with care and complete confidentiality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://wa.me/919778783018"
              target="_blank"
              rel="noreferrer"
              className="group border border-gold/30 p-8 hover:border-gold hover:bg-gold/5 transition-all flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground text-xl">☎</div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Call / WhatsApp</p>
                <p className="mt-2 font-display text-2xl text-gold">+91 97787 83018</p>
                <p className="mt-1 text-sm text-muted-foreground">WhatsApp Available</p>
              </div>
            </a>

            <a
              href="mailto:abhinjanarajayy@gmail.com"
              className="group border border-gold/30 p-8 hover:border-gold hover:bg-gold/5 transition-all flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground text-xl">✉</div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Email</p>
                <p className="mt-2 font-display text-2xl text-gold break-all">abhinjanarajayy@gmail.com</p>
                <p className="mt-1 text-sm text-muted-foreground">Replies within 24 hours</p>
              </div>
            </a>

            <a
              href="https://instagram.com/abhinjana.r.ajay"
              target="_blank"
              rel="noreferrer"
              className="group border border-gold/30 p-8 hover:border-gold hover:bg-gold/5 transition-all flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground text-xl">◎</div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Instagram</p>
                <p className="mt-2 font-display text-2xl text-gold">@abhinjana.r.ajay</p>
                <p className="mt-1 text-sm text-muted-foreground">Daily wellness reflections</p>
              </div>
            </a>

            <div className="border border-gold/30 p-8 flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground text-xl">✦</div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Sessions</p>
                <p className="mt-2 font-display text-2xl text-gold">Kerala, India</p>
                <p className="mt-1 text-sm text-muted-foreground">Online & offline — flexible for you</p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="font-display italic text-2xl md:text-3xl text-foreground/90">
              It's okay to not be okay. But it's not okay to stay that way.
            </p>
            <p className="mt-4 text-gold tracking-[0.4em] text-sm uppercase">Choose Yourself · Choose Healing · Choose Hope</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-9 w-9 object-contain" />
            <div>
              <p className="font-display tracking-[0.3em] text-xs text-gold">MIND HEALTH SOLUTIONS</p>
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mt-1">Empowering Minds · Enriching Lives</p>
            </div>
          </div>
          <p className="text-xs tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Abhinjana R Ajay · All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
