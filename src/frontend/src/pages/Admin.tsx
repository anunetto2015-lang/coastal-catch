import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/useProducts";
import {
  CATEGORIES,
  type Category,
  type Product,
  type WeightOption,
} from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Pencil, Plus, Shield, Trash2, X } from "lucide-react";
import { useState } from "react";

const ADMIN_KEY = "admin";

function formatPrice(paise: number): string {
  return `₹${(paise / 100).toFixed(0)}`;
}

const CAT_LABELS: Record<Category, string> = {
  fresh_fish: "Fresh Cut",
  dry_fish: "Dry Fish",
  chutney: "Chutney",
  masala: "Masala",
};

interface ProductFormData {
  name: string;
  description: string;
  category: Category;
  basePrice: string;
  stockQuantity: string;
  weightOptionsRaw: string;
  featured: boolean;
}

const EMPTY_FORM: ProductFormData = {
  name: "",
  description: "",
  category: "fresh_fish",
  basePrice: "",
  stockQuantity: "",
  weightOptionsRaw: "250g:160,500g:300",
  featured: false,
};

function productToForm(p: Product): ProductFormData {
  return {
    name: p.name,
    description: p.description,
    category: p.category,
    basePrice: String(p.basePrice / 100),
    stockQuantity: String(p.stockQuantity),
    weightOptionsRaw: p.weightOptions
      .map((w) => `${w.weight}:${w.price / 100}`)
      .join(","),
    featured: p.featured,
  };
}

function parseWeightOptions(raw: string): WeightOption[] {
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const [weight, price] = s.split(":");
      return {
        weight: weight?.trim() ?? "",
        price: Math.round(Number.parseFloat(price ?? "0") * 100),
      };
    })
    .filter((w) => w.weight && w.price > 0);
}

interface ProductModalProps {
  editProduct: Product | null;
  onClose: () => void;
  onSave: (data: ProductFormData, existingId?: string) => void;
}

