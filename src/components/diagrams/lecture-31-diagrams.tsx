import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function LinearTransformationGeometryExamplesDiagram({
  caption = '合法线性变换与非线性伪装者对比：左图展示旋转 $R_\\theta$、关于 $45^\\circ$ 直线反射 $H$ 与向直线 $L$ 的正交投影 $P$，三者均严格锚定原点 $T(\\mathbf{0})=\\mathbf{0}$ 且保持平行网格；右图展示仿射平移 $T(\\mathbf{x})=\\mathbf{x}+\\mathbf{v}_0$（移走原点）与欧氏范数 $\\|\\mathbf{x}\\|_2$（破坏三角可加性与负号齐次性）为何不是线性变换。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Coordinate-Free Linear Transformations vs. Non-Linear Impostors in ℝ²"
      caption={caption}
    >
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="Comparison between valid linear transformations in R2 (rotation, reflection, orthogonal projection fixing the origin and collapsing a direction) and nonlinear impostors (affine translation shifting the origin and Euclidean norm violating additivity and homogeneity)"
      >
        <defs>
          <marker
            id="l31-geom-arrow-blue"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l31-geom-arrow-purple"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l31-geom-arrow-emerald"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l31-geom-arrow-rose"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
          <marker
            id="l31-geom-arrow-amber"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l31-geom-arrow-muted"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-muted-foreground" />
          </marker>
        </defs>

        {/* ================= TOP HEADER ================= */}
        <text x="460" y="23" textAnchor="middle" className="fill-foreground text-[14px] font-bold">
          线性变换的几何签名 vs. 非线性“伪装者”：T(cx + dy) = cT(x) + dT(y)
        </text>
        <text x="460" y="41" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
          左：合法线性变换固定原点并保持平行网格 ｜ 右：仿射平移与欧氏范数破坏叠加原理
        </text>

        {/* ================= LEFT PANEL: VALID LINEAR TRANSFORMATIONS ================= */}
        <g>
          <rect
            x="20"
            y="54"
            width="566"
            height="370"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <rect
            x="32"
            y="64"
            width="542"
            height="26"
            rx="6"
            className="fill-blue-500/10 stroke-blue-500/30"
            strokeWidth="1"
          />
          <text x="303" y="81" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11.5px] font-bold">
            ✓ 合法线性变换 T : ℝ² → ℝ²（保持线性组合，固定原点 T(𝟎) = 𝟎）
          </text>

          {/* --- Sub-card 1: Rotation R_theta --- */}
          <g>
            <rect
              x="32"
              y="100"
              width="172"
              height="244"
              rx="8"
              className="fill-muted/20 stroke-border/80"
              strokeWidth="1"
            />
            <text x="118" y="119" textAnchor="middle" className="fill-foreground text-[11.5px] font-semibold">
              ① 逆时针旋转 R<tspan dy="2.5" fontSize="8.5">θ</tspan><tspan dy="-2.5"> (30°)</tspan>
            </text>
            <text x="118" y="135" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              保长、保角且不移原点
            </text>

            {/* Coordinate axes around (100, 232) */}
            <line x1="48" y1="232" x2="190" y2="232" className="stroke-border" strokeWidth="1" />
            <line x1="100" y1="274" x2="100" y2="150" className="stroke-border" strokeWidth="1" />

            {/* Original dashed unit square (44x44) */}
            <polygon
              points="100,232 144,232 144,188 100,188"
              className="fill-none stroke-muted-foreground/50"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />

            {/* Rotated unit square (30 deg CCW) */}
            <polygon
              points="100,232 138.105,210 116.105,171.895 78,193.895"
              className="fill-blue-500/15 stroke-blue-600/60 dark:stroke-blue-400/60"
              strokeWidth="1.4"
            />

            {/* Basis images */}
            <line
              x1="100"
              y1="232"
              x2="138.105"
              y2="210"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.2"
              markerEnd="url(#l31-geom-arrow-blue)"
            />
            <line
              x1="100"
              y1="232"
              x2="78"
              y2="193.895"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2.2"
              markerEnd="url(#l31-geom-arrow-purple)"
            />

            {/* Origin anchor dot */}
            <circle cx="100" cy="232" r="3" className="fill-foreground" />
            <text x="90" y="244" className="fill-muted-foreground text-[9.5px] font-mono">
              0
            </text>
            <text x="145" y="213" className="fill-blue-600 dark:fill-blue-400 text-[9.5px] font-mono font-semibold">
              R(e₁)
            </text>
            <text x="51" y="191" className="fill-purple-600 dark:fill-purple-400 text-[9.5px] font-mono font-semibold">
              R(e₂)
            </text>
            <text x="147" y="244" className="fill-muted-foreground text-[9px] font-mono">
              e₁
            </text>

            {/* Rotation arc */}
            <path
              d="M 122 232 A 22 22 0 0 0 119 221"
              fill="none"
              className="stroke-amber-600 dark:stroke-amber-400"
              strokeWidth="1.4"
            />
            <text x="125" y="227" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-mono">
              θ
            </text>

            <text x="118" y="298" textAnchor="middle" className="fill-foreground text-[10px] font-mono">
              [cos θ  -sin θ ; sin θ  cos θ]
            </text>
            <text x="118" y="315" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px]">
              T(0) = 0，保持夹角与面积
            </text>
            <text x="118" y="331" textAnchor="middle" className="fill-muted-foreground text-[9.5px]">
              无坐标系时只需角度 θ 即可定义
            </text>
          </g>

          {/* --- Sub-card 2: Reflection H across y=x --- */}
          <g>
            <rect
              x="217"
              y="100"
              width="172"
              height="244"
              rx="8"
              className="fill-muted/20 stroke-border/80"
              strokeWidth="1"
            />
            <text x="303" y="119" textAnchor="middle" className="fill-foreground text-[11.5px] font-semibold">
              ② 关于 45° 直线反射 H
            </text>
            <text x="303" y="135" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              沿镜像线翻折：H(x,y) = (y,x)
            </text>

            {/* Coordinate axes around (274, 240) */}
            <line x1="234" y1="240" x2="374" y2="240" className="stroke-border" strokeWidth="1" />
            <line x1="274" y1="274" x2="274" y2="150" className="stroke-border" strokeWidth="1" />

            {/* Mirror line y=x */}
            <line
              x1="246"
              y1="268"
              x2="356"
              y2="158"
              className="stroke-amber-600 dark:stroke-amber-400"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <text x="357" y="159" className="fill-amber-600 dark:fill-amber-400 text-[9.5px] font-mono">
              y=x
            </text>

            {/* Original dashed asymmetric rectangle (56 wide x 24 high) */}
            <polygon
              points="274,240 330,240 330,216 274,216"
              className="fill-muted/30 stroke-muted-foreground/60"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />

            {/* Reflected rectangle (24 wide x 56 high) */}
            <polygon
              points="274,240 298,240 298,184 274,184"
              className="fill-purple-500/15 stroke-purple-600/70 dark:stroke-purple-400/70"
              strokeWidth="1.5"
            />

            {/* Swapped basis vectors */}
            <line
              x1="274"
              y1="240"
              x2="274"
              y2="195"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.2"
              markerEnd="url(#l31-geom-arrow-blue)"
            />
            <line
              x1="274"
              y1="240"
              x2="319"
              y2="240"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2.2"
              markerEnd="url(#l31-geom-arrow-purple)"
            />

            <circle cx="274" cy="240" r="3" className="fill-foreground" />
            <text x="263" y="252" className="fill-muted-foreground text-[9.5px] font-mono">
              0
            </text>
            <text x="236" y="198" className="fill-blue-600 dark:fill-blue-400 text-[9.5px] font-mono font-semibold">
              H(e₁)
            </text>
            <text x="323" y="252" className="fill-purple-600 dark:fill-purple-400 text-[9.5px] font-mono font-semibold">
              H(e₂)
            </text>

            <text x="303" y="298" textAnchor="middle" className="fill-foreground text-[10px] font-mono">
              [0  1 ; 1  0]  (对称且正交)
            </text>
            <text x="303" y="315" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px]">
              H(0) = 0，镜面线向量不动
            </text>
            <text x="303" y="331" textAnchor="middle" className="fill-muted-foreground text-[9.5px]">
              反转定向 (det H = -1, H² = I)
            </text>
          </g>

          {/* --- Sub-card 3: Orthogonal Projection P onto 30 deg line L --- */}
          <g>
            <rect
              x="402"
              y="100"
              width="172"
              height="244"
              rx="8"
              className="fill-muted/20 stroke-border/80"
              strokeWidth="1"
            />
            <text x="488" y="119" textAnchor="middle" className="fill-foreground text-[11.5px] font-semibold">
              ③ 向直线 L 的正交投影 P
            </text>
            <text x="488" y="135" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              降维坍缩到过原点子空间 L
            </text>

            {/* Coordinate axes around (450, 244) */}
            <line x1="418" y1="244" x2="558" y2="244" className="stroke-border" strokeWidth="1" />
            <line x1="450" y1="274" x2="450" y2="152" className="stroke-border" strokeWidth="1" />

            {/* Original dashed unit square (52x52) */}
            <polygon
              points="450,244 502,244 502,192 450,192"
              className="fill-none stroke-muted-foreground/45"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />

            {/* Line L at 30 deg through (450, 244) */}
            <line
              x1="424"
              y1="259.011"
              x2="544"
              y2="189.729"
              className="stroke-emerald-600/75 dark:stroke-emerald-400/75"
              strokeWidth="2"
            />
            <text x="546" y="189" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-mono font-bold">
              L
            </text>

            {/* Orthogonal drop arrows */}
            <line
              x1="502"
              y1="244"
              x2="489"
              y2="221.483"
              className="stroke-muted-foreground"
              strokeWidth="1.2"
              strokeDasharray="2.5 2.5"
              markerEnd="url(#l31-geom-arrow-muted)"
            />
            <line
              x1="450"
              y1="192"
              x2="472.517"
              y2="231"
              className="stroke-muted-foreground"
              strokeWidth="1.2"
              strokeDasharray="2.5 2.5"
              markerEnd="url(#l31-geom-arrow-muted)"
            />

            {/* Projected vectors on L */}
            <line
              x1="450"
              y1="244"
              x2="489"
              y2="221.483"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              markerEnd="url(#l31-geom-arrow-blue)"
            />
            <line
              x1="450"
              y1="244"
              x2="472.517"
              y2="231"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2.5"
              markerEnd="url(#l31-geom-arrow-purple)"
            />

            <circle cx="450" cy="244" r="3" className="fill-foreground" />
            <text x="439" y="256" className="fill-muted-foreground text-[9.5px] font-mono">
              0
            </text>
            <text x="504" y="254" className="fill-muted-foreground text-[9px] font-mono">
              e₁
            </text>
            <text x="437" y="191" className="fill-muted-foreground text-[9px] font-mono">
              e₂
            </text>
            <text x="492" y="216" className="fill-blue-600 dark:fill-blue-400 text-[9px] font-mono font-semibold">
              P(e₁)
            </text>
            <text x="467" y="259" className="fill-purple-600 dark:fill-purple-400 text-[9px] font-mono font-semibold">
              P(e₂)
            </text>

            <text x="488" y="298" textAnchor="middle" className="fill-foreground text-[10px] font-mono">
              P = uuᵀ，u = (cos 30°, sin 30°)ᵀ
            </text>
            <text x="488" y="315" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px]">
              P(𝟎) = 𝟎，垂直分量落入零空间
            </text>
            <text x="488" y="331" textAnchor="middle" className="fill-muted-foreground text-[9.5px]">
              保持线性组合，且满足 P² = P
            </text>
          </g>

          {/* Bottom Summary Ribbon */}
          <rect
            x="32"
            y="354"
            width="542"
            height="58"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/35"
            strokeWidth="1.2"
          />
          <text x="303" y="376" textAnchor="middle" className="fill-foreground text-[11px] font-semibold">
            原点映为原点，直线的像可为直线或一点，非退化的平行线族保持平行
          </text>
          <text x="303" y="397" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono">
            重要推论：只要知道 T 对基底 e₁, e₂ 的作用，全空间任一点 x₁e₁ + x₂e₂ 的像即被唯一锁定！
          </text>
        </g>

        {/* ================= RIGHT PANEL: NON-LINEAR IMPOSTORS ================= */}
        <g>
          <rect
            x="602"
            y="54"
            width="298"
            height="370"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <rect
            x="614"
            y="64"
            width="274"
            height="26"
            rx="6"
            className="fill-rose-500/10 stroke-rose-500/30"
            strokeWidth="1"
          />
          <text x="751" y="81" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[11.5px] font-bold">
            ✗ 非线性“伪装者”（Impostors）
          </text>

          {/* --- Impostor A: Affine Translation --- */}
          <g>
            <rect
              x="614"
              y="100"
              width="274"
              height="152"
              rx="8"
              className="fill-muted/20 stroke-rose-500/35"
              strokeWidth="1.1"
            />
            <text x="626" y="120" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold">
              反例 A：仿射平移 T(x) = x + v₀ (v₀ ≠ 0)
            </text>

            {/* Mini axes */}
            <line x1="624" y1="220" x2="730" y2="220" className="stroke-border" strokeWidth="1" />
            <line x1="646" y1="238" x2="646" y2="142" className="stroke-border" strokeWidth="1" />

            {/* Original square at (646, 220), 34x34 */}
            <polygon
              points="646,220 680,220 680,186 646,186"
              className="fill-none stroke-muted-foreground/60"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />
            {/* Shifted square at (682, 194), 34x34 */}
            <polygon
              points="682,194 716,194 716,160 682,160"
              className="fill-rose-500/15 stroke-rose-600 dark:stroke-rose-400"
              strokeWidth="1.5"
            />
            {/* Shift arrow */}
            <line
              x1="646"
              y1="220"
              x2="680"
              y2="195.5"
              className="stroke-rose-600 dark:stroke-rose-400"
              strokeWidth="2.2"
              markerEnd="url(#l31-geom-arrow-rose)"
            />
            <circle cx="646" cy="220" r="3" className="fill-foreground" />
            <text x="635" y="232" className="fill-muted-foreground text-[9.5px] font-mono">
              0
            </text>
            <text x="652" y="203" className="fill-rose-600 dark:fill-rose-400 text-[9.5px] font-mono font-bold">
              v₀
            </text>

            {/* Diagnostic text */}
            <text x="738" y="150" className="fill-foreground text-[10.5px] font-medium">
              一票否决（破坏零元）：
            </text>
            <text x="738" y="170" className="fill-rose-600 dark:fill-rose-400 text-[10.5px] font-mono font-semibold">
              T(0) = v₀ ≠ 0
            </text>
            <text x="738" y="192" className="fill-foreground text-[10.5px] font-medium">
              同时破坏数乘齐次：
            </text>
            <text x="738" y="211" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono">
              T(2x) = 2x + v₀
            </text>
            <text x="738" y="227" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono">
              ≠ 2(x + v₀) = 2T(x)
            </text>
            <text x="738" y="244" className="fill-muted-foreground text-[9.5px]">
              （实为仿射变换而非线性）
            </text>
          </g>

          {/* --- Impostor B: Euclidean Norm --- */}
          <g>
            <rect
              x="614"
              y="262"
              width="274"
              height="150"
              rx="8"
              className="fill-muted/20 stroke-rose-500/35"
              strokeWidth="1.1"
            />
            <text x="626" y="282" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold">
              反例 B：欧氏长度 T(x) = ‖x‖₂
            </text>

            {/* Triangle showing e1, e2, e1+e2 */}
            <line
              x1="638"
              y1="384"
              x2="692"
              y2="384"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2"
              markerEnd="url(#l31-geom-arrow-blue)"
            />
            <line
              x1="692"
              y1="384"
              x2="692"
              y2="330"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2"
              markerEnd="url(#l31-geom-arrow-purple)"
            />
            <line
              x1="638"
              y1="384"
              x2="692"
              y2="330"
              className="stroke-rose-600 dark:stroke-rose-400"
              strokeWidth="2.2"
              markerEnd="url(#l31-geom-arrow-rose)"
            />
            <text x="665" y="397" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[9.5px] font-mono">
              ‖e₁‖=1
            </text>
            <text x="712" y="360" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-[9.5px] font-mono">
              ‖e₂‖=1
            </text>
            <text x="647" y="347" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 text-[9.5px] font-mono font-bold">
              √2
            </text>

            {/* Diagnostic text */}
            <text x="738" y="310" className="fill-foreground text-[10.5px] font-medium">
              虽有 T(0) = 0，但：
            </text>
            <text x="738" y="330" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono font-semibold">
              ‖e₁+e₂‖ = √2 ≈ 1.414
            </text>
            <text x="738" y="347" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono font-semibold">
              ≠ 1 + 1 = ‖e₁‖+‖e₂‖
            </text>
            <text x="738" y="370" className="fill-foreground text-[10.5px] font-medium">
              且负号齐次也失效：
            </text>
            <text x="738" y="389" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-mono">
              ‖-e₁‖ = +1 ≠ -1
            </text>
            <text x="738" y="404" className="fill-muted-foreground text-[9.5px]">
              （注：det(A)、xᵢ² 同理非线性）
            </text>
          </g>
        </g>
      </svg>
    </MathDiagram>
  );
}

