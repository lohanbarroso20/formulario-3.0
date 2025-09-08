import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const isSuccess = type === 'success';
  
  return (
    <div className={`
      fixed top-4 right-4 z-50 max-w-md w-full mx-4 p-4 rounded-xl shadow-lg border transition-all duration-300 transform
      ${isSuccess 
        ? 'bg-green-900/90 border-green-500/50 backdrop-blur-sm' 
        : 'bg-red-900/90 border-red-500/50 backdrop-blur-sm'
      }
    `}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {isSuccess ? (
            <CheckCircle className="w-6 h-6 text-green-400" />
          ) : (
            <XCircle className="w-6 h-6 text-red-400" />
          )}
        </div>
        
        <div className="flex-1">
          <p className="text-white font-medium text-sm leading-relaxed">
            {message}
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Alert;