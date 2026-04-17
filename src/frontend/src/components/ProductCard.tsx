import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import type { Product, WeightOption } from "@/types";
import { Link } from "@tanstack/react-router";
import { Leaf, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const CATEGORY_BADGE: Record<string, { label: string; color: string }> = {
  fresh_fish: {
    label: "Fresh Cut",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  dry_fish: {
    label: "Dry Fish",
    color: "bg-secondary/40 text-foreground border-border",
  },
  chutney: {
    label: "Chutney",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  masala: {
    label: "Masala",
    color: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

function formatPrice(paise: number): string {
  return `₹${(paise / 100).toFixed(0)}`;
}

export function ProductCard({ product, index = 1 }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>(
    product.weightOptions[0] ?? { weight: "100g", price: product.basePrice },
  );
  const [added, setAdded] = useState(false);

  const catBadge =
    CATEGORY_BADGE[product.category] ?? CATEGORY_BADGE.fresh_fish;
  const hasImage = product.images.length > 0;

  const handleAddToCart = () => {
    addToCart(product, selectedWeight);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Card
      className="group overflow-hidden border border-border hover:border-primary/30 hover:shadow-md transition-smooth"
      data-ocid={`product.item.${index}`}
    >
      {/* Image */}
      <Link
        to="/products/$id"
        params={{ id: product.id }}
        className="block overflow-hidden bg-muted"
      >
        {hasImage ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-smooth"
          />
        ) : (
          <div className="w-full aspect-[4/3] bg-secondary/20 flex items-center justify-center">
            <span className="text-5xl opacity-50">
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
      </Link>

      <CardContent className="p-4">
        {/* Category badge + organic */}
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-medium ${catBadge.color}`}
          >
            {catBadge.label}
          </span>
          <span className="flex items-center gap-1 text-xs text-accent font-medium">
            <Leaf className="w-3 h-3" /> Natural
          </span>
        </div>

        {/* Title */}
        <Link
          to="/products/$id"
          params={{ id: product.id }}
          data-ocid={`product.title_link.${index}`}
        >
          <h3 className="font-display font-semibold text-foreground text-base leading-tight mb-1 hover:text-primary transition-smooth line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Weight selector */}
        {product.weightOptions.length > 1 && (
          <div
            className="flex gap-1.5 mb-3 flex-wrap"
            data-ocid={`product.weight_select.${index}`}
          >
            {product.weightOptions.map((w) => (
              <button
                type="button"
                key={w.weight}
                onClick={() => setSelectedWeight(w)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-smooth ${
                  selectedWeight.weight === w.weight
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
                data-ocid={`product.weight_option.${index}.${w.weight}`}
              >
                {w.weight}
              </button>
            ))}
          </div>
        )}

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="font-display font-bold text-lg text-foreground">
              {formatPrice(selectedWeight.price)}
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              / {selectedWeight.weight}
            </span>
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={product.stockQuantity === 0}
            className={`gap-1.5 transition-smooth ${added ? "bg-accent hover:bg-accent" : ""}`}
            data-ocid={`product.add_to_cart_button.${index}`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {added ? "Added!" : "Add"}
          </Button>
        </div>

        {product.stockQuantity === 0 && (
          <Badge
            variant="outline"
            className="mt-2 w-full justify-center text-destructive border-destructive/30"
          >
            Out of Stock
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}
