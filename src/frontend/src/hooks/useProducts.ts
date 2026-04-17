import { SAMPLE_PRODUCTS } from "@/types";
import type { Category, Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

// Backend actor integration — falls back to sample data until backend bindings are available
function useActor() {
  return { actor: null as null, isFetching: false };
}

export function useProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (actor) {
        // @ts-expect-error - actor type depends on backend bindings
        return actor.listProducts();
      }
      return SAMPLE_PRODUCTS;
    },
    enabled: !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useProductsByCategory(category: Category) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "category", category],
    queryFn: async () => {
      if (actor) {
        // @ts-expect-error - actor type depends on backend bindings
        return actor.listProductsByCategory(category);
      }
      return SAMPLE_PRODUCTS.filter((p) => p.category === category);
    },
    enabled: !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFeaturedProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      if (actor) {
        // @ts-expect-error - actor type depends on backend bindings
        return actor.listFeaturedProducts();
      }
      return SAMPLE_PRODUCTS.filter((p) => p.featured);
    },
    enabled: !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useProduct(id: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Product | null>({
    queryKey: ["product", id],
    queryFn: async () => {
      if (actor) {
        // @ts-expect-error - actor type depends on backend bindings
        const result = await actor.getProduct(id);
        return result ?? null;
      }
      return SAMPLE_PRODUCTS.find((p) => p.id === id) ?? null;
    },
    enabled: !!id && !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useProductReviews(productId: string) {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["reviews", productId],
    queryFn: async () => {
      if (actor) {
        // @ts-expect-error - actor type depends on backend bindings
        return actor.getProductReviews(productId);
      }
      return [];
    },
    enabled: !!productId && !isFetching,
  });
}
