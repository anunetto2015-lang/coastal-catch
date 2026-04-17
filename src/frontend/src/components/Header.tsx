import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { CATEGORIES } from "@/types";
import { Link, useLocation } from "@tanstack/react-router";
import { Fish, Leaf, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
];

export function Header() {
  const { cartCount } = useCart();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-xs">
      {/* Top utility bar */}
      <div className="bg-primary/10 border-b border-primary/20 py-1.5 text-center">
        <p className="text-xs font-body text-primary font-medium tracking-wide">
          <Leaf className="inline w-3 h-3 mr-1 mb-0.5" />
          Wild-caught • Same-day delivery • Stone-ground masalas
        </p>
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 group"
          data-ocid="header.logo_link"
        >
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-xs group-hover:shadow-md transition-smooth">
            <Fish className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground leading-tight">
            Coastal
            <br className="hidden" />
            <span className="text-primary"> Catch</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                isActive(link.to)
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
              data-ocid={`nav.${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Category quick nav desktop */}
          <div className="hidden lg:flex items-center gap-1 mr-2">
            {CATEGORIES.slice(0, 2).map((cat) => (
              <Link
                key={cat.id}
                to="/products"
                search={{ category: cat.id }}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-smooth"
                data-ocid={`nav.category_${cat.id}_link`}
              >
                {cat.emoji} {cat.label}
              </Link>
            ))}
          </div>

          {/* Cart */}
          <Link to="/cart" data-ocid="header.cart_button">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <Badge
                  className="absolute -top-2 -right-2 h-5 min-w-5 px-1 text-xs bg-primary text-primary-foreground"
                  data-ocid="header.cart_count_badge"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
                data-ocid="header.mobile_menu_button"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 pt-8"
              data-ocid="header.mobile_menu_sheet"
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 px-2 font-medium">
                  Navigation
                </p>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-smooth ${
                      isActive(link.to)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                    }`}
                    data-ocid={`mobile_nav.${link.label.toLowerCase()}_link`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border mt-3 pt-3">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 px-2 font-medium">
                    Shop by Category
                  </p>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to="/products"
                      search={{ category: cat.id }}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-foreground hover:bg-muted transition-smooth"
                      data-ocid={`mobile_nav.category_${cat.id}_link`}
                    >
                      <span className="text-base">{cat.emoji}</span>
                      <span>{cat.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
