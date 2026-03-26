import { z } from "zod";

export const orderSchema = z.object({
  templateSlug: z.string().min(1, "Template harus dipilih"),
  businessName: z.string().min(3, "Nama usaha minimal 3 karakter"),
  subdomain: z
    .string()
    .min(3, "Subdomain minimal 3 karakter")
    .regex(
      /^[a-z0-9-]+$/,
      "Hanya huruf kecil, angka, dan strip (-) yang diperbolehkan",
    ),
  domainExtension: z.string().min(1, "Ekstensi domain harus dipilih"),
  category: z.string().min(1, "Kategori harus dipilih"),
  contacts: z
    .array(
      z.object({
        platform: z.string().min(1, "Platform harus dipilih"),
        value: z.string().min(3, "Kontak minimal 3 karakter"),
      }),
    )
    .min(1, "Minimal satu kontak harus ditambahkan"),
  additionalInfo: z.string().optional(),
});

export type OrderFormValues = z.infer<typeof orderSchema>;
