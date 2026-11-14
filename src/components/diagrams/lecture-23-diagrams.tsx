'use client';

import * as React from 'react';
import { MathDiagram } from './math-diagram';

/**
 * L23 Diagram 1: 2x2 Trace-Determinant Phase Stability Plane Diagram
 * (tr A, det A) 平面与系统相图稳定性全景划分
 */
export function TraceDeterminantStabilityPlaneDiagram({
  caption = '2\\times 2 矩阵迹-行列式相平面稳定性分布图（Trace-Determinant Plane）：抛物线 \\Delta = T^2 - 4D = 0 区分节点与焦点，第二象限 (T < 0, D > 0) 为唯一渐近稳定区',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 760 480"
        className="w-full h-auto max-w-3xl mx-auto font-sans select-none"
        aria-label="Trace-Determinant Stability Plane Diagram"
      >
        <defs>
          {/* Arrow markers */}
          <marker
            id="l23-arrow-axis"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-foreground/70" />
          </marker>
          <marker
            id="l23-arrow-flow"
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
            id="l23-arrow-emerald"
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
            id="l23-arrow-rose"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
          <marker
            id="l23-arrow-amber"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
          <marker
            id="l23-arrow-purple"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-purple-600 dark:fill-purple-400" />
          </marker>
        </defs>

        {/* Background panel */}
        <rect width="760" height="480" rx="12" className="fill-background stroke-border/40" strokeWidth="1" />

        {/* 1. Shaded Regions */}
        {/* Saddle Point Region: D < 0 (lower half plane) */}
        <rect
          x="50"
          y="260"
          width="660"
          height="170"
          className="fill-purple-500/10 dark:fill-purple-500/15"
        />

        {/* Stable Spiral (Focus) Region: T < 0, D > T^2 / 4 */}
        <path
          d="M 133 60 L 133 61.5 Q 256.5 260 380 260 L 380 60 Z"
          className="fill-blue-500/15 dark:fill-blue-500/20"
        />

        {/* Stable Node Region: T < 0, 0 < D < T^2 / 4 */}
        <path
          d="M 133 260 L 380 260 Q 256.5 260 133 61.5 Z"
          className="fill-emerald-500/15 dark:fill-emerald-500/20"
        />

        {/* Unstable Spiral Region: T > 0, D > T^2 / 4 */}
        <path
          d="M 380 60 L 380 260 Q 503.5 260 627 61.5 L 627 60 Z"
          className="fill-rose-500/15 dark:fill-rose-500/20"
        />

        {/* Unstable Node Region: T > 0, 0 < D < T^2 / 4 */}
        <path
          d="M 380 260 L 627 260 L 627 61.5 Q 503.5 260 380 260 Z"
          className="fill-amber-500/15 dark:fill-amber-500/20"
        />

        {/* Asymptotic Stability Zone highlight border (Quadrant II: T < 0, D > 0) */}
        <rect
          x="65"
          y="50"
          width="315"
          height="210"
          rx="6"
          className="stroke-emerald-600/50 dark:stroke-emerald-400/50 fill-none"
          strokeWidth="2"
          strokeDasharray="6 3"
        />

        {/* 2. Parabola: D = T^2 / 4 (Discriminant Delta = 0) */}
        <path
          d="M 133 61.5 Q 256.5 260 380 260 Q 503.5 260 627 61.5"
          className="stroke-indigo-600 dark:stroke-indigo-400 fill-none"
          strokeWidth="2.5"
        />

        {/* 3. Coordinate Axes */}
        {/* Horizontal Axis: T = tr(A) */}
        <line
          x1="50"
          y1="260"
          x2="710"
          y2="260"
          className="stroke-foreground/70"
          strokeWidth="1.5"
          markerEnd="url(#l23-arrow-axis)"
        />
        {/* Vertical Axis: D = det(A) */}
        <line
          x1="380"
          y1="440"
          x2="380"
          y2="40"
          className="stroke-foreground/70"
          strokeWidth="1.5"
          markerEnd="url(#l23-arrow-axis)"
        />

        {/* Center / Neutral line (T = 0, D > 0) */}
        <line
          x1="380"
          y1="260"
          x2="380"
          y2="55"
          className="stroke-cyan-500 dark:stroke-cyan-400"
          strokeWidth="3.5"
        />

        {/* Axis Labels */}
        <text x="705" y="280" className="text-xs font-semibold fill-foreground">
          T = tr(A)
        </text>
        <text x="392" y="48" className="text-xs font-semibold fill-foreground">
          D = det(A)
        </text>
        <text x="366" y="278" className="text-xs fill-muted-foreground font-mono">
          O
        </text>

        {/* Stability Banner */}
        <g transform="translate(75, 60)">
          <rect
            width="250"
            height="32"
            rx="6"
            className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.5"
          />
          <text
            x="125"
            y="20"
            textAnchor="middle"
            className="text-xs font-bold fill-emerald-800 dark:fill-emerald-300"
          >
            ★ 渐近稳定区 (Asymptotically Stable)
          </text>
        </g>

        {/* Region Labels & Phase Trajectory Sketches */}

        {/* 1. Stable Spiral / Focus */}
        <g transform="translate(240, 140)">
          <rect
            x="-75"
            y="-30"
            width="150"
            height="50"
            rx="6"
            className="fill-background/90 stroke-blue-500/30"
            strokeWidth="1"
          />
          <text x="0" y="-12" textAnchor="middle" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">
            稳定焦点 / 渐近旋转
          </text>
          <text x="0" y="4" textAnchor="middle" className="text-[11px] fill-muted-foreground">
            Stable Spiral (Focus)
          </text>
          <text x="0" y="16" textAnchor="middle" className="text-[10px] font-mono fill-blue-700 dark:fill-blue-300">
            λ = α ± iω, α &lt; 0
          </text>
          {/* Micro-spiral sketch */}
          <path
            d="M 60 -5 A 15 15 0 0 1 75 -20 A 25 25 0 0 1 100 -5 A 35 35 0 0 1 65 30"
            className="stroke-blue-500 fill-none"
            strokeWidth="1.2"
            markerEnd="url(#l23-arrow-flow)"
            transform="scale(0.35) translate(-230, -50)"
          />
        </g>

        {/* 2. Stable Node */}
        <g transform="translate(200, 220)">
          <rect
            x="-65"
            y="-22"
            width="130"
            height="44"
            rx="6"
            className="fill-background/90 stroke-emerald-500/30"
            strokeWidth="1"
          />
          <text x="0" y="-7" textAnchor="middle" className="text-xs font-bold fill-emerald-600 dark:fill-emerald-400">
            稳定节点 (Stable Node)
          </text>
          <text x="0" y="8" textAnchor="middle" className="text-[10px] font-mono fill-emerald-700 dark:fill-emerald-300">
            λ₂ &lt; λ₁ &lt; 0
          </text>
          <text x="0" y="18" textAnchor="middle" className="text-[9px] fill-muted-foreground">
            单调衰减归零
          </text>
        </g>

        {/* 3. Neutral Center Ray (T = 0, D > 0) */}
        <g transform="translate(380, 110)">
          <rect
            x="10"
            y="-22"
            width="135"
            height="44"
            rx="6"
            className="fill-background/95 stroke-cyan-500"
            strokeWidth="1.5"
          />
          <text x="77" y="-7" textAnchor="middle" className="text-xs font-bold fill-cyan-700 dark:fill-cyan-300">
            中心点 (Center)
          </text>
          <text x="77" y="8" textAnchor="middle" className="text-[10px] font-mono fill-cyan-600 dark:fill-cyan-400">
            T = 0, λ = ±iω
          </text>
          <text x="77" y="18" textAnchor="middle" className="text-[9px] fill-muted-foreground">
            能量守恒 / 封闭周期轨道
          </text>
        </g>

        {/* 4. Unstable Spiral */}
        <g transform="translate(520, 140)">
          <rect
            x="-70"
            y="-30"
            width="140"
            height="50"
            rx="6"
            className="fill-background/90 stroke-rose-500/30"
            strokeWidth="1"
          />
          <text x="0" y="-12" textAnchor="middle" className="text-xs font-bold fill-rose-600 dark:fill-rose-400">
            不稳定焦点 / 发散螺旋
          </text>
          <text x="0" y="4" textAnchor="middle" className="text-[11px] fill-muted-foreground">
            Unstable Spiral
          </text>
          <text x="0" y="16" textAnchor="middle" className="text-[10px] font-mono fill-rose-700 dark:fill-rose-300">
            λ = α ± iω, α &gt; 0
          </text>
        </g>

        {/* 5. Unstable Node */}
        <g transform="translate(560, 220)">
          <rect
            x="-65"
            y="-22"
            width="130"
            height="44"
            rx="6"
            className="fill-background/90 stroke-amber-500/30"
            strokeWidth="1"
          />
          <text x="0" y="-7" textAnchor="middle" className="text-xs font-bold fill-amber-600 dark:fill-amber-400">
            不稳定节点 (Node)
          </text>
          <text x="0" y="8" textAnchor="middle" className="text-[10px] font-mono fill-amber-700 dark:fill-amber-300">
            0 &lt; λ₁ &lt; λ₂
          </text>
          <text x="0" y="18" textAnchor="middle" className="text-[9px] fill-muted-foreground">
            无振荡指数发散
          </text>
        </g>

        {/* 6. Saddle Points (D < 0) */}
        <g transform="translate(380, 340)">
          <rect
            x="-140"
            y="-32"
            width="280"
            height="64"
            rx="8"
            className="fill-background/95 stroke-purple-500/40"
            strokeWidth="1.5"
          />
          <text x="0" y="-14" textAnchor="middle" className="text-xs font-bold fill-purple-600 dark:fill-purple-400">
            鞍点 (Saddle Points) — 恒不稳定
          </text>
          <text x="0" y="4" textAnchor="middle" className="text-[11px] font-mono fill-purple-700 dark:fill-purple-300">
            D = det(A) &lt; 0 ⟹ λ₁ &lt; 0 &lt; λ₂
          </text>
          <text x="0" y="20" textAnchor="middle" className="text-[10px] fill-muted-foreground">
            双曲结构：稳定子空间吸引，不稳定子空间排斥并主导发散
          </text>
        </g>

        {/* Parabola label */}
        <g transform="translate(615, 95)">
          <text x="0" y="0" className="text-[11px] font-semibold fill-indigo-600 dark:fill-indigo-400">
            Δ = T² - 4D = 0
          </text>
          <text x="0" y="14" className="text-[10px] fill-muted-foreground">
            抛物线：重特征值临界阻尼
          </text>
        </g>

        {/* Bottom condition summary pill */}
        <g transform="translate(140, 445)">
          <rect
            x="0"
            y="-14"
            width="480"
            height="26"
            rx="13"
            className="fill-muted/60 stroke-border/60"
            strokeWidth="1"
          />
          <text x="240" y="3" textAnchor="middle" className="text-xs font-medium fill-foreground">
            连续系统渐近稳定充要条件：tr(A) &lt; 0 且 det(A) &gt; 0 ⟺ 所有 Re(λᵢ) &lt; 0
          </text>
        </g>
      </svg>
    </MathDiagram>
  );
}

