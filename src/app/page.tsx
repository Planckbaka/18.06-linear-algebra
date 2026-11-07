'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sigma, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RootRedirectPage() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/zh/');
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
        <Sigma className="h-6 w-6" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight">
        MIT 18.06 Linear Algebra · 线性代数开源学习站
      </h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Geometric Intuition · Textbook Rigor · Intuition Problem Sets · Isolated Frontier AI Bridges
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/zh/">
            进入中文精修站 (/zh/) <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/en/">English Edition (/en/)</Link>
        </Button>
      </div>
    </main>
  );
}
