import React from 'react';
import ClashRoyaleForm from '../components/forms/ClashRoyale';
import Alert from '../components/Alert';
import SuccessModal from '../components/SuccessModal';
import { useTournamentEmail } from '../hooks/useTournamentEmail';
import { ClashRoyaleFormData } from '../types';

const ClashRoyaleFormContainer: React.FC = () => {
  const { isLoading, message, clearMessage, sendClashRoyale } = useTournamentEmail();

  const handleSubmit = async (data: ClashRoyaleFormData) => {
    await sendClashRoyale(data);
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
      <ClashRoyaleForm 
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

export default ClashRoyaleFormContainer;