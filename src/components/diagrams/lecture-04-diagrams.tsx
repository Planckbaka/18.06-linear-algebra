import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function LUMultiplierNoFillDiagram({
  caption = '为什么线性代数偏爱 $A = LU$ 而不是 $EA = U$？左图展示正向总消元矩阵 $E = E_{32}E_{21}$：由于先作用于第 2 行的乘数又被第 3 行卷入，左下角 $(3,1)$ 处产生了交叉污染项 $+6$；右图展示逆乘积 $L = E_{21}^{-1}E_{32}^{-1}$：先执行右侧 $E_{32}^{-1}$ 再执行左侧 $E_{21}^{-1}$，所有消元乘数 $\\ell_{21}=2, \\ell_{31}=0, \\ell_{32}=5$ **原封不动地对号入座**，绝无任何交叉干扰！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Why L = E⁻¹ Beats E: Zero Cross-Contamination of Multipliers"
      caption={caption}
    >
      <svg
        viewBox="0 0 710 275"
        className="w-full max-w-[710px] select-none text-foreground"
        role="img"
        aria-label="Comparison between contaminated E = E32 E21 and clean L = E21 inverse E32 inverse"
      >
        {/* ================= LEFT PANEL: CONTAMINATED E = E32 E21 ================= */}
        <g transform="translate(18, 16)">
          <rect
            x="0"
            y="0"
            width="326"
            height="242"
            rx="12"
            className="fill-rose-500/[0.04] stroke-rose-500/35"
          />
          <text x="163" y="25" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[12.5px] font-bold">
            ✗ 正向总消元矩阵 E = E₃₂ E₂₁（交叉污染!）
          </text>
          <text x="163" y="45" textAnchor="middle" className="fill-current font-mono text-[10.5px] opacity-75">
            先减 2 倍第 1 行 (ℓ₂₁=2)，再减 5 倍新第 2 行 (ℓ₃₂=5)
          </text>

          {/* E_32 * E_21 = E */}
          <g transform="translate(20, 68)">
            {/* E_32 */}
            <rect x="0" y="0" width="76" height="84" rx="5" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.3" />
            <text x="16" y="24" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
            <text x="38" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
            <text x="60" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

            <text x="16" y="48" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
            <text x="38" y="48" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
            <text x="60" y="48" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

            <text x="16" y="72" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
            <text x="38" y="72" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[12px] font-bold">−5</text>
            <text x="60" y="72" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
            <text x="38" y="102" textAnchor="middle" className="fill-current font-mono text-[10px] opacity-70">E₃₂</text>

            {/* E_21 */}
            <g transform="translate(88, 0)">
              <rect x="0" y="0" width="76" height="84" rx="5" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.3" />
              <text x="16" y="24" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
              <text x="38" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
              <text x="60" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

              <text x="16" y="48" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-mono text-[12px] font-bold">−2</text>
              <text x="38" y="48" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
              <text x="60" y="48" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

              <text x="16" y="72" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
              <text x="38" y="72" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
              <text x="60" y="72" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
              <text x="38" y="102" textAnchor="middle" className="fill-current font-mono text-[10px] opacity-70">E₂₁</text>
            </g>

            <text x="180" y="47" textAnchor="middle" className="fill-current font-mono text-[14px] font-bold">=</text>

            {/* Result E */}
            <g transform="translate(198, 0)">
              <rect x="0" y="0" width="88" height="84" rx="5" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.4" />
              {/* Contaminated (3,1) cell */}
              <rect x="5" y="56" width="28" height="22" rx="4" className="fill-rose-500/30 stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.5" />
              <text x="19" y="24" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
              <text x="46" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
              <text x="71" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

              <text x="19" y="48" textAnchor="middle" className="fill-current font-mono text-[12px]">−2</text>
              <text x="46" y="48" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
              <text x="71" y="48" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

              <text x="19" y="72" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[12px] font-bold">10</text>
              <text x="46" y="72" textAnchor="middle" className="fill-current font-mono text-[12px]">−5</text>
              <text x="71" y="72" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
              <text x="44" y="102" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 font-mono text-[10px] font-semibold">
                (−5)(−2) = +10 污染!
              </text>
            </g>
          </g>

          <text x="163" y="216" textAnchor="middle" className="fill-current text-[11px] opacity-80">
            明明 ℓ₃₁ = 0，左下角却冒出 (−ℓ₃₂)(−ℓ₂₁) = +10 非零填充!
          </text>
        </g>

        {/* ================= RIGHT PANEL: CLEAN L = E21^-1 E32^-1 ================= */}
        <g transform="translate(364, 16)">
          <rect
            x="0"
            y="0"
            width="328"
            height="242"
            rx="12"
            className="fill-emerald-500/[0.05] stroke-emerald-500/40"
          />
          <text x="164" y="25" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12.5px] font-bold">
            ✓ 逆矩阵 L = E₂₁⁻¹ E₃₂⁻¹（乘数精准归位!）
          </text>
          <text x="164" y="45" textAnchor="middle" className="fill-current font-mono text-[10.5px] opacity-75">
            穿脱反序求逆：A = (E₃₂ E₂₁)⁻¹ U = E₂₁⁻¹ E₃₂⁻¹ U = LU
          </text>

          <g transform="translate(20, 68)">
            {/* E_21^-1 */}
            <rect x="0" y="0" width="76" height="84" rx="5" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.3" />
            <text x="16" y="24" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
            <text x="38" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
            <text x="60" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

            <text x="16" y="48" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[12px] font-bold">2</text>
            <text x="38" y="48" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
            <text x="60" y="48" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

            <text x="16" y="72" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
            <text x="38" y="72" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
            <text x="60" y="72" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
            <text x="38" y="102" textAnchor="middle" className="fill-current font-mono text-[10px] opacity-70">E₂₁⁻¹</text>

            {/* E_32^-1 */}
            <g transform="translate(88, 0)">
              <rect x="0" y="0" width="76" height="84" rx="5" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.3" />
              <text x="16" y="24" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
              <text x="38" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
              <text x="60" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

              <text x="16" y="48" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
              <text x="38" y="48" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
              <text x="60" y="48" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

              <text x="16" y="72" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
              <text x="38" y="72" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[12px] font-bold">5</text>
              <text x="60" y="72" textAnchor="middle" className="fill-current font-mono text-[12px]">1</text>
              <text x="38" y="102" textAnchor="middle" className="fill-current font-mono text-[10px] opacity-70">E₃₂⁻¹</text>
            </g>

            <text x="180" y="47" textAnchor="middle" className="fill-current font-mono text-[14px] font-bold">=</text>

            {/* Clean L */}
            <g transform="translate(198, 0)">
              <rect x="0" y="0" width="88" height="84" rx="5" className="fill-emerald-500/10 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.4" />
              <rect x="6" y="34" width="24" height="20" rx="3" className="fill-emerald-500/25" />
              <rect x="34" y="57" width="24" height="20" rx="3" className="fill-emerald-500/25" />
              <text x="18" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] font-bold">1</text>
              <text x="46" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>
              <text x="72" y="24" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

              <text x="18" y="48" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[12px] font-bold">2</text>
              <text x="46" y="48" textAnchor="middle" className="fill-current font-mono text-[12px] font-bold">1</text>
              <text x="72" y="48" textAnchor="middle" className="fill-current font-mono text-[12px] opacity-40">0</text>

              <text x="18" y="72" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-mono text-[12px] font-bold">0</text>
              <text x="46" y="72" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[12px] font-bold">5</text>
              <text x="72" y="72" textAnchor="middle" className="fill-current font-mono text-[12px] font-bold">1</text>
              <text x="44" y="102" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px] font-semibold">
                L_ij = ℓ_ij 零填充!
              </text>
            </g>
          </g>

          <text x="164" y="216" textAnchor="middle" className="fill-current text-[11px] opacity-80">
            直接抄入每步消元乘数 ℓ_ij，稀疏带状结构得以完美保留!
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}

