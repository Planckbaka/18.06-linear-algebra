import * as React from 'react'
import { MathDiagram } from './math-diagram'

export function ComplexInnerProductAndUnitaryCircleDiagram({
  caption = '左：实空间 $\\mathbb{R}^n$ 到复空间 $\\mathbb{C}^n$ 的核心算子字典与 $\\mathbf{z}^H\\mathbf{z}$ 共轭必要性反例；右：复平面单位圆上的 $F_4$（$w = i$）与 $F_8$（$w_8 = e^{i\\pi/4}$）单位根几何对称抵消与列正交性',
}: {
  caption?: string
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        aria-label="复数内积映射字典与单位圆上n次单位根几何正交性示意图"
      >
        <defs>
          <marker
            id="l27-d1-arrow-axis"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-foreground/60" />
          </marker>
          <marker
            id="l27-d1-arrow-blue"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l27-d1-arrow-purple"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l27-d1-arrow-emerald"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
        </defs>

        {/* ================= 左面板：R^n -> C^n 映射字典与共轭必要性 ================= */}
        <g>
          <rect
            x="16"
            y="16"
            width="456"
            height="408"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          <text x="34" y="44" className="fill-foreground font-semibold text-sm">
            实空间 ℝⁿ → 复空间 ℂⁿ：核心代数映射字典
          </text>

          {/* 字典表格 */}
          <rect
            x="30"
            y="58"
            width="428"
            height="218"
            rx="8"
            className="fill-muted/20 stroke-border/70"
            strokeWidth="1"
          />
          {/* 表头 */}
          <rect
            x="30"
            y="58"
            width="428"
            height="28"
            rx="8"
            className="fill-muted/50"
          />
          <line x1="30" y1="86" x2="458" y2="86" className="stroke-border/80" strokeWidth="1" />
          <line x1="148" y1="58" x2="148" y2="276" className="stroke-border/50" strokeWidth="1" />
          <line x1="286" y1="58" x2="286" y2="276" className="stroke-border/50" strokeWidth="1" />

          <text x="42" y="76" className="fill-muted-foreground text-[11px] font-semibold">
            代数概念
          </text>
          <text x="160" y="76" className="fill-muted-foreground text-[11px] font-semibold">
            实空间 ℝⁿ
          </text>
          <text x="298" y="76" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-semibold">
            复空间 ℂⁿ (加共轭)
          </text>

          {/* Row 1: 转置 */}
          <line x1="30" y1="124" x2="458" y2="124" className="stroke-border/40" strokeWidth="1" />
          <text x="42" y="109" className="fill-foreground text-xs font-medium">
            转置算子
          </text>
          <text x="160" y="109" className="fill-muted-foreground text-xs font-mono">
            Aᵀ
          </text>
          <text x="298" y="109" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-semibold">
            Aᴴ = Āᵀ (共轭转置)
          </text>

          {/* Row 2: 内积 */}
          <line x1="30" y1="162" x2="458" y2="162" className="stroke-border/40" strokeWidth="1" />
          <text x="42" y="147" className="fill-foreground text-xs font-medium">
            向量内积
          </text>
          <text x="160" y="147" className="fill-muted-foreground text-xs font-mono">
            xᵀy = ∑ xₖyₖ
          </text>
          <text x="298" y="147" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono font-semibold">
            zᴴw = ∑ z̄ₖwₖ
          </text>

          {/* Row 3: 长度平方 */}
          <line x1="30" y1="200" x2="458" y2="200" className="stroke-border/40" strokeWidth="1" />
          <text x="42" y="185" className="fill-foreground text-xs font-medium">
            范数平方
          </text>
          <text x="160" y="185" className="fill-muted-foreground text-xs font-mono">
            xᵀx = ∑ xₖ² ≥ 0
          </text>
          <text x="298" y="185" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-semibold">
            zᴴz = ∑ |zₖ|² ≥ 0
          </text>

          {/* Row 4: Hermitian */}
          <line x1="30" y1="238" x2="458" y2="238" className="stroke-border/40" strokeWidth="1" />
          <text x="42" y="223" className="fill-foreground text-xs font-medium">
            实特征值矩阵
          </text>
          <text x="160" y="223" className="fill-muted-foreground text-xs font-mono">
            对称: Aᵀ = A
          </text>
          <text x="298" y="223" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-semibold">
            Hermitian: Aᴴ = A
          </text>

          {/* Row 5: Unitary */}
          <text x="42" y="261" className="fill-foreground text-xs font-medium">
            保长正交矩阵
          </text>
          <text x="160" y="261" className="fill-muted-foreground text-xs font-mono">
            正交: QᵀQ = I
          </text>
          <text x="298" y="261" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-semibold">
            酉矩阵: UᴴU = I
          </text>

          {/* 共轭必要性检验面板 */}
          <rect
            x="30"
            y="290"
            width="428"
            height="120"
            rx="8"
            className="fill-muted/25 stroke-border/70"
            strokeWidth="1"
          />
          <text x="42" y="311" className="fill-foreground text-xs font-semibold">
            为何内积必须共轭？关键反例检验：z = [1, i]ᵀ ≠ 0
          </text>

          {/* 错用 z^T z */}
          <rect
            x="40"
            y="323"
            width="198"
            height="76"
            rx="6"
            className="fill-rose-500/10 stroke-rose-500/40"
            strokeWidth="1"
          />
          <text x="50" y="342" className="fill-rose-600 dark:fill-rose-400 text-[11px] font-semibold">
            ✗ 错用实点积 zᵀz：
          </text>
          <text x="50" y="363" className="fill-foreground text-[11px] font-mono">
            zᵀz = 1² + i² = 1 - 1 = 0
          </text>
          <text x="50" y="384" className="fill-rose-700 dark:fill-rose-300 text-[11px]">
            非零向量的“长度”竟坍缩为 0！
          </text>

          {/* 正确 z^H z */}
          <rect
            x="248"
            y="323"
            width="200"
            height="76"
            rx="6"
            className="fill-emerald-500/10 stroke-emerald-500/40"
            strokeWidth="1"
          />
          <text x="258" y="342" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-semibold">
            ✓ 共轭内积 zᴴz：
          </text>
          <text x="258" y="363" className="fill-foreground text-[11px] font-mono">
            zᴴz = |1|² + |i|² = 1 + 1 = 2
          </text>
          <text x="258" y="384" className="fill-emerald-700 dark:fill-emerald-300 text-[11px]">
            ||z|| = √2 &gt; 0，正定性严格成立！
          </text>
        </g>

        {/* ================= 右面板：复平面单位圆上的 n 次单位根 ================= */}
        <g>
          <rect
            x="486"
            y="16"
            width="418"
            height="408"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          <text x="504" y="44" className="fill-foreground font-semibold text-sm">
            单位圆上的 n 次单位根：F₄ 与 F₈ 的几何抵消
          </text>

          {/* 图例 */}
          <circle cx="512" cy="64" r="4.5" className="fill-blue-600 dark:fill-blue-400" />
          <text x="522" y="68" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-medium">
            F₄ 单位根 (w = i)
          </text>
          <circle cx="634" cy="64" r="4" className="fill-purple-600 dark:fill-purple-400" />
          <text x="644" y="68" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-medium">
            F₈ 补充单位根 (w₈ = e^(iπ/4))
          </text>

          {/* 坐标轴 (圆心 695, 196; 半径 R = 98) */}
          <line
            x1="560"
            y1="196"
            x2="835"
            y2="196"
            className="stroke-foreground/45"
            strokeWidth="1.3"
            markerEnd="url(#l27-d1-arrow-axis)"
          />
          <text x="842" y="200" className="fill-foreground text-[11px] font-mono">
            Re
          </text>

          <line
            x1="695"
            y1="316"
            x2="695"
            y2="80"
            className="stroke-foreground/45"
            strokeWidth="1.3"
            markerEnd="url(#l27-d1-arrow-axis)"
          />
          <text x="703" y="86" className="fill-foreground text-[11px] font-mono">
            Im
          </text>

          {/* 单位圆 |z| = 1 (R = 98) */}
          <circle
            cx="695"
            cy="196"
            r="98"
            fill="none"
            className="stroke-border"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />

          {/* 正八边形连接线 (695 + 98*cos, 196 - 98*sin; 98*0.7071 = 69.3) */}
          {/* 顶点: (793,196), (764.3,126.7), (695,98), (625.7,126.7), (597,196), (625.7,265.3), (695,294), (764.3,265.3) */}
          <polygon
            points="793,196 764.3,126.7 695,98 625.7,126.7 597,196 625.7,265.3 695,294 764.3,265.3"
            fill="none"
            className="stroke-purple-500/35 dark:stroke-purple-400/35"
            strokeWidth="1.2"
          />

          {/* F4 四个单位根箭头 (蓝) */}
          <line
            x1="695"
            y1="196"
            x2="785"
            y2="196"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            markerEnd="url(#l27-d1-arrow-blue)"
          />
          <line
            x1="695"
            y1="196"
            x2="695"
            y2="106"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            markerEnd="url(#l27-d1-arrow-blue)"
          />
          <line
            x1="695"
            y1="196"
            x2="605"
            y2="196"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            markerEnd="url(#l27-d1-arrow-blue)"
          />
          <line
            x1="695"
            y1="196"
            x2="695"
            y2="286"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            markerEnd="url(#l27-d1-arrow-blue)"
          />

          {/* 对称抵消的一对 F8 奇数根箭头 (w_8 与 w_8^5 = -w_8) */}
          <line
            x1="695"
            y1="196"
            x2="759"
            y2="132"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.6"
            strokeDasharray="3 2"
            markerEnd="url(#l27-d1-arrow-purple)"
          />
          <line
            x1="695"
            y1="196"
            x2="631"
            y2="260"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.6"
            strokeDasharray="3 2"
            markerEnd="url(#l27-d1-arrow-purple)"
          />
          <line
            x1="695"
            y1="196"
            x2="631"
            y2="132"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.4"
            strokeDasharray="3 2"
            markerEnd="url(#l27-d1-arrow-emerald)"
          />
          <line
            x1="695"
            y1="196"
            x2="759"
            y2="260"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.4"
            strokeDasharray="3 2"
            markerEnd="url(#l27-d1-arrow-emerald)"
          />

          {/* F4 顶点圆点与标签 */}
          <circle cx="793" cy="196" r="5" className="fill-blue-600 dark:fill-blue-400 stroke-background" strokeWidth="1.5" />
          <text x="802" y="185" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-bold">
            1
          </text>

          <circle cx="695" cy="98" r="5" className="fill-blue-600 dark:fill-blue-400 stroke-background" strokeWidth="1.5" />
          <text x="615" y="96" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-bold">
            w₄ = i (w₈²)
          </text>

          <circle cx="597" cy="196" r="5" className="fill-blue-600 dark:fill-blue-400 stroke-background" strokeWidth="1.5" />
          <text x="536" y="185" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-bold">
            w₄² = −1
          </text>

          <circle cx="695" cy="294" r="5" className="fill-blue-600 dark:fill-blue-400 stroke-background" strokeWidth="1.5" />
          <text x="705" y="309" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-bold">
            w₄³ = −i
          </text>

          {/* F8 补充顶点圆点与标签 */}
          <circle cx="764.3" cy="126.7" r="4" className="fill-purple-600 dark:fill-purple-400 stroke-background" strokeWidth="1.2" />
          <text x="774" y="122" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-semibold">
            w₈ = e^(iπ/4)
          </text>

          <circle cx="625.7" cy="126.7" r="4" className="fill-emerald-600 dark:fill-emerald-400 stroke-background" strokeWidth="1.2" />
          <text x="617" y="122" textAnchor="end" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-mono font-semibold">
            w₈³
          </text>

          <circle cx="625.7" cy="265.3" r="4" className="fill-purple-600 dark:fill-purple-400 stroke-background" strokeWidth="1.2" />
          <text x="617" y="280" textAnchor="end" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-semibold">
            w₈⁵ = −w₈
          </text>

          <circle cx="764.3" cy="265.3" r="4" className="fill-emerald-600 dark:fill-emerald-400 stroke-background" strokeWidth="1.2" />
          <text x="774" y="278" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-mono font-semibold">
            w₈⁷ = −w₈³
          </text>

          {/* 底部解释卡片 */}
          <rect
            x="500"
            y="324"
            width="390"
            height="86"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/30"
            strokeWidth="1"
          />
          <text x="514" y="344" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-semibold">
            几何级数抵消：∑ₖ₌₀ⁿ⁻¹ (wᵐ)ᵏ = (1 − wⁿᵐ)/(1 − wᵐ) = 0
          </text>
          <text x="514" y="364" className="fill-foreground text-[11px]">
            • 圆周对称矢量首尾相接闭合归零 ⇒ 不同列内积 cⱼᴴcₖ = 0
          </text>
          <text x="514" y="383" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-medium">
            • 归一化推论：FₙᴴFₙ = nIₙ ⇒ (1/√n)Fₙ 为酉矩阵，Fₙ⁻¹ = (1/n)Fₙᴴ
          </text>
          <text x="514" y="401" className="fill-muted-foreground text-[10.5px]">
            • 警示：若不取共轭，F₄ 第 1 与第 3 列实点积 c₁ᵀc₃ = 1+1+1+1 = 4 ≠ 0
          </text>
        </g>
      </svg>
    </MathDiagram>
  )
}

