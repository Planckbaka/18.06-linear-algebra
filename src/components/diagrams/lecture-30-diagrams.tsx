import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function SvdCircleToEllipsePipelineDiagram({
  caption = '奇异值分解的几何本质：$A = U\\Sigma V^T$ 将单位圆 $\\|\\mathbf{x}\\|_2 = 1$ 分解为三步基本变换——$V^T$ 在输入空间旋转/反射对齐正交主轴 $\\mathbf{v}_1 \\perp \\mathbf{v}_2$，$\\Sigma$ 沿坐标轴做纯缩放形成半轴长为 $\\sigma_1, \\sigma_2$ 的椭圆，$U$ 在输出空间旋转/反射定位至正交奇异方向 $\\mathbf{u}_1 \\perp \\mathbf{u}_2$，直观呈现 $A\\mathbf{v}_i = \\sigma_i \\mathbf{u}_i$。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Geometric Pipeline of SVD: Unit Circle to Rotated Ellipse via A = UΣVᵀ"
      caption={caption}
    >
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="SVD three-step geometric pipeline mapping the unit circle with orthogonal axes v1 and v2 through V transpose, Sigma scaling, and U rotation onto an ellipse with semi-axes sigma1 u1 and sigma2 u2"
      >
        <defs>
          <marker
            id="l30-pipe-arrow-blue"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l30-pipe-arrow-purple"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l30-pipe-arrow-emerald"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l30-pipe-arrow-amber"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l30-pipe-arrow-muted"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-foreground/70" />
          </marker>
        </defs>

        {/* ================= TOP HEADER ================= */}
        <text x="460" y="25" textAnchor="middle" className="fill-foreground text-[14px] font-bold">
          SVD 三步几何流水线：A = U Σ Vᵀ 对单位圆 ‖x‖₂ = 1 的作用（以 ℝ² 为例）
        </text>
        <text x="460" y="43" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
          任意线性映射 = 正交对齐 (Vᵀ) → 轴向纯拉伸 (Σ) → 正交定向 (U) · 完整实现 Avᵢ = σᵢuᵢ
        </text>

        {/* ================= STAGE 0: INPUT UNIT CIRCLE ================= */}
        <g>
          <rect
            x="24"
            y="58"
            width="196"
            height="306"
            rx="10"
            className="fill-card/60 stroke-border"
            strokeWidth="1.4"
          />
          <rect
            x="36"
            y="69"
            width="172"
            height="24"
            rx="6"
            className="fill-muted/50"
          />
          <text x="122" y="85" textAnchor="middle" className="fill-foreground text-[11.5px] font-bold">
            0. 输入单位圆 ‖x‖₂ = 1
          </text>

          {/* Coordinate grid axes */}
          <line x1="48" y1="198" x2="196" y2="198" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="122" y1="124" x2="122" y2="272" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

          {/* Unit Circle (r = 54) */}
          <circle
            cx="122"
            cy="198"
            r="54"
            className="fill-blue-500/10 stroke-foreground/45"
            strokeWidth="1.6"
          />

          {/* Orthonormal input axes v1, v2 rotated by -35 deg */}
          {/* v1 = (cos(-35), sin(-35)) * 54 = (+44.2, -31.0) -> (166.2, 167.0) */}
          {/* v2 = (cos(-125), sin(-125)) * 54 = (-31.0, -44.2) -> (91.0, 153.8) */}
          <line
            x1="122"
            y1="198"
            x2="165"
            y2="168"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.5"
            markerEnd="url(#l30-pipe-arrow-blue)"
          />
          <line
            x1="122"
            y1="198"
            x2="92"
            y2="155"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.5"
            markerEnd="url(#l30-pipe-arrow-purple)"
          />

          {/* Right angle indicator between v1 and v2 */}
          <g transform="translate(122, 198) rotate(-35)">
            <polyline
              points="11,0 11,-11 0,-11"
              fill="none"
              className="stroke-foreground/75"
              strokeWidth="1.3"
            />
          </g>

          <circle cx="122" cy="198" r="3.2" className="fill-foreground" />
          <text x="172" y="164" className="fill-blue-600 dark:fill-blue-400 text-[12px] font-mono font-bold">
            v₁
          </text>
          <text x="74" y="152" className="fill-purple-600 dark:fill-purple-400 text-[12px] font-mono font-bold">
            v₂
          </text>
          <text x="150" y="242" className="fill-muted-foreground text-[10px] font-mono">
            r = 1
          </text>

          {/* Footer card info */}
          <rect x="34" y="286" width="176" height="66" rx="7" className="fill-muted/35 stroke-border/70" />
          <text x="122" y="305" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-semibold">
            v₁ ⟂ v₂,  ‖v₁‖ = ‖v₂‖ = 1
          </text>
          <text x="122" y="324" textAnchor="middle" className="fill-foreground text-[10.5px]">
            AᵀA 的标准正交特征基
          </text>
          <text x="122" y="341" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            输入空间的“天然主轴”
          </text>
        </g>

        {/* ================= TRANSITION 0 -> 1: V^T ================= */}
        <g>
          <line
            x1="223"
            y1="198"
            x2="245"
            y2="198"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.2"
            markerEnd="url(#l30-pipe-arrow-blue)"
          />
          <rect x="220" y="166" width="28" height="20" rx="5" className="fill-blue-500/15 stroke-blue-500/50" />
          <text x="234" y="180" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">
            Vᵀ
          </text>
        </g>

        {/* ================= STAGE 1: AFTER V^T ================= */}
        <g>
          <rect
            x="248"
            y="58"
            width="196"
            height="306"
            rx="10"
            className="fill-card/60 stroke-border"
            strokeWidth="1.4"
          />
          <rect
            x="260"
            y="69"
            width="172"
            height="24"
            rx="6"
            className="fill-blue-500/10"
          />
          <text x="346" y="85" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11.5px] font-bold">
            1. 正交旋转/反射 Vᵀx
          </text>

          {/* Coordinate grid axes */}
          <line x1="272" y1="198" x2="420" y2="198" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="346" y1="124" x2="346" y2="272" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

          {/* Unit Circle (r = 54) */}
          <circle
            cx="346"
            cy="198"
            r="54"
            className="fill-blue-500/10 stroke-foreground/45"
            strokeWidth="1.6"
          />

          {/* Aligned axes e1, e2 */}
          <line
            x1="346"
            y1="198"
            x2="399"
            y2="198"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.5"
            markerEnd="url(#l30-pipe-arrow-blue)"
          />
          <line
            x1="346"
            y1="198"
            x2="346"
            y2="145"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.5"
            markerEnd="url(#l30-pipe-arrow-purple)"
          />

          {/* Right angle */}
          <polyline points="357,198 357,187 346,187" fill="none" className="stroke-foreground/75" strokeWidth="1.3" />
          <circle cx="346" cy="198" r="3.2" className="fill-foreground" />

          <text x="406" y="193" className="fill-blue-600 dark:fill-blue-400 text-[11.5px] font-mono font-bold">
            e₁
          </text>
          <text x="354" y="142" className="fill-purple-600 dark:fill-purple-400 text-[11.5px] font-mono font-bold">
            e₂
          </text>

          {/* Footer card info */}
          <rect x="258" y="286" width="176" height="66" rx="7" className="fill-blue-500/8 stroke-blue-500/30" />
          <text x="346" y="305" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-semibold">
            Vᵀv₁ = e₁,  Vᵀv₂ = e₂
          </text>
          <text x="346" y="324" textAnchor="middle" className="fill-foreground text-[10.5px]">
            严格保长保角：‖Vᵀx‖₂ = 1
          </text>
          <text x="346" y="341" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            将主轴旋正至坐标轴方向
          </text>
        </g>

        {/* ================= TRANSITION 1 -> 2: Sigma ================= */}
        <g>
          <line
            x1="447"
            y1="198"
            x2="469"
            y2="198"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.2"
            markerEnd="url(#l30-pipe-arrow-amber)"
          />
          <rect x="444" y="166" width="28" height="20" rx="5" className="fill-amber-500/15 stroke-amber-500/50" />
          <text x="458" y="180" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[11.5px] font-mono font-bold">
            Σ
          </text>
        </g>

        {/* ================= STAGE 2: AFTER SIGMA ================= */}
        <g>
          <rect
            x="472"
            y="58"
            width="196"
            height="306"
            rx="10"
            className="fill-card/60 stroke-border"
            strokeWidth="1.4"
          />
          <rect
            x="484"
            y="69"
            width="172"
            height="24"
            rx="6"
            className="fill-amber-500/12"
          />
          <text x="570" y="85" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[11.5px] font-bold">
            2. 轴向纯拉伸 ΣVᵀx
          </text>

          {/* Coordinate grid axes */}
          <line x1="484" y1="198" x2="656" y2="198" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="570" y1="124" x2="570" y2="272" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

          {/* Dashed reference unit circle (r = 54) */}
          <circle
            cx="570"
            cy="198"
            r="54"
            fill="none"
            className="stroke-muted-foreground/45"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />

          {/* Axis-aligned ellipse (rx = 76, ry = 32) */}
          <ellipse
            cx="570"
            cy="198"
            rx="76"
            ry="32"
            className="fill-amber-500/14 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2"
          />

          {/* Scaled semi-axes */}
          <line
            x1="570"
            y1="198"
            x2="645"
            y2="198"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.5"
            markerEnd="url(#l30-pipe-arrow-blue)"
          />
          <line
            x1="570"
            y1="198"
            x2="570"
            y2="167"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.5"
            markerEnd="url(#l30-pipe-arrow-purple)"
          />

          <polyline points="581,198 581,187 570,187" fill="none" className="stroke-foreground/75" strokeWidth="1.3" />
          <circle cx="570" cy="198" r="3.2" className="fill-foreground" />

          <text x="615" y="189" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono font-bold">
            σ₁e₁
          </text>
          <text x="577" y="160" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-bold">
            σ₂e₂
          </text>
          <text x="512" y="131" className="fill-muted-foreground text-[9.5px] font-mono">
            虚线：原单位圆
          </text>

          {/* Footer card info */}
          <rect x="482" y="286" width="176" height="66" rx="7" className="fill-amber-500/10 stroke-amber-500/35" />
          <text x="570" y="305" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[11px] font-mono font-semibold">
            Σ = diag(σ₁, σ₂)
          </text>
          <text x="570" y="324" textAnchor="middle" className="fill-foreground text-[10.5px]">
            沿主轴按 σ₁ ≥ σ₂ &gt; 0 伸缩
          </text>
          <text x="570" y="341" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            形状变为正半轴长 σ₁, σ₂ 的椭圆
          </text>
        </g>

        {/* ================= TRANSITION 2 -> 3: U ================= */}
        <g>
          <line
            x1="671"
            y1="198"
            x2="693"
            y2="198"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.2"
            markerEnd="url(#l30-pipe-arrow-emerald)"
          />
          <rect x="668" y="166" width="28" height="20" rx="5" className="fill-emerald-500/15 stroke-emerald-500/50" />
          <text x="682" y="180" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11.5px] font-mono font-bold">
            U
          </text>
        </g>

        {/* ================= STAGE 3: AFTER U (FINAL ELLIPSE) ================= */}
        <g>
          <rect
            x="696"
            y="58"
            width="200"
            height="306"
            rx="10"
            className="fill-card/60 stroke-emerald-500/45"
            strokeWidth="1.6"
          />
          <rect
            x="708"
            y="69"
            width="176"
            height="24"
            rx="6"
            className="fill-emerald-500/12"
          />
          <text x="796" y="85" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11.5px] font-bold">
            3. 正交定向 Ax = UΣVᵀx
          </text>

          {/* Coordinate grid axes */}
          <line x1="710" y1="198" x2="882" y2="198" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="796" y1="124" x2="796" y2="272" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

          {/* Rotated Ellipse by -25 deg around (796, 198) */}
          <g transform="translate(796, 198) rotate(-25)">
            <ellipse
              cx="0"
              cy="0"
              rx="76"
              ry="32"
              className="fill-emerald-500/15 stroke-emerald-600 dark:stroke-emerald-400"
              strokeWidth="2.2"
            />
            <line
              x1="0"
              y1="0"
              x2="75"
              y2="0"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              markerEnd="url(#l30-pipe-arrow-blue)"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-31"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2.5"
              markerEnd="url(#l30-pipe-arrow-purple)"
            />
            <polyline points="10,0 10,-10 0,-10" fill="none" className="stroke-foreground/80" strokeWidth="1.3" />
          </g>

          <circle cx="796" cy="198" r="3.2" className="fill-foreground" />
          {/* Exact rotated endpoints:
              sigma1*u1 tip ~ (796 + 68.9, 198 - 32.1) = (864.9, 165.9)
              sigma2*u2 tip ~ (796 - 13.5, 198 - 29.0) = (782.5, 169.0) */}
          <text x="855" y="156" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono font-bold">
            σ₁u₁
          </text>
          <text x="752" y="160" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-bold">
            σ₂u₂
          </text>

          {/* Footer card info */}
          <rect x="706" y="286" width="180" height="66" rx="7" className="fill-emerald-500/10 stroke-emerald-500/35" />
          <text x="796" y="305" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-semibold">
            Av₁ = σ₁u₁,  Av₂ = σ₂u₂
          </text>
          <text x="796" y="324" textAnchor="middle" className="fill-foreground text-[10.5px]">
            u₁ ⟂ u₂：椭圆正交主半轴
          </text>
          <text x="796" y="341" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            ‖A‖₂ = σ₁ (最大伸缩率)
          </text>
        </g>

        {/* ================= BOTTOM KEY INSIGHT BAR ================= */}
        <rect
          x="24"
          y="378"
          width="872"
          height="46"
          rx="10"
          className="fill-muted/45 stroke-border"
          strokeWidth="1.2"
        />
        <rect x="36" y="389" width="84" height="24" rx="6" className="fill-emerald-500/15 stroke-emerald-500/40" />
        <text x="78" y="405" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-bold">
          核心几何事实
        </text>
        <text x="134" y="405" className="fill-foreground text-[11.5px]">
          任何矩阵 A ∈ ℝᵐˣⁿ（无论是否方阵、是否可逆或亏损）都存在至少一组正交输入轴 &#123;vᵢ&#125;，经 A 映射后仍保持两两正交 &#123;σᵢuᵢ&#125;！
        </text>
      </svg>
    </MathDiagram>
  );
}

