"use client";

import { useMemo, useState } from "react";
 
 type Module = {
   id: string;
   title: string;
   description: string;
   snippet: string[];
 };
 
 const modules: Module[] = [
   {
     id: "style-guide",
     title: "Writing style guide",
     description: "Tone, voice, constraints, and cadence.",
     snippet: [
       "Voice: spare, decisive, and systems-minded.",
       "Use short sentences and active verbs.",
       "Avoid marketing fluff and generic superlatives."
     ]
   },
   {
     id: "favorite-posts",
     title: "Top internal posts",
     description: "Links and references that anchor the draft.",
     snippet: [
       "Reference: 'Governance for Agentic Systems' as the control model.",
       "Reference: 'Agent Workflows That Stick' for sequencing.",
       "Reference: 'Content OS Foundations' for structural language."
     ]
   },
   {
     id: "competitor-table",
     title: "Competitor comparison",
     description: "What the market gets wrong.",
     snippet: [
       "Competitors ship dashboards. We ship operating substrate.",
       "Competitors index content. We make content executable.",
       "Competitors focus on UX. We focus on agent reliability."
     ]
   },
   {
     id: "content-guidelines",
     title: "Content guidelines",
     description: "Constraints that keep the system coherent.",
     snippet: [
       "Every claim must map to a source artifact or workflow.",
       "Every section ends with a concrete operational takeaway.",
       "Use consistent nouns for systems and artifacts."
     ]
   },
   {
     id: "product-descriptions",
     title: "Product description",
     description: "What the product actually does.",
     snippet: [
       "Deadwater Content OS connects briefs, docs, and playbooks.",
       "Agents can traverse the graph and extend it safely.",
       "Your stack stays coherent as it scales."
     ]
   },
   {
     id: "documentation",
     title: "Documentation layer",
     description: "Implementation details and proof points.",
     snippet: [
       "Schema-bound modules ensure agents stay inside policy.",
       "Automated changelogs expose drift in real time.",
       "Review loops keep high-risk updates controlled."
     ]
   }
 ];
 
 const baseDraft = [
   "Title: The Draft That Wrote Itself",
   "Thesis: A Content OS is not a repository. It is a system that compounds knowledge and keeps agents aligned.",
   "Opening: Most teams can generate content fast. Few can keep it coherent once it starts to multiply."
 ];
 
 export function ContentDraftWorkbench() {
   const [active, setActive] = useState<string[]>([]);
 
   const toggleModule = (id: string) => {
     setActive((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
   };
 
   const orderedActive = useMemo(
     () => modules.filter((module) => active.includes(module.id)),
     [active]
   );
 
   const draftLines = useMemo(() => {
     const lines = [...baseDraft];
     orderedActive.forEach((module) => {
       lines.push("");
       lines.push(`${module.title}:`);
       lines.push(...module.snippet.map((line) => `- ${line}`));
     });
     return lines;
   }, [orderedActive]);
 
   const wordCount = useMemo(() => {
     const text = draftLines.join(" ").replace(/[-:]/g, " ");
     const words = text.trim().split(/\s+/).filter(Boolean);
     return words.length;
   }, [draftLines]);
 
   const qualityScore = Math.min(100, 40 + orderedActive.length * 10);
 
   return (
     <section className="mt-10 border border-ink-800 bg-ink-900/40 p-6">
       <div className="flex flex-col gap-3">
         <p className="eyebrow">Interactive proof of concept</p>
         <h3 className="heading-serif text-2xl text-white">Content Draft Workbench</h3>
         <p className="text-slate-300">
           Click a knowledge base to inject it into the draft. Each toggle makes the draft more precise, more grounded,
           and more operational.
         </p>
       </div>
 
       <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
         <div className="flex flex-col gap-6">
           <div className="rounded-lg border border-ink-800 bg-ink-950/60 p-4">
             <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Knowledge flow</p>
             <div className="mt-4 flex flex-wrap gap-3">
               {modules.map((module) => {
                 const isActive = active.includes(module.id);
                 return (
                   <button
                     key={module.id}
                     type="button"
                     onClick={() => toggleModule(module.id)}
                     className={`focus-ring rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
                       isActive
                         ? "border-accent-blue bg-accent-blue/20 text-white"
                         : "border-ink-700 text-slate-300 hover:border-accent-blue hover:text-white"
                     }`}
                   >
                     {module.title}
                   </button>
                 );
               })}
             </div>
             <div className="mt-5 grid gap-3 text-sm text-slate-400">
               {orderedActive.length === 0 ? (
                 <p>Turn on a layer to enrich the draft.</p>
               ) : (
                 orderedActive.map((module) => (
                   <div key={`${module.id}-details`} className="border-l border-ink-700 pl-3">
                     <p className="text-slate-200">{module.title}</p>
                     <p>{module.description}</p>
                   </div>
                 ))
               )}
             </div>
           </div>
 
           <div className="rounded-lg border border-ink-800 bg-ink-950/60 p-4">
             <div className="flex items-center justify-between">
               <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Signal quality</p>
               <p className="text-sm text-slate-300">{qualityScore}%</p>
             </div>
             <div className="mt-3 h-2 rounded-full bg-ink-800">
               <div className="h-2 rounded-full bg-accent-blue transition-all" style={{ width: `${qualityScore}%` }} />
             </div>
             <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
               <span>Active layers: {orderedActive.length}</span>
               <span>Draft length: {wordCount} words</span>
               <button
                 type="button"
                 onClick={() => setActive([])}
                 className="focus-ring border border-ink-700 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300 hover:border-accent-blue hover:text-white"
               >
                 Reset
               </button>
             </div>
           </div>
         </div>
 
         <div className="rounded-lg border border-ink-800 bg-ink-950/70 p-4">
           <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Live draft</p>
           <div className="mt-4 whitespace-pre-wrap text-sm text-slate-200">
             {draftLines.map((line, index) => (
               <p key={`${line}-${index}`} className={line ? "mb-2" : "mb-3"}>{line}</p>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 }
