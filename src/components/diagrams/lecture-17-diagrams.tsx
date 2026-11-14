import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function GramSchmidtAndQRDiagram({
  caption = 'Gram-Schmidt 正交化几何去投影与 $A = QR$ 矩阵分解结构：左图展示从原始基 $\\mathbf{a}_1, \\mathbf{a}_2$ 逐步剔除平行投影分量 $(\\mathbf{q}_1^T\\mathbf{a}_2)\\mathbf{q}_1$，获得正交残差 $\\mathbf{B} \\perp \\mathbf{q}_1$ 并归一化为单位正交坐标架 $\\{\\mathbf{q}_1, \\mathbf{q}_2\\}$；右图揭示 $A = QR$ 分解中上三角矩阵 $R = Q^TA$ 的本质——下三角元素因 $\\mathbf{q}_i \\perp \\operatorname{span}\\{\\mathbf{a}_1, \\dots, \\mathbf{a}_j\\}$ ($i > j$) 严格为零，主对角元 $r_{jj} = \\|\\mathbf{v}_j\\|_2 > 0$ 严格为正，彻底消除最小二乘求解中 $A^TA$ 的病态求逆灾难！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Gram-Schmidt Orthogonalization Geometry & The A = QR Factorization"
      caption={caption}
    >
      <svg
        viewBox="0 0 880 380"
        className="w-full max-w-[880px] select-none text-foreground"
        role="img"
        aria-label="Gram-Schmidt orthogonalization projection subtraction and A = QR upper-triangular matrix factorization"
      >
        <defs>
          <marker
            id="l17-arrow-blue"
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
            id="l17-arrow-emerald"
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
            id="l17-arrow-purple"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l17-arrow-amber"
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
            id="l17-arrow-rose"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* ================= LEFT PANEL: GRAM-SCHMIDT GEOMETRY ================= */}
        <g transform="translate(14, 12)">
          {/* Card background */}
          <rect
            x="0"
            y="0"
            width="416"
            height="356"
            rx="10"
            className="fill-background stroke-border"
            strokeWidth="1.2"
          />

          {/* Panel Header */}
          <rect
            x="0"
            y="0"
            width="416"
            height="38"
            rx="10"
            className="fill-muted/40 border-b border-border"
          />
          <text
            x="208"
            y="23"
            textAnchor="middle"
            className="fill-foreground font-semibold text-[12px]"
          >
            ① Gram-Schmidt 逐次去投影几何图解
          </text>

          {/* Subspace span line for a1 */}
          <line
            x1="35"
            y1="258"
            x2="350"
            y2="192"
            className="stroke-muted-foreground/35"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text
            x="345"
            y="186"
            className="fill-muted-foreground font-mono text-[9.5px]"
          >
            span&#123;a₁&#125;
          </text>

          {/* Origin O */}
          <circle cx="75" cy="250" r="4" className="fill-foreground" />
          <text
            x="64"
            y="266"
            className="fill-foreground font-mono text-[11px] font-bold"
          >
            O
          </text>

          {/* Vector a1 */}
          <line
            x1="75"
            y1="250"
            x2="260"
            y2="210"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.2"
            markerEnd="url(#l17-arrow-blue)"
          />
          <text
            x="264"
            y="206"
            className="fill-blue-700 dark:fill-blue-300 font-mono text-[12px] font-bold"
          >
            a₁
          </text>

          {/* Unit vector q1 */}
          <line
            x1="75"
            y1="250"
            x2="157"
            y2="232"
            className="stroke-blue-700 dark:stroke-blue-300"
            strokeWidth="4"
            markerEnd="url(#l17-arrow-blue)"
          />
          <text
            x="122"
            y="256"
            className="fill-blue-800 dark:fill-blue-200 font-mono text-[10.5px] font-bold"
          >
            q₁ = a₁ / ‖a₁‖
          </text>

          {/* Vector a2 */}
          <line
            x1="75"
            y1="250"
            x2="148"
            y2="95"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.4"
            markerEnd="url(#l17-arrow-emerald)"
          />
          <text
            x="146"
            y="87"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[12px] font-bold"
          >
            a₂
          </text>

          {/* Projection vector p = (q1^T a2) q1 */}
          <line
            x1="75"
            y1="250"
            x2="177"
            y2="228"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.4"
            strokeDasharray="4 2"
          />
          <text
            x="180"
            y="248"
            className="fill-amber-700 dark:fill-amber-300 font-mono text-[10px] font-semibold"
          >
            p = (q₁ᵀa₂)q₁
          </text>

          {/* Dashed drop line from a2 to p */}
          <line
            x1="148"
            y1="95"
            x2="177"
            y2="228"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="1.8"
            strokeDasharray="4 3"
          />

          {/* Perpendicular right-angle mark at P (177, 228) */}
          <polyline
            points="166,230 163.5,218 174.5,216"
            fill="none"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="1.4"
          />

          {/* Orthogonal residue vector B = v2 = a2 - p from Origin */}
          <line
            x1="75"
            y1="250"
            x2="46"
            y2="117"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.2"
            markerEnd="url(#l17-arrow-purple)"
          />
          <text
            x="10"
            y="115"
            className="fill-purple-700 dark:fill-purple-300 font-mono text-[11px] font-bold"
          >
            B = a₂ − p
          </text>

          {/* Unit vector q2 = B / ||B|| */}
          <line
            x1="75"
            y1="250"
            x2="57"
            y2="168"
            className="stroke-purple-700 dark:stroke-purple-300"
            strokeWidth="4"
            markerEnd="url(#l17-arrow-purple)"
          />
          <text
            x="5"
            y="172"
            className="fill-purple-800 dark:fill-purple-200 font-mono text-[10px] font-bold"
          >
            q₂ = B / ‖B‖
          </text>

          {/* Right-angle between q1 and q2 at origin */}
          <polyline
            points="87,247 84.5,235.5 72.5,238.5"
            fill="none"
            className="stroke-foreground/60"
            strokeWidth="1.3"
          />
          <text
            x="94"
            y="238"
            className="fill-foreground/75 font-mono text-[9px] font-bold"
          >
            90°
          </text>

          {/* Bottom badge summary cards */}
          <g transform="translate(18, 275)">
            <rect
              x="0"
              y="0"
              width="380"
              height="66"
              rx="6"
              className="fill-muted/30 stroke-border"
              strokeWidth="1"
            />
            <text x="12" y="19" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-semibold">
              第 1 步：基线归一化 ➜ q₁ = a₁ / ‖a₁‖ (形成首个单位标准基)
            </text>
            <text x="12" y="37" className="fill-purple-700 dark:fill-purple-300 font-mono text-[10px] font-semibold">
              第 2 步：剥离投影分量 ➜ B = a₂ − (q₁ᵀa₂)q₁ ⟂ q₁
            </text>
            <text x="12" y="55" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">
              第 3 步：残差归一化 ➜ q₂ = B / ‖B‖，得到标准正交坐标系 &#123;q₁, q₂&#125;
            </text>
          </g>
        </g>

        {/* ================= RIGHT PANEL: A = QR MATRIX DECOMPOSITION ================= */}
        <g transform="translate(444, 12)">
          {/* Card background */}
          <rect
            x="0"
            y="0"
            width="422"
            height="356"
            rx="10"
            className="fill-background stroke-border"
            strokeWidth="1.2"
          />

          {/* Panel Header */}
          <rect
            x="0"
            y="0"
            width="422"
            height="38"
            rx="10"
            className="fill-muted/40 border-b border-border"
          />
          <text
            x="211"
            y="23"
            textAnchor="middle"
            className="fill-foreground font-semibold text-[12px]"
          >
            ② A = QR 矩阵分解结构与上三角性
          </text>

          {/* Matrix Equation Layout: A = Q * R */}
          {/* Matrix A: m x 3 */}
          <g transform="translate(16, 52)">
            <text x="35" y="14" textAnchor="middle" className="fill-foreground font-mono text-[11px] font-bold">
              A
            </text>
            <text x="35" y="27" textAnchor="middle" className="fill-muted-foreground text-[9px]">
              (m × 3 独立列)
            </text>
            {/* Outline & Column strips */}
            <rect
              x="0"
              y="34"
              width="70"
              height="100"
              rx="4"
              className="fill-muted/15 stroke-border"
              strokeWidth="1.2"
            />
            {/* Column 1 */}
            <rect x="5" y="40" width="17" height="88" rx="2" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1" />
            <text x="13.5" y="88" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-bold">a₁</text>
            {/* Column 2 */}
            <rect x="26" y="40" width="17" height="88" rx="2" className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1" />
            <text x="34.5" y="88" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-bold">a₂</text>
            {/* Column 3 */}
            <rect x="47" y="40" width="17" height="88" rx="2" className="fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1" />
            <text x="55.5" y="88" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[10px] font-bold">a₃</text>
          </g>

          {/* Equal Sign "=" */}
          <text x="100" y="140" textAnchor="middle" className="fill-foreground text-[18px] font-bold">
            =
          </text>

          {/* Matrix Q: m x 3 */}
          <g transform="translate(118, 52)">
            <text x="35" y="14" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">
              Q
            </text>
            <text x="35" y="27" textAnchor="middle" className="fill-muted-foreground text-[9px]">
              (QᵀQ = I₃)
            </text>
            {/* Outline & Column strips */}
            <rect
              x="0"
              y="34"
              width="70"
              height="100"
              rx="4"
              className="fill-blue-500/10 stroke-blue-500/50"
              strokeWidth="1.2"
            />
            {/* Column 1 */}
            <rect x="5" y="40" width="17" height="88" rx="2" className="fill-blue-600/30 stroke-blue-700 dark:stroke-blue-300" strokeWidth="1.2" />
            <text x="13.5" y="88" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 font-mono text-[10px] font-bold">q₁</text>
            {/* Column 2 */}
            <rect x="26" y="40" width="17" height="88" rx="2" className="fill-emerald-600/30 stroke-emerald-700 dark:stroke-emerald-300" strokeWidth="1.2" />
            <text x="34.5" y="88" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[10px] font-bold">q₂</text>
            {/* Column 3 */}
            <rect x="47" y="40" width="17" height="88" rx="2" className="fill-amber-600/30 stroke-amber-700 dark:stroke-amber-300" strokeWidth="1.2" />
            <text x="55.5" y="88" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[10px] font-bold">q₃</text>
          </g>

          {/* Multiplication Sign "×" */}
          <text x="202" y="140" textAnchor="middle" className="fill-foreground text-[16px] font-bold">
            ×
          </text>

          {/* Matrix R: 3 x 3 Upper Triangular */}
          <g transform="translate(218, 52)">
            <text x="86" y="14" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-bold">
              R = QᵀA
            </text>
            <text x="86" y="27" textAnchor="middle" className="fill-muted-foreground text-[9px]">
              (上三角阵：r_ij = q_iᵀa_j)
            </text>
            {/* Outer box */}
            <rect
              x="0"
              y="34"
              width="172"
              height="100"
              rx="4"
              className="fill-muted/15 stroke-border"
              strokeWidth="1.2"
            />

            {/* Row 1 */}
            {/* r11 (diagonal) */}
            <rect x="8" y="41" width="46" height="25" rx="3" className="fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1" />
            <text x="31" y="57" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[9.5px] font-bold">
              q₁ᵀa₁ &gt; 0
            </text>

            {/* r12 (upper) */}
            <rect x="63" y="41" width="46" height="25" rx="3" className="fill-blue-500/15 stroke-blue-500/40" strokeWidth="1" />
            <text x="86" y="57" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[9.5px]">
              q₁ᵀa₂
            </text>

            {/* r13 (upper) */}
            <rect x="118" y="41" width="46" height="25" rx="3" className="fill-blue-500/15 stroke-blue-500/40" strokeWidth="1" />
            <text x="141" y="57" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[9.5px]">
              q₁ᵀa₃
            </text>

            {/* Row 2 */}
            {/* r21 = 0 (LOWER ZERO) */}
            <rect x="8" y="71" width="46" height="25" rx="3" className="fill-rose-500/25 stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.2" />
            <text x="31" y="87" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11px] font-bold">
              0
            </text>

            {/* r22 (diagonal) */}
            <rect x="63" y="71" width="46" height="25" rx="3" className="fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1" />
            <text x="86" y="87" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[9.5px] font-bold">
              q₂ᵀa₂ &gt; 0
            </text>

            {/* r23 (upper) */}
            <rect x="118" y="71" width="46" height="25" rx="3" className="fill-blue-500/15 stroke-blue-500/40" strokeWidth="1" />
            <text x="141" y="87" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[9.5px]">
              q₂ᵀa₃
            </text>

            {/* Row 3 */}
            {/* r31 = 0 (LOWER ZERO) */}
            <rect x="8" y="101" width="46" height="25" rx="3" className="fill-rose-500/25 stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.2" />
            <text x="31" y="117" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11px] font-bold">
              0
            </text>

            {/* r32 = 0 (LOWER ZERO) */}
            <rect x="63" y="101" width="46" height="25" rx="3" className="fill-rose-500/25 stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.2" />
            <text x="86" y="117" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11px] font-bold">
              0
            </text>

            {/* r33 (diagonal) */}
            <rect x="118" y="101" width="46" height="25" rx="3" className="fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1" />
            <text x="141" y="117" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[9.5px] font-bold">
              q₃ᵀa₃ &gt; 0
            </text>
          </g>

          {/* Lower Triangular Zero Callout Badge */}
          <g transform="translate(18, 198)">
            <rect
              x="0"
              y="0"
              width="386"
              height="68"
              rx="6"
              className="fill-rose-500/10 stroke-rose-500/35"
              strokeWidth="1"
            />
            <text x="12" y="18" className="fill-rose-700 dark:fill-rose-300 font-mono text-[10px] font-bold">
              ▲ 红色下三角为何严格全为 0？
            </text>
            <text x="12" y="34" className="fill-foreground/85 text-[10px] leading-relaxed">
              因为 Gram-Schmidt 强制要求：q_i 必须正交于前面所有原始向量生成的子空间！
            </text>
            <text x="12" y="51" className="fill-muted-foreground font-mono text-[9.5px]">
              当 i &gt; j 时，q_i ⟂ span&#123;a₁, ..., a_j&#125; ⟹ r_ij = q_iᵀa_j ≡ 0！
            </text>
          </g>

          {/* Bottom Least Squares Benefit */}
          <g transform="translate(18, 275)">
            <rect
              x="0"
              y="0"
              width="386"
              height="66"
              rx="6"
              className="fill-muted/30 stroke-border"
              strokeWidth="1"
            />
            <text x="12" y="19" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10.5px] font-bold">
              ◆ QR 分解彻底拯救最小二乘计算：
            </text>
            <text x="12" y="37" className="fill-foreground/90 font-mono text-[10px]">
              传统法: AᵀA x̂ = Aᵀb ➜ 条件数平方 κ(A)², 数值极其敏感病态！
            </text>
            <text x="12" y="55" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10px] font-bold">
              QR 法:  R x̂ = Qᵀb ➜ 直接回代求解！避开 AᵀA 求逆，κ(R) = κ(A)！
            </text>
          </g>
        </g>
      </svg>
    </MathDiagram>
  );
}

