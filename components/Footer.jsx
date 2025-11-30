import React from 'react';
import { Cpu, Github, ExternalLink, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <Cpu className="w-5 h-5 text-violet-500" />
              NexusAI
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the next generation of automation. Built for developers, by developers.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-violet-400 cursor-pointer">Features</li>
              <li className="hover:text-violet-400 cursor-pointer">Integrations</li>
              <li className="hover:text-violet-400 cursor-pointer">Documentation</li>
              <li className="hover:text-violet-400 cursor-pointer">Changelog</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-violet-400 cursor-pointer">About</li>
              <li className="hover:text-violet-400 cursor-pointer">Blog</li>
              <li className="hover:text-violet-400 cursor-pointer">Careers</li>
              <li className="hover:text-violet-400 cursor-pointer">Legal</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Surajsa1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 transition-colors text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://surajsa.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 transition-colors text-white">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/suraj-sa-69a4b6289/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2025 NexusAI. All rights reserved.</p>
          
          <div className="flex items-center gap-6 text-sm font-medium">
             <span className="text-slate-400">
               Designed & Built by <span className="text-violet-400 font-bold">Suraj</span>
             </span>
             <div className="flex items-center gap-4">
                <a href="https://surajsa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                  Portfolio <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://github.com/Surajsa19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                  GitHub <Github className="w-3 h-3" />
                </a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}