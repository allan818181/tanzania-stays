export interface Property {
  id: string;
  images: string[];
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
}

// Image arrays
const bijouBambooImages = [
  "/lovable-uploads/128f927b-b142-4248-942e-deb91b1c1b61.png",
  "/lovable-uploads/c5d4d0a8-c387-4d02-bc7b-59ca95c2d8de.png",
  "/lovable-uploads/f4277582-82e5-4d19-94cf-85666d4ec7a6.png",
  "/lovable-uploads/8bcb379b-200a-4f13-b45e-b462be0b1a3e.png",
  "/lovable-uploads/31277210-2c93-484d-8ddc-f75755c4f16e.png",
  "/lovable-uploads/aa726979-295e-436d-a154-d02000e9f280.png",
  "/lovable-uploads/045026f7-822f-4a0c-9220-520e9cfbd363.png",
  "/lovable-uploads/a846fa7b-69a3-4e7d-a4b2-728d06051b79.png",
  "/lovable-uploads/340248a4-01ea-4b61-95ef-ca45b6033f60.png",
  "/lovable-uploads/0c7671dc-1e4a-4228-add7-848d3cbc9d1e.png"
];

const casaBubuImages = [
  "/lovable-uploads/4ea76074-d075-48ab-a552-8d08359a4568.png",
  "/lovable-uploads/524042ba-530e-4f8d-ac8b-fa3b36f39225.png",
  "/lovable-uploads/d4d36dd0-6fd5-4852-a8c0-6fe61e2b509d.png",
  "/lovable-uploads/6cacbf8e-2059-4ff4-b41d-53497d380793.png",
  "/lovable-uploads/579ea852-87c1-48ba-8f4c-4f1574aaef20.png",
  "/lovable-uploads/2778aaa4-bc6d-4b46-ba0a-5d58e35db30d.png",
  "/lovable-uploads/94813066-9d22-4922-984f-194f85f364e9.png",
  "/lovable-uploads/3e99ae0f-7d8c-4572-875d-6224800900ba.png",
  "/lovable-uploads/75742323-e0f6-47d7-9f91-747bd04b6f91.png",
  "/lovable-uploads/2c49b022-c03d-4f38-9c72-76176489d0f5.png"
];

const villaSerenityImages = [
  "/lovable-uploads/c2c9adc4-375e-4ada-a976-3e47a46da0c2.png",
  "/lovable-uploads/98d9367f-55dc-496b-be18-97cc996b9d3e.png",
  "/lovable-uploads/6036fd2b-fdf3-4704-8ab4-304143ac6e7f.png",
  "/lovable-uploads/110c2716-f41d-4f9c-91b9-fa672f29d019.png",
  "/lovable-uploads/73e66dab-0859-4173-b475-830e94e7f6f7.png",
  "/lovable-uploads/112932b1-4e86-45a9-88c3-580cabfd9e60.png",
  "/lovable-uploads/08a8e4ea-9a89-42fb-bc11-af9eb699b58f.png",
  "/lovable-uploads/f0abf8e9-4b39-4cd7-b3bd-7d53c78f8325.png"
];

const casaCataniaImages = [
  "/lovable-uploads/254f9163-bb90-45bc-8ac4-613ee72ade97.png",
  "/lovable-uploads/0b6595ce-74ef-4cef-ada6-a57fa918ea4c.png",
  "/lovable-uploads/ec10a13f-d641-48c5-bde9-0fee4367e76f.png",
  "/lovable-uploads/27e6c5a5-e8a5-4ac4-b8e0-02c7706a4100.png",
  "/lovable-uploads/67f34cc4-8e86-4f3c-a28e-263ca75753bf.png",
  "/lovable-uploads/928a47df-96e5-4271-bbdc-692ec497e633.png",
  "/lovable-uploads/a32feacc-050a-44d0-81a9-d260eb081e9e.png",
  "/lovable-uploads/4af574c1-592d-4534-ba01-0562ac6c82e7.png",
  "/lovable-uploads/dee81bad-8113-400d-b400-7f6ec2397a9c.png",
  "/lovable-uploads/f3969636-de1d-4c7a-ba88-19592aaf9ddf.png"
];

const villaKupuKupuImages = [
  "/lovable-uploads/0c6d707c-404d-42dc-95e0-2906e87b3928.png",
  "/lovable-uploads/e82f10be-8097-4d73-99ac-45d27994e3ab.png",
  "/lovable-uploads/75ef242b-a890-42b2-a89d-aa633f6c4620.png",
  "/lovable-uploads/429cc5be-5de5-4f66-bfb5-1035a72bbd6f.png",
  "/lovable-uploads/2b541250-d228-4ae0-961c-d5e5833d63c7.png",
  "/lovable-uploads/cf20d40a-c4ad-40a8-a248-9075b90ddcb5.png",
  "/lovable-uploads/1525304a-560d-4ae9-9d74-1da9c55b2aed.png",
  "/lovable-uploads/eecb0141-84b6-49a2-8c91-a842471f9bc7.png",
  "/lovable-uploads/fa1d0bcd-2900-49d8-a0d1-2271e7a95327.png",
  "/lovable-uploads/493344e4-b6a0-43e9-9996-08c0604cdf00.png"
];

