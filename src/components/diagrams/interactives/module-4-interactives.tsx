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
        disabled={min === max}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-1.5 w-full cursor-pointer accent-primary"
      />
    </label>
  );
}

function symmetricSpectrum(a: number, b: number, c: number) {
  const det = a * c - b * b;
  const mean = (a + c) / 2;
  const radius = Math.hypot((a - c) / 2, b);
  // Get the smaller-magnitude root from the product to avoid subtracting nearly equal values.
  const dominant = mean >= 0 ? mean + radius : mean - radius;
  const other = dominant === 0 ? 0 : det / dominant;
  const [hi, lo] = mean >= 0 ? [dominant, other] : [other, dominant];
  const theta = radius === 0 ? 0 : Math.atan2(b, (a - c) / 2) / 2;
  return { det, hi, lo, theta, repeated: radius === 0 };
}

function inertia(values: readonly number[]) {
  const positive = values.filter((v) => v > 0).length;
  const negative = values.filter((v) => v < 0).length;
  return { positive, negative, label: `正 ${positive} · 负 ${negative} · 零 ${values.length - positive - negative}` };
}

// ============================================================================
// L26: Spectral Theorem S = Q Lambda Q^T & Law of Inertia
// ============================================================================
function L26SpectralInertiaSandbox() {
  const [a, setA] = React.useState(3);
  const [b, setB] = React.useState(2);
  const [c, setC] = React.useState(3);

  const { det, hi, lo, theta, repeated } = symmetricSpectrum(a, b, c);
  const eig = inertia([hi, lo]);
  const kind = eig.positive === 2 ? '正定 SPD'
    : eig.negative === 2 ? '负定'
    : eig.positive && eig.negative ? '不定'
    : eig.positive ? '半正定（秩 1）'
    : eig.negative ? '半负定（秩 1）'
    : '零矩阵';

  // Symmetric elimination is a congruence; an off-diagonal pivot requires a block.
  const pivot = a !== 0 ? a : c;
  const block = pivot === 0 && b !== 0;
  const diagonal = pivot === 0 ? [0, 0] : [pivot, det / pivot];
  const pivots = inertia(block ? [Math.abs(b), -Math.abs(b)] : diagonal);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2 rounded-lg border bg-background/70 p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>实对称矩阵 S = [a, b; b, c]</span>
            <Badge variant={eig.positive === 2 ? 'emerald' : eig.positive && eig.negative ? 'amber' : 'blue'} className="font-mono text-[10px]">
              {kind}
            </Badge>
          </div>
          <ControlSlider label="对角元素 a = s₁₁" value={a} min={-4} max={5} step={0.5} onChange={setA} />
          <ControlSlider label="非对角对称项 b = s₁₂" value={b} min={-4} max={4} step={0.5} onChange={setB} />
          <ControlSlider label="对角元素 c = s₂₂" value={c} min={-4} max={5} step={0.5} onChange={setC} />
        </div>

        <div className="flex flex-col justify-center space-y-2 rounded-lg border bg-background/70 p-3 font-mono text-[11px]">
          <div className="font-sans text-xs font-semibold">Sylvester 惯性定理（对称消元为合同变换）</div>
          <div className="rounded border bg-muted/30 p-2 space-y-1">
            <div>λ₁ ≈ {fmt(hi)}，λ₂ ≈ {fmt(lo)}（{eig.label}）</div>
            <div>{block
              ? `2×2 主元块 D = [0, ${b}; ${b}, 0]，块特征值为 ±${Math.abs(b)}`
              : `${a === 0 && c !== 0 ? '同时交换行与列后，' : ''}D ≈ diag(${fmt(diagonal[0])}, ${fmt(diagonal[1])})`}（{pivots.label}）</div>
            <div>{repeated ? '重根：任意标准正交基均可，本例取 Q = I₂。'
              : `q₁ 与 x 轴夹角约 ${fmt((theta * 180) / Math.PI, 1)}°，q₂ 为与 q₁ 正交的单位向量。`}</div>
          </div>
          <p className="mb-0 font-sans text-[11px] text-muted-foreground">
            谱定理 S = QΛQᵀ 保证任意实对称矩阵都可正交对角化。令 x = Qy，二次型变为 λ₁y₁² + λ₂y₂²。
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L27: Complex Numbers, Fourier Matrix & Roots of Unity Sandbox
// ============================================================================
type Complex = readonly [real: number, imaginary: number];

function multiplyComplex([ar, ai]: Complex, [br, bi]: Complex): Complex {
  return [ar * br - ai * bi, ar * bi + ai * br];
}

function radix2Fft(signal: Complex[], roots: Complex[]): Complex[] {
  const n = signal.length;
  if (n === 1) return signal;
  const even = radix2Fft(signal.filter((_, i) => i % 2 === 0), roots);
  const odd = radix2Fft(signal.filter((_, i) => i % 2 === 1), roots);
  const combined: Complex[] = [];
  for (let k = 0; k < n / 2; k++) {
    const twiddle = roots[k * (roots.length / n)];
    const [r, i] = multiplyComplex(odd[k], twiddle);
    combined[k] = [even[k][0] + r, even[k][1] + i];
    combined[k + n / 2] = [even[k][0] - r, even[k][1] - i];
  }
  return combined;
}

function L27ComplexFftSandbox() {
  const sizes = [2, 4, 8, 16] as const;
  const [n, setN] = React.useState<(typeof sizes)[number]>(8);
  const [freqK, setFreqK] = React.useState(1);

  const roots = Array.from({ length: n }, (_, j): Complex => {
    const angle = (2 * Math.PI * j) / n;
    return [Math.cos(angle), Math.sin(angle)];
  });
  const indices = Array.from({ length: n }, (_, j) => (freqK * j) % n);
  const signal = indices.map((j) => roots[j]);
  const pts = signal.map(([x, y], j) => ({ j, cx: 110 + 72 * x, cy: 110 - 72 * y }));
  const firstVisits = pts.filter(({ j }) => indices.indexOf(indices[j]) === j);
  const copiesPerRoot = n / firstVisits.length;
  const direct = roots.map((_, k) =>
    signal.reduce<Complex>(([sumR, sumI], value, j) => {
      const [r, i] = multiplyComplex(value, roots[(k * j) % n]);
      return [sumR + r, sumI + i];
    }, [0, 0])
  );
  const fft = radix2Fft(signal, roots);
  const peakBin = (n - freqK) % n;
  const maxError = Math.max(...fft.map(([r, i], k) => Math.hypot(r - direct[k][0], i - direct[k][1])));
  const dftOps = n * n;
  const fftOps = (n * Math.log2(n)) / 2;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {sizes.map((size) => (
          <Button key={size} size="sm" variant={n === size ? 'default' : 'outline'} className="h-7 text-[11px]"
            aria-pressed={n === size} onClick={() => { setN(size); setFreqK((k) => k % size); }}>
            N = {size}
          </Button>
        ))}
        <Badge variant="purple" className="ml-auto font-mono text-[10px]">
          复单位根 ωₙ = exp(2πi/{n})
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 220 220" className="w-full max-h-52 text-foreground">
            <circle cx="110" cy="110" r="72" className="fill-muted/15 stroke-border" strokeWidth="1.5" />
            <line x1="22" y1="110" x2="198" y2="110" className="stroke-border" strokeDasharray="3 3" />
            <line x1="110" y1="22" x2="110" y2="198" className="stroke-border" strokeDasharray="3 3" />
            <polyline
              fill="none"
              className="stroke-blue-500/60"
              strokeWidth="1.8"
              points={[...pts, pts[0]].map((p) => `${p.cx},${p.cy}`).join(' ')}
            />
            {firstVisits.map((p) => (
              <g key={p.j}>
                <line x1="110" y1="110" x2={p.cx} y2={p.cy} className="stroke-primary/35" strokeWidth="1" />
                <circle cx={p.cx} cy={p.cy} r="5" className={p.j === 1 ? 'fill-amber-500' : 'fill-blue-600 dark:fill-blue-400'} />
                <text x={p.cx + 7} y={p.cy + 3} className="fill-current font-mono text-[9px]">
                  {copiesPerRoot > 1 ? `×${copiesPerRoot}` : `j=${p.j}`}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="输入频率 k（样本 x[j] = ωₙ^(kj)）" value={freqK} min={0} max={n - 1} step={1} onChange={setFreqK} />
          <div className="rounded border bg-muted/30 p-2.5 font-mono text-[11px] space-y-1">
            <div>X = Fₙx，X[m] = Σⱼ x[j] ωₙ^(mj) = Σⱼ ωₙ^((k+m)j)</div>
            <div>FᴴF = {n}I，F/√{n} 为酉矩阵</div>
            <div>FFT：m ≡ −k (mod N) 时，|X[{peakBin}]| = {fmt(Math.hypot(...fft[peakBin]))}；其余频点的单位根之和为 0。</div>
            <div>maxₘ |X<sub>FFT</sub>[m] − X<sub>DFT</sub>[m]|（数值差）= {maxError.toExponential(2)}</div>
            <div className="text-muted-foreground">复数乘法次数（含平凡因子）：FFT {fftOps}，直接 DFT {dftOps}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L28: SPD Energy Ellipsoid & 4-Test Explorer
// ============================================================================
function L28SpdEllipsoidExplorer() {
  const [a, setA] = React.useState(2);
  const [b, setB] = React.useState(1);
  const [c, setC] = React.useState(2);

  const { det, hi, lo, theta } = symmetricSpectrum(a, b, c);
  const isSpd = a > 0 && det > 0;
  const levelSet = hi <= 0 ? '等值集为空：二次型始终 ≤ 0。'
    : lo === 0 ? '半正定（秩 1）：等值集为两条平行直线。'
    : '不定：等值集为双曲线。';

  const axes = isSpd ? [1 / Math.sqrt(hi), 1 / Math.sqrt(lo)] : null;
  const scale = axes ? Math.min(55, 67 / axes[1]) : 55;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  const toSvg = (y1: number, y2: number): [number, number] =>
    [110 + (y1 * cos - y2 * sin) * scale, 110 - (y1 * sin + y2 * cos) * scale];
  const contourPts = axes ? Array.from({ length: 64 }, (_, i) => {
    const t = (i / 64) * 2 * Math.PI;
    return toSvg(axes[0] * Math.cos(t), axes[1] * Math.sin(t)).join(',');
  }) : [];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 220 200" className="w-full max-h-52 text-foreground">
            <rect x="12" y="12" width="196" height="176" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="12" y1="110" x2="208" y2="110" className="stroke-border" strokeDasharray="3 3" />
            <line x1="110" y1="12" x2="110" y2="188" className="stroke-border" strokeDasharray="3 3" />
            {axes && (
              <>
                <polygon points={contourPts.join(' ')}
                  className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" />
                {axes.map((axis, i) => {
                  const [x1, y1] = i === 0 ? toSvg(-axis, 0) : toSvg(0, -axis);
                  const [x2, y2] = i === 0 ? toSvg(axis, 0) : toSvg(0, axis);
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2"
                    className={i === 0 ? 'stroke-blue-500' : 'stroke-amber-500'} />;
                })}
              </>
            )}
            <text x="18" y="26" className="fill-current font-mono text-[10px]">
              {axes ? '椭圆 xᵀSx = 1' : '正定时绘制等值椭圆'}
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="s₁₁ = a" value={a} min={-4} max={4} step={0.5} onChange={setA} />
          <ControlSlider label="耦合项 s₁₂ = b" value={b} min={-2.5} max={2.5} step={0.5} onChange={setB} />
          <ControlSlider label="s₂₂ = c" value={c} min={-4} max={4} step={0.5} onChange={setC} />
          <div className="flex flex-wrap gap-1 font-mono text-[10px]">
            <Badge variant={isSpd ? 'emerald' : 'destructive'}>顺序主子式：a = {fmt(a)}，det(S) = {fmt(det)}</Badge>
            <Badge variant={lo > 0 ? 'emerald' : 'destructive'}>λ ≈ ({fmt(hi)}, {fmt(lo)})</Badge>
          </div>
          <div className="font-mono text-[11px] text-muted-foreground">
            {axes
              ? `半轴 1/√λ₁ ≈ ${fmt(axes[0])}，1/√λ₂ ≈ ${fmt(axes[1])}（沿 q₁、q₂）。`
              : levelSet}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L29: Similarity B = M^-1 A M & Jordan Form Sandbox
// ============================================================================
function L29SimilarityJordanSandbox() {
  const [mShear, setMShear] = React.useState(1);
  const [blockType, setBlockType] = React.useState<'diag' | 'jordan'>('jordan');

  // B = 3I + M⁻¹ N M, with N = e₁e₂ᵀ for the Jordan block.
  const lower = mShear / 5;
  const detM = 1 - mShear * lower; // At least 0.55 over the slider range.
  const weight = blockType === 'jordan' ? 1 / detM : 0;
  const res00 = 3 + weight * lower;
  const res01 = weight;
  const res10 = -weight * lower * lower;
  const res11 = 3 - weight * lower;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant={blockType === 'diag' ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setBlockType('diag')}>
          可对角化纯量阵 [3,0; 0,3]
        </Button>
        <Button size="sm" variant={blockType === 'jordan' ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setBlockType('jordan')}>
          亏损 Jordan 块 [3,1; 0,3]
        </Button>
        <Badge variant="blue" className="ml-auto font-mono text-[10px]">
          相似不变量: tr(B) = {fmt(res00 + res11)}, det(B) = {fmt(res00 * res11 - res01 * res10)}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2 rounded-lg border bg-background/70 p-3">
        <div className="space-y-2">
          <ControlSlider label="换基参数 s" value={mShear} min={-1.5} max={1.5} step={0.25} onChange={setMShear} />
          <div className="font-mono text-[11px]">M = [1, {fmt(mShear)}; {fmt(lower)}, 1]，det(M) = {fmt(detM, 4)} &gt; 0</div>
          <p className="text-[11px] text-muted-foreground mb-0">
            λ = 3 的代数重数为 2。rank(B − 3I) = {blockType === 'jordan' ? 1 : 0}，
            rank((B − 3I)ᵏ) = 0（k ≥ 2），与 A 的对应幂秩相同。
            {blockType === 'jordan' ? ' 几何重数为 1，因此无法对角化。' : ' B = 3I，几何重数为 2，每个非零向量都是特征向量。'}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center font-mono text-xs">
          <div className="text-muted-foreground mb-1">变换后矩阵 B = M⁻¹ A M</div>
          <div className="rounded border bg-muted/30 px-4 py-2 text-center space-y-1">
            <div>[{fmt(res00)}, {fmt(res01)}]</div>
            <div>[{fmt(res10)}, {fmt(res11)}]</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L30: SVD Circle-to-Ellipse Visualizer (A = U Sigma V^T)
// ============================================================================
function L30SvdCircleEllipse() {
  const [sig1, setSig1] = React.useState(2.2);
  const [second, setSig2] = React.useState(0.9);
  const [thetaV, setThetaV] = React.useState(25);
  const [thetaU, setThetaU] = React.useState(35);
  const [probeDeg, setProbeDeg] = React.useState(45);
  const [reflected, setReflected] = React.useState(false);
  const sig2 = Math.min(sig1, second);

  const rv = (thetaV * Math.PI) / 180;
  const ru = (thetaU * Math.PI) / 180;
  const rp = (probeDeg * Math.PI) / 180;
  const sign = reflected ? -1 : 1;
  const v1: [number, number] = [Math.cos(rv), Math.sin(rv)];
  const v2: [number, number] = [-v1[1], v1[0]];
  const u1: [number, number] = [Math.cos(ru), Math.sin(ru)];
  const u2: [number, number] = [-sign * u1[1], sign * u1[0]];

  // Build A and the signed axes from the same paired singular vectors.
  const A = u1.map((value, i) =>
    v1.map((component, j) => sig1 * value * component + sig2 * u2[i] * v2[j])
  );
  const apply = ([x, y]: [number, number]): [number, number] =>
    [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y];
  const xPt: [number, number] = [Math.cos(rp), Math.sin(rp)];
  const axPt = apply(xPt);
  const aV1 = apply(v1);
  const aV2 = apply(v2);
  const pairingError = Math.max(
    Math.hypot(aV1[0] - sig1 * u1[0], aV1[1] - sig1 * u1[1]),
    Math.hypot(aV2[0] - sig2 * u2[0], aV2[1] - sig2 * u2[1]),
  );
  const rank = Number(sig1 > 0) + Number(sig2 > 0);

  const ellipsePts = Array.from({ length: 49 }, (_, i) => {
    const a = (i / 48) * 2 * Math.PI;
    const [px, py] = apply([Math.cos(a), Math.sin(a)]);
    return [95 + px * 28, 95 - py * 28];
  });

  const toL = (mx: number, my: number): [number, number] => [95 + mx * 45, 95 - my * 45];
  const toR = (mx: number, my: number): [number, number] => [95 + mx * 28, 95 - my * 28];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <div className="mb-1 text-[11px] font-medium">输入空间 ℝ²：单位圆与标准正交基 (v₁, v₂)</div>
          <svg viewBox="0 0 190 190" className="w-full max-h-48 text-foreground">
            <circle cx="95" cy="95" r="45" className="fill-blue-500/10 stroke-border" strokeWidth="1.5" />
            <line x1="95" y1="95" x2={toL(v1[0], v1[1])[0]} y2={toL(v1[0], v1[1])[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" />
            <line x1="95" y1="95" x2={toL(v2[0], v2[1])[0]} y2={toL(v2[0], v2[1])[1]} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" />
            <line x1="95" y1="95" x2={toL(xPt[0], xPt[1])[0]} y2={toL(xPt[0], xPt[1])[1]} className="stroke-rose-500" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx={toL(xPt[0], xPt[1])[0]} cy={toL(xPt[0], xPt[1])[1]} r="4.5" className="fill-rose-500" />
          </svg>
        </div>

        <div className="rounded-lg border bg-background/70 p-2.5">
          <div className="mb-1 flex justify-between text-[11px] font-medium">
            <span>输出空间 ℝ²：主轴 (σ₁u₁, σ₂u₂)</span>
            <span className="font-mono text-muted-foreground">‖Ax‖ = {fmt(Math.hypot(axPt[0], axPt[1]))}</span>
          </div>
          <svg viewBox="0 0 190 190" className="w-full max-h-48 text-foreground">
            <polygon points={ellipsePts.map((p) => p.join(',')).join(' ')} className="fill-purple-500/15 stroke-purple-500" strokeWidth="1.8" />
            <line x1="95" y1="95" x2={toR(sig1 * u1[0], sig1 * u1[1])[0]} y2={toR(sig1 * u1[0], sig1 * u1[1])[1]} className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" />
            <line x1="95" y1="95" x2={toR(sig2 * u2[0], sig2 * u2[1])[0]} y2={toR(sig2 * u2[0], sig2 * u2[1])[1]} className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" />
            <line x1="95" y1="95" x2={toR(axPt[0], axPt[1])[0]} y2={toR(axPt[0], axPt[1])[1]} className="stroke-rose-500" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx={toR(axPt[0], axPt[1])[0]} cy={toR(axPt[0], axPt[1])[1]} r="4.5" className="fill-rose-500" />
          </svg>
        </div>
      </div>

      <div className="grid gap-3 rounded-lg border bg-background/60 p-3 sm:grid-cols-4">
        <ControlSlider label="最大奇异值 σ₁" value={sig1} min={0} max={3} step={0.1} onChange={(value) => { setSig1(value); setSig2(Math.min(value, sig2)); }} />
        <ControlSlider label="第二奇异值 σ₂" value={sig2} min={0} max={sig1} step={0.1} onChange={setSig2} />
        <ControlSlider label="右奇异基 V 的角度" value={thetaV} min={0} max={180} step={5} onChange={setThetaV} unit="°" />
        <ControlSlider label="探针角度 φ" value={probeDeg} min={0} max={360} step={5} onChange={setProbeDeg} unit="°" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <ControlSlider label="左奇异向量 u₁ 的角度" value={thetaU} min={0} max={180} step={5} onChange={setThetaU} unit="°" />
        <Button size="sm" variant={reflected ? 'default' : 'outline'} aria-pressed={reflected} onClick={() => setReflected(!reflected)}>
          反转第二输出方向（σ₂ &gt; 0 时改变 A）
        </Button>
      </div>
      <div className="space-y-1 font-mono text-[11px] text-muted-foreground">
        <div>A = UΣVᵀ ≈ [{A.map((row) => row.map((v) => fmt(v)).join(', ')).join('; ')}]</div>
        <div>maxᵢ ‖Avᵢ − σᵢuᵢ‖₂ = {pairingError.toExponential(2)} · rank(A) = {rank} · det(A) ≈ {fmt(sign * sig1 * sig2)}</div>
        <div>{rank === 2 ? `条件数 κ₂(A) = σ₁ / σ₂ = ${fmt(sig1 / sig2)}` : 'κ₂(A) = ∞（A 奇异）'} · {
          rank === 0 ? '单位圆映为原点' : rank === 1 ? '单位圆映为线段' : sig1 === sig2 ? '等奇异值：像为圆，奇异基可成对旋转' : '单位圆映为椭圆'
        }</div>
        <div>最优秩至多 1 的截断 A₁ = σ₁u₁v₁ᵀ：‖A − A₁‖₂ = ‖A − A₁‖_F = σ₂ = {fmt(sig2)}</div>
      </div>
    </div>
  );
}

// ============================================================================
// L31: Linear Transformations & Derivative Matrix Bases
// ============================================================================
function L31LinearTransformBases() {
  const [c0, setC0] = React.useState(2);
  const [c1, setC1] = React.useState(3);
  const [c2, setC2] = React.useState(-1);
  const [c3, setC3] = React.useState(1);

  // T(p) = d/dx applied to c0 + c1 x + c2 x^2 + c3 x^3 -> [c1, 2*c2, 3*c3, 0]
  const out = [c1, 2 * c2, 3 * c3, 0];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2 rounded-lg border bg-background/70 p-3">
          <div className="text-xs font-semibold">有序基 B = (1, x, x², x³) 下的多项式坐标</div>
          <div className="grid grid-cols-2 gap-2">
            <ControlSlider label="常数项 c₀" value={c0} min={-4} max={4} step={1} onChange={setC0} />
            <ControlSlider label="一次项 c₁" value={c1} min={-4} max={4} step={1} onChange={setC1} />
            <ControlSlider label="二次项 c₂" value={c2} min={-4} max={4} step={1} onChange={setC2} />
            <ControlSlider label="三次项 c₃" value={c3} min={-4} max={4} step={1} onChange={setC3} />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-2 rounded-lg border bg-background/70 p-3 font-mono text-[11px]">
          <div className="font-sans text-xs font-semibold">求导算子 T = d/dx 的矩阵 D = [T]<sub>B</sub>（4×4 幂零阵）</div>
          <div className="grid grid-cols-2 gap-2 items-center">
            <div className="rounded border bg-muted/30 p-2 text-center">
              <div>[ 0, 1, 0, 0 ]</div>
              <div>[ 0, 0, 2, 0 ]</div>
              <div>[ 0, 0, 0, 3 ]</div>
              <div>[ 0, 0, 0, 0 ]</div>
            </div>
            <div className="space-y-1">
              <div>输入坐标: [{c0}, {c1}, {c2}, {c3}]ᵀ</div>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                导数坐标: [{out.join(', ')}]ᵀ
              </div>
              <div className="text-muted-foreground font-sans">
                即 {out[0]} + {out[1]}x + {out[2]}x²。常数多项式张成 Null(T)，所以 c₀ 不影响导数。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L32: Basis Change & Low-Rank SVD / Fourier Compression Sandbox
// ============================================================================
function L32BasisCompressionSandbox() {
  const [keepK, setKeepK] = React.useState(2);
  const sigmas = [10, 4.5, 1.8, 0.7, 0.25, 0.08];
  const totalEnergy = sigmas.reduce((s, v) => s + v * v, 0);
  const keptEnergy = sigmas.slice(0, keepK).reduce((s, v) => s + v * v, 0);
  const ratio = (keptEnergy / totalEnergy) * 100;
  const discarded = sigmas.slice(keepK);
  const spectralErr = discarded[0] ?? 0;
  const frobErr = Math.hypot(...discarded);
  const storedEntries = keepK * (100 + 100 + 1);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2 rounded-lg border bg-background/70 p-3">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>Eckart–Young–Mirsky 低秩近似</span>
            <Badge variant="emerald" className="font-mono text-[10px]">
              能量保留 {fmt(ratio, 1)}%
            </Badge>
          </div>
          <ControlSlider label="保留奇异分量个数 k (秩-k 逼近)" value={keepK} min={0} max={6} step={1} onChange={setKeepK} />
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-1">
            <div>谱范数误差 ‖A − Aₖ‖₂ = {fmt(spectralErr)}</div>
            <div>Frobenius 范数误差 ‖A − Aₖ‖_F ≈ {fmt(frobErr)}</div>
            <div>若为 100×100 矩阵，存储 Uₖ、保留的奇异值与 Vₖ 共 {keepK}×(100+1+100) = {storedEntries} 个数 ({fmt(storedEntries / 100, 2)}%)</div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-1 text-[11px] font-semibold">六个正奇异值 σ₁ … σ₆（其余为 0）</div>
          <svg viewBox="0 0 240 120" className="w-full max-h-36 text-foreground">
            <line x1="15" y1="100" x2="225" y2="100" className="stroke-border" />
            {sigmas.map((s, idx) => {
              const h = (s / 10) * 80;
              const x = 25 + idx * 32;
              const kept = idx < keepK;
              return (
                <g key={idx}>
                  <rect x={x} y={100 - h} width="20" height={h} rx="2" className={kept ? 'fill-blue-600 dark:fill-blue-400' : 'fill-muted'} />
                  <text x={x + 10} y="112" textAnchor="middle" className="fill-current font-mono text-[9px]">
                    σ{idx + 1}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L33: Quiz 3 Factorization Synthesis Matrix
// ============================================================================
function L33Quiz3SynthesisSandbox() {
  type FactId = 'lu' | 'qr' | 'eig' | 'svd';
  const [selected, setSelected] = React.useState<FactId>('svd');

  const items: Record<
    FactId,
    { title: string; formula: string; domain: string; cost: string; property: string }
  > = {
    lu: {
      title: 'Gaussian 消元 LU',
      formula: 'PA = L U',
      domain: '带行主元的方阵消元',
      cost: 'O(n³)，主项 ⅔ n³ flops',
      property: 'P 为置换矩阵，L 为单位下三角，U 为上三角。',
    },
    qr: {
      title: 'Gram-Schmidt 正交分解 QR',
      formula: 'A = Q R',
      domain: '实矩阵 A ∈ ℝᵐˣⁿ，m ≥ n；列满秩时可直接逐列归一化',
      cost: 'O(mn²)',
      property: '薄 QR 满足 QᵀQ = Iₙ，R 为上三角。遇到零残差列时，可逐列补入与已有列正交的单位向量。',
    },
    eig: {
      title: '谱定理 / 特征分解',
      formula: 'S = Q Λ Qᵀ  (一般 A = X Λ X⁻¹)',
      domain: '实对称阵 S；一般式要求 A 在所选数域上有完整的特征基',
      cost: 'O(n³)',
      property: '实对称矩阵的特征基可取为标准正交基。',
    },
    svd: {
      title: '奇异值分解 SVD (大一统分解)',
      formula: 'A = UΣVᵀ（实） / A = UΣVᴴ（复）',
      domain: '任意 m×n 实或复矩阵',
      cost: 'O(mn min(m,n))（薄 SVD）',
      property: 'Σ 的正对角元个数等于 rank(A)。',
    },
  };

  const cur = items[selected];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {(Object.keys(items) as FactId[]).map((k) => (
          <Button key={k} size="sm" variant={selected === k ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setSelected(k)}>
            {items[k].title}
          </Button>
        ))}
      </div>
      <div className="rounded-lg border bg-background/70 p-3 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-sm font-bold text-primary">{cur.formula}</span>
          <Badge variant="purple" className="font-mono text-[10px]">复杂度: {cur.cost}</Badge>
        </div>
        <div className="text-xs text-muted-foreground">
          <strong className="text-foreground">适用范围：</strong>{cur.domain}
        </div>
        <div className="text-xs text-muted-foreground">
          <strong className="text-foreground">结构：</strong>{cur.property}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L34: Pseudoinverse A+ & Truncation / Tikhonov Regularization
// ============================================================================
function L34PseudoinverseSandbox() {
  const [sig2, setSig2] = React.useState(0.05);
  const [tau, setTau] = React.useState(0.1);

  const sig1 = 2.0;
  const exactInv2 = sig2 > 0 ? 1 / sig2 : 0;
  const hardTrunc2 = sig2 >= tau ? exactInv2 : 0;
  const ridgeInv2 = sig2 / (sig2 * sig2 + tau * tau);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2 rounded-lg border bg-background/70 p-3">
        <div className="space-y-2.5">
          <div className="text-xs font-semibold">奇异方向上的伪逆与正则化增益</div>
          <ControlSlider label="微小奇异值 σ₂ (σ₁=2.0 固定)" value={sig2} min={0} max={1} step={0.01} onChange={setSig2} />
          <ControlSlider label="截断阈值 τ（Tikhonov 惩罚系数为 τ²）" value={tau} min={0.01} max={0.5} step={0.01} onChange={setTau} />
        </div>

        <div className="flex flex-col justify-center space-y-1.5 font-mono text-[11px]">
          <div className="flex justify-between rounded border bg-rose-500/10 px-2.5 py-1.5 text-rose-600 dark:text-rose-400">
            <span>Moore–Penrose 伪逆（σ₂ &gt; 0 时取 1/σ₂，σ₂ = 0 时取 0）</span>
            <span className="font-bold">{fmt(exactInv2)}×</span>
          </div>
          <div className="flex justify-between rounded border bg-blue-500/10 px-2.5 py-1.5 text-blue-600 dark:text-blue-400">
            <span>截断 SVD（σ₂ ≥ τ 时保留倒数）</span>
            <span className="font-bold">{fmt(hardTrunc2)}×</span>
          </div>
          <div className="flex justify-between rounded border bg-emerald-500/10 px-2.5 py-1.5 text-emerald-600 dark:text-emerald-400">
            <span>岭回归/Tikhonov σ₂/(σ₂²+τ²)</span>
            <span className="font-bold">{fmt(ridgeInv2)}×</span>
          </div>
          <p className="mb-0 pt-1 font-sans text-[11px] text-muted-foreground">
            A = diag({sig1}, σ₂)，A⁺ ≈ diag({1 / sig1}, {fmt(exactInv2)})。
            {sig2 === 0 ? ' A 奇异，无普通逆。' : ` κ₂(A) = ${fmt(sig1 / sig2)}。`}
            截断在 τ 处切换增益，Tikhonov 连续抑制小奇异值方向。
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L35: Grand Finale Course Synthesis Dashboard
// ============================================================================
function L35GrandFinaleExplorer() {
  type Arch = 'invertible' | 'overdet' | 'underdet' | 'singular';
  const [arch, setArch] = React.useState<Arch>('overdet');

  const data: Record<
    Arch,
    { label: string; shape: string; r: number; m: number; n: number; inv: string; bestSol: string; svdSummary: string }
  > = {
    invertible: {
      label: '方阵满秩 (r = m = n)',
      shape: '3×3, r=3',
      m: 3,
      n: 3,
      r: 3,
      inv: '双边逆 A⁻¹ 存在，PA = LU 且 A = QR',
      bestSol: '唯一精确解 x = A⁻¹ b，残差 e = 0',
      svdSummary: '3 个正奇异值 σ₁≥σ₂≥σ₃>0，A⁺ = A⁻¹',
    },
    overdet: {
      label: '瘦长超定 (r = n < m)',
      shape: '4×2, r=2',
      m: 4,
      n: 2,
      r: 2,
      inv: '左逆 (AᵀA)⁻¹Aᵀ 存在，零空间 {0}',
      bestSol: '唯一最小二乘解 x̂ = (AᵀA)⁻¹Aᵀb，A x̂ 是 b 在 Col(A) 上的正交投影',
      svdSummary: '2 个正奇异值，A⁺ 是一个左逆',
    },
    underdet: {
      label: '矮胖欠定 (r = m < n)',
      shape: '2×4, r=2',
      m: 2,
      n: 4,
      r: 2,
      inv: '右逆 Aᵀ(AAᵀ)⁻¹ 存在，对每个 b 有无穷多解',
      bestSol: '最小范数解 x⁺ = A⁺b ∈ Row(A)，其零空间分量为 0',
      svdSummary: 'dim Null(A) = 2，A⁺b 是仿射解平面上离原点最近的点',
    },
    singular: {
      label: '一般秩亏 (r < m 且 r < n)',
      shape: '3×4, r=2',
      m: 3,
      n: 4,
      r: 2,
      inv: '无左逆或右逆，Moore–Penrose 伪逆 A⁺ 始终存在',
      bestSol: 'x⁺ = A⁺b 是所有最小二乘解中唯一的最小范数解',
      svdSummary: '在完整 SVD 中，U 的前 r 列张成 Col(A)，其余列张成 Null(Aᵀ)。V 的前 r 列张成 Row(A)，其余列张成 Null(A)。每组列分别构成对应子空间的标准正交基。',
    },
  };

  const d = data[arch];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {(Object.keys(data) as Arch[]).map((k) => (
          <Button key={k} size="sm" variant={arch === k ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setArch(k)}>
            {data[k].label}
          </Button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2 rounded-lg border bg-background/70 p-3 text-xs">
        <div className="space-y-1.5 font-mono text-[11px]">
          <div className="font-sans text-xs font-semibold text-foreground">实矩阵的四个基本子空间 ({d.shape})</div>
          <div>dim Row(A) = dim Col(A) = r = {d.r}</div>
          <div>dim Null(A) = n − r = {d.n - d.r}</div>
          <div>dim Null(Aᵀ) = m − r = {d.m - d.r}</div>
        </div>
        <div className="space-y-1.5 text-xs">
          <div><strong className="text-foreground">可逆性：</strong>{d.inv}</div>
          <div><strong className="text-foreground">最优解准则：</strong>{d.bestSol}</div>
          <div><strong className="text-foreground">SVD 终极视角：</strong>{d.svdSummary}</div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Module IV Interactive Dispatcher
// ============================================================================
export function renderModule4Interactive(id: string): React.ReactNode | null {
  switch (id) {
    case 'l26-spectral-inertia-sandbox':
      return <L26SpectralInertiaSandbox />;
    case 'l27-complex-fft-sandbox':
      return <L27ComplexFftSandbox />;
    case 'l28-spd-ellipsoid-explorer':
      return <L28SpdEllipsoidExplorer />;
    case 'l29-similarity-jordan-sandbox':
      return <L29SimilarityJordanSandbox />;
    case 'l30-svd-circle-ellipse':
      return <L30SvdCircleEllipse />;
    case 'l31-linear-transform-bases':
      return <L31LinearTransformBases />;
    case 'l32-basis-compression-sandbox':
      return <L32BasisCompressionSandbox />;
    case 'l33-quiz3-synthesis-sandbox':
      return <L33Quiz3SynthesisSandbox />;
    case 'l34-pseudoinverse-sandbox':
      return <L34PseudoinverseSandbox />;
    case 'l35-grand-finale-explorer':
      return <L35GrandFinaleExplorer />;
    default:
      return null;
  }
}
