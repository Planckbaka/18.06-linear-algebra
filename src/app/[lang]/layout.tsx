import * as React from 'react';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/site-header';
import { isValidLocale, LOCALES, UI_STRINGS } from '@/lib/i18n';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const t = UI_STRINGS[lang];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang={lang} />
      <div className="flex-1">{children}</div>
      <footer className="border-t bg-muted/20 py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p className="m-0">{t.footerNote}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Planckbaka/18.06-linear-algebra"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://github.com/Planckbaka/18.06-linear-algebra/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Contributing
            </a>
            <a
              href="https://github.com/Planckbaka/18.06-linear-algebra/blob/main/docs/STYLE_GUIDE.md"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Style Guide
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