export function SvdFourSubspacesOrthonormalMapDiagram({
  caption = 'SVD 与线性代数基本定理终极合璧：输入空间 $\\mathbb{R}^n = \\operatorname{Row}(A) \\oplus \\operatorname{Null}(A)$ 的标准正交基 $\\{\\mathbf{v}_1,\\dots,\\mathbf{v}_n\\}$ 映射至输出空间 $\\mathbb{R}^m = \\operatorname{Col}(A) \\oplus \\operatorname{Null}(A^T)$ 的标准正交基 $\\{\\mathbf{u}_1,\\dots,\\mathbf{u}_m\\}$，严格满足 $A\\mathbf{v}_i = \\sigma_i \\mathbf{u}_i$（$1 \\le i \\le r$）与 $A\\mathbf{v}_i = \\mathbf{0}$（$i \\gt r$），同时分解为 $r$ 个秩 1 正交外积之和 $A = \\sum_{i=1}^r \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T$。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="The Big Picture of SVD & The Four Fundamental Subspaces (Orthonormal Bases)"
      caption={caption}
    >
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="Big picture of SVD showing Row(A) orthogonal complement Null(A) in Rn with basis v1..vr and v(r+1)..vn mapping via sigma_i to Col(A) orthogonal complement Null(AT) in Rm with basis u1..ur and u(r+1)..um, plus rank-1 outer product sum"
      >
        <defs>
          <marker
            id="l30-sub-arrow-blue"
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
            id="l30-sub-arrow-purple"
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
            id="l30-sub-arrow-emerald"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
        </defs>

        {/* ================= HEADER ================= */}
        <text x="460" y="24" textAnchor="middle" className="fill-foreground text-[14px] font-bold">
          线性代数的巅峰总图：SVD 为四个基本子空间同时配备标准正交基
        </text>
        <text x="460" y="42" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
          A ∈ ℝᵐˣⁿ, rank(A) = r · U = [U_r  U_(m-r)] ∈ ℝᵐˣᵐ,  V = [V_r  V_(n-r)] ∈ ℝⁿˣⁿ
        </text>

        {/* ================= LEFT PANEL: INPUT SPACE R^n ================= */}
        <g>
          <rect
            x="22"
            y="56"
            width="270"
            height="288"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="157" y="78" textAnchor="middle" className="fill-foreground text-[12.5px] font-bold">
            输入空间 ℝⁿ = Row(A) ⊕ Null(A)
          </text>

          {/* Row(A) Box */}
          <rect
            x="38"
            y="90"
            width="238"
            height="112"
            rx="9"
            className="fill-blue-500/12 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.6"
          />
          <text x="52" y="110" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-mono font-bold">
            Row(A) = Col(Aᵀ)  (dim = r)
          </text>
          <text x="52" y="130" className="fill-foreground text-[11px] font-mono">
            标准正交基：&#123;v₁, v₂, ..., v_r&#125;
          </text>
          <text x="52" y="150" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono">
            V_r = [v₁  v₂  ⋯  v_r] ∈ ℝⁿˣʳ
          </text>
          <rect x="52" y="162" width="210" height="28" rx="6" className="fill-background/70 stroke-blue-500/35" />
          <text x="157" y="180" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            前 r 个奇异方向：唯一决定输出 Ax
          </text>

          {/* 90-degree orthogonality bridge at right boundary (292, 212) */}
          <line x1="38" y1="212" x2="292" y2="212" className="stroke-border" strokeWidth="1.2" strokeDasharray="4 3" />
          <rect x="106" y="201" width="102" height="20" rx="10" className="fill-background stroke-border" />
          <text x="157" y="215" textAnchor="middle" className="fill-foreground text-[10px] font-mono font-bold">
            90° 正交补 (⟂)
          </text>
          <circle cx="292" cy="212" r="4.5" className="fill-foreground" />
          <text x="300" y="216" className="fill-foreground text-[11px] font-mono font-bold">
            0
          </text>

          {/* Null(A) Box */}
          <rect
            x="38"
            y="224"
            width="238"
            height="106"
            rx="9"
            className="fill-emerald-500/12 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.6"
          />
          <text x="52" y="244" className="fill-emerald-700 dark:fill-emerald-300 text-[12px] font-mono font-bold">
            Null(A)  (dim = n − r)
          </text>
          <text x="52" y="264" className="fill-foreground text-[11px] font-mono">
            标准正交基：&#123;v_(r+1), ..., v_n&#125;
          </text>
          <text x="52" y="284" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono">
            V_(n−r) = [v_(r+1) ⋯ v_n]
          </text>
          <rect x="52" y="294" width="210" height="26" rx="6" className="fill-background/70 stroke-emerald-500/35" />
          <text x="157" y="311" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            对应 AᵀA 的零特征值 (σ_i = 0)
          </text>
        </g>

        {/* ================= CENTER MAPPING ARROWS ================= */}
        <g>
          {/* Top summary pill */}
          <rect
            x="320"
            y="60"
            width="280"
            height="36"
            rx="8"
            className="fill-purple-500/10 stroke-purple-500/40"
          />
          <text x="460" y="75" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-mono font-bold">
            对角化双射：A V_r = U_r Σ_r
          </text>
          <text x="460" y="90" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            σ₁ ≥ σ₂ ≥ ⋯ ≥ σ_r &gt; 0 (一一保维正交对应)
          </text>

          {/* Basis mapping arrows from Row(A) to Col(A) */}
          {/* Row 1: v1 -> sigma1 u1 */}
          <line
            x1="280"
            y1="118"
            x2="634"
            y2="118"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.2"
            markerEnd="url(#l30-sub-arrow-blue)"
          />
          <rect x="386" y="106" width="148" height="22" rx="6" className="fill-background stroke-blue-500/45" />
          <text x="460" y="121" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">
            Av₁ = σ₁ u₁
          </text>

          {/* Row 2: v2 -> sigma2 u2 */}
          <line
            x1="280"
            y1="150"
            x2="634"
            y2="150"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            markerEnd="url(#l30-sub-arrow-blue)"
          />
          <rect x="386" y="138" width="148" height="22" rx="6" className="fill-background stroke-blue-500/45" />
          <text x="460" y="153" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">
            Av₂ = σ₂ u₂
          </text>

          {/* Row r: vr -> sigmar ur */}
          <line
            x1="280"
            y1="184"
            x2="634"
            y2="184"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.2"
            markerEnd="url(#l30-sub-arrow-purple)"
          />
          <rect x="386" y="172" width="148" height="22" rx="6" className="fill-background stroke-purple-500/45" />
          <text x="460" y="187" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-mono font-bold">
            Av_r = σ_r u_r
          </text>

          {/* Nullspace collapse arrow from Null(A) to output origin 0 at (628, 212) */}
          <path
            d="M 280 268 C 415 268, 520 250, 620 214"
            fill="none"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.2"
            strokeDasharray="5 3"
            markerEnd="url(#l30-sub-arrow-emerald)"
          />
          <rect x="348" y="232" width="214" height="24" rx="6" className="fill-background stroke-emerald-500/50" />
          <text x="455" y="248" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">
            Av_i = 0  (i &gt; r, 全部压扁至原点)
          </text>

          {/* Full vs Thin SVD Box */}
          <rect
            x="320"
            y="278"
            width="280"
            height="64"
            rx="9"
            className="fill-muted/40 stroke-border"
            strokeWidth="1.2"
          />
          <text x="460" y="298" textAnchor="middle" className="fill-foreground text-[11.5px] font-mono font-bold">
            Full: A = Uₘₓₘ Σₘₓₙ Vₙₓₙᵀ
          </text>
          <text x="460" y="316" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[11.5px] font-mono font-bold">
            Thin: A = U_r Σ_r V_rᵀ  (r×r 对角核心)
          </text>
          <text x="460" y="333" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            截掉 Σ 中全零行列不损失任何信息
          </text>
        </g>

        {/* ================= RIGHT PANEL: OUTPUT SPACE R^m ================= */}
        <g>
          <rect
            x="628"
            y="56"
            width="270"
            height="288"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="763" y="78" textAnchor="middle" className="fill-foreground text-[12.5px] font-bold">
            输出空间 ℝᵐ = Col(A) ⊕ Null(Aᵀ)
          </text>

          {/* Col(A) Box */}
          <rect
            x="644"
            y="90"
            width="238"
            height="112"
            rx="9"
            className="fill-purple-500/12 stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.6"
          />
          <text x="658" y="110" className="fill-purple-700 dark:fill-purple-300 text-[12px] font-mono font-bold">
            Col(A)  (dim = r)
          </text>
          <text x="658" y="130" className="fill-foreground text-[11px] font-mono">
            标准正交基：&#123;u₁, u₂, ..., u_r&#125;
          </text>
          <text x="658" y="150" className="fill-purple-700 dark:fill-purple-300 text-[10.5px] font-mono">
            严格锁定：u_i = (1/σ_i) A v_i
          </text>
          <rect x="658" y="162" width="210" height="28" rx="6" className="fill-background/70 stroke-purple-500/35" />
          <text x="763" y="180" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-semibold">
            不可与 V 独立求解 AAᵀ（防符号失配!）
          </text>

          {/* 90-degree orthogonality bridge at left boundary (628, 212) */}
          <line x1="628" y1="212" x2="882" y2="212" className="stroke-border" strokeWidth="1.2" strokeDasharray="4 3" />
          <rect x="712" y="201" width="102" height="20" rx="10" className="fill-background stroke-border" />
          <text x="763" y="215" textAnchor="middle" className="fill-foreground text-[10px] font-mono font-bold">
            90° 正交补 (⟂)
          </text>
          <circle cx="628" cy="212" r="4.5" className="fill-foreground" />
          <text x="614" y="216" className="fill-foreground text-[11px] font-mono font-bold">
            0
          </text>

          {/* Null(A^T) Box */}
          <rect
            x="644"
            y="224"
            width="238"
            height="106"
            rx="9"
            className="fill-amber-500/12 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.6"
          />
          <text x="658" y="244" className="fill-amber-800 dark:fill-amber-300 text-[12px] font-mono font-bold">
            Null(Aᵀ)  (dim = m − r)
          </text>
          <text x="658" y="264" className="fill-foreground text-[11px] font-mono">
            标准正交基：&#123;u_(r+1), ..., u_m&#125;
          </text>
          <text x="658" y="284" className="fill-amber-800 dark:fill-amber-300 text-[10.5px] font-mono">
            U_(m−r) = [u_(r+1) ⋯ u_m]
          </text>
          <rect x="658" y="294" width="210" height="26" rx="6" className="fill-background/70 stroke-amber-500/35" />
          <text x="763" y="311" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            补充正交补基将 U 扩充为 m×m 正交阵
          </text>
        </g>

        {/* ================= BOTTOM RANK-1 OUTER PRODUCT SUM BAR ================= */}
        <rect
          x="22"
          y="358"
          width="876"
          height="66"
          rx="10"
          className="fill-blue-500/[0.06] stroke-blue-500/35"
          strokeWidth="1.4"
        />
        <rect x="36" y="370" width="124" height="22" rx="6" className="fill-blue-500/15 stroke-blue-500/40" />
        <text x="98" y="385" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-bold">
          秩 1 外积和展开
        </text>
        <text x="174" y="386" className="fill-foreground text-[12.5px] font-mono font-bold">
          A  =  σ₁ u₁ v₁ᵀ  +  σ₂ u₂ v₂ᵀ  +  ⋯  +  σ_r u_r v_rᵀ  =  ∑ σ_i u_i v_iᵀ  (i = 1,…,r)
        </text>
        <text x="460" y="409" textAnchor="middle" className="fill-muted-foreground text-[11px]">
          按奇异值从大到小排列的 r 个正交秩 1 矩阵累加；仅保留前 k 项即为最小二乘/谱范数下的最优秩 k 逼近！
        </text>
      </svg>
    </MathDiagram>
  );
}
