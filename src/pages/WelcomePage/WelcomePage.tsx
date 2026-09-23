import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBackground } from '@/context/BackgroundContext';

export default function WelcomePage() {
  const navigate = useNavigate();
  const { setBlur } = useBackground();
  const [phase, setPhase] = useState<'first' | 'second'>('first');
  const [visible, setVisible] = useState(false);

  // 进入欢迎页时背景清晰（无模糊）
  useEffect(() => {
    setBlur(0);
  }, [setBlur]);

  // 页面加载后淡入第一段文字
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleFirstClick = () => {
    setVisible(false);
    // 等待淡出动画完成后切换到第二段
    setTimeout(() => {
      setPhase('second');
      setTimeout(() => setVisible(true), 60);
    }, 450);
  };

  const handleSecondClick = () => {
    // 背景开始渐变虚化（700ms过渡），同时文字淡出
    setBlur(6);
    setVisible(false);
    // 等待文字淡出 + 部分虚化后进入主界面
    setTimeout(() => {
      navigate('/home');
    }, 550);
  };

  return (
    <div className="min-h-screen flex items-center justify-center select-none">
      {phase === 'first' ? (
        <button
          onClick={handleFirstClick}
          className={`text-6xl md:text-7xl font-bold text-[#0045AD] cursor-pointer drop-shadow-lg
            transition-all duration-300 ease-out
            hover:scale-110 hover:text-[#F8C335]
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          泥嚎
        </button>
      ) : (
        <div
          onClick={handleSecondClick}
          className={`group flex flex-col items-center gap-5 cursor-pointer transition-all duration-500 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span
            className="text-4xl md:text-5xl font-bold text-[#0045AD] drop-shadow-lg
              transition-all duration-300 ease-out
              group-hover:scale-110 group-hover:text-[#F8C335]"
          >
            进来看一看？
          </span>
          <span
            className="text-lg md:text-xl font-medium text-[#0045AD] drop-shadow-md
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
