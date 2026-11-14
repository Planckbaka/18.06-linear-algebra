import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function OrthogonalFourSubspacesCrossDiagram({
  caption = 'Gilbert Strang 教授贯穿全书的灵魂总图第二部分（**线性代数基本定理第二部分**）：任意矩阵 $A \\in \\mathbb{R}^{m\\times n}$（秩为 $r$）在几何上将空间完全正交剖分——左侧输入空间 $\\mathbb{R}^n = \\operatorname{Row}(A) \\oplus \\operatorname{Null}(A)$，其中行空间与零空间严格呈 $90^\\circ$ 直角正交补，任意向量分解 $\\mathbf{x} = \\mathbf{x}_r + \\mathbf{x}_n$ 满足欧氏勾股定理 $\\|\\mathbf{x}\\|_2^2 = \\|\\mathbf{x}_r\\|_2^2 + \\|\\mathbf{x}_n\\|_2^2$；矩阵 $A$ 将零空间压扁至 $\\mathbf{0}$，并在行空间与列空间之间建立保维一一对应；右侧输出空间 $\\mathbb{R}^m = \\operatorname{Col}(A) \\oplus \\operatorname{Null}(A^T)$，列空间与左零空间互为正交补！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="The Big Picture of Linear Algebra (Part II): Orthogonal Complements in ℝⁿ and ℝᵐ"
      caption={caption}
    >
      <svg
        viewBox="0 0 760 340"
        className="w-full max-w-[760px] select-none text-foreground"
        role="img"
        aria-label="Orthogonal Four Subspaces Cross Diagram: Row(A) perp Null(A) in Rn and Col(A) perp Null(AT) in Rm"
      >
        <defs>
          <marker
            id="l14-arrow-blue"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l14-arrow-emerald"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l14-arrow-amber"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l14-arrow-purple"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
        </defs>

        {/* ================= LEFT CROSS: INPUT SPACE R^n ================= */}
        <g transform="translate(16, 12)">
          {/* Header */}
          <text x="145" y="16" textAnchor="middle" className="fill-current text-[13px] font-bold">
            输入空间 ℝⁿ（总维数 = n）
          </text>
          <text x="145" y="32" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
            Row(A) ⟂ Null(A) · 直和 ℝⁿ = Row(A) ⊕ Null(A)
          </text>

          {/* Subspace Parallelogram 1: Row Space Row(A) */}
          <polygon
            points="145,155 65,95 125,75 205,135"
            className="fill-blue-500/15 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.8"
          />
          <text
            x="132"
            y="94"
            textAnchor="middle"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold"
          >
            Row(A) = Col(Aᵀ)
          </text>
          <text
            x="132"
            y="110"
            textAnchor="middle"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-semibold"
          >
            dim = r
          </text>

          {/* Subspace Parallelogram 2: Nullspace Null(A) */}
          <polygon
            points="145,155 85,235 145,255 205,175"
            className="fill-emerald-500/15 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.8"
          />
          <text
            x="148"
            y="218"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11.5px] font-bold"
          >
            Null(A)
          </text>
          <text
            x="148"
            y="234"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-semibold"
          >
            dim = n − r
          </text>

          {/* Right Angle 90° Square at Origin (exact dot product = 0) */}
          <polyline
            points="134,147 126,158 137,166"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.75"
            strokeWidth="1.6"
          />
          <text
            x="116"
            y="152"
            className="fill-muted-foreground font-mono text-[9px] font-bold"
          >
            90°
          </text>

          {/* Vector x = x_r + x_n Orthogonal Decomposition */}
          {/* Component x_r on Row(A) */}
          <line
            x1="145"
            y1="155"
            x2="89"
            y2="113"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.4"
            markerEnd="url(#l14-arrow-blue)"
          />
          <text
            x="76"
            y="110"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold"
          >
            x_r
          </text>

          {/* Component x_n on Null(A) */}
          <line
            x1="145"
            y1="155"
            x2="112"
            y2="199"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.4"
            markerEnd="url(#l14-arrow-emerald)"
          />
          <text
            x="100"
            y="214"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-bold"
          >
            x_n
          </text>

          {/* Projection dashed lines forming right rectangle */}
          <line
            x1="89"
            y1="113"
            x2="56"
            y2="157"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="4 3"
          />
          <line
            x1="112"
            y1="199"
            x2="56"
            y2="157"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="4 3"
          />

          {/* Total Vector x */}
          <line
            x1="145"
            y1="155"
            x2="56"
            y2="157"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.6"
            markerEnd="url(#l14-arrow-purple)"
          />
          <text
            x="40"
            y="162"
            className="fill-purple-700 dark:fill-purple-300 font-mono text-[12px] font-bold"
          >
            x
          </text>

          {/* Origin Point 0 */}
          <circle cx="145" cy="155" r="4.5" className="fill-current" />
          <text x="156" y="159" className="fill-current font-mono text-[11px] font-bold">
            0
          </text>

          {/* Pythagorean formula pill */}
          <rect
            x="40"
            y="272"
            width="210"
            height="24"
            rx="6"
            className="fill-muted/50 stroke-border"
          />
          <text
            x="145"
            y="288"
            textAnchor="middle"
            className="fill-foreground font-mono text-[10.5px] font-semibold"
          >
            ‖x‖₂² = ‖x_r‖₂² + ‖x_n‖₂² (勾股定理)
          </text>

          {/* Dimension formula */}
          <text
            x="145"
            y="312"
            textAnchor="middle"
            className="fill-muted-foreground font-mono text-[11px] font-semibold"
          >
            dim: r + (n − r) = n
          </text>
        </g>

        {/* ================= MIDDLE MAPPINGS BY MATRIX A ================= */}
        <g>
          {/* Top Bijection Arrow: Row(A) -> Col(A) */}
          <path
            d="M 215 90 C 315 42, 435 42, 535 90"
            fill="none"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.4"
            markerEnd="url(#l14-arrow-blue)"
          />
          <rect
            x="292"
            y="42"
            width="168"
            height="26"
            rx="6"
            className="fill-background stroke-blue-500/50"
          />
          <text
            x="376"
            y="59"
            textAnchor="middle"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold"
          >
            x_r ⟼ Ax_r (1-to-1 双射!)
          </text>

          {/* Center Identity Formula */}
          <rect
            x="280"
            y="136"
            width="192"
            height="38"
            rx="8"
            className="fill-muted/40 stroke-border"
          />
          <text
            x="376"
            y="152"
            textAnchor="middle"
            className="fill-foreground font-mono text-[10.5px] font-bold"
          >
            Ax = A(x_r + x_n) = Ax_r + 0
          </text>
          <text
            x="376"
            y="167"
            textAnchor="middle"
            className="fill-muted-foreground text-[10px]"
          >
            零空间成分对输出 Ax 贡献为 0
          </text>

          {/* Bottom Collapse Arrow: Null(A) -> 0 */}
          <path
            d="M 215 220 C 315 240, 430 225, 538 178"
            fill="none"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.2"
            strokeDasharray="5 3"
            markerEnd="url(#l14-arrow-emerald)"
          />
          <rect
            x="298"
            y="222"
            width="156"
            height="24"
            rx="6"
            className="fill-background stroke-emerald-500/50"
          />
          <text
            x="376"
            y="238"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold"
          >
            Ax_n = 0 (零空间全压缩)
          </text>
        </g>

        {/* ================= RIGHT CROSS: OUTPUT SPACE R^m ================= */}
        <g transform="translate(470, 12)">
          {/* Header */}
          <text x="145" y="16" textAnchor="middle" className="fill-current text-[13px] font-bold">
            输出空间 ℝᵐ（总维数 = m）
          </text>
          <text x="145" y="32" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
            Col(A) ⟂ Null(Aᵀ) · 直和 ℝᵐ = Col(A) ⊕ Null(Aᵀ)
          </text>

          {/* Subspace Parallelogram 1: Column Space Col(A) */}
          <polygon
            points="145,155 225,95 165,75 85,135"
            className="fill-blue-500/15 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.8"
          />
          <text
            x="158"
            y="94"
            textAnchor="middle"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold"
          >
            Col(A)
          </text>
          <text
            x="158"
            y="110"
            textAnchor="middle"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-semibold"
          >
            dim = r
          </text>

          {/* Subspace Parallelogram 2: Left Nullspace Null(A^T) */}
          <polygon
            points="145,155 205,235 145,255 85,175"
            className="fill-amber-500/15 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.8"
          />
          <text
            x="142"
            y="218"
            textAnchor="middle"
            className="fill-amber-800 dark:fill-amber-300 font-mono text-[11.5px] font-bold"
          >
            Null(Aᵀ)
          </text>
          <text
            x="142"
            y="234"
            textAnchor="middle"
            className="fill-amber-800 dark:fill-amber-300 font-mono text-[10.5px] font-semibold"
          >
            dim = m − r
          </text>

          {/* Right Angle 90° Square at Origin O' */}
          <polyline
            points="156,147 164,158 153,166"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.75"
            strokeWidth="1.6"
          />
          <text
            x="166"
            y="152"
            className="fill-muted-foreground font-mono text-[9px] font-bold"
          >
            90°
          </text>

          {/* Vector b = p + e Orthogonal Decomposition */}
          {/* Projection p in Col(A) */}
          <line
            x1="145"
            y1="155"
            x2="201"
            y2="113"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.4"
            markerEnd="url(#l14-arrow-blue)"
          />
          <text
            x="207"
            y="110"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold"
          >
            p = Ax_r
          </text>

          {/* Error vector e in Null(A^T) */}
          <line
            x1="145"
            y1="155"
            x2="178"
            y2="199"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.4"
            markerEnd="url(#l14-arrow-amber)"
          />
          <text
            x="185"
            y="214"
            className="fill-amber-800 dark:fill-amber-300 font-mono text-[11px] font-bold"
          >
            e
          </text>

          {/* Projection dashed lines forming right rectangle */}
          <line
            x1="201"
            y1="113"
            x2="234"
            y2="157"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="4 3"
          />
          <line
            x1="178"
            y1="199"
            x2="234"
            y2="157"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="4 3"
          />

          {/* Total Vector b */}
          <line
            x1="145"
            y1="155"
            x2="234"
            y2="157"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.6"
            markerEnd="url(#l14-arrow-purple)"
          />
          <text
            x="242"
            y="162"
            className="fill-purple-700 dark:fill-purple-300 font-mono text-[12px] font-bold"
          >
            b
          </text>

          {/* Origin Point 0 */}
          <circle cx="145" cy="155" r="4.5" className="fill-current" />
          <text x="131" y="159" className="fill-current font-mono text-[11px] font-bold">
            0
          </text>

          {/* Pythagorean formula pill */}
          <rect
            x="40"
            y="272"
            width="210"
            height="24"
            rx="6"
            className="fill-muted/50 stroke-border"
          />
          <text
            x="145"
            y="288"
            textAnchor="middle"
            className="fill-foreground font-mono text-[10.5px] font-semibold"
          >
            ‖b‖₂² = ‖p‖₂² + ‖e‖₂² (正交投影分解)
          </text>

          {/* Dimension formula */}
          <text
            x="145"
            y="312"
            textAnchor="middle"
            className="fill-muted-foreground font-mono text-[11px] font-semibold"
          >
            dim: r + (m − r) = m
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}

