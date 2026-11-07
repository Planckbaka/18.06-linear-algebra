import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Cpu, ArrowRight, ShieldAlert, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllAIBridges } from '@/lib/curriculum';
import { renderLatexToHtml } from '@/lib/katex-render';
import { isValidLocale } from '@/lib/i18n';

export default async function AIAtlasPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const isZh = lang === 'zh';
  const bridges = getAllAIBridges();

  return (
    <main className="container max-w-5xl py-12">
      <div className="mb-10 space-y-3">
        <Badge variant="purple" className="gap-1.5 font-mono text-xs">
          <Cpu className="h-3.5 w-3.5" />
          15 Rigorous Mathematical Isomorphisms
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight">
          {isZh
            ? '「前沿 AI × 线性代数」全景同构索引图'
            : 'Frontier AI × Linear Algebra Isomorphism Atlas'}
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {isZh
            ? '宁缺毋滥：我们拒绝在每讲强行凑数科普，仅在 MIT 18.06 线性代数结构与现代 Transformer、Diffusion、LoRA、Mamba/SSM 存在严密数学同构的 15 个关键节点设立课后选读。'
            : 'Quality over forced analogies: these 15 post-lecture bridges appear strictly where MIT 18.06 linear algebra shares an exact mathematical isomorphism with modern Transformers, Diffusion models, LoRA, and State Space Models.'}
        </p>

        <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/[0.05] p-4 text-xs leading-relaxed text-foreground/90">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            {isZh ? (
              <>
                <strong>阅读建议与主次隔离原则：</strong>所有 AI 专题均置于对应讲次页面的最底部（与课程核心推导及直觉习题物理隔离）。强烈建议先吃透该讲纯线性代数直觉与练习题，再阅读课后同构映射！
              </>
            ) : (
              <>
                <strong>Strict Isolation Policy:</strong> Every AI bridge lives inside a collapsible section at the very bottom of its host lecture, keeping core MIT 18.06 study 100% pure and distraction-free.
              </>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {bridges.map(({ session, bridge }) => {
          const isHostLive =
            (isZh ? session.statusZh : session.statusEn) === 'published';
          const mathHtml = renderLatexToHtml(bridge.mathAnchorLatex, true);

          return (
            <div
              key={bridge.id}
              className="rounded-2xl border bg-card p-5 shadow-2xs transition-colors hover:border-purple-500/40 sm:p-6"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="purple" className="font-mono text-xs">
                    {bridge.id}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {bridge.domain}
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">
                    ← Session {session.seq} ({session.ocwId}/{session.videoEpisode}:{' '}
                    {isZh ? session.titleZh : session.titleEn})
                  </span>
                </div>

                {isHostLive && (
                  <Badge variant="emerald" className="text-[10px]">
                    {isZh ? '已上线全文' : 'Live Now'}
                  </Badge>
                )}
              </div>

              <h2 className="text-lg font-bold leading-snug text-foreground">
                {isZh ? bridge.titleZh : bridge.titleEn}
              </h2>

              <div
                className="my-4 overflow-x-auto rounded-xl border bg-muted/30 px-4 py-2 text-sm"
                dangerouslySetInnerHTML={{ __html: mathHtml }}
              />

              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {isZh ? bridge.summaryZh : bridge.summaryEn}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3.5">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" />
                  {bridge.paperRef}
                </span>

                <Button variant={isHostLive ? 'default' : 'outline'} size="sm" asChild>
                  <Link
                    href={`/${lang}/lectures/${session.slug}/${
                      isHostLive ? '#frontier-ai-reading' : ''
                    }`}
                  >
                    {isHostLive
                      ? isZh
                        ? '直达本篇课后选读'
                        : 'Read Full AI Bridge'
                      : isZh
                        ? '查看归属讲次大纲'
                        : 'View Host Lecture'}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
