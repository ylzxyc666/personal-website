import { useState } from 'react';
import { MOCK_PROFILE } from '@/data/profile';

export default function AboutPage() {
  const { aboutSections, aboutTitle } = MOCK_PROFILE;
  const hometown = aboutSections[0];
  const rest = aboutSections.slice(1);
  const [showHighSchool, setShowHighSchool] = useState(false);
  const [showMusicDetail, setShowMusicDetail] = useState(false);
  const [showBasketballDetail, setShowBasketballDetail] = useState(false);

  const musicSongs = [
    { songs: '黑色毛衣　半岛铁盒　火车叨位去　以父之名', artist: '——周杰伦' },
    { songs: 'Love Yourself　Unstable　Come Around Me　Holy', artist: '——Justin Bieber' },
    { songs: 'Lose Yourself　Godzilla　Stan', artist: '——Eminem' },
  ];

  return (
    <section className="w-full py-16 md:py-20 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-xl font-semibold text-foreground mb-8">
          {aboutTitle}
        </h2>

        {/* 故乡板块 - 横版全宽 */}
        <div className="mb-6 rounded-xl overflow-hidden shadow-md bg-white">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: hometown.aspectRatio }}
          >
            <img
              src={`${import.meta.env.BASE_URL}${hometown.image}`}
              alt={hometown.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-white px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-foreground font-semibold">{hometown.title}</p>
              <p className="text-foreground/70 text-sm mt-1">{hometown.text}</p>
            </div>
            <button
              onClick={() => setShowHighSchool(!showHighSchool)}
              className="shrink-0 ml-4 px-4 py-1.5 rounded-lg bg-[#0045AD] text-white text-sm font-medium
                hover:bg-[#003a8c] transition-colors cursor-pointer"
            >
              {showHighSchool ? '收起' : '更多...'}
            </button>
          </div>
        </div>

        {/* 高中板块 - 展开/收起 */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out origin-top
            ${showHighSchool
              ? 'max-h-[2000px] opacity-100 scale-100 translate-y-0 mb-6'
              : 'max-h-0 opacity-0 scale-95 -translate-y-2'
            }`}
        >
          <div className="rounded-xl overflow-hidden shadow-md bg-white">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
              <img
                src={`${import.meta.env.BASE_URL}high-school.jpg`}
                alt="常熟市中学"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="bg-white px-5 py-4">
              <p className="text-foreground font-semibold">高中　　常熟市中学</p>
              <p className="text-foreground/70 text-sm mt-2 italic">
                "战士怀念的不是战场，而是战友"
              </p>
            </div>
          </div>
        </div>

        {/* 篮球 / 台球 / 听音乐 - 竖版三列 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {rest.map((section, index) => {
            const isMusic = section.title === '听音乐';
            const isBasketball = section.title === '篮球';

            if (isBasketball) {
              return (
                <div key={index} className="flex flex-col gap-6">
                  {/* 篮球板块 */}
                  <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: section.aspectRatio }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${section.image}`}
                        alt={section.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white px-4 py-3 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-foreground font-semibold text-sm">
                          {section.title}
                        </p>
                        <p className="text-foreground/70 text-xs mt-1.5 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                      <div className="flex justify-end mt-3">
                        <button
                          onClick={() => setShowBasketballDetail(!showBasketballDetail)}
                          className="px-3 py-1 rounded-lg bg-[#0045AD] text-white text-xs font-medium
                            hover:bg-[#003a8c] transition-colors cursor-pointer"
                        >
                          {showBasketballDetail ? '收起' : '更多...'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 篮球展开板块 */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out origin-top
                      ${showBasketballDetail
                        ? 'max-h-[2000px] opacity-100 scale-100 translate-y-0'
                        : 'max-h-0 opacity-0 scale-95 -translate-y-2'
                      }`}
                  >
                    <div className="rounded-xl overflow-hidden shadow-md bg-white">
                      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                        <img
                          src={`${import.meta.env.BASE_URL}basketball-more.jpg`}
                          alt="Curry"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-white px-4 py-3">
                        <p className="text-foreground/80 text-xs leading-relaxed">
                          能再一次做到吗？╰😭╯╰😭╯╰😭╯
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (isMusic) {
              return (
                <div key={index} className="flex flex-col gap-6">
                  {/* 听音乐板块 */}
                  <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: section.aspectRatio }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${section.image}`}
                        alt={section.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white px-4 py-3 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-foreground font-semibold text-sm">
                          {section.title}
                        </p>
                        <p className="text-foreground/70 text-xs mt-1.5 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                      <div className="flex justify-end mt-3">
                        <button
                          onClick={() => setShowMusicDetail(!showMusicDetail)}
                          className="px-3 py-1 rounded-lg bg-[#0045AD] text-white text-xs font-medium
                            hover:bg-[#003a8c] transition-colors cursor-pointer"
                        >
                          {showMusicDetail ? '收起' : '更多...'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 喜欢听的歌 - 展开/收起 */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out origin-top
                      ${showMusicDetail
                        ? 'max-h-[2000px] opacity-100 scale-100 translate-y-0'
                        : 'max-h-0 opacity-0 scale-95 -translate-y-2'
                      }`}
                  >
                    <div className="rounded-xl shadow-md bg-white p-4">
                      <p className="text-foreground font-semibold text-sm mb-3">
                        喜欢听的歌
                      </p>
                      <div className="space-y-2.5">
                        {musicSongs.map((item, i) => (
                          <div key={i} className="flex items-baseline justify-between gap-2">
                            <span className="text-foreground/80 text-xs leading-relaxed">
                              {item.songs}
                            </span>
                            <span className="text-muted-foreground text-[10px] shrink-0">
                              {item.artist}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col"
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: section.aspectRatio }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${section.image}`}
                    alt={section.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white px-4 py-3 flex-1">
                  <p className="text-foreground font-semibold text-sm">
                    {section.title}
                  </p>
                  <p className="text-foreground/70 text-xs mt-1.5 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
