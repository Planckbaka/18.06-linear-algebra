import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Cpu,
  Clock,
  Github,
  Languages,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CourseSidebar } from '@/components/layout/course-sidebar';
import { TocSidebar } from '@/components/layout/toc-sidebar';
import {
  getAdjacentSessions,
  getModuleById,
  getSessionBySlug,
  LECTURE_SESSIONS,
} from '@/lib/curriculum';
import { isValidLocale, LOCALES, UI_STRINGS } from '@/lib/i18n';
import { renderLatexToHtml } from '@/lib/katex-render';
import { loadLectureMdx } from '@/lib/mdx';

export function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  for (const lang of LOCALES) {
    for (const session of LECTURE_SESSIONS) {
      params.push({ lang, slug: session.slug });
    }
  }
  return params;
}

export default async function LecturePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const session = getSessionBySlug(slug);
  if (!session) notFound();

  const isZh = lang === 'zh';
  const t = UI_STRINGS[lang];
  const mod = getModuleById(session.moduleId);
  const { prev, next } = getAdjacentSessions(slug);
  const compiled = await loadLectureMdx(lang, session);

  return (
    <div className="container flex-1 items-start lg:grid lg:grid-cols-[265px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[270px_minmax(0,1fr)_220px]">
      {/* Left Curriculum Sidebar */}
      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] overflow-y-auto border-r py-6 pr-4 lg:block">
        <CourseSidebar lang={lang} />
      </aside>

      {/* Center Lecture Article */}
      <main className="min-w-0 py-8 lg:py-10">
        {/* Session Metadata Header */}
        <div className="mb-8 border-b pb-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="blue" className="font-mono text-xs">
              {mod.number} · #{session.seq}
            </Badge>
            <Badge variant="outline" className="font-mono text-xs">
              {t.ocwLabel}: {session.ocwId}
            </Badge>
            <Badge variant="outline" className="font-mono text-xs">
              {t.videoLabel}: {session.videoEpisode}
            </Badge>
            <Badge variant="outline" className="font-mono text-xs">
              {t.textbookLabel}: {session.textbookRef}
            </Badge>
            <Badge variant="emerald" className="text-[11px]">
              {t.pureMathBadge}
            </Badge>
            {session.aiBridge && (
              <a href="#frontier-ai-reading" className="no-underline">
                <Badge variant="purple" className="gap-1 text-[11px] cursor-pointer">
                  <Cpu className="h-3 w-3" />
                  {session.aiBridge.id} · {t.aiReadingBadge}
                </Badge>
              </a>
            )}
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {isZh ? session.titleZh : session.titleEn}
          </h1>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            {isZh ? session.focusZh : session.focusEn}
          </p>
        </div>

        {/* Main Lecture Content or Structured Upcoming Preview */}
        {compiled ? (
          <article className="prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-headings:tracking-tight prose-h2:mt-11 prose-h2:border-b prose-h2:pb-2 prose-p:leading-relaxed prose-li:leading-relaxed">
            {compiled.content}
          </article>
        ) : (
          <div className="space-y-6 rounded-2xl border bg-muted/20 p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-primary">
              <Clock className="h-5 w-5" />
              <h2 className="m-0 text-lg font-bold">{t.upcomingTitle}</h2>
            </div>

            <p className="m-0 text-sm leading-relaxed text-muted-foreground">
              {lang === 'en' && session.statusZh === 'published'
                ? t.enPendingDesc
                : t.upcomingDesc}
            </p>

            <div className="rounded-xl border bg-card p-5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {isZh ? '本讲核心数学脉络与教材锚点' : 'Planned Mathematical Focus & Textbook Anchor'}
              </div>
              <p className="m-0 text-sm leading-relaxed text-foreground">
                {isZh ? session.focusZh : session.focusEn}
              </p>
              <div className="text-xs font-mono text-muted-foreground">
                Gilbert Strang, <em>Introduction to Linear Algebra</em>: {session.textbookRef}
              </div>
            </div>

            {session.aiBridge && (
              <div className="rounded-xl border border-purple-500/30 bg-purple-500/[0.04] p-5 space-y-2.5">
                <div className="flex items-center gap-2">
                  <Badge variant="purple" className="font-mono text-xs">
                    {session.aiBridge.id}
                  </Badge>
                  <span className="text-xs font-semibold text-foreground">
                    {isZh ? '规划挂载的课后前沿 AI 选读' : 'Planned Post-Lecture Frontier AI Bridge'}
                  </span>
                </div>
                <div className="text-sm font-semibold">
                  {isZh ? session.aiBridge.titleZh : session.aiBridge.titleEn}
                </div>
                <div
                  className="overflow-x-auto py-1 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: renderLatexToHtml(session.aiBridge.mathAnchorLatex, true),
                  }}
                />
                <p className="m-0 text-xs text-muted-foreground">
                  {isZh ? session.aiBridge.summaryZh : session.aiBridge.summaryEn}
                </p>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {lang === 'en' && session.statusZh === 'published' && (
                <Button asChild>
                  <Link href={`/zh/lectures/${session.slug}/`}>
                    <Languages className="h-4 w-4" />
                    {t.switchToZhCta}
                  </Link>
                </Button>
              )}
              <Button variant="outline" asChild>
                <Link href={`/${lang}/lectures/01-geometry-of-linear-equations/`}>
                  <BookOpen className="h-4 w-4" />
                  {isZh ? '阅读第 01 讲标杆样板' : 'Read Session 01 Sample'}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/zh/lectures/03-multiplication-and-inverse-matrices/">
                  <BookOpen className="h-4 w-4" />
                  {isZh ? '阅读第 03 讲（含 AI-01 选读）' : 'Read Session 03 (zh + AI-01)'}
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <a
                  href="https://github.com/Planckbaka/18.06-linear-algebra/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  {t.contributeCta}
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Prev / Next Navigation */}
        <nav
          aria-label="Lecture Pagination"
          className="mt-14 grid gap-4 border-t pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/${lang}/lectures/${prev.slug}/`}
              className="group flex flex-col rounded-xl border p-4 transition-colors hover:border-primary/40 hover:bg-muted/30"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                {t.prevSession} · #{prev.seq} ({prev.ocwId})
              </span>
              <span className="mt-1 text-sm font-semibold text-foreground group-hover:text-primary">
                {isZh ? prev.titleZh : prev.titleEn}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/${lang}/lectures/${next.slug}/`}
              className="group flex flex-col items-end rounded-xl border p-4 text-right transition-colors hover:border-primary/40 hover:bg-muted/30"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                #{next.seq} ({next.ocwId}) · {t.nextSession}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="mt-1 text-sm font-semibold text-foreground group-hover:text-primary">
                {isZh ? next.titleZh : next.titleEn}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>

      {/* Right Sticky TOC Sidebar */}
      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pl-2 xl:block">
        <TocSidebar
          lang={lang}
          slug={session.slug}
          headings={compiled?.headings ?? []}
        />
      </aside>
    </div>
  );
}
