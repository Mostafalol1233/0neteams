import { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const numStars = 100;
      const newStars: Star[] = [];
      
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 4,
        });
      }
      
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
