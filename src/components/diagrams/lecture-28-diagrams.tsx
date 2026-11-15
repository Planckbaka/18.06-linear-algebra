import * as React from 'react'
import { MathDiagram } from './math-diagram'

/**
 * L28 Diagram 1: 二次型能量曲面极小值（正定碗 vs. 不定鞍面）与等高椭球主轴几何
 */
export function QuadraticBowlAndEllipsoidAxesDiagram({
  caption = '二次型能量曲面与等高椭球几何（左：正定抛物面极小值碗 vs. 不定鞍面 $\\lambda_1 \\gt 0, \\lambda_2 \\lt 0$；右：等高椭圆 $\\mathbf{x}^T A \\mathbf{x} = 1$ 沿特征主轴 $\\mathbf{q}_1, \\mathbf{q}_2$ 对齐，且特征值越大曲率越陡、半轴长 $1/\\sqrt{\\lambda_i}$ 越短）',
}: {
  caption?: string
}) {
  return (
    <MathDiagram title="二次型曲面极小值与等高椭球主轴几何" caption={caption}>
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        aria-label="二次型能量曲面极小值与等高椭球特征主轴几何示意图"
      >
        <defs>
          <marker
            id="l28-arrow-default"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-foreground/60" />
          </marker>
          <marker
            id="l28-arrow-blue"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l28-arrow-emerald"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l28-arrow-purple"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <linearGradient id="l28-bowl-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="l28-saddle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* ================= 左面板：能量曲面极小值碗 vs 鞍面 ================= */}
        <rect
          x="18"
          y="18"
          width="424"
          height="404"
          rx="12"
          className="fill-card/60 stroke-border"
          strokeWidth="1.5"
        />
        <text x="36" y="46" className="fill-foreground font-semibold text-sm">
          二次型能量曲面 f(x₁, x₂) = xᵀ A x 形态对比
        </text>

        {/* 上子图：正定极小值碗 */}
        <rect
          x="32"
          y="62"
          width="396"
          height="166"
          rx="10"
          className="fill-muted/25 stroke-border/70"
          strokeWidth="1"
        />
        {/* 抛物面填充与轮廓 */}
        <path
          d="M 60 104 A 68 16 0 0 1 196 104 Q 128 308 60 104 Z"
          fill="url(#l28-bowl-grad)"
        />
        {/* 中心垂直高度轴 */}
        <line
          x1="128"
          y1="206"
          x2="128"
          y2="72"
          className="stroke-foreground/40"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          markerEnd="url(#l28-arrow-default)"
        />
        <text x="135" y="80" className="fill-muted-foreground text-[11px] font-mono">
          f(x)
        </text>
        {/* 顶部椭圆形开口（后半虚线、前半实线） */}
        <path
          d="M 60 104 A 68 16 0 0 1 196 104"
          fill="none"
          className="stroke-emerald-600/50 dark:stroke-emerald-400/50"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M 60 104 A 68 16 0 0 0 196 104"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2"
        />
        {/* 中部与下部水平等高圈 */}
        <ellipse
          cx="128"
          cy="155"
          rx="48"
          ry="11"
          fill="none"
          className="stroke-emerald-600/60 dark:stroke-emerald-400/60"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <ellipse
          cx="128"
          cy="181"
          rx="34"
          ry="8"
          fill="none"
          className="stroke-emerald-600/70 dark:stroke-emerald-400/70"
          strokeWidth="1.2"
        />
        {/* 抛物面外侧包络 */}
        <path
          d="M 60 104 Q 128 308 196 104"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2.2"
        />
        {/* 严格局部/全局极小值点 */}
        <circle
          cx="128"
          cy="206"
          r="9"
          className="fill-none stroke-emerald-600/50 dark:stroke-emerald-400/50"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />
        <circle
          cx="128"
          cy="206"
          r="4.5"
          className="fill-emerald-600 dark:fill-emerald-400 stroke-background"
          strokeWidth="1.5"
        />
        <text
          x="128"
          y="222"
          textAnchor="middle"
          className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-semibold"
        >
          唯一极小值 (0, 0)
        </text>

        {/* 正定碗右侧说明 */}
        <rect
          x="218"
          y="74"
          width="196"
          height="24"
          rx="6"
          className="fill-emerald-500/15 stroke-emerald-500/40"
          strokeWidth="1"
        />
        <text
          x="228"
          y="90"
          className="fill-emerald-700 dark:fill-emerald-300 text-xs font-semibold font-mono"
        >
          正定 (SPD): λ₁ &gt; 0, λ₂ &gt; 0
        </text>
        <text x="218" y="118" className="fill-foreground text-xs">
          • 沿所有方向曲率均向上弯曲
        </text>
        <text x="218" y="139" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono">
          • xᵀAx &gt; 0  (∀ x ≠ 0)
        </text>
        <text x="218" y="160" className="fill-foreground text-xs">
          • Hessian H ≻ 0 ⇒ 严格极小
        </text>
        <text x="218" y="185" className="fill-muted-foreground text-[11px] font-mono">
          例：f = 2(x₁+3x₂)² + 2x₂²
        </text>
        <text x="218" y="204" className="fill-muted-foreground text-[11px] font-mono">
          主元 d₁ = 2 &gt; 0,  d₂ = 2 &gt; 0
        </text>

        {/* 下子图：不定鞍面 */}
        <rect
          x="32"
          y="240"
          width="396"
          height="166"
          rx="10"
          className="fill-muted/25 stroke-border/70"
          strokeWidth="1"
        />
        {/* 鞍面曲面填充与四条边界曲线 */}
        <path
          d="M 52 308 Q 104 349.6 156 308 Q 180 284.4 204 344 Q 152 385.6 100 344 Q 76 284.4 52 308 Z"
          fill="url(#l28-saddle-grad)"
          className="stroke-border/80"
          strokeWidth="1.2"
        />
        {/* 沿 q1 向上弯曲的曲线 (λ1 > 0) */}
        <path
          d="M 76 305.2 Q 128 346.8 180 305.2"
          fill="none"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2.4"
        />
        <text x="166" y="294" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono font-semibold">
          λ₁&gt;0 向上
        </text>
        {/* 沿 q2 向下弯曲的拱线 (λ2 < 0) */}
        <path
          d="M 104 328.8 Q 128 305.2 152 364.8"
          fill="none"
          className="stroke-rose-600 dark:stroke-rose-400"
          strokeWidth="2.4"
        />
        <text x="134" y="381" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono font-semibold">
          λ₂&lt;0 向下
        </text>
        {/* 鞍点标记 */}
        <circle
          cx="128"
          cy="326"
          r="4.5"
          className="fill-amber-500 dark:fill-amber-400 stroke-background"
          strokeWidth="1.5"
        />
        <text x="48" y="378" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-semibold">
          鞍点 (0, 0)
        </text>
        <line
          x1="88"
          y1="366"
          x2="122"
          y2="331"
          className="stroke-amber-600/70 dark:stroke-amber-400/70"
          strokeWidth="1"
          strokeDasharray="2 2"
        />

        {/* 不定鞍面右侧说明 */}
        <rect
          x="218"
          y="252"
          width="196"
          height="24"
          rx="6"
          className="fill-rose-500/15 stroke-rose-500/40"
          strokeWidth="1"
        />
        <text
          x="226"
          y="268"
          className="fill-rose-700 dark:fill-rose-300 text-xs font-semibold font-mono"
        >
          不定 (Indefinite): λ₁&gt;0, λ₂&lt;0
        </text>
        <text x="218" y="296" className="fill-foreground text-xs">
          • 沿 q₁ 向上弯（局部极小）
        </text>
        <text x="218" y="317" className="fill-foreground text-xs">
          • 沿 q₂ 向下弯（局部极大）
        </text>
        <text x="218" y="338" className="fill-rose-600 dark:fill-rose-400 text-xs">
          • 驻点 ∇f = 0 仅为鞍点，非极值
        </text>
        <text x="218" y="363" className="fill-muted-foreground text-[11px] font-mono">
          例：f = 2(x₁+3x₂)² - 11x₂²
        </text>
        <text x="218" y="382" className="fill-muted-foreground text-[11px] font-mono">
          主元 d₁ = 2 &gt; 0,  d₂ = -11 &lt; 0
        </text>

        {/* ================= 右面板：等高椭圆与特征主轴几何 ================= */}
        <rect
          x="458"
          y="18"
          width="444"
          height="404"
          rx="12"
          className="fill-card/60 stroke-border"
          strokeWidth="1.5"
        />
        <text x="476" y="46" className="fill-foreground font-semibold text-sm">
          等高椭圆 xᵀ A x = 1 与特征主轴（A = QΛQᵀ）
        </text>

        {/* 物理坐标系 x1, x2 */}
        <line
          x1="504"
          y1="210"
          x2="846"
          y2="210"
          className="stroke-foreground/45"
          strokeWidth="1.3"
          markerEnd="url(#l28-arrow-default)"
        />
        <text x="854" y="214" className="fill-foreground text-xs font-mono">
          x₁
        </text>
        <line
          x1="672"
          y1="316"
          x2="672"
          y2="74"
          className="stroke-foreground/45"
          strokeWidth="1.3"
          markerEnd="url(#l28-arrow-default)"
        />
        <text x="679" y="82" className="fill-foreground text-xs font-mono">
          x₂
        </text>

        {/* 旋转 30° 后的同心等高椭圆 xᵀAx = 1 与 0.36 */}
        <ellipse
          cx="672"
          cy="210"
          rx="116"
          ry="58"
          transform="rotate(-30 672 210)"
          className="fill-blue-500/10 stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2.2"
        />
        <ellipse
          cx="672"
          cy="210"
          rx="69.6"
          ry="34.8"
          transform="rotate(-30 672 210)"
          fill="none"
          className="stroke-blue-600/45 dark:stroke-blue-400/45"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />

        {/* 主轴反向虚线延长 */}
        <line
          x1="563.7"
          y1="272.5"
          x2="672"
          y2="210"
          className="stroke-purple-600/45 dark:stroke-purple-400/45"
          strokeWidth="1.3"
          strokeDasharray="4 3"
        />
        <line
          x1="706"
          y1="268.9"
          x2="672"
          y2="210"
          className="stroke-emerald-600/45 dark:stroke-emerald-400/45"
          strokeWidth="1.3"
          strokeDasharray="4 3"
        />

        {/* 旋转角 θ 弧线 */}
        <path
          d="M 706 210 A 34 34 0 0 0 701.4 193"
          fill="none"
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="1.5"
        />
        <text x="711" y="201" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono">
          θ
        </text>

        {/* 正交主轴直角标记 */}
        <polyline
          points="682.4,204 676.4,193.6 666,199.6"
          fill="none"
          className="stroke-foreground/60"
          strokeWidth="1.2"
        />

        {/* 特征向量主轴 q1（短半轴，高曲率） */}
        <line
          x1="672"
          y1="210"
          x2="629"
          y2="135.5"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2.4"
          markerEnd="url(#l28-arrow-emerald)"
        />
        <circle
          cx="643"
          cy="159.8"
          r="3.8"
          className="fill-emerald-600 dark:fill-emerald-400 stroke-background"
          strokeWidth="1.2"
        />

        {/* 特征向量主轴 q2（长半轴，缓曲率） */}
        <line
          x1="672"
          y1="210"
          x2="796.7"
          y2="138"
          className="stroke-purple-600 dark:stroke-purple-400"
          strokeWidth="2.4"
          markerEnd="url(#l28-arrow-purple)"
        />
        <circle
          cx="772.5"
          cy="152"
          r="3.8"
          className="fill-purple-600 dark:fill-purple-400 stroke-background"
          strokeWidth="1.2"
        />

        {/* 原点标记 */}
        <circle cx="672" cy="210" r="3.2" className="fill-foreground" />

        {/* q1 短轴标注 */}
        <text x="474" y="99" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-semibold">
          q₁（短半轴 = 1/√λ₁）
        </text>
        <text x="474" y="117" className="fill-muted-foreground text-[11px]">
          λ₁ 较大 ⇒ 碗壁更陡 ⇒ 轴更短
        </text>
        <line
          x1="600"
          y1="110"
          x2="626"
          y2="131"
          className="stroke-emerald-600/70 dark:stroke-emerald-400/70"
          strokeWidth="1.1"
          strokeDasharray="2 2"
        />

        {/* q2 长轴标注 */}
        <text x="748" y="99" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono font-semibold">
          q₂（长半轴 = 1/√λ₂）
        </text>
        <text x="748" y="117" className="fill-muted-foreground text-[11px]">
          λ₂ 较小 ⇒ 碗壁更缓 ⇒ 轴更长
        </text>
        <line
          x1="798"
          y1="122"
          x2="798"
          y2="134"
          className="stroke-purple-600/70 dark:stroke-purple-400/70"
          strokeWidth="1.1"
          strokeDasharray="2 2"
        />

        {/* 等高线标签 */}
        <text x="752" y="274" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-semibold">
          等高线：xᵀAx = 1
        </text>
        <line
          x1="752"
          y1="262"
          x2="740"
          y2="246"
          className="stroke-blue-600/70 dark:stroke-blue-400/70"
          strokeWidth="1.1"
          strokeDasharray="2 2"
        />

        {/* 底部主轴定理公式总结 */}
        <rect
          x="474"
          y="334"
          width="412"
          height="72"
          rx="8"
          className="fill-blue-500/10 stroke-blue-500/30"
          strokeWidth="1"
        />
        <text x="488" y="355" className="fill-foreground text-xs font-mono font-semibold">
          主轴换基 y = Qᵀx ⇒ xᵀAx = λ₁ y₁² + λ₂ y₂² = 1
        </text>
        <text x="488" y="375" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono">
          标准椭圆方程：y₁² / (1/√λ₁)² + y₂² / (1/√λ₂)² = 1
        </text>
        <text x="488" y="395" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-medium">
          警惕易错点：等高椭球半轴长为 1/√λᵢ，切勿误作 λᵢ 或 √λᵢ！
        </text>
      </svg>
    </MathDiagram>
  )
}

