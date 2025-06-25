import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function BusinessModelSlide(): JSX.Element {
  const [selectedModel, setSelectedModel] = useState<'transaction' | 'subscription' | 'hybrid'>('hybrid');

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
            PROVEN ECONOMICS. IMMEDIATE VALUE.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 mb-8">
            <h3 className="font-space text-2xl mb-6 text-center">
              The Math Is Simple
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="font-space text-3xl text-brand-teal mb-2">10,000</p>
                <p className="font-ibm text-sm">Annual deals</p>
              </div>
              <div className="text-center">
                <p className="font-space text-3xl text-brand-teal mb-2">30%</p>
                <p className="font-ibm text-sm">Need tech intelligence</p>
              </div>
              <div className="text-center">
                <p className="font-space text-3xl text-brand-teal mb-2">$5K</p>
                <p className="font-ibm text-sm">Average price point</p>
              </div>
            </div>

            <div className="bg-brand-teal text-white p-6 rounded-lg text-center">
              <p className="font-space text-3xl mb-2">$15M</p>
              <p className="font-ibm">Incremental annual revenue</p>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-ibm text-center mb-4">Choose Your Model:</p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setSelectedModel('transaction')}
              variant={selectedModel === 'transaction' ? 'default' : 'outline'}
            >
              Per Transaction
            </Button>
            <Button
              onClick={() => setSelectedModel('subscription')}
              variant={selectedModel === 'subscription' ? 'default' : 'outline'}
            >
              Enterprise License
            </Button>
            <Button
              onClick={() => setSelectedModel('hybrid')}
              variant={selectedModel === 'hybrid' ? 'default' : 'outline'}
              className={selectedModel === 'hybrid' ? 'bg-brand-teal' : ''}
            >
              Hybrid Model
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {selectedModel === 'hybrid' && (
            <Card className="p-6 border-2 border-brand-teal">
              <h4 className="font-space text-lg mb-4">Recommended: Hybrid Model</h4>
              <div className="space-y-3">
                <p className="font-ibm">• Base: $2K per transaction</p>
                <p className="font-ibm">• Enterprise clients: $200K annual unlimited</p>
                <p className="font-ibm">• Revenue share: 70/30 split</p>
                <p className="font-ibm">• White-labeled as "Intralinks Intelligence"</p>
              </div>
            </Card>
          )}
          
          {selectedModel === 'transaction' && (
            <Card className="p-6 border-2 border-brand-teal">
              <h4 className="font-space text-lg mb-4">Per Transaction Model</h4>
              <div className="space-y-3">
                <p className="font-ibm">• $2K-$5K per technical assessment</p>
                <p className="font-ibm">• Pay-as-you-go for all deal types</p>
                <p className="font-ibm">• Revenue share: 60/40 split</p>
                <p className="font-ibm">• Lower commitment, higher per-unit cost</p>
              </div>
            </Card>
          )}
          
          {selectedModel === 'subscription' && (
            <Card className="p-6 border-2 border-brand-teal">
              <h4 className="font-space text-lg mb-4">Enterprise License Model</h4>
              <div className="space-y-3">
                <p className="font-ibm">• $500K annual platform license</p>
                <p className="font-ibm">• Unlimited assessments for enterprise clients</p>
                <p className="font-ibm">• Fixed revenue, predictable costs</p>
                <p className="font-ibm">• Full white-label integration</p>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}