import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronDown, TrendingUp, Building2, AlertCircle, FileCode, Target, Brain, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function TechScanLandingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="min-h-screen bg-brand-white text-brand-black overflow-x-hidden">
      {/* Navigation Bar */}
      <motion.header 
        className="fixed top-0 z-50 w-full bg-brand-white/90 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto flex items-center justify-between h-20 px-6">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img src="/Tesch_Scan_IQ_Logo_Transparent.png" alt="TechScan IQ" className="h-12" />
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#platform" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Platform</a>
            <a href="#how-it-works" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">How It Works</a>
            <a href="#use-cases" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Use Cases</a>
            <a href="#pricing" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Pricing</a>
            <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium group">
              Start Intelligence Scan
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative">
        <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/5 to-transparent" />
        </motion.div>
        
        <motion.div 
          className="max-w-5xl mx-auto text-center space-y-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-space font-medium leading-tight text-brand-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DEEP TECH INTELLIGENCE
            <br />
            <span className="text-brand-teal">IN 48 HOURS.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-ibm text-brand-gunmetal max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See what code is really worth.
          </motion.p>
          
          <motion.p 
            className="text-lg font-ibm text-brand-gunmetal max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            AI-powered research system that analyzes technical infrastructure<br />
            and market position for PE investors and enterprise sales teams.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              variant="outline" 
              className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white font-space font-medium text-lg px-10 py-6 group"
            >
              View Sample Report
              <FileCode className="ml-2 h-5 w-5 group-hover:rotate-3 transition-transform" />
            </Button>
            <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-shadow group">
              Start Intelligence Scan
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-brand-gunmetal" size={32} />
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 bg-gray-50" id="platform">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-black mb-6">
              TECHNICAL INTELLIGENCE THAT DRIVES BILLION-DOLLAR DECISIONS
            </h2>
            <p className="text-xl font-ibm text-brand-gunmetal max-w-4xl mx-auto mb-4">
              We analyze any company's website and software from the inside out—revealing the hidden<br />
              technical realities and market opportunities that determine true value.
            </p>
          </motion.div>
          
          {/* What We Analyze */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left side - List */}
                <div className="p-8">
                  <h3 className="font-space text-xl mb-6 text-brand-black">Our AI research system examines:</h3>
                  <div className="space-y-3">
                    {[
                      "Code architecture and scalability limits",
                      "Security vulnerabilities and technical debt",
                      "Market position and customer concentration",
                      "Team capabilities and velocity",
                      "Integration complexity and opportunities"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" />
                        <span className="font-ibm text-brand-gunmetal">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Right side - AI Visual */}
                <div className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/5 p-8 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-brand-teal to-teal-600 rounded-2xl p-8 shadow-2xl"
                      animate={{
                        boxShadow: [
                          "0 20px 50px rgba(0,194,178,0.3)",
                          "0 30px 70px rgba(0,194,178,0.5)",
                          "0 20px 50px rgba(0,194,178,0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="flex items-center justify-center">
                        <Brain className="h-16 w-16 text-white" />
                        <Sparkles className="h-8 w-8 text-white/60 ml-2" />
                      </div>
                      <p className="text-white font-space font-medium mt-4 text-center text-sm">
                        AI INTELLIGENCE<br />ENGINE
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Two Intelligence Products */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-brand-teal" />
                  <h3 className="font-space text-xl">PE Technical Due Diligence</h3>
                </div>
                <p className="font-ibm text-gray-300">Buy companies at the right price</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-brand-teal" />
                  <h3 className="font-space text-xl">Sales Intelligence</h3>
                </div>
                <p className="font-ibm text-gray-300">Win enterprise deals others can't</p>
              </div>
            </div>
            
            <motion.p
              className="text-center text-xl font-space text-brand-black mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Because understanding code isn't just technical—it's strategic.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-black mb-6">
              HOW TECHNICAL ANALYSIS WORKS TODAY
            </h2>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            className="max-w-6xl mx-auto overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-4 font-space text-lg">Traditional DD Firm</th>
                  <th className="text-left p-4 font-space text-lg">Market Research Firm</th>
                  <th className="text-left p-4 font-space text-lg bg-brand-teal/10 border-2 border-brand-teal">TechScan IQ</th>
                </tr>
              </thead>
              <tbody className="font-ibm">
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-600">2-4 weeks</td>
                  <td className="p-4 text-gray-600">1-2 weeks</td>
                  <td className="p-4 font-medium bg-brand-teal/5 border-x-2 border-brand-teal">48 hours</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-600">$50-75K</td>
                  <td className="p-4 text-gray-600">$25-40K</td>
                  <td className="p-4 font-medium bg-brand-teal/5 border-x-2 border-brand-teal">$7,900</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-600">Surface-level findings</td>
                  <td className="p-4 text-gray-600">Generic insights</td>
                  <td className="p-4 font-medium bg-brand-teal/5 border-x-2 border-brand-teal">Deep technical reality</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-600">Partner glimpse</td>
                  <td className="p-4 text-gray-600">Database queries</td>
                  <td className="p-4 font-medium bg-brand-teal/5 border-x-2 border-brand-teal">1,000+ sources analyzed</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-600">PDF summary</td>
                  <td className="p-4 text-gray-600">Market overview</td>
                  <td className="p-4 font-medium bg-brand-teal/5 border-x-2 border-brand-teal">Every claim verified</td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                  <td className="p-4 text-gray-600">Manual process</td>
                  <td className="p-4 text-gray-600">Template reports</td>
                  <td className="p-4 font-medium bg-brand-teal/5 border-x-2 border-b-2 border-brand-teal">AI + expert review</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* What Others Miss */}
          <motion.div
            className="max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="font-space text-2xl mb-6">What others miss, we find:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                  <p className="font-ibm">Database at 89% capacity = Growth ceiling hit</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                  <p className="font-ibm">Legacy architecture = $12M modernization cost</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <p className="font-ibm">No disaster recovery = Enterprise deal blocker</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                  <p className="font-ibm">67% customer concentration = Valuation risk</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-brand-black bg-white hover:bg-white/90 font-space font-medium"
                >
                  See Full Analysis Sample
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specific Capabilities Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-black mb-6">
              INTELLIGENCE THAT CHANGES OUTCOMES
            </h2>
          </motion.div>

          {/* Split Screen Capabilities */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* PE Technical DD Column */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-teal"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-8 w-8 text-brand-teal" />
                  <h3 className="font-space text-2xl text-brand-black">FOR PE TECHNICAL DUE DILIGENCE</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-space text-lg mb-3 text-brand-black">What we uncover:</h4>
                    <div className="space-y-2">
                      {[
                        "Real architecture (not marketing claims)",
                        "Actual scalability limits",
                        "Hidden technical debt costs",
                        "Security risks quantified",
                        "Team strength and flight risk"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="font-ibm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-space text-lg mb-3 text-brand-black">How it impacts deals:</h4>
                    <div className="space-y-2">
                      {[
                        "Negotiate 30-40% better valuations",
                        "Avoid $10M+ surprise costs",
                        "Structure earnouts properly",
                        "Plan integration accurately"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                          <span className="font-ibm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-brand-teal/10 rounded-lg p-4 border border-brand-teal/20">
                    <p className="font-space text-sm mb-1">Real outcomes:</p>
                    <p className="font-ibm text-gray-700">"Found $47M in hidden technical debt"</p>
                    <p className="font-ibm text-gray-700">"Reduced offer by 35% based on findings"</p>
                  </div>
                </div>
              </motion.div>

              {/* Sales Intelligence Column */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-teal"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-brand-teal" />
                  <h3 className="font-space text-2xl text-brand-black">FOR SALES INTELLIGENCE</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-space text-lg mb-3 text-brand-black">What we reveal:</h4>
                    <div className="space-y-2">
                      {[
                        "Technical pain points they can't solve",
                        "Failed modernization attempts",
                        "Gaps your solution fills perfectly",
                        "Budget allocated for your category",
                        "Decision makers and their priorities"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="font-ibm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-space text-lg mb-3 text-brand-black">How it wins deals:</h4>
                    <div className="space-y-2">
                      {[
                        "Skip 3 months of discovery",
                        "Lead with their exact problems",
                        "Know their evaluation criteria",
                        "Bypass generic RFP process"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                          <span className="font-ibm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-brand-teal/10 rounded-lg p-4 border border-brand-teal/20">
                    <p className="font-space text-sm mb-1">Real outcomes:</p>
                    <p className="font-ibm text-gray-700">"Won $2.5M deal in 6 weeks"</p>
                    <p className="font-ibm text-gray-700">"Displaced 10-year incumbent"</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32" id="how-it-works">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-space font-medium text-center text-brand-black mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            FROM QUESTION TO INTELLIGENCE: OUR PROCESS
          </motion.h2>

          {/* Process Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-1">
                  <div className="w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center font-space text-xl font-medium">
                    1
                  </div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="font-space text-2xl mb-2 text-brand-black">YOU PROVIDE THE TARGET</h3>
                  <p className="font-ibm text-gray-700">
                    Company name, website, and your strategic focus<br />
                    (growth play vs. efficiency play vs. market expansion)
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-1">
                  <div className="w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center font-space text-xl font-medium">
                    2
                  </div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="font-space text-2xl mb-2 text-brand-black">AI RESEARCH ENGINE ACTIVATES</h3>
                  <div className="bg-gray-50 rounded-lg p-6 mt-4">
                    <ul className="space-y-2 font-ibm text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Analyzes 1,000+ sources across the web</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Examines code repositories and technical documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Maps competitive landscape and market position</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Identifies customer concentration and risks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Quantifies technical debt and opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-1">
                  <div className="w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center font-space text-xl font-medium">
                    3
                  </div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="font-space text-2xl mb-2 text-brand-black">EXPERT VALIDATION</h3>
                  <p className="font-ibm text-gray-700">
                    Senior engineers review every finding<br />
                    Verify technical claims and business impact<br />
                    Add strategic context and recommendations
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-1">
                  <div className="w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center font-space text-xl font-medium">
                    4
                  </div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="font-space text-2xl mb-2 text-brand-black">COMPREHENSIVE REPORT DELIVERY</h3>
                  <div className="bg-gray-50 rounded-lg p-6 mt-4">
                    <ul className="space-y-2 font-ibm text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Executive summary with key risks/opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Detailed technical findings with evidence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Strategic recommendations aligned to your thesis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Every claim linked to verifiable sources</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Timeline */}
            <motion.div
              className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-space text-2xl mb-2">~2 hours</p>
                  <p className="font-ibm text-gray-300">Automated analysis</p>
                </div>
                <div>
                  <p className="font-space text-2xl mb-2">24-48 hours</p>
                  <p className="font-ibm text-gray-300">Expert review and synthesis</p>
                </div>
                <div>
                  <p className="font-space text-2xl mb-2 text-brand-teal">48 hours guaranteed</p>
                  <p className="font-ibm text-gray-300">Total turnaround</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual Use Cases Section */}
      <section className="py-32" id="use-cases">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-space font-medium text-center text-brand-black mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            TWO WAYS TO WIN WITH TECHNICAL INTELLIGENCE
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Scenario 1: Evaluating an Acquisition */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-space font-medium">SCENARIO: EVALUATING AN ACQUISITION</h3>
                  <Building2 className="h-6 w-6 text-brand-teal" />
                </div>
                <p className="font-ibm text-gray-300 mt-2">
                  PE firm considering $100M SaaS target
                </p>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-space text-lg mb-3 text-red-600">Without TechScan IQ:</h4>
                    <ul className="space-y-2 font-ibm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                        <span>Trust seller's tech claims</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                        <span>Find problems post-close</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                        <span>Overpay by millions</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-space text-lg mb-3 text-brand-teal">With TechScan IQ:</h4>
                    <ul className="space-y-2 font-ibm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Know their real architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Quantify modernization costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Identify growth bottlenecks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Negotiate from strength</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-brand-teal/10 rounded-lg p-4 border border-brand-teal">
                  <p className="font-space text-lg text-brand-black">
                    Result: Better price, fewer surprises
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Scenario 2: Pursuing Enterprise Deal */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-space font-medium">SCENARIO: PURSUING ENTERPRISE DEAL</h3>
                  <Target className="h-6 w-6 text-brand-teal" />
                </div>
                <p className="font-ibm text-gray-300 mt-2">
                  Tech vendor selling to Fortune 500
                </p>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-space text-lg mb-3 text-red-600">Without TechScan IQ:</h4>
                    <ul className="space-y-2 font-ibm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                        <span>Generic demos and pitch decks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                        <span>6-month sales cycles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                        <span>Lose to "better fit" competitors</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-space text-lg mb-3 text-brand-teal">With TechScan IQ:</h4>
                    <ul className="space-y-2 font-ibm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Map their technical pain points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Find integration opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Understand decision process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                        <span>Lead with specific solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-brand-teal/10 rounded-lg p-4 border border-brand-teal">
                  <p className="font-space text-lg text-brand-black">
                    Result: Faster close, higher win rate
                  </p>
                </div>              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Continuum Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-medium text-brand-black mb-6">
              FROM ACQUISITION TO GROWTH: THE FULL INTELLIGENCE CYCLE
            </h2>
            <p className="text-xl font-ibm text-brand-gunmetal">
              Smart PE firms use technical intelligence twice—first to buy right, then to grow fast.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Phase 1: Acquisition */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-teal text-white px-4 py-2 rounded-full font-space font-medium">
                  PHASE 1: ACQUISITION (Months 1-3)
                </div>
              </div>
              
              <p className="font-ibm text-lg text-brand-gunmetal mb-6">
                Use Technical DD to negotiate and structure better deals
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-space text-lg mb-4 text-brand-black">What we uncover:</h4>
                  <ul className="space-y-3 font-ibm text-gray-700">
                    <li>• Monolithic architecture at capacity</li>
                    <li>• $15M technical debt hidden in codebase</li>
                    <li>• 3 key engineers planning to leave</li>
                    <li>• No API strategy limiting partnerships</li>
                    <li>• Database can't scale past 100K users</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-space text-lg mb-4 text-brand-black">How you use it:</h4>
                  <ul className="space-y-3 font-ibm text-gray-700">
                    <li>→ Negotiate 30% lower valuation</li>
                    <li>→ Structure earnout milestones</li>
                    <li>→ Add retention bonuses to deal</li>
                    <li>→ Budget for platform rebuild</li>
                    <li>→ Plan infrastructure investment</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="font-space text-sm mb-2 text-brand-teal">Example:</p>
                <p className="font-ibm text-gray-700 mb-2">
                  PE firm discovered target's "AI-powered" features were actually rule-based.
                </p>
                <p className="font-space text-gray-900">
                  Result: Reduced offer from $120M to $78M, allocated $20M for real AI development.
                </p>
              </div>
            </motion.div>

            {/* Phase 2: Value Creation */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-teal text-white px-4 py-2 rounded-full font-space font-medium">
                  PHASE 2: VALUE CREATION (Months 4-24)
                </div>
              </div>
              
              <p className="font-ibm text-lg text-brand-gunmetal mb-6">
                Use Sales Intelligence to accelerate portfolio company growth
              </p>
              
              <div className="mb-6">
                <h4 className="font-space text-lg mb-4 text-brand-black">Technical reality becomes sales advantage:</h4>
                <div className="space-y-3 font-ibm text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="font-medium">• That API limitation?</span>
                    <span className="text-brand-teal">→</span>
                    <span>Target companies needing simple integrations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium">• That database bottleneck?</span>
                    <span className="text-brand-teal">→</span>
                    <span>Sell to mid-market, not enterprise (yet)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium">• That security debt?</span>
                    <span className="text-brand-teal">→</span>
                    <span>After fixing, lead with compliance wins</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium">• That legacy architecture?</span>
                    <span className="text-brand-teal">→</span>
                    <span>Find customers with similar tech empathy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium">• Those missing features?</span>
                    <span className="text-brand-teal">→</span>
                    <span>Target competitors' frustrated customers</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="font-space text-sm mb-2 text-brand-teal">Example:</p>
                <p className="font-ibm text-gray-700 mb-2">
                  Portfolio company had weak real-time features but strong batch processing.
                  Sales Intelligence found 12 financial services prospects struggling with overnight
                  processing windows.
                </p>
                <p className="font-space text-gray-900">
                  Closed 4 deals in 6 months = $8M new ARR.
                </p>
              </div>
            </motion.div>

            {/* The Multiplier Effect */}
            <motion.div
              className="bg-gradient-to-br from-brand-teal to-teal-600 text-white rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-space font-medium mb-6 text-center">
                THE MULTIPLIER EFFECT
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-space text-lg mb-2">Buy Low:</h4>
                  <p className="font-ibm text-white/90 text-sm">
                    Technical DD reveals $30M in hidden issues → Acquire at $70M not $100M
                  </p>
                </div>
                
                <div>
                  <h4 className="font-space text-lg mb-2">Fix Smart:</h4>
                  <p className="font-ibm text-white/90 text-sm">
                    Focus on issues that unlock specific customer segments
                  </p>
                </div>
                
                <div>
                  <h4 className="font-space text-lg mb-2">Sell High:</h4>
                  <p className="font-ibm text-white/90 text-sm">
                    Sales Intelligence identifies 50 perfect-fit enterprises
                  </p>
                </div>
                
                <div>
                  <h4 className="font-space text-lg mb-2">Exit Strong:</h4>
                  <p className="font-ibm text-white/90 text-sm">
                    3x multiple on expanded revenue base = $300M exit
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32" id="pricing">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-space font-medium text-center text-brand-black mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            INTELLIGENCE THAT MULTIPLIES VALUE
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Technical DD */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-space font-medium text-brand-black mb-2">
                  TECHNICAL DUE DILIGENCE
                </h3>
                <p className="font-ibm text-gray-600 mb-6">For Smarter Acquisitions</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-space font-medium text-brand-black">$7,900</span>
                  <span className="text-xl font-ibm text-gray-500 ml-2">per target</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Complete technical audit",
                    "Market position analysis",
                    "Risk quantification",
                    "Integration roadmap"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                      <span className="font-ibm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-ibm text-sm text-gray-600 mb-6">
                  Perfect for: PE/VC firms, Corp Dev teams
                </p>

                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 font-space font-medium">
                  Start Analysis
                </Button>
              </div>
            </motion.div>

            {/* Sales Intelligence */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-space font-medium text-brand-black mb-2">
                  SALES INTELLIGENCE
                </h3>
                <p className="font-ibm text-gray-600 mb-6">For Bigger Deals</p>
                
                <div className="mb-8">
                  <div>
                    <span className="text-5xl font-space font-medium text-brand-black">$500</span>
                    <span className="text-xl font-ibm text-gray-500 ml-2">per account</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-space font-medium text-brand-black">+$5,000</span>
                    <span className="text-lg font-ibm text-gray-500 ml-2">per closed deal</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Deep account intelligence",
                    "Decision maker mapping",
                    "Technical requirements",
                    "Competitive playbook"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                      <span className="font-ibm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-ibm text-sm text-gray-600 mb-6">
                  Perfect for: Enterprise sales teams, $100K+ deals
                </p>

                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 font-space font-medium">
                  Start Analysis
                </Button>
              </div>
            </motion.div>

            {/* Growth Package */}
            <motion.div
              className="bg-gradient-to-br from-brand-teal to-teal-600 rounded-2xl shadow-xl text-white relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 194, 178, 0.5)" }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-black text-white px-6 py-2 rounded-full font-space font-medium text-sm z-10">
                BEST VALUE
              </div>
              
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-space font-medium mb-2">
                  GROWTH PACKAGE
                </h3>
                <p className="font-ibm text-white/80 mb-6">Buy + Grow Bundle</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-space font-medium">$39,900</span>
                  <span className="text-xl font-ibm text-white/80 ml-2">/year</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "5 DD reports",
                    "10 Sales intel reports",
                    "Quarterly updates",
                    "Portfolio monitoring"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                      <span className="font-ibm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-ibm text-sm text-white/80 mb-6">
                  Perfect for: PE firms with portfolio companies
                </p>

                <Button className="w-full bg-white text-brand-teal hover:bg-gray-100 font-space font-medium">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-brand-black text-brand-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
        </motion.div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-space font-medium">
              CODE IS VALUE. SEE IT FIRST.
            </h2>
            <p className="text-xl md:text-2xl font-ibm text-gray-300 max-w-3xl mx-auto">
              Whether you're buying companies or selling solutions,<br />
              technical intelligence is your unfair advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-xl px-12 py-8 shadow-2xl hover:shadow-brand-teal/20 group">
                Start Your Intelligence Scan
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}