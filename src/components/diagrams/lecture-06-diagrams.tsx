import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function ColSpaceVsNullspaceAmbientDiagram({
  lang = 'zh',
  caption = '示意图对应本讲的 $4\\times3$ 矩阵。输入空间 $\\mathbb{R}^3$ 中的零空间是一条直线，由 $(1,1,-1)^T$ 张成。输出空间 $\\mathbb{R}^4$ 中的列空间是一个二维平面。矩阵 $A$ 将整条零空间直线映到输出原点。',
}: {
  lang?: 'en' | 'zh';
  caption?: string;
}) {
  const isEnglish = lang === 'en';

  return (
    <MathDiagram
      title={isEnglish ? 'Input and Output Spaces of the 4 × 3 Example' : '4 × 3 算例的输入与输出空间'}
      caption={caption}
    >
      <svg
        viewBox="0 0 710 265"
        className="w-full max-w-[710px] select-none text-foreground"
        role="img"
        aria-label={isEnglish ? 'Schematic of the nullspace line in R3 and column-space plane in R4 with sample mappings' : '零空间直线位于三维输入空间，列空间平面位于四维输出空间。箭头给出两个输入的像。'}
      >
        <defs>
          <marker id="l06-arrow-map" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="l06-arrow-blue" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
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
            {isEnglish ? 'Input space ℝ³ (3 unknowns)' : '输入空间 ℝ³（3 个未知数）'}
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
            Null(A) ⊆ ℝ³
          </text>

          {/* Sample vector x_n in Null(A) */}
          <circle cx="180" cy="100" r="4.5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="195" y="112" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-semibold">
            s = (1, 1, −1)ᵀ
          </text>

          {/* Origin 0 in R^n */}
          <circle cx="142" cy="128" r="4.5" className="fill-current" />
          <text x="129" y="143" className="fill-current font-mono text-[10.5px] font-bold">0</text>

          {/* Generic input vector x */}
          <circle cx="96" cy="84" r="4.5" className="fill-blue-600 dark:fill-blue-400" />
          <text x="82" y="76" className="fill-blue-600 dark:fill-blue-400 font-mono text-[11px] font-semibold">
            x = (1, 0, 0)ᵀ
          </text>

          <text x="142" y="213" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-medium">
            {isEnglish ? 'Directions that A sends to zero' : '刻画齐次方程 Ax = 0 的解自由度'}
          </text>
        </g>

        {/* ================= MAPPING ARROWS ACROSS A ================= */}
        {/* Top curved arrow: x -> Ax in Col(A) */}
        <path
          d="M 116 102 C 250 38, 430 38, 533 110"
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
          d="M 200 118 C 305 172, 425 178, 548 144"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2.3"
          markerEnd="url(#l06-arrow-map)"
        />
        <rect x="307" y="138" width="98" height="22" rx="6" className="fill-background stroke-emerald-500/50" />
        <text x="356" y="153" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold">
          {isEnglish ? 'Maps to 0' : '全部坍缩至 0!'}
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
            {isEnglish ? 'Output space ℝ⁴ (4 equations)' : '输出空间 ℝ⁴（4 个方程）'}
          </text>

          {/* Tilted 2D plane representing Col(A) inside R^m */}
          <polygon
            points="44,158 118,68 242,88 168,178"
            className="fill-blue-500/15 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
          />
          <text x="190" y="79" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold">
            Col(A) ⊆ ℝ⁴
          </text>

          {/* Origin 0 in R^m */}
          <circle cx="143" cy="126" r="5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="152" y="139" className="fill-current font-mono text-[10.5px] font-bold">0 = As</text>

          {/* Reachable b_1 in Col(A) */}
          <circle cx="128" cy="92" r="4.5" className="fill-blue-600 dark:fill-blue-400" />
          <text x="128" y="109" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-semibold">
            Ax = (1, 2, 3, 4)ᵀ
          </text>

          {/* Unreachable b_2 outside Col(A) */}
          <line x1="143" y1="126" x2="72" y2="68" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="72" cy="68" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
          <text x="72" y="56" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[10px] font-bold">
            (1, 0, 0, 0)ᵀ ∉ Col(A)
          </text>

          <text x="142" y="213" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-medium">
            {isEnglish ? 'Reachable right-hand sides' : '刻画非齐次方程 Ax = b 何时有解'}
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
