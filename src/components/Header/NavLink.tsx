import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-300 hover:text-white hover:bg-purple-900/50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        {children}
      </a>
    </li>
  );
}