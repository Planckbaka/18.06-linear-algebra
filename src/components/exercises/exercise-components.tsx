'use client';

import * as React from 'react';
import {
  Brain,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Compass,
  Scale,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { renderInlineMathText } from '@/lib/katex-render';
import { useStudyProgress } from '@/lib/progress-store';
import { cn } from '@/lib/utils';

const TIER_META: Record<
  'L1' | 'L2' | 'L3' | 'L4',
  { badgeVariant: 'secondary' | 'blue' | 'emerald' | 'purple'; defaultLabel: string }
> = {
  L1: { badgeVariant: 'secondary', defaultLabel: 'L1 · 极小计算核验' },
  L2: { badgeVariant: 'blue', defaultLabel: 'L2 · 概念辨析与反例构造' },
  L3: { badgeVariant: 'emerald', defaultLabel: 'L3 · 无计算子空间推理' },
  L4: { badgeVariant: 'purple', defaultLabel: 'L4 · MIT 18.06 考题级挑战' },
};

export function ProblemSet({
  title = '线性代数直觉训练题 (Intuition Problem Set)',
  description = '少算多想：请先独立动脑思考（必要时逐级点开 Hint），再展开「几何直觉 + 严谨代数」双视角解析核对思路。',
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id="problem-set" className="my-12 scroll-mt-24">
      <div className="mb-6 rounded-xl border bg-muted/30 p-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Brain className="h-4 w-4" />
          </div>
          <h2 className="m-0 text-xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
        </div>
        <p className="mt-2 mb-0 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

export function ExerciseCard({
  id,
  tier = 'L2',
  tierLabel,
  title,
  children,
}: {
  id: string;
  tier?: 'L1' | 'L2' | 'L3' | 'L4';
  tierLabel?: string;
  title: string;
  children: React.ReactNode;
}) {
  const meta = TIER_META[tier] || TIER_META.L2;
  return (
    <div
      id={id}
      className="rounded-xl border bg-card p-5 shadow-xs transition-colors hover:border-border/90 sm:p-6"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant={meta.badgeVariant} className="font-mono text-[11px]">
            {tierLabel || meta.defaultLabel}
          </Badge>
          <h3 className="m-0 text-base font-semibold text-foreground">{title}</h3>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">#{id}</span>
      </div>
      <div className="prose-math space-y-3 text-sm leading-relaxed text-foreground/95">
        {children}
      </div>
    </div>
  );
}

export function TrueFalseInteractive({
  id,
  correct,
  trueLabel = 'True (命题成立)',
  falseLabel = 'False (命题不成立 / 可举反例)',
  quickFeedback,
}: {
  id: string;
  correct: boolean;
  trueLabel?: string;
  falseLabel?: string;
  quickFeedback: string;
}) {
  const [selected, setSelected] = React.useState<boolean | null>(null);
  const { markExerciseSolved } = useStudyProgress();

  const handleSelect = (choice: boolean) => {
    setSelected(choice);
    markExerciseSolved(id, choice === correct);
  };

  const isRight = selected !== null && selected === correct;

  return (
    <div className="my-4 rounded-lg border bg-muted/25 p-3.5">
      <div className="flex flex-wrap items-center gap-2.5">
        <Button
          type="button"
          size="sm"
          variant={
            selected === true
              ? correct === true
                ? 'default'
                : 'destructive'
              : 'outline'
          }
          onClick={() => handleSelect(true)}
          className="text-xs"
        >
          {trueLabel}
        </Button>
        <Button
          type="button"
          size="sm"
          variant={
            selected === false
              ? correct === false
                ? 'default'
                : 'destructive'
              : 'outline'
          }
          onClick={() => handleSelect(false)}
          className="text-xs"
        >
          {falseLabel}
        </Button>
      </div>

      {selected !== null && (
        <div
          className={cn(
            'mt-3 flex items-start gap-2 rounded-md border px-3 py-2.5 text-xs leading-relaxed',
            isRight
              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200'
              : 'border-rose-500/40 bg-rose-500/10 text-rose-900 dark:text-rose-200'
          )}
        >
          {isRight ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
          )}
          <div>
            <span className="font-semibold">
              {isRight ? '判断准确！' : '再想一想（直觉陷阱预警）：'}
            </span>{' '}
            <span
              dangerouslySetInnerHTML={{
                __html: renderInlineMathText(quickFeedback),
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function ProgressiveHint({
  hints,
  buttonPrefix = '解锁思考提示 Hint',
}: {
  hints: string[];
  buttonPrefix?: string;
}) {
  const [revealedCount, setRevealedCount] = React.useState(0);

  if (!hints || hints.length === 0) return null;

  return (
    <div className="my-3 space-y-2">
      {hints.slice(0, revealedCount).map((hint, idx) => (
        <div
          key={idx}
          className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/[0.05] px-3.5 py-2.5 text-xs leading-relaxed text-foreground/90"
        >
          <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            <span className="font-mono font-semibold text-amber-700 dark:text-amber-300">
              Hint {idx + 1}:{' '}
            </span>
            <span
              dangerouslySetInnerHTML={{ __html: renderInlineMathText(hint) }}
            />
          </div>
        </div>
      ))}

      {revealedCount < hints.length && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setRevealedCount((c) => c + 1)}
          className="h-7 px-2.5 text-xs text-amber-700 hover:bg-amber-500/10 hover:text-amber-800 dark:text-amber-300 dark:hover:text-amber-200"
        >
          <Lightbulb className="h-3.5 w-3.5" />
          {buttonPrefix} ({revealedCount + 1}/{hints.length})
        </Button>
      )}
    </div>
  );
}

export function SolutionIntuition({ children }: { children: React.ReactNode }) {
  return (
    <TabsContent
      value="intuition"
      className="prose-math text-sm leading-relaxed text-foreground/90 [&>p:last-child]:mb-0"
    >
      {children}
    </TabsContent>
  );
}

export function SolutionRigorous({ children }: { children: React.ReactNode }) {
  return (
    <TabsContent
      value="rigorous"
      className="prose-math text-sm leading-relaxed text-foreground/90 [&>p:last-child]:mb-0"
    >
      {children}
    </TabsContent>
  );
}

export function DualSolution({
  triggerLabel = '查看完整双视角解析 (Intuition + Rigorous Proof)',
  intuitionLabel = '几何与子空间直觉',
  rigorousLabel = '严格代数证明 / 构造',
  children,
}: {
  triggerLabel?: string;
  intuitionLabel?: string;
  rigorousLabel?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="mt-3 rounded-lg border bg-muted/20"
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>{triggerLabel}</span>
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              open && 'rotate-180'
            )}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t px-4 py-3.5">
        <Tabs defaultValue="intuition" className="w-full">
          <TabsList>
            <TabsTrigger value="intuition" className="gap-1.5">
              <Compass className="h-3.5 w-3.5" />
              {intuitionLabel}
            </TabsTrigger>
            <TabsTrigger value="rigorous" className="gap-1.5">
              <Scale className="h-3.5 w-3.5" />
              {rigorousLabel}
            </TabsTrigger>
          </TabsList>
          {children}
        </Tabs>
      </CollapsibleContent>
    </Collapsible>
  );
}
