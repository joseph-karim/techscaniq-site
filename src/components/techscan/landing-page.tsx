import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Clock, FileWarning, PhoneOff as MoneyOff, Scan, Rows as Browser, FileCheck, Shield, Activity, Database, GitBranch } from "lucide-react"
import { AnimatedBackground } from "./animated-background"
import { TechHealthDashboard } from "./TechHealthDashboard"

export function TechScanLandingPage() {
  return (
    <div className="relative min-h-screen bg-[#00142c] font-sans text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md transition-all">
        <div className="container mx-auto flex items-center justify-between py-6">
          <div className="flex items-center pl-2 md:pl-4">
            <img src="/techscaniq_logo.png" alt="TechScan IQ" className="h-28 md:h-32" />
          </div>
          <Button className="hidden md:inline-flex rounded-full bg-[#22D3EE] text-white hover:bg-[#0891B2] hover:shadow-md transition-all">
            Get your Tech Health Score
          </Button>
        </div>
      </header>

      {/* Hero Section with Animated Background */}
      <AnimatedBackground className="overflow-hidden">
        <section className="container mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 backdrop-blur-sm bg-[#00142c]/30 p-6 rounded-xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Tech diligence in 2 hours. No engineers needed.
              </h1>
              <p className="text-lg text-white">
                TechScan IQ delivers investor-grade assessments for any tech deal. Get clear insights without disrupting your teams or draining engineering resources.
              </p>
              <div className="pt-4">
                <Button className="rounded-full bg-[#22D3EE] text-white hover:bg-[#0891B2] hover:shadow-md transition-all text-lg px-8 py-6">
                  Get your Tech Health Score <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex gap-4 mt-6">
                  <div className="flex items-center text-sm text-white">
                    <Check className="mr-2 h-4 w-4 text-[#22D3EE]" />
                    <span>Reviewed by Technical Advisor</span>
                  </div>
                  <div className="flex items-center text-sm text-white">
                    <Check className="mr-2 h-4 w-4 text-[#22D3EE]" />
                    <span>First Scan Free</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <TechHealthDashboard />
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Problem Section */}
      <section className="bg-[#12263A] py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Traditional tech diligence doesn't scale.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[#1E3A5F] p-8 rounded-xl transition-transform hover:transform hover:scale-105">
              <div className="bg-[#00142c] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-[#22D3EE]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Time Intensive</h3>
              <p className="text-[#D1D5DB]">
                Traditional tech audits can take weeks or months, delaying critical investment decisions.
              </p>
            </div>
            <div className="bg-[#1E3A5F] p-8 rounded-xl transition-transform hover:transform hover:scale-105">
              <div className="bg-[#00142c] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MoneyOff className="h-8 w-8 text-[#22D3EE]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expensive</h3>
              <p className="text-[#D1D5DB]">
                Engineering talent is costly. Technical due diligence can run into tens of thousands of dollars.
              </p>
            </div>
            <div className="bg-[#1E3A5F] p-8 rounded-xl transition-transform hover:transform hover:scale-105">
              <div className="bg-[#00142c] w-16 h-16 rounded-full flex items-center justify-center mb-6">
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
      <section className="py-16 md:py-24 bg-[#00142c]">
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
              <div key={index} className="bg-[#12263A] p-8 rounded-xl border border-[#1E3A5F] group hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-center mb-6">
                  <div className="bg-[#1E3A5F] group-hover:bg-[#22D3EE]/20 w-10 h-10 rounded-full flex items-center justify-center text-[#22D3EE] font-bold mr-4 transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="bg-[#1E3A5F] p-2 rounded-lg group-hover:bg-[#1E3A5F]/80">
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
      <section className="bg-[#0A1A2F] py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineered for LP scrutiny.</h2>
              <p className="text-[#D1D5DB] text-lg mb-8">
                CodeScan IQ reports are reviewed by technical advisors and formatted for investor-grade clarity — not just AI analysis. Below is a real excerpt from the Scalability & Architecture section.
              </p>
            </div>
            
            <div className="bg-[#12263A] p-6 rounded-xl border border-[#1E3A5F] shadow-lg transition-all hover:shadow-cyan-500/10 font-mono">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="text-yellow-400 mr-2">🔍</span> 
                Scalability & Architecture
              </h3>
              
              <div className="mb-6">
                <div className="bg-[#0A1A2F]/60 p-3 rounded flex items-center">
                  <span className="text-yellow-400 mr-2">⚠️</span>
                  <span className="font-medium">Moderate risk — suitable for current traction, but limited for scale.</span>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="text-yellow-400 mb-2">🧱 Code Structure & Modularity</h4>
                  <ul className="space-y-1 text-gray-300 pl-5">
                    <li>- Monolithic architecture (single JS bundle)</li>
                    <li>- No microservices or containerization</li>
                    <li>- Limited ability to scale features independently</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-yellow-400 mb-2">🕸 API Design & Documentation</h4>
                  <ul className="space-y-1 text-gray-300 pl-5">
                    <li>- RESTful endpoints inferred</li>
                    <li>- Lacks visible documentation</li>
                    <li>- Risk of failure in auth/billing paths</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-yellow-400 mb-2">⚙️ DevOps & Deployment</h4>
                  <ul className="space-y-1 text-gray-300 pl-5">
                    <li>- Only GitHub Actions CI detected</li>
                    <li>- Manual deploy inferred</li>
                    <li>- No rollout strategies observed</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-yellow-400 mb-2">🔧 Infrastructure Flexibility</h4>
                  <ul className="space-y-1 text-gray-300 pl-5">
                    <li>- Hosted on Vercel (speed > control)</li>
                    <li>- No autoscaling/container orchestration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-yellow-400 mb-2">📊 Tech Debt Warning</h4>
                  <ul className="space-y-1 text-gray-300 pl-5">
                    <li>- Bootstrap 4 in use (legacy)</li>
                    <li>- No automated test coverage</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-[#1E3A5F]">
                <h4 className="text-sm font-medium mb-2">🗣 Analyst Commentary:</h4>
                <p className="text-gray-300 italic">
                  "The team has clearly optimized for speed and iteration — but future-proofing is limited..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedBackground className="overflow-hidden">
        <section className="py-16 md:py-20">
          <div className="container mx-auto text-center max-w-3xl backdrop-blur-sm bg-[#00142c]/30 p-10 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Have a tech deal on your radar?
            </h2>
            <p className="text-xl text-white mb-8">
              Don't make the call without a red flag scan. Your first scan is free.
            </p>
            <Button className="rounded-full bg-[#22D3EE] text-white hover:bg-[#0891B2] hover:shadow-md transition-all text-lg px-8 py-6 w-full md:w-auto">
              Get your Tech Health Score <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-white mt-4">
              No code access. No delays. Results in 2 hours.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
              <div className="text-sm text-white bg-[#1E3A5F]/50 px-4 py-2 rounded-full backdrop-blur-sm">Trusted by VC scouts</div>
              <div className="text-sm text-white bg-[#1E3A5F]/50 px-4 py-2 rounded-full backdrop-blur-sm">PE-backed</div>
              <div className="text-sm text-white bg-[#1E3A5F]/50 px-4 py-2 rounded-full backdrop-blur-sm">M&A approved</div>
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Footer */}
      <footer className="bg-[#00142c] border-t border-[#1E3A5F] py-8">
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