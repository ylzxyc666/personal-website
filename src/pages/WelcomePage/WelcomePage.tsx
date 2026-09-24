import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBackground } from '@/context/BackgroundContext';

export default function WelcomePage() {
  const navigate = useNavigate();
  const { setBlur } = useBackground();
  const [phase, setPhase] = useState<'first' | 'second'>('first');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setBlur(0);
  }, [setBlur]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleFirstClick = () => {
    setVisible(false);
    setTimeout(() => {
      setPhase('second');
      setTimeout(() => setVisible(true), 60);
    }, 450);
  };

  const handleSecondClick = () => {
    setBlur(6);
    setVisible(false);
    setTimeout(() => {
      navigate('/home');
    }, 550);
  };

  return (
    <div className="min-h-screen flex items-center justify-center select-none px-4">
      {phase === 'first' ? (
        <button
          onClick={handleFirstClick}
          className={`text-5xl sm:text-6xl md:text-7xl font-bold text-[#0045AD] cursor-pointer drop-shadow-lg
            transition-all duration-300 ease-out
            hover:scale-110 hover:text-[#F8C335]
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          泥嚎
        </button>
      ) : (
        <div
          onClick={handleSecondClick}
          className={`group flex flex-col items-center gap-3 sm:gap-5 cursor-pointer transition-all duration-500 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0045AD] drop-shadow-lg
              transition-all duration-300 ease-out
              group-hover:scale-110 group-hover:text-[#F8C335]"
          >
            进来看一看？
          </span>
          <span
            className="text-base sm:text-lg md:text-xl font-medium text-[#0045AD] drop-shadow-md
              transition-all duration-300 ease-out
              group-hover:scale-110 group-hover:text-[#F8C335]"
          >
            can can world space
          </span>
        </div>
      )}
    </div>
  );
}
