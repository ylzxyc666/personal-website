import { useState } from 'react';
import { MOCK_PROFILE } from '@/data/profile';

export default function EducationPage() {
  const { education, skills, aiThoughts, codingThoughts } = MOCK_PROFILE;
  const [aiExpanded, setAiExpanded] = useState(false);
  const [codingExpanded, setCodingExpanded] = useState(false);

  return (
    <section className="w-full py-16 md:py-20 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-xl font-semibold text-foreground mb-8">
          教育与技能
        </h2>

        {/* ===== 教育背景 ===== */}
        <h3 className="text-base font-semibold text-foreground/80 mb-4">
          教育背景
        </h3>

        {/* 基本信息卡片 */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-5">
          <div className="space-y-3">
            <div className="flex gap-4">
              <span className="text-muted-foreground min-w-[80px] shrink-0">
                学校
              </span>
              <span className="text-foreground">{education.school}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted-foreground min-w-[80px] shrink-0">
                专业
              </span>
              <span className="text-foreground">{education.major}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted-foreground min-w-[80px] shrink-0">
                入学时间
              </span>
              <span className="text-foreground">
                {education.enrollmentDate}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted-foreground min-w-[80px] shrink-0">
                年级
              </span>
              <span className="text-foreground">{education.grade}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted-foreground min-w-[80px] shrink-0">
                实习经历
              </span>
              <span className="text-foreground">{education.internship}</span>
            </div>
          </div>
        </div>

        {/* 当前课程卡片 */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-10">
          <p className="text-muted-foreground mb-3 font-medium">当前课程</p>
          <ul className="space-y-2 pl-4 list-disc list-outside text-foreground/80">
            {education.courses.map((course, index) => (
              <li key={index} className="pl-1">
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 技能与兴趣 ===== */}
        <h3 className="text-base font-semibold text-foreground/80 mb-4">
          技能与兴趣
        </h3>

        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <div className="space-y-6">
            {/* 正在学习 */}
            <div>
              <p className="text-muted-foreground mb-3 font-medium">
                正在学习
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-muted text-foreground/80">
                  {skills.learning}
                </span>
              </div>
            </div>

            {/* 兴趣方向 */}
            <div>
              <p className="text-muted-foreground mb-3 font-medium">
                兴趣方向
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.interests.map((interest, index) => {
                  const isAi = interest === '人工智能（AI）';
                  const isCoding = interest === '编程开发';
                  if (isAi || isCoding) {
                    const expanded = isAi ? aiExpanded : codingExpanded;
                    const onClick = isAi
                      ? () => setAiExpanded(!aiExpanded)
                      : () => setCodingExpanded(!codingExpanded);
                    return (
                      <button
                        key={index}
                        onClick={onClick}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm border cursor-pointer transition-colors
                          ${expanded
                            ? 'bg-[#0045AD] text-white border-[#0045AD]'
                            : 'border-border text-foreground/80 hover:bg-muted hover:border-foreground/30 hover:text-foreground'
                          }`}
                      >
                        {interest}
                      </button>
                    );
                  }
                  return (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm border border-border text-foreground/80"
                    >
                      {interest}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* AI 思考展开文本框 */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-out origin-top
                ${aiExpanded
                  ? 'max-h-[3000px] opacity-100 scale-100 translate-y-0 mt-2'
                  : 'max-h-0 opacity-0 scale-75 -translate-y-3'
                }`}
            >
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-border/50">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {aiThoughts.title}
                </h4>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
                  {aiThoughts.intro.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  <p className="font-medium text-foreground">{aiThoughts.subTitle}</p>
                  <ul className="space-y-2 pl-4">
                    {aiThoughts.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="font-semibold text-foreground shrink-0">{point.label}：</span>
                        <span>{point.content}</span>
                      </li>
                    ))}
                  </ul>
                  <p>{aiThoughts.conclusion}</p>
                </div>
              </div>
            </div>

            {/* 编程开发思考展开文本框 */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-out origin-top
                ${codingExpanded
                  ? 'max-h-[3000px] opacity-100 scale-100 translate-y-0 mt-2'
                  : 'max-h-0 opacity-0 scale-75 -translate-y-3'
                }`}
            >
              <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-border/50">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  关于编程开发的思考
                </h4>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
                  {codingThoughts.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
