import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

export default function Navbar(): React.ReactNode {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Obtenir l\'application', path: '/obtenir-clubmanager' },
    { label: 'Documentation', path: '/documentation/intro' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ];

  // Fonction pour vérifier si un lien est actif
  const isActive = (path: string) => {
    const currentPath = location.pathname;
    
    // Enlever le baseUrl si présent (/clubmanager/)
    const cleanPath = currentPath.replace(/^\/clubmanager/, '');
    
    if (path === '/') {
      // Accueil : soit exactement / , /clubmanager/ , ou /clubmanager (sans slash)
      return cleanPath === '/' || cleanPath === '' || currentPath === '/clubmanager';
    }
    
    // Pour les autres pages, vérifier si le chemin correspond exactement ou commence par
    // (pour gérer /documentation/intro etc.)
    if (path === '/documentation/intro') {
      return cleanPath === '/documentation/intro';
    }
    
    return cleanPath === path;
  };

  return (
    <>
      {/* Espace réservé pour éviter le saut de contenu */}
      <div className="h-16"></div>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-white shadow-sm'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            {/* Logo avec image */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer no-underline hover:no-underline">
              <img 
                src="/clubmanager/img/logo.png" 
                alt="ClubManager Logo" 
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                ClubManager
              </span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link 
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-all hover:text-blue-600 hover:scale-105 no-underline hover:no-underline ${
                      active 
                        ? 'text-blue-600 border-b-2 border-blue-600 pb-0.5' 
                        : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA button */}
            <div className="hidden md:block">
              <Link 
                to="/obtenir-clubmanager" 
                className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-2 font-medium text-white shadow-md transition duration-300 ease-out hover:shadow-xl"
                style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                <span className="relative z-10 text-white text-sm">Obtenir l'application →</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="border-t border-slate-200 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link 
                      key={item.path}
                      to={item.path}
                      className={`px-2 py-2 text-sm transition-all no-underline hover:no-underline ${
                        active 
                          ? 'text-blue-600 font-semibold bg-blue-50 rounded-lg' 
                          : 'text-slate-600 hover:text-blue-600'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link 
                  to="/obtenir-clubmanager" 
                  className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 mt-2 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 ease-out hover:shadow-xl text-center"
                  style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10 text-white text-sm">Obtenir l'application →</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}