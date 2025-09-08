import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://res.cloudinary.com/dtsnys3hu/image/upload/v1757302468/logo_futurion_sem_fundo_branco_m51yl0.png" 
              alt="Futurion" 
              className="w-16 h-16 object-contain opacity-80"
            />
          </div>
          
          {/* LGPD Notice */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Shield className="w-4 h-4" />
            <span>Seus dados são protegidos pela LGPD e usados apenas para administração do evento</span>
          </div>
          
          {/* Links */}
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Contato
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span>&copy; 2025 Futurion. Feito com</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>para a comunidade gamer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;