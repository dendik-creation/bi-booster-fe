"use client";

import { Suspense, useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Loader2, Rocket } from "lucide-react";

import { orderSchema, OrderFormValues } from "./schema";
import Stepper from "./components/Stepper";
import Step1TemplateSelection from "./components/Step1TemplateSelection";
import Step2BusinessInfo from "./components/Step2BusinessInfo";
import Step3AdditionalInfo from "./components/Step3AdditionalInfo";
import Step4ReviewForm from "./components/Step4ReviewForm";
import Step5ResultPreview from "./components/Step5ResultPreview";
import Navbar from "../components/Navbar";

function OrderContent() {
  const searchParams = useSearchParams();
  const initialTemplate = searchParams.get("template");

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      templateSlug: "",
      businessName: "",
      subdomain: "",
      domainExtension: ".bibooster.id",
      category: "",
      contacts: [{ platform: "", value: "" }],
      additionalInfo: "",
    },
    mode: "onChange",
  });

  const { handleSubmit, trigger, getValues, setValue } = methods;

  useEffect(() => {
    if (initialTemplate) {
      setValue("templateSlug", initialTemplate, { shouldValidate: true });
    }
  }, [initialTemplate, setValue]);

  const handleNext = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger("templateSlug");
    } else if (currentStep === 2) {
      isValid = await trigger([
        "businessName",
        "subdomain",
        "category",
        "contacts",
      ]);
    } else if (currentStep === 3) {
      isValid = await trigger("additionalInfo");
    }

    if (isValid) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: OrderFormValues) => {
    if (currentStep < 4) {
      // Mencegah submit tidak sengaja jika user menekan 'Enter' di input pada step sebelumnya
      handleNext();
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setCurrentStep(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 font-sans">
      <Navbar isOrderPage={true} />

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-7xl mx-auto px-4 mt-8"
        >
          <Stepper currentStep={currentStep} />

          <div className="mt-8 transition-all duration-300">
            {currentStep === 1 && <Step1TemplateSelection />}
            {currentStep === 2 && <Step2BusinessInfo />}
            {currentStep === 3 && <Step3AdditionalInfo />}
            {currentStep === 4 && (
              <Step4ReviewForm onEditStep={setCurrentStep} />
            )}
            {currentStep === 5 && <Step5ResultPreview values={getValues()} />}
          </div>

          {/* Navigation Footer */}
          {currentStep < 5 && (
            <div className="mt-12 flex items-center justify-between max-w-2xl mx-auto gap-4 border-t border-[#e2e8f0] pt-6">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#6b7280] hover:text-[#111827] hover:bg-white transition-colors border-2 border-transparent hover:border-[#e2e8f0]"
                >
                  <ArrowLeft size={18} /> Kembali
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 4 ? (
                <button
                  key="next-btn"
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-[#2563eb] hover:bg-[#1d4ed8] active:scale-95 transition-all shadow-lg shadow-blue-500/20"
                >
                  Lanjut <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  key="submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-green-500 hover:bg-green-600 active:scale-95 transition-all shadow-lg shadow-green-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Merekap...
                    </>
                  ) : (
                    <>
                      <Rocket size={18} /> Generate
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      }
    >
      <OrderContent />
    </Suspense>
  );
}
