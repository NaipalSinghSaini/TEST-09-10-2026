import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '..', 'data');
const inquiriesFile = path.join(dataDir, 'inquiries.json');

// Ensure data directory and file exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(inquiriesFile)) {
  fs.writeFileSync(inquiriesFile, JSON.stringify([], null, 2));
}

function getInquiries() {
  try {
    const raw = fs.readFileSync(inquiriesFile, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading inquiries:', err);
    return [];
  }
}

function saveInquiry(item) {
  const current = getInquiries();
  current.unshift(item); // latest first
  fs.writeFileSync(inquiriesFile, JSON.stringify(current, null, 2));
  return item;
}

// 1. Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'Axion IT Enterprise API',
    version: '1.0.0',
    uptime: `${Math.floor(process.uptime())} seconds`,
    nodeVersion: process.version,
    timestamp: new Date().toISOString()
  });
});

// 2. Services Catalog
router.get('/services', (req, res) => {
  res.json([
    {
      id: 'cloud-devops',
      title: 'Cloud Architecture & DevOps Automation',
      category: 'Cloud Engineering',
      description: 'End-to-end Kubernetes orchestration, automated multi-stage CI/CD pipelines, Terraform IaC, and cloud migration for AWS, Azure, and GCP.',
      features: [
        'Kubernetes Cluster Architecture & GitOps (ArgoCD)',
        'Zero-downtime CI/CD pipelines (GitHub Actions, GitLab)',
        'Infrastructure as Code (Terraform, Ansible, Pulumi)',
        'Cloud Cost Optimization (FinOps: up to 40% reduction)'
      ],
      tag: 'Most Popular'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & DevSecOps',
      category: 'Security & Compliance',
      description: 'Zero-Trust architecture, automated container vulnerability scanning, penetration testing, and continuous compliance (SOC 2, ISO 27001, HIPAA).',
      features: [
        'Shift-Left Security & Automated SAST/DAST scans',
        'Secret Management & Vault Integration',
        'Cloud Security Posture Management (CSPM)',
        '24/7 Security Operations Center (SOC) monitoring'
      ],
      tag: 'Mission Critical'
    },
    {
      id: 'software-engineering',
      title: 'Custom Software & Web Engineering',
      category: 'Development',
      description: 'High-performance web apps, scalable microservices, mobile apps, and robust API ecosystems built using React, Node.js, TypeScript, and Go.',
      features: [
        'Full-Stack Modern Web Applications (React, Next.js, Node.js)',
        'Distributed Microservices & High-Throughput APIs',
        'Database Optimization (PostgreSQL, MongoDB, Redis, Kafka)',
        'PWA & Cross-Platform Mobile Applications'
      ],
      tag: 'Scalable'
    },
    {
      id: 'ai-solutions',
      title: 'Enterprise AI & Autonomous Agents',
      category: 'AI / ML',
      description: 'Production-ready LLM integrations, Retrieval-Augmented Generation (RAG), custom AI agents, and automated business workflows.',
      features: [
        'Enterprise AI Agent Workflows & Process Automation',
        'Custom Private RAG & Knowledge Base Search',
        'Fine-Tuned LLMs with Secure On-Prem / Cloud Hosting',
        'Predictive Analytics & Real-Time Data Pipelines'
      ],
      tag: 'Next-Gen'
    },
    {
      id: 'managed-sre',
      title: '24/7 Managed IT & Site Reliability (SRE)',
      category: 'Support & SRE',
      description: 'Proactive infrastructure monitoring, automated disaster recovery, incident management, and strict 15-minute response SLA.',
      features: [
        '24/7/365 Proactive NOC Monitoring (Prometheus & Grafana)',
        '99.99% Infrastructure Uptime SLA Guarantee',
        'Automated Incident Alerting & Root Cause Analysis',
        'Disaster Recovery (DR) & Multi-Region Failover'
      ],
      tag: '24/7 SLA'
    },
    {
      id: 'it-consulting',
      title: 'IT Strategy & Digital Transformation',
      category: 'Consulting',
      description: 'Strategic advisory for scaling engineering teams, legacy system modernization, tech stack selection, and cloud maturity audits.',
      features: [
        'Legacy Monolith to Cloud-Native Modernization',
        'Engineering Architecture & Code Quality Audits',
        'DevOps Maturity Assessment & Toolchain Optimization',
        'Virtual VP of Engineering & Fractional CTO Services'
      ],
      tag: 'Advisory'
    }
  ]);
});

