import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Terminal, 
  Layers, 
  Calculator, 
  ShieldCheck, 
  Briefcase, 
  Mail, 
  Menu, 
  X, 
  Activity,
  Database
} from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenInquiries, onOpenEstimator }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080d1a]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#090e1d] rounded-xl flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  AXION
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                  IT & DevOps
                </span>
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                Enterprise Cloud Systems
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#telemetry" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Live Infrastructure</span>
            </a>
            <a href="#estimator" className="hover:text-cyan-400 transition-colors">
              Cost Estimator
            </a>
            <a href="#cases" className="hover:text-cyan-400 transition-colors">
              Case Studies
            </a>
            <a href="#careers" className="hover:text-cyan-400 transition-colors">
              Careers
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About Us
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Admin / Portal Trigger */}
            <button
              onClick={onOpenInquiries}
              className="px-3.5 py-2 text-xs font-mono rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 transition-all"
              title="View Inquiries & Client Leads"
            >
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              <span>Client Leads</span>
            </button>

            {/* Book Consultation */}
            <button
              onClick={() => onOpenContact('General Consultation')}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
            >
              <span>Get Free Consultation</span>
              <span className="text-cyan-200">→</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-4 pb-6 bg-[#090e1d] border-b border-white/10 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1"
            >
              IT Services
            </a>
            <a 
              href="#telemetry" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1 flex items-center gap-2"
            >
              <Activity className="w-4 h-4 text-emerald-400" />
              Live Infrastructure
            </a>
            <a 
              href="#estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1"
            >
              Cost & Timeline Estimator
            </a>
            <a 
              href="#cases" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1"
            >
              Case Studies
            </a>
            <a 
              href="#careers" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1"
            >
              Careers
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1"
            >
              About Company
            </a>
          </nav>
          
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiries();
              }}
              className="w-full py-2.5 text-xs font-mono rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center gap-2"
            >
              <Database className="w-4 h-4 text-cyan-400" />
              <span>Admin / Client Leads</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('General Consultation');
              }}
              className="w-full py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center gap-2"
            >
              <span>Get Free Consultation</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
