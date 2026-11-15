import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function Module4Quiz3SynthesisMapDiagram({
  caption = '图 33-1：模块四阶段全景知识图谱（L26–L32）——从实对称/Hermitian 谱分解与正定能量椭球，跨越相似轨道与 Jordan 亏损修正，最终登顶普适奇异值分解 $A = U\\Sigma V^T$ 与无坐标线性算子',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Module IV Quiz 3 Master Synthesis Map (L26–L32)"
      caption={caption}
    >
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="模块四阶段全景知识图谱：四大支柱串联实对称与 Hermitian 谱定理、正定矩阵与椭球几何、相似与 Jordan 标准形、奇异值分解 SVD 与线性变换基变换"
      >
        <defs>
          <marker
            id="l33-arrow-blue"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l33-arrow-emerald"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l33-arrow-amber"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l33-arrow-purple"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l33-arrow-muted"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-muted-foreground" />
          </marker>
        </defs>

        {/* Outer Frame */}
        <rect
          x="0"
          y="0"
          width="920"
          height="440"
          rx="12"
          className="fill-card/40 stroke-border"
          strokeWidth="1"
        />

        {/* Top Header */}
        <text
          x="460"
          y="22"
          textAnchor="middle"
          className="text-[13px] font-bold fill-foreground"
        >
          模块四知识全景图谱（L26–L32）：从对称谱与正定椭球到 Jordan 相似、SVD 与线性变换
        </text>
        <text
          x="460"
          y="38"
          textAnchor="middle"
          className="font-mono text-[10px] fill-muted-foreground"
        >
          Spectral Theorem (QΛQᵀ / UΛUᴴ) → SPD Ellipsoids → Similarity &amp; Jordan (M⁻¹AM) → Universal SVD (UΣVᵀ) &amp; Linear Maps
        </text>

        {/* Four Pillar Containers: x = 15, 241, 467, 693; width = 212; y = 46..382 */}
        <rect
          x="15"
          y="46"
          width="212"
          height="336"
          rx="10"
          className="fill-blue-500/5 stroke-blue-500/25"
          strokeWidth="1"
        />
        <rect
          x="241"
          y="46"
          width="212"
          height="336"
          rx="10"
          className="fill-emerald-500/5 stroke-emerald-500/25"
          strokeWidth="1"
        />
        <rect
          x="467"
          y="46"
          width="212"
          height="336"
          rx="10"
          className="fill-amber-500/5 stroke-amber-500/25"
          strokeWidth="1"
        />
        <rect
          x="693"
          y="46"
          width="212"
          height="336"
          rx="10"
          className="fill-purple-500/5 stroke-purple-500/25"
          strokeWidth="1"
        />

        {/* ==================== PILLAR 1: REAL SYMMETRIC & HERMITIAN ==================== */}
        <g>
          <rect
            x="23"
            y="53"
            width="196"
            height="24"
            rx="6"
            className="fill-blue-600/15 dark:fill-blue-400/20"
          />
          <text
            x="121"
            y="69"
            textAnchor="middle"
            className="text-[11px] font-bold fill-blue-700 dark:fill-blue-300"
          >
            1. 实对称与复空间谱定理 (L26–27)
          </text>

          {/* Card 1A */}
          <rect
            x="23"
            y="83"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-blue-500/40"
            strokeWidth="1.2"
          />
          <text x="32" y="99" className="text-[10.5px] font-semibold fill-blue-700 dark:fill-blue-300">
            实对称谱定理 (Real Spectral)
          </text>
          <text x="32" y="116" className="font-mono text-[10px] fill-foreground">
            A = Aᵀ ∈ ℝⁿˣⁿ ⇒ λᵢ ∈ ℝ
          </text>
          <text x="32" y="132" className="font-mono text-[10px] fill-foreground">
            正交基: λᵢ ≠ λⱼ ⇒ qᵢ ⊥ qⱼ
          </text>
          <text x="32" y="148" className="font-mono text-[10px] fill-foreground">
            A = QΛQᵀ = ∑ λᵢ qᵢ qᵢᵀ
          </text>
          <rect x="32" y="154" width="178" height="14" rx="3" className="fill-blue-500/10" />
          <text x="121" y="164" textAnchor="middle" className="font-mono text-[9.5px] fill-blue-700 dark:fill-blue-300">
            秩 1 正交投影积木之和 (Pᵢ = qᵢqᵢᵀ)
          </text>

          <line
            x1="121"
            y1="173"
            x2="121"
            y2="183"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.5"
            markerEnd="url(#l33-arrow-blue)"
          />

          {/* Card 1B */}
          <rect
            x="23"
            y="185"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-blue-500/40"
            strokeWidth="1.2"
          />
          <text x="32" y="201" className="text-[10.5px] font-semibold fill-blue-700 dark:fill-blue-300">
            复内积与 Hermitian / 酉阵
          </text>
          <text x="32" y="218" className="font-mono text-[10px] fill-foreground">
            复内积: ⟨z, w⟩ = zᴴw (必共轭)
          </text>
          <text x="32" y="234" className="font-mono text-[10px] fill-foreground">
            Aᴴ = A ⇒ λᵢ ∈ ℝ, UΛUᴴ
          </text>
          <text x="32" y="250" className="font-mono text-[10px] fill-foreground">
            酉阵 UᴴU = I ⇒ |λᵢ| = 1
          </text>
          <rect x="32" y="256" width="178" height="14" rx="3" className="fill-blue-500/10" />
          <text x="121" y="266" textAnchor="middle" className="font-mono text-[9.5px] fill-blue-700 dark:fill-blue-300">
            正规阵 AᴴA = AAᴴ 均可酉对角化
          </text>

          <line
            x1="121"
            y1="275"
            x2="121"
            y2="285"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.5"
            markerEnd="url(#l33-arrow-blue)"
          />

          {/* Card 1C */}
          <rect
            x="23"
            y="287"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-blue-500/40"
            strokeWidth="1.2"
          />
          <text x="32" y="303" className="text-[10.5px] font-semibold fill-blue-700 dark:fill-blue-300">
            Fourier 矩阵 Fₙ 与 FFT
          </text>
          <text x="32" y="320" className="font-mono text-[10px] fill-foreground">
            (Fₙ)ⱼₖ = wʲᵏ, w = e^(2πi/n)
          </text>
          <text x="32" y="336" className="font-mono text-[10px] fill-foreground">
            列正交: Fₙᴴ Fₙ = n Iₙ
          </text>
          <text x="32" y="352" className="font-mono text-[10px] fill-foreground">
            FFT 分治: O(n²) → ½n log₂n
          </text>
          <rect x="32" y="358" width="178" height="14" rx="3" className="fill-blue-500/10" />
          <text x="121" y="368" textAnchor="middle" className="font-mono text-[9.5px] fill-blue-700 dark:fill-blue-300">
            奇偶蝶形分解：Fₙ = [I D; I -D]…
          </text>
        </g>

        {/* ==================== PILLAR 2: SPD & QUADRATIC ELLIPSOIDS ==================== */}
        <g>
          <rect
            x="249"
            y="53"
            width="196"
            height="24"
            rx="6"
            className="fill-emerald-600/15 dark:fill-emerald-400/20"
          />
          <text
            x="347"
            y="69"
            textAnchor="middle"
            className="text-[11px] font-bold fill-emerald-700 dark:fill-emerald-300"
          >
            2. 正定矩阵与能量椭球 (L28)
          </text>

          {/* Card 2A */}
          <rect
            x="249"
            y="83"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-emerald-500/40"
            strokeWidth="1.2"
          />
          <text x="258" y="99" className="text-[10.5px] font-semibold fill-emerald-700 dark:fill-emerald-300">
            SPD 五大等价判据 (须 A = Aᵀ)
          </text>
          <text x="258" y="116" className="font-mono text-[10px] fill-foreground">
            ① xᵀAx &gt; 0 (∀x ≠ 0)
          </text>
          <text x="258" y="132" className="font-mono text-[10px] fill-foreground">
            ② λᵢ &gt; 0  ③ det(Aₖ) &gt; 0
          </text>
          <text x="258" y="148" className="font-mono text-[10px] fill-foreground">
            ④ 主元 dᵢ &gt; 0  ⑤ A = RᵀR
          </text>
          <rect x="258" y="154" width="178" height="14" rx="3" className="fill-emerald-500/10" />
          <text x="347" y="164" textAnchor="middle" className="font-mono text-[9.5px] fill-emerald-700 dark:fill-emerald-300">
            平方根: A = LcLcᵀ = A^(1/2)A^(1/2)
          </text>

          <line
            x1="347"
            y1="173"
            x2="347"
            y2="183"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.5"
            markerEnd="url(#l33-arrow-emerald)"
          />

          {/* Card 2B */}
          <rect
            x="249"
            y="185"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-emerald-500/40"
            strokeWidth="1.2"
          />
          <text x="258" y="201" className="text-[10.5px] font-semibold fill-emerald-700 dark:fill-emerald-300">
            Sylvester 惯性定理 (合同)
          </text>
          <text x="258" y="218" className="font-mono text-[10px] fill-foreground">
            合同变换: B = Mᵀ A M (M 可逆)
          </text>
          <text x="258" y="234" className="font-mono text-[10px] fill-foreground">
            惯性指数 (n₊, n₋, n₀) 守恒
          </text>
          <text x="258" y="250" className="font-mono text-[10px] fill-foreground">
            A = LDLᵀ: 主元正负号同 λᵢ
          </text>
          <rect x="258" y="256" width="178" height="14" rx="3" className="fill-emerald-500/10" />
          <text x="347" y="266" textAnchor="middle" className="font-mono text-[9.5px] fill-emerald-700 dark:fill-emerald-300">
            警醒: 保符号个数，不保 λ 具体值
          </text>

          <line
            x1="347"
            y1="275"
            x2="347"
            y2="285"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.5"
            markerEnd="url(#l33-arrow-emerald)"
          />

          {/* Card 2C */}
          <rect
            x="249"
            y="287"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-emerald-500/40"
            strokeWidth="1.2"
          />
          <text x="258" y="303" className="text-[10.5px] font-semibold fill-emerald-700 dark:fill-emerald-300">
            椭球主轴与 Hessian 极值
          </text>
          <text x="258" y="320" className="font-mono text-[10px] fill-foreground">
            xᵀAx = 1 主轴沿 q₁, …, qₙ
          </text>
          <text x="258" y="336" className="font-mono text-[10px] fill-foreground">
            半轴长度 aᵢ = 1 / √λᵢ
          </text>
          <text x="258" y="352" className="font-mono text-[10px] fill-foreground">
            ∇f = 0, H ≻ 0 ⇒ 严格极小
          </text>
          <rect x="258" y="358" width="178" height="14" rx="3" className="fill-emerald-500/10" />
          <text x="347" y="368" textAnchor="middle" className="font-mono text-[9.5px] fill-emerald-700 dark:fill-emerald-300">
            λ 越大曲率越陡、椭球半轴越短
          </text>
        </g>

        {/* ==================== PILLAR 3: SIMILARITY & JORDAN FORM ==================== */}
        <g>
          <rect
            x="475"
            y="53"
            width="196"
            height="24"
            rx="6"
            className="fill-amber-600/15 dark:fill-amber-400/20"
          />
          <text
            x="573"
            y="69"
            textAnchor="middle"
            className="text-[11px] font-bold fill-amber-700 dark:fill-amber-300"
          >
            3. 相似与 Jordan 标准形 (L29)
          </text>

          {/* Card 3A */}
          <rect
            x="475"
            y="83"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-amber-500/40"
            strokeWidth="1.2"
          />
          <text x="484" y="99" className="text-[10.5px] font-semibold fill-amber-700 dark:fill-amber-300">
            相似轨道不变量 (M⁻¹AM)
          </text>
          <text x="484" y="116" className="font-mono text-[10px] fill-foreground">
            B = M⁻¹AM 保持特征多项式
          </text>
          <text x="484" y="132" className="font-mono text-[10px] fill-foreground">
            守恒: λᵢ, tr, det, AM, GM
          </text>
          <text x="484" y="148" className="font-mono text-[10px] fill-foreground">
            同谱同迹未必相似 (须判块)
          </text>
          <rect x="484" y="154" width="178" height="14" rx="3" className="fill-amber-500/10" />
          <text x="573" y="164" textAnchor="middle" className="font-mono text-[9.5px] fill-amber-700 dark:fill-amber-300">
            QᵀAQ 是相似与合同的唯一交集
          </text>

          <line
            x1="573"
            y1="173"
            x2="573"
            y2="183"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.5"
            markerEnd="url(#l33-arrow-amber)"
          />

          {/* Card 3B */}
          <rect
            x="475"
            y="185"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-amber-500/40"
            strokeWidth="1.2"
          />
          <text x="484" y="201" className="text-[10.5px] font-semibold fill-amber-700 dark:fill-amber-300">
            亏损矩阵与 Jordan 块对应
          </text>
          <text x="484" y="218" className="font-mono text-[10px] fill-foreground">
            GM(λ) &lt; AM(λ) ⇒ 不可对角化
          </text>
          <text x="484" y="234" className="font-mono text-[10px] fill-foreground">
            M⁻¹AM = J = diag(J₁,…,Jₛ)
          </text>
          <text x="484" y="250" className="font-mono text-[10px] fill-foreground">
            块总数 s = 独立特征向量数
          </text>
          <rect x="484" y="256" width="178" height="14" rx="3" className="fill-amber-500/10" />
          <text x="573" y="266" textAnchor="middle" className="font-mono text-[9.5px] fill-amber-700 dark:fill-amber-300">
            广义链 (A-λI)vₖ = vₖ₋₁ 生 t·e^(λt)
          </text>

          <line
            x1="573"
            y1="275"
            x2="573"
            y2="285"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.5"
            markerEnd="url(#l33-arrow-amber)"
          />

          {/* Card 3C */}
          <rect
            x="475"
            y="287"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-amber-500/40"
            strokeWidth="1.2"
          />
          <text x="484" y="303" className="text-[10.5px] font-semibold fill-amber-700 dark:fill-amber-300">
            块尺寸秩降判定公式 (Weyr)
          </text>
          <text x="484" y="320" className="font-mono text-[10px] fill-foreground">
            rₖ = rank((A - λ₀I)ᵏ)
          </text>
          <text x="484" y="336" className="font-mono text-[10px] fill-foreground">
            尺寸 ≥ k 块数 = rₖ₋₁ - rₖ
          </text>
          <text x="484" y="352" className="font-mono text-[10px] fill-foreground">
            尺寸 = k 块数 = rₖ₋₁ - 2rₖ + rₖ₊₁
          </text>
          <rect x="484" y="358" width="178" height="14" rx="3" className="fill-amber-500/10" />
          <text x="573" y="368" textAnchor="middle" className="font-mono text-[9.5px] fill-amber-700 dark:fill-amber-300">
            A ~ B ⟺ 全部幂次秩 rₖ(λ) 相等
          </text>
        </g>

        {/* ==================== PILLAR 4: UNIVERSAL SVD & LINEAR MAPS ==================== */}
        <g>
          <rect
            x="701"
            y="53"
            width="196"
            height="24"
            rx="6"
            className="fill-purple-600/15 dark:fill-purple-400/20"
          />
          <text
            x="799"
            y="69"
            textAnchor="middle"
            className="text-[11px] font-bold fill-purple-700 dark:fill-purple-300"
          >
            4. 普适 SVD 与线性变换 (L30–32)
          </text>

          {/* Card 4A */}
          <rect
            x="701"
            y="83"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-purple-500/40"
            strokeWidth="1.2"
          />
          <text x="710" y="99" className="text-[10.5px] font-semibold fill-purple-700 dark:fill-purple-300">
            任意矩阵的 SVD (A = UΣVᵀ)
          </text>
          <text x="710" y="116" className="font-mono text-[10px] fill-foreground">
            A ∈ ℝᵐˣⁿ, UᵀU = Iₘ, VᵀV = Iₙ
          </text>
          <text x="710" y="132" className="font-mono text-[10px] fill-foreground">
            AᵀAvᵢ = σᵢ²vᵢ (σᵢ = √λᵢ &gt; 0)
          </text>
          <text x="710" y="148" className="font-mono text-[10px] fill-foreground">
            符号绑定: uᵢ = (1/σᵢ) A vᵢ
          </text>
          <rect x="710" y="154" width="178" height="14" rx="3" className="fill-purple-500/10" />
          <text x="799" y="164" textAnchor="middle" className="font-mono text-[9.5px] fill-purple-700 dark:fill-purple-300">
            圆变椭圆: Vᵀ 对齐 → Σ 拉伸 → U 定向
          </text>

          <line
            x1="799"
            y1="173"
            x2="799"
            y2="183"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.5"
            markerEnd="url(#l33-arrow-purple)"
          />

          {/* Card 4B */}
          <rect
            x="701"
            y="185"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-purple-500/40"
            strokeWidth="1.2"
          />
          <text x="710" y="201" className="text-[10.5px] font-semibold fill-purple-700 dark:fill-purple-300">
            四子空间正交基与最优截断
          </text>
          <text x="710" y="218" className="font-mono text-[10px] fill-foreground">
            Row(A): v₁…vᵣ | Null: vᵣ₊₁…vₙ
          </text>
          <text x="710" y="234" className="font-mono text-[10px] fill-foreground">
            Col(A): u₁…uᵣ | Null(Aᵀ): uᵣ₊₁…
          </text>
          <text x="710" y="250" className="font-mono text-[10px] fill-foreground">
            Aₖ = ∑ᵢ₌₁ᵏ σᵢ uᵢvᵢᵀ (最佳逼近)
          </text>
          <rect x="710" y="256" width="178" height="14" rx="3" className="fill-purple-500/10" />
          <text x="799" y="266" textAnchor="middle" className="font-mono text-[9.5px] fill-purple-700 dark:fill-purple-300">
            ‖A‖₂ = σ₁, ‖A - Aₖ‖₂ = σₖ₊₁
          </text>

          <line
            x1="799"
            y1="275"
            x2="799"
            y2="285"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.5"
            markerEnd="url(#l33-arrow-purple)"
          />

          {/* Card 4C */}
          <rect
            x="701"
            y="287"
            width="196"
            height="90"
            rx="7"
            className="fill-card stroke-purple-500/40"
            strokeWidth="1.2"
          />
          <text x="710" y="303" className="text-[10.5px] font-semibold fill-purple-700 dark:fill-purple-300">
            无坐标算子 T 与换基公式
          </text>
          <text x="710" y="320" className="font-mono text-[10px] fill-foreground">
            T(vⱼ) = ∑ aᵢⱼ wᵢ ⇒ 矩阵 A
          </text>
          <text x="710" y="336" className="font-mono text-[10px] fill-foreground">
            单空间换基: B = M⁻¹ A M
          </text>
          <text x="710" y="352" className="font-mono text-[10px] fill-foreground">
            双空间正交基: Σ = Uᵀ A V
          </text>
          <rect x="710" y="358" width="178" height="14" rx="3" className="fill-purple-500/10" />
          <text x="799" y="368" textAnchor="middle" className="font-mono text-[9.5px] fill-purple-700 dark:fill-purple-300">
            好基压缩 (DCT / 小波): x = Wc
          </text>
        </g>

        {/* ==================== CROSS-PILLAR HORIZONTAL CONNECTORS ==================== */}
        <line
          x1="227"
          y1="128"
          x2="239"
          y2="128"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="1.8"
          markerEnd="url(#l33-arrow-emerald)"
        />
        <line
          x1="453"
          y1="230"
          x2="465"
          y2="230"
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="1.8"
          markerEnd="url(#l33-arrow-amber)"
        />
        <line
          x1="679"
          y1="332"
          x2="691"
          y2="332"
          className="stroke-purple-600 dark:stroke-purple-400"
          strokeWidth="1.8"
          markerEnd="url(#l33-arrow-purple)"
        />

        {/* ==================== BOTTOM UNIFYING RIBBON ==================== */}
        <g>
          <rect
            x="15"
            y="392"
            width="212"
            height="36"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/35"
            strokeWidth="1.2"
          />
          <text x="121" y="407" textAnchor="middle" className="text-[10px] font-bold fill-blue-700 dark:fill-blue-300">
            对称/正规 ⇒ 同一正交基对角化
          </text>
          <text x="121" y="421" textAnchor="middle" className="font-mono text-[9.5px] fill-muted-foreground">
            QᵀAQ = Λ (实) · UᴴAU = Λ (复)
          </text>

          <line
            x1="227"
            y1="410"
            x2="239"
            y2="410"
            className="stroke-muted-foreground"
            strokeWidth="1.6"
            markerEnd="url(#l33-arrow-muted)"
          />

          <rect
            x="241"
            y="392"
            width="212"
            height="36"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/35"
            strokeWidth="1.2"
          />
          <text x="347" y="407" textAnchor="middle" className="text-[10px] font-bold fill-emerald-700 dark:fill-emerald-300">
            谱全正 ⇒ 能量碗极小与 Cholesky
          </text>
          <text x="347" y="421" textAnchor="middle" className="font-mono text-[9.5px] fill-muted-foreground">
            λᵢ &gt; 0 ⇔ dᵢ &gt; 0 ⇔ xᵀAx &gt; 0
          </text>

          <line
            x1="453"
            y1="410"
            x2="465"
            y2="410"
            className="stroke-muted-foreground"
            strokeWidth="1.6"
            markerEnd="url(#l33-arrow-muted)"
          />

          <rect
            x="467"
            y="392"
            width="212"
            height="36"
            rx="8"
            className="fill-amber-500/10 stroke-amber-500/35"
            strokeWidth="1.2"
          />
          <text x="573" y="407" textAnchor="middle" className="text-[10px] font-bold fill-amber-700 dark:fill-amber-300">
            破除对称且亏损 ⇒ 必退让出 Jordan 块
          </text>
          <text x="573" y="421" textAnchor="middle" className="font-mono text-[9.5px] fill-muted-foreground">
            单基 M⁻¹AM 至多化为块对角 J
          </text>

          <line
            x1="679"
            y1="410"
            x2="691"
            y2="410"
            className="stroke-muted-foreground"
            strokeWidth="1.6"
            markerEnd="url(#l33-arrow-muted)"
          />

          <rect
            x="693"
            y="392"
            width="212"
            height="36"
            rx="8"
            className="fill-purple-500/10 stroke-purple-500/35"
            strokeWidth="1.2"
          />
          <text x="799" y="407" textAnchor="middle" className="text-[10px] font-bold fill-purple-700 dark:fill-purple-300">
            解禁双正交基 ⇒ 万物皆可对角化！
          </text>
          <text x="799" y="421" textAnchor="middle" className="font-mono text-[9.5px] fill-muted-foreground">
            UᵀAV = Σ 彻底统一 ∀ A ∈ ℝᵐˣⁿ
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
