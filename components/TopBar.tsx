'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Ellipsis, X } from 'lucide-react';

export default function TopBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="mx-auto px-6 sm:px-10 md:px-20 ">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="text-lg font-bold">AcertaAí</span>
        </div>
        <div>
          <nav className="hidden sm:inline">
            <ul className="flex gap-8 ">
              <li>Funcionalidades</li>
              <li>Planos</li>
              <li>FAQ</li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button className="bg-primary text-white">Entrar</Button>
          <Button
            className="bg-transparent text-white sm:hidden"
            onClick={toggleMenu}>
            {menuAberto ? (
              <X className="text-primary" />
            ) : (
              <Ellipsis className="text-primary" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
