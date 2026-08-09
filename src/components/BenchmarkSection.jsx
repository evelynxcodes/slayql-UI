import React from 'react';
import { Trophy, TrendingUp } from 'lucide-react';
import { BENCHMARK_DATA } from '../mock/mockData';

const TONE_BAR = {
  emerald: 'bg-emerald-500',
  rose: 'bg-rose-400',
  indigo: 'bg-indigo-500',
  slate: 'bg-slate-300',
};
const TONE_TEXT = {
  emerald: 'text-emerald-700',
  rose: 'text-rose-700',
  indigo: 'text-indigo-700',
  slate: 'text-slate-600',
};

export default function BenchmarkSection() {
  const delta = (BENCHMARK_DATA.slayql.pct - BENCHMARK_DATA.baseline.pct).toFixed(2);

  return (
    <section id="benchmark" class="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <Trophy class="w-3.5 h-3.5" />
            Benchmark
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Evaluated on Spider 2.0-Lite
          </h2>
          <p class="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            {BENCHMARK_DATA.total} instances, execution accuracy (EX) against gold results.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 items-center mb-14">

          {/* Headline stat */}
          <div class="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 text-center">
            <div class="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-2">Execution Accuracy</div>
            <div class="text-6xl font-extrabold text-slate-900 tracking-tight">{BENCHMARK_DATA.slayql.pct}%</div>
            <div class="mt-2 text-sm text-slate-500">{BENCHMARK_DATA.slayql.correct} / {BENCHMARK_DATA.total} Queries Correct</div>
          </div>

          {/* Comparison */}
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-sm mb-1.5">
                  <span class="text-slate-600 font-medium">{BENCHMARK_DATA.baseline.label}</span>
                  <span class="font-semibold text-slate-700">{BENCHMARK_DATA.baseline.pct}%</span>
                </div>
                <div class="h-2.5 rounded-full bg-slate-200"><div class="h-2.5 rounded-full bg-slate-400" style={{ width: `${BENCHMARK_DATA.baseline.pct}%` }}></div></div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1.5">
                  <span class="text-indigo-700 font-semibold">{BENCHMARK_DATA.slayql.label}</span>
                  <span class="font-semibold text-indigo-700">{BENCHMARK_DATA.slayql.pct}%</span>
                </div>
                <div class="h-2.5 rounded-full bg-slate-200"><div class="h-2.5 rounded-full bg-indigo-600" style={{ width: `${BENCHMARK_DATA.slayql.pct}%` }}></div></div>
              </div>
              <div class="pt-2 flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                <TrendingUp class="w-4 h-4" />
                +{delta}% improvement over AutoLink baseline
              </div>
            </div>
          </div>
        </div>

        {/* Category breakdown */}
        <div class="mb-8">
          <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4 text-center">Category Breakdown</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENCHMARK_DATA.categories.map((cat, idx) => (
              <div key={idx} class="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <div class={`text-2xl font-bold ${TONE_TEXT[cat.tone]}`}>{cat.count}</div>
                <div class="text-xs text-slate-500 mt-1 leading-snug">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <p class="text-xs text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">{BENCHMARK_DATA.sourceNote}</p>

      </div>
    </section>
  );
}
