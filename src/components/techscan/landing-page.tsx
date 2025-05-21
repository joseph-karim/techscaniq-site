import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Clock, FileWarning, PhoneOff as MoneyOff, Scan, Rows as Browser, FileCheck, Shield, Activity, Database, GitBranch } from "lucide-react"

export function TechScanLandingPage() {
  return (
    <div className="relative min-h-screen bg-[#0A1D36] font-sans text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm transition-all">
        <div className="container mx-auto flex items-center justify-between py-6">
          <div className="flex items-center pl-2 md:pl-4">
            <img src="/techscaniq_logo.png" alt="TechScan IQ" className="h-28 md:h-32" />
          </div>
          <Button className="hidden md:inline-flex rounded-full bg-[#22D3EE] text-white hover:bg-[#0891B2] hover:shadow-md transition-all">
            Get your Tech Health Score
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Tech diligence in 2 hours. No engineers needed.
            </h1>
            <p className="text-lg text-[#D1D5DB]">
              TechScan IQ delivers investor-grade assessments for any tech deal. Get clear insights without disrupting your teams or draining engineering resources.
            </p>
            <div className="pt-4">
              <Button className="rounded-full bg-[#22D3EE] text-white hover:bg-[#0891B2] hover:shadow-md transition-all text-lg px-8 py-6">
                Get your Tech Health Score <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex gap-4 mt-6">
                <div className="flex items-center text-sm text-[#D1D5DB]">
                  <Check className="mr-2 h-4 w-4 text-[#22D3EE]" />
                  <span>Reviewed by Technical Advisor</span>
                </div>
                <div className="flex items-center text-sm text-[#D1D5DB]">
                  <Check className="mr-2 h-4 w-4 text-[#22D3EE]" />
                  <span>First Scan Free</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative bg-[#12263A] rounded-xl shadow-2xl p-6 w-full max-w-md">
              <div className="absolute -right-4 -top-4 bg-[#22D3EE] rounded-full w-24 h-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">87</div>
                  <div className="text-xs">Tech Score</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <h3 className="text-xl font-bold">Health Report</h3>
                <div className="space-y-2">
                  <div className="bg-[#1E3A5F] rounded-lg p-3">
                    <div className="flex justify-between">
                      <span>Code Quality</span>
                      <span className="font-semibold text-[#22D3EE]">92%</span>
                    </div>
                    <div className="mt-1 bg-[#0A1D36] rounded-full h-2">
                      <div className="bg-[#22D3EE] h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div className="bg-[#1E3A5F] rounded-lg p-3">
                    <div className="flex justify-between">
                      <span>Technical Debt</span>
                      <span className="font-semibold text-[#22D3EE]">78%</span>
                    </div>
                    <div className="mt-1 bg-[#0A1D36] rounded-full h-2">
                      <div className="bg-[#22D3EE] h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  <div className="bg-[#1E3A5F] rounded-lg p-3">
                    <div className="flex justify-between">
                      <span>Scalability</span>
                      <span className="font-semibold text-[#22D3EE]">85%</span>
                    </div>
                    <div className="mt-1 bg-[#0A1D36] rounded-full h-2">
                      <div className="bg-[#22D3EE] h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-[#12263A] py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Traditional tech diligence doesn't scale.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[#1E3A5F] p-8 rounded-xl">
              <div className="bg-[#0A1D36] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-[#22D3EE]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Time Intensive</h3>
              <p className="text-[#D1D5DB]">
                Traditional tech audits can take weeks or months, delaying critical investment decisions.
              </p>
            </div>
            <div className="bg-[#1E3A5F] p-8 rounded-xl">
              <div className="bg-[#0A1D36] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MoneyOff className="h-8 w-8 text-[#22D3EE]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expensive</h3>
              <p className="text-[#D1D5DB]">
                Engineering talent is costly. Technical due diligence can run into tens of thousands of dollars.
              </p>
            </div>
            <div className="bg-[#1E3A5F] p-8 rounded-xl">
              <div className="bg-[#0A1D36] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FileWarning className="h-8 w-8 text-[#22D3EE]" />
              </div>
              <h3 className="text-xl font-bold mb-3">High Stress</h3>
              <p className="text-[#D1D5DB]">
                Extensive reviews create pressure on both investors and target companies, straining relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-[#0A1D36]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            From blind spots to bulletproof insights — in 4 simple steps.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Browser className="h-8 w-8 text-[#22D3EE]" />,
                title: "Connect",
                description: "Point us to your repository or deployment URL"
              },
              {
                icon: <Scan className="h-8 w-8 text-[#22D3EE]" />,
                title: "Scan",
                description: "Our system automatically analyzes tech stack and architecture"
              },
              {
                icon: <FileCheck className="h-8 w-8 text-[#22D3EE]" />,
                title: "Review",
                description: "A technical advisor validates findings and adds context"
              },
              {
                icon: <Check className="h-8 w-8 text-[#22D3EE]" />,
                title: "Decide",
                description: "Get clear, actionable insights for confident decisions"
              }
            ].map((step, index) => (
              <div key={index} className="bg-[#12263A] p-8 rounded-xl border border-[#1E3A5F] group hover:border-[#22D3EE] transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-[#1E3A5F] group-hover:bg-[#22D3EE]/20 w-10 h-10 rounded-full flex items-center justify-center text-[#22D3EE] font-bold mr-4 transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="bg-[#1E3A5F] p-2 rounded-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-[#D1D5DB]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="bg-[#12263A] py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineered for LP scrutiny.</h2>
              <p className="text-[#D1D5DB] text-lg mb-8">
                TechScan IQ delivers thorough, objective assessments that satisfy even the most diligent limited partners. 
                Our reports provide comprehensive technical validation needed for investment confidence and proper due diligence.
              </p>
              
              <div className="space-y-5">
                <div className="bg-[#1E3A5F] p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 text-[#22D3EE] mt-1">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Executive Summary with Confidence Level</h4>
                      <p className="text-sm text-[#D1D5DB]">Clear verdict with confidence metrics based on observed signals. Identifies top concerns and provides actionable next steps.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#1E3A5F] p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 text-[#22D3EE] mt-1">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Comprehensive Stack Analysis</h4>
                      <p className="text-sm text-[#D1D5DB]">Complete mapping of frontend, backend, database, hosting infrastructure, and third-party dependencies from observable signals.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#1E3A5F] p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 text-[#22D3EE] mt-1">
                      <FileWarning className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Red Flag Detection</h4>
                      <p className="text-sm text-[#D1D5DB]">Identification of critical issues with severity ratings and specific recommendations for remediation or further investigation.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#1E3A5F] p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 text-[#22D3EE] mt-1">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Security & Compliance Signals</h4>
                      <p className="text-sm text-[#D1D5DB]">Evaluation of security practices including SSL implementation, header configurations, and vulnerability exposure assessment.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#1E3A5F] p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 text-[#22D3EE] mt-1">
                      <GitBranch className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Technical Velocity Analysis</h4>
                      <p className="text-sm text-[#D1D5DB]">Assessment of development activity, deployment infrastructure, and indicators of engineering team efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative bg-[#1E3A5F] rounded-xl shadow-2xl p-6 max-w-md">
                <div className="absolute -right-4 -top-4 bg-[#22D3EE] rounded-full p-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <div className="pb-4 border-b border-[#0A1D36]">
                  <h3 className="text-xl font-bold">Technology Health Report</h3>
                  <p className="text-[#D1D5DB] text-sm">SaaSCo</p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-xs text-[#D1D5DB]">Verdict: <span className="text-green-400">✅ No critical risks</span></div>
                    <div className="text-xs text-[#D1D5DB]">Confidence: <span className="text-white font-medium">High</span></div>
                  </div>
                </div>
                
                <div className="py-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-[#D1D5DB]">Tech Health Score</span>
                    <span className="font-bold text-[#22D3EE]">7.8/10</span>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                    <div className="bg-[#0A1D36] rounded-full h-2">
                      <div className="bg-[#22D3EE] h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="text-sm font-medium mb-2">Stack Overview</div>
                    <div className="flex justify-between text-xs text-[#D1D5DB]">
                      <span>Frontend:</span>
                      <span>React 16.8, Bootstrap 4</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#D1D5DB]">
                      <span>Backend:</span>
                      <span>Node.js, Express</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#D1D5DB]">
                      <span>Database:</span>
                      <span>MongoDB</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#D1D5DB]">
                      <span>Hosting:</span>
                      <span>Vercel + Cloudflare</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium mb-2">Top Concerns</div>
                    <div className="bg-[#0A1D36]/80 p-2 rounded text-xs text-[#D1D5DB] flex items-start">
                      <span className="text-amber-400 mr-2">⚠️</span>
                      <span>Monolithic architecture may limit scaling</span>
                    </div>
                    <div className="bg-[#0A1D36]/80 p-2 rounded text-xs text-[#D1D5DB] flex items-start">
                      <span className="text-amber-400 mr-2">⚠️</span>
                      <span>Outdated React version (16.8 vs current 18.2)</span>
                    </div>
                    <div className="bg-[#0A1D36]/80 p-2 rounded text-xs text-[#D1D5DB] flex items-start">
                      <span className="text-amber-400 mr-2">⚠️</span>
                      <span>No continuous deployment evidence</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A1D36]/50 p-3 rounded-lg mt-4 text-xs text-center text-[#D1D5DB]">
                  Reviewed by Senior Technical Advisor on 05/15/2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#0A1D36]">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a tech deal on your radar?
          </h2>
          <p className="text-xl text-[#D1D5DB] mb-8">
            Don't make the call without a red flag scan. Your first scan is free.
          </p>
          <Button className="rounded-full bg-[#22D3EE] text-white hover:bg-[#0891B2] hover:shadow-md transition-all text-lg px-8 py-6 w-full md:w-auto">
            Get your Tech Health Score <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-[#D1D5DB] mt-4">
            No code access. No delays. Results in 2 hours.
          </p>
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-sm text-[#D1D5DB]">Trusted by VC scouts</div>
            <div className="text-sm text-[#D1D5DB]">PE-backed</div>
            <div className="text-sm text-[#D1D5DB]">M&A approved</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1D36] border-t border-[#1E3A5F] py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 pl-2 md:pl-4">
              <img src="/techscaniq_logo.png" alt="TechScan IQ" className="h-28" />
            </div>
            <div className="text-sm text-[#D1D5DB]">
              © 2025 TechScan IQ. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}