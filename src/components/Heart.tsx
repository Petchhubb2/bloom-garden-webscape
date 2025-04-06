
import React from 'react';

interface HeartProps {
  scale?: number;
  className?: string;
}

const Heart: React.FC<HeartProps> = ({ scale = 1, className = "" }) => {
  // Random color for each heart
  const colors = ['#FFDEE2', '#E5DEFF', '#F2FCE2', '#FEF7CD', '#FEC6A1'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <div className={`heart scale-${scale * 100} ${className}`} style={{ backgroundColor: randomColor }}></div>
  );
};

export default Heart;
