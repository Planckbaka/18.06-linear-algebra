<div align="center">

# MIT 18.06 Linear Algebra: Intuition, Rigor & Frontier AI Bridges

**An open-source, bilingual interactive-ready study companion to Prof. Gilbert Strang's MIT 18.06 Linear Algebra**

[![Online Study Site](https://img.shields.io/badge/Read_Online-GitHub_Pages-2563eb?style=for-the-badge&logo=github)](https://planckbaka.github.io/18.06-linear-algebra/)
[![CI Status](https://img.shields.io/github/actions/workflow/status/Planckbaka/18.06-linear-algebra/ci.yml?branch=main&style=for-the-badge&label=Build%20%26%20KaTeX)](https://github.com/Planckbaka/18.06-linear-algebra/actions)
[![Code License: MIT](https://img.shields.io/badge/Code-MIT-10b981?style=for-the-badge)](./LICENSE)
[![Content License: CC BY-SA 4.0](https://img.shields.io/badge/Content-CC_BY--SA_4.0-f59e0b?style=for-the-badge)](./LICENSE)

[**简体中文文档 (`README.zh-CN.md`)**](./README.zh-CN.md) · [**🌐 Live Website**](https://planckbaka.github.io/18.06-linear-algebra/) · [**📐 Math Style Guide**](./docs/STYLE_GUIDE.md) · [**🤝 Contributing**](./CONTRIBUTING.md)

</div>

---

## ✨ Why Another MIT 18.06 Note Repository?

Informal community transcripts of MIT 18.06 often suffer from missing matrix dimension/rank assumptions, conflated necessary vs. sufficient conditions, formula typos, and a complete lack of conceptual exercises. Conversely, purely axiomatic algebra texts strip away Gilbert Strang's signature **column-space and geometric intuition**.

This project bridges both worlds with four strict design pillars:

1. **🎯 Three-Tier Exposition (Intuition $\to$ Textbook Rigor $\to$ Errata Pitfalls)**
   Every lecture begins with concrete $2\times 2$ / $3\times 2$ column-picture intuition and theme-adaptive mathematical **SVG diagrams**, immediately locks precision inside formal `<DefinitionCard>` and `<TheoremCard>` blocks (aligned with Strang's *Introduction to Linear Algebra*, 5th/6th Ed.), and highlights classic misconceptions via `<PitfallAlert>`.
2. **🧠 Intuition-First Problem Sets (Zero Mechanical Crunching)**
   Each lecture features **4–6 curated tiered problems**: interactive `True / False` conceptual traps (requiring minimal $2\times 2$ counterexamples), zero-calculation subspace reasoning, and MIT 18.06 exam-level challenges—complete with **progressive hints** and **Geometric + Algebraic dual solutions**.
3. **🔬 Strictly Isolated Post-Lecture Frontier AI Bridges**
   Core linear algebra prose and exercises remain **100% pure mathematics** (zero code clutter, zero forced buzzwords). At **15 mathematically isomorphic milestones**, an isolated `<FrontierAIReading>` section at the bottom connects subspaces, projections, eigenvalues, Markov matrices, and SVD directly to **Transformer Attention ($QK^TV$), LoRA, AlphaEdit Nullspace Editing, RoPE, Diffusion Models (DDPM / Score SDEs), and Mamba/SSMs**.
4. **⚡ Modern Bilingual Web Stack (`React 19` + `Next.js` + `shadcn/ui` + `Tailwind CSS` + `KaTeX`)**
   Pre-rendered build-time KaTeX math, Light/Dark adaptive SVG geometry, local-storage progress & exercise tracking, and pre-wired `<InteractiveCanvasSlot>` hooks for Phase-2 interactive linear transformation sandboxes.

---

## 🗺️ Curriculum & Progress Matrix (Dual-Numbered: MIT OCW $\leftrightarrow$ OpenCourse P01–P35)

> **Note on Video Numbering**: MIT OCW labels Quiz 2 Review as `Lecture 24b` (35 videos numbered `1–34`), whereas popular video mirrors number it sequentially as Episode `25` (`P01–P35`). Every session below displays **both** identifiers to eliminate cross-referencing confusion.

### Module I: $Ax = b$ and the Four Fundamental Subspaces
| Session | OCW # | Video P# | Topic | `zh` Status | `en` Status | Isolated Frontier AI Reading |
| :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| **01** | L01 | P01 | The Geometry of Linear Equations (Row vs. Column Picture) | ✅ Live | ✅ Live | — |
| **02** | L02 | P02 | Elimination with Matrices ($E_{ij}$ & Pivots) | ✅ Live | 🗓️ Planned | — |
| **03** | L03 | P03 | Multiplication (5 Views) and Inverse Matrices | ✅ Live | 🗓️ Planned | **[AI-01]** Transformer Attention $QK^TV$, Block FlashAttention & KV Cache |
| **04** | L04 | P04 | Factorization into $A = LU$ | ✅ Live | 🗓️ Planned | — |
| **05** | L05 | P05 | Transposes, Permutations, Spaces $\mathbb{R}^n$ | ✅ Live | 🗓️ Planned | — |
| **06** | L06 | P06 | Column Space and Nullspace | ✅ Live | 🗓️ Planned | **[AI-02]** Overparameterized Layers, Activation Manifolds & Linear Probing |
| **07** | L07 | P07 | Solving $Ax = \mathbf{0}$: Pivot Variables, Special Solutions ($R$) | ✅ Live | 🗓️ Planned | — |
| **08** | L08 | P08 | Solving $Ax = \mathbf{b}$: Row Reduced Form $R$ ($x_p + x_n$) | ✅ Live | 🗓️ Planned | **[AI-03]** Nullspace Knowledge Editing in LLMs (AlphaEdit) |
| **09** | L09 | P09 | Independence, Basis, and Dimension | ✅ Live | 🗓️ Planned | — |
| **10** | L10 | P10 | The Four Fundamental Subspaces | ✅ Live | 🗓️ Planned | — |
| **11** | L11 | P11 | Matrix Spaces; Rank 1 ($\mathbf{u}\mathbf{v}^T$); Small World Graphs | ✅ Live | 🗓️ Planned | **[AI-04]** LoRA ($\Delta W = BA = \sum \mathbf{b}_i\mathbf{a}_i^T$) Low-Rank Subspace Adaptation |
| **12** | L12 | P12 | Graphs, Networks, Incidence Matrices | 🗓️ Planned | 🗓️ Planned | **[AI-05]** Graph Neural Networks (GNNs) & Incidence/Laplacian Operators |
| **13** | L13 | P13 | Quiz 1 Review (Module I Synthesis) | 🗓️ Planned | 🗓️ Planned | — |

### Module II: Orthogonality, Projections & Least Squares
| Session | OCW # | Video P# | Topic | `zh` Status | `en` Status | Isolated Frontier AI Reading |
| :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| **14** | L14 | P14 | Orthogonal Vectors and Subspaces ($\operatorname{Row}(A) \perp \operatorname{Null}(A)$) | 🗓️ Planned | 🗓️ Planned | — |
| **15** | L15 | P15 | Projections onto Subspaces ($P = A(A^TA)^{-1}A^T$) | 🗓️ Planned | 🗓️ Planned | **[AI-06]** Representation Engineering & Concept Erasure via $I - P$ |
| **16** | L16 | P16 | Projection Matrices and Least Squares ($A^TA\hat{\mathbf{x}} = A^T\mathbf{b}$) | 🗓️ Planned | 🗓️ Planned | — |
| **17** | L17 | P17 | Orthogonal Matrices and Gram-Schmidt ($A = QR$) | 🗓️ Planned | 🗓️ Planned | **[AI-07]** RoPE (Rotary Position Embedding) & Norm-Preserving Orthogonal Init |

### Module III: Determinants, Eigenvalues & Dynamical Systems
| Session | OCW # | Video P# | Topic | `zh` Status | `en` Status | Isolated Frontier AI Reading |
| :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| **18** | L18 | P18 | Properties of Determinants | 🗓️ Planned | 🗓️ Planned | — |
| **19** | L19 | P19 | Determinant Formulas and Cofactors | 🗓️ Planned | 🗓️ Planned | — |
| **20** | L20 | P20 | Cramer's Rule, Inverse Matrix, and Oriented Volume | 🗓️ Planned | 🗓️ Planned | **[AI-08]** Normalizing Flows & Flow Matching: Jacobian Volume $\lvert\det J\rvert$ |
| **21** | L21 | P21 | Eigenvalues and Eigenvectors ($\operatorname{tr}(A)$ & $\det(A)$) | 🗓️ Planned | 🗓️ Planned | — |
| **22** | L22 | P22 | Diagonalization and Powers of $A$ ($A = S\Lambda S^{-1}$) | 🗓️ Planned | 🗓️ Planned | **[AI-09]** Spectral Radius $\lvert\lambda_{\max}\rvert$, Gradient Stability & Spectral Norm |
| **23** | L23 | P23 | Differential Equations and $\exp(At)$ | 🗓️ Planned | 🗓️ Planned | **[AI-10]** Structured State Space Models (SSM / HiPPO / Mamba) & $\bar{A} = e^{\Delta A}$ |
| **24** | L24 | P24 | Markov Matrices; Fourier Series | 🗓️ Planned | 🗓️ Planned | **[AI-11]** Diffusion Forward Markov Chains (DDPM / D3PM) & Stationary Noise |
| **25** | L24b | P25 | Quiz 2 Review (Modules II & III Synthesis) | 🗓️ Planned | 🗓️ Planned | — |

### Module IV: Positive Definite Matrices, SVD & Linear Transformations
| Session | OCW # | Video P# | Topic | `zh` Status | `en` Status | Isolated Frontier AI Reading |
| :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| **26** | L25 | P26 | Symmetric Matrices and Positive Definiteness ($A = Q\Lambda Q^T$) | 🗓️ Planned | 🗓️ Planned | — |
| **27** | L26 | P27 | Complex Matrices; Fast Fourier Transform (FFT) | 🗓️ Planned | 🗓️ Planned | — |
| **28** | L27 | P28 | Positive Definite Matrices and Minima ($\mathbf{x}^TA\mathbf{x} > 0$) | 🗓️ Planned | 🗓️ Planned | **[AI-12]** Diffusion Gaussian Noise Covariance Ellipsoids, Hessian & Fisher Info |
| **29** | L28 | P29 | Similar Matrices and Jordan Form | 🗓️ Planned | 🗓️ Planned | — |
| **30** | L29 | P30 | Singular Value Decomposition ($A = U\Sigma V^T$) | 🗓️ Planned | 🗓️ Planned | **[AI-13]** Weight Spectrum, Eckart-Young Low-Rank Approx & $W_Q^TW_K$ Bottleneck |
| **31** | L30 | P31 | Linear Transformations and Their Matrices | 🗓️ Planned | 🗓️ Planned | — |
| **32** | L31 | P32 | Change of Basis; Image Compression | 🗓️ Planned | 🗓️ Planned | **[AI-14]** Latent Space Basis Transforms: From Wavelets/DCT to Latent Diffusion |
| **33** | L32 | P33 | Quiz 3 Review (Module IV Synthesis) | 🗓️ Planned | 🗓️ Planned | — |
| **34** | L33 | P34 | Left and Right Inverses; Pseudoinverse ($A^+$) | 🗓️ Planned | 🗓️ Planned | **[AI-15]** Implicit Bias of Gradient Descent & Minimum-Norm Solution $A^+\mathbf{b}$ |
| **35** | L34 | P35 | Final Course Review (The Grand Picture of Linear Algebra) | 🗓️ Planned | 🗓️ Planned | — |

---

## 🚀 Quick Start (Run Locally)

```bash
git clone https://github.com/Planckbaka/18.06-linear-algebra.git
cd 18.06-linear-algebra
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. To verify production static export:

```bash
pnpm typecheck && pnpm build
```

---

## 🤝 Contributing

Contributions of mathematical errata fixes, intuition-building exercises, English translations, and SVG/interactive diagrams are warmly welcome! Please read [**`CONTRIBUTING.md`**](./CONTRIBUTING.md) and [**`docs/STYLE_GUIDE.md`**](./docs/STYLE_GUIDE.md) before submitting a Pull Request.

---

## 📜 License & Acknowledgements

- **Code (`src/`, configs)**: [MIT License](./LICENSE)
- **Content (`content/`, diagrams, exercises)**: [CC BY-SA 4.0](./LICENSE)
- Inspired by **Prof. Gilbert Strang**'s timeless [MIT 18.06 OpenCourseWare](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) lectures and *Introduction to Linear Algebra*.
