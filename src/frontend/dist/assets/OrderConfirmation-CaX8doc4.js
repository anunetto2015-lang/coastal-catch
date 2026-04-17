import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout, b as Link, B as Button } from "./index-DVaYm-it.js";
import { A as ArrowRight } from "./arrow-right-Da8GHfFv.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode);
const STEPS = [
  "Our team picks your order from today's catch",
  "Cleaned, packed, and iced within the hour",
  "Dispatched to you with live tracking",
  "Arrives fresh at your doorstep"
];
function OrderConfirmationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "container mx-auto px-4 py-20 max-w-xl text-center",
      "data-ocid": "order_confirmation.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-10 h-10 text-accent" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground mb-3", children: "Order Confirmed!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mb-2", children: "Thank you for your order. Your fresh catch is being prepared for delivery." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8", children: "You'll receive a confirmation on your registered email once your order is dispatched." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-5 mb-8 text-left space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "What happens next?" }),
          STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-start gap-3 text-sm text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold", children: i + 1 }),
                step
              ]
            },
            step
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/products",
            search: { category: void 0 },
            "data-ocid": "order_confirmation.continue_shopping_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "gap-2", children: [
              "Continue Shopping ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          }
        )
      ]
    }
  ) });
}
export {
  OrderConfirmationPage
};
