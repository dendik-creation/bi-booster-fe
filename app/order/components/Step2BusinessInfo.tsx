import { useFormContext, useFieldArray } from "react-hook-form";
import { OrderFormValues } from "../schema";
import { Plus, Trash } from "lucide-react";
import { categoryTemplates } from "@/app/utils/static/static_templates";

const platforms = [
  "WhatsApp",
  "Instagram",
  "Facebook",
  "Tiktok",
  "Email",
  "Telepon",
];

export default function Step2BusinessInfo() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<OrderFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts",
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-[#111827] mb-4">
          Informasi Bisnis Anda
        </h2>
        <p className="text-[#6b7280]">
          Lengkapi data agar website Anda sesuai dengan identitas bisnis
        </p>
      </div>

      <div className="space-y-8 bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm">
        {/* Business Name */}
        <div>
          <label className="block text-sm font-bold text-[#374151] mb-2">
            Nama Usaha *
          </label>
          <input
            type="text"
            placeholder="Contoh: Kopi Senja"
            {...register("businessName")}
            className={`w-full px-4 py-3 rounded-xl border ${errors.businessName ? "border-red-500 focus:ring-red-200" : "border-[#e2e8f0] focus:border-[#2563eb] focus:ring-blue-100"} outline-none focus:ring-4 transition-all`}
          />
          {errors.businessName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.businessName.message}
            </p>
          )}
        </div>

        {/* Subdomain & Domain Extension */}
        <div>
          <label className="block text-sm font-bold text-[#374151] mb-2">
            Pilih Alamat Website (Domain) *
          </label>
          <div
            className={`flex flex-col sm:flex-row shadow-sm rounded-xl overflow-hidden border ${errors.subdomain || errors.domainExtension ? "border-red-500 focus-within:ring-red-200" : "border-[#e2e8f0] focus-within:ring-blue-100 focus-within:border-[#2563eb]"} focus-within:ring-4 transition-all bg-[#f8fafc]`}
          >
            <input
              type="text"
              placeholder="namausaha"
              {...register("subdomain")}
              className="flex-1 px-4 py-3 outline-none bg-white font-medium"
            />
            <div className="flex items-center border-t sm:border-t-0 sm:border-l border-[#e2e8f0]">
              <select
                {...register("domainExtension")}
                className="bg-[#f8fafc] px-4 py-3 text-[#374151] font-bold outline-none cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <option value=".bibooster.id">.bibooster.id</option>
                <option value=".bibooster.my.id">.bibooster.my.id</option>
              </select>
            </div>
          </div>
          {(errors.subdomain || errors.domainExtension) && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subdomain?.message || errors.domainExtension?.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-bold text-[#374151] mb-2">
            Kategori Bisnis *
          </label>
          <select
            {...register("category")}
            className={`w-full px-4 py-3 rounded-xl border ${errors.category ? "border-red-500 focus:ring-red-200" : "border-[#e2e8f0] focus:border-[#2563eb] focus:ring-blue-100"} outline-none focus:ring-4 transition-all bg-white`}
          >
            <option value="">Pilih Kategori...</option>
            {categoryTemplates.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <hr className="border-[#e2e8f0]" />

        {/* Dynamic Contacts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-sm font-bold text-[#374151]">
              Kontak & Sosial Media *
            </label>
            <button
              type="button"
              onClick={() => append({ platform: "", value: "" })}
              className="text-sm font-bold text-[#2563eb] flex items-center gap-1 hover:text-blue-700"
            >
              <Plus size={16} /> Tambah
            </button>
          </div>

          <div className="space-y-4">
            {fields.map((field, index) => {
              const contactError = errors.contacts?.[index];
              return (
                <div key={field.id} className="flex gap-3 items-start">
                  <div className="flex-1 flex flex-col sm:flex-row gap-3">
                    <select
                      {...register(`contacts.${index}.platform` as const)}
                      className={`w-full sm:w-1/3 px-3 py-2.5 rounded-lg border ${contactError?.platform ? "border-red-500" : "border-[#e2e8f0]"} focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white`}
                    >
                      <option value="">Platform</option>
                      {platforms.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      {...register(`contacts.${index}.value` as const)}
                      placeholder="Nomor / Link Medsos"
                      className={`flex-1 px-3 py-2.5 rounded-lg border ${contactError?.value ? "border-red-500" : "border-[#e2e8f0]"} focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 outline-none text-sm`}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="p-2.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-200 mt-0 sm:mt-0"
                    title="Hapus Kontak"
                  >
                    <Trash size={20} />
                  </button>
                </div>
              );
            })}
            {fields.length === 0 && (
              <div className="text-center py-6 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <p className="text-sm text-gray-500">
                  Belum ada kontak. Tambahkan minimal satu.
                </p>
              </div>
            )}
            {errors.contacts?.root && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contacts.root.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
