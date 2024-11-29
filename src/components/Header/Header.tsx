import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { GGPLogo } from './GGPLogo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: 'Principal', href: '#' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Dúvidas Frequentes', href: '#duvidas' },
    { label: 'Formulário', href: '#formulario' },
  ];

  return (
    <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GGPLogo />
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <NavLink key={item.label} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/50 rounded-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}