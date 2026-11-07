# Mathematical Style, Rigor & Terminology Guide (`STYLE_GUIDE.md`)

To prevent the mathematical sloppiness, missing hypotheses, and notation drift common in informal lecture transcripts, every file in `content/` MUST adhere to the standards below.

---

## 1. Pedagogical Three-Tier Flow (单讲三层递进准则)

Every core concept in a lecture follows Gilbert Strang's intuition-first spirit while elevating precision to textbook rigor (*Introduction to Linear Algebra*, 5th/6th Ed.):

1. **Tier 1 — Geometric & Column-Picture Intuition**: Start with concrete $2\times 2$ or $3\times 2$ integer matrices and crisp theme-adaptive SVG diagrams so the learner *sees* the subspace geometry before parsing quantifiers.
2. **Tier 2 — Formal Definition & Theorem Cards**: Immediately anchor intuition inside `<DefinitionCard>` and `<TheoremCard>`, stating **every** hypothesis explicitly:
   - **Matrix shape**: $A \in \mathbb{R}^{m\times n}$ vs. square $A \in \mathbb{R}^{n\times n}$
   - **Field**: Real $\mathbb{R}$ vs. Complex $\mathbb{C}$ (crucial for inner products, orthogonality, spectral theorem, and positive definiteness!)
   - **Logical direction**: Clearly distinguish one-way implication ($\implies$) from equivalence ($\iff$)
   - Place lengthy algebraic proofs inside `<ProofCollapse>` so readers can digest the theorem statement first and expand the proof at will.
3. **Tier 3 — Common Pitfalls & Transcript Errata (`<PitfallAlert>`)**: Explicitly call out classic misconceptions (e.g., *"Row operations preserve $\operatorname{Row}(A)$ and $\operatorname{Null}(A)$, but **change** $\operatorname{Col}(A)$!"*, *"Positive eigenvalues alone do NOT imply positive definiteness unless $A$ is symmetric!"*).

---

## 2. Canonical LaTeX Notation Conventions (全站统一数学记号)

| Mathematical Object | Notation Standard | LaTeX Syntax | Notes |
| :--- | :---: | :--- | :--- |
| Scalars | Lowercase italic | $\alpha, \beta, c_1, \lambda_i$ | Specify $\in \mathbb{R}$ or $\in \mathbb{C}$ |
| Column vectors | Bold lowercase upright | $\mathbf{x}, \mathbf{b}, \mathbf{u}, \mathbf{v}, \mathbf{q}_i$ | Write `\mathbf{x}` (default column vector $\in \mathbb{R}^n$) |
| Zero vector | Bold zero | $\mathbf{0}$ | `\mathbf{0}` (distinguish from scalar $0$) |
| Matrices | Uppercase italic | $A, E, L, U, P, Q, S, \Sigma$ | Explicitly declare $A \in \mathbb{R}^{m\times n}$ |
| Identity matrix | Uppercase $I$ or $I_n$ | $I, I_n$ | Use $I_n$ when dimensions of $A \in \mathbb{R}^{m\times n}$ differ |
| Transpose / Hermitian | Superscript $T$ / $H$ | $A^T, \mathbf{x}^T \mathbf{y}, A^H$ | Use `^T` over `\mathbb{R}`, `^H` (conjugate transpose) over `\mathbb{C}` |
| Pseudo-inverse | Superscript $+$ | $A^+$ | Moore-Penrose pseudoinverse |
| Column Space | Operator `\operatorname{Col}` | $\operatorname{Col}(A)$ | Also mention Strang's $C(A)$ notation on first introduction |
| Nullspace | Operator `\operatorname{Null}` | $\operatorname{Null}(A)$ | Also mention Strang's $N(A)$ notation |
| Row Space | Operator `\operatorname{Row}` | $\operatorname{Row}(A) = \operatorname{Col}(A^T)$ | Subspace of $\mathbb{R}^n$ |
| Left Nullspace | Operator $\operatorname{Null}(A^T)$ | $\operatorname{Null}(A^T)$ | Subspace of $\mathbb{R}^m$ |
| Rank / Trace / Det | Upright operators | $\operatorname{rank}(A), \operatorname{tr}(A), \det(A)$ | Never italicize multi-letter operators (`rank(A)` is forbidden) |

---

## 3. Strict Content Separation Rules (红线边界)

1. **Zero Code in Core Sections**: Never insert Python, NumPy, MATLAB, or PyTorch code into core lecture prose or core intuition exercises.
2. **Zero Forced AI Jargon in Core Sections**: Keep core MIT 18.06 exposition timeless and mathematically self-contained.
3. **Isolated `<FrontierAIReading>`**: Frontier AI connections (Transformer Attention, LoRA, RoPE, Diffusion Markov kernels / SDEs, SSM/Mamba) appear **only** inside `<FrontierAIReading>` at the bottom of the 15 designated high-isomorphism lectures, with optional PyTorch dimension-verification snippets collapsed inside `<CollapsibleCode>`.

---

## 4. Bilingual Terminology Glossary (中英标准术语对照表)

In Chinese (`/zh/`) lectures, **always append the standard English term in parentheses upon its first appearance in a lecture**.

| 中文标准译名 | Standard English Term | Common Misleading / Informal Phrasing to Avoid |
| :--- | :--- | :--- |
| 行图像 / 列图像 | Row Picture / Column Picture | 行视图（不统一） |
| 线性组合 | Linear Combination | — |
| 张成空间 / 生成子空间 | Span | 扩张空间 |
| 主元 / 主变量 / 自由变量 | Pivot / Pivot Variable / Free Variable | 轴元 |
| 初等消元矩阵 | Elementary Elimination Matrix ($E_{ij}$) | — |
| 置换矩阵 | Permutation Matrix ($P$) | 交换矩阵（仅指单次行交换） |
| 行阶梯形 / 简化行阶梯形 | Row Echelon Form / Reduced Row Echelon Form (RREF) | 行最简形（首次出现须标明 RREF） |
| 列空间 / 零空间 | Column Space / Nullspace | 核空间（可附注 Kernel，但主线统一用零空间） |
| 行空间 / 左零空间 | Row Space / Left Nullspace | — |
| 四个基本子空间 | The Four Fundamental Subspaces | — |
| 秩 1 矩阵 | Rank-One Matrix ($\mathbf{u}\mathbf{v}^T$) | — |
| 正交补 | Orthogonal Complement ($V^\perp$) | 垂直子空间（子空间关系必须用“正交补”而非仅“正交”） |
| 投影矩阵 | Projection Matrix ($P = A(A^TA)^{-1}A^T$) | — |
| 正规方程组 | Normal Equations ($A^T A \hat{\mathbf{x}} = A^T \mathbf{b}$) | 标准方程（易与微分方程混淆） |
| 标准正交基 / 正交矩阵 | Orthonormal Basis / Orthogonal Matrix ($Q$) | 注意区分“正交向量组 (Orthogonal)”与“标准正交组 (Orthonormal)”！ |
| 代数重数 / 几何重数 | Algebraic Multiplicity / Geometric Multiplicity | — |
| 实对称矩阵 / 正定矩阵 | Real Symmetric Matrix / Positive Definite Matrix (SPD) | 务必强调对称前提！ |
| 奇异值分解 | Singular Value Decomposition (SVD) | — |
| Moore-Penrose 伪逆 | Moore-Penrose Pseudoinverse ($A^+$) | 广义逆（伪逆特指满足四条 Penrose 条件的唯一 $A^+$） |
