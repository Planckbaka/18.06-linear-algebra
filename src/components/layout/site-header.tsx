'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sigma, Github, Languages, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ThemeToggle } from './theme-toggle';
import { SearchDialog } from './search-dialog';
import { CourseSidebar } from './course-sidebar';
import { UI_STRINGS, type Locale } from '@/lib/i18n';

export function SiteHeader({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const t = UI_STRINGS[lang];
  const targetLang: Locale = lang === 'zh' ? 'en' : 'zh';

  const switchedPath = React.useMemo(() => {
    if (!pathname) return `/${targetLang}/`;
    const replaced = pathname.replace(new RegExp(`^/${lang}(/|$)`), `/${targetLang}$1`);
    return replaced.endsWith('/') ? replaced : `${replaced}/`;
  }, [pathname, lang, targetLang]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between gap-3">
        <div className="flex items-center gap-3 md:gap-6">
          {/* Mobile Curriculum Drawer */}
          <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open curriculum menu">
                <Menu className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="left-0 top-0 h-full max-w-xs translate-x-0 rounded-none p-4 overflow-y-auto">
              <DialogTitle className="text-sm font-bold mb-3">
                {t.siteTitle}
              </DialogTitle>
              <div onClick={() => setMobileOpen(false)}>
                <CourseSidebar lang={lang} />
              </div>
            </DialogContent>
          </Dialog>

          <Link
            href={`/${lang}/`}
            className="flex items-center gap-2 font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
              <Sigma className="h-4 w-4" />
            </span>
            <span className="text-sm sm:text-base">{t.siteTitle}</span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
            <Link
              href={`/${lang}/syllabus/`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.navSyllabus}
            </Link>
            <Link
              href={`/${lang}/ai-atlas/`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.navAiAtlas}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <SearchDialog lang={lang} />

          <Button
            variant="ghost"
            size="sm"
            asChild
            title={t.langSwitchTooltip}
            className="h-8 gap-1.5 px-2.5 text-xs font-semibold"
          >
            <Link href={switchedPath}>
              <Languages className="h-3.5 w-3.5" />
              <span>{t.langSwitchLabel}</span>
            </Link>
          </Button>

          <ThemeToggle />

          <Button variant="ghost" size="icon" asChild aria-label="GitHub Repository">
            <a
              href="https://github.com/Planckbaka/18.06-linear-algebra"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
