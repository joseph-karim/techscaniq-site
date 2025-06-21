import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronDown, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function TechScanLandingPage() {
  const [activeUseCase, setActiveUseCase] = useState(0)

  const useCases = [
    {
      title: "FOR PE/VC",
      icon: "📊",
      discover: "Hidden debt",
      action: "Better valuations"
    },
    {
      title: "FOR SALES LEADERS",
      icon: "🎯",
      discover: "Weak spots",
      action: "Win deals faster"
    },
    {
      title: "FOR CORP DEV",
      icon: "🏢",
      discover: "True value",
      action: "Smart structure"
    }
  ]

  return (
    <div className="min-h-screen bg-brand-white text-brand-black">
      {/* Navigation Bar - Fixed */}
      <header className="fixed top-0 z-50 w-full bg-brand-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between h-20 px-6">
          <div className="flex items-center">
            <img src="/techscaniq_logo.png" alt="TechScanIQ" className="h-10" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Technical DD</a>
            <a href="#" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Market Intel</a>
            <a href="#" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Pricing</a>
            <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium">
              Start Scan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-[56px] font-space font-medium leading-tight text-brand-black">
            SEE WHAT OTHERS CAN'T. IN 48 HOURS.
          </h1>
          <p className="text-2xl font-ibm text-brand-gunmetal">
            Technical truth + Market reality = Decisions that win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white font-space font-medium text-lg px-8 py-6">
              View Sample Report
            </Button>
            <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-lg px-10 py-6">
              Start Intelligence Scan <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Visual: Split-Screen Animation */}
        <div className="w-full max-w-6xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-brand-black rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-brand-gunmetal p-8 border-r border-brand-black">
              <h3 className="font-space font-medium text-brand-white mb-4">TECHNICAL INTELLIGENCE</h3>
              <div className="bg-brand-black/20 rounded p-4 font-mono text-sm text-brand-teal">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-red-400">●</span>
                    <span className="ml-2 text-gray-300">Database at 89% capacity</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400">●</span>
                    <span className="ml-2 text-gray-300">Clean architecture patterns</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">●</span>
                    <span className="ml-2 text-gray-300">Legacy dependencies detected</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-brand-gunmetal p-8">
              <h3 className="font-space font-medium text-brand-white mb-4">MARKET INTELLIGENCE</h3>
              <div className="bg-brand-black/20 rounded p-4">
                <div className="flex justify-center items-center h-32">
                  <div className="relative">
                    <div className="w-20 h-20 bg-brand-teal/20 rounded-full flex items-center justify-center">
                      <span className="text-brand-teal font-space">67%</span>
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-400/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400/20 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
                <p className="text-center text-gray-300 text-sm mt-4">Revenue concentration risk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ChevronDown className="animate-bounce text-brand-gunmetal mt-8" size={32} />
      </section>

      {/* Problem/Solution Section */}
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <h2 className="text-4xl font-space font-medium text-brand-black">
                THE PROBLEM WE SOLVE
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl font-ibm text-brand-gunmetal">
                  Every deal has two sides:<br />
                  What's under the hood + Who's buying it.
                </p>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="font-ibm text-lg text-brand-gunmetal mb-4">
                    You see: <span className="font-medium text-brand-black">"AI-powered platform"</span>
                  </p>
                  <p className="font-space font-medium text-lg text-brand-black mb-3">We reveal:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2">□</span>
                      <span className="font-ibm text-brand-gunmetal">Regex wrapped in marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2">□</span>
                      <span className="font-ibm text-brand-gunmetal">Architecture at 80% capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2">□</span>
                      <span className="font-ibm text-brand-gunmetal">67% revenue from one customer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2">□</span>
                      <span className="font-ibm text-brand-gunmetal">Losing deals to CompetitorX</span>
                    </li>
                  </ul>
                </div>

                <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-lg px-8 py-6">
                  Start 48-Hour Scan <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 300 400" className="w-full max-w-sm">
                  {/* Iceberg */}
                  <polygon points="150,50 100,150 200,150" fill="#f3f4f6" stroke="#2C2C2E" strokeWidth="2"/>
                  <polygon points="100,150 50,350 250,350 200,150" fill="#00C2B2" fillOpacity="0.2" stroke="#00C2B2" strokeWidth="2"/>
                  
                  {/* Water line */}
                  <line x1="0" y1="150" x2="300" y2="150" stroke="#00C2B2" strokeWidth="2" strokeDasharray="5,5"/>
                  
                  {/* Labels */}
                  <text x="150" y="100" textAnchor="middle" className="fill-brand-gunmetal font-ibm text-sm">
                    Pitch deck claims
                  </text>
                  <text x="150" y="250" textAnchor="middle" className="fill-brand-teal font-ibm text-sm">
                    Technical debt,
                  </text>
                  <text x="150" y="270" textAnchor="middle" className="fill-brand-teal font-ibm text-sm">
                    customer churn,
                  </text>
                  <text x="150" y="290" textAnchor="middle" className="fill-brand-teal font-ibm text-sm">
                    team issues
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Intelligence Dashboard Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-space font-medium text-center text-brand-black mb-16">
            ONE PLATFORM. COMPLETE INTELLIGENCE.
          </h2>

          {/* Interactive Dashboard Mock */}
          <div className="max-w-6xl mx-auto bg-brand-white border-2 border-brand-gunmetal rounded-lg shadow-xl overflow-hidden">
            <div className="bg-brand-gunmetal p-4 flex justify-between items-center">
              <h3 className="font-space font-medium text-brand-white">TechScan IQ Report: SampleCo</h3>
              <Button variant="ghost" className="text-brand-white hover:bg-brand-white/10">
                Export PDF <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="p-8">
              {/* Scores Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <h4 className="font-space font-medium text-brand-gunmetal mb-4">TECH HEALTH SCORE</h4>
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="#00C2B2" strokeWidth="12" fill="none"
                        strokeDasharray={`${67 * 3.51} 351.86`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-space font-medium">67</span>
                    </div>
                  </div>
                  <p className="font-ibm text-brand-gunmetal mt-2">Fair Tech</p>
                </div>

                <div className="text-center">
                  <h4 className="font-space font-medium text-brand-gunmetal mb-4">MARKET POSITION</h4>
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="#ef4444" strokeWidth="12" fill="none"
                        strokeDasharray={`${42 * 3.51} 351.86`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-space font-medium">42</span>
                    </div>
                  </div>
                  <p className="font-ibm text-brand-gunmetal mt-2">Weak Position</p>
                </div>

                <div className="text-center">
                  <h4 className="font-space font-medium text-brand-gunmetal mb-4">COMBINED RISK</h4>
                  <div className="bg-red-100 border-2 border-red-400 rounded-lg p-8">
                    <span className="text-2xl font-space font-medium text-red-600">⚠ HIGH</span>
                    <p className="font-ibm text-brand-gunmetal mt-2">Proceed with Caution</p>
                  </div>
                </div>
              </div>

              {/* Findings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-space font-medium text-brand-black mb-4">TECHNICAL FINDINGS (4)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3">⚫</span>
                      <span className="font-ibm">Database at 89% capacity</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-500 mr-3">🟡</span>
                      <span className="font-ibm">No disaster recovery</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">🟢</span>
                      <span className="font-ibm">Clean code architecture</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">🟢</span>
                      <span className="font-ibm">Active development team</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-space font-medium text-brand-black mb-4">MARKET INTELLIGENCE (3)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3">⚫</span>
                      <span className="font-ibm">Top customer reviewing RFP</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-500 mr-3">🟡</span>
                      <span className="font-ibm">Competitor launched feature</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">🟢</span>
                      <span className="font-ibm">Strong SMB penetration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-brand-gunmetal font-ibm mt-8">
            [Hover for live interaction]
          </p>
        </div>
      </section>

      {/* Evidence Deep-Dive Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-space font-medium text-center text-brand-black mb-16">
            EVERY CLAIM. FULLY CITED. ZERO FLUFF.
          </h2>

          <div className="max-w-4xl mx-auto bg-brand-white border-2 border-brand-gunmetal rounded-lg overflow-hidden">
            <div className="bg-red-100 p-4 border-b-2 border-brand-gunmetal">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-space font-medium text-brand-black">FINDING: Authentication Vulnerability</h3>
                  <p className="font-ibm text-brand-gunmetal mt-1">Risk: <span className="text-red-600 font-medium">⚫ HIGH</span> | Impact: User takeover possible</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-6">
                <div className="text-gray-600 mb-2">// File: /api/v2/auth/token.js:142-156</div>
                <div className="space-y-1">
                  <div>function validateToken(token) {"{"}</div>
                  <div className="pl-4">
                    <span className="text-red-600">return token.length {">"} 0;</span>
                    <span className="text-red-600 ml-4">// ← VULNERABILITY HERE</span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="font-ibm text-brand-gunmetal">EVIDENCE:</span>
                <a href="#" className="text-brand-teal hover:underline font-ibm">[View full code]</a>
                <a href="#" className="text-brand-teal hover:underline font-ibm">[Security scan]</a>
                <a href="#" className="text-brand-teal hover:underline font-ibm">[OWASP reference]</a>
              </div>
              <p className="font-ibm text-brand-gunmetal mt-4">
                ENGINEER NOTE: "Critical fix needed before enterprise deals"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Carousel Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-space font-medium text-center text-brand-black mb-16">
            ONE PLATFORM. MULTIPLE WINS.
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${activeUseCase * 100}%)` }}>
                  {useCases.map((useCase, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-brand-white border-2 border-brand-gunmetal rounded-lg p-8 text-center">
                        <h3 className="font-space font-medium text-2xl text-brand-black mb-4">{useCase.title}</h3>
                        <div className="text-6xl mb-6">{useCase.icon}</div>
                        <div className="space-y-4">
                          <div>
                            <p className="font-ibm text-brand-gunmetal">Discover:</p>
                            <p className="font-space font-medium text-xl text-brand-black">{useCase.discover}</p>
                          </div>
                          <div>
                            <p className="font-ibm text-brand-gunmetal">Action:</p>
                            <p className="font-space font-medium text-xl text-brand-black">{useCase.action}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <button
                onClick={() => setActiveUseCase(Math.max(0, activeUseCase - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-brand-white border-2 border-brand-gunmetal rounded-full p-2 hover:bg-gray-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setActiveUseCase(Math.min(useCases.length - 1, activeUseCase + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-brand-white border-2 border-brand-gunmetal rounded-full p-2 hover:bg-gray-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <p className="text-center font-ibm text-brand-gunmetal mt-8">
              ← Swipe or click to explore →
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-space font-medium text-center text-brand-black mb-16">
            THE TECHSCAN IQ DIFFERENCE
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-2 border-brand-gunmetal">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-brand-gunmetal p-4 text-left font-space font-medium"></th>
                  <th className="border border-brand-gunmetal p-4 text-center font-space font-medium">Traditional DD</th>
                  <th className="border border-brand-gunmetal p-4 text-center font-space font-medium">Market Research Firm</th>
                  <th className="border border-brand-gunmetal p-4 text-center font-space font-medium bg-brand-teal/10">TechScan IQ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-brand-gunmetal p-4 font-ibm font-medium">Time</td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">2-4 weeks</td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">1-2 weeks</td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm bg-brand-teal/10">
                    <span className="text-brand-teal font-medium">✓</span> 48 hours
                  </td>
                </tr>
                <tr>
                  <td className="border border-brand-gunmetal p-4 font-ibm font-medium">Cost</td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">$50K+</td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">$25K+</td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm bg-brand-teal/10">
                    <span className="text-brand-teal font-medium">✓</span> $7,900
                  </td>
                </tr>
                <tr>
                  <td className="border border-brand-gunmetal p-4 font-ibm font-medium">Technical Depth</td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">
                    <span className="text-brand-teal font-medium">✓</span> Deep
                  </td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">
                    <span className="text-red-500">✗</span> Surface
                  </td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm bg-brand-teal/10">
                    <span className="text-brand-teal font-medium">✓</span> Code-level
                  </td>
                </tr>
                <tr>
                  <td className="border border-brand-gunmetal p-4 font-ibm font-medium">Market Intel</td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">
                    <span className="text-red-500">✗</span> Limited
                  </td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">
                    <span className="text-brand-teal font-medium">✓</span> Broad
                  </td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm bg-brand-teal/10">
                    <span className="text-brand-teal font-medium">✓</span> Targeted
                  </td>
                </tr>
                <tr>
                  <td className="border border-brand-gunmetal p-4 font-ibm font-medium">Evidence Links</td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">
                    <span className="text-red-500">✗</span> PDF only
                  </td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm">
                    <span className="text-red-500">✗</span> Generic
                  </td>
                  <td className="border border-brand-gunmetal p-4 text-center font-ibm bg-brand-teal/10">
                    <span className="text-brand-teal font-medium">✓</span> Every claim
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-space font-medium text-center text-brand-black mb-16">
            SIMPLE. TRANSPARENT. FAST.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-brand-white border-2 border-brand-gunmetal rounded-lg p-8">
              <h3 className="font-space font-medium text-2xl text-brand-black mb-2">TECHNICAL ONLY</h3>
              <div className="text-3xl font-space font-medium text-brand-black mb-6">$4,900</div>
              <ul className="space-y-3 font-ibm text-brand-gunmetal mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Code analysis
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Architecture
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Team velocity
                </li>
              </ul>
              <Button variant="outline" className="w-full border-2 border-brand-gunmetal text-brand-black hover:bg-brand-gunmetal hover:text-brand-white font-space font-medium">
                Select Plan
              </Button>
            </div>

            <div className="bg-brand-white border-2 border-brand-gunmetal rounded-lg p-8">
              <h3 className="font-space font-medium text-2xl text-brand-black mb-2">MARKET ONLY</h3>
              <div className="text-3xl font-space font-medium text-brand-black mb-6">$3,900</div>
              <ul className="space-y-3 font-ibm text-brand-gunmetal mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Customer map
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Competitor
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                  Triggers
                </li>
              </ul>
              <Button variant="outline" className="w-full border-2 border-brand-gunmetal text-brand-black hover:bg-brand-gunmetal hover:text-brand-white font-space font-medium">
                Select Plan
              </Button>
            </div>

            <div className="bg-brand-teal border-2 border-brand-teal rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-white px-4 py-1 rounded-full border-2 border-brand-teal">
                <span className="font-space font-medium text-sm">Save $900</span>
              </div>
              <h3 className="font-space font-medium text-2xl text-brand-white mb-2">COMBINED INTEL PKG</h3>
              <div className="text-3xl font-space font-medium text-brand-white mb-6">$7,900</div>
              <ul className="space-y-3 font-ibm text-brand-white mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-white mr-2 mt-0.5 flex-shrink-0" />
                  Everything
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-white mr-2 mt-0.5 flex-shrink-0" />
                  Priority
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-white mr-2 mt-0.5 flex-shrink-0" />
                  48-hour SLA
                </li>
              </ul>
              <Button className="w-full bg-brand-white text-brand-teal hover:bg-brand-white/90 font-space font-medium">
                Select Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-20 bg-brand-black text-brand-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl font-space font-medium">
              YOUR NEXT MOVE MATTERS.
            </h2>
            <p className="text-xl font-ibm text-gray-300">
              Tomorrow, your competition makes decisions on partial data.<br />
              You won't.
            </p>
            <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-xl px-12 py-6">
              Start 48-Hour Intelligence Scan
            </Button>
            <div className="space-y-2 font-ibm text-gray-300">
              <p>Questions? hello@techscaniq.com</p>
              <p>1-800-TECH-DUE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}