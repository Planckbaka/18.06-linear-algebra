import * as React from 'react';
import { MathDiagram } from './math-diagram';

function toSvg(originX: number, originY: number, scale: number, x: number, y: number) {
  return {
    x: originX + x * scale,
    y: originY - y * scale,
  };
}

export function RowVsColumn2DDiagram({
  caption = '方程组 $2x - y = 0,\\; -x + 2y = 3$ 的双重几何图像。左图（行图像）：两条直线相交于唯一解 $(1, 2)$；右图（列图像）：将第一列乘以 $x=1$、第二列乘以 $y=2$，平行四边形对角线精准抵达右侧目标向量 $\\mathbf{b} = (0, 3)^T$。',
}: {
  caption?: string;
}) {
  const scale = 32;
  // Left panel origin
  const L0 = { x: 135, y: 195 };
  // Right panel origin
  const R0 = { x: 485, y: 195 };

  // Row picture lines
  const l1Start = toSvg(L0.x, L0.y, scale, -0.75, -1.5);
  const l1End = toSvg(L0.x, L0.y, scale, 2.05, 4.1);
  const l2Start = toSvg(L0.x, L0.y, scale, -2.5, 0.25);
  const l2End = toSvg(L0.x, L0.y, scale, 2.9, 2.95);
  const sol = toSvg(L0.x, L0.y, scale, 1, 2);
  const solX = toSvg(L0.x, L0.y, scale, 1, 0);
  const solY = toSvg(L0.x, L0.y, scale, 0, 2);

  // Column picture vectors
  const a1 = toSvg(R0.x, R0.y, scale, 2, -1);
  const a2 = toSvg(R0.x, R0.y, scale, -1, 2);
  const twoA2 = toSvg(R0.x, R0.y, scale, -2, 4);
  const bVec = toSvg(R0.x, R0.y, scale, 0, 3);

  const gridTicksX = [-2, -1, 1, 2, 3];
  const gridTicksY = [-1, 1, 2, 3, 4];

  return (
    <MathDiagram
      title="Row Picture vs. Column Picture in ℝ²"
      caption={caption}
    >
      <svg
        viewBox="0 0 680 270"
        className="w-full max-w-[680px] select-none text-foreground"
        role="img"
        aria-label="Row picture versus Column picture of 2x2 linear equations"
      >
        <defs>
          <marker
            id="arrow-blue"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="arrow-emerald"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="arrow-rose"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* ================= LEFT PANEL: ROW PICTURE ================= */}
        <text x="145" y="22" textAnchor="middle" className="fill-current text-[13px] font-semibold">
          (a) Row Picture · 行图像（直线求交）
        </text>

        {/* Grid Left */}
        {gridTicksX.map((gx) => {
          const xPos = L0.x + gx * scale;
          return (
            <line
              key={`lgx-${gx}`}
              x1={xPos}
              y1={42}
              x2={xPos}
              y2={242}
              stroke="currentColor"
              strokeOpacity="0.09"
            />
          );
        })}
        {gridTicksY.map((gy) => {
          const yPos = L0.y - gy * scale;
          return (
            <line
              key={`lgy-${gy}`}
              x1={42}
              y1={yPos}
              x2={245}
              y2={yPos}
              stroke="currentColor"
              strokeOpacity="0.09"
            />
          );
        })}

        {/* Axes Left */}
        <line x1={40} y1={L0.y} x2={250} y2={L0.y} stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
        <line x1={L0.x} y1={245} x2={L0.x} y2={40} stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
        <text x="254" y={L0.y + 4} className="fill-current text-[11px] italic opacity-75">x</text>
        <text x={L0.x + 5} y="46" className="fill-current text-[11px] italic opacity-75">y</text>

        {/* Line 1: 2x - y = 0 */}
        <line
          x1={l1Start.x}
          y1={l1Start.y}
          x2={l1End.x}
          y2={l1End.y}
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2.2"
        />
        <text x={l1End.x + 4} y={l1End.y + 6} className="fill-blue-600 dark:fill-blue-400 text-[11px] font-medium">
          2x − y = 0
        </text>

        {/* Line 2: -x + 2y = 3 */}
        <line
          x1={l2Start.x}
          y1={l2Start.y}
          x2={l2End.x}
          y2={l2End.y}
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2.2"
        />
        <text x={l2End.x - 52} y={l2End.y - 8} className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-medium">
          −x + 2y = 3
        </text>

        {/* Dashed projection of intersection (1, 2) */}
        <line
          x1={sol.x}
          y1={sol.y}
          x2={solX.x}
          y2={solX.y}
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeDasharray="3 3"
        />
        <line
          x1={sol.x}
          y1={sol.y}
          x2={solY.x}
          y2={solY.y}
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeDasharray="3 3"
        />
        <text x={solX.x - 3} y={L0.y + 14} className="fill-current text-[10px] font-mono opacity-75">1</text>
        <text x={L0.x - 12} y={solY.y + 4} className="fill-current text-[10px] font-mono opacity-75">2</text>

        {/* Intersection point */}
        <circle cx={sol.x} cy={sol.y} r="5.5" className="fill-rose-600 dark:fill-rose-400" />
        <circle cx={sol.x} cy={sol.y} r="9" className="fill-none stroke-rose-500/40" strokeWidth="2" />
        <text x={sol.x + 9} y={sol.y + 4} className="fill-rose-600 dark:fill-rose-400 text-[11.5px] font-semibold">
          (x, y) = (1, 2)
        </text>

        {/* Center divider */}
        <line x1="335" y1="20" x2="335" y2="250" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="4 4" />

        {/* ================= RIGHT PANEL: COLUMN PICTURE ================= */}
        <text x="505" y="22" textAnchor="middle" className="fill-current text-[13px] font-semibold">
          (b) Column Picture · 列图像（向量线性组合）
        </text>

        {/* Grid Right */}
        {[-2, -1, 1, 2, 3].map((gx) => {
          const xPos = R0.x + gx * scale;
          return (
            <line
              key={`rgx-${gx}`}
              x1={xPos}
              y1={42}
              x2={xPos}
              y2={242}
              stroke="currentColor"
              strokeOpacity="0.09"
            />
          );
        })}
        {gridTicksY.map((gy) => {
          const yPos = R0.y - gy * scale;
          return (
            <line
              key={`rgy-${gy}`}
              x1={385}
              y1={yPos}
              x2={610}
              y2={yPos}
              stroke="currentColor"
              strokeOpacity="0.09"
            />
          );
        })}

        {/* Axes Right */}
        <line x1={380} y1={R0.y} x2={615} y2={R0.y} stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
        <line x1={R0.x} y1={245} x2={R0.x} y2={40} stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />

        {/* Parallelogram completion lines */}
        <line
          x1={a1.x}
          y1={a1.y}
          x2={bVec.x}
          y2={bVec.y}
          className="stroke-emerald-600/65 dark:stroke-emerald-400/65"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          markerEnd="url(#arrow-emerald)"
        />
        <line
          x1={twoA2.x}
          y1={twoA2.y}
          x2={bVec.x}
          y2={bVec.y}
          className="stroke-blue-600/55 dark:stroke-blue-400/55"
          strokeWidth="1.4"
          strokeDasharray="4 3"
        />

        {/* 2 * a2 scaled vector */}
        <line
          x1={R0.x}
          y1={R0.y}
          x2={twoA2.x}
          y2={twoA2.y}
          className="stroke-emerald-600/45 dark:stroke-emerald-400/45"
          strokeWidth="2"
          markerEnd="url(#arrow-emerald)"
        />
        <text x={twoA2.x - 28} y={twoA2.y - 6} className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-medium">
          2a₂ = (−2, 4)
        </text>

        {/* Base vector a2 */}
        <line
          x1={R0.x}
          y1={R0.y}
          x2={a2.x}
          y2={a2.y}
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2.4"
          markerEnd="url(#arrow-emerald)"
        />
        <text x={a2.x - 58} y={a2.y + 4} className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-semibold">
          a₂ = (−1, 2)
        </text>

        {/* Base vector a1 (1 * a1) */}
        <line
          x1={R0.x}
          y1={R0.y}
          x2={a1.x}
          y2={a1.y}
          className="stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2.4"
          markerEnd="url(#arrow-blue)"
        />
        <text x={a1.x + 6} y={a1.y + 12} className="fill-blue-600 dark:fill-blue-400 text-[11px] font-semibold">
          1a₁ = (2, −1)
        </text>

        {/* Resultant vector b = (0, 3) */}
        <line
          x1={R0.x}
          y1={R0.y}
          x2={bVec.x}
          y2={bVec.y}
          className="stroke-rose-600 dark:stroke-rose-400"
          strokeWidth="2.8"
          markerEnd="url(#arrow-rose)"
        />
        <text x={bVec.x + 9} y={bVec.y + 3} className="fill-rose-600 dark:fill-rose-400 text-[11.5px] font-bold">
          b = 1a₁ + 2a₂ = (0, 3)
        </text>
      </svg>
    </MathDiagram>
  );
}

