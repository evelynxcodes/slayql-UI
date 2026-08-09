import React, { useState } from 'react';
import { MessageCircle, Search, Network, Target, Repeat, FileCheck2, PlayCircle, BarChart3, Brain, Anchor, Cpu, ChevronDown } from 'lucide-react';

const CLUSTERS = [
  {
    number: '01',
    title: 'Understand',
    icon: Brain,
    tone: 'indigo',
    summary: 'Parse the question and pull in the exact schema neighbourhood it needs — nothing more.',
    stages: [
      { icon: MessageCircle, title: 'User Question', desc: 'Natural language question over a large, unfamiliar database schema.' },
      { icon: Search, title: 'Dense Retrieval', desc: 'BGE-Large embeddings rank candidate columns by semantic similarity to the query.' },
      { icon: Network, title: 'Graph Schema Reasoning (RBP)', desc: 'Relevance-Based Propagation random-walks over the foreign-key graph, pulling in bridge tables that dense retrieval alone would miss.' },
    ],
  },
  {
    number: '02',
    title: 'Ground',
    icon: Anchor,
    tone: 'amber',
    summary: 'Tie the question’s literal values to real column contents, exploring turn by turn.',
    stages: [
      { icon: Target, title: 'Value Grounding (BM25)', desc: 'A BM25 index over column values attributes string literals in the question to the right column — not just the right description.' },
      { icon: Repeat, title: 'Agentic Schema Exploration (IT-EE)', desc: 'The model requests more schema context turn by turn, exiting early once the candidate schema set stabilizes.' },
    ],
  },
  {
    number: '03',
    title: 'Generate & Verify',
    icon: Cpu,
    tone: 'emerald',
    summary: 'Produce SQL under a strict contract, execute candidates, and vote on the winner.',
    stages: [
      { icon: FileCheck2, title: 'SQL Generation (QOC)', desc: 'Strict output contracts force SQL into a single fenced code block, eliminating silent parsing failures.' },
      { icon: PlayCircle, title: 'Execution & Selection', desc: 'Candidate SQL statements are executed and the majority result is chosen by pairwise consistency voting.' },
      { icon: BarChart3, title: 'Answer + Visualization', desc: 'Results are returned as SQL, a data table, and a chart.' },
    ],
  },
];

const TONE_MAP = {
  indigo: { badge: 'bg-indigo-50 border-indigo-200 text-indigo-600', ring: 'ring-indigo-200', line: 'bg-indigo-300', dot: 'bg-indigo-500' },
  amber: { badge: 'bg-amber-50 border-amber-200 text-amber-600', ring: 'ring-amber-200', line: 'bg-amber-300', dot: 'bg-amber-500' },
  emerald: { badge: 'bg-emerald-50 border-emerald-200 text-emerald-600', ring: 'ring-emerald-200', line: 'bg-emerald-300', dot: 'bg-emerald-500' },
};

export default function ArchitectureSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const toggleCluster = (idx) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="architecture" class="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <span class="inline-block w-2 h-2 rounded-full bg-indigo-500"></span>
            Architecture
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            How SlayQL Works
          </h2>
          <p class="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Three functional clusters feed one non-destructive pipeline, built on top of the AutoLink agentic exploration baseline. Click a cluster to see its stages.
          </p>
        </div>

        {/* Cluster row — 3 numbered inputs */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
          {CLUSTERS.map((cluster, idx) => {
            const Icon = cluster.icon;
            const tone = TONE_MAP[cluster.tone];
            const isActive = activeIdx === idx;
            return (
              <button
                key={cluster.title}
                type="button"
                onClick={() => toggleCluster(idx)}
                aria-expanded={isActive}
                class={`text-left p-5 rounded-2xl border bg-white shadow-sm transition-all duration-300 ${isActive ? `${tone.ring} ring-2 shadow-lg` : 'border-slate-200 hover:border-slate-300 hover:shadow-md'}`}
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <div class={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center ${tone.badge}`}>
                      <Icon class="w-5 h-5" />
                    </div>
                    <div>
                      <div class="text-[11px] font-bold text-slate-400 tracking-wider">{cluster.number}</div>
                      <div class="text-sm font-bold text-slate-900">{cluster.title}</div>
                    </div>
                  </div>
                  <ChevronDown class={`w-4 h-4 text-slate-400 mt-1 flex-shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                </div>
                <p class="mt-3 text-xs text-slate-500 leading-relaxed">{cluster.summary}</p>
              </button>
            );
          })}
        </div>

        {/* Convergence connectors — desktop only, pulse suggests data flowing downstream */}
        <div class="hidden lg:block relative h-10" aria-hidden="true">
          <div class="grid grid-cols-3 h-5">
            {CLUSTERS.map((cluster, idx) => (
              <div key={cluster.title} class="flex justify-center">
                <span class={`relative w-px h-5 transition-opacity duration-300 ${TONE_MAP[cluster.tone].line} ${activeIdx === idx ? 'opacity-100' : 'opacity-40'}`}>
                  <span class={`flow-dot-y ${TONE_MAP[cluster.tone].dot}`} style={{ animationDelay: `${idx * 0.3}s` }}></span>
                </span>
              </div>
            ))}
          </div>
          <div class="absolute left-[16.6667%] right-[16.6667%] top-5 h-1">
            <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-slate-300"></div>
            <span class="flow-dot-x bg-slate-400"></span>
          </div>
          <div class="absolute left-1/2 -translate-x-1/2 top-5 w-px h-5 bg-slate-300">
            <span class="flow-dot-y bg-slate-400" style={{ animationDelay: '0.6s' }}></span>
          </div>
        </div>

        {/* Expanded detail panel — one cluster's stages at a time */}
        {activeIdx !== null && (
          <div class="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 animate-fade-in-up">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CLUSTERS[activeIdx].stages.map((stage) => {
                const StageIcon = stage.icon;
                const tone = TONE_MAP[CLUSTERS[activeIdx].tone];
                return (
                  <div key={stage.title} class={`p-4 rounded-xl border ${tone.badge} bg-white flex items-start gap-3`}>
                    <div class={`flex-shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center ${tone.badge}`}>
                      <StageIcon class="w-4 h-4" />
                    </div>
                    <div>
                      <div class="text-sm font-bold text-slate-900">{stage.title}</div>
                      <div class="text-xs text-slate-500 mt-1 leading-relaxed">{stage.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
