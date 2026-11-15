import * as React from 'react';
import { MathDiagram } from './math-diagram';

/**
 * L26 Diagram 1: Real Spectral Theorem & Rank-1 Orthogonal Projections
 * Visualizes A = Q Λ Qᵀ = ∑ λ_i q_i q_iᵀ on A = [[3, 1], [1, 3]] acting on x = [1, 3]ᵀ.
 */
export function SpectralRankOneProjectionsDiagram({
  caption = '实对称矩阵的谱分解几何：任意向量 $\\mathbf{x}$ 先经由正交秩 1 投影 $P_i = \\mathbf{q}_i\\mathbf{q}_i^T$ 分解至互斥正交的特征轴上，再分别纯伸缩实数倍 $\\lambda_i$ 并重组为 $A\\mathbf{x} = \\sum \\lambda_i P_i \\mathbf{x}$',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        aria-label="实对称矩阵谱分解与正交秩1投影示意图"
      >
        <defs>
          <marker
            id="l26-arrow-slate"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-foreground/70" />
          </marker>
          <marker
            id="l26-arrow-muted"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-muted-foreground" />
          </marker>
          <marker
            id="l26-arrow-blue"
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
            id="l26-arrow-purple"
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
            id="l26-arrow-emerald"
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
            id="l26-arrow-amber"
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

        {/* ================= 左面板：Step 1 正交秩 1 投影分解 ================= */}
        <g>
          <rect
            x="16"
            y="16"
            width="426"
            height="408"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          <text x="34" y="44" className="fill-foreground text-sm font-semibold">
            Step 1：正交秩 1 投影分解 x = P₁x + P₂x
          </text>
          <text x="34" y="64" className="fill-muted-foreground text-[11px]">
            A = [3 1; 1 3] 的单位特征基 q₁ ⊥ q₂，将输入向量正交拆分到两特征轴
          </text>

          {/* 坐标平面底框 */}
          <rect
            x="32"
            y="78"
            width="394"
            height="266"
            rx="8"
            className="fill-muted/15 stroke-border/60"
            strokeWidth="1"
          />

          {/* 坐标原点 O = (205, 295), 1 unit = 38px */}
          {/* 标准坐标参考细线 */}
          <line x1="65" y1="295" x2="385" y2="295" className="stroke-border" strokeWidth="1" />
          <line x1="205" y1="92" x2="205" y2="334" className="stroke-border" strokeWidth="1" />
          <text x="389" y="299" className="fill-muted-foreground text-[10px] font-mono">
            x₁
          </text>
          <text x="200" y="88" className="fill-muted-foreground text-[10px] font-mono">
            x₂
          </text>

          {/* 特征轴 span{q1} 与 span{q2} 延伸线 */}
          <line
            x1="159"
            y1="341"
            x2="346"
            y2="154"
            className="stroke-blue-500/35 dark:stroke-blue-400/35"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1="251"
            y1="341"
            x2="110"
            y2="200"
            className="stroke-purple-500/35 dark:stroke-purple-400/35"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* 原点处 q1 ⊥ q2 旋转直角符号 */}
          <polyline
            points="212,288 205,281 198,288"
            fill="none"
            className="stroke-foreground/60"
            strokeWidth="1.3"
          />
          <text x="184" y="318" className="fill-foreground text-[11px] font-mono">
            q₁ ⊥ q₂
          </text>

          {/* 虚线投影垂线：x=[1,3]ᵀ -> (243, 181), P1x=[2,2]ᵀ -> (281, 219), P2x=[-1,1]ᵀ -> (167, 257) */}
          <line
            x1="243"
            y1="181"
            x2="281"
            y2="219"
            className="stroke-foreground/45"
            strokeWidth="1.3"
            strokeDasharray="3 3"
          />
          <line
            x1="243"
            y1="181"
            x2="167"
            y2="257"
            className="stroke-foreground/45"
            strokeWidth="1.3"
            strokeDasharray="3 3"
          />

          {/* 投影点 P1x 与 P2x 处直角符号 */}
          <polyline
            points="275,213 269,219 275,225"
            fill="none"
            className="stroke-blue-600/60 dark:stroke-blue-400/60"
            strokeWidth="1.1"
          />
          <polyline
            points="173,251 179,257 173,263"
            fill="none"
            className="stroke-purple-600/60 dark:stroke-purple-400/60"
            strokeWidth="1.1"
          />

          {/* 投影向量 P1x = [2, 2]ᵀ */}
          <line
            x1="205"
            y1="295"
            x2="278"
            y2="222"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.4"
            markerEnd="url(#l26-arrow-blue)"
          />
          <circle cx="281" cy="219" r="3" className="fill-blue-600 dark:fill-blue-400" />
          <text x="289" y="223" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-semibold">
            P₁x = [2, 2]ᵀ
          </text>

          {/* 投影向量 P2x = [-1, 1]ᵀ */}
          <line
            x1="205"
            y1="295"
            x2="170"
            y2="260"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.4"
            markerEnd="url(#l26-arrow-purple)"
          />
          <circle cx="167" cy="257" r="3" className="fill-purple-600 dark:fill-purple-400" />
          <text x="64" y="254" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono font-semibold">
            P₂x = [-1, 1]ᵀ
          </text>

          {/* 单位特征向量 q1, q2 */}
          <line
            x1="205"
            y1="295"
            x2="230"
            y2="270"
            className="stroke-blue-700 dark:stroke-blue-300"
            strokeWidth="2.8"
            markerEnd="url(#l26-arrow-blue)"
          />
          <text x="240" y="278" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">
            q₁
          </text>

          <line
            x1="205"
            y1="295"
            x2="180"
            y2="270"
            className="stroke-purple-700 dark:stroke-purple-300"
            strokeWidth="2.8"
            markerEnd="url(#l26-arrow-purple)"
          />
          <text x="155" y="280" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-mono font-bold">
            q₂
          </text>

          {/* 输入向量 x = [1, 3]ᵀ */}
          <line
            x1="205"
            y1="295"
            x2="241"
            y2="186"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.8"
            markerEnd="url(#l26-arrow-amber)"
          />
          <text x="249" y="177" className="fill-amber-700 dark:fill-amber-300 text-xs font-mono font-bold">
            x = [1, 3]ᵀ
          </text>

          {/* 左下角公式汇总栏 */}
          <rect
            x="32"
            y="354"
            width="394"
            height="56"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/30"
            strokeWidth="1"
          />
          <text x="46" y="376" className="fill-foreground text-[11px] font-mono">
            P₁ = q₁q₁ᵀ = ½[1 1; 1 1],   P₂ = q₂q₂ᵀ = ½[1 -1; -1 1]
          </text>
          <text x="46" y="397" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-semibold">
            P₁ + P₂ = I₂,  P₁P₂ = 0  ⇒  x = P₁x + P₂x
          </text>
        </g>

        {/* ================= 中间连接箭头：特征值纯伸缩 ================= */}
        <g>
          <line
            x1="444"
            y1="210"
            x2="474"
            y2="210"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.5"
            markerEnd="url(#l26-arrow-emerald)"
          />
          <rect
            x="434"
            y="168"
            width="52"
            height="32"
            rx="6"
            className="fill-emerald-500/15 stroke-emerald-500/40"
            strokeWidth="1"
          />
          <text x="460" y="182" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
            λ₁=4
          </text>
          <text x="460" y="194" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
            λ₂=2
          </text>
        </g>

        {/* ================= 右面板：Step 2 沿特征轴实数伸缩与重构 ================= */}
        <g>
          <rect
            x="478"
            y="16"
            width="426"
            height="408"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          <text x="496" y="44" className="fill-foreground text-sm font-semibold">
            Step 2：沿特征轴纯伸缩并重装 Ax = λ₁P₁x + λ₂P₂x
          </text>
          <text x="496" y="64" className="fill-muted-foreground text-[11px]">
            无旋转无剪切：将正交分量分别放大 λ₁ = 4 倍与 λ₂ = 2 倍后直接相加
          </text>

          {/* 坐标平面底框 */}
          <rect
            x="494"
            y="78"
            width="394"
            height="266"
            rx="8"
            className="fill-muted/15 stroke-border/60"
            strokeWidth="1"
          />

          {/* 坐标原点 O = (635, 322), 1 unit = 19px */}
          <line x1="510" y1="322" x2="870" y2="322" className="stroke-border" strokeWidth="1" />
          <line x1="635" y1="92" x2="635" y2="336" className="stroke-border" strokeWidth="1" />
          <text x="874" y="326" className="fill-muted-foreground text-[10px] font-mono">
            x₁
          </text>
          <text x="630" y="88" className="fill-muted-foreground text-[10px] font-mono">
            x₂
          </text>

          {/* 特征轴延伸线 */}
          <line
            x1="618"
            y1="339"
            x2="810"
            y2="147"
            className="stroke-blue-500/30 dark:stroke-blue-400/30"
            strokeWidth="1.3"
            strokeDasharray="4 4"
          />
          <line
            x1="652"
            y1="339"
            x2="570"
            y2="257"
            className="stroke-purple-500/30 dark:stroke-purple-400/30"
            strokeWidth="1.3"
            strokeDasharray="4 4"
          />

          {/* 原始输入轮廓参考 (虚线小矩形: P1x=(673,284), P2x=(616,303), x=(654,265)) */}
          <polygon
            points="635,322 673,284 654,265 616,303"
            className="fill-amber-500/10 stroke-amber-500/45"
            strokeWidth="1.1"
            strokeDasharray="2 2"
          />
          <line
            x1="635"
            y1="322"
            x2="654"
            y2="265"
            className="stroke-amber-600/55 dark:stroke-amber-400/55"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          <text x="661" y="264" className="fill-amber-700/80 dark:fill-amber-300/80 text-[10px] font-mono">
            原 x
          </text>

          {/* 拉伸后虚线矩形：λ1P1x=[8,8]ᵀ -> (787, 170), λ2P2x=[-2,2]ᵀ -> (597, 284), Ax=[6,10]ᵀ -> (749, 132) */}
          <line
            x1="787"
            y1="170"
            x2="749"
            y2="132"
            className="stroke-foreground/45"
            strokeWidth="1.3"
            strokeDasharray="3 3"
          />
          <line
            x1="597"
            y1="284"
            x2="749"
            y2="132"
            className="stroke-foreground/45"
            strokeWidth="1.3"
            strokeDasharray="3 3"
          />

          {/* 拉伸后分量 λ1 P1x = [8, 8]ᵀ */}
          <line
            x1="635"
            y1="322"
            x2="783"
            y2="174"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.6"
            markerEnd="url(#l26-arrow-blue)"
          />
          <circle cx="787" cy="170" r="3" className="fill-blue-600 dark:fill-blue-400" />
          <text x="790" y="186" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-semibold">
            λ₁P₁x = [8, 8]ᵀ
          </text>

          {/* 拉伸后分量 λ2 P2x = [-2, 2]ᵀ */}
          <line
            x1="635"
            y1="322"
            x2="601"
            y2="288"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.6"
            markerEnd="url(#l26-arrow-purple)"
          />
          <circle cx="597" cy="284" r="3" className="fill-purple-600 dark:fill-purple-400" />
          <text x="512" y="278" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono font-semibold">
            λ₂P₂x
          </text>
          <text x="512" y="293" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono">
            = [-2, 2]ᵀ
          </text>

          {/* 重构向量 Ax = [6, 10]ᵀ */}
          <line
            x1="635"
            y1="322"
            x2="746"
            y2="137"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="3"
            markerEnd="url(#l26-arrow-emerald)"
          />
          <circle cx="749" cy="132" r="3.5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="756" y="128" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-bold">
            Ax = [6, 10]ᵀ
          </text>

          {/* 右下角谱公式栏 */}
          <rect
            x="494"
            y="354"
            width="394"
            height="56"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/35"
            strokeWidth="1"
          />
          <text x="508" y="376" className="fill-foreground text-[11px] font-mono">
            A = Q Λ Qᵀ = λ₁(q₁q₁ᵀ) + λ₂(q₂q₂ᵀ) = 4P₁ + 2P₂
          </text>
          <text x="508" y="397" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-semibold">
            Ax = 4[2, 2]ᵀ + 2[-1, 1]ᵀ = [8, 8]ᵀ + [-2, 2]ᵀ = [6, 10]ᵀ
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}

