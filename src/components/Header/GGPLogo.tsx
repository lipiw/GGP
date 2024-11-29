import React from 'react';
import { Gem } from 'lucide-react';

export function GGPLogo() {
  return (
    <div className="flex items-center space-x-2">
      <Gem className="w-8 h-8 text-purple-500" />
      <span className="text-white text-xl font-bold">GGP</span>
    </div>
  );
}