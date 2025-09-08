import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Mail, Phone, Monitor } from 'lucide-react';
import { FIFAFormData } from '../../types';

interface FIFAFormProps {
  onSubmit: (data: FIFAFormData) => void;
  isLoading: boolean;
}

const FIFAForm: React.FC<FIFAFormProps> = ({ onSubmit, isLoading }) => {
  const [form, setForm] = useState<FIFAFormData>({
    fullName: '',
    email: '',
    whatsApp: '',
    platform: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  const handleInputChange = (field: keyof FIFAFormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
          <div className="text-4xl">⚽</div>
          FIFA - Inscrição Individual
        </h2>
        <p className="text-gray-300">Premiação: <span className="text-emerald-400 font-bold text-xl">R$ 1.000</span></p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Full Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-white font-semibold mb-3 text-lg">Nome Completo</label>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
            placeholder="Seu nome completo"
          />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-white font-semibold mb-3 text-lg flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" />
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
              placeholder="email@exemplo.com"
            />
          </div>
          
          <div>
            <label className="block text-white font-semibold mb-3 text-lg flex items-center gap-2">
              <Phone className="w-5 h-5 text-emerald-400" />
              WhatsApp
            </label>
            <input
              type="tel"
              required
              value={form.whatsApp}
              onChange={(e) => handleInputChange('whatsApp', e.target.value)}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
              placeholder="(11) 99999-9999"
            />
          </div>
        </motion.div>

        {/* Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-white font-semibold mb-3 text-lg flex items-center gap-2">
            <Monitor className="w-5 h-5 text-emerald-400" />
            Plataforma
          </label>
          <select
            required
            value={form.platform}
            onChange={(e) => handleInputChange('platform', e.target.value as FIFAFormData['platform'])}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
          >
            <option value="" className="bg-slate-800">Selecione sua plataforma</option>
            <option value="PlayStation" className="bg-slate-800">PlayStation</option>
            <option value="Xbox" className="bg-slate-800">Xbox</option>
            <option value="PC" className="bg-slate-800">PC</option>
          </select>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
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
              'Fazer Inscrição'
            )}
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default FIFAForm;