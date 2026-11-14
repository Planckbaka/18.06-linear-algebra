import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function Module2And3SynthesisMapDiagram({
  caption = '图 25-1：模块二与模块三全局全景知识图谱——从正交投影、几何体积到谱分解与动力系统稳定性的宏观综合',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 920 460"
        className="w-full h-auto font-sans select-none"
        aria-label="模块二与模块三全局全景知识图谱"
      >
        <defs>
          {/* Arrow markers */}
          <marker
            id="l25-arrow-blue"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l25-arrow-amber"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l25-arrow-emerald"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l25-arrow-purple"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l25-arrow-muted"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 1 L 7 4 L 1 7 Z" className="fill-muted-foreground" />
          </marker>
        </defs>

        {/* Global Canvas Background */}
        <rect
          x="0"
          y="0"
          width="920"
          height="460"
          rx="12"
          className="fill-card/40 stroke-border"
          strokeWidth="1"
        />

        {/* Column 1 Background Highlight: Module II */}
        <rect
          x="14"
          y="12"
          width="282"
          height="436"
          rx="10"
          className="fill-blue-500/5 stroke-blue-500/20"
          strokeWidth="1"
        />
        {/* Column 2 Background Highlight: Determinants Gateway */}
        <rect
          x="306"
          y="12"
          width="282"
          height="436"
          rx="10"
          className="fill-amber-500/5 stroke-amber-500/20"
          strokeWidth="1"
        />
        {/* Column 3 Background Highlight: Module III */}
        <rect
          x="598"
          y="12"
          width="308"
          height="436"
          rx="10"
          className="fill-emerald-500/5 stroke-emerald-500/20"
          strokeWidth="1"
        />

        {/* Column Header Banners */}
        <g>
          {/* Header 1 */}
          <rect x="24" y="20" width="262" height="26" rx="6" className="fill-blue-600/15 dark:fill-blue-400/20" />
          <text x="155" y="37" textAnchor="middle" className="text-xs font-bold fill-blue-700 dark:fill-blue-300">
            模块二：正交性与投影几何 (Module II)
          </text>

          {/* Header 2 */}
          <rect x="316" y="20" width="262" height="26" rx="6" className="fill-amber-600/15 dark:fill-amber-400/20" />
          <text x="447" y="37" textAnchor="middle" className="text-xs font-bold fill-amber-700 dark:fill-amber-300">
            桥梁枢纽：行列式与体积网关 (Determinants)
          </text>

          {/* Header 3 */}
          <rect x="608" y="20" width="288" height="26" rx="6" className="fill-emerald-600/15 dark:fill-emerald-400/20" />
          <text x="752" y="37" textAnchor="middle" className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300">
            模块三：谱分解与动力系统 (Module III)
          </text>
        </g>

        {/* ==================== COLUMN 1: MODULE II CARDS ==================== */}

        {/* Card 1: Four Subspaces */}
        <g>
          <rect
            x="24"
            y="54"
            width="262"
            height="72"
            rx="8"
            className="fill-card stroke-blue-500/40"
            strokeWidth="1.2"
          />
          <text x="34" y="72" className="text-xs font-semibold fill-blue-700 dark:fill-blue-300">
            四大子空间正交补分解 (Four Subspaces)
          </text>
          <text x="34" y="90" className="font-mono text-[11px] fill-foreground">
            Row(A) &#8869; Null(A) in &#8477;&#8319;
          </text>
          <text x="34" y="106" className="font-mono text-[11px] fill-foreground">
            Col(A) &#8869; Null(A&#7511;) in &#8477;&#7504;
          </text>
          <rect x="180" y="80" width="98" height="18" rx="4" className="fill-blue-500/10" />
          <text x="229" y="93" textAnchor="middle" className="font-mono text-[10px] fill-blue-600 dark:fill-blue-400">
            dim=r, n-r, m-r
          </text>
        </g>

        {/* Down Arrow 1 -> 2 */}
        <line
          x1="155"
          y1="126"
          x2="155"
          y2="140"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="1.5"
          markerEnd="url(#l25-arrow-blue)"
        />

        {/* Card 2: Orthogonal Projection & Least Squares */}
        <g>
          <rect
            x="24"
            y="142"
            width="262"
            height="84"
            rx="8"
            className="fill-card stroke-blue-500/40"
            strokeWidth="1.2"
          />
          <text x="34" y="160" className="text-xs font-semibold fill-blue-700 dark:fill-blue-300">
            正交投影与最小二乘 (Projection &amp; LS)
          </text>
          <text x="34" y="177" className="font-mono text-[11px] fill-foreground">
            P = A(A&#7511;A)&#8315;&#185;A&#7511; (P&#178; = P, P&#7511; = P)
          </text>
          <text x="34" y="193" className="font-mono text-[11px] fill-foreground">
            正规方程: A&#7511;A x&#770; = A&#7511;b
          </text>
          <text x="34" y="209" className="font-mono text-[10px] fill-muted-foreground">
            b = p + e, p &#8712; Col(A), e &#8869; Col(A)
          </text>
        </g>

        {/* Down Arrow 2 -> 3 */}
        <line
          x1="155"
          y1="226"
          x2="155"
          y2="240"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="1.5"
          markerEnd="url(#l25-arrow-blue)"
        />

        {/* Card 3: Gram-Schmidt & QR */}
        <g>
          <rect
            x="24"
            y="242"
            width="262"
            height="84"
            rx="8"
            className="fill-card stroke-blue-500/40"
            strokeWidth="1.2"
          />
          <text x="34" y="260" className="text-xs font-semibold fill-blue-700 dark:fill-blue-300">
            正交基与 QR 分解 (Gram-Schmidt)
          </text>
          <text x="34" y="277" className="font-mono text-[11px] fill-foreground">
            A = QR (Q&#7511;Q = I, R 为上三角)
          </text>
          <text x="34" y="293" className="font-mono text-[11px] fill-foreground">
            求解正规方程化简: R x&#770; = Q&#7511;b
          </text>
          <text x="34" y="309" className="font-mono text-[10px] fill-muted-foreground">
            体积极值: Vol(A) = &#8719; r_ii (r_ii &gt; 0)
          </text>
        </g>

        {/* Down Arrow 3 -> 4 */}
        <line
          x1="155"
          y1="326"
          x2="155"
          y2="340"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="1.5"
          markerEnd="url(#l25-arrow-blue)"
        />

        {/* Card 4: Projection Operator Spectrum */}
        <g>
          <rect
            x="24"
            y="342"
            width="262"
            height="86"
            rx="8"
            className="fill-card stroke-blue-500/40"
            strokeWidth="1.2"
          />
          <text x="34" y="360" className="text-xs font-semibold fill-blue-700 dark:fill-blue-300">
            投影算子的谱视角 (Projection Spectrum)
          </text>
          <text x="34" y="377" className="font-mono text-[11px] fill-foreground">
            Px = 1&#183;x (x &#8712; Col(A)) &#8658; &#955; = 1
          </text>
          <text x="34" y="393" className="font-mono text-[11px] fill-foreground">
            Px = 0&#183;x (x &#8712; Null(A&#7511;)) &#8658; &#955; = 0
          </text>
          <text x="34" y="409" className="font-mono text-[10px] fill-muted-foreground">
            迹与秩同一律: tr(P) = rank(A)
          </text>
        </g>

        {/* ==================== COLUMN 2: DETERMINANTS & GATEWAY ==================== */}

        {/* Card 5: Determinants Axioms */}
        <g>
          <rect
            x="316"
            y="54"
            width="262"
            height="84"
            rx="8"
            className="fill-card stroke-amber-500/40"
            strokeWidth="1.2"
          />
          <text x="326" y="72" className="text-xs font-semibold fill-amber-700 dark:fill-amber-300">
            行列式公理与乘法性质 (Axioms &amp; Det)
          </text>
          <text x="326" y="89" className="font-mono text-[11px] fill-foreground">
            det(I) = 1, 行交换反号, 各行线性
          </text>
          <text x="326" y="105" className="font-mono text-[11px] fill-foreground">
            det(AB) = det(A)det(B), det(A&#7511;) = det(A)
          </text>
          <text x="326" y="121" className="font-mono text-[10px] fill-muted-foreground">
            三角消元: det(A) = &#177; det(U) = &#177; &#8719; d_i
          </text>
        </g>

        {/* Down Arrow 5 -> 6 */}
        <line
          x1="447"
          y1="138"
          x2="447"
          y2="152"
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="1.5"
          markerEnd="url(#l25-arrow-amber)"
        />

        {/* Card 6: Cofactors & Hyper-volume */}
        <g>
          <rect
            x="316"
            y="154"
            width="262"
            height="86"
            rx="8"
            className="fill-card stroke-amber-500/40"
            strokeWidth="1.2"
          />
          <text x="326" y="172" className="text-xs font-semibold fill-amber-700 dark:fill-amber-300">
            代数余子式与几何超体积 (Cofactors &amp; Vol)
          </text>
          <text x="326" y="189" className="font-mono text-[11px] fill-foreground">
            伴随逆阵: A&#8315;&#185; = C&#7511; / det(A)
          </text>
          <text x="326" y="205" className="font-mono text-[11px] fill-foreground">
            体积缩放: Vol(A&#937;) = |det(A)| Vol(&#937;)
          </text>
          <text x="326" y="221" className="font-mono text-[10px] fill-muted-foreground">
            奇异判据: det(A) = 0 &#8660; 降秩存在零特征值
          </text>
        </g>

        {/* Down Arrow 6 -> 7 */}
        <line
          x1="447"
          y1="240"
          x2="447"
          y2="254"
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="1.5"
          markerEnd="url(#l25-arrow-amber)"
        />

        {/* Card 7: The Characteristic Gateway (Golden Hub) */}
        <g>
          <rect
            x="316"
            y="256"
            width="262"
            height="172"
            rx="8"
            className="fill-amber-500/10 stroke-amber-500"
            strokeWidth="2"
          />
          <rect x="326" y="266" width="242" height="24" rx="4" className="fill-amber-600/20 dark:fill-amber-400/25" />
          <text x="447" y="282" textAnchor="middle" className="text-xs font-bold fill-amber-800 dark:fill-amber-200">
            核心跨越枢纽：特征方程网关
          </text>

          <text x="326" y="306" className="font-mono text-[12px] font-bold fill-foreground">
            det(A - &#955;I) = 0
          </text>
          <text x="326" y="324" className="font-mono text-[11px] fill-foreground">
            迹不变量: tr(A) = &#8721; &#955;_i = &#8721; a_ii
          </text>
          <text x="326" y="342" className="font-mono text-[11px] fill-foreground">
            行列式不变量: det(A) = &#8719; &#955;_i
          </text>
          <text x="326" y="360" className="font-mono text-[11px] fill-foreground">
            重数界限: GM(&#955;) &#8804; AM(&#955;)
          </text>
          <text x="326" y="378" className="font-mono text-[11px] fill-foreground">
            对角化充要: GM(&#955;) = AM(&#955;), &#8704;&#955;
          </text>
          <rect x="326" y="392" width="242" height="24" rx="4" className="fill-card stroke-amber-500/40" />
          <text x="447" y="408" textAnchor="middle" className="font-mono text-[10px] fill-amber-700 dark:fill-amber-300">
            奇异与零谱: 0 &#8712; &#123;&#955;_i&#125; &#8660; det(A) = 0
          </text>
        </g>

        {/* ==================== COLUMN 3: MODULE III CARDS ==================== */}

        {/* Card 8: Eigendecomposition & Diagonalization */}
        <g>
          <rect
            x="608"
            y="54"
            width="288"
            height="82"
            rx="8"
            className="fill-card stroke-emerald-500/40"
            strokeWidth="1.2"
          />
          <text x="618" y="72" className="text-xs font-semibold fill-emerald-700 dark:fill-emerald-300">
            谱分解与相似对角化 (A = S&#923;S&#8315;&#185;)
          </text>
          <text x="618" y="89" className="font-mono text-[11px] fill-foreground">
            A = S &#923; S&#8315;&#185; (当且仅当具有 n 个无关特征向量)
          </text>
          <text x="618" y="105" className="font-mono text-[11px] fill-foreground">
            相似变换守恒: tr, det, 谱完全不变
          </text>
          <text x="618" y="121" className="font-mono text-[10px] fill-muted-foreground">
            解耦基底: 将耦合动力学投影至特征模态
          </text>
        </g>

        {/* Branches from Card 8 downwards */}
        {/* Branch Arrow to Card 9 */}
        <path
          d="M 680 136 L 680 148"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="1.5"
          markerEnd="url(#l25-arrow-emerald)"
        />

        {/* Card 9: Discrete Powers */}
        <g>
          <rect
            x="608"
            y="150"
            width="288"
            height="84"
            rx="8"
            className="fill-card stroke-emerald-500/40"
            strokeWidth="1.2"
          />
          <text x="618" y="168" className="text-xs font-semibold fill-emerald-700 dark:fill-emerald-300">
            分支 1：离散动力系统与矩阵幂 (A&#7504;)
          </text>
          <text x="618" y="185" className="font-mono text-[11px] fill-foreground">
            u_k = A&#7504; u_0 = S &#923;&#7504; S&#8315;&#185; u_0 = &#8721; c_i &#955;_i&#7504; x_i
          </text>
          <text x="618" y="201" className="font-mono text-[11px] fill-foreground">
            谱半径控制渐近行为: &#961;(A) = max |&#955;_i|
          </text>
          <rect x="618" y="208" width="168" height="18" rx="4" className="fill-emerald-500/15" />
          <text x="702" y="221" textAnchor="middle" className="font-mono text-[10px] font-bold fill-emerald-700 dark:fill-emerald-300">
            渐近稳定 &#8660; |&#955;_i| &lt; 1, &#8704;i
          </text>
        </g>

        {/* Branch Arrow to Card 10 */}
        <path
          d="M 680 234 L 680 246"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="1.5"
          markerEnd="url(#l25-arrow-emerald)"
        />

        {/* Card 10: Continuous ODEs */}
        <g>
          <rect
            x="608"
            y="248"
            width="288"
            height="88"
            rx="8"
            className="fill-card stroke-emerald-500/40"
            strokeWidth="1.2"
          />
          <text x="618" y="266" className="text-xs font-semibold fill-emerald-700 dark:fill-emerald-300">
            分支 2：连续微分方程系统 (du/dt = Au)
          </text>
          <text x="618" y="283" className="font-mono text-[11px] fill-foreground">
            u(t) = e&#7511;&#7511; u_0 = S e&#7504;&#7511; S&#8315;&#185; u_0 = &#8721; c_i e&#7504;&#8318;&#7511; x_i
          </text>
          <text x="618" y="299" className="font-mono text-[11px] fill-foreground">
            2&#215;2 稳定判据: tr(A) &lt; 0 且 det(A) &gt; 0
          </text>
          <rect x="618" y="308" width="180" height="18" rx="4" className="fill-emerald-500/15" />
          <text x="708" y="321" textAnchor="middle" className="font-mono text-[10px] font-bold fill-emerald-700 dark:fill-emerald-300">
            渐近稳定 &#8660; Re(&#955;_i) &lt; 0, &#8704;i
          </text>
        </g>

        {/* Branch Arrow to Card 11 */}
        <path
          d="M 680 336 L 680 348"
          className="stroke-purple-600 dark:stroke-purple-400"
          strokeWidth="1.5"
          markerEnd="url(#l25-arrow-purple)"
        />

        {/* Card 11: Markov Transition & Steady State */}
        <g>
          <rect
            x="608"
            y="350"
            width="288"
            height="78"
            rx="8"
            className="fill-card stroke-purple-500/40"
            strokeWidth="1.2"
          />
          <text x="618" y="368" className="text-xs font-semibold fill-purple-700 dark:fill-purple-300">
            分支 3：马尔可夫转移与稳态流 (Markov Chains)
          </text>
          <text x="618" y="385" className="font-mono text-[11px] fill-foreground">
            主特征值: &#955;&#8321; = 1, 其余 |&#955;_i| &#8804; 1
          </text>
          <text x="618" y="401" className="font-mono text-[11px] fill-foreground">
            稳态空间: u_&#8734; &#8712; Null(M - I), 1&#7511; u_&#8734; = 1
          </text>
          <rect x="734" y="375" width="154" height="18" rx="4" className="fill-purple-500/15" />
          <text x="811" y="388" textAnchor="middle" className="font-mono text-[10px] font-bold fill-purple-700 dark:fill-purple-300">
            瞬态衰减: 1&#7511;(u_0 - u_&#8734;) = 0
          </text>
        </g>

        {/* ==================== TRANSVERSE BRIDGING ARROWS ==================== */}

        {/* Bridge 1: Card 3 (QR Vol) to Card 6 (det Vol) */}
        <path
          d="M 286 284 C 302 284, 302 200, 314 200"
          fill="none"
          className="stroke-amber-600 dark:stroke-amber-400"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          markerEnd="url(#l25-arrow-amber)"
        />
        <rect x="286" y="235" width="28" height="14" rx="3" className="fill-card stroke-amber-500/40" />
        <text x="300" y="245" textAnchor="middle" className="font-mono text-[9px] fill-amber-700 dark:fill-amber-300">
          体积
        </text>

        {/* Bridge 2: Card 4 (Projection Spectrum) to Card 7 (Gateway) */}
        <path
          d="M 286 385 C 302 385, 302 355, 314 355"
          fill="none"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          markerEnd="url(#l25-arrow-blue)"
        />
        <rect x="286" y="362" width="28" height="14" rx="3" className="fill-card stroke-blue-500/40" />
        <text x="300" y="372" textAnchor="middle" className="font-mono text-[9px] fill-blue-700 dark:fill-blue-300">
          谱点
        </text>

        {/* Bridge 3: Card 7 (Characteristic Gateway) to Card 8 (A = S Lambda S^-1) */}
        <path
          d="M 578 300 C 596 300, 596 95, 606 95"
          fill="none"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2"
          markerEnd="url(#l25-arrow-emerald)"
        />
        <rect x="582" y="180" width="26" height="16" rx="3" className="fill-card stroke-emerald-500/50" />
        <text x="595" y="192" textAnchor="middle" className="font-mono text-[9px] font-bold fill-emerald-700 dark:fill-emerald-300">
          &#955;, x
        </text>

        {/* Bridge 4: Card 7 (Gateway) to Card 11 (Markov) */}
        <path
          d="M 578 390 L 606 390"
          fill="none"
          className="stroke-purple-600 dark:stroke-purple-400"
          strokeWidth="2"
          markerEnd="url(#l25-arrow-purple)"
        />
      </svg>
    </MathDiagram>
  );
}
