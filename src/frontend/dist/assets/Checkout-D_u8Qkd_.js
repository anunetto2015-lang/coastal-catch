import { j as jsxRuntimeExports, d as cn, r as reactExports, i as createSlot, k as useNavigate, e as useCart, L as Layout, B as Button } from "./index-DVaYm-it.js";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function formatPrice(paise) {
  return `₹${(paise / 100).toFixed(0)}`;
}
const EMPTY = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: ""
};
function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  const [details, setDetails] = reactExports.useState(EMPTY);
  const [errors, setErrors] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const delivery = cartTotal >= 5e4 ? 0 : 4900;
  const grandTotal = cartTotal + delivery;
  const validate = () => {
    const e = {};
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    clearCart();
    navigate({ to: "/order-confirmation" });
  };
  if (cartCount === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Your cart is empty." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => navigate({ to: "/products", search: { category: void 0 } }),
          children: "Browse Products"
        }
      )
    ] }) });
  }
  const field = (id, label, type = "text", placeholder = "") => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id,
        type,
        placeholder,
        value: details[id],
        onChange: (e) => setDetails((d) => ({ ...d, [id]: e.target.value })),
        onBlur: validate,
        className: errors[id] ? "border-destructive" : "",
        "data-ocid": `checkout.${id}_input`
      }
    ),
    errors[id] && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-xs text-destructive",
        "data-ocid": `checkout.${id}_field_error`,
        children: errors[id]
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground mb-8", children: "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-6",
          "data-ocid": "checkout.customer_form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-foreground mb-5", children: "Delivery Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: field("name", "Full Name", "text", "Your full name") }),
              field("email", "Email Address", "email", "you@example.com"),
              field("phone", "Phone Number", "tel", "10-digit mobile"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: field(
                "address",
                "Delivery Address",
                "text",
                "Street address, building, flat no."
              ) }),
              field("city", "City", "text", "Mumbai"),
              field("pincode", "Pincode", "text", "400001")
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-6 sticky top-24",
          "data-ocid": "checkout.order_summary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-foreground mb-4", children: "Order Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: cartItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex justify-between text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground truncate flex-1 mr-2", children: [
                    item.product.name,
                    " (",
                    item.selectedWeight.weight,
                    ") ×",
                    item.quantity
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium shrink-0", children: formatPrice(item.selectedWeight.price * item.quantity) })
                ]
              },
              `${item.product.id}-${item.selectedWeight.weight}`
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Delivery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: delivery === 0 ? "FREE" : formatPrice(delivery) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-foreground text-base border-t border-border pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(grandTotal) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                size: "lg",
                className: "w-full mt-5",
                disabled: loading,
                "data-ocid": "checkout.place_order_button",
                children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-2",
                    "data-ocid": "checkout.loading_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" }),
                      "Placing Order…"
                    ]
                  }
                ) : "Place Order"
              }
            )
          ]
        }
      ) })
    ] }) })
  ] }) });
}
export {
  CheckoutPage
};
