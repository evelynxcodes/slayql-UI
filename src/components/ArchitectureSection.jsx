import React from 'react';
import { MessageCircle, Search, Network, Target, Repeat, FileCheck2, PlayCircle, BarChart3, ArrowDown } from 'lucide-react';

const STAGES = [
  { icon: MessageCircle, title: 'User Question', desc: 'Natural language question over a large, unfamiliar database schema.', tone: 'slate' },
  { icon: Search, title: 'Dense Retrieval', desc: 'BGE-Large embeddings rank candidate columns by semantic similarity to the query.', tone: 'indigo' },
  { icon: Network, title: 'Graph Schema Reasoning (RBP)', desc: 'Relevance-Based Propagation random-walks over the foreign-key graph, pulling in bridge tables that dense retrieval alone would miss.', tone: 'blue' },
  { icon: Target, title: 'Value Grounding (BM25)', desc: 'A BM25 index over column values attributes string literals in the question to the right column — not just the right description.', tone: 'amber' },
  { icon: Repeat, title: 'Agentic Schema Exploration (IT-EE)', desc: 'The model requests more schema context turn by turn, exiting early once the candidate schema set stabilizes.', tone: 'violet' },
  { icon: FileCheck2, title: 'SQL Generation (QOC)', desc: 'Strict output contracts force SQL into a single fenced code block, eliminating silent parsing failures.', tone: 'emerald' },
  { icon: PlayCircle, title: 'Execution & Selection', desc: 'Candidate SQL statements are executed and the majority result is chosen by pairwise consistency voting.', tone: 'sky' },
  { icon: BarChart3, title: 'Answer + Visualization', desc: 'Results are returned as SQL, a data table, and a chart.', tone: 'indigo' },
];

const TONE_MAP = {
  slate: 'bg-slate-50 border-slate-200 text-slate-600',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
  blue: 'bg-blue-50 border-blue-200 text-blue-600',
  amber: 'bg-amber-50 border-amber-200 text-amber-600',
  violet: 'bg-violet-50 border-violet-200 text-violet-600',
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-600',
  sky: 'bg-sky-50 border-sky-200 text-sky-600',
};

export default function ArchitectureSection() {
  return (
    <section id="architecture" class="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <span class="inline-block w-2 h-2 rounded-full bg-indigo-500"></span>
            Architecture
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            How SlayQL Works
          </h2>
          <p class="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            A non-destructive, 4-module pipeline built on top of the AutoLink agentic exploration baseline.
          </p>
        </div>

        <div class="flex flex-col items-center">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <React.Fragment key={idx}>
                <div class={`w-full max-w-md flex items-center gap-4 p-4 rounded-2xl border ${TONE_MAP[stage.tone]} bg-white shadow-sm`}>
                  <div class={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center ${TONE_MAP[stage.tone]}`}>
                    <Icon class="w-5 h-5" />
                  </div>
                  <div class="text-left">
                    <div class="text-sm font-bold text-slate-900">{stage.title}</div>
                    <div class="text-xs text-slate-500 mt-0.5 leading-relaxed">{stage.desc}</div>
                  </div>
                </div>
                {idx < STAGES.length - 1 && (
                  <ArrowDown class="w-4 h-4 text-slate-300 my-2" />
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
