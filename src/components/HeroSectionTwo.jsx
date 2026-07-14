import React, { useState, useEffect } from 'react';
import { motion, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import { useMouseParallax } from './MouseParallax';
import GridOverlay from './GridOverlay';
import NoiseOverlay from './NoiseOverlay';

const HeroSectionTwo = () => {
  const { mouseX, mouseY } = useMouseParallax();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Parallax mappings
  const glowX = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [-40, 40]);
  
  // Center content moves opposite/slightly slower for depth
  const contentX = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Overview', 'Systems', 'Swarm AI', 'Security', 'Telemetry', 'Deployments'];

  const customTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

  return (
    <div className="relative w-full bg-[#050505] p-3 md:p-4 lg:p-5 overflow-hidden">
      {/* Central Floating Main Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={customTransition}
        className="relative min-h-[calc(100vh-24px)] lg:min-h-[calc(100vh-40px)] w-full rounded-[24px] lg:rounded-[32px] border border-white/[0.08] bg-[#050505] overflow-hidden flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.45),_0_30px_80px_rgba(0,0,0,0.7)]"
      >
        {/* Layer 1: Looping Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-screen scale-105"
            src="/assets/hero-bg.mp4"
          />
          {/* Cyber Vignette Mask */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_95%)] z-[1]" />
        </div>

        {/* Layer 2: Ambient Drifting Light Glows */}
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute inset-0 pointer-events-none z-[1] overflow-hidden"
        >
          {/* Top-Left Glow (Violet/Purple) */}
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[130px] bg-gradient-to-br from-purple-500/15 via-purple-600/5 to-transparent pointer-events-none" />
          
          {/* Bottom-Right Glow (Emerald/Mint) */}
          <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[130px] bg-gradient-to-tl from-emerald-500/15 via-emerald-600/5 to-transparent pointer-events-none" />
        </motion.div>

        {/* Layer 3: Cybermatic Grid & Noise Overlays */}
        <GridOverlay />
        <NoiseOverlay />

        {/* Floating Glassmorphism Navbar 2 */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...customTransition, delay: 0.15 }}
          className={`absolute top-6 z-40 w-[85%] max-w-[1500px] h-[76px] rounded-[38px] border border-white/[0.06] flex items-center justify-between px-6 md:px-8 transition-all duration-500 ${
            scrolled
              ? 'bg-black/85 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.65),_inset_0_1px_1px_rgba(255,255,255,0.1),_0_0_20px_rgba(16,185,129,0.05)] border-emerald-500/20'
              : 'bg-black/45 backdrop-blur-md'
          }`}
        >
          {/* Logo on the left */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-white font-bold tracking-[0.2em] text-sm uppercase">SINC AUV</span>
          </div>

          {/* Navigation Links - Centered, Neon indicator */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2.5 text-xs font-semibold text-white/60 hover:text-white tracking-widest uppercase transition-colors duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
              >
                <span className="relative z-10">{item}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-hover-2"
                    className="absolute inset-0 bg-emerald-500/5 rounded-full border border-emerald-500/10 z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {activeIndex === index && (
                  <motion.div
                    layoutId="nav-active-2"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)] z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Far Right CTA Button - Launch App style with neon border */}
          <div className="hidden lg:flex items-center">
            <button className="group relative overflow-hidden h-9 px-5 rounded-full bg-black border border-emerald-500/40 text-emerald-400 font-semibold text-xs uppercase tracking-wider flex items-center justify-center transition-all duration-300 hover:border-emerald-400 hover:text-white hover:shadow-[0_0_15px_rgba(52,211,153,0.2)] active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                Launch App
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent transition-transform duration-700 ease-out skew-x-12" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white/80 hover:text-emerald-400 p-2 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Responsive Mobile Drawer Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[88px] left-0 right-0 bg-black/95 backdrop-blur-2xl rounded-[24px] border border-white/[0.08] p-6 flex flex-col gap-4 lg:hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/60 hover:text-emerald-400 text-sm tracking-wider uppercase font-semibold py-2.5 border-b border-white/[0.05] transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full mt-2 h-11 rounded-full bg-emerald-500 text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  Launch App
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Center Content Typography & Subtitle (Centered Layout) */}
        <motion.div
          style={{ x: contentX, y: contentY }}
          className="absolute z-30 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...customTransition, delay: 0.1 }}
            className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] uppercase font-bold tracking-[0.25em] flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            System Status: Operational
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...customTransition, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] tracking-tight max-w-3xl"
            style={{
              textShadow: '0 0 45px rgba(16, 185, 129, 0.12)',
            }}
          >
            Next-Gen Autonomous Systems For Deep Ocean Exploration.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...customTransition, delay: 0.35 }}
            className="text-white/60 text-sm md:text-base lg:text-lg max-w-2xl font-light leading-relaxed"
          >
            Deploying intelligent underwater assets with AI-driven sensing, subsea networking, and real-time swarm intelligence to unlock the ocean depths.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...customTransition, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <button className="h-11 px-8 rounded-full bg-emerald-500 text-black font-semibold text-sm flex items-center justify-center transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95">
              Explore Systems
            </button>
            <button className="h-11 px-8 rounded-full border border-white/10 hover:border-white/20 text-white font-semibold text-sm flex items-center justify-center transition-all duration-300 bg-white/5 backdrop-blur-md active:scale-95">
              Watch Swarm Simulation
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...customTransition, delay: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-medium">Explore</span>
          <div className="flex flex-col items-center gap-0.5 animate-bounce">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <div className="w-1 h-1 rounded-full bg-emerald-400/60" />
            <div className="w-0.5 h-0.5 rounded-full bg-emerald-400/30" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSectionTwo;