function ProductModal({ editProduct, onClose, onSave }: ProductModalProps) {
  const [form, setForm] = useState<ProductFormData>(
    editProduct ? productToForm(editProduct) : EMPTY_FORM,
  );

  const set = (key: keyof ProductFormData, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form, editProduct?.id);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm"
      data-ocid="admin.dialog"
    >
      <div className="bg-card border border-border rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
          <h2 className="font-display font-bold text-lg text-foreground">
            {editProduct ? "Edit Product" : "Add New Product"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground"
            aria-label="Close"
            data-ocid="admin.close_button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="pf-name"
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
            >
              Product Name *
            </label>
            <input
              id="pf-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. King Fish Steaks"
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              data-ocid="admin.product_name_input"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="pf-desc"
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
            >
              Description *
            </label>
            <textarea
              id="pf-desc"
              required
              rows={3}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Brief description of the product..."
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              data-ocid="admin.product_description_textarea"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label
                htmlFor="pf-cat"
                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
              >
                Category *
              </label>
              <select
                id="pf-cat"
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                data-ocid="admin.product_category_select"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.emoji} {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="pf-price"
                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
              >
                Base Price (₹) *
              </label>
              <input
                id="pf-price"
                type="number"
                required
                min="1"
                value={form.basePrice}
                onChange={(e) => set("basePrice", e.target.value)}
                placeholder="160"
                className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                data-ocid="admin.product_price_input"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="pf-stock"
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
            >
              Stock Quantity *
            </label>
            <input
              id="pf-stock"
              type="number"
              required
              min="0"
              value={form.stockQuantity}
              onChange={(e) => set("stockQuantity", e.target.value)}
              placeholder="50"
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              data-ocid="admin.product_stock_input"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="pf-weights"
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
            >
              Weight Options
            </label>
            <input
              id="pf-weights"
              type="text"
              value={form.weightOptionsRaw}
              onChange={(e) => set("weightOptionsRaw", e.target.value)}
              placeholder="250g:160,500g:300,1kg:580"
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono"
              data-ocid="admin.product_weights_input"
            />
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            <input
              type="checkbox"
              id="featured-check"
              checked={form.featured}
              onChange={(e) => set("featured", e.target.checked)}
              className="w-4 h-4 accent-primary cursor-pointer"
              data-ocid="admin.product_featured_checkbox"
            />
            <label
              htmlFor="featured-check"
              className="text-sm text-foreground cursor-pointer select-none"
            >
              Mark as Featured product
            </label>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
              data-ocid="admin.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              data-ocid="admin.confirm_button"
            >
              {editProduct ? "Save Changes" : "Add Product"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [filterCat, setFilterCat] = useState<Category | "all">("all");
  const [showModal, setShowModal] = useState(false);
  const [editTarget, setEditTarget] = useState<Product | null>(null);

  const { data: products, isLoading } = useProducts();
  const queryClient = useQueryClient();

  const handleLogin = (e: React.FormEvent) => {
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

  const openEditModal = (product: Product) => {
    setEditTarget(product);
    setShowModal(true);
  };

  const handleModalSave = (data: ProductFormData, existingId?: string) => {
    const weightOptions = parseWeightOptions(data.weightOptionsRaw);
    const newProduct: Product = {
      id: existingId ?? String(Date.now()),
      name: data.name,
      description: data.description,
      category: data.category,
      basePrice: Math.round(Number.parseFloat(data.basePrice) * 100),
      stockQuantity: Number.parseInt(data.stockQuantity, 10),
      weightOptions,
      featured: data.featured,
      images: existingId
        ? (products?.find((p) => p.id === existingId)?.images ?? [])
        : [],
      createdAt: existingId
        ? (products?.find((p) => p.id === existingId)?.createdAt ??
          BigInt(Date.now()))
        : BigInt(Date.now()),
    };

    queryClient.setQueryData<Product[]>(["products"], (old) => {
      if (!old) return [newProduct];
      if (existingId) {
        return old.map((p) => (p.id === existingId ? newProduct : p));
      }
      return [...old, newProduct];
    });

    setShowModal(false);
    setEditTarget(null);
  };

  const handleDelete = (product: Product) => {
    const confirmed = window.confirm(
      `Delete "${product.name}"? This action cannot be undone.`,
    );
    if (!confirmed) return;

    queryClient.setQueryData<Product[]>(["products"], (old) =>
      old ? old.filter((p) => p.id !== product.id) : [],
    );
  };

  if (!authenticated) {
    return (
      <Layout>
        <div
          className="container mx-auto px-4 py-20 max-w-sm"
          data-ocid="admin.login_page"
        >
          <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h1 className="font-display text-xl font-bold text-foreground mb-1">
              Admin Access
            </h1>
            <p className="text-xs text-muted-foreground mb-6">
              Enter your password to manage products.
            </p>
            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                data-ocid="admin.password_input"
              />
              {authError && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.password_field_error"
                >
                  {authError}
                </p>
              )}
              <Button
                type="submit"
                className="w-full"
                data-ocid="admin.login_button"
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  const filtered = (products ?? []).filter(
    (p) => filterCat === "all" || p.category === filterCat,
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              Product Management
            </h1>
            <p className="text-muted-foreground text-sm mt-0.5">
              {(products ?? []).length} total products
            </p>
          </div>
          <Button
            type="button"
            className="gap-2"
            onClick={openAddModal}
            data-ocid="admin.add_product_button"
          >
            <Plus className="w-4 h-4" /> Add Product
          </Button>
        </div>

        {/* Category filter */}
        <div
          className="flex gap-2 flex-wrap mb-6"
          data-ocid="admin.category_filter"
        >
          <button
            type="button"
            onClick={() => setFilterCat("all")}
            className={`px-4 py-1.5 rounded-full text-sm border transition-smooth ${filterCat === "all" ? "bg-primary/10 text-primary border-primary/30" : "border-border text-muted-foreground hover:border-primary/30"}`}
            data-ocid="admin.filter.all_tab"
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setFilterCat(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-smooth ${filterCat === cat.id ? "bg-primary/10 text-primary border-primary/30" : "border-border text-muted-foreground hover:border-primary/30"}`}
              data-ocid={`admin.filter.${cat.id}_tab`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="space-y-3" data-ocid="admin.loading_state">
            {["a", "b", "c", "d", "e"].map((k) => (
              <Skeleton key={k} className="h-14 rounded-xl" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="text-center py-16 text-muted-foreground"
            data-ocid="admin.empty_state"
          >
            <span className="text-4xl block mb-3">🐟</span>
            <p className="text-sm">No products in this category.</p>
          </div>
        ) : (
          <div
            className="bg-card border border-border rounded-xl overflow-hidden"
            data-ocid="admin.products_table"
          >
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/30">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Product
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Category
                  </th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Price
                  </th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                    Stock
                  </th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((product, idx) => (
                  <tr
                    key={product.id}
                    className="hover:bg-muted/20 transition-smooth"
                    data-ocid={`admin.product_row.${idx + 1}`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <span className="text-base">
                            {product.category === "fresh_fish"
                              ? "🐟"
                              : product.category === "dry_fish"
                                ? "🐠"
                                : product.category === "chutney"
                                  ? "🌿"
                                  : "🌶️"}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-foreground truncate">
                            {product.name}
                          </p>
                          {product.featured && (
                            <span className="text-xs text-primary">
                              ★ Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <Badge variant="outline" className="text-xs">
                        {CAT_LABELS[product.category]}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-medium">
                      {formatPrice(product.basePrice)}
                    </td>
                    <td className="px-4 py-3 text-right hidden sm:table-cell">
                      <span
                        className={`text-xs font-medium ${product.stockQuantity < 10 ? "text-destructive" : "text-accent"}`}
                      >
                        {product.stockQuantity} units
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          className="w-8 h-8"
                          aria-label="Edit product"
                          onClick={() => openEditModal(product)}
                          data-ocid={`admin.edit_button.${idx + 1}`}
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          className="w-8 h-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                          aria-label="Delete product"
                          onClick={() => handleDelete(product)}
                          data-ocid={`admin.delete_button.${idx + 1}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <ProductModal
          editProduct={editTarget}
          onClose={() => {
            setShowModal(false);
            setEditTarget(null);
          }}
          onSave={handleModalSave}
        />
      )}
    </Layout>
  );
}
