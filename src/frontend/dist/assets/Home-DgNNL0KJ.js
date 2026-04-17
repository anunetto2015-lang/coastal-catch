import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout, a as Leaf, b as Link, B as Button, C as CATEGORIES, S as Skeleton } from "./index-DVaYm-it.js";
import { P as ProductCard } from "./ProductCard-C4HOkZ1a.js";
import { u as useFeaturedProducts } from "./useProducts-DUDXQDo1.js";
import { A as ArrowRight } from "./arrow-right-Da8GHfFv.js";
import { S as Shield } from "./shield-4gbXcCXO.js";
import { S as Star } from "./star-CHHGBlil.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
const TRUST_BADGES = [
  {
    icon: Clock,
    label: "Same-Day Delivery",
    desc: "Order by 10 AM for evening delivery"
  },
  {
    icon: Shield,
    label: "Freshness Guaranteed",
    desc: "Money-back if not 100% fresh"
  },
  { icon: Truck, label: "Free Delivery", desc: "On orders above ₹500" },
  { icon: Leaf, label: "100% Natural", desc: "No preservatives, no additives" }
];
const TESTIMONIALS = [
  {
    name: "Priya Nair",
    location: "Mangalore",
    stars: 5,
    text: "The king fish steaks were absolutely fresh — smelled like the sea! Best delivery I've ever had."
  },
  {
    name: "Arjun Sharma",
    location: "Mangalore",
    stars: 5,
    text: "The coastal fish masala is incredible. My wife thought I'd learned to cook from scratch!"
  },
  {
    name: "Meena Pillai",
    location: "Mangalore",
    stars: 5,
    text: "Prawn balchão chutney is exactly like my grandmother used to make. Authentic and flavorful."
  }
];
function HomePage() {
  const { data: featured, isLoading } = useFeaturedProducts();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[70vh] flex items-center overflow-hidden bg-foreground",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/hero-seafood.dim_1400x700.jpg",
              alt: "Fresh seafood selection",
              className: "absolute inset-0 w-full h-full object-cover object-center opacity-60"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-gradient absolute inset-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-primary-foreground/80 bg-primary/30 border border-primary/40 rounded-full px-3 py-1 mb-5 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3 h-3" }),
              " Wild-Caught · Freshly Packed"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display-lg text-white md:text-6xl mb-5 leading-[1.1]", children: [
              "From the Coast",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "to Your Kitchen"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-lg text-white/80 mb-8 max-w-md", children: "Discover premium wild-caught seafood, sun-dried fish, and authentic stone-ground masalas — delivered fresh." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/products",
                  search: { category: void 0 },
                  "data-ocid": "home.shop_now_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "gap-2 font-medium", children: [
                    "Shop the Catch ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", "data-ocid": "home.our_story_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "gap-2 border-white/30 text-white bg-white/10 hover:bg-white/20",
                  children: "Our Story"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2 bg-primary/40 border border-primary/50 text-primary-foreground text-xs font-medium px-4 py-2 rounded-full",
                "data-ocid": "home.delivery_area_badge",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-3.5 h-3.5 shrink-0" }),
                  "Currently delivering in Mysore only"
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: TRUST_BADGES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "w-4 h-4 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground leading-tight", children: b.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: b.desc })
      ] })
    ] }, b.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "home.categories_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-sm text-foreground mb-2", children: "Explore Our Range" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base", children: "Every product crafted with coastal tradition and freshness first" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: CATEGORIES.map((cat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/products",
              search: { category: cat.id },
              className: "group block",
              "data-ocid": `home.category_card.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-secondary/20 border border-border p-6 text-center hover:border-primary/40 hover:shadow-card transition-smooth group-hover:-translate-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl mb-3 block", children: cat.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base mb-1", children: cat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: cat.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-xs text-primary font-medium", children: [
                  "Shop Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                ] })
              ] })
            },
            cat.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-alt py-16", "data-ocid": "home.featured_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary font-medium mb-1", children: "Hand-Picked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-sm text-foreground", children: "Today's Fresh Catch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/products",
            search: { category: void 0 },
            "data-ocid": "home.view_all_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "gap-1", children: [
              "View All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
            ] })
          }
        )
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: ["a", "b", "c", "d"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[4/3] rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4 rounded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2 rounded" })
      ] }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: (featured ?? []).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-primary text-primary-foreground",
        "data-ocid": "home.freshness_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-10 h-10 mx-auto mb-4 opacity-80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-3", children: "The Coastal Catch Promise" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/85 text-base leading-relaxed mb-6", children: "Every order is processed at dawn, packed with ice, and dispatched the same morning. If your seafood isn't fresh on arrival, we'll replace or refund — no questions asked." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", "data-ocid": "home.freshness_cta_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "lg",
              className: "border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10",
              children: "Learn More About Us"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "home.testimonials_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-sm text-foreground mb-2", children: "Loved by Families Across the Coast" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Real customers, genuine reviews" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-6 shadow-subtle",
              "data-ocid": `home.testimonial.${TESTIMONIALS.indexOf(t) + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-3", children: Array.from({ length: t.stars }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: "w-4 h-4 fill-secondary text-secondary"
                  },
                  `star-${t.name}-${i}`
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground leading-relaxed mb-4 italic", children: [
                  '"',
                  t.text,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: t.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.location })
                ] })
              ]
            },
            t.name
          )) })
        ] })
      }
    )
  ] });
}
export {
  HomePage
};
