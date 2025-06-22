import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">The Jazz Instrument Archive</h1>
        <p className="hero-subtitle">Curated. Immersive. Iconic.</p>
        <button className="hero-button" onClick={() => navigate('/explore')}>
          View Instruments
        </button>
        <button className="hero-button2" onClick={() => navigate('/buy')}>
          Buy Instruments
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
