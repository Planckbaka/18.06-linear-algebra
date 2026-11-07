'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CheckCircle2, Cpu } from 'lucide-react';
import { COURSE_MODULES, LECTURE_SESSIONS } from '@/lib/curriculum';
import type { Locale } from '@/lib/i18n';
import { useStudyProgress } from '@/lib/progress-store';
import { cn } from '@/lib/utils';

export function CourseSidebar({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const { state } = useStudyProgress();

  return (
    <nav aria-label="Course Modules" className="space-y-6 pb-10">
      {COURSE_MODULES.map((mod) => {
        const sessions = LECTURE_SESSIONS.filter((s) => s.moduleId === mod.id);
        return (
          <div key={mod.id} className="space-y-1.5">
            <div className="px-2">
              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                {mod.number}
              </div>
              <div className="text-xs font-semibold text-foreground">
                {lang === 'zh' ? mod.titleZh : mod.titleEn}
              </div>
            </div>
            <ul className="m-0 space-y-0.5 pl-0 list-none">
              {sessions.map((s) => {
                const href = `/${lang}/lectures/${s.slug}/`;
                const isActive = pathname?.includes(`/lectures/${s.slug}`);
                const isLive =
                  (lang === 'zh' ? s.statusZh : s.statusEn) === 'published';
                const isDone = state.completedSlugs.includes(s.slug);

                return (
                  <li key={s.slug}>
                    <Link
                      href={href}
                      className={cn(
                        'group flex items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-xs transition-colors',
                        isActive
                          ? 'bg-primary/10 font-semibold text-primary'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <span
                          className={cn(
                            'h-1.5 w-1.5 shrink-0 rounded-full',
                            isLive
                              ? 'bg-emerald-500'
                              : 'bg-muted-foreground/30'
                          )}
                          title={isLive ? 'Live' : 'Planned'}
                        />
                        <span className="font-mono text-[11px] opacity-75">
                          {s.seq}
                        </span>
                        <span className="truncate">
                          {lang === 'zh' ? s.titleZh : s.titleEn}
                        </span>
                      </span>

                      <span className="flex shrink-0 items-center gap-1">
                        {s.aiBridge && (
                          <span
                            title={s.aiBridge.id}
                            className="rounded bg-purple-500/15 px-1 py-0.5 font-mono text-[9px] font-semibold text-purple-700 dark:text-purple-300"
                          >
                            <Cpu className="inline h-2.5 w-2.5" />
                          </span>
                        )}
                        {isDone && (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
