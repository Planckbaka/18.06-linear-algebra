import * as React from 'react'
import { MathDiagram } from './math-diagram'

export function MarkovSteadyStateSimplexDiagram({
  caption = '马尔可夫矩阵的四大子空间代数推导（左）与概率单形几何收敛轨迹（右）',
}: {
  caption?: string
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 900 420"
        className="w-full h-auto select-none"
        aria-label="马尔可夫矩阵代数推导与概率单形收敛示意图"
      >
        <defs>
          <marker
            id="l24-arrow-blue"
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
            id="l24-arrow-purple"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l24-arrow-emerald"
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
            id="l24-arrow-default"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-foreground/60" />
          </marker>
          <linearGradient id="l24-simplex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* ================= 左面板：四大子空间证明代数链 ================= */}
        <g transform="translate(0, 0)">
          {/* 背景卡片 */}
          <rect
            x="20"
            y="20"
            width="415"
            height="380"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          {/* 标题 */}
          <text x="40" y="52" className="fill-foreground font-semibold text-sm">
            四大子空间代数链：为什么 &#955;&#8321; = 1 恒成立？
          </text>

          {/* Step 1: 列和归一性 */}
          <rect
            x="38"
            y="70"
            width="379"
            height="50"
            rx="8"
            className="fill-muted/30 stroke-border/70"
            strokeWidth="1"
          />
          <text x="52" y="90" className="fill-foreground text-xs font-medium">
            1. 列随机性：A 的每一列元素之和等于 1
          </text>
          <text x="52" y="108" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono">
            1&#7510; A = 1&#7510;  (1 = [1, 1, ..., 1]&#7510; 行向量乘各列和)
          </text>

          {/* 箭头 1 -> 2 */}
          <line
            x1="227"
            y1="120"
            x2="227"
            y2="136"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            markerEnd="url(#l24-arrow-blue)"
          />

          {/* Step 2: 移项变形 */}
          <rect
            x="38"
            y="138"
            width="379"
            height="50"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/30"
            strokeWidth="1"
          />
          <text x="52" y="158" className="fill-foreground text-xs font-medium">
            2. 移项与转置：1&#7510; (A - I) = 0&#7510;
          </text>
          <text x="52" y="176" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono">
            &lt;=&gt; (A&#7510; - I) 1 = 0  =&gt; 1 是 A&#7510; 对应 &#955;=1 的特征向量
          </text>

          {/* 箭头 2 -> 3 */}
          <line
            x1="227"
            y1="188"
            x2="227"
            y2="204"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2"
            markerEnd="url(#l24-arrow-purple)"
          />

          {/* Step 3: 转置零空间非平凡 */}
          <rect
            x="38"
            y="206"
            width="379"
            height="50"
            rx="8"
            className="fill-purple-500/10 stroke-purple-500/30"
            strokeWidth="1"
          />
          <text x="52" y="226" className="fill-foreground text-xs font-medium">
            3. 转置零空间包含非平凡全 1 向量：
          </text>
          <text x="52" y="244" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono">
            1 &#8712; Null(A&#7510; - I)  =&gt;  dim Null(A&#7510; - I) &gt;= 1
          </text>

          {/* 箭头 3 -> 4 */}
          <line
            x1="227"
            y1="256"
            x2="227"
            y2="272"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2"
            markerEnd="url(#l24-arrow-emerald)"
          />

          {/* Step 4: 四大子空间维数定理 */}
          <rect
            x="38"
            y="274"
            width="379"
            height="112"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/40"
            strokeWidth="1.2"
          />
          <text x="52" y="295" className="fill-foreground text-xs font-medium">
            4. 四大子空间基本定理（行秩 = 列秩 = r）：
          </text>
          <text x="52" y="315" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-semibold">
            dim Null(A - I) = dim Null(A&#7510; - I) = n - r &gt;= 1
          </text>
          <text x="52" y="340" className="fill-foreground text-xs">
            &#8658; 必然存在非零右特征向量 x&#8321; &#8800; 0 使得：
          </text>
          <text x="52" y="360" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-mono font-semibold">
            (A - I) x&#8321; = 0  &lt;=&gt;  A x&#8321; = 1 &#183; x&#8321;
          </text>
          <text x="52" y="378" className="fill-muted-foreground text-[11px]">
            结论：任意马尔可夫矩阵必有 &#955;&#8321; = 1 对应的稳态向量！
          </text>
        </g>

        {/* ================= 右面板：概率单形演化与稳态吸引子 ================= */}
        <g transform="translate(0, 0)">
          {/* 背景卡片 */}
          <rect
            x="455"
            y="20"
            width="425"
            height="380"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          {/* 标题 */}
          <text x="475" y="52" className="fill-foreground font-semibold text-sm">
            概率单形（Simplex）演化与稳态吸引子
          </text>

          {/* 单形下阴影多边形 (530, 310) -> (730, 310) -> (530, 110) */}
          <polygon
            points="530,310 730,310 530,110"
            fill="url(#l24-simplex-grad)"
          />

          {/* 坐标轴 */}
          {/* 横轴 u1 */}
          <line
            x1="510"
            y1="310"
            x2="780"
            y2="310"
            className="stroke-foreground/50"
            strokeWidth="1.5"
            markerEnd="url(#l24-arrow-default)"
          />
          <text x="786" y="314" className="fill-foreground text-xs font-mono">
            u&#8321;
          </text>

          {/* 纵轴 u2 */}
          <line
            x1="530"
            y1="330"
            x2="530"
            y2="80"
            className="stroke-foreground/50"
            strokeWidth="1.5"
            markerEnd="url(#l24-arrow-default)"
          />
          <text x="524" y="74" className="fill-foreground text-xs font-mono">
            u&#8322;
          </text>

          {/* 原点与标度 */}
          <text x="518" y="324" className="fill-muted-foreground text-[11px]">
            0
          </text>
          {/* u1 = 1 刻度 (730, 310) */}
          <line x1="730" y1="307" x2="730" y2="313" className="stroke-foreground" strokeWidth="1.5" />
          <text x="718" y="326" className="fill-foreground text-xs font-mono">
            e&#8321;(1,0)
          </text>

          {/* u2 = 1 刻度 (530, 110) */}
          <line x1="527" y1="110" x2="533" y2="110" className="stroke-foreground" strokeWidth="1.5" />
          <text x="474" y="114" className="fill-foreground text-xs font-mono">
            e&#8322;(0,1)
          </text>

          {/* 概率单形线段 u1 + u2 = 1 */}
          <line
            x1="730"
            y1="310"
            x2="530"
            y2="110"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text x="635" y="185" className="fill-blue-600 dark:fill-blue-400 text-xs font-medium">
            单形线：u&#8321; + u&#8322; = 1
          </text>

          {/* 演化点序列 (A = [0.9 0.2; 0.1 0.8], u_inf = [2/3, 1/3]) */}
          {/* u_inf: u1 = 2/3 -> 530 + 133.3 = 663.3; u2 = 1/3 -> 310 - 66.7 = 243.3 */}
          {/* u0 = [0.1, 0.9] -> (550, 130) */}
          {/* u1 = [0.27, 0.73] -> (584, 164) */}
          {/* u2 = [0.389, 0.611] -> (608, 188) */}
          {/* u3 = [0.472, 0.528] -> (624, 204) */}

          {/* 演化点 u0 */}
          <circle cx="550" cy="130" r="4.5" className="fill-amber-600 dark:fill-amber-400" />
          <text x="558" y="132" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono">
            u&#8320; [0.1, 0.9]&#7510;
          </text>

          {/* 演化点 u1 */}
          <circle cx="584" cy="164" r="4" className="fill-amber-600 dark:fill-amber-400" />
          <text x="592" y="166" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono">
            u&#8321;
          </text>

          {/* 演化点 u2 */}
          <circle cx="608" cy="188" r="3.5" className="fill-amber-600 dark:fill-amber-400" />
          <text x="616" y="190" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono">
            u&#8322;
          </text>

          {/* 演化点 u3 */}
          <circle cx="624" cy="204" r="3" className="fill-amber-600 dark:fill-amber-400" />

          {/* 轨迹虚线箭头沿单形滑向稳态 */}
          <line
            x1="550"
            y1="130"
            x2="650"
            y2="230"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            markerEnd="url(#l24-arrow-blue)"
          />

          {/* 稳态吸引子 u_inf */}
          <circle
            cx="663.3"
            cy="243.3"
            r="6.5"
            className="fill-emerald-600 dark:fill-emerald-400 stroke-background"
            strokeWidth="2"
          />
          {/* 闪烁圆环 */}
          <circle
            cx="663.3"
            cy="243.3"
            r="11"
            className="stroke-emerald-600 dark:stroke-emerald-400 fill-none"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <text x="678" y="247" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-bold">
            u&#8734; = [2/3, 1/3]&#7510;
          </text>

          {/* 瞬态衰减模式标注 */}
          <g transform="translate(475, 275)">
            <rect
              x="0"
              y="0"
              width="385"
              height="110"
              rx="8"
              className="fill-muted/20 stroke-border/70"
              strokeWidth="1"
            />
            <text x="14" y="22" className="fill-foreground text-xs font-medium">
              模态分解：u&#7522; = u&#8734; + c&#8322; (&#955;&#8322;)&#7522; x&#8322;
            </text>
            <text x="14" y="42" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono">
              &#955;&#8322; = 0.7 &lt; 1,  x&#8322; = [1, -1]&#7510;
            </text>
            <text x="14" y="62" className="fill-foreground text-xs font-mono">
              1&#7510; x&#8322; = 1 + (-1) = 0  (零和质量交换向量！)
            </text>
            <text x="14" y="82" className="fill-muted-foreground text-[11px]">
              由于 1&#7510; x&#8322; = 0，瞬态衰减完全沿单形进行，总概率严格守恒 1
            </text>
            <text x="14" y="98" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-semibold">
              当 k &#8594; &#8734; 时，(0.7)&#7522; &#8594; 0，系统必收敛至稳态 u&#8734;
            </text>
          </g>
        </g>
      </svg>
    </MathDiagram>
  )
}

export function FourierFunctionSpaceProjectionDiagram({
  caption = '从有限维欧氏空间正交投影（左）到无穷维 L^2([0, 2\\pi]) 傅里叶级数正交投影（右）的统一代数结构',
}: {
  caption?: string
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 900 420"
        className="w-full h-auto select-none"
        aria-label="有限维正交投影到无穷维傅里叶函数空间投影对比示意图"
      >
        <defs>
          <marker
            id="l24-f-arrow-blue"
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
            id="l24-f-arrow-purple"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l24-f-arrow-emerald"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
        </defs>

        {/* ================= 左面板：有限维欧氏空间 R^n ================= */}
        <g transform="translate(0, 0)">
          {/* 背景卡片 */}
          <rect
            x="20"
            y="20"
            width="415"
            height="380"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          {/* 标题 */}
          <text x="40" y="52" className="fill-foreground font-semibold text-sm">
            有限维 R&#8319;：正交基投影分解 (Lecture 17)
          </text>

          {/* 核心代数公式卡片 */}
          <rect
            x="38"
            y="70"
            width="379"
            height="90"
            rx="8"
            className="fill-muted/20 stroke-border/70"
            strokeWidth="1"
          />
          <text x="52" y="92" className="fill-foreground text-xs font-mono">
            离散点积：x&#7510; y = &#8721; x&#7522; y&#7522;
          </text>
          <text x="52" y="112" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono">
            正交基底：&#123;q&#8321;, q&#8322;, ..., q&#8345;&#125;,  q&#7522;&#7510; q&#7523; = 0 (i &#8800; j)
          </text>
          <text x="52" y="132" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono">
            正交投影：c&#7522; = (q&#7522;&#7510; v) / (q&#7522;&#7510; q&#7522;) = (q&#7522;&#7510; v) / ||q&#7522;||&#178;
          </text>
          <text x="52" y="150" className="fill-foreground text-xs font-mono">
            完全分解：v = c&#8321; q&#8321; + c&#8322; q&#8322; + ... + c&#8345; q&#8345;
          </text>

          {/* 几何投影图 */}
          <g transform="translate(130, 270)">
            {/* q1 轴 */}
            <line
              x1="0"
              y1="0"
              x2="170"
              y2="0"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2"
              markerEnd="url(#l24-f-arrow-blue)"
            />
            <text x="175" y="4" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono">
              q&#8321;
            </text>

            {/* q2 轴 */}
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-90"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2"
              markerEnd="url(#l24-f-arrow-purple)"
            />
            <text x="-4" y="-96" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono">
              q&#8322;
            </text>

            {/* 向量 v (130, -65) */}
            <line
              x1="0"
              y1="0"
              x2="130"
              y2="-65"
              className="stroke-emerald-600 dark:stroke-emerald-400"
              strokeWidth="2.5"
              markerEnd="url(#l24-f-arrow-emerald)"
            />
            <text x="136" y="-68" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-bold">
              v
            </text>

            {/* 虚线正交投影 */}
            <line x1="130" y1="-65" x2="130" y2="0" className="stroke-foreground/40" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="130" y1="-65" x2="0" y2="-65" className="stroke-foreground/40" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* 直角符号 */}
            <polyline points="122,0 122,-8 130,-8" fill="none" className="stroke-foreground/50" strokeWidth="1" />
            <polyline points="0,-57 8,-57 8,-65" fill="none" className="stroke-foreground/50" strokeWidth="1" />

            {/* 投影长度标注 */}
            <circle cx="130" cy="0" r="3" className="fill-blue-600 dark:fill-blue-400" />
            <text x="80" y="16" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono">
              c&#8321; q&#8321;
            </text>
            <circle cx="0" cy="-65" r="3" className="fill-purple-600 dark:fill-purple-400" />
            <text x="-52" y="-55" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono">
              c&#8322; q&#8322;
            </text>
          </g>

          {/* 勾股定理 / 能量守恒卡片 */}
          <rect
            x="38"
            y="325"
            width="379"
            height="60"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/30"
            strokeWidth="1"
          />
          <text x="52" y="347" className="fill-foreground text-xs font-medium">
            勾股定理（正交基能量守恒）：
          </text>
          <text x="52" y="369" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-semibold">
            ||v||&#178; = c&#8321;&#178; ||q&#8321;||&#178; + c&#8322;&#178; ||q&#8322;||&#178; + ... + c&#8345;&#178; ||q&#8345;||&#178;
          </text>
        </g>

        {/* ================= 右面板：无穷维函数空间 L^2([0, 2pi]) ================= */}
        <g transform="translate(0, 0)">
          {/* 背景卡片 */}
          <rect
            x="455"
            y="20"
            width="425"
            height="380"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          {/* 标题 */}
          <text x="475" y="52" className="fill-foreground font-semibold text-sm">
            无穷维 L&#178;([0, 2&#960;])：傅里叶级数正交投影
          </text>

          {/* 函数空间内积与基底 */}
          <rect
            x="473"
            y="70"
            width="389"
            height="90"
            rx="8"
            className="fill-muted/20 stroke-border/70"
            strokeWidth="1"
          />
          <text x="487" y="92" className="fill-foreground text-xs font-mono">
            函数内积：&lt;f, g&gt; = &#8747;&#8320;&#178;&#7516; f(x) g(x) dx
          </text>
          <text x="487" y="112" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono">
            三角正交基：&#123;1, cos x, sin x, cos 2x, sin 2x, ...&#125;
          </text>
          <text x="487" y="132" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono">
            基向量长度：||1||&#178; = 2&#960;,  ||cos kx||&#178; = ||sin kx||&#178; = &#960;
          </text>
          <text x="487" y="150" className="fill-foreground text-xs font-mono">
            级数展开：f(x) = a&#8320; &#183; 1 + &#8721; (a&#7522; cos kx + b&#7522; sin kx)
          </text>

          {/* 傅里叶投影系数直接等同于 R^n 投影 */}
          <rect
            x="473"
            y="170"
            width="389"
            height="145"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/30"
            strokeWidth="1"
          />
          <text x="487" y="192" className="fill-foreground text-xs font-medium">
            完全同一套正交投影比值公式（分子内积，分母范数平方）：
          </text>
          <text x="487" y="217" className="fill-emerald-600 dark:fill-emerald-400 text-xs font-mono font-semibold">
            a&#8320; = &lt;f, 1&gt; / ||1||&#178; = (1 / 2&#960;) &#8747;&#8320;&#178;&#7516; f(x) dx  (直流平均分量)
          </text>
          <text x="487" y="247" className="fill-blue-600 dark:fill-blue-400 text-xs font-mono font-semibold">
            a&#7522; = &lt;f, cos kx&gt; / ||cos kx||&#178; = (1 / &#960;) &#8747;&#8320;&#178;&#7516; f(x) cos(kx) dx
          </text>
          <text x="487" y="277" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono font-semibold">
            b&#7522; = &lt;f, sin kx&gt; / ||sin kx||&#178; = (1 / &#960;) &#8747;&#8320;&#178;&#7516; f(x) sin(kx) dx
          </text>
          <text x="487" y="302" className="fill-muted-foreground text-[11px]">
            本质：傅里叶系数并非凭空发明，它就是 Lecture 17 的正交投影比值！
          </text>

          {/* 帕塞瓦尔恒等式（无穷维勾股定理） */}
          <rect
            x="473"
            y="325"
            width="389"
            height="60"
            rx="8"
            className="fill-purple-500/10 stroke-purple-500/30"
            strokeWidth="1"
          />
          <text x="487" y="347" className="fill-foreground text-xs font-medium">
            帕塞瓦尔恒等式（无穷维勾股定理 / 能量守恒）：
          </text>
          <text x="487" y="369" className="fill-purple-600 dark:fill-purple-400 text-xs font-mono font-semibold">
            ||f||&#178; = &#8747;&#8320;&#178;&#7516; f(x)&#178; dx = 2&#960; a&#8320;&#178; + &#960; &#8721;&#7522;&#61105;&#185;&#8734; (a&#7522;&#178; + b&#7522;&#178;)
          </text>
        </g>
      </svg>
    </MathDiagram>
  )
}
