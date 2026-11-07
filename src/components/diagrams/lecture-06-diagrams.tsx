import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function ColSpaceVsNullspaceAmbientDiagram({
  caption = '矩阵 $A \\in \\mathbb{R}^{m\\times n}$ 的前两个基本子空间生活在**两个截然不同的宇宙**中：左侧输入空间 $\\mathbb{R}^n$ 中的**零空间 $\\operatorname{Null}(A)$** 收集所有被 $A$ 压缩至零点 $\\mathbf{0}$ 的输入向量（决定解是否唯一）；右侧输出空间 $\\mathbb{R}^m$ 中的**列空间 $\\operatorname{Col}(A)$** 收集所有列向量的线性组合（决定 $A\\mathbf{x}=\\mathbf{b}$ 是否有解）。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Two Distinct Ambient Worlds: Null(A) ⊆ ℝⁿ vs. Col(A) ⊆ ℝᵐ"
      caption={caption}
    >
      <svg
        viewBox="0 0 710 265"
        className="w-full max-w-[710px] select-none text-foreground"
        role="img"
        aria-label="Mapping from input space Rn containing Null(A) to output space Rm containing Col(A)"
      >
        <defs>
          <marker id="l06-arrow-map" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="l06-arrow-blue" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
        </defs>

        {/* ================= LEFT WORLD: INPUT SPACE R^n ================= */}
        <g transform="translate(20, 18)">
          <rect
            x="0"
            y="0"
            width="285"
            height="226"
            rx="14"
            fill="currentColor"
            fillOpacity="0.025"
            stroke="currentColor"
            strokeOpacity="0.2"
          />
          <text x="142" y="24" textAnchor="middle" className="fill-current text-[13px] font-bold">
            输入空间 ℝⁿ（n = 列数 / 未知数个数）
          </text>

          {/* Axes */}
          <line x1="42" y1="128" x2="246" y2="128" stroke="currentColor" strokeOpacity="0.3" />
          <line x1="142" y1="196" x2="142" y2="48" stroke="currentColor" strokeOpacity="0.3" />

          {/* Nullspace line through origin */}
          <line
            x1="66"
            y1="184"
            x2="218"
            y2="72"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="3.2"
          />
          <polygon
            points="62,178 70,190 222,78 214,66"
            className="fill-emerald-500/15"
          />
          <text x="202" y="64" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11.5px] font-bold">
            Null(A) ⊆ ℝⁿ
          </text>

          {/* Sample vector x_n in Null(A) */}
          <circle cx="182" cy="98.5" r="4.5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="208" y="108" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-semibold">
            x_n (Ax_n = 0)
          </text>

          {/* Origin 0 in R^n */}
          <circle cx="142" cy="128" r="4.5" className="fill-current" />
          <text x="129" y="143" className="fill-current font-mono text-[10.5px] font-bold">0</text>

          {/* Generic input vector x */}
          <circle cx="96" cy="84" r="4.5" className="fill-blue-600 dark:fill-blue-400" />
          <text x="82" y="76" className="fill-blue-600 dark:fill-blue-400 font-mono text-[11px] font-semibold">
            x ∈ ℝⁿ
          </text>

          <text x="142" y="213" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-medium">
            刻画齐次方程 Ax = 0 的解自由度
          </text>
        </g>

        {/* ================= MAPPING ARROWS ACROSS A ================= */}
        {/* Top curved arrow: x -> Ax in Col(A) */}
        <path
          d="M 122 98 C 250 38, 430 38, 526 98"
          fill="none"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2"
          strokeDasharray="5 3"
          markerEnd="url(#l06-arrow-blue)"
        />
        <text x="355" y="45" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">
          x  ⟼  Ax ∈ Col(A)
        </text>

        {/* Bottom curved arrow: entire Null(A) crushed to 0 in R^m */}
        <path
          d="M 206 118 C 305 162, 425 168, 540 147"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2.3"
          markerEnd="url(#l06-arrow-map)"
        />
        <rect x="307" y="138" width="98" height="22" rx="6" className="fill-background stroke-emerald-500/50" />
        <text x="356" y="153" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold">
          全部坍缩至 0!
        </text>

        {/* ================= RIGHT WORLD: OUTPUT SPACE R^m ================= */}
        <g transform="translate(405, 18)">
          <rect
            x="0"
            y="0"
            width="285"
            height="226"
            rx="14"
            fill="currentColor"
            fillOpacity="0.025"
            stroke="currentColor"
            strokeOpacity="0.2"
          />
          <text x="142" y="24" textAnchor="middle" className="fill-current text-[13px] font-bold">
            输出空间 ℝᵐ（m = 行数 / 方程个数）
          </text>

          {/* Tilted 2D plane representing Col(A) inside R^m */}
          <polygon
            points="44,158 118,68 242,88 168,178"
            className="fill-blue-500/15 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
          />
          <text x="190" y="79" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold">
            Col(A) ⊆ ℝᵐ
          </text>

          {/* Origin 0 in R^m */}
          <circle cx="143" cy="126" r="5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="152" y="139" className="fill-current font-mono text-[10.5px] font-bold">0 = A x_n</text>

          {/* Reachable b_1 in Col(A) */}
          <circle cx="128" cy="92" r="4.5" className="fill-blue-600 dark:fill-blue-400" />
          <text x="128" y="109" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-semibold">
            b₁ ∈ Col(A) (有解)
          </text>

          {/* Unreachable b_2 outside Col(A) */}
          <line x1="143" y1="126" x2="72" y2="68" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="72" cy="68" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
          <text x="72" y="56" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[10px] font-bold">
            b₂ ∉ Col(A) (无解!)
          </text>

          <text x="142" y="213" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-medium">
            刻画非齐次方程 Ax = b 何时有解
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
