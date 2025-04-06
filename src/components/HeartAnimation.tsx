
import React, { useEffect } from 'react';

const HeartAnimation: React.FC = () => {
  useEffect(() => {
    // Create falling hearts
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      
      // Random position and appearance
      const size = Math.random() * 15 + 10;
      const left = Math.random() * window.innerWidth;
      const animationDuration = Math.random() * 10 + 5;
      const opacity = Math.random() * 0.6 + 0.2;
      
      // Random color from our palette
      const colors = ['#FFDEE2', '#E5DEFF', '#F2FCE2', '#FEF7CD', '#FEC6A1'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.left = `${left}px`;
      heart.style.top = '-20px';
      heart.style.opacity = opacity.toString();
      heart.style.backgroundColor = color;
      heart.style.animation = `heart-fall ${animationDuration}s linear forwards`;

      document.getElementById('heart-container')?.appendChild(heart);

      // Remove heart after animation completes
      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, animationDuration * 1000);
    };

    // Create hearts at intervals
    const heartInterval = setInterval(createHeart, 1000);
    
    // Initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, Math.random() * 2000);
    }

    return () => clearInterval(heartInterval);
  }, []);

  return (
    <div id="heart-container" className="fixed inset-0 pointer-events-none overflow-hidden" />
  );
};

export default HeartAnimation;
