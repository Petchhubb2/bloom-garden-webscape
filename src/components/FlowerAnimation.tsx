
import React, { useEffect } from 'react';

const FlowerAnimation: React.FC = () => {
  useEffect(() => {
    // Create falling petals
    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      // Random position and appearance
      const size = Math.random() * 15 + 10;
      const left = Math.random() * window.innerWidth;
      const animationDuration = Math.random() * 10 + 5;
      const opacity = Math.random() * 0.6 + 0.2;
      const hue = Math.random() * 60 + 330; // Pinks and purples

      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.left = `${left}px`;
      petal.style.top = '-20px';
      petal.style.opacity = opacity.toString();
      petal.style.backgroundColor = `hsl(${hue}, 100%, 90%)`;
      petal.style.animation = `petal-fall ${animationDuration}s linear forwards`;

      document.getElementById('petal-container')?.appendChild(petal);

      // Remove petal after animation completes
      setTimeout(() => {
        if (petal.parentNode) {
          petal.parentNode.removeChild(petal);
        }
      }, animationDuration * 1000);
    };

    // Create petals at intervals
    const petalInterval = setInterval(createPetal, 1000);
    
    // Initial petals
    for (let i = 0; i < 5; i++) {
      setTimeout(createPetal, Math.random() * 2000);
    }

    return () => clearInterval(petalInterval);
  }, []);

  return (
    <div id="petal-container" className="fixed inset-0 pointer-events-none overflow-hidden" />
  );
};

export default FlowerAnimation;
