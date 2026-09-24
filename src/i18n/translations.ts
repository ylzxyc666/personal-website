import { Language } from '@/context/LanguageContext';

export const translations = {
  nav: {
    home: { zh: '首页', en: 'Home' },
    about: { zh: '关于我', en: 'About' },
    education: { zh: '教育与技能', en: 'Education & Skills' },
    contact: { zh: '联系我', en: 'Contact' },
    feedback: { zh: '使用反馈', en: 'Feedback' },
  },
  home: {
    greeting: {
      zh: '你好，我是陈一诺（Noah）。\n欢迎来到我的数字空间。',
      en: "Hi, I'm Yinuo Chen (Noah).\nWelcome to my digital space.",
    },
    subtitle: {
      zh: '天津大学香港理工大学深圳未来技术学院 · 计算机科学与技术专业',
      en: 'TJU & PolyU Shenzhen Future Technology College · Computer Science and Technology',
    },
    curryQuote: { zh: '下赛季没人想碰到我们', en: 'No one wants to play us next season' },
    curryAuthor: { zh: '—— Stephen Curry', en: '—— Stephen Curry' },
    jayLyrics: {
      zh: '想吹风，想自由，想要一起手牵手，去看海，绕世界流浪',
      en: '想吹风，想自由，想要一起手牵手，去看海，绕世界流浪',
    },
    jayAuthor: { zh: '—— 周杰伦《暗号》', en: '—— Jay Chou "Coded Signal"' },
  },
  about: {
    title: { zh: '关于我', en: 'About Me' },
    hometown: { zh: '故乡', en: 'Hometown' },
    hometownText: { zh: '江苏常熟，一家四口', en: 'Changshu, Jiangsu · Family of four' },
    more: { zh: '更多...', en: 'More...' },
    collapse: { zh: '收起', en: 'Collapse' },
    highSchoolTitle: { zh: '高中　　常熟市中学', en: 'High School　　Changshu High School' },
    highSchoolQuote: {
      zh: '战士怀念的不是战场，而是战友',
      en: 'What soldiers miss is not the battlefield, but their comrades',
    },
    basketball: { zh: '篮球', en: 'Basketball' },
    basketballText: {
      zh: '一个业余的后卫，最喜欢的球星是 Stephen Curry',
      en: 'An amateur point guard, favorite player is Stephen Curry',
    },
    basketballMore: {
      zh: '能再一次做到吗？╰😭╯╰😭╯╰😭╯',
      en: 'Can we do it again? ╰😭╯╰😭╯╰😭╯',
    },
    billiards: { zh: '台球', en: 'Billiards' },
    billiardsText: { zh: '入坑两年，时准时匕首', en: 'Two years in, sometimes on point, sometimes terrible' },
    billiardsMore: { zh: '我希望我的球技belike：', en: 'I wish my skills be like:' },
    music: { zh: '听音乐', en: 'Music' },
    musicText: { zh: 'R&B + RAP Lover，最爱听 Jay Chou', en: 'R&B + RAP Lover, favorite artist is Jay Chou' },
    favoriteSongs: { zh: '喜欢听的歌', en: 'Favorite Songs' },
    jayArtist: { zh: '——周杰伦', en: '—— Jay Chou' },
    bieberArtist: { zh: '——Justin Bieber', en: '—— Justin Bieber' },
    eminemArtist: { zh: '——Eminem', en: '—— Eminem' },
  },
  education: {
    title: { zh: '教育与技能', en: 'Education & Skills' },
    educationTitle: { zh: '教育背景', en: 'Education' },
    school: {
      zh: '天津大学香港理工大学深圳未来技术学院',
      en: 'TJU & PolyU Shenzhen Future Technology College',
    },
    major: { zh: '计算机科学与技术', en: 'Computer Science and Technology' },
    enrollment: { zh: '入学时间', en: 'Enrollment' },
    enrollmentDate: { zh: '2026年8月', en: 'August 2026' },
    grade: {
      zh: '目前是大一学生，对 AI 和编程充满兴趣，正在努力学习中',
      en: 'Currently a freshman, passionate about AI and programming, working hard to learn',
    },
    internship: {
      zh: '暂无实习经历，期待未来能进入企业进行实习',
      en: 'No internship experience yet, looking forward to interning at a company in the future',
    },
    courses: { zh: '当前课程', en: 'Current Courses' },
    skillsTitle: { zh: '技能与兴趣', en: 'Skills & Interests' },
    learning: { zh: '正在学习', en: 'Learning' },
    learningText: { zh: 'AI 编程工具', en: 'AI Programming Tools' },
    interests: { zh: '兴趣方向', en: 'Interests' },
    aiButton: { zh: '人工智能（AI）', en: 'Artificial Intelligence (AI)' },
    codingButton: { zh: '编程开发', en: 'Programming & Development' },
    aiTitle: { zh: '关于 AI 的思考', en: 'Thoughts on AI' },
    aiIntro1: {
      zh: '作为计算机科学与技术专业大一新生，AI 是我踏入专业后最关注的方向。',
      en: 'As a freshman in Computer Science and Technology, AI is the direction I care most about since entering my major.',
    },
    aiIntro2: {
      zh: '我理解的 AI，是算法、数据与算力共同构建的智能技术 —— 它早已走出实验室，渗透进日常交互、产业生产与科研探索，既在微观上提升效率，也在宏观上重塑着行业的运行逻辑。',
      en: 'As I understand it, AI is intelligent technology built by algorithms, data, and computing power — it has long left the lab and permeated daily interactions, industrial production, and scientific research, improving efficiency at the micro level while reshaping industry logic at the macro level.',
    },
    aiSubTitle: {
      zh: '关于 AI 的未来，我有三点朴素的判断：',
      en: 'Regarding the future of AI, I have three simple observations:',
    },
    aiPoint1Label: { zh: '技术维度', en: 'Technology' },
    aiPoint1Content: {
      zh: '多模态融合、边缘 AI 持续突破，智能能力会更通用，也会下沉到更多终端，降低应用门槛；',
      en: 'Multimodal fusion and edge AI continue to break through; intelligence will become more general and reach more devices, lowering barriers to application;',
    },
    aiPoint2Label: { zh: '产业维度', en: 'Industry' },
    aiPoint2Content: {
      zh: 'AI 将与制造、医疗等实体行业深度结合，从单点效率工具升级为产业升级的核心驱动力；',
      en: 'AI will deeply integrate with manufacturing, healthcare, and other real industries, evolving from point efficiency tools to core drivers of industrial upgrading;',
    },
    aiPoint3Label: { zh: '社会维度', en: 'Society' },
    aiPoint3Content: {
      zh: '技术伦理会同步完善，数据安全、算法公平将成为 AI 发展的基本底线。',
      en: 'Tech ethics will develop in parallel; data security and algorithmic fairness will become the baseline of AI development.',
    },
    aiConclusion: {
      zh: '于我而言，当下正是打牢根基的阶段。我会从数学、编程的基础出发，逐步探索 AI 的核心技术，期待未来能参与到落地型的 AI 应用中，用技术创造真实的价值。',
      en: 'For me, now is the time to build a solid foundation. Starting from math and programming basics, I will gradually explore core AI technologies, hoping to participate in practical AI applications and create real value with technology.',
    },
    coding1: {
      zh: '作为计算机科学与技术专业的大一新生，我始终认为，编程开发是一门以逻辑为骨架、以创造为灵魂的技术，也是数字世界回应真实需求的核心载体。',
      en: 'As a freshman in Computer Science and Technology, I have always believed that programming is a technology with logic as its skeleton and creation as its soul, and the core medium through which the digital world responds to real needs.',
    },
    coding2: {
      zh: '在我看来，语法、框架与各类开发工具都只是不断迭代的表层手段，编程真正的内核，是问题拆解、抽象建模与系统思考的能力。它要求我们把现实中模糊的诉求转化为清晰的逻辑规则，把零散的功能模块搭建成稳定可靠的运行系统，在资源约束下找到效率、稳定性与可维护性的平衡。算法思想、数据结构、设计逻辑这些底层认知，才是编程技术真正的基石，不会随着编程语言的更新换代而褪色。',
      en: 'In my view, syntax, frameworks, and development tools are just iterating surface-level means; the true core of programming is the ability to decompose problems, abstract models, and think systematically. It requires us to turn vague real-world demands into clear logical rules, build scattered modules into stable systems, and balance efficiency, stability, and maintainability under resource constraints. Algorithmic thinking, data structures, and design logic are the real foundation of programming, one that does not fade as languages evolve.',
    },
    coding3: {
      zh: '而编程的生命力，从来不在代码本身，而在它与真实场景的碰撞与结合。它早已跳出纯技术的边界，深度渗透到科研、医疗、工业、文创等各行各业：它可以是科研领域处理海量数据的计算底座，可以是日常生活里简化需求的实用工具，也可以是创意创作中全新的表达媒介。每一行代码的价值，最终都要落回到它所解决的问题、所服务的真实需求上。',
      en: 'The vitality of programming has never lain in code itself, but in its collision with real scenarios. It has long transcended pure technology, penetrating research, healthcare, industry, and creative fields: it can be the computing foundation for processing massive data in research, a practical tool simplifying daily life, or a new medium for creative expression. The value of every line of code ultimately returns to the problem it solves and the real need it serves.',
    },
    coding4: {
      zh: '从本质上说，编程既是严谨的理性表达，也是充满可能性的创造过程。它用统一的逻辑规则，构建出千差万别的数字世界，让抽象的想法拥有了落地的路径。',
      en: 'Essentially, programming is both rigorous rational expression and a creative process full of possibilities. It uses unified logical rules to build vastly different digital worlds, giving abstract ideas a path to reality.',
    },
  },
  contact: {
    title: { zh: '联系我', en: 'Contact Me' },
    tjuEmail: { zh: '天津大学邮箱', en: 'TJU Email' },
    polyuEmail: { zh: '香港理工大学邮箱', en: 'PolyU Email' },
    github: { zh: 'GitHub', en: 'GitHub' },
    welcomeText: { zh: '欢迎通过邮件与我交流', en: 'Feel free to reach out via email' },
  },
  feedback: {
    title: { zh: '网站使用反馈', en: 'Website Feedback' },
    label: { zh: '你的反馈', en: 'Your Feedback' },
    placeholder: {
      zh: '请输入你对网站的使用反馈、建议或问题...',
      en: 'Please enter your feedback, suggestions, or questions about the website...',
    },
    submittedBy: { zh: '提交人', en: 'Submitted by' },
    submit: { zh: '提交反馈', en: 'Submit' },
    submitting: { zh: '提交中...', en: 'Submitting...' },
    success: { zh: '收到，感谢您的反馈！', en: 'Received, thank you for your feedback!' },
  },
  footer: {
    version: { zh: '个人主页 V2', en: 'Personal Website V2' },
  },
};

export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  let obj: any = translations;
  for (const k of keys) {
    if (obj && obj[k]) {
      obj = obj[k];
    } else {
      return key;
    }
  }
  if (obj && typeof obj === 'object' && obj[lang] !== undefined) {
    return obj[lang];
  }
  return key;
}
