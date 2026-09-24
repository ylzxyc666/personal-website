import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/i18n/translations';
import { MOCK_PROFILE } from '@/data/profile';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="w-full border-t border-border/40 py-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <p>{MOCK_PROFILE.copyright}</p>
        <p className="text-xs">{t('footer.version', language)}</p>
      </div>
    </footer>
  );
}
