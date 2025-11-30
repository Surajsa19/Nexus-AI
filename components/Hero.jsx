import React from 'react';
import { ArrowRight, Cpu, Activity, Users } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 opacity-30" />

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-400 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>v2.0 is now live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
          Automate the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
            Impossible.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          NexusAI allows you to build, deploy, and scale autonomous workflows 
          without writing a single line of complex code. The future is automated.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button variant="primary" className="w-full md:w-auto h-12 px-8">
            Get Started for Free <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="w-full md:w-auto h-12 px-8">
            View Documentation
          </Button>
        </div>

        {/* Hero Dashboard Preview */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2 shadow-2xl shadow-violet-500/20">
            <div className="rounded-lg bg-slate-950 overflow-hidden aspect-video relative flex items-center justify-center border border-slate-800">
                {/* Abstract UI representation */}
                <div className="w-full h-full p-8 flex gap-8">
                  {/* Sidebar */}
                  <div className="w-48 hidden md:flex flex-col gap-6 border-r border-slate-800 pr-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-violet-600 flex items-center justify-center">
                            <Cpu className="w-4 h-4 text-white" />
                        </div>
                        <div className="font-bold text-white text-sm">Nexus OS</div>
                      </div>
                      <div className="space-y-2">
                        {['Overview', 'Workflows', 'Analytics', 'Settings'].map((item, i) => (
                            <div key={item} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${i === 0 ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}>
                              <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-violet-500' : 'bg-slate-600'}`} />
                              {item}
                            </div>
                        ))}
                      </div>
                      <div className="mt-auto h-32 w-full bg-slate-900 rounded-xl border border-slate-800 p-4 relative overflow-hidden">
                        <div className="text-xs text-slate-500 mb-2">Storage</div>
                        <div className="text-lg font-bold text-white mb-1">85%</div>
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-violet-500 w-[85%]" />
                        </div>
                      </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 flex flex-col gap-6">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                        <div>
                          <h2 className="text-xl font-bold text-white">Dashboard Overview</h2>
                          <p className="text-sm text-slate-400">Real-time system monitoring</p>
                        </div>
                        <div className="flex gap-2">
                          <div className="h-8 px-3 bg-violet-500/10 rounded-lg border border-violet-500/20 flex items-center gap-2 text-violet-400 text-sm">
                              <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                              Live
                          </div>
                          <div className="h-8 w-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white cursor-pointer transition-colors">
                              <Users className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Cards Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {[
                            { color: 'bg-blue-500', label: 'Total Users', value: '24.5k' },
                            { color: 'bg-violet-500', label: 'Active Flows', value: '1,204' },
                            { color: 'bg-purple-500', label: 'Success Rate', value: '99.9%' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-slate-900 rounded-lg border border-slate-800 p-4 relative overflow-hidden group hover:border-violet-500/30 transition-colors">
                              <div className={`absolute top-0 right-0 w-16 h-16 ${stat.color} opacity-5 rounded-full blur-xl -mr-4 -mt-4`} />
                              <div className="text-slate-500 text-xs font-medium mb-1">{stat.label}</div>
                              <div className="text-xl font-bold text-white">{stat.value}</div>
                              <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                  <div className={`h-full ${stat.color} w-2/3 rounded-full opacity-80`} />
                              </div>
                            </div>
                        ))}
                      </div>
                      
                      {/* Big Chart Area */}
                      <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-800 p-4 relative overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-semibold text-white">Traffic Overview</div>
                            <div className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">Last 7 Days</div>
                        </div>
                        
                        {/* Bars */}
                        <div className="flex-1 w-full flex items-end justify-between gap-2 md:gap-4 px-2 relative z-10 border-b border-slate-800">
                            {[40, 70, 45, 90, 60, 80, 50, 65, 30, 75, 55, 85].map((h, i) => (
                              <div key={i} className="relative w-full h-full flex items-end group">
                                <div 
                                  style={{height: `${h}%`}} 
                                  className="w-full bg-gradient-to-t from-violet-600 to-blue-500 rounded-t opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]" 
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}