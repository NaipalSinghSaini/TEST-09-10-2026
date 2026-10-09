import React from 'react';
import { Star, ShieldCheck, Award, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Axion modernized our entire legacy stack to Kubernetes on AWS in less than 6 weeks. Our release frequency went from bi-weekly to 5 times a day with zero downtime incidents.",
      author: "Vikram Malhotra",
      role: "VP of Engineering",
      company: "Apex Global Payments",
      verified: true
    },
    {
      quote: "The DevSecOps and Terraform automation built by Axion saved us hundreds of engineering hours during our SOC 2 Type II audit. Their 24/7 SRE team is truly world-class.",
      author: "Sarah Jenkins",
      role: "Chief Technology Officer",
      company: "DataCloud Health Systems",
      verified: true
    },
    {
      quote: "Our AWS bill was out of control at $80k/month. Axion executed FinOps restructuring and smart pod auto-scaling that trimmed our monthly bill to $48k without affecting user latency.",
      author: "Rohan Sengupta",
      role: "Head of Infrastructure",
      company: "HyperCart Retail",
      verified: true
    }
  ];

  return (
    <section className="py-24 relative bg-[#090e1d]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Industry Certifications Strip */}
        <div className="mb-20 p-6 rounded-2xl glass-panel border border-white/5">
          <div className="text-center text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
            Enterprise Compliance & Industry Certifications
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center text-center">
            <div className="flex items-center justify-center gap-2 text-slate-300 font-semibold text-xs sm:text-sm">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>AWS Certified Partner</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-300 font-semibold text-xs sm:text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>ISO/IEC 27001 Certified</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-300 font-semibold text-xs sm:text-sm">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Kubernetes Service Provider</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-300 font-semibold text-xs sm:text-sm">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <span>SOC 2 Type II Compliant</span>
            </div>
          </div>
        </div>

        {/* Client Reviews */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Engineering Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/5 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-white">{t.author}</div>
                  <div className="text-xs text-slate-400">{t.role}, <span className="text-cyan-400">{t.company}</span></div>
                </div>
                {t.verified && (
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
