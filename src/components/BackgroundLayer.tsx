import { useBackground } from '@/context/BackgroundContext';

export default function BackgroundLayer() {
  const { blur } = useBackground();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <img
        src="/bg-court.jpg"
        alt=""
        className="w-full h-full object-cover transition-[filter] duration-700 ease-out"
        style={{ filter: `blur(${blur}px)` }}
      />
      {/* 轻微白色遮罩，提升文字可读性 */}
      <div className="absolute inset-0 bg-white/15" />
    </div>
  );
}
