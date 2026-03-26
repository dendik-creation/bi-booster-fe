import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
  totalSteps?: number;
}

const steps = [
  { id: 1, title: "Pilih Template" },
  { id: 2, title: "Info Usaha" },
  { id: 3, title: "Kebutuhan" },
  { id: 4, title: "Review" },
  { id: 5, title: "Hasil" },
];

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="w-full py-8 px-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto relative px-2">
        {/* Progress bar background line */}
        <div
          className="absolute left-[5%] right-[5%] top-1/3 -translate-y-1/2 h-1.5 bg-[#e2e8f0] rounded-full z-0"
          aria-hidden="true"
        ></div>

        {/* Active progress line */}
        <div
          className="absolute left-[5%] top-1/3 -translate-y-1/2 h-1.5 bg-[#2563eb] rounded-full z-0 transition-all duration-500 ease-in-out"
          style={{
            width: `calc(${((currentStep - 1) / (steps.length - 1)) * 90}%)`,
          }}
          aria-hidden="true"
        ></div>

        {/* Steps */}
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center gap-3"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base transition-all duration-500 border-4 
                  ${
                    isActive
                      ? "bg-white border-[#2563eb] text-[#2563eb] shadow-lg shadow-blue-500/20 scale-110"
                      : isCompleted
                        ? "bg-[#2563eb] border-[#2563eb] text-white shadow-md"
                        : "bg-white border-[#e2e8f0] text-[#9ca3af]"
                  }`}
              >
                {isCompleted ? (
                  <Check
                    size={24}
                    strokeWidth={3}
                    className="animate-in zoom-in"
                  />
                ) : (
                  step.id
                )}
              </div>
              <span
                className={`text-sm font-bold whitespace-nowrap transition-colors duration-300 ${isActive ? "text-[#111827]" : isCompleted ? "text-[#374151]" : "text-[#9ca3af]"}`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
