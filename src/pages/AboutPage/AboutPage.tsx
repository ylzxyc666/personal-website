import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/i18n/translations';
import { MOCK_PROFILE } from '@/data/profile';

export default function AboutPage() {
  const { aboutSections } = MOCK_PROFILE;
  const hometown = aboutSections[0];
  const rest = aboutSections.slice(1);
  const { language } = useLanguage();
  const [showHighSchool, setShowHighSchool] = useState(false);
  const [showMusicDetail, setShowMusicDetail] = useState(false);
  const [showBasketballDetail, setShowBasketballDetail] = useState(false);
  const [showBilliardsDetail, setShowBilliardsDetail] = useState(false);

  const musicSongs = [
    { songs: '黑色毛衣　半岛铁盒　火车叨位去　以父之名', artistKey: 'about.jayArtist' },
    { songs: 'Love Yourself　Unstable　Come Around Me　Holy', artistKey: 'about.bieberArtist' },
    { songs: 'Lose Yourself　Godzilla　Stan', artistKey: 'about.eminemArtist' },
  ];

  const btnLabel = (show: boolean) => show ? t('about.collapse', language) : t('about.more', language);

  return (
    <section className="w-full py-16 md:py-20 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-xl font-semibold text-foreground mb-8">{t('about.title', language)}</h2>

        <div className="mb-6 rounded-xl overflow-hidden shadow-md bg-white">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: hometown.aspectRatio }}>
            <img src={`${import.meta.env.BASE_URL}${hometown.image}`} alt={t('about.hometown', language)} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-white px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-foreground font-semibold">{t('about.hometown', language)}</p>
              <p className="text-foreground/70 text-sm mt-1">{t('about.hometownText', language)}</p>
            </div>
            <button onClick={() => setShowHighSchool(!showHighSchool)} className="shrink-0 ml-4 px-4 py-1.5 rounded-lg bg-[#0045AD] text-white text-sm font-medium hover:bg-[#003a8c] transition-colors cursor-pointer">
              {btnLabel(showHighSchool)}
            </button>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ease-out origin-top ${showHighSchool ? 'max-h-[2000px] opacity-100 scale-100 translate-y-0 mb-6' : 'max-h-0 opacity-0 scale-95 -translate-y-2'}`}>
          <div className="rounded-xl overflow-hidden shadow-md bg-white">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
              <img src={`${import.meta.env.BASE_URL}high-school.jpg`} alt="Changshu High School" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="bg-white px-5 py-4">
              <p className="text-foreground font-semibold">{t('about.highSchoolTitle', language)}</p>
              <p className="text-foreground/70 text-sm mt-2 italic">"{t('about.highSchoolQuote', language)}"</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {rest.map((section, index) => {
            const isMusic = section.title === '听音乐';
            const isBasketball = section.title === '篮球';
            const isBilliards = section.title === '台球';

            if (isBilliards) {
              return (
                <div key={index} className="flex flex-col gap-4 sm:gap-6">
                  <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: section.aspectRatio }}>
                      <img src={`${import.meta.env.BASE_URL}${section.image}`} alt={t('about.billiards', language)} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="bg-white px-4 py-3 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-foreground font-semibold text-sm">{t('about.billiards', language)}</p>
                        <p className="text-foreground/70 text-xs mt-1.5 leading-relaxed">{t('about.billiardsText', language)}</p>
                      </div>
                      <div className="flex justify-end mt-3">
                        <button onClick={() => setShowBilliardsDetail(!showBilliardsDetail)} className="px-3 py-1 rounded-lg bg-[#0045AD] text-white text-xs font-medium hover:bg-[#003a8c] transition-colors cursor-pointer">
                          {btnLabel(showBilliardsDetail)}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ease-out origin-top ${showBilliardsDetail ? 'max-h-[2000px] opacity-100 scale-100 translate-y-0' : 'max-h-0 opacity-0 scale-95 -translate-y-2'}`}>
                    <div className="rounded-xl overflow-hidden shadow-md bg-white">
                      <div className="bg-white px-4 py-3">
                        <p className="text-foreground/80 text-xs leading-relaxed">{t('about.billiardsMore', language)}</p>
                      </div>
                      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
                        <img src={`${import.meta.env.BASE_URL}billiards-more.jpg`} alt="Billiards" className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (isBasketball) {
              return (
                <div key={index} className="flex flex-col gap-4 sm:gap-6">
                  <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: section.aspectRatio }}>
                      <img src={`${import.meta.env.BASE_URL}${section.image}`} alt={t('about.basketball', language)} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="bg-white px-4 py-3 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-foreground font-semibold text-sm">{t('about.basketball', language)}</p>
                        <p className="text-foreground/70 text-xs mt-1.5 leading-relaxed">{t('about.basketballText', language)}</p>
                      </div>
                      <div className="flex justify-end mt-3">
                        <button onClick={() => setShowBasketballDetail(!showBasketballDetail)} className="px-3 py-1 rounded-lg bg-[#0045AD] text-white text-xs font-medium hover:bg-[#003a8c] transition-colors cursor-pointer">
                          {btnLabel(showBasketballDetail)}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ease-out origin-top ${showBasketballDetail ? 'max-h-[2000px] opacity-100 scale-100 translate-y-0' : 'max-h-0 opacity-0 scale-95 -translate-y-2'}`}>
                    <div className="rounded-xl overflow-hidden shadow-md bg-white">
                      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                        <img src={`${import.meta.env.BASE_URL}basketball-more.jpg`} alt="Curry" className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                      <div className="bg-white px-4 py-3">
                        <p className="text-foreground/80 text-xs leading-relaxed">{t('about.basketballMore', language)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (isMusic) {
              return (
                <div key={index} className="flex flex-col gap-4 sm:gap-6">
                  <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: section.aspectRatio }}>
                      <img src={`${import.meta.env.BASE_URL}${section.image}`} alt={t('about.music', language)} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="bg-white px-4 py-3 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-foreground font-semibold text-sm">{t('about.music', language)}</p>
                        <p className="text-foreground/70 text-xs mt-1.5 leading-relaxed">{t('about.musicText', language)}</p>
                      </div>
                      <div className="flex justify-end mt-3">
                        <button onClick={() => setShowMusicDetail(!showMusicDetail)} className="px-3 py-1 rounded-lg bg-[#0045AD] text-white text-xs font-medium hover:bg-[#003a8c] transition-colors cursor-pointer">
                          {btnLabel(showMusicDetail)}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ease-out origin-top ${showMusicDetail ? 'max-h-[2000px] opacity-100 scale-100 translate-y-0' : 'max-h-0 opacity-0 scale-95 -translate-y-2'}`}>
                    <div className="rounded-xl shadow-md bg-white p-4">
                      <p className="text-foreground font-semibold text-sm mb-3">{t('about.favoriteSongs', language)}</p>
                      <div className="space-y-2.5">
                        {musicSongs.map((item, i) => (
                          <div key={i} className="flex items-baseline justify-between gap-2">
                            <span className="text-foreground/80 text-xs leading-relaxed">{item.songs}</span>
                            <span className="text-muted-foreground text-[10px] shrink-0">{t(item.artistKey, language)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: section.aspectRatio }}>
                  <img src={`${import.meta.env.BASE_URL}${section.image}`} alt={section.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="bg-white px-4 py-3 flex-1">
                  <p className="text-foreground font-semibold text-sm">{section.title}</p>
                  <p className="text-foreground/70 text-xs mt-1.5 leading-relaxed">{section.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