export function LUComplexityPyramidDiagram({
  caption = '高斯消元计算量 $\\frac{1}{3}n^3$ 的立体几何直觉：第 $1$ 步消元需要更新 $(n-1)\\times(n-1)$ 整块正方形面板（约 $n^2$ 次乘加），第 $2$ 步缩减为 $(n-2)^2$，直至最后一步 $1^2$。将这 $n$ 层正方形切片层层叠起恰好拼出一座底边为 $n$、高为 $n$ 的**四棱锥（Pyramid）**，体积恰为正方体 $n^3$ 的三分之一！而对右侧向量 $\\mathbf{b}$ 做前代与回代仅是一层薄片 $\\approx n^2$。',
}: {
  caption?: string;
}) {
  const layers = [
    { w: 112, h: 16, y: 166, label: 'k = 1: ≈ n² ops' },
    { w: 90, h: 16, y: 147, label: '' },
    { w: 68, h: 16, y: 128, label: 'k = 3: (n−2)²' },
    { w: 46, h: 16, y: 109, label: '' },
    { w: 24, h: 16, y: 90, label: 'top: 1²' },
  ];

  return (
    <MathDiagram
      title="Operation Count Geometry: Elimination Pyramid (⅓n³) vs. Substitution Slice (n²)"
      caption={caption}
    >
      <svg
        viewBox="0 0 650 230"
        className="w-full max-w-[650px] select-none text-foreground"
        role="img"
        aria-label="Pyramid visualization of sum of k squared equals n cubed over 3"
      >
        {/* Left: Pyramid of A -> LU */}
        <g transform="translate(55, 10)">
          <text x="125" y="18" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[12.5px] font-bold">
            矩阵分解 A = LU 成本：四棱锥体积 ≈ ⅓ n³
          </text>
          {/* Dashed bounding cube hint */}
          <rect
            x="69"
            y="72"
            width="112"
            height="112"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeDasharray="4 3"
          />
          <text x="192" y="84" className="fill-current font-mono text-[10px] opacity-55">
            外接立方体 n³
          </text>

          {layers.map((layer, idx) => (
            <g key={idx}>
              <rect
                x={125 - layer.w / 2}
                y={layer.y}
                width={layer.w}
                height={layer.h}
                rx="3"
                className="fill-blue-500/25 stroke-blue-600 dark:stroke-blue-400"
                strokeWidth="1.3"
              />
            </g>
          ))}
          <text x="125" y="204" textAnchor="middle" className="fill-current font-mono text-[11px]">
            n² + (n−1)² + ⋯ + 1² ≈ ⅓ n³
          </text>
        </g>

        {/* Center divider */}
        <line x1="355" y1="20" x2="355" y2="210" stroke="currentColor" strokeOpacity="0.14" strokeDasharray="4 4" />

        {/* Right: Flat 2D triangles for Lc=Pb & Ux=c */}
        <g transform="translate(385, 10)">
          <text x="120" y="18" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[12.5px] font-bold">
            单次右侧求解 Lc = Pb, Ux = c：薄片面积 = n²
          </text>
          {/* Lower triangle Lc = b */}
          <polygon
            points="45,82 45,162 115,162"
            className="fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.5"
          />
          <text x="72" y="152" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[10px] font-bold">
            ½ n²
          </text>
          <text x="80" y="178" textAnchor="middle" className="fill-current text-[10px] opacity-75">
            前向代入 Lc=Pb
          </text>

          <text x="132" y="128" textAnchor="middle" className="fill-current font-mono text-[14px] font-bold">+</text>

          {/* Upper triangle Ux = c */}
          <polygon
            points="150,82 220,82 220,162"
            className="fill-amber-500/25 stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.5"
          />
          <text x="193" y="106" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 font-mono text-[10px] font-bold">
            ½ n²
          </text>
          <text x="185" y="178" textAnchor="middle" className="fill-current text-[10px] opacity-75">
            回代求解 Ux=c
          </text>

          <text x="120" y="204" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[11px] font-semibold">
            ½ n² + ½ n² = n²  (n=1000 时快 333 倍!)
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
