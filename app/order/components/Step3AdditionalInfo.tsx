"use client";

import { useFormContext } from "react-hook-form";
import { OrderFormValues } from "../schema";
import { Lightbulb } from "lucide-react";

export default function Step3AdditionalInfo() {
  const { register } = useFormContext<OrderFormValues>();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-[#111827] mb-4">
          Ceritakan Detail Kebutuhan Anda
        </h2>
        <p className="text-[#6b7280]">
          Opsional namun sangat membantu kami merancang website impian Anda
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm">
        <label className="block text-sm font-bold text-[#374151] mb-2">
          Informasi Tambahan / Fitur Khusus
        </label>
        <div className="p-4 bg-blue-50 text-blue-800 rounded-xl mb-4 text-sm font-medium border border-blue-100 flex gap-3 items-start">
          <Lightbulb className="text-blue-500 shrink-0 mt-0.5" size={20} />
          <p>
            Ceritakan kebutuhan spesifik Anda untuk mengisi konten yang ada di
            website.
          </p>
        </div>
        <textarea
          {...register("additionalInfo")}
          rows={6}
          placeholder="Misal produk yang akan ditampilkan, warna khusus, tagline, dan lainnya"
          className="w-full px-4 py-4 rounded-xl border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-y"
        ></textarea>
      </div>
    </div>
  );
}