export function OrthonormalProjectionDiagram({
  caption = '一般基 $A$ 与标准正交基 $Q$ 的投影与最小二乘计算对比：当且仅当基向量标准正交时，投影矩阵中的 $(A^TA)^{-1}$ 瞬间退化为 $(Q^TQ)^{-1} = I_n$，投影算子简化为 $P = QQ^T = \\sum \\mathbf{q}_i\\mathbf{q}_i^T$；每个分量坐标 $\\hat{x}_i = \\mathbf{q}_i^T\\mathbf{b}$ 实现完美的相互解耦独立计算！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="General Basis A vs. Orthonormal Basis Q: Projection & Least Squares Comparison"
      caption={caption}
    >
      <svg
        viewBox="0 0 760 250"
        className="w-full max-w-[760px] select-none text-foreground"
        role="img"
        aria-label="Comparison between general column matrix A and orthonormal column matrix Q for projection and least squares"
      >
        {/* Left Card: General Basis A */}
        <g transform="translate(16, 12)">
          <rect
            x="0"
            y="0"
            width="350"
            height="226"
            rx="10"
            className="fill-background stroke-border"
            strokeWidth="1.2"
          />
          <rect
            x="0"
            y="0"
            width="350"
            height="34"
            rx="10"
            className="fill-muted/40 border-b border-border"
          />
          <text
            x="175"
            y="22"
            textAnchor="middle"
            className="fill-foreground font-semibold text-[11.5px]"
          >
            普通线性无关基 A (列非正交)
          </text>

          <g transform="translate(16, 44)">
            {/* Row 1: Projection Matrix */}
            <text x="0" y="16" className="fill-muted-foreground font-mono text-[10px]">
              投影矩阵公式：
            </text>
            <rect x="0" y="24" width="318" height="28" rx="4" className="fill-muted/20 stroke-border" />
            <text x="159" y="42" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11px] font-bold">
              P = A (AᵀA)⁻¹ Aᵀ
            </text>

            {/* Row 2: Least Squares normal equations */}
            <text x="0" y="74" className="fill-muted-foreground font-mono text-[10px]">
              正规方程组求解：
            </text>
            <rect x="0" y="82" width="318" height="28" rx="4" className="fill-muted/20 stroke-border" />
            <text x="159" y="100" textAnchor="middle" className="fill-foreground font-mono text-[11px]">
              AᵀA x̂ = Aᵀb ⟹ x̂ = (AᵀA)⁻¹ Aᵀb
            </text>

            {/* Row 3: Computational bottlenecks */}
            <rect x="0" y="118" width="318" height="52" rx="4" className="fill-rose-500/10 stroke-rose-500/30" />
            <text x="12" y="136" className="fill-rose-800 dark:fill-rose-200 font-mono text-[9.5px]">
              ⚠ 致命短板：必须计算 (AᵀA)⁻¹，耗时 O(n³)
            </text>
            <text x="12" y="153" className="fill-rose-800 dark:fill-rose-200 font-mono text-[9.5px]">
              ⚠ 条件数灾难：κ(AᵀA) = κ(A)²，高灵敏浮点舍入误差
            </text>
          </g>
        </g>

        {/* Right Card: Orthonormal Basis Q */}
        <g transform="translate(394, 12)">
          <rect
            x="0"
            y="0"
            width="350"
            height="226"
            rx="10"
            className="fill-background stroke-emerald-500/40"
            strokeWidth="1.4"
          />
          <rect
            x="0"
            y="0"
            width="350"
            height="34"
            rx="10"
            className="fill-emerald-500/10 border-b border-emerald-500/30"
          />
          <text
            x="175"
            y="22"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-300 font-semibold text-[11.5px]"
          >
            标准正交基 Q (QᵀQ = I_n)
          </text>

          <g transform="translate(16, 44)">
            {/* Row 1: Projection Matrix */}
            <text x="0" y="16" className="fill-muted-foreground font-mono text-[10px]">
              投影矩阵瞬间坍缩 (零求逆成本！)：
            </text>
            <rect x="0" y="24" width="318" height="28" rx="4" className="fill-emerald-500/15 stroke-emerald-500/40" />
            <text x="159" y="42" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-bold">
              P = Q Qᵀ = ∑ q_i q_iᵀ
            </text>

            {/* Row 2: Least Squares decoupled */}
            <text x="0" y="74" className="fill-muted-foreground font-mono text-[10px]">
              正规方程分量完全解耦：
            </text>
            <rect x="0" y="82" width="318" height="28" rx="4" className="fill-blue-500/15 stroke-blue-500/40" />
            <text x="159" y="100" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">
              x̂_i = q_iᵀ b (互不干扰，如 Fourier 展开)
            </text>

            {/* Row 3: Computational advantages */}
            <rect x="0" y="118" width="318" height="52" rx="4" className="fill-emerald-500/10 stroke-emerald-500/30" />
            <text x="12" y="136" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[9.5px] font-semibold">
              ✓ 零求逆计算：(QᵀQ)⁻¹ = I_n，直接点积 O(mn) 产出！
            </text>
            <text x="12" y="153" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[9.5px] font-semibold">
              ✓ 绝对数值保范：κ₂(Q) = 1，误差永不被放大！
            </text>
          </g>
        </g>
      </svg>
    </MathDiagram>
  );
}
