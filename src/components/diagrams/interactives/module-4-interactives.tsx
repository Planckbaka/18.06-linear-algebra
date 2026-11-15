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
// L26: Spectral Theorem S = Q Lambda Q^T & Law of Inertia
// ============================================================================
function L26SpectralInertiaSandbox() {
  const [a, setA] = React.useState(3);
  const [b, setB] = React.useState(2);
  const [c, setC] = React.useState(3);

  const tr = a + c;
  const det = a * c - b * b;
  const disc = Math.sqrt(Math.max(0, (a - c) * (a - c) + 4 * b * b));
  const lam1 = (tr + disc) / 2;
  const lam2 = (tr - disc) / 2;

  const d1 = a;
  const d2 = Math.abs(a) > 1e-6 ? c - (b * b) / a : c;

  const posEig = (lam1 > 1e-5 ? 1 : 0) + (lam2 > 1e-5 ? 1 : 0);
  const negEig = (lam1 < -1e-5 ? 1 : 0) + (lam2 < -1e-5 ? 1 : 0);
  const posPiv = (d1 > 1e-5 ? 1 : 0) + (d2 > 1e-5 ? 1 : 0);
  const negPiv = (d1 < -1e-5 ? 1 : 0) + (d2 < -1e-5 ? 1 : 0);

  const theta = 0.5 * Math.atan2(2 * b, a - c);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2 rounded-lg border bg-background/70 p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>实对称矩阵 S = [a, b; b, c]</span>
            <Badge variant={posEig === 2 ? 'emerald' : negEig === 1 && posEig === 1 ? 'amber' : 'blue'} className="font-mono text-[10px]">
              {posEig === 2 ? '正定 SPD' : posEig === 1 && negEig === 1 ? '不定鞍点' : '半正/负定'}
            </Badge>
          </div>
          <ControlSlider label="对角元素 a = s₁₁" value={a} min={-4} max={5} step={0.5} onChange={setA} />
          <ControlSlider label="非对角对称项 b = s₁₂" value={b} min={-4} max={4} step={0.5} onChange={setB} />
          <ControlSlider label="对角元素 c = s₂₂" value={c} min={-4} max={5} step={0.5} onChange={setC} />
        </div>

        <div className="flex flex-col justify-center space-y-2 rounded-lg border bg-background/70 p-3 font-mono text-[11px]">
          <div className="font-sans text-xs font-semibold">惯性定理验证 (主元符号数 ≡ 特征值符号数)</div>
          <div className="rounded border bg-muted/30 p-2 space-y-1">
            <div>特征值: λ₁ = {fmt(lam1)}, λ₂ = {fmt(lam2)} (正 {posEig} · 负 {negEig})</div>
            <div>消元主元: d₁ = {fmt(d1)}, d₂ = {fmt(d2)} {Math.abs(a) < 1e-6 ? '(需行交换)' : `(正 ${posPiv} · 负 ${negPiv})`}</div>
            <div>正交主轴倾角 θ = {fmt((theta * 180) / Math.PI, 1)}° (q₁ ⊥ q₂)</div>
          </div>
          <p className="mb-0 font-sans text-[11px] text-muted-foreground">
            谱定理 S = QΛQᵀ 保证任意实对称阵都可正交对角化，且在正交旋转后交叉项消失，只剩纯平方项 λ₁y₁² + λ₂y₂²。
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// L27: Complex Numbers, Fourier Matrix & Roots of Unity Sandbox
// ============================================================================
function L27ComplexFftSandbox() {
  const [n, setN] = React.useState<4 | 8>(8);
  const [freqK, setFreqK] = React.useState(1);

  const pts = Array.from({ length: n }, (_, j) => {
    const angle = (2 * Math.PI * freqK * j) / n;
    return {
      j,
      x: Math.cos(angle),
      y: Math.sin(angle),
      cx: 110 + 72 * Math.cos(angle),
      cy: 110 - 72 * Math.sin(angle),
    };
  });

  const dftOps = n * n;
  const fftOps = Math.round((n * Math.log2(n)) / 2);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <Button size="sm" variant={n === 4 ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => { setN(4); setFreqK((k) => k % 4); }}>
          N = 4 傅里叶矩阵 F₄
        </Button>
        <Button size="sm" variant={n === 8 ? 'default' : 'outline'} className="h-7 text-[11px]" onClick={() => setN(8)}>
          N = 8 傅里叶矩阵 F₈ (Radix-2 FFT)
        </Button>
        <Badge variant="purple" className="ml-auto font-mono text-[10px]">
          复单位根 ωₙ = e^(i 2π/{n}) · FFT 蝶形乘法数 ~ {fftOps} vs DFT {dftOps}
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
            {pts.map((p) => (
              <g key={p.j}>
                <line x1="110" y1="110" x2={p.cx} y2={p.cy} className="stroke-primary/35" strokeWidth="1" />
                <circle cx={p.cx} cy={p.cy} r="5" className={p.j === 1 ? 'fill-amber-500' : 'fill-blue-600 dark:fill-blue-400'} />
                <text x={p.cx + 7} y={p.cy + 3} className="fill-current font-mono text-[9px]">
                  j={p.j}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2.5 rounded-lg border bg-background/70 p-3">
          <ControlSlider label={`频率列索引 k (F 的第 k 列 ω^(k·j))`} value={freqK} min={0} max={n - 1} step={1} onChange={setFreqK} />
          <div className="rounded border bg-muted/30 p-2.5 font-mono text-[11px] space-y-1">
            <div>第 k={freqK} 步进角 = {fmt((360 * freqK) / n, 1)}°</div>
            <div>共轭内积 Fₕᴴ Fₘ = {n}·δₕₘ (各列严格酉正交！)</div>
            <div className="text-muted-foreground font-sans">
              当 k &gt; 0 时，单位根向量在复平面绕圆对称分布，矢量总和恰好为 0 (直流分量正交抵消)。
            </div>
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

  const det = a * c - b * b;
  const isSpd = a > 0 && det > 0;

  // Parametric points for x^T S x = 1 if SPD
  const tr = a + c;
  const disc = Math.sqrt(Math.max(0, (a - c) * (a - c) + 4 * b * b));
  const lam1 = (tr + disc) / 2;
  const lam2 = (tr - disc) / 2;
  const theta = 0.5 * Math.atan2(2 * b, a - c);

  const contourPts = isSpd
    ? Array.from({ length: 49 }, (_, i) => {
        const t = (i / 48) * 2 * Math.PI;
        const y1 = Math.cos(t) / Math.sqrt(lam1);
        const y2 = Math.sin(t) / Math.sqrt(lam2);
        const x1 = y1 * Math.cos(theta) - y2 * Math.sin(theta);
        const x2 = y1 * Math.sin(theta) + y2 * Math.cos(theta);
        return [110 + x1 * 55, 100 - x2 * 55];
      })
    : [];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border bg-background/70 p-2.5">
          <svg viewBox="0 0 220 200" className="w-full max-h-52 text-foreground">
            <rect x="12" y="12" width="196" height="176" rx="4" className="fill-muted/20 stroke-border" />
            <line x1="12" y1="100" x2="208" y2="100" className="stroke-border" strokeDasharray="3 3" />
            <line x1="110" y1="12" x2="110" y2="188" className="stroke-border" strokeDasharray="3 3" />
            {isSpd ? (
              <polygon
                points={contourPts.map((p) => p.join(',')).join(' ')}
                className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400"
                strokeWidth="2.5"
              />
            ) : (
              <text x="110" y="104" textAnchor="middle" className="fill-rose-500 font-semibold text-xs">
                非正定：等高面坍塌为双曲鞍面！
              </text>
            )}
            <text x="18" y="26" className="fill-current font-mono text-[10px]">
              等能量椭圆 xᵀ S x = 1 (长短半轴 1/√λᵢ)
            </text>
          </svg>
        </div>

        <div className="flex flex-col justify-center space-y-2 rounded-lg border bg-background/70 p-3">
          <ControlSlider label="s₁₁ = a" value={a} min={0.5} max={4} step={0.5} onChange={setA} />
          <ControlSlider label="耦合项 s₁₂ = b" value={b} min={-2.5} max={2.5} step={0.5} onChange={setB} />
          <ControlSlider label="s₂₂ = c" value={c} min={0.5} max={4} step={0.5} onChange={setC} />
          <div className="flex flex-wrap gap-1 font-mono text-[10px]">
            <Badge variant={a > 0 && c - (b * b) / a > 0 ? 'emerald' : 'destructive'}>
              主元 &gt; 0: {a > 0 && det > 0 ? '✓' : '✗'}
            </Badge>
            <Badge variant={det > 0 ? 'emerald' : 'destructive'}>det = {fmt(det)}</Badge>
            <Badge variant={lam2 > 0 ? 'emerald' : 'destructive'}>
              λ = ({fmt(lam1)}, {fmt(lam2)})
            </Badge>
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

  // A = [[3, 0], [0, 3]] if diag, [[3, 1], [0, 3]] if jordan
  // M = [[1, mShear], [0, 1]], M^-1 = [[1, -mShear], [0, 1]]
  // B = M^-1 A M
  const b12 = blockType === 'diag' ? 0 : 1; // Notice M^-1 J M for upper tri M keeps trace=6, det=9, Jordan off-diag=1!
  const B =
    blockType === 'diag'
      ? [
          [3, 0],
          [0, 3],
        ]
      : [
          [3, 1],
          [0, 3],
        ];
  // Use general scaling M = [[1, mShear], [mShear*0.2, 1]] when mShear != 0 to show entries change while trace & det remain invariant!
  const detM = 1 - 0.2 * mShear * mShear;
  const A = blockType === 'diag' ? [3, 0, 0, 3] : [3, 1, 0, 3];
  // Compute AM then M^-1(AM)
  const am00 = A[0] * 1 + A[1] * (0.2 * mShear);
  const am01 = A[0] * mShear + A[1] * 1;
  const am10 = A[2] * 1 + A[3] * (0.2 * mShear);
  const am11 = A[2] * mShear + A[3] * 1;
  const inv00 = 1 / detM;
  const inv01 = -mShear / detM;
  const inv10 = (-0.2 * mShear) / detM;
  const inv11 = 1 / detM;

  const res00 = inv00 * am00 + inv01 * am10;
  const res01 = inv00 * am01 + inv01 * am11;
  const res10 = inv10 * am00 + inv11 * am10;
  const res11 = inv10 * am01 + inv11 * am11;

  void b12;
  void B;

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
          <ControlSlider label="相似变换基底参数 M(s)" value={mShear} min={-1.5} max={1.5} step={0.25} onChange={setMShear} />
          <p className="text-[11px] text-muted-foreground mb-0">
            无论基底 M 如何倾斜，相似矩阵 B = M⁻¹ A M 永远锁定同一套特征值 λ = 3, 3、迹 = 6 与行列式 = 9；且 Jordan 块的超对角“1”无法通过任何相似变换消去！
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
  const [sig2, setSig2] = React.useState(0.9);
  const [thetaV, setThetaV] = React.useState(25);
  const [thetaU, setThetaU] = React.useState(35);
  const [probeDeg, setProbeDeg] = React.useState(45);

  const rv = (thetaV * Math.PI) / 180;
  const ru = (thetaU * Math.PI) / 180;
  const rp = (probeDeg * Math.PI) / 180;

  // Input right singular basis v1, v2 and probe x on unit circle
  const v1: [number, number] = [Math.cos(rv), Math.sin(rv)];
  const v2: [number, number] = [-Math.sin(rv), Math.cos(rv)];
  const xPt: [number, number] = [Math.cos(rp), Math.sin(rp)];

  // Coordinates of x in V basis
  const c1 = xPt[0] * v1[0] + xPt[1] * v1[1];
  const c2 = xPt[0] * v2[0] + xPt[1] * v2[1];

  // Output left singular basis u1, u2 and mapped point A x = sig1*c1*u1 + sig2*c2*u2
  const u1: [number, number] = [Math.cos(ru), Math.sin(ru)];
  const u2: [number, number] = [-Math.sin(ru), Math.cos(ru)];
  const axPt: [number, number] = [sig1 * c1 * u1[0] + sig2 * c2 * u2[0], sig1 * c1 * u1[1] + sig2 * c2 * u2[1]];

  const ellipsePts = Array.from({ length: 49 }, (_, i) => {
    const a = (i / 48) * 2 * Math.PI;
    const px = sig1 * Math.cos(a) * u1[0] + sig2 * Math.sin(a) * u2[0];
    const py = sig1 * Math.cos(a) * u1[1] + sig2 * Math.sin(a) * u2[1];
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
        <ControlSlider label="最大奇异值 σ₁" value={sig1} min={0.5} max={3} step={0.1} onChange={setSig1} />
        <ControlSlider label="第二奇异值 σ₂" value={sig2} min={0} max={2.5} step={0.1} onChange={setSig2} />
        <ControlSlider label="输入旋转 Vᵀ" value={thetaV} min={0} max={180} step={5} onChange={setThetaV} unit="°" />
        <ControlSlider label="探针角度 φ" value={probeDeg} min={0} max={360} step={10} onChange={setProbeDeg} unit="°" />
      </div>
      <div className="flex flex-wrap justify-between text-[11px] font-mono text-muted-foreground">
        <span>输出旋转 U 角度: {thetaU}° (可调节奇异值观察 rank-1 压扁)</span>
        <span>条件数 κ(A) = σ₁ / σ₂ = {sig2 > 0.05 ? fmt(sig1 / sig2) : '∞ (奇异！)'}</span>
      </div>
      <ControlSlider label="输出主轴旋转 U" value={thetaU} min={0} max={180} step={5} onChange={setThetaU} unit="°" />
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
          <div className="text-xs font-semibold">选定基组 B = &#123;1, x, x², x³&#125; 上的多项式输入</div>
          <div className="grid grid-cols-2 gap-2">
            <ControlSlider label="常数项 c₀" value={c0} min={-4} max={4} step={1} onChange={setC0} />
            <ControlSlider label="一次项 c₁" value={c1} min={-4} max={4} step={1} onChange={setC1} />
            <ControlSlider label="二次项 c₂" value={c2} min={-4} max={4} step={1} onChange={setC2} />
            <ControlSlider label="三次项 c₃" value={c3} min={-4} max={4} step={1} onChange={setC3} />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-2 rounded-lg border bg-background/70 p-3 font-mono text-[11px]">
          <div className="font-sans text-xs font-semibold">求导算子 T = d/dx 的基坐标矩阵 [D] (4×4 幂零阵)</div>
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
                即 {out[0]} + {out[1]}x + {out[2]}x²；常数项被“零空间”消灭 (c₀ 不影响导数)！
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
  const frobErr = Math.sqrt(totalEnergy - keptEnergy);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2 rounded-lg border bg-background/70 p-3">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>Eckart-Young 低秩奇异值截断压缩</span>
            <Badge variant="emerald" className="font-mono text-[10px]">
              能量保留 {fmt(ratio, 1)}%
            </Badge>
          </div>
          <ControlSlider label="保留奇异分量个数 k (秩-k 逼近)" value={keepK} min={1} max={6} step={1} onChange={setKeepK} />
          <div className="rounded border bg-muted/30 p-2 font-mono text-[11px] space-y-1">
            <div>Frobenius 截断误差 ‖A − Aₖ‖_F = {fmt(frobErr)}</div>
            <div>若为 100×100 矩阵，存储仅需 {keepK}×(100+100) = {keepK * 200} 数 ({fmt((keepK * 200) / 100, 1)}%)</div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-1 text-[11px] font-semibold">奇异值谱衰减 σ₁ … σ₆</div>
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
    { title: string; formula: string; domain: string; cost: string; aiBridge: string }
  > = {
    lu: {
      title: 'Gaussian 消元 LU',
      formula: 'PA = L U',
      domain: '可逆方阵或一般消元',
      cost: 'O(⅔ n³)',
      aiBridge: '线性求解器、数值微分方程隐式步进',
    },
    qr: {
      title: 'Gram-Schmidt 正交分解 QR',
      formula: 'A = Q R',
      domain: '列满秩 m ≥ n 矩阵',
      cost: 'O(2 m n²)',
      aiBridge: 'RoPE / Householder 正交参数化、稳定正交初始化',
    },
    eig: {
      title: '谱定理 / 特征分解',
      formula: 'S = Q Λ Qᵀ  (一般 A = X Λ X⁻¹)',
      domain: '实对称阵 S 或可对角化方阵',
      cost: 'O(n³)',
      aiBridge: 'Mamba 状态空间稳态分析、GNN 图拉普拉斯频域滤波',
    },
    svd: {
      title: '奇异值分解 SVD (大一统分解)',
      formula: 'A = U Σ Vᵀ',
      domain: '任意实/复 m×n 矩阵（无任何前提限制！）',
      cost: 'O(m n²)',
      aiBridge: 'LoRA 低秩微调、K-V Cache 压缩、光谱归一化与条件数调控',
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
          <strong className="text-foreground">前沿 AI 同构：</strong>{cur.aiBridge}
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
  // Compare exact 1/sig2 vs Tikhonov sig2/(sig2^2 + tau^2) vs hard truncation
  const exactInv2 = sig2 > 1e-4 ? 1 / sig2 : 0;
  const hardTrunc2 = sig2 >= tau ? 1 / sig2 : 0;
  const ridgeInv2 = sig2 / (sig2 * sig2 + tau * tau);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2 rounded-lg border bg-background/70 p-3">
        <div className="space-y-2.5">
          <div className="text-xs font-semibold">病态矩阵逆的噪声放大 vs 伪逆正则化</div>
          <ControlSlider label="微小奇异值 σ₂ (σ₁=2.0 固定)" value={sig2} min={0.01} max={1.0} step={0.02} onChange={setSig2} />
          <ControlSlider label="截断/正则化阈值 τ" value={tau} min={0.01} max={0.5} step={0.02} onChange={setTau} />
        </div>

        <div className="flex flex-col justify-center space-y-1.5 font-mono text-[11px]">
          <div className="flex justify-between rounded border bg-rose-500/10 px-2.5 py-1.5 text-rose-600 dark:text-rose-400">
            <span>直接倒数 1 / σ₂ (噪声放大倍数)</span>
            <span className="font-bold">{fmt(exactInv2)}×</span>
          </div>
          <div className="flex justify-between rounded border bg-blue-500/10 px-2.5 py-1.5 text-blue-600 dark:text-blue-400">
            <span>硬截断伪逆 A⁺ (σ₂ ≥ τ ? 1/σ₂ : 0)</span>
            <span className="font-bold">{fmt(hardTrunc2)}×</span>
          </div>
          <div className="flex justify-between rounded border bg-emerald-500/10 px-2.5 py-1.5 text-emerald-600 dark:text-emerald-400">
            <span>岭回归/Tikhonov σ₂/(σ₂²+τ²)</span>
            <span className="font-bold">{fmt(ridgeInv2)}×</span>
          </div>
          <p className="mb-0 pt-1 font-sans text-[11px] text-muted-foreground">
            条件数 κ = σ₁/σ₂ = {fmt(sig1 / sig2)}。当 σ₂ → 0 时直接求逆把测量误差放大上百倍，而截断伪逆与脊回归平滑抑制高频噪声！
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
      inv: '双边逆 A⁻¹ 存在，A = LU = QR',
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
      bestSol: '最小二乘解 x̂ = (AᵀA)⁻¹Aᵀ b (投影到 C(A))',
      svdSummary: '2 个正奇异值，σ₁,σ₂>0，A⁺ 即左逆',
    },
    underdet: {
      label: '矮胖欠定 (r = m < n)',
      shape: '2×4, r=2',
      m: 2,
      n: 4,
      r: 2,
      inv: '右逆 Aᵀ(AAᵀ)⁻¹ 存在，无穷多解',
      bestSol: '最短范数特解 x⁺ ∈ C(Aᵀ) (零空间分量=0)',
      svdSummary: 'dim N(A)=2，A⁺ 从仿射解平面挑选离原点最近点',
    },
    singular: {
      label: '一般秩亏 (r < m 且 r < n)',
      shape: '3×4, r=2',
      m: 3,
      n: 4,
      r: 2,
      inv: '无单边逆，唯有 Moore-Penrose 伪逆 A⁺',
      bestSol: '既最小化 ‖Ax − b‖₂ 又最小化 ‖x‖₂',
      svdSummary: 'r=2 个正奇异值，完整联通四基本子空间！',
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
          <div className="font-sans text-xs font-semibold text-foreground">四基本子空间全貌 ({d.shape})</div>
          <div>dim C(Aᵀ) = dim C(A) = r = {d.r}</div>
          <div>dim N(A) = n − r = {d.n - d.r}</div>
          <div>dim N(Aᵀ) = m − r = {d.m - d.r}</div>
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
