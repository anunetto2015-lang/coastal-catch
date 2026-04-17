import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { CartProvider } from "@/contexts/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.HomePage })),
);
const ProductsPage = lazy(() =>
  import("@/pages/Products").then((m) => ({ default: m.ProductsPage })),
);
const ProductDetailPage = lazy(() =>
  import("@/pages/ProductDetail").then((m) => ({
    default: m.ProductDetailPage,
  })),
);
const CartPage = lazy(() =>
  import("@/pages/Cart").then((m) => ({ default: m.CartPage })),
);
const CheckoutPage = lazy(() =>
  import("@/pages/Checkout").then((m) => ({ default: m.CheckoutPage })),
);
const OrderConfirmationPage = lazy(() =>
  import("@/pages/OrderConfirmation").then((m) => ({
    default: m.OrderConfirmationPage,
  })),
);
const AboutPage = lazy(() =>
  import("@/pages/About").then((m) => ({ default: m.AboutPage })),
);
const FaqPage = lazy(() =>
  import("@/pages/Faq").then((m) => ({ default: m.FaqPage })),
);
const AdminPage = lazy(() =>
  import("@/pages/Admin").then((m) => ({ default: m.AdminPage })),
);

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1, staleTime: 1000 * 60 } },
});

const PageLoader = () => (
  <Layout>
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => (
          <Skeleton key={k} className="h-64 rounded-xl" />
        ))}
      </div>
    </div>
  </Layout>
);

// Routes
const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  validateSearch: (search: Record<string, unknown>) => ({
    category: (search.category as string) || undefined,
  }),
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ProductsPage />
    </Suspense>
  ),
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$id",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ProductDetailPage />
    </Suspense>
  ),
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CartPage />
    </Suspense>
  ),
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CheckoutPage />
    </Suspense>
  ),
});

const orderConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order-confirmation",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <OrderConfirmationPage />
    </Suspense>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AboutPage />
    </Suspense>
  ),
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FaqPage />
    </Suspense>
  ),
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AdminPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  productsRoute,
  productDetailRoute,
  cartRoute,
  checkoutRoute,
  orderConfirmationRoute,
  aboutRoute,
  faqRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  );
}
