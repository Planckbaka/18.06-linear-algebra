import * as React from 'react';
import { MathDiagram } from './math-diagram';

export function DirectedGraphIncidenceDiagram({
  caption = 'Gilbert Strang 经典的 **4 节点、5 条有向边网络** 及其 $5\\times 4$ 关联矩阵 $A$：每行对应一条有向边（起点标 $-1$、终点标 $+1$）。连通图的零空间 $\\operatorname{Null}(A) = \\operatorname{span}\\{\\mathbf{1}\\}$ 代表**全网等电势**（无电势差），而左零空间 $\\operatorname{Null}(A^T)$ 的 $\\dim = e - v + 1 = 2$ 个基向量恰好对应图中 **$2$ 个独立闭合环路 $\\mathcal{L}_1, \\mathcal{L}_2$**（基尔霍夫电流守恒 $A^T\\mathbf{y}=\\mathbf{0}$）！',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram
      title="Directed Graph, Incidence Matrix A & Kirchhoff's Four Subspaces"
      caption={caption}
    >
      <svg
        viewBox="0 0 725 280"
        className="w-full max-w-[725px] select-none text-foreground"
        role="img"
        aria-label="4-node 5-edge directed graph with loops L1 and L2, alongside its 5x4 incidence matrix A and physical dictionary"
      >
        <defs>
          <marker
            id="l12-edge-arrow"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l12-loop-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
        </defs>

        {/* ================= LEFT PANEL: 4-NODE, 5-EDGE DIRECTED GRAPH ================= */}
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="320" height="252" rx="12" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.18" />
          <text x="160" y="23" textAnchor="middle" className="fill-current text-[12.5px] font-bold">
            (a) 有向图 G (v = 4 节点, e = 5 边, f_有界 = 2 环)
          </text>

          {/* Node coordinates:
              Node 1: (62, 194)  [bottom-left]
              Node 2: (192, 194) [bottom-mid]
              Node 3: (127, 74)  [top]
              Node 4: (268, 118) [right]
          */}

          {/* Loop L1 indicator inside triangle (1-2-3) */}
          <path
            d="M 112 162 A 22 22 0 1 1 142 162"
            fill="none"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.6"
            strokeDasharray="3 2"
            markerEnd="url(#l12-loop-arrow)"
          />
          <text x="127" y="156" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[10.5px] font-bold">
            L₁
          </text>

          {/* Loop L2 indicator inside triangle (2-3-4) */}
          <path
            d="M 186 128 A 19 19 0 1 1 212 138"
            fill="none"
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="1.6"
            strokeDasharray="3 2"
            markerEnd="url(#l12-loop-arrow)"
          />
          <text x="198" y="131" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-mono text-[10.5px] font-bold">
            L₂
          </text>

          {/* Edge 1: 1 -> 2 */}
          <line x1="82" y1="194" x2="170" y2="194" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.1" markerEnd="url(#l12-edge-arrow)" />
          <text x="127" y="212" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">e₁</text>

          {/* Edge 2: 1 -> 3 */}
          <line x1="71" y1="176" x2="116" y2="93" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.1" markerEnd="url(#l12-edge-arrow)" />
          <text x="80" y="130" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">e₂</text>

          {/* Edge 3: 2 -> 3 */}
          <line x1="182" y1="176" x2="138" y2="93" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.1" markerEnd="url(#l12-edge-arrow)" />
          <text x="171" y="132" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">e₃</text>

          {/* Edge 4: 2 -> 4 */}
          <line x1="206" y1="180" x2="253" y2="133" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.1" markerEnd="url(#l12-edge-arrow)" />
          <text x="242" y="170" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">e₄</text>

          {/* Edge 5: 3 -> 4 */}
          <line x1="146" y1="80" x2="248" y2="112" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.1" markerEnd="url(#l12-edge-arrow)" />
          <text x="204" y="87" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-mono text-[11px] font-bold">e₅</text>

          {/* Nodes 1, 2, 3, 4 */}
          {[
            { id: '1', x: 62, y: 194 },
            { id: '2', x: 192, y: 194 },
            { id: '3', x: 127, y: 74 },
            { id: '4', x: 268, y: 118 },
          ].map((node) => (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <circle r="17" className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" />
              <text y="4" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 font-mono text-[12px] font-bold">
                {node.id}
              </text>
            </g>
          ))}

          <text x="160" y="238" textAnchor="middle" className="fill-current font-mono text-[10.5px] opacity-85">
            欧拉公式: v − e + f_总 = 4 − 5 + 3 = 2  (含外部无界域)
          </text>
        </g>

        {/* ================= RIGHT PANEL: INCIDENCE MATRIX & SUBSPACE DICTIONARY ================= */}
        <g transform="translate(352, 14)">
          <rect x="0" y="0" width="357" height="252" rx="12" fill="currentColor" fillOpacity="0.025" stroke="currentColor" strokeOpacity="0.18" />
          <text x="178" y="23" textAnchor="middle" className="fill-current text-[12.5px] font-bold">
            (b) 5×4 关联矩阵 A 与电路物理字典
          </text>

          {/* Matrix header */}
          <g transform="translate(22, 42)" className="font-mono text-[11px]">
            <text x="48" y="0" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-bold">x₁</text>
            <text x="78" y="0" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-bold">x₂</text>
            <text x="108" y="0" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-bold">x₃</text>
            <text x="138" y="0" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-bold">x₄</text>

            {/* Matrix brackets */}
            <path d="M 35 8 L 29 8 L 29 114 L 35 114" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M 151 8 L 157 8 L 157 114 L 151 114" fill="none" stroke="currentColor" strokeWidth="1.6" />

            {[
              { label: 'e₁', vals: ['-1', '+1', '0', '0'] },
              { label: 'e₂', vals: ['-1', '0', '+1', '0'] },
              { label: 'e₃', vals: ['0', '-1', '+1', '0'] },
              { label: 'e₄', vals: ['0', '-1', '0', '+1'] },
              { label: 'e₅', vals: ['0', '0', '-1', '+1'] },
            ].map((row, idx) => {
              const y = 24 + idx * 20;
              return (
                <g key={row.label}>
                  <text x="12" y={y} textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-bold">{row.label}</text>
                  {row.vals.map((v, cIdx) => (
                    <text
                      key={cIdx}
                      x={48 + cIdx * 30}
                      y={y}
                      textAnchor="middle"
                      className={
                        v === '+1'
                          ? 'fill-emerald-700 dark:fill-emerald-300 font-bold'
                          : v === '-1'
                          ? 'fill-rose-600 dark:fill-rose-400 font-bold'
                          : 'fill-current opacity-45'
                      }
                    >
                      {v}
                    </text>
                  ))}
                </g>
              );
            })}
          </g>

          {/* Right mini callouts */}
          <g transform="translate(192, 48)" className="text-[10.5px]">
            <rect x="0" y="0" width="150" height="48" rx="6" className="fill-emerald-500/12 stroke-emerald-600/40 dark:stroke-emerald-400/40" />
            <text x="8" y="18" className="fill-emerald-800 dark:fill-emerald-200 font-mono font-bold">Null(A): dim = 1</text>
            <text x="8" y="36" className="fill-current">基 (1,1,1,1)ᵀ 等电势零差</text>

            <rect x="0" y="58" width="150" height="52" rx="6" className="fill-amber-500/15 stroke-amber-600/40 dark:stroke-amber-400/40" />
            <text x="8" y="76" className="fill-amber-800 dark:fill-amber-200 font-mono font-bold">Null(Aᵀ): dim = 2</text>
            <text x="8" y="93" className="fill-current font-mono text-[9.5px]">L₁=(1,-1,1,0,0)ᵀ</text>
            <text x="8" y="105" className="fill-current font-mono text-[9.5px]">L₂=(0,0,1,-1,1)ᵀ</text>
          </g>

          {/* Bottom physical summary bar */}
          <rect x="16" y="170" width="325" height="68" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.16" />
          <text x="26" y="190" className="fill-current font-mono text-[10.5px] font-semibold">
            • e = Ax : 节点电势 x ⟶ 边电势差 e (Col(A): KVL 环路电压和=0)
          </text>
          <text x="26" y="209" className="fill-current font-mono text-[10.5px] font-semibold">
            • Aᵀy = 0 : 边电流 y 满足基尔霍夫电流守恒 (KCL: 流入 = 流出)
          </text>
          <text x="26" y="228" className="fill-blue-700 dark:fill-blue-300 font-mono text-[10.5px] font-bold">
            • Row(A) 基 : r = v − 1 = 3 条无环边 ⟺ 图的一棵生成树 (Spanning Tree)!
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}
