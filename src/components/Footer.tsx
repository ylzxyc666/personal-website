import { MOCK_PROFILE } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <p>{MOCK_PROFILE.copyright}</p>
        <p className="text-xs">{MOCK_PROFILE.version}</p>
      </div>
    </footer>
  );
}
