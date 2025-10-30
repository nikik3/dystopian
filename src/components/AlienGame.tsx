import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Sky } from '@react-three/drei';
import { Suspense, useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import * as THREE from 'three';
import { Link } from 'react-router-dom';

interface Character {
  id: number;
  position: [number, number, number];
  isAlien: boolean;
  detected: boolean;
}

const Character = ({ 
  position, 
  isAlien, 
  onClick, 
  detected 
}: { 
  position: [number, number, number]; 
  isAlien: boolean; 
  onClick: () => void;
  detected: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'crosshair' : 'auto';
  }, [hovered]);

  useEffect(() => {
    if (meshRef.current && hovered) {
      meshRef.current.rotation.y += 0.05;
    }
  });

  const color = detected 
    ? (isAlien ? '#ff0000' : '#00ff00')
    : (hovered ? '#ffff00' : '#ffffff');

  return (
    <group position={position}>
      {/* Body */}
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[0.3, 0.4, 1.5, 8]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.15, 1.1, 0.3]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.15, 1.1, 0.3]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Alien features */}
      {detected && isAlien && (
        <>
          <mesh position={[0, 1.4, 0]}>
            <coneGeometry args={[0.2, 0.4, 4]} />
            <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.8} />
          </mesh>
          <pointLight position={[0, 1.5, 0]} color="#ff0000" intensity={2} distance={3} />
        </>
      )}
    </group>
  );
};

const GameScene = ({ 
  characters, 
  onCharacterClick 
}: { 
  characters: Character[]; 
  onCharacterClick: (id: number) => void;
}) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <OrbitControls 
        enablePan={false} 
        maxPolarAngle={Math.PI / 2.2}
        minDistance={5}
        maxDistance={15}
      />
      
      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="night" />
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[0, 5, 0]} color="#ff0000" intensity={0.5} distance={20} />
      
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Grid lines */}
      <gridHelper args={[20, 20, '#00ffff', '#333333']} position={[0, -0.49, 0]} />

      {/* Characters */}
      {characters.map(char => (
        <Character
          key={char.id}
          position={char.position}
          isAlien={char.isAlien}
          detected={char.detected}
          onClick={() => onCharacterClick(char.id)}
        />
      ))}

      {/* Warning lights */}
      <pointLight position={[-8, 3, -8]} color="#ff0000" intensity={2} distance={10} />
      <pointLight position={[8, 3, -8]} color="#ff0000" intensity={2} distance={10} />
      <pointLight position={[-8, 3, 8]} color="#00ffff" intensity={2} distance={10} />
      <pointLight position={[8, 3, 8]} color="#00ffff" intensity={2} distance={10} />
    </>
  );
};

