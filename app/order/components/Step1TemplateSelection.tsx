import { useFormContext } from "react-hook-form";
import { OrderFormValues } from "../schema";
import { Check, Search } from "lucide-react";
import { useState } from "react";
import TemplateCard from "@/app/templates/TemplateCard";
import {
  templates,
  categoryTemplates,
} from "@/app/utils/static/static_templates";

export default function Step1TemplateSelection() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<OrderFormValues>();
  const selectedSlug = watch("templateSlug");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (slug: string, category: string) => {
    setValue("templateSlug", slug, { shouldValidate: true });
    // Also auto-select category for Step 2 convenience
    setValue("category", category, { shouldValidate: true });
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // Map category name for each template
  const allTemplates = templates.map((tpl) => {
    const categoryName =
      categoryTemplates.find((c) => c.slug === tpl.category)?.name ||
      tpl.category;
    return { ...tpl, categoryName };
  });

  const filteredTemplates = allTemplates.filter(
    (tpl) =>
      tpl.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tpl.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tpl.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-[#111827] mb-4">
          Pilih Template Website Anda
        </h2>
        <p className="text-[#6b7280]">
          Pilih desain yang paling cocok untuk bisnis Anda. Anda bisa
          menyesuaikannya nanti.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-10 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="text-[#9ca3af]" size={20} />
        </div>
        <input
          type="text"
          placeholder="Cari nama template atau kategori..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] shadow-sm transition-all text-[#111827]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredTemplates.map((tpl) => {
          const isSelected = selectedSlug === tpl.slug;
          return (
            <div
              key={tpl.slug}
              onClick={() => handleSelect(tpl.slug, tpl.categoryName)}
              className={`relative cursor-pointer rounded-2xl transition-all duration-300 group
                 ${isSelected ? "ring-4 ring-[#2563eb] ring-offset-2 shadow-xl scale-[1.02]" : "hover:scale-[1.02] hover:shadow-lg"}`}
            >
              <div className="pointer-events-none h-full bg-white rounded-2xl">
                <TemplateCard
                  withAction={false}
                  template={tpl}
                  categoryName={tpl.categoryName}
                />
              </div>

              {/* Selection overlay for interaction hints */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 transition-colors ${isSelected ? "border-[#2563eb] bg-blue-600/5" : "border-transparent group-hover:bg-black/5"} z-10 pointer-events-none`}
              ></div>

              {isSelected && (
                <div className="absolute bottom-4 right-4 z-20 w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center text-white shadow-lg animate-in zoom-in">
                  <Check size={20} strokeWidth={2.5} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#6b7280] text-lg">Template tidak ditemukan.</p>
        </div>
      )}

      {errors.templateSlug && (
        <p className="text-red-500 text-center mt-6 font-medium animate-bounce">
          {errors.templateSlug.message}
        </p>
      )}
    </div>
  );
}
