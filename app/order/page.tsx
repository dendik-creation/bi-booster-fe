import { Suspense } from "react";
import { Metadata } from "next";
import { Loader2 } from "lucide-react";
import OrderClient from "./OrderClient";

export const metadata: Metadata = {
  title: "Pesan Website UMKM Sekarang | BI Booster",
  description:
    "Bangun website profesional untuk UMKM Anda dalam hitungan menit. Pilih template, masukkan detail bisnis, dan website siap mengudara berasama BI Booster.",
  alternates: {
    canonical: "https://bibooster.agency/order",
  },
  openGraph: {
    title: "Pesan Website UMKM Sekarang | BI Booster",
    description:
      "Bangun website profesional untuk UMKM Anda dalam hitungan menit. Pilih template berkualitas tinggi dan raih kesuksesan digital Anda.",
    url: "https://bibooster.agency/order",
    type: "website",
  },
};

export default function OrderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      }
    >
      <OrderClient />
    </Suspense>
  );
}
