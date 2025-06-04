import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Scan, FileCheck, Shield, Users, Target } from "lucide-react"
import { TechHealthDashboard } from "./TechHealthDashboard"

export function TechScanLandingPage() {
  return (
    <div className="relative min-h-screen bg-brand-black font-ibm text-brand-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-brand-black/95 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto flex items-center justify-between py-6 px-6">
          <div className="flex items-center">
            <img src="/techscaniq_logo.png" alt="TechScanIQ" className="h-10 md:h-12" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex rounded-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-white font-space font-medium transition-all">
              See How We Score
            </Button>
            <Button className="rounded-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium transition-all">
              Run a Sample Scan <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-space font-medium leading-tight text-brand-white">
                Diligence, Decoded.
              </h1>
              <h2 className="text-2xl md:text-3xl font-space font-normal text-gray-300 leading-relaxed">
                See if the tech fits your thesis in 48 hours, not weeks.
              </h2>
              <p className="text-xl font-ibm text-gray-300 leading-relaxed">
                Every software deal hides a truth: the code either accelerates your returns or kills them. TechScanIQ reveals which with a thesis-weighted score, senior engineer verification, and evidence you can defend to any IC.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-lg px-8 py-4 transition-all">
                  Run a Sample Scan <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-white font-space font-medium text-lg px-8 py-4 transition-all">
                  See How We Score
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center text-sm font-ibm text-gray-300">
                  <Check className="mr-2 h-4 w-4 text-brand-teal" />
                  <span>Senior Engineer Verification</span>
                </div>
                <div className="flex items-center text-sm font-ibm text-gray-300">
                  <Check className="mr-2 h-4 w-4 text-brand-teal" />
                  <span>48-Hour Turnaround</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <TechHealthDashboard />
          </div>
        </div>
      </section>

      {/* Problem Comparison Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-white mb-6">
              The Problem With Traditional Diligence
            </h2>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block bg-brand-gunmetal rounded-lg border border-gray-600 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-6 px-8 font-space font-medium text-brand-white">The Old Way</th>
                  <th className="text-left py-6 px-8 font-space font-medium text-brand-teal">TechScanIQ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-4 px-8 font-ibm text-gray-300">3-week consultant engagement at $25K+</td>
                  <td className="py-4 px-8 font-ibm text-brand-white">48-hour flat-fee report</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 px-8 font-ibm text-gray-300">Generic technical checklist</td>
                  <td className="py-4 px-8 font-ibm text-brand-white">Thesis-weighted scoring</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 px-8 font-ibm text-gray-300">Black-box findings you can't verify</td>
                  <td className="py-4 px-8 font-ibm text-brand-white">Every risk linked to source evidence</td>
                </tr>
                <tr>
                  <td className="py-4 px-8 font-ibm text-gray-300">Junior analyst guesswork</td>
                  <td className="py-4 px-8 font-ibm text-brand-white">Senior engineer sign-off</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-8">
            <div className="bg-brand-gunmetal p-6 rounded-lg border border-gray-600">
              <h3 className="font-space font-medium text-brand-white mb-4">The Old Way</h3>
              <ul className="space-y-3 font-ibm text-gray-300">
                <li>• 3-week consultant engagement at $25K+</li>
                <li>• Generic technical checklist</li>
                <li>• Black-box findings you can't verify</li>
                <li>• Junior analyst guesswork</li>
              </ul>
            </div>
            <div className="bg-brand-gunmetal p-6 rounded-lg border border-brand-teal">
              <h3 className="font-space font-medium text-brand-teal mb-4">TechScanIQ</h3>
              <ul className="space-y-3 font-ibm text-brand-white">
                <li>• 48-hour flat-fee report</li>
                <li>• Thesis-weighted scoring</li>
                <li>• Every risk linked to source evidence</li>
                <li>• Senior engineer sign-off</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-white mb-6">
              Your Diligence Journey, Simplified
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-gunmetal p-8 rounded-lg border border-gray-600 group hover:border-brand-teal transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-brand-teal/10 group-hover:bg-brand-teal text-brand-teal group-hover:text-brand-white w-10 h-10 rounded-full flex items-center justify-center font-space font-medium mr-4 transition-all duration-300">
                  1
                </div>
                <div className="bg-brand-teal/10 p-2 rounded-lg group-hover:bg-brand-teal/20 transition-all">
                  <Target className="h-8 w-8 text-brand-teal" />
                </div>
              </div>
              <h3 className="text-xl font-space font-medium text-brand-white mb-3">Define Your Thesis</h3>
              <p className="font-ibm text-gray-300 leading-relaxed">
                Select Growth or Efficiency focus. Our algorithm adjusts risk weights to match your investment strategy.
              </p>
            </div>
            
            <div className="bg-brand-gunmetal p-8 rounded-lg border border-gray-600 group hover:border-brand-teal transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-brand-teal/10 group-hover:bg-brand-teal text-brand-teal group-hover:text-brand-white w-10 h-10 rounded-full flex items-center justify-center font-space font-medium mr-4 transition-all duration-300">
                  2
                </div>
                <div className="bg-brand-teal/10 p-2 rounded-lg group-hover:bg-brand-teal/20 transition-all">
                  <Shield className="h-8 w-8 text-brand-teal" />
                </div>
              </div>
              <h3 className="text-xl font-space font-medium text-brand-white mb-3">Upload Securely</h3>
              <p className="font-ibm text-gray-300 leading-relaxed">
                Drop your repo ZIP, data room link, or public URL. AES-256 encryption. NDA included. Auto-purge after 30 days.
              </p>
            </div>
            
            <div className="bg-brand-gunmetal p-8 rounded-lg border border-gray-600 group hover:border-brand-teal transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-brand-teal/10 group-hover:bg-brand-teal text-brand-teal group-hover:text-brand-white w-10 h-10 rounded-full flex items-center justify-center font-space font-medium mr-4 transition-all duration-300">
                  3
                </div>
                <div className="bg-brand-teal/10 p-2 rounded-lg group-hover:bg-brand-teal/20 transition-all">
                  <FileCheck className="h-8 w-8 text-brand-teal" />
                </div>
              </div>
              <h3 className="text-xl font-space font-medium text-brand-white mb-3">Get Actionable Intelligence</h3>
              <p className="font-ibm text-gray-300 leading-relaxed">
                Receive your Tech Health Score, ranked risks with evidence links, and export-ready documentation for your IC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-white mb-6">
              Built for Investment Committee Scrutiny
            </h2>
            <p className="text-xl font-ibm text-gray-300 leading-relaxed max-w-3xl mx-auto">
              A defensible technical assessment that stands up to partner questions and lender requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-gunmetal p-6 rounded-lg border border-gray-600 hover:border-brand-teal transition-all duration-300">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-brand-teal" />
              </div>
              <h4 className="font-space font-medium text-brand-white mb-3">Secure Handling</h4>
              <p className="font-ibm text-gray-300 leading-relaxed">Single-tenant containers. Encrypted transit and storage. Automatic data deletion.</p>
            </div>

            <div className="bg-brand-gunmetal p-6 rounded-lg border border-gray-600 hover:border-brand-teal transition-all duration-300">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-brand-teal" />
              </div>
              <h4 className="font-space font-medium text-brand-white mb-3">AI + Human Verification</h4>
              <p className="font-ibm text-gray-300 leading-relaxed">200+ automated checks validated by senior engineers who stake their reputation on every report.</p>
            </div>

            <div className="bg-brand-gunmetal p-6 rounded-lg border border-gray-600 hover:border-brand-teal transition-all duration-300">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-brand-teal" />
              </div>
              <h4 className="font-space font-medium text-brand-white mb-3">Thesis Alignment</h4>
              <p className="font-ibm text-gray-300 leading-relaxed">Your growth vs. efficiency priorities drive our scoring algorithm, not generic best practices.</p>
            </div>

            <div className="bg-brand-gunmetal p-6 rounded-lg border border-gray-600 hover:border-brand-teal transition-all duration-300">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Scan className="h-6 w-6 text-brand-teal" />
              </div>
              <h4 className="font-space font-medium text-brand-white mb-3">Evidence Trail</h4>
              <p className="font-ibm text-gray-300 leading-relaxed">Click any finding to see the exact code line, dependency conflict, or architectural issue.</p>
            </div>

            <div className="bg-brand-gunmetal p-6 rounded-lg border border-gray-600 hover:border-brand-teal transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-brand-teal" />
              </div>
              <h4 className="font-space font-medium text-brand-white mb-3">Professional Documentation</h4>
              <p className="font-ibm text-gray-300 leading-relaxed">Timestamped PDF and XLSX exports. API integration with DealRoom and other platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-white mb-6">
              Choose Your Depth
            </h2>
            <p className="text-xl font-ibm text-gray-300">
              Both deliver thesis-weighted scoring and expert verification.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-brand-gunmetal p-8 rounded-lg border border-gray-600 hover:border-brand-teal transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-space font-medium text-brand-white mb-2">Public Scan</h3>
                <p className="font-ibm text-gray-300 mb-4">Early-stage evaluation</p>
                <div className="text-3xl font-space font-medium text-brand-white mb-2">$499</div>
                <p className="font-ibm text-gray-300 text-sm">24 hours</p>
              </div>
              <ul className="space-y-3 font-ibm text-gray-300 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Open-source risks
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  CVE analysis
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Architecture signals
                </li>
              </ul>
              <Button className="w-full rounded-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium">
                Start Public Scan
              </Button>
            </div>

            <div className="bg-brand-gunmetal p-8 rounded-lg border-2 border-brand-teal relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-teal text-brand-white px-4 py-1 rounded-full text-sm font-space font-medium">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-space font-medium text-brand-white mb-2">Deep Scan</h3>
                <p className="font-ibm text-gray-300 mb-4">Final diligence with repo access</p>
                <div className="text-3xl font-space font-medium text-brand-white mb-2">Custom Quote</div>
                <p className="font-ibm text-gray-300 text-sm">48 hours</p>
              </div>
              <ul className="space-y-3 font-ibm text-gray-300 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Full code quality analysis
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Scalability assessment
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Complete security audit
                </li>
              </ul>
              <Button className="w-full rounded-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium">
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-white">
              Ready to decode your next investment?
            </h2>
            <p className="text-xl font-ibm text-gray-300 leading-relaxed">
              Stop betting on black-box code. Get the evidence you need to defend your decisions.
            </p>
            <div className="space-y-4">
              <Button className="rounded-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-lg px-8 py-4 transition-all">
                Start Your First Scan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm font-ibm text-gray-400">Thesis-weighted scoring • Expert verification • 48-hour delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="flex items-center">
              <img src="/techscaniq_logo.png" alt="TechScanIQ" className="h-8" />
            </div>
            <div>
              <h5 className="font-space font-medium text-brand-white mb-3">Resources</h5>
              <ul className="space-y-2 font-ibm text-gray-300 text-sm">
                <li><a href="#" className="hover:text-brand-teal transition-colors">Scoring Methodology</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Thesis Templates</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Security & Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700">
            <p className="font-ibm text-gray-300 text-sm">
              © 2025 TechScanIQ. Diligence, Decoded.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}