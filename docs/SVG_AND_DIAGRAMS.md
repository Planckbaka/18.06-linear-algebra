# Static SVG Diagrams & Phase-2 Interactive Canvas Specification (`SVG_AND_DIAGRAMS.md`)

Visual intuition is half the soul of Gilbert Strang's 18.06. To ensure fast page loads, razor-sharp mathematical typography, and seamless Light/Dark mode transitions, follow these rules when creating or editing visual assets.

---

## 1. Theme-Adaptive Static Mathematical SVGs (Phase 1 Standard)

1. **Never hardcode pure `#000000` strokes or `#ffffff` backgrounds** inside inline or React-rendered SVGs.
2. **Use Semantic CSS Custom Properties / Tailwind Classes**:
   - Axes & grid lines: `stroke="currentColor"` with `opacity="0.2"` (grid) and `opacity="0.65"` (coordinate axes)
   - Primary subspace / vector 1 (e.g., $\mathbf{a}_1$, $\operatorname{Col}(A)$): Blue (`#2563eb` light / `#60a5fa` dark, or CSS variable `var(--diagram-blue)`)
   - Secondary vector / subspace 2 (e.g., $\mathbf{a}_2$, $\operatorname{Null}(A)$): Emerald (`#059669` light / `#34d399` dark, or `var(--diagram-emerald)`)
   - Target / Resultant / Error vector (e.g., $\mathbf{b}$, $P\mathbf{b}$, $\mathbf{e}$): Amber/Rose (`#d97706` / `#e11d48`, `var(--diagram-accent)`)
3. **Universal Mathematical Labels**:
   - Prefer language-neutral mathematical notation inside SVG coordinates ($\mathbf{a}_1$, $2\mathbf{a}_1 + \mathbf{a}_2 = \mathbf{b}$, $\operatorname{Col}(A) \perp \operatorname{Null}(A^T)$) and place detailed Chinese/English explanations inside `<MathDiagram caption="...">`. This allows a single high-precision diagram component to serve both `/zh/` and `/en/` seamlessly!

---

## 2. Phase-2 Interactive Visualization Slots (`<InteractiveCanvasSlot>`)

In Phase 1, we dedicate 100% of authoring energy to mathematical exposition, static SVGs, and intuition exercises. However, key geometric inflection points already embed:

```mdx
<InteractiveCanvasSlot
  id="l01-row-vs-col-2d"
  title="2D 行图像与列图像联动实验台"
  description="二期交互规划：自由拖动矩阵 A 的两个列向量或右侧目标向量 b，实时观察左侧两直线交点坐标 (x, y) 与右侧平行四边形线性组合系数的同步变化，直观感受列共线时的奇异退化。"
/>
```

Contributors interested in building interactive React/Canvas/SVG sandboxes in Phase 2 can inspect all registered slot IDs across `content/` and implement drop-in interactive components inside `src/components/diagrams/interactives/` without modifying lecture prose!
