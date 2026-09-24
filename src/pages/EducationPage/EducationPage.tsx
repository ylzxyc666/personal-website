import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/i18n/translations';
import { MOCK_PROFILE } from '@/data/profile';

export default function EducationPage() {
  const { education } = MOCK_PROFILE;
  const { language } = useLanguage();
  const [aiExpanded, setAiExpanded] = useState(false);
  const [codingExpanded, setCodingExpanded] = useState(false);

  return (
    <section className="w-full py-16 md:py-20 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-xl font-semibold text-foreground mb-8">{t('education.title', language)}</h2>
        <h3 className="text-base font-semibold text-foreground/80 mb-4">{t('education.educationTitle', language)}</h3>

        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-5">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex gap-2 sm:gap-4">
              <span className="text-muted-foreground min-w-[64px] sm:min-w-[80px] shrink-0 text-xs sm:text-sm">{language === 'zh' ? '学校' : 'School'}</span>
              <span className="text-foreground text-xs sm:text-sm">{t('education.school', language)}</span>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <span className="text-muted-foreground min-w-[64px] sm:min-w-[80px] shrink-0 text-xs sm:text-sm">{language === 'zh' ? '专业' : 'Major'}</span>
              <span className="text-foreground text-xs sm:text-sm">{t('education.major', language)}</span>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <span className="text-muted-foreground min-w-[64px] sm:min-w-[80px] shrink-0 text-xs sm:text-sm">{t('education.enrollment', language)}</span>
              <span className="text-foreground text-xs sm:text-sm">{t('education.enrollmentDate', language)}</span>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <span className="text-muted-foreground min-w-[64px] sm:min-w-[80px] shrink-0 text-xs sm:text-sm">{language === 'zh' ? '年级' : 'Grade'}</span>
              <span className="text-foreground text-xs sm:text-sm">{t('education.grade', language)}</span>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <span className="text-muted-foreground min-w-[64px] sm:min-w-[80px] shrink-0 text-xs sm:text-sm">{language === 'zh' ? '实习经历' : 'Internship'}</span>
              <span className="text-foreground text-xs sm:text-sm">{t('education.internship', language)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-10">
          <p className="text-muted-foreground mb-3 font-medium">{t('education.courses', language)}</p>
          <ul className="space-y-2 pl-4 list-disc list-outside text-foreground/80">
            {education.courses.map((course, index) => (<li key={index} className="pl-1 text-xs sm:text-sm">{course}</li>))}
          </ul>
        </div>

        <h3 className="text-base font-semibold text-foreground/80 mb-4">{t('education.skillsTitle', language)}</h3>
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-3 font-medium">{t('education.learning', language)}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-muted text-foreground/80">{t('education.learningText', language)}</span>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground mb-3 font-medium">{t('education.interests', language)}</p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setAiExpanded(!aiExpanded)} className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm border cursor-pointer transition-colors ${aiExpanded ? 'bg-[#0045AD] text-white border-[#0045AD]' : 'border-border text-foreground/80 hover:bg-muted hover:border-foreground/30 hover:text-foreground'}`}>
                  {t('education.aiButton', language)}
                </button>
                <button onClick={() => setCodingExpanded(!codingExpanded)} className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm border cursor-pointer transition-colors ${codingExpanded ? 'bg-[#0045AD] text-white border-[#0045AD]' : 'border-border text-foreground/80 hover:bg-muted hover:border-foreground/30 hover:text-foreground'}`}>
                  {t('education.codingButton', language)}
                </button>
              </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-out origin-top ${aiExpanded ? 'max-h-[3000px] opacity-100 scale-100 translate-y-0 mt-2' : 'max-h-0 opacity-0 scale-75 -translate-y-3'}`}>
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-border/50">
                <h4 className="text-lg font-semibold text-foreground mb-4">{t('education.aiTitle', language)}</h4>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
                  <p>{t('education.aiIntro1', language)}</p>
                  <p>{t('education.aiIntro2', language)}</p>
                  <p className="font-medium text-foreground">{t('education.aiSubTitle', language)}</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex gap-2"><span className="font-semibold text-foreground shrink-0">{t('education.aiPoint1Label', language)}：</span><span>{t('education.aiPoint1Content', language)}</span></li>
                    <li className="flex gap-2"><span className="font-semibold text-foreground shrink-0">{t('education.aiPoint2Label', language)}：</span><span>{t('education.aiPoint2Content', language)}</span></li>
                    <li className="flex gap-2"><span className="font-semibold text-foreground shrink-0">{t('education.aiPoint3Label', language)}：</span><span>{t('education.aiPoint3Content', language)}</span></li>
                  </ul>
                  <p>{t('education.aiConclusion', language)}</p>
                </div>
              </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-out origin-top ${codingExpanded ? 'max-h-[3000px] opacity-100 scale-100 translate-y-0 mt-2' : 'max-h-0 opacity-0 scale-75 -translate-y-3'}`}>
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-border/50">
                <h4 className="text-lg font-semibold text-foreground mb-4">{language === 'zh' ? '关于编程开发的思考' : 'Thoughts on Programming'}</h4>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
                  <p>{t('education.coding1', language)}</p>
                  <p>{t('education.coding2', language)}</p>
                  <p>{t('education.coding3', language)}</p>
                  <p>{t('education.coding4', language)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
