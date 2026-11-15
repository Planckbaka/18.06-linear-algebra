'use client';

import * as React from 'react';
import { renderModule1Interactive } from './module-1-interactives';
import { renderModule2Interactive } from './module-2-interactives';
import { renderModule3Interactive } from './module-3-interactives';
import { renderModule4Interactive } from './module-4-interactives';

export function InteractiveSandboxDispatcher({ id }: { id: string }) {
  const widget =
    renderModule1Interactive(id) ??
    renderModule2Interactive(id) ??
    renderModule3Interactive(id) ??
    renderModule4Interactive(id);

  if (!widget) {
    return (
      <div className="rounded-lg border border-dashed bg-muted/20 p-3 font-mono text-xs text-muted-foreground">
        Interactive widget &ldquo;{id}&rdquo; is not registered.
      </div>
    );
  }

  return <div className="mt-3">{widget}</div>;
}
