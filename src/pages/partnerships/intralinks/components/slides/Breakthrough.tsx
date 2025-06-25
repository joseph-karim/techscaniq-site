import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { FileSearch, Brain, Zap } from 'lucide-react';

export function BreakthroughSlide({ onNext, onPrev }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-space text-4xl md:text-5xl text-brand-black mb-4">
            The Depth Advantage
          </h2>
          <p className="font-ibm text-xl text-brand-gunmetal">
            Not all intelligence is created equal
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Traditional DD */}
            <Card className="p-6 border-2 border-gray-300 relative">
              <div className="text-center mb-6">
                <FileSearch className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <h3 className="font-space text-xl mb-2">Traditional DD</h3>
                <div className="relative mx-auto w-20 h-20 mb-4">
                  <div className="absolute inset-0 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="font-space text-2xl font-bold text-gray-600">20</span>
                  </div>
                </div>
                <p className="font-space text-sm text-gray-600 mb-2">Sources</p>
              </div>
              <div className="space-y-3">
                <p className="font-ibm text-sm text-gray-600">
                  <span className="font-semibold">Technical details</span> without business context
                </p>
                <ul className="space-y-2 font-ibm text-xs text-gray-500">
                  <li>• Manual document review</li>
                  <li>• Limited expert interviews</li>
                  <li>• Surface-level code review</li>
                  <li>• Basic financial analysis</li>
                </ul>
              </div>
            </Card>

            {/* Leading Research Agents */}
            <Card className="p-6 border-2 border-amber-500 relative">
              <div className="text-center mb-6">
                <Brain className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <h3 className="font-space text-xl mb-2">Leading Research Agents</h3>
                <p className="font-ibm text-sm text-gray-600 mb-2">(e.g., ChatGPT)</p>
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <div className="absolute inset-0 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="font-space text-3xl font-bold text-amber-600">100</span>
                  </div>
                </div>
                <p className="font-space text-sm text-amber-600 mb-2">Sources</p>
              </div>
              <div className="space-y-3">
                <p className="font-ibm text-sm text-gray-600">
                  <span className="font-semibold">Broader business context</span>, no technical depth
                </p>
                <ul className="space-y-2 font-ibm text-xs text-gray-500">
                  <li>• Surface web information</li>
                  <li>• General market insights</li>
                  <li>• Public news & articles</li>
                  <li>• Basic competitor info</li>
                </ul>
              </div>
            </Card>

            {/* TechScanIQ */}
            <Card className="p-6 border-2 border-brand-teal bg-gradient-to-br from-white to-brand-teal/5 relative">
              <div className="text-center mb-6">
                <Zap className="w-12 h-12 text-brand-teal mx-auto mb-3" />
                <h3 className="font-space text-xl mb-2 text-brand-teal">TechScanIQ</h3>
                <p className="font-ibm text-sm text-brand-teal font-semibold mb-2">Deep Intelligence</p>
                <div className="relative mx-auto w-48 h-48 mb-4">
                  <div className="absolute inset-0 bg-brand-teal/10 rounded-full flex items-center justify-center animate-pulse">
                    <span className="font-space text-5xl font-bold text-brand-teal">1000</span>
                  </div>
                </div>
                <p className="font-space text-sm text-brand-teal mb-2">Sources</p>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                  <div>
                    <p className="font-space text-2xl font-bold text-brand-teal">3000</p>
                    <p className="font-ibm text-xs">Citations</p>
                  </div>
                  <div>
                    <p className="font-space text-2xl font-bold text-brand-teal">500</p>
                    <p className="font-ibm text-xs">Insights</p>
                  </div>
                  <div>
                    <p className="font-space text-2xl font-bold text-brand-teal">100%</p>
                    <p className="font-ibm text-xs">Verifiable</p>
                  </div>
                </div>
                <ul className="space-y-2 font-ibm text-xs text-gray-600">
                  <li className="flex items-start gap-1">
                    <span className="text-brand-teal">✓</span>
                    <span>Deep code & architecture analysis</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-brand-teal">✓</span>
                    <span>Engineering talent assessment</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-brand-teal">✓</span>
                    <span>Customer sentiment analysis</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-brand-teal">✓</span>
                    <span>Competitive positioning</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Bottom Message */}
          <Card className="p-8 bg-brand-gunmetal text-white">
            <p className="font-space text-2xl text-center mb-2">
              50x more sources. 100x more insights. Infinite advantage.
            </p>
            <p className="font-ibm text-lg text-center opacity-90">
              TechScanIQ doesn't just gather more data—it understands what it means for your deal.
            </p>
          </Card>
        </motion.div>

        <div className="flex justify-between mt-8">
          <Button 
            onClick={onPrev}
            variant="outline"
            className="border-brand-gunmetal text-brand-gunmetal"
          >
            ← Back
          </Button>
          <Button 
            onClick={onNext}
            className="bg-brand-teal text-white hover:bg-brand-teal/90 px-8 py-4 text-lg"
          >
            See how it works →
          </Button>
        </div>
      </div>
    </div>
  );
}