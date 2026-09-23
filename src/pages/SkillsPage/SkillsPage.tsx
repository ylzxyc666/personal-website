import { MOCK_PROFILE } from '@/data/profile';

export default function SkillsPage() {
  const { skills } = MOCK_PROFILE;

  return (
    <section className="w-full py-16 md:py-20 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          {MOCK_PROFILE.skillsTitle}
        </h2>

        <div className="space-y-6">
          {/* 正在学习 */}
          <div>
            <p className="text-muted-foreground mb-3">正在学习</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-muted text-foreground/80">
                {skills.learning}
              </span>
            </div>
          </div>

          {/* 兴趣方向 */}
          <div>
            <p className="text-muted-foreground mb-3">兴趣方向</p>
            <div className="flex flex-wrap gap-2">
              {skills.interests.map((interest, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm border border-border text-foreground/80"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
