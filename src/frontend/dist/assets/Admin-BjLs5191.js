import { c as createLucideIcon, r as reactExports, l as useQueryClient, j as jsxRuntimeExports, L as Layout, B as Button, C as CATEGORIES, S as Skeleton, g as Badge, X } from "./index-DVaYm-it.js";
import { a as useProducts } from "./useProducts-DUDXQDo1.js";
import { S as Shield } from "./shield-4gbXcCXO.js";
import { P as Plus, T as Trash2 } from "./trash-2-CUyII505.js";
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode);
const ADMIN_KEY = "admin";
function formatPrice(paise) {
  return `₹${(paise / 100).toFixed(0)}`;
}
const CAT_LABELS = {
  fresh_fish: "Fresh Cut",
  dry_fish: "Dry Fish",
  chutney: "Chutney",
  masala: "Masala"
};
const EMPTY_FORM = {
  name: "",
  description: "",
  category: "fresh_fish",
  basePrice: "",
  stockQuantity: "",
  weightOptionsRaw: "250g:160,500g:300",
  featured: false
};
function productToForm(p) {
  return {
    name: p.name,
    description: p.description,
    category: p.category,
    basePrice: String(p.basePrice / 100),
    stockQuantity: String(p.stockQuantity),
    weightOptionsRaw: p.weightOptions.map((w) => `${w.weight}:${w.price / 100}`).join(","),
    featured: p.featured
  };
}
function parseWeightOptions(raw) {
  return raw.split(",").map((s) => s.trim()).filter(Boolean).map((s) => {
    const [weight, price] = s.split(":");
    return {
      weight: (weight == null ? void 0 : weight.trim()) ?? "",
      price: Math.round(Number.parseFloat(price ?? "0") * 100)
    };
  }).filter((w) => w.weight && w.price > 0);
}
function ProductModal({ editProduct, onClose, onSave }) {
  const [form, setForm] = reactExports.useState(
    editProduct ? productToForm(editProduct) : EMPTY_FORM
  );
  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form, editProduct == null ? void 0 : editProduct.id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm",
      "data-ocid": "admin.dialog",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 pt-6 pb-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground", children: editProduct ? "Edit Product" : "Add New Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground",
              "aria-label": "Close",
              "data-ocid": "admin.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "px-6 py-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "pf-name",
                className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                children: "Product Name *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "pf-name",
                type: "text",
                required: true,
                value: form.name,
                onChange: (e) => set("name", e.target.value),
                placeholder: "e.g. King Fish Steaks",
                className: "w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary",
                "data-ocid": "admin.product_name_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "pf-desc",
                className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                children: "Description *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "pf-desc",
                required: true,
                rows: 3,
                value: form.description,
                onChange: (e) => set("description", e.target.value),
                placeholder: "Brief description of the product...",
                className: "w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none",
                "data-ocid": "admin.product_description_textarea"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "pf-cat",
                  className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                  children: "Category *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  id: "pf-cat",
                  value: form.category,
                  onChange: (e) => set("category", e.target.value),
                  className: "w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary",
                  "data-ocid": "admin.product_category_select",
                  children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: cat.id, children: [
                    cat.emoji,
                    " ",
                    cat.label
                  ] }, cat.id))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "pf-price",
                  className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                  children: "Base Price (₹) *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "pf-price",
                  type: "number",
                  required: true,
                  min: "1",
                  value: form.basePrice,
                  onChange: (e) => set("basePrice", e.target.value),
                  placeholder: "160",
                  className: "w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary",
                  "data-ocid": "admin.product_price_input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "pf-stock",
                className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                children: "Stock Quantity *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "pf-stock",
                type: "number",
                required: true,
                min: "0",
                value: form.stockQuantity,
                onChange: (e) => set("stockQuantity", e.target.value),
                placeholder: "50",
                className: "w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary",
                "data-ocid": "admin.product_stock_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "pf-weights",
                className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                children: "Weight Options"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "pf-weights",
                type: "text",
                value: form.weightOptionsRaw,
                onChange: (e) => set("weightOptionsRaw", e.target.value),
                placeholder: "250g:160,500g:300,1kg:580",
                className: "w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono",
                "data-ocid": "admin.product_weights_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                id: "featured-check",
                checked: form.featured,
                onChange: (e) => set("featured", e.target.checked),
                className: "w-4 h-4 accent-primary cursor-pointer",
                "data-ocid": "admin.product_featured_checkbox"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "featured-check",
                className: "text-sm text-foreground cursor-pointer select-none",
                children: "Mark as Featured product"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                className: "flex-1",
                onClick: onClose,
                "data-ocid": "admin.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "flex-1",
                "data-ocid": "admin.confirm_button",
                children: editProduct ? "Save Changes" : "Add Product"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function AdminPage() {
  const [authenticated, setAuthenticated] = reactExports.useState(false);
  const [password, setPassword] = reactExports.useState("");
  const [authError, setAuthError] = reactExports.useState("");
  const [filterCat, setFilterCat] = reactExports.useState("all");
  const [showModal, setShowModal] = reactExports.useState(false);
  const [editTarget, setEditTarget] = reactExports.useState(null);
  const { data: products, isLoading } = useProducts();
  const queryClient = useQueryClient();
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_KEY) {
      setAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect password");
    }
  };
  const openAddModal = () => {
    setEditTarget(null);
    setShowModal(true);
  };
  const openEditModal = (product) => {
    setEditTarget(product);
    setShowModal(true);
  };
  const handleModalSave = (data, existingId) => {
    var _a, _b;
    const weightOptions = parseWeightOptions(data.weightOptionsRaw);
    const newProduct = {
      id: existingId ?? String(Date.now()),
      name: data.name,
      description: data.description,
      category: data.category,
      basePrice: Math.round(Number.parseFloat(data.basePrice) * 100),
      stockQuantity: Number.parseInt(data.stockQuantity, 10),
      weightOptions,
      featured: data.featured,
      images: existingId ? ((_a = products == null ? void 0 : products.find((p) => p.id === existingId)) == null ? void 0 : _a.images) ?? [] : [],
      createdAt: existingId ? ((_b = products == null ? void 0 : products.find((p) => p.id === existingId)) == null ? void 0 : _b.createdAt) ?? BigInt(Date.now()) : BigInt(Date.now())
    };
    queryClient.setQueryData(["products"], (old) => {
      if (!old) return [newProduct];
      if (existingId) {
        return old.map((p) => p.id === existingId ? newProduct : p);
      }
      return [...old, newProduct];
    });
    setShowModal(false);
    setEditTarget(null);
  };
  const handleDelete = (product) => {
    const confirmed = window.confirm(
      `Delete "${product.name}"? This action cannot be undone.`
    );
    if (!confirmed) return;
    queryClient.setQueryData(
      ["products"],
      (old) => old ? old.filter((p) => p.id !== product.id) : []
    );
  };
  if (!authenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "container mx-auto px-4 py-20 max-w-sm",
        "data-ocid": "admin.login_page",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 text-center shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground mb-1", children: "Admin Access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-6", children: "Enter your password to manage products." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                placeholder: "Password",
                className: "w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary",
                "data-ocid": "admin.password_input"
              }
            ),
            authError && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-destructive",
                "data-ocid": "admin.password_field_error",
                children: authError
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "w-full",
                "data-ocid": "admin.login_button",
                children: "Sign In"
              }
            )
          ] })
        ] })
      }
    ) });
  }
  const filtered = (products ?? []).filter(
    (p) => filterCat === "all" || p.category === filterCat
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Product Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-0.5", children: [
            (products ?? []).length,
            " total products"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            className: "gap-2",
            onClick: openAddModal,
            "data-ocid": "admin.add_product_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              " Add Product"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex gap-2 flex-wrap mb-6",
          "data-ocid": "admin.category_filter",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setFilterCat("all"),
                className: `px-4 py-1.5 rounded-full text-sm border transition-smooth ${filterCat === "all" ? "bg-primary/10 text-primary border-primary/30" : "border-border text-muted-foreground hover:border-primary/30"}`,
                "data-ocid": "admin.filter.all_tab",
                children: "All"
              }
            ),
            CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setFilterCat(cat.id),
                className: `px-4 py-1.5 rounded-full text-sm border transition-smooth ${filterCat === cat.id ? "bg-primary/10 text-primary border-primary/30" : "border-border text-muted-foreground hover:border-primary/30"}`,
                "data-ocid": `admin.filter.${cat.id}_tab`,
                children: [
                  cat.emoji,
                  " ",
                  cat.label
                ]
              },
              cat.id
            ))
          ]
        }
      ),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "admin.loading_state", children: ["a", "b", "c", "d", "e"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 rounded-xl" }, k)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-16 text-muted-foreground",
          "data-ocid": "admin.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl block mb-3", children: "🐟" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No products in this category." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-card border border-border rounded-xl overflow-hidden",
          "data-ocid": "admin.products_table",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell", children: "Stock" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: filtered.map((product, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-muted/20 transition-smooth",
                "data-ocid": `admin.product_row.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: product.category === "fresh_fish" ? "🐟" : product.category === "dry_fish" ? "🐠" : product.category === "chutney" ? "🌿" : "🌶️" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: product.name }),
                      product.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary", children: "★ Featured" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: CAT_LABELS[product.category] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-mono font-medium", children: formatPrice(product.basePrice) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-xs font-medium ${product.stockQuantity < 10 ? "text-destructive" : "text-accent"}`,
                      children: [
                        product.stockQuantity,
                        " units"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        size: "icon",
                        variant: "ghost",
                        className: "w-8 h-8",
                        "aria-label": "Edit product",
                        onClick: () => openEditModal(product),
                        "data-ocid": `admin.edit_button.${idx + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        size: "icon",
                        variant: "ghost",
                        className: "w-8 h-8 text-destructive hover:text-destructive hover:bg-destructive/10",
                        "aria-label": "Delete product",
                        onClick: () => handleDelete(product),
                        "data-ocid": `admin.delete_button.${idx + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                      }
                    )
                  ] }) })
                ]
              },
              product.id
            )) })
          ] })
        }
      )
    ] }),
    showModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductModal,
      {
        editProduct: editTarget,
        onClose: () => {
          setShowModal(false);
          setEditTarget(null);
        },
        onSave: handleModalSave
      }
    )
  ] });
}
export {
  AdminPage
};
