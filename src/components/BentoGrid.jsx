import React from 'react';
import { Network, Target, Repeat, LineChart } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="features" class="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            Capabilities
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Built for Scalable Schema Exploration.
          </h2>
          <p class="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Four modules, each targeting a specific failure mode of dense-retrieval-only Text-to-SQL.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Card 1 */}
          <div class="bento-card group p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300">
            <div class="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
              <Network class="w-5 h-5 text-indigo-600" />
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Intelligent Schema Exploration</h3>
            <p class="text-sm text-slate-500 leading-relaxed">SlayQL automatically discovers relevant tables, columns, and relationships using graph-based reasoning over the foreign-key structure.</p>
            <ul class="mt-5 space-y-1.5 text-xs text-slate-600">
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Foreign-key graph propagation</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Multi-hop relationship discovery</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Reduced schema noise</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div class="bento-card group p-6 rounded-2xl border border-slate-200 bg-white hover:border-amber-200 hover:shadow-xl hover:shadow-amber-50 transition-all duration-300">
            <div class="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
              <Target class="w-5 h-5 text-amber-600" />
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Value-Grounded Query Understanding</h3>
            <p class="text-sm text-slate-500 leading-relaxed">SlayQL connects user intent with actual database values instead of matching only on column descriptions.</p>
            <ul class="mt-5 space-y-1.5 text-xs text-slate-600">
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> BM25 value retrieval</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Entity matching</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Ambiguous value resolution</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div class="bento-card group p-6 rounded-2xl border border-slate-200 bg-white hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300">
            <div class="w-11 h-11 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-5 group-hover:bg-violet-100 transition-colors">
              <Repeat class="w-5 h-5 text-violet-600" />
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Agentic SQL Generation</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Generate reliable SQL through iterative reasoning, dynamic schema exploration, and revision — not a single blind pass.</p>
            <ul class="mt-5 space-y-1.5 text-xs text-slate-600">
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Dynamic schema exploration (IT-EE)</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> SQL revision loop</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Strict output formatting (QOC)</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div class="bento-card group p-6 rounded-2xl border border-slate-200 bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-50 transition-all duration-300">
            <div class="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
              <LineChart class="w-5 h-5 text-teal-600" />
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Interactive Data Exploration</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Understand results beyond the raw SQL — inspect the generated query, the returned table, and an automatic visualization side by side.</p>
            <ul class="mt-5 space-y-1.5 text-xs text-slate-600">
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Automatic visualization</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Query explanation</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Dataset insights</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
