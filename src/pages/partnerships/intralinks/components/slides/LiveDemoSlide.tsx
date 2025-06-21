import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function LiveDemoSlide(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 pt-20">
      <div className="max-w-6xl w-full">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl text-brand-black mb-4">
            SEE THE DIFFERENCE IN YOUR PLATFORM
          </h2>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            onClick={() => setActiveTab('before')}
            variant={activeTab === 'before' ? 'default' : 'outline'}
            className={activeTab === 'before' ? 'bg-brand-gunmetal' : ''}
          >
            Intralinks Today
          </Button>
          <Button
            onClick={() => setActiveTab('after')}
            variant={activeTab === 'after' ? 'default' : 'outline'}
            className={activeTab === 'after' ? 'bg-brand-teal' : ''}
          >
            With TechScan IQ
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {activeTab === 'before' ? (
            <Card className="p-8 border-2 border-gray-300">
              <div className="bg-gray-100 p-4 rounded-t-lg border-b">
                <div className="flex gap-4 text-sm font-ibm">
                  <span className="border-b-2 border-brand-gunmetal pb-2">Documents</span>
                  <span>Q&A</span>
                  <span>Reports</span>
                  <span>Analytics</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-space text-xl mb-4">Project TechCo Acquisition</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-ibm text-sm text-gray-600">Latest Activity</p>
                    <p className="font-ibm">147 documents uploaded</p>
                    <p className="font-ibm">23 Q&A items pending</p>
                  </div>
                  <div className="text-center py-8 text-gray-400">
                    <p className="font-ibm">Technical assessment happens elsewhere...</p>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-8 border-2 border-brand-teal">
              <div className="bg-gray-100 p-4 rounded-t-lg border-b">
                <div className="flex gap-4 text-sm font-ibm">
                  <span>Documents</span>
                  <span>Q&A</span>
                  <span>Reports</span>
                  <span>Analytics</span>
                  <span className="border-b-2 border-brand-teal pb-2 text-brand-teal">
                    ✨ Tech Intelligence
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-space text-xl mb-4">Project TechCo Acquisition</h3>
                
                <div className="bg-brand-teal/5 border border-brand-teal p-6 rounded-lg mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-space text-lg">AI-Powered Technical Analysis</h4>
                      <p className="font-ibm text-sm text-brand-gunmetal">
                        Generated in 48 hours • No seller input required
                      </p>
                    </div>
                    <a href="/reports/demo/intralinks-pe-dd" className="text-brand-teal hover:underline">
                      View Full Report →
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-ibm text-sm text-brand-gunmetal mb-1">Technical Score</p>
                      <p className="font-space text-2xl">67/100 🟡</p>
                    </div>
                    <div>
                      <p className="font-ibm text-sm text-brand-gunmetal mb-1">Integration Cost</p>
                      <p className="font-space text-2xl">$4.7M</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <p className="font-ibm text-sm">⚫ Critical: Database architecture limits scale</p>
                    <p className="font-ibm text-sm">🟡 Medium: 67% customer concentration risk</p>
                    <p className="font-ibm text-sm">🟢 Low: Strong engineering team in place</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button className="bg-brand-teal text-white">
                    Download Technical DD Report
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}