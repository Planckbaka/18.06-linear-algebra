import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function LineAndSubspaceProjectionDiagram({
  caption = '从一维到高维的正交投影统一几何图景：**左图**展示向一维直线 $\\operatorname{span}\\{\\mathbf{a}\\}$ 的投影，垂足 $\\mathbf{p} = \\hat{x}\\mathbf{a}$ 与误差 $\\mathbf{e} = \\mathbf{b} - \\mathbf{p} \\perp \\mathbf{a}$ 给出秩 1 投影矩阵 $P = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}}$；**右图**跃升为向 $n$ 维子空间 $\\operatorname{Col}(A)$ 的投影，垂足 $\\mathbf{p} = A\\hat{\\mathbf{x}} = P\\mathbf{b}$ 与正交残差 $\\mathbf{e} = (I-P)\\mathbf{b} \\in \\operatorname{Null}(A^T)$ 形成直角互补拆分 $\\mathbf{b} = P\\mathbf{b} + (I-P)\\mathbf{b}$，导出正规方程组 $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ 与投影矩阵 $P = A(A^TA)^{-1}A^T$。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Geometry of Projections: From 1D Lines to Subspaces Col(A)"
      caption={caption}
    >
      <svg
        viewBox="0 0 860 380"
        className="w-full max-w-[860px] select-none text-foreground"
        role="img"
        aria-label="Comparison of 1D line projection and higher-dimensional subspace projection"
      >
        <defs>
          <marker
            id="l15-arrow-blue"
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
            id="l15-arrow-indigo"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-indigo-600 dark:fill-indigo-400" />
          </marker>
          <marker
            id="l15-arrow-emerald"
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
            id="l15-arrow-rose"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
          <marker
            id="l15-arrow-muted"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-muted-foreground/60" />
          </marker>
        </defs>

        {/* ================= LEFT PANEL: 1D LINE PROJECTION ================= */}
        <g transform="translate(18, 14)">
          <rect
            x="0"
            y="0"
            width="395"
            height="352"
            rx="12"
            fill="currentColor"
            fillOpacity="0.02"
            stroke="currentColor"
            strokeOpacity="0.12"
          />

          <text x="197" y="26" textAnchor="middle" className="fill-current text-[13px] font-bold">
            一维直线投影：p = x̂a ∈ span&#123;a&#125;
          </text>
          <text x="197" y="44" textAnchor="middle" className="fill-muted-foreground text-[11px]">
            目标：求误差 e = b − p 垂直于方向 a 的最短距离垂足
          </text>

          {/* Extended Line L = span{a} */}
          <line
            x1="45"
            y1="232"
            x2="335"
            y2="135"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.6"
            strokeDasharray="5 3"
          />
          <text x="345" y="138" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-semibold">
            L = span&#123;a&#125;
          </text>

          {/* Direction vector a */}
          <line
            x1="65"
            y1="225"
            x2="155"
            y2="195"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.4"
            markerEnd="url(#l15-arrow-blue)"
          />
          <text x="110" y="190" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">
            a (方向基向量)
          </text>

          {/* Projection vector p = x_hat * a */}
          <line
            x1="65"
            y1="225"
            x2="227"
            y2="171"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="3.2"
            markerEnd="url(#l15-arrow-emerald)"
          />
          <circle cx="227" cy="171" r="3.5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="215" y="195" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11.5px] font-bold">
            p = x̂a = Pb
          </text>

          {/* Target vector b */}
          <line
            x1="65"
            y1="225"
            x2="185"
            y2="45"
            className="stroke-indigo-600 dark:stroke-indigo-400"
            strokeWidth="2.6"
            markerEnd="url(#l15-arrow-indigo)"
          />
          <circle cx="185" cy="45" r="3.5" className="fill-indigo-600 dark:fill-indigo-400" />
          <text x="120" y="125" className="fill-indigo-700 dark:fill-indigo-300 font-mono text-[12px] font-bold">
            b (目标向量)
          </text>

          {/* Perpendicular error vector e = b - p */}
          <line
            x1="227"
            y1="171"
            x2="185"
            y2="45"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="2.2"
            strokeDasharray="4 3"
            markerEnd="url(#l15-arrow-rose)"
          />
          <text x="226" y="105" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11px] font-bold">
            e = b − p ⟂ a
          </text>

          {/* Right-angle indicator at p */}
          <polyline
            points="215,175 211,163 223,159"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.7"
            strokeWidth="1.4"
          />

          {/* Origin 0 */}
          <circle cx="65" cy="225" r="4.5" className="fill-current" />
          <text x="50" y="242" className="fill-current font-mono text-[11px] font-bold">
            0
          </text>

          {/* Bottom Card for 1D formulas */}
          <g transform="translate(15, 252)">
            <rect
              x="0"
              y="0"
              width="365"
              height="84"
              rx="8"
              className="fill-background/80 stroke-border/70"
            />
            <text x="12" y="22" className="fill-current text-[11px] font-semibold">
              正交正规条件：<tspan className="font-mono text-rose-600 dark:text-rose-400">aᵀ(b − x̂a) = 0</tspan>
            </text>
            <text x="12" y="44" className="fill-current text-[11px]">
              投影系数：<tspan className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">x̂ = (aᵀb) / (aᵀa)</tspan>
            </text>
            <text x="12" y="66" className="fill-current text-[11px]">
              秩 1 投影矩阵：<tspan className="font-mono text-blue-600 dark:stroke-blue-400 font-bold">P = (a aᵀ) / (aᵀa)</tspan>
              <tspan className="text-[10px] text-muted-foreground ml-2"> (rank = 1)</tspan>
            </text>
          </g>
        </g>

        {/* ================= RIGHT PANEL: SUBSPACE PROJECTION Col(A) ================= */}
        <g transform="translate(447, 14)">
          <rect
            x="0"
            y="0"
            width="395"
            height="352"
            rx="12"
            fill="currentColor"
            fillOpacity="0.02"
            stroke="currentColor"
            strokeOpacity="0.12"
          />

          <text x="197" y="26" textAnchor="middle" className="fill-current text-[13px] font-bold">
            高维子空间投影：p = Ax̂ ∈ Col(A)
          </text>
          <text x="197" y="44" textAnchor="middle" className="fill-muted-foreground text-[11px]">
            目标：求误差 e = b − Ax̂ 垂直于整张平面 Col(A) 的最近点
          </text>

          {/* Perspective Plane for Col(A) */}
          <polygon
            points="35,232 225,232 360,158 170,158"
            className="fill-blue-500/10 stroke-blue-600/50 dark:stroke-blue-400/50"
            strokeWidth="1.6"
          />
          <text x="305" y="174" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold">
            Col(A) ⊂ ℝᵐ
          </text>
          <text x="305" y="189" className="fill-muted-foreground text-[10px]">
            (dim = n, rank = n)
          </text>

          {/* Vertical axis: Left Nullspace Null(A^T) = Col(A) perp */}
          <line
            x1="110"
            y1="250"
            x2="110"
            y2="46"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="1.6"
            strokeDasharray="4 3"
            markerEnd="url(#l15-arrow-muted)"
          />
          <text x="118" y="58" className="fill-muted-foreground font-mono text-[10.5px] font-semibold">
            Null(Aᵀ) = Col(A)⟂
          </text>

          {/* Plane basis vectors a_1 and a_2 */}
          <line
            x1="110"
            y1="205"
            x2="190"
            y2="216"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.2"
            markerEnd="url(#l15-arrow-blue)"
          />
          <text x="195" y="224" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold">
            a₁
          </text>

          <line
            x1="110"
            y1="205"
            x2="175"
            y2="175"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2.2"
            markerEnd="url(#l15-arrow-blue)"
          />
          <text x="165" y="168" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold">
            a₂
          </text>

          {/* Foot p = A x_hat in the plane */}
          <line
            x1="110"
            y1="205"
            x2="245"
            y2="182"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="3.2"
            markerEnd="url(#l15-arrow-emerald)"
          />
          <circle cx="245" cy="182" r="3.5" className="fill-emerald-600 dark:fill-emerald-400" />
          <text x="245" y="204" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11.5px] font-bold">
            p = Ax̂ = Pb
          </text>

          {/* Target vector b outside the plane */}
          <line
            x1="110"
            y1="205"
            x2="245"
            y2="60"
            className="stroke-indigo-600 dark:stroke-indigo-400"
            strokeWidth="2.6"
            markerEnd="url(#l15-arrow-indigo)"
          />
          <circle cx="245" cy="60" r="3.5" className="fill-indigo-600 dark:fill-indigo-400" />
          <text x="155" y="125" className="fill-indigo-700 dark:fill-indigo-300 font-mono text-[12px] font-bold">
            b ∉ Col(A)
          </text>

          {/* Vertical Error e = b - p = (I - P)b */}
          <line
            x1="245"
            y1="182"
            x2="245"
            y2="60"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="2.4"
            strokeDasharray="4 3"
            markerEnd="url(#l15-arrow-rose)"
          />
          <text x="255" y="118" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11px] font-bold">
            e = (I − P)b ∈ Null(Aᵀ)
          </text>

          {/* Right-angle symbol on plane */}
          <polyline
            points="233,184 233,172 245,170"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.7"
            strokeWidth="1.4"
          />

          {/* Origin 0 in R^m */}
          <circle cx="110" cy="205" r="4.5" className="fill-current" />
          <text x="96" y="218" className="fill-current font-mono text-[11px] font-bold">
            0
          </text>

          {/* Bottom Card for Subspace formulas */}
          <g transform="translate(15, 252)">
            <rect
              x="0"
              y="0"
              width="365"
              height="84"
              rx="8"
              className="fill-background/80 stroke-border/70"
            />
            <text x="12" y="22" className="fill-current text-[11px] font-semibold">
              正规方程组：<tspan className="font-mono text-rose-600 dark:text-rose-400">Aᵀ(b − Ax̂) = 0 ⟺ AᵀAx̂ = Aᵀb</tspan>
            </text>
            <text x="12" y="44" className="fill-current text-[11px]">
              最优系数：<tspan className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">x̂ = (AᵀA)⁻¹ Aᵀb</tspan>
            </text>
            <text x="12" y="66" className="fill-current text-[11px]">
              投影矩阵：<tspan className="font-mono text-blue-600 dark:stroke-blue-400 font-bold">P = A(AᵀA)⁻¹Aᵀ</tspan>
              <tspan className="text-[10px] text-muted-foreground ml-2"> (rank = n)</tspan>
            </text>
          </g>
        </g>
      </svg>
    </MathDiagram>
  );
}

