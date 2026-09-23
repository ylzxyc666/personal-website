import { useState } from 'react';
import { supabase } from '@/lib/supabase';

const USERNAME = 'ylzxyc666';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function FeedbackPage() {
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('feedback').insert({
        username: USERNAME,
        content: content.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setContent('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : '提交失败，请稍后重试');
    }
  };

  return (
    <section className="w-full py-16 md:py-20 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          网站使用反馈
        </h2>

        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                你的反馈
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="请输入你对网站的使用反馈、建议或问题..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                  placeholder:text-muted-foreground/60 resize-y
                  focus:outline-none focus:ring-2 focus:ring-[#0045AD]/30 focus:border-[#0045AD]
                  transition-colors"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                提交人：{USERNAME}
              </p>
              <button
                type="submit"
                disabled={!content.trim() || status === 'submitting'}
                className="px-5 py-2 rounded-lg bg-[#0045AD] text-white text-sm font-medium
                  hover:bg-[#003a8c] transition-colors
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? '提交中...' : '提交反馈'}
              </button>
            </div>

            {status === 'success' && (
              <p className="text-sm text-green-600 font-medium">
                反馈提交成功，感谢你的建议！
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 font-medium">
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
