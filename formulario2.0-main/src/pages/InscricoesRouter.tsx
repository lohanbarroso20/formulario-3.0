import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import ClashRoyaleFormContainer from '../containers/ClashRoyaleFormContainer';
import FIFAFormContainer from '../containers/FIFAFormContainer';
import FreeFireFormContainer from '../containers/FreeFireFormContainer';

interface InscricoesRouterProps {
  onClose: () => void;
}

const InscricoesRouter: React.FC<InscricoesRouterProps> = ({ onClose }) => {
  return (
    <Router>
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
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Form content */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
            <Routes>
              <Route path="/inscricoes/clash" element={<ClashRoyaleFormContainer />} />
              <Route path="/inscricoes/fifa" element={<FIFAFormContainer />} />
              <Route path="/inscricoes/freefire" element={<FreeFireFormContainer />} />
              <Route path="*" element={<Navigate to="/inscricoes/clash" replace />} />
            </Routes>
          </div>
        </motion.div>
      </motion.div>
    </Router>
  );
};

export default InscricoesRouter;