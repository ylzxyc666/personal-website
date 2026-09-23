import { MOCK_PROFILE } from '@/data/profile';

export default function AboutPage() {
  const { aboutSections, aboutTitle } = MOCK_PROFILE;
  const hometown = aboutSections[0];
  const rest = aboutSections.slice(1);

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
              src={hometown.image}
              alt={hometown.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-white px-5 py-4">
            <p className="text-foreground font-semibold">{hometown.title}</p>
            <p className="text-foreground/70 text-sm mt-1">{hometown.text}</p>
          </div>
        </div>

        {/* 篮球 / 台球 / 听音乐 - 竖版三列 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {rest.map((section, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col"
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: section.aspectRatio }}
              >
                <img
                  src={section.image}
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
          ))}
        </div>
      </div>
    </section>
  );
}
