import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useFeaturedProducts } from "@/hooks/useProducts";
import { CATEGORIES } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Leaf, Shield, Star, Truck } from "lucide-react";

const TRUST_BADGES = [
  {
    icon: Clock,
    label: "Same-Day Delivery",
    desc: "Order by 10 AM for evening delivery",
  },
  {
    icon: Shield,
    label: "Freshness Guaranteed",
    desc: "Money-back if not 100% fresh",
  },
  { icon: Truck, label: "Free Delivery", desc: "On orders above ₹500" },
  { icon: Leaf, label: "100% Natural", desc: "No preservatives, no additives" },
];

const TESTIMONIALS = [
  {
    name: "Priya Nair",
    location: "Mangalore",
    stars: 5,
    text: "The king fish steaks were absolutely fresh — smelled like the sea! Best delivery I've ever had.",
  },
  {
    name: "Arjun Sharma",
    location: "Mangalore",
    stars: 5,
    text: "The coastal fish masala is incredible. My wife thought I'd learned to cook from scratch!",
  },
  {
    name: "Meena Pillai",
    location: "Mangalore",
    stars: 5,
    text: "Prawn balchão chutney is exactly like my grandmother used to make. Authentic and flavorful.",
  },
];

export function HomePage() {
  const { data: featured, isLoading } = useFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-foreground"
        data-ocid="home.hero_section"
      >
        <img
          src="/assets/generated/hero-seafood.dim_1400x700.jpg"
          alt="Fresh seafood selection"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-primary-foreground/80 bg-primary/30 border border-primary/40 rounded-full px-3 py-1 mb-5 font-medium">
              <Leaf className="w-3 h-3" /> Wild-Caught · Freshly Packed
            </span>
            <h1 className="text-display-lg text-white md:text-6xl mb-5 leading-[1.1]">
              From the Coast
              <br />
              to Your Kitchen
            </h1>
            <p className="text-body-lg text-white/80 mb-8 max-w-md">
              Discover premium wild-caught seafood, sun-dried fish, and
              authentic stone-ground masalas — delivered fresh.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                to="/products"
                search={{ category: undefined }}
                data-ocid="home.shop_now_button"
              >
                <Button size="lg" className="gap-2 font-medium">
                  Shop the Catch <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about" data-ocid="home.our_story_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-white/30 text-white bg-white/10 hover:bg-white/20"
                >
                  Our Story
                </Button>
              </Link>
            </div>
            <div
              className="inline-flex items-center gap-2 bg-primary/40 border border-primary/50 text-primary-foreground text-xs font-medium px-4 py-2 rounded-full"
              data-ocid="home.delivery_area_badge"
            >
              <Truck className="w-3.5 h-3.5 shrink-0" />
              Currently delivering in Mysore only
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BADGES.map((b) => (
              <div key={b.label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    {b.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section
        className="py-16 bg-background"
        data-ocid="home.categories_section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-display-sm text-foreground mb-2">
              Explore Our Range
            </h2>
            <p className="text-muted-foreground text-base">
              Every product crafted with coastal tradition and freshness first
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.id}
                to="/products"
                search={{ category: cat.id }}
                className="group block"
                data-ocid={`home.category_card.${idx + 1}`}
              >
                <div className="relative overflow-hidden rounded-xl bg-secondary/20 border border-border p-6 text-center hover:border-primary/40 hover:shadow-card transition-smooth group-hover:-translate-y-1">
                  <span className="text-4xl mb-3 block">{cat.emoji}</span>
                  <h3 className="font-display font-semibold text-foreground text-base mb-1">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {cat.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary font-medium">
                    Shop Now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-alt py-16" data-ocid="home.featured_section">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">
                Hand-Picked
              </p>
              <h2 className="text-display-sm text-foreground">
                Today's Fresh Catch
              </h2>
            </div>
            <Link
              to="/products"
              search={{ category: undefined }}
              data-ocid="home.view_all_button"
            >
              <Button variant="outline" size="sm" className="gap-1">
                View All <ArrowRight className="w-3 h-3" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {["a", "b", "c", "d"].map((k) => (
                <div key={k} className="space-y-3">
                  <Skeleton className="aspect-[4/3] rounded-xl" />
                  <Skeleton className="h-4 w-3/4 rounded" />
                  <Skeleton className="h-3 w-1/2 rounded" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {(featured ?? []).map((product, i) => (
                <ProductCard key={product.id} product={product} index={i + 1} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Freshness promise */}
      <section
        className="py-16 bg-primary text-primary-foreground"
        data-ocid="home.freshness_section"
      >
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Leaf className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="font-display text-3xl font-bold mb-3">
            The Coastal Catch Promise
          </h2>
          <p className="text-primary-foreground/85 text-base leading-relaxed mb-6">
            Every order is processed at dawn, packed with ice, and dispatched
            the same morning. If your seafood isn't fresh on arrival, we'll
            replace or refund — no questions asked.
          </p>
          <Link to="/about" data-ocid="home.freshness_cta_button">
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16 bg-background"
        data-ocid="home.testimonials_section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-display-sm text-foreground mb-2">
              Loved by Families Across the Coast
            </h2>
            <p className="text-muted-foreground text-sm">
              Real customers, genuine reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-xl p-6 shadow-subtle"
                data-ocid={`home.testimonial.${TESTIMONIALS.indexOf(t) + 1}`}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={`star-${t.name}-${i}`}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
