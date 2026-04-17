import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import { useProduct } from "@/hooks/useProducts";
import type { WeightOption } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Leaf, Package, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

function formatPrice(paise: number): string {
  return `₹${(paise / 100).toFixed(0)}`;
}

export function ProductDetailPage() {
  const { id } = useParams({ from: "/products/$id" });
  const { data: product, isLoading, isError } = useProduct(id);
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<WeightOption | null>(
    null,
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const activeWeight = selectedWeight ?? product?.weightOptions[0] ?? null;

  const handleAdd = () => {
    if (!product || !activeWeight) return;
    addToCart(product, activeWeight, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Skeleton
              className="aspect-square rounded-2xl"
              data-ocid="product_detail.loading_state"
            />
            <div className="space-y-4">
              <Skeleton className="h-8 w-2/3 rounded" />
              <Skeleton className="h-5 w-1/3 rounded" />
              <Skeleton className="h-20 w-full rounded" />
              <Skeleton className="h-10 w-40 rounded" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (isError || !product) {
    return (
      <Layout>
        <div
          className="container mx-auto px-4 py-20 text-center"
          data-ocid="product_detail.error_state"
        >
          <span className="text-6xl mb-4 block">🐟</span>
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Product not found
          </h2>
          <Link to="/products" search={{ category: undefined }}>
            <Button>Browse Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/products"
          search={{ category: undefined }}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-smooth mb-6"
          data-ocid="product_detail.back_link"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden bg-muted border border-border">
            {product.images.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            ) : (
              <div className="w-full aspect-square flex items-center justify-center">
                <span className="text-8xl opacity-30">
                  {product.category === "fresh_fish"
                    ? "🐟"
                    : product.category === "dry_fish"
                      ? "🐠"
                      : product.category === "chutney"
                        ? "🌿"
                        : "🌶️"}
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Badge
                variant="outline"
                className="text-xs border-primary/20 bg-primary/10 text-primary"
              >
                {product.category === "fresh_fish"
                  ? "🐟 Fresh Cut"
                  : product.category === "dry_fish"
                    ? "🐠 Dry Fish"
                    : product.category === "chutney"
                      ? "🌿 Chutney"
                      : "🌶️ Masala"}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-accent font-medium">
                <Leaf className="w-3 h-3" /> Natural
              </span>
              {product.featured && (
                <Badge className="text-xs gap-1">
                  <Star className="w-2.5 h-2.5 fill-current" /> Featured
                </Badge>
              )}
            </div>

            <h1 className="font-display text-3xl font-bold text-foreground mb-3">
              {product.name}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Weight Options */}
            {product.weightOptions.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">
                  Select Weight
                </p>
                <div
                  className="flex flex-wrap gap-2"
                  data-ocid="product_detail.weight_select"
                >
                  {product.weightOptions.map((w) => (
                    <button
                      type="button"
                      key={w.weight}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-4 py-2 rounded-xl border text-sm font-medium transition-smooth ${
                        (
                          selectedWeight?.weight ??
                            product.weightOptions[0]?.weight
                        ) === w.weight
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                      data-ocid={`product_detail.weight_option.${w.weight}`}
                    >
                      {w.weight}
                      <span className="block text-xs mt-0.5 opacity-70">
                        {formatPrice(w.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-4xl font-bold text-foreground">
                {formatPrice(activeWeight?.price ?? product.basePrice)}
              </span>
              {activeWeight && (
                <span className="text-muted-foreground text-sm">
                  / {activeWeight.weight}
                </span>
              )}
            </div>

            {/* Quantity + Cart */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  type="button"
                  className="px-3 py-2 hover:bg-muted transition-smooth text-foreground"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  data-ocid="product_detail.quantity_decrease_button"
                >
                  −
                </button>
                <span
                  className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center border-x border-border"
                  data-ocid="product_detail.quantity_input"
                >
                  {quantity}
                </span>
                <button
                  type="button"
                  className="px-3 py-2 hover:bg-muted transition-smooth text-foreground"
                  onClick={() =>
                    setQuantity(Math.min(product.stockQuantity, quantity + 1))
                  }
                  data-ocid="product_detail.quantity_increase_button"
                >
                  +
                </button>
              </div>
              <Button
                size="lg"
                className={`flex-1 gap-2 transition-smooth ${added ? "bg-accent hover:bg-accent" : ""}`}
                onClick={handleAdd}
                disabled={product.stockQuantity === 0}
                data-ocid="product_detail.add_to_cart_button"
              >
                <ShoppingCart className="w-4 h-4" />
                {added ? "Added to Cart!" : "Add to Cart"}
              </Button>
            </div>

            {/* Stock info */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Package className="w-3.5 h-3.5" />
              <span>
                {product.stockQuantity > 0
                  ? `${product.stockQuantity} units in stock`
                  : "Out of stock"}
              </span>
            </div>

            {/* Cart link if added */}
            {added && (
              <div
                className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-between"
                data-ocid="product_detail.success_state"
              >
                <span className="text-sm text-accent font-medium">
                  Item added to cart!
                </span>
                <Link to="/cart">
                  <Button
                    size="sm"
                    variant="outline"
                    data-ocid="product_detail.go_to_cart_button"
                  >
                    View Cart →
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
