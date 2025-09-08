import React, { useState } from 'react';
import Hero from './components/Hero';
import GameCards from './components/GameCards';
import InfoSidebar from './components/InfoSidebar';
import Footer from './components/Footer';
import InscricoesRouter from './pages/InscricoesRouter';
import { GameMode } from './types';

function App() {
  const [selectedGame, setSelectedGame] = useState<GameMode | null>(null);

  const handleGameSelect = (game: GameMode) => {
    setSelectedGame(game);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
      {/* Hero Section */}
      <Hero />

      {/* Game Selection Cards */}
      <GameCards onSelectGame={handleGameSelect} />

      {/* Event Information */}
      <InfoSidebar />

      {/* Footer */}
      <Footer />

      {/* Inscricoes Router */}
      {selectedGame && (
        <InscricoesRouter onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;