import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function LeastSquaresDualGeometryDiagram({
  caption = '最小二乘法（Least Squares Fitting）的**双重几何对偶世界**：左侧为**数据拟合空间（Data Space，$\\mathbb{R}^2$ 中的 $t$-$b$ 平面）**，展示三个观测点 $(1, 1)$、$(2, 2)$、$(3, 2)$ 与最优拟合直线 $\\hat{b}(t) = \\frac{2}{3} + \\frac{1}{2}t$，三条红色虚线为**竖直误差线段**（$e_1 = -\\frac{1}{6}$、$e_2 = +\\frac{1}{3}$、$e_3 = -\\frac{1}{6}$，端点恰为投影坐标 $p_1, p_2, p_3$）；右侧为**高维子空间几何（Subspace Space，$\\mathbb{R}^3$）**，观测向量 $\\mathbf{b} = (1, 2, 2)^T$ 垂直投影到二维列空间 $\\operatorname{Col}(A) = \\operatorname{span}\\{\\mathbf{1}, \\mathbf{t}\\}$ 产生垂足 $\\mathbf{p} = A\\hat{\\mathbf{x}}$，垂直误差 $\\mathbf{e} \\in \\operatorname{Null}(A^T)$ 垂直于列平面上的任意向量，对任意其他参数 $\\mathbf{x}$ 均满足直角三角形勾股关系 $\\|A\\mathbf{x} - \\mathbf{b}\\|_2^2 = \\|A\\mathbf{x} - \\mathbf{p}\\|_2^2 + \\|\\mathbf{e}\\|_2^2 \\ge \\|\\mathbf{e}\\|_2^2$！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="The Dual Geometry of Least Squares: Data Fitting Plane (R²) vs. Subspace Projection (R³)"
      caption={caption}
    >
      <svg
        viewBox="0 0 860 410"
        className="w-full max-w-[860px] select-none text-foreground"
        role="img"
        aria-label="Dual geometric view of least squares fitting comparing data space vertical errors and column space orthogonal projection"
      >
        <defs>
          <marker
            id="l16-arrow-blue"
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
            id="l16-arrow-emerald"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l16-arrow-rose"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
          <marker
            id="l16-arrow-amber"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l16-arrow-purple"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
        </defs>

        {/* Outer frame */}
        <rect
          x="8"
          y="8"
          width="844"
          height="394"
          rx="12"
          fill="currentColor"
          fillOpacity="0.015"
          stroke="currentColor"
          strokeOpacity="0.12"
        />

        {/* Central dashed divider */}
        <line
          x1="430"
          y1="20"
          x2="430"
          y2="390"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeDasharray="4 4"
        />

        {/* Center badge */}
        <g transform="translate(430, 205)">
          <rect
            x="-46"
            y="-12"
            width="92"
            height="24"
            rx="12"
            className="fill-background stroke-primary/30"
            strokeWidth="1.2"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            className="fill-primary font-mono text-[10.5px] font-bold"
          >
            对偶等价 ⟷
          </text>
        </g>

        {/* ============================================================== */}
        {/* LEFT PANEL: DATA SPACE (t-b plane, R^2) */}
        {/* ============================================================== */}
        <g transform="translate(20, 16)">
          {/* Header Title */}
          <text x="18" y="22" className="fill-foreground font-sans text-[13px] font-bold">
            ① 数据空间（Data Space · ℝ² 中的 t-b 平面）
          </text>
          <text x="18" y="38" className="fill-muted-foreground font-mono text-[10.5px]">
            三点观测与最优拟合直线 b̂(t) = 2/3 + 1/2 t · 最小化竖直残差平方和
          </text>

          {/* Coordinate Axes */}
          {/* Origin at (68, 320) */}
          {/* Horizontal axis (t): x goes from 68 to 380 */}
          <line
            x1="56"
            y1="320"
            x2="385"
            y2="320"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            markerEnd="url(#l16-arrow-blue)"
          />
          <text x="382" y="336" className="fill-foreground font-mono text-[11px] font-bold">
            t
          </text>

          {/* Vertical axis (b): y goes from 320 to 55 */}
          <line
            x1="68"
            y1="330"
            x2="68"
            y2="55"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            markerEnd="url(#l16-arrow-blue)"
          />
          <text x="56" y="52" className="fill-foreground font-mono text-[11px] font-bold">
            b
          </text>

          {/* Grid lines and ticks */}
          {/* t = 1 (x=143), t = 2 (x=218), t = 3 (x=293), t = 4 (x=368) */}
          {/* b = 1 (y=235), b = 2 (y=150), b = 3 (y=65) */}
          <line x1="143" y1="320" x2="143" y2="70" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="218" y1="320" x2="218" y2="70" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="293" y1="320" x2="293" y2="70" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />

          <line x1="68" y1="235" x2="370" y2="235" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="68" y1="150" x2="370" y2="150" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />

          {/* Ticks on t axis */}
          <line x1="143" y1="320" x2="143" y2="325" stroke="currentColor" strokeWidth="1.2" />
          <text x="143" y="337" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
            t₁=1
          </text>
          <line x1="218" y1="320" x2="218" y2="325" stroke="currentColor" strokeWidth="1.2" />
          <text x="218" y="337" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
            t₂=2
          </text>
          <line x1="293" y1="320" x2="293" y2="325" stroke="currentColor" strokeWidth="1.2" />
          <text x="293" y="337" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
            t₃=3
          </text>

          {/* Ticks on b axis */}
          <line x1="63" y1="235" x2="68" y2="235" stroke="currentColor" strokeWidth="1.2" />
          <text x="56" y="239" textAnchor="end" className="fill-muted-foreground font-mono text-[10px]">
            1
          </text>
          <line x1="63" y1="150" x2="68" y2="150" stroke="currentColor" strokeWidth="1.2" />
          <text x="56" y="154" textAnchor="end" className="fill-muted-foreground font-mono text-[10px]">
            2
          </text>

          {/* Fitted Line: b_hat = 2/3 + 1/2 t */}
          {/* At t=0.2 (x=83): y = 320 - 85 * (2/3 + 0.1) = 320 - 65.17 = 254.83 */}
          {/* At t=3.6 (x=338): y = 320 - 85 * (2/3 + 1.8) = 320 - 209.67 = 110.33 */}
          <line
            x1="83"
            y1="254.8"
            x2="348"
            y2="104.5"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.4"
          />

          {/* Fitted Line Formula Label */}
          <g transform="translate(315, 96)">
            <rect
              x="-6"
              y="-12"
              width="90"
              height="20"
              rx="4"
              className="fill-background/90 stroke-blue-500/40"
              strokeWidth="1"
            />
            <text x="39" y="2" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-bold">
              b̂ = 2/3 + 1/2 t
            </text>
          </g>

          {/* Vertical Error 1: At t=1 (x=143) */}
          {/* Data point: b1 = 1 -> y = 235 */}
          {/* Fitted point: p1 = 7/6 -> y = 320 - 85*(7/6) = 220.83 */}
          <line
            x1="143"
            y1="235"
            x2="143"
            y2="220.8"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="2"
            strokeDasharray="3 2"
          />
          {/* Error bracket/label 1 */}
          <text x="149" y="231" className="fill-rose-600 dark:fill-rose-400 font-mono text-[9.5px] font-bold">
            e₁ = −1/6
          </text>

          {/* Vertical Error 2: At t=2 (x=218) */}
          {/* Data point: b2 = 2 -> y = 150 */}
          {/* Fitted point: p2 = 5/3 -> y = 320 - 85*(5/3) = 178.33 */}
          <line
            x1="218"
            y1="150"
            x2="218"
            y2="178.3"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="2"
            strokeDasharray="3 2"
          />
          <text x="224" y="167" className="fill-rose-600 dark:fill-rose-400 font-mono text-[9.5px] font-bold">
            e₂ = +1/3
          </text>

          {/* Vertical Error 3: At t=3 (x=293) */}
          {/* Data point: b3 = 2 -> y = 150 */}
          {/* Fitted point: p3 = 13/6 -> y = 320 - 85*(13/6) = 135.83 */}
          <line
            x1="293"
            y1="150"
            x2="293"
            y2="135.8"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="2"
            strokeDasharray="3 2"
          />
          <text x="299" y="146" className="fill-rose-600 dark:fill-rose-400 font-mono text-[9.5px] font-bold">
            e₃ = −1/6
          </text>

          {/* Projection points on line (p1, p2, p3) */}
          <circle cx="143" cy="220.8" r="3.5" className="fill-blue-600 dark:fill-blue-400" />
          <circle cx="218" cy="178.3" r="3.5" className="fill-blue-600 dark:fill-blue-400" />
          <circle cx="293" cy="135.8" r="3.5" className="fill-blue-600 dark:fill-blue-400" />

          {/* Observation Data Points (b1, b2, b3) */}
          <circle cx="143" cy="235" r="4.5" className="fill-amber-600 dark:fill-amber-400 stroke-background stroke-2" />
          <text x="143" y="250" textAnchor="middle" className="fill-foreground font-mono text-[10px] font-semibold">
            (1, 1)
          </text>

          <circle cx="218" cy="150" r="4.5" className="fill-amber-600 dark:fill-amber-400 stroke-background stroke-2" />
          <text x="218" y="141" textAnchor="middle" className="fill-foreground font-mono text-[10px] font-semibold">
            (2, 2)
          </text>

          <circle cx="293" cy="150" r="4.5" className="fill-amber-600 dark:fill-amber-400 stroke-background stroke-2" />
          <text x="293" y="165" textAnchor="middle" className="fill-foreground font-mono text-[10px] font-semibold">
            (3, 2)
          </text>

          {/* Bottom Summary Pill */}
          <g transform="translate(70, 354)">
            <rect
              x="0"
              y="0"
              width="315"
              height="24"
              rx="6"
              className="fill-muted/40 stroke-border/70"
              strokeWidth="1"
            />
            <text x="157" y="16" textAnchor="middle" className="fill-foreground/90 font-mono text-[10px]">
              残差和 ∑eᵢ = 0 · 竖直平方误差和 ∑eᵢ² = 1/6 (全局极小)
            </text>
          </g>
        </g>

        {/* ============================================================== */}
        {/* RIGHT PANEL: SUBSPACE PROJECTION (Column Space Col(A) in R^3) */}
        {/* ============================================================== */}
        <g transform="translate(446, 16)">
          {/* Header Title */}
          <text x="18" y="22" className="fill-foreground font-sans text-[13px] font-bold">
            ② 高维子空间（Subspace Projection · ℝ³ 中的列空间）
          </text>
          <text x="18" y="38" className="fill-muted-foreground font-mono text-[10.5px]">
            目标 b=(1,2,2)ᵀ 垂直分解为 p ∈ Col(A) 与 e ∈ Null(Aᵀ) · 勾股定理
          </text>

          {/* Column space plane (parallelogram) */}
          <polygon
            points="468,230 750,195 720,345 438,380"
            className="fill-blue-500/10 stroke-blue-500/40 dark:fill-blue-500/15 dark:stroke-blue-400/40"
            strokeWidth="1.8"
          />

          {/* Subspace Plane Label */}
          <text
            x="456"
            y="262"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold"
          >
            Col(A) = span&#123;1, t&#125; (2维平面)
          </text>

          {/* Origin 0 in R^3 at (505, 335) */}
          <circle cx="505" cy="335" r="3.5" className="fill-foreground" />
          <text x="492" y="342" className="fill-foreground font-mono text-[11px] font-bold">
            0
          </text>

          {/* Basis vector a1 = (1, 1, 1)^T */}
          <line
            x1="505"
            y1="335"
            x2="590"
            y2="310"
            className="stroke-blue-600/70 dark:stroke-blue-400/70"
            strokeWidth="1.8"
            markerEnd="url(#l16-arrow-blue)"
          />
          <text x="592" y="322" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px]">
            a₁=(1,1,1)ᵀ
          </text>

          {/* Basis vector a2 = (1, 2, 3)^T */}
          <line
            x1="505"
            y1="335"
            x2="570"
            y2="260"
            className="stroke-blue-600/70 dark:stroke-blue-400/70"
            strokeWidth="1.8"
            markerEnd="url(#l16-arrow-blue)"
          />
          <text x="575" y="256" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px]">
            a₂=(1,2,3)ᵀ
          </text>

          {/* Left Nullspace line: Null(A^T) normal to Col(A) */}
          <line
            x1="505"
            y1="140"
            x2="505"
            y2="375"
            className="stroke-purple-500/70 dark:stroke-purple-400/70"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
          <text
            x="512"
            y="152"
            className="fill-purple-700 dark:fill-purple-300 font-mono text-[10px] font-bold"
          >
            Null(Aᵀ) = span&#123;(-1, 2, -1)ᵀ&#125;
          </text>

          {/* Projection vector p = Ax_hat at (650, 275) */}
          <line
            x1="505"
            y1="335"
            x2="650"
            y2="275"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.5"
            markerEnd="url(#l16-arrow-emerald)"
          />
          <text
            x="600"
            y="298"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-bold"
          >
            p = Ax̂ = (7/6, 5/3, 13/6)ᵀ
          </text>

          {/* Target vector b = (1, 2, 2)^T at (650, 135) */}
          <line
            x1="505"
            y1="335"
            x2="650"
            y2="135"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.5"
            markerEnd="url(#l16-arrow-amber)"
          />
          <text
            x="615"
            y="125"
            className="fill-amber-700 dark:fill-amber-300 font-mono text-[11px] font-bold"
          >
            b = (1, 2, 2)ᵀ ∉ Col(A)
          </text>

          {/* Error vector e = b - p (vertical from p(650, 275) to b(650, 135)) */}
          <line
            x1="650"
            y1="275"
            x2="650"
            y2="138"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="2.4"
            markerEnd="url(#l16-arrow-rose)"
          />
          <text
            x="658"
            y="205"
            className="fill-rose-600 dark:fill-rose-400 font-mono text-[10.5px] font-bold"
          >
            e = b − p ∈ Null(Aᵀ)
          </text>
          <text
            x="658"
            y="220"
            className="fill-rose-600 dark:fill-rose-400 font-mono text-[9px]"
          >
            (−1/6, 1/3, −1/6)ᵀ
          </text>

          {/* 3D Right Angle Symbol at p(650, 275) */}
          <polyline
            points="650,260 638,264 638,279"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.65"
            strokeWidth="1.4"
          />

          {/* Another arbitrary point Ax in Col(A) at (715, 305) */}
          <circle cx="715" cy="305" r="3.5" className="fill-blue-500" />
          <text x="722" y="316" className="fill-blue-600 dark:fill-blue-300 font-mono text-[9.5px]">
            Ax (任意其他解)
          </text>

          {/* Leg: p to Ax */}
          <line
            x1="650"
            y1="275"
            x2="715"
            y2="305"
            className="stroke-emerald-600/70 dark:stroke-emerald-400/70"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />

          {/* Hypotenuse: Ax to b */}
          <line
            x1="715"
            y1="305"
            x2="650"
            y2="135"
            className="stroke-amber-600/60 dark:stroke-amber-400/60"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />

          {/* Right Angle Symbol at p for triangle (Ax, p, b) */}
          <text
            x="664"
            y="288"
            className="fill-muted-foreground font-mono text-[8.5px] opacity-75"
          >
            90°
          </text>

          {/* Pythagorean inequality pill */}
          <g transform="translate(460, 354)">
            <rect
              x="0"
              y="0"
              width="315"
              height="24"
              rx="6"
              className="fill-muted/40 stroke-border/70"
              strokeWidth="1"
            />
            <text x="157" y="16" textAnchor="middle" className="fill-foreground/90 font-mono text-[10px]">
              勾股定理: ‖Ax − b‖² = ‖Ax − p‖² + ‖e‖² ≥ ‖e‖² (当 Ax=p 极小)
            </text>
          </g>
        </g>
      </svg>
    </MathDiagram>
  );
}

