export type Locale = 'zh' | 'en';

export const LOCALES: Locale[] = ['zh', 'en'];

export function isValidLocale(lang: string): lang is Locale {
  return lang === 'zh' || lang === 'en';
}

export const UI_STRINGS = {
  zh: {
    siteTitle: 'MIT 18.06 线性代数',
    siteSubtitle: '几何直觉 · 教材级严谨推导 · 课后前沿 AI 视野',
    navHome: '首页',
    navSyllabus: '35 集课程大纲',
    navAiAtlas: 'AI × 线代全景图',
    navStartLearning: '从第 01 讲开始学习',
    searchPlaceholder: '搜索讲次、子空间概念、定理或 AI 专题...',
    searchShortcut: '搜索',
    langSwitchLabel: 'EN',
    langSwitchTooltip: 'Switch to English (/en/)',
    statusPublished: '已上线',
    statusPlanned: '规划撰稿中',
    ocwLabel: 'MIT OCW',
    videoLabel: '国内公开课',
    textbookLabel: '对应教材',
    tocTitle: '本讲目录',
    markCompleted: '标记本讲已掌握',
    completedBadge: '已掌握',
    prevSession: '上一讲',
    nextSession: '下一讲',
    aiReadingBadge: '含课后 AI 选读',
    pureMathBadge: '100% 纯享数学主线',
    upcomingTitle: '本讲正在按教材级严谨标准精雕细琢中',
    upcomingDesc:
      '首期优先按序精修 35 集完整中文版（含自适应静态几何 SVG 与 4–6 道分级直觉题）。你可以先阅读下方核心脉络预告，或前往已上线的标杆讲次体验完整内容。',
    enPendingDesc:
      '本站首期专注打磨全 35 集中文精修版，英文学术版（/en/）目前已完成第 01 讲标杆样板，其余讲次将在中文版定稿后成批同步翻译，也欢迎通过 GitHub PR 认领翻译！',
    switchToZhCta: '阅读本讲中文精修版',
    contributeCta: '在 GitHub 参与共建 / 认领贡献',
    footerNote:
      '开源教育项目 · 代码遵循 MIT 协议，原创讲义与图解遵循 CC BY-SA 4.0 协议 · 致敬 Gilbert Strang 教授 MIT 18.06 课程',
  },
  en: {
    siteTitle: 'MIT 18.06 Linear Algebra',
    siteSubtitle: 'Geometric Intuition · Textbook Rigor · Isolated Frontier AI Bridges',
    navHome: 'Home',
    navSyllabus: '35-Session Syllabus',
    navAiAtlas: 'AI × Linear Algebra Atlas',
    navStartLearning: 'Start Lecture 01',
    searchPlaceholder: 'Search lectures, subspaces, theorems, or AI bridges...',
    searchShortcut: 'Search',
    langSwitchLabel: '中文',
    langSwitchTooltip: '切换至简体中文 (/zh/)',
    statusPublished: 'Live',
    statusPlanned: 'In Progress',
    ocwLabel: 'MIT OCW',
    videoLabel: 'Video Ep.',
    textbookLabel: 'Strang Textbook',
    tocTitle: 'On This Page',
    markCompleted: 'Mark as Mastered',
    completedBadge: 'Mastered',
    prevSession: 'Previous',
    nextSession: 'Next',
    aiReadingBadge: 'Post-Lecture AI Bridge',
    pureMathBadge: 'Pure Math Mainline',
    upcomingTitle: 'This session is currently being crafted to textbook-grade standards',
    upcomingDesc:
      'Phase 1 prioritizes completing all 35 Chinese (/zh/) sessions with theme-adaptive geometric SVGs and tiered intuition exercises, followed by batch English academic translation.',
    enPendingDesc:
      'The Chinese (/zh/) edition of this lecture is already live! Phase 1 prioritizes completing all 35 Chinese sessions first before batch-translating `/en/`. You can read the Chinese edition now or claim the English translation on GitHub.',
    switchToZhCta: 'Read Live Chinese Edition (/zh/)',
    contributeCta: 'Contribute / Claim Translation on GitHub',
    footerNote:
      'Open-Source Study Companion · Code MIT, Content CC BY-SA 4.0 · Inspired by Prof. Gilbert Strang (MIT 18.06)',
  },
} as const;