export const AlienGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [timeLeft, setTimeLeft] = useState(60);

  const initGame = () => {
    const newCharacters: Character[] = [];
    const positions: [number, number, number][] = [
      [-4, 0, -2], [-2, 0, -2], [0, 0, -2], [2, 0, -2], [4, 0, -2],
      [-4, 0, 0], [-2, 0, 0], [0, 0, 0], [2, 0, 0], [4, 0, 0],
      [-4, 0, 2], [-2, 0, 2], [0, 0, 2], [2, 0, 2], [4, 0, 2],
    ];

    positions.forEach((pos, i) => {
      newCharacters.push({
        id: i,
        position: pos,
        isAlien: Math.random() > 0.7, // 30% chance of being alien
        detected: false,
      });
    });

    setCharacters(newCharacters);
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setLives(3);
    setTimeLeft(60);
    
    toast.success('🎮 GAME STARTED', {
      description: 'Identify the alien impostors before time runs out!',
    });
  };

  const createSplatter = (isAlien: boolean) => {
    const splatter = document.createElement('div');
    splatter.style.position = 'fixed';
    splatter.style.top = '0';
    splatter.style.left = '0';
    splatter.style.width = '100vw';
    splatter.style.height = '100vh';
    splatter.style.pointerEvents = 'none';
    splatter.style.zIndex = '9999';
    splatter.style.background = isAlien 
      ? 'radial-gradient(circle at center, rgba(0, 255, 255, 0.6) 0%, rgba(0, 100, 255, 0.3) 30%, transparent 70%)'
      : 'radial-gradient(circle at center, rgba(255, 0, 0, 0.7) 0%, rgba(139, 0, 0, 0.4) 30%, transparent 70%)';
    splatter.style.animation = 'splatter-fade 0.8s ease-out forwards';
    document.body.appendChild(splatter);
    
    setTimeout(() => {
      document.body.removeChild(splatter);
    }, 800);
  };

  const handleCharacterClick = (id: number) => {
    if (gameOver || !gameStarted) return;

    const character = characters.find(c => c.id === id);
    if (!character || character.detected) return;

    setCharacters(prev =>
      prev.map(c =>
        c.id === id ? { ...c, detected: true } : c
      )
    );

    if (character.isAlien) {
      setScore(prev => prev + 100);
      toast.success('🎯 ALIEN DETECTED!', {
        description: '+100 points',
      });
      
      // Blue alien splatter
      createSplatter(true);
      
      // Jumpscare effect
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZizcIGWi768eeUhALT6fj8LVjHAU4kdfy2HwxBh9wsOfyoVISC0ik4/C5YxwFN5HX8th8MQYfcLDn8qFSEgtIpOPwuWMcBTeR1/LYfDEGH3Cw5/KhUhILSKTj8LljHAU3kdfyx4E=');
      audio.play().catch(() => {});
      
      document.body.style.animation = 'shake 0.3s';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 300);
    } else {
      setLives(prev => prev - 1);
      toast.error('💔 WRONG! Human eliminated', {
        description: '-1 life',
      });
      
      // Red blood splatter
      createSplatter(false);
    }
  };

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (lives <= 0) {
      endGame();
    }
  }, [lives]);

  useEffect(() => {
    const allAliensFound = characters.length > 0 && 
      characters.filter(c => c.isAlien).every(c => c.detected);
    
    if (allAliensFound && gameStarted && !gameOver) {
      toast.success('🏆 VICTORY!', {
        description: 'All aliens eliminated! Starting next wave...',
      });
      setTimeout(() => initGame(), 2000);
    }
  }, [characters]);

  const endGame = () => {
    setGameOver(true);
    setGameStarted(false);
    toast.error('⚠️ GAME OVER', {
      description: `Final Score: ${score}`,
      duration: 5000,
    });
  };

  if (!gameStarted) {
    return (
      <div className="relative w-full h-screen bg-black flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold text-danger mb-4 glitch-text">
            SHAPESHIFTER PROTOCOL
          </h1>
          <p className="text-cyan text-xl mb-8 font-iceland">
            Identify the alien impostors before they eliminate humanity
          </p>
          <div className="space-y-4 text-left max-w-md mx-auto mb-8 text-white/80">
            <p>• Click on characters to identify them</p>
            <p>• Aliens glow red when detected</p>
            <p>• Humans glow green - don't eliminate them!</p>
            <p>• Find all aliens before time runs out</p>
            <p>• You have 3 lives</p>
          </div>
          <button
            onClick={initGame}
            className="px-12 py-4 bg-danger text-white text-2xl font-bold rounded-lg hover:scale-110 transition-transform duration-200 hover-glow"
          >
            START GAME
          </button>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="blood-splatter" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Back Button */}
      <Link 
        to="/"
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 px-6 py-2 bg-danger/80 hover:bg-danger text-white font-iceland text-lg rounded-lg transition-all duration-200 hover:scale-105 border border-danger"
      >
        ← BACK TO PORTFOLIO
      </Link>

      {/* HUD */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <div className="text-cyan text-2xl font-iceland">
          SCORE: <span className="text-danger">{score}</span>
        </div>
        <div className="text-cyan text-2xl font-iceland">
          LIVES: <span className="text-danger">{'♥'.repeat(lives)}</span>
        </div>
        <div className="text-cyan text-2xl font-iceland">
          TIME: <span className="text-danger">{timeLeft}s</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 z-10 text-right text-white/60 font-mono text-sm max-w-xs">
        <p>Click to identify characters</p>
        <p className="text-danger">Red = Alien Detected</p>
        <p className="text-green-500">Green = Human</p>
      </div>

      {/* Game Canvas */}
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-cyan text-2xl font-iceland animate-pulse">
            LOADING SIMULATION...
          </div>
        </div>
      }>
        <Canvas shadows>
          <GameScene characters={characters} onCharacterClick={handleCharacterClick} />
        </Canvas>
      </Suspense>

      {/* Game Over Overlay */}
      {gameOver && (
        <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-danger mb-4 glitch-text">
              MISSION FAILED
            </h2>
            <p className="text-cyan text-3xl mb-8 font-iceland">
              FINAL SCORE: {score}
            </p>
            <button
              onClick={initGame}
              className="px-12 py-4 bg-danger text-white text-2xl font-bold rounded-lg hover:scale-110 transition-transform duration-200"
            >
              TRY AGAIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
