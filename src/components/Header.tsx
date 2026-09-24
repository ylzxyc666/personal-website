import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/i18n/translations';

const NAV_ITEMS = [
  { key: 'nav.home', path: '/home' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.education', path: '/education' },
  { key: 'nav.contact', path: '/contact' },
  { key: 'nav.feedback', path: '/feedback' },
];

export default function Header() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0045AD]/85 backdrop-blur-md border-b border-white/15 animate-[slide-down-in_0.75s_cubic-bezier(0.16,1,0.3,1)]">
      <div className="max-w-3xl mx-auto px-3 md:px-6 flex h-14 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggleLanguage}
            className="text-[10px] md:text-xs font-medium text-white/90 hover:text-white bg-white/15 hover:bg-white/25
              px-2 py-0.5 md:px-2.5 md:py-1 rounded-md transition-colors cursor-pointer shrink-0"
          >
            {language === 'zh' ? 'EN' : '中'}
          </button>
          <Link to="/home" className="hidden sm:block text-sm font-semibold text-white hover:text-white transition-colors shrink-0">
            陈一诺
          </Link>
        </div>
        <nav className="flex items-center gap-2 sm:gap-3 md:gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[10px] sm:text-xs md:text-sm transition-colors whitespace-nowrap ${
                location.pathname === item.path
                  ? 'text-white font-medium'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {t(item.key, language)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
