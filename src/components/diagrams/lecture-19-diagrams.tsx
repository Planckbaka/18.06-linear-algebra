import * as React from 'react'
import { MathDiagram } from './math-diagram'

/**
 * BigFormulaPermutationsDiagram
 * Visualizes:
 * Left panel: Single-row multilinearity splitting a 3x3 determinant into 3^3 = 27 matrices,
 *             where 21 collapse to 0 (repeated columns) and 3! = 6 non-attacking rook placements survive.
 * Right panel: All 3! = 6 permutations of (1, 2, 3) grouped into 3 even (sgn = +1) and 3 odd (sgn = -1),
 *              highlighting why Sarrus diagonal rule works only for n=2, 3 and fails for n >= 4 (24 != 8).
 */
export function BigFormulaPermutationsDiagram({
  caption = '图 19.1 行列式大公式的 27 项拆解与 6 个置换项（Sarrus 对角线法则仅在 n=2, 3 巧合成立，n \\ge 4 严重失效）',
}: {
  caption?: string
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 960 480"
        className="w-full h-auto text-foreground font-sans select-none"
      >
        <defs>
          <marker
            id="l19-arrow-blue"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker
            id="l19-arrow-emerald"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker
            id="l19-arrow-rose"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* LEFT PANEL: 3^3 = 27 Splitting */}
        <g transform="translate(20, 20)">
          {/* Panel background */}
          <rect
            x="0"
            y="0"
            width="450"
            height="440"
            rx="12"
            className="fill-card/40 dark:fill-card/20 stroke-border stroke-[1.5]"
          />

          {/* Header */}
          <text x="24" y="32" className="text-base font-bold fill-foreground">
            多重线性拆分：3&#94;3 = 27 项的湮灭
          </text>
          <text x="24" y="52" className="text-xs fill-muted-foreground">
            由公理 3 每行拆为标准基，仅每行每列恰选 1 个元素的项幸存
          </text>

          {/* Top: 3x3 Matrix Representation */}
          <g transform="translate(24, 70)">
            <rect
              x="0"
              y="0"
              width="402"
              height="64"
              rx="8"
              className="fill-muted/20 stroke-border stroke-[1]"
            />
            {/* Brackets */}
            <path d="M 16 12 L 10 12 L 10 52 L 16 52" className="stroke-foreground stroke-[1.5] fill-none" />
            <path d="M 144 12 L 150 12 L 150 52 L 144 52" className="stroke-foreground stroke-[1.5] fill-none" />
            <text x="35" y="28" className="text-xs fill-foreground">a&#8321;&#8321;</text>
            <text x="75" y="28" className="text-xs fill-foreground">a&#8321;&#8322;</text>
            <text x="115" y="28" className="text-xs fill-foreground">a&#8321;&#8323;</text>
            <text x="35" y="42" className="text-xs fill-foreground">a&#8322;&#8321;</text>
            <text x="75" y="42" className="text-xs fill-foreground">a&#8322;&#8322;</text>
            <text x="115" y="42" className="text-xs fill-foreground">a&#8322;&#8323;</text>
            <text x="35" y="56" className="text-xs fill-foreground">a&#8323;&#8321;</text>
            <text x="75" y="56" className="text-xs fill-foreground">a&#8323;&#8322;</text>
            <text x="115" y="56" className="text-xs fill-foreground">a&#8323;&#8323;</text>

            <path
              d="M 165 32 L 205 32"
              className="stroke-blue-500 stroke-[2]"
              markerEnd="url(#l19-arrow-blue)"
            />

            <text x="220" y="26" className="text-xs font-semibold fill-blue-600 dark:fill-blue-400">
              第 1 行拆为 3 项
            </text>
            <text x="220" y="42" className="text-xs font-semibold fill-blue-600 dark:fill-blue-400">
              第 2 行拆为 3 项 &rarr; 3 &times; 3 &times; 3 = 27
            </text>
            <text x="220" y="56" className="text-xs font-semibold fill-blue-600 dark:fill-blue-400">
              第 3 行拆为 3 项
            </text>
          </g>

          {/* Middle: Breakdown into 21 Null + 6 Surviving */}
          <g transform="translate(24, 150)">
            {/* Box 1: 21 Vanishing terms */}
            <rect
              x="0"
              y="0"
              width="402"
              height="115"
              rx="8"
              className="fill-rose-500/10 stroke-rose-500/40 stroke-[1]"
            />
            <circle cx="20" cy="22" r="10" className="fill-rose-500/20 stroke-rose-500 stroke-[1.5]" />
            <text x="16" y="26" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">&times;</text>
            <text x="38" y="26" className="text-sm font-bold fill-rose-600 dark:fill-rose-400">
              21 项自动湮灭为 0（列冲突，秩 &lt; 3）
            </text>

            <text x="20" y="50" className="text-xs fill-muted-foreground">
              若两行或多行选中相同列，则矩阵含相同列方向或零列，行列式为 0：
            </text>

            {/* Example of repeated column matrix */}
            <g transform="translate(20, 60)">
              <rect x="0" y="0" width="85" height="42" rx="4" className="fill-background stroke-border stroke-[1]" />
              <text x="8" y="16" className="text-[10px] font-mono fill-rose-600 dark:fill-rose-400">a&#8321;&#8321;  0   0</text>
              <text x="8" y="28" className="text-[10px] font-mono fill-rose-600 dark:fill-rose-400">a&#8322;&#8321;  0   0</text>
              <text x="8" y="40" className="text-[10px] font-mono fill-muted-foreground">0   a&#8323;&#8322; 0</text>
              <text x="100" y="26" className="text-xs fill-foreground">
                det = a&#8321;&#8321; a&#8322;&#8321; a&#8323;&#8322; &times; det
              </text>
              <rect x="185" y="4" width="46" height="34" rx="4" className="fill-muted/30 stroke-border stroke-[1]" />
              <text x="190" y="16" className="text-[9px] font-mono fill-rose-600 dark:fill-rose-400">1 0 0</text>
              <text x="190" y="26" className="text-[9px] font-mono fill-rose-600 dark:fill-rose-400">1 0 0</text>
              <text x="190" y="36" className="text-[9px] font-mono fill-muted-foreground">0 1 0</text>
              <text x="240" y="25" className="text-sm font-bold fill-rose-600 dark:fill-rose-400">= 0</text>
            </g>
          </g>

          {/* Bottom: 6 Surviving terms (Non-attacking rooks) */}
          <g transform="translate(24, 280)">
            <rect
              x="0"
              y="0"
              width="402"
              height="135"
              rx="8"
              className="fill-emerald-500/10 stroke-emerald-500/40 stroke-[1]"
            />
            <circle cx="20" cy="22" r="10" className="fill-emerald-500/20 stroke-emerald-500 stroke-[1.5]" />
            <text x="16" y="26" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">&check;</text>
            <text x="38" y="26" className="text-sm font-bold fill-emerald-600 dark:fill-emerald-400">
              仅 3! = 6 项幸存（国际象棋“车互不攻击”排布）
            </text>

            <text x="20" y="48" className="text-xs fill-muted-foreground">
              每行选一个非零元，且每列恰有一个非零元：对应置换矩阵 P_&sigma;
            </text>

            {/* Rook placement miniature */}
            <g transform="translate(20, 60)">
              {/* 3x3 Grid */}
              <rect x="0" y="0" width="60" height="60" rx="4" className="fill-background stroke-border stroke-[1]" />
              <line x1="20" y1="0" x2="20" y2="60" className="stroke-border stroke-[0.8]" />
              <line x1="40" y1="0" x2="40" y2="60" className="stroke-border stroke-[0.8]" />
              <line x1="0" y1="20" x2="60" y2="20" className="stroke-border stroke-[0.8]" />
              <line x1="0" y1="40" x2="60" y2="40" className="stroke-border stroke-[0.8]" />

              {/* Rooks at (1,2), (2,3), (3,1) */}
              <circle cx="30" cy="10" r="6" className="fill-emerald-500 dark:fill-emerald-400" />
              <circle cx="50" cy="30" r="6" className="fill-emerald-500 dark:fill-emerald-400" />
              <circle cx="10" cy="50" r="6" className="fill-emerald-500 dark:fill-emerald-400" />

              <text x="75" y="20" className="text-xs font-semibold fill-foreground">
                行索引：(1, 2, 3)
              </text>
              <text x="75" y="38" className="text-xs font-semibold fill-foreground">
                列索引：(&sigma;(1), &sigma;(2), &sigma;(3)) &isin; S&#8323;
              </text>
              <text x="75" y="56" className="text-xs fill-emerald-600 dark:fill-emerald-400 font-mono">
                det(A) = &sum; sgn(&sigma;) a&#8321;,&#963;(1) a&#8322;,&#963;(2) a&#8323;,&#963;(3)
              </text>
            </g>
          </g>
        </g>

        {/* RIGHT PANEL: 6 Permutations & Sarrus Collapse Warning */}
        <g transform="translate(490, 20)">
          {/* Panel background */}
          <rect
            x="0"
            y="0"
            width="450"
            height="440"
            rx="12"
            className="fill-card/40 dark:fill-card/20 stroke-border stroke-[1.5]"
          />

          {/* Header */}
          <text x="24" y="32" className="text-base font-bold fill-foreground">
            3 阶全排列项与对角线法则的致命局限
          </text>
          <text x="24" y="52" className="text-xs fill-muted-foreground">
            3 个偶排列（+）与 3 个奇排列（&minus;）恰构成 Sarrus 6 条对角线
          </text>

          {/* 3 Even Permutations */}
          <g transform="translate(24, 70)">
            <rect
              x="0"
              y="0"
              width="402"
              height="100"
              rx="8"
              className="fill-blue-500/10 stroke-blue-500/30 stroke-[1]"
            />
            <text x="16" y="22" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">
              偶排列 (Even, sgn = +1) &mdash; 逆序数为偶数（0 或 2）
            </text>

            {/* Item 1 */}
            <g transform="translate(16, 32)">
              <rect x="0" y="0" width="118" height="56" rx="4" className="fill-background stroke-border stroke-[1]" />
              <text x="8" y="18" className="text-[11px] font-mono fill-blue-600 dark:fill-blue-400">(1, 2, 3)</text>
              <text x="8" y="34" className="text-[10px] fill-muted-foreground">逆序数: 0 (恒等 I)</text>
              <text x="8" y="48" className="text-[11px] font-bold font-mono fill-foreground">+ a&#8321;&#8321;a&#8322;&#8322;a&#8323;&#8323;</text>
            </g>

            {/* Item 2 */}
            <g transform="translate(142, 32)">
              <rect x="0" y="0" width="118" height="56" rx="4" className="fill-background stroke-border stroke-[1]" />
              <text x="8" y="18" className="text-[11px] font-mono fill-blue-600 dark:fill-blue-400">(2, 3, 1)</text>
              <text x="8" y="34" className="text-[10px] fill-muted-foreground">逆序数: 2 (轮换右移)</text>
              <text x="8" y="48" className="text-[11px] font-bold font-mono fill-foreground">+ a&#8321;&#8322;a&#8322;&#8323;a&#8323;&#8321;</text>
            </g>

            {/* Item 3 */}
            <g transform="translate(268, 32)">
              <rect x="0" y="0" width="118" height="56" rx="4" className="fill-background stroke-border stroke-[1]" />
              <text x="8" y="18" className="text-[11px] font-mono fill-blue-600 dark:fill-blue-400">(3, 1, 2)</text>
              <text x="8" y="34" className="text-[10px] fill-muted-foreground">逆序数: 2 (轮换左移)</text>
              <text x="8" y="48" className="text-[11px] font-bold font-mono fill-foreground">+ a&#8321;&#8323;a&#8322;&#8321;a&#8323;&#8322;</text>
            </g>
          </g>

          {/* 3 Odd Permutations */}
          <g transform="translate(24, 182)">
            <rect
              x="0"
              y="0"
              width="402"
              height="100"
              rx="8"
              className="fill-rose-500/10 stroke-rose-500/30 stroke-[1]"
            />
            <text x="16" y="22" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">
              奇排列 (Odd, sgn = &minus;1) &mdash; 逆序数为奇数（1 或 3）
            </text>

            {/* Item 4 */}
            <g transform="translate(16, 32)">
              <rect x="0" y="0" width="118" height="56" rx="4" className="fill-background stroke-border stroke-[1]" />
              <text x="8" y="18" className="text-[11px] font-mono fill-rose-600 dark:fill-rose-400">(1, 3, 2)</text>
              <text x="8" y="34" className="text-[10px] fill-muted-foreground">逆序数: 1 (交换 2,3)</text>
              <text x="8" y="48" className="text-[11px] font-bold font-mono fill-foreground">&minus; a&#8321;&#8321;a&#8322;&#8323;a&#8323;&#8322;</text>
            </g>

            {/* Item 5 */}
            <g transform="translate(142, 32)">
              <rect x="0" y="0" width="118" height="56" rx="4" className="fill-background stroke-border stroke-[1]" />
              <text x="8" y="18" className="text-[11px] font-mono fill-rose-600 dark:fill-rose-400">(2, 1, 3)</text>
              <text x="8" y="34" className="text-[10px] fill-muted-foreground">逆序数: 1 (交换 1,2)</text>
              <text x="8" y="48" className="text-[11px] font-bold font-mono fill-foreground">&minus; a&#8321;&#8322;a&#8322;&#8321;a&#8323;&#8323;</text>
            </g>

            {/* Item 6 */}
            <g transform="translate(268, 32)">
              <rect x="0" y="0" width="118" height="56" rx="4" className="fill-background stroke-border stroke-[1]" />
              <text x="8" y="18" className="text-[11px] font-mono fill-rose-600 dark:fill-rose-400">(3, 2, 1)</text>
              <text x="8" y="34" className="text-[10px] fill-muted-foreground">逆序数: 3 (反对角线)</text>
              <text x="8" y="48" className="text-[11px] font-bold font-mono fill-foreground">&minus; a&#8321;&#8323;a&#8322;&#8322;a&#8323;&#8321;</text>
            </g>
          </g>

          {/* Sarrus Warning Box */}
          <g transform="translate(24, 296)">
            <rect
              x="0"
              y="0"
              width="402"
              height="124"
              rx="8"
              className="fill-amber-500/10 stroke-amber-500/40 stroke-[1.5]"
            />
            <text x="16" y="24" className="text-xs font-bold fill-amber-700 dark:fill-amber-400">
              &#9888; 致命警示：Sarrus 法则为何在 4 阶及以上彻底失效？
            </text>

            <g transform="translate(16, 36)">
              <text x="0" y="16" className="text-xs fill-foreground">
                &bull; 2 阶：2! = 2 项 &larr; 主对角线 &minus; 反对角线（恰好吻合）
              </text>
              <text x="0" y="34" className="text-xs fill-foreground">
                &bull; 3 阶：3! = 6 项 &larr; 3 条正对角线 &minus; 3 条负对角线（恰好吻合）
              </text>
              <text x="0" y="52" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">
                &bull; 4 阶：4! = 24 项，而对角线划线法只有 4 + 4 = 8 项！
              </text>
              <text x="0" y="70" className="text-xs fill-muted-foreground">
                漏掉 24 &minus; 8 = 16 项（如 a&#8321;&#8321;a&#8322;&#8322;a&#8323;&#8324;a&#8324;&#8323; 根本不在对角线上）！4 阶切勿划线！
              </text>
            </g>
          </g>
        </g>
      </svg>
    </MathDiagram>
  )
}

