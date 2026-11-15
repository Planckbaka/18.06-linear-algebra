import * as React from 'react';
import { Sliders } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { renderInlineMathText } from '@/lib/katex-render';
import { InteractiveSandboxDispatcher } from './interactives/sandbox-dispatcher';

export function MathDiagram({
  title,
  caption,
  children,
}: {
  title?: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-7 overflow-hidden rounded-xl border bg-card shadow-xs">
      {title && (
        <div className="border-b bg-muted/40 px-4 py-2 text-xs font-medium text-muted-foreground">
          {title}
        </div>
      )}
      <div className="flex items-center justify-center overflow-x-auto p-4 sm:p-6">
        {children}
      </div>
      {caption && (
        <figcaption
          className="border-t bg-muted/20 px-4 py-2.5 text-center text-xs leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: renderInlineMathText(caption) }}
        />
      )}
    </figure>
  );
}

export function InteractiveCanvasSlot({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <section
      data-interactive-slot={id}
      className="my-7 overflow-hidden rounded-xl border border-primary/25 bg-card shadow-xs"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-primary/5 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Sliders className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">{title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Badge variant="blue" className="text-[10px]">
            Interactive Lab · 交互式数学实验台
          </Badge>
          <Badge variant="outline" className="hidden font-mono text-[10px] sm:inline-flex">
            {id}
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <p
          className="m-0 text-xs leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: renderInlineMathText(description) }}
        />
        <InteractiveSandboxDispatcher id={id} />
      </div>
    </section>
  );
}