/**
 * L28 Diagram 2: 实对称正定矩阵（SPD）五大等价充要判据循环证明网络
 */
export function SpdFiveTestsEquivalenceWebDiagram({
  caption = '实对称正定矩阵（SPD）五大等价充要判据循环证明网络：所有判据均以实对称前提 $A = A^T \\in \\mathbb{R}^{n\\times n}$ 为基石（对非对称矩阵，正特征值或 $\\mathbf{x}^T M \\mathbf{x} \\gt 0$ 均可能产生致命误判）',
}: {
  caption?: string
}) {
  return (
    <MathDiagram title="实对称正定矩阵五大等价判据循环关系图" caption={caption}>
      <svg
        viewBox="0 0 920 460"
        className="w-full h-auto font-sans select-none"
        aria-label="实对称正定矩阵五大等价充要判据闭环网络图"
      >
        <defs>
          <marker
            id="l28-web-arrow-blue"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l28-web-arrow-emerald"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l28-web-arrow-purple"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l28-web-arrow-amber"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
        </defs>

        {/* 外框背景 */}
        <rect
          x="12"
          y="10"
          width="896"
          height="442"
          rx="14"
          className="fill-card/50 stroke-border"
          strokeWidth="1.5"
        />

        {/* 顶部前提警告横幅 */}
        <rect
          x="28"
          y="22"
          width="864"
          height="40"
          rx="8"
          className="fill-amber-500/15 stroke-amber-500/50"
          strokeWidth="1.2"
        />
        <text
          x="460"
          y="47"
          textAnchor="middle"
          className="fill-amber-800 dark:fill-amber-200 text-xs font-semibold"
        >
          必备前提 (Prerequisite)：A = Aᵀ ∈ ℝⁿˣⁿ 为实对称矩阵！（若非对称，正特征值 ≠ xᵀMx &gt; 0，五大判据不再等价）
        </text>

        {/* ================= 中心枢纽 ================= */}
        <rect
          x="362"
          y="196"
          width="196"
          height="74"
          rx="14"
          className="fill-emerald-500/15 stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2"
        />
        <text
          x="460"
          y="222"
          textAnchor="middle"
          className="fill-emerald-700 dark:fill-emerald-300 text-sm font-bold"
        >
          A ∈ ℝⁿˣⁿ 为 SPD
        </text>
        <text
          x="460"
          y="243"
          textAnchor="middle"
          className="fill-foreground text-xs font-mono"
        >
          A = Aᵀ 且 A ≻ 0
        </text>
        <text
          x="460"
          y="260"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          （以下五大条件两两互为充要条件）
        </text>

        {/* ================= 节点 (1) 顶部：二次型能量 ================= */}
        <rect
          x="306"
          y="76"
          width="308"
          height="66"
          rx="10"
          className="fill-blue-500/10 stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="1.6"
        />
        <text
          x="460"
          y="99"
          textAnchor="middle"
          className="fill-blue-700 dark:fill-blue-300 text-xs font-bold"
        >
          (1) 二次型能量严格正定 (Quadratic Form)
        </text>
        <text
          x="460"
          y="119"
          textAnchor="middle"
          className="fill-foreground text-xs font-mono font-semibold"
        >
          对任意非零向量 x ∈ ℝⁿ \ &#123;0&#125;，均有 xᵀ A x &gt; 0
        </text>
        <text
          x="460"
          y="134"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          几何意义：原点为唯一严格全局极小值点
        </text>

        {/* ================= 节点 (2) 右上：特征值全正 ================= */}
        <rect
          x="626"
          y="158"
          width="266"
          height="78"
          rx="10"
          className="fill-purple-500/10 stroke-purple-600 dark:stroke-purple-400"
          strokeWidth="1.6"
        />
        <text
          x="759"
          y="181"
          textAnchor="middle"
          className="fill-purple-700 dark:fill-purple-300 text-xs font-bold"
        >
          (2) 全部特征值严格为正 (Eigenvalues)
        </text>
        <text
          x="759"
          y="202"
          textAnchor="middle"
          className="fill-foreground text-xs font-mono font-semibold"
        >
          λ₁, λ₂, ..., λₙ &gt; 0  (全为正实数)
        </text>
        <text
          x="759"
          y="222"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          谱定理 A = QΛQᵀ ⇒ 主轴正交、等高线为封闭椭球
        </text>

        {/* ================= 节点 (3) 左上：顺序主子式 ================= */}
        <rect
          x="28"
          y="158"
          width="266"
          height="78"
          rx="10"
          className="fill-amber-500/10 stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="1.6"
        />
        <text
          x="161"
          y="181"
          textAnchor="middle"
          className="fill-amber-700 dark:fill-amber-300 text-xs font-bold"
        >
          (3) 顺序主子式全正 (Sylvester 判据)
        </text>
        <text
          x="161"
          y="202"
          textAnchor="middle"
          className="fill-foreground text-xs font-mono font-semibold"
        >
          det(Aₖ) &gt; 0  (k = 1, 2, ..., n)
        </text>
        <text
          x="161"
          y="222"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          左上角 k×k 主子阵均正定，且 det(Aₖ) = d₁···dₖ
        </text>

        {/* ================= 节点 (4) 左下：消元主元 ================= */}
        <rect
          x="28"
          y="304"
          width="318"
          height="82"
          rx="10"
          className="fill-emerald-500/10 stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="1.6"
        />
        <text
          x="187"
          y="327"
          textAnchor="middle"
          className="fill-emerald-700 dark:fill-emerald-300 text-xs font-bold"
        >
          (4) 高斯消元主元全正 (All Pivots Positive)
        </text>
        <text
          x="187"
          y="347"
          textAnchor="middle"
          className="fill-foreground text-xs font-mono font-semibold"
        >
          无需行交换：A = L D Lᵀ 且 d₁, ..., dₙ &gt; 0
        </text>
        <text
          x="187"
          y="366"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          代数本质：二次型配方法 xᵀAx = ∑ dᵢ (yᵢ)² 的系数全正
        </text>

        {/* ================= 节点 (5) 右下：满列秩分解 RᵀR ================= */}
        <rect
          x="574"
          y="304"
          width="318"
          height="82"
          rx="10"
          className="fill-blue-500/10 stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="1.6"
        />
        <text
          x="733"
          y="327"
          textAnchor="middle"
          className="fill-blue-700 dark:fill-blue-300 text-xs font-bold"
        >
          (5) 满列秩内积分解 (A = RᵀR)
        </text>
        <text
          x="733"
          y="347"
          textAnchor="middle"
          className="fill-foreground text-xs font-mono font-semibold"
        >
          ∃ R ∈ ℝᵐˣⁿ (rank R = n) 使 A = Rᵀ R
        </text>
        <text
          x="733"
          y="366"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          特例：Cholesky A = L_c L_cᵀ (L_c = L√D) 与对称根 A¹/²
        </text>

        {/* ================= 循环证明箭头与简明标签 ================= */}
        {/* (1) -> (2) */}
        <path
          d="M 614 114 Q 685 118 726 154"
          fill="none"
          className="stroke-purple-600 dark:stroke-purple-400"
          strokeWidth="2"
          markerEnd="url(#l28-web-arrow-purple)"
        />
        <rect x="646" y="102" width="118" height="18" rx="4" className="fill-card stroke-border/60" strokeWidth="0.8" />
        <text x="705" y="114" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[10px] font-mono font-semibold">
          (1)⇒(2): 取 x = qᵢ
        </text>

        {/* (2) -> (5) */}
        <line
          x1="780"
          y1="236"
          x2="780"
          y2="300"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2"
          markerEnd="url(#l28-web-arrow-blue)"
        />
        <rect x="708" y="259" width="144" height="18" rx="4" className="fill-card stroke-border/60" strokeWidth="0.8" />
        <text x="780" y="271" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-semibold">
          (2)⇒(5): R = √Λ Qᵀ
        </text>

        {/* (5) -> (1) 穿过中心右侧走廊 */}
        <path
          d="M 632 304 Q 598 222 544 146"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2"
          markerEnd="url(#l28-web-arrow-emerald)"
        />
        <rect x="564" y="248" width="124" height="18" rx="4" className="fill-card stroke-border/60" strokeWidth="0.8" />
        <text x="626" y="260" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-semibold">
          (5)⇒(1): ‖Rx‖² &gt; 0
        </text>

        {/* (1) -> (3) */}
        <path
          d="M 306 114 Q 235 118 194 154"
          fill="none"
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="2"
          markerEnd="url(#l28-web-arrow-amber)"
        />
        <rect x="156" y="102" width="138" height="18" rx="4" className="fill-card stroke-border/60" strokeWidth="0.8" />
        <text x="225" y="114" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-semibold">
          (1)⇒(3): 限制前 k 维
        </text>

        {/* (3) <-> (4) */}
        <line
          x1="160"
          y1="240"
          x2="160"
          y2="300"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2"
          markerStart="url(#l28-web-arrow-emerald)"
          markerEnd="url(#l28-web-arrow-emerald)"
        />
        <rect x="70" y="259" width="180" height="18" rx="4" className="fill-card stroke-border/60" strokeWidth="0.8" />
        <text x="160" y="271" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-semibold">
          (3)⇔(4): det(Aₖ) = d₁···dₖ
        </text>

        {/* (4) -> (5) */}
        <line
          x1="346"
          y1="345"
          x2="570"
          y2="345"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2"
          markerEnd="url(#l28-web-arrow-blue)"
        />
        <rect x="380" y="335" width="160" height="20" rx="4" className="fill-card stroke-border/60" strokeWidth="0.8" />
        <text x="460" y="348" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-semibold">
          (4)⇒(5): A=LDLᵀ, R=√D Lᵀ
        </text>

        {/* 底部半正定（PSD）边界对比条 */}
        <rect
          x="28"
          y="402"
          width="864"
          height="38"
          rx="8"
          className="fill-muted/35 stroke-border"
          strokeWidth="1"
        />
        <text x="460" y="425" textAnchor="middle" className="fill-foreground text-xs">
          半正定 (PSD) 辨析：xᵀAx ≥ 0 ⇔ λᵢ ≥ 0 ⇔ A = RᵀR（R 允许列降秩）；但注意：仅顺序主子式 det(Aₖ) ≥ 0 不足以推出 PSD，须全部主子式 ≥ 0！
        </text>
      </svg>
    </MathDiagram>
  )
}
