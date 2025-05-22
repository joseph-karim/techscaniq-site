import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Calendar, Building, Activity, Check, Clock, ShieldCheck, BarChart, FileSpreadsheet } from "lucide-react";

type InvestmentMemoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function InvestmentMemoModal({ open, onOpenChange }: InvestmentMemoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 bg-[#0A1A2F] border border-[#1E3A5F] text-white w-[95vw] sm:w-auto">
        <DialogTitle className="sr-only">LP-Ready Technical Investment Memo</DialogTitle>
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <div className="mb-6 pb-4 border-b border-[#1E3A5F]">
            <h2 className="text-2xl font-bold text-white mb-1">LP-Ready Technical Investment Memo</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4">
              <div className="flex items-center">
                <Building className="h-4 w-4 text-[#22D3EE] mr-2 flex-shrink-0" />
                <span className="text-sm"><span className="text-gray-400">Target:</span> SaaSCo</span>
              </div>
              <div className="flex items-center">
                <Activity className="h-4 w-4 text-[#22D3EE] mr-2 flex-shrink-0" />
                <span className="text-sm"><span className="text-gray-400">Stage:</span> Seed</span>
              </div>
              <div className="flex items-center">
                <FileSpreadsheet className="h-4 w-4 text-[#22D3EE] mr-2 flex-shrink-0" />
                <span className="text-sm"><span className="text-gray-400">Vertical:</span> B2B Workflow</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-[#22D3EE] mr-2 flex-shrink-0" />
                <span className="text-sm"><span className="text-gray-400">Date:</span> May 2025</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
              <div className="flex items-center">
                <span className="text-sm"><span className="text-gray-400">Reviewer:</span> TechScan IQ Analyst Team</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">
                  <span className="text-gray-400">Tech Health Score:</span>
                  <span className="ml-1 text-green-400 font-medium">7.8 / 10</span>
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center bg-green-400/10 p-2 px-3 rounded border border-green-400/30">
              <Check className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-sm text-green-400">Technically sound for seed stage; minor debt, no critical blockers.</span>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-[#22D3EE] mb-3">Executive Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                SaaSCo's technical infrastructure is well-suited for its current scale and customer load. The team has made pragmatic trade-offs — opting for a monolithic Node.js + React app hosted on Vercel — that support rapid iteration. The codebase is clean, security is enforced, and data infrastructure supports growth-stage analytics. The product will likely require architectural upgrades within 12–18 months, but there are no technical show-stoppers.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-[#22D3EE] mb-3">Stack Summary</h3>
              <div className="bg-[#12263A] rounded-lg overflow-hidden border border-[#1E3A5F]">
                {/* Desktop Table - Hidden on Mobile */}
                <div className="hidden sm:block">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#1E3A5F]/50">
                        <th className="text-left py-2 px-4 font-medium text-white">Layer</th>
                        <th className="text-left py-2 px-4 font-medium text-white">Tech Used</th>
                        <th className="text-left py-2 px-4 font-medium text-white">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#1E3A5F]">
                        <td className="py-2 px-4 text-sm">Frontend</td>
                        <td className="py-2 px-4 text-sm">React 16.8, Bootstrap 4</td>
                        <td className="py-2 px-4 text-sm text-gray-300">Stable, but outdated; rewrite planned for Q3 2025</td>
                      </tr>
                      <tr className="border-t border-[#1E3A5F]">
                        <td className="py-2 px-4 text-sm">Backend</td>
                        <td className="py-2 px-4 text-sm">Node.js, Express</td>
                        <td className="py-2 px-4 text-sm text-gray-300">Monolithic, but modular structure in place</td>
                      </tr>
                      <tr className="border-t border-[#1E3A5F]">
                        <td className="py-2 px-4 text-sm">Database</td>
                        <td className="py-2 px-4 text-sm">MongoDB</td>
                        <td className="py-2 px-4 text-sm text-gray-300">Appropriate for current workloads</td>
                      </tr>
                      <tr className="border-t border-[#1E3A5F]">
                        <td className="py-2 px-4 text-sm">Hosting/CDN</td>
                        <td className="py-2 px-4 text-sm">Vercel + Cloudflare</td>
                        <td className="py-2 px-4 text-sm text-gray-300">Fast deploys; limited backend control</td>
                      </tr>
                      <tr className="border-t border-[#1E3A5F]">
                        <td className="py-2 px-4 text-sm">DevOps</td>
                        <td className="py-2 px-4 text-sm">GitHub Actions</td>
                        <td className="py-2 px-4 text-sm text-gray-300">CI in place; CD partially manual</td>
                      </tr>
                      <tr className="border-t border-[#1E3A5F]">
                        <td className="py-2 px-4 text-sm">Security</td>
                        <td className="py-2 px-4 text-sm">HTTPS, HSTS, CSP headers</td>
                        <td className="py-2 px-4 text-sm text-gray-300">Solid coverage; no CVEs or leaks found</td>
                      </tr>
                      <tr className="border-t border-[#1E3A5F]">
                        <td className="py-2 px-4 text-sm">Analytics</td>
                        <td className="py-2 px-4 text-sm">Segment, GA4, Mixpanel</td>
                        <td className="py-2 px-4 text-sm text-gray-300">Event tracking and attribution functional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="sm:hidden divide-y divide-[#1E3A5F]">
                  <div className="p-4">
                    <div className="font-medium mb-1">Frontend</div>
                    <div className="text-sm mb-1">React 16.8, Bootstrap 4</div>
                    <div className="text-sm text-gray-300">Stable, but outdated; rewrite planned for Q3 2025</div>
                  </div>
                  <div className="p-4">
                    <div className="font-medium mb-1">Backend</div>
                    <div className="text-sm mb-1">Node.js, Express</div>
                    <div className="text-sm text-gray-300">Monolithic, but modular structure in place</div>
                  </div>
                  <div className="p-4">
                    <div className="font-medium mb-1">Database</div>
                    <div className="text-sm mb-1">MongoDB</div>
                    <div className="text-sm text-gray-300">Appropriate for current workloads</div>
                  </div>
                  <div className="p-4">
                    <div className="font-medium mb-1">Hosting/CDN</div>
                    <div className="text-sm mb-1">Vercel + Cloudflare</div>
                    <div className="text-sm text-gray-300">Fast deploys; limited backend control</div>
                  </div>
                  <div className="p-4">
                    <div className="font-medium mb-1">DevOps</div>
                    <div className="text-sm mb-1">GitHub Actions</div>
                    <div className="text-sm text-gray-300">CI in place; CD partially manual</div>
                  </div>
                  <div className="p-4">
                    <div className="font-medium mb-1">Security</div>
                    <div className="text-sm mb-1">HTTPS, HSTS, CSP headers</div>
                    <div className="text-sm text-gray-300">Solid coverage; no CVEs or leaks found</div>
                  </div>
                  <div className="p-4">
                    <div className="font-medium mb-1">Analytics</div>
                    <div className="text-sm mb-1">Segment, GA4, Mixpanel</div>
                    <div className="text-sm text-gray-300">Event tracking and attribution functional</div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-[#22D3EE] mb-3">Red Flags Addressed</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Monolithic Architecture:</h4>
                  <p className="text-gray-300 pl-4">Founders confirmed a planned migration to a microservices-like split (Auth, Billing, AppCore) by Q2 2026, with staged rollout.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Outdated Frontend:</h4>
                  <p className="text-gray-300 pl-4">React 18 migration underway. Current stack is stable and test-covered; no breaking issues. Design system being modernized in parallel.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">No A/B Testing Infrastructure:</h4>
                  <p className="text-gray-300 pl-4">Team uses Intercom and custom feature flags to run manual experiments. Considering integration with LaunchDarkly post-Series A.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-[#22D3EE] mb-3">Velocity & Engineering Culture</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#12263A] p-3 sm:p-4 rounded-lg border border-[#1E3A5F]">
                  <div className="flex items-center mb-2">
                    <Activity className="h-4 w-4 text-[#22D3EE] mr-2" />
                    <span className="font-medium">GitHub Activity</span>
                  </div>
                  <p className="text-gray-300 text-sm">8+ commits in the past 10 days</p>
                </div>
                <div className="bg-[#12263A] p-3 sm:p-4 rounded-lg border border-[#1E3A5F]">
                  <div className="flex items-center mb-2">
                    <Clock className="h-4 w-4 text-[#22D3EE] mr-2" />
                    <span className="font-medium">Deployment Cycle</span>
                  </div>
                  <p className="text-gray-300 text-sm">2–4 days average time to production</p>
                </div>
                <div className="bg-[#12263A] p-3 sm:p-4 rounded-lg border border-[#1E3A5F]">
                  <div className="flex items-center mb-2">
                    <Building className="h-4 w-4 text-[#22D3EE] mr-2" />
                    <span className="font-medium">Team</span>
                  </div>
                  <p className="text-gray-300 text-sm">3 FT engineers, including a founding CTO with prior exit</p>
                </div>
                <div className="bg-[#12263A] p-3 sm:p-4 rounded-lg border border-[#1E3A5F]">
                  <div className="flex items-center mb-2">
                    <BarChart className="h-4 w-4 text-[#22D3EE] mr-2" />
                    <span className="font-medium">Culture</span>
                  </div>
                  <p className="text-gray-300 text-sm">Agile sprints, weekly demos, and post-mortems in place</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-[#22D3EE] mb-3">Security & Privacy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">SSL enforced; no exposed secrets or hardcoded credentials</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">GDPR and CCPA privacy policies in place</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">Cookies scoped correctly; minimal PII retention</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">No third-party script vulnerabilities detected</p>
                </div>
              </div>
            </section>

            <section className="bg-[#12263A] p-4 sm:p-6 rounded-lg border border-[#1E3A5F]">
              <h3 className="text-xl font-semibold text-[#22D3EE] mb-2 sm:mb-3">Investor Takeaways</h3>
              <p className="text-gray-300 italic leading-relaxed text-sm sm:text-base">
                "SaaSCo's product was clearly built for speed, not scale — and that's the right trade-off at this stage. The technical foundation is modern, secure, and extendable. The founding team has a clear roadmap to harden the architecture as user growth accelerates. No material technical risks block investment."
              </p>
            </section>

            <section className="border-t border-[#1E3A5F] pt-4">
              <div className="flex items-center">
                <ShieldCheck className="h-4 w-4 text-[#22D3EE] mr-2" />
                <h4 className="font-medium">Appendix: TechScan IQ Report Link</h4>
              </div>
              <div className="pl-6 mt-2">
                <a href="#" className="text-[#22D3EE] hover:underline flex items-center text-sm">
                  View Full Report <ArrowRight className="ml-1 h-3 w-3" />
                  <span className="ml-2 text-gray-500 text-xs">(Internal use only – detailed technical breakdown available in PDF or portal)</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}