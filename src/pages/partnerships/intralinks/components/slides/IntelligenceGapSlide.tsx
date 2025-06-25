import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SlideProps } from '../../types';
import { CheckCircle, XCircle, Users, Building, TrendingUp, Shield, DollarSign, Briefcase } from 'lucide-react';

export function IntelligenceGapSlide({ onNext, onPrev }: SlideProps): JSX.Element {
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

        {/* Comprehensive Stakeholder Matrix */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="font-space text-2xl text-brand-black text-center mb-8">
            Intralinks M&A Stakeholder Matrix: Strategic Enablement Through Embedded Tech & AI Intelligence
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-brand-gunmetal text-white">
                  <th className="px-4 py-3 text-left font-space text-sm">Stakeholder</th>
                  <th className="px-4 py-3 text-left font-space text-sm">Why They Use Intralinks</th>
                  <th className="px-4 py-3 text-left font-space text-sm">Pre-Deal Enablement</th>
                  <th className="px-4 py-3 text-left font-space text-sm">During Deal Enablement</th>
                  <th className="px-4 py-3 text-left font-space text-sm">Post-Deal Enablement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Investment Bankers */}
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-space text-sm font-medium">Investment Bankers / M&A Advisors</td>
                  <td className="px-4 py-4 font-ibm text-xs">Manage deal execution, share CIMs, oversee Q&A</td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Strengthen CIMs with verified insights<br/>
                    • Preempt buyer concerns<br/>
                    • Position asset credibility
                  </td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Respond to Q&A with source-linked data<br/>
                    • Defend valuation using AI evidence<br/>
                    • Accelerate timelines
                  </td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Archive infra snapshots<br/>
                    • Track platform changes<br/>
                    • Refine positioning
                  </td>
                </tr>

                {/* PE & Strategic Buyers */}
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-space text-sm font-medium">Private Equity & Strategic Buyers</td>
                  <td className="px-4 py-4 font-ibm text-xs">Access diligence materials, assess scalability</td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Evaluate tech stack maturity<br/>
                    • Identify AI readiness<br/>
                    • Flag legacy risks early
                  </td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Benchmark infra against standards<br/>
                    • Validate synergy assumptions<br/>
                    • Cross-check seller claims
                  </td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Monitor infrastructure plans<br/>
                    • Track ROI on tech transformation<br/>
                    • Guide bolt-on strategy
                  </td>
                </tr>

                {/* Credit Funds */}
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-space text-sm font-medium">Credit Funds / Lenders</td>
                  <td className="px-4 py-4 font-ibm text-xs">Assess operational stability and digital risk</td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Assess infrastructure resilience<br/>
                    • Identify digital dependencies<br/>
                    • Screen for IT vulnerabilities
                  </td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Validate scalability claims<br/>
                    • Structure digital covenants<br/>
                    • Model downside risk
                  </td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Monitor covenant adherence<br/>
                    • Detect infrastructure drift<br/>
                    • Flag digital risk early
                  </td>
                </tr>

                {/* Corporate Development */}
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-space text-sm font-medium">Corporate Development Teams</td>
                  <td className="px-4 py-4 font-ibm text-xs">Evaluate strategic fit and integration lift</td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Assess infrastructure alignment<br/>
                    • Identify integration blockers<br/>
                    • Estimate harmonization effort
                  </td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Align stakeholders with stack maps<br/>
                    • Validate synergy models<br/>
                    • Scope integration timeline
                  </td>
                  <td className="px-4 py-4 font-ibm text-xs">
                    • Track IT harmonization<br/>
                    • Monitor milestones<br/>
                    • Feed future M&A insights
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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