export function SubspaceOrthogonalityContrastDiagram({
  caption = '空间正交直觉辨析：**(a) 常见错误直觉**——空间中两个相互垂直的平面（如 $xy$ 平面与 $xz$ 平面）绝不是正交子空间！它们相交于整条 $x$ 轴（交集非零），交线上的非零向量与自身点积大于 0；**(b) 严密正交补**——只有二维平面与其一维法线（或更一般的 $r$ 维与 $n-r$ 维互补空间），交集严格为 $\\{\\mathbf{0}\\}$ 且两两正交，才能构成真正的正交补（Orthogonal Complement）！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Orthogonal Subspaces & Complements vs. Intuition Pitfalls in ℝ³"
      caption={caption}
    >
      <svg
        viewBox="0 0 740 270"
        className="w-full max-w-[740px] select-none text-foreground"
        role="img"
        aria-label="Comparison showing perpendicular planes are not orthogonal subspaces versus plane and normal line being true orthogonal complements"
      >
        <defs>
          <marker
            id="l14-contrast-rose"
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
            id="l14-contrast-emerald"
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
            id="l14-contrast-blue"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
        </defs>

        {/* ================= PANEL A: FALSE INTUITION (TWO PERPENDICULAR PLANES) ================= */}
        <g transform="translate(16, 12)">
          <rect
            x="0"
            y="0"
            width="342"
            height="246"
            rx="10"
            className="fill-rose-500/[0.04] stroke-rose-500/35"
          />
          {/* Header */}
          <text
            x="171"
            y="24"
            textAnchor="middle"
            className="fill-rose-700 dark:fill-rose-300 text-[12.5px] font-bold"
          >
            ✗ 直觉陷阱：两垂直平面 ⟂ 绝非正交子空间！
          </text>
          <text
            x="171"
            y="40"
            textAnchor="middle"
            className="fill-muted-foreground text-[10.5px]"
          >
            例如 ℝ³ 中的 xy 平面 (z=0) 与 xz 平面 (y=0)
          </text>

          {/* 3D Isometric Projection */}
          {/* Plane 1 (Horizontal xy-plane, z=0) */}
          <polygon
            points="55,160 170,125 285,155 170,190"
            className="fill-blue-500/15 stroke-blue-500/50"
            strokeWidth="1.5"
          />
          <text
            x="245"
            y="178"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-semibold"
          >
            平面 V₁: z = 0
          </text>

          {/* Plane 2 (Vertical xz-plane, y=0) */}
          <polygon
            points="55,160 170,125 170,55 55,90"
            className="fill-amber-500/15 stroke-amber-500/60"
            strokeWidth="1.5"
          />
          <text
            x="95"
            y="72"
            className="fill-amber-800 dark:fill-amber-300 font-mono text-[10px] font-semibold"
          >
            平面 V₂: y = 0
          </text>

          {/* Intersection Line (the x-axis): Points (170, 125) to (55, 160) */}
          <line
            x1="170"
            y1="125"
            x2="55"
            y2="160"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="3.2"
          />

          {/* Origin 0 */}
          <circle cx="170" cy="125" r="4" className="fill-current" />
          <text x="178" y="128" className="fill-current font-mono text-[10px] font-bold">
            0
          </text>

          {/* Nonzero Vector v on the intersection line */}
          <line
            x1="170"
            y1="125"
            x2="105"
            y2="145"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="2.4"
            markerEnd="url(#l14-contrast-rose)"
          />
          <text
            x="110"
            y="138"
            className="fill-rose-700 dark:fill-rose-300 font-mono text-[11px] font-bold"
          >
            v ≠ 0
          </text>

          {/* Fallacy Explanation Box */}
          <rect
            x="24"
            y="198"
            width="294"
            height="38"
            rx="6"
            className="fill-background/90 stroke-rose-500/40"
          />
          <text
            x="171"
            y="212"
            textAnchor="middle"
            className="fill-rose-700 dark:fill-rose-300 font-mono text-[10.5px] font-bold"
          >
            V₁ ∩ V₂ = x 轴（整条交线 ≠ {'{0}'}）
          </text>
          <text
            x="171"
            y="227"
            textAnchor="middle"
            className="fill-foreground text-[10px]"
          >
            交线上非零向量 v ∈ V₁ 且 v ∈ V₂，自身点积 vᵀv &gt; 0 绝不为 0！
          </text>
        </g>

        {/* ================= PANEL B: TRUE ORTHOGONAL COMPLEMENT (PLANE & NORMAL LINE) ================= */}
        <g transform="translate(382, 12)">
          <rect
            x="0"
            y="0"
            width="342"
            height="246"
            rx="10"
            className="fill-emerald-500/[0.04] stroke-emerald-500/35"
          />
          {/* Header */}
          <text
            x="171"
            y="24"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-300 text-[12.5px] font-bold"
          >
            ✓ 严密正交补：二维平面与一维法线
          </text>
          <text
            x="171"
            y="40"
            textAnchor="middle"
            className="fill-muted-foreground text-[10.5px]"
          >
            平面 V (dim=2) 与法线 L (dim=1) 互为正交补
          </text>

          {/* Plane V (Horizontal xy-plane, z=0) */}
          <polygon
            points="60,165 171,135 282,165 171,195"
            className="fill-emerald-500/15 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.6"
          />
          <text
            x="242"
            y="185"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-semibold"
          >
            平面 V (dim = 2)
          </text>

          {/* Normal Line L (Vertical z-axis through origin 171, 135) */}
          <line
            x1="171"
            y1="135"
            x2="171"
            y2="55"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.5"
            markerEnd="url(#l14-contrast-blue)"
          />
          <line
            x1="171"
            y1="135"
            x2="171"
            y2="195"
            className="stroke-blue-600/40 dark:stroke-blue-400/40"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text
            x="182"
            y="65"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-bold"
          >
            法线 L = V^⟂ (dim = 1)
          </text>

          {/* Right Angle Marker between Vertical Line and Plane Surface */}
          <polyline
            points="171,120 181,123 181,138"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.75"
            strokeWidth="1.5"
          />

          {/* Vector v on Plane V */}
          <line
            x1="171"
            y1="135"
            x2="225"
            y2="152"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.2"
            markerEnd="url(#l14-contrast-emerald)"
          />
          <text
            x="230"
            y="148"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold"
          >
            v ∈ V
          </text>

          {/* Vector w on Normal Line L */}
          <line
            x1="171"
            y1="135"
            x2="171"
            y2="85"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.2"
            markerEnd="url(#l14-contrast-blue)"
          />
          <text
            x="154"
            y="95"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold"
          >
            w ∈ L
          </text>

          {/* Origin 0 */}
          <circle cx="171" cy="135" r="4" className="fill-current" />
          <text x="156" y="142" className="fill-current font-mono text-[10px] font-bold">
            0
          </text>

          {/* True Complement Box */}
          <rect
            x="24"
            y="198"
            width="294"
            height="38"
            rx="6"
            className="fill-background/90 stroke-emerald-500/40"
          />
          <text
            x="171"
            y="212"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold"
          >
            V ∩ L = {'{0}'} · ∀v∈V, w∈L: vᵀw = 0
          </text>
          <text
            x="171"
            y="227"
            textAnchor="middle"
            className="fill-foreground text-[10px]"
          >
            dim(V) + dim(L) = 2 + 1 = 3 · 双向正交补 L = V^⟂ 且 V = (V^⟂)^⟂
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
