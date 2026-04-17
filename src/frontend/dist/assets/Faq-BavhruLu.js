import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout, r as reactExports } from "./index-DVaYm-it.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode);
const FAQS = [
  {
    question: "How fresh is your fish?",
    answer: "All our fresh cuts are processed the morning of your order. We source directly from fishing boats at dawn and have your order packed and dispatched within 3 hours of landing."
  },
  {
    question: "What areas do you deliver to?",
    answer: "We currently deliver all around Mysore. We are expanding to more cities soon."
  },
  {
    question: "What is your freshness guarantee?",
    answer: "If your seafood arrives and doesn't smell or look fresh, contact us within 2 hours with a photo. We'll dispatch a replacement or issue a full refund — no questions asked."
  },
  {
    question: "Are your masalas spicy?",
    answer: "Our masalas come in three levels of spiciness — Mild, Medium, and Hot — so there's something for every palate. Each product page clearly lists the spice level. Whether you prefer a gentle warmth or a bold kick, we have you covered."
  },
  {
    question: "Do you use preservatives?",
    answer: "Never. Our fresh fish has zero additives. Our dry fish is sun-dried only. Our masalas and chutneys are stone-ground with natural spices — no artificial colors, flavors, or preservatives."
  },
  {
    question: "How do I store the products?",
    answer: "Fresh cuts: refrigerate and use within 24 hours, or freeze for up to 2 weeks. Dry fish: cool, dry place for up to 3 months. Masalas: airtight container, away from moisture, up to 6 months."
  },
  {
    question: "What's the minimum order?",
    answer: "No minimum order. Orders above ₹500 qualify for free delivery. Below that, a flat ₹49 delivery fee applies."
  },
  {
    question: "Can I change or cancel my order?",
    answer: "Orders can be changed or cancelled within 1 hour of placement. After that, we've already started preparation. Contact our support team immediately if you need to make changes."
  }
];
function FaqItem({
  question,
  answer,
  index
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border rounded-xl overflow-hidden",
      "data-ocid": `faq.item.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen((o) => !o),
            className: "w-full flex items-center justify-between px-5 py-4 text-left bg-card hover:bg-muted/50 transition-smooth",
            "data-ocid": `faq.toggle.${index}`,
            "aria-expanded": open,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm pr-4", children: question }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: `w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed bg-card border-t border-border", children: answer })
      ]
    }
  );
}
function FaqPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-12",
        "data-ocid": "faq.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display-sm text-foreground mb-3", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Everything you need to know about Coastal Catch." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 bg-background",
        "data-ocid": "faq.questions_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FAQS.map((faq, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FaqItem,
            {
              question: faq.question,
              answer: faq.answer,
              index: idx + 1
            },
            faq.question
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-10 p-6 bg-muted/30 border border-border rounded-xl text-center",
              "data-ocid": "faq.contact_card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm mb-1", children: "Still have questions?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Reach out to our friendly team — we're happy to help." })
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  FaqPage
};
