import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';

export function StatusQuoSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-32">
      <div className="max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-space text-4xl md:text-5xl text-brand-black mb-6">
            Traditional Tech Due Diligence Is Failing in the New Era of M&A
          </h1>
          
          <p className="font-ibm text-xl text-brand-gunmetal mb-16 max-w-4xl mx-auto">
            Technology drives the value in today's fastest growing acquisitions, but 91% of M&A deals still skip tech diligence and walk straight into disaster
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* The Reality */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 text-center border-2 border-brand-gunmetal bg-gray-50 h-full">
                <h2 className="font-space text-2xl mb-6 text-brand-black">The Reality: 91% of Acquirers Are Flying Blind</h2>
                <p className="font-ibm text-base text-gray-700 mb-6 leading-relaxed">
                  Tech failures kill 30% of M&A deals, yet 91% skip comprehensive DD. Those who do pay face a devil's bargain: $150K for broken assessments or billions in catastrophic surprises.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="bg-brand-gunmetal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">91% Skip Tech DD</div>
                  </div>
                  <div className="bg-brand-gunmetal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">$2B+ Hidden Debt Found</div>
                  </div>
                  <div className="bg-brand-gunmetal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">9-Figure Compliance Bombs</div>
                  </div>
                  <div className="bg-brand-gunmetal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">30% Deal Failures</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* The Root Cause */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 text-center border-2 border-brand-gunmetal bg-gray-50 h-full">
                <h2 className="font-space text-2xl mb-6 text-brand-black">The Root Cause: Tech Due Diligence is a 12-Week, $150K Nightmare</h2>
                <p className="font-ibm text-base text-gray-700 mb-6 leading-relaxed">
                  Traditional DD is slow, expensive, and still misses everything that matters. It catches only 3% of shadow IT, takes 3 months, yet 76% of tech deals still fail to meet objectives.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="bg-brand-gunmetal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">12 Weeks Wasted</div>
                  </div>
                  <div className="bg-brand-gunmetal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">$150K Burned</div>
                  </div>
                  <div className="bg-brand-gunmetal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">97% Shadow IT Missed</div>
                  </div>
                  <div className="bg-brand-gunmetal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">$500K+ Post-Close Shocks</div>
                  </div>
                  <div className="bg-brand-gunmetal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">76% Fail Anyway</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* The Opportunity */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 text-center border-2 border-brand-teal bg-teal-50 h-full">
                <h2 className="font-space text-2xl mb-6 text-brand-black">The Opportunity: What If Every Deal Had Institutional-Grade Tech Assessment?</h2>
                <p className="font-ibm text-base text-gray-700 mb-6 leading-relaxed">
                  Companies with proper tech DD are 2.8x more likely to succeed. With $3T in dry powder and 91% of deals unprotected, the market is screaming for transformation.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="bg-brand-teal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">2.8x Success Rate</div>
                  </div>
                  <div className="bg-brand-teal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">$3T Dry Powder</div>
                  </div>
                  <div className="bg-brand-teal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">91% Unprotected</div>
                  </div>
                  <div className="bg-brand-teal text-white px-3 py-1.5 rounded-md">
                    <div className="font-space text-sm font-bold">Market Transformation</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              onClick={onNext}
              className="bg-brand-teal text-white hover:bg-brand-teal/90 px-10 py-6 text-lg"
            >
              See the Solution →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}