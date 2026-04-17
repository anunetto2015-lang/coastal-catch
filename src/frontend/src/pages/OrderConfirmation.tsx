import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";

const STEPS = [
  "Our team picks your order from today's catch",
  "Cleaned, packed, and iced within the hour",
  "Dispatched to you with live tracking",
  "Arrives fresh at your doorstep",
];

export function OrderConfirmationPage() {
  return (
    <Layout>
      <div
        className="container mx-auto px-4 py-20 max-w-xl text-center"
        data-ocid="order_confirmation.page"
      >
        <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-accent" />
        </div>
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">
          Order Confirmed!
        </h1>
        <p className="text-muted-foreground text-base mb-2">
          Thank you for your order. Your fresh catch is being prepared for
          delivery.
        </p>
        <p className="text-muted-foreground text-sm mb-8">
          You'll receive a confirmation on your registered email once your order
          is dispatched.
        </p>
        <div className="bg-muted/40 rounded-xl p-5 mb-8 text-left space-y-2">
          <p className="text-sm font-semibold text-foreground">
            What happens next?
          </p>
          {STEPS.map((step, i) => (
            <div
              key={step}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
        <Link
          to="/products"
          search={{ category: undefined }}
          data-ocid="order_confirmation.continue_shopping_button"
        >
          <Button size="lg" className="gap-2">
            Continue Shopping <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
