import { c as createLucideIcon, u as useSearch, r as reactExports, j as jsxRuntimeExports, L as Layout, C as CATEGORIES, S as Skeleton, B as Button } from "./index-DVaYm-it.js";
import { P as ProductCard } from "./ProductCard-C4HOkZ1a.js";
import { a as useProducts, b as useProductsByCategory } from "./useProducts-DUDXQDo1.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
function ProductsPage() {
  const search = useSearch({ from: "/products" });
  const [activeCategory, setActiveCategory] = reactExports.useState(
    search.category || "all"
  );
  const { data: allProducts, isLoading: loadingAll } = useProducts();
  const { data: catProducts, isLoading: loadingCat } = useProductsByCategory(
    activeCategory !== "all" ? activeCategory : "fresh_fish"
  );
  const isLoading = activeCategory === "all" ? loadingAll : loadingCat;
  const products = activeCategory === "all" ? allProducts ?? [] : catProducts ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary font-medium mb-2", children: "Our Selection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display-sm text-foreground mb-1", children: "All Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
        products.length,
        " products — wild-caught, naturally processed, and packed fresh"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "aside",
        {
          className: "w-full md:w-56 shrink-0",
          "data-ocid": "products.filter_sidebar",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 sticky top-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Categories" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveCategory("all"),
                  className: `w-full text-left px-3 py-2.5 rounded-lg text-sm transition-smooth ${activeCategory === "all" ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"}`,
                  "data-ocid": "products.filter.all_tab",
                  children: "🛒 All Products"
                }
              ),
              CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveCategory(cat.id),
                  className: `w-full text-left px-3 py-2.5 rounded-lg text-sm transition-smooth ${activeCategory === cat.id ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"}`,
                  "data-ocid": `products.filter.${cat.id}_tab`,
                  children: [
                    cat.emoji,
                    " ",
                    cat.label
                  ]
                },
                cat.id
              ))
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-5", children: ["a", "b", "c", "d", "e", "f"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Skeleton,
          {
            className: "aspect-[4/3] rounded-xl",
            "data-ocid": "products.loading_state"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4 rounded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2 rounded" })
      ] }, k)) }) : products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-20 text-center",
          "data-ocid": "products.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl mb-4", children: "🐟" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-2", children: "No products found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-4", children: "Try a different category or check back soon." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => setActiveCategory("all"),
                "data-ocid": "products.clear_filter_button",
                children: "Show All Products"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
          products.length,
          " items"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-2 lg:grid-cols-3 gap-5",
            "data-ocid": "products.list",
            children: products.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ProductCard,
              {
                product,
                index: i + 1
              },
              product.id
            ))
          }
        )
      ] }) })
    ] }) })
  ] });
}
export {
  ProductsPage
};