// 3. Submit Contact / Consultation Inquiry
router.post('/contact', (req, res) => {
  const { name, email, phone, company, service, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Please provide required fields: name, email, and message.'
    });
  }

  const inquiryId = `AX-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  const newInquiry = {
    id: inquiryId,
    type: 'CONSULTATION_INQUIRY',
    name,
    email,
    phone: phone || 'Not provided',
    company: company || 'Individual / Startup',
    service: service || 'General IT Consultation',
    budget: budget || 'Flexible',
    message,
    status: 'NEW',
    createdAt: new Date().toISOString()
  };

  saveInquiry(newInquiry);

  res.status(201).json({
    success: true,
    message: 'Thank you! Your IT consultation request has been received. Our senior architect will get back to you within 2 hours.',
    inquiryId
  });
});

// 4. Instant Project Cost Estimator Calculation & Logging
router.post('/quote', (req, res) => {
  const { serviceType, scale, cloudProvider, supportTier, email, company } = req.body;

  // Base pricing matrix (in USD)
  const serviceRates = {
    'cloud-devops': { base: 2500, timeWeeks: 3, label: 'Cloud & DevOps Automation' },
    'cybersecurity': { base: 3000, timeWeeks: 2, label: 'DevSecOps & Cyber Audit' },
    'software-engineering': { base: 3500, timeWeeks: 4, label: 'Custom Web & Software Development' },
    'ai-solutions': { base: 4000, timeWeeks: 3, label: 'Enterprise AI & Automation' },
    'managed-sre': { base: 1800, timeWeeks: 1, label: '24/7 Managed SRE Support' }
  };

  const scaleMultipliers = {
    'startup': { mult: 1.0, label: 'Startup / MVP' },
    'midmarket': { mult: 1.8, label: 'Growth / Mid-Market' },
    'enterprise': { mult: 3.2, label: 'Enterprise Scale' }
  };

  const supportTierMultipliers = {
    'standard': 1.0,
    'priority': 1.25,
    'mission-critical': 1.6
  };

  const sConf = serviceRates[serviceType] || serviceRates['cloud-devops'];
  const scConf = scaleMultipliers[scale] || scaleMultipliers['startup'];
  const suppMult = supportTierMultipliers[supportTier] || 1.0;

  const estimatedMin = Math.round(sConf.base * scConf.mult * suppMult);
  const estimatedMax = Math.round(estimatedMin * 1.35);
  const estimatedDurationWeeks = Math.max(2, Math.round(sConf.timeWeeks * (scale === 'enterprise' ? 2 : 1)));

  const quoteId = `QT-${Date.now().toString(36).toUpperCase()}`;

  const quoteRecord = {
    id: quoteId,
    type: 'INSTANT_QUOTE',
    email: email || 'Anonymous Visitor',
    company: company || 'Not specified',
    service: sConf.label,
    scale: scConf.label,
    cloudProvider: cloudProvider || 'AWS',
    supportTier: supportTier || 'standard',
    estimatedRange: `$${estimatedMin.toLocaleString()} - $${estimatedMax.toLocaleString()}`,
    estimatedTimeline: `${estimatedDurationWeeks} - ${estimatedDurationWeeks + 2} Weeks`,
    createdAt: new Date().toISOString()
  };

  if (email) {
    saveInquiry(quoteRecord);
  }

  res.json({
    success: true,
    quoteId,
    service: sConf.label,
    scale: scConf.label,
    cloudProvider: cloudProvider || 'Multi-Cloud',
    estimatedMin,
    estimatedMax,
    estimatedTimeline: `${estimatedDurationWeeks} to ${estimatedDurationWeeks + 2} Weeks`,
    currency: 'USD',
    slaGuarantee: supportTier === 'mission-critical' ? '99.99% Uptime SLA' : 'Standard 99.9% SLA',
    deliverables: [
      'Full architectural blueprint & Infrastructure as Code repository',
      'Automated testing & containerized CI/CD workflow',
      'Security compliance hardening & vulnerability assessment',
      'Production deployment documentation & 30-day post-launch support'
    ]
  });
});

// 5. Live Infrastructure Telemetry (Inspired by Axion-UI)
router.get('/system-status', (req, res) => {
  // Generate realistic dynamic metrics
  const now = new Date();
  const baseRps = 1420 + Math.floor(Math.sin(now.getTime() / 60000) * 150) + Math.floor(Math.random() * 40);
  const latencyMs = (18 + Math.random() * 5).toFixed(1);

  res.json({
    clusterStatus: 'OPTIMAL',
    overallUptime: '99.99%',
    currentRPS: baseRps,
    avgLatencyMs: Number(latencyMs),
    activeNodesCount: 48,
    activeRegions: [
      { name: 'AP-South-1 (Mumbai)', status: 'Healthy', latency: '12ms', load: '38%' },
      { name: 'US-East-1 (N. Virginia)', status: 'Healthy', latency: '68ms', load: '45%' },
      { name: 'EU-Central-1 (Frankfurt)', status: 'Healthy', latency: '74ms', load: '32%' },
      { name: 'AP-Southeast-1 (Singapore)', status: 'Healthy', latency: '24ms', load: '41%' }
    ],
    liveDeployments: [
      { project: 'FinTech Core Banking', branch: 'main', status: 'SUCCESS', time: '2m ago' },
      { project: 'Healthcare EMR Portal', branch: 'release-v3', status: 'DEPLOYING', time: 'just now' },
      { project: 'Logistics Telemetry Hub', branch: 'main', status: 'SUCCESS', time: '14m ago' }
    ],
    securityAudit: {
      zeroDayVulnerabilities: 0,
      activeFirewalls: 16,
      wafBlockedThreatsToday: 1243
    }
  });
});

// 6. Get All Inquiries (Admin View)
router.get('/inquiries', (req, res) => {
  const inquiries = getInquiries();
  res.json({
    total: inquiries.length,
    inquiries
  });
});

// 7. Newsletter Subscription
router.post('/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required.' });
  }

  saveInquiry({
    id: `NEWS-${Date.now().toString(36).toUpperCase()}`,
    type: 'NEWSLETTER_SUBSCRIPTION',
    email,
    createdAt: new Date().toISOString()
  });

  res.json({ success: true, message: 'Subscribed to Axion Tech Engineering Insights successfully!' });
});

export default router;
