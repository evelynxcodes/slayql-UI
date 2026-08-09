import React from 'react';
import { Network, Target, Repeat, LineChart } from 'lucide-react';

const FEATURES = [
  {
    number: '01',
    icon: Network,
    tone: 'indigo',
    title: 'Intelligent Schema Exploration',
    desc: 'Discovers relevant tables and relationships via graph-based reasoning over the foreign-key structure — surfacing multi-hop joins dense retrieval alone would miss.',
  },
  {
    number: '02',
    icon: Target,
    tone: 'amber',
    title: 'Value-Grounded Query Understanding',
    desc: 'Ties user intent to real database values with a BM25 index over column contents, resolving ambiguous entities before SQL is written.',
  },
  {
    number: '03',
    icon: Repeat,
    tone: 'violet',
    title: 'Agentic SQL Generation',
    desc: 'Generates SQL through iterative schema exploration and revision — not a single blind pass — under a strict output contract that eliminates parsing failures.',
  },
  {
    number: '04',
    icon: LineChart,
    tone: 'teal',
    title: 'Interactive Data Exploration',
    desc: 'Every answer arrives as SQL, a data table, and an automatic chart, so results are understandable at a glance.',
  },
];

const TONE_MAP = {
  indigo: { badge: 'bg-indigo-50 border-indigo-100 group-hover:bg-indigo-100', icon: 'text-indigo-600', hover: 'hover:border-indigo-200 hover:shadow-indigo-50' },
  amber: { badge: 'bg-amber-50 border-amber-100 group-hover:bg-amber-100', icon: 'text-amber-600', hover: 'hover:border-amber-200 hover:shadow-amber-50' },
  violet: { badge: 'bg-violet-50 border-violet-100 group-hover:bg-violet-100', icon: 'text-violet-600', hover: 'hover:border-violet-200 hover:shadow-violet-50' },
  teal: { badge: 'bg-teal-50 border-teal-100 group-hover:bg-teal-100', icon: 'text-teal-600', hover: 'hover:border-teal-200 hover:shadow-teal-50' },
};

export default function BentoGrid() {
  return (
    <section id="features" class="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            Features
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Built for Scalable Schema Exploration.
          </h2>
          <p class="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Four modules, each targeting a specific failure mode of dense-retrieval-only Text-to-SQL.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const tone = TONE_MAP[feature.tone];
            return (
              <div
                key={feature.number}
                class={`bento-card group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-start ${tone.hover}`}
              >
                <span class="text-xs font-bold text-slate-300 tracking-wider mb-4">{feature.number}</span>
                <div class={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 transition-colors ${tone.badge}`}>
                  <Icon class={`w-5 h-5 ${tone.icon}`} />
                </div>
                <h3 class="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p class="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
