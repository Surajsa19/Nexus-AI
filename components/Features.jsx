import React from 'react';
import { Zap, ShieldCheck, BarChart, Code, Layout, Globe } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:bg-slate-800/50 hover:-translate-y-1">
    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-violet-500/10 transition-colors">
      <Icon className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for scale, designed for speed</h2>
          <p className="text-slate-400">Everything you need to automate your workflow, from simple tasks to complex neural networks.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap}
            title="Instant Deployment"
            description="Push your automation workflows to production in seconds with our globally distributed edge network."
          />
          <FeatureCard 
            icon={ShieldCheck}
            title="Neural Security"
            description="Enterprise-grade security powered by adaptive AI that learns and blocks threats in real-time."
          />
          <FeatureCard 
            icon={BarChart}
            title="Real-time Analytics"
            description="Monitor performance metrics with live dashboards. Gain insights into your workflow efficiency."
          />
          <FeatureCard 
            icon={Code}
            title="API First"
            description="Extensible GraphQL API allowing you to integrate NexusAI into any existing stack effortlessly."
          />
          <FeatureCard 
            icon={Layout}
            title="Visual Builder"
            description="Drag-and-drop interface for non-technical users to build complex logic flows."
          />
          <FeatureCard 
            icon={Globe}
            title="Global Edge"
            description="Your automations run on the edge, ensuring low latency regardless of where your users are."
          />
        </div>
      </div>
    </section>
  );
}
