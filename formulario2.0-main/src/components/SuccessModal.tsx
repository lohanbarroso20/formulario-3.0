import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Success content */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center">
              <div className="mb-6">
                <div className="relative mx-auto w-20 h-20">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"></div>
                  <div className="relative bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-full p-4">
                    <CheckCircle className="w-12 h-12 text-emerald-400" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Inscrição Realizada!
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sua inscrição foi enviada com sucesso. Você receberá uma confirmação por email em breve.
              </p>
              
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Continuar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;