import React from 'react';
import FIFAForm from '../components/forms/FIFA';
import Alert from '../components/Alert';
import SuccessModal from '../components/SuccessModal';
import { useTournamentEmail } from '../hooks/useTournamentEmail';
import { FIFAFormData } from '../types';

const FIFAFormContainer: React.FC = () => {
  const { isLoading, message, clearMessage, sendFIFA } = useTournamentEmail();

  const handleSubmit = async (data: FIFAFormData) => {
    await sendFIFA(data);
  };

  return (
    <>
      {/* Error Alert */}
      {message && message.type === 'error' && (
        <Alert 
          type={message.type} 
          message={message.text} 
          onClose={clearMessage}
        />
      )}

      {/* Form */}
      <FIFAForm 
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={message?.type === 'success'}
        onClose={clearMessage}
      />
    </>
  );
};

export default FIFAFormContainer;