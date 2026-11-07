import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Compass,
  Brain,
  ShieldCheck,
  Cpu,
  BookOpen,
  Github,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { COURSE_MODULES, LECTURE_SESSIONS } from '@/lib/curriculum';
import { isValidLocale, UI_STRINGS } from '@/lib/i18n';

export default async function LangHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const t = UI_STRINGS[lang];
  const isZh = lang === 'zh';

  const featuredSessions = LECTURE_SESSIONS.filter(
    (s) => s.seq === '01' || s.seq === '03'
  );

  return (
    <main className="pb-20">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-primary/[0.04] via-background to-background py-16 sm:py-24">
        <div className="container max-w-5xl text-center">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="blue" className="px-3 py-1 text-xs">
              {isZh
                ? 'Gilbert Strang · MIT 18.06 开源双语精修伴读'
                : 'Open-Source Bilingual Companion to MIT 18.06'}
            </Badge>
            <Badge variant="outline" className="font-mono text-xs">
              OCW L01–L34 ↔ P01–P35
            </Badge>
          </div>

          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.15]">
            {isZh ? (
              <>
                先看见<span className="text-primary">列空间与几何直觉</span>，
                <br className="hidden sm:inline" />
                再锚定教材级严密推导
              </>
            ) : (
              <>
                See the <span className="text-primary">Subspace Geometry</span> First,
                <br className="hidden sm:inline" />
                Anchor It in Textbook Rigor
              </>
            )}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {isZh
              ? '全面勘误网传听课记录的维度遗漏与概念偏差：每讲标配自适应亮暗色静态数学 SVG、4–6 道「少算多想」分级直觉题；并在正文之外严格隔离挂载 15 篇 Transformer、Diffusion、LoRA、Mamba 强数学同构课后选读。'
              : 'Built to eliminate the missing hypotheses and typos of informal transcripts: pairing Strang’s column-picture intuition with rigorous theorem cards, zero-rote-calculation exercises, and 15 strictly isolated post-lecture Frontier AI bridges.'}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href={`/${lang}/lectures/01-geometry-of-linear-equations/`}>
                {t.navStartLearning}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={`/${lang}/syllabus/`}>{t.navSyllabus}</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href={`/${lang}/ai-atlas/`}>
                <Cpu className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                {t.navAiAtlas}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Four Design Pillars */}
      <section className="container max-w-6xl py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <Compass className="mb-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
              <CardTitle className="text-base">
                {isZh ? '列视角与几何 SVG 先行' : 'Column Picture & SVG Geometry'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs leading-relaxed text-muted-foreground">
              {isZh
                ? '忠实还原 Strang 教授从低维算例和列组合出发的教学精髓，自适应深浅色数学 SVG 一眼看穿子空间结构。'
                : 'Starts every concept from concrete matrices and theme-adaptive mathematical SVGs before introducing abstract quantifiers.'}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <ShieldCheck className="mb-2 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <CardTitle className="text-base">
                {isZh ? '教材级严谨与网传勘误' : 'Textbook Rigor & Errata Alerts'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs leading-relaxed text-muted-foreground">
              {isZh
                ? '严格标明矩阵维度 m×n、实/复数域与充要条件，专门设置 Pitfall 警示框纠正网传笔记高频错误。'
                : 'Explicitly states matrix dimensions, base fields, and rank hypotheses while calling out classic transcript misconceptions.'}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Brain className="mb-2 h-5 w-5 text-amber-600 dark:text-amber-400" />
              <CardTitle className="text-base">
                {isZh ? '分级直觉练习题体系' : 'Tiered Intuition Problem Sets'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs leading-relaxed text-muted-foreground">
              {isZh
                ? '拒绝繁琐机械死算：交互式真假命题反例构造 + 无计算子空间推理 + 分级 Hint + 几何/代数双解析。'
                : 'Interactive True/False traps, minimal 2×2 counterexamples, progressive hints, and dual Geometric + Algebraic solutions.'}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Cpu className="mb-2 h-5 w-5 text-purple-600 dark:text-purple-400" />
              <CardTitle className="text-base">
                {isZh ? '课后物理隔离 AI 选读' : 'Strictly Isolated AI Bridges'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs leading-relaxed text-muted-foreground">
              {isZh
                ? '主线保持 100% 纯粹线代零干扰；仅在 15 个强数学同构讲次底部挂载 Attention、LoRA、Diffusion、Mamba 深度推导。'
                : 'Zero code or AI clutter in core sections; 15 deep mathematical mappings to Transformers, LoRA, Diffusion, and SSMs sit cleanly at the bottom.'}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Gold-Standard Live Lectures */}
      <section className="container max-w-6xl py-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">
              {isZh ? '首期上线标杆样板讲（Milestone 1）' : 'Featured Gold-Standard Sessions'}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {isZh
                ? '包含完整三层递进正文、数学 SVG 图解、5 道交互分级直觉题及课后 AI 同构选读样板'
                : 'Complete with three-tier exposition, mathematical SVGs, 5 interactive intuition exercises, and isolated AI bridge'}
            </p>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/${lang}/syllabus/`}>
              {isZh ? '查看全部 35 集 →' : 'All 35 Sessions →'}
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredSessions.map((s) => (
            <Card key={s.slug} className="flex flex-col justify-between transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="emerald" className="gap-1 text-[11px]">
                    <BookOpen className="h-3 w-3" />
                    Session {s.seq} · {s.ocwId} / {s.videoEpisode}
                  </Badge>
                  <Badge variant="outline" className="font-mono text-[11px]">
                    Strang {s.textbookRef}
                  </Badge>
                  {s.aiBridge && (
                    <Badge variant="purple" className="gap-1 text-[11px]">
                      <Cpu className="h-3 w-3" />
                      {s.aiBridge.id}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">
                  {isZh ? s.titleZh : s.titleEn}
                </CardTitle>
                <CardDescription className="pt-1 leading-relaxed">
                  {isZh ? s.focusZh : s.focusEn}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {s.aiBridge && (
                  <div className="mb-4 rounded-lg border border-purple-500/25 bg-purple-500/[0.04] px-3 py-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">
                      {isZh ? '课后选读：' : 'Post-Reading: '}
                    </span>
                    {isZh ? s.aiBridge.titleZh : s.aiBridge.titleEn}
                  </div>
                )}
                <Button asChild size="sm" className="w-full sm:w-auto">
                  <Link href={`/${lang}/lectures/${s.slug}/`}>
                    {isZh ? '进入本讲学习' : 'Open Session'}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Four Modules Overview */}
      <section className="container max-w-6xl py-12">
        <h2 className="mb-5 text-xl font-bold tracking-tight">
          {isZh ? '四大核心模块架构' : 'Four Core Curriculum Modules'}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {COURSE_MODULES.map((mod) => {
            const count = LECTURE_SESSIONS.filter((s) => s.moduleId === mod.id).length;
            const aiCount = LECTURE_SESSIONS.filter(
              (s) => s.moduleId === mod.id && Boolean(s.aiBridge)
            ).length;
            return (
              <Card key={mod.id} className="bg-muted/15">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase text-primary">
                      {mod.number}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {count} {isZh ? '讲' : 'Sessions'} · {aiCount} AI Bridges
                    </span>
                  </div>
                  <CardTitle className="text-base">
                    {isZh ? mod.titleZh : mod.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs leading-relaxed text-muted-foreground">
                  {isZh ? mod.subtitleZh : mod.subtitleEn}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border bg-muted/30 p-6 sm:flex-row">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-semibold">
              {isZh
                ? '开源共建：让更多学习者受益于真正严谨且有直觉的线性代数笔记'
                : 'Open-Source Community Driven'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isZh
                ? '欢迎在 GitHub 提交数学推导勘误、贡献少算多想的直觉好题，或参与英文版翻译与二期交互可视化组件开发。'
                : 'Contributions of errata fixes, intuition exercises, translations, and interactive widgets are warmly welcome on GitHub.'}
            </p>
          </div>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Planckbaka/18.06-linear-algebra"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              Star / Fork on GitHub
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
