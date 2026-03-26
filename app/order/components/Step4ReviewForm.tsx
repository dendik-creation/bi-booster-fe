import { useFormContext } from "react-hook-form";
import { OrderFormValues } from "../schema";
import { CheckCircle2, Edit2 } from "lucide-react";

interface Step4Props {
  onEditStep: (step: number) => void;
}

export default function Step4ReviewForm({ onEditStep }: Step4Props) {
  const { getValues } = useFormContext<OrderFormValues>();
  const values = getValues();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-[#111827] mb-4">Review Pesanan Anda</h2>
        <p className="text-[#6b7280]">Pastikan semua data sudah benar sebelum kami mulai merancang website Anda</p>
      </div>

      <div className="space-y-6">
        {/* Template & Category Row */}
        <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex items-start justify-between group">
          <div>
            <span className="text-sm font-bold text-[#6b7280] mb-1 block">Template & Kategori</span>
            <p className="text-lg font-bold text-[#111827] flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              {values.templateSlug || <span className="text-red-500 italic">Belum dipilih</span>} <span className="text-[#9ca3af] font-normal text-sm">({values.category || 'Belum ada kategori'})</span>
            </p>
          </div>
          <button 
            type="button" 
            onClick={() => onEditStep(1)}
            className="p-2 text-[#9ca3af] hover:text-[#2563eb] hover:bg-blue-50 rounded-lg transition-colors sm:opacity-0 sm:group-hover:opacity-100"
          >
            <Edit2 size={18} />
          </button>
        </div>

        {/* Business Info Row */}
        <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm relative group">
          <button 
            type="button" 
            onClick={() => onEditStep(2)}
            className="absolute top-4 right-4 p-2 text-[#9ca3af] hover:text-[#2563eb] hover:bg-blue-50 rounded-lg transition-colors sm:opacity-0 sm:group-hover:opacity-100"
          >
            <Edit2 size={18} />
          </button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <span className="text-sm font-bold text-[#6b7280] mb-1 block">Nama Usaha</span>
              <p className="text-lg font-bold text-[#111827]">{values.businessName || <span className="text-red-500 italic">Kosong</span>}</p>
            </div>
            <div>
              <span className="text-sm font-bold text-[#6b7280] mb-1 block">Alamat Website</span>
              <p className="text-lg font-bold text-[#2563eb]">{values.subdomain || <span className="text-red-500 italic">Kosong</span>}{values.domainExtension}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#e2e8f0]">
            <span className="text-sm font-bold text-[#6b7280] mb-3 block">Kontak & Sosial Media</span>
            <div className="flex flex-wrap gap-3">
              {values.contacts?.length > 0 ? (
                values.contacts.map((contact, i) => (
                  <div key={i} className="px-3 py-1.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#4b5563]">
                    <span className="text-[#9ca3af] mr-1">{contact.platform || '?'}:</span> {contact.value}
                  </div>
                ))
              ) : (
                <p className="text-sm text-red-500 italic">Tidak ada kontak ditambahkan.</p>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info Row */}
        <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex items-start justify-between group">
          <div className="w-full">
            <span className="text-sm font-bold text-[#6b7280] mb-2 block">Catatan Tambahan (Bila ada)</span>
            <p className={`text-[#374151] whitespace-pre-line leading-relaxed ${!values.additionalInfo && 'italic text-gray-400'}`}>
              {values.additionalInfo || 'Tidak ada catatan khusus.'}
            </p>
          </div>
          <button 
            type="button" 
            onClick={() => onEditStep(3)}
            className="p-2 text-[#9ca3af] hover:text-[#2563eb] hover:bg-blue-50 rounded-lg transition-colors sm:opacity-0 sm:group-hover:opacity-100 shrink-0"
          >
            <Edit2 size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
