import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './ui/Button';

const PricingCard = ({ title, price, features, recommended = false }) => (
  <div className={`relative p-8 rounded-3xl border ${recommended ? 'border-violet-500 bg-slate-900/80' : 'border-slate-800 bg-slate-950/50'} flex flex-col h-full transition-all hover:shadow-2xl hover:shadow-violet-900/10`}>
    {recommended && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
        Most Popular
      </span>
    )}
    <h3 className="text-lg font-medium text-slate-300 mb-2">{title}</h3>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-4xl font-bold text-white">${price}</span>
      <span className="text-slate-500">/mo</span>
    </div>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-400">
          <CheckCircle className="w-5 h-5 text-violet-500 shrink-0" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <Button variant={recommended ? 'primary' : 'secondary'} className="w-full">
      Get Started
    </Button>
  </div>
);

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
          <p className="text-slate-400">Start for free, scale as you grow. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            title="Starter"
            price="0"
            features={['Up to 3 projects', 'Basic Analytics', 'Community Support', '1 Team Member']}
          />
          <PricingCard 
            title="Pro"
            price="49"
            recommended={true}
            features={['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '5 Team Members', 'API Access']}
          />
          <PricingCard 
            title="Enterprise"
            price="199"
            features={['Unlimited Everything', 'Custom SSO', 'Dedicated Account Manager', 'SLA Guarantee', 'On-premise Deployment']}
          />
        </div>
      </div>
    </section>
  );
}
