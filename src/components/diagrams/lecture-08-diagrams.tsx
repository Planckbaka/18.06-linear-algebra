import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function AffineSolutionAndFourRankCasesDiagram({
  caption = '左图（$\\mathbb{R}^3$ 通解几何）：齐次方程 $A\\mathbf{x}=\\mathbf{0}$ 的零空间 $\\operatorname{Null}(A)$ 是穿过原点的子空间直线；而非齐次方程 $A\\mathbf{x}=\\mathbf{b}$（$\\mathbf{b}\\neq\\mathbf{0}$）的完整解集 $\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_n$ 是将零空间整体平移特解向量 $\\mathbf{x}_p$ 后的**平行仿射直线（不过原点，绝非子空间！）**。右图：按秩 $r$ 与行列维度 $(m, n)$ 划分的四类矩阵全景表。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Shifted Nullspace Geometry (x = x_p + x_n) & The Four Rank Cases"
      caption={caption}
    >
      <svg
        viewBox="0 0 720 280"
        className="w-full max-w-[720px] select-none text-foreground"
        role="img"
        aria-label="Affine shifted nullspace x_p + Null(A) versus the four rank regimes of m by n matrices"
      >
        <defs>
          <marker id="l08-blue" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker id="l08-emerald" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="l08-rose" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* ================= LEFT PANEL: AFFINE SHIFT x_p + Null(A) ================= */}
        <g transform="translate(18, 16)">
          <rect x="0" y="0" width="318" height="248" rx="12" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.18" />
          <text x="159" y="23" textAnchor="middle" className="fill-current text-[12.5px] font-bold">
            (a) 通解几何：平移零空间 x_p + Null(A)
          </text>

          {/* Coordinate axes */}
          <line x1="36" y1="168" x2="282" y2="168" stroke="currentColor" strokeOpacity="0.32" />
          <line x1="128" y1="222" x2="128" y2="46" stroke="currentColor" strokeOpacity="0.32" />
          <circle cx="128" cy="168" r="4" className="fill-current" />
          <text x="115" y="182" className="fill-current font-mono text-[10.5px] font-bold">0</text>

          {/* True Subspace: Null(A) through 0 */}
          <line x1="48" y1="208" x2="268" y2="98" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.6" />
          <text x="235" y="133" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold">
            Null(A) (Ax_n = 0)
          </text>

          {/* x_n vector on Null(A) */}
          <line x1="128" y1="168" x2="198" y2="133" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.4" markerEnd="url(#l08-emerald)" />
          <text x="166" y="162" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-semibold">
            x_n
          </text>

          {/* Shifted Affine Line: x_p + Null(A) */}
          <line
            x1="48"
            y1="146"
            x2="268"
            y2="36"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="2.8"
            strokeDasharray="6 3"
          />
          <text x="116" y="56" className="fill-rose-600 dark:fill-rose-400 font-mono text-[10.5px] font-bold">
            解集 x_p + Null(A) (仿射集!)
          </text>

          {/* Particular solution x_p from 0 */}
          <line x1="128" y1="168" x2="128" y2="106" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.4" markerEnd="url(#l08-blue)" />
          <text x="102" y="138" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">
            x_p
          </text>

          {/* Shift arrow x_n on top of x_p */}
          <line x1="128" y1="106" x2="198" y2="71" className="stroke-emerald-600/80 dark:stroke-emerald-400/80" strokeWidth="2" markerEnd="url(#l08-emerald)" />

          {/* Total solution x = x_p + x_n */}
          <line x1="128" y1="168" x2="198" y2="71" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.3" markerEnd="url(#l08-rose)" />
          <circle cx="198" cy="71" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
          <text x="242" y="76" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[10.5px] font-bold">
            x = x_p + x_n
          </text>

          <text x="159" y="236" textAnchor="middle" className="fill-current text-[10px] opacity-75">
            b ≠ 0 时解集平行于 Null(A)，但绝不过原点 0!
          </text>
        </g>

        {/* ================= RIGHT PANEL: FOUR RANK CASES 2x2 GRID ================= */}
        <g transform="translate(352, 16)">
          <text x="175" y="18" textAnchor="middle" className="fill-current text-[12.5px] font-bold">
            (b) 矩阵秩 r 的四大家族全景表
          </text>

          {/* Case 1: r = m = n */}
          <g transform="translate(0, 30)">
            <rect x="0" y="0" width="168" height="102" rx="9" className="fill-blue-500/[0.06] stroke-blue-500/40" />
            <text x="84" y="20" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">
              ① 双满秩 r = m = n
            </text>
            <rect x="18" y="32" width="38" height="38" rx="4" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" />
            <text x="37" y="55" textAnchor="middle" className="fill-current font-mono text-[11px] font-bold">R = I</text>
            <text x="112" y="48" textAnchor="middle" className="fill-current text-[10.5px] font-semibold">可逆方阵</text>
            <text x="112" y="66" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold">
              恒有唯一解 (1)
            </text>
            <text x="84" y="90" textAnchor="middle" className="fill-current text-[9.5px] opacity-75">
              0 自由变量 · 0 全零行
            </text>
          </g>

          {/* Case 2: Full Column Rank r = n < m */}
          <g transform="translate(180, 30)">
            <rect x="0" y="0" width="170" height="102" rx="9" className="fill-emerald-500/[0.06] stroke-emerald-500/40" />
            <text x="85" y="20" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-bold">
              ② 列满秩 r = n &lt; m
            </text>
            {/* Tall thin matrix [I; 0] */}
            <rect x="18" y="28" width="28" height="24" rx="3" className="fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400" />
            <text x="32" y="44" textAnchor="middle" className="fill-current font-mono text-[10px] font-bold">I</text>
            <rect x="18" y="52" width="28" height="22" rx="3" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.3" />
            <text x="32" y="66" textAnchor="middle" className="fill-current font-mono text-[10px] opacity-65">0</text>

            <text x="108" y="48" textAnchor="middle" className="fill-current text-[10.5px] font-semibold">高瘦矩阵 Null={"{0}"}</text>
            <text x="108" y="66" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold">
              0 个 或 1 个解
            </text>
            <text x="85" y="90" textAnchor="middle" className="fill-current text-[9.5px] opacity-75">
              有解必唯一（无自由变量）
            </text>
          </g>

          {/* Case 3: Full Row Rank r = m < n */}
          <g transform="translate(0, 144)">
            <rect x="0" y="0" width="168" height="104" rx="9" className="fill-amber-500/[0.06] stroke-amber-500/40" />
            <text x="84" y="20" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 font-mono text-[11px] font-bold">
              ③ 行满秩 r = m &lt; n
            </text>
            {/* Wide short matrix [I  F] */}
            <rect x="14" y="38" width="26" height="26" rx="3" className="fill-amber-500/25 stroke-amber-600 dark:stroke-amber-400" />
            <text x="27" y="55" textAnchor="middle" className="fill-current font-mono text-[10px] font-bold">I</text>
            <rect x="40" y="38" width="24" height="26" rx="3" className="fill-amber-500/15 stroke-amber-600/70" />
            <text x="52" y="55" textAnchor="middle" className="fill-current font-mono text-[10px]">F</text>

            <text x="117" y="48" textAnchor="middle" className="fill-current text-[10.5px] font-semibold">矮胖矩阵 Col=ℝᵐ</text>
            <text x="117" y="66" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 font-mono text-[10.5px] font-bold">
              恒有 ∞ 多解!
            </text>
            <text x="84" y="91" textAnchor="middle" className="fill-current text-[9.5px] opacity-75">
              无全零行，对一切 b 可解
            </text>
          </g>

          {/* Case 4: Rank Deficient r < m, r < n */}
          <g transform="translate(180, 144)">
            <rect x="0" y="0" width="170" height="104" rx="9" className="fill-rose-500/[0.05] stroke-rose-500/35" />
            <text x="85" y="20" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11px] font-bold">
              ④ 秩亏缺 r &lt; min(m, n)
            </text>
            <rect x="14" y="33" width="24" height="20" rx="2" className="fill-rose-500/20 stroke-rose-600/70" />
            <text x="26" y="47" textAnchor="middle" className="fill-current font-mono text-[9px] font-bold">I</text>
            <rect x="38" y="33" width="22" height="20" rx="2" className="fill-rose-500/10 stroke-rose-600/50" />
            <text x="49" y="47" textAnchor="middle" className="fill-current font-mono text-[9px]">F</text>
            <rect x="14" y="53" width="46" height="16" rx="2" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.3" />
            <text x="37" y="65" textAnchor="middle" className="fill-current font-mono text-[9px] opacity-65">0</text>

            <text x="116" y="48" textAnchor="middle" className="fill-current text-[10.5px] font-semibold">既有全零行又有自由列</text>
            <text x="116" y="66" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[10.5px] font-bold">
              0 个 或 ∞ 多解
            </text>
            <text x="85" y="91" textAnchor="middle" className="fill-current text-[9.5px] opacity-75">
              绝不可能出现唯一解!
            </text>
          </g>
        </g>
      </svg>
    </MathDiagram>
  );
}