/**
 * CofactorTridiagonalDiagram
 * Visualizes:
 * Left panel: 4x4 checkerboard sign pattern (-1)^{i+j} and extraction of minor M_{12} by striking out row 1 and column 2,
 *             showing how grouping Big Formula terms produces C_{ij} = (-1)^{i+j} M_{ij}.
 * Right panel: Tridiagonal recurrence for Strang's 1, 1, 1 matrix (D_n = D_{n-1} - D_{n-2}, period-6 cycle 1, 0, -1, -1, 0, 1)
 *              and second difference matrix K_n (D_n = 2D_{n-1} - D_{n-2} => D_n = n + 1).
 */
export function CofactorTridiagonalDiagram({
  caption = '图 19.2 代数余子式棋盘符号、余子式划行划列机制与三对角矩阵的二阶差分递推奇迹',
}: {
  caption?: string
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 960 480"
        className="w-full h-auto text-foreground font-sans select-none"
      >
        <defs>
          <marker
            id="l19-rec-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
        </defs>

        {/* LEFT PANEL: Cofactor Checkerboard & Minor M_{12} */}
        <g transform="translate(20, 20)">
          <rect
            x="0"
            y="0"
            width="450"
            height="440"
            rx="12"
            className="fill-card/40 dark:fill-card/20 stroke-border stroke-[1.5]"
          />

          <text x="24" y="32" className="text-base font-bold fill-foreground">
            代数余子式：C&#7522;&#11388; = (&minus;1)&#7522;&#43;&#11388; M&#7522;&#11388;
          </text>
          <text x="24" y="52" className="text-xs fill-muted-foreground">
            大公式中按元素 a&#7522;&#11388; 提取公因式，剩余 (n&minus;1)! 项即为余子式
          </text>

          {/* 4x4 Checkerboard Grid */}
          <g transform="translate(24, 75)">
            <text x="0" y="-8" className="text-xs font-semibold fill-muted-foreground">
              4&times;4 棋盘正负符号分布表：
            </text>

            <rect x="0" y="0" width="160" height="160" rx="6" className="fill-background stroke-border stroke-[1]" />

            {/* Alternating signs */}
            {[
              ['+', '-', '+', '-'],
              ['-', '+', '-', '+'],
              ['+', '-', '+', '-'],
              ['-', '+', '-', '+'],
            ].map((row, r) =>
              row.map((sgn, c) => {
                const isTarget = r === 0 && c === 1 // (1, 2)
                return (
                  <g key={`${r}-${c}`} transform={`translate(${c * 40}, ${r * 40})`}>
                    <rect
                      x="2"
                      y="2"
                      width="36"
                      height="36"
                      rx="4"
                      className={
                        isTarget
                          ? 'fill-rose-500/30 stroke-rose-500 stroke-[2]'
                          : (r + c) % 2 === 0
                          ? 'fill-emerald-500/10 stroke-none'
                          : 'fill-muted/20 stroke-none'
                      }
                    />
                    <text
                      x="20"
                      y="24"
                      textAnchor="middle"
                      className={`text-sm font-bold ${
                        isTarget
                          ? 'fill-rose-600 dark:fill-rose-400'
                          : sgn === '+'
                          ? 'fill-emerald-600 dark:fill-emerald-400'
                          : 'fill-muted-foreground'
                      }`}
                    >
                      {sgn}
                    </text>
                  </g>
                )
              })
            )}

            {/* Legend for target C_{12} */}
            <g transform="translate(180, 15)">
              <text x="0" y="16" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">
                位置 (1, 2) 符号计算：
              </text>
              <text x="0" y="34" className="text-xs font-mono fill-foreground">
                (&minus;1)&#185;&#8314;&#178; = (&minus;1)&#179; = &minus;1
              </text>
              <text x="0" y="52" className="text-xs fill-muted-foreground">
                故 C&#8321;&#8322; = &minus; M&#8321;&#8322;
              </text>
              <text x="0" y="78" className="text-[11px] fill-muted-foreground">
                符号本质：需 1&minus;1 + 2&minus;1 = 1 次
              </text>
              <text x="0" y="94" className="text-[11px] fill-muted-foreground">
                相邻对换将元素移至左上角 (1,1)
              </text>
            </g>
          </g>

          {/* Minor Extraction Graphic */}
          <g transform="translate(24, 255)">
            <text x="0" y="-8" className="text-xs font-semibold fill-muted-foreground">
              提取余子式 M&#8321;&#8322;：划去第 1 行与第 2 列
            </text>

            <rect x="0" y="0" width="402" height="150" rx="8" className="fill-muted/15 stroke-border stroke-[1]" />

            {/* Matrix Entries */}
            <g transform="translate(25, 20)">
              {/* Row 1 (to be crossed) */}
              <text x="15" y="22" className="text-xs fill-muted-foreground">a&#8321;&#8321;</text>
              <text x="65" y="22" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">a&#8321;&#8322;</text>
              <text x="115" y="22" className="text-xs fill-muted-foreground">a&#8321;&#8323;</text>
              <text x="165" y="22" className="text-xs fill-muted-foreground">a&#8321;&#8324;</text>

              {/* Row 2 */}
              <text x="15" y="52" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">a&#8322;&#8321;</text>
              <text x="65" y="52" className="text-xs fill-muted-foreground">a&#8322;&#8322;</text>
              <text x="115" y="52" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">a&#8322;&#8323;</text>
              <text x="165" y="52" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">a&#8322;&#8324;</text>

              {/* Row 3 */}
              <text x="15" y="82" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">a&#8323;&#8321;</text>
              <text x="65" y="82" className="text-xs fill-muted-foreground">a&#8323;&#8322;</text>
              <text x="115" y="82" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">a&#8323;&#8323;</text>
              <text x="165" y="82" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">a&#8323;&#8324;</text>

              {/* Row 4 */}
              <text x="15" y="112" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">a&#8324;&#8321;</text>
              <text x="65" y="112" className="text-xs fill-muted-foreground">a&#8324;&#8322;</text>
              <text x="115" y="112" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">a&#8324;&#8323;</text>
              <text x="165" y="112" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">a&#8324;&#8324;</text>

              {/* Strike-through row 1 */}
              <line x1="0" y1="18" x2="195" y2="18" className="stroke-rose-500 stroke-[2] stroke-dasharray-[4,2]" />
              {/* Strike-through col 2 */}
              <line x1="75" y1="0" x2="75" y2="120" className="stroke-rose-500 stroke-[2] stroke-dasharray-[4,2]" />
            </g>

            {/* Minor M_{12} result */}
            <g transform="translate(240, 24)">
              <text x="0" y="16" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">
                剩余 3&times;3 子矩阵 (M&#8321;&#8322;)：
              </text>
              <rect x="0" y="28" width="145" height="74" rx="4" className="fill-emerald-500/10 stroke-emerald-500/40 stroke-[1]" />
              <text x="12" y="48" className="text-[10px] font-mono fill-emerald-600 dark:fill-emerald-400">a&#8322;&#8321;  a&#8322;&#8323;  a&#8322;&#8324;</text>
              <text x="12" y="66" className="text-[10px] font-mono fill-emerald-600 dark:fill-emerald-400">a&#8323;&#8321;  a&#8323;&#8323;  a&#8323;&#8324;</text>
              <text x="12" y="84" className="text-[10px] font-mono fill-emerald-600 dark:fill-emerald-400">a&#8324;&#8321;  a&#8324;&#8323;  a&#8324;&#8324;</text>
              <text x="0" y="118" className="text-xs font-mono font-semibold fill-foreground">
                det(A) = &sum;&#11388; a&#8321;&#11388; C&#8321;&#11388;
              </text>
            </g>
          </g>
        </g>

        {/* RIGHT PANEL: Tridiagonal Matrix Recurrence */}
        <g transform="translate(490, 20)">
          <rect
            x="0"
            y="0"
            width="450"
            height="440"
            rx="12"
            className="fill-card/40 dark:fill-card/20 stroke-border stroke-[1.5]"
          />

          <text x="24" y="32" className="text-base font-bold fill-foreground">
            三对角矩阵的递推关系（余子式展开奇迹）
          </text>
          <text x="24" y="52" className="text-xs fill-muted-foreground">
            沿第 1 行与余子式第 1 列连续展开两次：D&#8345; = a D&#8345;&#8331;&#8321; &minus; bc D&#8345;&#8331;&#8322;
          </text>

          {/* Recurrence Model 1: Second difference matrix K_n (2, -1, -1) */}
          <g transform="translate(24, 75)">
            <rect
              x="0"
              y="0"
              width="402"
              height="160"
              rx="8"
              className="fill-blue-500/10 stroke-blue-500/30 stroke-[1]"
            />
            <text x="16" y="24" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">
              案例 A：二阶差分矩阵 K&#8345;（主对角线 2，次对角线 &minus;1）
            </text>
            <text x="16" y="42" className="text-xs font-mono font-semibold fill-foreground">
              递推方程：D&#8345; = 2 D&#8345;&#8331;&#8321; &minus; D&#8345;&#8331;&#8322;
            </text>

            {/* Sequence stepping */}
            <g transform="translate(16, 55)">
              <g transform="translate(0, 0)">
                <rect x="0" y="0" width="56" height="42" rx="4" className="fill-background stroke-border stroke-[1]" />
                <text x="28" y="16" textAnchor="middle" className="text-[10px] fill-muted-foreground">D&#8321;</text>
                <text x="28" y="32" textAnchor="middle" className="text-sm font-bold fill-blue-600 dark:fill-blue-400">2</text>
              </g>
              <g transform="translate(68, 0)">
                <rect x="0" y="0" width="56" height="42" rx="4" className="fill-background stroke-border stroke-[1]" />
                <text x="28" y="16" textAnchor="middle" className="text-[10px] fill-muted-foreground">D&#8322;</text>
                <text x="28" y="32" textAnchor="middle" className="text-sm font-bold fill-blue-600 dark:fill-blue-400">3</text>
              </g>
              <g transform="translate(136, 0)">
                <rect x="0" y="0" width="56" height="42" rx="4" className="fill-background stroke-border stroke-[1]" />
                <text x="28" y="16" textAnchor="middle" className="text-[10px] fill-muted-foreground">D&#8323;</text>
                <text x="28" y="32" textAnchor="middle" className="text-sm font-bold fill-blue-600 dark:fill-blue-400">4</text>
              </g>
              <g transform="translate(204, 0)">
                <rect x="0" y="0" width="56" height="42" rx="4" className="fill-background stroke-border stroke-[1]" />
                <text x="28" y="16" textAnchor="middle" className="text-[10px] fill-muted-foreground">D&#8324;</text>
                <text x="28" y="32" textAnchor="middle" className="text-sm font-bold fill-blue-600 dark:fill-blue-400">5</text>
              </g>
              <g transform="translate(272, 0)">
                <rect x="0" y="0" width="95" height="42" rx="4" className="fill-emerald-500/20 stroke-emerald-500 stroke-[1.5]" />
                <text x="47" y="16" textAnchor="middle" className="text-[10px] fill-muted-foreground">通项公式 D&#8345;</text>
                <text x="47" y="32" textAnchor="middle" className="text-sm font-bold fill-emerald-600 dark:fill-emerald-400">n + 1</text>
              </g>
            </g>

            <text x="16" y="122" className="text-xs fill-foreground">
              数学内涵：差分行列式线性增长，D&#8345; &gt; 0 恒成立，K&#8345; 处处可逆（且正定）！
            </text>
            <text x="16" y="140" className="text-[11px] fill-muted-foreground">
              这是物理与微分方程中连续区间 [&minus;u&apos;&apos; = f] 离散化的基石矩阵。
            </text>
          </g>

          {/* Recurrence Model 2: Strang's 1, 1, 1 tridiagonal matrix T_n */}
          <g transform="translate(24, 250)">
            <rect
              x="0"
              y="0"
              width="402"
              height="170"
              rx="8"
              className="fill-purple-500/10 stroke-purple-500/30 stroke-[1]"
            />
            <text x="16" y="24" className="text-xs font-bold fill-purple-600 dark:fill-purple-400">
              案例 B：Strang 的全 1 三对角矩阵 T&#8345;（主对角线 1，次对角线 1）
            </text>
            <text x="16" y="42" className="text-xs font-mono font-semibold fill-foreground">
              递推方程：D&#8345; = D&#8345;&#8331;&#8321; &minus; D&#8345;&#8331;&#8322;（以 6 为周期循环）
            </text>

            {/* Cycle representation */}
            <g transform="translate(16, 52)">
              {[
                { n: 'D1', v: '1', c: 'fill-blue-600 dark:fill-blue-400' },
                { n: 'D2', v: '0', c: 'fill-rose-600 dark:fill-rose-400 font-extrabold' },
                { n: 'D3', v: '-1', c: 'fill-foreground' },
                { n: 'D4', v: '-1', c: 'fill-foreground' },
                { n: 'D5', v: '0', c: 'fill-rose-600 dark:fill-rose-400 font-extrabold' },
                { n: 'D6', v: '1', c: 'fill-blue-600 dark:fill-blue-400' },
              ].map((item, idx) => (
                <g key={idx} transform={`translate(${idx * 62}, 0)`}>
                  <rect
                    x="0"
                    y="0"
                    width="54"
                    height="40"
                    rx="4"
                    className={`fill-background stroke-border stroke-[1] ${
                      item.v === '0' ? 'ring-2 ring-rose-500/50' : ''
                    }`}
                  />
                  <text x="27" y="15" textAnchor="middle" className="text-[10px] fill-muted-foreground">
                    {item.n === 'D1' ? 'D₁' : item.n === 'D2' ? 'D₂' : item.n === 'D3' ? 'D₃' : item.n === 'D4' ? 'D₄' : item.n === 'D5' ? 'D₅' : 'D₆'}
                  </text>
                  <text x="27" y="32" textAnchor="middle" className={`text-sm ${item.c}`}>
                    {item.v}
                  </text>
                </g>
              ))}
            </g>

            {/* Singularity Alert Banner */}
            <g transform="translate(16, 105)">
              <rect x="0" y="0" width="370" height="52" rx="4" className="fill-rose-500/10 stroke-rose-500/30 stroke-[1]" />
              <text x="12" y="20" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">
                奇异性周期：当 n = 2, 5, 8, 11, ... (n &equiv; 2 mod 3) 时，det = 0！
              </text>
              <text x="12" y="38" className="text-[11px] fill-muted-foreground">
                在这些维度下矩阵不可逆（退化）。特征方程的复根导致了周期性振荡。
              </text>
            </g>
          </g>
        </g>
      </svg>
    </MathDiagram>
  )
}
