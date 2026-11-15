import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function LeftRightAndPseudoinverseSubspaceBijectionDiagram({
  caption = 'Moore-Penrose 伪逆 $A^+ = V\\Sigma^+ U^T$ 的四大基本子空间总图：将映射限制在 $\\operatorname{Row}(A) \\to \\operatorname{Col}(A)$ 上时，$A$ 是严格双射（$A\\mathbf{v}_i = \\sigma_i\\mathbf{u}_i$），而 $A^+$ 恰好是其精确逆双射（$A^+\\mathbf{u}_i = \\frac{1}{\\sigma_i}\\mathbf{v}_i$），同时将两个零空间 $\\operatorname{Null}(A)$ 与 $\\operatorname{Null}(A^T)$ 分别压扁为零向量。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="The Big Picture of Pseudoinverse A⁺: Bijection Between Row(A) and Col(A)"
      caption={caption}
    >
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="Four fundamental subspaces bijection diagram for the Moore-Penrose pseudoinverse A+ = V Sigma+ U^T"
      >
        <defs>
          <marker
            id="l34-sub-arrow-blue"
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
            id="l34-sub-arrow-emerald"
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
            id="l34-sub-arrow-amber"
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
            id="l34-sub-arrow-purple"
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

        {/* ================= TOP HEADER ================= */}
        <text x="460" y="23" textAnchor="middle" className="fill-foreground text-[14px] font-bold">
          伪逆 A⁺ 的终极几何总图：剥离零空间后，Row(A) 与 Col(A) 之间存在完美双射
        </text>
        <text x="460" y="40" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
          A ∈ ℝᵐˣⁿ, rank(A) = r · 正向 A : Row(A) ⇄ Col(A) : A⁺ 反向精确互逆
        </text>

        {/* ================= LEFT PANEL: INPUT SPACE R^n ================= */}
        <g>
          <rect
            x="22"
            y="52"
            width="260"
            height="292"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="152" y="74" textAnchor="middle" className="fill-foreground text-[12.5px] font-bold">
            输入空间 ℝⁿ = Row(A) ⊕ Null(A)
          </text>

          {/* Row(A) Box */}
          <rect
            x="36"
            y="84"
            width="232"
            height="112"
            rx="9"
            className="fill-blue-500/12 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.6"
          />
          <text x="48" y="104" className="fill-blue-700 dark:fill-blue-300 text-[11.5px] font-mono font-bold">
            Row(A) = Col(Aᵀ) · dim = r
          </text>
          <text x="48" y="124" className="fill-foreground text-[10.5px] font-mono">
            标准正交基：&#123;v₁, v₂, …, v_r&#125;
          </text>
          <text x="48" y="143" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono">
            解点 x⁺ = A⁺b ∈ Row(A)
          </text>
          <rect x="48" y="155" width="208" height="30" rx="6" className="fill-background/75 stroke-blue-500/35" />
          <text x="152" y="174" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            唯一决定 Ax，且与 Null(A) 处处垂直
          </text>

          {/* 90-degree orthogonality bridge and origin 0 at (282, 208) */}
          <line x1="36" y1="208" x2="282" y2="208" className="stroke-border" strokeWidth="1.2" strokeDasharray="4 3" />
          <rect x="101" y="197" width="102" height="20" rx="10" className="fill-background stroke-border" />
          <text x="152" y="211" textAnchor="middle" className="fill-foreground text-[10px] font-mono font-bold">
            90° 正交补 (⟂)
          </text>
          <circle cx="282" cy="208" r="4.5" className="fill-foreground" />
          <text x="292" y="203" className="fill-foreground text-[10.5px] font-mono font-bold">
            0 ∈ ℝⁿ
          </text>

          {/* Null(A) Box */}
          <rect
            x="36"
            y="220"
            width="232"
            height="112"
            rx="9"
            className="fill-amber-500/12 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.6"
          />
          <text x="48" y="240" className="fill-amber-800 dark:fill-amber-300 text-[11.5px] font-mono font-bold">
            Null(A) · dim = n − r
          </text>
          <text x="48" y="260" className="fill-foreground text-[10.5px] font-mono">
            标准正交基：&#123;v_(r+1), …, v_n&#125;
          </text>
          <text x="48" y="279" className="fill-amber-800 dark:fill-amber-300 text-[10.5px] font-mono">
            零分量 xₙ ∈ Null(A)
          </text>
          <rect x="48" y="291" width="208" height="30" rx="6" className="fill-background/75 stroke-amber-500/35" />
          <text x="152" y="310" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            若 n &gt; r，正向信息在此处不可逆湮灭
          </text>
        </g>

        {/* ================= CENTER MAPPING ARROWS ================= */}
        <g>
          {/* Top Bijection Badge */}
          <rect
            x="312"
            y="52"
            width="296"
            height="34"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/40"
          />
          <text x="460" y="67" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">
            严格双射 (1-to-1 &amp; Onto Bijection)
          </text>
          <text x="460" y="81" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            dim Row(A) = dim Col(A) = r,  σ₁ ≥ ⋯ ≥ σ_r &gt; 0
          </text>

          {/* Forward Bijection Arrow: Row(A) -> Col(A) */}
          <line
            x1="274"
            y1="112"
            x2="644"
            y2="112"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.4"
            markerEnd="url(#l34-sub-arrow-blue)"
          />
          <rect x="332" y="98" width="256" height="24" rx="6" className="fill-background stroke-blue-500/50" />
          <text x="460" y="114" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">
            A : v_i ↦ σ_i u_i  (严格可逆双射)
          </text>

          {/* Reverse Pseudoinverse Bijection Arrow: Col(A) -> Row(A) */}
          <line
            x1="646"
            y1="164"
            x2="276"
            y2="164"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.4"
            markerEnd="url(#l34-sub-arrow-emerald)"
          />
          <rect x="332" y="150" width="256" height="24" rx="6" className="fill-background stroke-emerald-500/50" />
          <text x="460" y="166" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">
            A⁺ : u_i ↦ (1/σ_i) v_i  (精确逆映射)
          </text>

          {/* Collapse 1: Null(A) -> 0 in R^m */}
          <path
            d="M 274 260 Q 460 206 631 210"
            fill="none"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.1"
            strokeDasharray="5 3"
            markerEnd="url(#l34-sub-arrow-amber)"
          />
          <rect x="356" y="206" width="224" height="24" rx="6" className="fill-background stroke-amber-500/50" />
          <text x="468" y="222" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[10.5px] font-mono font-bold">
            A(Null(A)) = &#123;0&#125;  (Av_i = 0, i &gt; r)
          </text>

          {/* Collapse 2: Null(A^T) -> 0 in R^n */}
          <path
            d="M 646 292 Q 460 326 289 216"
            fill="none"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.1"
            strokeDasharray="5 3"
            markerEnd="url(#l34-sub-arrow-purple)"
          />
          <rect x="356" y="276" width="224" height="24" rx="6" className="fill-background stroke-purple-500/50" />
          <text x="468" y="292" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[10.5px] font-mono font-bold">
            A⁺(Null(Aᵀ)) = &#123;0&#125;  (A⁺u_i = 0, i &gt; r)
          </text>

          {/* Subtle center note on 0^+ = 0 */}
          <text x="460" y="335" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            零奇异值映射为 0⁺ = 0（拒绝除以零，自动滤除零空间）
          </text>
        </g>

        {/* ================= RIGHT PANEL: OUTPUT SPACE R^m ================= */}
        <g>
          <rect
            x="638"
            y="52"
            width="260"
            height="292"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="768" y="74" textAnchor="middle" className="fill-foreground text-[12.5px] font-bold">
            输出空间 ℝᵐ = Col(A) ⊕ Null(Aᵀ)
          </text>

          {/* Col(A) Box */}
          <rect
            x="652"
            y="84"
            width="232"
            height="112"
            rx="9"
            className="fill-emerald-500/12 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.6"
          />
          <text x="664" y="104" className="fill-emerald-700 dark:fill-emerald-300 text-[11.5px] font-mono font-bold">
            Col(A) · dim = r
          </text>
          <text x="664" y="124" className="fill-foreground text-[10.5px] font-mono">
            标准正交基：&#123;u₁, u₂, …, u_r&#125;
          </text>
          <text x="664" y="143" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono">
            投影 p = Ax⁺ = AA⁺b ∈ Col(A)
          </text>
          <rect x="664" y="155" width="208" height="30" rx="6" className="fill-background/75 stroke-emerald-500/35" />
          <text x="768" y="174" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            A⁺ 把 p 无损送回唯一源点 x⁺ ∈ Row(A)
          </text>

          {/* 90-degree orthogonality bridge and origin 0 at (638, 208) */}
          <line x1="638" y1="208" x2="884" y2="208" className="stroke-border" strokeWidth="1.2" strokeDasharray="4 3" />
          <rect x="717" y="197" width="102" height="20" rx="10" className="fill-background stroke-border" />
          <text x="768" y="211" textAnchor="middle" className="fill-foreground text-[10px] font-mono font-bold">
            90° 正交补 (⟂)
          </text>
          <circle cx="638" cy="208" r="4.5" className="fill-foreground" />
          <text x="628" y="198" textAnchor="end" className="fill-foreground text-[10.5px] font-mono font-bold">
            0 ∈ ℝᵐ
          </text>

          {/* Null(A^T) Box */}
          <rect
            x="652"
            y="220"
            width="232"
            height="112"
            rx="9"
            className="fill-purple-500/12 stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.6"
          />
          <text x="664" y="240" className="fill-purple-700 dark:fill-purple-300 text-[11.5px] font-mono font-bold">
            Null(Aᵀ) · dim = m − r
          </text>
          <text x="664" y="260" className="fill-foreground text-[10.5px] font-mono">
            标准正交基：&#123;u_(r+1), …, u_m&#125;
          </text>
          <text x="664" y="279" className="fill-purple-700 dark:fill-purple-300 text-[10.5px] font-mono">
            残差 e = b − p ∈ Null(Aᵀ)
          </text>
          <rect x="664" y="291" width="208" height="30" rx="6" className="fill-background/75 stroke-purple-500/35" />
          <text x="768" y="310" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            b 的不可达正交残差，A⁺ 将其直接归零
          </text>
        </g>

        {/* ================= BOTTOM SUMMARY PILLS ================= */}
        <g>
          {/* Pill 1: A^+ A */}
          <rect
            x="22"
            y="356"
            width="282"
            height="68"
            rx="10"
            className="fill-blue-500/[0.08] stroke-blue-500/40"
            strokeWidth="1.3"
          />
          <text x="163" y="380" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-mono font-bold">
            A⁺A = P_Row(A) = V_r V_rᵀ
          </text>
          <text x="163" y="399" textAnchor="middle" className="fill-foreground text-[10.5px]">
            正交投影到 Row(A)（消去 Null(A) 分量）
          </text>
          <text x="163" y="415" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            当且仅当 r = n（列满秩）时等于 Iₙ
          </text>

          {/* Pill 2: A A^+ */}
          <rect
            x="319"
            y="356"
            width="282"
            height="68"
            rx="10"
            className="fill-emerald-500/[0.08] stroke-emerald-500/40"
            strokeWidth="1.3"
          />
          <text x="460" y="380" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12px] font-mono font-bold">
            AA⁺ = P_Col(A) = U_r U_rᵀ
          </text>
          <text x="460" y="399" textAnchor="middle" className="fill-foreground text-[10.5px]">
            正交投影到 Col(A)（消去 Null(Aᵀ) 残差）
          </text>
          <text x="460" y="415" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            当且仅当 r = m（行满秩）时等于 Iₘ
          </text>

          {/* Pill 3: SVD formula */}
          <rect
            x="616"
            y="356"
            width="282"
            height="68"
            rx="10"
            className="fill-purple-500/[0.08] stroke-purple-500/40"
            strokeWidth="1.3"
          />
          <text x="757" y="380" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[12px] font-mono font-bold">
            A⁺ = V Σ⁺ Uᵀ = ∑ (1/σ_i) v_i u_iᵀ
          </text>
          <text x="757" y="399" textAnchor="middle" className="fill-foreground text-[10.5px]">
            唯一满足全部四条 Penrose 条件的伪逆
          </text>
          <text x="757" y="415" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            统一左逆 (AᵀA)⁻¹Aᵀ 与右逆 Aᵀ(AAᵀ)⁻¹
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}

