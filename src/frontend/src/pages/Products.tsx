import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts, useProductsByCategory } from "@/hooks/useProducts";
import { CATEGORIES, type Category } from "@/types";
import { Link, useSearch } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export function ProductsPage() {
  const search = useSearch({ from: "/products" });
  const [activeCategory, setActiveCategory] = useState<Category | "all">(
    (search.category as Category) || "all",
  );

  const { data: allProducts, isLoading: loadingAll } = useProducts();
  const { data: catProducts, isLoading: loadingCat } = useProductsByCategory(
    activeCategory !== "all" ? activeCategory : "fresh_fish",
  );

  const isLoading = activeCategory === "all" ? loadingAll : loadingCat;
  const products =
    activeCategory === "all" ? (allProducts ?? []) : (catProducts ?? []);

  return (
    <Layout>
      {/* Page header */}
      <section className="bg-card border-b border-border py-10">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">
            Our Selection
          </p>
          <h1 className="text-display-sm text-foreground mb-1">All Products</h1>
          <p className="text-muted-foreground text-sm">
            {products.length} products — wild-caught, naturally processed, and
            packed fresh
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters */}
          <aside
            className="w-full md:w-56 shrink-0"
            data-ocid="products.filter_sidebar"
          >
            <div className="bg-card border border-border rounded-xl p-4 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm font-semibold text-foreground">
                  Categories
                </p>
              </div>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-smooth ${
                    activeCategory === "all"
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground hover:bg-muted"
                  }`}
                  data-ocid="products.filter.all_tab"
                >
                  🛒 All Products
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-smooth ${
                      activeCategory === cat.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                    data-ocid={`products.filter.${cat.id}_tab`}
                  >
                    {cat.emoji} {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {["a", "b", "c", "d", "e", "f"].map((k) => (
                  <div key={k} className="space-y-3">
                    <Skeleton
                      className="aspect-[4/3] rounded-xl"
                      data-ocid="products.loading_state"
                    />
                    <Skeleton className="h-4 w-3/4 rounded" />
                    <Skeleton className="h-3 w-1/2 rounded" />
                  </div>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-20 text-center"
                data-ocid="products.empty_state"
              >
                <span className="text-6xl mb-4">🐟</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Try a different category or check back soon.
                </p>
                <Button
                  onClick={() => setActiveCategory("all")}
                  data-ocid="products.clear_filter_button"
                >
                  Show All Products
                </Button>
              </div>
            ) : (
              <>
                <p className="text-xs text-muted-foreground mb-4">
                  {products.length} items
                </p>
                <div
                  className="grid grid-cols-2 lg:grid-cols-3 gap-5"
                  data-ocid="products.list"
                >
                  {products.map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={i + 1}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
