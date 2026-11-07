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
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped.replace(/\$([^$\n]+)\$/g, (_, mathExpr: string) => {
    const rawLatex = mathExpr
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    return renderLatexToHtml(rawLatex, false);
  });
}
