import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/i18n/translations';
import { supabase } from '@/lib/supabase';

const USERNAME = 'ylzxyc666';
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function FeedbackPage() {
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setStatus('submitting');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('feedback').insert({ username: USERNAME, content: content.trim() });
      if (error) throw error;
      setStatus('success');
      setContent('');
      setShowToast(true);
      setTimeout(() => { setShowToast(false); setStatus('idle'); }, 2500);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : (language === 'zh' ? '提交失败，请稍后重试' : 'Submission failed, please try again later'));
    }
  };

  return (
    <section className="w-full py-16 md:py-20 pt-24 md:pt-28">
      {showToast && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          <div className="bg-[#0045AD] text-white px-8 py-4 rounded-xl shadow-2xl text-lg font-medium animate-[toast-in_0.3s_ease-out_forwards]">
            {t('feedback.success', language)}
          </div>
        </div>
      )}
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">{t('feedback.title', language)}</h2>
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">{t('feedback.label', language)}</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder={t('feedback.placeholder', language)} rows={6} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 resize-y focus:outline-none focus:ring-2 focus:ring-[#0045AD]/30 focus:border-[#0045AD] transition-colors" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">{t('feedback.submittedBy', language)}：{USERNAME}</p>
              <button type="submit" disabled={!content.trim() || status === 'submitting'} className="px-5 py-2 rounded-lg bg-[#0045AD] text-white text-sm font-medium hover:bg-[#003a8c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'submitting' ? t('feedback.submitting', language) : t('feedback.submit', language)}
              </button>
            </div>
            {status === 'error' && (<p className="text-sm text-red-600 font-medium">{errorMsg}</p>)}
          </form>
        </div>
      </div>
    </section>
  );
}
