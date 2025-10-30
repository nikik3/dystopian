import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const CRYPTIC_MESSAGES = [
  "They're watching...",
  "Time is running out",
  "You can't escape",
  "The game has already begun",
  "Not all players survive",
  "Trust no one",
  "Reality is an illusion",
  "We are the architects of our own demise",
  "Error 404: Humanity not found",
  "System compromised",
];

export const EasterEggs = () => {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [foundSecret, setFoundSecret] = useState(false);
  const [countdown, setCountdown] = useState(666);

  // Konami Code Detection
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiIndex]) {
        const newIndex = konamiIndex + 1;
        setKonamiIndex(newIndex);
        
        if (newIndex === KONAMI_CODE.length && !foundSecret) {
          setFoundSecret(true);
          document.body.classList.add('matrix-rain');
          toast.error('🎮 GAME MASTER MODE ACTIVATED', {
            description: 'You found the secret. The real game begins now...',
            duration: 5000,
          });
          
          // Screen shake
          document.body.style.animation = 'shake 0.5s';
          setTimeout(() => {
            document.body.style.animation = '';
          }, 500);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [konamiIndex, foundSecret]);

  // Random cryptic messages
  useEffect(() => {
    const showRandomMessage = () => {
      const message = CRYPTIC_MESSAGES[Math.floor(Math.random() * CRYPTIC_MESSAGES.length)];
      toast.error(message, {
        duration: 3000,
        className: 'cryptic-toast',
      });
    };

    const interval = setInterval(showRandomMessage, 45000); // Every 45 seconds
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Console messages
  useEffect(() => {
    const styles = [
      'color: #ff0000',
      'font-size: 20px',
      'font-weight: bold',
      'text-shadow: 2px 2px 4px rgba(0,0,0,0.5)',
    ].join(';');

    console.log('%c🎮 WELCOME TO THE GAME', styles);
    console.log('%c⚠️ Some say the game chooses its players...', 'color: #00ffff; font-size: 14px;');
    console.log('%c🎯 Try the Konami Code: ↑↑↓↓←→←→BA', 'color: #ff00ff; font-size: 12px;');
    console.log('%c⏰ Time remaining:', 'color: #ffff00;', countdown);
    console.log('%c💀 Hidden achievement unlocked: Console Explorer', 'color: #00ff00; font-size: 14px;');
  }, []);

  return (
    <>
      {foundSecret && (
        <div className="fixed inset-0 pointer-events-none z-[9999] matrix-overlay" />
      )}
      
      <div className="fixed bottom-4 right-4 text-danger font-mono text-sm opacity-60 z-50">
        <div className="glitch-text">TIME: {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')}</div>
      </div>
    </>
  );
};
