import { j as jsxRuntimeExports, d as cn, e as useCart, r as reactExports, b as Link, a as Leaf, B as Button, f as ShoppingCart, g as Badge } from "./index-DVaYm-it.js";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
const CATEGORY_BADGE = {
  fresh_fish: {
    label: "Fresh Cut",
    color: "bg-primary/10 text-primary border-primary/20"
  },
  dry_fish: {
    label: "Dry Fish",
    color: "bg-secondary/40 text-foreground border-border"
  },
  chutney: {
    label: "Chutney",
    color: "bg-accent/10 text-accent border-accent/20"
  },
  masala: {
    label: "Masala",
    color: "bg-destructive/10 text-destructive border-destructive/20"
  }
};
function formatPrice(paise) {
  return `₹${(paise / 100).toFixed(0)}`;
}
function ProductCard({ product, index = 1 }) {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = reactExports.useState(
    product.weightOptions[0] ?? { weight: "100g", price: product.basePrice }
  );
  const [added, setAdded] = reactExports.useState(false);
  const catBadge = CATEGORY_BADGE[product.category] ?? CATEGORY_BADGE.fresh_fish;
  const hasImage = product.images.length > 0;
  const handleAddToCart = () => {
    addToCart(product, selectedWeight);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: "group overflow-hidden border border-border hover:border-primary/30 hover:shadow-md transition-smooth",
      "data-ocid": `product.item.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/products/$id",
            params: { id: product.id },
            className: "block overflow-hidden bg-muted",
            children: hasImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.images[0],
                alt: product.name,
                className: "w-full aspect-[4/3] object-cover group-hover:scale-105 transition-smooth"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-[4/3] bg-secondary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl opacity-50", children: product.category === "fresh_fish" ? "🐟" : product.category === "dry_fish" ? "🐠" : product.category === "chutney" ? "🌿" : "🌶️" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs px-2 py-0.5 rounded-full border font-medium ${catBadge.color}`,
                children: catBadge.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-accent font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3 h-3" }),
              " Natural"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/products/$id",
              params: { id: product.id },
              "data-ocid": `product.title_link.${index}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base leading-tight mb-1 hover:text-primary transition-smooth line-clamp-1", children: product.name })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 mb-3", children: product.description }),
          product.weightOptions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-1.5 mb-3 flex-wrap",
              "data-ocid": `product.weight_select.${index}`,
              children: product.weightOptions.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedWeight(w),
                  className: `text-xs px-2.5 py-1 rounded-full border transition-smooth ${selectedWeight.weight === w.weight ? "border-primary bg-primary/10 text-primary font-medium" : "border-border text-muted-foreground hover:border-primary/50"}`,
                  "data-ocid": `product.weight_option.${index}.${w.weight}`,
                  children: w.weight
                },
                w.weight
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg text-foreground", children: formatPrice(selectedWeight.price) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
                "/ ",
                selectedWeight.weight
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                onClick: handleAddToCart,
                disabled: product.stockQuantity === 0,
                className: `gap-1.5 transition-smooth ${added ? "bg-accent hover:bg-accent" : ""}`,
                "data-ocid": `product.add_to_cart_button.${index}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-3.5 h-3.5" }),
                  added ? "Added!" : "Add"
                ]
              }
            )
          ] }),
          product.stockQuantity === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "mt-2 w-full justify-center text-destructive border-destructive/30",
              children: "Out of Stock"
            }
          )
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
