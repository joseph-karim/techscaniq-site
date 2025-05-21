import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Clock, FileWarning, DollarSign, Scan, Rows as Browser, FileCheck } from "lucide-react"
import { AnimatedBackground } from "./animated-background"
import { TechHealthDashboard } from "./TechHealthDashboard"
import { ReportExcerptCard } from "./ReportExcerptCard"
import techscaniqLogo from "@/assets/techscaniq_logo.png"

export function TechScanLandingPage() {
  return (
    <div className="relative min-h-screen bg-[#00142c] font-sans text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md transition-all">
        <div className="container mx-auto flex items-center justify-between py-6">
          <div className="flex items-center pl-2 md:pl-4">
            <img src={techscaniqLogo} alt="TechScan IQ" className="h-28 md:h-32" />
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
                <DollarSign className="h-8 w-8 text-[#22D3EE]" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineered for LP scrutiny.</h2>
              <p className="text-[#D1D5DB] text-lg mb-8">
                TechScan IQ delivers thorough, objective assessments that satisfy even the most diligent limited partners. Our reports provide comprehensive technical validation needed for investment confidence and proper due diligence.
              </p>

              <div className="space-y-6">
                <div className="bg-[#12263A] p-5 rounded-lg border border-[#1E3A5F] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-[#22D3EE] mb-2 font-bold">Executive Summary with Confidence Index</h4>
                  <p className="text-[#D1D5DB]">Get the answer fast — with nuance. Clear go/no-go verdict, Tech Health Score (1–10), and a Confidence Index. Highlights top red flags and suggests next steps for validation.</p>
                </div>

                <div className="bg-[#12263A] p-5 rounded-lg border border-[#1E3A5F] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-[#22D3EE] mb-2 font-bold">Full-Stack Mapping & Infra Footprint</h4>
                  <p className="text-[#D1D5DB]">Know exactly what you're investing in. Maps frontend frameworks, backend stack, database tech, hosting layer, CDN, CI/CD signals, and build tools — inferred directly from code and traffic.</p>
                </div>

                <div className="bg-[#12263A] p-5 rounded-lg border border-[#1E3A5F] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-[#22D3EE] mb-2 font-bold">Red Flag Risk Matrix</h4>
                  <p className="text-[#D1D5DB]">Silent killers, surfaced. Flags technical fragility, poor DevOps discipline, risky architecture, outdated frameworks, or insecure code patterns — each with severity and suggested investor questions.</p>
                </div>

                <div className="bg-[#12263A] p-5 rounded-lg border border-[#1E3A5F] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-[#22D3EE] mb-2 font-bold">Security & Vulnerability Profile</h4>
                  <p className="text-[#D1D5DB]">Catch red flags before they hit your portfolio. Analyzes SSL, security headers, vulnerability exposure, open endpoints, and hardcoded tokens. Flags lack of error tracking or session security.</p>
                </div>

                <div className="bg-[#12263A] p-5 rounded-lg border border-[#1E3A5F] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-[#22D3EE] mb-2 font-bold">DevOps & Technical Velocity Tracker</h4>
                  <p className="text-[#D1D5DB]">Gauge team speed, reliability, and maturity. Tracks update frequency, deployment pipelines, GitHub/CI tools, and signs of engineering throughput. Reveals whether this team ships like amateurs or pros.</p>
                </div>

                <div className="bg-[#12263A] p-5 rounded-lg border border-[#1E3A5F] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-[#22D3EE] mb-2 font-bold">Vendor Dependencies & SaaS Stack Risk</h4>
                  <p className="text-[#D1D5DB]">What are they leaning on — and is it stable? Full inventory of third-party services and SDKs: Auth0, Stripe, Segment, Intercom, Sentry, etc. Flags outdated libraries, deprecated scripts, and overreliance on fragile tools.</p>
                </div>

                <div className="bg-[#12263A] p-5 rounded-lg border border-[#1E3A5F] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-[#22D3EE] mb-2 font-bold">MarTech & Product Analytics Maturity</h4>
                  <p className="text-[#D1D5DB]">Data-driven or flying blind? Detects analytics frameworks (GA, Segment, Mixpanel), tag managers, event tracking setups, and A/B testing infrastructure. Indicates how well the team measures what matters.</p>
                </div>

                <div className="bg-[#12263A] p-5 rounded-lg border border-[#1E3A5F] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-[#22D3EE] mb-2 font-bold">Product-Led Growth Infrastructure Readiness</h4>
                  <p className="text-[#D1D5DB]">Is this SaaS built for self-serve scale? Scans for signs of PLG-friendly systems: in-app onboarding, chat support, self-signup, Appcues, Pendo, or Intercom usage. Flags friction or missing pieces.</p>
                </div>

                <div className="bg-[#12263A] p-5 rounded-lg border border-[#1E3A5F] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="text-[#22D3EE] mb-2 font-bold">Privacy, Compliance & Data Hygiene</h4>
                  <p className="text-[#D1D5DB]">Can this product handle real scrutiny? Scans for visible PII leaks, non-secure cookies, lack of privacy policy links, and misuse of local storage/session storage. Flags lack of GDPR/CCPA alignment or poor consent management.</p>
                </div>
              </div>
            </div>

            <ReportExcerptCard />
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
              <img src={techscaniqLogo} alt="TechScan IQ" className="h-28" />
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