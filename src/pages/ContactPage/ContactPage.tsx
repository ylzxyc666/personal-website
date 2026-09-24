import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/i18n/translations';
import { MOCK_PROFILE } from '@/data/profile';
import { Mail, Github } from 'lucide-react';

export default function ContactPage() {
  const { contact } = MOCK_PROFILE;
  const { language } = useLanguage();

  return (
    <section className="w-full py-16 md:py-20 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">{t('contact.title', language)}</h2>
        <div className="space-y-4">
          <a href={`mailto:${contact.tjuEmail}`} className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 hover:bg-muted/30 transition-colors group">
            <Mail className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground mb-0.5">{t('contact.tjuEmail', language)}</p>
              <p className="text-foreground truncate">{contact.tjuEmail}</p>
            </div>
          </a>
          <a href={`mailto:${contact.polyuEmail}`} className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 hover:bg-muted/30 transition-colors group">
            <Mail className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground mb-0.5">{t('contact.polyuEmail', language)}</p>
              <p className="text-foreground truncate">{contact.polyuEmail}</p>
            </div>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 hover:bg-muted/30 transition-colors group">
            <Github className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground mb-0.5">{t('contact.github', language)}</p>
              <p className="text-foreground truncate">{contact.github.replace('https://', '')}</p>
            </div>
          </a>
        </div>
        <p className="mt-6 text-muted-foreground text-sm">{t('contact.welcomeText', language)}</p>
      </div>
    </section>
  );
}
