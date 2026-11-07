# Contributing to MIT 18.06 Linear Algebra Notes (`CONTRIBUTING.md`)

First off, thank you for considering contributing to **18.06 Linear Algebra**! 🎉
欢迎参与共建这套开源、严谨、重几何直觉的 MIT 18.06 线性代数双语学习站！

Our goal is to build an enduring open-source resource that pairs **Gilbert Strang's unmistakable geometric & subspace intuition** with **textbook-grade mathematical accuracy**, **zero-rote-calculation intuition exercises**, and **cleanly isolated Frontier AI readings**.

---

## 🌟 Four High-Impact Ways to Contribute (四类核心贡献方向)

1. **📐 Mathematical Errata & Rigor Tightening (数学严谨性与勘误)**
   - Spot a missing dimension constraint ($m\times n$ vs. $n\times n$), base field assumption ($\mathbb{R}$ vs. $\mathbb{C}$), rank condition, or formula typo? Open a [Mathematical Errata Issue](../../issues/new?template=math-errata.yml) or submit a direct PR!
2. **🧠 Intuition-Building Exercises (线性代数直觉好题投稿)**
   - Contribute clever **True/False conceptual traps** (with $2\times 2$ counterexamples), **zero-calculation subspace reasoning problems**, or classic MIT 18.06 exam-style synthesis problems via [Exercise Proposal](../../issues/new?template=exercise-proposal.yml).
3. **🌐 English Academic Translation (`/en/` 双语学术翻译)**
   - Phase 1 prioritizes completing all 35 Chinese (`/zh/`) sessions to gold-standard depth. Once a Chinese session is marked `✅ Published`, contributors are warmly invited to translate it into idiomatic academic English under `content/en/` following [`docs/STYLE_GUIDE.md`](./docs/STYLE_GUIDE.md).
4. **🎨 Theme-Adaptive SVGs & Phase-2 Interactive Sandboxes (几何图解与交互可视化)**
   - Refine static mathematical SVGs or implement interactive React/SVG widgets for `<InteractiveCanvasSlot>` placeholders (see [`docs/SVG_AND_DIAGRAMS.md`](./docs/SVG_AND_DIAGRAMS.md)).

---

## 🚨 Non-Negotiable Content Guardrails (内容铁律与红线)

Before authoring or editing any `.mdx` file in `content/`, please internalize these three rules:

1. **Keep Core Linear Algebra 100% Pure**:
   - **NEVER** insert AI/Deep Learning buzzwords into core lecture explanations or core problem sets.
   - **NEVER** insert Python/NumPy/PyTorch code blocks into core lecture explanations or core problem sets.
2. **Isolate Frontier AI Readings Strictly at the Bottom**:
   - Frontier AI bridges (Transformers, Diffusion, LoRA, RoPE, SSM/Mamba) belong **exclusively** inside `<FrontierAIReading>` at the very end of the 15 designated high-isomorphism lectures—never forced onto unrelated lectures.
3. **Follow Rigor & Notation Standards**:
   - Read [`docs/STYLE_GUIDE.md`](./docs/STYLE_GUIDE.md) for `\operatorname{Col}(A)`, `\mathbf{x}`, explicit matrix shapes, and our standard Chinese-English mathematical glossary.

---

## 🛠️ Local Development Setup (本地开发环境启动)

### Prerequisites
- **Node.js** `>= 20` (v22 LTS recommended)
- **pnpm** `>= 9`

### Quick Start

```bash
# 1. Fork and clone the repository
git clone https://github.com/<your-username>/18.06-linear-algebra.git
cd 18.06-linear-algebra

# 2. Install dependencies
pnpm install

# 3. Start local development server (http://localhost:3000)
pnpm dev

# 4. Run TypeScript & static KaTeX/MDX build check before submitting a PR
pnpm typecheck && pnpm build
```

---

## 🔄 Pull Request Workflow

1. Create a descriptive topic branch from `main` (e.g., `fix/l03-block-mult-condition`, `feat/zh-lecture-02`, `i18n/en-lecture-03`).
2. Make focused changes and verify both **Light** and **Dark** themes in the browser (`http://localhost:3000`).
3. Ensure `pnpm typecheck && pnpm build` passes with **zero** errors or broken KaTeX syntax.
4. Open a Pull Request and complete the checklist in `.github/PULL_REQUEST_TEMPLATE.md`.

By contributing to this repository, you agree that your code contributions will be licensed under the **MIT License** and your educational content/diagram contributions under **CC BY-SA 4.0** (see [`LICENSE`](./LICENSE)).
