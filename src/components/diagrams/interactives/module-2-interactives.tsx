'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

function fmt(n: number, digits = 2): string {
  const clean = Math.abs(n) < 1e-6 ? 0 : n;
  return Number(clean.toFixed(digits)).toString();
}

function ControlSlider({
  label,
  value,
  min,
  max,
  step = 0.1,
  onChange,
  unit = '',
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  unit?: string;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs">
      <div className="flex items-center justify-between font-mono text-[11px]">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold text-foreground">
          {fmt(value)}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-1.5 w-full cursor-pointer accent-primary"
      />
    </label>
  );
}

// ============================================================================
// L14: Orthogonal Subspaces & Complement Decomposition x = x_r + x_n
// ============================================================================
function L14OrthogonalSubspacesInteractive() {
  const [angleDeg, setAngleDeg] = React.useState(30);
  const [x1, setX1] = React.useState(2.2);
  const [x2, setX2] = React.useState(1.8);

  const rad = (angleDeg * Math.PI) / 180;
  const u: [number, number] = [Math.cos(rad), Math.sin(rad)]; // unit basis for C(A^T)
  const nVec: [number, number] = [-Math.sin(rad), Math.cos(rad)]; // unit basis for N(A)

  const cR = x1 * u[0] + x2 * u[1];
  const cN = x1 * nVec[0] + x2 * nVec[1];
  const xr: [number, number] = [cR * u[0], cR * u[1]];
  const xn: [number, number] = [cN * nVec[0], cN * nVec[1]];
  const dotCheck = xr[0] * xn[0] + xr[1] * xn[1];

  const toSvg = (mx: number, my: number): [number, number] => [115 + mx * 24, 110 - my * 24];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 230 220" className="w-full max-h-56 text-foreground">
            <rect x="14" y="14" width="202" height="192" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="14" y1="110" x2="216" y2="110" className="stroke-border" strokeDasharray="3 3" />
            <line x1="115" y1="14" x2="115" y2="206" className="stroke-border" strokeDasharray="3 3" />

            {/* C(A^T) line */}
            <line
              x1={toSvg(-3.5 * u[0], -3.5 * u[1])[0]}
              y1={toSvg(-3.5 * u[0], -3.5 * u[1])[1]}
              x2={toSvg(3.5 * u[0], 3.5 * u[1])[0]}
              y2={toSvg(3.5 * u[0], 3.5 * u[1])[1]}
              className="stroke-blue-500/60"
              strokeWidth="2.2"
            />
            {/* N(A) orthogonal complement line */}
            <line
              x1={toSvg(-3.5 * nVec[0], -3.5 * nVec[1])[0]}
              y1={toSvg(-3.5 * nVec[0], -3.5 * nVec[1])[1]}
              x2={toSvg(3.5 * nVec[0], 3.5 * nVec[1])[0]}
              y2={toSvg(3.5 * nVec[0], 3.5 * nVec[1])[1]}
              className="stroke-amber-500/60"
              strokeWidth="2.2"
            />

            {/* Dashed orthogonal drop lines */}
            <line
              x1={toSvg(xr[0], xr[1])[0]}
              y1={toSvg(xr[0], xr[1])[1]}
              x2={toSvg(x1, x2)[0]}
              y2={toSvg(x1, x2)[1]}
              className="stroke-muted-foreground"
              strokeDasharray="3 3"
            />
            <line
              x1={toSvg(xn[0], xn[1])[0]}
              y1={toSvg(xn[0], xn[1])[1]}
              x2={toSvg(x1, x2)[0]}
              y2={toSvg(x1, x2)[1]}
              className="stroke-muted-foreground"
              strokeDasharray="3 3"
            />

            {/* Vectors */}
            <line x1="115" y1="110" x2={toSvg(xr[0], xr[1])[0]} y2={toSvg(xr[0], xr[1])[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.8" />
            <line x1="115" y1="110" x2={toSvg(xn[0], xn[1])[0]} y2={toSvg(xn[0], xn[1])[1]} className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="2.8" />
            <line x1="115" y1="110" x2={toSvg(x1, x2)[0]} y2={toSvg(x1, x2)[1]} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.2" />
            <circle cx={toSvg(x1, x2)[0]} cy={toSvg(x1, x2)[1]} r="4.5" className="fill-emerald-500" />

            <text x="20" y="28" className="fill-blue-600 dark:fill-blue-400 font-mono text-[10px]">
              行空间 C(Aᵀ) · xᵣ
            </text>
            <text x="20" y="40" className="fill-amber-600 dark:fill-amber-400 font-mono text-[10px]">
              零空间 N(A) · xₙ (⊥)
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="行空间基准倾角 θ" value={angleDeg} min={-60} max={80} step={5} onChange={setAngleDeg} unit="°" />
          <ControlSlider label="输入向量 x₁" value={x1} min={-3} max={3} step={0.25} onChange={setX1} />
          <ControlSlider label="输入向量 x₂" value={x2} min={-3} max={3} step={0.25} onChange={setX2} />
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-1">
            <div>xᵣ = [{fmt(xr[0])}, {fmt(xr[1])}]ᵀ, ‖xᵣ‖² = {fmt(xr[0] ** 2 + xr[1] ** 2)}</div>
            <div>xₙ = [{fmt(xn[0])}, {fmt(xn[1])}]ᵀ, ‖xₙ‖² = {fmt(xn[0] ** 2 + xn[1] ** 2)}</div>
            <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
              xᵣᵀ xₙ = {fmt(dotCheck)} · ‖x‖² = {fmt(x1 ** 2 + x2 ** 2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L15: Projection onto Subspace p = P b & e = b - p
// ============================================================================
function L15InteractiveSubspaceProjection() {
  const [lineDeg, setLineDeg] = React.useState(25);
  const [bx, setBx] = React.useState(1.5);
  const [by, setBy] = React.useState(2.8);

  const rad = (lineDeg * Math.PI) / 180;
  const a: [number, number] = [Math.cos(rad) * 2.5, Math.sin(rad) * 2.5];
  const aDotA = a[0] * a[0] + a[1] * a[1];
  const xHat = (a[0] * bx + a[1] * by) / aDotA;
  const p: [number, number] = [xHat * a[0], xHat * a[1]];
  const e: [number, number] = [bx - p[0], by - p[1]];
  const aDotE = a[0] * e[0] + a[1] * e[1];

  const P11 = (a[0] * a[0]) / aDotA;
  const P12 = (a[0] * a[1]) / aDotA;
  const P22 = (a[1] * a[1]) / aDotA;

  const toSvg = (mx: number, my: number): [number, number] => [115 + mx * 24, 120 - my * 24];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 230 220" className="w-full max-h-56 text-foreground">
            <rect x="14" y="14" width="202" height="192" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="14" y1="120" x2="216" y2="120" className="stroke-border" strokeDasharray="3 3" />
            <line x1="115" y1="14" x2="115" y2="206" className="stroke-border" strokeDasharray="3 3" />

            {/* Line spanned by a */}
            <line
              x1={toSvg(-3.5 * Math.cos(rad), -3.5 * Math.sin(rad))[0]}
              y1={toSvg(-3.5 * Math.cos(rad), -3.5 * Math.sin(rad))[1]}
              x2={toSvg(3.5 * Math.cos(rad), 3.5 * Math.sin(rad))[0]}
              y2={toSvg(3.5 * Math.cos(rad), 3.5 * Math.sin(rad))[1]}
              className="stroke-blue-500/45"
              strokeWidth="4"
            />
            {/* Vector b */}
            <line x1="115" y1="120" x2={toSvg(bx, by)[0]} y2={toSvg(bx, by)[1]} className="stroke-amber-500" strokeWidth="2.4" />
            {/* Vector p */}
            <line x1="115" y1="120" x2={toSvg(p[0], p[1])[0]} y2={toSvg(p[0], p[1])[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="3" />
            {/* Error vector e = b - p */}
            <line x1={toSvg(p[0], p[1])[0]} y1={toSvg(p[0], p[1])[1]} x2={toSvg(bx, by)[0]} y2={toSvg(bx, by)[1]} className="stroke-rose-500" strokeWidth="2.4" strokeDasharray="4 2" />

            <circle cx={toSvg(bx, by)[0]} cy={toSvg(bx, by)[1]} r="4.5" className="fill-amber-500" />
            <circle cx={toSvg(p[0], p[1])[0]} cy={toSvg(p[0], p[1])[1]} r="4.5" className="fill-blue-600 dark:fill-blue-400" />

            <text x="20" y="28" className="fill-blue-600 dark:fill-blue-400 font-mono text-[10px]">
              投影 p = P b = [{fmt(p[0])}, {fmt(p[1])}]ᵀ
            </text>
            <text x="20" y="40" className="fill-rose-500 font-mono text-[10px]">
              误差 e = b − p (‖e‖ = {fmt(Math.hypot(e[0], e[1]))})
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="子空间直线倾角 θ" value={lineDeg} min={-45} max={75} step={5} onChange={setLineDeg} unit="°" />
          <ControlSlider label="目标向量 b₁" value={bx} min={-2.5} max={3.5} step={0.25} onChange={setBx} />
          <ControlSlider label="目标向量 b₂" value={by} min={-2} max={3.5} step={0.25} onChange={setBy} />
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-1">
            <div>
              投影矩阵 P = a aᵀ / aᵀa = [{fmt(P11)}, {fmt(P12)}; {fmt(P12)}, {fmt(P22)}]
            </div>
            <div className="text-emerald-600 dark:text-emerald-400">
              正交性检验 aᵀ e = {fmt(aDotE)} · trace(P) = {fmt(P11 + P22)} (= rank)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L16: Least Squares Line Fitter (Normal Equations A^T A x_hat = A^T b)
// ============================================================================
function L16LeastSquaresFitter() {
  const [y1, setY1] = React.useState(1);
  const [y2, setY2] = React.useState(2);
  const [y3, setY3] = React.useState(2);

  // Points: (t=0, y1), (t=1, y2), (t=2, y3) => A = [[1,0],[1,1],[1,2]]
  // A^T A = [[3, 3], [3, 5]], det = 6
  const pts: Array<[number, number]> = [
    [0, y1],
    [1, y2],
    [2, y3],
  ];
  const sumY = y1 + y2 + y3;
  const sumTY = 0 * y1 + 1 * y2 + 2 * y3;
  const C = (5 * sumY - 3 * sumTY) / 6;
  const D = (-3 * sumY + 3 * sumTY) / 6;

  const pVals = pts.map(([t]) => C + D * t);
  const errs = pts.map(([, y], i) => y - pVals[i]);
  const sqErr = errs.reduce((s, e) => s + e * e, 0);
  const orthCheck1 = errs.reduce((s, e) => s + e, 0);
  const orthCheck2 = errs.reduce((s, e, idx) => s + idx * e, 0);

  const toSvg = (t: number, y: number): [number, number] => [45 + t * 80, 170 - y * 28];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setY1(1); setY2(2); setY3(2); }}>
          Strang 教材原题 (1,2,2)
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setY1(1); setY2(2); setY3(3); }}>
          完美共线 (e = 0)
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setY1(0.5); setY2(1); setY3(4.5); }}>
          强离群点杠杆测试
        </Button>
        <Badge variant={sqErr < 0.01 ? 'emerald' : 'blue'} className="ml-auto font-mono text-[10px]">
          ŷ = {fmt(C)} + {fmt(D)} t · ‖e‖² = {fmt(sqErr)}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 250 205" className="w-full max-h-52 text-foreground">
            <rect x="14" y="14" width="222" height="176" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="25" y1="170" x2="225" y2="170" className="stroke-border" />
            <line x1="45" y1="22" x2="45" y2="180" className="stroke-border" />

            {/* Fitted Line */}
            <line
              x1={toSvg(-0.2, C + D * -0.2)[0]}
              y1={toSvg(-0.2, C + D * -0.2)[1]}
              x2={toSvg(2.2, C + D * 2.2)[0]}
              y2={toSvg(2.2, C + D * 2.2)[1]}
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
            />

            {/* Vertical error residuals */}
            {pts.map(([t, y], i) => {
              const [px, py] = toSvg(t, y);
              const [, fitY] = toSvg(t, pVals[i]);
              return (
                <g key={t}>
                  <line x1={px} y1={py} x2={px} y2={fitY} className="stroke-rose-500" strokeWidth="2.2" strokeDasharray="3 2" />
                  <circle cx={px} cy={fitY} r="3.5" className="fill-blue-600 dark:fill-blue-400" />
                  <circle cx={px} cy={py} r="5" className="fill-amber-500" />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="点 (t=0) 高度 b₁" value={y1} min={0} max={5} step={0.5} onChange={setY1} />
          <ControlSlider label="点 (t=1) 高度 b₂" value={y2} min={0} max={5} step={0.5} onChange={setY2} />
          <ControlSlider label="点 (t=2) 高度 b₃" value={y3} min={0} max={5} step={0.5} onChange={setY3} />
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-0.5">
            <div>正规方程 AᵀA = [3,3; 3,5] ⇒ Ĉ={fmt(C)}, D̂={fmt(D)}</div>
            <div className="text-emerald-600 dark:text-emerald-400">
              误差向量正交检验 Aᵀe = [{fmt(orthCheck1)}, {fmt(orthCheck2)}]ᵀ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L17: Gram-Schmidt Orthonormalization Interactive (A = Q R)
// ============================================================================
function L17GramSchmidtInteractive() {
  const [step, setStep] = React.useState<0 | 1 | 2>(2);
  const [angleDeg, setAngleDeg] = React.useState(35);
  const [len2, setLen2] = React.useState(2.4);

  const a1: [number, number] = [2.4, 0.4];
  const normA1 = Math.hypot(a1[0], a1[1]);
  const q1: [number, number] = [a1[0] / normA1, a1[1] / normA1];

  const rad = (angleDeg * Math.PI) / 180;
  const a2: [number, number] = [len2 * Math.cos(rad), len2 * Math.sin(rad)];
  const r12 = q1[0] * a2[0] + q1[1] * a2[1];
  const projOnQ1: [number, number] = [r12 * q1[0], r12 * q1[1]];
  const B: [number, number] = [a2[0] - projOnQ1[0], a2[1] - projOnQ1[1]];
  const r22 = Math.hypot(B[0], B[1]);
  const q2: [number, number] = r22 > 1e-4 ? [B[0] / r22, B[1] / r22] : [0, 1];

  const toSvg = (mx: number, my: number): [number, number] => [85 + mx * 40, 150 - my * 40];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant={step === 0 ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setStep(0)}>
          Step 0: 倾斜基 (a₁, a₂)
        </Button>
        <Button size="sm" variant={step === 1 ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setStep(1)}>
          Step 1: 减掉投影得正交向量 B
        </Button>
        <Button size="sm" variant={step === 2 ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setStep(2)}>
          Step 2: 单位化为标准正交基 Q
        </Button>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 240 205" className="w-full max-h-52 text-foreground">
            <rect x="12" y="12" width="216" height="180" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="12" y1="150" x2="228" y2="150" className="stroke-border" strokeDasharray="3 3" />
            <line x1="85" y1="12" x2="85" y2="192" className="stroke-border" strokeDasharray="3 3" />

            {/* Original a1, a2 */}
            <line x1={toSvg(0, 0)[0]} y1={toSvg(0, 0)[1]} x2={toSvg(a1[0], a1[1])[0]} y2={toSvg(a1[0], a1[1])[1]} className="stroke-muted-foreground" strokeWidth="1.8" strokeDasharray="4 2" />
            <line x1={toSvg(0, 0)[0]} y1={toSvg(0, 0)[1]} x2={toSvg(a2[0], a2[1])[0]} y2={toSvg(a2[0], a2[1])[1]} className="stroke-amber-500" strokeWidth="2.2" />

            {step >= 1 && (
              <>
                <line x1={toSvg(projOnQ1[0], projOnQ1[1])[0]} y1={toSvg(projOnQ1[0], projOnQ1[1])[1]} x2={toSvg(a2[0], a2[1])[0]} y2={toSvg(a2[0], a2[1])[1]} className="stroke-rose-500" strokeWidth="2" strokeDasharray="3 2" />
                <line x1={toSvg(0, 0)[0]} y1={toSvg(0, 0)[1]} x2={toSvg(B[0], B[1])[0]} y2={toSvg(B[0], B[1])[1]} className="stroke-emerald-500" strokeWidth="2.4" />
              </>
            )}

            {step === 2 && (
              <>
                <line x1={toSvg(0, 0)[0]} y1={toSvg(0, 0)[1]} x2={toSvg(q1[0], q1[1])[0]} y2={toSvg(q1[0], q1[1])[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="3.2" />
                <line x1={toSvg(0, 0)[0]} y1={toSvg(0, 0)[1]} x2={toSvg(q2[0], q2[1])[0]} y2={toSvg(q2[0], q2[1])[1]} className="stroke-purple-600 dark:stroke-purple-400" strokeWidth="3.2" />
              </>
            )}
            <text x="18" y="26" className="fill-current font-mono text-[10px]">
              q₁·q₂ = {fmt(q1[0] * q2[0] + q1[1] * q2[1])} · det(R) = {fmt(normA1 * r22)}
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="输入向量 a₂ 角度" value={angleDeg} min={12} max={135} step={3} onChange={setAngleDeg} unit="°" />
          <ControlSlider label="输入向量 a₂ 长度" value={len2} min={1} max={3} step={0.2} onChange={setLen2} />
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-1">
            <div>Q = [q₁, q₂] 满足 Qᵀ Q = I₂</div>
            <div>
              R = [ {fmt(normA1)}, {fmt(r12)} ; 0, {fmt(r22)} ] (上三角)
            </div>
            <div className="text-muted-foreground">
              {r22 < 0.35 ? '⚠ a₁ 与 a₂ 接近共线，r₂₂ 极小，需用修正 Gram-Schmidt 防止精度丢失！' : '直角三角形保持张成空间不变，且柱面体积 = r₁₁·r₂₂。'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Module II Interactive Dispatcher
// ============================================================================
export function renderModule2Interactive(id: string): React.ReactNode | null {
  switch (id) {
    case 'l14-orthogonal-subspaces-interactive':
      return <L14OrthogonalSubspacesInteractive />;
    case 'l15-interactive-subspace-projection':
      return <L15InteractiveSubspaceProjection />;
    case 'least-squares-fitter':
      return <L16LeastSquaresFitter />;
    case 'gram-schmidt-interactive':
      return <L17GramSchmidtInteractive />;
    default:
      return null;
  }
}
