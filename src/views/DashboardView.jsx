import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ChatWorkspace from '../components/ChatWorkspace';
import RightSidebar from '../components/RightSidebar';
import { Database, Plus, ChevronRight, LogOut, Layout } from 'lucide-react';

export default function DashboardView({ setView, activeDatabase }) {
  const [selectedDb, setSelectedDb] = useState(activeDatabase || 'local_postgres_demo');
  const [lastExecutedQuery, setLastExecutedQuery] = useState(null);
  const [history, setHistory] = useState([
    { query: 'Show monthly revenue breakdown by region for Q1 2024', time: 'Jan 2024' },
    { query: 'Find the top 10 customers by lifetime value in the last 90 days', time: 'Apex Corp' },
    { query: 'Which products had >20% churn increase this quarter?', time: 'Pro Analytics' }
  ]);

  const handleQueryExecuted = (queryData) => {
    setLastExecutedQuery(queryData);
    
    // Add to history list if not already there
    const exists = history.some(h => h.query === queryData.prompt);
    if (!exists) {
      setHistory([
        { query: queryData.prompt, time: 'Just now' },
        ...history
      ]);
    }
  };

  return (
    <div class="h-screen bg-white flex flex-col pt-16 overflow-hidden">
      <Navbar setView={setView} currentView="dashboard" />
      
      <div class="flex-1 flex overflow-hidden">
        
        {/* Left Dashboard Sidebar */}
        <aside class="w-64 bg-slate-900 text-slate-400 border-r border-slate-800 flex flex-col justify-between">
          <div class="flex-1 flex flex-col overflow-y-auto">
            
            {/* Database Engine Selector */}
            <div class="p-4 border-b border-slate-800">
              <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Workspace cluster</span>
              <div class="flex items-center justify-between p-2 rounded-lg bg-slate-800 border border-slate-700 text-white cursor-pointer">
                <div class="flex items-center gap-2">
                  <Database class="w-4 h-4 text-indigo-400" />
                  <span class="text-xs font-semibold">{selectedDb}</span>
                </div>
                <ChevronRight class="w-3.5 h-3.5 text-slate-500" />
              </div>
            </div>

            {/* Queries History List */}
            <div class="p-4 flex-1">
              <div class="flex items-center justify-between mb-3">
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Saved Queries</span>
                <button class="p-1 rounded bg-slate-800 hover:bg-slate-700 text-white hover:text-indigo-400 transition-all">
                  <Plus class="w-3 h-3" />
                </button>
              </div>
              <div class="space-y-1">
                {history.map((h, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      // Pre-fill query inside ChatWorkspace or simulate directly by triggering custom events
                      // For mock, simply set prompt inside textarea (handled via custom event or state)
                      const textarea = document.getElementById('query-input');
                      if (textarea) {
                        textarea.value = h.query;
                        textarea.focus();
                      }
                    }}
                    class="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 text-left text-xs font-medium text-slate-400 hover:text-white transition-all truncate"
                  >
                    <span class="truncate block max-w-[180px]">{h.query}</span>
                    <ChevronRight class="w-3 h-3 text-slate-600 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* User Signout info area */}
          <div class="p-4 border-t border-slate-800">
            <button 
              onClick={() => setView('landing')}
              class="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800 text-left text-xs font-semibold text-slate-400 hover:text-white transition-all"
            >
              <LogOut class="w-4 h-4" />
              <span>Log out to Landing</span>
            </button>
          </div>
        </aside>

        {/* Central Chat Workspace */}
        <main class="flex-1 flex flex-col bg-slate-50 p-4 lg:p-6 overflow-y-auto">
          <ChatWorkspace onQueryExecuted={handleQueryExecuted} />
        </main>

        {/* Right Sidebar panel */}
        <RightSidebar activeDatabase={selectedDb} lastExecutedQuery={lastExecutedQuery} />

      </div>
    </div>
  );
}
