import fs from 'node:fs/promises';
import path from 'node:path';
import * as React from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';

import { getModuleById, type LectureSession } from '@/lib/curriculum';
import type { Locale } from '@/lib/i18n';
import {
  DefinitionCard,
  TheoremCard,
  ProofCollapse,
  PitfallAlert,
  KeyTakeaways,
} from '@/components/math/math-cards';
import {
  MathDiagram,
  InteractiveCanvasSlot,
} from '@/components/diagrams/math-diagram';
import {
  RowVsColumn2DDiagram,
  SingularColumn2DDiagram,
} from '@/components/diagrams/lecture-01-diagrams';
import { EliminationPipelineDiagram } from '@/components/diagrams/lecture-02-diagrams';
import { MatrixMultFiveViewsDiagram } from '@/components/diagrams/lecture-03-diagrams';
import {
  LUMultiplierNoFillDiagram,
  LUComplexityPyramidDiagram,
} from '@/components/diagrams/lecture-04-diagrams';
import { SubspacesOfR2AndImpostorsDiagram } from '@/components/diagrams/lecture-05-diagrams';
import { ColSpaceVsNullspaceAmbientDiagram } from '@/components/diagrams/lecture-06-diagrams';
import { RrefNullspaceBlockDiagram } from '@/components/diagrams/lecture-07-diagrams';
import { AffineSolutionAndFourRankCasesDiagram } from '@/components/diagrams/lecture-08-diagrams';
import { BasisGoldilocksDiagram } from '@/components/diagrams/lecture-09-diagrams';
import { FourSubspacesBigPictureDiagram } from '@/components/diagrams/lecture-10-diagrams';
import { MatrixSubspacesAndRank1BlocksDiagram } from '@/components/diagrams/lecture-11-diagrams';
import { DirectedGraphIncidenceDiagram } from '@/components/diagrams/lecture-12-diagrams';
import { Module1SynthesisMapDiagram } from '@/components/diagrams/lecture-13-diagrams';
import {
  OrthogonalFourSubspacesCrossDiagram,
  SubspaceOrthogonalityContrastDiagram,
} from '@/components/diagrams/lecture-14-diagrams';
import {
  LineAndSubspaceProjectionDiagram,
  ProjectionComplementarySplitDiagram,
} from '@/components/diagrams/lecture-15-diagrams';
import {
  LeastSquaresDualGeometryDiagram,
  OrthogonalDecompositionPythagorasDiagram,
} from '@/components/diagrams/lecture-16-diagrams';
import {
  GramSchmidtAndQRDiagram,
  OrthonormalProjectionDiagram,
} from '@/components/diagrams/lecture-17-diagrams';
import {
  ProblemSet,
  ExerciseCard,
  TrueFalseInteractive,
  ProgressiveHint,
  DualSolution,
  SolutionIntuition,
  SolutionRigorous,
} from '@/components/exercises/exercise-components';
import {
  FrontierAIReading,
  CollapsibleCode,
} from '@/components/ai-bridge/frontier-ai-reading';

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

function extractNodePlainText(node: HastNode): string {
  if (node.type === 'text') return node.value || '';
  if (
    node.tagName === 'span' &&
    Array.isArray(node.properties?.className) &&
    (node.properties?.className as string[]).includes('katex-mathml')
  ) {
    // Avoid duplicating MathML + HTML visual spans inside KaTeX headings
    return '';
  }
  if (!node.children) return '';
  return node.children.map(extractNodePlainText).join('');
}

function createRehypeCollectHeadings(target: TocHeading[]) {
  return () => (tree: HastNode) => {
    const walk = (node: HastNode) => {
      if (
        node.type === 'element' &&
        (node.tagName === 'h2' || node.tagName === 'h3') &&
        typeof node.properties?.id === 'string'
      ) {
        const text = extractNodePlainText(node).trim();
        if (text) {
          target.push({
            id: node.properties.id,
            text,
            level: node.tagName === 'h2' ? 2 : 3,
          });
        }
      }
      if (node.children) {
        for (const child of node.children) {
          walk(child);
        }
      }
    };
    walk(tree);
  };
}

const MDX_COMPONENTS = {
  DefinitionCard,
  TheoremCard,
  ProofCollapse,
  PitfallAlert,
  KeyTakeaways,
  MathDiagram,
  InteractiveCanvasSlot,
  RowVsColumn2DDiagram,
  SingularColumn2DDiagram,
  EliminationPipelineDiagram,
  MatrixMultFiveViewsDiagram,
  LUMultiplierNoFillDiagram,
  LUComplexityPyramidDiagram,
  SubspacesOfR2AndImpostorsDiagram,
  ColSpaceVsNullspaceAmbientDiagram,
  RrefNullspaceBlockDiagram,
  AffineSolutionAndFourRankCasesDiagram,
  BasisGoldilocksDiagram,
  FourSubspacesBigPictureDiagram,
  MatrixSubspacesAndRank1BlocksDiagram,
  DirectedGraphIncidenceDiagram,
  Module1SynthesisMapDiagram,
  OrthogonalFourSubspacesCrossDiagram,
  SubspaceOrthogonalityContrastDiagram,
  LineAndSubspaceProjectionDiagram,
  ProjectionComplementarySplitDiagram,
  LeastSquaresDualGeometryDiagram,
  OrthogonalDecompositionPythagorasDiagram,
  GramSchmidtAndQRDiagram,
  OrthonormalProjectionDiagram,
  ProblemSet,
  ExerciseCard,
  TrueFalseInteractive,
  ProgressiveHint,
  DualSolution,
  SolutionIntuition,
  SolutionRigorous,
  FrontierAIReading,
  CollapsibleCode,
};

export async function loadLectureMdx(
  lang: Locale,
  session: LectureSession
): Promise<{
  content: React.ReactElement;
  headings: TocHeading[];
} | null> {
  const mod = getModuleById(session.moduleId);
  const filePath = path.join(
    process.cwd(),
    'content',
    lang,
    mod.folder,
    `${session.slug}.mdx`
  );

  let rawSource: string;
  try {
    rawSource = await fs.readFile(filePath, 'utf8');
  } catch {
    return null;
  }

  const headings: TocHeading[] = [];

  const { content } = await compileMDX({
    source: rawSource,
    components: MDX_COMPONENTS,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeSlug,
          rehypeKatex,
          createRehypeCollectHeadings(headings),
        ],
      },
    },
  });

  if (session.statusZh === 'published' || session.statusEn === 'published') {
    if (!headings.some((h) => h.id === 'problem-set') && rawSource.includes('<ProblemSet')) {
      headings.push({
        id: 'problem-set',
        text: lang === 'zh' ? '线性代数直觉训练题' : 'Intuition Problem Set',
        level: 2,
      });
    }
    if (
      !headings.some((h) => h.id === 'frontier-ai-reading') &&
      rawSource.includes('<FrontierAIReading')
    ) {
      headings.push({
        id: 'frontier-ai-reading',
        text: lang === 'zh' ? '课后延伸：前沿 AI 选读' : 'Post-Lecture Frontier AI Reading',
        level: 2,
      });
    }
  }

  return { content, headings };
}
