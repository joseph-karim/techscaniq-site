import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function StrategicVisionSlide(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 pt-32">
      <div className="max-w-5xl w-full">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl text-brand-black mb-4">
            FROM PARTNERSHIP TO PLATFORM LEADERSHIP
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border-2 border-brand-gunmetal">
              <h3 className="font-space text-2xl mb-6">Today: Document Platform</h3>
              <p className="font-ibm">
                Intralinks powers secure document exchange and workflow automation.
                Users leave for technical intelligence.
              </p>
            </Card>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-brand-teal text-4xl">↓</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 border-2 border-brand-teal bg-brand-teal/5">
              <h3 className="font-space text-2xl mb-6">Tomorrow: Complete Deal Intelligence Platform</h3>
              <p className="font-ibm mb-4">
                Intralinks becomes the only platform offering documents + technical intelligence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-space text-lg mb-2">For Buyers:</h4>
                  <ul className="space-y-1 font-ibm text-sm">
                    <li>• See technical reality before bidding</li>
                    <li>• Quantify integration costs upfront</li>
                    <li>• Make confident valuations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-space text-lg mb-2">For Sellers:</h4>
                  <ul className="space-y-1 font-ibm text-sm">
                    <li>• Address technical concerns proactively</li>
                    <li>• Accelerate deal timelines</li>
                    <li>• Maximize valuations</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-brand-teal text-4xl">↓</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Card className="p-8 border-2 border-brand-teal">
              <h3 className="font-space text-2xl mb-6">Future: The Intelligence-First M&A Platform</h3>
              <p className="font-ibm mb-4">
                Expand beyond documents to become the intelligence layer for all deals:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-brand-gunmetal text-white p-4 rounded">
                  <p className="font-space mb-2">Technical DD</p>
                  <p className="font-ibm text-sm">For software deals</p>
                </div>
                <div className="bg-brand-gunmetal text-white p-4 rounded">
                  <p className="font-space mb-2">Sales Intelligence</p>
                  <p className="font-ibm text-sm">For portfolio growth</p>
                </div>
                <div className="bg-brand-gunmetal text-white p-4 rounded">
                  <p className="font-space mb-2">Market Analysis</p>
                  <p className="font-ibm text-sm">For any sector</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}