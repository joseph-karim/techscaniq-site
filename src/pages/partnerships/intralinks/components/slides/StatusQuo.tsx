import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';

export function StatusQuoSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full"
      >
        <h1 className="font-space text-4xl md:text-5xl text-brand-black mb-8 text-center">
          How technical due diligence works today
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <Card className="p-8 border-2 border-brand-gunmetal">
            <h3 className="font-space text-2xl mb-4">The Current Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-space text-lg mb-2">Week 1-2</h4>
                <p className="font-ibm text-brand-gunmetal">
                  PE firm hires consulting team. Initial scoping calls. 
                  NDA negotiations. Access requests.
                </p>
              </div>
              <div>
                <h4 className="font-space text-lg mb-2">Week 3-6</h4>
                <p className="font-ibm text-brand-gunmetal">
                  Consultants interview CTOs. Review some code. 
                  Check a few customer references. Draft reports.
                </p>
              </div>
              <div>
                <h4 className="font-space text-lg mb-2">Week 7-8</h4>
                <p className="font-ibm text-brand-gunmetal">
                  Deliver 200-page PDF. High-level findings.
                  Generic recommendations. $75K invoice.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-red-50 border-red-500">
              <h4 className="font-space text-lg mb-3">What They Miss</h4>
              <ul className="space-y-2 font-ibm text-sm">
                <li>• Actual codebase architecture</li>
                <li>• Real customer sentiment from forums</li>
                <li>• Technical team flight risk signals</li>
                <li>• Competitor capability comparisons</li>
                <li>• Hidden integration limitations</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-amber-50 border-amber-500">
              <h4 className="font-space text-lg mb-3">The Result</h4>
              <ul className="space-y-2 font-ibm text-sm">
                <li>• Surprises after closing</li>
                <li>• Technical debt discovered too late</li>
                <li>• Integration costs 3x budget</li>
                <li>• Key engineers leave post-acquisition</li>
                <li>• Growth plans hit technical walls</li>
              </ul>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="font-ibm text-xl text-brand-gunmetal mb-6">
            This happens because human consultants can only look at 20-30 sources.
          </p>
          <Button 
            onClick={onNext}
            className="bg-brand-teal text-white hover:bg-brand-teal/90 px-8 py-6 text-lg"
          >
            See the breakthrough →
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}