import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, User } from 'lucide-react';
import { GAMES } from '../utils/constants';
import { GameMode } from '../types';

interface GameCardsProps {
  onSelectGame: (game: GameMode) => void;
}

const GameCards: React.FC<GameCardsProps> = ({ onSelectGame }) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Escolha sua <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Modalidade</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Três modalidades, três oportunidades de vitória. Selecione seu jogo e faça sua inscrição.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {(Object.keys(GAMES) as GameMode[]).map((gameMode, index) => {
            const game = GAMES[gameMode];
            
            return (
              <motion.div
                key={gameMode}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => onSelectGame(gameMode)}
              >
                <div className="relative h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full flex flex-col">
                    {/* Game Icon */}
                    <div className="mb-6 text-center flex justify-center">
                      <img 
                        src={game.icon} 
                        alt={`${game.name} logo`}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    
                    {/* Game Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                      <p className="text-gray-300 mb-4">{game.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          {gameMode === 'freefire' ? <Users className="w-4 h-4" /> : <User className="w-4 h-4" />}
                          <span>{game.type}</span>
                        </div>
                        
                        <div className="text-2xl font-bold text-emerald-400">
                          {game.prize}
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                      <span>Inscreva-se</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GameCards;