export function SingularColumn2DDiagram({
  caption = '奇异（Singular）退化的列视角本质：当 $\\mathbf{a}_1 = (2, -1)^T$ 与 $\\mathbf{a}_2 = (-4, 2)^T$ 共线时，所有线性组合 $x\\mathbf{a}_1 + y\\mathbf{a}_2$ 被永久困在一维直线 $\\operatorname{Col}(A)$ 上。此时落在直线外的 $\\mathbf{b} = (0, 3)^T$ 绝对无解，而落在直线上的 $\\tilde{\\mathbf{b}} = (-2, 1)^T$ 则有无穷多组系数解。',
}: {
  caption?: string;
}) {
  const O = { x: 250, y: 135 };
  const s = 26;
  const lineStart = toSvg(O.x, O.y, s, -5.2, 2.6);
  const lineEnd = toSvg(O.x, O.y, s, 4.4, -2.2);
  const a1 = toSvg(O.x, O.y, s, 2, -1);
  const a2 = toSvg(O.x, O.y, s, -4, 2);
  const bOut = toSvg(O.x, O.y, s, 0, 3);
  const bIn = toSvg(O.x, O.y, s, -2, 1);

  return (
    <MathDiagram
      title="Singular Case Geometry: Column Space Collapse in ℝ²"
      caption={caption}
    >
      <svg
        viewBox="0 0 500 235"
        className="w-full max-w-[500px] select-none text-foreground"
        role="img"
        aria-label="Singular matrix column vectors collapsing onto a 1D line"
      >
        <defs>
          <marker id="s-blue" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker id="s-emerald" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="s-rose" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="60" y1={O.y} x2="440" y2={O.y} stroke="currentColor" strokeOpacity="0.35" />
        <line x1={O.x} y1="210" x2={O.x} y2="25" stroke="currentColor" strokeOpacity="0.35" />

        {/* 1D Column Space Line */}
        <line
          x1={lineStart.x}
          y1={lineStart.y}
          x2={lineEnd.x}
          y2={lineEnd.y}
          className="stroke-blue-500/35"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <text x={lineEnd.x - 75} y={lineEnd.y + 20} className="fill-blue-600 dark:fill-blue-400 text-[11px] font-mono font-semibold">
          Col(A): 1D Line in ℝ²
        </text>

        {/* Collinear vectors a1 and a2 */}
        <line x1={O.x} y1={O.y} x2={a1.x} y2={a1.y} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.4" markerEnd="url(#s-blue)" />
        <text x={a1.x + 6} y={a1.y - 4} className="fill-blue-600 dark:fill-blue-400 text-[11px] font-semibold">
          a₁ = (2, −1)
        </text>

        <line x1={O.x} y1={O.y} x2={a2.x} y2={a2.y} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.4" markerEnd="url(#s-emerald)" />
        <text x={a2.x - 20} y={a2.y - 10} className="fill-emerald-600 dark:fill-emerald-400 text-[11px] font-semibold">
          a₂ = (−4, 2) = −2a₁
        </text>

        {/* Point on line: infinitely many solutions */}
        <circle cx={bIn.x} cy={bIn.y} r="4.5" className="fill-amber-500" />
        <text x={bIn.x - 95} y={bIn.y + 20} className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-medium">
          b̃ = (−2, 1) ∈ Col(A) (无穷多解)
        </text>

        {/* Unreachable b = (0, 3) */}
        <line x1={O.x} y1={O.y} x2={bOut.x} y2={bOut.y} className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.3" strokeDasharray="4 3" markerEnd="url(#s-rose)" />
        <text x={bOut.x + 10} y={bOut.y + 5} className="fill-rose-600 dark:fill-rose-400 text-[11px] font-semibold">
          b = (0, 3) ∉ Col(A) → 无解!
        </text>
      </svg>
    </MathDiagram>
  );
}