const villaC3Images = [
  "/lovable-uploads/be3a7219-c625-4116-9165-bbfaf5f12316.png",
  "/lovable-uploads/fe08356d-b989-47ba-9b38-16e3ab0235ec.png",
  "/lovable-uploads/ab4d4a3c-ded5-4a00-b296-d0b1d7d0ff37.png",
  "/lovable-uploads/9296a245-1a98-46fa-b925-5ed0f80c3d57.png",
  "/lovable-uploads/8f5ab5af-2fee-47a1-9648-65fe0a0875e3.png",
  "/lovable-uploads/757bb7c7-3d6b-4a92-8b7e-a1b996ebd967.png",
  "/lovable-uploads/b62f65a1-dd3f-4934-8442-6e50314c6fd8.png",
  "/lovable-uploads/06ac86de-fc5a-4df2-9aef-a2863769c7f4.png",
  "/lovable-uploads/64661e11-0e0f-4dde-be06-83ead2f5e86c.png",
  "/lovable-uploads/e3a9bf47-0e61-40e5-b1aa-81be8161a3cc.png"
];

const casaBabaImages = [
  "/lovable-uploads/9293d572-4ea1-4f87-8ad6-bca02fadd893.png",
  "/lovable-uploads/4dcd54d7-85ef-4a82-8603-63aa542480ca.png",
  "/lovable-uploads/fe1f126e-05bd-4386-b717-4efd58eb2ec7.png",
  "/lovable-uploads/a488624e-1d6d-487c-8d32-7b1dabfb29ab.png",
  "/lovable-uploads/1610f2d6-c1d3-479f-94ab-9e1b62bccf01.png",
  "/lovable-uploads/f004a4fd-c76f-4846-af61-96bf5d1ee7dd.png",
  "/lovable-uploads/88335502-5e74-4b18-9103-88c5e304214b.png",
  "/lovable-uploads/e5815b7a-7cdf-482d-981f-e5e42faa01c7.png",
  "/lovable-uploads/0db52bc5-d736-4a31-b8ab-e7df32673004.png",
  "/lovable-uploads/7cfaf9c9-3e50-4215-8147-3a690eef1c0e.png"
];

const queenVillaImages = [
  "/lovable-uploads/queen-villa-pool.png",
  "/lovable-uploads/queen-villa-exterior.png",
  "/lovable-uploads/queen-villa-bedroom1.png",
  "/lovable-uploads/queen-villa-bedroom2.png",
  "/lovable-uploads/queen-villa-kitchen.png",
  "/lovable-uploads/queen-villa-kitchen2.png",
  "/lovable-uploads/queen-villa-dining.png",
  "/lovable-uploads/queen-villa-bathroom1.png",
  "/lovable-uploads/queen-villa-bathroom2.png",
  "/lovable-uploads/queen-villa-bathroom3.png"
];

// All properties data
export const allProperties: Property[] = [
  {
    id: "bijou-bamboo",
    images: bijouBambooImages,
    title: "Bijou Bamboo",
    location: "Tumbak Bayu, Bali",
    price: "2,500,000 IDR/night",
    bedrooms: 2,
    bathrooms: 2,
    area: "250 m²"
  },
  {
    id: "villa-kupu-kupu",
    images: villaKupuKupuImages,
    title: "Villa Kupu Kupu",
    location: "Seminyak/Kerobokan, Bali",
    price: "5,000,000 IDR/night",
    bedrooms: 5,
    bathrooms: 4,
    area: "550 m²"
  },
  {
    id: "queen-villa",
    images: queenVillaImages,
    title: "Queen Villa",
    location: "Seminyak Center, Bali",
    price: "2,000,000 IDR/night",
    bedrooms: 2,
    bathrooms: 2,
    area: "150 m²"
  },
  {
    id: "casa-catania",
    images: casaCataniaImages,
    title: "Casa Catania",
    location: "Seminyak/Kerobokan, Bali",
    price: "1,700,000 IDR/night",
    bedrooms: 2,
    bathrooms: 2,
    area: "100 m²"
  },
  {
    id: "villa-c3",
    images: villaC3Images,
    title: "Villa Agave",
    location: "Seminyak/Kerobokan, Bali",
    price: "1,700,000 IDR/night",
    bedrooms: 2,
    bathrooms: 2,
    area: "100 m²"
  },
  {
    id: "casa-baba",
    images: casaBabaImages,
    title: "Casa Baba",
    location: "Canggu/Umalas, Bali",
    price: "1,700,000 IDR/night",
    bedrooms: 2,
    bathrooms: 2,
    area: "200 m²"
  },
  {
    id: "casa-bubu",
    images: casaBubuImages,
    title: "Casa BUBU",
    location: "Umalas, Bali",
    price: "3,000,000 IDR/night",
    bedrooms: 3,
    bathrooms: 3,
    area: "200 m²"
  },
  {
    id: "villa-serenity",
    images: villaSerenityImages,
    title: "Villa Serenity",
    location: "Seseh/Cepaka, Bali",
    price: "1,700,000 IDR/night",
    bedrooms: 2,
    bathrooms: 2,
    area: "250 m²"
  }
];

// Featured properties for home page (first 4)
export const featuredProperties = allProperties.slice(0, 4);

// Properties with portrait first images that need overlay layout
export const propertiesWithPortraitFirst = [
  "Villa Serenity",
  "Casa Baba"
];