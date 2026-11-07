# Technical Architecture & MDX Component Reference (`ARCHITECTURE.md`)

## 1. Rendering Pipeline

- **Framework**: Next.js 15 App Router configured with `output: 'export'` and `trailingSlash: true` for zero-server GitHub Pages hosting.
- **Curriculum Source of Truth**: `src/lib/curriculum.ts` defines all 4 Modules, 35 dual-numbered sessions (`OCW L01–L34` including `L24b` $\leftrightarrow$ Chinese OpenCourse `P01–P35`), textbook references (*Introduction to Linear Algebra*, 5th/6th Ed.), and the 15 Frontier AI reading anchors.
- **MDX Compilation**: `src/lib/mdx.ts` compiles `content/{zh,en}/.../*.mdx` at static build time via `next-mdx-remote/rsc` with `remark-gfm`, `remark-math`, `rehype-katex`, and `rehype-slug`. All math formulas are pre-rendered into static KaTeX HTML + CSS at build time.
- **Client Persistence**: Exercise self-checks (`<TrueFalseInteractive>`) and lecture completion toggles store state locally in `window.localStorage` under `mit1806_progress_v1`—privacy-preserving and serverless.

---

## 2. Custom Pedagogical MDX Components

All components below are automatically injected into every `.mdx` lecture file (no manual `import` required inside `.mdx`):

### Mathematical Exposition
- `<DefinitionCard title="..." termEn="..." label="Definition 1.1">...</DefinitionCard>`
- `<TheoremCard title="..." termEn="..." label="Theorem 3.1">...</TheoremCard>`
- `<ProofCollapse title="展开严格代数证明 / Rigorous Proof">...</ProofCollapse>`
- `<PitfallAlert title="常见直觉陷阱 / 勘误提示">...</PitfallAlert>`
- `<KeyTakeaways items={[...]} />`

### Diagrams & Future Interactive Slots
- `<MathDiagram title="..." caption="...">...</MathDiagram>` (plus pre-built precision SVG components such as `<RowVsColumn2DDiagram />`, `<ThreePlanes3DDiagram />`, `<MatrixMultFiveViewsDiagram />`)
- `<InteractiveCanvasSlot id="..." title="..." description="..." />`

### Tiered Intuition Problem Set
- `<ProblemSet description="...">...</ProblemSet>`
- `<ExerciseCard id="l01-ex1" tier="L1" title="..." difficulty="基础核验">...</ExerciseCard>`
- `<TrueFalseInteractive id="l01-tf1" correct={false} prompt="..." quickFeedback="..." />`
- `<ProgressiveHint hints={["Hint 1...", "Hint 2..."]} />`
- `<DualSolution intuition={<>...</>} rigorous={<>...</>} />`

### Isolated Post-Lecture Frontier AI Bridge
- `<FrontierAIReading id="AI-01" title="..." subtitle="..." paperRef="...">...</FrontierAIReading>`
- `<CollapsibleCode title="展开 PyTorch 张量维度对照核验（可选）" language="python">...</CollapsibleCode>`
