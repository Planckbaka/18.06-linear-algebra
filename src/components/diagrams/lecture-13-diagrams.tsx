import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function Module1SynthesisMapDiagram({
  lang = 'zh',
  caption = '对于可逆方阵，$PA=LU$ 支持重复的三角求解。对任意实矩阵，$[A\\mid I_m]\\to[R\\mid E]$ 给出 $EA=R$，其主元决定秩与四个基本子空间的维数。$E_{\\text{bottom}}$ 由 $E$ 最后 $m-r$ 行组成。方程相容时，$\\mathbf{x}_p+\\operatorname{Null}(A)$ 给出完整解集。',
}: {
  lang?: 'en' | 'zh';
  caption?: string;
}) {
  const isEnglish = lang === 'en';

  return (
    <MathDiagram
      title={isEnglish ? 'Elimination, Rank, and the Four Subspaces' : '消元、秩与四个基本子空间'}
      caption={caption}
    >
      <svg
        viewBox="0 0 730 295"
        className="w-full max-w-[730px] select-none text-foreground"
        role="img"
        aria-label={isEnglish ? 'Map from A to LU, RREF, the four subspaces, and the solution set' : '从 A 到 LU 分解、简化行阶梯形、四个子空间与通解的导图'}
      >
        <defs>
          <marker
            id="l13-flow-arrow"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="currentColor" fillOpacity="0.65" />
          </marker>
        </defs>

        {/* Outer subtle frame */}
        <rect x="10" y="10" width="710" height="275" rx="14" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.16" />

        {/* Node 1: Matrix A (m x n) + Rank-1 Sum */}
        <g transform="translate(26, 98)">
          <rect x="0" y="0" width="142" height="96" rx="10" className="fill-blue-500/15 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.8" />
          <text x="71" y="24" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[12.5px] font-bold">
            A ∈ ℝᵐˣⁿ
          </text>
          <text x="71" y="45" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            {isEnglish ? 'Row and column picture' : '行图像与列图像'}
          </text>
          <text x="71" y="64" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            A = ∑ₖ₌₁ʳ uₖ vₖᵀ
          </text>
          <text x="71" y="82" textAnchor="middle" className="fill-current text-[10px] opacity-75">
            {isEnglish ? 'r rank-one terms' : 'r 项秩 1 外积'}
          </text>
        </g>

        {/* Arrow A -> PA=LU */}
        <path d="M 97 98 L 97 54 L 198 54" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.7" markerEnd="url(#l13-flow-arrow)" />

        {/* Node 2: PA = LU (Top Center) */}
        <g transform="translate(204, 22)">
          <rect x="0" y="0" width="218" height="64" rx="9" className="fill-amber-500/15 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.6" />
          <text x="109" y="23" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[12px] font-bold">
            {isEnglish ? 'PA = LU for invertible A' : '可逆方阵的分解 PA = LU'}
          </text>
          <text x="109" y="42" textAnchor="middle" className="fill-current font-mono text-[10px]">
            {isEnglish ? 'L stores permuted multipliers' : 'L 按换行后的顺序存储乘数'}
          </text>
          <text x="109" y="56" textAnchor="middle" className="fill-current font-mono text-[10px] opacity-80">
            {isEnglish ? 'Factor O(n³), solve O(n²) per RHS' : '分解 O(n³)，每个右端求解 O(n²)'}
          </text>
        </g>

        {/* Arrow A -> [R | E] & Rank r */}
        <line x1="168" y1="146" x2="202" y2="146" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.8" markerEnd="url(#l13-flow-arrow)" />

        {/* Node 3: RREF [R | E] & Rank r (Center Hub) */}
        <g transform="translate(208, 102)">
          <rect x="0" y="0" width="210" height="88" rx="10" className="fill-emerald-500/18 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.9" />
          <text x="105" y="23" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[12.5px] font-bold">
            {isEnglish ? 'rank(A) = r pivots' : '主元数 rank(A) = r'}
          </text>
          <text x="105" y="43" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            [A | Iₘ] ⟶ [R | E]  (EA = R)
          </text>
          <text x="105" y="62" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            Rx = 0 ⟺ Ax = 0
          </text>
          <text x="105" y="79" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-semibold">
            0 ≤ r ≤ min(m, n)
          </text>
        </g>

        {/* Arrow Center -> Bottom Ax=b */}
        <line x1="313" y1="190" x2="313" y2="210" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.7" markerEnd="url(#l13-flow-arrow)" />

        {/* Node 4: Complete Solution Ax = b (Bottom Center) */}
        <g transform="translate(188, 215)">
          <rect x="0" y="0" width="250" height="56" rx="9" className="fill-purple-500/15 stroke-purple-600 dark:stroke-purple-400" strokeWidth="1.6" />
          <text x="125" y="21" textAnchor="middle" className="fill-purple-800 dark:fill-purple-200 font-mono text-[11.5px] font-bold">
            {isEnglish ? 'Ax = b solvable ⟺ E_bottom b = 0' : 'Ax = b 可解 ⟺ E_bottom b = 0'}
          </text>
          <text x="125" y="42" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            {isEnglish ? 'If consistent, x_p + Null(A)' : '相容时，解集为 x_p + Null(A)'}
          </text>
        </g>

        {/* Arrows Center -> Right Four Subspaces */}
        <path d="M 418 128 L 456 84" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.7" markerEnd="url(#l13-flow-arrow)" />
        <path d="M 418 164 L 456 204" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.7" markerEnd="url(#l13-flow-arrow)" />

        {/* Node 5A: Input Space R^n (Top Right) */}
        <g transform="translate(462, 24)">
          <rect x="0" y="0" width="242" height="114" rx="10" className="fill-blue-500/12 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.6" />
          <text x="121" y="21" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold">
            {isEnglish ? 'Input subspaces in ℝⁿ' : '输入侧子空间 ℝⁿ'}
          </text>
          <text x="14" y="44" className="fill-current font-mono text-[10.5px] font-bold">
            1. Row(A) = Row(R): dim = r
          </text>
          <text x="24" y="60" className="fill-current text-[10px] opacity-85">
            {isEnglish ? 'Basis from nonzero rows of R, transposed' : '基为 R 的非零行的转置'}
          </text>
          <text x="14" y="81" className="fill-current font-mono text-[10.5px] font-bold">
            2. Null(A) = Null(R): dim = n − r
          </text>
          <text x="24" y="97" className="fill-current text-[10px] opacity-85">
            {isEnglish ? 'Basis from n − r special solutions' : '基为 Rx = 0 的 n − r 个特解'}
          </text>
        </g>

        {/* Node 5B: Output Space R^m (Bottom Right) */}
        <g transform="translate(462, 154)">
          <rect x="0" y="0" width="242" height="116" rx="10" className="fill-rose-500/12 stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.6" />
          <text x="121" y="21" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11.5px] font-bold">
            {isEnglish ? 'Output subspaces in ℝᵐ' : '输出侧子空间 ℝᵐ'}
          </text>
          <text x="14" y="44" className="fill-current font-mono text-[10.5px] font-bold">
            3. Col(A): dim = r
          </text>
          <text x="24" y="60" className="fill-current text-[10px] opacity-85">
            {isEnglish ? 'Basis from r pivot columns of A' : '基为 A 的 r 个主列'}
          </text>
          <text x="14" y="81" className="fill-current font-mono text-[10.5px] font-bold">
            4. Null(Aᵀ): dim = m − r
          </text>
          <text x="24" y="97" className="fill-current text-[10px] opacity-85">
            {isEnglish ? 'Bottom m − r rows of E, transposed' : '基为 E 底部 m − r 行的转置'}
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
