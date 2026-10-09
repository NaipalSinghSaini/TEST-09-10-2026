import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Zap, 
  Cloud, 
  Cpu, 
  Play, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

export default function Hero({ onOpenContact, onOpenEstimator }) {
  // Simulated interactive CI/CD DevOps pipeline
  const [pipelineStep, setPipelineStep] = useState(0);

  const pipelineStages = [
    { title: 'git push origin main', time: '14:02:11', status: 'PASS', detail: 'Triggered commit 9bf2a1c' },
    { title: 'Security Scan (SAST & Trivy)', time: '14:02:14', status: 'PASS', detail: '0 vulnerabilities found' },
    { title: 'Build Docker Container', time: '14:02:22', status: 'PASS', detail: 'Image built: axion/prod:v2.4' },
    { title: 'Terraform IaC Verification', time: '14:02:29', status: 'PASS', detail: 'AWS EKS cluster sync OK' },
    { title: 'Kubernetes Rolling Deploy', time: '14:02:35', status: 'SUCCESS', detail: '12 pods healthy | 0 downtime' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPipelineStep((prev) => (prev + 1) % (pipelineStages.length + 1));
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glows and grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Next-Gen Cloud, DevOps & Full-Stack IT Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Architecting Resilient{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Cloud Systems
              </span>{' '}
              & High-Speed DevOps
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We empower startups and enterprises with enterprise-grade Kubernetes architectures, automated CI/CD pipelines, bank-grade cybersecurity, and high-performance Node.js & React software engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenContact('General Project Consultation')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Instant Cost Estimator</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
              <div className="space-y-0.5">
                <div className="text-2xl font-black font-mono text-cyan-400">99.99%</div>
                <div className="text-xs text-slate-400 font-medium">Uptime SLA</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl font-black font-mono text-white">250+</div>
                <div className="text-xs text-slate-400 font-medium">Cloud Deployments</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl font-black font-mono text-emerald-400">42%</div>
                <div className="text-xs text-slate-400 font-medium">Avg AWS Cost Cut</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl font-black font-mono text-cyan-400">&lt;15m</div>
                <div className="text-xs text-slate-400 font-medium">SRE Incident SLA</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Animated DevOps Terminal / Pipeline */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-transparent shadow-2xl shadow-cyan-500/10">
              
              <div className="bg-[#0b1120] rounded-2xl overflow-hidden border border-white/5">
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#0f172a] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>axion-pipeline-runner ~ live</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-5 space-y-3 font-mono text-xs">
                  
                  <div className="text-slate-400 pb-2 border-b border-slate-800/80 flex items-center justify-between">
                    <span>Cluster: <span className="text-cyan-300">k8s-prod-us-east-1</span></span>
                    <span className="text-slate-500">Node v24.21.0</span>
                  </div>

                  {/* Stage List */}
                  <div className="space-y-2.5">
                    {pipelineStages.map((stage, idx) => {
                      const isComplete = idx < pipelineStep;
                      const isCurrent = idx === pipelineStep;

                      return (
                        <div 
                          key={idx}
                          className={`p-2.5 rounded-lg border transition-all duration-300 ${
                            isComplete 
                              ? 'bg-slate-900/60 border-emerald-500/20 text-slate-200' 
                              : isCurrent 
                                ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-200' 
                                : 'bg-slate-900/20 border-white/5 text-slate-600'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {isComplete ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              ) : isCurrent ? (
                                <div className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin shrink-0"></div>
                              ) : (
                                <div className="w-4 h-4 rounded-full border border-slate-700 shrink-0"></div>
                              )}
                              <span className="font-semibold text-slate-100">{stage.title}</span>
                            </div>

                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                              isComplete 
                                ? 'bg-emerald-500/10 text-emerald-400' 
                                : isCurrent 
                                  ? 'bg-cyan-500/20 text-cyan-300 animate-pulse' 
                                  : 'text-slate-600'
                            }`}>
                              {isComplete ? 'PASSED' : isCurrent ? 'RUNNING' : 'QUEUED'}
                            </span>
                          </div>

                          <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400 pl-6">
                            <span>{stage.detail}</span>
                            <span className="text-slate-500 text-[10px]">{stage.time}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Terminal Command Prompt */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-cyan-400">$</span>
                      <span>kubectl get pods -n production</span>
                      <span className="w-2 h-4 bg-cyan-400 animate-pulse"></span>
                    </div>
                    <button 
                      onClick={() => setPipelineStep(0)}
                      className="text-slate-500 hover:text-cyan-400 transition-colors p-1"
                      title="Replay Pipeline"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
