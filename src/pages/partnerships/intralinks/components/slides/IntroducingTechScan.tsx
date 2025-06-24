import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';

export function IntroducingTechScanSlide({ onNext, onPrev }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-space text-4xl text-brand-black mb-4">
            TechScan IQ: Deep Tech Intelligence in 48 Hours
          </h2>
          <p className="font-ibm text-xl text-brand-gunmetal">
            The first AI research system that understands what code is worth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <Card className="p-8 border-2 border-brand-teal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-space text-4xl text-brand-teal mb-2">1,000+</p>
                <p className="font-ibm">sources analyzed</p>
              </div>
              <div>
                <p className="font-space text-4xl text-brand-teal mb-2">48hr</p>
                <p className="font-ibm">turnaround time</p>
              </div>
              <div>
                <p className="font-space text-4xl text-brand-teal mb-2">$7,900</p>
                <p className="font-ibm">fixed price</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-space text-xl mb-4">Technical Due Diligence</h3>
              <p className="font-ibm text-sm text-brand-gunmetal mb-4">
                For PE firms and strategic acquirers evaluating targets
              </p>
              <ul className="space-y-2 font-ibm text-sm">
                <li>• Architecture reality vs. marketing claims</li>
                <li>• Scalability limits and growth ceilings</li>
                <li>• Technical debt quantified in dollars</li>
                <li>• Team capabilities and flight risk</li>
                <li>• Integration complexity mapped</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-space text-xl mb-4">Sales Intelligence</h3>
              <p className="font-ibm text-sm text-brand-gunmetal mb-4">
                For enterprise sales teams pursuing complex deals
              </p>
              <ul className="space-y-2 font-ibm text-sm">
                <li>• Technical pain points discovered</li>
                <li>• Failed projects and initiatives</li>
                <li>• Budget signals and priorities</li>
                <li>• Decision maker mapping</li>
                <li>• Integration opportunities identified</li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 bg-brand-gunmetal text-white">
            <h3 className="font-space text-xl mb-4 text-center">Our Unique Insight</h3>
            <p className="font-ibm text-center">
              The same AI that spots a monolithic architecture blocking growth can identify 
              the exact pain points that make enterprises buy. Because code isn't just 
              technical—it's business value waiting to be unlocked.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="font-ibm text-lg text-brand-gunmetal mb-6">
            Now imagine this intelligence inside every Intralinks deal...
          </p>
          <Button 
            onClick={onNext}
            className="bg-brand-teal text-white hover:bg-brand-teal/90 px-8 py-6 text-lg"
          >
            See the opportunity →
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