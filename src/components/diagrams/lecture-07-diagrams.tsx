import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function RrefNullspaceBlockDiagram({
  caption = '简化行阶梯形 $R = \\operatorname{rref}(A)$ 与零空间基矩阵 $N$ 的解剖学对应（假设列已按主列在前、自由列在后重排）：当 $R$ 化为分块标准形 $\\begin{bmatrix} I_r & F \\\\ 0 & 0 \\end{bmatrix}$ 时，只需将右上角自由块 $F \\in \\mathbb{R}^{r\\times(n-r)}$ **整体取负号搬到上方、下方垫上单位阵 $I_{n-r}$**，就自动拼出零空间矩阵 $N = \\begin{bmatrix} -F \\\\ I_{n-r} \\end{bmatrix}$，其 $n-r$ 列正是 $n-r$ 个线性无关特解，因为分块乘积 $RN = -I_r F + F I_{n-r} = 0$ 恒成立！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Block Anatomy of R = rref(A) and the Nullspace Matrix N = [−F; I]"
      caption={caption}
    >
      <svg
        viewBox="0 0 710 265"
        className="w-full max-w-[710px] select-none text-foreground"
        role="img"
        aria-label="Block matrix transformation from R = [I F; 0 0] to Nullspace matrix N = [-F; I] showing RN = 0"
      >
        <defs>
          <marker id="l07-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
        </defs>

        {/* ================= LEFT: R = [I_r  F;  0  0] ================= */}
        <g transform="translate(26, 36)">
          <text x="120" y="-12" textAnchor="middle" className="fill-current text-[12.5px] font-bold">
            简化行阶梯形 R ∈ ℝᵐˣⁿ（秩 = r）
          </text>

          {/* Outer matrix R */}
          <rect x="0" y="14" width="240" height="162" rx="8" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.4" />

          {/* Column dimension labels */}
          <text x="68" y="8" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-mono text-[10.5px] font-semibold">
            r 个主列 (Pivot)
          </text>
          <text x="186" y="8" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[10.5px] font-semibold">
            n−r 个自由列 (Free)
          </text>

          {/* Top-left block I_r */}
          <rect x="10" y="24" width="116" height="86" rx="6" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.5" />
          <line x1="22" y1="34" x2="114" y2="98" className="stroke-blue-600/45 dark:stroke-blue-400/45" strokeWidth="2" strokeDasharray="4 3" />
          <text x="68" y="72" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[16px] font-bold">
            I_r
          </text>
          <text x="68" y="92" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px]">
            (r × r 单位块)
          </text>

          {/* Top-right block F */}
          <rect x="134" y="24" width="96" height="86" rx="6" className="fill-amber-500/25 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.6" />
          <text x="182" y="72" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[16px] font-bold">
            F
          </text>
          <text x="182" y="92" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[10px]">
            (r × (n−r) 自由块)
          </text>

          {/* Bottom zero rows */}
          <rect x="10" y="118" width="220" height="48" rx="5" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.18" strokeDasharray="4 3" />
          <text x="120" y="147" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-60">
            0  (m − r 个全零行)
          </text>
        </g>

        {/* Curved transfer arrow from F to -F */}
        <path
          d="M 244 82 C 306 42, 342 42, 386 78"
          fill="none"
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="2.2"
          strokeDasharray="5 3"
          markerEnd="url(#l07-arrow)"
        />
        <text x="318" y="42" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[11px] font-bold">
          取负号 F ⟼ −F
        </text>

        {/* ================= MIDDLE: N = [-F; I_{n-r}] ================= */}
        <g transform="translate(394, 24)">
          <text x="64" y="-2" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12.5px] font-bold">
            零空间矩阵 N ∈ ℝⁿˣ⁽ⁿ⁻ʳ⁾
          </text>
          <rect x="6" y="12" width="116" height="186" rx="8" className="fill-emerald-500/[0.05] stroke-emerald-600/50 dark:stroke-emerald-400/50" strokeWidth="1.5" />

          {/* Top block -F */}
          <rect x="16" y="22" width="96" height="82" rx="6" className="fill-amber-500/25 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.5" />
          <text x="64" y="65" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[16px] font-bold">
            −F
          </text>
          <text x="64" y="84" textAnchor="middle" className="fill-current font-mono text-[9.5px] opacity-80">
            主变量自动反解
          </text>

          {/* Bottom block I_{n-r} */}
          <rect x="16" y="112" width="96" height="76" rx="6" className="fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.5" />
          <text x="64" y="152" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[15px] font-bold">
            I_(n−r)
          </text>
          <text x="64" y="171" textAnchor="middle" className="fill-current font-mono text-[9.5px] opacity-80">
            自由变量轮流取 1
          </text>
        </g>

        {/* ================= RIGHT: IDENTITY RN = 0 ================= */}
        <g transform="translate(534, 62)">
          <rect x="0" y="0" width="154" height="122" rx="10" fill="currentColor" fillOpacity="0.035" stroke="currentColor" strokeOpacity="0.18" />
          <text x="77" y="26" textAnchor="middle" className="fill-current font-mono text-[12px] font-bold">
            分块核验 R N = 0
          </text>
          <text x="77" y="54" textAnchor="middle" className="fill-current font-mono text-[11px]">
            I_r(−F) + F(I)
          </text>
          <text x="77" y="76" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[12px] font-bold">
            = −F + F = 0 !
          </text>
          <text x="77" y="103" textAnchor="middle" className="fill-current text-[10px] opacity-75">
            N 的 n−r 列即特解基!
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