export function ProjectionComplementarySplitDiagram({
  caption = '正交互补投影算子对欧氏空间 $\\mathbb{R}^m$ 的直和正交分解：任意向量 $\\mathbf{b}$ 均可唯一正交拆分为列空间分量 $\\mathbf{p} = P\\mathbf{b}$ 与左零空间分量 $\\mathbf{e} = (I-P)\\mathbf{b}$。两大算子满足对称性（$P^T = P$）、幂等性（$P^2 = P$）与正交解耦（$P(I-P) = 0$），勾股定理 $\\|\\mathbf{b}\\|^2 = \\|\\mathbf{p}\\|^2 + \\|\\mathbf{e}\\|^2$ 严密成立。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Orthogonal Decomposition & Complementary Projections: P and (I − P)"
      caption={caption}
    >
      <svg
        viewBox="0 0 760 270"
        className="w-full max-w-[760px] select-none text-foreground"
        role="img"
        aria-label="Orthogonal direct sum decomposition of Rm into Col(A) and Null(AT) with complementary projection operators P and I-P"
      >
        <defs>
          <marker
            id="l15-arrow-p-blue"
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
            id="l15-arrow-p-rose"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
          <marker
            id="l15-arrow-p-indigo"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-indigo-600 dark:fill-indigo-400" />
          </marker>
        </defs>

        {/* Origin at (160, 195) */}
        {/* Horizontal Subspace: Col(A) */}
        <line
          x1="50"
          y1="195"
          x2="380"
          y2="195"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2.5"
          markerEnd="url(#l15-arrow-p-blue)"
        />
        <text x="390" y="199" className="fill-blue-700 dark:fill-blue-300 font-mono text-[12px] font-bold">
          Col(A) (dim = n)
        </text>

        {/* Vertical Subspace: Null(A^T) */}
        <line
          x1="160"
          y1="240"
          x2="160"
          y2="30"
          className="stroke-rose-600 dark:stroke-rose-400"
          strokeWidth="2.5"
          markerEnd="url(#l15-arrow-p-rose)"
        />
        <text x="160" y="20" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[12px] font-bold">
          Null(Aᵀ) = Col(A)⟂ (dim = m − n)
        </text>

        {/* Right-angle square at origin */}
        <polyline
          points="160,181 174,181 174,195"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.7"
          strokeWidth="1.5"
        />

        {/* Vector p = Pb on Col(A) */}
        <line
          x1="160"
          y1="195"
          x2="320"
          y2="195"
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="4"
        />
        <circle cx="320" cy="195" r="4" className="fill-blue-600 dark:fill-blue-400" />
        <text x="250" y="215" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold">
          p = Pb ∈ Col(A)
        </text>

        {/* Vector e = (I - P)b on Null(A^T) */}
        <line
          x1="160"
          y1="195"
          x2="160"
          y2="65"
          className="stroke-rose-600 dark:stroke-rose-400"
          strokeWidth="4"
        />
        <circle cx="160" cy="65" r="4" className="fill-rose-600 dark:fill-rose-400" />
        <text x="100" y="130" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[11.5px] font-bold">
          e = (I − P)b
        </text>

        {/* Dashed rectangle completing vector b */}
        <line
          x1="320"
          y1="195"
          x2="320"
          y2="65"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.6"
          strokeDasharray="4 3"
        />
        <line
          x1="160"
          y1="65"
          x2="320"
          y2="65"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.6"
          strokeDasharray="4 3"
        />

        {/* Vector b = p + e */}
        <line
          x1="160"
          y1="195"
          x2="320"
          y2="65"
          className="stroke-indigo-600 dark:stroke-indigo-400"
          strokeWidth="3.2"
          markerEnd="url(#l15-arrow-p-indigo)"
        />
        <circle cx="320" cy="65" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
        <text x="332" y="60" className="fill-indigo-700 dark:fill-indigo-300 font-mono text-[13px] font-bold">
          b = Pb + (I − P)b
        </text>

        {/* Origin 0 */}
        <circle cx="160" cy="195" r="4.5" className="fill-current" />
        <text x="145" y="210" className="fill-current font-mono text-[11px] font-bold">
          0
        </text>

        {/* Property cards on the right */}
        <g transform="translate(485, 30)">
          <rect
            x="0"
            y="0"
            width="255"
            height="205"
            rx="10"
            className="fill-card stroke-border shadow-xs"
          />
          <text x="16" y="25" className="fill-current text-[12px] font-bold">
            投影算子四大代数不变量
          </text>

          <g transform="translate(16, 44)">
            <text x="0" y="14" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11.5px] font-bold">
              1. 幂等性 (Idempotence)
            </text>
            <text x="14" y="32" className="fill-muted-foreground font-mono text-[10.5px]">
              P² = P, (I − P)² = I − P
            </text>

            <text x="0" y="58" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11.5px] font-bold">
              2. 对称性 (Symmetry)
            </text>
            <text x="14" y="76" className="fill-muted-foreground font-mono text-[10.5px]">
              Pᵀ = P, (I − P)ᵀ = I − P
            </text>

            <text x="0" y="102" className="fill-purple-700 dark:fill-purple-300 font-mono text-[11.5px] font-bold">
              3. 正交解耦 (Orthogonal)
            </text>
            <text x="14" y="120" className="fill-muted-foreground font-mono text-[10.5px]">
              P(I − P) = (I − P)P = 0
            </text>

            <text x="0" y="146" className="fill-amber-700 dark:fill-amber-300 font-mono text-[11.5px] font-bold">
              4. 勾股能量守恒
            </text>
            <text x="14" y="164" className="fill-muted-foreground font-mono text-[10.5px]">
              ‖b‖² = ‖Pb‖² + ‖(I − P)b‖²
            </text>
          </g>
        </g>
      </svg>
    </MathDiagram>
  );
}
