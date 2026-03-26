import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
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
    <div className="w-full lg:w-72 shrink-0 lg:bg-white lg:rounded-3xl lg:p-8 lg:border lg:border-[#e2e8f0] lg:shadow-sm">
      {/* Mobile/Tablet Horizontal Stepper */}
      <div className="lg:hidden w-full py-2">
        <div className="flex items-center justify-between max-w-2xl mx-auto relative px-2 sm:px-4">
          {/* Progress bar background line */}
          <div
            className="absolute left-[8%] right-[8%] top-[18px] sm:top-[22px] h-1.5 bg-[#e2e8f0] rounded-full z-0"
            aria-hidden="true"
          ></div>

          {/* Active progress line */}
          <div
            className="absolute left-[8%] top-[18px] sm:top-[22px] h-1.5 bg-[#2563eb] rounded-full z-0 transition-all duration-500 ease-in-out"
            style={{
              width: `calc(${((currentStep - 1) / (steps.length - 1)) * 84}%)`,
            }}
            aria-hidden="true"
          ></div>

          {steps.map((step) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center gap-2"
              >
                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 border-4 
                    ${
                      isActive
                        ? "bg-white border-[#2563eb] text-[#2563eb] shadow-lg shadow-blue-500/20 scale-110"
                        : isCompleted
                          ? "bg-[#2563eb] border-[#2563eb] text-white shadow-sm"
                          : "bg-white border-[#e2e8f0] text-[#9ca3af]"
                    }`}
                >
                  {isCompleted ? (
                    <Check
                      size={18}
                      strokeWidth={3}
                      className="animate-in zoom-in"
                    />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-bold whitespace-nowrap transition-colors duration-300 ${isActive ? "text-[#111827]" : isCompleted ? "text-[#374151]" : "text-[#9ca3af]"}`}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Vertical Stepper */}
      <div className="hidden lg:flex flex-col relative w-full">
        <h3 className="text-xl font-black text-[#111827] mb-8 pb-5 border-b border-[#e2e8f0]">Tahapan Pesanan</h3>
        
        <div className="relative pl-1">
          {/* Vertical progress background line */}
          <div
            className="absolute left-[20px] top-4 bottom-5 w-1.5 bg-[#e2e8f0] rounded-full z-0"
            aria-hidden="true"
          ></div>

          {/* Vertical active progress line */}
          <div
            className="absolute left-[20px] top-4 w-1.5 bg-[#2563eb] rounded-full z-0 transition-all duration-500 ease-in-out"
            style={{
              height: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}%)`,
            }}
            aria-hidden="true"
          ></div>

          <div className="flex flex-col gap-9 relative z-10">
            {steps.map((step) => {
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <div
                  key={step.id}
                  className="relative z-10 flex items-center gap-5 group"
                >
                  <div
                    className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 border-[3px] 
                      ${
                        isActive
                          ? "bg-white border-[#2563eb] text-[#2563eb] shadow-lg shadow-blue-500/20 scale-110"
                          : isCompleted
                            ? "bg-[#2563eb] border-[#2563eb] text-white shadow-sm"
                            : "bg-white border-[#e2e8f0] text-[#9ca3af]"
                      }`}
                  >
                    {isCompleted ? (
                      <Check
                        size={20}
                        strokeWidth={4}
                        className="animate-in zoom-in"
                      />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`text-base font-bold transition-colors duration-300 ${isActive ? "text-[#111827]" : isCompleted ? "text-[#374151]" : "text-[#9ca3af]"}`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
