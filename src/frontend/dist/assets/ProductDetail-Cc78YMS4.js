import { c as createLucideIcon, h as useParams, e as useCart, r as reactExports, j as jsxRuntimeExports, L as Layout, S as Skeleton, b as Link, B as Button, g as Badge, a as Leaf, f as ShoppingCart } from "./index-DVaYm-it.js";
import { c as useProduct } from "./useProducts-DUDXQDo1.js";
import { S as Star } from "./star-CHHGBlil.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode);
function formatPrice(paise) {
  return `₹${(paise / 100).toFixed(0)}`;
}
function ProductDetailPage() {
  const { id } = useParams({ from: "/products/$id" });
  const { data: product, isLoading, isError } = useProduct(id);
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = reactExports.useState(
    null
  );
  const [quantity, setQuantity] = reactExports.useState(1);
  const [added, setAdded] = reactExports.useState(false);
  const activeWeight = selectedWeight ?? (product == null ? void 0 : product.weightOptions[0]) ?? null;
  const handleAdd = () => {
    if (!product || !activeWeight) return;
    addToCart(product, activeWeight, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Skeleton,
        {
          className: "aspect-square rounded-2xl",
          "data-ocid": "product_detail.loading_state"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-2/3 rounded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-1/3 rounded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-40 rounded" })
      ] })
    ] }) }) });
  }
  if (isError || !product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container mx-auto px-4 py-20 text-center",
        "data-ocid": "product_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl mb-4 block", children: "🐟" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Product not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", search: { category: void 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Browse Products" }) })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/products",
        search: { category: void 0 },
        className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-smooth mb-6",
        "data-ocid": "product_detail.back_link",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Back to Products"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden bg-muted border border-border", children: product.images.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.images[0],
          alt: product.name,
          className: "w-full aspect-square object-cover"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-square flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-8xl opacity-30", children: product.category === "fresh_fish" ? "🐟" : product.category === "dry_fish" ? "🐠" : product.category === "chutney" ? "🌿" : "🌶️" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "text-xs border-primary/20 bg-primary/10 text-primary",
              children: product.category === "fresh_fish" ? "🐟 Fresh Cut" : product.category === "dry_fish" ? "🐠 Dry Fish" : product.category === "chutney" ? "🌿 Chutney" : "🌶️ Masala"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-accent font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3 h-3" }),
            " Natural"
          ] }),
          product.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 fill-current" }),
            " Featured"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground mb-3", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: product.description }),
        product.weightOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-2", children: "Select Weight" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-2",
              "data-ocid": "product_detail.weight_select",
              children: product.weightOptions.map((w) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSelectedWeight(w),
                    className: `px-4 py-2 rounded-xl border text-sm font-medium transition-smooth ${((selectedWeight == null ? void 0 : selectedWeight.weight) ?? ((_a = product.weightOptions[0]) == null ? void 0 : _a.weight)) === w.weight ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground hover:border-primary/50"}`,
                    "data-ocid": `product_detail.weight_option.${w.weight}`,
                    children: [
                      w.weight,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs mt-0.5 opacity-70", children: formatPrice(w.price) })
                    ]
                  },
                  w.weight
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-bold text-foreground", children: formatPrice((activeWeight == null ? void 0 : activeWeight.price) ?? product.basePrice) }),
          activeWeight && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-sm", children: [
            "/ ",
            activeWeight.weight
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "px-3 py-2 hover:bg-muted transition-smooth text-foreground",
                onClick: () => setQuantity(Math.max(1, quantity - 1)),
                "data-ocid": "product_detail.quantity_decrease_button",
                children: "−"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-4 py-2 text-sm font-medium min-w-[3rem] text-center border-x border-border",
                "data-ocid": "product_detail.quantity_input",
                children: quantity
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "px-3 py-2 hover:bg-muted transition-smooth text-foreground",
                onClick: () => setQuantity(Math.min(product.stockQuantity, quantity + 1)),
                "data-ocid": "product_detail.quantity_increase_button",
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: `flex-1 gap-2 transition-smooth ${added ? "bg-accent hover:bg-accent" : ""}`,
              onClick: handleAdd,
              disabled: product.stockQuantity === 0,
              "data-ocid": "product_detail.add_to_cart_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
                added ? "Added to Cart!" : "Add to Cart"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: product.stockQuantity > 0 ? `${product.stockQuantity} units in stock` : "Out of stock" })
        ] }),
        added && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-between",
            "data-ocid": "product_detail.success_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-accent font-medium", children: "Item added to cart!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  "data-ocid": "product_detail.go_to_cart_button",
                  children: "View Cart →"
                }
              ) })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  ProductDetailPage
};