/**
 * L26 Diagram 2: Sylvester's Law of Inertia (LDLᵀ Pivots vs QΛQᵀ Eigenvalues)
 */
export function SylvesterInertiaSignMatchDiagram({
  caption = 'Sylvester 惯性定理直观对比：消元主元 $D$ 不同于特征值 $\\Lambda$，但在可逆合同路径 $A(t) = L_t^{-1} A (L_t^{-1})^T$ 下特征值绝不跨过零点，故正/负/零的个数严格守恒',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        aria-label="Sylvester惯性定理主元与特征值符号守恒示意图"
      >
        <defs>
          <marker
            id="l26-s-arrow-blue"
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
            id="l26-s-arrow-emerald"
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
            id="l26-s-arrow-rose"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* ================= 顶部左卡：A = L D Lᵀ 消元主元路径 ================= */}
        <g>
          <rect
            x="16"
            y="16"
            width="426"
            height="224"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="34" y="44" className="fill-foreground text-sm font-semibold">
            1. 消元分解：A = L D Lᵀ （非正交合同变换）
          </text>

          <rect
            x="34"
            y="56"
            width="390"
            height="48"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/30"
            strokeWidth="1"
          />
          <text x="48" y="76" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-semibold">
            D = L⁻¹ A (L⁻¹)ᵀ,   det(L) = 1 （单位下三角，Lᵀ ≠ L⁻¹）
          </text>
          <text x="48" y="95" className="fill-muted-foreground text-[11px]">
            计算极快 O(n³/3)，直接暴露消元主元 d₁, ..., dₙ
          </text>

          {/* 数值例 */}
          <rect
            x="34"
            y="114"
            width="390"
            height="84"
            rx="8"
            className="fill-muted/20 stroke-border/70"
            strokeWidth="1"
          />
          <text x="48" y="135" className="fill-foreground text-xs font-mono">
            2×2 例 A = [1 2; 2 1]  ⇒  主元 d = (+1, -3)
          </text>
          <text x="48" y="158" className="fill-foreground text-xs font-mono">
            3×3 例 B = [1 2 2; 2 3 0; 2 0 3]
          </text>
          <text x="48" y="180" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-bold">
            ⇒  主元 d = (+1, -1, +15),  乘积 = -15
          </text>

          <text x="34" y="222" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-medium">
            ⚠ 数值不保真：tr(D) = 15 ≠ tr(B) = 7，主元 ≠ 特征值！
          </text>
        </g>

        {/* ================= 中间连接符号 ================= */}
        <g>
          <rect
            x="447"
            y="96"
            width="26"
            height="64"
            rx="6"
            className="fill-purple-500/15 stroke-purple-500/40"
            strokeWidth="1"
          />
          <text x="460" y="124" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-sm font-bold">
            ⇔
          </text>
          <text x="460" y="141" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[10px] font-medium">
            符号
          </text>
          <text x="460" y="153" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[10px] font-medium">
            守恒
          </text>
        </g>

        {/* ================= 顶部右卡：A = Q Λ Qᵀ 正交谱路径 ================= */}
        <g>
          <rect
            x="478"
            y="16"
            width="426"
            height="224"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="496" y="44" className="fill-foreground text-sm font-semibold">
            2. 谱分解：A = Q Λ Qᵀ （正交相似兼合同变换）
          </text>

          <rect
            x="496"
            y="56"
            width="390"
            height="48"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/30"
            strokeWidth="1"
          />
          <text x="510" y="76" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-mono font-semibold">
            Λ = Qᵀ A Q = Q⁻¹ A Q （正交矩阵，Qᵀ = Q⁻¹）
          </text>
          <text x="510" y="95" className="fill-muted-foreground text-[11px]">
            既保特征值又保几何长度，暴露矩阵真实主轴伸缩 λ₁, ..., λₙ
          </text>

          {/* 数值例 */}
          <rect
            x="496"
            y="114"
            width="390"
            height="84"
            rx="8"
            className="fill-muted/20 stroke-border/70"
            strokeWidth="1"
          />
          <text x="510" y="135" className="fill-foreground text-xs font-mono">
            2×2 例 A = [1 2; 2 1]  ⇒  特征值 λ = (+3, -1)
          </text>
          <text x="510" y="158" className="fill-foreground text-xs font-mono">
            3×3 例 B = [1 2 2; 2 3 0; 2 0 3]
          </text>
          <text x="510" y="180" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-bold">
            ⇒  特征值 λ = (+5, +3, -1),  乘积 = -15
          </text>

          <text x="496" y="222" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-medium">
            ✓ 几何全保真：tr(Λ) = 7 = tr(B)，det(D) = det(B) = det(Λ) = -15
          </text>
        </g>

        {/* ================= 底部全局面板：Sylvester 惯性定理连续同伦 + 符号对照表 ================= */}
        <g>
          <rect
            x="16"
            y="256"
            width="888"
            height="168"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          {/* 底部左半部分：连续同伦不跨零轨迹图 */}
          <text x="34" y="282" className="fill-foreground text-xs font-semibold">
            连续同伦机制：L_t = (1-t)I + tL 保持 det(L_t) = 1，故 A(t) 特征值永不跨过 0！
          </text>

          {/* 坐标框 */}
          <rect
            x="34"
            y="294"
            width="430"
            height="114"
            rx="8"
            className="fill-muted/15 stroke-border/60"
            strokeWidth="1"
          />

          {/* 零点禁区线 y = 374 */}
          <line
            x1="54"
            y1="374"
            x2="444"
            y2="374"
            className="stroke-rose-500/70 dark:stroke-rose-400/70"
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />
          <text x="206" y="368" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-medium">
            λ = 0 禁区（秩不变 ⇒ 不可穿越）
          </text>

          {/* 左右竖轴 t=0 与 t=1 */}
          <line x1="92" y1="302" x2="92" y2="393" className="stroke-foreground/40" strokeWidth="1.2" />
          <line x1="406" y1="302" x2="406" y2="393" className="stroke-foreground/40" strokeWidth="1.2" />
          <text x="92" y="404" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            t=0 (Λ)
          </text>
          <text x="406" y="404" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            t=1 (D)
          </text>

          {/* 正特征值轨迹 1: +5 -> +15 */}
          <path
            d="M 92 322 C 190 316, 300 311, 406 307"
            fill="none"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.2"
          />
          <circle cx="92" cy="322" r="3.5" className="fill-emerald-600 dark:fill-emerald-400" />
          <circle cx="406" cy="307" r="3.5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="58" y="325" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
            +5
          </text>
          <text x="414" y="310" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
            +15
          </text>

          {/* 正特征值轨迹 2: +3 -> +1 */}
          <path
            d="M 92 342 C 190 345, 300 350, 406 353"
            fill="none"
            className="stroke-emerald-500 dark:stroke-emerald-300"
            strokeWidth="2.2"
          />
          <circle cx="92" cy="342" r="3.5" className="fill-emerald-500 dark:fill-emerald-300" />
          <circle cx="406" cy="353" r="3.5" className="fill-emerald-500 dark:fill-emerald-300" />
          <text x="58" y="345" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
            +3
          </text>
          <text x="414" y="356" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
            +1
          </text>

          {/* 负特征值轨迹 3: -1 -> -1 */}
          <path
            d="M 92 385 C 190 391, 300 389, 406 385"
            fill="none"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="2.2"
          />
          <circle cx="92" cy="385" r="3.5" className="fill-rose-600 dark:fill-rose-400" />
          <circle cx="406" cy="385" r="3.5" className="fill-rose-600 dark:fill-rose-400" />
          <text x="58" y="388" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono font-bold">
            -1
          </text>
          <text x="414" y="388" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono font-bold">
            -1
          </text>

          {/* 底部右半部分：惯性指数汇总对照表 */}
          <text x="488" y="282" className="fill-foreground text-xs font-semibold">
            Sylvester 惯性指数 (n₊, n₋, n₀) 精确对照表
          </text>

          <rect
            x="488"
            y="294"
            width="398"
            height="114"
            rx="8"
            className="fill-muted/15 stroke-border/70"
            strokeWidth="1"
          />

          {/* 表头行 */}
          <rect x="488" y="294" width="398" height="26" rx="8" className="fill-muted/40" />
          <line x1="488" y1="320" x2="886" y2="320" className="stroke-border/70" strokeWidth="1" />
          <text x="502" y="311" className="fill-foreground text-[11px] font-semibold">
            矩阵
          </text>
          <text x="572" y="311" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-semibold">
            主元 D
          </text>
          <text x="668" y="311" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-semibold">
            特征值 Λ
          </text>
          <text x="766" y="311" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-semibold">
            惯性 (n₊, n₋, n₀)
          </text>

          {/* 第 1 行：2x2 A */}
          <text x="502" y="341" className="fill-foreground text-[11px] font-mono">
            2×2 A
          </text>
          <text x="572" y="341" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono">
            +1, -3
          </text>
          <text x="668" y="341" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-mono">
            +3, -1
          </text>
          <text x="766" y="341" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-semibold">
            (1, 1, 0) 相等
          </text>

          <line x1="496" y1="351" x2="878" y2="351" className="stroke-border/45" strokeWidth="1" />

          {/* 第 2 行：3x3 B */}
          <text x="502" y="371" className="fill-foreground text-[11px] font-mono">
            3×3 B
          </text>
          <text x="572" y="371" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono">
            +1, -1, +15
          </text>
          <text x="668" y="371" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-mono">
            +5, +3, -1
          </text>
          <text x="766" y="371" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-semibold">
            (2, 1, 0) 相等
          </text>

          <line x1="496" y1="381" x2="878" y2="381" className="stroke-border/45" strokeWidth="1" />

          {/* 第 3 行：正定特例 */}
          <text x="502" y="400" className="fill-foreground text-[11px] font-medium">
            正定阵
          </text>
          <text x="572" y="400" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono">
            全 dᵢ &gt; 0
          </text>
          <text x="668" y="400" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-mono">
            全 λᵢ &gt; 0
          </text>
          <text x="766" y="400" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-mono font-bold">
            (n, 0, 0) ⇔ SPD
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
