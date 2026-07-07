import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Apple,
  Play
} from 'lucide-react';

const Footer = () => {
  const accentColor = "bg-[#8B5CF6]"; // Vibrant Electric Violet
  const accentText = "text-[#8B5CF6]";

  return (
    <footer className="relative bg-[#050505] pt-32 pb-8 px-6 sm:px-12 font-sans">
      
      {/* TOP LAYER: FLOATING CARD */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl z-10">
        <div className={`${accentColor} rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8`}>
          
          {/* Left Side Text */}
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to transform your digital presence?
            </h2>
          </div>

          {/* Right Side Subscription */}
          <div className="flex flex-col items-center lg:items-end gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-[400px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-black/20 border border-white/10 backdrop-blur-md rounded-full py-4 px-6 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-zinc-900 transition-colors flex items-center gap-2">
                Join Now <ArrowRight size={16} />
              </button>
            </div>
            
            {/* Small Social Icons */}
            <div className="flex gap-5 text-white/80">
              <Twitter size={18} className="cursor-pointer hover:text-black transition-colors" />
              <Linkedin size={18} className="cursor-pointer hover:text-black transition-colors" />
              <Instagram size={18} className="cursor-pointer hover:text-black transition-colors" />
              <Github size={18} className="cursor-pointer hover:text-black transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LAYER: MAIN FOOTER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16">
        
        {/* Column 1: Brand & Apps */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 ${accentColor} rounded-lg flex items-center justify-center`}>
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tighter">NEXUS</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-[240px]">
            Building the next generation of digital experiences with precision and futuristic design.
          </p>
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all px-4 py-2 rounded-xl w-44">
              <Apple size={24} className="text-white" />
              <div className="text-left">
                <p className="text-[10px] text-zinc-400 uppercase leading-none">Download on the</p>
                <p className="text-sm text-white font-semibold">App Store</p>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all px-4 py-2 rounded-xl w-44">
              <Play size={22} className="text-white" />
              <div className="text-left">
                <p className="text-[10px] text-zinc-400 uppercase leading-none">Get it on</p>
                <p className="text-sm text-white font-semibold">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Services</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
            <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
            <li className="hover:text-white cursor-pointer transition-colors">Mobile Applications</li>
            <li className="hover:text-white cursor-pointer transition-colors">Cloud Solutions</li>
            <li className="hover:text-white cursor-pointer transition-colors">AI Integration</li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Resources</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              Changelog <span className={`${accentColor} text-[10px] text-white px-1.5 py-0.5 rounded font-bold uppercase`}>New</span>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">Community Forum</li>
            <li className="hover:text-white cursor-pointer transition-colors">API Reference</li>
            <li className="hover:text-white cursor-pointer transition-colors">Media Kit</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Contact Us</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className={accentText} />
              <span>123 Innovation Drive, Silicon Valley, CA 94025</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className={accentText} />
              <span>+1 (555) 000-1234</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className={accentText} />
              <span>hello@nexus-ui.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs">
        <p>© 2024 NEXUS Digital Ltd. All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>
      </div>

      {/* Background Mesh Texture Effect */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
        <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] ${accentColor} opacity-10`} />
      </div>
    </footer>
  );
};

export default Footer;