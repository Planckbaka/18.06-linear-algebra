import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function BasisGoldilocksDiagram({
  lang = 'zh',
  caption = '(a) 一支非零向量张成一条直线。(b) $\\mathbf{v}_1=(1,2)^T$ 与 $\\mathbf{v}_2=(3,1)^T$ 构成 $\\mathbb{R}^2$ 的一组基，两向量的整数线性组合落在网格交点上。(c) 加入 $\\mathbf{v}_3=-\\mathbf{v}_1$ 后，张成空间不变，三支向量线性相关。',
}: {
  lang?: 'en' | 'zh';
  caption?: string;
}) {
  const isEnglish = lang === 'en';

  return (
    <MathDiagram
      title={isEnglish ? 'One, Two, and Three Vectors in ℝ²' : '二维空间中的向量组与基'}
      caption={caption}
    >
      <svg
        viewBox="0 0 720 250"
        className="w-full max-w-[720px] select-none text-foreground"
        role="img"
        aria-label={isEnglish ? 'Comparison of too few vectors, a basis of two vectors, and too many dependent vectors in R2' : '在二维空间比较一支非零向量、由两支向量构成的基，以及三支线性相关向量。'}
      >
        <defs>
          <marker id="l09-blue" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker id="l09-emerald" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="l09-rose" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* ================= PANEL A: TOO FEW (INDEPENDENT, NOT SPANNING) ================= */}
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="218" height="222" rx="10" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.18" />
          <text x="109" y="22" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-bold">
            {isEnglish ? '(a) One nonzero vector' : '(a) 1 支向量：无关但未张满'}
          </text>
          <line x1="28" y1="125" x2="190" y2="125" stroke="currentColor" strokeOpacity="0.32" />
          <line x1="109" y1="185" x2="109" y2="48" stroke="currentColor" strokeOpacity="0.32" />
          <line x1="79" y1="185" x2="139" y2="65" className="stroke-blue-500/30" strokeWidth="5" strokeLinecap="round" />
          <line x1="109" y1="125" x2="129" y2="85" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.4" markerEnd="url(#l09-blue)" />
          <text x="136" y="84" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold">v₁</text>

          <text x="109" y="200" textAnchor="middle" className="fill-current font-mono text-[10px]">
            {isEnglish ? 'Independent · Span ≠ ℝ²' : '✓ 线性无关  ·  ✗ Span ≠ ℝ²'}
          </text>
          <text x="109" y="214" textAnchor="middle" className="fill-current text-[9.5px] opacity-70">
            {isEnglish ? 'Basis of a line (k = 1 < 2)' : '仅构成 1 维直线的基 (k = 1 < 2)'}
          </text>
        </g>

        {/* ================= PANEL B: JUST RIGHT (BASIS OF R^2, dim = 2) ================= */}
        <g transform="translate(251, 14)">
          <rect x="0" y="0" width="218" height="222" rx="10" className="fill-emerald-500/[0.06] stroke-emerald-500/45" strokeWidth="1.5" />
          <text x="109" y="22" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12px] font-bold">
            {isEnglish ? '(b) Two independent vectors' : '★ (b) 2 支独立向量：ℝ² 的基!'}
          </text>
          {/* A unit step along v₁ is (20, −40) px and along v₂ is (60, −20) px. */}
          {[-1, 0, 1].map((t) => (
            <g key={t}>
              <line
                x1={89 + t * 60}
                y1={165 - t * 20}
                x2={129 + t * 60}
                y2={85 - t * 20}
                className="stroke-emerald-500/20"
              />
              <line
                x1={49 + t * 20}
                y1={145 - t * 40}
                x2={169 + t * 20}
                y2={105 - t * 40}
                className="stroke-blue-500/20"
              />
            </g>
          ))}
          <line x1="28" y1="125" x2="190" y2="125" stroke="currentColor" strokeOpacity="0.32" />
          <line x1="109" y1="185" x2="109" y2="48" stroke="currentColor" strokeOpacity="0.32" />

          <line x1="109" y1="125" x2="129" y2="85" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" markerEnd="url(#l09-blue)" />
          <text x="133" y="81" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold">v₁</text>

          <line x1="109" y1="125" x2="169" y2="105" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" markerEnd="url(#l09-emerald)" />
          <text x="174" y="101" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold">v₂</text>

          <text x="109" y="200" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">
            {isEnglish ? 'Independent · Span = ℝ²' : '✓ 线性无关  ·  ✓ Span = ℝ²'}
          </text>
          <text x="109" y="214" textAnchor="middle" className="fill-current text-[9.5px] opacity-80">
            {isEnglish ? '[v₁ v₂] invertible · dim(ℝ²) = 2' : '矩阵 [v₁ v₂] 可逆 · dim(ℝ²) = 2'}
          </text>
        </g>

        {/* ================= PANEL C: TOO MANY (SPANNING, DEPENDENT) ================= */}
        <g transform="translate(486, 14)">
          <rect x="0" y="0" width="218" height="222" rx="10" className="fill-rose-500/[0.04] stroke-rose-500/35" />
          <text x="109" y="22" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[12px] font-bold">
            {isEnglish ? '(c) Three dependent vectors' : '(c) 3 支向量：张满但必相关!'}
          </text>
          <line x1="28" y1="125" x2="190" y2="125" stroke="currentColor" strokeOpacity="0.32" />
          <line x1="109" y1="185" x2="109" y2="48" stroke="currentColor" strokeOpacity="0.32" />

          <line x1="109" y1="125" x2="129" y2="85" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.2" markerEnd="url(#l09-blue)" />
          <text x="133" y="81" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-bold">v₁</text>

          <line x1="109" y1="125" x2="169" y2="105" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.2" markerEnd="url(#l09-emerald)" />
          <text x="174" y="101" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">v₂</text>

          <line x1="109" y1="125" x2="89" y2="165" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.3" strokeDasharray="4 2" markerEnd="url(#l09-rose)" />
          <text x="77" y="180" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[10px] font-bold">
            v₃ = −v₁
          </text>

          <text x="109" y="200" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[10px] font-semibold">
            {isEnglish ? 'Dependent · Span = ℝ²' : '✗ 线性相关  ·  ✓ Span = ℝ²'}
          </text>
          <text x="109" y="214" textAnchor="middle" className="fill-current text-[9.5px] opacity-75">
            {isEnglish ? 'At least one free variable (k = 3 > 2)' : '2×3 宽矩阵必有自由变量 (k = 3 > 2)'}
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
