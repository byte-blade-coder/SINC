
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import './style.css';
import HeroSectionOne from './components/HeroSectionOne';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Why from './components/Why';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import FooterPremium from './components/FooterPremium';

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2
    });

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <HeroSectionOne />
      <div className="navbar-hero-container">
        <Header />
        <Hero />
      </div>
      <Clients />
      <Why />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Technologies />
      <Projects />
      <FooterPremium />
    </div>
  );
}

export default App;

