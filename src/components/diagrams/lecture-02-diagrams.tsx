import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function EliminationPipelineDiagram({
  caption = '高斯消元的矩阵语言全景：左乘初等消元矩阵 $E_{21}$（第 $(2,1)$ 位为 $-\\ell_{21}=-3$）等价于对右矩阵施加以**行为单位**的线性组合 $R_2 \\leftarrow R_2 - 3R_1$；再左乘 $E_{32}$ 即可将 $A$ 化为上三角矩阵 $U$（蓝色高亮格为三个非零主元 $1, 2, 5$）。利用矩阵乘法结合律，分步左乘可压缩为总消元算子 $(E_{32}E_{21})A = U$。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Gaussian Elimination via Elementary Matrices: (E₃₂ E₂₁) A = U"
      caption={caption}
    >
      <svg
        viewBox="0 0 720 285"
        className="w-full max-w-[720px] select-none text-foreground"
        role="img"
        aria-label="Step-by-step Gaussian elimination from A to U via E21 and E32"
      >
        <defs>
          <marker
            id="l02-arrow"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l02-arrow-emerald"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
        </defs>

        {/* ================= STAGE 1: MATRIX A ================= */}
        <g transform="translate(24, 38)">
          <text x="63" y="-12" textAnchor="middle" className="fill-current text-[12px] font-semibold">
            原系数矩阵 A
          </text>
          <rect
            x="0"
            y="0"
            width="126"
            height="118"
            rx="8"
            fill="currentColor"
            fillOpacity="0.025"
            stroke="currentColor"
            strokeOpacity="0.25"
          />
          {/* Bracket accents */}
          <path d="M 10 8 L 4 8 L 4 110 L 10 110" fill="none" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.6" />
          <path d="M 116 8 L 122 8 L 122 110 L 116 110" fill="none" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.6" />

          {/* Pivot 1 box */}
          <rect x="14" y="13" width="28" height="24" rx="4" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.4" />
          {/* Target entry (2,1) = 3 */}
          <rect x="14" y="47" width="28" height="24" rx="4" className="fill-rose-500/20 stroke-rose-600 dark:stroke-rose-400" strokeDasharray="3 2" strokeWidth="1.3" />

          {/* Row 1 */}
          <text x="28" y="30" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[13px] font-bold">1</text>
          <text x="63" y="30" textAnchor="middle" className="fill-current font-mono text-[13px]">2</text>
          <text x="98" y="30" textAnchor="middle" className="fill-current font-mono text-[13px]">1</text>
          {/* Row 2 */}
          <text x="28" y="64" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[13px] font-bold">3</text>
          <text x="63" y="64" textAnchor="middle" className="fill-current font-mono text-[13px]">8</text>
          <text x="98" y="64" textAnchor="middle" className="fill-current font-mono text-[13px]">1</text>
          {/* Row 3 */}
          <text x="28" y="98" textAnchor="middle" className="fill-current font-mono text-[13px] opacity-65">0</text>
          <text x="63" y="98" textAnchor="middle" className="fill-current font-mono text-[13px]">4</text>
          <text x="98" y="98" textAnchor="middle" className="fill-current font-mono text-[13px]">1</text>
        </g>

        {/* Arrow 1: Left-multiply E_21 */}
        <g transform="translate(158, 72)">
          <line x1="4" y1="25" x2="100" y2="25" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2" markerEnd="url(#l02-arrow)" />
          <text x="52" y="10" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-mono text-[11px] font-semibold">
            左乘 E₂₁
          </text>
          <text x="52" y="43" textAnchor="middle" className="fill-current text-[10px] opacity-75">
            R₂ ← R₂ − 3R₁
          </text>
          <text x="52" y="58" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[10px]">
            (ℓ₂₁ = 3)
          </text>
        </g>

        {/* ================= STAGE 2: E_21 A ================= */}
        <g transform="translate(270, 38)">
          <text x="63" y="-12" textAnchor="middle" className="fill-current text-[12px] font-semibold">
            中间态 E₂₁A
          </text>
          <rect
            x="0"
            y="0"
            width="126"
            height="118"
            rx="8"
            fill="currentColor"
            fillOpacity="0.025"
            stroke="currentColor"
            strokeOpacity="0.25"
          />
          <path d="M 10 8 L 4 8 L 4 110 L 10 110" fill="none" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.6" />
          <path d="M 116 8 L 122 8 L 122 110 L 116 110" fill="none" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.6" />

          {/* Pivot 1 & Pivot 2 */}
          <rect x="14" y="13" width="28" height="24" rx="4" className="fill-blue-500/15 stroke-blue-600/60 dark:stroke-blue-400/60" strokeWidth="1.2" />
          <rect x="49" y="47" width="28" height="24" rx="4" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.4" />
          {/* Target entry (3,2) = 4 */}
          <rect x="49" y="81" width="28" height="24" rx="4" className="fill-rose-500/20 stroke-rose-600 dark:stroke-rose-400" strokeDasharray="3 2" strokeWidth="1.3" />

          {/* Row 1 */}
          <text x="28" y="30" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[13px] font-bold">1</text>
          <text x="63" y="30" textAnchor="middle" className="fill-current font-mono text-[13px]">2</text>
          <text x="98" y="30" textAnchor="middle" className="fill-current font-mono text-[13px]">1</text>
          {/* Row 2 */}
          <text x="28" y="64" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[13px] font-bold">0</text>
          <text x="63" y="64" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[13px] font-bold">2</text>
          <text x="98" y="64" textAnchor="middle" className="fill-current font-mono text-[13px]">−2</text>
          {/* Row 3 */}
          <text x="28" y="98" textAnchor="middle" className="fill-current font-mono text-[13px] opacity-65">0</text>
          <text x="63" y="98" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[13px] font-bold">4</text>
          <text x="98" y="98" textAnchor="middle" className="fill-current font-mono text-[13px]">1</text>
        </g>

        {/* Arrow 2: Left-multiply E_32 */}
        <g transform="translate(404, 72)">
          <line x1="4" y1="25" x2="100" y2="25" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" markerEnd="url(#l02-arrow-emerald)" />
          <text x="52" y="10" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[11px] font-semibold">
            左乘 E₃₂
          </text>
          <text x="52" y="43" textAnchor="middle" className="fill-current text-[10px] opacity-75">
            R₃ ← R₃ − 2R₂
          </text>
          <text x="52" y="58" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[10px]">
            (ℓ₃₂ = 2)
          </text>
        </g>

        {/* ================= STAGE 3: UPPER TRIANGULAR U ================= */}
        <g transform="translate(518, 38)">
          <text x="86" y="-12" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-bold">
            上三角矩阵 U = E₃₂E₂₁A
          </text>
          <rect
            x="16"
            y="0"
            width="140"
            height="118"
            rx="8"
            className="fill-blue-500/[0.05] stroke-blue-500/40"
          />
          <path d="M 26 8 L 20 8 L 20 110 L 26 110" fill="none" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.6" />
          <path d="M 146 8 L 152 8 L 152 110 L 146 110" fill="none" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.6" />

          {/* Staircase line */}
          <path
            d="M 26 42 L 64 42 L 64 76 L 104 76 L 104 108"
            fill="none"
            className="stroke-amber-500/80"
            strokeWidth="1.8"
            strokeDasharray="4 2"
          />

          {/* Three Pivot highlights */}
          <rect x="29" y="13" width="28" height="24" rx="4" className="fill-blue-500/25 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.5" />
          <rect x="70" y="47" width="28" height="24" rx="4" className="fill-blue-500/25 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.5" />
          <rect x="111" y="81" width="28" height="24" rx="4" className="fill-blue-500/25 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.5" />

          {/* Row 1 */}
          <text x="43" y="30" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[13px] font-bold">1</text>
          <text x="84" y="30" textAnchor="middle" className="fill-current font-mono text-[13px]">2</text>
          <text x="125" y="30" textAnchor="middle" className="fill-current font-mono text-[13px]">1</text>
          {/* Row 2 */}
          <text x="43" y="64" textAnchor="middle" className="fill-current font-mono text-[13px] opacity-45">0</text>
          <text x="84" y="64" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[13px] font-bold">2</text>
          <text x="125" y="64" textAnchor="middle" className="fill-current font-mono text-[13px]">−2</text>
          {/* Row 3 */}
          <text x="43" y="98" textAnchor="middle" className="fill-current font-mono text-[13px] opacity-45">0</text>
          <text x="84" y="98" textAnchor="middle" className="fill-current font-mono text-[13px] opacity-45">0</text>
          <text x="125" y="98" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[13px] font-bold">5</text>
        </g>

        {/* ================= BOTTOM DUALITY BAR: LEFT VS RIGHT MULTIPLICATION ================= */}
        <g transform="translate(24, 184)">
          <rect x="0" y="0" width="322" height="82" rx="9" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.15" />
          <text x="161" y="22" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[12px] font-bold">
            左乘 E · A  ⟹  行操作 (Row Operations)
          </text>
          <text x="161" y="45" textAnchor="middle" className="fill-current font-mono text-[11px] opacity-85">
            row_i(EA) = (row_i of E) · A
          </text>
          <text x="161" y="66" textAnchor="middle" className="fill-current text-[10.5px] opacity-70">
            保持解集与零空间 Null(A)，但会改变列空间 Col(A)!
          </text>
        </g>

        <g transform="translate(368, 184)">
          <rect x="0" y="0" width="328" height="82" rx="9" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.15" />
          <text x="164" y="22" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[12px] font-bold">
            右乘 A · C  ⟹  列操作 (Column Operations)
          </text>
          <text x="164" y="45" textAnchor="middle" className="fill-current font-mono text-[11px] opacity-85">
            col_j(AC) = A · (col_j of C)
          </text>
          <text x="164" y="66" textAnchor="middle" className="fill-current text-[10.5px] opacity-70">
            保持列空间 Col(A)，但会改变方程组的未知数坐标!
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
