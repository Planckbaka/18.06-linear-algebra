import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function BasisGoldilocksDiagram({
  caption = '二维平面 $\\mathbb{R}^2$ 中“基（Basis）”的黄金恰当性（Goldilocks Principle）：**(a) 向量太少（1 支）**——虽然线性无关，但仅能张成一条直线（欠张成）；**(b) 刚刚好（2 支不共线向量 = 基）**——既线性无关又张满整个 $\\mathbb{R}^2$，平面每一点坐标分解存在且唯一；**(c) 向量太多（3 支）**——虽然张满 $\\mathbb{R}^2$，但必然产生方向冗余（线性相关，矩阵必有非零零空间）。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="The Goldilocks Geometry of a Basis in ℝ²: Independence vs. Spanning"
      caption={caption}
    >
      <svg
        viewBox="0 0 720 250"
        className="w-full max-w-[720px] select-none text-foreground"
        role="img"
        aria-label="Comparison of too few vectors, a basis of two vectors, and too many dependent vectors in R2"
      >
        <defs>
          <marker id="l09-blue" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker id="l09-emerald" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="l09-rose" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* ================= PANEL A: TOO FEW (INDEPENDENT, NOT SPANNING) ================= */}
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="218" height="222" rx="10" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.18" />
          <text x="109" y="22" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-bold">
            (a) 1 支向量：无关但未张满
          </text>
          <line x1="28" y1="125" x2="190" y2="125" stroke="currentColor" strokeOpacity="0.32" />
          <line x1="109" y1="185" x2="109" y2="48" stroke="currentColor" strokeOpacity="0.32" />
          <line x1="42" y1="168" x2="176" y2="82" className="stroke-blue-500/30" strokeWidth="5" strokeLinecap="round" />
          <line x1="109" y1="125" x2="158" y2="93.5" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.4" markerEnd="url(#l09-blue)" />
          <text x="164" y="90" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold">v₁</text>

          <text x="109" y="200" textAnchor="middle" className="fill-current font-mono text-[10px]">
            ✓ 线性无关  ·  ✗ Span ≠ ℝ²
          </text>
          <text x="109" y="214" textAnchor="middle" className="fill-current text-[9.5px] opacity-70">
            仅构成 1 维直线的基 (k = 1 &lt; 2)
          </text>
        </g>

        {/* ================= PANEL B: JUST RIGHT (BASIS OF R^2, dim = 2) ================= */}
        <g transform="translate(251, 14)">
          <rect x="0" y="0" width="218" height="222" rx="10" className="fill-emerald-500/[0.06] stroke-emerald-500/45" strokeWidth="1.5" />
          <text x="109" y="22" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12px] font-bold">
            ★ (b) 2 支独立向量：ℝ² 的基!
          </text>
          {/* Oblique coordinate grid */}
          {[-1, 0, 1].map((t) => (
            <g key={t}>
              <line
                x1={45 + t * 18}
                y1={155 - t * 28}
                x2={173 + t * 18}
                y2={95 - t * 28}
                className="stroke-emerald-500/20"
              />
              <line
                x1={82 + t * 38}
                y1={172 - t * 18}
                x2={136 + t * 38}
                y2={78 - t * 18}
                className="stroke-blue-500/20"
              />
            </g>
          ))}
          <line x1="28" y1="125" x2="190" y2="125" stroke="currentColor" strokeOpacity="0.32" />
          <line x1="109" y1="185" x2="109" y2="48" stroke="currentColor" strokeOpacity="0.32" />

          <line x1="109" y1="125" x2="162" y2="100" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" markerEnd="url(#l09-blue)" />
          <text x="168" y="102" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold">v₁</text>

          <line x1="109" y1="125" x2="132" y2="72" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" markerEnd="url(#l09-emerald)" />
          <text x="137" y="68" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold">v₂</text>

          <text x="109" y="200" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">
            ✓ 线性无关  ·  ✓ Span = ℝ²
          </text>
          <text x="109" y="214" textAnchor="middle" className="fill-current text-[9.5px] opacity-80">
            矩阵 [v₁ v₂] 可逆 · dim(ℝ²) = 2
          </text>
        </g>

        {/* ================= PANEL C: TOO MANY (SPANNING, DEPENDENT) ================= */}
        <g transform="translate(486, 14)">
          <rect x="0" y="0" width="218" height="222" rx="10" className="fill-rose-500/[0.04] stroke-rose-500/35" />
          <text x="109" y="22" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[12px] font-bold">
            (c) 3 支向量：张满但必相关!
          </text>
          <line x1="28" y1="125" x2="190" y2="125" stroke="currentColor" strokeOpacity="0.32" />
          <line x1="109" y1="185" x2="109" y2="48" stroke="currentColor" strokeOpacity="0.32" />

          <line x1="109" y1="125" x2="160" y2="102" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.2" markerEnd="url(#l09-blue)" />
          <text x="166" y="103" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-bold">v₁</text>

          <line x1="109" y1="125" x2="126" y2="72" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.2" markerEnd="url(#l09-emerald)" />
          <text x="131" y="69" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">v₂</text>

          <line x1="109" y1="125" x2="56" y2="152" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.3" strokeDasharray="4 2" markerEnd="url(#l09-rose)" />
          <text x="58" y="169" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[10px] font-bold">
            v₃ = c₁v₁ + c₂v₂
          </text>

          <text x="109" y="200" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[10px] font-semibold">
            ✗ 线性相关  ·  ✓ Span = ℝ²
          </text>
          <text x="109" y="214" textAnchor="middle" className="fill-current text-[9.5px] opacity-75">
            2×3 宽矩阵必有自由变量 (k = 3 &gt; 2)
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
