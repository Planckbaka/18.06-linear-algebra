<div align="center">

# MIT 18.06 线性代数：几何直觉、教材级严谨推导与前沿 AI 视野

**致敬 Gilbert Strang 教授 MIT 18.06 经典课程的开源双语学习站（React + shadcn/ui + Tailwind CSS + KaTeX）**

[![在线阅读站点](https://img.shields.io/badge/在线阅读-GitHub_Pages-2563eb?style=for-the-badge&logo=github)](https://planckbaka.github.io/18.06-linear-algebra/)
[![CI 构建状态](https://img.shields.io/github/actions/workflow/status/Planckbaka/18.06-linear-algebra/ci.yml?branch=main&style=for-the-badge&label=Build%20%26%20KaTeX)](https://github.com/Planckbaka/18.06-linear-algebra/actions)
[![代码协议: MIT](https://img.shields.io/badge/Code-MIT-10b981?style=for-the-badge)](./LICENSE)
[![内容协议: CC BY-SA 4.0](https://img.shields.io/badge/Content-CC_BY--SA_4.0-f59e0b?style=for-the-badge)](./LICENSE)

[**English (`README.md`)**](./README.md) · [**🌐 在线学习站点**](https://planckbaka.github.io/18.06-linear-algebra/) · [**📐 数学符号与术语规范**](./docs/STYLE_GUIDE.md) · [**🤝 参与贡献指南**](./CONTRIBUTING.md)

</div>

---

## ✨ 为什么要重新构建一套 MIT 18.06 学习笔记？

网络上早期流传的 MIT 18.06 中文听课记录大多直接整理自课堂口述，普遍存在**遗漏矩阵维度/满秩/实对称前提、混淆充分与充要条件、公式排版错漏、缺少几何配图与直觉训练题**等痛点；而纯粹公理化的高等代数教材又容易掩盖 Gilbert Strang 教授最精髓的**“列视角与四个基本子空间”几何直觉**。

本项目确立了四条严格的设计准则：

1. **🎯 三层递进正文（几何直觉先行 $\to$ 教材级严密定理框 $\to$ 网传误区勘误）**
   每讲先从 $2\times 2$ / $3\times 2$ 具体矩阵与自适应深浅色主题的**静态数学 SVG 几何图**切入；随后用 `<DefinitionCard>` 与 `<TheoremCard>` 严格锁定矩阵形状（$A \in \mathbb{R}^{m\times n}$）、数域与充要条件（对齐 *Introduction to Linear Algebra* 第 5/6 版）；最后通过 `<PitfallAlert>` 专门纠正常见直觉陷阱。
2. **🧠 “少算多想”的分级直觉练习题（每讲 4–6 题）**
   拒绝枯燥的 $4\times 4$ 机械死算！每讲配备交互式 **True / False 概念辨析（引导构造极简 $2\times 2$ 反例）**、**无计算子空间推理题**以及 **MIT 18.06 考题级综合挑战**，均附带**阶梯式提示（Progressive Hints）**与**「几何直觉秒杀 + 严格代数证明」双解析**。
3. **🔬 严格物理隔离的「课后前沿 AI 选读」（宁缺毋滥，15 篇深度同构专题）**
   **主线正文与核心习题保持 100% 纯粹数学推导（零代码干扰、零强插 AI 概念）**。仅在与现代大模型/生成模型存在严密数学同构的 **15 个关键节点**，于页面最底部的独立选读区挂载深度解析——打通从矩阵分块乘法、零空间仿射解、秩 1 分解、正交变换、马尔可夫/常微分方程与 SVD 到 **Transformer Attention ($QK^TV$)、FlashAttention、AlphaEdit 零空间编辑、LoRA、RoPE、Diffusion 扩散模型与 Mamba/SSM** 的完整数学桥梁。
4. **⚡ 现代化双语阅读体验（Next.js 静态导出 + shadcn/ui + Tailwind CSS + KaTeX）**
   构建期静态预渲染 KaTeX 公式、双编号对齐（彻底解决 MIT OCW `24b` 导致的国内外第 25–35 集错位问题）、浏览器本地学习进度记录，并在核心几何节点预留二期 `<InteractiveCanvasSlot>` 交互式线性变换沙盒插槽。

---

## 🗺️ 全课程双编号进度看板（MIT OCW 1–34 $\leftrightarrow$ 国内公开课 P01–P35）

### 模块一：线性方程组 $Ax=b$ 与四个基本子空间（全 13 讲中文版 100% 已上线 ✅）
| 站内序号 | OCW 编号 | 国内集数 | 讲次主题 | 中文版 (`zh`) | 英文版 (`en`) | 课后前沿 AI 选读（底部物理隔离） |
| :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| **01** | L01 | P01 | 方程组的几何解释（行图像 vs 列图像） | ✅ 已上线 | ✅ 已上线 | — |
| **02** | L02 | P02 | 矩阵消元（初等消元矩阵 $E_{ij}$ 与主元） | ✅ 已上线 | 🗓️ 规划中 | — |
| **03** | L03 | P03 | 矩阵乘法（五种视角）与逆矩阵 | ✅ 已上线 | 🗓️ 规划中 | **[AI-01]** Transformer 自注意力 $QK^TV$ 四种矩阵视角、分块 FlashAttention 与 KV Cache |
| **04** | L04 | P04 | $A$ 的 $LU$ 分解 | ✅ 已上线 | 🗓️ 规划中 | — |
| **05** | L05 | P05 | 转置、置换与向量空间 $\mathbb{R}^n$ | ✅ 已上线 | 🗓️ 规划中 | — |
| **06** | L06 | P06 | 列空间与零空间 | ✅ 已上线 | 🗓️ 规划中 | **[AI-02]** 过参数化线性层、高维激活流形与线性探针（Linear Probing） |
| **07** | L07 | P07 | 求解 $Ax=\mathbf{0}$：主变量、特解与 RREF $R$ | ✅ 已上线 | 🗓️ 规划中 | — |
| **08** | L08 | P08 | 求解 $Ax=\mathbf{b}$：可解性与解的结构 $x_p + x_n$ | ✅ 已上线 | 🗓️ 规划中 | **[AI-03]** 大模型零空间知识编辑（AlphaEdit）：如何做到修改新知识而不伤旧记忆 |
| **09** | L09 | P09 | 线性相关性、基与维数 | ✅ 已上线 | 🗓️ 规划中 | — |
| **10** | L10 | P10 | 四个基本子空间 | ✅ 已上线 | 🗓️ 规划中 | — |
| **11** | L11 | P11 | 矩阵空间、秩 1 矩阵 $\mathbf{u}\mathbf{v}^T$ 与小世界图 | ✅ 已上线 | 🗓️ 规划中 | **[AI-04]** LoRA 低秩微调核心数学原理：$\Delta W = BA = \sum_{i=1}^r \mathbf{b}_i\mathbf{a}_i^T$ |
| **12** | L12 | P12 | 图、网络与关联矩阵 | ✅ 已上线 | 🗓️ 规划中 | **[AI-05]** 图神经网络（GNN）消息传递与关联矩阵/图拉普拉斯算子 |
| **13** | L13 | P13 | 模块一全局复盘（复习一） | ✅ 已上线 | 🗓️ 规划中 | — |

### 模块二：正交性、子空间投影与最小二乘
| 站内序号 | OCW 编号 | 国内集数 | 讲次主题 | 中文版 (`zh`) | 英文版 (`en`) | 课后前沿 AI 选读（底部物理隔离） |
| :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| **14** | L14 | P14 | 正交向量与正交子空间（$\operatorname{Row}(A) \perp \operatorname{Null}(A)$） | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **15** | L15 | P15 | 子空间投影（$P = A(A^TA)^{-1}A^T$） | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-06]** 表征工程与概念擦除：利用正交补投影 $I-P$ 消除隐空间特定语义方向 |
| **16** | L16 | P16 | 投影矩阵与最小二乘（正规方程 $A^TA\hat{\mathbf{x}}=A^T\mathbf{b}$） | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **17** | L17 | P17 | 正交矩阵与 Gram-Schmidt 正交化（$A=QR$） | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-07]** RoPE（旋转位置编码）的保长正交旋转结构与深层网络正交初始化 |

### 模块三：行列式、特征值与动态系统演化
| 站内序号 | OCW 编号 | 国内集数 | 讲次主题 | 中文版 (`zh`) | 英文版 (`en`) | 课后前沿 AI 选读（底部物理隔离） |
| :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| **18** | L18 | P18 | 行列式及其三大公理性质 | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **19** | L19 | P19 | 行列式公式与代数余子式 | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **20** | L20 | P20 | 克拉默法则、逆矩阵与有向体积 | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-08]** 归一化流（Normalizing Flows）与 Flow Matching 中的雅可比体积 $\lvert\det J\rvert$ |
| **21** | L21 | P21 | 特征值与特征向量（迹与行列式不变量） | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **22** | L22 | P22 | 对角化与矩阵的幂 $A^k$（$A=S\Lambda S^{-1}$） | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-09]** 谱半径 $\lvert\lambda_{\max}\rvert$、深层梯度爆炸/消失边界与谱归一化（Spectral Norm） |
| **23** | L23 | P23 | 常微分方程组与矩阵指数 $e^{At}$ | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-10]** 结构化状态空间模型（SSM / HiPPO / Mamba）与零阶保持离散化 $\bar{A}=e^{\Delta A}$ |
| **24** | L24 | P24 | 马尔可夫矩阵与傅里叶级数 | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-11]** 扩散模型（DDPM / 离散扩散 D3PM）前向马尔可夫加噪转移核与稳态噪声收敛 |
| **25** | L24b | P25 | 模块二/三全局复盘（复习二） | 🗓️ 规划中 | 🗓️ 规划中 | — |

### 模块四：正定矩阵、奇异值分解（SVD）与线性变换
| 站内序号 | OCW 编号 | 国内集数 | 讲次主题 | 中文版 (`zh`) | 英文版 (`en`) | 课后前沿 AI 选读（底部物理隔离） |
| :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| **26** | L25 | P26 | 实对称矩阵与谱定理（$A=Q\Lambda Q^T$） | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **27** | L26 | P27 | 复数矩阵与快速傅里叶变换（FFT） | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **28** | L27 | P28 | 正定矩阵与极小值（$\mathbf{x}^TA\mathbf{x} > 0$） | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-12]** 扩散模型多元高斯噪声协方差椭球几何、损失景观 Hessian 与自然梯度 Fisher 矩阵 |
| **29** | L28 | P29 | 相似矩阵与 Jordan 标准形 | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **30** | L29 | P30 | 奇异值分解（SVD：$A=U\Sigma V^T$） | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-13]** 大模型权重奇异值谱、Eckart-Young 最优低秩近似与 $W_Q^TW_K$ 低秩瓶颈 |
| **31** | L30 | P31 | 线性变换及其对应矩阵 | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **32** | L31 | P32 | 基变换与图像压缩 | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-14]** 生成模型中的潜空间（Latent Space）基变换：从正交小波/DCT 到 Latent Diffusion |
| **33** | L32 | P33 | 模块四阶段复盘（复习三） | 🗓️ 规划中 | 🗓️ 规划中 | — |
| **34** | L33 | P34 | 左右逆与 Moore-Penrose 伪逆 $A^+$ | 🗓️ 规划中 | 🗓️ 规划中 | **[AI-15]** 过参数化梯度下降的隐式偏置（Implicit Bias）与最小范数伪逆解 $A^+\mathbf{b}$ |
| **35** | L34 | P35 | 全课程期末总串讲（四个子空间 × 四大矩阵分解终极全景） | 🗓️ 规划中 | 🗓️ 规划中 | — |

---

## 🛠️ 本地运行与构建验证

```bash
git clone https://github.com/Planckbaka/18.06-linear-algebra.git
cd 18.06-linear-algebra
pnpm install
pnpm dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000) 即可预览。提交代码或讲义前请执行静态导出校验：

```bash
pnpm typecheck && pnpm build
```

---

## 🤝 参与共建

非常欢迎提交**数学严谨性勘误**、**直觉好题/反例投稿**、**英文版翻译**或**SVG/二期交互可视化组件**！请在发起 PR 前阅读 [**`CONTRIBUTING.md`**](./CONTRIBUTING.md) 与 [**`docs/STYLE_GUIDE.md`**](./docs/STYLE_GUIDE.md)。

---

## 📜 开源协议与致谢

- **软件源码（`src/` 与工程配置）**：采用 [MIT License](./LICENSE)
- **原创讲义、几何 SVG 与直觉习题（`content/`）**：采用 [CC BY-SA 4.0 国际许可协议](./LICENSE)
- 谨以此项目向 **Gilbert Strang** 教授及其经典的 [MIT 18.06 OpenCourseWare](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) 课程致敬。
