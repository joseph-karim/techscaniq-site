import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SlideProps } from '../../types';
import { useState } from 'react';
import { CheckCircle, XCircle, Users, Building, TrendingUp, Shield, DollarSign, Briefcase, Scale, UserCheck, Zap } from 'lucide-react';

export function IntelligenceGapSlide({ onNext, onPrev }: SlideProps): JSX.Element {
  const [activeStakeholder, setActiveStakeholder] = useState(0);

  const stakeholders = [
    {
      name: "Investment Bankers / M&A Advisors",
      icon: Briefcase,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      whyUse: "Manage deal execution, share CIMs, oversee Q&A, and run diligence securely",
      role: "Orchestrate the transaction, control data flow, and maintain buyer engagement",
      preDeal: [
        "Strengthen CIMs with verified infrastructure insights",
        "Preempt buyer concerns with transparent risk signals",
        "Position asset credibility with digital maturity data"
      ],
      duringDeal: [
        "Respond to Q&A with source-linked infrastructure data",
        "Defend valuation using AI and system-level evidence",
        "Accelerate timelines through structured Q&A workflows"
      ],
      postDeal: [
        "Archive infra snapshots to support future exits or IPOs",
        "Track platform changes to inform re-marketing strategy",
        "Refine positioning with post-close digital intelligence"
      ]
    },
    {
      name: "Private Equity & Strategic Buyers",
      icon: Building,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      whyUse: "Access diligence materials, assess scalability, tech risk, and AI-readiness",
      role: "Evaluate platform fit, validate synergies, and drive investment strategy",
      preDeal: [
        "Evaluate tech stack maturity and cloud architecture",
        "Identify AI readiness and automation opportunities",
        "Flag legacy risks and vendor concentration early"
      ],
      duringDeal: [
        "Benchmark infra against internal standards and playbooks",
        "Validate synergy assumptions with verified detections",
        "Cross-check seller claims using system-level scans"
      ],
      postDeal: [
        "Monitor execution of post-close infrastructure plans",
        "Track ROI linked to tech transformation outcomes",
        "Guide bolt-on strategy using verified compatibility"
      ]
    },
    {
      name: "Credit Funds / Lenders",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      whyUse: "Assess operational stability, digital risk, and covenant-linked dependencies",
      role: "Evaluate downside risk, set financial covenants, and monitor borrower resilience",
      preDeal: [
        "Assess core infrastructure resilience and stability",
        "Identify digital dependencies and platform exposure",
        "Screen borrower environments for IT vulnerabilities"
      ],
      duringDeal: [
        "Validate borrower claims on scalability and uptime",
        "Structure covenants linked to digital milestones",
        "Model downside risk using tech and AI intelligence"
      ],
      postDeal: [
        "Monitor covenant adherence through real-time insights",
        "Detect drift from baseline infrastructure agreements",
        "Flag digital risk before breach or cash flow erosion"
      ]
    },
    {
      name: "Corporate Development Teams",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-500",
      whyUse: "Evaluate strategic fit, assess integration lift, and align with enterprise architecture",
      role: "Act as internal buyers driving M&A business cases and integration planning",
      preDeal: [
        "Assess infrastructure alignment with enterprise systems",
        "Identify potential blockers for post-close integration",
        "Estimate lift required for tech harmonization efforts"
      ],
      duringDeal: [
        "Align internal stakeholders using real-time stack maps",
        "Validate assumptions behind synergy and fit models",
        "Scope integration timeline with source-verified inputs"
      ],
      postDeal: [
        "Track IT harmonization across the acquired platform",
        "Monitor delivery of integration-related milestones",
        "Feed insights into future M&A decision frameworks"
      ]
    },
    {
      name: "Legal & Compliance Counsel",
      icon: Scale,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      whyUse: "Review disclosures, validate risk, and ensure legal defensibility of representations",
      role: "Verify accuracy, reduce exposure, and maintain post-close governance integrity",
      preDeal: [
        "Detect shadow IT, unlicensed software, and AI usage",
        "Identify regulatory risks tied to privacy or residency",
        "Flag disclosure gaps across tech infrastructure layers"
      ],
      duringDeal: [
        "Cross-check legal disclosures with verified detections",
        "Map licenses, APIs, and proprietary components",
        "Generate audit-grade evidence for diligence reports"
      ],
      postDeal: [
        "Preserve infra records to support future governance",
        "Resolve disputes using timestamped source evidence",
        "Validate compliance with evolving regulatory standards"
      ]
    },
    {
      name: "Consultants & Advisors",
      icon: Users,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-500",
      whyUse: "Conduct technical, commercial, and operational diligence for clients",
      role: "Provide diligence validation, risk analysis, and integration guidance",
      preDeal: [
        "Scope digital infrastructure rapidly for client projects",
        "Identify high-risk systems or operational blind spots",
        "Reduce discovery timelines with auto-mapped stacks"
      ],
      duringDeal: [
        "Build integration plans using verified infrastructure data",
        "Align diligence reports with source-traceable systems",
        "Deliver faster, more accurate client recommendations"
      ],
      postDeal: [
        "Benchmark transformation progress vs. deal assumptions",
        "Track post-close execution through system monitoring",
        "Strengthen credibility with outcome-based insights"
      ]
    },
    {
      name: "Founders / Management Teams",
      icon: UserCheck,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-500",
      whyUse: "Share disclosures, respond to Q&A, and support diligence workflows",
      role: "Provide source data, clarify tech stack, and collaborate with advisors and buyers",
      preDeal: [
        "Simplify disclosures using automated system detection",
        "Highlight tech strengths early in the process",
        "Reduce friction with pre-built infrastructure evidence"
      ],
      duringDeal: [
        "Respond faster to technical questions with evidence",
        "Clarify platform capabilities during negotiation",
        "Maintain alignment with buyer diligence focus areas"
      ],
      postDeal: [
        "Retain insights for future capital raise or exit prep",
        "Track infrastructure upgrades post-transaction",
        "Improve positioning for next deal with clean records"
      ]
    }
  ];

  const currentStakeholder = stakeholders[activeStakeholder];
  const Icon = currentStakeholder.icon;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 pt-32">
      <div className="max-w-7xl w-full">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-ibm text-xl text-brand-gunmetal mb-4">
            Today Intralinks powers M&A workflow for 10,000+ clients, but it could do so much more
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 border-2 border-brand-teal">
            <h3 className="font-space text-2xl mb-6">What Intralinks Powers Today</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brand-teal w-6 h-6" />
                <span className="font-ibm">Document management & security</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brand-teal w-6 h-6" />
                <span className="font-ibm">Q&A workflow automation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brand-teal w-6 h-6" />
                <span className="font-ibm">AI-powered document discovery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brand-teal w-6 h-6" />
                <span className="font-ibm">Deal progress tracking</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-red-500 bg-red-50">
            <h3 className="font-space text-2xl mb-6">What Happens Off-Platform</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <XCircle className="text-red-500 w-6 h-6" />
                <span className="font-ibm">Technical architecture assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="text-red-500 w-6 h-6" />
                <span className="font-ibm">Code quality & security analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="text-red-500 w-6 h-6" />
                <span className="font-ibm">Market position intelligence</span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="text-red-500 w-6 h-6" />
                <span className="font-ibm">Integration complexity evaluation</span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-space text-3xl text-brand-black text-center mb-2">
            What if Intralinks offered Tech Due Diligence in your M&A Platform?
          </h2>
          <p className="font-ibm text-lg text-brand-gunmetal text-center mb-8">
            Benefits to Stakeholders
          </p>

          {/* Stakeholder Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PE Firms */}
            <Card className="p-6 border-2 border-brand-teal hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-brand-teal" />
                <h3 className="font-space text-xl">PE Firms</h3>
              </div>
              <ul className="space-y-3 font-ibm text-sm">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>De-risk technology investments with AI-powered insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>Accelerate DD from 12 weeks to 48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>Save 95% on technical assessment costs</span>
                </li>
              </ul>
            </Card>

            {/* Corporate Development */}
            <Card className="p-6 border-2 border-brand-teal hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-brand-teal" />
                <h3 className="font-space text-xl">Corporate Development</h3>
              </div>
              <ul className="space-y-3 font-ibm text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>Validate integration complexity before closing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>Assess team capabilities and retention risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>Uncover hidden technical debt and security issues</span>
                </li>
              </ul>
            </Card>

            {/* Intralinks */}
            <Card className="p-6 border-2 border-brand-gunmetal bg-brand-gunmetal text-white">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-white" />
                <h3 className="font-space text-xl">Intralinks</h3>
              </div>
              <ul className="space-y-3 font-ibm text-sm">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span>New revenue stream: $7,900 per assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span>Increase platform stickiness and retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span>Differentiate from competitors with AI-powered DD</span>
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>

        {/* Interactive Stakeholder Matrix */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="font-space text-2xl text-brand-black text-center mb-2">
            Intralinks M&A Stakeholder Matrix
          </h2>
          <p className="font-ibm text-lg text-brand-gunmetal text-center mb-8">
            Strategic Enablement Through Embedded Tech & AI Intelligence
          </p>
          
          {/* Stakeholder Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {stakeholders.map((stakeholder, index) => {
              const StakeholderIcon = stakeholder.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStakeholder(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeStakeholder === index 
                      ? `${stakeholder.bgColor} ${stakeholder.borderColor} border-2 shadow-lg` 
                      : 'bg-gray-100 border-2 border-transparent hover:bg-gray-200'
                  }`}
                >
                  <StakeholderIcon className={`w-4 h-4 ${activeStakeholder === index ? stakeholder.color : 'text-gray-600'}`} />
                  <span className={`font-ibm text-sm ${activeStakeholder === index ? 'font-semibold' : ''}`}>
                    {stakeholder.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stakeholder Detail View */}
          <motion.div
            key={activeStakeholder}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className={`p-8 border-2 ${currentStakeholder.borderColor} ${currentStakeholder.bgColor}`}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full ${currentStakeholder.bgColor} border-2 ${currentStakeholder.borderColor} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${currentStakeholder.color}`} />
                </div>
                <div>
                  <h3 className="font-space text-2xl">{currentStakeholder.name}</h3>
                  <p className="font-ibm text-sm text-gray-600">{currentStakeholder.role}</p>
                </div>
              </div>

              {/* Why They Use Intralinks */}
              <div className="mb-6">
                <h4 className="font-space text-lg mb-2">Why They Use Intralinks Today</h4>
                <p className="font-ibm text-gray-700">{currentStakeholder.whyUse}</p>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-0 right-0 top-12 h-1 bg-gray-200">
                  <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  {/* Pre-Deal */}
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                    <h5 className="font-space text-lg mb-3">Pre-Deal Enablement</h5>
                    <ul className="space-y-2">
                      {currentStakeholder.preDeal.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="font-ibm text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* During Deal */}
                  <div className="relative">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
                    <h5 className="font-space text-lg mb-3">During Deal Enablement</h5>
                    <ul className="space-y-2">
                      {currentStakeholder.duringDeal.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="font-ibm text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Post-Deal */}
                  <div className="relative">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
                    <h5 className="font-space text-lg mb-3">Post-Deal Enablement</h5>
                    <ul className="space-y-2">
                      {currentStakeholder.postDeal.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="font-ibm text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* TechScanIQ Enhancement Badge */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-brand-teal text-white px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4" />
                  <span className="font-ibm text-sm">Enhanced with TechScanIQ Intelligence</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <Button 
            onClick={onNext}
            className="bg-brand-teal text-white hover:bg-brand-teal/90 px-10 py-6 text-lg"
          >
            See the breakthrough →
          </Button>
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button 
            onClick={onPrev}
            variant="outline"
            className="border-brand-gunmetal text-brand-gunmetal"
          >
            ← Back
          </Button>
        </div>
      </div>
    </div>
  );
}