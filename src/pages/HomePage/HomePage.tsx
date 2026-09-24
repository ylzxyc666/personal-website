import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/i18n/translations';

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center pt-14 overflow-hidden animate-[slide-up-in_0.75s_cubic-bezier(0.16,1,0.3,1)]"
    >
      <div className="absolute top-16 md:top-20 left-2 md:left-10 max-w-[110px] sm:max-w-[130px] md:max-w-[260px] z-0">
        <p className="text-foreground font-medium text-[10px] sm:text-xs md:text-base leading-relaxed drop-shadow">
          "{t('home.curryQuote', language)}"
        </p>
        <p className="text-muted-foreground text-[9px] sm:text-[10px] md:text-sm mt-0.5 sm:mt-1 md:mt-2">
          {t('home.curryAuthor', language)}
        </p>
      </div>

      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-10 w-[70px] sm:w-[85px] md:w-[190px] rounded-lg overflow-hidden shadow-xl z-0">
        <img src={`${import.meta.env.BASE_URL}home-curry.jpg`} alt="Stephen Curry" className="w-full h-auto object-cover" />
      </div>

      <div className="absolute top-16 md:top-20 right-2 md:right-10 w-[60px] sm:w-[75px] md:w-[160px] rounded-lg overflow-hidden shadow-xl z-0">
        <img src={`${import.meta.env.BASE_URL}home-jay.jpg`} alt="Jay Chou" className="w-full h-auto object-cover" />
      </div>

      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-10 max-w-[120px] sm:max-w-[140px] md:max-w-[280px] text-right z-0">
        <p className="text-foreground font-medium text-[10px] sm:text-xs md:text-base leading-relaxed drop-shadow">
          "{t('home.jayLyrics', language)}"
        </p>
        <p className="text-muted-foreground text-[9px] sm:text-[10px] md:text-sm mt-0.5 sm:mt-1 md:mt-2">
          {t('home.jayAuthor', language)}
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center z-10 py-16 sm:py-20 md:py-0">
        <div className="mx-auto mb-4 sm:mb-6 md:mb-8 size-16 sm:size-20 md:size-24 rounded-full overflow-hidden shadow-lg ring-2 ring-white/60">
          <img src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-base sm:text-lg md:text-3xl font-semibold text-foreground leading-relaxed mb-2 sm:mb-3 md:mb-4 drop-shadow-sm px-2 sm:px-4 whitespace-pre-line">
          {t('home.greeting', language)}
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-lg px-4 sm:px-8">
          {t('home.subtitle', language)}
        </p>
      </div>
    </section>
  );
}
