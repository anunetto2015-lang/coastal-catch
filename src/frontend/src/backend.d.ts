import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Product {
    id: ProductId;
    stockQuantity: bigint;
    featured: boolean;
    name: string;
    createdAt: Timestamp;
    description: string;
    category: Category;
    basePrice: bigint;
    weightOptions: Array<WeightOption>;
    images: Array<ExternalBlob>;
}
export interface ProductInput {
    stockQuantity: bigint;
    featured: boolean;
    name: string;
    description: string;
    category: Category;
    basePrice: bigint;
    weightOptions: Array<WeightOption>;
}
export type Timestamp = bigint;
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export type OrderId = bigint;
export interface CustomerDetails {
    name: string;
    email: string;
    address: string;
    phone: string;
}
export interface OrderItem {
    weight?: string;
    productId: ProductId;
    productName: string;
    quantity: bigint;
    unitPrice: bigint;
}
export interface WeightOption {
    weight: string;
    price: bigint;
}
export interface Order {
    id: OrderId;
    status: OrderStatus;
    customer: CustomerDetails;
    createdAt: Timestamp;
    totalAmount: bigint;
    stripePaymentIntentId?: string;
    items: Array<OrderItem>;
}
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface ShoppingItem {
    productName: string;
    currency: string;
    quantity: bigint;
    priceInCents: bigint;
    productDescription: string;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface CreateOrderInput {
    customer: CustomerDetails;
    totalAmount: bigint;
    items: Array<OrderItem>;
}
export type ReviewId = bigint;
export type StripeSessionStatus = {
    __kind__: "completed";
    completed: {
        userPrincipal?: string;
        response: string;
    };
} | {
    __kind__: "failed";
    failed: {
        error: string;
    };
};
export interface StripeConfiguration {
    allowedCountries: Array<string>;
    secretKey: string;
}
export interface ReviewInput {
    productId: ProductId;
    reviewerName: string;
    comment: string;
    rating: bigint;
}
export interface Review {
    id: ReviewId;
    createdAt: Timestamp;
    productId: ProductId;
    reviewerName: string;
    comment: string;
    rating: bigint;
}
export type ProductId = bigint;
export enum Category {
    dry_fish = "dry_fish",
    chutney = "chutney",
    fresh_fish = "fresh_fish",
    masala = "masala"
}
export enum OrderStatus {
    cancelled = "cancelled",
    pending = "pending",
    paid = "paid"
}
export interface backendInterface {
    addProduct(key: string, input: ProductInput): Promise<Product>;
    addProductImage(key: string, id: ProductId, image: ExternalBlob): Promise<boolean>;
    addReview(input: ReviewInput): Promise<Review>;
    createCheckoutSession(items: Array<ShoppingItem>, successUrl: string, cancelUrl: string): Promise<string>;
    createOrder(input: CreateOrderInput): Promise<Order>;
    deleteProduct(key: string, id: ProductId): Promise<boolean>;
    getOrder(id: OrderId): Promise<Order | null>;
    getProduct(id: ProductId): Promise<Product | null>;
    getProductReviews(productId: ProductId): Promise<Array<Review>>;
    getStripeSessionStatus(sessionId: string): Promise<StripeSessionStatus>;
    isStripeConfigured(): Promise<boolean>;
    listFeaturedProducts(): Promise<Array<Product>>;
    listOrders(key: string): Promise<Array<Order>>;
    listProducts(): Promise<Array<Product>>;
    listProductsByCategory(category: Category): Promise<Array<Product>>;
    setAdminKey(currentKey: string, newKey: string): Promise<boolean>;
    setOrderPaymentIntent(key: string, id: OrderId, intentId: string): Promise<Order | null>;
    setStripeConfiguration(key: string, config: StripeConfiguration): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    updateOrderStatus(key: string, id: OrderId, status: OrderStatus): Promise<Order | null>;
    updateProduct(key: string, id: ProductId, input: ProductInput): Promise<Product | null>;
    updateStock(key: string, id: ProductId, quantity: bigint): Promise<boolean>;
}
