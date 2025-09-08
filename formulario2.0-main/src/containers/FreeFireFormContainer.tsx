import React from 'react';
import FreeFireForm from '../components/forms/FreeFire';
import Alert from '../components/Alert';
import SuccessModal from '../components/SuccessModal';
import { useTournamentEmail } from '../hooks/useTournamentEmail';
import { FreeFireFormData } from '../types';

const FreeFireFormContainer: React.FC = () => {
  const { isLoading, message, clearMessage, sendFreeFire } = useTournamentEmail();

  const handleSubmit = async (data: FreeFireFormData) => {
    await sendFreeFire(data);
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
      <FreeFireForm 
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

export default FreeFireFormContainer;