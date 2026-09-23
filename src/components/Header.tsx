import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: '首页', path: '/home' },
  { label: '关于我', path: '/about' },
  { label: '教育与技能', path: '/education' },
  { label: '联系我', path: '/contact' },
  { label: '使用反馈', path: '/feedback' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0045AD]/85 backdrop-blur-md border-b border-white/15 animate-[slide-down-in_0.75s_cubic-bezier(0.16,1,0.3,1)]">
      <div className="max-w-3xl mx-auto px-4 md:px-6 flex h-14 items-center justify-between">
        <Link to="/home" className="text-sm font-semibold text-white hover:text-white transition-colors shrink-0">
          陈一诺
        </Link>
        <nav className="flex items-center gap-3 md:gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs md:text-sm transition-colors whitespace-nowrap ${
                location.pathname === item.path
                  ? 'text-white font-medium'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
