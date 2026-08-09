import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ChatWorkspace from '../components/ChatWorkspace';
import ProblemSection from '../components/ProblemSection';
import ArchitectureSection from '../components/ArchitectureSection';
import BentoGrid from '../components/BentoGrid';
import BenchmarkSection from '../components/BenchmarkSection';
import AblationSection from '../components/AblationSection';
import DatabaseConnectors from '../components/DatabaseConnectors';
import Footer from '../components/Footer';
import { Github } from 'lucide-react';

export default function LandingView({ setView, onDatabaseConnect }) {
  return (
    <div class="min-h-screen bg-white">
      <Navbar setView={setView} currentView="landing" />

      {/* Hero Section */}
      <Hero setView={setView} />

      {/* Interactive Workspace Section */}
      <section id="workspace" class="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <span class="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
              Interactive Workspace
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Explore Your Database with AI
            </h2>
            <p class="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Ask questions naturally. SlayQL discovers relevant schemas, reasons over relationships, generates SQL, and visualizes insights.
            </p>
          </div>

          <ChatWorkspace setView={setView} onQueryExecuted={(data) => console.log('Landing query execution:', data)} />
        </div>
      </section>

      {/* Problem Section */}
      <ProblemSection />

      {/* Architecture Section */}
      <ArchitectureSection />

      {/* Feature Grid */}
      <BentoGrid />

      {/* Benchmark Results */}
      <BenchmarkSection />

      {/* Ablation Study */}
      <AblationSection />

      {/* Connectors Grid */}
      <DatabaseConnectors onConnected={(dbName) => {
        if (onDatabaseConnect) onDatabaseConnect(dbName);
      }} />

      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div class="cta-grid-overlay absolute inset-0 pointer-events-none opacity-10"></div>
        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 animate-fade-in-up">
            Try SlayQL-Lite on Your Own Questions.
          </h2>
          <p class="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto font-light">
            Explore the interactive workspace, read the architecture, or dig into the code and evaluation pipeline on GitHub.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setView('onboarding')} class="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-indigo-700 font-bold text-base rounded-xl transition-all shadow-2xl">
              Try Live Demo
            </button>
            <a href="https://github.com/MDS06-Monash-2026/C-CaSE" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-base rounded-xl border border-white/30 transition-all">
              <Github class="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer setView={setView} />
    </div>
  );
}
