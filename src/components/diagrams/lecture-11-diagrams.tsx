import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function MatrixSubspacesAndRank1BlocksDiagram({
  lang = 'zh',
  caption = '左图展示矩阵子空间的 Grassmann 维数公式 $6+6=3+9$。右图示意 $r\\ge 2$ 时，秩 $r$ 矩阵可写成 $r$ 项同尺寸的秩 1 外积之和。秩为 $1$ 时只需一项，零矩阵对应空和。',
}: {
  lang?: 'en' | 'zh';
  caption?: string;
}) {
  const isEnglish = lang === 'en';

  return (
    <MathDiagram
      title={isEnglish ? 'Matrix Subspaces and Rank-One Sums' : '矩阵子空间与秩 1 外积之和'}
      caption={caption}
    >
      <svg
        viewBox="0 0 715 260"
        className="w-full max-w-[715px] select-none text-foreground"
        role="img"
        aria-label={isEnglish ? 'Dimension formula for matrix subspaces and a sum of rank-one outer products' : '矩阵子空间的维数公式与秩 1 外积之和'}
      >
        {/* ================= LEFT PANEL: GRASSMANN LATTICE IN M_{3x3} ================= */}
        <g transform="translate(18, 16)">
          <rect x="0" y="0" width="330" height="228" rx="12" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.18" />
          <text x="165" y="23" textAnchor="middle" className="fill-current text-[12.5px] font-bold">
            {isEnglish ? '(a) Subspaces of ℝ³ˣ³' : '(a) ℝ³ˣ³ 的子空间'}
          </text>

          {/* Top node: S + U = M (dim 9) */}
          <rect x="95" y="38" width="140" height="34" rx="7" className="fill-purple-500/20 stroke-purple-600 dark:stroke-purple-400" strokeWidth="1.5" />
          <text x="165" y="59" textAnchor="middle" className="fill-purple-800 dark:fill-purple-200 font-mono text-[11px] font-bold">
            S + U = M (dim 9)
          </text>

          {/* Connectors */}
          <line x1="130" y1="72" x2="82" y2="104" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="200" y1="72" x2="248" y2="104" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="82" y1="140" x2="130" y2="170" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="248" y1="140" x2="200" y2="170" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />

          {/* Left node: Symmetric S (dim 6) */}
          <rect x="20" y="104" width="125" height="36" rx="7" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.5" />
          <text x="82" y="119" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">
            {isEnglish ? 'Symmetric S' : '对称阵 S'}
          </text>
          <text x="82" y="133" textAnchor="middle" className="fill-current font-mono text-[10px]">dim = 6</text>

          {/* Right node: Upper triangular U (dim 6) */}
          <rect x="185" y="104" width="125" height="36" rx="7" className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.5" />
          <text x="247" y="119" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-bold">
            {isEnglish ? 'Upper triangular U' : '上三角 U'}
          </text>
          <text x="247" y="133" textAnchor="middle" className="fill-current font-mono text-[10px]">dim = 6</text>

          {/* Bottom node: Intersection D = S ∩ U (dim 3) */}
          <rect x="95" y="170" width="140" height="34" rx="7" className="fill-amber-500/25 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.5" />
          <text x="165" y="191" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[11px] font-bold">
            D = S ∩ U (dim 3)
          </text>

          <text x="165" y="219" textAnchor="middle" className="fill-current font-mono text-[10.5px] font-semibold">
            dim S + dim U = dim(S∩U) + dim(S+U)
          </text>
        </g>

        {/* ================= RIGHT PANEL: RANK-1 ATOMIC BLOCKS ================= */}
        <g transform="translate(366, 16)">
          <rect x="0" y="0" width="331" height="228" rx="12" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.18" />
          <text x="165" y="23" textAnchor="middle" className="fill-current text-[12.5px] font-bold">
            {isEnglish ? '(b) Rank-one sum (r ≥ 2)' : '(b) 秩 1 分解示意（r ≥ 2）'}
          </text>

          {/* Rank r matrix A */}
          <rect x="18" y="64" width="66" height="80" rx="6" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.6" />
          <text x="51" y="102" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[14px] font-bold">A</text>
          <text x="51" y="121" textAnchor="middle" className="fill-current font-mono text-[10px]">rank = r</text>

          <text x="98" y="108" textAnchor="middle" className="fill-current font-mono text-[15px] font-bold">=</text>

          {/* rank 1 slice 1: u_1 v_1^T */}
          <g transform="translate(115, 58)">
            <rect x="0" y="10" width="12" height="72" rx="2" className="fill-emerald-500/45 stroke-emerald-600 dark:stroke-emerald-400" />
            <text x="6" y="4" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">u₁</text>
            <rect x="18" y="10" width="48" height="12" rx="2" className="fill-amber-500/45 stroke-amber-600 dark:stroke-amber-400" />
            <text x="42" y="4" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[10px] font-bold">v₁ᵀ</text>
            <rect x="18" y="27" width="48" height="55" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.22" strokeDasharray="3 2" />
            <text x="42" y="58" textAnchor="middle" className="fill-current font-mono text-[9.5px] opacity-75">rank 1</text>
          </g>

          <text x="196" y="108" textAnchor="middle" className="fill-current font-mono text-[13px] font-bold">+ ⋯ +</text>

          {/* rank 1 slice r: u_r v_r^T */}
          <g transform="translate(222, 58)">
            <rect x="0" y="10" width="12" height="72" rx="2" className="fill-emerald-500/45 stroke-emerald-600 dark:stroke-emerald-400" />
            <text x="6" y="4" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">u_r</text>
            <rect x="18" y="10" width="48" height="12" rx="2" className="fill-amber-500/45 stroke-amber-600 dark:stroke-amber-400" />
            <text x="42" y="4" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[10px] font-bold">v_rᵀ</text>
            <rect x="18" y="27" width="48" height="55" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.22" strokeDasharray="3 2" />
            <text x="42" y="58" textAnchor="middle" className="fill-current font-mono text-[9.5px] opacity-75">rank 1</text>
          </g>

          <text x="165" y="182" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-bold">
            {isEnglish ? 'rank(uvᵀ) = 1 when u, v ≠ 0' : 'u、v 非零时，外积 uvᵀ 的秩为 1'}
          </text>
          <text x="165" y="206" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[10.5px] font-medium">
            {isEnglish ? 'Two rank-one terms can sum to rank two' : '两个秩 1 矩阵相加可得到秩 2 矩阵'}
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
