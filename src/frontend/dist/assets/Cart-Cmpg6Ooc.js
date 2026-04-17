import { c as createLucideIcon, e as useCart, j as jsxRuntimeExports, L as Layout, b as Link, B as Button } from "./index-DVaYm-it.js";
import { A as ArrowRight } from "./arrow-right-Da8GHfFv.js";
import { P as Plus, T as Trash2 } from "./trash-2-CUyII505.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode);
function formatPrice(paise) {
  return `₹${(paise / 100).toFixed(0)}`;
}
function CartPage() {
  const { cartItems, cartTotal, cartCount, removeFromCart, updateQuantity } = useCart();
  if (cartCount === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container mx-auto px-4 py-24 text-center",
        "data-ocid": "cart.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Your cart is empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Add some fresh fish or masala to get started!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/products",
              search: { category: void 0 },
              "data-ocid": "cart.start_shopping_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "gap-2", children: [
                "Browse Products ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] })
            }
          )
        ]
      }
    ) });
  }
  const delivery = cartTotal >= 5e4 ? 0 : 4900;
  const grandTotal = cartTotal + delivery;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-bold text-foreground mb-6", children: [
      "Your Cart",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal text-xl", children: [
        "(",
        cartCount,
        " items)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-3", "data-ocid": "cart.items_list", children: cartItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-4 flex gap-4 items-center",
          "data-ocid": `cart.item.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden", children: item.product.images.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.product.images[0],
                alt: item.product.name,
                className: "w-full h-full object-cover"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: item.product.category === "fresh_fish" ? "🐟" : item.product.category === "dry_fish" ? "🐠" : item.product.category === "chutney" ? "🌿" : "🌶️" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm truncate", children: item.product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: item.selectedWeight.weight }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground mt-1", children: formatPrice(item.selectedWeight.price) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-smooth",
                  onClick: () => updateQuantity(
                    item.product.id,
                    item.selectedWeight.weight,
                    item.quantity - 1
                  ),
                  "data-ocid": `cart.decrease_button.${idx + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium w-6 text-center", children: item.quantity }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-smooth",
                  onClick: () => updateQuantity(
                    item.product.id,
                    item.selectedWeight.weight,
                    item.quantity + 1
                  ),
                  "data-ocid": `cart.increase_button.${idx + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right min-w-[5rem]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-sm", children: formatPrice(item.selectedWeight.price * item.quantity) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "mt-1 text-muted-foreground hover:text-destructive transition-smooth",
                  onClick: () => removeFromCart(
                    item.product.id,
                    item.selectedWeight.weight
                  ),
                  "aria-label": "Remove item",
                  "data-ocid": `cart.remove_button.${idx + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ]
        },
        `${item.product.id}-${item.selectedWeight.weight}`
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-6 sticky top-24",
          "data-ocid": "cart.order_summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-foreground mb-4", children: "Order Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(cartTotal) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Delivery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: delivery === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-medium", children: "FREE" }) : formatPrice(delivery) })
              ] }),
              delivery > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Add ",
                formatPrice(5e4 - cartTotal),
                " more for free delivery"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 flex justify-between font-bold text-foreground text-base", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(grandTotal) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/checkout",
                className: "block mt-5",
                "data-ocid": "cart.checkout_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "w-full gap-2 font-medium", children: [
                  "Proceed to Checkout ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/products",
                search: { category: void 0 },
                className: "block mt-2 text-center text-xs text-muted-foreground hover:text-primary transition-smooth",
                "data-ocid": "cart.continue_shopping_link",
                children: "Continue Shopping"
              }
            )
          ]
        }
      ) })
    ] })
  ] }) });
}
export {
  CartPage
};
