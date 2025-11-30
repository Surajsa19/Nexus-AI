import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role }) => (
  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      ))}
    </div>
    <p className="text-slate-300 italic mb-6">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden">
         <span className="text-xs font-bold text-white">{author.charAt(0)}</span>
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm">{author}</h4>
        <p className="text-slate-500 text-xs">{role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/30 border-y border-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Trusted by Industry Leaders</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="NexusAI transformed how we handle data processing. What took days now takes minutes."
            author="Sarah Chen"
            role="CTO at TechFlow"
          />
          <TestimonialCard 
            quote="The visual builder is a game changer. My marketing team builds their own automations now."
            author="Marcus Rodriguez"
            role="Product Director"
          />
          <TestimonialCard 
            quote="Security was our main concern, but NexusAI's neural protection exceeded our expectations."
            author="David Park"
            role="DevOps Lead"
          />
        </div>
      </div>
    </section>
  );
}
