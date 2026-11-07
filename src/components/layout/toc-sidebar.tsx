'use client';

import * as React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { TocHeading } from '@/lib/mdx';
import { UI_STRINGS, type Locale } from '@/lib/i18n';
import { useStudyProgress } from '@/lib/progress-store';
import { cn } from '@/lib/utils';

export function TocSidebar({
  lang,
  slug,
  headings,
}: {
  lang: Locale;
  slug: string;
  headings: TocHeading[];
}) {
  const t = UI_STRINGS[lang];
  const { state, toggleSessionCompleted } = useStudyProgress();
  const isCompleted = state.completedSlugs.includes(slug);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border bg-card p-3.5 shadow-2xs">
        <Button
          type="button"
          variant={isCompleted ? 'default' : 'outline'}
          size="sm"
          onClick={() => toggleSessionCompleted(slug)}
          className="w-full justify-center gap-2 text-xs"
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5" />
              {t.completedBadge}
            </>
          ) : (
            <>
              <Circle className="h-3.5 w-3.5" />
              {t.markCompleted}
            </>
          )}
        </Button>
      </div>

      {headings.length > 0 && (
        <div className="space-y-2.5">
          <p className="m-0 text-xs font-semibold uppercase tracking-wider text-foreground">
            {t.tocTitle}
          </p>
          <ul className="m-0 space-y-1.5 border-l pl-3 list-none">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={cn(
                    'block text-xs leading-snug text-muted-foreground transition-colors hover:text-foreground',
                    h.level === 3 && 'pl-3 text-[11.5px]'
                  )}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
