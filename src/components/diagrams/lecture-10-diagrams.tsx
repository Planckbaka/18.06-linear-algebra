import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function FourSubspacesBigPictureDiagram({
  lang = 'zh',
  caption = '对实矩阵 $A\\in\\mathbb{R}^{m\\times n}$，输入空间为 $\\operatorname{Row}(A)\\oplus\\operatorname{Null}(A)$，输出空间为 $\\operatorname{Col}(A)\\oplus\\operatorname{Null}(A^T)$。每对空间互为正交补。多边形是示意图。箭头展示 $0\\lt r\\lt n$ 时两个非零输入分量的去向。',
}: {
  lang?: 'en' | 'zh';
  caption?: string;
}) {
  const isEnglish = lang === 'en';

  return (
    <MathDiagram
      title={isEnglish ? 'The Four Fundamental Subspaces' : '四个基本子空间全景图'}
      caption={caption}
    >
      <svg
        viewBox="0 0 720 295"
        className="w-full max-w-[720px] select-none text-foreground"
        role="img"
        aria-label={isEnglish ? 'The four fundamental subspaces and the action of A' : '四个基本子空间与矩阵 A 的作用'}
      >
        <defs>
          <marker id="l10-arrow-blue" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker id="l10-arrow-emerald" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
        </defs>

        {/* ================= LEFT CROSS: INPUT SPACE R^n ================= */}
        <g transform="translate(26, 16)">
          <text x="140" y="16" textAnchor="middle" className="fill-current text-[13px] font-bold">
            {isEnglish ? 'Input space ℝⁿ' : '输入空间 ℝⁿ'}
          </text>

          {/* Upper-left diamond: Row Space C(A^T) */}
          <polygon
            points="140,142 36,92 88,36 192,86"
            className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
          />
          <text x="114" y="76" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold">
            Row(A) = Col(Aᵀ)
          </text>
          <text x="114" y="94" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-semibold">
            dim = r
          </text>

          {/* Lower-left diamond: Nullspace N(A) */}
          <polygon
            points="140,142 192,198 140,254 88,198"
            className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2"
          />
          <text x="140" y="196" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11.5px] font-bold">
            Null(A)
          </text>
          <text x="140" y="214" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-semibold">
            dim = n − r
          </text>

          <circle cx="140" cy="142" r="4.5" className="fill-current" />
          <text x="155" y="145" className="fill-current font-mono text-[10.5px] font-bold">0</text>

          {/* Sample x_r and x_n */}
          <circle cx="82" cy="86" r="4" className="fill-blue-600 dark:fill-blue-400" />
          <text x="66" y="88" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-bold">x_r</text>

          <circle cx="156" cy="176" r="4" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="172" y="180" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">x_n</text>

          <text x="140" y="272" textAnchor="middle" className="fill-current font-mono text-[11px] font-semibold opacity-85">
            r + (n − r) = n
          </text>
        </g>

        {/* ================= MAPPING ARROWS BY MATRIX A ================= */}
        {/* Top bijection arrow: Row(A) -> Col(A) */}
        <path
          d="M 108 102 C 190 36, 520 36, 612 100"
          fill="none"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2.4"
          markerEnd="url(#l10-arrow-blue)"
        />
        <rect x="292" y="34" width="136" height="22" rx="6" className="fill-background stroke-blue-500/50" />
        <text x="360" y="49" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold">
          {isEnglish ? 'xᵣ ⟼ Axᵣ (bijection)' : 'xᵣ ⟼ Axᵣ（双射）'}
        </text>

        {/* Bottom collapse arrow: Null(A) -> 0 */}
        <path
          d="M 182 192 C 300 185, 405 174, 560 158"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2.2"
          strokeDasharray="5 3"
          markerEnd="url(#l10-arrow-emerald)"
        />
        <rect x="294" y="166" width="132" height="22" rx="6" className="fill-background stroke-emerald-500/50" />
        <text x="360" y="181" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold">
          xₙ ⟼ Axₙ = 0
        </text>

        {/* ================= RIGHT CROSS: OUTPUT SPACE R^m ================= */}
        <g transform="translate(420, 16)">
          <text x="140" y="16" textAnchor="middle" className="fill-current text-[13px] font-bold">
            {isEnglish ? 'Output space ℝᵐ' : '输出空间 ℝᵐ'}
          </text>

          {/* Upper-right diamond: Column Space Col(A) */}
          <polygon
            points="140,142 88,86 192,36 244,92"
            className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
          />
          <text x="166" y="76" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold">
            Col(A)
          </text>
          <text x="166" y="94" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-semibold">
            dim = r
          </text>

          {/* Lower-right diamond: Left Nullspace Null(A^T) */}
          <polygon
            points="140,142 192,198 140,254 88,198"
            className="fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2"
          />
          <text x="140" y="196" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 font-mono text-[11.5px] font-bold">
            Null(Aᵀ)
          </text>
          <text x="140" y="214" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 font-mono text-[11px] font-semibold">
            dim = m − r
          </text>

          <circle cx="140" cy="142" r="4.5" className="fill-current" />
          <text x="118" y="146" className="fill-current font-mono text-[10.5px] font-bold">0</text>

          {/* Image b = Ax_r */}
          <circle cx="192" cy="84" r="4" className="fill-blue-600 dark:fill-blue-400" />
          <text x="205" y="88" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-bold">Ax_r</text>

          <text x="140" y="272" textAnchor="middle" className="fill-current font-mono text-[11px] font-semibold opacity-85">
            r + (m − r) = m
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
