import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function CallToActionSlide(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl text-brand-black mb-4">
            THE DECISION IS STRATEGIC, NOT TECHNICAL
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-12 border-2 border-brand-teal mb-8">
            <div className="text-center mb-8">
              <h3 className="font-space text-2xl mb-4">
                This isn't about adding a feature.
              </h3>
              <p className="font-ibm text-xl">
                It's about owning the intelligence layer of M&A.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-space text-lg mb-4">What Intralinks Brings:</h4>
                <ul className="space-y-2 font-ibm">
                  <li>✓ 10,000+ active deals</li>
                  <li>✓ Trusted platform relationships</li>
                  <li>✓ Global enterprise presence</li>
                  <li>✓ Security & compliance foundation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-space text-lg mb-4">What TechScan IQ Brings:</h4>
                <ul className="space-y-2 font-ibm">
                  <li>✓ AI that understands code value</li>
                  <li>✓ 48-hour intelligence generation</li>
                  <li>✓ Proven PE & sales use cases</li>
                  <li>✓ Ready-to-integrate platform</li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-gunmetal text-white p-8 rounded-lg text-center">
              <p className="font-space text-2xl mb-4">
                Together: The definitive M&A intelligence platform
              </p>
              <p className="font-ibm">
                First-mover advantage in a $2.3B market
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-space text-2xl text-center">Two Paths Forward</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 text-center hover:border-brand-teal transition-colors cursor-pointer">
              <h4 className="font-space text-lg mb-2">Pilot Program</h4>
              <p className="font-ibm text-sm mb-4">
                10 deals, 60 days<br />
                Prove the value
              </p>
              <Button variant="outline" className="w-full">
                Start Pilot
              </Button>
            </Card>

            <Card className="p-6 text-center border-2 border-brand-teal bg-brand-teal/5">
              <h4 className="font-space text-lg mb-2">Strategic Partnership</h4>
              <p className="font-ibm text-sm mb-4">
                Full integration<br />
                Revenue share model
              </p>
              <Button className="w-full bg-brand-teal text-white">
                Explore Terms
              </Button>
            </Card>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-ibm text-lg">
            Let's explore how to capture this opportunity together.
          </p>
          <div className="flex justify-center gap-6">
            <a href="/reports/demo/intralinks-pe-dd" className="text-brand-teal hover:underline">
              Review Intralinks Tech Assessment
            </a>
            <span className="text-gray-400">|</span>
            <a href="/reports/demo/techscaniq-sales-intel" className="text-brand-teal hover:underline">
              See Sales Opportunity Analysis
            </a>
          </div>
          <p className="font-ibm text-brand-gunmetal">
            Arnab Tagore, CEO • arnab@alethiai.com • (Direct line)
          </p>
        </motion.div>
      </div>
    </div>
  );
}