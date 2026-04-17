import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

function formatPrice(paise: number): string {
  return `₹${(paise / 100).toFixed(0)}`;
}

export function CartPage() {
  const { cartItems, cartTotal, cartCount, removeFromCart, updateQuantity } =
    useCart();

  if (cartCount === 0) {
    return (
      <Layout>
        <div
          className="container mx-auto px-4 py-24 text-center"
          data-ocid="cart.empty_state"
        >
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-40" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Add some fresh fish or masala to get started!
          </p>
          <Link
            to="/products"
            search={{ category: undefined }}
            data-ocid="cart.start_shopping_button"
          >
            <Button size="lg" className="gap-2">
              Browse Products <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const delivery = cartTotal >= 50000 ? 0 : 4900;
  const grandTotal = cartTotal + delivery;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-6">
          Your Cart{" "}
          <span className="text-muted-foreground font-normal text-xl">
            ({cartCount} items)
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-3" data-ocid="cart.items_list">
            {cartItems.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.selectedWeight.weight}`}
                className="bg-card border border-border rounded-xl p-4 flex gap-4 items-center"
                data-ocid={`cart.item.${idx + 1}`}
              >
                {/* Image */}
                <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden">
                  {item.product.images.length > 0 ? (
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl">
                      {item.product.category === "fresh_fish"
                        ? "🐟"
                        : item.product.category === "dry_fish"
                          ? "🐠"
                          : item.product.category === "chutney"
                            ? "🌿"
                            : "🌶️"}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.selectedWeight.weight}
                  </p>
                  <p className="text-sm font-bold text-foreground mt-1">
                    {formatPrice(item.selectedWeight.price)}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-smooth"
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        item.selectedWeight.weight,
                        item.quantity - 1,
                      )
                    }
                    data-ocid={`cart.decrease_button.${idx + 1}`}
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-medium w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-smooth"
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        item.selectedWeight.weight,
                        item.quantity + 1,
                      )
                    }
                    data-ocid={`cart.increase_button.${idx + 1}`}
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right min-w-[5rem]">
                  <p className="font-bold text-foreground text-sm">
                    {formatPrice(item.selectedWeight.price * item.quantity)}
                  </p>
                  <button
                    type="button"
                    className="mt-1 text-muted-foreground hover:text-destructive transition-smooth"
                    onClick={() =>
                      removeFromCart(
                        item.product.id,
                        item.selectedWeight.weight,
                      )
                    }
                    aria-label="Remove item"
                    data-ocid={`cart.remove_button.${idx + 1}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div
              className="bg-card border border-border rounded-xl p-6 sticky top-24"
              data-ocid="cart.order_summary"
            >
              <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span>
                    {delivery === 0 ? (
                      <span className="text-accent font-medium">FREE</span>
                    ) : (
                      formatPrice(delivery)
                    )}
                  </span>
                </div>
                {delivery > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Add {formatPrice(50000 - cartTotal)} more for free delivery
                  </p>
                )}
                <div className="border-t border-border pt-3 flex justify-between font-bold text-foreground text-base">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="block mt-5"
                data-ocid="cart.checkout_button"
              >
                <Button size="lg" className="w-full gap-2 font-medium">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                to="/products"
                search={{ category: undefined }}
                className="block mt-2 text-center text-xs text-muted-foreground hover:text-primary transition-smooth"
                data-ocid="cart.continue_shopping_link"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
