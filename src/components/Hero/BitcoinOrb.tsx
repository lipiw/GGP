import React from 'react';

export function BitcoinOrb() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="relative aspect-square">
        <div className="w-full h-full rounded-full border-2 border-blue-400/30 p-4">
          <div className="w-full h-full rounded-full border-2 border-blue-400/40 p-4">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-8xl font-bold">
              ₿
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}