import React from 'react';
import { GitFork, HelpCircle, Timer } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" class="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-rose-200 bg-rose-50 text-rose-700 text-xs font-semibold uppercase tracking-wider">
            <span class="inline-block w-2 h-2 rounded-full bg-rose-500"></span>
            The Problem
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Why Traditional Text-to-SQL Fails
          </h2>
          <p class="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Dense vector retrieval alone breaks down at enterprise scale — it misses join paths, confuses values with column names, and wastes exploration budget.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <div class="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-5">
              <GitFork class="w-5 h-5 text-rose-600" />
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Schema Complexity</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              Enterprise databases contain hundreds of tables and thousands of columns. Dense retrieval ranks columns independently, so low-similarity junction tables get dropped — leaving the model with a disconnected schema graph and no path to join on.
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <div class="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5">
              <HelpCircle class="w-5 h-5 text-amber-600" />
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Value Ambiguity</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              Keywords in a user's question may not appear anywhere in a column's name or description — only in its cell values. SlayQL-Lite grounds queries against actual database values instead of guessing which column a literal belongs to.
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <div class="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
              <Timer class="w-5 h-5 text-blue-600" />
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Inefficient Exploration</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              A fixed multi-turn exploration budget runs the same number of turns for every query, regardless of complexity — burning tokens and latency on simple questions. SlayQL-Lite exits dynamically once the candidate schema stabilizes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
