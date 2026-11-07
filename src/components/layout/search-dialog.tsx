'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search, Cpu, BookOpen, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LECTURE_SESSIONS } from '@/lib/curriculum';
import { UI_STRINGS, type Locale } from '@/lib/i18n';

export function SearchDialog({ lang }: { lang: Locale }) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const router = useRouter();
  const t = UI_STRINGS[lang];

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return LECTURE_SESSIONS.filter(
        (s) => (lang === 'zh' ? s.statusZh : s.statusEn) === 'published' || Boolean(s.aiBridge)
      ).slice(0, 8);
    }
    return LECTURE_SESSIONS.filter((s) => {
      const haystack = [
        s.seq,
        s.ocwId,
        s.videoEpisode,
        s.titleZh,
        s.titleEn,
        s.focusZh,
        s.focusEn,
        s.textbookRef,
        s.aiBridge?.id,
        s.aiBridge?.titleZh,
        s.aiBridge?.titleEn,
        s.aiBridge?.summaryZh,
        s.aiBridge?.summaryEn,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    }).slice(0, 12);
  }, [query, lang]);

  const handleNavigate = (slug: string) => {
    setOpen(false);
    router.push(`/${lang}/lectures/${slug}/`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-2 px-2.5 text-xs text-muted-foreground sm:w-48 sm:justify-between"
        >
          <span className="flex items-center gap-1.5">
            <Search className="h-3.5 w-3.5" />
            <span>{t.searchShortcut}</span>
          </span>
          <kbd className="pointer-events-none hidden h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            ⌘K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl p-0 overflow-hidden gap-0">
        <DialogTitle className="sr-only">{t.searchShortcut}</DialogTitle>
        <div className="flex items-center border-b px-4 py-3">
          <Search className="mr-2.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            autoFocus
          />
        </div>
        <div className="max-h-[380px] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="py-8 text-center text-xs text-muted-foreground">
              {lang === 'zh' ? '未找到匹配的讲次或概念' : 'No matching lectures or topics found'}
            </p>
          ) : (
            <div className="space-y-1">
              {results.map((s) => {
                const isLive = (lang === 'zh' ? s.statusZh : s.statusEn) === 'published';
                return (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => handleNavigate(s.slug)}
                    className="flex w-full items-start justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-muted"
                  >
                    <div className="min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[11px] font-semibold text-primary">
                          {s.seq} ({s.ocwId}/{s.videoEpisode})
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {lang === 'zh' ? s.titleZh : s.titleEn}
                        </span>
                        {isLive && (
                          <Badge variant="emerald" className="px-1.5 py-0 text-[10px]">
                            <BookOpen className="mr-1 h-2.5 w-2.5" />
                            {t.statusPublished}
                          </Badge>
                        )}
                        {s.aiBridge && (
                          <Badge variant="purple" className="px-1.5 py-0 text-[10px]">
                            <Cpu className="mr-1 h-2.5 w-2.5" />
                            {s.aiBridge.id}
                          </Badge>
                        )}
                      </div>
                      <p className="m-0 line-clamp-1 text-xs text-muted-foreground">
                        {lang === 'zh' ? s.focusZh : s.focusEn}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
