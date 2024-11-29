import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

export function CTAButton({ children, primary = false }: CTAButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
        primary
          ? 'bg-purple-600 text-white hover:bg-purple-700'
          : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
      }`}
    >
      {children}
    </button>
  );
}