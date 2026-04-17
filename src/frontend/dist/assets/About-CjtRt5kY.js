import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout, F as Fish, a as Leaf, b as Link, B as Button } from "./index-DVaYm-it.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const VALUES = [
  {
    icon: Fish,
    title: "Ocean to Table",
    desc: "We source directly from fishing communities, skipping middlemen to keep products fresh and fishermen fairly paid."
  },
  {
    icon: Leaf,
    title: "Zero Preservatives",
    desc: "Every product is made the traditional way. No artificial flavors, no preservatives — just pure coastal goodness."
  },
  {
    icon: Heart,
    title: "Freshness First",
    desc: "We process every order at dawn. If it isn't fresh on arrival, we replace or refund — unconditionally."
  },
  {
    icon: Award,
    title: "Award-Winning Masalas",
    desc: "Our stone-ground masalas have been recognized as among the most authentic coastal blends in India."
  }
];
const TEAM = [
  {
    name: "Rajan Pillai",
    role: "Founder & Head Fisher",
    desc: "Third-generation fisherman from Kerala's Malabar coast with 30+ years of expertise."
  },
  {
    name: "Deepa Menon",
    role: "Spice Curator",
    desc: "Expert in traditional stone-grinding, trained in Chettinad and Konkan culinary arts."
  },
  {
    name: "Anil Shetty",
    role: "Operations & Freshness Lead",
    desc: "Ensures every order leaves our facility at peak freshness with cold-chain integrity."
  }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-16",
        "data-ocid": "about.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fish, { className: "w-7 h-7 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display-md text-foreground mb-4", children: "Our Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-lg text-muted-foreground", children: "Coastal Catch was born on the Konkan coast with one mission: to bring the freshest, most authentic seafood and coastal flavors directly to your kitchen — without compromise." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", "data-ocid": "about.story_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-base max-w-none text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-lg text-muted-foreground mb-4", children: "What started as a small roadside stall in Ratnagiri has grown into a trusted name in premium seafood delivery. Our founder, Rajan Pillai, grew up watching his father clean and pack fish before sunrise — driven by an obsession with freshness that has never left us." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Today, we partner with 40+ fishing cooperatives along India's western coastline. Every product — from our king fish steaks to our coastal masala blends — is processed the same day and packed with ice for same-day delivery." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We believe great food starts with great sourcing. That's why we publish the name of the fishing community behind every product and guarantee 100% freshness on every order." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-alt py-16", "data-ocid": "about.values_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-sm text-foreground text-center mb-10", children: "What We Stand For" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: VALUES.map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-6 text-center",
          "data-ocid": `about.value.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base mb-2", children: v.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: v.desc })
          ]
        },
        v.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", "data-ocid": "about.team_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-primary mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium uppercase tracking-wider", children: "The People" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-sm text-foreground", children: "Meet the Team" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto", children: TEAM.map((member, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-6 text-center",
          "data-ocid": `about.team_member.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-display font-bold text-secondary-foreground", children: member.name[0] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm", children: member.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium mt-0.5 mb-2", children: member.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: member.desc })
          ]
        },
        member.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-primary", "data-ocid": "about.cta_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-primary-foreground mb-3", children: "Ready to taste the coast?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-sm mb-6", children: "Browse our fresh catch and authentic masalas — delivered to your door." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/products",
          search: { category: void 0 },
          "data-ocid": "about.shop_now_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "lg",
              className: "border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10",
              children: "Shop Now"
            }
          )
        }
      )
    ] }) })
  ] });
}
export {
  AboutPage
};
