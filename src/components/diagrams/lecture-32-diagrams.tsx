import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function ChangeOfBasisCommutativeDiagram({
  caption = '算子换基的经典交换图：左上方标准基坐标 $\\mathbf{x}$ 经矩阵 $A$ 映至 $A\\mathbf{x}$，等价于先通过 $M^{-1}$ 编码为新基坐标 $\\mathbf{c}$，经新基矩阵 $B = M^{-1} A M$ 作用后，再用 $M$ 重构回标准坐标。右侧展示三类将矩阵彻底化简为对角阵的黄金基底选择（$S, Q$ 与 $U, V$）。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Commutative Diagram for Operator Change of Basis: B = M⁻¹ A M"
      caption={caption}
    >
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="Commutative square diagram for change of basis B equals M inverse A M, mapping x to Ax along the top, c to Bc along the bottom, with vertical basis transitions M and M inverse, alongside golden diagonalizing basis choices S, Q, and SVD U and V"
      >
        <defs>
          <marker
            id="l32-cob-arrow-blue"
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
            id="l32-cob-arrow-emerald"
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
            id="l32-cob-arrow-purple"
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
            id="l32-cob-arrow-amber"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
        </defs>

        {/* ================= TOP HEADER ================= */}
        <text x="460" y="24" textAnchor="middle" className="fill-foreground text-[14px] font-bold">
          线性算子基变换交换图（Commutative Diagram）：B = M⁻¹ A M
        </text>
        <text x="460" y="42" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
          同一个线性算子 T：上行在标准基下由 A 描述，下行在新基 W = &#123;w₁, …, wₙ&#125; 下由 B = M⁻¹AM 描述
        </text>

        {/* ================= LEFT PANEL: COMMUTATIVE SQUARE ================= */}
        <g>
          <rect
            x="20"
            y="56"
            width="542"
            height="366"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          {/* Top-Left Node: x */}
          <rect
            x="66"
            y="76"
            width="166"
            height="64"
            rx="9"
            className="fill-blue-500/10 stroke-blue-500/45"
            strokeWidth="1.5"
          />
          <text x="149" y="99" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-bold">
            标准基向量 x ∈ ℝⁿ
          </text>
          <text x="149" y="118" textAnchor="middle" className="fill-foreground text-[11px] font-mono">
            x = M c（像素 / 原坐标）
          </text>
          <text x="149" y="133" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            例：x = [2, 3]ᵀ
          </text>

          {/* Top-Right Node: Ax */}
          <rect
            x="368"
            y="76"
            width="166"
            height="64"
            rx="9"
            className="fill-blue-500/10 stroke-blue-500/45"
            strokeWidth="1.5"
          />
          <text x="451" y="99" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-bold">
            标准基像 y = A x
          </text>
          <text x="451" y="118" textAnchor="middle" className="fill-foreground text-[11px] font-mono">
            y = A(Mc) = M c′
          </text>
          <text x="451" y="133" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            例：Ax = [8, 9]ᵀ
          </text>

          {/* Top Horizontal Arrow: A */}
          <line
            x1="238"
            y1="108"
            x2="360"
            y2="108"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.4"
            markerEnd="url(#l32-cob-arrow-blue)"
          />
          <text x="299" y="96" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[12px] font-mono font-bold">
            算子作用 A
          </text>
          <text x="299" y="124" textAnchor="middle" className="fill-muted-foreground text-[10.5px] font-mono">
            x ↦ A x
          </text>

          {/* Bottom-Left Node: c */}
          <rect
            x="66"
            y="272"
            width="166"
            height="64"
            rx="9"
            className="fill-emerald-500/10 stroke-emerald-500/45"
            strokeWidth="1.5"
          />
          <text x="149" y="295" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12px] font-bold">
            新基坐标 c ∈ ℝⁿ
          </text>
          <text x="149" y="314" textAnchor="middle" className="fill-foreground text-[11px] font-mono">
            c = M⁻¹ x（W-坐标）
          </text>
          <text x="149" y="329" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            例：c = [1, 1]ᵀ
          </text>

          {/* Bottom-Right Node: Bc */}
          <rect
            x="368"
            y="272"
            width="166"
            height="64"
            rx="9"
            className="fill-emerald-500/10 stroke-emerald-500/45"
            strokeWidth="1.5"
          />
          <text x="451" y="295" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12px] font-bold">
            新基像 c′ = B c
          </text>
          <text x="451" y="314" textAnchor="middle" className="fill-foreground text-[11px] font-mono">
            c′ = (M⁻¹ A M) c
          </text>
          <text x="451" y="329" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            例：Bc = [7, 1]ᵀ
          </text>

          {/* Bottom Horizontal Arrow: B = M⁻¹AM */}
          <line
            x1="238"
            y1="304"
            x2="360"
            y2="304"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.4"
            markerEnd="url(#l32-cob-arrow-emerald)"
          />
          <text x="299" y="292" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[12px] font-mono font-bold">
            B = M⁻¹ A M
          </text>
          <text x="299" y="320" textAnchor="middle" className="fill-muted-foreground text-[10.5px] font-mono">
            c ↦ B c
          </text>

          {/* Left Vertical Arrows: c -> x (M) and x -> c (M⁻¹) */}
          <line
            x1="122"
            y1="268"
            x2="122"
            y2="146"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.2"
            markerEnd="url(#l32-cob-arrow-purple)"
          />
          <text x="114" y="198" textAnchor="end" className="fill-purple-600 dark:fill-purple-400 text-[12px] font-mono font-bold">
            M
          </text>
          <text x="114" y="214" textAnchor="end" className="fill-muted-foreground text-[10px]">
            重构 x = Mc
          </text>

          <line
            x1="176"
            y1="144"
            x2="176"
            y2="266"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.2"
            markerEnd="url(#l32-cob-arrow-amber)"
          />
          <text x="184" y="198" textAnchor="start" className="fill-amber-600 dark:fill-amber-400 text-[12px] font-mono font-bold">
            M⁻¹
          </text>
          <text x="184" y="214" textAnchor="start" className="fill-muted-foreground text-[10px]">
            坐标编码 c = M⁻¹x
          </text>

          {/* Right Vertical Arrows: y -> c' (M⁻¹) and c' -> y (M) */}
          <line
            x1="424"
            y1="144"
            x2="424"
            y2="266"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.2"
            markerEnd="url(#l32-cob-arrow-amber)"
          />
          <text x="416" y="198" textAnchor="end" className="fill-amber-600 dark:fill-amber-400 text-[12px] font-mono font-bold">
            M⁻¹
          </text>
          <text x="416" y="214" textAnchor="end" className="fill-muted-foreground text-[10px]">
            读出新坐标 c′
          </text>

          <line
            x1="478"
            y1="268"
            x2="478"
            y2="146"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.2"
            markerEnd="url(#l32-cob-arrow-purple)"
          />
          <text x="486" y="198" textAnchor="start" className="fill-purple-600 dark:fill-purple-400 text-[12px] font-mono font-bold">
            M
          </text>
          <text x="486" y="214" textAnchor="start" className="fill-muted-foreground text-[10px]">
            还原 y = Mc′
          </text>

          {/* Bottom Summary Strip inside Left Panel */}
          <rect
            x="38"
            y="352"
            width="506"
            height="56"
            rx="8"
            className="fill-muted/35 stroke-border/80"
            strokeWidth="1"
          />
          <text x="291" y="373" textAnchor="middle" className="fill-foreground text-[11.5px] font-semibold">
            绕路等价法则（从左下 c 出发，各矩阵依次左乘）：c ──M──▶ x ──A──▶ Ax ──M⁻¹──▶ c′ = (M⁻¹AM) c
          </text>
          <text x="291" y="395" textAnchor="middle" className="fill-muted-foreground text-[10.5px] font-mono">
            切勿反写为 M A M⁻¹！基矩阵 M 列为新基向量 wⱼ，故坐标变换自带逆矩阵 M⁻¹
          </text>
        </g>

        {/* ================= RIGHT PANEL: GOLDEN BASIS CHOICES ================= */}
        <g>
          <rect
            x="578"
            y="56"
            width="322"
            height="366"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="739" y="82" textAnchor="middle" className="fill-foreground text-[13px] font-bold">
            三大黄金基选择：化算子为对角
          </text>

          {/* Choice 1: Eigenbasis S */}
          <rect
            x="594"
            y="96"
            width="290"
            height="92"
            rx="9"
            className="fill-blue-500/10 stroke-blue-500/35"
            strokeWidth="1.2"
          />
          <text x="608" y="118" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-bold">
            ① 特征向量基 M = S（方阵可对角化）
          </text>
          <text x="608" y="140" className="fill-foreground text-[12px] font-mono font-semibold">
            S⁻¹ A S = Λ = diag(λ₁, …, λₙ)
          </text>
          <text x="608" y="160" className="fill-muted-foreground text-[10.5px]">
            输入与输出共用同一组特征基 S（允许非正交）
          </text>
          <text x="608" y="176" className="fill-muted-foreground text-[10.5px]">
            条件：A 有 n 个线性无关的实特征向量
          </text>

          {/* Choice 2: Orthonormal Eigenbasis Q */}
          <rect
            x="594"
            y="198"
            width="290"
            height="96"
            rx="9"
            className="fill-emerald-500/10 stroke-emerald-500/35"
            strokeWidth="1.2"
          />
          <text x="608" y="220" className="fill-emerald-700 dark:fill-emerald-300 text-[12px] font-bold">
            ② 标准正交特征基 M = Q（实对称 A = Aᵀ）
          </text>
          <text x="608" y="242" className="fill-foreground text-[12px] font-mono font-semibold">
            Qᵀ A Q = Λ  （Q⁻¹ = Qᵀ）
          </text>
          <text x="608" y="262" className="fill-muted-foreground text-[10.5px]">
            合同变换与相似变换在此合二为一
          </text>
          <text x="608" y="279" className="fill-muted-foreground text-[10.5px]">
            几何：坐标旋转对齐主轴，保长保角、完全解耦
          </text>

          {/* Choice 3: SVD Dual Bases U, V */}
          <rect
            x="594"
            y="304"
            width="290"
            height="104"
            rx="9"
            className="fill-purple-500/10 stroke-purple-500/40"
            strokeWidth="1.2"
          />
          <text x="608" y="326" className="fill-purple-700 dark:fill-purple-300 text-[12px] font-bold">
            ③ 双正交奇异基（任意 m×n 矩阵 SVD）
          </text>
          <text x="608" y="348" className="fill-foreground text-[12px] font-mono font-semibold">
            Uᵀ A V = Σ  （允许输出基 U ≠ 输入基 V）
          </text>
          <text x="608" y="369" className="fill-muted-foreground text-[10.5px]">
            输入基 V = [v₁ … vₙ]，输出基 U = [u₁ … uₘ]
          </text>
          <text x="608" y="386" className="fill-muted-foreground text-[10.5px]">
            突破同基相似限制，对一切矩阵（含亏损与长方形）
          </text>
          <text x="608" y="400" className="fill-purple-600 dark:fill-purple-400 text-[10.5px] font-semibold">
            i ≤ r：Avᵢ = σᵢuᵢ；i &gt; r：Avᵢ = 𝟎
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}

