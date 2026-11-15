import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function GrandFinaleFourSubspacesFactorizationsDiagram({
  caption = '图 35-1：MIT 18.06 全课程终极全景图——上方以四个基本子空间的维数、正交补与奇异值分解双射（$\\mathbb{R}^n = \\operatorname{Row}(A) \\oplus \\operatorname{Null}(A) \\xleftrightarrow{A / A^+} \\mathbb{R}^m = \\operatorname{Col}(A) \\oplus \\operatorname{Null}(A^T)$）确立几何骨架，下方以四大矩阵分解（$PA=LU$、$A=QR$、$S\\Lambda S^{-1}/Q\\Lambda Q^T$、$U\\Sigma V^T$）完成从理论结构到数值算法与动力系统的终极统一。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="The Grand Picture of Linear Algebra: Four Fundamental Subspaces × Four Great Factorizations"
      caption={caption}
    >
      <svg
        viewBox="0 0 960 540"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="MIT 18.06 Grand Finale Diagram unifying the Four Fundamental Subspaces and the Four Great Matrix Factorizations LU, QR, Spectral Diagonalization, and SVD"
      >
        <defs>
          <marker
            id="l35-arrow-blue"
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
            id="l35-arrow-purple"
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
            id="l35-arrow-emerald"
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
            id="l35-arrow-amber"
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
            id="l35-arrow-muted"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-muted-foreground" />
          </marker>
        </defs>

        {/* Global Subtle Frame */}
        <rect
          x="6"
          y="6"
          width="948"
          height="528"
          rx="14"
          className="fill-card/35 stroke-border/70"
          strokeWidth="1.2"
        />

        {/* ==================== HEADER ==================== */}
        <text x="480" y="27" textAnchor="middle" className="fill-foreground text-[14.5px] font-bold">
          MIT 18.06 线性代数终极全景图：四个基本子空间 × 四大矩阵分解
        </text>
        <text x="480" y="45" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
          两大支柱 + 一个几何灵魂（列线性组合与正交投影）· 任意矩阵 A ∈ ℝᵐˣⁿ，rank(A) = r
        </text>

        {/* ==================== PILLAR I: THE FOUR FUNDAMENTAL SUBSPACES ==================== */}
        <rect
          x="18"
          y="56"
          width="924"
          height="248"
          rx="12"
          className="fill-muted/15 stroke-border"
          strokeWidth="1.2"
        />

        {/* Left Panel: Input Space R^n */}
        <g>
          <rect
            x="30"
            y="68"
            width="284"
            height="224"
            rx="10"
            className="fill-card/75 stroke-border"
            strokeWidth="1.4"
          />
          <text x="172" y="87" textAnchor="middle" className="fill-foreground text-[12px] font-bold">
            输入空间 ℝⁿ = Row(A) ⊕ Null(A)
          </text>

          {/* Row(A) */}
          <rect
            x="42"
            y="96"
            width="260"
            height="84"
            rx="8"
            className="fill-blue-500/12 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.5"
          />
          <text x="54" y="114" className="fill-blue-700 dark:fill-blue-300 text-[11.5px] font-mono font-bold">
            Row(A) = Col(Aᵀ)    dim = r
          </text>
          <text x="54" y="132" className="fill-foreground text-[10.5px] font-mono">
            SVD 正交基：&#123;v₁, …, v_r&#125; (V_r)
          </text>
          <text x="54" y="149" className="fill-muted-foreground text-[10px] font-mono">
            LU / RREF 基：R 的前 r 个非零行
          </text>
          <text x="54" y="166" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-semibold">
            行空间分量 x_r ∈ Row(A) (最短解所在)
          </text>

          {/* Orthogonality Divider + Origin 0 */}
          <line x1="42" y1="191" x2="314" y2="191" className="stroke-border" strokeWidth="1.2" strokeDasharray="4 3" />
          <rect x="116" y="181" width="112" height="20" rx="10" className="fill-background stroke-border" />
          <text x="172" y="195" textAnchor="middle" className="fill-foreground text-[10px] font-mono font-bold">
            90° 正交补 (⟂)
          </text>
          <circle cx="314" cy="191" r="4.5" className="fill-foreground" />
          <text x="323" y="195" className="fill-foreground text-[11px] font-mono font-bold">
            0
          </text>

          {/* Null(A) */}
          <rect
            x="42"
            y="202"
            width="260"
            height="78"
            rx="8"
            className="fill-emerald-500/12 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.5"
          />
          <text x="54" y="219" className="fill-emerald-700 dark:fill-emerald-300 text-[11.5px] font-mono font-bold">
            Null(A)             dim = n − r
          </text>
          <text x="54" y="236" className="fill-foreground text-[10.5px] font-mono">
            SVD 正交基：&#123;v_(r+1), …, v_n&#125;
          </text>
          <text x="54" y="253" className="fill-muted-foreground text-[10px] font-mono">
            特解基矩阵：N = [−F; I],  Ax_n = 0
          </text>
          <text x="54" y="270" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-semibold">
            勾股定理：‖x‖₂² = ‖x_r‖₂² + ‖x_n‖₂²
          </text>
        </g>

        {/* Right Panel: Output Space R^m */}
        <g>
          <rect
            x="646"
            y="68"
            width="284"
            height="224"
            rx="10"
            className="fill-card/75 stroke-border"
            strokeWidth="1.4"
          />
          <text x="788" y="87" textAnchor="middle" className="fill-foreground text-[12px] font-bold">
            输出空间 ℝᵐ = Col(A) ⊕ Null(Aᵀ)
          </text>

          {/* Col(A) */}
          <rect
            x="658"
            y="96"
            width="260"
            height="84"
            rx="8"
            className="fill-purple-500/12 stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.5"
          />
          <text x="670" y="114" className="fill-purple-700 dark:fill-purple-300 text-[11.5px] font-mono font-bold">
            Col(A) = Im(A)      dim = r
          </text>
          <text x="670" y="132" className="fill-foreground text-[10.5px] font-mono">
            SVD 正交基：&#123;u₁, …, u_r&#125; (U_r)
          </text>
          <text x="670" y="149" className="fill-muted-foreground text-[10px] font-mono">
            QR 正交基：Q_r  |  LU：主元列
          </text>
          <text x="670" y="166" className="fill-purple-700 dark:fill-purple-300 text-[10px] font-mono font-semibold">
            最优投影：p = A x̂ = P b ∈ Col(A)
          </text>

          {/* Orthogonality Divider + Origin 0 */}
          <line x1="646" y1="191" x2="918" y2="191" className="stroke-border" strokeWidth="1.2" strokeDasharray="4 3" />
          <rect x="732" y="181" width="112" height="20" rx="10" className="fill-background stroke-border" />
          <text x="788" y="195" textAnchor="middle" className="fill-foreground text-[10px] font-mono font-bold">
            90° 正交补 (⟂)
          </text>
          <circle cx="646" cy="191" r="4.5" className="fill-foreground" />
          <text x="631" y="195" className="fill-foreground text-[11px] font-mono font-bold">
            0
          </text>

          {/* Null(A^T) */}
          <rect
            x="658"
            y="202"
            width="260"
            height="78"
            rx="8"
            className="fill-amber-500/12 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.5"
          />
          <text x="670" y="219" className="fill-amber-800 dark:fill-amber-300 text-[11.5px] font-mono font-bold">
            Null(Aᵀ)            dim = m − r
          </text>
          <text x="670" y="236" className="fill-foreground text-[10.5px] font-mono">
            SVD 正交基：&#123;u_(r+1), …, u_m&#125;
          </text>
          <text x="670" y="253" className="fill-muted-foreground text-[10px] font-mono">
            消元零行左乘组合 · Aᵀ y = 0
          </text>
          <text x="670" y="270" className="fill-amber-800 dark:fill-amber-300 text-[10px] font-mono font-semibold">
            正交残差：e = b − p ∈ Null(Aᵀ)
          </text>
        </g>

        {/* Center Bijection & Collapse Mapping Arrows */}
        <g>
          {/* Pillar I Title Badge */}
          <rect
            x="330"
            y="68"
            width="300"
            height="28"
            rx="7"
            className="fill-card stroke-border"
            strokeWidth="1.1"
          />
          <text x="480" y="86" textAnchor="middle" className="fill-foreground text-[11px] font-bold">
            支柱一：基本定理三部曲（维数 · 正交补 · SVD 双射）
          </text>

          {/* Forward Arrow: Row(A) -> Col(A) via A */}
          <line
            x1="316"
            y1="120"
            x2="640"
            y2="120"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.2"
            markerEnd="url(#l35-arrow-blue)"
          />
          <rect x="352" y="108" width="256" height="22" rx="6" className="fill-background stroke-blue-500/45" />
          <text x="480" y="123" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">
            Avᵢ = σᵢ uᵢ  (Row(A) ⟶ Col(A) 双射)
          </text>

          {/* Reverse Arrow: Col(A) -> Row(A) via A^+ */}
          <line
            x1="644"
            y1="156"
            x2="320"
            y2="156"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.2"
            markerEnd="url(#l35-arrow-purple)"
          />
          <rect x="344" y="144" width="272" height="22" rx="6" className="fill-background stroke-purple-500/45" />
          <text x="480" y="159" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[10.5px] font-mono font-bold">
            A⁺uᵢ = (1/σᵢ)vᵢ ⇒ x⁺ = A⁺b (最短解)
          </text>

          {/* Null(A) -> Output Origin 0 */}
          <path
            d="M 316 232 C 415 232, 540 220, 638 195"
            fill="none"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2"
            strokeDasharray="5 3"
            markerEnd="url(#l35-arrow-emerald)"
          />
          <rect x="360" y="207" width="240" height="22" rx="6" className="fill-background stroke-emerald-500/45" />
          <text x="480" y="222" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
            A x_n = 0  (零空间全体压扁至输出原点)
          </text>

          {/* Null(A^T) -> Input Origin 0 */}
          <path
            d="M 644 264 C 540 282, 410 278, 322 199"
            fill="none"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2"
            strokeDasharray="5 3"
            markerEnd="url(#l35-arrow-amber)"
          />
          <rect x="352" y="256" width="256" height="22" rx="6" className="fill-background stroke-amber-500/45" />
          <text x="480" y="271" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[10px] font-mono font-bold">
            A⁺ e = 0  (正交残差归零，不产生无效解)
          </text>
        </g>

        {/* ==================== PILLAR II DIVIDER ==================== */}
        <line x1="24" y1="320" x2="290" y2="320" className="stroke-border" strokeWidth="1" />
        <rect x="296" y="309" width="368" height="21" rx="10" className="fill-card stroke-border" />
        <text x="480" y="323" textAnchor="middle" className="fill-foreground text-[11px] font-bold">
          支柱二：四大矩阵分解体系（The Four Great Factorizations）
        </text>
        <line x1="670" y1="320" x2="936" y2="320" className="stroke-border" strokeWidth="1" />

        {/* ==================== PILLAR II: FOUR GREAT FACTORIZATIONS ==================== */}
        {/* Card 1: PA = LU */}
        <g>
          <rect
            x="18"
            y="336"
            width="222"
            height="186"
            rx="10"
            className="fill-card stroke-blue-500/45"
            strokeWidth="1.4"
          />
          <rect x="27" y="344" width="204" height="24" rx="6" className="fill-blue-500/15" />
          <text x="129" y="360" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11.5px] font-bold">
            1. PA = LU（高斯消元）
          </text>
          <text x="28" y="384" className="fill-foreground text-[10px] font-semibold">
            适用：任意矩阵消元 / 可逆方阵
          </text>
          <text x="28" y="403" className="fill-foreground text-[9.8px] font-mono">
            • 保持 Row(A) 与 Null(A) 不变
          </text>
          <text x="28" y="420" className="fill-foreground text-[9.8px] font-mono">
            • det(A) = ± ∏ u_ii (主元判秩)
          </text>
          <text x="28" y="437" className="fill-foreground text-[9.8px] font-mono">
            • 求解 Ax = b，计算量 O(n³/3)
          </text>
          <text x="28" y="454" className="fill-rose-700 dark:fill-rose-300 text-[9.8px] font-mono">
            • 注意：消元改变 Col(A) 与特征值
          </text>
          <rect x="27" y="468" width="204" height="44" rx="6" className="fill-blue-500/8 stroke-blue-500/30" />
          <text x="129" y="485" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[9.8px] font-semibold">
            核心功能：消元主元定位四大子空间
          </text>
          <text x="129" y="502" textAnchor="middle" className="fill-muted-foreground text-[9.5px] font-mono">
            L 存乘数无填充 · U 显式给出秩 r
          </text>
        </g>

        {/* Connector 1 -> 2 */}
        <line
          x1="241"
          y1="429"
          x2="250"
          y2="429"
          className="stroke-muted-foreground"
          strokeWidth="1.4"
          markerEnd="url(#l35-arrow-muted)"
        />

        {/* Card 2: A = QR */}
        <g>
          <rect
            x="252"
            y="336"
            width="222"
            height="186"
            rx="10"
            className="fill-card stroke-emerald-500/45"
            strokeWidth="1.4"
          />
          <rect x="261" y="344" width="204" height="24" rx="6" className="fill-emerald-500/15" />
          <text x="363" y="360" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11.5px] font-bold">
            2. A = QR（Gram-Schmidt）
          </text>
          <text x="262" y="384" className="fill-foreground text-[10px] font-semibold">
            适用：列满秩矩阵 A ∈ ℝᵐˣⁿ (r = n)
          </text>
          <text x="262" y="403" className="fill-foreground text-[9.8px] font-mono">
            • QᵀQ = I_n，Q 为 Col(A) 正交基
          </text>
          <text x="262" y="420" className="fill-foreground text-[9.8px] font-mono">
            • 最小二乘解耦：R x̂ = Qᵀ b
          </text>
          <text x="262" y="437" className="fill-foreground text-[9.8px] font-mono">
            • 几何超体积：|det A| = ∏ r_ii
          </text>
          <text x="262" y="454" className="fill-emerald-700 dark:fill-emerald-300 text-[9.8px] font-mono">
            • 数值稳健：避免直接算病态 AᵀA
          </text>
          <rect x="261" y="468" width="204" height="44" rx="6" className="fill-emerald-500/8 stroke-emerald-500/30" />
          <text x="363" y="485" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[9.8px] font-semibold">
            核心功能：正交投影与体积测量
          </text>
          <text x="363" y="502" textAnchor="middle" className="fill-muted-foreground text-[9.5px] font-mono">
            投影算子 P = Q Qᵀ · 误差 e ⟂ Col(A)
          </text>
        </g>

        {/* Connector 2 -> 3 */}
        <line
          x1="475"
          y1="429"
          x2="484"
          y2="429"
          className="stroke-muted-foreground"
          strokeWidth="1.4"
          markerEnd="url(#l35-arrow-muted)"
        />

        {/* Card 3: Spectral A = SΛS^-1 / QΛQ^T */}
        <g>
          <rect
            x="486"
            y="336"
            width="222"
            height="186"
            rx="10"
            className="fill-card stroke-amber-500/45"
            strokeWidth="1.4"
          />
          <rect x="495" y="344" width="204" height="24" rx="6" className="fill-amber-500/15" />
          <text x="597" y="360" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[11.5px] font-bold">
            3. SΛS⁻¹ &amp; QΛQᵀ（谱分解）
          </text>
          <text x="496" y="384" className="fill-foreground text-[10px] font-semibold">
            适用：可对角化方阵 / 实对称阵
          </text>
          <text x="496" y="403" className="fill-foreground text-[9.8px] font-mono">
            • 相似保持 tr = ∑λᵢ, det = ∏λᵢ
          </text>
          <text x="496" y="420" className="fill-foreground text-[9.8px] font-mono">
            • 演化：Aᵏ = SΛᵏS⁻¹, exp(At) 解耦
          </text>
          <text x="496" y="437" className="fill-foreground text-[9.8px] font-mono">
            • 对称阵：实 λᵢ + 正交特征基 Q
          </text>
          <text x="496" y="454" className="fill-amber-800 dark:fill-amber-300 text-[9.8px] font-mono">
            • SPD：λᵢ &gt; 0 ⇔ xᵀAx &gt; 0 (RᵀR)
          </text>
          <rect x="495" y="468" width="204" height="44" rx="6" className="fill-amber-500/8 stroke-amber-500/30" />
          <text x="597" y="485" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[9.8px] font-semibold">
            核心功能：动力系统与二次型优化
          </text>
          <text x="597" y="502" textAnchor="middle" className="fill-muted-foreground text-[9.5px] font-mono">
            Markov λ₁=1 · 亏损阵需 Jordan MJM⁻¹
          </text>
        </g>

        {/* Connector 3 -> 4 */}
        <line
          x1="709"
          y1="429"
          x2="718"
          y2="429"
          className="stroke-muted-foreground"
          strokeWidth="1.4"
          markerEnd="url(#l35-arrow-muted)"
        />

        {/* Card 4: SVD A = UΣV^T */}
        <g>
          <rect
            x="720"
            y="336"
            width="222"
            height="186"
            rx="10"
            className="fill-purple-500/[0.06] stroke-purple-500/65"
            strokeWidth="1.8"
          />
          <rect x="729" y="344" width="204" height="24" rx="6" className="fill-purple-500/20" />
          <text x="831" y="360" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[11.5px] font-bold">
            4. A = UΣVᵀ（奇异值分解）
          </text>
          <text x="730" y="384" className="fill-purple-700 dark:fill-purple-300 text-[10px] font-bold">
            适用：地球上任意 m×n 矩阵（无限制!）
          </text>
          <text x="730" y="403" className="fill-foreground text-[9.8px] font-mono">
            • 统一四子空间全部标准正交基
          </text>
          <text x="730" y="420" className="fill-foreground text-[9.8px] font-mono">
            • 秩 1 累加：A = ∑ σᵢ uᵢ vᵢᵀ
          </text>
          <text x="730" y="437" className="fill-foreground text-[9.8px] font-mono">
            • Eckart-Young：最优低秩逼近 A_k
          </text>
          <text x="730" y="454" className="fill-purple-700 dark:fill-purple-300 text-[9.8px] font-mono font-semibold">
            • 伪逆：A⁺ = VΣ⁺Uᵀ → 最短最小二乘
          </text>
          <rect x="729" y="468" width="204" height="44" rx="6" className="fill-purple-500/12 stroke-purple-500/40" />
          <text x="831" y="485" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[9.8px] font-bold">
            核心功能：全课程理论终极统一
          </text>
          <text x="831" y="502" textAnchor="middle" className="fill-muted-foreground text-[9.5px] font-mono">
            σᵢ = √λᵢ(AᵀA) · Avᵢ = σᵢuᵢ (必同基锁定)
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
