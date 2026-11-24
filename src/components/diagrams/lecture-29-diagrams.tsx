import * as React from 'react';
import { MathDiagram } from './math-diagram';

/**
 * L29 Diagram 1: Similarity vs Congruence vs Elimination & Similarity Orbits
 * Left panel: contrasts Similarity (M^{-1} A M), Congruence (M^T A M), and Elimination (E A).
 * Right panel: visualizes two disjoint similarity orbits sharing tr=4, det=4 (lambda=2):
 *   Orbit I (diagonalizable 2I_2, GM=2, singleton) vs Orbit II (defective J_2(2), GM=1).
 */
export function SimilarityOrbitAndInvariantsDiagram({
  caption = '三大矩阵变换对比（左）：相似变换 $B = M^{-1} A M$ 唯一完整保留特征谱与 Jordan 结构；同谱不同轨道示例（右）：$\\operatorname{tr}=4, \\det=4$（$\\lambda_1=\\lambda_2=2$）分裂为两条互不相交的相似轨道',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 470"
        className="w-full h-auto font-sans select-none"
        aria-label="相似变换与合同消元对比及同谱不同轨道示意图"
      >
        <defs>
          <marker
            id="l29-arrow-emerald"
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
            id="l29-arrow-purple"
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
            id="l29-arrow-blue"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
        </defs>

        {/* Global Background */}
        <rect
          x="0"
          y="0"
          width="920"
          height="470"
          rx="12"
          className="fill-card/40 stroke-border"
          strokeWidth="1"
        />

        {/* ================= LEFT PANEL: Three Matrix Relations ================= */}
        <g transform="translate(14, 14)">
          <rect
            x="0"
            y="0"
            width="440"
            height="442"
            rx="10"
            className="fill-card/70 stroke-border"
            strokeWidth="1.5"
          />
          <text x="18" y="28" className="fill-foreground text-sm font-semibold">
            左图：三种矩阵等价变换的本质对比
          </text>
          <text x="18" y="46" className="fill-muted-foreground text-[11px]">
            严禁混淆相似 (M⁻¹AM)、合同 (MᵀAM) 与高斯消元 (EA)！
          </text>

          {/* Card 1: Similarity */}
          <rect
            x="16"
            y="60"
            width="408"
            height="122"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/40"
            strokeWidth="1.4"
          />
          <rect
            x="26"
            y="70"
            width="156"
            height="20"
            rx="4"
            className="fill-emerald-600/15 dark:fill-emerald-400/15"
          />
          <text x="34" y="84" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-bold font-mono">
            1. 相似变换 B = M⁻¹ A M
          </text>
          <text x="190" y="84" className="fill-muted-foreground text-[11px]">
            (算子换基：T: V → V)
          </text>
          <text x="28" y="107" className="fill-foreground text-xs">
            ✓ 保持：特征多项式、特征值 λᵢ、AM(λ)、tr(A)、det(A)、rank(A)
          </text>
          <text x="28" y="127" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-semibold">
            ✓ 保持：GM(λ) 与所有 rank((A - λI)ᵏ) ⇒ 完整保留 Jordan 块
          </text>
          <text x="28" y="148" className="fill-muted-foreground text-[11px]">
            几何含义：同一线性算子在不同坐标系下的矩阵表示（第 32 讲）
          </text>
          <text x="28" y="167" className="fill-muted-foreground text-[11px] font-mono">
            等价关系：自反 / 对称 / 传递 ⇒ 将 ℂⁿˣⁿ 划分为互不相交轨道
          </text>

          {/* Card 2: Congruence */}
          <rect
            x="16"
            y="194"
            width="408"
            height="120"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/35"
            strokeWidth="1.3"
          />
          <rect
            x="26"
            y="204"
            width="156"
            height="20"
            rx="4"
            className="fill-blue-600/15 dark:fill-blue-400/15"
          />
          <text x="34" y="218" className="fill-blue-700 dark:fill-blue-300 text-xs font-bold font-mono">
            2. 合同变换 C = Mᵀ A M
          </text>
          <text x="190" y="218" className="fill-muted-foreground text-[11px]">
            (二次型 xᵀAx；复域用 MᴴAM)
          </text>
          <text x="28" y="241" className="fill-foreground text-xs">
            ✓ 对实对称 A：保持对称性、秩与惯性 (n₊, n₋, n₀)
          </text>
          <text x="28" y="261" className="fill-amber-700 dark:fill-amber-300 text-xs font-semibold">
            特征值可能改变：如 diag(2, 8) → diag(2, 2) (M = diag(1, 1/2))
          </text>
          <text x="28" y="282" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-medium">
            ★ 罕见交集：当 M = Q 正交（Qᵀ = Q⁻¹）时，QᵀAQ = Q⁻¹AQ！
          </text>
          <text x="28" y="300" className="fill-muted-foreground text-[11px]">
            （第 26 讲实对称谱定理能同时保对称性与特征值的根本原因）
          </text>

          {/* Card 3: Elimination */}
          <rect
            x="16"
            y="326"
            width="408"
            height="102"
            rx="8"
            className="fill-rose-500/10 stroke-rose-500/35"
            strokeWidth="1.3"
          />
          <rect
            x="26"
            y="336"
            width="148"
            height="20"
            rx="4"
            className="fill-rose-600/15 dark:fill-rose-400/15"
          />
          <text x="34" y="350" className="fill-rose-700 dark:fill-rose-300 text-xs font-bold font-mono">
            3. 初等消元 U = E A
          </text>
          <text x="182" y="350" className="fill-muted-foreground text-[11px]">
            (求解 Ax = b 的单侧行操作)
          </text>
          <text x="28" y="372" className="fill-foreground text-xs">
            ✓ 保持：Row(A)、Null(A)、rank(A)
          </text>
          <text x="28" y="392" className="fill-rose-700 dark:fill-rose-300 text-xs font-semibold">
            特征值可能改变：[1 2; 2 4] (λ=5,0) → [1 2; 0 0] (λ=1,0)
          </text>
          <text x="28" y="412" className="fill-muted-foreground text-[11px]">
            仅左乘 E，通常不保持特征多项式
          </text>
        </g>

        {/* ================= RIGHT PANEL: Similarity Orbits for tr=4, det=4 ================= */}
        <g transform="translate(466, 14)">
          <rect
            x="0"
            y="0"
            width="440"
            height="442"
            rx="10"
            className="fill-card/70 stroke-border"
            strokeWidth="1.5"
          />
          <text x="18" y="28" className="fill-foreground text-sm font-semibold">
            右图：同谱矩阵族分裂为两条独立相似轨道
          </text>

          {/* Shared Invariants Header */}
          <rect
            x="16"
            y="42"
            width="408"
            height="46"
            rx="8"
            className="fill-muted/40 stroke-border"
            strokeWidth="1"
          />
          <text x="28" y="61" className="fill-foreground text-xs font-medium">
            共同特征不变量：tr(A) = 4,  det(A) = 4,  p(λ) = (λ - 2)² = 0
          </text>
          <text x="28" y="79" className="fill-muted-foreground text-[11px] font-mono">
            下述全部 2×2 矩阵共享相同的特征值 λ₁ = λ₂ = 2（AM(2) = 2）
          </text>

          {/* Orbit I: Diagonalizable Singleton */}
          <rect
            x="16"
            y="102"
            width="408"
            height="94"
            rx="10"
            className="fill-blue-500/10 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.6"
          />
          <text x="30" y="122" className="fill-blue-700 dark:fill-blue-300 text-xs font-bold">
            轨道 I（可对角化类 · 2 个 1×1 Jordan 块）
          </text>
          <text x="398" y="122" textAnchor="end" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-semibold">
            GM(2) = 2
          </text>

          {/* Singleton Matrix Box */}
          <rect
            x="28"
            y="132"
            width="148"
            height="52"
            rx="6"
            className="fill-card stroke-blue-500/50"
            strokeWidth="1.2"
          />
          <text x="42" y="162" className="fill-foreground text-xs font-mono font-semibold">
            C₁ =
          </text>
          <path d="M 78,139 L 73,139 L 73,177 L 78,177" fill="none" className="stroke-foreground" strokeWidth="1.3" />
          <path d="M 116,139 L 121,139 L 121,177 L 116,177" fill="none" className="stroke-foreground" strokeWidth="1.3" />
          <text x="86" y="153" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">2</text>
          <text x="108" y="153" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">0</text>
          <text x="86" y="172" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">0</text>
          <text x="108" y="172" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">2</text>
          <text x="132" y="162" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-semibold">
            = 2I₂
          </text>

          <text x="188" y="150" className="fill-foreground text-xs font-medium">
            孤立单点轨道（仅此 1 员！）
          </text>
          <text x="188" y="167" className="fill-muted-foreground text-[11px] font-mono">
            ∀可逆 M：M⁻¹ (2I₂) M = 2I₂
          </text>
          <text x="188" y="183" className="fill-muted-foreground text-[11px] font-mono">
            rank(C₁ - 2I₂) = 0 ⇒ 2 个特征向量
          </text>

          {/* Barrier: NOT SIMILAR */}
          <line
            x1="24"
            y1="212"
            x2="416"
            y2="212"
            className="stroke-rose-500/70"
            strokeWidth="1.6"
            strokeDasharray="6 4"
          />
          <rect
            x="96"
            y="200"
            width="248"
            height="22"
            rx="11"
            className="fill-rose-500/15 stroke-rose-500/50"
            strokeWidth="1"
          />
          <text
            x="220"
            y="215"
            textAnchor="middle"
            className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold"
          >
            不可跨越鸿沟 (≁)：GM = 2 ≠ GM = 1
          </text>

          {/* Orbit II: Defective 2x2 Jordan Block */}
          <rect
            x="16"
            y="228"
            width="408"
            height="148"
            rx="10"
            className="fill-purple-500/10 stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.6"
          />
          <text x="30" y="248" className="fill-purple-700 dark:fill-purple-300 text-xs font-bold">
            轨道 II（亏损类 · 1 个 2×2 Jordan 块 J₂(2)）
          </text>
          <text x="398" y="248" textAnchor="end" className="fill-purple-700 dark:fill-purple-300 text-xs font-mono font-semibold">
            GM(2) = 1
          </text>

          {/* C3 */}
          <rect
            x="28"
            y="260"
            width="106"
            height="62"
            rx="6"
            className="fill-card stroke-purple-500/40"
            strokeWidth="1.2"
          />
          <text x="81" y="276" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            C₃ (满稠密)
          </text>
          <path d="M 55,282 L 50,282 L 50,316 L 55,316" fill="none" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 107,282 L 112,282 L 112,316 L 107,316" fill="none" className="stroke-foreground" strokeWidth="1.2" />
          <text x="67" y="295" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">3</text>
          <text x="95" y="295" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">1</text>
          <text x="67" y="313" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">-1</text>
          <text x="95" y="313" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">1</text>

          {/* Arrow C3 <-> J2(2) */}
          <line
            x1="138"
            y1="291"
            x2="164"
            y2="291"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.6"
            markerStart="url(#l29-arrow-purple)"
            markerEnd="url(#l29-arrow-purple)"
          />
          <text x="151" y="282" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-bold">
            ∼
          </text>

          {/* J2(2) */}
          <rect
            x="168"
            y="260"
            width="104"
            height="62"
            rx="6"
            className="fill-purple-500/15 stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.8"
          />
          <text x="220" y="276" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[10px] font-bold font-mono">
            标准形 J₂(2)
          </text>
          <path d="M 196,282 L 191,282 L 191,316 L 196,316" fill="none" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 244,282 L 249,282 L 249,316 L 244,316" fill="none" className="stroke-foreground" strokeWidth="1.2" />
          <text x="208" y="295" textAnchor="middle" className="fill-foreground text-xs font-mono font-bold">2</text>
          <text x="232" y="295" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-xs font-mono font-bold">1</text>
          <text x="208" y="313" textAnchor="middle" className="fill-foreground text-xs font-mono font-bold">0</text>
          <text x="232" y="313" textAnchor="middle" className="fill-foreground text-xs font-mono font-bold">2</text>

          {/* Arrow J2(2) <-> C4 */}
          <line
            x1="276"
            y1="291"
            x2="302"
            y2="291"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.6"
            markerStart="url(#l29-arrow-purple)"
            markerEnd="url(#l29-arrow-purple)"
          />
          <text x="289" y="282" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-bold">
            ∼
          </text>

          {/* C4 */}
          <rect
            x="306"
            y="260"
            width="106"
            height="62"
            rx="6"
            className="fill-card stroke-purple-500/40"
            strokeWidth="1.2"
          />
          <text x="359" y="276" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            C₄ (下三角)
          </text>
          <path d="M 335,282 L 330,282 L 330,316 L 335,316" fill="none" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 383,282 L 388,282 L 388,316 L 383,316" fill="none" className="stroke-foreground" strokeWidth="1.2" />
          <text x="347" y="295" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">2</text>
          <text x="371" y="295" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">0</text>
          <text x="347" y="313" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">5</text>
          <text x="371" y="313" textAnchor="middle" className="fill-foreground text-xs font-mono font-semibold">2</text>

          <text x="30" y="341" className="fill-foreground text-[11px] font-mono">
            全部满足 rank(Cᵢ - 2I₂) = 1 ⇒ 仅 1 个独立特征向量，皆相似于 J₂(2)
          </text>
          <text x="30" y="357" className="fill-muted-foreground text-[10px] font-mono">
            M = [1, 1; -1, 0] ⇒ M⁻¹C₃M = J₂(2)；  M₄ = [0, 1/5; 1, 0] ⇒ M₄⁻¹C₄M₄ = J₂(2)
          </text>
          <text x="30" y="370" className="fill-muted-foreground text-[10px]">
            （提示：第 3 节正文还将详推 Strang 经典的 tr=8, det=16, λ=4 矩阵族）
          </text>

          {/* Summary Conclusion Box */}
          <rect
            x="16"
            y="386"
            width="408"
            height="42"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/35"
            strokeWidth="1"
          />
          <text x="28" y="403" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-semibold">
            定理结论：特征值 / 迹 / 行列式相等仅为相似的「必要条件」；
          </text>
          <text x="28" y="420" className="fill-foreground text-[11px]">
            充要判据：每个特征值及其 Jordan 块尺寸均匹配
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}

/**
 * L29 Diagram 2: Jordan Canonical Form Block Anatomy & 4x4 Rank-Drop Classification
 * Left panel: 5x5 JCF block structure, superdiagonal 1s, 1-to-1 law (blocks == eigenvectors),
 *   and generalized eigenvector chain v_3 -> v_2 -> v_1 -> 0.
 * Right panel: All 5 integer partitions of 4 (for AM(lambda)=4), showing how rank(B) and rank(B^2)
 *   uniquely distinguish 3+1 from 2+2!
 */
export function JordanCanonicalBlocksStructureDiagram({
  caption = 'Jordan 标准形解剖（左）：$s$ 个 Jordan 块与 $s$ 个独立特征向量一一对应，超对角线 $1$ 串联广义特征向量链；$4\\times 4$ 五种分划鉴别树（右）：当 $\\operatorname{GM}=2$ 无法区分 $3+1$ 与 $2+2$ 时，$\\operatorname{rank}((A-\\lambda I)^2)$ 一锤定音',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 476"
        className="w-full h-auto font-sans select-none"
        aria-label="Jordan标准形分块结构与4x4秩降序列鉴别示意图"
      >
        <defs>
          <marker
            id="l29-j-arrow-blue"
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
            id="l29-j-arrow-emerald"
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
            id="l29-j-arrow-purple"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
        </defs>

        {/* Global Background */}
        <rect
          x="0"
          y="0"
          width="920"
          height="476"
          rx="12"
          className="fill-card/40 stroke-border"
          strokeWidth="1"
        />

        {/* ================= LEFT PANEL: Block Matrix & Chain Anatomy ================= */}
        <g transform="translate(14, 14)">
          <rect
            x="0"
            y="0"
            width="436"
            height="448"
            rx="10"
            className="fill-card/70 stroke-border"
            strokeWidth="1.5"
          />
          <text x="18" y="28" className="fill-foreground text-sm font-semibold">
            左图：Jordan 标准形分块解剖与 1 对 1 定律
          </text>
          <text x="18" y="46" className="fill-muted-foreground text-[11px]">
            M⁻¹ A M = J = diag(J₁, J₂, …, Jₛ)，块外元素严格全为 0
          </text>

          {/* 5x5 Matrix Frame illustrating J3(lambda1) + J2(lambda2) */}
          <g transform="translate(22, 62)">
            {/* Matrix brackets */}
            <path
              d="M 10,0 L 0,0 L 0,165 L 10,165"
              fill="none"
              className="stroke-foreground"
              strokeWidth="2"
            />
            <path
              d="M 176,0 L 186,0 L 186,165 L 176,165"
              fill="none"
              className="stroke-foreground"
              strokeWidth="2"
            />

            {/* Block J3(lambda_1) */}
            <rect
              x="10"
              y="8"
              width="98"
              height="92"
              rx="6"
              className="fill-blue-500/12 stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="1.6"
            />
            <text x="27" y="31" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-bold">
              λ₁
            </text>
            <text x="59" y="31" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-xs font-mono font-bold">
              1
            </text>
            <text x="91" y="31" textAnchor="middle" className="fill-muted-foreground text-xs font-mono">
              0
            </text>

            <text x="27" y="61" textAnchor="middle" className="fill-muted-foreground text-xs font-mono">
              0
            </text>
            <text x="59" y="61" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-bold">
              λ₁
            </text>
            <text x="91" y="61" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-xs font-mono font-bold">
              1
            </text>

            <text x="27" y="91" textAnchor="middle" className="fill-muted-foreground text-xs font-mono">
              0
            </text>
            <text x="59" y="91" textAnchor="middle" className="fill-muted-foreground text-xs font-mono">
              0
            </text>
            <text x="91" y="91" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-bold">
              λ₁
            </text>

            {/* Block J2(lambda_2) */}
            <rect
              x="112"
              y="102"
              width="64"
              height="56"
              rx="6"
              className="fill-emerald-500/12 stroke-emerald-600 dark:stroke-emerald-400"
              strokeWidth="1.6"
            />
            <text x="129" y="124" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-mono font-bold">
              λ₂
            </text>
            <text x="160" y="124" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-xs font-mono font-bold">
              1
            </text>
            <text x="129" y="149" textAnchor="middle" className="fill-muted-foreground text-xs font-mono">
              0
            </text>
            <text x="160" y="149" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-mono font-bold">
              λ₂
            </text>

            {/* Zero regions */}
            <text x="144" y="58" textAnchor="middle" className="fill-muted-foreground text-base font-mono">
              0
            </text>
            <text x="58" y="138" textAnchor="middle" className="fill-muted-foreground text-base font-mono">
              0
            </text>
          </g>

          {/* Annotations next to Matrix */}
          <g transform="translate(218, 62)">
            <rect
              x="0"
              y="0"
              width="202"
              height="165"
              rx="8"
              className="fill-muted/25 stroke-border"
              strokeWidth="1"
            />
            <text x="12" y="22" className="fill-foreground text-xs font-semibold">
              核心 1 对 1 定律 (1-to-1 Law)
            </text>
            <text x="12" y="44" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-medium">
              • J₃(λ₁) (3×3): rank(J₃ - λ₁I) = 2
            </text>
            <text x="20" y="61" className="fill-foreground text-[11px]">
              ⇒ 在 J 中贡献特征方向 e₁
            </text>
            <text x="12" y="84" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-medium">
              • J₂(λ₂) (2×2): rank(J₂ - λ₂I) = 1
            </text>
            <text x="20" y="101" className="fill-foreground text-[11px]">
              ⇒ 在 J 中贡献特征方向 e₄
            </text>
            <line x1="12" y1="114" x2="190" y2="114" className="stroke-border" strokeWidth="1" />
            <text x="12" y="133" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-bold">
              ★ 每块的特征空间为一维
            </text>
            <text x="12" y="151" className="fill-foreground text-[11px]">
              Jordan 块总数 s ≡ 无关特征向量总数
            </text>
          </g>

          {/* Bottom Half of Left Panel: Generalized Eigenvector Chain */}
          <rect
            x="16"
            y="244"
            width="404"
            height="190"
            rx="8"
            className="fill-purple-500/5 stroke-purple-500/30"
            strokeWidth="1.2"
          />
          <text x="28" y="266" className="fill-purple-700 dark:fill-purple-300 text-xs font-semibold">
            超对角线 1 的机制：J₃(λ₁) 的广义特征向量链 (Jordan Chain)
          </text>
          <text x="28" y="284" className="fill-muted-foreground text-[11px] font-mono">
            A v₁ = λ₁ v₁,   A v₂ = λ₁ v₂ + v₁,   A v₃ = λ₁ v₃ + v₂
          </text>

          {/* Chain Nodes: v3 -> v2 -> v1 -> 0 */}
          <rect
            x="28"
            y="298"
            width="78"
            height="44"
            rx="7"
            className="fill-purple-500/15 stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.4"
          />
          <text x="67" y="317" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-xs font-mono font-bold">
            v₃ (3 阶)
          </text>
          <text x="67" y="334" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            广义向量
          </text>

          <line
            x1="108"
            y1="320"
            x2="138"
            y2="320"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="1.8"
            markerEnd="url(#l29-j-arrow-purple)"
          />
          <text x="123" y="311" textAnchor="middle" className="fill-foreground text-[9px] font-mono">
            A−λ₁I
          </text>

          <rect
            x="142"
            y="298"
            width="78"
            height="44"
            rx="7"
            className="fill-blue-500/15 stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.4"
          />
          <text x="181" y="317" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-bold">
            v₂ (2 阶)
          </text>
          <text x="181" y="334" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            广义向量
          </text>

          <line
            x1="222"
            y1="320"
            x2="252"
            y2="320"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="1.8"
            markerEnd="url(#l29-j-arrow-blue)"
          />
          <text x="237" y="311" textAnchor="middle" className="fill-foreground text-[9px] font-mono">
            A−λ₁I
          </text>

          <rect
            x="256"
            y="298"
            width="86"
            height="44"
            rx="7"
            className="fill-emerald-500/15 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.8"
          />
          <text x="299" y="317" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-mono font-bold">
            v₁ (1 阶)
          </text>
          <text x="299" y="334" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-semibold">
            真特征向量
          </text>

          <line
            x1="344"
            y1="320"
            x2="372"
            y2="320"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.8"
            markerEnd="url(#l29-j-arrow-emerald)"
          />
          <text x="358" y="311" textAnchor="middle" className="fill-foreground text-[9px] font-mono">
            A−λ₁I
          </text>

          <circle
            cx="392"
            cy="320"
            r="16"
            className="fill-muted/50 stroke-border"
            strokeWidth="1.4"
          />
          <text x="392" y="324" textAnchor="middle" className="fill-foreground text-xs font-mono font-bold">
            𝟎
          </text>

          {/* Dynamics Note under chain */}
          <rect
            x="28"
            y="354"
            width="380"
            height="68"
            rx="6"
            className="fill-card stroke-border"
            strokeWidth="1"
          />
          <text x="40" y="372" className="fill-foreground text-[11px] font-medium">
            动力学意义（超对角线 1 催生多项式增长因子 t e^(λt)）：
          </text>
          <text x="40" y="389" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono">
            J₂(λ)ᵏ = [λᵏ, kλᵏ⁻¹; 0, λᵏ],   e^(J₂(λ)t) = e^(λt) [1, t; 0, 1]
          </text>
          <text x="40" y="405" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono">
            J₃(λ) 含 ½k(k-1)λᵏ⁻² 与 ½t²e^(λt)  (共振级数增长!)
          </text>
          <text x="40" y="418" className="fill-muted-foreground text-[10px]">
            可对角化 ⇔ 所有块均为 1×1（s = n，无超对角线 1）
          </text>
        </g>

        {/* ================= RIGHT PANEL: 5 Partitions of 4 & Rank Sequence ================= */}
        <g transform="translate(464, 14)">
          <rect
            x="0"
            y="0"
            width="442"
            height="448"
            rx="10"
            className="fill-card/70 stroke-border"
            strokeWidth="1.5"
          />
          <text x="18" y="28" className="fill-foreground text-sm font-semibold">
            右图：4×4 矩阵（AM(λ)=4）的 5 种 Jordan 分划与秩降鉴别
          </text>
          <text x="18" y="46" className="fill-muted-foreground text-[11px] font-mono">
            记幂零偏移 B = A - λI₄；逐次计算 rank(Bᵐ) 唯一锁定所有块大小
          </text>

          {/* Table Header */}
          <rect
            x="16"
            y="58"
            width="410"
            height="24"
            rx="5"
            className="fill-muted/50"
          />
          <text x="26" y="74" className="fill-foreground text-[11px] font-semibold">
            块尺寸分划
          </text>
          <text x="128" y="74" className="fill-foreground text-[11px] font-semibold">
            块数 = GM
          </text>
          <text x="208" y="74" className="fill-foreground text-[11px] font-semibold font-mono">
            rank(B), rank(B²), rank(B³), rank(B⁴)
          </text>

          {/* Row 1: 4 */}
          <rect
            x="16"
            y="88"
            width="410"
            height="46"
            rx="7"
            className="fill-rose-500/8 stroke-rose-500/30"
            strokeWidth="1.1"
          />
          <text x="26" y="108" className="fill-rose-700 dark:fill-rose-300 text-xs font-bold font-mono">
            4 : J₄(λ)
          </text>
          <text x="26" y="124" className="fill-muted-foreground text-[10px]">
            单条 4 阶长链
          </text>
          <text x="155" y="114" textAnchor="middle" className="fill-foreground text-xs font-mono font-bold">
            1
          </text>
          <text x="208" y="108" className="fill-foreground text-xs font-mono font-semibold">
            3  →  2  →  1  →  0
          </text>
          <text x="208" y="124" className="fill-muted-foreground text-[10px]">
            最亏损（仅 1 个真特征向量）
          </text>

          {/* Highlighted Pair: 3+1 vs 2+2 */}
          <rect
            x="12"
            y="140"
            width="418"
            height="128"
            rx="9"
            className="fill-amber-500/6 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />

          {/* Row 2: 3+1 */}
          <rect
            x="20"
            y="148"
            width="402"
            height="46"
            rx="6"
            className="fill-card stroke-purple-500/40"
            strokeWidth="1.1"
          />
          <text x="28" y="168" className="fill-purple-700 dark:fill-purple-300 text-xs font-bold font-mono">
            3+1 : J₃⊕J₁
          </text>
          <text x="28" y="184" className="fill-muted-foreground text-[10px]">
            3 阶链 + 1 阶点
          </text>
          <text x="155" y="174" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-xs font-mono font-bold">
            2
          </text>
          <text x="208" y="168" className="fill-foreground text-xs font-mono font-semibold">
            2  →  1  →  0  →  0
          </text>
          <text x="208" y="184" className="fill-purple-700 dark:fill-purple-300 text-[10px] font-semibold">
            rank(B²) = 1 ≠ 0（存在 3 阶块！）
          </text>

          {/* Row 3: 2+2 */}
          <rect
            x="20"
            y="200"
            width="402"
            height="46"
            rx="6"
            className="fill-card stroke-blue-500/40"
            strokeWidth="1.1"
          />
          <text x="28" y="220" className="fill-blue-700 dark:fill-blue-300 text-xs font-bold font-mono">
            2+2 : J₂⊕J₂
          </text>
          <text x="28" y="236" className="fill-muted-foreground text-[10px]">
            两条独立 2 阶链
          </text>
          <text x="155" y="226" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-xs font-mono font-bold">
            2
          </text>
          <text x="208" y="220" className="fill-foreground text-xs font-mono font-semibold">
            2  →  0  →  0  →  0
          </text>
          <text x="208" y="236" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-semibold">
            rank(B²) = 0（最大块高不超过 2！）
          </text>

          <text x="221" y="261" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-bold">
            ▲ 关键警醒：3+1 与 2+2 的 GM(λ)=2 完全相同！必须计算 rank(B²) 才能分辨 ▲
          </text>

          {/* Row 4: 2+1+1 */}
          <rect
            x="16"
            y="274"
            width="410"
            height="44"
            rx="7"
            className="fill-muted/25 stroke-border"
            strokeWidth="1"
          />
          <text x="26" y="293" className="fill-foreground text-xs font-bold font-mono">
            2+1+1
          </text>
          <text x="26" y="309" className="fill-muted-foreground text-[10px]">
            J₂ ⊕ J₁ ⊕ J₁
          </text>
          <text x="155" y="300" textAnchor="middle" className="fill-foreground text-xs font-mono font-bold">
            3
          </text>
          <text x="208" y="293" className="fill-foreground text-xs font-mono font-semibold">
            1  →  0  →  0  →  0
          </text>
          <text x="208" y="309" className="fill-muted-foreground text-[10px]">
            3 个线性无关的特征向量
          </text>

          {/* Row 5: 1+1+1+1 */}
          <rect
            x="16"
            y="324"
            width="410"
            height="44"
            rx="7"
            className="fill-emerald-500/10 stroke-emerald-500/40"
            strokeWidth="1.2"
          />
          <text x="26" y="343" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-bold font-mono">
            1+1+1+1
          </text>
          <text x="26" y="359" className="fill-emerald-700 dark:fill-emerald-300 text-[10px]">
            λI₄（可对角化！）
          </text>
          <text x="155" y="350" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-mono font-bold">
            4
          </text>
          <text x="208" y="343" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-mono font-semibold">
            0  →  0  →  0  →  0
          </text>
          <text x="208" y="359" className="fill-muted-foreground text-[10px]">
            GM = AM = 4，拥有 4 个无关特征向量
          </text>

          {/* Weyr Characteristic Formula Card */}
          <rect
            x="16"
            y="376"
            width="410"
            height="60"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/30"
            strokeWidth="1.1"
          />
          <text x="28" y="395" className="fill-blue-700 dark:fill-blue-300 text-xs font-semibold">
            精确计数法则（Weyr 特征数）：由秩降序列反推每个块的尺寸
          </text>
          <text x="28" y="413" className="fill-foreground text-[11px] font-mono">
            Δₘ = rank(Bᵐ⁻¹) - rank(Bᵐ) = 尺寸 ≥ m 的块总数  (B⁰ = I)
          </text>
          <text x="28" y="429" className="fill-muted-foreground text-[10.5px] font-mono">
            尺寸恰为 m 的块数 bₘ = Δₘ - Δₘ₊₁  (3+1 例: Δ=2,1,1,0 ⇒ b₁=1,b₃=1)
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
