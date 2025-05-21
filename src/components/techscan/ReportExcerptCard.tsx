import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ReportExcerptCard() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [autoExpanding, setAutoExpanding] = useState(true);

  // Sections data
  const sections = [
    {
      id: "summary",
      title: "Summary Verdict",
      content: "Scalable to MVP-stage traction, but re-architecture likely needed for Series A+.",
      score: "6.1 / 10",
      isWarning: true
    },
    {
      id: "architecture",
      title: "🧱 Architecture Type",
      items: [
        "Current product is deployed as a monolith, evidenced by a single large JavaScript bundle, tightly coupled routes, and lack of lazy-loading or dynamic module imports.",
        "No evidence of microservices or service-oriented architecture. API endpoints appear to be routed through a centralized controller.",
        "Implication: Monoliths are fast to build but often brittle at scale — changes to one feature can risk breaking others, and performance bottlenecks become hard to isolate."
      ]
    },
    {
      id: "api",
      title: "🔌 API & Integration Design",
      items: [
        "RESTful API endpoints inferred from data layer and fetch/XHR requests.",
        "URL patterns suggest predictable routing, but no visible API versioning, rate-limiting headers, or auth token expiry controls.",
        "No GraphQL observed. No API documentation publicly accessible or inferred from requests.",
        "Implication: Current API layer is fine for early traction, but lacks enterprise-readiness. Absence of versioning and rate-limiting raises maintainability concerns."
      ]
    },
    {
      id: "devops",
      title: "⚙️ DevOps & Deployment Pipeline",
      items: [
        "Deployment appears to be manual or semi-automated. Last deploy timestamp suggests human-triggered pushes.",
        "GitHub Actions detected, but no signs of test coverage enforcement or staged build processes.",
        "No evidence of blue/green or canary deployment strategies.",
        "Rollback mechanisms not detected.",
        "Implication: Teams deploying this way are vulnerable to introducing bugs directly into production. Without proper CI/CD discipline, shipping velocity becomes risky beyond a small team."
      ]
    },
    {
      id: "infrastructure",
      title: "🖥 Hosting & Infrastructure",
      items: [
        "Hosted on Vercel, indicating ease of frontend deployment but constrained backend flexibility.",
        "No Kubernetes, Docker Swarm, or serverless orchestration detected.",
        "CDN in use via Cloudflare; good for static content performance.",
        "Implication: Hosting choice supports fast prototyping but lacks the control needed for performance tuning or cost optimization at scale."
      ]
    },
    {
      id: "codebase",
      title: "📏 Modularity & Codebase Hygiene",
      items: [
        "Use of Bootstrap 4 and older React (v16.8) suggests a codebase that hasn't seen recent modernization.",
        "No evidence of component abstraction libraries, atomic design, or style isolation patterns.",
        "Heavily minified JS with little evidence of tree-shaking or bundle optimization.",
        "Implication: Frontend likely suffers from tight coupling and duplication. Future team scaling or feature branching will be slow unless major refactors are done."
      ]
    },
    {
      id: "commentary",
      title: "💬 Analyst Notes & Recommendations",
      quote: "\"This codebase was clearly built by a lean team optimizing for speed. That's normal and expected in early-stage SaaS. But from an investment standpoint, there are signs of technical debt that will need to be repaid soon — especially if traction increases rapidly. I'd advise asking the founder about their scaling plan, expected infra upgrades, and code ownership model before Series A.\""
    }
  ];

  // Auto expand sections with delay
  useEffect(() => {
    if (!autoExpanding) return;
    
    let currentIndex = 0;
    
    const expandInterval = setInterval(() => {
      if (currentIndex < sections.length) {
        setOpenSections(prev => [...prev, sections[currentIndex].id]);
        currentIndex++;
      } else {
        clearInterval(expandInterval);
        setAutoExpanding(false);
      }
    }, 800);
    
    return () => clearInterval(expandInterval);
  }, [autoExpanding]);

  const handleAccordionChange = (value: string) => {
    setAutoExpanding(false);
    
    if (openSections.includes(value)) {
      setOpenSections(openSections.filter(v => v !== value));
    } else {
      setOpenSections([...openSections, value]);
    }
  };

  return (
    <div className="bg-[#12263A] p-6 rounded-xl border border-[#1E3A5F] shadow-lg transition-all hover:shadow-cyan-500/10 font-mono">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className="text-yellow-400 mr-2">🔍</span> 
        Scalability & Architecture
      </h3>
      
      <div className="mb-4 flex items-center">
        <div className="font-bold text-white mr-2">Tech Scalability Score:</div>
        <div className="bg-[#0A1A2F]/60 p-1 px-2 rounded text-yellow-400 font-medium">{sections[0].score}</div>
      </div>
      
      <Accordion 
        type="multiple" 
        value={openSections} 
        onValueChange={(v) => setAutoExpanding(false)}
        className="border-0"
      >
        {sections.map((section) => (
          <AccordionItem 
            key={section.id} 
            value={section.id} 
            className="border-b border-[#1E3A5F] last:border-0"
          >
            <AccordionTrigger 
              onClick={() => handleAccordionChange(section.id)}
              className="hover:no-underline py-3 px-2 rounded-t-lg hover:bg-[#1E3A5F]/20 text-left font-medium"
            >
              {section.id === "summary" ? (
                <div className="bg-[#0A1A2F]/60 p-2 rounded flex items-center w-full">
                  <span className="text-yellow-400 mr-2">⚠️</span>
                  <span className="font-medium">{section.content}</span>
                </div>
              ) : (
                <span className="text-[#22D3EE]">{section.title}</span>
              )}
            </AccordionTrigger>
            
            <AccordionContent className="pt-3 px-2">
              {section.items && (
                <ul className="space-y-3 text-gray-300 pl-2">
                  {section.items.map((item, index) => (
                    <li key={index} className="list-none">
                      {item.startsWith("Implication:") ? (
                        <div className="mt-2">
                          <span className="text-yellow-400 font-semibold">Implication: </span>
                          <span>{item.substring(12)}</span>
                        </div>
                      ) : (
                        <div className="flex">
                          <span className="mr-2 text-[#22D3EE]">•</span>
                          <span>{item}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              
              {section.quote && (
                <p className="text-gray-300 italic pl-4 border-l-2 border-[#1E3A5F] py-2">
                  {section.quote}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}