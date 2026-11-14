import * as React from 'react';
import { MathDiagram } from './math-diagram';

/**
 * L22 Diagram 1: 对角化旁路与矩阵幂可换图 (Diagonalization Bypass for A^k)
 * Visualizes the commutative diagram A^k u_0 = S Λ^k S^{-1} u_0:
 * Top path: coupled physical space (hard continuous matrix multiplication)
 * Down-Right-Up bypass: project into modal coordinates via S^{-1}, decouple into scalar powers Λ^k,
 * and recombine via S.
 */
export function DiagonalizationPipelineDiagram({
  caption = '矩阵幂的对角化旁路：直接连乘 $A^k \\mathbf{u}_0$ 处于耦合物理基底空间；通过特征基底变换 $S^{-1}$ 解耦为对角模态 $\\Lambda^k$，最后由 $S$ 重构为 $\\mathbf{u}_k = \\sum c_i \\lambda_i^k \\mathbf{x}_i$',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram title="矩阵幂的对角化旁路可换图" caption={caption}>
      <svg
        viewBox="0 0 840 380"
        className="w-full h-auto font-sans text-sm select-none"
        aria-label="Diagonalization Pipeline Commutative Diagram"
      >
        <defs>
          <marker
            id="l22-arrow-slate"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-muted-foreground" />
          </marker>
          <marker
            id="l22-arrow-blue"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l22-arrow-emerald"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l22-arrow-amber"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l22-arrow-purple"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
        </defs>

        {/* Top Region: Coupled Physical Coordinate Space */}
        <rect
          x="30"
          y="20"
          width="780"
          height="125"
          rx="10"
          className="fill-muted/20 stroke-border"
          strokeWidth="1.5"
        />
        <text
          x="45"
          y="42"
          className="text-xs font-semibold fill-muted-foreground tracking-wide"
        >
          耦合物理基底空间 (Coupled Physical Space) —— 坐标变量强交织，计算复杂度高
        </text>

        {/* Top Node u_0 */}
        <g transform="translate(90, 85)">
          <circle
            r="28"
            className="fill-card stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            className="text-sm font-bold fill-blue-600 dark:fill-blue-400"
          >
            u&#8320;
          </text>
          <text
            x="0"
            y="42"
            textAnchor="middle"
            className="text-[11px] fill-muted-foreground"
          >
            初始状态
          </text>
        </g>

        {/* Step Arrow u_0 -> u_1 */}
        <path
          d="M125,85 L200,85"
          className="stroke-muted-foreground"
          strokeWidth="1.8"
          markerEnd="url(#l22-arrow-slate)"
        />
        <text
          x="162"
          y="75"
          textAnchor="middle"
          className="text-xs font-medium fill-muted-foreground"
        >
          × A
        </text>

        {/* Top Node u_1 */}
        <g transform="translate(235, 85)">
          <circle
            r="24"
            className="fill-card stroke-border"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            className="text-xs font-semibold fill-foreground"
          >
            u&#8321; = Au&#8320;
          </text>
        </g>

        {/* Step Arrow u_1 -> u_2 */}
        <path
          d="M265,85 L335,85"
          className="stroke-muted-foreground"
          strokeWidth="1.8"
          markerEnd="url(#l22-arrow-slate)"
        />
        <text
          x="300"
          y="75"
          textAnchor="middle"
          className="text-xs font-medium fill-muted-foreground"
        >
          × A
        </text>

        {/* Top Node u_2 */}
        <g transform="translate(370, 85)">
          <circle
            r="24"
            className="fill-card stroke-border"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            className="text-xs font-semibold fill-foreground"
          >
            u&#8322; = A&#178;u&#8320;
          </text>
        </g>

        {/* Step Arrow u_2 -> ... */}
        <path
          d="M400,85 L470,85"
          className="stroke-muted-foreground stroke-dashed"
          strokeDasharray="4 3"
          strokeWidth="1.8"
          markerEnd="url(#l22-arrow-slate)"
        />
        <text
          x="495"
          y="88"
          textAnchor="middle"
          className="text-sm font-bold fill-muted-foreground"
        >
          ······
        </text>

        {/* Step Arrow ... -> u_k */}
        <path
          d="M520,85 L690,85"
          className="stroke-muted-foreground stroke-dashed"
          strokeDasharray="4 3"
          strokeWidth="1.8"
          markerEnd="url(#l22-arrow-slate)"
        />
        <text
          x="605"
          y="75"
          textAnchor="middle"
          className="text-xs font-medium fill-muted-foreground"
        >
          × A (第 k 步)
        </text>

        {/* Top Node u_k */}
        <g transform="translate(730, 85)">
          <circle
            r="28"
            className="fill-card stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            className="text-sm font-bold fill-blue-600 dark:fill-blue-400"
          >
            u&#7522;
          </text>
          <text
            x="0"
            y="42"
            textAnchor="middle"
            className="text-[11px] font-medium fill-blue-600 dark:fill-blue-400"
          >
            = A&#7522; u&#8320;
          </text>
        </g>

        {/* Top Direct Curved Path: A^k */}
        <path
          d="M100,55 C 220,10 600,10 720,55"
          fill="none"
          className="stroke-rose-500/70 dark:stroke-rose-400/70"
          strokeWidth="1.8"
          strokeDasharray="5 4"
          markerEnd="url(#l22-arrow-slate)"
        />
        <text
          x="410"
          y="26"
          textAnchor="middle"
          className="text-[11px] font-medium fill-rose-600 dark:fill-rose-400"
        >
          直接连乘 A&#7522; (困难路径：全矩阵相乘，计算量 O(k n&#179;))
        </text>

        {/* Down Arrow: S^{-1} (Decomposition / Change of Basis) */}
        <g transform="translate(90, 120)">
          <path
            d="M0,0 L0,95"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="2.5"
            markerEnd="url(#l22-arrow-amber)"
          />
          <rect
            x="8"
            y="32"
            width="118"
            height="36"
            rx="6"
            className="fill-card stroke-amber-500/40"
            strokeWidth="1"
          />
          <text
            x="67"
            y="47"
            textAnchor="middle"
            className="text-xs font-bold fill-amber-600 dark:fill-amber-400"
          >
            S&#8315;&#185; 投影
          </text>
          <text
            x="67"
            y="61"
            textAnchor="middle"
            className="text-[10px] fill-muted-foreground"
          >
            c = S&#8315;&#185; u&#8320; (模态振幅)
          </text>
        </g>

        {/* Bottom Region: Decoupled Eigen-Mode Coordinate Space */}
        <rect
          x="30"
          y="225"
          width="780"
          height="135"
          rx="10"
          className="fill-emerald-500/5 dark:fill-emerald-400/5 stroke-emerald-500/30 dark:stroke-emerald-400/30"
          strokeWidth="1.5"
        />
        <text
          x="45"
          y="247"
          className="text-xs font-semibold fill-emerald-600 dark:fill-emerald-400 tracking-wide"
        >
          特征基底解耦空间 (Decoupled Modal Space) —— 模态完全独立，标量并行幂运算
        </text>

        {/* Bottom Node c */}
        <g transform="translate(90, 290)">
          <rect
            x="-35"
            y="-26"
            width="70"
            height="52"
            rx="8"
            className="fill-card stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2"
          />
          <text
            x="0"
            y="-6"
            textAnchor="middle"
            className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400"
          >
            c
          </text>
          <text
            x="0"
            y="12"
            textAnchor="middle"
            className="text-[10px] fill-muted-foreground"
          >
            [c&#8321;, c&#8322;, ..., c&#8345;]&#7511;
          </text>
        </g>

        {/* Decoupled Parallel Modal Rays */}
        <g transform="translate(140, 260)">
          {/* Mode 1 */}
          <line
            x1="0"
            y1="8"
            x2="480"
            y2="8"
            className="stroke-emerald-600/70 dark:stroke-emerald-400/70"
            strokeWidth="1.8"
            markerEnd="url(#l22-arrow-emerald)"
          />
          <text
            x="240"
            y="3"
            textAnchor="middle"
            className="text-[11px] font-semibold fill-emerald-600 dark:fill-emerald-400"
          >
            模态 1: c&#8321; &#8594; c&#8321; &#955;&#8321;&#7522; (标量乘方)
          </text>

          {/* Mode 2 */}
          <line
            x1="0"
            y1="34"
            x2="480"
            y2="34"
            className="stroke-teal-600/70 dark:stroke-teal-400/70"
            strokeWidth="1.8"
            markerEnd="url(#l22-arrow-emerald)"
          />
          <text
            x="240"
            y="29"
            textAnchor="middle"
            className="text-[11px] font-semibold fill-teal-600 dark:fill-teal-400"
          >
            模态 2: c&#8322; &#8594; c&#8322; &#955;&#8322;&#7522; (独立演化)
          </text>

          {/* Mode n */}
          <line
            x1="0"
            y1="58"
            x2="480"
            y2="58"
            className="stroke-emerald-600/70 dark:stroke-emerald-400/70 stroke-dashed"
            strokeDasharray="4 3"
            strokeWidth="1.8"
            markerEnd="url(#l22-arrow-emerald)"
          />
          <text
            x="240"
            y="54"
            textAnchor="middle"
            className="text-[11px] font-medium fill-muted-foreground"
          >
            模态 n: c&#8345; &#8594; c&#8345; &#955;&#8345;&#7522;
          </text>
        </g>

        {/* Central Operator Badge: Λ^k */}
        <g transform="translate(380, 320)">
          <rect
            x="-90"
            y="-14"
            width="180"
            height="26"
            rx="6"
            className="fill-card stroke-emerald-500"
            strokeWidth="1.2"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400"
          >
            &#923;&#7522; = diag(&#955;&#8321;&#7522;, &#955;&#8322;&#7522;, ..., &#955;&#8345;&#7522;)
          </text>
        </g>

        {/* Bottom Node Λ^k c */}
        <g transform="translate(730, 290)">
          <rect
            x="-45"
            y="-26"
            width="90"
            height="52"
            rx="8"
            className="fill-card stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2"
          />
          <text
            x="0"
            y="-6"
            textAnchor="middle"
            className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400"
          >
            &#923;&#7522; c
          </text>
          <text
            x="0"
            y="12"
            textAnchor="middle"
            className="text-[10px] fill-muted-foreground"
          >
            [c&#8321;&#955;&#8321;&#7522;, ..., c&#8345;&#955;&#8345;&#7522;]&#7511;
          </text>
        </g>

        {/* Up Arrow: S (Reconstruction / Synthesis) */}
        <g transform="translate(730, 215)">
          <path
            d="M0,0 L0,-95"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.5"
            markerEnd="url(#l22-arrow-purple)"
          />
          <rect
            x="-135"
            y="-68"
            width="122"
            height="46"
            rx="6"
            className="fill-card stroke-purple-500/40"
            strokeWidth="1"
          />
          <text
            x="-74"
            y="-52"
            textAnchor="middle"
            className="text-xs font-bold fill-purple-600 dark:fill-purple-400"
          >
            S 重构合成
          </text>
          <text
            x="-74"
            y="-38"
            textAnchor="middle"
            className="text-[10px] fill-muted-foreground"
          >
            u&#7522; = &#8721; c&#7522; &#955;&#7522;&#7522; x&#7522;
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}

/**
 * L22 Diagram 2: 对角化充分条件 vs 充要条件与亏损矩阵 (Multiplicity vs Defective)
 * Three-panel side-by-side comparison:
 * 1. Distinct eigenvalues (Sufficient): λ_1 != λ_2 => 2 independent eigenvectors.
 * 2. Repeated eigenvalue, Full eigenspace (Necessary & Sufficient holds): I_2, AM=2, GM=2 => Diagonalizable.
 * 3. Repeated eigenvalue, Defective / Shear (GM < AM): [1 1; 0 1], AM=2, GM=1 => NOT diagonalizable.
 */
export function MultiplicityVsDefectiveDiagram({
  caption = '对角化充分与充要条件辨析：相异特征值（左，充分非必要，可对角化）；重特征值但几何重数等于代数重数（中，$I_2$，可对角化）；重特征值且几何重数亏损（右，剪切矩阵，不可对角化）',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram title="对角化条件与亏损矩阵辨析" caption={caption}>
      <svg
        viewBox="0 0 900 370"
        className="w-full h-auto font-sans text-sm select-none"
        aria-label="Multiplicity vs Defective Comparison Diagram"
      >
        <defs>
          <marker
            id="l22-mvd-axis"
            markerWidth="5"
            markerHeight="5"
            refX="4"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L5,2.5 L0,5 Z" className="fill-muted-foreground/60" />
          </marker>
          <marker
            id="l22-mvd-blue"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l22-mvd-emerald"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l22-mvd-rose"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* Panel 1: Distinct Eigenvalues (Sufficient Condition) */}
        <g transform="translate(20, 20)">
          <rect
            x="0"
            y="0"
            width="270"
            height="330"
            rx="10"
            className="fill-muted/15 stroke-border"
            strokeWidth="1.5"
          />
          {/* Badge */}
          <rect
            x="16"
            y="14"
            width="238"
            height="26"
            rx="5"
            className="fill-emerald-500/10 stroke-emerald-500/30"
            strokeWidth="1"
          />
          <text
            x="135"
            y="31"
            textAnchor="middle"
            className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400"
          >
            情况 1：无重特征值 (充分条件)
          </text>

          {/* Subtitle & Matrix */}
          <text
            x="135"
            y="60"
            textAnchor="middle"
            className="text-[12px] font-semibold fill-foreground"
          >
            &#955;&#8321; &#8800; &#955;&#8322; &#8658; 必然可对角化
          </text>
          <text
            x="135"
            y="78"
            textAnchor="middle"
            className="text-[11px] fill-muted-foreground"
          >
            例: A = [ 2  1 ; 1  2 ]
          </text>

          {/* Math details */}
          <rect
            x="20"
            y="90"
            width="230"
            height="44"
            rx="6"
            className="fill-card stroke-border"
            strokeWidth="1"
          />
          <text
            x="32"
            y="108"
            className="text-[11px] font-medium fill-foreground"
          >
            &#955;&#8321; = 3, AM(3)=1, GM(3)=1
          </text>
          <text
            x="32"
            y="125"
            className="text-[11px] font-medium fill-foreground"
          >
            &#955;&#8322; = 1, AM(1)=1, GM(1)=1
          </text>

          {/* Coordinate Plot for Panel 1 */}
          <g transform="translate(135, 215)">
            {/* Axes */}
            <line
              x1="-75"
              y1="0"
              x2="75"
              y2="0"
              className="stroke-muted-foreground/30"
              strokeWidth="1.2"
              markerEnd="url(#l22-mvd-axis)"
            />
            <line
              x1="0"
              y1="65"
              x2="0"
              y2="-65"
              className="stroke-muted-foreground/30"
              strokeWidth="1.2"
              markerEnd="url(#l22-mvd-axis)"
            />
            {/* Eigenvector 1: [1, 1] */}
            <line
              x1="-45"
              y1="45"
              x2="45"
              y2="-45"
              className="stroke-blue-600/40 dark:stroke-blue-400/40 stroke-dashed"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="0"
              x2="45"
              y2="-45"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              markerEnd="url(#l22-mvd-blue)"
            />
            <text
              x="52"
              y="-42"
              className="text-[11px] font-bold fill-blue-600 dark:fill-blue-400"
            >
              x&#8321; = [1, 1]&#7511;
            </text>

            {/* Eigenvector 2: [-1, 1] */}
            <line
              x1="45"
              y1="45"
              x2="-45"
              y2="-45"
              className="stroke-emerald-600/40 dark:stroke-emerald-400/40 stroke-dashed"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="0"
              x2="-45"
              y2="-45"
              className="stroke-emerald-600 dark:stroke-emerald-400"
              strokeWidth="2.5"
              markerEnd="url(#l22-mvd-emerald)"
            />
            <text
              x="-105"
              y="-42"
              className="text-[11px] font-bold fill-emerald-600 dark:fill-emerald-400"
            >
              x&#8322; = [-1, 1]&#7511;
            </text>
          </g>

          {/* Footnote verdict */}
          <rect
            x="20"
            y="288"
            width="230"
            height="28"
            rx="5"
            className="fill-emerald-500/15"
          />
          <text
            x="135"
            y="306"
            textAnchor="middle"
            className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300"
          >
            &#10003; 满秩基底 S：span(x&#8321;, x&#8322;) = &#8477;&#178;
          </text>
        </g>

        {/* Panel 2: Repeated Eigenvalue, Full Eigenspace (Diagonalizable) */}
        <g transform="translate(315, 20)">
          <rect
            x="0"
            y="0"
            width="270"
            height="330"
            rx="10"
            className="fill-muted/15 stroke-border"
            strokeWidth="1.5"
          />
          {/* Badge */}
          <rect
            x="16"
            y="14"
            width="238"
            height="26"
            rx="5"
            className="fill-blue-500/10 stroke-blue-500/30"
            strokeWidth="1"
          />
          <text
            x="135"
            y="31"
            textAnchor="middle"
            className="text-xs font-bold fill-blue-600 dark:fill-blue-400"
          >
            情况 2：有重数但满秩 (充要成立)
          </text>

          {/* Subtitle & Matrix */}
          <text
            x="135"
            y="60"
            textAnchor="middle"
            className="text-[12px] font-semibold fill-foreground"
          >
            AM(1) = 2, GM(1) = 2 &#8658; 可对角化
          </text>
          <text
            x="135"
            y="78"
            textAnchor="middle"
            className="text-[11px] fill-muted-foreground"
          >
            例: A = I&#8322; = [ 1  0 ; 0  1 ]
          </text>

          {/* Math details */}
          <rect
            x="20"
            y="90"
            width="230"
            height="44"
            rx="6"
            className="fill-card stroke-border"
            strokeWidth="1"
          />
          <text
            x="32"
            y="108"
            className="text-[11px] font-medium fill-foreground"
          >
            A - 1&#183;I = 0 &#8658; Null(A - I) = &#8477;&#178;
          </text>
          <text
            x="32"
            y="125"
            className="text-[11px] font-medium fill-foreground"
          >
            GM = dim Null(A - I) = 2 = AM
          </text>

          {/* Coordinate Plot for Panel 2 */}
          <g transform="translate(135, 215)">
            {/* Plane Highlight */}
            <circle
              r="55"
              className="fill-blue-500/10 stroke-blue-500/20"
              strokeDasharray="3 3"
            />
            {/* Axes */}
            <line
              x1="-75"
              y1="0"
              x2="75"
              y2="0"
              className="stroke-muted-foreground/30"
              strokeWidth="1.2"
              markerEnd="url(#l22-mvd-axis)"
            />
            <line
              x1="0"
              y1="65"
              x2="0"
              y2="-65"
              className="stroke-muted-foreground/30"
              strokeWidth="1.2"
              markerEnd="url(#l22-mvd-axis)"
            />

            {/* Standard Basis e_1 and e_2 */}
            <line
              x1="0"
              y1="0"
              x2="48"
              y2="0"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              markerEnd="url(#l22-mvd-blue)"
            />
            <text
              x="54"
              y="4"
              className="text-[11px] font-bold fill-blue-600 dark:fill-blue-400"
            >
              e&#8321;
            </text>

            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-48"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              markerEnd="url(#l22-mvd-blue)"
            />
            <text
              x="6"
              y="-48"
              className="text-[11px] font-bold fill-blue-600 dark:fill-blue-400"
            >
              e&#8322;
            </text>

            <text
              x="0"
              y="40"
              textAnchor="middle"
              className="text-[10px] font-medium fill-blue-600 dark:fill-blue-400"
            >
              全平面所有非零向量皆为特征向量
            </text>
          </g>

          {/* Footnote verdict */}
          <rect
            x="20"
            y="288"
            width="230"
            height="28"
            rx="5"
            className="fill-blue-500/15"
          />
          <text
            x="135"
            y="306"
            textAnchor="middle"
            className="text-xs font-bold fill-blue-700 dark:fill-blue-300"
          >
            &#10003; 可对角化 (已经是完美对角阵)
          </text>
        </g>

        {/* Panel 3: Repeated Eigenvalue, Defective / Shear (NOT Diagonalizable) */}
        <g transform="translate(610, 20)">
          <rect
            x="0"
            y="0"
            width="270"
            height="330"
            rx="10"
            className="fill-muted/15 stroke-border"
            strokeWidth="1.5"
          />
          {/* Badge */}
          <rect
            x="16"
            y="14"
            width="238"
            height="26"
            rx="5"
            className="fill-rose-500/10 stroke-rose-500/30"
            strokeWidth="1"
          />
          <text
            x="135"
            y="31"
            textAnchor="middle"
            className="text-xs font-bold fill-rose-600 dark:fill-rose-400"
          >
            情况 3：重特征值且亏损 (不可对角化)
          </text>

          {/* Subtitle & Matrix */}
          <text
            x="135"
            y="60"
            textAnchor="middle"
            className="text-[12px] font-semibold fill-foreground"
          >
            AM(1) = 2 但 GM(1) = 1 &#8658; 亏损 (Defective)
          </text>
          <text
            x="135"
            y="78"
            textAnchor="middle"
            className="text-[11px] fill-muted-foreground"
          >
            例: A = [ 1  1 ; 0  1 ] (剪切/若尔当块)
          </text>

          {/* Math details */}
          <rect
            x="20"
            y="90"
            width="230"
            height="44"
            rx="6"
            className="fill-card stroke-border"
            strokeWidth="1"
          />
          <text
            x="32"
            y="108"
            className="text-[11px] font-medium fill-foreground"
          >
            A - I = [ 0 1 ; 0 0 ] &#8658; rank = 1
          </text>
          <text
            x="32"
            y="125"
            className="text-[11px] font-medium fill-rose-600 dark:fill-rose-400"
          >
            GM = 2 - rank(A-I) = 1 &lt; AM (亏损 1 个基底)
          </text>

          {/* Coordinate Plot for Panel 3 */}
          <g transform="translate(135, 215)">
            {/* Axes */}
            <line
              x1="-75"
              y1="0"
              x2="75"
              y2="0"
              className="stroke-muted-foreground/30"
              strokeWidth="1.2"
              markerEnd="url(#l22-mvd-axis)"
            />
            <line
              x1="0"
              y1="65"
              x2="0"
              y2="-65"
              className="stroke-muted-foreground/30"
              strokeWidth="1.2"
              markerEnd="url(#l22-mvd-axis)"
            />

            {/* Invariant Line: x-axis */}
            <line
              x1="-70"
              y1="0"
              x2="70"
              y2="0"
              className="stroke-rose-600/30 dark:stroke-rose-400/30"
              strokeWidth="6"
            />
            {/* Only One Eigenvector Direction: [1, 0] */}
            <line
              x1="0"
              y1="0"
              x2="52"
              y2="0"
              className="stroke-rose-600 dark:stroke-rose-400"
              strokeWidth="2.5"
              markerEnd="url(#l22-mvd-rose)"
            />
            <text
              x="56"
              y="-6"
              className="text-[11px] font-bold fill-rose-600 dark:fill-rose-400"
            >
              x&#8321; = [1, 0]&#7511;
            </text>

            {/* Shear effect on non-eigenvector */}
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-42"
              className="stroke-muted-foreground/50 stroke-dashed"
              strokeWidth="1.5"
            />
            <path
              d="M0,-42 Q20,-48 38,-42"
              fill="none"
              className="stroke-amber-500"
              strokeWidth="1.5"
              markerEnd="url(#l22-mvd-axis)"
            />
            <line
              x1="0"
              y1="0"
              x2="40"
              y2="-42"
              className="stroke-amber-600 dark:stroke-amber-400 stroke-dashed"
              strokeWidth="1.5"
            />
            <text
              x="42"
              y="-45"
              className="text-[10px] fill-amber-600 dark:fill-amber-400"
            >
              剪切发生: [0, 1]&#7511; &#8594; [1, 1]&#7511;
            </text>

            <text
              x="0"
              y="40"
              textAnchor="middle"
              className="text-[10px] font-medium fill-rose-600 dark:fill-rose-400"
            >
              仅存一条不变特征直线，无法张成 &#8477;&#178;
            </text>
          </g>

          {/* Footnote verdict */}
          <rect
            x="20"
            y="288"
            width="230"
            height="28"
            rx="5"
            className="fill-rose-500/15"
          />
          <text
            x="135"
            y="306"
            textAnchor="middle"
            className="text-xs font-bold fill-rose-700 dark:fill-rose-300"
          >
            &#10007; 不可对角化 (S 为奇异矩阵，不存在 S&#8315;&#185;)
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