/**
 * L23 Diagram 2: Matrix Exponential Decoupling & Non-Commutativity Diagram
 * 矩阵指数对角化解耦架构与非交换幂级数乘积法则对比
 */
export function MatrixExponentialDecouplingDiagram({
  caption = '矩阵指数演化架构图：左侧展示特征基底坐标变换下耦合系统的完全对角解耦 (e^{At} = S e^{\\Lambda t} S^{-1})；右侧展示矩阵级数定义与 AB \\neq BA 时乘积法则的失效',
}: {
  caption?: string;
}) {
  return (
    <MathDiagram caption={caption}>
      <svg
        viewBox="0 0 760 420"
        className="w-full h-auto max-w-3xl mx-auto font-sans select-none"
        aria-label="Matrix Exponential Decoupling and Commutativity Diagram"
      >
        <defs>
          <marker
            id="l23-arrow-flow-decouple"
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
            id="l23-arrow-emerald-decouple"
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
            id="l23-arrow-muted-decouple"
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

        {/* Background */}
        <rect width="760" height="420" rx="12" className="fill-background stroke-border/40" strokeWidth="1" />

        {/* Dividing line between panels */}
        <line x1="380" y1="20" x2="380" y2="400" className="stroke-border/60" strokeWidth="1" strokeDasharray="4 4" />

        {/* =========================================================================
            LEFT PANEL: EIGENMODE DECOUPLING
           ========================================================================= */}
        <g transform="translate(15, 15)">
          <text x="175" y="15" textAnchor="middle" className="text-sm font-bold fill-foreground">
            一、特征模态坐标解耦架构
          </text>
          <text x="175" y="32" textAnchor="middle" className="text-xs fill-muted-foreground">
            将 n 维耦合微分方程对角化为标量独立演化
          </text>

          {/* Commutative Diagram Nodes */}
          {/* Top Left: u(0) */}
          <g transform="translate(25, 55)">
            <rect width="105" height="52" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="52" y="24" textAnchor="middle" className="text-xs font-bold fill-foreground">
              u(0) ∈ ℝⁿ
            </text>
            <text x="52" y="40" textAnchor="middle" className="text-[10px] fill-muted-foreground">
              初始状态向量
            </text>
          </g>

          {/* Top Right: u(t) */}
          <g transform="translate(220, 55)">
            <rect width="105" height="52" rx="8" className="fill-blue-500/15 stroke-blue-500/50" strokeWidth="1.5" />
            <text x="52" y="24" textAnchor="middle" className="text-xs font-bold fill-blue-700 dark:fill-blue-300">
              u(t) = e^{`{At}`} u(0)
            </text>
            <text x="52" y="40" textAnchor="middle" className="text-[10px] fill-muted-foreground">
              耦合状态演化
            </text>
          </g>

          {/* Direct top arrow: e^{At} */}
          <line
            x1="130"
            y1="81"
            x2="215"
            y2="81"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            markerEnd="url(#l23-arrow-flow-decouple)"
          />
          <text x="172" y="74" textAnchor="middle" className="text-[11px] font-mono font-bold fill-blue-600 dark:fill-blue-400">
            e^{`{At}`}
          </text>
          <text x="172" y="96" textAnchor="middle" className="text-[9px] fill-muted-foreground">
            直接矩阵演化
          </text>

          {/* Bottom Left: v(0) = S^{-1} u(0) */}
          <g transform="translate(25, 175)">
            <rect width="105" height="52" rx="8" className="fill-emerald-500/15 stroke-emerald-500/50" strokeWidth="1.5" />
            <text x="52" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300">
              v(0) = S⁻¹u(0)
            </text>
            <text x="52" y="40" textAnchor="middle" className="text-[10px] fill-muted-foreground">
              特征基底坐标
            </text>
          </g>

          {/* Bottom Right: v(t) = e^{Lambda t} v(0) */}
          <g transform="translate(220, 175)">
            <rect width="105" height="52" rx="8" className="fill-emerald-500/15 stroke-emerald-500/50" strokeWidth="1.5" />
            <text x="52" y="24" textAnchor="middle" className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300">
              v(t) = e^{`{Λt}`} v(0)
            </text>
            <text x="52" y="40" textAnchor="middle" className="text-[10px] fill-muted-foreground">
              解耦对角演化
            </text>
          </g>

          {/* Downward projection arrow: S^{-1} */}
          <line
            x1="77"
            y1="107"
            x2="77"
            y2="170"
            className="stroke-muted-foreground"
            strokeWidth="1.8"
            markerEnd="url(#l23-arrow-muted-decouple)"
          />
          <text x="58" y="142" textAnchor="end" className="text-xs font-bold font-mono fill-foreground">
            S⁻¹
          </text>

          {/* Bottom horizontal arrow: e^{Lambda t} */}
          <line
            x1="130"
            y1="201"
            x2="215"
            y2="201"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2"
            markerEnd="url(#l23-arrow-emerald-decouple)"
          />
          <text x="172" y="194" textAnchor="middle" className="text-[11px] font-mono font-bold fill-emerald-600 dark:fill-emerald-400">
            e^{`{Λt}`}
          </text>
          <text x="172" y="218" textAnchor="middle" className="text-[9px] fill-muted-foreground">
            标量独立: e^{`{λᵢt}`}
          </text>

          {/* Upward reconstruction arrow: S */}
          <line
            x1="272"
            y1="175"
            x2="272"
            y2="112"
            className="stroke-muted-foreground"
            strokeWidth="1.8"
            markerEnd="url(#l23-arrow-muted-decouple)"
          />
          <text x="292" y="142" textAnchor="start" className="text-xs font-bold font-mono fill-foreground">
            S
          </text>

          {/* Summary Box */}
          <g transform="translate(15, 250)">
            <rect width="320" height="130" rx="8" className="fill-muted/30 stroke-border" strokeWidth="1" />
            <text x="160" y="24" textAnchor="middle" className="text-xs font-bold fill-foreground">
              三大基本解耦恒等式
            </text>
            <text x="20" y="52" className="text-xs font-mono fill-blue-600 dark:fill-blue-400">
              1. e^{`{At}`} = S · e^{`{Λt}`} · S⁻¹
            </text>
            <text x="20" y="76" className="text-xs font-mono fill-emerald-600 dark:fill-emerald-400">
              2. e^{`{Λt}`} = diag(e^{`{λ₁t}`}, e^{`{λ₂t}`}, ..., e^{`{λₙt}`})
            </text>
            <text x="20" y="102" className="text-xs font-mono fill-foreground">
              3. u(t) = c₁e^{`{λ₁t}`}x₁ + c₂e^{`{λ₂t}`}x₂ + ...
            </text>
            <text x="20" y="118" className="text-[10px] fill-muted-foreground">
              其中 c = S⁻¹u(0) 为特征向量基底下的坐标
            </text>
          </g>
        </g>

        {/* =========================================================================
            RIGHT PANEL: SERIES DEFINITION & NON-COMMUTATIVITY
           ========================================================================= */}
        <g transform="translate(395, 15)">
          <text x="175" y="15" textAnchor="middle" className="text-sm font-bold fill-foreground">
            二、矩阵幂级数与非交换乘积
          </text>
          <text x="175" y="32" textAnchor="middle" className="text-xs fill-muted-foreground">
            级数收敛性与经典指数乘法陷阱
          </text>

          {/* Box 1: Infinite Power Series */}
          <g transform="translate(10, 48)">
            <rect width="330" height="85" rx="8" className="fill-muted/30 stroke-border" strokeWidth="1" />
            <text x="15" y="22" className="text-xs font-bold fill-foreground">
              矩阵指数定义（对所有方阵绝对收敛）
            </text>
            <text x="15" y="46" className="text-xs font-mono fill-indigo-600 dark:fill-indigo-400 font-semibold">
              e^{`{At}`} = I + At + (At)²/2! + (At)³/3! + ...
            </text>
            <text x="15" y="66" className="text-[10px] fill-muted-foreground">
              ✓ 对角矩阵：逐项取指数 diag(e^{`{aᵢᵢt}`})
            </text>
            <text x="15" y="78" className="text-[10px] fill-muted-foreground">
              ✓ 亏损矩阵（不可对角化）：级数依然良定义并收敛！
            </text>
          </g>

          {/* Box 2: Commutativity vs Non-Commutativity */}
          <g transform="translate(10, 145)">
            <rect width="330" height="135" rx="8" className="fill-muted/30 stroke-border" strokeWidth="1" />
            <text x="15" y="22" className="text-xs font-bold fill-foreground">
              乘积法则：e^{`{A+B}`} = e^{`{A}`}e^{`{B}`} 仅在 AB = BA 时成立！
            </text>

            {/* Commuting case */}
            <g transform="translate(15, 34)">
              <rect width="300" height="38" rx="6" className="fill-emerald-500/15 stroke-emerald-500/40" strokeWidth="1" />
              <text x="10" y="16" className="text-xs font-bold fill-emerald-700 dark:fill-emerald-300">
                ✓ 若 AB = BA（可交换）：
              </text>
              <text x="10" y="30" className="text-xs font-mono fill-emerald-800 dark:fill-emerald-200">
                e^{`{A+B}`} = e^{`{A}`}e^{`{B}`} = e^{`{B}`}e^{`{A}`}；特例：e^{`{A(t+s)}`} = e^{`{At}`}e^{`{As}`}
              </text>
            </g>

            {/* Non-commuting case */}
            <g transform="translate(15, 80)">
              <rect width="300" height="46" rx="6" className="fill-rose-500/15 stroke-rose-500/40" strokeWidth="1" />
              <text x="10" y="16" className="text-xs font-bold fill-rose-700 dark:fill-rose-300">
                ✗ 若 AB ≠ BA（非交换，常规情形）：
              </text>
              <text x="10" y="30" className="text-xs font-mono fill-rose-800 dark:fill-rose-200">
                e^{`{A+B}`} ≠ e^{`{A}`}e^{`{B}`}！
              </text>
              <text x="10" y="41" className="text-[10px] font-mono fill-muted-foreground">
                BCH公式：e^{`{A}`}e^{`{B}`} = exp(A + B + ½[A,B] + ...)
              </text>
            </g>
          </g>

          {/* Box 3: Nilpotent Special Case */}
          <g transform="translate(10, 292)">
            <rect width="330" height="88" rx="8" className="fill-amber-500/15 stroke-amber-500/40" strokeWidth="1" />
            <text x="15" y="22" className="text-xs font-bold fill-amber-800 dark:fill-amber-300">
              亏损/幂零矩阵截断（Jordan Block 特例）
            </text>
            <text x="15" y="44" className="text-xs font-mono fill-foreground">
              若 N² = 0 ⟹ e^{`{Nt}`} = I + Nt （有限步精准截断！）
            </text>
            <text x="15" y="64" className="text-[11px] font-mono fill-amber-700 dark:fill-amber-400">
              A = λI + N ⟹ e^{`{At}`} = e^{`{λt}`} (I + Nt) = e^{`{λt}`} [1 t; 0 1]
            </text>
            <text x="15" y="78" className="text-[10px] fill-muted-foreground">
              世俗项（Secular Term）t·e^{`{λt}`} 由此严格产生
            </text>
          </g>
        </g>
      </svg>
    </MathDiagram>
  );
}
