import React, { useState } from 'react';
import { Terminal, Send, CheckCircle2, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });
      if (res.ok) {
        setSubscribed(true);
      }
    } catch (err) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="about" className="bg-[#050811] border-t border-white/10 pt-16 pb-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#090e1d] rounded-xl flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-black text-xl text-white tracking-tight">AXION TECHNOLOGIES</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Architecting mission-critical cloud backbones, Kubernetes microservices, DevSecOps pipelines, and high-performance software systems for growing startups and Fortune 500 enterprises.
            </p>

            <div className="pt-2 space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Global HQ: Cyber Gateway, Tech Zone 1 | Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>contact@axiontech.example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+91 98765 43210 (24/7 Operations Desk)</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <div className="font-mono text-white uppercase font-bold text-xs tracking-wider">
              Services
            </div>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cloud & DevOps Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Kubernetes (EKS/GKE/AKS)</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">DevSecOps & Zero-Trust</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Node.js Software Engineering</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Enterprise AI & Agents</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">24/7 SRE & Incident SLA</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <div className="font-mono text-white uppercase font-bold text-xs tracking-wider">
              Company & Tech
            </div>
            <ul className="space-y-2">
              <li><a href="#telemetry" className="hover:text-cyan-400 transition-colors">Live Infrastructure</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Cost Estimator</a></li>
              <li><a href="#cases" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#careers" className="hover:text-cyan-400 transition-colors">Careers (Hiring!)</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Compliance & ISO 27001</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <div className="font-mono text-white uppercase font-bold text-xs tracking-wider">
              Engineering Dispatch
            </div>
            <p className="text-[11px] text-slate-400">
              Subscribe to our weekly engineering blog covering Kubernetes optimizations, cloud cost strategies, and zero-day patches.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Axion Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Security Disclosure</a>
            <span className="text-emerald-400">SOC 2 Type II Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
