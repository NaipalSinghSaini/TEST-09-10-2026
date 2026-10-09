import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Check, 
  Send, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function CostEstimator({ onBookWithEstimate }) {
  const [serviceType, setServiceType] = useState('cloud-devops');
  const [scale, setScale] = useState('midmarket');
  const [cloudProvider, setCloudProvider] = useState('AWS');
  const [supportTier, setSupportTier] = useState('priority');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Pricing Model
  const serviceRates = {
    'cloud-devops': { base: 2800, timeWeeks: 3, label: 'Cloud Architecture & DevOps' },
    'cybersecurity': { base: 3200, timeWeeks: 2, label: 'DevSecOps & Cyber Audit' },
    'software-engineering': { base: 3800, timeWeeks: 4, label: 'Custom Web & Software Development' },
    'ai-solutions': { base: 4200, timeWeeks: 3, label: 'Enterprise AI & Automation' },
    'managed-sre': { base: 2000, timeWeeks: 1, label: '24/7 Managed SRE Support' }
  };

  const scaleMultipliers = {
    'startup': { mult: 1.0, label: 'Startup / MVP Scope', desc: '1-3 microservices, single cloud' },
    'midmarket': { mult: 1.8, label: 'Growth / Mid-Market', desc: '4-10 services, auto-scaling, multi-env' },
    'enterprise': { mult: 3.2, label: 'Enterprise Scale', desc: 'Multi-region, strict compliance, high SLA' }
  };

  const supportTierMultipliers = {
    'standard': { mult: 1.0, label: 'Business Hours (99.9% SLA)' },
    'priority': { mult: 1.25, label: 'Priority Support (99.95% SLA)' },
    'mission-critical': { mult: 1.6, label: '24/7 Mission-Critical (99.99% SLA)' }
  };

  const sConf = serviceRates[serviceType];
  const scConf = scaleMultipliers[scale];
  const suppConf = supportTierMultipliers[supportTier];

  const estimatedMin = Math.round(sConf.base * scConf.mult * suppConf.mult);
  const estimatedMax = Math.round(estimatedMin * 1.35);
  const estimatedWeeks = Math.max(2, Math.round(sConf.timeWeeks * (scale === 'enterprise' ? 2 : 1)));

  const handleGetDetailedQuote = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType,
          scale,
          cloudProvider,
          supportTier,
          email
        })
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="estimator" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost & Scope Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Transparent IT Project Cost Estimator
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            No hidden pricing. Choose your project requirements and receive an immediate ballpark estimate and delivery timeline.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Configuration Inputs (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-7 border border-white/10">
            
            {/* 1. Service Type */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                1. Select Service Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(serviceRates).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setServiceType(key)}
                    className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                      serviceType === key
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-sm shadow-cyan-500/20'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-100">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale / Scope */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                2. Project Scale & Infrastructure Size
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {Object.entries(scaleMultipliers).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setScale(key)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      scale === key
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-sm shadow-cyan-500/20'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Cloud Provider Preference */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                3. Preferred Cloud Infrastructure
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {['AWS', 'Google Cloud', 'Microsoft Azure', 'Hybrid / On-Prem'].map((provider) => (
                  <button
                    key={provider}
                    type="button"
                    onClick={() => setCloudProvider(provider)}
                    className={`p-2.5 rounded-xl text-center border text-xs font-semibold transition-all ${
                      cloudProvider === provider
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {provider}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Support & SLA Tier */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                4. Ongoing SLA & Support Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {Object.entries(supportTierMultipliers).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSupportTier(key)}
                    className={`p-2.5 rounded-xl text-left border text-xs font-medium transition-all ${
                      supportTier === key
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl p-[1px] bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl shadow-cyan-500/20">
              <div className="bg-[#0b1120] rounded-2xl p-6 sm:p-8 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    Live Cost Estimate
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    ESTIMATE READY
                  </span>
                </div>

                {/* Price Display */}
                <div>
                  <div className="text-xs text-slate-400 font-mono">ESTIMATED INVESTMENT RANGE</div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono mt-1 text-cyan-300">
                    ${estimatedMin.toLocaleString()} – ${estimatedMax.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    *Subject to final technical scoping & custom enterprise requirements
                  </p>
                </div>

                {/* Timeline and SLA Breakdown */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>TIMELINE</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      {estimatedWeeks} to {estimatedWeeks + 2} Weeks
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>SLA COMMITMENT</span>
                    </div>
                    <div className="text-sm font-bold text-emerald-400 mt-1">
                      {supportTier === 'mission-critical' ? '99.99% Uptime' : '99.9% Uptime'}
                    </div>
                  </div>
                </div>

                {/* What is included */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-mono text-slate-300 font-semibold">Included in this Package:</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Full IaC repository & automated CI/CD pipeline</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Container vulnerability & DevSecOps audit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Zero-downtime deployment & rollback protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>30-Day post-deployment architecture warranty</span>
                    </li>
                  </ul>
                </div>

                {/* Form to submit and lock in the estimate */}
                {submitted ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Quote Requested Successfully!
                    </div>
                    <p className="text-slate-300">
                      Our Solutions Architect will review this scope and email you a customized proposal within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleGetDetailedQuote} className="space-y-3 pt-2">
                    <div className="relative">
                      <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your work email for proposal..."
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-500"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      {submitting ? 'Calculating...' : 'Lock In Estimate & Get Detailed Proposal'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
