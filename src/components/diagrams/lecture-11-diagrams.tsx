import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function MatrixSubspacesAndRank1BlocksDiagram({
  caption = '左图（$3\\times 3$ 矩阵空间 $M$ 的 Grassmann 维数恒等式）：对称矩阵子空间 $S$（$\\dim=6$）与上三角子空间 $U$（$\\dim=6$）相交于对角矩阵子空间 $D = S \\cap U$（$\\dim=3$），而它们的和空间 $S + U = M$ 铺满整个 $9$ 维矩阵空间，完美满足 $6 + 6 = 3 + 9$！右图：一切秩 $r$ 矩阵均可拆解为 **$r$ 张秩 1 外积积木 $\\mathbf{u}_k\\mathbf{v}_k^T$** 的叠加。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Matrix Space Dimension Formula & Rank-1 Building Blocks"
      caption={caption}
    >
      <svg
        viewBox="0 0 715 260"
        className="w-full max-w-[715px] select-none text-foreground"
        role="img"
        aria-label="Grassmann dimension diagram of 3x3 matrix subspaces S and U, plus rank-1 outer product sum"
      >
        {/* ================= LEFT PANEL: GRASSMANN LATTICE IN M_{3x3} ================= */}
        <g transform="translate(18, 16)">
          <rect x="0" y="0" width="330" height="228" rx="12" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.18" />
          <text x="165" y="23" textAnchor="middle" className="fill-current text-[12.5px] font-bold">
            (a) 矩阵空间 M₃ₓ₃ (dim = 9) 的子空间网格
          </text>

          {/* Top node: S + U = M (dim 9) */}
          <rect x="95" y="38" width="140" height="34" rx="7" className="fill-purple-500/20 stroke-purple-600 dark:stroke-purple-400" strokeWidth="1.5" />
          <text x="165" y="59" textAnchor="middle" className="fill-purple-800 dark:fill-purple-200 font-mono text-[11px] font-bold">
            和空间 S + U = M (dim 9)
          </text>

          {/* Connectors */}
          <line x1="130" y1="72" x2="82" y2="104" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="200" y1="72" x2="248" y2="104" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="82" y1="140" x2="130" y2="170" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="248" y1="140" x2="200" y2="170" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />

          {/* Left node: Symmetric S (dim 6) */}
          <rect x="20" y="104" width="125" height="36" rx="7" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.5" />
          <text x="82" y="126" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">
            对称阵 S (dim 6)
          </text>

          {/* Right node: Upper triangular U (dim 6) */}
          <rect x="185" y="104" width="125" height="36" rx="7" className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.5" />
          <text x="247" y="126" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-bold">
            上三角 U (dim 6)
          </text>

          {/* Bottom node: Intersection D = S ∩ U (dim 3) */}
          <rect x="95" y="170" width="140" height="34" rx="7" className="fill-amber-500/25 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.5" />
          <text x="165" y="191" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[11px] font-bold">
            交集 D = S ∩ U (dim 3)
          </text>

          <text x="165" y="219" textAnchor="middle" className="fill-current font-mono text-[10.5px] font-semibold">
            dim(S) + dim(U) = dim(S∩U) + dim(S+U)  (6+6 = 3+9)
          </text>
        </g>

        {/* ================= RIGHT PANEL: RANK-1 ATOMIC BLOCKS ================= */}
        <g transform="translate(366, 16)">
          <rect x="0" y="0" width="331" height="228" rx="12" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.18" />
          <text x="165" y="23" textAnchor="middle" className="fill-current text-[12.5px] font-bold">
            (b) 秩 1 外积积木：Rank(A) = r ⟹ r 张切片之和
          </text>

          {/* Rank r matrix A */}
          <rect x="18" y="64" width="66" height="80" rx="6" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.6" />
          <text x="51" y="102" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[14px] font-bold">A</text>
          <text x="51" y="121" textAnchor="middle" className="fill-current font-mono text-[10px]">rank = r</text>

          <text x="98" y="108" textAnchor="middle" className="fill-current font-mono text-[15px] font-bold">=</text>

          {/* Rank 1 slice 1: u_1 v_1^T */}
          <g transform="translate(115, 58)">
            <rect x="0" y="10" width="12" height="72" rx="2" className="fill-emerald-500/45 stroke-emerald-600 dark:stroke-emerald-400" />
            <text x="6" y="4" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">u₁</text>
            <rect x="18" y="10" width="48" height="12" rx="2" className="fill-amber-500/45 stroke-amber-600 dark:stroke-amber-400" />
            <text x="42" y="4" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[10px] font-bold">v₁ᵀ</text>
            <rect x="18" y="27" width="48" height="55" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.22" strokeDasharray="3 2" />
            <text x="42" y="58" textAnchor="middle" className="fill-current font-mono text-[9.5px] opacity-75">Rank 1</text>
          </g>

          <text x="196" y="108" textAnchor="middle" className="fill-current font-mono text-[13px] font-bold">+ ⋯ +</text>

          {/* Rank 1 slice r: u_r v_r^T */}
          <g transform="translate(222, 58)">
            <rect x="0" y="10" width="12" height="72" rx="2" className="fill-emerald-500/45 stroke-emerald-600 dark:stroke-emerald-400" />
            <text x="6" y="4" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">u_r</text>
            <rect x="18" y="10" width="48" height="12" rx="2" className="fill-amber-500/45 stroke-amber-600 dark:stroke-amber-400" />
            <text x="42" y="4" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[10px] font-bold">v_rᵀ</text>
            <rect x="18" y="27" width="48" height="55" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.22" strokeDasharray="3 2" />
            <text x="42" y="58" textAnchor="middle" className="fill-current font-mono text-[9.5px] opacity-75">Rank 1</text>
          </g>

          <text x="165" y="182" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-bold">
            每张秩 1 矩阵 A₁ = uvᵀ 的各列同比例、各行同比例
          </text>
          <text x="165" y="206" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[10.5px] font-medium">
            注意：秩 1 矩阵集合对加法不封闭（两张相加可升为秩 2!）
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
