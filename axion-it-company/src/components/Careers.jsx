import React from 'react';
import { Briefcase, MapPin, DollarSign, ArrowUpRight } from 'lucide-react';

export default function Careers({ onApplyRole }) {
  const openings = [
    {
      title: 'Senior DevOps & Cloud Architect',
      type: 'Full-Time (Remote / Hybrid)',
      location: 'Bengaluru / Remote',
      experience: '5+ Years',
      tech: ['Kubernetes', 'Terraform', 'AWS/GCP', 'ArgoCD'],
      description: 'Lead multi-cloud enterprise migrations, architect Kubernetes clusters, and automate high-throughput CI/CD workflows.'
    },
    {
      title: 'Full-Stack Node.js & React Engineer',
      type: 'Full-Time (Remote)',
      location: 'Remote (Global)',
      experience: '3+ Years',
      tech: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis'],
      description: 'Build robust enterprise portals, high-speed microservices, and internal client developer platforms.'
    },
    {
      title: 'Site Reliability Engineer (24/7 NOC)',
      type: 'Full-Time (Rotational Shifts)',
      location: 'Bengaluru / Pune',
      experience: '2+ Years',
      tech: ['Prometheus', 'Grafana', 'Linux', 'Docker', 'Bash/Python'],
      description: 'Maintain 99.99% system availability, optimize telemetry alerts, and lead root cause investigation during incidents.'
    },
    {
      title: 'DevSecOps & Cybersecurity Specialist',
      type: 'Full-Time (Remote)',
      location: 'Remote',
      experience: '4+ Years',
      tech: ['Trivy', 'Vault', 'Zero-Trust', 'SOC 2', 'Pen Testing'],
      description: 'Hardening cloud perimeters, container vulnerability analysis, secrets isolation, and regulatory compliance.'
    }
  ];

  return (
    <section id="careers" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Engineering Team</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Build the Future of Cloud & DevOps
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Work with elite engineers on mission-critical distributed systems. Competitive compensation, flexible remote culture, and rapid career progression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openings.map((job, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/5 hover:border-cyan-500/30 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>Exp: {job.experience}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800">
                <button
                  onClick={() => onApplyRole(job.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 group-hover:bg-cyan-500/10 border border-slate-800 group-hover:border-cyan-500/40 text-xs font-semibold text-cyan-400 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Apply for this Position</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
