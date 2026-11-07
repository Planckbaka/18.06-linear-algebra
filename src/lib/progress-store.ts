'use client';

import * as React from 'react';

const STORAGE_KEY = 'mit1806_study_progress_v1';

export interface StudyProgressState {
  completedSlugs: string[];
  solvedExercises: Record<string, boolean>;
}

const DEFAULT_STATE: StudyProgressState = {
  completedSlugs: [],
  solvedExercises: {},
};

function readState(): StudyProgressState {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as Partial<StudyProgressState>;
    return {
      completedSlugs: Array.isArray(parsed.completedSlugs) ? parsed.completedSlugs : [],
      solvedExercises:
        parsed.solvedExercises && typeof parsed.solvedExercises === 'object'
          ? parsed.solvedExercises
          : {},
    };
  } catch {
    return DEFAULT_STATE;
  }
}

function writeState(next: StudyProgressState) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent('mit1806-progress-updated'));
  } catch {
    // Ignore storage quota errors
  }
}

export function useStudyProgress() {
  const [state, setState] = React.useState<StudyProgressState>(DEFAULT_STATE);

  React.useEffect(() => {
    setState(readState());
    const onUpdate = () => setState(readState());
    window.addEventListener('mit1806-progress-updated', onUpdate);
    window.addEventListener('storage', onUpdate);
    return () => {
      window.removeEventListener('mit1806-progress-updated', onUpdate);
      window.removeEventListener('storage', onUpdate);
    };
  }, []);

  const toggleSessionCompleted = React.useCallback((slug: string) => {
    const current = readState();
    const exists = current.completedSlugs.includes(slug);
    const completedSlugs = exists
      ? current.completedSlugs.filter((s) => s !== slug)
      : [...current.completedSlugs, slug];
    writeState({ ...current, completedSlugs });
  }, []);

  const markExerciseSolved = React.useCallback((exerciseId: string, isCorrect: boolean) => {
    const current = readState();
    writeState({
      ...current,
      solvedExercises: {
        ...current.solvedExercises,
        [exerciseId]: isCorrect,
      },
    });
  }, []);

  return {
    state,
    toggleSessionCompleted,
    markExerciseSolved,
  };
}
