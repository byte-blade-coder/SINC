
import React from 'react';
import './style.css';
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
  return (
    <div className="app">
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

