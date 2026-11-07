import type { Metadata } from 'next';
import 'katex/dist/katex.min.css';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';

export const metadata: Metadata = {
  title: 'MIT 18.06 Linear Algebra · 几何直觉、严谨推导与前沿 AI 视野',
  description:
    'Open-source bilingual study companion to Prof. Gilbert Strang’s MIT 18.06 Linear Algebra, featuring theme-adaptive SVG geometry, intuition problem sets, and isolated Frontier AI bridges.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
