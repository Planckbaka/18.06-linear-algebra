'use client';

import * as React from 'react';
import { Cpu, ChevronDown, Code2, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

export function FrontierAIReading({
  id,
  title,
  paperRef,
  defaultOpen = false,
  children,
}: {
  id: string;
  title: string;
  paperRef?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <aside
      id="frontier-ai-reading"
      aria-label="Post-lecture Frontier AI Optional Reading"
      className="mt-16 scroll-mt-24 border-t-2 border-dashed border-border pt-10"
    >
      <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <span>Post-Lecture Optional Bridge · 课后延伸选读（与课程主线严格隔离）</span>
      </div>

      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="overflow-hidden rounded-2xl border border-purple-500/30 bg-purple-500/[0.03] shadow-xs dark:border-purple-400/25 dark:bg-purple-500/[0.05]"
      >
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-purple-500/[0.04] sm:p-6"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="purple" className="gap-1 font-mono text-[11px]">
                  <Cpu className="h-3 w-3" />
                  {id} · 强数学同构选读
                </Badge>
                {paperRef && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <FileText className="h-3 w-3" />
                    {paperRef}
                  </span>
                )}
              </div>
              <h3 className="m-0 text-lg font-bold leading-snug text-foreground">
                {title}
              </h3>
              <p className="m-0 text-xs text-muted-foreground">
                {open
                  ? '点击收起课后前沿 AI 延伸阅读'
                  : '建议在彻底完成上方 MIT 18.06 核心推导与直觉练习题后，点击展开阅读本篇现代 AI 数学映射'}
              </p>
            </div>
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-background text-foreground">
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform duration-200',
                  open && 'rotate-180'
                )}
              />
            </div>
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent className="border-t border-purple-500/20 px-5 py-6 sm:px-7">
          <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-p:leading-relaxed">
            {children}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </aside>
  );
}

export function CollapsibleCode({
  title = '展开 PyTorch 张量维度对照核验片段（可选验证）',
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="not-prose my-5 overflow-hidden rounded-xl border border-border bg-zinc-950 text-zinc-100"
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
        >
          <span className="flex items-center gap-2 font-mono">
            <Code2 className="h-3.5 w-3.5 text-purple-400" />
            {title}
          </span>
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              open && 'rotate-180'
            )}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t border-zinc-800 p-4 text-xs leading-relaxed overflow-x-auto [&_pre]:m-0 [&_pre]:bg-transparent [&_pre]:p-0">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
