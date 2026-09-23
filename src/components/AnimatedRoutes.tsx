import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import EducationPage from '@/pages/EducationPage/EducationPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import FeedbackPage from '@/pages/FeedbackPage/FeedbackPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

// 导航栏左右顺序，用于判断滑动方向
const PAGE_ORDER = ['/home', '/about', '/education', '/contact', '/feedback'];

const PAGE_MAP: Record<string, React.ComponentType> = {
  '/home': HomePage,
  '/about': AboutPage,
  '/education': EducationPage,
  '/contact': ContactPage,
  '/feedback': FeedbackPage,
};

const EXIT_DURATION = 200;  // 离开动画时长（加速）
const ENTER_DURATION = 300; // 进入动画时长（减速）

type Stage = 'idle' | 'exit' | 'enter';

export default function AnimatedRoutes() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [prevPath, setPrevPath] = useState<string | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1); // 1=向右, -1=向左
  const [stage, setStage] = useState<Stage>('idle');
  const prevPathRef = useRef(location.pathname);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (location.pathname === currentPath) return;

    // 计算滑动方向：遵循导航栏左右顺序
    const prevIndex = PAGE_ORDER.indexOf(prevPathRef.current);
    const newIndex = PAGE_ORDER.indexOf(location.pathname);
    const dir: 1 | -1 = (prevIndex !== -1 && newIndex !== -1 && newIndex < prevIndex) ? -1 : 1;

    setDirection(dir);
    setPrevPath(currentPath);
    setStage('exit');

    // 离开动画结束后切换到新页面并播放进入动画
    const t1 = setTimeout(() => {
      setCurrentPath(location.pathname);
      setPrevPath(null);
      setStage('enter');
      prevPathRef.current = location.pathname;
    }, EXIT_DURATION);

    // 进入动画结束后恢复静止状态
    const t2 = setTimeout(() => {
      setStage('idle');
    }, EXIT_DURATION + ENTER_DURATION);

    timersRef.current = [t1, t2];

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [location, currentPath]);

  const CurrentPage = PAGE_MAP[currentPath] || NotFoundPage;
  const PrevPageComponent = prevPath ? (PAGE_MAP[prevPath] || NotFoundPage) : null;

  // 离开动画类名：向右导航时旧页面向左滑出，反之向右滑出
  const exitClass = direction === 1
    ? 'animate-[slide-out-left_0.2s_ease-in_forwards]'
    : 'animate-[slide-out-right_0.2s_ease-in_forwards]';

  // 进入动画类名：向右导航时新页面从右滑入，反之从左滑入
  const enterClass = direction === 1
    ? 'animate-[slide-in-right_0.3s_ease-out_forwards]'
    : 'animate-[slide-in-left_0.3s_ease-out_forwards]';

  return (
    <div className="w-full overflow-hidden">
      {stage === 'exit' && PrevPageComponent ? (
        <div className={exitClass}>
          <PrevPageComponent />
        </div>
      ) : (
        <div className={stage === 'enter' ? enterClass : ''}>
          <CurrentPage />
        </div>
      )}
    </div>
  );
}
