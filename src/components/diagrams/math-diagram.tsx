import * as React from 'react';
import { Sliders } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { renderInlineMathText } from '@/lib/katex-render';

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
    <div
      data-interactive-slot={id}
      className="my-6 rounded-xl border border-dashed border-primary/30 bg-muted/25 px-4 py-3.5"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sliders className="h-4 w-4 text-primary/80" />
          <span className="text-xs font-semibold text-foreground">{title}</span>
        </div>
        <Badge variant="outline" className="font-mono text-[10px]">
          Phase-2 Interactive Slot · {id}
        </Badge>
      </div>
      <p
        className="mt-1.5 mb-0 text-xs leading-relaxed text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: renderInlineMathText(description) }}
      />
    </div>
  );
}
