export interface IEducation {
  school: string
  major: string
  enrollmentDate: string
  grade: string
  internship: string
  courses: string[]
  note: string
}

export interface IAboutSection {
  title: string
  image: string
  text: string
  aspectRatio: string
}

export interface ISkills {
  learning: string
  interests: string[]
}

export interface IAiThought {
  title: string
  intro: string[]
  subTitle: string
  points: { label: string; content: string }[]
  conclusion: string
}

export interface IContact {
  tjuEmail: string
  polyuEmail: string
  github: string
  welcomeText: string
}

export interface IProfile {
  id: string
  initials: string
  name: string
  englishName: string
  greeting: string
  subtitle: string
  aboutTitle: string
  aboutSections: IAboutSection[]
  educationTitle: string
  education: IEducation
  skillsTitle: string
  skills: ISkills
  aiThoughts: IAiThought
  codingThoughts: string[]
  contactTitle: string
  contact: IContact
  copyright: string
  version: string
}

export const MOCK_PROFILE: IProfile = {
  id: '1',
  initials: 'YC',
  name: '陈一诺',
  englishName: 'Noah',
  greeting: '你好，我是陈一诺（Noah）。\n欢迎来到我的数字空间。',
  subtitle: '天津大学香港理工大学深圳未来技术学院 · 计算机科学与技术专业',
  aboutTitle: '关于我',
  aboutSections: [
    {
      title: '故乡',
      image: 'about-hometown.jpg',
      text: '江苏常熟，一家四口',
      aspectRatio: '16 / 9',
    },
    {
      title: '篮球',
      image: 'about-basketball.jpg',
      text: '一个业余的后卫，最喜欢的球星是 Stephen Curry',
      aspectRatio: '2 / 3',
    },
    {
      title: '台球',
      image: 'about-billiards.jpg',
      text: '入坑两年，时准时匕首',
      aspectRatio: '3 / 4',
    },
    {
      title: '听音乐',
      image: 'about-music.jpg',
      text: 'R&B + RAP Lover，最爱听 Jay Chou',
      aspectRatio: '3 / 4',
    },
  ],
  educationTitle: '教育背景',
  education: {
    school: '天津大学香港理工大学深圳未来技术学院',
    major: '计算机科学与技术',
    enrollmentDate: '2026年8月',
    grade: '目前是大一学生，对 AI 和编程充满兴趣，正在努力学习中',
    internship: '暂无实习经历，期待未来能进入企业进行实习',
    courses: [
      'Project-Based CST&AI Foundations',
      'Computer Programming',
      'AI as a Tool for Language Learning',
    ],
    note: '计算机相关专业课程将在大二开始',
  },
  skillsTitle: '技能与兴趣',
  skills: {
    learning: 'AI 编程工具',
    interests: ['人工智能（AI）', '编程开发'],
  },
  aiThoughts: {
    title: '关于 AI 的思考',
    intro: [
      '作为计算机科学与技术专业大一新生，AI 是我踏入专业后最关注的方向。',
      '我理解的 AI，是算法、数据与算力共同构建的智能技术 —— 它早已走出实验室，渗透进日常交互、产业生产与科研探索，既在微观上提升效率，也在宏观上重塑着行业的运行逻辑。',
    ],
    subTitle: '关于 AI 的未来，我有三点朴素的判断：',
    points: [
      { label: '技术维度', content: '多模态融合、边缘 AI 持续突破，智能能力会更通用，也会下沉到更多终端，降低应用门槛；' },
      { label: '产业维度', content: 'AI 将与制造、医疗等实体行业深度结合，从单点效率工具升级为产业升级的核心驱动力；' },
      { label: '社会维度', content: '技术伦理会同步完善，数据安全、算法公平将成为 AI 发展的基本底线。' },
    ],
    conclusion: '于我而言，当下正是打牢根基的阶段。我会从数学、编程的基础出发，逐步探索 AI 的核心技术，期待未来能参与到落地型的 AI 应用中，用技术创造真实的价值。',
  },
  codingThoughts: [
    '作为计算机科学与技术专业的大一新生，我始终认为，编程开发是一门以逻辑为骨架、以创造为灵魂的技术，也是数字世界回应真实需求的核心载体。',
    '在我看来，语法、框架与各类开发工具都只是不断迭代的表层手段，编程真正的内核，是问题拆解、抽象建模与系统思考的能力。它要求我们把现实中模糊的诉求转化为清晰的逻辑规则，把零散的功能模块搭建成稳定可靠的运行系统，在资源约束下找到效率、稳定性与可维护性的平衡。算法思想、数据结构、设计逻辑这些底层认知，才是编程技术真正的基石，不会随着编程语言的更新换代而褪色。',
    '而编程的生命力，从来不在代码本身，而在它与真实场景的碰撞与结合。它早已跳出纯技术的边界，深度渗透到科研、医疗、工业、文创等各行各业：它可以是科研领域处理海量数据的计算底座，可以是日常生活里简化需求的实用工具，也可以是创意创作中全新的表达媒介。每一行代码的价值，最终都要落回到它所解决的问题、所服务的真实需求上。',
    '从本质上说，编程既是严谨的理性表达，也是充满可能性的创造过程。它用统一的逻辑规则，构建出千差万别的数字世界，让抽象的想法拥有了落地的路径。',
  ],
  contactTitle: '联系我',
  contact: {
    tjuEmail: 'noah32514@tju.edu.cn',
    polyuEmail: 'yinuonoah.chen@connect.polyu.hk',
    github: 'https://github.com/ylzxyc666',
    welcomeText: '欢迎通过邮件与我交流',
  },
  copyright: '© 2026 陈一诺 Noah. All rights reserved.',
  version: '个人主页 V2',
}
