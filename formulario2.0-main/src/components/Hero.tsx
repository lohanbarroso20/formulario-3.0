import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EVENT_INFO } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Logo/Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dtsnys3hu/image/upload/v1757302468/logo_futurion_sem_fundo_branco_m51yl0.png" 
                alt="Futurion Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              {EVENT_INFO.title}
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-emerald-400">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-medium">O futuro dos eSports começa aqui</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Event details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-2xl">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-3 text-white">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">{EVENT_INFO.dates}</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold">{EVENT_INFO.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Prize pool highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 px-12 py-8 rounded-3xl">
              <p className="text-sm text-gray-300 mb-2 uppercase tracking-wider">Premiação Total</p>
              <p className="text-4xl lg:text-5xl font-bold text-white">
                {EVENT_INFO.totalPrize}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl text-gray-300 max-w-2xl"
        >
          Escolha sua modalidade e garante sua vaga no maior torneio de eSports da região
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;