import { useEffect, useState } from 'react';

interface BloodDrop {
  id: number;
  x: number;
  y: number;
}

export const BloodCursor = () => {
  const [bloodDrops, setBloodDrops] = useState<BloodDrop[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newDrop: BloodDrop = {
        id: counter,
        x: e.clientX,
        y: e.clientY,
      };
      
      setBloodDrops(prev => [...prev, newDrop].slice(-15)); // Keep last 15 drops
      setCounter(prev => prev + 1);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [counter]);

  // Clean up old drops
  useEffect(() => {
    const interval = setInterval(() => {
      setBloodDrops(prev => prev.slice(1));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {bloodDrops.map((drop, index) => (
        <div
          key={drop.id}
          className="blood-drop"
          style={{
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            opacity: (index + 1) / bloodDrops.length,
            transform: `scale(${(index + 1) / bloodDrops.length})`,
          }}
        />
      ))}
    </>
  );
};