export function MatrixRepresentationFromBasesDiagram({
  caption = '矩阵表示的黄金构造法则（Master Rule）：选定输入基 $\\mathcal{B}_V = \\{\\mathbf{v}_1,\\dots,\\mathbf{v}_n\\}$ 与输出基 $\\mathcal{B}_W = \\{\\mathbf{w}_1,\\dots,\\mathbf{w}_m\\}$ 后，交换图保证 $[T(\\mathbf{v})]_{\\mathcal{B}_W} = A[\\mathbf{v}]_{\\mathcal{B}_V}$；矩阵 $A$ 的第 $j$ 列正是 $T(\\mathbf{v}_j)$ 在输出基 $\\mathcal{B}_W$ 下的坐标列向量。下方以微积分求导算子 $\\frac{d}{dt}: \\mathcal{P}_3 \\to \\mathcal{P}_2$ 展示逐列填入 $3\\times 4$ 矩阵的全过程。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="The Master Rule: Constructing Matrix A ∈ ℝᵐˣⁿ from Input Basis B_V and Output Basis B_W"
      caption={caption}
    >
      <svg
        viewBox="0 0 920 440"
        className="w-full h-auto font-sans select-none"
        role="img"
        aria-label="Commutative diagram and Master Rule for constructing the matrix A of a linear transformation T from V to W given bases B_V and B_W, illustrated by the differentiation operator d/dt from P3 to P2 yielding a 3 by 4 matrix"
      >
        <defs>
          <marker
            id="l31-mat-arrow-blue"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l31-mat-arrow-emerald"
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
            id="l31-mat-arrow-muted"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-muted-foreground" />
          </marker>
        </defs>

        {/* ================= TOP HEADER ================= */}
        <text x="460" y="23" textAnchor="middle" className="fill-foreground text-[14px] font-bold">
          从抽象线性算子到矩阵表示：坐标交换图与“按列填入”黄金法则
        </text>

        {/* ================= TOP ZONE: COMMUTATIVE DIAGRAM + MASTER RULE ================= */}
        <g>
          <rect
            x="20"
            y="36"
            width="880"
            height="190"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />

          {/* Top-Left: v in V */}
          <rect
            x="40"
            y="52"
            width="162"
            height="46"
            rx="8"
            className="fill-blue-500/10 stroke-blue-500/40"
            strokeWidth="1.2"
          />
          <text x="121" y="71" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12px] font-bold font-mono">
            输入向量 v ∈ V
          </text>
          <text x="121" y="88" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            (抽象元素，dim V = n)
          </text>

          {/* Top-Right: T(v) in W */}
          <rect
            x="320"
            y="52"
            width="174"
            height="46"
            rx="8"
            className="fill-purple-500/10 stroke-purple-500/40"
            strokeWidth="1.2"
          />
          <text x="407" y="71" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[12px] font-bold font-mono">
            输出向量 T(v) ∈ W
          </text>
          <text x="407" y="88" textAnchor="middle" className="fill-muted-foreground text-[10px]">
            (目标元素，dim W = m)
          </text>

          {/* Top arrow: T */}
          <line
            x1="202"
            y1="75"
            x2="314"
            y2="75"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            markerEnd="url(#l31-mat-arrow-blue)"
          />
          <text x="258" y="67" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-bold">
            线性算子 T
          </text>

          {/* Down-left arrow: [.]_BV */}
          <line
            x1="121"
            y1="98"
            x2="121"
            y2="152"
            className="stroke-muted-foreground"
            strokeWidth="1.6"
            markerEnd="url(#l31-mat-arrow-muted)"
          />
          <text x="128" y="124" className="fill-foreground text-[10px] font-medium">
            按基 B<tspan dy="2.5" fontSize="8">V</tspan><tspan dy="-2.5"> 取坐标</tspan>
          </text>
          <text x="128" y="139" className="fill-muted-foreground text-[9.5px] font-mono">
            v = ∑ xⱼ vⱼ
          </text>

          {/* Down-right arrow: [.]_BW */}
          <line
            x1="407"
            y1="98"
            x2="407"
            y2="152"
            className="stroke-muted-foreground"
            strokeWidth="1.6"
            markerEnd="url(#l31-mat-arrow-muted)"
          />
          <text x="414" y="124" className="fill-foreground text-[10px] font-medium">
            按基 B<tspan dy="2.5" fontSize="8">W</tspan><tspan dy="-2.5"> 取坐标</tspan>
          </text>
          <text x="414" y="139" className="fill-muted-foreground text-[9.5px] font-mono">
            T(v) = ∑ yᵢ wᵢ
          </text>

          {/* Bottom-Left: [v]_{B_V} in R^n */}
          <rect
            x="40"
            y="158"
            width="162"
            height="50"
            rx="8"
            className="fill-emerald-500/10 stroke-emerald-500/40"
            strokeWidth="1.2"
          />
          <text x="121" y="178" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11.5px] font-bold font-mono">
            [v]<tspan dy="3" fontSize="8">BV</tspan><tspan dy="-3"> ∈ ℝⁿ</tspan>
          </text>
          <text x="121" y="197" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            [x₁, x₂, …, xₙ]ᵀ
          </text>

          {/* Bottom-Right: [T(v)]_{B_W} in R^m */}
          <rect
            x="320"
            y="158"
            width="174"
            height="50"
            rx="8"
            className="fill-emerald-500/15 stroke-emerald-600/55 dark:stroke-emerald-400/55"
            strokeWidth="1.4"
          />
          <text x="407" y="178" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11.5px] font-bold font-mono">
            [T(v)]<tspan dy="3" fontSize="8">BW</tspan><tspan dy="-3"> ∈ ℝᵐ</tspan>
          </text>
          <text x="407" y="197" textAnchor="middle" className="fill-foreground text-[10.5px] font-mono font-semibold">
            = A · [v]<tspan dy="3" fontSize="8">BV</tspan><tspan dy="-3" />
          </text>

          {/* Bottom arrow: matrix A */}
          <line
            x1="202"
            y1="183"
            x2="314"
            y2="183"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.5"
            markerEnd="url(#l31-mat-arrow-emerald)"
          />
          <text x="258" y="174" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-bold font-mono">
            左乘矩阵 A
          </text>
          <text x="258" y="201" textAnchor="middle" className="fill-muted-foreground text-[9.5px] font-mono">
            A ∈ ℝᵐˣⁿ
          </text>

          {/* Right side inside Top Zone: Master Rule Box */}
          <rect
            x="520"
            y="48"
            width="362"
            height="164"
            rx="10"
            className="fill-muted/30 stroke-amber-500/40"
            strokeWidth="1.3"
          />
          <text x="536" y="70" className="fill-amber-700 dark:fill-amber-300 text-[12px] font-bold">
            黄金构造法则（The Master Rule）
          </text>
          <text x="536" y="92" className="fill-foreground text-[11px]">
            1. 选定输入有序基 B<tspan dy="2.5" fontSize="8">V</tspan><tspan dy="-2.5"> = &#123;v₁, …, vₙ&#125; 与输出有序基 B</tspan><tspan dy="2.5" fontSize="8">W</tspan><tspan dy="-2.5"> = &#123;w₁, …, wₘ&#125;</tspan>
          </text>
          <text x="536" y="112" className="fill-foreground text-[11px]">
            2. 将变换 T 依次作用在输入基向量 vⱼ 上，得到 T(vⱼ) ∈ W
          </text>
          <text x="536" y="132" className="fill-foreground text-[11px]">
            3. 在输出基 B<tspan dy="2.5" fontSize="8">W</tspan><tspan dy="-2.5"> 下展开：T(vⱼ) = a₁ⱼw₁ + a₂ⱼw₂ + ⋯ + aₘⱼwₘ</tspan>
          </text>
          <rect
            x="534"
            y="144"
            width="334"
            height="56"
            rx="6"
            className="fill-emerald-500/15 stroke-emerald-500/40"
            strokeWidth="1"
          />
          <text x="701" y="164" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-bold">
            把坐标 [T(vⱼ)]<tspan dy="2.5" fontSize="8">BW</tspan><tspan dy="-2.5"> 直接填作矩阵 A 的第 j 列（不是行！）</tspan>
          </text>
          <text x="701" y="186" textAnchor="middle" className="fill-foreground text-[11px] font-mono font-semibold">
            A = [ [T(v₁)]<tspan dy="2.5" fontSize="8">BW</tspan><tspan dy="-2.5"> | [T(v₂)]</tspan><tspan dy="2.5" fontSize="8">BW</tspan><tspan dy="-2.5"> | ⋯ | [T(vₙ)]</tspan><tspan dy="2.5" fontSize="8">BW</tspan><tspan dy="-2.5"> ]</tspan>
          </text>
        </g>

        {/* ================= BOTTOM ZONE: CALCULUS EXAMPLE d/dt : P3 -> P2 ================= */}
        <g>
          <rect
            x="20"
            y="238"
            width="880"
            height="188"
            rx="12"
            className="fill-card/60 stroke-border"
            strokeWidth="1.5"
          />
          <text x="36" y="261" className="fill-foreground text-[12px] font-bold">
            微积分典范算例：求导算子 D = d/dt : P₃ → P₂（B<tspan dy="2.5" fontSize="8.5">V</tspan><tspan dy="-2.5"> = &#123;1, t, t², t³&#125;,  B</tspan><tspan dy="2.5" fontSize="8.5">W</tspan><tspan dy="-2.5"> = &#123;1, t, t²&#125;）</tspan>
          </text>

          {/* Column 1 card: v1 = 1 */}
          <g>
            <rect
              x="36"
              y="273"
              width="126"
              height="100"
              rx="8"
              className="fill-blue-500/10 stroke-blue-500/35"
              strokeWidth="1.1"
            />
            <text x="99" y="292" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-bold font-mono">
              j=1: v₁ = 1
            </text>
            <text x="99" y="311" textAnchor="middle" className="fill-foreground text-[10.5px] font-mono">
              D(1) = 0
            </text>
            <text x="99" y="328" textAnchor="middle" className="fill-muted-foreground text-[9.5px] font-mono">
              = 0·1 + 0·t + 0·t²
            </text>
            <text x="99" y="357" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono font-bold">
              第 1 列: [0, 0, 0]ᵀ
            </text>
          </g>

          {/* Column 2 card: v2 = t */}
          <g>
            <rect
              x="174"
              y="273"
              width="126"
              height="100"
              rx="8"
              className="fill-purple-500/10 stroke-purple-500/35"
              strokeWidth="1.1"
            />
            <text x="237" y="292" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-bold font-mono">
              j=2: v₂ = t
            </text>
            <text x="237" y="311" textAnchor="middle" className="fill-foreground text-[10.5px] font-mono">
              D(t) = 1
            </text>
            <text x="237" y="328" textAnchor="middle" className="fill-muted-foreground text-[9.5px] font-mono">
              = 1·1 + 0·t + 0·t²
            </text>
            <text x="237" y="357" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-[11px] font-mono font-bold">
              第 2 列: [1, 0, 0]ᵀ
            </text>
          </g>

          {/* Column 3 card: v3 = t^2 */}
          <g>
            <rect
              x="312"
              y="273"
              width="126"
              height="100"
              rx="8"
              className="fill-emerald-500/10 stroke-emerald-500/35"
              strokeWidth="1.1"
            />
            <text x="375" y="292" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-bold font-mono">
              j=3: v₃ = t²
            </text>
            <text x="375" y="311" textAnchor="middle" className="fill-foreground text-[10.5px] font-mono">
              D(t²) = 2t
            </text>
            <text x="375" y="328" textAnchor="middle" className="fill-muted-foreground text-[9.5px] font-mono">
              = 0·1 + 2·t + 0·t²
            </text>
            <text x="375" y="357" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-mono font-bold">
              第 3 列: [0, 2, 0]ᵀ
            </text>
          </g>

          {/* Column 4 card: v4 = t^3 */}
          <g>
            <rect
              x="450"
              y="273"
              width="126"
              height="100"
              rx="8"
              className="fill-amber-500/10 stroke-amber-500/35"
              strokeWidth="1.1"
            />
            <text x="513" y="292" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-bold font-mono">
              j=4: v₄ = t³
            </text>
            <text x="513" y="311" textAnchor="middle" className="fill-foreground text-[10.5px] font-mono">
              D(t³) = 3t²
            </text>
            <text x="513" y="328" textAnchor="middle" className="fill-muted-foreground text-[9.5px] font-mono">
              = 0·1 + 0·t + 3·t²
            </text>
            <text x="513" y="357" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[11px] font-mono font-bold">
              第 4 列: [0, 0, 3]ᵀ
            </text>
          </g>

          {/* Arrow feeding into Matrix */}
          <line
            x1="581"
            y1="323"
            x2="603"
            y2="323"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2.2"
            markerEnd="url(#l31-mat-arrow-emerald)"
          />

          {/* Assembled 3x4 Matrix Box */}
          <g>
            <rect
              x="609"
              y="273"
              width="275"
              height="100"
              rx="8"
              className="fill-muted/25 stroke-border"
              strokeWidth="1.2"
            />
            <text x="625" y="328" className="fill-foreground text-[13px] font-bold font-mono">
              A<tspan dy="3" fontSize="9">diff</tspan><tspan dy="-3"> =</tspan>
            </text>

            {/* Left bracket */}
            <path
              d="M 698 286 L 690 286 L 690 362 L 698 362"
              fill="none"
              className="stroke-foreground"
              strokeWidth="1.8"
            />
            {/* Right bracket */}
            <path
              d="M 836 286 L 844 286 L 844 362 L 836 362"
              fill="none"
              className="stroke-foreground"
              strokeWidth="1.8"
            />

            {/* Column highlights */}
            <rect x="701" y="288" width="26" height="72" rx="4" className="fill-blue-500/10" />
            <rect x="735" y="288" width="26" height="72" rx="4" className="fill-purple-500/10" />
            <rect x="769" y="288" width="26" height="72" rx="4" className="fill-emerald-500/10" />
            <rect x="803" y="288" width="26" height="72" rx="4" className="fill-amber-500/10" />

            {/* Column 1 */}
            <text x="714" y="306" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[13px] font-mono font-bold">0</text>
            <text x="714" y="329" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[13px] font-mono font-bold">0</text>
            <text x="714" y="352" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[13px] font-mono font-bold">0</text>

            {/* Column 2 */}
            <text x="748" y="306" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-[13px] font-mono font-bold">1</text>
            <text x="748" y="329" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-[13px] font-mono font-bold">0</text>
            <text x="748" y="352" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-[13px] font-mono font-bold">0</text>

            {/* Column 3 */}
            <text x="782" y="306" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[13px] font-mono font-bold">0</text>
            <text x="782" y="329" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[13px] font-mono font-bold">2</text>
            <text x="782" y="352" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[13px] font-mono font-bold">0</text>

            {/* Column 4 */}
            <text x="816" y="306" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[13px] font-mono font-bold">0</text>
            <text x="816" y="329" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[13px] font-mono font-bold">0</text>
            <text x="816" y="352" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[13px] font-mono font-bold">3</text>

            <text x="862" y="362" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
              3×4
            </text>
          </g>

          {/* Bottom verification strip */}
          <rect
            x="36"
            y="383"
            width="848"
            height="32"
            rx="6"
            className="fill-muted/35 stroke-border/70"
            strokeWidth="1"
          />
          <text x="460" y="403" textAnchor="middle" className="fill-foreground text-[11px] font-mono">
            检验：p(t) = 2 + 5t - 3t² + 4t³  ⇒  [p]<tspan dy="2.5" fontSize="8">BV</tspan><tspan dy="-2.5"> = [2, 5, -3, 4]ᵀ  ⇒  A</tspan><tspan dy="2.5" fontSize="8">diff</tspan><tspan dy="-2.5"> [2, 5, -3, 4]ᵀ = [5, -6, 12]ᵀ  ⇔  p'(t) = 5 - 6t + 12t²</tspan>
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
