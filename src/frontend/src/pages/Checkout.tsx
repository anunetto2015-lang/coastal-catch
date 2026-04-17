import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import type { CustomerDetails } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

function formatPrice(paise: number): string {
  return `₹${(paise / 100).toFixed(0)}`;
}

const EMPTY: CustomerDetails = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
};

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  const [details, setDetails] = useState<CustomerDetails>(EMPTY);
  const [errors, setErrors] = useState<Partial<CustomerDetails>>({});
  const [loading, setLoading] = useState(false);

  const delivery = cartTotal >= 50000 ? 0 : 4900;
  const grandTotal = cartTotal + delivery;

  const validate = () => {
    const e: Partial<CustomerDetails> = {};
    if (!details.name.trim()) e.name = "Name is required";
    if (!details.email.match(/^[^@]+@[^@]+\.[^@]+$/))
      e.email = "Valid email required";
    if (!details.phone.match(/^[6-9]\d{9}$/))
      e.phone = "Valid 10-digit mobile required";
    if (!details.address.trim()) e.address = "Address is required";
    if (!details.city.trim()) e.city = "City is required";
    if (!details.pincode.match(/^\d{6}$/))
      e.pincode = "Valid 6-digit pincode required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    clearCart();
    navigate({ to: "/order-confirmation" });
  };

  if (cartCount === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-muted-foreground mb-4">Your cart is empty.</p>
          <Button
            onClick={() =>
              navigate({ to: "/products", search: { category: undefined } })
            }
          >
            Browse Products
          </Button>
        </div>
      </Layout>
    );
  }

  const field = (
    id: keyof CustomerDetails,
    label: string,
    type = "text",
    placeholder = "",
  ) => (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={details[id]}
        onChange={(e) => setDetails((d) => ({ ...d, [id]: e.target.value }))}
        onBlur={validate}
        className={errors[id] ? "border-destructive" : ""}
        data-ocid={`checkout.${id}_input`}
      />
      {errors[id] && (
        <p
          className="text-xs text-destructive"
          data-ocid={`checkout.${id}_field_error`}
        >
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">
          Checkout
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className="bg-card border border-border rounded-xl p-6"
                data-ocid="checkout.customer_form"
              >
                <h2 className="font-display text-lg font-semibold text-foreground mb-5">
                  Delivery Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    {field("name", "Full Name", "text", "Your full name")}
                  </div>
                  {field("email", "Email Address", "email", "you@example.com")}
                  {field("phone", "Phone Number", "tel", "10-digit mobile")}
                  <div className="sm:col-span-2">
                    {field(
                      "address",
                      "Delivery Address",
                      "text",
                      "Street address, building, flat no.",
                    )}
                  </div>
                  {field("city", "City", "text", "Mumbai")}
                  {field("pincode", "Pincode", "text", "400001")}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div
                className="bg-card border border-border rounded-xl p-6 sticky top-24"
                data-ocid="checkout.order_summary"
              >
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                  Order Summary
                </h2>
                <div className="space-y-2 mb-4">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedWeight.weight}`}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground truncate flex-1 mr-2">
                        {item.product.name} ({item.selectedWeight.weight}) ×
                        {item.quantity}
                      </span>
                      <span className="font-medium shrink-0">
                        {formatPrice(item.selectedWeight.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery</span>
                    <span>
                      {delivery === 0 ? "FREE" : formatPrice(delivery)}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-foreground text-base border-t border-border pt-2">
                    <span>Total</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-5"
                  disabled={loading}
                  data-ocid="checkout.place_order_button"
                >
                  {loading ? (
                    <span
                      className="flex items-center gap-2"
                      data-ocid="checkout.loading_state"
                    >
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Placing Order…
                    </span>
                  ) : (
                    "Place Order"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
