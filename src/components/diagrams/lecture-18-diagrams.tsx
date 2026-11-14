import * as React from 'react'
import { MathDiagram } from './math-diagram'

export function DeterminantRowLinearityDiagram({
  caption = '图 18.1 单行线性性与面积叠加：保持第 2 行 \\mathbf{b} 不变，第 1 行加法导致平行四边形面积直接相加；矩阵整体数乘 c 则使 2 阶面积放大 c^2 倍。',
}: {
  caption?: string
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 420"
        className="w-full h-auto text-foreground font-sans select-none"
      >
        <defs>
          {/* Arrow markers */}
          <marker
            id="l18-arrow-blue"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l18-arrow-amber"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l18-arrow-emerald"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l18-arrow-purple"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l18-arrow-muted"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-muted-foreground" />
          </marker>

          {/* Patterns for parallelograms */}
          <pattern
            id="l18-pat-blue"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="8" className="stroke-blue-500/25 dark:stroke-blue-400/30" strokeWidth="2" />
          </pattern>
          <pattern
            id="l18-pat-amber"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-45)"
          >
            <line x1="0" y1="0" x2="0" y2="8" className="stroke-amber-500/25 dark:stroke-amber-400/30" strokeWidth="2" />
          </pattern>
        </defs>

        {/* Panel 1: Single-Row Additivity (Left) */}
        <g transform="translate(10, 10)">
          {/* Card Background */}
          <rect
            x="0"
            y="0"
            width="440"
            height="395"
            rx="8"
            className="fill-card stroke-border"
            strokeWidth="1"
          />

          {/* Title */}
          <text x="20" y="32" className="text-sm font-semibold fill-foreground">
            单行可加性：公理 3b 几何意义
          </text>
          <text x="20" y="52" className="text-xs fill-muted-foreground">
            固定第 2 行向量 b，第 1 行相加对应高相加 (h = h₁ + h₂)
          </text>

          {/* Coordinate grid / guideline */}
          <line x1="30" y1="280" x2="410" y2="280" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50" y1="280" x2="50" y2="90" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

          {/* Base Vector b: from (50, 280) to (210, 280), length = 160 */}
          {/* Vector a: (50, 280) -> (90, 190), dx = 40, dy = -90 (height h1 = 90) */}
          {/* Vector a': (50, 280) -> (120, 215), dx = 70, dy = -65 (height h2 = 65) */}
          {/* Vector a + a': (50, 280) -> (160, 125), dx = 110, dy = -155 (height = 155) */}

          {/* Combined Parallelogram (a+a', b) */}
          <polygon
            points="50,280 210,280 320,125 160,125"
            className="fill-purple-500/10 dark:fill-purple-400/15 stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.5"
            strokeDasharray="6 3"
          />

          {/* Parallelogram 1: (a, b) */}
          <polygon
            points="50,280 210,280 250,190 90,190"
            className="fill-blue-500/20 dark:fill-blue-400/25 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.8"
          />
          <polygon
            points="50,280 210,280 250,190 90,190"
            fill="url(#l18-pat-blue)"
          />

          {/* Parallelogram 2 (shifted to stack on top of a): base from (90, 190) to (250, 190), top (160, 125) to (320, 125) */}
          <polygon
            points="90,190 250,190 320,125 160,125"
            className="fill-amber-500/20 dark:fill-amber-400/25 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.8"
          />
          <polygon
            points="90,190 250,190 320,125 160,125"
            fill="url(#l18-pat-amber)"
          />

          {/* Height guidelines & dimension lines */}
          <line x1="250" y1="190" x2="385" y2="190" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="320" y1="125" x2="385" y2="125" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="210" y1="280" x2="385" y2="280" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="2 2" />

          {/* Dimension arrows for heights */}
          <line x1="375" y1="278" x2="375" y2="192" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.5" markerEnd="url(#l18-arrow-blue)" markerStart="url(#l18-arrow-blue)" />
          <text x="390" y="240" className="text-[11px] font-semibold fill-blue-600 dark:fill-blue-400">h₁</text>

          <line x1="375" y1="188" x2="375" y2="127" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.5" markerEnd="url(#l18-arrow-amber)" markerStart="url(#l18-arrow-amber)" />
          <text x="390" y="162" className="text-[11px] font-semibold fill-amber-600 dark:fill-amber-400">h₂</text>

          {/* Vectors */}
          {/* Base vector b */}
          <line x1="50" y1="280" x2="206" y2="280" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" markerEnd="url(#l18-arrow-emerald)" />
          <text x="120" y="298" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">b (固定第 2 行)</text>

          {/* Vector a */}
          <line x1="50" y1="280" x2="88" y2="194" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.2" markerEnd="url(#l18-arrow-blue)" />
          <text x="45" y="235" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">a</text>

          {/* Vector a + a' */}
          <line x1="50" y1="280" x2="157" y2="129" className="stroke-purple-600 dark:stroke-purple-400" strokeWidth="2.2" markerEnd="url(#l18-arrow-purple)" />
          <text x="80" y="150" className="text-xs font-bold fill-purple-600 dark:fill-purple-400">a + a&apos;</text>

          {/* Area labels */}
          <rect x="135" y="225" width="90" height="22" rx="4" className="fill-background/90 stroke-blue-500/40" strokeWidth="1" />
          <text x="142" y="240" className="text-[10px] font-semibold fill-blue-600 dark:fill-blue-400">
            面积 det [a ; b]
          </text>

          <rect x="180" y="150" width="95" height="22" rx="4" className="fill-background/90 stroke-amber-500/40" strokeWidth="1" />
          <text x="187" y="165" className="text-[10px] font-semibold fill-amber-600 dark:fill-amber-400">
            面积 det [a&apos; ; b]
          </text>

          {/* Math Identity Badge */}
          <rect x="25" y="325" width="390" height="52" rx="6" className="fill-muted/40 stroke-border" strokeWidth="1" />
          <text x="40" y="347" className="text-xs font-semibold fill-foreground">
            det [a + a&apos; ; b] = det [a ; b] + det [a&apos; ; b]
          </text>
          <text x="40" y="365" className="text-[11px] fill-muted-foreground">
            底边 ||b|| 不变，两平行四边形沿公共边界贴合，面积直接线性相加
          </text>
        </g>

        {/* Panel 2: Scaling Contrast: Single-row vs Whole-matrix (Right) */}
        <g transform="translate(470, 10)">
          {/* Card Background */}
          <rect
            x="0"
            y="0"
            width="440"
            height="395"
            rx="8"
            className="fill-card stroke-border"
            strokeWidth="1"
          />

          {/* Title */}
          <text x="20" y="32" className="text-sm font-semibold fill-foreground">
            数乘对比：单行数乘 vs 矩阵整体数乘
          </text>
          <text x="20" y="52" className="text-xs fill-muted-foreground">
            det(cA) = cⁿ det(A)；对 2 阶方阵放大 2 倍导致面积变为 4 倍
          </text>

          {/* Sub-case A: Single-Row Scaling */}
          <g transform="translate(15, 65)">
            <rect x="0" y="0" width="195" height="220" rx="6" className="fill-muted/20 stroke-border" strokeWidth="1" />
            <text x="10" y="20" className="text-xs font-bold fill-foreground">
              仅第 1 行乘以 2 (单行数乘)
            </text>
            <text x="10" y="36" className="text-[11px] fill-muted-foreground">
              det [ 2a ; b ] = 2 det [ a ; b ]
            </text>

            {/* Base b: (20, 175) -> (90, 175), length = 70 */}
            {/* Vector a: dx = 20, dy = -45 */}
            {/* Vector 2a: dx = 40, dy = -90 */}
            {/* Lower parallelogram (1x area) */}
            <polygon
              points="20,175 90,175 110,130 40,130"
              className="fill-blue-500/25 dark:fill-blue-400/30 stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="1.5"
            />
            {/* Upper parallelogram (stacked 1x area) */}
            <polygon
              points="40,130 110,130 130,85 60,85"
              className="fill-blue-500/15 dark:fill-blue-400/20 stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />

            {/* Total outline */}
            <polygon
              points="20,175 90,175 130,85 60,85"
              fill="none"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2"
            />

            {/* Vectors */}
            <line x1="20" y1="175" x2="86" y2="175" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" markerEnd="url(#l18-arrow-emerald)" />
            <line x1="20" y1="175" x2="58" y2="89" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2" markerEnd="url(#l18-arrow-blue)" />

            <text x="45" y="190" className="text-[10px] font-semibold fill-emerald-600 dark:fill-emerald-400">b</text>
            <text x="15" y="115" className="text-[10px] font-semibold fill-blue-600 dark:fill-blue-400">2a</text>

            <rect x="55" y="105" width="70" height="18" rx="3" className="fill-background/90 stroke-border" strokeWidth="1" />
            <text x="60" y="118" className="text-[9px] font-bold fill-blue-600 dark:fill-blue-400">
              面积 = 2 × 原面积
            </text>
          </g>

          {/* Sub-case B: Whole-Matrix Scaling */}
          <g transform="translate(225, 65)">
            <rect x="0" y="0" width="200" height="220" rx="6" className="fill-muted/20 stroke-border" strokeWidth="1" />
            <text x="10" y="20" className="text-xs font-bold fill-foreground">
              整个矩阵乘以 2 (det(2A))
            </text>
            <text x="10" y="36" className="text-[11px] fill-muted-foreground">
              det(2A) = 2² det(A) = 4 det(A)
            </text>

            {/* Base 2b: length = 120, from (15, 175) to (135, 175) */}
            {/* Height 2a: dx = 36, dy = -80 */}
            {/* 2x2 grid of 4 congruent parallelograms */}
            {/* Cell (0,0): bottom-left */}
            <polygon points="15,175 75,175 93,135 33,135" className="fill-amber-500/25 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1" />
            {/* Cell (1,0): bottom-right */}
            <polygon points="75,175 135,175 153,135 93,135" className="fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1" />
            {/* Cell (0,1): top-left */}
            <polygon points="33,135 93,135 111,95 51,95" className="fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1" />
            {/* Cell (1,1): top-right */}
            <polygon points="93,135 153,135 171,95 111,95" className="fill-amber-500/30 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1" />

            {/* Outer boundary */}
            <polygon points="15,175 135,175 171,95 51,95" fill="none" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="2.2" />

            {/* Vectors */}
            <line x1="15" y1="175" x2="131" y2="175" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" markerEnd="url(#l18-arrow-emerald)" />
            <line x1="15" y1="175" x2="49" y2="99" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="2" markerEnd="url(#l18-arrow-amber)" />

            <text x="65" y="190" className="text-[10px] font-semibold fill-emerald-600 dark:fill-emerald-400">2b</text>
            <text x="12" y="125" className="text-[10px] font-semibold fill-amber-600 dark:fill-amber-400">2a</text>

            <rect x="80" y="105" width="85" height="18" rx="3" className="fill-background/90 stroke-border" strokeWidth="1" />
            <text x="85" y="118" className="text-[9px] font-bold fill-amber-600 dark:fill-amber-400">
              面积 = 4 × 原面积 (2²)
            </text>
          </g>

          {/* Red Flag Warning Box */}
          <rect x="15" y="300" width="410" height="77" rx="6" className="fill-rose-500/10 dark:fill-rose-950/20 stroke-rose-500/30" strokeWidth="1" />
          <text x="28" y="322" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">
            ⚠ 经典警示：行列式绝对不是矩阵空间上的线性变换！
          </text>
          <text x="28" y="342" className="text-[11px] fill-foreground">
            • det(cA) = cⁿ det(A) ≠ c det(A) （n 阶矩阵每个行向量均提出因子 c）
          </text>
          <text x="28" y="360" className="text-[11px] fill-foreground">
            • 一般情况下 det(A + B) ≠ det(A) + det(B) （例如 det(I₂ + I₂) = det(2I₂) = 4 ≠ 1 + 1）
          </text>
        </g>
      </svg>
    </MathDiagram>
  )
}

export function DeterminantTenPropertiesFlowDiagram({
  caption = '图 18.2 行列式性质演绎图谱：从 3 大公理（Axioms 1-3）严格推导性质 4-10 的逻辑依赖网络。',
}: {
  caption?: string
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 960 560"
        className="w-full h-auto text-foreground font-sans select-none"
      >
        <defs>
          <marker
            id="l18-flow-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-muted-foreground" />
          </marker>
          <marker
            id="l18-flow-blue"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l18-flow-amber"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l18-flow-emerald"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l18-flow-purple"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
        </defs>

        {/* ================= BACKGROUND ZONES ================= */}
        {/* Tier 1 Header */}
        <text x="30" y="24" className="text-xs font-bold tracking-wider fill-muted-foreground uppercase">
          三大基石公理 (Defining Axioms)
        </text>

        {/* Tier 2 Header */}
        <text x="30" y="145" className="text-xs font-bold tracking-wider fill-muted-foreground uppercase">
          初等行性质演绎 (Direct Deductions)
        </text>

        {/* Tier 3 Header */}
        <text x="30" y="265" className="text-xs font-bold tracking-wider fill-muted-foreground uppercase">
          三角结构与奇异性 (Structure &amp; Invertibility)
        </text>

        {/* Tier 4 Header */}
        <text x="30" y="395" className="text-xs font-bold tracking-wider fill-muted-foreground uppercase">
          全局乘法与对偶定理 (Global Multiplication &amp; Transpose)
        </text>

        {/* ================= CONNECTING EDGES ================= */}
        {/* Axiom 2 -> P4 */}
        <path
          d="M 480 105 L 340 165"
          fill="none"
          className="stroke-amber-500/70 dark:stroke-amber-400/70"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-amber)"
        />

        {/* Axiom 3 -> P5 */}
        <path
          d="M 790 105 L 670 165"
          fill="none"
          className="stroke-emerald-500/70 dark:stroke-emerald-400/70"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-emerald)"
        />

        {/* P4 -> P5 */}
        <path
          d="M 430 195 L 530 195"
          fill="none"
          className="stroke-muted-foreground"
          strokeWidth="1.8"
          strokeDasharray="4 2"
          markerEnd="url(#l18-flow-arrow)"
        />

        {/* Axiom 3 -> P6 */}
        <path
          d="M 850 105 L 870 165"
          fill="none"
          className="stroke-emerald-500/70 dark:stroke-emerald-400/70"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-emerald)"
        />

        {/* Axiom 1 -> P7 */}
        <path
          d="M 170 105 C 170 210, 390 210, 430 285"
          fill="none"
          className="stroke-blue-500/70 dark:stroke-blue-400/70"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-blue)"
        />

        {/* P5 -> P7 */}
        <path
          d="M 610 225 L 520 285"
          fill="none"
          className="stroke-muted-foreground"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-arrow)"
        />

        {/* P5 -> P8 */}
        <path
          d="M 710 225 L 770 285"
          fill="none"
          className="stroke-muted-foreground"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-arrow)"
        />

        {/* P6 -> P8 */}
        <path
          d="M 870 225 L 840 285"
          fill="none"
          className="stroke-muted-foreground"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-arrow)"
        />

        {/* P7 -> P8 */}
        <path
          d="M 620 320 L 700 320"
          fill="none"
          className="stroke-muted-foreground"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-arrow)"
        />

        {/* P8 -> P9 */}
        <path
          d="M 750 355 C 670 400, 480 390, 360 415"
          fill="none"
          className="stroke-purple-500/70 dark:stroke-purple-400/70"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-purple)"
        />

        {/* Axioms 1-3 -> P9 (Ratio method D(A)) */}
        <path
          d="M 230 105 C 100 180, 80 320, 180 415"
          fill="none"
          className="stroke-blue-500/60 dark:stroke-blue-400/60"
          strokeWidth="1.8"
          strokeDasharray="5 3"
          markerEnd="url(#l18-flow-blue)"
        />

        {/* P7 -> P10 */}
        <path
          d="M 520 355 C 540 380, 590 395, 630 415"
          fill="none"
          className="stroke-muted-foreground"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-arrow)"
        />

        {/* P9 -> P10 */}
        <path
          d="M 450 460 L 530 460"
          fill="none"
          className="stroke-muted-foreground"
          strokeWidth="1.8"
          markerEnd="url(#l18-flow-arrow)"
        />

        {/* ================= TIER 1: 3 DEFINING AXIOMS ================= */}
        {/* Axiom 1 */}
        <g transform="translate(40, 35)">
          <rect
            x="0"
            y="0"
            width="260"
            height="70"
            rx="6"
            className="fill-blue-500/10 dark:fill-blue-950/30 stroke-blue-500 dark:stroke-blue-400"
            strokeWidth="1.8"
          />
          <text x="14" y="24" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">
            公理 1：单位矩阵归一化
          </text>
          <text x="14" y="44" className="text-[13px] font-semibold fill-foreground">
            det(Iₙ) = 1
          </text>
          <text x="14" y="60" className="text-[10px] fill-muted-foreground">
            标准正交基张成的超立方体体积为 1
          </text>
        </g>

        {/* Axiom 2 */}
        <g transform="translate(350, 35)">
          <rect
            x="0"
            y="0"
            width="260"
            height="70"
            rx="6"
            className="fill-amber-500/10 dark:fill-amber-950/30 stroke-amber-500 dark:stroke-amber-400"
            strokeWidth="1.8"
          />
          <text x="14" y="24" className="text-xs font-bold fill-amber-600 dark:fill-amber-400">
            公理 2：换行改变正负号
          </text>
          <text x="14" y="44" className="text-[13px] font-semibold fill-foreground">
            det(P) = (-1)ᵏ
          </text>
          <text x="14" y="60" className="text-[10px] fill-muted-foreground">
            任意交换两行反转空间定向 (Orientation)
          </text>
        </g>

        {/* Axiom 3 */}
        <g transform="translate(660, 35)">
          <rect
            x="0"
            y="0"
            width="260"
            height="70"
            rx="6"
            className="fill-emerald-500/10 dark:fill-emerald-950/30 stroke-emerald-500 dark:stroke-emerald-400"
            strokeWidth="1.8"
          />
          <text x="14" y="24" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">
            公理 3：单行线性性 (Multilinearity)
          </text>
          <text x="14" y="44" className="text-[12px] font-semibold fill-foreground">
            单行数乘与单行拆分相加
          </text>
          <text x="14" y="60" className="text-[10px] fill-muted-foreground">
            各行独立线性，其余所有行保持严格固定
          </text>
        </g>

        {/* ================= TIER 2: DERIVED ROW PROPERTIES ================= */}
        {/* Property 4 */}
        <g transform="translate(170, 160)">
          <rect
            x="0"
            y="0"
            width="260"
            height="65"
            rx="6"
            className="fill-card stroke-border"
            strokeWidth="1.5"
          />
          <text x="12" y="22" className="text-xs font-bold fill-amber-600 dark:fill-amber-400">
            性质 4：两行相同则 det = 0
          </text>
          <text x="12" y="40" className="text-[11px] font-semibold fill-foreground">
            交换相同行：det(A) = -det(A)
          </text>
          <text x="12" y="55" className="text-[10px] fill-muted-foreground">
            2 det(A) = 0 ⇒ det(A) = 0 (公理 2 必然推论)
          </text>
        </g>

        {/* Property 5 */}
        <g transform="translate(530, 160)">
          <rect
            x="0"
            y="0"
            width="260"
            height="65"
            rx="6"
            className="fill-card stroke-emerald-500/60 dark:stroke-emerald-400/60"
            strokeWidth="1.5"
          />
          <text x="12" y="22" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">
            性质 5：消元保持 det 不变
          </text>
          <text x="12" y="40" className="text-[11px] font-semibold fill-foreground">
            rᵢ → rᵢ - ℓ rₖ (i ≠ k) ⇒ det 不变
          </text>
          <text x="12" y="55" className="text-[10px] fill-muted-foreground">
            由公理 3b 拆分 + 性质 4 消除项：-ℓ·0 = 0
          </text>
        </g>

        {/* Property 6 */}
        <g transform="translate(820, 160)">
          <rect
            x="0"
            y="0"
            width="110"
            height="65"
            rx="6"
            className="fill-card stroke-border"
            strokeWidth="1.5"
          />
          <text x="10" y="22" className="text-[11px] font-bold fill-purple-600 dark:fill-purple-400">
            性质 6：全零行
          </text>
          <text x="10" y="40" className="text-xs font-semibold fill-foreground">
            det(A) = 0
          </text>
          <text x="10" y="55" className="text-[9px] fill-muted-foreground">
            公理 3a 提因子 0
          </text>
        </g>

        {/* ================= TIER 3: TRIANGULAR & SINGULARITY ================= */}
        {/* Property 7 */}
        <g transform="translate(360, 285)">
          <rect
            x="0"
            y="0"
            width="260"
            height="70"
            rx="6"
            className="fill-card stroke-blue-500/60 dark:stroke-blue-400/60"
            strokeWidth="1.5"
          />
          <text x="12" y="22" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">
            性质 7：三角矩阵为对角元之积
          </text>
          <text x="12" y="42" className="text-xs font-semibold fill-foreground">
            det(U) = d₁ · d₂ · ... · dₙ = ∏ dᵢ
          </text>
          <text x="12" y="58" className="text-[10px] fill-muted-foreground">
            消至对角阵，由公理 3a 提出各主元，由公理 1 得 1
          </text>
        </g>

        {/* Property 8 */}
        <g transform="translate(700, 285)">
          <rect
            x="0"
            y="0"
            width="230"
            height="70"
            rx="6"
            className="fill-rose-500/10 dark:fill-rose-950/20 stroke-rose-500 dark:stroke-rose-400"
            strokeWidth="1.8"
          />
          <text x="12" y="22" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">
            性质 8：奇异性充要判定
          </text>
          <text x="12" y="42" className="text-xs font-semibold fill-foreground">
            det(A) = 0 ⟺ A 奇异 (不可逆)
          </text>
          <text x="12" y="58" className="text-[10px] fill-muted-foreground">
            A 可逆 ⟺ 存在 n 个非零主元 ⟺ det ≠ 0
          </text>
        </g>

        {/* ================= TIER 4: GLOBAL THEOREMS ================= */}
        {/* Property 9 */}
        <g transform="translate(60, 415)">
          <rect
            x="0"
            y="0"
            width="390"
            height="95"
            rx="8"
            className="fill-sky-500/10 dark:fill-sky-950/25 stroke-sky-500 dark:stroke-sky-400"
            strokeWidth="1.8"
          />
          <text x="16" y="24" className="text-xs font-bold fill-sky-600 dark:fill-sky-400">
            性质 9：乘积可乘定理 (Product Rule)
          </text>
          <text x="16" y="46" className="text-sm font-semibold fill-foreground">
            det(AB) = det(A) · det(B)
          </text>
          <text x="16" y="65" className="text-[11px] fill-muted-foreground">
            证明方法：比值函数 D(A) = det(AB)/det(B) 严格满足三大公理
          </text>
          <text x="16" y="82" className="text-[10px] font-semibold fill-sky-600 dark:fill-sky-400">
            推论：det(A⁻¹) = 1 / det(A)，正交矩阵 det(Q) = ±1
          </text>
        </g>

        {/* Property 10 */}
        <g transform="translate(530, 415)">
          <rect
            x="0"
            y="0"
            width="390"
            height="95"
            rx="8"
            className="fill-purple-500/10 dark:fill-purple-950/25 stroke-purple-500 dark:stroke-purple-400"
            strokeWidth="1.8"
          />
          <text x="16" y="24" className="text-xs font-bold fill-purple-600 dark:fill-purple-400">
            性质 10：转置不变性 (Transpose Invariance)
          </text>
          <text x="16" y="46" className="text-sm font-semibold fill-foreground">
            det(Aᵀ) = det(A)
          </text>
          <text x="16" y="65" className="text-[11px] fill-muted-foreground">
            由 PA = LU 导出 AᵀPᵀ = UᵀLᵀ，利用 det(Pᵀ)=det(P)=±1 与性质 7、9 获证
          </text>
          <text x="16" y="82" className="text-[10px] font-semibold fill-purple-600 dark:fill-purple-400">
            核心结论：所有关于「行」的性质对「列」完全成立（对偶性）！
          </text>
        </g>
      </svg>
    </MathDiagram>
  )
}
