import { MOCK_PROFILE } from '@/data/profile';

export default function HomePage() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center pt-14 overflow-hidden animate-[slide-up-in_0.75s_cubic-bezier(0.16,1,0.3,1)]"
    >
      {/* 左上：Stephen Curry 语录 */}
      <div className="absolute top-20 left-3 md:left-10 max-w-[130px] md:max-w-[260px] z-0">
        <p className="text-foreground font-medium text-xs md:text-base leading-relaxed drop-shadow">
          "下赛季没人想碰到我们"
        </p>
        <p className="text-muted-foreground text-[10px] md:text-sm mt-1 md:mt-2">
          —— Stephen Curry
        </p>
      </div>

      {/* 左下：Curry 图片 */}
      <div className="absolute bottom-4 left-3 md:left-10 w-[85px] md:w-[190px] rounded-lg overflow-hidden shadow-xl z-0">
        <img
          src={`${import.meta.env.BASE_URL}home-curry.jpg`}
          alt="Stephen Curry"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* 右上：周杰伦图片 */}
      <div className="absolute top-20 right-3 md:right-10 w-[75px] md:w-[160px] rounded-lg overflow-hidden shadow-xl z-0">
        <img
          src={`${import.meta.env.BASE_URL}home-jay.jpg`}
          alt="周杰伦"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* 右下：周杰伦歌词 */}
      <div className="absolute bottom-4 right-3 md:right-10 max-w-[140px] md:max-w-[280px] text-right z-0">
        <p className="text-foreground font-medium text-xs md:text-base leading-relaxed drop-shadow">
          "想吹风，想自由，想要一起手牵手，去看海，绕世界流浪"
        </p>
        <p className="text-muted-foreground text-[10px] md:text-sm mt-1 md:mt-2">
          —— 周杰伦《暗号》
        </p>
      </div>

      {/* 中间：原有内容 */}
      <div className="max-w-3xl mx-auto px-6 text-center z-10 py-20 md:py-0">
        {/* 圆形文字头像 */}
        <div className="mx-auto mb-6 md:mb-8 size-20 md:size-24 rounded-full bg-foreground text-background flex items-center justify-center text-xl md:text-2xl font-semibold tracking-wider shadow-lg">
          {MOCK_PROFILE.initials}
        </div>

        {/* 欢迎语 */}
        <h1 className="text-lg md:text-3xl font-semibold text-foreground leading-relaxed mb-3 md:mb-4 drop-shadow-sm px-4 whitespace-pre-line">
          {MOCK_PROFILE.greeting}
        </h1>

        {/* 副标题 */}
        <p className="text-muted-foreground text-sm md:text-lg px-8">
          {MOCK_PROFILE.subtitle}
        </p>
      </div>
    </section>
  );
}
