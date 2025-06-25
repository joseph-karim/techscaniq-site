import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';

export function HowItWorksSlide({ onNext, onPrev }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-space text-4xl text-brand-black mb-4">
            How TechScan IQ Works: The Depth Advantage
          </h2>
          <p className="font-ibm text-xl text-brand-gunmetal">
            From Surface Scan to Core Intelligence
          </p>
        </motion.div>

        {/* Intelligence Iceberg */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-black to-brand-gunmetal p-12 rounded-2xl mb-12"
        >
          <h3 className="font-space text-3xl text-white mb-8 text-center">The Intelligence Iceberg</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <p className="font-space text-5xl text-brand-teal">5,000+</p>
                <p className="font-ibm text-white">Evidence pieces analyzed</p>
              </div>
              <div>
                <p className="font-space text-5xl text-brand-teal">500+</p>
                <p className="font-ibm text-white">Verified insights generated</p>
              </div>
              <div>
                <p className="font-space text-5xl text-brand-teal">100%</p>
                <p className="font-ibm text-white">Citation coverage</p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-6">
                {/* Surface Level */}
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <h5 className="font-space text-brand-gunmetal mb-2">🌊 What Others See</h5>
                  <p className="font-ibm text-sm text-gray-600">
                    100 sources • Basic web data • "Stripe is a payments company"
                  </p>
                </div>
                {/* Deep Level */}
                <div className="bg-brand-teal p-4 rounded-lg">
                  <h5 className="font-space text-white mb-2">💎 What We Reveal</h5>
                  <p className="font-ibm text-sm text-white">
                    5,000 sources • Advanced automation + Deep AI • "Stripe's ML fraud detection on custom infrastructure with 400ms p99 latency"
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* 4-Stage Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="font-space text-2xl text-center mb-8">The 4-Stage Intelligence Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Stage 1 */}
            <Card className="p-6 text-center border-2 border-brand-teal">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h4 className="font-space text-lg mb-2">Cast Wide Net</h4>
              <p className="font-space text-3xl text-brand-gunmetal font-bold mb-2">1,000+</p>
              <p className="font-ibm text-sm text-gray-600 mb-2">
                Automated discovery of hidden APIs, dynamic content, real user flows
              </p>
              <p className="font-ibm text-xs text-brand-teal">0-5 minutes</p>
            </Card>

            {/* Stage 2 */}
            <Card className="p-6 text-center border-2 border-brand-teal">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h4 className="font-space text-lg mb-2">Deep Pillar Research</h4>
              <p className="font-space text-3xl text-brand-gunmetal font-bold mb-2">3,000+</p>
              <p className="font-ibm text-sm text-gray-600 mb-2">
                28 strategic queries across tech, market, financial, leadership domains
              </p>
              <p className="font-ibm text-xs text-brand-teal">5-30 minutes</p>
            </Card>

            {/* Stage 3 */}
            <Card className="p-6 text-center border-2 border-brand-teal">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h4 className="font-space text-lg mb-2">Multi-Model Analysis</h4>
              <p className="font-space text-3xl text-brand-gunmetal font-bold mb-2">500+</p>
              <p className="font-ibm text-sm text-gray-600 mb-2">
                Advanced AI models synthesize patterns into verified insights
              </p>
              <p className="font-ibm text-xs text-brand-teal">30-60 minutes</p>
            </Card>

            {/* Stage 4 */}
            <Card className="p-6 text-center bg-black border-2 border-brand-teal">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h4 className="font-space text-lg text-white mb-2">Cited Intelligence</h4>
              <p className="font-space text-3xl text-white font-bold mb-2">100%</p>
              <p className="font-ibm text-sm text-gray-400 mb-2">
                Every claim linked to source evidence with confidence scores
              </p>
              <p className="font-ibm text-xs text-brand-teal">Ready in 2-4 hours</p>
            </Card>
          </div>
        </motion.div>

        {/* Evidence Discovery Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 mb-12"
        >
          <h3 className="font-space text-2xl text-center mb-8">What Deep Research Uncovers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Browser Automation */}
            <div>
              <h4 className="font-space text-lg text-brand-teal mb-4">🤖 Automated Discovery Reveals</h4>
              <ul className="space-y-3">
                <li className="font-ibm text-sm pb-3 border-b border-gray-200">
                  ✓ Undocumented API endpoints in JavaScript
                </li>
                <li className="font-ibm text-sm pb-3 border-b border-gray-200">
                  ✓ Real-time connection patterns
                </li>
                <li className="font-ibm text-sm pb-3 border-b border-gray-200">
                  ✓ Client-side validation exposing business rules
                </li>
                <li className="font-ibm text-sm pb-3 border-b border-gray-200">
                  ✓ Performance bottlenecks in metrics
                </li>
                <li className="font-ibm text-sm">
                  ✓ Hidden admin panels and feature flags
                </li>
              </ul>
            </div>

            {/* Deep Research */}
            <div>
              <h4 className="font-space text-lg text-brand-teal mb-4">🔍 Deep Research Uncovers</h4>
              <ul className="space-y-3">
                <li className="font-ibm text-sm pb-3 border-b border-gray-200">
                  ✓ Actual vs marketed tech architecture
                </li>
                <li className="font-ibm text-sm pb-3 border-b border-gray-200">
                  ✓ True scalability limits from traffic patterns
                </li>
                <li className="font-ibm text-sm pb-3 border-b border-gray-200">
                  ✓ Technical debt indicators in dependencies
                </li>
                <li className="font-ibm text-sm pb-3 border-b border-gray-200">
                  ✓ Team stability from hiring patterns
                </li>
                <li className="font-ibm text-sm">
                  ✓ Competitive moats in implementation details
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Value Multiplication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 mb-12"
        >
          <h3 className="font-space text-2xl text-center mb-8">The Value Multiplication Effect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="text-center">
              <h4 className="font-space text-lg text-gray-600 mb-4">Traditional Research</h4>
              <Card className="p-4 mb-4 border-2 border-gray-300">
                <p className="font-space text-2xl text-brand-gunmetal font-bold">10-20</p>
                <p className="font-ibm text-sm text-gray-600">Sources analyzed</p>
              </Card>
              <p className="text-gray-400 mb-4">↓</p>
              <Card className="p-4 mb-4 border-2 border-gray-300">
                <p className="font-space text-2xl text-brand-gunmetal font-bold">5-10</p>
                <p className="font-ibm text-sm text-gray-600">Generic insights</p>
              </Card>
              <p className="text-gray-400 mb-4">↓</p>
              <Card className="p-4 bg-red-50 border-2 border-red-300">
                <p className="font-space text-2xl text-red-600 font-bold">60%</p>
                <p className="font-ibm text-sm text-red-600">Confidence level</p>
              </Card>
            </div>

            {/* TechScanIQ */}
            <div className="text-center">
              <h4 className="font-space text-lg text-brand-teal mb-4">TechScan IQ Deep Research</h4>
              <Card className="p-4 mb-4 border-2 border-brand-teal">
                <p className="font-space text-2xl text-brand-teal font-bold">5,000+</p>
                <p className="font-ibm text-sm text-brand-gunmetal">Sources analyzed</p>
              </Card>
              <p className="text-brand-teal mb-4">↓</p>
              <Card className="p-4 mb-4 border-2 border-brand-teal">
                <p className="font-space text-2xl text-brand-teal font-bold">500+</p>
                <p className="font-ibm text-sm text-brand-gunmetal">Actionable insights</p>
              </Card>
              <p className="text-brand-teal mb-4">↓</p>
              <Card className="p-4 bg-green-50 border-2 border-brand-teal">
                <p className="font-space text-2xl text-brand-teal font-bold">95%</p>
                <p className="font-ibm text-sm text-green-700">Confidence level</p>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Citation Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-brand-gunmetal rounded-2xl p-8"
        >
          <h3 className="font-space text-2xl text-white text-center mb-8">Every Insight, Fully Cited</h3>
          <Card className="bg-black border border-brand-teal p-6">
            <p className="font-ibm text-white text-lg leading-relaxed">
              "Stripe's real moat is their ML fraud detection running on custom infrastructure, processing{' '}
              <span className="text-brand-teal underline cursor-pointer">[a3f2:7]</span> 400ms p99 with 99.99% uptime, 
              exposed through undocumented API endpoints{' '}
              <span className="text-brand-teal underline cursor-pointer">[b8e4:12]</span> suggesting expansion 
              into identity verification{' '}
              <span className="text-brand-teal underline cursor-pointer">[c7d1:3]</span>"
            </p>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="font-ibm text-sm text-gray-400">
                <span className="text-brand-teal">[a3f2:7]</span> Browser evidence from bundle.js analysis<br />
                <span className="text-brand-teal">[b8e4:12]</span> Deep research on API documentation<br />
                <span className="text-brand-teal">[c7d1:3]</span> Network traffic pattern analysis
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="font-ibm text-lg text-brand-gunmetal mb-6">
            While others skim the surface, we dive to the core.
          </p>
          <Button 
            onClick={onNext}
            className="bg-brand-teal text-white hover:bg-brand-teal/90 px-8 py-6 text-lg"
          >
            See it in action →
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