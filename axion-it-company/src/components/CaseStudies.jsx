import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  Cpu 
} from 'lucide-react';

export default function CaseStudies({ onSelectCase }) {
  const caseStudies = [
    {
      company: 'FinFlow Global (FinTech)',
      industry: 'Digital Banking & Payments',
      title: 'Scaling from 10k to 2M Daily Transactions with Zero Downtime on AWS EKS',
      challenge: 'Frequent outages during peak market hours and manual 4-hour deployment windows causing customer friction.',
      solution: 'Re-architected monolithic backend into microservices with Kubernetes (EKS), Terraform IaC, and automated Canary deployments.',
      metrics: [
        { label: 'Uptime Achieved', value: '99.995%' },
        { label: 'Deploy Time', value: '4 min (from 4 hrs)' },
        { label: 'Cloud Cost Saved', value: '38%' }
      ],
      techStack: ['AWS EKS', 'Kubernetes', 'Node.js', 'Terraform', 'Kafka']
    },
    {
      company: 'OmniHealth Cloud (HealthTech)',
      industry: 'Enterprise Healthcare & EHR',
      title: 'Automating HIPAA & SOC 2 Compliance with DevSecOps GitOps Pipeline',
      challenge: 'Manual security audits were delaying feature releases by months while handling sensitive patient health records.',
      solution: 'Implemented automated Shift-Left security scanners (Trivy, SonarQube), HashiCorp Vault secrets management, and automated continuous compliance logging.',
      metrics: [
        { label: 'Audit Time', value: 'Reduced by 85%' },
        { label: 'Security Vulnerabilities', value: '0 Critical CVEs' },
        { label: 'Release Cadence', value: '14x Faster' }
      ],
      techStack: ['Azure AKS', 'DevSecOps', 'Vault', 'Trivy', 'Docker']
    },
    {
      company: 'QuickRetail Market (E-Commerce)',
      industry: 'High-Volume Retail SaaS',
      title: 'Reducing $120,000/Month AWS Cloud Spend by 44% with FinOps Optimization',
      challenge: 'Exploding AWS EC2 and RDS bills caused by unoptimized over-provisioned idle instances and inefficient databases.',
      solution: 'Audited infrastructure, implemented Kubernetes Karpenter smart autoscaling, Spot instance fleets, and Redis caching layers.',
      metrics: [
        { label: 'Monthly Savings', value: '$52,800 / mo' },
        { label: 'Throughput', value: '3.2x Peak RPS' },
        { label: 'Latency Cut', value: '62%' }
      ],
      techStack: ['AWS', 'Karpenter', 'Redis', 'PostgreSQL', 'Prometheus']
    }
  ];

  return (
    <section id="cases" className="py-24 relative bg-[#090e1d]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Enterprise Impact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Client Success Stories & Case Studies
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Real engineering results delivered for high-growth tech companies, fintech platforms, and enterprise software teams.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/5 hover:border-cyan-500/30 transition-all group"
            >
              <div className="space-y-6">
                
                {/* Meta header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{study.company}</span>
                  <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">{study.industry}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* Problem vs Solution */}
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 font-mono uppercase text-[10px] block">Challenge:</span>
                    <p className="text-slate-300 mt-0.5">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-mono uppercase text-[10px] block">Engineering Solution:</span>
                    <p className="text-slate-300 mt-0.5">{study.solution}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-sm font-black font-mono text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {study.techStack.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onSelectCase(study.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 group-hover:bg-cyan-500/10 border border-slate-800 group-hover:border-cyan-500/40 text-xs font-semibold text-cyan-400 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Build Similar Infrastructure</span>
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
