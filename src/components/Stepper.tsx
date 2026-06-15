interface Step {
  number: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <nav aria-label="Progress" className="w-full">
      <ol className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;
          const isLast = index === steps.length - 1;

          return (
            <li key={step.number} className="relative flex-1">
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-accent bg-accent text-white"
                      : isCompleted
                      ? "border-accent bg-accent text-white"
                      : "border-border bg-white text-muted"
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`mt-2 text-xs font-medium tracking-widest uppercase ${
                    isActive
                      ? "text-accent"
                      : isCompleted
                      ? "text-accent"
                      : "text-muted"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {!isLast && (
                <div
                  className={`absolute left-1/2 top-5 h-0.5 w-full -translate-y-1/2 ${
                    isCompleted ? "bg-accent" : "bg-border"
                  }`}
                  style={{ marginLeft: "20px" }}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
