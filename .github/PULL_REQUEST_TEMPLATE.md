## Summary / 变更概述

<!-- Briefly describe what this PR adds, fixes, or improves / 简要说明本次 PR 新增、修正或优化的内容 -->

- **Related Issue(s)**: Closes #
- **Affected Session(s) / Pages**: <!-- e.g., `zh/03`, `en/01`, `src/components/exercises` -->

---

## Rigor & Architecture Checklist / 严谨性与架构自检清单

Please verify all applicable items before requesting review / 提交审阅前请逐项确认：

- [ ] **Mainline Purity (主线纯粹性)**: Core lecture exposition and problem sets contain **100% pure mathematics & geometric intuition** — zero programming code and zero forced AI buzzwords mixed into core sections.
- [ ] **Frontier AI Isolation (AI 选读物理隔离)**: Any AI/Transformer/Diffusion content lives strictly inside `<FrontierAIReading>` at the very bottom of the lecture and represents a genuine mathematical isomorphism.
- [ ] **Mathematical Precision (教材级严谨度)**: All `<DefinitionCard>` and `<TheoremCard>` blocks explicitly state matrix dimensions ($A \in \mathbb{R}^{m\times n}$ vs. $\mathbb{R}^{n\times n}$), base field ($\mathbb{R}$ vs. $\mathbb{C}$), rank/invertibility assumptions, and distinguish $\implies$ from $\iff$.
- [ ] **Notation & Glossary Alignment (符号与术语统一)**: Follows [`docs/STYLE_GUIDE.md`](../docs/STYLE_GUIDE.md); Chinese text includes standard English mathematical terms in parentheses upon first mention.
- [ ] **Theme-Adaptive Visuals (深浅色模式兼容)**: Any added/modified SVG diagrams render legibly in both **Light** and **Dark** themes.
- [ ] **Build Verification (本地静态构建通过)**: `pnpm typecheck && pnpm build` succeeds locally with zero TypeScript or KaTeX compilation errors.
