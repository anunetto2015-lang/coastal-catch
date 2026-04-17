export type Category = "fresh_fish" | "dry_fish" | "chutney" | "masala";

export interface WeightOption {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: Category;
  basePrice: number;
  images: string[];
  stockQuantity: number;
  weightOptions: WeightOption[];
  featured: boolean;
  createdAt: bigint;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight: WeightOption;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  weight: string;
  price: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  customer: CustomerDetails;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  stripePaymentIntentId?: string;
  createdAt: bigint;
}

export interface Review {
  id: string;
  productId: string;
  reviewerName: string;
  rating: number;
  comment: string;
  createdAt: bigint;
}

export interface CategoryMeta {
  id: Category;
  label: string;
  emoji: string;
  description: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "fresh_fish",
    label: "Fresh Cuts",
    emoji: "🐟",
    description: "Wild-caught, cleaned & cut to order",
  },
  {
    id: "dry_fish",
    label: "Dry Fish",
    emoji: "🐠",
    description: "Sun-dried and traditionally preserved",
  },
  {
    id: "chutney",
    label: "Chutneys",
    emoji: "🌿",
    description: "Stone-ground coastal chutneys",
  },
  {
    id: "masala",
    label: "Masalas",
    emoji: "🌶️",
    description: "Authentic fish & seafood masalas",
  },
];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "King Fish Steaks",
    description:
      "Premium wild-caught king fish, cleaned and cut into thick steaks. Ideal for fry, curry, or grilling.",
    category: "fresh_fish",
    basePrice: 1600,
    images: [],
    stockQuantity: 50,
    weightOptions: [
      { weight: "250g", price: 1600 },
      { weight: "500g", price: 3000 },
      { weight: "1kg", price: 5800 },
    ],
    featured: true,
    createdAt: BigInt(Date.now()),
  },
  {
    id: "2",
    name: "Reef Cod Fillets",
    description:
      "Tender, flaky reef cod fillets. Perfect for steaming, baking, or light curries.",
    category: "fresh_fish",
    basePrice: 1200,
    images: [],
    stockQuantity: 40,
    weightOptions: [
      { weight: "250g", price: 1200 },
      { weight: "500g", price: 2200 },
      { weight: "1kg", price: 4200 },
    ],
    featured: true,
    createdAt: BigInt(Date.now()),
  },
  {
    id: "3",
    name: "Whole Red Snapper",
    description:
      "Fresh whole red snapper, scaled and gutted. Sweet, firm flesh ideal for whole fish curry.",
    category: "fresh_fish",
    basePrice: 1200,
    images: [],
    stockQuantity: 30,
    weightOptions: [
      { weight: "500g", price: 1200 },
      { weight: "1kg", price: 2200 },
    ],
    featured: true,
    createdAt: BigInt(Date.now()),
  },
  {
    id: "4",
    name: "Tiger Prawns",
    description:
      "Jumbo tiger prawns, deveined and ready to cook. Great for masala fry or prawn curry.",
    category: "fresh_fish",
    basePrice: 2200,
    images: [],
    stockQuantity: 35,
    weightOptions: [
      { weight: "250g", price: 2200 },
      { weight: "500g", price: 4000 },
    ],
    featured: true,
    createdAt: BigInt(Date.now()),
  },
  {
    id: "5",
    name: "Dried Bombay Duck",
    description:
      "Traditional sun-dried Bombay duck (Bombil). Crispy texture, intense umami flavor.",
    category: "dry_fish",
    basePrice: 800,
    images: [],
    stockQuantity: 60,
    weightOptions: [
      { weight: "100g", price: 800 },
      { weight: "250g", price: 1800 },
    ],
    featured: false,
    createdAt: BigInt(Date.now()),
  },
  {
    id: "6",
    name: "Dried Anchovies",
    description:
      "Small, salty dried anchovies. Perfect for tempering, chutneys, and sambal base.",
    category: "dry_fish",
    basePrice: 600,
    images: [],
    stockQuantity: 80,
    weightOptions: [
      { weight: "100g", price: 600 },
      { weight: "250g", price: 1400 },
    ],
    featured: false,
    createdAt: BigInt(Date.now()),
  },
  {
    id: "7",
    name: "Prawn Balchão",
    description:
      "Tangy, spiced prawn balchão chutney with Goan vinegar and kashmiri chillies.",
    category: "chutney",
    basePrice: 700,
    images: [],
    stockQuantity: 45,
    weightOptions: [
      { weight: "200g", price: 700 },
      { weight: "400g", price: 1300 },
    ],
    featured: true,
    createdAt: BigInt(Date.now()),
  },
  {
    id: "8",
    name: "Spicy Tamarind Fish Chutney",
    description:
      "Bold tamarind-based chutney with dry fish, perfect as a side or cooking base.",
    category: "chutney",
    basePrice: 650,
    images: [],
    stockQuantity: 50,
    weightOptions: [
      { weight: "200g", price: 650 },
      { weight: "400g", price: 1200 },
    ],
    featured: false,
    createdAt: BigInt(Date.now()),
  },
  {
    id: "9",
    name: "Coastal Fish Masala",
    description:
      "A signature blend of coastal spices, stone-ground for authentic fish curries and fry.",
    category: "masala",
    basePrice: 550,
    images: [],
    stockQuantity: 100,
    weightOptions: [
      { weight: "100g", price: 550 },
      { weight: "250g", price: 1200 },
    ],
    featured: true,
    createdAt: BigInt(Date.now()),
  },
  {
    id: "10",
    name: "Pepper Fry Masala",
    description:
      "Aromatic black pepper masala for fish and prawn fry. South Indian style.",
    category: "masala",
    basePrice: 500,
    images: [],
    stockQuantity: 90,
    weightOptions: [
      { weight: "100g", price: 500 },
      { weight: "250g", price: 1100 },
    ],
    featured: false,
    createdAt: BigInt(Date.now()),
  },
];
