import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function Module1SynthesisMapDiagram({
  caption = '**Module I（第 01–12 讲）全局知识网络主干图**：一切问题从 $m\\times n$ 矩阵 $A$ 出发，向上经消元产生计算引擎 $PA = LU$（复杂度 $\\mathcal{O}(n^3)$），向右经 Gauss-Jordan 化为简化行阶梯形 $[R \\mid E]$ 锁定唯一核心不变量 **秩 $\\operatorname{rank}(A) = r$**，进而统摄四个基本子空间的维数、基与 $A\\mathbf{x}=\\mathbf{b}$ 的仿射通解 $\\mathbf{x}_p + \\mathbf{x}_n$！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Module I Master Synthesis Map: Elimination, Rank r & The Four Subspaces"
      caption={caption}
    >
      <svg
        viewBox="0 0 730 295"
        className="w-full max-w-[730px] select-none text-foreground"
        role="img"
        aria-label="Master concept map of Module I connecting matrix A, PA=LU, RREF [R|E], rank r, Four Fundamental Subspaces, and Ax=b complete solution"
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
            矩阵 A ∈ ℝᵐˣⁿ
          </text>
          <text x="71" y="45" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            行图像 vs. 列图像
          </text>
          <text x="71" y="64" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            A = ∑ₖ₌₁ʳ uₖ vₖᵀ
          </text>
          <text x="71" y="82" textAnchor="middle" className="fill-current text-[10px] opacity-75">
            (r 张秩 1 外积切片)
          </text>
        </g>

        {/* Arrow A -> PA=LU */}
        <path d="M 97 98 L 97 54 L 198 54" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.7" markerEnd="url(#l13-flow-arrow)" />

        {/* Node 2: PA = LU (Top Center) */}
        <g transform="translate(204, 22)">
          <rect x="0" y="0" width="218" height="64" rx="9" className="fill-amber-500/15 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.6" />
          <text x="109" y="23" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[12px] font-bold">
            数值消元分解: PA = LU
          </text>
          <text x="109" y="42" textAnchor="middle" className="fill-current font-mono text-[10px]">
            L 存无污染乘数 ℓᵢⱼ · Pᵀ = P⁻¹
          </text>
          <text x="109" y="56" textAnchor="middle" className="fill-current font-mono text-[10px] opacity-80">
            消元 O(n³/3) ≫ 回代 O(n²)
          </text>
        </g>

        {/* Arrow A -> [R | E] & Rank r */}
        <line x1="168" y1="146" x2="202" y2="146" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.8" markerEnd="url(#l13-flow-arrow)" />

        {/* Node 3: RREF [R | E] & Rank r (Center Hub) */}
        <g transform="translate(208, 102)">
          <rect x="0" y="0" width="210" height="88" rx="10" className="fill-emerald-500/18 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.9" />
          <text x="105" y="23" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[12.5px] font-bold">
            核心枢纽: Rank(A) = r
          </text>
          <text x="105" y="43" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            [A | Iₘ] ⟶ [R | E]  (EA = R)
          </text>
          <text x="105" y="62" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            R = [Iᵣ  F ; 0  0],  N = [-F ; Iₙ₋ᵣ]
          </text>
          <text x="105" y="79" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-semibold">
            0 ≤ r ≤ min(m, n), rank(AB) ≤ min
          </text>
        </g>

        {/* Arrow Center -> Bottom Ax=b */}
        <line x1="313" y1="190" x2="313" y2="210" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.7" markerEnd="url(#l13-flow-arrow)" />

        {/* Node 4: Complete Solution Ax = b (Bottom Center) */}
        <g transform="translate(188, 215)">
          <rect x="0" y="0" width="250" height="56" rx="9" className="fill-purple-500/15 stroke-purple-600 dark:stroke-purple-400" strokeWidth="1.6" />
          <text x="125" y="21" textAnchor="middle" className="fill-purple-800 dark:fill-purple-200 font-mono text-[11.5px] font-bold">
            Ax = b 可解 ⟺ b ∈ Col(A) ⟺ E_底 b = 0
          </text>
          <text x="125" y="42" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            通解 x = x_p + x_n  (平移仿射流形，非子空间!)
          </text>
        </g>

        {/* Arrows Center -> Right Four Subspaces */}
        <path d="M 418 128 L 456 84" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.7" markerEnd="url(#l13-flow-arrow)" />
        <path d="M 418 164 L 456 204" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.7" markerEnd="url(#l13-flow-arrow)" />

        {/* Node 5A: Input Space R^n (Top Right) */}
        <g transform="translate(462, 24)">
          <rect x="0" y="0" width="242" height="114" rx="10" className="fill-blue-500/12 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.6" />
          <text x="121" y="21" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold">
            输入空间 ℝⁿ (行变换保持不变!)
          </text>
          <text x="14" y="44" className="fill-current font-mono text-[10.5px] font-bold">
            1. Row(A) = Row(R): dim = r
          </text>
          <text x="24" y="60" className="fill-current text-[10px] opacity-85">
            基: R 的前 r 个非零行 (转置竖写)
          </text>
          <text x="14" y="81" className="fill-current font-mono text-[10.5px] font-bold">
            2. Null(A) = Null(R): dim = n − r
          </text>
          <text x="24" y="97" className="fill-current text-[10px] opacity-85">
            基: N 的 n − r 个自由变量特解列
          </text>
        </g>

        {/* Node 5B: Output Space R^m (Bottom Right) */}
        <g transform="translate(462, 154)">
          <rect x="0" y="0" width="242" height="116" rx="10" className="fill-rose-500/12 stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.6" />
          <text x="121" y="21" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11.5px] font-bold">
            输出空间 ℝᵐ (行变换改变方向!)
          </text>
          <text x="14" y="44" className="fill-current font-mono text-[10.5px] font-bold">
            3. Col(A) ≠ Col(R): dim = r
          </text>
          <text x="24" y="60" className="fill-current text-[10px] opacity-85">
            基: 必须回原矩阵 A 提取 r 个主列!
          </text>
          <text x="14" y="81" className="fill-current font-mono text-[10.5px] font-bold">
            4. Null(Aᵀ): dim = m − r
          </text>
          <text x="24" y="97" className="fill-current text-[10px] opacity-85">
            基: 记录阵 E 的底部 m − r 行 (转置)
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
