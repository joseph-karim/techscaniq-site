import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function LiveDemoSlide(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 pt-20">
      <div className="max-w-7xl w-full">
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
          className="relative"
        >
          {activeTab === 'before' ? (
            <div className="space-y-6">
              <Card className="overflow-hidden border-2 border-gray-300">
                <img 
                  src="/intralinks_diligence_overview.png.webp" 
                  alt="Intralinks Diligence Overview" 
                  className="w-full"
                />
              </Card>
              <div className="text-center">
                <p className="font-ibm text-lg text-brand-gunmetal">
                  Document management and basic analytics
                </p>
                <p className="font-ibm text-sm text-gray-500 mt-2">
                  Technical assessment requires external consultants
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <Card className="overflow-hidden border-2 border-brand-teal relative">
                <img 
                  src="/intralinks_diligence_overview.png.webp" 
                  alt="Intralinks with TechScan IQ" 
                  className="w-full"
                />
                {/* Overlay showing TechScan IQ integration */}
                <div className="absolute top-4 right-4 bg-brand-teal text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-space text-sm">✨ TechScan IQ Enabled</span>
                </div>
                
                {/* Enhanced intelligence panel overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="bg-white/95 backdrop-blur rounded-lg p-4 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-space text-lg text-brand-black">AI Technical Intelligence</h4>
                        <p className="font-ibm text-sm text-brand-gunmetal">
                          1,000+ sources analyzed • Updated in real-time
                        </p>
                      </div>
                      <Button size="sm" className="bg-brand-teal text-white">
                        View Full Report
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="bg-red-50 p-2 rounded">
                        <p className="font-ibm text-red-700">⚠️ High Risk</p>
                        <p className="font-space text-xs">Scalability Issues</p>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded">
                        <p className="font-ibm text-yellow-700">⚡ Medium Risk</p>
                        <p className="font-space text-xs">Integration: $4.7M</p>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="font-ibm text-green-700">✓ Low Risk</p>
                        <p className="font-space text-xs">Team Stability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="text-center">
                <p className="font-ibm text-lg text-brand-gunmetal">
                  Complete technical intelligence integrated directly
                </p>
                <p className="font-ibm text-sm text-brand-teal mt-2">
                  No external consultants needed • 48-hour turnaround
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}