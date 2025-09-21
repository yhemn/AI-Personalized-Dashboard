import {
  useMultistepContext,
  type StepConfig,
} from '@/contexts/MultistepContext';
import { useCallback, useMemo, useState } from 'react';

// Enhanced hook options with better type safety
export interface UseMultistepOptions {
  onStepChange?: (step: number, previousStep: number) => void;
  onStepComplete?: (step: number) => void;
  onFinish?: () => void;
  onError?: (error: Error) => void;
  validateOnChange?: boolean;
  autoMarkCompleted?: boolean;
  stepConfigs?: StepConfig[];
}

// Enhanced return type with more functionality
export interface UseMultistepReturn {
  // Navigation methods
  nextStep: () => Promise<boolean>;
  previousStep: () => Promise<boolean>;
  goToStep: (step: number) => Promise<boolean>;
  goToFirstStep: () => void;
  goToLastStep: () => void;

  // State management
  markStepCompleted: (step: number) => void;
  markStepIncomplete: (step: number) => void;
  resetSteps: () => void;

  // State getters
  currentStep: number;
  totalSteps: number;
  completedSteps: Set<number>;
  isTransitioning: boolean;
  canGoNext: boolean;
  canGoPrevious: boolean;

  // Validation and completion
  isStepCompleted: (step: number) => boolean;
  isStepValid: (step: number) => Promise<boolean>;
  isCurrentStepValid: () => Promise<boolean>;

  // Progress tracking
  progress: {
    percentage: number;
    completedCount: number;
    remainingCount: number;
  };

  // Step information
  stepInfo: {
    current: {
      index: number;
      isFirst: boolean;
      isLast: boolean;
      isCompleted: boolean;
      config?: StepConfig;
    };
    all: StepConfig[];
  };
}

export default function useMultistep(
  options: UseMultistepOptions = {}
): UseMultistepReturn {
  const {
    onFinish,
    onError,
    validateOnChange = true,
    stepConfigs = [],
  } = options;

  const context = useMultistepContext();
  const [isLoading, setIsLoading] = useState(false);

  // Step change handling is now done by the context itself
  // The context handles validation and step completion automatically

  // Enhanced navigation methods with better error handling
  const nextStep = useCallback(async (): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Validate current step before proceeding if validation is enabled
      if (validateOnChange) {
        const isValid = await context.isStepValid(context.currentStep);
        if (!isValid) {
          onError?.(new Error(`Step ${context.currentStep} is not valid`));
          return false;
        }
      }

      const success = await context.nextStep();

      if (success) {
        // Call onFinish if we've reached the last step
        if (context.currentStep === context.totalSteps - 1) {
          onFinish?.();
        }
      }

      return success;
    } catch (error) {
      onError?.(error as Error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [context, validateOnChange, onFinish, onError]);

  const previousStep = useCallback(async (): Promise<boolean> => {
    try {
      return await context.previousStep();
    } catch (error) {
      onError?.(error as Error);
      return false;
    }
  }, [context, onError]);

  const goToStep = useCallback(
    async (step: number): Promise<boolean> => {
      try {
        setIsLoading(true);

        // Validate current step before leaving if validation is enabled
        if (validateOnChange && step !== context.currentStep) {
          const isValid = await context.isStepValid(context.currentStep);
          if (!isValid) {
            onError?.(new Error(`Step ${context.currentStep} is not valid`));
            return false;
          }
        }

        const success = await context.goToStep(step);

        return success;
      } catch (error) {
        onError?.(error as Error);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [context, validateOnChange, onError]
  );

  // Enhanced step validation
  const isCurrentStepValid = useCallback(async (): Promise<boolean> => {
    try {
      return await context.isStepValid(context.currentStep);
    } catch (error) {
      onError?.(error as Error);
      return false;
    }
  }, [context, onError]);

  // Progress calculation
  const progress = useMemo(() => {
    const completedCount = context.completedSteps.size;
    const totalCount = context.totalSteps;
    const percentage =
      totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    return {
      percentage,
      completedCount,
      remainingCount: totalCount - completedCount,
    };
  }, [context.completedSteps.size, context.totalSteps]);

  // Current step information
  const stepInfo = useMemo(() => {
    const currentConfig = stepConfigs[context.currentStep];

    return {
      current: {
        index: context.currentStep,
        isFirst: context.currentStep === 0,
        isLast: context.currentStep === context.totalSteps - 1,
        isCompleted: context.isStepCompleted(context.currentStep),
        config: currentConfig,
      },
      all: stepConfigs,
    };
  }, [context, stepConfigs]);

  // Note: Step change handling is now done by the context itself
  // No need for useEffect here as it was causing infinite loops

  return {
    // Navigation methods
    nextStep,
    previousStep,
    goToStep,
    goToFirstStep: context.goToFirstStep,
    goToLastStep: context.goToLastStep,

    // State management
    markStepCompleted: context.markStepCompleted,
    markStepIncomplete: context.markStepIncomplete,
    resetSteps: context.resetSteps,

    // State getters
    currentStep: context.currentStep,
    totalSteps: context.totalSteps,
    completedSteps: context.completedSteps,
    isTransitioning: context.isTransitioning || isLoading,
    canGoNext: context.canGoNext,
    canGoPrevious: context.canGoPrevious,

    // Validation and completion
    isStepCompleted: context.isStepCompleted,
    isStepValid: context.isStepValid,
    isCurrentStepValid,

    // Progress tracking
    progress,

    // Step information
    stepInfo,
  };
}

// Additional utility hooks for specific use cases
export function useMultistepProgress() {
  const context = useMultistepContext();

  return useMemo(() => {
    const completedCount = context.completedSteps.size;
    const totalCount = context.totalSteps;
    const percentage =
      totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    return {
      percentage,
      completedCount,
      remainingCount: totalCount - completedCount,
      currentStep: context.currentStep,
      totalSteps: context.totalSteps,
    };
  }, [context.completedSteps.size, context.totalSteps, context.currentStep]);
}

export function useMultistepValidation() {
  const context = useMultistepContext();

  const validateCurrentStep = useCallback(async () => {
    return context.isStepValid(context.currentStep);
  }, [context]);

  const validateStep = useCallback(
    async (step: number) => {
      return context.isStepValid(step);
    },
    [context]
  );

  return {
    validateCurrentStep,
    validateStep,
    isStepCompleted: context.isStepCompleted,
  };
}
