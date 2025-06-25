import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, MessageSquare, BarChart3, FolderOpen, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

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
                {/* Intralinks UI Mock - Before */}
                <div className="bg-gray-50">
                  {/* Header */}
                  <div className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-gray-800">INTRALINKS</div>
                      </div>
                      <div className="text-sm text-gray-600">Project: TechCo Acquisition</div>
                    </div>
                  </div>
                  
                  {/* Tabs */}
                  <div className="bg-gray-100 border-b border-gray-200 px-6">
                    <div className="flex gap-6">
                      <button className="py-3 px-1 border-b-2 border-blue-600 text-blue-600 font-medium flex items-center gap-2">
                        <FolderOpen className="w-4 h-4" />
                        Documents
                      </button>
                      <button className="py-3 px-1 text-gray-600 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Q&A
                      </button>
                      <button className="py-3 px-1 text-gray-600 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Reports
                      </button>
                      <button className="py-3 px-1 text-gray-600 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        Analytics
                      </button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-2">
                        <h3 className="font-medium text-gray-800 mb-4">Document Library</h3>
                        <div className="space-y-2">
                          <div className="p-3 bg-gray-50 rounded flex items-center justify-between">
                            <span className="text-sm">Financial Statements 2023.pdf</span>
                            <span className="text-xs text-gray-500">2.4 MB</span>
                          </div>
                          <div className="p-3 bg-gray-50 rounded flex items-center justify-between">
                            <span className="text-sm">Customer Contracts.zip</span>
                            <span className="text-xs text-gray-500">15.8 MB</span>
                          </div>
                          <div className="p-3 bg-gray-50 rounded flex items-center justify-between">
                            <span className="text-sm">Board Meeting Minutes.docx</span>
                            <span className="text-xs text-gray-500">856 KB</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-800 mb-4">Activity Summary</h3>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <p className="text-gray-600">Documents Uploaded</p>
                            <p className="text-2xl font-semibold">147</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-gray-600">Q&A Pending</p>
                            <p className="text-2xl font-semibold">23</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-gray-600">Users Active</p>
                            <p className="text-2xl font-semibold">12</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gray-100 rounded-lg text-center">
                      <p className="text-gray-500 font-ibm">
                        Technical assessment happens outside the platform
                      </p>
                    </div>
                  </div>
                </div>
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
                {/* Intralinks UI Mock - After with TechScan IQ */}
                <div className="bg-gray-50">
                  {/* Header */}
                  <div className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-gray-800">INTRALINKS</div>
                        <div className="bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          ✨ TechScan IQ Enabled
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">Project: TechCo Acquisition</div>
                    </div>
                  </div>
                  
                  {/* Tabs */}
                  <div className="bg-gray-100 border-b border-gray-200 px-6">
                    <div className="flex gap-6">
                      <button className="py-3 px-1 text-gray-600 flex items-center gap-2">
                        <FolderOpen className="w-4 h-4" />
                        Documents
                      </button>
                      <button className="py-3 px-1 text-gray-600 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Q&A
                      </button>
                      <button className="py-3 px-1 text-gray-600 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Reports
                      </button>
                      <button className="py-3 px-1 text-gray-600 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        Analytics
                      </button>
                      <button className="py-3 px-1 border-b-2 border-brand-teal text-brand-teal font-medium flex items-center gap-2">
                        ✨ Tech Intelligence
                      </button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-white">
                    {/* AI Intelligence Panel */}
                    <div className="bg-gradient-to-r from-brand-teal/5 to-brand-teal/10 border border-brand-teal rounded-lg p-6 mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-space text-xl text-brand-black">AI-Powered Technical Analysis</h3>
                          <p className="font-ibm text-sm text-brand-gunmetal mt-1">
                            Generated in 48 hours • 5,000+ sources analyzed • No seller input required
                          </p>
                        </div>
                        <Button size="sm" className="bg-brand-teal text-white">
                          View Full Report
                        </Button>
                      </div>
                      
                      {/* Key Metrics */}
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Technical Score</p>
                          <p className="text-2xl font-bold text-brand-gunmetal">67/100</p>
                          <p className="text-xs text-yellow-600">Medium Risk</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Integration Cost</p>
                          <p className="text-2xl font-bold text-brand-gunmetal">$4.7M</p>
                          <p className="text-xs text-gray-600">18-24 months</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Team Stability</p>
                          <p className="text-2xl font-bold text-green-600">85%</p>
                          <p className="text-xs text-gray-600">Low flight risk</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Scalability</p>
                          <p className="text-2xl font-bold text-red-600">Limited</p>
                          <p className="text-xs text-gray-600">Architecture concerns</p>
                        </div>
                      </div>
                      
                      {/* Critical Findings */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                          <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">Critical: Database architecture limits scale beyond 10M users</p>
                            <p className="text-xs text-gray-600 mt-1">Source: GitHub commits, engineering blog posts, API response times</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">Medium: 67% revenue concentration in top 3 customers</p>
                            <p className="text-xs text-gray-600 mt-1">Source: SEC filings, customer case studies, renewal patterns</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">Positive: Strong engineering culture with 85% retention</p>
                            <p className="text-xs text-gray-600 mt-1">Source: LinkedIn data, Glassdoor reviews, hiring patterns</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="flex gap-4">
                      <Button className="flex-1 bg-brand-teal text-white">
                        Download Technical DD Report
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Schedule Expert Call
                      </Button>
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