export function FastFourierButterflyFactorizationDiagram({
  caption = 'Radix-2 快速傅里叶变换（FFT）稀疏分块分解：经奇偶置换 $P_n$、两半规模递归 $F_{n/2}$ 与旋转因子蝶形网络 $D_{n/2}$，复杂度从 $\\mathcal{O}(n^2)$ 骤降至 $\\frac{1}{2}n\\log_2 n$',
}: {
  caption?: string
}) {
  // 8-point track y positions: top 4 (even block) and bottom 4 (odd block)
  const slotY = [142, 168, 194, 220, 260, 286, 312, 338]
  // Permutation mapping: original input index i -> permuted slot
  // even indices (0,2,4,6) -> slots (0,1,2,3); odd indices (1,3,5,7) -> slots (4,5,6,7)
  const permTargets = [0, 4, 1, 5, 2, 6, 3, 7]
  const twiddleLabels = ['1', 'w', 'w²', 'w³']

  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        aria-label="Radix-2 快速傅里叶变换蝴蝶分解与矩阵分块架构示意图"
      >
        {/* ================= 顶部总公式横幅 ================= */}
        <g>
          <rect
            x="16"
            y="14"
            width="888"
            height="68"
            rx="10"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="32" y="37" className="fill-foreground font-semibold text-sm">
            Cooley-Tukey / Strang 核心矩阵分解（n = 2ᵐ）
          </text>
          <text x="32" y="62" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-bold">
            Fₙ = [ Iₙ/₂   Dₙ/₂ ;  Iₙ/₂   −Dₙ/₂ ]  ·  [ Fₙ/₂   0 ;  0   Fₙ/₂ ]  ·  Pₙ
          </text>

          {/* 阶段图例标签 */}
          <rect x="526" y="25" width="110" height="44" rx="7" className="fill-purple-500/10 stroke-purple-500/35" strokeWidth="1" />
          <text x="538" y="44" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-semibold">
            ① Pₙ 奇偶重排
          </text>
          <text x="538" y="60" className="fill-muted-foreground text-[10.5px]">
            0 次复数乘法
          </text>

          <rect x="646" y="25" width="120" height="44" rx="7" className="fill-blue-500/10 stroke-blue-500/35" strokeWidth="1" />
          <text x="658" y="44" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono font-semibold">
            ② Fₙ/₂ ⊕ Fₙ/₂
          </text>
          <text x="658" y="60" className="fill-muted-foreground text-[10.5px]">
            规模减半 2·M(n/2)
          </text>

          <rect x="776" y="25" width="114" height="44" rx="7" className="fill-emerald-500/10 stroke-emerald-500/35" strokeWidth="1" />
          <text x="786" y="44" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-mono font-semibold">
            ③ Dₙ/₂ 蝶形合流
          </text>
          <text x="786" y="60" className="fill-muted-foreground text-[10.5px]">
            仅 n/2 次旋转乘法
          </text>
        </g>

        {/* ================= 左中面板：8点 FFT 三段式信号流图 ================= */}
        <g>
          <rect
            x="16"
            y="92"
            width="588"
            height="278"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="32" y="114" className="fill-foreground font-semibold text-xs">
            n = 8 三步分解流图：从 P₈ 奇偶分流到两块 F₄ 递归与 4 组蝶形合流
          </text>

          {/* 列标题 */}
          <text x="30" y="128" className="fill-muted-foreground text-[10px] font-mono">
            输入 x
          </text>
          <text x="86" y="128" className="fill-purple-600 dark:fill-purple-400 text-[10px] font-mono font-semibold">
            P₈ 置换
          </text>
          <text x="192" y="128" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono font-semibold">
            半阶递归
          </text>
          <text x="302" y="128" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-mono font-semibold">
            D₄ = diag(1,w,w²,w³)
          </text>
          <text x="434" y="128" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-mono font-semibold">
            蝶形合流 (±)
          </text>
          <text x="556" y="128" className="fill-foreground text-[10px] font-mono font-semibold">
            输出 y
          </text>

          {/* Stage 1: 输入与 P_8 置换连线 */}
          {slotY.map((yIn, idx) => {
            const targetSlot = permTargets[idx]
            const yOut = slotY[targetSlot]
            const isEven = idx % 2 === 0
            return (
              <g key={`perm-${idx}`}>
                <text
                  x="30"
                  y={yIn + 4}
                  className={
                    isEven
                      ? 'fill-blue-600 dark:fill-blue-400 text-[11px] font-mono font-semibold'
                      : 'fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-semibold'
                  }
                >
                  x{idx}
                </text>
                <circle
                  cx="54"
                  cy={yIn}
                  r="2.5"
                  className={isEven ? 'fill-blue-600 dark:fill-blue-400' : 'fill-purple-600 dark:fill-purple-400'}
                />
                <line
                  x1="57"
                  y1={yIn}
                  x2="136"
                  y2={yOut}
                  className={isEven ? 'stroke-blue-500/65 dark:stroke-blue-400/65' : 'stroke-purple-500/65 dark:stroke-purple-400/65'}
                  strokeWidth="1.4"
                />
                <circle
                  cx="136"
                  cy={yOut}
                  r="2.5"
                  className={isEven ? 'fill-blue-600 dark:fill-blue-400' : 'fill-purple-600 dark:fill-purple-400'}
                />
                <line
                  x1="138"
                  y1={yOut}
                  x2="174"
                  y2={yOut}
                  className={isEven ? 'stroke-blue-500/75 dark:stroke-blue-400/75' : 'stroke-purple-500/75 dark:stroke-purple-400/75'}
                  strokeWidth="1.4"
                />
              </g>
            )
          })}

          {/* 置换后标签 x0,x2,x4,x6 / x1,x3,x5,x7 */}
          {['x₀', 'x₂', 'x₄', 'x₆', 'x₁', 'x₃', 'x₅', 'x₇'].map((lbl, s) => (
            <text
              key={`plbl-${s}`}
              x="144"
              y={slotY[s] - 4}
              className={
                s < 4
                  ? 'fill-blue-600 dark:fill-blue-400 text-[10px] font-mono'
                  : 'fill-purple-600 dark:fill-purple-400 text-[10px] font-mono'
              }
            >
              {lbl}
            </text>
          ))}

          {/* Stage 2: 两个 F_4 递归方块 */}
          <rect
            x="174"
            y="133"
            width="78"
            height="96"
            rx="8"
            className="fill-blue-500/12 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.5"
          />
          <text x="190" y="177" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-bold">
            F₄ (偶)
          </text>
          <text x="183" y="196" className="fill-muted-foreground text-[10px] font-mono">
            → 2 × F₂
          </text>

          <rect
            x="174"
            y="251"
            width="78"
            height="96"
            rx="8"
            className="fill-purple-500/12 stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.5"
          />
          <text x="190" y="295" className="fill-purple-700 dark:fill-purple-300 text-xs font-mono font-bold">
            F₄ (奇)
          </text>
          <text x="183" y="314" className="fill-muted-foreground text-[10px] font-mono">
            → 2 × F₂
          </text>

          {/* Stage 3: 中间向量 E_j 与 O_j + Twiddle D_4 */}
          {[0, 1, 2, 3].map((j) => {
            const yTop = slotY[j]
            const yBot = slotY[j + 4]
            return (
              <g key={`twiddle-${j}`}>
                {/* 偶部直通线 */}
                <line
                  x1="252"
                  y1={yTop}
                  x2="380"
                  y2={yTop}
                  className="stroke-blue-600 dark:stroke-blue-400"
                  strokeWidth="1.5"
                />
                <text x="262" y={yTop - 4} className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono">
                  E{j}
                </text>

                {/* 奇部经过 D_4 旋转因子 */}
                <line
                  x1="252"
                  y1={yBot}
                  x2="380"
                  y2={yBot}
                  className="stroke-amber-600 dark:stroke-amber-400"
                  strokeWidth="1.5"
                />
                <text x="262" y={yBot - 4} className="fill-purple-600 dark:fill-purple-400 text-[10px] font-mono">
                  O{j}
                </text>
                <rect
                  x="308"
                  y={yBot - 9}
                  width="34"
                  height="18"
                  rx="4"
                  className="fill-amber-500/15 stroke-amber-600 dark:stroke-amber-400"
                  strokeWidth="1"
                />
                <text
                  x="325"
                  y={yBot + 3.5}
                  textAnchor="middle"
                  className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-semibold"
                >
                  ×{twiddleLabels[j]}
                </text>
              </g>
            )
          })}

          {/* Stage 4: 4 组平行蝶形交叉网络 (x = 380 -> 532) */}
          {[0, 1, 2, 3].map((j) => {
            const yTop = slotY[j]
            const yBot = slotY[j + 4]
            return (
              <g key={`bfly-${j}`}>
                {/* E_j 直通到 y_j */}
                <line
                  x1="380"
                  y1={yTop}
                  x2="528"
                  y2={yTop}
                  className="stroke-blue-600/80 dark:stroke-blue-400/80"
                  strokeWidth="1.5"
                />
                {/* E_j 斜下到 y_{j+4} */}
                <line
                  x1="380"
                  y1={yTop}
                  x2="528"
                  y2={yBot}
                  className="stroke-blue-500/45 dark:stroke-blue-400/45"
                  strokeWidth="1.2"
                />
                {/* w^j O_j 斜上加到 y_j */}
                <line
                  x1="380"
                  y1={yBot}
                  x2="528"
                  y2={yTop}
                  className="stroke-emerald-500/65 dark:stroke-emerald-400/65"
                  strokeWidth="1.3"
                />
                {/* w^j O_j 直通取负到 y_{j+4} */}
                <line
                  x1="380"
                  y1={yBot}
                  x2="528"
                  y2={yBot}
                  className="stroke-rose-600/80 dark:stroke-rose-400/80"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />

                {/* 汇流节点 */}
                <circle cx="380" cy={yTop} r="2.8" className="fill-blue-600 dark:fill-blue-400" />
                <circle cx="380" cy={yBot} r="2.8" className="fill-amber-600 dark:fill-amber-400" />

                <circle cx="532" cy={yTop} r="7" className="fill-emerald-500/15 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.2" />
                <text x="532" y={yTop + 3.5} textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
                  +
                </text>

                <circle cx="532" cy={yBot} r="7" className="fill-rose-500/15 stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.2" />
                <text x="532" y={yBot + 3.5} textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">
                  −
                </text>

                {/* 输出 y_j 与 y_{j+4} */}
                <line x1="539" y1={yTop} x2="554" y2={yTop} className="stroke-foreground/60" strokeWidth="1.2" />
                <text x="558" y={yTop + 4} className="fill-foreground text-[11px] font-mono font-semibold">
                  y{j}
                </text>

                <line x1="539" y1={yBot} x2="554" y2={yBot} className="stroke-foreground/60" strokeWidth="1.2" />
                <text x="558" y={yBot + 4} className="fill-foreground text-[11px] font-mono font-semibold">
                  y{j + 4}
                </text>
              </g>
            )
          })}
        </g>

        {/* ================= 右侧面板：微观蝶形单元 & 复杂度降维对比 ================= */}
        <g>
          <rect
            x="616"
            y="92"
            width="288"
            height="278"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          {/* 上半部分：单个蝶形算子 */}
          <text x="632" y="114" className="fill-foreground font-semibold text-xs">
            微观核心：单个蝶形单元 (Butterfly Cell)
          </text>

          <rect
            x="630"
            y="124"
            width="260"
            height="92"
            rx="8"
            className="fill-muted/20 stroke-border/70"
            strokeWidth="1"
          />

          {/* E_j 线 */}
          <text x="640" y="148" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono font-bold">
            Eⱼ
          </text>
          <line x1="658" y1="144" x2="790" y2="144" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.8" />
          {/* O_j 线与旋转因子 */}
          <text x="640" y="191" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-bold">
            Oⱼ
          </text>
          <line x1="658" y1="187" x2="720" y2="187" className="stroke-purple-600 dark:stroke-purple-400" strokeWidth="1.8" />
          <rect x="676" y="177" width="32" height="20" rx="4" className="fill-amber-500/15 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.1" />
          <text x="692" y="190" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">
            ×wʲ
          </text>
          <line x1="720" y1="187" x2="790" y2="187" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.8" strokeDasharray="4 2" />

          {/* 蝶形交叉 */}
          <line x1="720" y1="144" x2="790" y2="187" className="stroke-blue-500/70 dark:stroke-blue-400/70" strokeWidth="1.5" />
          <line x1="720" y1="187" x2="790" y2="144" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.5" />

          <circle cx="720" cy="144" r="3" className="fill-blue-600 dark:fill-blue-400" />
          <circle cx="720" cy="187" r="3" className="fill-amber-600 dark:fill-amber-400" />

          {/* -1 标记 */}
          <text x="765" y="182" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono font-bold">
            −1
          </text>

          <circle cx="792" cy="144" r="6.5" className="fill-emerald-500/15 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.2" />
          <text x="792" y="147.5" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
            +
          </text>
          <circle cx="792" cy="187" r="6.5" className="fill-rose-500/15 stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.2" />
          <text x="792" y="190.5" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">
            −
          </text>

          <text x="804" y="148" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-semibold">
            Eⱼ + wʲOⱼ
          </text>
          <text x="804" y="191" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-semibold">
            Eⱼ − wʲOⱼ
          </text>

          <text x="640" y="210" className="fill-muted-foreground text-[10px]">
            因 w^(j+n/2) = −wʲ，乘 1 次 wʲ 即得一对输出
          </text>

          {/* 下半部分：复杂度对比 */}
          <text x="632" y="238" className="fill-foreground font-semibold text-xs">
            复杂度降维：M(n) = 2M(n/2) + n/2
          </text>
          <text x="632" y="255" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-bold">
            ⇒ M(n) = ½ n log₂ n  (对比直接乘法 n²)
          </text>

          {/* 对比表 */}
          <rect
            x="630"
            y="265"
            width="260"
            height="92"
            rx="8"
            className="fill-muted/20 stroke-border/70"
            strokeWidth="1"
          />
          <rect x="630" y="265" width="260" height="22" rx="8" className="fill-muted/50" />
          <line x1="630" y1="287" x2="890" y2="287" className="stroke-border/70" strokeWidth="1" />
          <text x="640" y="280" className="fill-muted-foreground text-[10px] font-semibold">
            规模 n
          </text>
          <text x="694" y="280" className="fill-muted-foreground text-[10px] font-semibold">
            直接 (n²)
          </text>
          <text x="768" y="280" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-semibold">
            FFT (½n log₂n)
          </text>
          <text x="856" y="280" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-semibold">
            加速
          </text>

          {/* 行 1: n=8 */}
          <line x1="630" y1="310" x2="890" y2="310" className="stroke-border/40" strokeWidth="1" />
          <text x="640" y="303" className="fill-foreground text-[10.5px] font-mono">
            8
          </text>
          <text x="694" y="303" className="fill-muted-foreground text-[10.5px] font-mono">
            64
          </text>
          <text x="774" y="303" className="fill-emerald-600 dark:fill-emerald-400 text-[10.5px] font-mono font-semibold">
            12
          </text>
          <text x="856" y="303" className="fill-blue-600 dark:fill-blue-400 text-[10.5px] font-mono font-semibold">
            5.3×
          </text>

          {/* 行 2: n=1024 */}
          <line x1="630" y1="333" x2="890" y2="333" className="stroke-border/40" strokeWidth="1" />
          <text x="640" y="326" className="fill-foreground text-[10.5px] font-mono">
            1024
          </text>
          <text x="694" y="326" className="fill-muted-foreground text-[10.5px] font-mono">
            1,048,576
          </text>
          <text x="774" y="326" className="fill-emerald-600 dark:fill-emerald-400 text-[10.5px] font-mono font-semibold">
            5,120
          </text>
          <text x="856" y="326" className="fill-blue-600 dark:fill-blue-400 text-[10.5px] font-mono font-semibold">
            205×
          </text>

          {/* 行 3: n=2^20 */}
          <text x="640" y="349" className="fill-foreground text-[10.5px] font-mono">
            2²⁰
          </text>
          <text x="694" y="349" className="fill-muted-foreground text-[10.5px] font-mono">
            ~1.1 × 10¹²
          </text>
          <text x="774" y="349" className="fill-emerald-600 dark:fill-emerald-400 text-[10.5px] font-mono font-semibold">
            ~1.0 × 10⁷
          </text>
          <text x="856" y="349" className="fill-blue-600 dark:fill-blue-400 text-[10.5px] font-mono font-semibold">
            10⁵×
          </text>
        </g>

        {/* ================= 底部本质总结条 ================= */}
        <g>
          <rect
            x="16"
            y="380"
            width="888"
            height="46"
            rx="10"
            className="fill-emerald-500/10 stroke-emerald-500/30"
            strokeWidth="1.2"
          />
          <text x="32" y="399" className="fill-foreground text-xs font-medium">
            分治核心密码：(1) wₙ² = wₙ/₂ 使偶索引与奇索引共用半阶矩阵 Fₙ/₂；(2) wₙⁿ/² = −1 使上下两半只差负号。
          </text>
          <text x="32" y="417" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono">
            线性代数本质：稠密矩阵 Fₙ 并非整体计算，而是逐层展开为 log₂ n 个每行至多 2 个非零元的超稀疏矩阵乘积！
          </text>
        </g>
      </svg>
    </MathDiagram>
  )
}
