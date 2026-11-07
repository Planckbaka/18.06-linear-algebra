import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function MatrixMultFiveViewsDiagram({
  caption = '矩阵乘法 $C = AB$ 的五种等价结构视角：第 ① 种算单个元素（行·列内积），第 ② 种看列空间（$C$ 的每列都是 $A$ 各列的线性组合），第 ③ 种看行空间（$C$ 的每行都是 $B$ 各行的线性组合），第 ④ 种最为深刻——**列×行外积将 $AB$ 拆解为 $n$ 个秩 1 矩阵之和**，第 ⑤ 种则是现代并行与注意力算子分块计算的基石。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="The Five Structural Views of Matrix Multiplication C = AB"
      caption={caption}
    >
      <svg
        viewBox="0 0 720 265"
        className="w-full max-w-[720px] select-none text-foreground"
        role="img"
        aria-label="Comparison of inner product, column combination, row combination, and outer product views of AB"
      >
        {/* View 1: Entrywise Inner Product */}
        <g transform="translate(15, 16)">
          <rect x="0" y="0" width="160" height="230" rx="10" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.14" />
          <text x="80" y="22" textAnchor="middle" className="fill-current text-[11.5px] font-semibold">
            ① 行·列内积 (Entry c_ij)
          </text>
          {/* A matrix */}
          <rect x="16" y="55" width="44" height="54" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="16" y="72" width="44" height="10" className="fill-blue-500/35 stroke-blue-600 dark:stroke-blue-400" />
          <text x="38" y="48" textAnchor="middle" className="fill-current text-[10px] font-mono opacity-75">A</text>
          {/* B matrix */}
          <rect x="68" y="45" width="38" height="44" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="82" y="45" width="10" height="44" className="fill-emerald-500/35 stroke-emerald-600 dark:stroke-emerald-400" />
          <text x="87" y="38" textAnchor="middle" className="fill-current text-[10px] font-mono opacity-75">B</text>
          {/* = C */}
          <rect x="114" y="55" width="34" height="54" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="126" y="72" width="10" height="10" className="fill-rose-500 stroke-rose-600" />
          <text x="131" y="48" textAnchor="middle" className="fill-current text-[10px] font-mono opacity-75">C</text>

          <text x="80" y="148" textAnchor="middle" className="fill-current text-[11px] font-mono">
            c_ij = (row i) · (col j)
          </text>
          <text x="80" y="175" textAnchor="middle" className="fill-current text-[10px] opacity-70">
            1×n 行向量 × n×1 列向量
          </text>
          <text x="80" y="195" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[10.5px] font-medium">
            产出单个标量元素
          </text>
        </g>

        {/* View 2: Column Combination */}
        <g transform="translate(190, 16)">
          <rect x="0" y="0" width="165" height="230" rx="10" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.14" />
          <text x="82" y="22" textAnchor="middle" className="fill-current text-[11.5px] font-semibold">
            ② 列组合视角 (Col Space)
          </text>
          {/* Full A */}
          <rect x="16" y="55" width="44" height="54" rx="3" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" />
          <line x1="30" y1="55" x2="30" y2="109" className="stroke-blue-600/50" />
          <line x1="45" y1="55" x2="45" y2="109" className="stroke-blue-600/50" />
          <text x="38" y="48" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono font-semibold">A cols</text>
          {/* Single col b_j */}
          <rect x="68" y="45" width="38" height="44" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.35" />
          <rect x="82" y="45" width="10" height="44" className="fill-emerald-500/40 stroke-emerald-600 dark:stroke-emerald-400" />
          <text x="87" y="38" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-mono font-semibold">b_j</text>
          {/* Col j of C */}
          <rect x="115" y="55" width="34" height="54" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.35" />
          <rect x="127" y="55" width="10" height="54" className="fill-rose-500/50 stroke-rose-600 dark:stroke-rose-400" />
          <text x="132" y="48" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono font-semibold">Ab_j</text>

          <text x="82" y="148" textAnchor="middle" className="fill-current text-[11px] font-mono">
            col_j(AB) = A b_j
          </text>
          <text x="82" y="175" textAnchor="middle" className="fill-current text-[10px] opacity-70">
            C 的列是 A 各列的线性组合
          </text>
          <text x="82" y="196" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10.5px] font-semibold">
            Col(AB) ⊆ Col(A)
          </text>
        </g>

        {/* View 3: Row Combination */}
        <g transform="translate(370, 16)">
          <rect x="0" y="0" width="165" height="230" rx="10" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.14" />
          <text x="82" y="22" textAnchor="middle" className="fill-current text-[11.5px] font-semibold">
            ③ 行组合视角 (Row Space)
          </text>
          {/* Single row of A */}
          <rect x="16" y="55" width="44" height="54" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.35" />
          <rect x="16" y="73" width="44" height="10" className="fill-blue-500/40 stroke-blue-600 dark:stroke-blue-400" />
          <text x="38" y="48" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono font-semibold">a_iᵀ</text>
          {/* Full rows of B */}
          <rect x="68" y="45" width="38" height="44" rx="3" className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400" />
          <line x1="68" y1="59" x2="106" y2="59" className="stroke-emerald-600/50" />
          <line x1="68" y1="74" x2="106" y2="74" className="stroke-emerald-600/50" />
          <text x="87" y="38" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-mono font-semibold">B rows</text>
          {/* Row i of C */}
          <rect x="115" y="55" width="34" height="54" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.35" />
          <rect x="115" y="73" width="34" height="10" className="fill-rose-500/50 stroke-rose-600 dark:stroke-rose-400" />
          <text x="132" y="48" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono font-semibold">a_iᵀB</text>

          <text x="82" y="148" textAnchor="middle" className="fill-current text-[11px] font-mono">
            row_i(AB) = a_iᵀ B
          </text>
          <text x="82" y="175" textAnchor="middle" className="fill-current text-[10px] opacity-70">
            C 的行是 B 各行的线性组合
          </text>
          <text x="82" y="196" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10.5px] font-semibold">
            Row(AB) ⊆ Row(B)
          </text>
        </g>

        {/* View 4: Sum of Rank-1 Outer Products */}
        <g transform="translate(550, 16)">
          <rect x="0" y="0" width="155" height="230" rx="10" className="fill-amber-500/[0.06] stroke-amber-500/40" />
          <text x="77" y="22" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[11.5px] font-bold">
            ④ 列×行外积和 (Rank-1!)
          </text>
          {/* Col k of A */}
          <rect x="18" y="55" width="11" height="54" rx="2" className="fill-blue-500/45 stroke-blue-600 dark:stroke-blue-400" />
          <text x="23" y="48" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono font-semibold">c_k</text>
          {/* Row k of B */}
          <rect x="38" y="55" width="42" height="11" rx="2" className="fill-emerald-500/45 stroke-emerald-600 dark:stroke-emerald-400" />
          <text x="59" y="48" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-mono font-semibold">r_kᵀ</text>
          {/* = Full Rank-1 Matrix */}
          <rect x="92" y="55" width="44" height="54" rx="3" className="fill-amber-500/30 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.5" />
          <text x="114" y="85" textAnchor="middle" className="fill-amber-900 dark:fill-amber-200 text-[10px] font-mono font-bold">
            Rank 1
          </text>

          <text x="77" y="146" textAnchor="middle" className="fill-current text-[11px] font-mono font-semibold">
            AB = ∑ c_k r_kᵀ
          </text>
          <text x="77" y="173" textAnchor="middle" className="fill-current text-[10px] opacity-80">
            m×1 列 × 1×p 行 = m×p 整张切片
          </text>
          <text x="77" y="195" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-semibold">
            SVD 与低秩分解的灵魂!
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
