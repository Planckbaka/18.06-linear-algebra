import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function SubspacesOfR2AndImpostorsDiagram({
  caption = '二维空间 $\\mathbb{R}^2$ 中真正子空间与三大“伪子空间”的几何判别：**(a) 合法子空间**必须严格穿过原点 $\\mathbf{0}$ 且对任意线性组合 $c\\mathbf{v}+d\\mathbf{w}$ 封闭（仅零点 $\\{\\mathbf{0}\\}$、过原点的无限长直线 $L$、或整个 $\\mathbb{R}^2$）；**(b) 平移直线**不穿过 $\\mathbf{0}$（取 $c=0$ 即出界）；**(c) 第一象限**对加法封闭，但乘以负标量 $c=-1$ 立即翻转至第三象限出界！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="True Vector Subspaces vs. Classic Impostors in ℝ²"
      caption={caption}
    >
      <svg
        viewBox="0 0 720 250"
        className="w-full max-w-[720px] select-none text-foreground"
        role="img"
        aria-label="Comparison of true subspaces through the origin versus affine lines and first quadrant"
      >
        <defs>
          <marker id="l05-emerald" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="l05-rose" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* ================= PANEL A: TRUE SUBSPACE (LINE THROUGH 0) ================= */}
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="218" height="220" rx="10" className="fill-emerald-500/[0.05] stroke-emerald-500/40" />
          <text x="109" y="22" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12px] font-bold">
            ✓ (a) 过原点的直线 L（真子空间）
          </text>
          {/* Axes */}
          <line x1="25" y1="118" x2="193" y2="118" stroke="currentColor" strokeOpacity="0.35" />
          <line x1="109" y1="185" x2="109" y2="45" stroke="currentColor" strokeOpacity="0.35" />
          {/* Line through origin */}
          <line x1="36" y1="164" x2="182" y2="72" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.6" />
          <circle cx="109" cy="118" r="4.5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="116" y="131" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">0 ∈ L</text>
          {/* Vector v and -0.7v on L */}
          <line x1="109" y1="118" x2="157" y2="88" className="stroke-emerald-700 dark:stroke-emerald-300" strokeWidth="2.2" markerEnd="url(#l05-emerald)" />
          <text x="160" y="84" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-semibold">v</text>

          <text x="109" y="204" textAnchor="middle" className="fill-current text-[10.5px] opacity-80">
            含原点 0，对任意 cv + dw 完全封闭
          </text>
        </g>

        {/* ================= PANEL B: SHIFTED LINE (AFFINE, NO ORIGIN) ================= */}
        <g transform="translate(251, 14)">
          <rect x="0" y="0" width="218" height="220" rx="10" className="fill-rose-500/[0.04] stroke-rose-500/35" />
          <text x="109" y="22" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[12px] font-bold">
            ✗ (b) 不过原点的平移线（非子空间!）
          </text>
          {/* Axes */}
          <line x1="25" y1="132" x2="193" y2="132" stroke="currentColor" strokeOpacity="0.35" />
          <line x1="109" y1="185" x2="109" y2="45" stroke="currentColor" strokeOpacity="0.35" />
          {/* Shifted line y = 0.5x + 1.2 */}
          <line x1="34" y1="115" x2="184" y2="55" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="2.4" strokeDasharray="5 3" />
          {/* Origin missed */}
          <circle cx="109" cy="132" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
          <text x="117" y="146" className="fill-rose-600 dark:fill-rose-400 font-mono text-[10px] font-bold">
            0 ∉ S !
          </text>
          <text x="109" y="204" textAnchor="middle" className="fill-current text-[10.5px] opacity-80">
            0 · v = 0 掉出直线外（仅是仿射集）
          </text>
        </g>

        {/* ================= PANEL C: FIRST QUADRANT (FAILS NEGATIVE SCALING) ================= */}
        <g transform="translate(486, 14)">
          <rect x="0" y="0" width="218" height="220" rx="10" className="fill-rose-500/[0.04] stroke-rose-500/35" />
          <text x="109" y="22" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[12px] font-bold">
            ✗ (c) 第一象限 x≥0, y≥0（非子空间!）
          </text>
          {/* Shaded Q1 */}
          <rect x="109" y="48" width="82" height="72" className="fill-blue-500/15" />
          <text x="150" y="66" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-semibold">
            Q₁ (x≥0, y≥0)
          </text>
          {/* Axes */}
          <line x1="25" y1="120" x2="193" y2="120" stroke="currentColor" strokeOpacity="0.4" />
          <line x1="109" y1="185" x2="109" y2="45" stroke="currentColor" strokeOpacity="0.4" />

          {/* v in Q1 */}
          <line x1="109" y1="120" x2="155" y2="82" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.2" markerEnd="url(#l05-emerald)" />
          <text x="162" y="83" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-semibold">v ∈ Q₁</text>

          {/* -v in Q3 */}
          <line x1="109" y1="120" x2="63" y2="158" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.2" strokeDasharray="4 2" markerEnd="url(#l05-rose)" />
          <text x="58" y="173" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[10px] font-bold">
            −v ∉ Q₁ !
          </text>

          <text x="109" y="204" textAnchor="middle" className="fill-current text-[10.5px] opacity-80">
            加法封闭，但负标量数乘 (−1)v 破界!
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
