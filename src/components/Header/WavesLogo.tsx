import React from 'react';
import { Waves } from 'lucide-react';

export function WavesLogo() {
  return (
    <div className="flex items-center space-x-2">
      <Waves className="w-8 h-8 text-purple-500" />
      <span className="text-white text-xl font-bold">waves</span>
    </div>
  );
}