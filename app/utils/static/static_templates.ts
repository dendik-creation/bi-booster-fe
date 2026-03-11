type CategoryTemplate = {
  slug: string;
  name: string;
  description: string;
  image: string;
  template_count: number;
};

type Template = {
  slug: string;
  name: string;
  description: string;
  image: string;
  category: CategoryTemplate["slug"];
  used_count: number;
  isPopular: boolean;
};

const categoryTemplates: CategoryTemplate[] = [
  {
    slug: "kuliner",
    name: "Kuliner & F&B",
    description: "Template lezat untuk restoran, kafe, dan katering.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&fit=crop&q=80",
    template_count: 12,
  },
  {
    slug: "fashion",
    name: "Fashion & Pakaian",
    description: "Tampil gaya dengan etalase toko baju online.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&fit=crop&q=80",
    template_count: 8,
  },
  {
    slug: "jasa",
    name: "Layanan & Jasa",
    description: "Solusi profesional untuk salon, bengkel, dan freelance.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    template_count: 15,
  },
  {
    slug: "retail",
    name: "Retail & Kelontong",
    description: "Bawa toko kelontongmu ke ranah digital.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&fit=crop&q=80",
    template_count: 10,
  },
];

const templates: Template[] = [
  // --- KULINER ---
  {
    slug: "warung-rasa",
    name: "Warung Rasa Nusantara",
    description: "Cocok untuk rumah makan padang atau warteg modern.",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&fit=crop&q=80",
    category: "kuliner",
    used_count: 6,
    isPopular: true,
  },
  {
    slug: "kafe-modern",
    name: "Kafe Modern Minimalis",
    description: "Tampilan elegan untuk coffee shop dan kafe hits.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&fit=crop&q=80",
    category: "kuliner",
    used_count: 6,
    isPopular: true,
  },
  {
    slug: "catering-pro",
    name: "Catering Pro",
    description: "Landing page profesional untuk jasa katering acara.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&fit=crop&q=80",
    category: "kuliner",
    used_count: 5,
    isPopular: false,
  },
  // --- FASHION ---
  {
    slug: "hijab-style",
    name: "Minimalist Hijab",
    description: "Toko baju muslimah dengan checkout cepat.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&fit=crop&q=80",
    category: "fashion",
    used_count: 6,
    isPopular: true,
  },
  {
    slug: "batik-heritage",
    name: "Batik Heritage",
    description: "Etalase elegan untuk penjual batik dan wastra nusantara.",
    image:
      "https://images.unsplash.com/photo-1608841802877-d37c913623e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "fashion",
    used_count: 5,
    isPopular: false,
  },
  {
    slug: "streetwear-shop",
    name: "Streetwear Shop",
    description: "Toko baju kasual & streetwear dengan nuansa urban.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&fit=crop&q=80",
    category: "fashion",
    used_count: 6,
    isPopular: true,
  },
  // --- JASA ---
  {
    slug: "bengkel-pro",
    name: "Bengkel AutoPro",
    description: "Template booking servis kendaraan.",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&fit=crop&q=80",
    category: "jasa",
    used_count: 5,
    isPopular: false,
  },
  {
    slug: "salon-glam",
    name: "Salon Glam Beauty",
    description: "Portfolio dan booking online untuk salon kecantikan.",
    image:
      "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "jasa",
    used_count: 6,
    isPopular: true,
  },
  {
    slug: "laundry-express",
    name: "Laundry Express",
    description: "Website pemesanan laundry kiloan dengan tracking order.",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&fit=crop&q=80",
    category: "jasa",
    used_count: 4,
    isPopular: false,
  },
  // --- RETAIL ---
  {
    slug: "toko-sembako",
    name: "Sembako Cepat",
    description: "Katalog sembako dengan fitur keranjang belanja.",
    image:
      "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=800&fit=crop&q=80",
    category: "retail",
    used_count: 6,
    isPopular: true,
  },
  {
    slug: "minimarket-digital",
    name: "Minimarket Digital",
    description: "Toko serba ada online dengan katalog produk lengkap.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&fit=crop&q=80",
    category: "retail",
    used_count: 4,
    isPopular: false,
  },
  {
    slug: "apotek-online",
    name: "Apotek Online",
    description: "Website apotek dengan fitur konsultasi dan pesan obat.",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&fit=crop&q=80",
    category: "retail",
    used_count: 6,
    isPopular: true,
  },
];

export { templates, categoryTemplates };
export type { CategoryTemplate, Template };
