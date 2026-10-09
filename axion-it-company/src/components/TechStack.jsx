import React from 'react';
import { Layers, Terminal, Cpu, Cloud, Database, Shield } from 'lucide-react';

export default function TechStack() {
  const categories = [
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      items: ['Amazon Web Services (AWS)', 'Google Cloud (GCP)', 'Microsoft Azure', 'Bare Metal & Hybrid', 'Cloudflare']
    },
    {
      title: 'DevOps & GitOps Orchestration',
      icon: Terminal,
      items: ['Kubernetes (K8s)', 'Docker & Podman', 'Terraform & OpenTofu', 'ArgoCD & Flux', 'Helm Charts', 'GitHub Actions']
    },
    {
      title: 'Full-Stack & Backend Systems',
      icon: Cpu,
      items: ['Node.js & Express', 'TypeScript', 'React & Next.js', 'Python & FastAPI', 'Go (Golang)', 'Tailwind CSS']
    },
    {
      title: 'Databases & Distributed Systems',
      icon: Database,
      items: ['PostgreSQL', 'Redis Cache', 'Apache Kafka', 'MongoDB', 'Elasticsearch', 'Vector DBs (Qdrant)']
    },
    {
      title: 'Observability & Security',
      icon: Shield,
      items: ['Prometheus & Grafana', 'OpenTelemetry', 'Datadog', 'HashiCorp Vault', 'Trivy & Snyk', 'WAF & Zero-Trust']
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            ENGINEERING TOOLCHAIN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Battle-Tested Technology Stack
          </h2>
          <p className="text-slate-400 text-sm">
            We build and operate systems using industry-standard, cloud-native frameworks designed for zero failure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800 text-cyan-400">
                    <Icon className="w-4 h-4 shrink-0" />
                    <h3 className="text-xs font-bold font-mono uppercase text-slate-200">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
