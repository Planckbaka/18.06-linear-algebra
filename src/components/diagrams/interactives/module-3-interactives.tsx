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
// L18: Determinant Axioms Sandbox (Linearity, Shear Invariance, Row Swap)
// ============================================================================
function L18DeterminantAxiomsSandbox() {
  const [scaleT, setScaleT] = React.useState(1);
  const [shearK, setShearK] = React.useState(0);
  const [swapped, setSwapped] = React.useState(false);

  // Base rows r1=(2, 0.5), r2=(0.5, 1.8)
  const baseR1: [number, number] = [2 * scaleT, 0.5 * scaleT];
  const shearedR2: [number, number] = [0.5 + shearK * baseR1[0], 1.8 + shearK * baseR1[1]];
  const r1 = swapped ? shearedR2 : baseR1;
  const r2 = swapped ? baseR1 : shearedR2;

  const det = r1[0] * r2[1] - r1[1] * r2[0];
  const extent = Math.max(...[r1, r2, [r1[0] + r2[0], r1[1] + r2[1]]].flat().map(Math.abs));
  const scale = Math.min(24, 72 / extent);
  const toSvg = (mx: number, my: number): [number, number] => [120 + mx * scale, 100 - my * scale];

  const p0 = toSvg(0, 0);
  const p1 = toSvg(r1[0], r1[1]);
  const p2 = toSvg(r2[0], r2[1]);
  const p12 = toSvg(r1[0] + r2[0], r1[1] + r2[1]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant={swapped ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setSwapped(!swapped)}>
          公理 2 最后交换两行 (R1 ↔ R2) {swapped ? '已交换' : '未交换'}
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setScaleT(1); setShearK(0); setSwapped(false); }}>
          重置
        </Button>
        <Badge variant={det >= 0 ? 'blue' : 'destructive'} className="ml-auto font-mono text-[10px]">
          det(A) = {fmt(det)} ({det === 0 ? '退化，面积为 0' : det > 0 ? '正向' : '反向'})
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 240 200" className="w-full max-h-52 text-foreground">
            <rect x="12" y="12" width="216" height="176" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="12" y1="100" x2="228" y2="100" className="stroke-border" strokeDasharray="3 3" />
            <line x1="120" y1="12" x2="120" y2="188" className="stroke-border" strokeDasharray="3 3" />
            <polygon
              points={`${p0[0]},${p0[1]} ${p1[0]},${p1[1]} ${p12[0]},${p12[1]} ${p2[0]},${p2[1]}`}
              className={det >= 0 ? 'fill-blue-500/20 stroke-blue-500' : 'fill-rose-500/20 stroke-rose-500'}
              strokeWidth="2"
            />
            <line x1={p0[0]} y1={p0[1]} x2={p1[0]} y2={p1[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.8" />
            <line x1={p0[0]} y1={p0[1]} x2={p2[0]} y2={p2[1]} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.8" />
            <text x="18" y="26" className="fill-current font-mono text-[10px]">
              有向平行四边形面积 = {fmt(det)}
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="公理 3a: 第一行缩放因子 t" value={scaleT} min={-2} max={2} step={0.25} onChange={setScaleT} />
          <ControlSlider label="性质 5: 消元错切 R2 ← R2 + k·R1" value={shearK} min={-1.5} max={1.5} step={0.25} onChange={setShearK} />
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-0.5">
            <div>基准有向面积 = 3.35</div>
            <div>先缩放第一行使 det 乘以 {fmt(scaleT)}，再错切保持 det，最后若交换两行则使 det 反号。</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L19: Cofactor Expansion & Tridiagonal Recurrence Sandbox
// ============================================================================
function L19CofactorExpansionSandbox() {
  const [expandIndex, setExpandIndex] = React.useState<0 | 1 | 2>(0);
  const [nTri, setNTri] = React.useState(4);
  const [expandAxis, setExpandAxis] = React.useState<'row' | 'column'>('row');
  const byRow = expandAxis === 'row';
  const axisLabel = byRow ? '行' : '列';

  const A = [
    [2, -1, 0],
    [-1, 2, -1],
    [0, -1, 2],
  ];

  const minorDet = (rSkip: number, cSkip: number) => {
    const sub: number[] = [];
    for (let r = 0; r < 3; r++) {
      if (r === rSkip) continue;
      for (let c = 0; c < 3; c++) {
        if (c === cSkip) continue;
        sub.push(A[r][c]);
      }
    }
    return sub[0] * sub[3] - sub[1] * sub[2];
  };

  const terms = [0, 1, 2].map((index) => {
    const [r, c] = byRow ? [expandIndex, index] : [index, expandIndex];
    const a = A[r][c];
    const sign = (r + c) % 2 === 0 ? 1 : -1;
    const M = minorDet(r, c);
    const C = sign * M;
    return { r, c, a, sign, M, C, prod: a * C };
  });
  const totalDet = terms.reduce((s, t) => s + t.prod, 0);

  // Tridiagonal (-1, 2, -1) determinant sequence D_n = n + 1
  const triSeq = [1, 2];
  for (let i = 2; i <= nTri; i++) triSeq.push(2 * triSeq[i - 1] - triSeq[i - 2]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => setExpandAxis(byRow ? 'column' : 'row')}>
          切换为按{byRow ? '列' : '行'}展开
        </Button>
        {([0, 1, 2] as const).map((index) => (
          <Button key={index} size="sm" variant={expandIndex === index ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setExpandIndex(index)}>
            沿第 {index + 1} {axisLabel}代数余子式展开
          </Button>
        ))}
        <Badge variant="emerald" className="ml-auto font-mono text-[10px]">
          det(A) = {totalDet} · 三维体积 |det(A)| = {Math.abs(totalDet)}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-3 space-y-2">
          <div className="text-xs font-semibold">3×3 二阶差分三对角矩阵 (-1, 2, -1)</div>
          <table className="mx-auto border-collapse font-mono text-xs">
            <tbody>
              {A.map((row, r) => (
                <tr key={r}>
                  {row.map((val, c) => (
                    <td key={c} className={`min-w-[2.8rem] border border-border px-2.5 py-1 text-center ${(byRow ? r : c) === expandIndex ? 'bg-amber-500/15' : ''}`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="space-y-1 font-mono text-[11px]">
            {terms.map((t, index) => (
              <div key={index} className="flex justify-between rounded bg-muted/30 px-2 py-0.5">
                <span>
                  a{t.r + 1}{t.c + 1}={t.a}, 符号 {t.sign > 0 ? '+' : '−'}, 余子式 M={t.M}，代数余子式 C={t.C}
                </span>
                <span className="font-semibold">贡献 = {t.prod}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="三对角矩阵阶数 n" value={nTri} min={1} max={8} step={1} onChange={setNTri} />
          <div className="text-xs font-semibold">D₀ = 1，D₁ = 2，Dₙ = 2Dₙ₋₁ − Dₙ₋₂ (n ≥ 2)</div>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
            {triSeq.map((d, idx) => (
              <Badge key={idx} variant={idx === nTri ? 'blue' : 'outline'}>
                D{idx}={d}
              </Badge>
            ))}
          </div>
          <p className="mb-0 text-[11px] text-muted-foreground">
            闭式 Dₙ = n + 1。沿任一行或列展开均得 D₃ = {totalDet}。
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L20: Volume, Cramer's Rule & Adjugate Inverse A^-1 = C^T / det(A)
// ============================================================================
function L20VolumeAndCramerSandbox() {
  const [b1, setB1] = React.useState(3);
  const [b2, setB2] = React.useState(4);
  const [a22, setA22] = React.useState(2);
  const [replacementColumn, setReplacementColumn] = React.useState<1 | 2>(1);

  const detA = 2 * a22 - 1;
  const detB1 = a22 * b1 - b2;
  const detB2 = 2 * b2 - b1;
  const solution = detA === 0 ? null : [detB1 / detA, detB2 / detA];

  const toSvg = (mx: number, my: number): [number, number] => [60 + mx * 20, 161 - my * 20];
  const o = toSvg(0, 0);
  const a1Pt = toSvg(2, 1);
  const a2Pt = toSvg(1, a22);
  const a12Pt = toSvg(3, 1 + a22);
  const bPt = toSvg(b1, b2);
  const replaceFirst = replacementColumn === 1;
  const replacementSum = replaceFirst ? toSvg(b1 + 1, b2 + a22) : toSvg(b1 + 2, b2 + 1);
  const replacementPoints = replaceFirst ? [o, bPt, replacementSum, a2Pt] : [o, a1Pt, replacementSum, bPt];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 240 195" className="w-full max-h-52 text-foreground">
            <rect x="12" y="12" width="216" height="170" rx="4" className="fill-muted/20 stroke-border" />
            {/* Base parallelogram A = [a1, a2] */}
            <polygon
              points={`${o[0]},${o[1]} ${a1Pt[0]},${a1Pt[1]} ${a12Pt[0]},${a12Pt[1]} ${a2Pt[0]},${a2Pt[1]}`}
              className="fill-blue-500/20 stroke-blue-500"
              strokeWidth="1.8"
            />
            {/* Traverse the columns in order to preserve the signed area. */}
            <polygon
              points={replacementPoints.map((point) => point.join(',')).join(' ')}
              className="fill-amber-500/20 stroke-amber-500"
              strokeWidth="1.8"
              strokeDasharray="4 2"
            />
            <text x="20" y="28" className="fill-blue-600 dark:fill-blue-400 font-mono text-[10px]">
              蓝色有向面积 det(A) = {detA}
            </text>
            <text x="20" y="40" className="fill-amber-600 dark:fill-amber-400 font-mono text-[10px]">
              橙色有向面积 det({replaceFirst ? 'B₁' : 'B₂'}) = {fmt(replaceFirst ? detB1 : detB2)}
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <div className="flex flex-wrap gap-1.5">
            {([1, 2] as const).map((column) => (
              <Button key={column} size="sm" variant={replacementColumn === column ? 'default' : 'outline'}
                aria-pressed={replacementColumn === column} onClick={() => setReplacementColumn(column)}>
                替换第 {column} 列
              </Button>
            ))}
          </div>
          <ControlSlider label="右端向量 b₁" value={b1} min={0} max={4} step={0.5} onChange={setB1} />
          <ControlSlider label="右端向量 b₂" value={b2} min={0} max={4} step={0.5} onChange={setB2} />
          <ControlSlider label="第二列 a₂ = [1, a₂₂]ᵀ 的纵坐标" value={a22} min={0} max={2} step={0.25} onChange={setA22} />
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-1">
            <div>det(A) = {fmt(detA)}，det(B₁) = {fmt(detB1)}，det(B₂) = {fmt(detB2)}</div>
            {solution ? (
              <>
                <div>x₁ = det(B₁)/det(A) ≈ {fmt(solution[0])}</div>
                <div>x₂ = det(B₂)/det(A) ≈ {fmt(solution[1])}</div>
                <div>A⁻¹ = adj(A)/det(A)，adj(A) = [{fmt(a22)}, −1; −1, 2]</div>
              </>
            ) : (
              <div>{detB2 === 0 ? 'det(A) = 0，系统有无穷多解：2x₁ + x₂ = ' + fmt(b1) : 'det(A) = 0，b 不在列空间中，系统无解。'}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L21: Eigenvector Directions Scanner (A v vs \lambda v)
// ============================================================================
function L21EigenDirectionsSandbox() {
  type MatPreset = 'sym' | 'proj' | 'rot' | 'shear' | 'scalar';
  const [preset, setPreset] = React.useState<MatPreset>('sym');
  const [deg, setDeg] = React.useState(45);

  const specs: Record<MatPreset, { name: string; A: [number, number, number, number]; eigInfo: string }> = {
    sym: { name: '对称矩阵 [2,1; 1,2]', A: [2, 1, 1, 2], eigInfo: '特征方向 45° (λ=3) 与 135° (λ=1)' },
    proj: { name: '投影矩阵 [0.5,0.5; 0.5,0.5]', A: [0.5, 0.5, 0.5, 0.5], eigInfo: '特征方向 45° (λ=1) 与 135° (λ=0)' },
    rot: { name: '90° 旋转 [0,-1; 1,0]', A: [0, -1, 1, 0], eigInfo: '无实特征方向 (λ = ±i 复数共轭)' },
    shear: { name: '错切亏损 [2,1; 0,2]', A: [2, 1, 0, 2], eigInfo: '仅有 0°/180° 方向 (λ=2，代数重数 2、几何重数 1)' },
    scalar: { name: '标量矩阵 2I', A: [2, 0, 0, 2], eigInfo: '每个非零向量都是特征向量 (λ=2，代数与几何重数均为 2)' },
  };

  const cur = specs[preset];
  const [a11, a12, a21, a22] = cur.A;
  const rad = (deg * Math.PI) / 180;
  const vx = Math.cos(rad);
  const vy = Math.sin(rad);
  const avx = a11 * vx + a12 * vy;
  const avy = a21 * vx + a22 * vy;

  const rayleigh = vx * avx + vy * avy;
  const residual = Math.hypot(avx - rayleigh * vx, avy - rayleigh * vy);
  const tolerance = 32 * Number.EPSILON * Math.hypot(...cur.A);
  const isEigen = residual <= tolerance;
  const mapsToZero = Math.hypot(avx, avy) <= tolerance;

  const toSvg = (mx: number, my: number): [number, number] => [115 + mx * 32, 110 - my * 32];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {(Object.keys(specs) as MatPreset[]).map((k) => (
          <Button key={k} size="sm" variant={preset === k ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setPreset(k)}>
            {specs[k].name}
          </Button>
        ))}
        <Badge variant={isEigen ? 'emerald' : 'outline'} className="ml-auto font-mono text-[10px]">
          {isEigen ? `✓ 对齐特征方向! λ ≈ ${fmt(rayleigh)}` : `残差 ‖Av − (vᵀAv)v‖₂ = ${fmt(residual, 4)}`}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 230 220" className="w-full max-h-52 text-foreground">
            <rect x="14" y="14" width="202" height="192" rx="4" className="fill-muted/20 stroke-border" />
            <circle cx="115" cy="110" r="32" className="fill-none stroke-border" strokeDasharray="3 3" />
            <line x1="115" y1="110" x2={toSvg(vx, vy)[0]} y2={toSvg(vx, vy)[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="3" />
            <line x1="115" y1="110" x2={toSvg(avx, avy)[0]} y2={toSvg(avx, avy)[1]} className={isEigen ? 'stroke-emerald-500' : 'stroke-rose-500'} strokeWidth="2.6" />
            <circle cx={toSvg(vx, vy)[0]} cy={toSvg(vx, vy)[1]} r="4" className="fill-blue-600 dark:fill-blue-400" />
            <circle cx={toSvg(avx, avy)[0]} cy={toSvg(avx, avy)[1]} r="4" className={isEigen ? 'fill-emerald-500' : 'fill-rose-500'} />
            <text x="20" y="28" className="fill-blue-600 dark:fill-blue-400 font-mono text-[10px]">
              蓝线: 单位输入向量 v({deg}°)
            </text>
            <text x="20" y="40" className={`${isEigen ? 'fill-emerald-600 dark:fill-emerald-400' : 'fill-rose-500'} font-mono text-[10px]`}>
              {mapsToZero ? 'Av = 0（λ = 0，v ≠ 0）' : isEigen ? 'Av = λv（在浮点精度内）' : 'Av 不在 v 张成的直线上'}
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="旋转探针向量 v 角度 θ" value={deg} min={0} max={360} step={5} onChange={setDeg} unit="°" />
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-1">
            <div>v = [{fmt(vx)}, {fmt(vy)}]ᵀ</div>
            <div>Av = [{fmt(avx)}, {fmt(avy)}]ᵀ</div>
            <div className="text-muted-foreground font-sans">{cur.eigInfo}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L22: Diagonalization A^k = S Lambda^k S^-1 & Powers
// ============================================================================
function L22DiagonalizationPowersSandbox() {
  const [lam1, setLam1] = React.useState(1.15);
  const [lam2, setLam2] = React.useState(-0.7);
  const [k, setK] = React.useState(6);

  const steps = Array.from({ length: 13 }, (_, idx) => idx);
  const p1 = Math.pow(lam1, k);
  const p2 = Math.pow(lam2, k);
  const radius = Math.max(Math.abs(lam1), Math.abs(lam2));
  const stable = radius < 1;
  const chartScale = 61 / Math.max(1, radius ** steps[steps.length - 1]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setLam1(0.85); setLam2(0.4); }}>
          稳态衰减 (|λᵢ| &lt; 1)
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setLam1(1.0); setLam2(-0.6); }}>
          马尔可夫边界 (λ₁=1)
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setLam1(1.62); setLam2(-0.62); }}>
          Fibonacci 特征值近似
        </Button>
        <Badge variant={stable ? 'emerald' : 'amber'} className="ml-auto font-mono text-[10px]">
          λ₁^{k} = {fmt(p1, 2)}, λ₂^{k} = {fmt(p2, 2)}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-3">
          <div className="mb-1.5 text-[11px] font-semibold">可对角化时 Aᵏ = SΛᵏS⁻¹（k = 0 时 A⁰ = I）</div>
          <svg viewBox="0 0 260 150" className="w-full max-h-40 text-foreground">
            <line x1="20" y1="75" x2="245" y2="75" className="stroke-border" />
            {steps.map((idx) => {
              const v1 = lam1 ** idx;
              const v2 = lam2 ** idx;
              const xPos = 26 + idx * 17;
              return (
                <g key={idx}>
                  <rect
                    x={xPos}
                    y={v1 >= 0 ? 75 - v1 * chartScale : 75}
                    width="6"
                    height={Math.abs(v1) * chartScale}
                    className={idx === k ? 'fill-blue-600' : 'fill-blue-500/45'}
                  />
                  <rect
                    x={xPos + 7}
                    y={v2 >= 0 ? 75 - v2 * chartScale : 75}
                    width="6"
                    height={Math.abs(v2) * chartScale}
                    className={idx === k ? 'fill-amber-500' : 'fill-amber-500/45'}
                  />
                </g>
              );
            })}
          </svg>
          <div className="font-mono text-[10px] text-muted-foreground">横轴 k = 0…12，纵轴为带符号的 λᵢᵏ（两组共用比例）</div>
        </div>

        <div className="flex flex-col justify-center space-y-2 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="特征值 λ₁" value={lam1} min={-1.3} max={1.65} step={0.01} onChange={setLam1} />
          <ControlSlider label="特征值 λ₂" value={lam2} min={-1.2} max={1.2} step={0.01} onChange={setLam2} />
          <ControlSlider label="迭代步数 k" value={k} min={0} max={12} step={1} onChange={setK} />
          <div className="font-mono text-[11px] text-muted-foreground">
            ρ(A) = {fmt(radius)} · {stable ? 'Aᵏ → 0' : radius > 1 ? '存在增长方向' : '在此可对角化设定下，+1 模态保持，−1 模态交替，|λ| < 1 的模态衰减'}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L23: Differential Equations du/dt = A u Phase Plane
// ============================================================================
function L23OdePhasePlaneSandbox() {
  type Regime = 'sink' | 'saddle' | 'spiral' | 'center' | 'jordan';
  const [regime, setRegime] = React.useState<Regime>('spiral');
  const [t, setT] = React.useState(1.2);

  const systems: Record<Regime, {
    title: string;
    A: [number, number, number, number];
    u0: [number, number];
  }> = {
    sink: { title: '稳定节点 Sink', A: [-0.9, 0, 0, -0.4], u0: [2.5, 2] },
    saddle: { title: '鞍点 Saddle', A: [0.55, 0, 0, -1.1], u0: [0.7, 2.6] },
    spiral: { title: '阻尼螺旋 Spiral', A: [-0.35, -2, 2, -0.35], u0: [2.4, 0] },
    center: { title: '中心 Center', A: [0, -1.6, 1.6, 0], u0: [2.1, 0] },
    jordan: { title: '重根 Jordan 块', A: [-0.5, 1, 0, -0.5], u0: [0, 2.4] },
  };

  const { A: [a, b, c, d], u0: [x0, y0] } = systems[regime];
  const mean = (a + d) / 2;
  const h = (a - d) / 2;
  const discriminant = h * h + b * c;
  const det = a * d - b * c;
  const root = Math.sqrt(Math.abs(discriminant));
  const eigenvalues = discriminant < 0
    ? `λ = ${fmt(mean)} ± ${fmt(root)}i`
    : discriminant === 0
      ? `λ = ${fmt(mean)} (代数重数 2)`
      : `λ = ${fmt(mean + root)}, ${fmt(mean - root)}`;

  // (A − mean I)^2 = discriminant I, so the even and odd powers sum separately.
  const trajPoint = (time: number): [number, number] => {
    const z = root * time;
    const even = discriminant > 0 ? Math.cosh(z) : Math.cos(z);
    const odd = root === 0 ? time : discriminant > 0 ? Math.sinh(z) / root : Math.sin(z) / root;
    const growth = Math.exp(mean * time);
    return [growth * (even * x0 + odd * (h * x0 + b * y0)), growth * (even * y0 + odd * (c * x0 - h * y0))];
  };

  const pathPts = Array.from({ length: 89 }, (_, i) => trajPoint(i * 0.05));
  const curPt = trajPoint(t);
  const scale = Math.min(28, 84 / Math.max(...pathPts.flat().map(Math.abs)));
  const toSvg = (mx: number, my: number): [number, number] => [110 + mx * scale, 105 - my * scale];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {(Object.keys(systems) as Regime[]).map((r) => (
          <Button key={r} size="sm" variant={regime === r ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setRegime(r)}>
            {systems[r].title}
          </Button>
        ))}
        <Badge variant={regime === 'saddle' ? 'destructive' : regime === 'center' ? 'amber' : 'emerald'} className="ml-auto font-mono text-[10px]">
          {eigenvalues}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 220 210" className="w-full max-h-52 text-foreground">
            <rect x="12" y="12" width="196" height="186" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="12" y1="105" x2="208" y2="105" className="stroke-border" strokeDasharray="3 3" />
            <line x1="110" y1="12" x2="110" y2="198" className="stroke-border" strokeDasharray="3 3" />
            <polyline
              fill="none"
              className="stroke-blue-500/70"
              strokeWidth="2.2"
              points={pathPts.map(([x, y]) => toSvg(x, y).join(',')).join(' ')}
            />
            <circle cx={toSvg(curPt[0], curPt[1])[0]} cy={toSvg(curPt[0], curPt[1])[1]} r="5.5" className="fill-rose-500" />
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="演化时间 t" value={t} min={0} max={4.4} step={0.1} onChange={setT} unit=" s" />
          <div className="rounded border bg-muted/30 p-2.5 font-mono text-[11px] space-y-1">
            <div>A = [{a}, {b}; {c}, {d}]，u(0) = [{x0}, {y0}]ᵀ</div>
            <div>tr(A) = λ₁+λ₂ = {fmt(2 * mean, 3)}</div>
            <div>det(A) = λ₁·λ₂ = {fmt(det, 4)}</div>
            <div>状态 u(t) = exp(tA)u(0) ≈ [{fmt(curPt[0])}, {fmt(curPt[1])}]ᵀ</div>
            <div className="text-muted-foreground font-sans">
              零平衡点渐近稳定当且仅当所有特征值满足 Re(λᵢ) &lt; 0。
              {regime === 'jordan' && ' 此处 exp(tA) = exp(−t/2)[I + t(A + I/2)]。'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L24: Markov Matrix & Steady State Sandbox
// ============================================================================
function L24MarkovFourierSandbox() {
  const [stayA, setStayA] = React.useState(0.9);
  const [stayB, setStayB] = React.useState(0.8);
  const [k, setK] = React.useState(4);

  // Column-stochastic P acts on column probability vectors.
  const p12 = 1 - stayB;
  const p21 = 1 - stayA;
  const leaving = p12 + p21;
  const lambda2 = stayA + stayB - 1;
  const piCa = leaving === 0 ? null : p12 / leaving;
  const periodic = stayA === 0 && stayB === 0;

  // The two-state simplex is parametrized by a single coordinate, u_A.
  const trajectory = [0];
  for (let step = 0; step < k; step++) {
    const prev = trajectory[step];
    trajectory.push(stayA * prev + p12 * (1 - prev));
  }
  const ca = trajectory[k];
  const ma = 1 - ca;
  const toSvg = (step: number, probA: number) => [20 + 8 * step, 59 - 43 * probA].join(',');

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant="outline" className="h-7 text-[11px]" onClick={() => { setStayA(0.9); setStayB(0.8); }}>
          Strang 人口迁移 (0.9, 0.8)
        </Button>
        <Badge variant="emerald" className="ml-auto font-mono text-[10px]">
          λ₁ = 1.00, λ₂ = {fmt(lambda2)}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="留守州 A 概率 p₁₁" value={stayA} min={0} max={1} step={0.05} onChange={setStayA} />
          <ControlSlider label="留守州 B 概率 p₂₂" value={stayB} min={0} max={1} step={0.05} onChange={setStayB} />
          <ControlSlider label="迭代年数 k (uₖ = Pᵏ u₀)" value={k} min={0} max={25} step={1} onChange={setK} />
          <div className="font-mono text-[11px]">P ≈ [{fmt(stayA)}, {fmt(p12)}; {fmt(p21)}, {fmt(stayB)}]，u₀ = [0, 1]ᵀ</div>
          <svg viewBox="0 0 240 78" className="max-h-24 w-full" role="img" aria-label="状态 A 概率随迭代步数的变化">
            <line x1="20" y1="16" x2="20" y2="59" className="stroke-border" />
            <line x1="20" y1="59" x2="220" y2="59" className="stroke-border" />
            {piCa !== null && <line x1="20" y1={59 - 43 * piCa} x2="220" y2={59 - 43 * piCa} className="stroke-amber-500" strokeDasharray="3 3" />}
            <polyline points={trajectory.map((value, step) => toSvg(step, value)).join(' ')} className="fill-none stroke-blue-500" strokeWidth="2" />
            {trajectory.map((value, step) => <circle key={step} cx={20 + 8 * step} cy={59 - 43 * value} r={step === k ? 3 : 1.5} className="fill-blue-500" />)}
            <text x="8" y="18" className="fill-current font-mono text-[9px]">1</text>
            <text x="8" y="60" className="fill-current font-mono text-[9px]">0</text>
            <text x="220" y="71" className="fill-current font-mono text-[9px]">k</text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3 font-mono text-xs">
          <div>
            <div className="flex justify-between text-[11px]">
              <span>第 {k} 年 状态 A 占比</span>
              <span>{fmt(ca * 100, 1)}%</span>
            </div>
            <div className="mt-1 h-3 w-full overflow-hidden rounded bg-muted">
              <div className="h-full bg-blue-500" style={{ width: `${ca * 100}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[11px]">
              <span>第 {k} 年 状态 B 占比</span>
              <span>{fmt(ma * 100, 1)}%</span>
            </div>
            <div className="mt-1 h-3 w-full overflow-hidden rounded bg-muted">
              <div className="h-full bg-amber-500" style={{ width: `${ma * 100}%` }} />
            </div>
          </div>
          <p className="mb-0 font-sans text-[11px] text-muted-foreground">
            {piCa === null ? 'P = I。单纯形上的每个概率向量都是稳态，uₖ = u₀。'
              : `Pπ = π，唯一稳态 π ≈ [${fmt(piCa, 3)}, ${fmt(1 - piCa, 3)}]ᵀ。${periodic
                ? '周期为 2：当前轨迹在两个端点间交替，无极限。'
                : 'uₖ − π = λ₂ᵏ(u₀ − π)，故 uₖ → π。'}`}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L25: Quiz 2 & Matrix Invariant Synthesis Sandbox
// ============================================================================
function L25Quiz2SynthesisSandbox() {
  type CaseKey = 'proj' | 'ortho' | 'jordan' | 'markov';
  const [key, setKey] = React.useState<CaseKey>('proj');

  const cases: Record<
    CaseKey,
    { label: string; M: string[]; eigs: string; trace: string; det: string; diag: boolean; orthoEigs: boolean; note: string }
  > = {
    proj: {
      label: '正交投影矩阵 P (对称)',
      M: ['[0.5, 0.5]', '[0.5, 0.5]'],
      eigs: 'λ = 1, 0',
      trace: '1',
      det: '0',
      diag: true,
      orthoEigs: true,
      note: 'P²=P ⇒ λ²=λ。实对称矩阵有实特征值，并可选取标准正交特征基。',
    },
    ortho: {
      label: '90° 正交旋转 Q',
      M: ['[0, −1]', '[1, 0]'],
      eigs: 'λ = +i, −i',
      trace: '0',
      det: '1',
      diag: true,
      orthoEigs: true,
      note: '在 ℂ 上有标准酉特征基，λ = ±i。在 ℝ 上无特征向量，旋转保持长度。',
    },
    jordan: {
      label: '亏损不可对角化 Jordan',
      M: ['[3, 1]', '[0, 3]'],
      eigs: 'λ = 3, 3',
      trace: '6',
      det: '9',
      diag: false,
      orthoEigs: false,
      note: '代数重数=2，但几何重数 (dim N(A−3I)) = 1，缺乏足够多线性无关特征向量！',
    },
    markov: {
      label: '对称马尔可夫稳态阵',
      M: ['[0.8, 0.2]', '[0.2, 0.8]'],
      eigs: 'λ = 1, 0.6',
      trace: '1.6',
      det: '0.6',
      diag: true,
      orthoEigs: true,
      note: '列随机且对称，所以均匀分布是稳态。本例的特征值 1 为单根，稳态唯一。',
    },
  };

  const c = cases[key];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {(Object.keys(cases) as CaseKey[]).map((k) => (
          <Button key={k} size="sm" variant={key === k ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setKey(k)}>
            {cases[k].label}
          </Button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2 rounded-lg border bg-background/70 p-3">
        <div className="font-mono text-xs flex flex-col justify-center items-center border-r border-border pr-2">
          <div className="text-muted-foreground mb-1">诊断矩阵 A</div>
          {c.M.map((r, i) => (
            <div key={i} className="text-sm font-semibold">{r}</div>
          ))}
          <div className="mt-2 text-[11px] text-blue-600 dark:text-blue-400">特征值: {c.eigs}</div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
            <Badge variant="outline">tr(A) = Σλᵢ = {c.trace}</Badge>
            <Badge variant="outline">det(A) = Πλᵢ = {c.det}</Badge>
            <Badge variant={c.diag ? 'emerald' : 'destructive'}>{c.diag ? key === 'ortho' ? '✓ 在 ℂ 上可对角化' : '✓ 在 ℝ 上可对角化' : '✗ 不可对角化'}</Badge>
            <Badge variant={c.orthoEigs ? 'blue' : 'outline'}>{c.orthoEigs ? key === 'ortho' ? '✓ 酉特征基' : '✓ 标准正交特征基' : '无完整特征基'}</Badge>
          </div>
          <p className="mb-0 text-xs text-muted-foreground">{c.note}</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Module III Interactive Dispatcher
// ============================================================================
export function renderModule3Interactive(id: string): React.ReactNode | null {
  switch (id) {
    case 'l18-determinant-axioms-sandbox':
      return <L18DeterminantAxiomsSandbox />;
    case 'l19-cofactor-expansion-sandbox':
      return <L19CofactorExpansionSandbox />;
    case 'l20-volume-and-cramer-sandbox':
      return <L20VolumeAndCramerSandbox />;
    case 'l21-eigen-directions-sandbox':
      return <L21EigenDirectionsSandbox />;
    case 'l22-diagonalization-powers-sandbox':
      return <L22DiagonalizationPowersSandbox />;
    case 'l23-ode-phase-plane-sandbox':
      return <L23OdePhasePlaneSandbox />;
    case 'l24-markov-fourier-sandbox':
      return <L24MarkovFourierSandbox />;
    case 'l25-quiz2-synthesis-sandbox':
      return <L25Quiz2SynthesisSandbox />;
    default:
      return null;
  }
}
