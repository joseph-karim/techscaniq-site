import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Clock, FileWarning, DollarSign, Scan, Rows as Browser, FileCheck } from "lucide-react"
import { TechHealthDashboard } from "./TechHealthDashboard"
import { ReportExcerptCard } from "./ReportExcerptCard"

export function TechScanLandingPage() {
  return (
    <div className="relative min-h-screen bg-brand-white font-ibm text-brand-black">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-brand-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between py-6 px-6">
          <div className="flex items-center">
            <img src="/techscaniq_logo.png" alt="TechScanIQ" className="h-10 md:h-12" />
          </div>
          <div className="flex items-center">
            <Button className="hidden md:inline-flex rounded-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium transition-all">
              Get your Tech Health Score
            </Button>
            <Button className="md:hidden rounded-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 p-2">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-space font-medium leading-tight text-brand-black">
                Diligence, Decoded.
              </h1>
              <p className="text-xl font-ibm text-brand-gunmetal leading-relaxed">
                Decode complex technology environments to support confident capital deployment. AI-powered technical due diligence in under 24 hours.
              </p>
            </div>
            <div className="space-y-6">
              <Button className="rounded-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-lg px-8 py-4 transition-all">
                Get your Tech Health Score <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center text-sm font-ibm text-brand-gunmetal">
                  <Check className="mr-2 h-4 w-4 text-brand-teal" />
                  <span>Reviewed by Technical Advisor</span>
                </div>
                <div className="flex items-center text-sm font-ibm text-brand-gunmetal">
                  <Check className="mr-2 h-4 w-4 text-brand-teal" />
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

      {/* Problem Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-black mb-6">
              Traditional tech diligence doesn't scale.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-white p-8 rounded-lg border border-gray-200 group hover:border-brand-teal transition-all duration-300">
              <div className="bg-brand-teal/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-teal/20 transition-all">
                <Clock className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-space font-medium text-brand-black mb-3">Time Intensive</h3>
              <p className="font-ibm text-brand-gunmetal leading-relaxed">
                Traditional tech audits can take weeks or months, delaying critical investment decisions.
              </p>
            </div>
            <div className="bg-brand-white p-8 rounded-lg border border-gray-200 group hover:border-brand-teal transition-all duration-300">
              <div className="bg-brand-teal/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-teal/20 transition-all">
                <DollarSign className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-space font-medium text-brand-black mb-3">Expensive</h3>
              <p className="font-ibm text-brand-gunmetal leading-relaxed">
                Engineering talent is costly. Technical due diligence can run into tens of thousands of dollars.
              </p>
            </div>
            <div className="bg-brand-white p-8 rounded-lg border border-gray-200 group hover:border-brand-teal transition-all duration-300">
              <div className="bg-brand-teal/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-teal/20 transition-all">
                <FileWarning className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-space font-medium text-brand-black mb-3">High Stress</h3>
              <p className="font-ibm text-brand-gunmetal leading-relaxed">
                Extensive reviews create pressure on both investors and target companies, straining relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-black mb-6">
              From blind spots to bulletproof insights — in 4 simple steps.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Browser className="h-8 w-8 text-brand-teal" />,
                title: "Connect",
                description: "Point us to your repository or deployment URL"
              },
              {
                icon: <Scan className="h-8 w-8 text-brand-teal" />,
                title: "Scan",
                description: "Our system automatically analyzes tech stack and architecture"
              },
              {
                icon: <FileCheck className="h-8 w-8 text-brand-teal" />,
                title: "Review",
                description: "A technical advisor validates findings and adds context"
              },
              {
                icon: <Check className="h-8 w-8 text-brand-teal" />,
                title: "Decide",
                description: "Get clear, actionable insights for confident decisions"
              }
            ].map((step, index) => (
              <div key={index} className="bg-brand-white p-8 rounded-lg border border-gray-200 group hover:border-brand-teal transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-brand-teal/10 group-hover:bg-brand-teal text-brand-teal group-hover:text-brand-white w-10 h-10 rounded-full flex items-center justify-center font-space font-medium mr-4 transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="bg-brand-teal/10 p-2 rounded-lg group-hover:bg-brand-teal/20 transition-all">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-space font-medium text-brand-black mb-3">{step.title}</h3>
                <p className="font-ibm text-brand-gunmetal leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-black">
                  Engineered for LP scrutiny.
                </h2>
                <p className="text-xl font-ibm text-brand-gunmetal leading-relaxed">
                  TechScanIQ delivers thorough, objective assessments that satisfy even the most diligent limited partners. Our reports provide comprehensive technical validation needed for investment confidence and proper due diligence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-brand-white p-6 rounded-lg border border-gray-200 hover:border-brand-teal transition-all duration-300">
                  <h4 className="font-space font-medium text-brand-black mb-3">Executive Summary with Confidence Index</h4>
                  <p className="font-ibm text-brand-gunmetal leading-relaxed">Get the answer fast — with nuance. Clear go/no-go verdict, Tech Health Score (1–10), and a Confidence Index. Highlights top red flags and suggests next steps for validation.</p>
                </div>

                <div className="bg-brand-white p-6 rounded-lg border border-gray-200 hover:border-brand-teal transition-all duration-300">
                  <h4 className="font-space font-medium text-brand-black mb-3">Full-Stack Mapping & Infrastructure</h4>
                  <p className="font-ibm text-brand-gunmetal leading-relaxed">Know exactly what you're investing in. Maps frontend frameworks, backend stack, database tech, hosting layer, CDN, CI/CD signals, and build tools — inferred directly from code and traffic.</p>
                </div>

                <div className="bg-brand-white p-6 rounded-lg border border-gray-200 hover:border-brand-teal transition-all duration-300">
                  <h4 className="font-space font-medium text-brand-black mb-3">Red Flag Risk Matrix</h4>
                  <p className="font-ibm text-brand-gunmetal leading-relaxed">Silent killers, surfaced. Flags technical fragility, poor DevOps discipline, risky architecture, outdated frameworks, or insecure code patterns — each with severity and suggested investor questions.</p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <ReportExcerptCard />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-white">
              Ready to decode your next investment?
            </h2>
            <p className="text-xl font-ibm text-gray-300 leading-relaxed">
              Join PE, VC, and M&A teams who trust TechScanIQ for confident capital deployment.
            </p>
            <div className="space-y-4">
              <Button className="rounded-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-lg px-8 py-4 transition-all">
                Start Your First Scan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm font-ibm text-gray-400">First scan is free • Results in under 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/techscaniq_logo.png" alt="TechScanIQ" className="h-8" />
            </div>
            <p className="font-ibm text-brand-gunmetal text-sm">
              © 2025 TechScanIQ. Diligence, Decoded.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}