export function WaveletAndDctCompressionBasisDiagram({
  caption = '三大基的图像压缩对照：标准像素基高度冗余；JPEG 采用 $8\\times 8$ 二维可分离 DCT 余弦平滑基；JPEG 2000 思想引入 $4$ 点 Haar 阶梯小波基 $W_4$（列正交 $W_4^T W_4 = \\operatorname{diag}(4,4,2,2)$）。右栏展示将 $\\mathbf{x} = [9,7,3,1]^T$ 变换至 Haar 正交基后，硬阈值丢弃小高频系数，仅用 $50\\%$ 系数即可留存 $97.1\\%$ 的信号能量。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Pixel Basis vs. JPEG DCT vs. 4-Point Haar Wavelet Energy Compaction"
      caption={caption}
    >
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="Comparison of standard pixel basis, 8x8 JPEG DCT smooth cosine basis, 4-point Haar wavelet piecewise-constant basis W4 with orthogonal columns, and hard-thresholding energy compaction dropping small high-frequency coefficients"
      >
        <defs>
          <marker
            id="l32-comp-arrow-blue"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
        </defs>

        {/* ================= TOP HEADER ================= */}
        <text x="460" y="24" textAnchor="middle" className="fill-foreground text-[14px] font-bold">
          好基的两条黄金准则：快速求逆（正交） + 能量高度集中（稀疏压缩）
        </text>
        <text x="460" y="42" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
          像素基（无压缩力） vs. JPEG 余弦基（DCT） vs. Haar 阶梯小波基 W₄（多分辨率局部压缩）
        </text>

        {/* ================= LEFT PANEL: PIXEL BASIS VS JPEG DCT ================= */}
        <g>
          <rect
            x="20"
            y="56"
            width="262"
            height="366"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="151" y="79" textAnchor="middle" className="fill-foreground text-[12.5px] font-bold">
            1. 像素基 vs. JPEG DCT 余弦基
          </text>

          {/* Pixel basis sub-card */}
          <rect
            x="32"
            y="92"
            width="238"
            height="130"
            rx="8"
            className="fill-muted/30 stroke-border/80"
            strokeWidth="1"
          />
          <text x="44" y="111" className="fill-foreground text-[11.5px] font-bold">
            标准像素基 ε = &#123;e₁, e₂, …, eₙ&#125;
          </text>
          <text x="44" y="126" className="fill-muted-foreground text-[10px]">
            相邻像素高度相关，能量分散在全部坐标中
          </text>

          {/* 4-pixel signal bars */}
          <line x1="52" y1="192" x2="248" y2="192" className="stroke-border" strokeWidth="1.2" />
          <rect x="66" y="144.3" width="26" height="47.7" rx="2" className="fill-blue-500/70" />
          <rect x="112" y="154.9" width="26" height="37.1" rx="2" className="fill-blue-500/70" />
          <rect x="158" y="176.1" width="26" height="15.9" rx="2" className="fill-blue-500/70" />
          <rect x="204" y="186.7" width="26" height="5.3" rx="2" className="fill-blue-500/70" />
          <text x="79" y="140" textAnchor="middle" className="fill-foreground text-[10px] font-mono">9</text>
          <text x="125" y="151" textAnchor="middle" className="fill-foreground text-[10px] font-mono">7</text>
          <text x="171" y="172" textAnchor="middle" className="fill-foreground text-[10px] font-mono">3</text>
          <text x="217" y="182" textAnchor="middle" className="fill-foreground text-[10px] font-mono">1</text>
          <text x="151" y="211" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-medium">
            此例的 4 个像素坐标均非零
          </text>

          {/* JPEG DCT sub-card */}
          <rect
            x="32"
            y="234"
            width="238"
            height="174"
            rx="8"
            className="fill-blue-500/[0.06] stroke-blue-500/30"
            strokeWidth="1"
          />
          <text x="44" y="253" className="fill-blue-700 dark:fill-blue-300 text-[11.5px] font-bold">
            JPEG：8×8 离散余弦基（DCT）
          </text>

          {/* DCT-II rows sampled at the eight pixel centers. */}
          {[
            { k: 0, baseline: 274, label: 'k=0 直流', color: 'stroke-blue-600 dark:stroke-blue-400' },
            { k: 1, baseline: 297, label: 'k=1 低频', color: 'stroke-emerald-600 dark:stroke-emerald-400' },
            { k: 6, baseline: 326, label: 'k=6 高频', color: 'stroke-amber-600 dark:stroke-amber-400' },
          ].map(({ k, baseline, label, color }) => {
            const samples = Array.from({ length: 8 }, (_, j) => ({
              x: 44 + 15 * (j + 0.5),
              y: baseline - 27 * (k === 0 ? 1 / Math.sqrt(8) : 0.5) * Math.cos(Math.PI * (j + 0.5) * k / 8),
            }));
            return (
              <g key={k}>
                <line x1="44" y1={baseline} x2="164" y2={baseline} className="stroke-border" strokeWidth="0.8" strokeDasharray="2 2" />
                <polyline points={samples.map(({ x, y }) => [x, y].join(',')).join(' ')} fill="none" className={color} strokeWidth="1.6" />
                {samples.map(({ x, y }) => <circle key={x} cx={x} cy={y} r="1.4" className={color} fill="currentColor" />)}
                <text x="172" y={baseline + 4} className="fill-foreground text-[10px] font-mono">{label}</text>
              </g>
            );
          })}

          <text x="44" y="355" className="fill-foreground text-[10.5px] font-mono font-semibold">
            二维可分离：Y = C X Cᵀ （CᵀC = I₈）
          </text>
          <text x="44" y="374" className="fill-muted-foreground text-[10px]">
            • 偶延拓避免直接周期拼接的跳变
          </text>
          <text x="44" y="391" className="fill-muted-foreground text-[10px]">
            • 高压缩比下可能出现 8×8 块状边界伪影
          </text>
        </g>

        {/* ================= MIDDLE PANEL: 4-POINT HAAR WAVELET BASIS W4 ================= */}
        <g>
          <rect
            x="294"
            y="56"
            width="302"
            height="366"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="445" y="79" textAnchor="middle" className="fill-foreground text-[12.5px] font-bold">
            2. 4 点 Haar 小波基 W₄（多分辨率阶梯基）
          </text>

          {/* w1 = [1, 1, 1, 1] */}
          <rect x="307" y="92" width="276" height="46" rx="7" className="fill-blue-500/[0.06] stroke-blue-500/25" strokeWidth="1" />
          <line x1="317" y1="126" x2="421" y2="126" className="stroke-border" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 317 112 H 421" fill="none" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.6" />
          <text x="433" y="111" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">
            w₁ = [1, 1, 1, 1]ᵀ
          </text>
          <text x="433" y="128" className="fill-muted-foreground text-[10px]">
            全局均值（粗尺度）· ‖w₁‖² = 4
          </text>

          {/* w2 = [1, 1, -1, -1] */}
          <rect x="307" y="144" width="276" height="46" rx="7" className="fill-emerald-500/[0.06] stroke-emerald-500/25" strokeWidth="1" />
          <line x1="317" y1="167" x2="421" y2="167" className="stroke-border" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 317 153 H 369 V 181 H 421" fill="none" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.6" />
          <text x="433" y="163" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">
            w₂ = [1, 1, -1, -1]ᵀ
          </text>
          <text x="433" y="180" className="fill-muted-foreground text-[10px]">
            左右半区差（中尺度）· ‖w₂‖² = 4
          </text>

          {/* w3 = [1, -1, 0, 0] */}
          <rect x="307" y="196" width="276" height="46" rx="7" className="fill-purple-500/[0.06] stroke-purple-500/25" strokeWidth="1" />
          <line x1="317" y1="219" x2="421" y2="219" className="stroke-border" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 317 205 H 343 V 233 H 369 V 219 H 421" fill="none" className="stroke-purple-600 dark:stroke-purple-400" strokeWidth="2.6" />
          <text x="433" y="215" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-mono font-bold">
            w₃ = [1, -1, 0, 0]ᵀ
          </text>
          <text x="433" y="232" className="fill-muted-foreground text-[10px]">
            左半局部高频细节 · ‖w₃‖² = 2
          </text>

          {/* w4 = [0, 0, 1, -1] */}
          <rect x="307" y="248" width="276" height="46" rx="7" className="fill-amber-500/[0.06] stroke-amber-500/25" strokeWidth="1" />
          <line x1="317" y1="271" x2="421" y2="271" className="stroke-border" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 317 271 H 369 V 257 H 395 V 285 H 421" fill="none" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="2.6" />
          <text x="433" y="267" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">
            w₄ = [0, 0, 1, -1]ᵀ
          </text>
          <text x="433" y="284" className="fill-muted-foreground text-[10px]">
            右半局部高频细节 · ‖w₄‖² = 2
          </text>

          {/* Orthogonality & Inversion Summary */}
          <rect
            x="307"
            y="306"
            width="276"
            height="102"
            rx="8"
            className="fill-muted/35 stroke-border/80"
            strokeWidth="1"
          />
          <text x="319" y="326" className="fill-foreground text-[11px] font-bold">
            列向量两两正交（非单位长度）：
          </text>
          <text x="319" y="346" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono font-semibold">
            W₄ᵀ W₄ = D₄ = diag(4, 4, 2, 2)
          </text>
          <text x="319" y="366" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-mono font-semibold">
            W₄⁻¹ = D₄⁻¹ W₄ᵀ （O(n) 快速金字塔分解）
          </text>
          <text x="319" y="386" className="fill-purple-600 dark:fill-purple-400 text-[10.5px] font-mono">
            标准正交化：Q₄ = W₄ D₄⁻¹/² ⇒ Q₄ᵀQ₄ = I₄
          </text>
          <text x="319" y="401" className="fill-muted-foreground text-[10px]">
            兼顾空间定位与频域尺度，尖锐边缘不震荡
          </text>
        </g>

        {/* ================= RIGHT PANEL: ENERGY COMPACTION & THRESHOLDING ================= */}
        <g>
          <rect
            x="608"
            y="56"
            width="292"
            height="366"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="754" y="79" textAnchor="middle" className="fill-foreground text-[12.5px] font-bold">
            3. 能量集中与硬阈值压缩实战
          </text>

          {/* Step A: Transform c = W4^-1 x */}
          <rect
            x="620"
            y="92"
            width="268"
            height="62"
            rx="8"
            className="fill-muted/30 stroke-border/80"
            strokeWidth="1"
          />
          <text x="632" y="111" className="fill-foreground text-[10.5px] font-mono">
            输入 x = [9, 7, 3, 1]ᵀ  (‖x‖₂² = 140)
          </text>
          <text x="632" y="129" className="fill-blue-600 dark:fill-blue-400 text-[10.5px] font-mono font-semibold">
            c = W₄⁻¹x = [5, 3, 1, 1]ᵀ
          </text>
          <text x="632" y="145" className="fill-purple-600 dark:fill-purple-400 text-[10.5px] font-mono">
            正交系数 c̃ = Q₄ᵀx = [10, 6, √2, √2]ᵀ
          </text>

          {/* Step B: Bar chart of squared energy c_tilde^2 */}
          <rect
            x="620"
            y="164"
            width="268"
            height="132"
            rx="8"
            className="fill-card stroke-border/80"
            strokeWidth="1"
          />
          <text x="754" y="182" textAnchor="middle" className="fill-foreground text-[11px] font-semibold">
            标准正交基分量能量分布 c̃ᵢ²（总和 140）
          </text>

          {/* Axis baseline y = 266 */}
          <line x1="636" y1="266" x2="874" y2="266" className="stroke-foreground/40" strokeWidth="1.2" />

          {/* Bar 1: 100 -> height 68px (y=198) */}
          <rect x="650" y="198" width="32" height="68" rx="3" className="fill-blue-600 dark:fill-blue-500" />
          <text x="666" y="193" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono font-bold">
            100
          </text>
          <text x="666" y="280" textAnchor="middle" className="fill-foreground text-[10px] font-mono">
            c̃₁²
          </text>
          <text x="666" y="291" textAnchor="middle" className="fill-muted-foreground text-[9px]">
            71.4%
          </text>

          {/* Bar 2: 36 -> height 24.48px (y=241.52) */}
          <rect x="706" y="241.52" width="32" height="24.48" rx="3" className="fill-emerald-600 dark:fill-emerald-500" />
          <text x="722" y="236" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-mono font-bold">
            36
          </text>
          <text x="722" y="280" textAnchor="middle" className="fill-foreground text-[10px] font-mono">
            c̃₂²
          </text>
          <text x="722" y="291" textAnchor="middle" className="fill-muted-foreground text-[9px]">
            25.7%
          </text>

          {/* Threshold tau² = 4 at 0.68 px per unit */}
          <line
            x1="636"
            y1="263.28"
            x2="874"
            y2="263.28"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="1.3"
            strokeDasharray="4 3"
          />
          <line
            x1="806"
            y1="222"
            x2="806"
            y2="263.28"
            className="stroke-rose-600/70 dark:stroke-rose-400/70"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <text x="806" y="216" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono font-bold">
            阈值 τ² = 4
          </text>

          {/* Bar 3: 2 -> height 1.36px (y=264.64) */}
          <rect x="762" y="264.64" width="32" height="1.36" className="fill-rose-500/65" />
          <text x="778" y="244" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[9.5px] font-mono">
            2→0
          </text>
          <text x="778" y="280" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            c̃₃²
          </text>
          <text x="778" y="291" textAnchor="middle" className="fill-muted-foreground text-[9px]">
            舍弃
          </text>

          {/* Bar 4: 2 -> height 1.36px (y=264.64) */}
          <rect x="818" y="264.64" width="32" height="1.36" className="fill-rose-500/65" />
          <text x="834" y="244" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[9.5px] font-mono">
            2→0
          </text>
          <text x="834" y="280" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            c̃₄²
          </text>
          <text x="834" y="291" textAnchor="middle" className="fill-muted-foreground text-[9px]">
            舍弃
          </text>

          {/* Step C: Reconstruction & Parseval bound */}
          <rect
            x="620"
            y="306"
            width="268"
            height="102"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/35"
            strokeWidth="1.2"
          />
          <text x="632" y="325" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-bold">
            硬阈值截断重构（保留 2 / 4 项）
          </text>
          <text x="632" y="344" className="fill-foreground text-[10.5px] font-mono">
            ĉ = [5, 3, 0, 0]ᵀ ⇒ x̂ = [8, 8, 2, 2]ᵀ
          </text>
          <text x="632" y="363" className="fill-foreground text-[10.5px] font-mono">
            ‖x - x̂‖₂² = 4 = c̃₃² + c̃₄² (Parseval)
          </text>
          <text x="632" y="382" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-semibold">
            仅存 50% 系数，能量留存 136/140 = 97.1%！
          </text>
          <text x="632" y="399" className="fill-muted-foreground text-[10px]">
            正交性保证截断平方和精准等于像素重构误差
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
