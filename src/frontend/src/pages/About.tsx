import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, Fish, Heart, Leaf, Users } from "lucide-react";

const VALUES = [
  {
    icon: Fish,
    title: "Ocean to Table",
    desc: "We source directly from fishing communities, skipping middlemen to keep products fresh and fishermen fairly paid.",
  },
  {
    icon: Leaf,
    title: "Zero Preservatives",
    desc: "Every product is made the traditional way. No artificial flavors, no preservatives — just pure coastal goodness.",
  },
  {
    icon: Heart,
    title: "Freshness First",
    desc: "We process every order at dawn. If it isn't fresh on arrival, we replace or refund — unconditionally.",
  },
  {
    icon: Award,
    title: "Award-Winning Masalas",
    desc: "Our stone-ground masalas have been recognized as among the most authentic coastal blends in India.",
  },
];

const TEAM = [
  {
    name: "Rajan Pillai",
    role: "Founder & Head Fisher",
    desc: "Third-generation fisherman from Kerala's Malabar coast with 30+ years of expertise.",
  },
  {
    name: "Deepa Menon",
    role: "Spice Curator",
    desc: "Expert in traditional stone-grinding, trained in Chettinad and Konkan culinary arts.",
  },
  {
    name: "Anil Shetty",
    role: "Operations & Freshness Lead",
    desc: "Ensures every order leaves our facility at peak freshness with cold-chain integrity.",
  },
];

export function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="bg-card border-b border-border py-16"
        data-ocid="about.hero_section"
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
            <Fish className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-display-md text-foreground mb-4">Our Story</h1>
          <p className="text-body-lg text-muted-foreground">
            Coastal Catch was born on the Konkan coast with one mission: to
            bring the freshest, most authentic seafood and coastal flavors
            directly to your kitchen — without compromise.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-background" data-ocid="about.story_section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-base max-w-none text-foreground">
            <p className="text-body-lg text-muted-foreground mb-4">
              What started as a small roadside stall in Ratnagiri has grown into
              a trusted name in premium seafood delivery. Our founder, Rajan
              Pillai, grew up watching his father clean and pack fish before
              sunrise — driven by an obsession with freshness that has never
              left us.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, we partner with 40+ fishing cooperatives along India's
              western coastline. Every product — from our king fish steaks to
              our coastal masala blends — is processed the same day and packed
              with ice for same-day delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe great food starts with great sourcing. That's why we
              publish the name of the fishing community behind every product and
              guarantee 100% freshness on every order.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-alt py-16" data-ocid="about.values_section">
        <div className="container mx-auto px-4">
          <h2 className="text-display-sm text-foreground text-center mb-10">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, idx) => (
              <div
                key={v.title}
                className="bg-card border border-border rounded-xl p-6 text-center"
                data-ocid={`about.value.${idx + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-background" data-ocid="about.team_section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-primary mb-2">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">
                The People
              </span>
            </div>
            <h2 className="text-display-sm text-foreground">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {TEAM.map((member, idx) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-xl p-6 text-center"
                data-ocid={`about.team_member.${idx + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-secondary-foreground">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {member.name}
                </h3>
                <p className="text-xs text-primary font-medium mt-0.5 mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary" data-ocid="about.cta_section">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-primary-foreground mb-3">
            Ready to taste the coast?
          </h2>
          <p className="text-primary-foreground/80 text-sm mb-6">
            Browse our fresh catch and authentic masalas — delivered to your
            door.
          </p>
          <Link
            to="/products"
            search={{ category: undefined }}
            data-ocid="about.shop_now_button"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
