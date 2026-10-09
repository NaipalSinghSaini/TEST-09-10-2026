import React, { useState } from 'react';
import { 
  Cloud, 
  Terminal, 
  Shield, 
  Code2, 
  Cpu, 
  Headphones, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Server,
  Layers
} from 'lucide-react';

const serviceIcons = {
  'cloud-devops': Cloud,
  'cybersecurity': Shield,
  'software-engineering': Code2,
  'ai-solutions': Cpu,
  'managed-sre': Headphones,
  'it-consulting': Layers
};

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'cloud-devops',
      title: 'Cloud Architecture & DevOps Automation',
      category: 'cloud',
      icon: Cloud,
      badge: 'Core Specialty',
      description: 'End-to-end Kubernetes orchestration, automated multi-stage CI/CD pipelines, Terraform IaC, and zero-downtime cloud migration across AWS, Azure, and Google Cloud.',
      features: [
        'Production Kubernetes Clusters (EKS, GKE, AKS)',
        'Zero-downtime CI/CD GitOps pipelines (ArgoCD & GitHub Actions)',
        'Infrastructure as Code (Terraform, Ansible, Terragrunt)',
        'Cloud Cost FinOps (Up to 40% monthly AWS/GCP savings)'
      ],
      deliverables: 'Architecture blueprint, Git repo with IaC, 24/7 cluster SLA'
    },
    {
      id: 'cybersecurity',
      title: 'DevSecOps & Enterprise Cybersecurity',
      category: 'security',
      icon: Shield,
      badge: 'Zero-Trust',
      description: 'Shift-left security testing, container vulnerability scanning, secrets management with HashiCorp Vault, and automated compliance auditing for SOC 2 and ISO 27001.',
      features: [
        'Automated SAST / DAST pipeline security scans',
        'Container & Base Image vulnerability scanning (Trivy, Snyk)',
        'Cloud Security Posture Management (CSPM) & IAM hardening',
        'SOC 2 Type II, HIPAA, and ISO 27001 audit preparation'
      ],
      deliverables: 'Security audit report, automated remediation scripts, hardened CI'
    },
    {
      id: 'software-engineering',
      title: 'Custom Full-Stack & Web Engineering',
      category: 'dev',
      icon: Code2,
      badge: 'High Performance',
      description: 'Ultra-fast web platforms, microservices architecture, Node.js & React enterprise software, and resilient distributed databases built to handle millions of requests.',
      features: [
        'High-concurrency Node.js Express/Nest microservices',
        'Modern responsive web apps (React, Next.js, Tailwind CSS)',
        'Database engineering (PostgreSQL, MongoDB, Redis caching)',
        'GraphQL & REST API design with OpenAPI documentation'
      ],
      deliverables: 'Production-ready codebase, CI integration, comprehensive tests'
    },
    {
      id: 'ai-solutions',
      title: 'Enterprise AI & Autonomous Agents',
      category: 'ai',
      icon: Cpu,
      badge: 'Next-Gen',
      description: 'Custom Large Language Model (LLM) integrations, private Retrieval-Augmented Generation (RAG) knowledge systems, and autonomous agent workflows for enterprise automation.',
      features: [
        'Custom Enterprise AI Agents & Workflow Automation',
        'Private RAG knowledge search with vector databases (Pinecone, Qdrant)',
        'Local / Private cloud LLM deployments (Llama 3, DeepSeek, Mistral)',
        'Automated document processing & conversational customer assistants'
      ],
      deliverables: 'Custom AI agent pipelines, vector indexes, evaluation benchmarks'
    },
    {
      id: 'managed-sre',
      title: '24/7 Managed IT & Site Reliability (SRE)',
      category: 'sre',
      icon: Headphones,
      badge: '99.99% SLA',
      description: 'Round-the-clock infrastructure telemetry, proactive incident prevention, automated disaster recovery, and guaranteed 15-minute emergency response SLAs.',
      features: [
        '24/7/365 Global Network Operations Center (NOC)',
        'Prometheus, Grafana, Datadog & OpenTelemetry observability',
        'Automated multi-region failover and disaster recovery',
        'Strict 15-minute P1 incident resolution SLA'
      ],
      deliverables: 'Observability dashboards, incident runbooks, weekly SLA reporting'
    },
    {
      id: 'it-consulting',
      title: 'IT Modernization & Virtual CTO Advisory',
      category: 'consulting',
      icon: Layers,
      badge: 'Strategic',
      description: 'Strategic technology advisory for legacy monolith decommissioning, cloud migrations, engineering organization scaling, and technology stack modernization.',
      features: [
        'Legacy application refactoring to Cloud-Native microservices',
        'Architecture reviews, performance benchmarking & bottleneck discovery',
        'Engineering process optimization & DORA metrics improvement',
        'Fractional VP of Engineering / CTO technical advisory'
      ],
      deliverables: 'Executive roadmap, tech stack evaluation, architectural audits'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 relative bg-[#090e1d]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive IT & DevOps Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Enterprise IT Solutions Tailored for Speed & Reliability
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            We deliver end-to-end technology solutions that eliminate technical debt, automate complex deployments, and secure mission-critical data.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'cloud', label: 'Cloud & DevOps' },
              { id: 'security', label: 'Cybersecurity' },
              { id: 'dev', label: 'Software Engineering' },
              { id: 'ai', label: 'AI & Automation' },
              { id: 'sre', label: 'Managed SRE' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/30'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="space-y-5">
                  
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Core Deliverables:
                    </div>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2 transition-all group-hover:shadow-md"
                  >
                    <span>Request Proposal for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
