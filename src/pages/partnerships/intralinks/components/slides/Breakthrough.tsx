import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';

export function BreakthroughSlide({ onNext, onPrev }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-space text-4xl text-brand-black mb-4">
            What if you could analyze 1,000+ sources<br />
            in the time it takes to schedule a meeting?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <Card className="p-8 border-2 border-brand-teal">
            <h3 className="font-space text-2xl mb-6 text-center">
              The AI Research Breakthrough
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-space text-lg mb-4">What changed:</h4>
                <ul className="space-y-3 font-ibm">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-teal">→</span>
                    <span>AI can now understand code quality, not just read it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-teal">→</span>
                    <span>Automated tools can scan entire digital footprints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-teal">→</span>
                    <span>Pattern recognition across thousands of data points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-teal">→</span>
                    <span>Connect technical signals to business impact</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-space text-lg mb-4">What's now possible:</h4>
                <ul className="space-y-3 font-ibm">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-teal">✓</span>
                    <span>Analyze every public code commit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-teal">✓</span>
                    <span>Read every customer review and forum post</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-teal">✓</span>
                    <span>Track every engineering hire and departure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-teal">✓</span>
                    <span>Map every competitor's capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="bg-brand-gunmetal text-white p-8 rounded-lg text-center">
            <p className="font-space text-2xl mb-2">
              The breakthrough isn't just more data.
            </p>
            <p className="font-ibm text-lg">
              It's understanding what technical decisions mean for business value.
            </p>
          </div>
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
            className="bg-brand-teal text-white hover:bg-brand-teal/90"
          >
            Meet TechScan IQ →
          </Button>
        </div>
      </div>
    </div>
  );
}