export function MinimumNormLeastSquaresGeometryDiagram({
  caption = '伪逆解 $\\mathbf{x}^+ = A^+\\mathbf{b}$ 的两重几何最优性：左图在输出空间 $\\mathbb{R}^m$ 中将 $\\mathbf{b}$ 正交投影为 $\\mathbf{p} = AA^+\\mathbf{b} \\in \\operatorname{Col}(A)$，使残差 $\\|A\\mathbf{x}-\\mathbf{b}\\|_2$ 最小；右图在输入空间 $\\mathbb{R}^n$ 中沿着与 $\\operatorname{Null}(A)$ 平行的所有最小二乘解集 $\\hat{\\mathbf{x}} = \\mathbf{x}^+ + \\mathbf{x}_n$，利用 $\\mathbf{x}^+ \\in \\operatorname{Row}(A) \\perp \\operatorname{Null}(A)$ 的直角三角形勾股定理，锁定 $\\mathbf{x}^+$ 为距原点最近（$\\|\\mathbf{x}\\|_2$ 最小）的唯一解。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Geometric Proof: Why x⁺ = A⁺b Is the Unique Minimum-Norm Least-Squares Solution"
      caption={caption}
    >
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="Two-panel geometric proof showing why x+ = A+ b minimizes both the residual ||Ax - b|| in R^m and the solution norm ||x|| in R^n via the Pythagorean theorem"
      >
        <defs>
          <marker
            id="l34-geom-arrow-blue"
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
            id="l34-geom-arrow-emerald"
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
            id="l34-geom-arrow-purple"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l34-geom-arrow-amber"
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
            id="l34-geom-arrow-fg"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-foreground/80" />
          </marker>
        </defs>

        {/* ================= TOP HEADER ================= */}
        <text x="460" y="23" textAnchor="middle" className="fill-foreground text-[14px] font-bold">
          几何证明：为什么 x⁺ = A⁺b 是唯一的“最小范数最小二乘解”？
        </text>
        <text x="460" y="40" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
          双重最优性 = 输出空间最小残差 min ‖Ax − b‖₂  +  输入空间最小长度 min ‖x̂‖₂
        </text>

        {/* ================= LEFT PANEL: OUTPUT SPACE R^m ================= */}
        <g>
          <rect
            x="20"
            y="54"
            width="426"
            height="370"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <rect x="36" y="66" width="394" height="26" rx="7" className="fill-emerald-500/12" />
          <text x="233" y="83" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12px] font-bold">
            Step 1 · 输出空间 ℝᵐ：正交投影最小化残差 ‖Ax − b‖₂
          </text>

          {/* Subspace Col(A) tilted plane */}
          <polygon
            points="54,264 252,214 406,252 208,302"
            className="fill-emerald-500/12 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.6"
          />
          <text x="80" y="286" className="fill-emerald-700 dark:fill-emerald-300 text-[11.5px] font-mono font-bold">
            Col(A)  (dim = r)
          </text>

          {/* Origin in Col(A): (122, 266) */}
          <circle cx="122" cy="266" r="3.8" className="fill-foreground" />
          <text x="108" y="264" className="fill-foreground text-[11px] font-mono font-bold">
            0
          </text>

          {/* Projection point p = (256, 252) */}
          {/* Arbitrary Ax point = (336, 266) */}
          {/* Target b point = (256, 128) */}

          {/* Vector b: (122, 266) -> (256, 128) */}
          <line
            x1="122"
            y1="266"
            x2="251"
            y2="133"
            className="stroke-foreground/85"
            strokeWidth="2.3"
            markerEnd="url(#l34-geom-arrow-fg)"
          />
          <text x="172" y="186" className="fill-foreground text-[12px] font-mono font-bold">
            b ∉ Col(A)
          </text>

          {/* Projection vector p = AA^+ b = Ax^+: (122, 266) -> (256, 252) */}
          <line
            x1="122"
            y1="266"
            x2="248"
            y2="253"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.6"
            markerEnd="url(#l34-geom-arrow-emerald)"
          />
          <text x="184" y="246" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">
            p = AA⁺b
          </text>

          {/* Residual vector e = b - p: (256, 252) -> (256, 128) */}
          <line
            x1="256"
            y1="252"
            x2="256"
            y2="135"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.4"
            markerEnd="url(#l34-geom-arrow-purple)"
          />
          <text x="266" y="184" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-mono font-bold">
            e = b − p ∈ Null(Aᵀ)
          </text>

          {/* Right angle at p = (256, 252) */}
          <polyline
            points="244,253 244,240 256,239"
            fill="none"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.4"
          />

          {/* Another Ax in Col(A) and dashed longer residual */}
          <line
            x1="256"
            y1="252"
            x2="334"
            y2="266"
            className="stroke-emerald-600/65 dark:stroke-emerald-400/65"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <line
            x1="336"
            y1="266"
            x2="261"
            y2="134"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
          <text x="312" y="205" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-mono">
            ‖Ax − b‖₂ &gt; ‖e‖₂
          </text>

          <circle cx="256" cy="252" r="4" className="fill-emerald-600 dark:fill-emerald-400" />
          <circle cx="256" cy="128" r="4" className="fill-foreground" />
          <text x="256" y="117" textAnchor="middle" className="fill-foreground text-[11.5px] font-mono font-bold">
            b
          </text>
          <circle cx="336" cy="266" r="3.5" className="fill-amber-600 dark:fill-amber-400" />
          <text x="344" y="274" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-mono font-bold">
            Ax
          </text>

          {/* Bottom Summary Card */}
          <rect x="36" y="324" width="394" height="84" rx="8" className="fill-muted/35 stroke-border/75" />
          <text x="233" y="346" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">
            min ‖Ax − b‖₂  ⇔  Ax̂ = p = P_Col(A)b
          </text>
          <text x="233" y="368" textAnchor="middle" className="fill-foreground text-[11px]">
            若 r &lt; n，则存在非平凡零空间 Null(A)（dim = n − r ≥ 1）
          </text>
          <text x="233" y="390" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[10.5px] font-mono font-semibold">
            全部最小二乘解构成仿射子空间：S_LS = x⁺ + Null(A)
          </text>
        </g>

        {/* ================= RIGHT PANEL: INPUT SPACE R^n ================= */}
        <g>
          <rect
            x="464"
            y="54"
            width="436"
            height="370"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <rect x="480" y="66" width="404" height="26" rx="7" className="fill-blue-500/12" />
          <text x="682" y="83" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-bold">
            Step 2 · 输入空间 ℝⁿ：勾股定理锁定最小范数解 x⁺ = A⁺b
          </text>

          {/* Coordinate Subspace Frame: Origin at (524, 276) */}
          {/* Null(A) vertical axis */}
          <line
            x1="524"
            y1="292"
            x2="524"
            y2="118"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2"
            markerEnd="url(#l34-geom-arrow-amber)"
          />
          <text x="524" y="110" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[11.5px] font-mono font-bold">
            Null(A)
          </text>

          {/* Row(A) horizontal axis */}
          <line
            x1="510"
            y1="276"
            x2="868"
            y2="276"
            className="stroke-blue-600/75 dark:stroke-blue-400/75"
            strokeWidth="1.8"
            markerEnd="url(#l34-geom-arrow-blue)"
          />
          <text x="868" y="294" textAnchor="end" className="fill-blue-700 dark:fill-blue-300 text-[11.5px] font-mono font-bold">
            Row(A)
          </text>

          {/* Right angle at origin 0 = (524, 276) */}
          <polyline
            points="524,264 536,264 536,276"
            fill="none"
            className="stroke-foreground/70"
            strokeWidth="1.3"
          />

          {/* Affine Least-Squares Solution Set S_LS = x^+ + Null(A) passing through x^+ at x = 686 */}
          <line
            x1="686"
            y1="304"
            x2="686"
            y2="114"
            className="stroke-purple-500/55 dark:stroke-purple-400/55"
            strokeWidth="2"
            strokeDasharray="5 3"
          />
          <rect x="694" y="110" width="184" height="22" rx="5" className="fill-purple-500/10 stroke-purple-500/35" />
          <text x="786" y="125" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[10.5px] font-mono font-bold">
            解集 S_LS = x⁺ + Null(A)
          </text>

          {/* Right-angle indicator where S_LS meets Row(A) at (686, 276) */}
          <polyline
            points="674,276 674,264 686,264"
            fill="none"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.5"
          />

          {/* Vector x^+ = A^+ b: (524, 276) -> (686, 276) */}
          <line
            x1="524"
            y1="276"
            x2="679"
            y2="276"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="3.2"
            markerEnd="url(#l34-geom-arrow-blue)"
          />
          <text x="605" y="295" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11.5px] font-mono font-bold">
            x⁺ = A⁺b ∈ Row(A)
          </text>

          {/* Vertical Nullspace offset vector x_n: (686, 276) -> (686, 158) */}
          <line
            x1="686"
            y1="276"
            x2="686"
            y2="166"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.6"
            markerEnd="url(#l34-geom-arrow-amber)"
          />
          <text x="698" y="222" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">
            xₙ ∈ Null(A)
          </text>

          {/* Hypotenuse vector x_hat = x^+ + x_n: (524, 276) -> (686, 158) */}
          <line
            x1="524"
            y1="276"
            x2="680"
            y2="163"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.8"
            markerEnd="url(#l34-geom-arrow-purple)"
          />
          <rect x="545" y="194" width="96" height="22" rx="5" className="fill-background/90 stroke-purple-500/40" />
          <text x="593" y="209" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-mono font-bold">
            x̂ = x⁺ + xₙ
          </text>

          {/* Key points */}
          <circle cx="524" cy="276" r="4" className="fill-foreground" />
          <text x="514" y="294" textAnchor="end" className="fill-foreground text-[11px] font-mono font-bold">
            0
          </text>
          <circle cx="686" cy="276" r="4.8" className="fill-blue-600 dark:fill-blue-400 stroke-background" strokeWidth="1.5" />
          <circle cx="686" cy="158" r="4.8" className="fill-purple-600 dark:fill-purple-400 stroke-background" strokeWidth="1.5" />
          <text x="698" y="162" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-mono font-bold">
            x̂ (非最优长度)
          </text>

          {/* Bottom Summary Card */}
          <rect x="480" y="324" width="404" height="84" rx="8" className="fill-blue-500/[0.06] stroke-blue-500/35" />
          <text x="682" y="346" textAnchor="middle" className="fill-foreground text-[11px]">
            因 x⁺ ∈ Row(A) ⟂ xₙ ∈ Null(A)，构成直角三角形：
          </text>
          <text x="682" y="368" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-mono font-bold">
            ‖x̂‖₂² = ‖x⁺‖₂² + ‖xₙ‖₂²  ≥  ‖x⁺‖₂²
          </text>
          <text x="682" y="390" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-semibold">
            等号成立 ⇔ xₙ = 0 ⇔ x̂ = x⁺ = A⁺b（唯一距原点最近！）
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
