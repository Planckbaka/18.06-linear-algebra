import * as React from 'react'
import { MathDiagram } from './math-diagram'

export function AdjugateInverseStructureDiagram({
  caption = '伴随矩阵求逆结构：对角线为代数余子式同行求和 \\(\\sum a_{ij}C_{ij} = \\det(A)\\)，非对角线为异行展开（等价于含重复行的奇异矩阵行列式 \\(\\det(A^*) = 0\\)）',
}: {
  caption?: string
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 400"
        className="w-full h-auto text-foreground font-sans select-none"
        aria-label="Adjugate Matrix Inverse Algebraic Structure"
      >
        <defs>
          <marker
            id="l20-arrow-blue"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l20-arrow-emerald"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l20-arrow-amber"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>

          <linearGradient id="l20-diag-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="stop-color-blue-500/20" stopColor="currentColor" stopOpacity="0.25" />
            <stop offset="100%" className="stop-color-emerald-500/20" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Outer Background Card */}
        <rect
          x="10"
          y="10"
          width="900"
          height="380"
          rx="12"
          className="fill-muted/20 stroke-border"
          strokeWidth="1"
        />

        {/* Section Title */}
        <text x="35" y="38" className="text-sm font-semibold fill-foreground tracking-wide">
          代数余子式乘积恒等式：A · C&#7488; = det(A) · I
        </text>

        {/* ================= LEFT HALF: Matrix Product Layout ================= */}
        {/* Matrix A */}
        <g transform="translate(35, 60)">
          {/* Label */}
          <text x="55" y="16" textAnchor="middle" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">
            原矩阵 A
          </text>
          {/* Bracket */}
          <path d="M 12 28 L 4 28 L 4 140 L 12 140" fill="none" className="stroke-foreground" strokeWidth="1.5" />
          <path d="M 98 28 L 106 28 L 106 140 L 98 140" fill="none" className="stroke-foreground" strokeWidth="1.5" />

          {/* Row 1 Box (off-diagonal tester) */}
          <rect
            x="8"
            y="32"
            width="94"
            height="30"
            rx="5"
            className="fill-amber-500/15 stroke-amber-500/60 dark:stroke-amber-400/60"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          <text x="24" y="52" className="text-xs font-mono fill-amber-700 dark:fill-amber-300">a₁₁</text>
          <text x="55" y="52" className="text-xs font-mono fill-amber-700 dark:fill-amber-300">a₁₂</text>
          <text x="86" y="52" className="text-xs font-mono fill-amber-700 dark:fill-amber-300">a₁₃</text>

          {/* Row 2 Box (diagonal tester) */}
          <rect
            x="8"
            y="69"
            width="94"
            height="30"
            rx="5"
            className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.5"
          />
          <text x="24" y="89" className="text-xs font-mono font-bold fill-blue-700 dark:fill-blue-300">a₂₁</text>
          <text x="55" y="89" className="text-xs font-mono font-bold fill-blue-700 dark:fill-blue-300">a₂₂</text>
          <text x="86" y="89" className="text-xs font-mono font-bold fill-blue-700 dark:fill-blue-300">a₂₃</text>

          {/* Row 3 */}
          <text x="24" y="126" className="text-xs font-mono fill-muted-foreground">a₃₁</text>
          <text x="55" y="126" className="text-xs font-mono fill-muted-foreground">a₃₂</text>
          <text x="86" y="126" className="text-xs font-mono fill-muted-foreground">a₃₃</text>

          {/* Row Indicator Labels */}
          <text x="114" y="52" className="text-[10px] font-sans fill-amber-600 dark:fill-amber-400 font-medium">
            第 1 行 (i = 1)
          </text>
          <text x="114" y="89" className="text-[10px] font-sans fill-blue-600 dark:fill-blue-400 font-semibold">
            第 2 行 (i = 2)
          </text>
        </g>

        {/* Multiply Sign */}
        <text x="215" y="145" textAnchor="middle" className="text-base font-bold fill-muted-foreground">
          ×
        </text>

        {/* Matrix C^T (Adjugate matrix) */}
        <g transform="translate(235, 60)">
          {/* Label */}
          <text x="60" y="16" textAnchor="middle" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">
            伴随矩阵 C&#7488; = adj(A)
          </text>
          {/* Bracket */}
          <path d="M 12 28 L 4 28 L 4 140 L 12 140" fill="none" className="stroke-foreground" strokeWidth="1.5" />
          <path d="M 108 28 L 116 28 L 116 140 L 108 140" fill="none" className="stroke-foreground" strokeWidth="1.5" />

          {/* Col 1 */}
          <text x="25" y="52" className="text-xs font-mono fill-muted-foreground">C₁₁</text>
          <text x="25" y="89" className="text-xs font-mono fill-muted-foreground">C₁₂</text>
          <text x="25" y="126" className="text-xs font-mono fill-muted-foreground">C₁₃</text>

          {/* Col 2 Box (Cofactors of row 2) */}
          <rect
            x="44"
            y="32"
            width="34"
            height="104"
            rx="5"
            className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.5"
          />
          <text x="61" y="52" textAnchor="middle" className="text-xs font-mono font-bold fill-emerald-700 dark:fill-emerald-300">C₂₁</text>
          <text x="61" y="89" textAnchor="middle" className="text-xs font-mono font-bold fill-emerald-700 dark:fill-emerald-300">C₂₂</text>
          <text x="61" y="126" textAnchor="middle" className="text-xs font-mono font-bold fill-emerald-700 dark:fill-emerald-300">C₂₃</text>

          {/* Col 3 */}
          <text x="96" y="52" className="text-xs font-mono fill-muted-foreground">C₃₁</text>
          <text x="96" y="89" className="text-xs font-mono fill-muted-foreground">C₃₂</text>
          <text x="96" y="126" className="text-xs font-mono fill-muted-foreground">C₃₃</text>

          {/* Col Indicator */}
          <text x="61" y="156" textAnchor="middle" className="text-[10px] font-sans fill-emerald-600 dark:fill-emerald-400 font-medium">
            第 2 列 (来自 A 的第 2 行代数余子式)
          </text>
        </g>

        {/* Equals Sign */}
        <text x="375" y="145" textAnchor="middle" className="text-base font-bold fill-muted-foreground">
          =
        </text>

        {/* Product Matrix (det A) * I */}
        <g transform="translate(395, 60)">
          {/* Label */}
          <text x="55" y="16" textAnchor="middle" className="text-xs font-bold fill-foreground">
            结果：det(A) · I
          </text>
          {/* Bracket */}
          <path d="M 12 28 L 4 28 L 4 140 L 12 140" fill="none" className="stroke-foreground" strokeWidth="1.5" />
          <path d="M 98 28 L 106 28 L 106 140 L 98 140" fill="none" className="stroke-foreground" strokeWidth="1.5" />

          {/* (1, 1) */}
          <text x="25" y="52" className="text-xs font-mono font-bold fill-blue-600 dark:fill-blue-400">det</text>
          {/* (1, 2) OFF-DIAGONAL TARGET */}
          <rect
            x="43"
            y="36"
            width="24"
            height="22"
            rx="4"
            className="fill-amber-500/20 stroke-amber-500"
            strokeWidth="1.2"
          />
          <text x="55" y="52" textAnchor="middle" className="text-xs font-mono font-bold fill-amber-600 dark:fill-amber-400">0</text>
          <text x="86" y="52" className="text-xs font-mono fill-muted-foreground">0</text>

          {/* (2, 1) */}
          <text x="25" y="89" className="text-xs font-mono fill-muted-foreground">0</text>
          {/* (2, 2) DIAGONAL TARGET */}
          <rect
            x="41"
            y="73"
            width="28"
            height="22"
            rx="4"
            className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.5"
          />
          <text x="55" y="89" textAnchor="middle" className="text-xs font-mono font-bold fill-emerald-600 dark:fill-emerald-400">det</text>
          <text x="86" y="89" className="text-xs font-mono fill-muted-foreground">0</text>

          {/* (3, 1) */}
          <text x="25" y="126" className="text-xs font-mono fill-muted-foreground">0</text>
          <text x="55" y="126" textAnchor="middle" className="text-xs font-mono fill-muted-foreground">0</text>
          <text x="86" y="126" className="text-xs font-mono font-bold fill-blue-600 dark:fill-blue-400">det</text>
        </g>

        {/* Dynamic Curved Flow Arrows */}
        {/* Blue diagonal path: Row 2 of A + Col 2 of C^T -> (2,2) */}
        <path
          d="M 129 149 C 160 185 360 185 448 102"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          markerEnd="url(#l20-arrow-emerald)"
        />

        {/* Amber off-diagonal path: Row 1 of A + Col 2 of C^T -> (1,2) */}
        <path
          d="M 102 92 C 140 32 370 20 445 42"
          fill="none"
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          markerEnd="url(#l20-arrow-amber)"
        />

        {/* ================= RIGHT HALF: Theoretical Explanation Panels ================= */}
        {/* Panel 1: Diagonal Entry Math */}
        <g transform="translate(530, 48)">
          <rect
            x="0"
            y="0"
            width="360"
            height="145"
            rx="8"
            className="fill-card stroke-emerald-600/40 dark:stroke-emerald-400/40"
            strokeWidth="1.2"
          />
          <rect x="0" y="0" width="360" height="26" rx="8" className="fill-emerald-500/15" />
          <circle cx="14" cy="13" r="5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="26" y="17" className="text-xs font-bold fill-emerald-800 dark:fill-emerald-200">
            情况一：主对角线元素 (i = k) —— 余子式同行展开
          </text>

          <text x="14" y="48" className="text-xs font-sans fill-foreground">
            A 的第 i 行点乘 C&#7488; 的第 i 列（即 A 的第 i 行代数余子式）：
          </text>
          <rect x="14" y="56" width="332" height="32" rx="4" className="fill-muted/40 stroke-border" strokeWidth="1" />
          <text x="180" y="77" textAnchor="middle" className="text-xs font-mono font-semibold fill-emerald-700 dark:fill-emerald-300">
            (row i of A) · (col i of C&#7488;) = &#8721;ⱼ aᵢⱼ Cᵢⱼ = det(A)
          </text>

          <text x="14" y="108" className="text-[11px] font-sans fill-muted-foreground leading-relaxed">
            这正是行列式沿第 i 行的经典拉普拉斯展开公式（Laplace expansion）。
          </text>
          <text x="14" y="128" className="text-[11px] font-sans fill-muted-foreground">
            因此主对角线每一个元素均精确等于 det(A)！
          </text>
        </g>

        {/* Panel 2: Off-Diagonal Entry Math & Alien Matrix */}
        <g transform="translate(530, 208)">
          <rect
            x="0"
            y="0"
            width="360"
            height="172"
            rx="8"
            className="fill-card stroke-amber-600/40 dark:stroke-amber-400/40"
            strokeWidth="1.2"
          />
          <rect x="0" y="0" width="360" height="26" rx="8" className="fill-amber-500/15" />
          <circle cx="14" cy="13" r="5" className="fill-amber-600 dark:fill-amber-400" />
          <text x="26" y="17" className="text-xs font-bold fill-amber-800 dark:fill-amber-200">
            情况二：非对角线元素 (i &#8800; k) —— 异行余子式恒为 0
          </text>

          <text x="14" y="46" className="text-xs font-sans fill-foreground">
            A 的第 1 行点乘 C&#7488; 的第 2 列（第 2 行的代数余子式）：
          </text>
          <rect x="14" y="54" width="332" height="30" rx="4" className="fill-muted/40 stroke-border" strokeWidth="1" />
          <text x="180" y="73" textAnchor="middle" className="text-xs font-mono font-semibold fill-amber-700 dark:fill-amber-300">
            &#8721;ⱼ a₁ⱼ C₂ⱼ = a₁₁ C₂₁ + a₁₂ C₂₂ + a₁₃ C₂₃ = det(A*)
          </text>

          {/* The Fictitious Matrix A* mini box */}
          <g transform="translate(14, 92)">
            <rect x="0" y="0" width="130" height="66" rx="4" className="fill-background stroke-border" strokeWidth="1" />
            <text x="8" y="15" className="text-[10px] font-mono fill-amber-600 dark:fill-amber-400 font-bold">
              [ a₁₁  a₁₂  a₁₃ ]
            </text>
            <text x="8" y="35" className="text-[10px] font-mono fill-amber-600 dark:fill-amber-400 font-bold">
              [ a₁₁  a₁₂  a₁₃ ]
            </text>
            <text x="8" y="55" className="text-[10px] font-mono fill-muted-foreground">
              [ a₃₁  a₃₂  a₃₃ ]
            </text>

            <text x="140" y="24" className="text-[11px] font-sans fill-foreground font-medium">
              构造虚拟矩阵 A*：第 2 行被替换为第 1 行！
            </text>
            <text x="140" y="44" className="text-[11px] font-sans fill-rose-600 dark:fill-rose-400 font-semibold">
              两行完全相同 &#8658; det(A*) = 0
            </text>
            <text x="140" y="62" className="text-[10px] font-sans fill-muted-foreground">
              乘积矩阵中所有非对角元必然精确为 0。
            </text>
          </g>
        </g>

        {/* Bottom Conclusion Banner */}
        <rect
          x="35"
          y="235"
          width="470"
          height="145"
          rx="8"
          className="fill-blue-500/10 stroke-blue-500/30"
          strokeWidth="1"
        />
        <text x="50" y="260" className="text-xs font-bold fill-blue-700 dark:fill-blue-300">
          核心结论：伴随矩阵求逆公式的必然性
        </text>
        <text x="50" y="284" className="text-xs font-sans fill-foreground leading-relaxed">
          因为 A · C&#7488; = det(A) · Iₙ，当且仅当 det(A) &#8800; 0 时，两边同除以 det(A)：
        </text>
        <rect x="50" y="296" width="440" height="38" rx="6" className="fill-background/80 stroke-blue-500/50" strokeWidth="1" />
        <text x="270" y="321" textAnchor="middle" className="text-sm font-mono font-bold fill-blue-600 dark:fill-blue-400">
          A⁻¹ = (1 / det(A)) · C&#7488; = (1 / det(A)) · adj(A)
        </text>
        <text x="50" y="358" className="text-[11px] font-sans fill-muted-foreground">
          注意转置记号 C&#7488;：代数余子式矩阵 C 必须转置才是伴随矩阵 adj(A)！
        </text>
      </svg>
    </MathDiagram>
  )
}

export function CramersRuleAndVolumeDiagram({
  caption = '克拉默法则与有向体积几何原理：左图展示 2D 平行四边形面积被解分量 \\(x_1\\) 线性伸缩；右图展示 3D 平行多面体体积与 Gram-Schmidt 正交化 \\(A=QR\\) 正交高的乘积等价',
}: {
  caption?: string
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 410"
        className="w-full h-auto text-foreground font-sans select-none"
        aria-label="Cramer's Rule Geometry and Parallelepiped Volume"
      >
        <defs>
          <marker
            id="l20-arrow-v1"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l20-arrow-v2"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l20-arrow-b"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l20-arrow-q"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
        </defs>

        {/* Outer Frame */}
        <rect
          x="10"
          y="10"
          width="900"
          height="390"
          rx="12"
          className="fill-muted/20 stroke-border"
          strokeWidth="1"
        />

        {/* ================= LEFT PANEL: 2D Cramer's Rule Area Scaling ================= */}
        <g transform="translate(25, 25)">
          {/* Card Border */}
          <rect
            x="0"
            y="0"
            width="425"
            height="360"
            rx="10"
            className="fill-card stroke-border"
            strokeWidth="1"
          />

          <text x="20" y="28" className="text-xs font-bold fill-foreground tracking-wide">
            图 A：克拉默法则的面积剪切与伸缩原理 (2D)
          </text>
          <text x="20" y="46" className="text-[11px] font-sans fill-muted-foreground">
            方程组 x₁ a₁ + x₂ a₂ = b 对应两矩阵面积之比
          </text>

          {/* Coordinate Origin & Grid inside Left Panel */}
          {/* Origin at (70, 240) */}
          <g transform="translate(60, 230)">
            {/* Grid Axes */}
            <line x1="-20" y1="0" x2="310" y2="0" className="stroke-muted-foreground/40" strokeWidth="1" />
            <line x1="0" y1="30" x2="0" y2="-170" className="stroke-muted-foreground/40" strokeWidth="1" />
            <text x="305" y="-6" className="text-[10px] font-mono fill-muted-foreground">x</text>
            <text x="6" y="-165" className="text-[10px] font-mono fill-muted-foreground">y</text>

            {/* Parallelogram 1: spanned by a1 and a2 (det A) */}
            {/* a1 = (90, -30), a2 = (30, -110) */}
            {/* vertex: (0,0) -> (90, -30) -> (120, -140) -> (30, -110) */}
            <polygon
              points="0,0 90,-30 120,-140 30,-110"
              className="fill-blue-500/15 stroke-blue-500/60"
              strokeWidth="1.2"
              strokeDasharray="4 2"
            />

            {/* Parallelogram 2: spanned by b and a2 (det B1) */}
            {/* b = 2*a1 + 0.5*a2 = (180 + 15, -60 - 55) = (195, -115) */}
            {/* vertex: (0,0) -> (195, -115) -> (225, -225 clipped to 225, -225) -> (30, -110) */}
            <polygon
              points="0,0 195,-115 225,-225 30,-110"
              className="fill-amber-500/20 stroke-amber-500"
              strokeWidth="1.5"
            />

            {/* Vector a1 */}
            <line
              x1="0"
              y1="0"
              x2="90"
              y2="-30"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              markerEnd="url(#l20-arrow-v1)"
            />
            <text x="96" y="-25" className="text-xs font-mono font-bold fill-blue-600 dark:fill-blue-400">
              a₁
            </text>

            {/* Vector a2 (Shared base) */}
            <line
              x1="0"
              y1="0"
              x2="30"
              y2="-110"
              className="stroke-emerald-600 dark:stroke-emerald-400"
              strokeWidth="2.5"
              markerEnd="url(#l20-arrow-v2)"
            />
            <text x="14" y="-115" className="text-xs font-mono font-bold fill-emerald-600 dark:fill-emerald-400">
              a₂
            </text>

            {/* Vector b = x1*a1 + x2*a2 */}
            <line
              x1="0"
              y1="0"
              x2="195"
              y2="-115"
              className="stroke-amber-600 dark:stroke-amber-400"
              strokeWidth="2.5"
              markerEnd="url(#l20-arrow-b)"
            />
            <text x="202" y="-115" className="text-xs font-mono font-bold fill-amber-600 dark:fill-amber-400">
              b
            </text>

            {/* Shear connection dashed line */}
            <line
              x1="180"
              y1="-60"
              x2="195"
              y2="-115"
              className="stroke-muted-foreground/60"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <text x="140" y="-45" className="text-[10px] font-mono fill-muted-foreground">
              + x₂ a₂ 平移 (保高剪切)
            </text>
            <text x="80" y="-70" className="text-[10px] font-mono fill-blue-600 dark:fill-blue-400">
              面积 = det(A)
            </text>
            <text x="160" y="-150" className="text-[10px] font-mono fill-amber-600 dark:fill-amber-400 font-bold">
              面积 = det(B₁)
            </text>
          </g>

          {/* Algebraic Formula Box */}
          <rect
            x="20"
            y="280"
            width="385"
            height="65"
            rx="6"
            className="fill-muted/30 stroke-border"
            strokeWidth="1"
          />
          <text x="35" y="302" className="text-xs font-mono font-semibold fill-foreground">
            det(B₁) = det([b, a₂]) = det([x₁ a₁ + x₂ a₂, a₂])
          </text>
          <text x="85" y="322" className="text-xs font-mono fill-blue-600 dark:fill-blue-400">
            = x₁ det([a₁, a₂]) + x₂ det([a₂, a₂]) = x₁ · det(A) + 0
          </text>
          <text x="35" y="338" className="text-[11px] font-sans font-bold fill-amber-600 dark:fill-amber-400">
            &#8658; x₁ = det(B₁) / det(A) （面积伸缩比即为未知数解！）
          </text>
        </g>

        {/* ================= RIGHT PANEL: 3D Parallelepiped & A = QR ================= */}
        <g transform="translate(470, 25)">
          {/* Card Border */}
          <rect
            x="0"
            y="0"
            width="425"
            height="360"
            rx="10"
            className="fill-card stroke-border"
            strokeWidth="1"
          />

          <text x="20" y="28" className="text-xs font-bold fill-foreground tracking-wide">
            图 B：3D 平行多面体体积与 A = QR 正交高分解
          </text>
          <text x="20" y="46" className="text-[11px] font-sans fill-muted-foreground">
            Gram-Schmidt 正交化将多面体剪切为长方体：底面积 × 正交高
          </text>

          {/* 3D Wireframe Parallelepiped */}
          {/* Origin O at (70, 230) */}
          <g transform="translate(70, 215)">
            {/* Projected vectors:
                a1 = (140, 10)  along bottom
                a2 = (70, -60)  in base plane
                a3 = (40, -140) pointing up
            */}
            {/* Back faces (dashed) */}
            <line x1="70" y1="-60" x2="210" y2="-50" className="stroke-muted-foreground/40" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="70" y1="-60" x2="110" y2="-200" className="stroke-muted-foreground/40" strokeWidth="1" strokeDasharray="3 3" />

            {/* Base polygon (a1 & a2): (0,0) -> (140, 10) -> (210, -50) -> (70, -60) */}
            <polygon
              points="0,0 140,10 210,-50 70,-60"
              className="fill-blue-500/10 stroke-blue-500/40"
              strokeWidth="1"
            />

            {/* Top polygon (translated by a3=(40, -140)):
                (40,-140) -> (180,-130) -> (250,-190) -> (110,-200)
            */}
            <polygon
              points="40,-140 180,-130 250,-190 110,-200"
              className="fill-emerald-500/15 stroke-emerald-500/50"
              strokeWidth="1"
            />

            {/* Vertical Edges */}
            <line x1="0" y1="0" x2="40" y2="-140" className="stroke-purple-600 dark:stroke-purple-400" strokeWidth="2" markerEnd="url(#l20-arrow-q)" />
            <line x1="140" y1="10" x2="180" y2="-130" className="stroke-foreground/60" strokeWidth="1.2" />
            <line x1="210" y1="-50" x2="250" y2="-190" className="stroke-foreground/60" strokeWidth="1.2" />

            {/* Front & Right Edges */}
            <line x1="0" y1="0" x2="140" y2="10" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" markerEnd="url(#l20-arrow-v1)" />
            <line x1="0" y1="0" x2="70" y2="-60" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" markerEnd="url(#l20-arrow-v2)" />
            <line x1="140" y1="10" x2="210" y2="-50" className="stroke-foreground/60" strokeWidth="1.2" />
            <line x1="40" y1="-140" x2="180" y2="-130" className="stroke-foreground/60" strokeWidth="1.2" />
            <line x1="180" y1="-130" x2="250" y2="-190" className="stroke-foreground/60" strokeWidth="1.2" />

            {/* Orthogonal Altitude Drop from a3 to base plane */}
            {/* Orthogonal projection of a3 onto normal to base plane: vertical drop */}
            <line
              x1="40"
              y1="-140"
              x2="40"
              y2="-20"
              className="stroke-rose-500 dark:stroke-rose-400"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            {/* Right-angle marker at base */}
            <path d="M 40 -30 L 48 -28 L 48 -18" fill="none" className="stroke-rose-500 dark:stroke-rose-400" strokeWidth="1" />
            <text x="46" y="-75" className="text-xs font-mono font-bold fill-rose-600 dark:fill-rose-400">
              h₃ = r₃₃
            </text>

            {/* Vector Labels */}
            <text x="145" y="24" className="text-xs font-mono font-bold fill-blue-600 dark:fill-blue-400">
              a₁ (底边长 r₁₁)
            </text>
            <text x="42" y="-62" className="text-xs font-mono font-bold fill-emerald-600 dark:fill-emerald-400">
              a₂
            </text>
            <text x="8" y="-142" className="text-xs font-mono font-bold fill-purple-600 dark:fill-purple-400">
              a₃
            </text>

            {/* In-diagram altitude 2 label */}
            <text x="85" y="-18" className="text-[10px] font-sans fill-emerald-600 dark:fill-emerald-400">
              底面正交高 = r₂₂
            </text>
          </g>

          {/* Algebraic Formula Box */}
          <rect
            x="20"
            y="275"
            width="385"
            height="72"
            rx="6"
            className="fill-muted/30 stroke-border"
            strokeWidth="1"
          />
          <text x="35" y="295" className="text-xs font-mono font-semibold fill-foreground">
            A = Q · R &#8658; |det(A)| = |det(Q)| · |det(R)|
          </text>
          <text x="35" y="315" className="text-xs font-mono fill-emerald-600 dark:fill-emerald-400">
            = 1 · (r₁₁ · r₂₂ · r₃₃) = (底边) × (正交高₁) × (正交高₂)
          </text>
          <text x="35" y="335" className="text-[11px] font-sans font-bold fill-purple-600 dark:fill-purple-400">
            体积公式：Vol(多面体) = |det(A)| = &#8730;det(A&#7488;A)
          </text>
        </g>
      </svg>
    </MathDiagram>
  )
}
