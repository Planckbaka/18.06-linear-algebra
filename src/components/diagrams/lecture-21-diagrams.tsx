import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function EigenvalueInvariantDirectionsDiagram({
  caption = '特征值与特征向量的几何直观：普通向量方向发生偏折（$A\\mathbf{v} \\nparallel \\mathbf{v}$），而特征向量仅沿原有直线进行纯粹伸缩（$A\\mathbf{x} = \\lambda\\mathbf{x}$）；代数上等价于要求算子 $A - \\lambda I_n$ 奇异（$\\det(A - \\lambda I_n) = 0$）。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 840 380"
        className="w-full h-auto max-w-4xl mx-auto font-sans select-none"
      >
        <defs>
          <marker
            id="l21-arrow-blue"
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
            id="l21-arrow-emerald"
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
            id="l21-arrow-purple"
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
            id="l21-arrow-rose"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-rose-500 dark:fill-rose-400" />
          </marker>
          <marker
            id="l21-arrow-amber"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-500 dark:fill-amber-400" />
          </marker>
          <marker
            id="l21-arrow-slate"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-muted-foreground" />
          </marker>
        </defs>

        {/* ================= 左面板：几何直观 ================= */}
        <g transform="translate(15, 15)">
          <rect
            x="0"
            y="0"
            width="400"
            height="350"
            rx="12"
            className="fill-muted/20 stroke-border"
            strokeWidth="1"
          />

          <text
            x="20"
            y="30"
            className="text-sm font-bold fill-foreground"
          >
            几何直观：特征方向在变换中保持共线
          </text>
          <text
            x="20"
            y="48"
            className="text-xs fill-muted-foreground"
          >
            对称矩阵 A = [2 1; 1 2] 的不变特征线与普通向量偏折
          </text>

          {/* 坐标轴 (原点在 200, 200) */}
          <g transform="translate(200, 200)">
            <line
              x1="-165"
              y1="0"
              x2="175"
              y2="0"
              className="stroke-muted-foreground/30"
              strokeWidth="1.2"
              markerEnd="url(#l21-arrow-slate)"
            />
            <line
              x1="0"
              y1="135"
              x2="0"
              y2="-135"
              className="stroke-muted-foreground/30"
              strokeWidth="1.2"
              markerEnd="url(#l21-arrow-slate)"
            />
            <text x="168" y="15" className="text-[10px] fill-muted-foreground">x₁</text>
            <text x="8" y="-124" className="text-[10px] fill-muted-foreground">x₂</text>

            {/* 特征方向 1: y = x (斜率 1, -45度) */}
            <line
              x1="-125"
              y1="125"
              x2="135"
              y2="-135"
              className="stroke-emerald-500/40 dark:stroke-emerald-400/30"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <text
              x="92"
              y="-98"
              className="text-[10px] font-mono fill-emerald-600 dark:fill-emerald-400"
            >
              特征线 1 (λ₁ = 3)
            </text>

            {/* 特征方向 2: y = -x (斜率 -1, +45度) */}
            <line
              x1="-125"
              y1="-125"
              x2="135"
              y2="135"
              className="stroke-purple-500/40 dark:stroke-purple-400/30"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <text
              x="92"
              y="112"
              className="text-[10px] font-mono fill-purple-600 dark:fill-purple-400"
            >
              特征线 2 (λ₂ = 1)
            </text>

            {/* 向量 x₁ = [1, 1]^T (40, -40) */}
            <line
              x1="0"
              y1="0"
              x2="38"
              y2="-38"
              className="stroke-emerald-600 dark:stroke-emerald-400"
              strokeWidth="2.5"
              markerEnd="url(#l21-arrow-emerald)"
            />
            <text
              x="18"
              y="-46"
              className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300"
            >
              x₁ = [1, 1]ᵀ
            </text>

            {/* 变换后 Ax₁ = 3x₁ = [3, 3]^T (120, -120) */}
            <line
              x1="38"
              y1="-38"
              x2="114"
              y2="-114"
              className="stroke-emerald-500 dark:stroke-emerald-400"
              strokeWidth="2"
              strokeDasharray="2 2"
              markerEnd="url(#l21-arrow-emerald)"
            />
            <text
              x="116"
              y="-118"
              className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400"
            >
              Ax₁ = 3x₁
            </text>

            {/* 向量 x₂ = [1, -1]^T (40, 40) 与 Ax₂ = 1x₂ 重合 */}
            <line
              x1="0"
              y1="0"
              x2="38"
              y2="38"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2.5"
              markerEnd="url(#l21-arrow-purple)"
            />
            <text
              x="42"
              y="44"
              className="text-xs font-bold fill-purple-700 dark:fill-purple-300"
            >
              x₂ = Ax₂ (λ₂ = 1)
            </text>

            {/* 普通向量 v = [1.2, 0.2]^T -> (48, -8) */}
            <line
              x1="0"
              y1="0"
              x2="48"
              y2="-8"
              className="stroke-rose-500 dark:stroke-rose-400"
              strokeWidth="2"
              markerEnd="url(#l21-arrow-rose)"
            />
            <text
              x="52"
              y="-4"
              className="text-xs font-semibold fill-rose-600 dark:fill-rose-400"
            >
              v
            </text>

            {/* 变换后 Av = [2.6, 1.6]^T -> (104, -64) */}
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="-60"
              className="stroke-amber-500 dark:stroke-amber-400"
              strokeWidth="2"
              markerEnd="url(#l21-arrow-amber)"
            />
            <text
              x="104"
              y="-64"
              className="text-xs font-semibold fill-amber-600 dark:fill-amber-400"
            >
              Av (方向偏折！)
            </text>

            {/* 偏折弧线 */}
            <path
              d="M 45 -8 A 45 45 0 0 0 38 -24"
              fill="none"
              className="stroke-rose-400/80 dark:stroke-rose-400/60"
              strokeWidth="1.2"
              strokeDasharray="2 2"
            />
            <text
              x="48"
              y="-20"
              className="text-[9px] fill-rose-600 dark:fill-rose-400"
            >
              θ ≠ 0
            </text>
          </g>

          <rect
            x="16"
            y="312"
            width="368"
            height="26"
            rx="6"
            className="fill-background/80 stroke-border/60"
            strokeWidth="0.8"
          />
          <text
            x="24"
            y="329"
            className="text-[11px] font-medium fill-foreground"
          >
            结论：只有特征方向 x 满足 Ax 与 x 共线（纯拉伸或压缩）
          </text>
        </g>

        {/* ================= 右面板：代数桥梁 ================= */}
        <g transform="translate(430, 15)">
          <rect
            x="0"
            y="0"
            width="395"
            height="350"
            rx="12"
            className="fill-muted/20 stroke-border"
            strokeWidth="1"
          />

          <text
            x="20"
            y="30"
            className="text-sm font-bold fill-foreground"
          >
            代数桥梁：从不变方向到特征方程
          </text>
          <text
            x="20"
            y="48"
            className="text-xs fill-muted-foreground"
          >
            为什么求解非平凡解必须令行列式为零？
          </text>

          {/* 步骤 1 */}
          <g transform="translate(20, 65)">
            <rect
              x="0"
              y="0"
              width="355"
              height="48"
              rx="8"
              className="fill-background stroke-border"
              strokeWidth="1"
            />
            <text x="14" y="22" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">
              步骤 1：几何定义方程
            </text>
            <text x="14" y="38" className="text-xs font-mono fill-foreground">
              A x = λ x &#160;（其中要求 x ≠ 0）
            </text>
          </g>

          {/* 步骤 2 */}
          <g transform="translate(20, 125)">
            <rect
              x="0"
              y="0"
              width="355"
              height="48"
              rx="8"
              className="fill-background stroke-border"
              strokeWidth="1"
            />
            <text x="14" y="22" className="text-xs font-bold fill-indigo-600 dark:fill-indigo-400">
              步骤 2：移项归入统一算子
            </text>
            <text x="14" y="38" className="text-xs font-mono fill-foreground">
              (A - λ I&#8345;) x = 0 &#160;（齐次线性方程组）
            </text>
          </g>

          {/* 步骤 3：核心逻辑分叉 */}
          <g transform="translate(20, 185)">
            <rect
              x="0"
              y="0"
              width="355"
              height="115"
              rx="8"
              className="fill-background stroke-border"
              strokeWidth="1"
            />
            <text x="14" y="20" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">
              步骤 3：非平凡解的充要条件
            </text>

            <text x="14" y="38" className="text-[11px] fill-muted-foreground">
              • 若 A - λI 可逆 ⇒ x = (A - λI)⁻¹ 0 = 0（只剩平凡零向量，无意义！）
            </text>
            <text x="14" y="54" className="text-[11px] font-semibold fill-amber-600 dark:fill-amber-400">
              • 欲存在非零解 x ≠ 0 ⇒ 矩阵 (A - λI) 必须是奇异矩阵（不可逆）！
            </text>

            <line
              x1="14"
              y1="64"
              x2="341"
              y2="64"
              className="stroke-border"
              strokeWidth="0.8"
            />

            <text x="14" y="80" className="text-[11px] font-bold fill-emerald-600 dark:fill-emerald-400">
              双重视角等价表达：
            </text>
            <text x="24" y="96" className="text-[11px] font-mono fill-foreground">
              几何视角：Null(A - λI) ≠ &#123;0&#125; &#160;（存在非零特征子空间）
            </text>
            <text x="24" y="109" className="text-[11px] font-mono fill-foreground">
              代数视角：det(A - λI) = 0 &#160;（特征方程，解出特征值 λ）
            </text>
          </g>

          <rect
            x="20"
            y="312"
            width="355"
            height="26"
            rx="6"
            className="fill-blue-500/10 stroke-blue-500/30"
            strokeWidth="0.8"
          />
          <text
            x="28"
            y="329"
            className="text-[11px] font-semibold fill-blue-700 dark:fill-blue-300"
          >
            算法路线：先由 det(A - λI) = 0 求 λ，再解 (A - λI)x = 0 求 x
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}

export function GeometricEigenSpectraDiagram({
  caption = '无需特征多项式的几何心算：正交投影矩阵 $P$（特征值 $1$ 与 $0$）、镜像反射矩阵 $R = 2P - I$（特征值 $1$ 与 $-1$）及 $90^\\circ$ 旋转矩阵 $Q$（实空间内无特征线，特征值进入复数域 $\\pm i$）。',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 900 330"
        className="w-full h-auto max-w-5xl mx-auto font-sans select-none"
      >
        <defs>
          <marker
            id="l21-spec-emerald"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l21-spec-purple"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
          <marker
            id="l21-spec-blue"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l21-spec-rose"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-rose-500 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* ================= 面板 1：正交投影矩阵 P ================= */}
        <g transform="translate(15, 15)">
          <rect
            x="0"
            y="0"
            width="275"
            height="300"
            rx="10"
            className="fill-muted/20 stroke-border"
            strokeWidth="1"
          />

          <text x="16" y="26" className="text-xs font-bold fill-foreground">
            面板 1：正交投影矩阵 P
          </text>
          <text x="16" y="42" className="text-[11px] fill-muted-foreground">
            Col(P) 上保角不变，Null(P) 上坍缩为 0
          </text>

          {/* 几何坐标系，原点位于 (135, 150) */}
          <g transform="translate(135, 150)">
            {/* 投影直线 L (倾角 35度) */}
            <line
              x1="-105"
              y1="73"
              x2="115"
              y2="-80"
              className="stroke-emerald-500/40"
              strokeWidth="1.5"
            />
            <text x="65" y="-65" className="text-[10px] font-semibold fill-emerald-600 dark:fill-emerald-400">
              Col(P) 投影线
            </text>

            {/* 法向直线 L^perp (倾角 -55度) */}
            <line
              x1="-73"
              y1="-105"
              x2="80"
              y2="115"
              className="stroke-purple-500/40"
              strokeWidth="1.5"
            />
            <text x="-70" y="-85" className="text-[10px] font-semibold fill-purple-600 dark:fill-purple-400">
              Null(P) 垂线
            </text>

            {/* 投影线上的向量 x₁ */}
            <line
              x1="0"
              y1="0"
              x2="55"
              y2="-38"
              className="stroke-emerald-600 dark:stroke-emerald-400"
              strokeWidth="2.5"
              markerEnd="url(#l21-spec-emerald)"
            />
            <text x="15" y="-30" className="text-[11px] font-bold fill-emerald-600 dark:fill-emerald-400">
              x₁: Px₁ = 1·x₁
            </text>

            {/* 法线上的向量 x₂ */}
            <line
              x1="0"
              y1="0"
              x2="-40"
              y2="-57"
              className="stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2.5"
              markerEnd="url(#l21-spec-purple)"
            />
            <text x="-75" y="-45" className="text-[11px] font-bold fill-purple-600 dark:fill-purple-400">
              x₂: Px₂ = 0
            </text>

            {/* 投影虚线：x₂ 投影落入原点 */}
            <circle cx="0" cy="0" r="4" className="fill-rose-500" />
          </g>

          <rect
            x="12"
            y="235"
            width="251"
            height="52"
            rx="6"
            className="fill-background stroke-border/70"
            strokeWidth="0.8"
          />
          <text x="20" y="252" className="text-[10px] font-mono font-semibold fill-emerald-600 dark:fill-emerald-400">
            谱特征：λ₁ = 1, λ₂ = 0
          </text>
          <text x="20" y="267" className="text-[10px] fill-muted-foreground">
            代数验证：P² = P ⇒ λ² = λ ⇒ λ ∈ &#123;0, 1&#125;
          </text>
          <text x="20" y="280" className="text-[9px] fill-muted-foreground">
            几何重数：dim(Col P) 个 1，dim(Null P) 个 0
          </text>
        </g>

        {/* ================= 面板 2：镜像反射矩阵 R = 2P - I ================= */}
        <g transform="translate(305, 15)">
          <rect
            x="0"
            y="0"
            width="280"
            height="300"
            rx="10"
            className="fill-muted/20 stroke-border"
            strokeWidth="1"
          />

          <text x="16" y="26" className="text-xs font-bold fill-foreground">
            面板 2：镜像反射矩阵 R = 2P - I
          </text>
          <text x="16" y="42" className="text-[11px] fill-muted-foreground">
            镜面保持不变 (λ=1)，法向反转 180° (λ=-1)
          </text>

          {/* 几何坐标系，原点位于 (140, 150) */}
          <g transform="translate(140, 150)">
            {/* 镜面 M (倾角 35度) */}
            <line
              x1="-105"
              y1="73"
              x2="115"
              y2="-80"
              className="stroke-blue-500/40"
              strokeWidth="2"
            />
            <text x="65" y="-65" className="text-[10px] font-semibold fill-blue-600 dark:fill-blue-400">
              镜面 M (λ = 1)
            </text>

            {/* 镜面法线 M^perp */}
            <line
              x1="-73"
              y1="-105"
              x2="80"
              y2="115"
              className="stroke-rose-500/40"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />
            <text x="-70" y="-85" className="text-[10px] font-semibold fill-rose-600 dark:fill-rose-400">
              法向 (λ = -1)
            </text>

            {/* 镜面上的向量 x₁ */}
            <line
              x1="0"
              y1="0"
              x2="55"
              y2="-38"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              markerEnd="url(#l21-spec-blue)"
            />
            <text x="25" y="-45" className="text-[11px] font-bold fill-blue-600 dark:fill-blue-400">
              Rx₁ = +1·x₁
            </text>

            {/* 法向原向量 x₂ */}
            <line
              x1="0"
              y1="0"
              x2="-38"
              y2="-55"
              className="stroke-rose-500 dark:stroke-rose-400"
              strokeWidth="2"
              markerEnd="url(#l21-spec-rose)"
            />
            <text x="-70" y="-40" className="text-[10px] font-semibold fill-rose-600 dark:fill-rose-400">
              x₂ (法向)
            </text>

            {/* 反射后向量 Rx₂ = -x₂ */}
            <line
              x1="0"
              y1="0"
              x2="38"
              y2="55"
              className="stroke-rose-600 dark:stroke-rose-400"
              strokeWidth="2.5"
              markerEnd="url(#l21-spec-rose)"
            />
            <text x="10" y="70" className="text-[11px] font-bold fill-rose-600 dark:fill-rose-400">
              Rx₂ = -1·x₂
            </text>

            {/* 翻转虚线弧 */}
            <path
              d="M -22 -32 A 40 40 0 0 1 22 32"
              fill="none"
              className="stroke-rose-400/60"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </g>

          <rect
            x="12"
            y="235"
            width="256"
            height="52"
            rx="6"
            className="fill-background stroke-border/70"
            strokeWidth="0.8"
          />
          <text x="20" y="252" className="text-[10px] font-mono font-semibold fill-blue-600 dark:fill-blue-400">
            谱特征：λ₁ = 1, λ₂ = -1
          </text>
          <text x="20" y="267" className="text-[10px] fill-muted-foreground">
            代数验证：R² = I ⇒ λ² = 1 ⇒ λ ∈ &#123;1, -1&#125;
          </text>
          <text x="20" y="280" className="text-[9px] fill-muted-foreground">
            由 P 平移获得：R = 2P - I ⇒ 2(1)-1=1, 2(0)-1=-1
          </text>
        </g>

        {/* ================= 面板 3：90° 旋转矩阵 Q ================= */}
        <g transform="translate(600, 15)">
          <rect
            x="0"
            y="0"
            width="285"
            height="300"
            rx="10"
            className="fill-muted/20 stroke-border"
            strokeWidth="1"
          />

          <text x="16" y="26" className="text-xs font-bold fill-foreground">
            面板 3：90° 纯旋转 Q = [0 -1; 1 0]
          </text>
          <text x="16" y="42" className="text-[11px] fill-muted-foreground">
            全平面无实不变方向，特征值进入复数域
          </text>

          {/* 几何坐标系，原点位于 (142, 145) */}
          <g transform="translate(142, 145)">
            <circle
              cx="0"
              cy="0"
              r="62"
              className="fill-none stroke-muted-foreground/30"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* 水平向量 v = [1, 0]^T */}
            <line
              x1="0"
              y1="0"
              x2="60"
              y2="0"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              markerEnd="url(#l21-spec-blue)"
            />
            <text x="32" y="15" className="text-[11px] font-bold fill-blue-600 dark:fill-blue-400">
              v = [1, 0]ᵀ
            </text>

            {/* 旋转 90 度后的向量 Qv = [0, 1]^T */}
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-60"
              className="stroke-amber-500 dark:stroke-amber-400"
              strokeWidth="2.5"
              markerEnd="url(#l21-spec-emerald)"
            />
            <text x="-65" y="-55" className="text-[11px] font-bold fill-amber-600 dark:fill-amber-400">
              Qv = [0, 1]ᵀ
            </text>

            {/* 旋转 90 度弧线 */}
            <path
              d="M 35 0 A 35 35 0 0 0 0 -35"
              fill="none"
              className="stroke-rose-500"
              strokeWidth="1.5"
              markerEnd="url(#l21-spec-rose)"
            />
            <text x="24" y="-22" className="text-[10px] font-bold fill-rose-600 dark:fill-rose-400">
              +90°
            </text>

            {/* 核心结论文字 */}
            <text
              x="0"
              y="40"
              textAnchor="middle"
              className="text-[10px] font-medium fill-rose-600 dark:fill-rose-400"
            >
              实平面内没有任何向量与自身像共线！
            </text>
          </g>

          <rect
            x="12"
            y="235"
            width="261"
            height="52"
            rx="6"
            className="fill-background stroke-border/70"
            strokeWidth="0.8"
          />
          <text x="20" y="252" className="text-[10px] font-mono font-semibold fill-purple-600 dark:fill-purple-400">
            复数谱：λ₁ = +i, λ₂ = -i
          </text>
          <text x="20" y="267" className="text-[10px] fill-muted-foreground">
            特征方程：λ² + 1 = 0 ⇒ λ = ±i
          </text>
          <text x="20" y="280" className="text-[9px] fill-muted-foreground">
            复特征向量：x₁ = [1, i]ᵀ, x₂ = [1, -i]ᵀ
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
