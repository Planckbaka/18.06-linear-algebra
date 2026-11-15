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
// L01: Row Picture vs Column Picture 2D Sandbox
// ============================================================================
function L01RowVsColInteractive() {
  type PresetKey = 'intersect' | 'parallel' | 'coincident' | 'illcond';
  const presets: Record<
    PresetKey,
    { label: string; a: [number, number, number, number]; b: [number, number]; initX: number; initY: number }
  > = {
    intersect: { label: '唯一交点 (标准)', a: [2, -1, -1, 2], b: [0, 3], initX: 1, initY: 2 },
    parallel: { label: '平行无解', a: [1, -2, 2, -4], b: [1, 3], initX: 1, initY: 0 },
    coincident: { label: '重合无穷解', a: [1, -2, 2, -4], b: [1, 2], initX: 1, initY: 0 },
    illcond: { label: '近奇异病态', a: [1, 1, 1, 1.15], b: [2, 2.15], initX: 1, initY: 1 },
  };

  const [preset, setPreset] = React.useState<PresetKey>('intersect');
  const [x, setX] = React.useState(1);
  const [y, setY] = React.useState(2);

  const cur = presets[preset];
  const [a11, a12, a21, a22] = cur.a;
  const [b1, b2] = cur.b;

  const selectPreset = (k: PresetKey) => {
    setPreset(k);
    setX(presets[k].initX);
    setY(presets[k].initY);
  };

  const ax1 = a11 * x + a12 * y;
  const ax2 = a21 * x + a22 * y;
  const err = Math.hypot(ax1 - b1, ax2 - b2);
  const det = a11 * a22 - a12 * a21;
  const sol =
    Math.abs(det) > 1e-6
      ? [(a22 * b1 - a12 * b2) / det, (-a21 * b1 + a11 * b2) / det]
      : null;

  // Map math [-4, 4] -> SVG [20, 200]
  const toSvg = (mx: number, my: number): [number, number] => [110 + mx * 22, 110 - my * 22];

  const lineEndpoints = (c1: number, c2: number, rhs: number): [number, number, number, number] | null => {
    if (Math.abs(c1) < 1e-6 && Math.abs(c2) < 1e-6) return null;
    if (Math.abs(c2) >= Math.abs(c1)) {
      const yL = (rhs - c1 * -4) / c2;
      const yR = (rhs - c1 * 4) / c2;
      const [sx1, sy1] = toSvg(-4, yL);
      const [sx2, sy2] = toSvg(4, yR);
      return [sx1, sy1, sx2, sy2];
    }
    const xB = (rhs - c2 * -4) / c1;
    const xT = (rhs - c2 * 4) / c1;
    const [sx1, sy1] = toSvg(xB, -4);
    const [sx2, sy2] = toSvg(xT, 4);
    return [sx1, sy1, sx2, sy2];
  };

  const l1 = lineEndpoints(a11, a12, b1);
  const l2 = lineEndpoints(a21, a22, b2);
  const [px, py] = toSvg(x, y);
  const [oX, oY] = toSvg(0, 0);
  const [c1X, c1Y] = toSvg(x * a11, x * a21);
  const [sumX, sumY] = toSvg(ax1, ax2);
  const [bX, bY] = toSvg(b1, b2);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {(Object.keys(presets) as PresetKey[]).map((k) => (
          <Button
            key={k}
            size="sm"
            variant={preset === k ? 'default' : 'outline'}
            className="h-7 px-2.5 text-[11px]"
            onClick={() => selectPreset(k)}
          >
            {presets[k].label}
          </Button>
        ))}
        <Badge variant={err < 0.08 ? 'emerald' : 'amber'} className="ml-auto font-mono text-[10px]">
          ‖Ax − b‖₂ = {fmt(err)} {err < 0.08 ? '✓ MATCHED' : ''}
        </Badge>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <div className="mb-1 flex items-center justify-between text-[11px] font-medium">
            <span>行图像 Row Picture (x, y 空间)</span>
            <span className="font-mono text-muted-foreground">det = {fmt(det)}</span>
          </div>
          <svg viewBox="0 0 220 220" className="w-full max-h-56 text-foreground">
            <defs>
              <clipPath id="l01-clip-row">
                <rect x="16" y="16" width="188" height="188" rx="4" />
              </clipPath>
            </defs>
            <rect x="16" y="16" width="188" height="188" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="16" y1="110" x2="204" y2="110" className="stroke-border" strokeDasharray="3 3" />
            <line x1="110" y1="16" x2="110" y2="204" className="stroke-border" strokeDasharray="3 3" />
            <g clipPath="url(#l01-clip-row)">
              {l1 && <line x1={l1[0]} y1={l1[1]} x2={l1[2]} y2={l1[3]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.2" />}
              {l2 && <line x1={l2[0]} y1={l2[1]} x2={l2[2]} y2={l2[3]} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.2" strokeDasharray={preset === 'coincident' ? '5 4' : undefined} />}
              {sol && (
                <circle
                  cx={toSvg(sol[0], sol[1])[0]}
                  cy={toSvg(sol[0], sol[1])[1]}
                  r="4"
                  className="fill-amber-500/40 stroke-amber-600 dark:stroke-amber-400"
                  strokeWidth="1.5"
                />
              )}
              <circle cx={px} cy={py} r="5.5" className="fill-rose-500 stroke-background" strokeWidth="1.5" />
            </g>
            <text x="22" y="30" className="fill-blue-600 dark:fill-blue-400 font-mono text-[10px]">
              R1: {a11}x + ({a12})y = {b1}
            </text>
            <text x="22" y="42" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[10px]">
              R2: {a21}x + ({a22})y = {b2}
            </text>
          </svg>
        </div>

        <div className="rounded-lg border bg-background/70 p-2.5">
          <div className="mb-1 flex items-center justify-between text-[11px] font-medium">
            <span>列图像 Column Picture (b 空间)</span>
            <span className="font-mono text-muted-foreground">
              Ax = [{fmt(ax1)}, {fmt(ax2)}]ᵀ
            </span>
          </div>
          <svg viewBox="0 0 220 220" className="w-full max-h-56 text-foreground">
            <rect x="16" y="16" width="188" height="188" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="16" y1="110" x2="204" y2="110" className="stroke-border" strokeDasharray="3 3" />
            <line x1="110" y1="16" x2="110" y2="204" className="stroke-border" strokeDasharray="3 3" />
            {/* Target b */}
            <line x1={oX} y1={oY} x2={bX} y2={bY} className="stroke-amber-500" strokeWidth="2.5" strokeDasharray="4 2" />
            <circle cx={bX} cy={bY} r="4.5" className="fill-amber-500" />
            <text x={bX + 6} y={bY - 4} className="fill-amber-600 dark:fill-amber-400 font-mono text-[10px] font-bold">
              b=[{b1},{b2}]ᵀ
            </text>
            {/* x*a1 */}
            <line x1={oX} y1={oY} x2={c1X} y2={c1Y} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.4" />
            {/* y*a2 from tip of x*a1 */}
            <line x1={c1X} y1={c1Y} x2={sumX} y2={sumY} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.4" />
            {/* Resultant Ax */}
            <line x1={oX} y1={oY} x2={sumX} y2={sumY} className="stroke-rose-500" strokeWidth="1.8" />
            <circle cx={sumX} cy={sumY} r="4.5" className="fill-rose-500" />
            <text x="22" y="30" className="fill-blue-600 dark:fill-blue-400 font-mono text-[10px]">
              x·a₁ = {fmt(x)}·[{a11},{a21}]ᵀ
            </text>
            <text x="22" y="42" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[10px]">
              y·a₂ = {fmt(y)}·[{a12},{a22}]ᵀ
            </text>
          </svg>
        </div>
      </div>

      <div className="grid gap-3 rounded-lg border bg-background/60 p-3 sm:grid-cols-2">
        <ControlSlider label="试探系数 x (缩放第一列 a₁)" value={x} min={-2.5} max={2.5} step={0.25} onChange={setX} />
        <ControlSlider label="试探系数 y (缩放第二列 a₂)" value={y} min={-2.5} max={2.5} step={0.25} onChange={setY} />
      </div>
    </div>
  );
}

// ============================================================================
// L02: Gaussian Elimination Stepper
// ============================================================================
function L02EliminationStepper() {
  const [caseIdx, setCaseIdx] = React.useState(0);
  const [step, setStep] = React.useState(0);

  const cases = [
    {
      name: '标准 3×3 无行交换',
      steps: [
        {
          title: 'Step 0: 初始增广矩阵 [A | b]',
          note: '锁定主元 (1,1) = 1，目标消除下方第 2、3 行的第 1 列元素。',
          pivot: [0, 0] as [number, number] | null,
          op: 'E = I',
          mat: [
            [1, 2, 1, 2],
            [3, 8, 1, 12],
            [0, 4, 1, 2],
          ],
          xSol: null as number[] | null,
        },
        {
          title: 'Step 1: R2 ← R2 − 3·R1 (ℓ₂₁ = 3)',
          note: '乘数 ℓ₂₁ = 3/1 = 3；第 (2,2) 新主元变为 8 − 3×2 = 2。',
          pivot: [1, 1] as [number, number] | null,
          op: 'E₂₁ = I − 3·e₂e₁ᵀ',
          mat: [
            [1, 2, 1, 2],
            [0, 2, -2, 6],
            [0, 4, 1, 2],
          ],
          xSol: null as number[] | null,
        },
        {
          title: 'Step 2: R3 ← R3 − 2·R2 (ℓ₃₂ = 2) ⇒ 得上三角 [U | c]',
          note: '第 3 个主元 (3,3) = 1 − 2×(−2) = 5 ≠ 0，行列式 = 1×2×5 = 10。',
          pivot: [2, 2] as [number, number] | null,
          op: 'E₃₂ = I − 2·e₃e₂ᵀ',
          mat: [
            [1, 2, 1, 2],
            [0, 2, -2, 6],
            [0, 0, 5, -10],
          ],
          xSol: null as number[] | null,
        },
        {
          title: 'Step 3: 回代 Back Substitution (由下向上)',
          note: '5z = −10 ⇒ z = −2；2y − 2(−2) = 6 ⇒ y = 1；x + 2(1) + (−2) = 2 ⇒ x = 2。',
          pivot: null,
          op: 'U x = c',
          mat: [
            [1, 2, 1, 2],
            [0, 2, -2, 6],
            [0, 0, 5, -10],
          ],
          xSol: [2, 1, -2],
        },
      ],
    },
    {
      name: '主元为 0 触发行交换 P',
      steps: [
        {
          title: 'Step 0: 主元位置 (1,1) = 0！需要行交换',
          note: '主元绝不允许为 0，使用置换矩阵 P₁₂ 交换 R1 ↔ R2。',
          pivot: [0, 0] as [number, number] | null,
          op: '警告: pivot = 0',
          mat: [
            [0, 2, 1, 5],
            [1, 3, 1, 6],
            [2, 4, 3, 11],
          ],
          xSol: null,
        },
        {
          title: 'Step 1: P₁₂ 交换 R1 ↔ R2，再用 ℓ₃₁ = 2 消去 (3,1)',
          note: '交换后 (1,1) 主元为 1，R3 ← R3 − 2·R1。',
          pivot: [1, 1] as [number, number] | null,
          op: 'E₃₁ · P₁₂',
          mat: [
            [1, 3, 1, 6],
            [0, 2, 1, 5],
            [0, -2, 1, -1],
          ],
          xSol: null,
        },
        {
          title: 'Step 2: R3 ← R3 − (−1)·R2 (ℓ₃₂ = −1) ⇒ 得到 U',
          note: '三个主元全部非零：[1, 2, 2]，系统可逆！',
          pivot: [2, 2] as [number, number] | null,
          op: 'E₃₂ = I + e₃e₂ᵀ',
          mat: [
            [1, 3, 1, 6],
            [0, 2, 1, 5],
            [0, 0, 2, 4],
          ],
          xSol: null,
        },
        {
          title: 'Step 3: 回代求得唯一解 x = [−0.5, 1.5, 2]ᵀ',
          note: '2z = 4 ⇒ z = 2；2y + 2 = 5 ⇒ y = 1.5；x + 4.5 + 2 = 6 ⇒ x = −0.5。',
          pivot: null,
          op: 'PA = LU 完成',
          mat: [
            [1, 3, 1, 6],
            [0, 2, 1, 5],
            [0, 0, 2, 4],
          ],
          xSol: [-0.5, 1.5, 2],
        },
      ],
    },
    {
      name: '消元失败 (奇异矩阵)',
      steps: [
        {
          title: 'Step 0: 初始增广矩阵',
          note: '表面上看有 3 个方程，先按标准消元检查主元。',
          pivot: [0, 0] as [number, number] | null,
          op: 'E = I',
          mat: [
            [1, 2, 1, 4],
            [2, 4, 5, 11],
            [1, 2, 4, 7],
          ],
          xSol: null,
        },
        {
          title: 'Step 1: R2 ← R2 − 2R1, R3 ← R3 − R1',
          note: '第 2 列主元位置 (2,2) 变为 0！下方 (3,2) 也为 0，行交换也救不回第 2 列！',
          pivot: [1, 1] as [number, number] | null,
          op: '第 2 列无主元!',
          mat: [
            [1, 2, 1, 4],
            [0, 0, 3, 3],
            [0, 0, 3, 3],
          ],
          xSol: null,
        },
        {
          title: 'Step 2: 主元列移到第 3 列，秩 r = 2 < 3',
          note: 'R3 ← R3 − R2 全归零，仅有 2 个主元 [1, 3]，x₂ 是自由变量，存在无穷多解。',
          pivot: [1, 2] as [number, number] | null,
          op: 'Singular (rank = 2)',
          mat: [
            [1, 2, 1, 4],
            [0, 0, 3, 3],
            [0, 0, 0, 0],
          ],
          xSol: null,
        },
        {
          title: 'Step 3: 解族参数化 x = [3 − 2t, t, 1]ᵀ',
          note: '固定特解 [3, 0, 1]ᵀ 加上零空间自由方向 t·[−2, 1, 0]ᵀ。',
          pivot: null,
          op: 'x₂ = t (自由)',
          mat: [
            [1, 2, 1, 4],
            [0, 0, 3, 3],
            [0, 0, 0, 0],
          ],
          xSol: null,
        },
      ],
    },
  ];

  const activeCase = cases[caseIdx];
  const cur = activeCase.steps[step];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {cases.map((c, idx) => (
          <Button
            key={c.name}
            size="sm"
            variant={caseIdx === idx ? 'default' : 'outline'}
            className="h-7 px-2.5 text-[11px]"
            onClick={() => {
              setCaseIdx(idx);
              setStep(0);
            }}
          >
            {c.name}
          </Button>
        ))}
        <Badge variant="blue" className="ml-auto font-mono text-[10px]">
          {cur.op}
        </Badge>
      </div>

      <div className="rounded-lg border bg-background/75 p-3">
        <div className="mb-2 text-xs font-semibold text-foreground">{cur.title}</div>
        <div className="overflow-x-auto">
          <table className="mx-auto border-collapse font-mono text-xs">
            <tbody>
              {cur.mat.map((row, r) => (
                <tr key={r}>
                  {row.map((val, c) => {
                    const isPivot = cur.pivot && cur.pivot[0] === r && cur.pivot[1] === c;
                    const isRhs = c === 3;
                    return (
                      <td
                        key={c}
                        className={`min-w-[3.2rem] px-3 py-1.5 text-center border-border ${
                          isRhs ? 'border-l-2 border-dashed bg-muted/30 font-semibold' : ''
                        } ${
                          isPivot
                            ? 'rounded bg-amber-500/20 font-bold text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/50'
                            : 'text-foreground'
                        }`}
                      >
                        {fmt(val)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2.5 mb-0 text-xs text-muted-foreground">{cur.note}</p>
        {cur.xSol && (
          <div className="mt-2 rounded bg-emerald-500/10 px-2.5 py-1.5 font-mono text-xs text-emerald-700 dark:text-emerald-300">
            x = [{cur.xSol.map((v) => fmt(v)).join(', ')}]ᵀ
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((s) => (
            <Button
              key={s}
              size="sm"
              variant={step === s ? 'default' : 'outline'}
              className="h-7 px-2.5 font-mono text-[11px]"
              onClick={() => setStep(s)}
            >
              Step {s}
            </Button>
          ))}
        </div>
        <div className="flex gap-1.5">
          <Button size="sm" variant="outline" className="h-7 text-[11px]" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
            上一步
          </Button>
          <Button size="sm" variant="default" className="h-7 text-[11px]" disabled={step === 3} onClick={() => setStep((s) => Math.min(3, s + 1))}>
            下一步 →
          </Button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L03: Rank-1 Outer Product & Matrix Multiplication Slicer
// ============================================================================
function L03Rank1OuterSlicer() {
  const [u1, setU1] = React.useState(1);
  const [u2, setU2] = React.useState(2);
  const [u3, setU3] = React.useState(-1);
  const [v1, setV1] = React.useState(2);
  const [v2, setV2] = React.useState(-1);
  const [v3, setV3] = React.useState(3);
  const [mode, setMode] = React.useState<'outer' | 'col'>('outer');

  const u = [u1, u2, u3];
  const v = [v1, v2, v3];
  const mat = u.map((ui) => v.map((vj) => ui * vj));
  const isZero = u.every((x) => Math.abs(x) < 1e-6) || v.every((x) => Math.abs(x) < 1e-6);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant={mode === 'outer' ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setMode('outer')}>
          外积视角 A = u vᵀ
        </Button>
        <Button size="sm" variant={mode === 'col' ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setMode('col')}>
          列缩放构造 (第 j 列 = vⱼ u)
        </Button>
        <Badge variant={isZero ? 'outline' : 'purple'} className="ml-auto font-mono text-[10px]">
          rank(u vᵀ) = {isZero ? 0 : 1} · LoRA 同构基准
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2 rounded-lg border bg-background/70 p-3">
          <div className="text-[11px] font-semibold">调节列向量 u ∈ ℝ³ 与行向量 vᵀ ∈ ℝ¹ˣ³</div>
          <div className="grid grid-cols-3 gap-2">
            <ControlSlider label="u₁" value={u1} min={-3} max={3} step={1} onChange={setU1} />
            <ControlSlider label="u₂" value={u2} min={-3} max={3} step={1} onChange={setU2} />
            <ControlSlider label="u₃" value={u3} min={-3} max={3} step={1} onChange={setU3} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ControlSlider label="v₁" value={v1} min={-3} max={3} step={1} onChange={setV1} />
            <ControlSlider label="v₂" value={v2} min={-3} max={3} step={1} onChange={setV2} />
            <ControlSlider label="v₃" value={v3} min={-3} max={3} step={1} onChange={setV3} />
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-lg border bg-background/70 p-3">
          <div className="mb-2 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
            <span>A = u vᵀ (3×3)</span>
            <span>仅需 3 + 3 = 6 个参数生成 9 个元素</span>
          </div>
          <table className="mx-auto border-collapse font-mono text-xs">
            <thead>
              <tr>
                <th className="p-1 text-muted-foreground">u \ vᵀ</th>
                {v.map((vj, j) => (
                  <th key={j} className="px-3 py-1 text-emerald-600 dark:text-emerald-400">
                    {vj}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mat.map((row, i) => (
                <tr key={i}>
                  <td className="px-2 py-1.5 font-semibold text-blue-600 dark:text-blue-400">{u[i]}</td>
                  {row.map((val, j) => (
                    <td
                      key={j}
                      className={`min-w-[3.2rem] border border-border px-3 py-1.5 text-center ${
                        mode === 'col' && j === 0 ? 'bg-blue-500/10' : mode === 'col' && j === 1 ? 'bg-purple-500/10' : ''
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 mb-0 text-center text-[11px] text-muted-foreground">
            {mode === 'outer'
              ? `所有行都是 [${v.join(', ')}] 的倍数，所有列都是 [${u.join(', ')}]ᵀ 的倍数 ⇒ 维数为 1。`
              : `列 1 = (${v1})·u，列 2 = (${v2})·u，列 3 = (${v3})·u，全部共线！`}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L04: LU Pyramid Cost & Multiplier vs L^-1 Explorer
// ============================================================================
function L04LuPyramidCost() {
  const [n, setN] = React.useState(64);
  const [k, setK] = React.useState(12);
  const [l21, setL21] = React.useState(3);
  const [l31, setL31] = React.useState(2);
  const [l32, setL32] = React.useState(4);

  const luOps = (2 / 3) * n * n * n;
  const invOps = 2 * n * n * n;
  const solveOps = k * 2 * n * n;
  const totalLu = luOps + solveOps;
  const totalInv = invOps + k * 2 * n * n;
  const speedup = totalInv / totalLu;

  // Compute L * [[1,0,0],[0,1,0],[0,0,1]] vs L^-1 fill-in at (3,1): l32*l21 - l31
  const fillIn31 = l32 * l21 - l31;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2.5 rounded-lg border bg-background/70 p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>计算复杂度金字塔 (n×n 系统, k 个右端项)</span>
            <Badge variant="emerald" className="font-mono text-[10px]">
              LU 加速 {fmt(speedup, 2)}×
            </Badge>
          </div>
          <ControlSlider label="矩阵规模 n" value={n} min={8} max={256} step={8} onChange={setN} />
          <ControlSlider label="右端项数量 k (多次求解 Ax=bᵢ)" value={k} min={1} max={50} step={1} onChange={setK} />
          <div className="space-y-1.5 pt-1 text-[11px] font-mono">
            <div>
              <div className="flex justify-between">
                <span>A = LU + k 次三角回代</span>
                <span>{Math.round(totalLu).toLocaleString()} ops</span>
              </div>
              <div className="mt-0.5 h-2.5 w-full overflow-hidden rounded bg-muted">
                <div className="h-full bg-emerald-500" style={{ width: `${Math.min(100, (totalLu / totalInv) * 100)}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>先算 A⁻¹ 再乘 bᵢ</span>
                <span>{Math.round(totalInv).toLocaleString()} ops</span>
              </div>
              <div className="mt-0.5 h-2.5 w-full overflow-hidden rounded bg-muted">
                <div className="h-full bg-rose-500" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 rounded-lg border bg-background/70 p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>为什么用 L 而不是 E = L⁻¹ ？(填零效应 Fill-in)</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <ControlSlider label="ℓ₂₁" value={l21} min={-4} max={4} step={1} onChange={setL21} />
            <ControlSlider label="ℓ₃₁" value={l31} min={-4} max={4} step={1} onChange={setL31} />
            <ControlSlider label="ℓ₃₂" value={l32} min={-4} max={4} step={1} onChange={setL32} />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
            <div className="rounded border bg-muted/30 p-2">
              <div className="mb-1 text-center text-emerald-600 dark:text-emerald-400 font-semibold">L (直接记录乘数)</div>
              <div className="text-center">[ 1, 0, 0 ]</div>
              <div className="text-center">[ {l21}, 1, 0 ]</div>
              <div className="text-center">[ {l31}, {l32}, 1 ]</div>
            </div>
            <div className="rounded border bg-muted/30 p-2">
              <div className="mb-1 text-center text-amber-600 dark:text-amber-400 font-semibold">L⁻¹ (乘数干涉)</div>
              <div className="text-center">[ 1, 0, 0 ]</div>
              <div className="text-center">[ {-l21}, 1, 0 ]</div>
              <div className="text-center font-bold text-rose-500">
                [ {fillIn31}, {-l32}, 1 ]
              </div>
            </div>
          </div>
          <p className="mb-0 text-[11px] text-muted-foreground">
            即使 ℓ₃₁ = 0（原本无需消元），只要 ℓ₂₁, ℓ₃₂ ≠ 0，L⁻¹ 左下角就会变成 ℓ₃₂·ℓ₂₁ = {l32 * l21}！
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L05: Subspace Closure Tester
// ============================================================================
function L05SubspaceClosureTester() {
  type SubsetId = 'line0' | 'lineShift' | 'quadrant1' | 'axesUnion';
  const [subset, setSubset] = React.useState<SubsetId>('line0');
  const [vx, setVx] = React.useState(1);
  const [wx, setWx] = React.useState(-2);
  const [scalar, setScalar] = React.useState(-1);

  const subsets: Record<
    SubsetId,
    {
      label: string;
      desc: string;
      contains: (x: number, y: number) => boolean;
      makeVec: (t: number, alt?: boolean) => [number, number];
      zeroOk: boolean;
      addOk: boolean;
      scaleOk: boolean;
    }
  > = {
    line0: {
      label: '过原点直线 y = x/2',
      desc: '满足向量空间全部三条封闭公理的 ℝ² 真子空间。',
      contains: (x, y) => Math.abs(y - 0.5 * x) < 1e-6,
      makeVec: (t) => [t, 0.5 * t],
      zeroOk: true,
      addOk: true,
      scaleOk: true,
    },
    lineShift: {
      label: '平移直线 y = 0.5x + 1',
      desc: '不包含零向量 (0,0)，且加法与数乘皆逃逸出该直线！',
      contains: (x, y) => Math.abs(y - (0.5 * x + 1)) < 1e-6,
      makeVec: (t) => [t, 0.5 * t + 1],
      zeroOk: false,
      addOk: false,
      scaleOk: false,
    },
    quadrant1: {
      label: '第一象限 {x≥0, y≥0}',
      desc: '包含零向量且对加法封闭，但乘以负数 c < 0 会落入第三象限！',
      contains: (x, y) => x >= -1e-6 && y >= -1e-6,
      makeVec: (t, alt) => [Math.abs(t) + 0.5, alt ? 0.5 : 1.5],
      zeroOk: true,
      addOk: true,
      scaleOk: false,
    },
    axesUnion: {
      label: '双坐标轴并集 x=0 ∪ y=0',
      desc: '包含零向量且对数乘封闭，但 (1,0) + (0,1) = (1,1) 不在任何轴上！',
      contains: (x, y) => Math.abs(x) < 1e-6 || Math.abs(y) < 1e-6,
      makeVec: (t, alt) => (alt ? [0, Math.abs(t) + 0.8] : [Math.abs(t) + 0.8, 0]),
      zeroOk: true,
      addOk: false,
      scaleOk: true,
    },
  };

  const cur = subsets[subset];
  const v = cur.makeVec(vx, false);
  const w = cur.makeVec(wx, true);
  const sum: [number, number] = [v[0] + w[0], v[1] + w[1]];
  const scaled: [number, number] = [scalar * v[0], scalar * v[1]];

  const sumIn = cur.contains(sum[0], sum[1]);
  const scaledIn = cur.contains(scaled[0], scaled[1]);
  const toSvg = (mx: number, my: number): [number, number] => [120 + mx * 24, 110 - my * 24];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {(Object.keys(subsets) as SubsetId[]).map((k) => (
          <Button key={k} size="sm" variant={subset === k ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setSubset(k)}>
            {subsets[k].label}
          </Button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 240 220" className="w-full max-h-56 text-foreground">
            <rect x="16" y="16" width="208" height="188" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="16" y1="110" x2="224" y2="110" className="stroke-border" strokeDasharray="3 3" />
            <line x1="120" y1="16" x2="120" y2="204" className="stroke-border" strokeDasharray="3 3" />

            {subset === 'quadrant1' && <rect x="120" y="16" width="104" height="94" className="fill-blue-500/15" />}
            {subset === 'axesUnion' && (
              <>
                <line x1="16" y1="110" x2="224" y2="110" className="stroke-blue-500" strokeWidth="3" />
                <line x1="120" y1="16" x2="120" y2="204" className="stroke-blue-500" strokeWidth="3" />
              </>
            )}
            {subset === 'line0' && (
              <line x1={toSvg(-4, -2)[0]} y1={toSvg(-4, -2)[1]} x2={toSvg(4, 2)[0]} y2={toSvg(4, 2)[1]} className="stroke-blue-500" strokeWidth="3" />
            )}
            {subset === 'lineShift' && (
              <line x1={toSvg(-4, -1)[0]} y1={toSvg(-4, -1)[1]} x2={toSvg(4, 3)[0]} y2={toSvg(4, 3)[1]} className="stroke-blue-500" strokeWidth="3" />
            )}

            {/* Vectors v, w, v+w, c*v */}
            <circle cx={toSvg(v[0], v[1])[0]} cy={toSvg(v[0], v[1])[1]} r="4.5" className="fill-blue-600 dark:fill-blue-400" />
            <circle cx={toSvg(w[0], w[1])[0]} cy={toSvg(w[0], w[1])[1]} r="4.5" className="fill-emerald-600 dark:fill-emerald-400" />
            <circle cx={toSvg(sum[0], sum[1])[0]} cy={toSvg(sum[0], sum[1])[1]} r="5.5" className={sumIn ? 'fill-emerald-500' : 'fill-rose-500'} />
            <circle cx={toSvg(scaled[0], scaled[1])[0]} cy={toSvg(scaled[0], scaled[1])[1]} r="5" className={scaledIn ? 'fill-amber-500' : 'fill-rose-600'} />
            <text x="22" y="30" className="fill-current font-mono text-[10px]">
              v=({fmt(v[0])},{fmt(v[1])}), w=({fmt(w[0])},{fmt(w[1])})
            </text>
            <text x="22" y="42" className={`font-mono text-[10px] ${sumIn ? 'fill-emerald-600 dark:fill-emerald-400' : 'fill-rose-500'}`}>
              v+w=({fmt(sum[0])},{fmt(sum[1])}) {sumIn ? '∈ S' : '∉ S'}
            </text>
            <text x="22" y="54" className={`font-mono text-[10px] ${scaledIn ? 'fill-amber-600 dark:fill-amber-400' : 'fill-rose-500'}`}>
              c·v=({fmt(scaled[0])},{fmt(scaled[1])}) {scaledIn ? '∈ S' : '∉ S'}
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-between space-y-2.5 rounded-lg border bg-background/70 p-3">
          <div className="space-y-1.5">
            <div className="text-xs font-semibold">子空间三公理诊断</div>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant={cur.zeroOk ? 'emerald' : 'destructive'} className="font-mono text-[10px]">
                {cur.zeroOk ? '✓' : '✗'} 零向量 0 ∈ S
              </Badge>
              <Badge variant={cur.addOk ? 'emerald' : 'destructive'} className="font-mono text-[10px]">
                {cur.addOk ? '✓' : '✗'} 加法封闭 v+w ∈ S
              </Badge>
              <Badge variant={cur.scaleOk ? 'emerald' : 'destructive'} className="font-mono text-[10px]">
                {cur.scaleOk ? '✓' : '✗'} 数乘封闭 c·v ∈ S
              </Badge>
            </div>
            <p className="pt-1 text-xs text-muted-foreground">{cur.desc}</p>
          </div>
          <div className="space-y-2 border-t pt-2">
            <ControlSlider label="参数 v" value={vx} min={-2} max={2} step={0.5} onChange={setVx} />
            <ControlSlider label="参数 w" value={wx} min={-2} max={2} step={0.5} onChange={setWx} />
            <ControlSlider label="标量系数 c" value={scalar} min={-2} max={2} step={0.5} onChange={setScalar} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L06: Column Space C(A) & Null Space N(A) Dual Spaces
// ============================================================================
function L06ColNullDualSpaces() {
  const [angleDeg, setAngleDeg] = React.useState(60);
  const [scale2, setScale2] = React.useState(1.2);
  const [bx, setBx] = React.useState(1.5);
  const [by, setBy] = React.useState(1.0);

  const a1: [number, number] = [2, 1];
  const rad = (angleDeg * Math.PI) / 180;
  const a2: [number, number] = [scale2 * Math.cos(rad) * 2, scale2 * Math.sin(rad) * 2];

  const det = a1[0] * a2[1] - a1[1] * a2[0];
  const isDependent = Math.abs(det) < 0.15;
  const rank = isDependent ? 1 : 2;
  const nullDim = 2 - rank;

  // Check b in C(A)
  const crossB = a1[0] * by - a1[1] * bx;
  const bInCol = !isDependent || Math.abs(crossB) < 0.25;
  const toSvg = (mx: number, my: number): [number, number] => [100 + mx * 22, 100 - my * 22];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setAngleDeg(27); setScale2(1.1); }}>
          对齐共线 (秩 1 退化)
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setAngleDeg(75); setScale2(1.2); }}>
          独立张成 (满秩 2)
        </Button>
        <Badge variant={rank === 2 ? 'emerald' : 'amber'} className="ml-auto font-mono text-[10px]">
          dim C(A) = {rank}, dim N(A) = {nullDim} (和 = 2)
        </Badge>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <div className="mb-1 flex justify-between text-[11px] font-medium">
            <span>列空间 C(A) ⊆ ℝ²</span>
            <Badge variant={bInCol ? 'emerald' : 'destructive'} className="text-[10px]">
              b {bInCol ? '∈ C(A) 有解' : '∉ C(A) 无解'}
            </Badge>
          </div>
          <svg viewBox="0 0 200 200" className="w-full max-h-48 text-foreground">
            <rect
              x="12"
              y="12"
              width="176"
              height="176"
              rx="4"
              className={rank === 2 ? 'fill-blue-500/15 stroke-border' : 'fill-muted/20 stroke-border'}
            />
            {isDependent && (
              <line
                x1={toSvg(-4, -2)[0]}
                y1={toSvg(-4, -2)[1]}
                x2={toSvg(4, 2)[0]}
                y2={toSvg(4, 2)[1]}
                className="stroke-blue-500/50"
                strokeWidth="5"
              />
            )}
            <line x1={toSvg(0, 0)[0]} y1={toSvg(0, 0)[1]} x2={toSvg(a1[0], a1[1])[0]} y2={toSvg(a1[0], a1[1])[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" />
            <line x1={toSvg(0, 0)[0]} y1={toSvg(0, 0)[1]} x2={toSvg(a2[0], a2[1])[0]} y2={toSvg(a2[0], a2[1])[1]} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" />
            <circle cx={toSvg(bx, by)[0]} cy={toSvg(bx, by)[1]} r="4.5" className="fill-rose-500" />
            <text x="18" y="26" className="fill-current font-mono text-[10px]">
              a₁=[2,1]ᵀ, a₂=[{fmt(a2[0], 1)},{fmt(a2[1], 1)}]ᵀ
            </text>
          </svg>
        </div>

        <div className="rounded-lg border bg-background/70 p-2.5">
          <div className="mb-1 flex justify-between text-[11px] font-medium">
            <span>零空间 N(A) ⊆ ℝ² (Ax = 0)</span>
            <span className="font-mono text-muted-foreground">{rank === 2 ? '{0} 原点' : '过原点直线'}</span>
          </div>
          <svg viewBox="0 0 200 200" className="w-full max-h-48 text-foreground">
            <rect x="12" y="12" width="176" height="176" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="12" y1="100" x2="188" y2="100" className="stroke-border" strokeDasharray="3 3" />
            <line x1="100" y1="12" x2="100" y2="188" className="stroke-border" strokeDasharray="3 3" />
            {isDependent ? (
              <line
                x1={toSvg(-2.5, 2.5 * (a1[0] / a2[0]))[0]}
                y1={toSvg(-2.5, 2.5 * (a1[0] / a2[0]))[1]}
                x2={toSvg(2.5, -2.5 * (a1[0] / a2[0]))[0]}
                y2={toSvg(2.5, -2.5 * (a1[0] / a2[0]))[1]}
                className="stroke-amber-500"
                strokeWidth="3"
              />
            ) : (
              <circle cx="100" cy="100" r="6" className="fill-amber-500" />
            )}
            <text x="18" y="26" className="fill-amber-600 dark:fill-amber-400 font-mono text-[10px]">
              {isDependent ? `x₂ = −${fmt(a1[0] / a2[0])} x₁` : '唯一解 x = (0, 0)ᵀ'}
            </text>
          </svg>
        </div>
      </div>

      <div className="grid gap-3 rounded-lg border bg-background/60 p-3 sm:grid-cols-3">
        <ControlSlider label="第二列角度 θ₂" value={angleDeg} min={10} max={160} step={1} onChange={setAngleDeg} unit="°" />
        <ControlSlider label="目标向量 b₁" value={bx} min={-3} max={3} step={0.5} onChange={setBx} />
        <ControlSlider label="目标向量 b₂" value={by} min={-3} max={3} step={0.5} onChange={setBy} />
      </div>
    </div>
  );
}

// ============================================================================
// L07: RREF & Special Solutions Explorer
// ============================================================================
function L07RrefSpecialSolutions() {
  const [preset, setPreset] = React.useState<'r2' | 'r3' | 'r1'>('r2');

  const configs = {
    r2: {
      name: '典型 3×4 秩 2 (主元列 1,3)',
      pivots: [0, 2],
      free: [1, 3],
      A: [
        [1, 2, 2, 2],
        [2, 4, 6, 8],
        [3, 6, 8, 10],
      ],
      R: [
        [1, 2, 0, -2],
        [0, 0, 1, 2],
        [0, 0, 0, 0],
      ],
      specials: [
        [-2, 1, 0, 0],
        [2, 0, -2, 1],
      ],
    },
    r3: {
      name: '满行秩 3×4 秩 3 (自由列 4)',
      pivots: [0, 1, 2],
      free: [3],
      A: [
        [1, 0, 2, 3],
        [2, 1, 4, 7],
        [0, 2, 1, 4],
      ],
      R: [
        [1, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
      ],
      specials: [[-1, -1, -1, 1]],
    },
    r1: {
      name: '秩 1 退化 3×4 (自由列 2,3,4)',
      pivots: [0],
      free: [1, 2, 3],
      A: [
        [1, 3, -1, 2],
        [2, 6, -2, 4],
        [-1, -3, 1, -2],
      ],
      R: [
        [1, 3, -1, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      specials: [
        [-3, 1, 0, 0],
        [1, 0, 1, 0],
        [-2, 0, 0, 1],
      ],
    },
  };

  const cur = configs[preset];
  const [cWeights, setCWeights] = React.useState<[number, number]>([1, -1]);

  // Linear combination of special solutions in N(A)
  const xN = [0, 1, 2, 3].map((idx) =>
    cur.specials.reduce((acc, s, si) => acc + (si === 0 ? cWeights[0] : cWeights[1]) * s[idx], 0)
  );
  const residualNorm = Math.sqrt(
    cur.A.reduce((sumSq, row) => {
      const dot = row.reduce((d, val, j) => d + val * xN[j], 0);
      return sumSq + dot * dot;
    }, 0)
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {(['r2', 'r3', 'r1'] as const).map((k) => (
          <Button key={k} size="sm" variant={preset === k ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setPreset(k)}>
            {configs[k].name}
          </Button>
        ))}
        <Badge variant="emerald" className="ml-auto font-mono text-[10px]">
          r={cur.pivots.length}, n−r={cur.free.length} 个特解 · ‖Axₙ‖={fmt(residualNorm)}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-3">
          <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
            <span>简化行阶梯形 R = rref(A)</span>
            <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400">主元列: {cur.pivots.map((i) => `c${i + 1}`).join(', ')}</span>
          </div>
          <table className="mx-auto border-collapse font-mono text-xs">
            <tbody>
              {cur.R.map((row, r) => (
                <tr key={r}>
                  {row.map((v, c) => {
                    const isPiv = cur.pivots[r] === c && v === 1;
                    const isFreeCol = cur.free.includes(c);
                    return (
                      <td
                        key={c}
                        className={`min-w-[2.6rem] border border-border px-2.5 py-1 text-center ${
                          isPiv
                            ? 'bg-amber-500/20 font-bold text-amber-700 dark:text-amber-300'
                            : isFreeCol
                              ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
                              : ''
                        }`}
                      >
                        {v}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border bg-background/70 p-3 space-y-2">
          <div className="text-xs font-semibold">零空间基 (Special Solutions) 线性组合验证</div>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
            {cur.specials.map((s, idx) => (
              <span key={idx} className="rounded border bg-muted/40 px-2 py-0.5">
                s{idx + 1}=[{s.join(',')}]ᵀ
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <ControlSlider label="组合系数 c₁" value={cWeights[0]} min={-2} max={2} step={0.5} onChange={(v) => setCWeights([v, cWeights[1]])} />
            {cur.specials.length > 1 && (
              <ControlSlider label="组合系数 c₂" value={cWeights[1]} min={-2} max={2} step={0.5} onChange={(v) => setCWeights([cWeights[0], v])} />
            )}
          </div>
          <div className="rounded bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-700 dark:text-emerald-300">
            xₙ = [{xN.map((v) => fmt(v)).join(', ')}]ᵀ ⇒ A xₙ = [0, 0, 0]ᵀ
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L08: Affine Solution x = x_p + x_n
// ============================================================================
function L08AffineSolutionShift() {
  const [rhs, setRhs] = React.useState(2);
  const [t, setT] = React.useState(1);

  // Equation: x1 + 2*x2 = rhs -> s = [-2, 1], minimum norm xp = [rhs/5, 2*rhs/5]
  const xp: [number, number] = [rhs / 5, (2 * rhs) / 5];
  const s: [number, number] = [-1.4, 0.7]; // normalized null vector direction [-2,1]*0.7
  const xn: [number, number] = [t * s[0], t * s[1]];
  const x: [number, number] = [xp[0] + xn[0], xp[1] + xn[1]];

  const toSvg = (mx: number, my: number): [number, number] => [130 + mx * 26, 110 - my * 26];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 260 220" className="w-full max-h-56 text-foreground">
            <rect x="14" y="14" width="232" height="192" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="14" y1="110" x2="246" y2="110" className="stroke-border" strokeDasharray="3 3" />
            <line x1="130" y1="14" x2="130" y2="206" className="stroke-border" strokeDasharray="3 3" />

            {/* Null space through origin: x1 + 2*x2 = 0 */}
            <line x1={toSvg(-4, 2)[0]} y1={toSvg(-4, 2)[1]} x2={toSvg(4, -2)[0]} y2={toSvg(4, -2)[1]} className="stroke-blue-500/60" strokeWidth="2" strokeDasharray="4 3" />

            {/* Affine line x1 + 2*x2 = rhs */}
            <line
              x1={toSvg(-4, (rhs + 4) / 2)[0]}
              y1={toSvg(-4, (rhs + 4) / 2)[1]}
              x2={toSvg(4, (rhs - 4) / 2)[0]}
              y2={toSvg(4, (rhs - 4) / 2)[1]}
              className="stroke-emerald-500"
              strokeWidth="2.5"
            />

            {/* Vector xp from 0 */}
            <line x1={toSvg(0, 0)[0]} y1={toSvg(0, 0)[1]} x2={toSvg(xp[0], xp[1])[0]} y2={toSvg(xp[0], xp[1])[1]} className="stroke-amber-500" strokeWidth="2.5" />
            {/* Shift xn from xp to x */}
            <line x1={toSvg(xp[0], xp[1])[0]} y1={toSvg(xp[0], xp[1])[1]} x2={toSvg(x[0], x[1])[0]} y2={toSvg(x[0], x[1])[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" />
            {/* Total x from 0 */}
            <line x1={toSvg(0, 0)[0]} y1={toSvg(0, 0)[1]} x2={toSvg(x[0], x[1])[0]} y2={toSvg(x[0], x[1])[1]} className="stroke-rose-500" strokeWidth="1.8" strokeDasharray="3 2" />

            <circle cx={toSvg(xp[0], xp[1])[0]} cy={toSvg(xp[0], xp[1])[1]} r="4" className="fill-amber-500" />
            <circle cx={toSvg(x[0], x[1])[0]} cy={toSvg(x[0], x[1])[1]} r="5" className="fill-rose-500" />

            <text x="20" y="28" className="fill-blue-600 dark:fill-blue-400 font-mono text-[10px]">
              零空间 N(A): x₁ + 2x₂ = 0
            </text>
            <text x="20" y="40" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[10px]">
              仿射解集: x₁ + 2x₂ = {fmt(rhs)}
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-3 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="右端项 b (决定仿射平移距离)" value={rhs} min={-3} max={4} step={0.5} onChange={setRhs} />
          <ControlSlider label="零空间滑动参数 t (xₙ = t·s)" value={t} min={-2} max={2} step={0.25} onChange={setT} />
          <div className="space-y-1 rounded border bg-muted/30 p-2.5 font-mono text-[11px]">
            <div>最短特解 x_p = [{fmt(xp[0])}, {fmt(xp[1])}]ᵀ</div>
            <div>零空间位移 x_n = [{fmt(xn[0])}, {fmt(xn[1])}]ᵀ</div>
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              通解 x = [{fmt(x[0])}, {fmt(x[1])}]ᵀ ⇒ x₁ + 2x₂ = {fmt(x[0] + 2 * x[1])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L09: Basis & Linear Independence Explorer
// ============================================================================
function L09BasisIndependenceExplorer() {
  const [theta1, setTheta1] = React.useState(15);
  const [theta2, setTheta2] = React.useState(75);
  const [addThird, setAddThird] = React.useState(false);

  const v1: [number, number] = [2 * Math.cos((theta1 * Math.PI) / 180), 2 * Math.sin((theta1 * Math.PI) / 180)];
  const v2: [number, number] = [2 * Math.cos((theta2 * Math.PI) / 180), 2 * Math.sin((theta2 * Math.PI) / 180)];
  const v3: [number, number] = [1.5, 1.5];
  const det = v1[0] * v2[1] - v1[1] * v2[0];
  const ind2 = Math.abs(det) > 0.25;
  const independent = ind2 && !addThird;
  const spansR2 = ind2;
  const isBasis = independent && spansR2;

  const target: [number, number] = [1.8, 1.6];
  const coords = ind2 ? [(target[0] * v2[1] - target[1] * v2[0]) / det, (v1[0] * target[1] - v1[1] * target[0]) / det] : null;
  const toSvg = (mx: number, my: number): [number, number] => [110 + mx * 26, 110 - my * 26];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant={!addThird ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setAddThird(false)}>
          2 个向量 (v₁, v₂)
        </Button>
        <Button size="sm" variant={addThird ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setAddThird(true)}>
          加入第 3 个向量 v₃ (必线性相关)
        </Button>
        <Badge variant={isBasis ? 'emerald' : 'amber'} className="ml-auto font-mono text-[10px]">
          {isBasis ? '✓ 构成 ℝ² 的一组基' : independent ? '线性无关但张成不足' : addThird ? '过完备 (线性相关)' : '共线退化'}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 220 220" className="w-full max-h-52 text-foreground">
            <rect x="14" y="14" width="192" height="192" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="14" y1="110" x2="206" y2="110" className="stroke-border" strokeDasharray="3 3" />
            <line x1="110" y1="14" x2="110" y2="206" className="stroke-border" strokeDasharray="3 3" />
            <line x1="110" y1="110" x2={toSvg(v1[0], v1[1])[0]} y2={toSvg(v1[0], v1[1])[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.8" />
            <line x1="110" y1="110" x2={toSvg(v2[0], v2[1])[0]} y2={toSvg(v2[0], v2[1])[1]} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.8" />
            {addThird && (
              <line x1="110" y1="110" x2={toSvg(v3[0], v3[1])[0]} y2={toSvg(v3[0], v3[1])[1]} className="stroke-purple-500" strokeWidth="2.5" strokeDasharray="4 2" />
            )}
            <circle cx={toSvg(target[0], target[1])[0]} cy={toSvg(target[0], target[1])[1]} r="4.5" className="fill-amber-500" />
            <text x="20" y="28" className="fill-current font-mono text-[10px]">
              det([v₁ v₂]) = {fmt(det)}
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-3 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="向量 v₁ 角度" value={theta1} min={0} max={180} step={5} onChange={setTheta1} unit="°" />
          <ControlSlider label="向量 v₂ 角度" value={theta2} min={0} max={180} step={5} onChange={setTheta2} unit="°" />
          <div className="flex flex-wrap gap-1.5">
            <Badge variant={independent ? 'emerald' : 'destructive'} className="text-[10px]">
              {independent ? '✓ 线性无关' : '✗ 线性相关'}
            </Badge>
            <Badge variant={spansR2 ? 'emerald' : 'destructive'} className="text-[10px]">
              {spansR2 ? '✓ 张成 ℝ²' : '✗ 无法张成 ℝ²'}
            </Badge>
          </div>
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px]">
            {coords && !addThird
              ? `唯一坐标分解: b = ${fmt(coords[0])} v₁ + ${fmt(coords[1])} v₂`
              : addThird
                ? '由于 3 个 ℝ² 向量必线性相关，b 的分解不再唯一！'
                : 'v₁, v₂ 共线，无法表示垂直方向的向量 b。'}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L10: Four Fundamental Subspaces Cross & x = x_r + x_n
// ============================================================================
function L10FourSubspacesCross() {
  const [m, setM] = React.useState(3);
  const [n, setN] = React.useState(4);
  const [r, setR] = React.useState(2);
  const safeR = Math.min(r, m, n);
  const [xrNorm, setXrNorm] = React.useState(1.5);
  const [xnNorm, setXnNorm] = React.useState(1.2);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-3 rounded-lg border bg-background/60 p-3">
        <ControlSlider label="行数 m (输出维度 ℝᵐ)" value={m} min={1} max={5} step={1} onChange={(v) => setM(v)} />
        <ControlSlider label="列数 n (输入维度 ℝⁿ)" value={n} min={1} max={5} step={1} onChange={(v) => setN(v)} />
        <ControlSlider label="秩 r = rank(A)" value={safeR} min={0} max={Math.min(m, n)} step={1} onChange={(v) => setR(v)} />
      </div>

      <div className="rounded-lg border bg-background/75 p-3">
        <svg viewBox="0 0 440 190" className="w-full max-h-52 text-foreground">
          {/* Row Space C(A^T) */}
          <rect x="20" y="20" width="135" height="68" rx="8" className="fill-blue-500/15 stroke-blue-500" strokeWidth="1.5" />
          <text x="87" y="46" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-semibold text-xs">
            行空间 C(Aᵀ)
          </text>
          <text x="87" y="66" textAnchor="middle" className="fill-current font-mono text-[11px]">
            dim = r = {safeR}
          </text>

          {/* Null Space N(A) */}
          <rect x="20" y="102" width="135" height="68" rx="8" className="fill-amber-500/15 stroke-amber-500" strokeWidth="1.5" />
          <text x="87" y="128" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 font-semibold text-xs">
            零空间 N(A)
          </text>
          <text x="87" y="148" textAnchor="middle" className="fill-current font-mono text-[11px]">
            dim = n−r = {n - safeR}
          </text>
          <text x="87" y="97" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
            ⊥ 正交补 (ℝⁿ, 维数 {n})
          </text>

          {/* Column Space C(A) */}
          <rect x="285" y="20" width="135" height="68" rx="8" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="1.5" />
          <text x="352" y="46" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-semibold text-xs">
            列空间 C(A)
          </text>
          <text x="352" y="66" textAnchor="middle" className="fill-current font-mono text-[11px]">
            dim = r = {safeR}
          </text>

          {/* Left Null Space N(A^T) */}
          <rect x="285" y="102" width="135" height="68" rx="8" className="fill-purple-500/15 stroke-purple-500" strokeWidth="1.5" />
          <text x="352" y="128" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 font-semibold text-xs">
            左零空间 N(Aᵀ)
          </text>
          <text x="352" y="148" textAnchor="middle" className="fill-current font-mono text-[11px]">
            dim = m−r = {m - safeR}
          </text>
          <text x="352" y="97" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
            ⊥ 正交补 (ℝᵐ, 维数 {m})
          </text>

          {/* Mapping Arrows */}
          <line x1="160" y1="54" x2="280" y2="54" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.2" />
          <text x="220" y="44" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px]">
            xᵣ ↦ Axᵣ = b (可逆双射)
          </text>
          <line x1="160" y1="136" x2="275" y2="95" className="stroke-amber-500" strokeWidth="1.8" strokeDasharray="4 3" />
          <text x="220" y="132" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-mono text-[10px]">
            xₙ ↦ Axₙ = 0
          </text>
        </svg>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 rounded-lg border bg-background/60 p-3">
        <ControlSlider label="行空间分量 ‖xᵣ‖" value={xrNorm} min={0} max={3} step={0.5} onChange={setXrNorm} />
        <ControlSlider label="零空间分量 ‖xₙ‖" value={xnNorm} min={0} max={3} step={0.5} onChange={setXnNorm} />
        <div className="sm:col-span-2 flex flex-wrap justify-between font-mono text-[11px] text-muted-foreground">
          <span>勾股总长度 ‖x‖ = √(‖xᵣ‖² + ‖xₙ‖²) = {fmt(Math.hypot(xrNorm, xnNorm))}</span>
          <span>右逆存在: {safeR === m ? '✓ (满行秩)' : '✗'} · 左逆存在: {safeR === n ? '✓ (满列秩)' : '✗'}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L11: Matrix Space & Rank-1 Decomposition Explorer
// ============================================================================
function L11Rank1Builder() {
  const [a, setA] = React.useState(3);
  const [b, setB] = React.useState(4);
  const [c, setC] = React.useState(0);
  const [d, setD] = React.useState(2);

  // Split M = Sym + Skew
  const symOff = (b + c) / 2;
  const skewOff = (b - c) / 2;
  const det = a * d - b * c;
  const rank = a === 0 && b === 0 && c === 0 && d === 0 ? 0 : Math.abs(det) < 1e-6 ? 1 : 2;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2 rounded-lg border bg-background/70 p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>2×2 矩阵空间 ℝ²ˣ² (维数 = 4)</span>
            <Badge variant={rank === 1 ? 'emerald' : 'blue'} className="font-mono text-[10px]">
              rank(M) = {rank} · det = {fmt(det)}
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <ControlSlider label="m₁₁" value={a} min={-4} max={4} step={1} onChange={setA} />
            <ControlSlider label="m₁₂" value={b} min={-4} max={4} step={1} onChange={setB} />
            <ControlSlider label="m₂₁" value={c} min={-4} max={4} step={1} onChange={setC} />
            <ControlSlider label="m₂₂" value={d} min={-4} max={4} step={1} onChange={setD} />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-2 rounded-lg border bg-background/70 p-3 font-mono text-xs">
          <div className="text-[11px] font-sans font-semibold">直和分解: M = S (对称, dim=3) + K (反对称, dim=1)</div>
          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="rounded border p-2">
              <div className="text-muted-foreground mb-1">原矩阵 M</div>
              <div>[{a}, {b}]</div>
              <div>[{c}, {d}]</div>
            </div>
            <div className="rounded border bg-blue-500/10 p-2">
              <div className="text-blue-600 dark:text-blue-400 mb-1">对称 S</div>
              <div>[{a}, {fmt(symOff)}]</div>
              <div>[{fmt(symOff)}, {d}]</div>
            </div>
            <div className="rounded border bg-amber-500/10 p-2">
              <div className="text-amber-600 dark:text-amber-400 mb-1">反对称 K</div>
              <div>[0, {fmt(skewOff)}]</div>
              <div>[{fmt(-skewOff)}, 0]</div>
            </div>
          </div>
          <p className="mb-0 font-sans text-[11px] text-muted-foreground">
            {rank === 1 ? '此时 ad − bc = 0，M 为秩-1 矩阵（注：秩-1 矩阵集合对加法不封闭，不是子空间！）。' : '试着调节使 ad = bc（如 2×2=4, 1×4=4）即可构造秩-1 矩阵。'}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L12: Graph Incidence Matrix & Kirchhoff Explorer
// ============================================================================
function L12GraphKirchhoffExplorer() {
  const [x1, setX1] = React.useState(0);
  const [x2, setX2] = React.useState(3);
  const [x3, setX3] = React.useState(5);
  const [x4, setX4] = React.useState(2);
  const [includeBridge, setIncludeBridge] = React.useState(true);

  // 4 nodes, 5 edges: e1(1->2), e2(2->3), e3(1->3), e4(1->4), e5(3->4)
  const edges = [
    { id: 'e1', from: 1, to: 2, diff: x2 - x1 },
    { id: 'e2', from: 2, to: 3, diff: x3 - x2 },
    { id: 'e3', from: 1, to: 3, diff: x3 - x1 },
    { id: 'e4', from: 1, to: 4, diff: x4 - x1 },
    ...(includeBridge ? [{ id: 'e5', from: 3, to: 4, diff: x4 - x3 }] : []),
  ];

  const loop1Sum = (x2 - x1) + (x3 - x2) - (x3 - x1);
  const nodesCount = 4;
  const edgesCount = edges.length;
  const rankA = 3; // connected graph of 4 nodes has rank = n - 1 = 3
  const independentLoops = edgesCount - rankA; // Euler: #loops = #edges - (#nodes - 1)

  const coords: Record<number, [number, number]> = {
    1: [55, 110],
    2: [145, 35],
    3: [215, 110],
    4: [145, 175],
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant={includeBridge ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setIncludeBridge(!includeBridge)}>
          {includeBridge ? '5 条边 (2 个独立回路)' : '4 条边 (1 个回路)'}
        </Button>
        <Badge variant="emerald" className="ml-auto font-mono text-[10px]">
          欧拉公式: {nodesCount} − {edgesCount} + {independentLoops} = 1 · KVL 环路和 = {loop1Sum}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 270 210" className="w-full max-h-52 text-foreground">
            <rect x="8" y="8" width="254" height="194" rx="4" className="fill-muted/20 stroke-border" />
            {edges.map((e) => {
              const [sx, sy] = coords[e.from];
              const [tx, ty] = coords[e.to];
              const mx = (sx + tx) / 2;
              const my = (sy + ty) / 2;
              return (
                <g key={e.id}>
                  <line
                    x1={sx}
                    y1={sy}
                    x2={tx}
                    y2={ty}
                    className={e.diff === 0 ? 'stroke-muted-foreground/50' : e.diff > 0 ? 'stroke-blue-500' : 'stroke-rose-500'}
                    strokeWidth={Math.min(5, 1.5 + Math.abs(e.diff) * 0.4)}
                  />
                  <rect x={mx - 20} y={my - 9} width="40" height="16" rx="4" className="fill-background/90 stroke-border" />
                  <text x={mx} y={my + 3} textAnchor="middle" className="fill-current font-mono text-[9px]">
                    {e.id}:{e.diff >= 0 ? `+${e.diff}` : e.diff}
                  </text>
                </g>
              );
            })}
            {[1, 2, 3, 4].map((node) => {
              const [nx, ny] = coords[node];
              const pot = [0, x1, x2, x3, x4][node];
              return (
                <g key={node}>
                  <circle cx={nx} cy={ny} r="15" className="fill-background stroke-primary" strokeWidth="2" />
                  <text x={nx} y={ny - 1} textAnchor="middle" className="fill-current font-mono text-[9px] font-bold">
                    N{node}
                  </text>
                  <text x={nx} y={ny + 9} textAnchor="middle" className="fill-muted-foreground font-mono text-[8px]">
                    x={pot}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="space-y-2 rounded-lg border bg-background/70 p-3">
          <div className="text-xs font-semibold">节点电势 x (零空间 dim N(A) = 1 为常数偏移)</div>
          <div className="grid grid-cols-2 gap-2">
            <ControlSlider label="节点 1 电势 x₁" value={x1} min={0} max={6} step={1} onChange={setX1} />
            <ControlSlider label="节点 2 电势 x₂" value={x2} min={0} max={6} step={1} onChange={setX2} />
            <ControlSlider label="节点 3 电势 x₃" value={x3} min={0} max={6} step={1} onChange={setX3} />
            <ControlSlider label="节点 4 电势 x₄" value={x4} min={0} max={6} step={1} onChange={setX4} />
          </div>
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-0.5">
            <div>rank(A) = {rankA} = #nodes − 1 (树骨架)</div>
            <div>dim N(Aᵀ) = m − r = {edgesCount} − {rankA} = {independentLoops} (左零空间 = 电流回路)</div>
            <div className="text-emerald-600 dark:text-emerald-400">回路1电势差: e₁ + e₂ − e₃ = {loop1Sum} (恒为 0！)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L13: Module I Rank & A = CR Synthesis Sandbox
// ============================================================================
function L13Module1RankSandbox() {
  const [preset, setPreset] = React.useState<'full' | 'r2' | 'r1' | 'tall'>('r2');

  const specs = {
    full: {
      label: '3×3 满秩 r=3',
      m: 3,
      n: 3,
      r: 3,
      A: [
        [1, 0, 1],
        [0, 2, 1],
        [1, 1, 3],
      ],
      C: [
        [1, 0, 1],
        [0, 2, 1],
        [1, 1, 3],
      ],
      R: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      allB: true,
      uniqX: true,
    },
    r2: {
      label: '3×4 秩 r=2',
      m: 3,
      n: 4,
      r: 2,
      A: [
        [1, 2, 1, 3],
        [2, 4, 3, 7],
        [3, 6, 4, 10],
      ],
      C: [
        [1, 1],
        [2, 3],
        [3, 4],
      ],
      R: [
        [1, 2, 0, 2],
        [0, 0, 1, 1],
      ],
      allB: false,
      uniqX: false,
    },
    r1: {
      label: '3×3 秩 r=1',
      m: 3,
      n: 3,
      r: 1,
      A: [
        [2, 4, -2],
        [1, 2, -1],
        [-3, -6, 3],
      ],
      C: [[2], [1], [-3]],
      R: [[1, 2, -1]],
      allB: false,
      uniqX: false,
    },
    tall: {
      label: '3×2 瘦长满列秩 r=2',
      m: 3,
      n: 2,
      r: 2,
      A: [
        [1, 0],
        [2, 1],
        [0, 3],
      ],
      C: [
        [1, 0],
        [2, 1],
        [0, 3],
      ],
      R: [
        [1, 0],
        [0, 1],
      ],
      allB: false,
      uniqX: true,
    },
  };

  const s = specs[preset];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {(Object.keys(specs) as Array<keyof typeof specs>).map((k) => (
          <Button key={k} size="sm" variant={preset === k ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setPreset(k)}>
            {specs[k].label}
          </Button>
        ))}
        <Badge variant="purple" className="ml-auto font-mono text-[10px]">
          A = C({s.m}×{s.r}) · R({s.r}×{s.n})
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-3 font-mono text-xs">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <div className="mb-1 text-[11px] font-semibold text-foreground">原矩阵 A ({s.m}×{s.n})</div>
          {s.A.map((row, i) => (
            <div key={i} className="text-center">[{row.join(', ')}]</div>
          ))}
        </div>
        <div className="rounded-lg border bg-blue-500/10 p-2.5">
          <div className="mb-1 text-[11px] font-semibold text-blue-700 dark:text-blue-300">列基 C ({s.m}×{s.r})</div>
          {s.C.map((row, i) => (
            <div key={i} className="text-center">[{row.join(', ')}]</div>
          ))}
        </div>
        <div className="rounded-lg border bg-emerald-500/10 p-2.5">
          <div className="mb-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">行阶梯 R ({s.r}×{s.n})</div>
          {s.R.map((row, i) => (
            <div key={i} className="text-center">[{row.join(', ')}]</div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 rounded-lg border bg-background/60 p-2.5 text-[11px] font-mono">
        <Badge variant={s.allB ? 'emerald' : 'outline'}>Ax=b 对所有 b 有解: {s.allB ? '✓ (r=m)' : '✗ (r<m)'}</Badge>
        <Badge variant={s.uniqX ? 'emerald' : 'outline'}>Ax=0 仅零解: {s.uniqX ? '✓ (r=n)' : '✗ (r<n)'}</Badge>
        <span className="ml-auto text-muted-foreground">
          dim N(A) = {s.n - s.r}, dim N(Aᵀ) = {s.m - s.r}
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// Module I Interactive Dispatcher
// ============================================================================
export function renderModule1Interactive(id: string): React.ReactNode | null {
  switch (id) {
    case 'l01-row-vs-col-2d':
      return <L01RowVsColInteractive />;
    case 'l02-elimination-stepper':
      return <L02EliminationStepper />;
    case 'l03-rank1-outer-slicer':
      return <L03Rank1OuterSlicer />;
    case 'l04-lu-pyramid-cost':
      return <L04LuPyramidCost />;
    case 'l05-subspace-closure-tester':
      return <L05SubspaceClosureTester />;
    case 'l06-col-null-dual-spaces':
      return <L06ColNullDualSpaces />;
    case 'l07-rref-special-solutions':
      return <L07RrefSpecialSolutions />;
    case 'l08-affine-solution-shift':
      return <L08AffineSolutionShift />;
    case 'l09-basis-independence-explorer':
      return <L09BasisIndependenceExplorer />;
    case 'l10-four-subspaces-cross':
      return <L10FourSubspacesCross />;
    case 'l11-rank1-builder':
      return <L11Rank1Builder />;
    case 'l12-graph-kirchhoff-explorer':
      return <L12GraphKirchhoffExplorer />;
    case 'l13-module1-rank-sandbox':
      return <L13Module1RankSandbox />;
    default:
      return null;
  }
}
