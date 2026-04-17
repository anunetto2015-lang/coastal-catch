import { CATEGORIES } from "@/types";
import { Link } from "@tanstack/react-router";
import { Fish, Phone } from "lucide-react";

const year = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Fish className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Coastal Catch
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Premium wild-caught seafood, sun-dried fish, stone-ground chutneys
              and authentic masalas — delivered fresh from coast to kitchen.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to="/products"
                    search={{ category: cat.id }}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    data-ocid={`footer.category_${cat.id}_link`}
                  >
                    {cat.emoji} {cat.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  search={{ category: undefined }}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  data-ocid="footer.all_products_link"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "FAQ", to: "/faq" },
                { label: "Cart", to: "/cart" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}_link`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>7019133288</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} Coastal Catch. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
