import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookOpen, Cpu, ArrowRight, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { COURSE_MODULES, LECTURE_SESSIONS } from '@/lib/curriculum';
import { isValidLocale, UI_STRINGS } from '@/lib/i18n';

export default async function SyllabusPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const isZh = lang === 'zh';
  const t = UI_STRINGS[lang];

  return (
    <main className="container max-w-5xl py-12">
      <div className="mb-8 space-y-3">
        <Badge variant="blue" className="font-mono text-xs">
          MIT 18.06 · Full Dual-Numbered Curriculum
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight">
          {isZh
            ? 'MIT 18.06 全 35 集双编号课程大纲'
            : 'Complete 35-Session Dual-Numbered Syllabus'}
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {isZh
            ? '严格对齐 MIT OCW 视频主线与 Gilbert Strang《Introduction to Linear Algebra》（第 5/6 版）章节，并在具有严密数学同构的 15 个关键讲次底部挂载课后 AI 选读。'
            : 'Strictly aligned with Prof. Gilbert Strang’s MIT 18.06 video lectures and Introduction to Linear Algebra (5th/6th Ed.), with 15 isolated Frontier AI bridges.'}
        </p>

        <div className="flex items-start gap-2.5 rounded-xl border border-blue-500/25 bg-blue-500/[0.04] p-4 text-xs leading-relaxed text-foreground/90">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
          <div>
            {isZh ? (
              <>
                <strong>双编号说明：</strong>MIT OCW 官方将第二次期中复习编为{' '}
                <code>L24b</code>（最后编号至 <code>L34</code>，共 35 集视频），而国内 B 站/网易公开课将其顺延编为{' '}
                <code>P25</code>，导致第 25 集之后相差 1 集。下方大纲同时列出{' '}
                <strong>OCW 编号</strong> 与 <strong>国内公开课集数</strong>，方便无缝对照任何视频源！
              </>
            ) : (
              <>
                <strong>Dual Numbering Note:</strong> MIT OCW labels Quiz 2 Review as{' '}
                <code>L24b</code> (35 videos numbered up to <code>L34</code>), while sequential video mirrors label it{' '}
                <code>P25</code> (`P01–P35`). Both identifiers are shown for every session.
              </>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {COURSE_MODULES.map((mod) => {
          const sessions = LECTURE_SESSIONS.filter((s) => s.moduleId === mod.id);
          return (
            <section key={mod.id} className="space-y-4">
              <div className="border-b pb-3">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  {mod.number}
                </div>
                <h2 className="mt-1 text-xl font-bold">
                  {isZh ? mod.titleZh : mod.titleEn}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isZh ? mod.subtitleZh : mod.subtitleEn}
                </p>
              </div>

              <div className="space-y-2.5">
                {sessions.map((s) => {
                  const status = isZh ? s.statusZh : s.statusEn;
                  const isLive = status === 'published';
                  return (
                    <Link
                      key={s.slug}
                      href={`/${lang}/lectures/${s.slug}/`}
                      className="group flex flex-col justify-between gap-3 rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-xs sm:flex-row sm:items-center"
                    >
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs font-bold text-foreground">
                            #{s.seq}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {s.ocwId} · {s.videoEpisode}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            · Strang {s.textbookRef}
                          </span>
                          {isLive ? (
                            <Badge variant="emerald" className="gap-1 text-[10px]">
                              <BookOpen className="h-2.5 w-2.5" />
                              {t.statusPublished}
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="text-[10px]">
                              {t.statusPlanned}
                            </Badge>
                          )}
                          {s.aiBridge && (
                            <Badge variant="purple" className="gap-1 text-[10px]">
                              <Cpu className="h-2.5 w-2.5" />
                              {s.aiBridge.id}
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                          {isZh ? s.titleZh : s.titleEn}
                        </h3>
                        <p className="m-0 text-xs leading-relaxed text-muted-foreground">
                          {isZh ? s.focusZh : s.focusEn}
                        </p>
                      </div>

                      <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary sm:block" />
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