export function OrthogonalDecompositionPythagorasDiagram({
  caption = '正交分解与正交投影矩阵 $P = A(A^TA)^{-1}A^T$ 的**代数与几何五大黄金法则**：在全空间 $\\mathbb{R}^m$ 中，任意向量 $\\mathbf{b}$ 均被唯一且正交地剖分为落在列空间的可解分量 $\\mathbf{p} = P\\mathbf{b} \\in \\operatorname{Col}(A)$ 与落在左零空间的误差分量 $\\mathbf{e} = (I-P)\\mathbf{b} \\in \\operatorname{Null}(A^T)$。幂等性 $P^2 = P$ 保证再次投影无位移，对称性 $P^T = P$ 保证投影方向垂直无倾斜，二者完美闭环！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Orthogonal Decomposition & Fundamental Properties of the Projection Matrix P"
      caption={caption}
    >
      <svg
        viewBox="0 0 760 290"
        className="w-full max-w-[760px] select-none text-foreground"
        role="img"
        aria-label="Orthogonal decomposition diagram showing properties of projection matrix P and complement I minus P"
      >
        <defs>
          <marker
            id="l16-dec-arrow-blue"
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
            id="l16-dec-arrow-purple"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
        </defs>

        {/* Outer frame */}
        <rect
          x="10"
          y="10"
          width="740"
          height="270"
          rx="12"
          fill="currentColor"
          fillOpacity="0.015"
          stroke="currentColor"
          strokeOpacity="0.12"
        />

        {/* Left: Input Vector b in R^m */}
        <g transform="translate(30, 95)">
          <rect
            x="0"
            y="0"
            width="130"
            height="90"
            rx="10"
            className="fill-amber-500/15 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.8"
          />
          <text x="65" y="26" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[12.5px] font-bold">
            输入向量 b ∈ ℝᵐ
          </text>
          <text x="65" y="48" textAnchor="middle" className="fill-current font-mono text-[10.5px]">
            b = p + e
          </text>
          <text x="65" y="70" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            (正交直和分解)
          </text>
        </g>

        {/* Top Branch Arrow: P -> Col(A) */}
        <path
          d="M 160 115 C 220 70, 270 55, 330 55"
          fill="none"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2.2"
          markerEnd="url(#l16-dec-arrow-blue)"
        />
        <rect x="200" y="52" width="105" height="22" rx="5" className="fill-background stroke-blue-500/40" strokeWidth="1" />
        <text x="252" y="67" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-bold">
          投影 P = A(AᵀA)⁻¹Aᵀ
        </text>

        {/* Bottom Branch Arrow: (I - P) -> Null(A^T) */}
        <path
          d="M 160 165 C 220 210, 270 225, 330 225"
          fill="none"
          className="stroke-purple-600 dark:stroke-purple-400"
          strokeWidth="2.2"
          markerEnd="url(#l16-dec-arrow-purple)"
        />
        <rect x="200" y="206" width="105" height="22" rx="5" className="fill-background stroke-purple-500/40" strokeWidth="1" />
        <text x="252" y="221" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 font-mono text-[10px] font-bold">
          补投影 I − P
        </text>

        {/* Top Output Card: Projection p in Col(A) */}
        <g transform="translate(335, 20)">
          <rect
            x="0"
            y="0"
            width="385"
            height="85"
            rx="10"
            className="fill-blue-500/10 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.6"
          />
          <text x="16" y="24" className="fill-blue-700 dark:fill-blue-300 font-mono text-[12px] font-bold">
            可解分量: p = Pb ∈ Col(A)（维数 = r）
          </text>
          <text x="16" y="45" className="fill-foreground font-mono text-[10.5px]">
            • 幂等性: P² = P（已落入列空间后，再次投影保持不动）
          </text>
          <text x="16" y="64" className="fill-foreground font-mono text-[10.5px]">
            • 对称性: Pᵀ = P（充要条件：保证投影是垂足正交投影）
          </text>
          <text x="270" y="24" className="fill-muted-foreground font-mono text-[10px]">
            tr(P) = rank(A) = r
          </text>
        </g>

        {/* Bottom Output Card: Error e in Null(A^T) */}
        <g transform="translate(335, 175)">
          <rect
            x="0"
            y="0"
            width="385"
            height="85"
            rx="10"
            className="fill-purple-500/10 stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.6"
          />
          <text x="16" y="24" className="fill-purple-700 dark:fill-purple-300 font-mono text-[12px] font-bold">
            不可解误差: e = (I − P)b ∈ Null(Aᵀ)（维数 = m − r）
          </text>
          <text x="16" y="45" className="fill-foreground font-mono text-[10.5px]">
            • 垂直性: pᵀ e = 0（勾股定理: ‖b‖² = ‖p‖² + ‖e‖²）
          </text>
          <text x="16" y="64" className="fill-foreground font-mono text-[10.5px]">
            • 零吸收: Aᵀ e = 0（正规方程 AᵀAx̂ = Aᵀb 过滤掉全部误差分量）
          </text>
          <text x="260" y="24" className="fill-muted-foreground font-mono text-[10px]">
            tr(I − P) = m − r
          </text>
        </g>

        {/* Orthogonality Symbol between cards */}
        <g transform="translate(520, 140)">
          <rect
            x="-40"
            y="-11"
            width="80"
            height="22"
            rx="11"
            className="fill-background stroke-emerald-500/50"
            strokeWidth="1.2"
          />
          <text x="0" y="4" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">
            Col(A) ⟂ Null(Aᵀ)
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
