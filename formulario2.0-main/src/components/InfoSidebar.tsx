import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Phone, Instagram, Mail, Shield } from 'lucide-react';
import { EVENT_INFO, CONTACT_INFO, GAMES } from '../utils/constants';

const InfoSidebar: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Informações do <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Evento</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              Detalhes do Evento
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Data</p>
                  <p className="text-white font-semibold">{EVENT_INFO.dates}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Local</p>
                  <p className="text-white font-semibold">{EVENT_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Prize Pool */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-400" />
              Premiação
            </h3>
            
            <div className="space-y-3">
              {Object.entries(GAMES).map(([key, game]) => (
                <div key={key} className="flex justify-between items-center py-2">
                  <span className="text-gray-300">{game.name}</span>
                  <span className="text-emerald-400 font-bold">{game.prize}</span>
                </div>
              ))}
              
              <div className="border-t border-white/20 pt-3 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-emerald-400 font-bold text-xl">{EVENT_INFO.totalPrize}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contato & Suporte</h3>
            
            <div className="space-y-4">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5" />
                <span>{CONTACT_INFO.whatsapp}</span>
              </a>
              
              <a 
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                <span>{CONTACT_INFO.instagram}</span>
              </a>
              
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <Mail className="w-5 h-5" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4" />
                <span>Dados protegidos por LGPD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSidebar;