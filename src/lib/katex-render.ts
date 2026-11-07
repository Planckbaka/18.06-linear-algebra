import katex from 'katex';

export function renderLatexToHtml(latex: string, displayMode = false): string {
  return katex.renderToString(latex, {
    displayMode,
    throwOnError: false,
    strict: false,
  });
}

/**
 * Renders inline `$...$` segments inside a plain text string (e.g., progressive hints or feedback)
 * into safe HTML containing KaTeX spans.
 */
export function renderInlineMathText(text: string): string {
  const mathHtmlList: string[] = [];
  const withPlaceholders = text.replace(/\$([^$\n]+)\$/g, (_, mathExpr: string) => {
    const idx = mathHtmlList.length;
    mathHtmlList.push(renderLatexToHtml(mathExpr, false));
    return `\u0000MATH_${idx}\u0000`;
  });

  const formatted = withPlaceholders
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>')
    .replace(
      /`([^`\n]+)`/g,
      '<code class="rounded bg-muted px-1 py-0.5 font-mono text-[0.9em]">$1</code>'
    );

  return formatted.replace(/\u0000MATH_(\d+)\u0000/g, (_, idxStr: string) => {
    return mathHtmlList[Number(idxStr)] ?? '';
  });
}
