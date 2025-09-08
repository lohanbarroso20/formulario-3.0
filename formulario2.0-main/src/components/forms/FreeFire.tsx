import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, User } from 'lucide-react';
import { FreeFireFormData, Player } from '../../types';

interface FreeFireFormProps {
  onSubmit: (data: FreeFireFormData) => void;
  isLoading: boolean;
}

const FreeFireForm: React.FC<FreeFireFormProps> = ({ onSubmit, isLoading }) => {
  const [form, setForm] = useState<FreeFireFormData>({
    teamName: '',
    players: Array(6).fill({ name: '', gameId: '' }),
    captainEmail: '',
    captainWhatsApp: ''
  });

  const updatePlayer = (index: number, field: keyof Player, value: string) => {
    const newPlayers = [...form.players];
    newPlayers[index] = { ...newPlayers[index], [field]: value };
    setForm(prev => ({ ...prev, players: newPlayers }));
  };

  const handleInputChange = (field: keyof Omit<FreeFireFormData, 'players'>, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
          <div className="text-4xl">🔥</div>
          Free Fire - Inscrição de Equipe
        </h2>
        <p className="text-gray-300">Premiação: <span className="text-emerald-400 font-bold text-xl">R$ 2.000</span></p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Team Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-white font-semibold mb-3 text-lg">Nome da Equipe</label>
          <input
            type="text"
            required
            value={form.teamName}
            onChange={(e) => handleInputChange('teamName', e.target.value)}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
            placeholder="Digite o nome da sua equipe"
          />
        </motion.div>

        {/* Players */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            Jogadores da Equipe (6 obrigatórios)
          </h3>
          <div className="grid gap-4">
            {form.players.map((player, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="grid md:grid-cols-2 gap-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
              >
                <div>
                  <label className="block text-gray-300 text-sm mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-400" />
                    Jogador {index + 1} - Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={player.name}
                    onChange={(e) => updatePlayer(index, 'name', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all"
                    placeholder="Nome do jogador"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">ID Free Fire</label>
                  <input
                    type="text"
                    required
                    value={player.gameId}
                    onChange={(e) => updatePlayer(index, 'gameId', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all"
                    placeholder="ID no jogo"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Captain Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-white font-semibold mb-3 text-lg flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" />
              Email do Capitão
            </label>
            <input
              type="email"
              required
              value={form.captainEmail}
              onChange={(e) => handleInputChange('captainEmail', e.target.value)}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
              placeholder="email@exemplo.com"
            />
          </div>
          
          <div>
            <label className="block text-white font-semibold mb-3 text-lg flex items-center gap-2">
              <Phone className="w-5 h-5 text-emerald-400" />
              WhatsApp do Capitão
            </label>
            <input
              type="tel"
              required
              value={form.captainWhatsApp}
              onChange={(e) => handleInputChange('captainWhatsApp', e.target.value)}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
              placeholder="(11) 99999-9999"
            />
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="pt-4"
        >
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-bold py-5 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando Inscrição...
              </div>
            ) : (
              'Inscrever Equipe'
            )}
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default FreeFireForm;