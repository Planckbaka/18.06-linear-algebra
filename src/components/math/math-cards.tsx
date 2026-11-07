'use client';

import * as React from 'react';
import {
  BookOpen,
  Sparkles,
  AlertTriangle,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { renderInlineMathText } from '@/lib/katex-render';
import { cn } from '@/lib/utils';

export function DefinitionCard({
  label = 'Definition',
  title,
  termEn,
  children,
}: {
  label?: string;
  title: string;
  termEn?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-xl border border-blue-500/30 bg-blue-500/[0.04] p-5 shadow-xs dark:border-blue-400/25 dark:bg-blue-500/[0.06]">
      <div className="mb-2.5 flex flex-wrap items-center gap-2">
        <Badge variant="blue" className="gap-1 font-mono text-[11px] uppercase tracking-wider">
          <BookOpen className="h-3 w-3" />
          {label}
        </Badge>
        <h4 className="m-0 text-base font-semibold text-foreground">{title}</h4>
        {termEn && (
          <span className="font-mono text-xs text-muted-foreground">({termEn})</span>
        )}
      </div>
      <div className="prose-math text-sm leading-relaxed text-foreground/90 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

export function TheoremCard({
  label = 'Theorem',
  title,
  termEn,
  children,
}: {
  label?: string;
  title: string;
  termEn?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-xl border border-emerald-500/35 bg-emerald-500/[0.04] p-5 shadow-xs dark:border-emerald-400/25 dark:bg-emerald-500/[0.06]">
      <div className="mb-2.5 flex flex-wrap items-center gap-2">
        <Badge variant="emerald" className="gap-1 font-mono text-[11px] uppercase tracking-wider">
          <Sparkles className="h-3 w-3" />
          {label}
        </Badge>
        <h4 className="m-0 text-base font-semibold text-foreground">{title}</h4>
        {termEn && (
          <span className="font-mono text-xs text-muted-foreground">({termEn})</span>
        )}
      </div>
      <div className="prose-math text-sm leading-relaxed text-foreground/90 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

export function ProofCollapse({
  title = '展开严格代数证明 (Rigorous Proof)',
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
      className="my-4 rounded-lg border border-border/80 bg-muted/30"
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="flex items-center gap-2 font-mono">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
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
      <CollapsibleContent className="border-t border-border/60 px-4 py-3.5 text-sm leading-relaxed text-foreground/90">
        {children}
        <div className="mt-2 text-right font-mono text-xs text-muted-foreground select-none">
          ∎ Q.E.D.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function PitfallAlert({
  title = '常见直觉陷阱与网传笔记勘误 (Pitfall & Errata)',
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-xl border border-amber-500/40 bg-amber-500/[0.06] p-5 dark:border-amber-400/30 dark:bg-amber-500/[0.08]">
      <div className="mb-2 flex items-center gap-2 text-amber-800 dark:text-amber-300">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        <h4 className="m-0 text-sm font-semibold">{title}</h4>
      </div>
      <div className="text-sm leading-relaxed text-foreground/90 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

export function KeyTakeaways({
  title = '本讲核心直觉速查 (Key Takeaways)',
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <div className="my-8 rounded-xl border bg-card p-5 shadow-xs">
      <h3 className="m-0 mb-3.5 flex items-center gap-2 text-base font-semibold text-foreground">
        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        {title}
      </h3>
      <ul className="m-0 space-y-2.5 pl-0 list-none">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
          >
            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-[10px] font-bold text-primary">
              {idx + 1}
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: renderInlineMathText(item),
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
