"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const capabilities = [
  { name: "Design & Development", href: "/capabilities#design" },
  { name: "Fabrication", href: "/capabilities#fabrication" },
  { name: "Advanced Laser Cutting", href: "/capabilities#laser" },
  { name: "CNC Tube Manipulation", href: "/capabilities#cnc" },
  { name: "Press Forming", href: "/capabilities#press" },
  { name: "Injection Moulding", href: "/capabilities#injection" },
  { name: "Vacuum Forming", href: "/capabilities#vacuum" },
  { name: "Product Finishing", href: "/capabilities#finishing" },
  { name: "Assembly & Logistics", href: "/capabilities#assembly" },
];

const products = [
  { name: "Dog Guards & Cargo Dividers", href: "/products#dog-guards" },
  { name: "Side Steps", href: "/products#side-steps" },
  { name: "Commercial Vehicle Products", href: "/products#commercial" },
  { name: "Non-Automotive", href: "/products#non-automotive" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [capOpen, setCapOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: scrolled ? -40 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-charcoal text-white text-sm hidden md:block fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+441332753333"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <Phone size={14} />
              +44 (0) 1332 753 333
            </a>
            <a
              href="mailto:info@asg-group.co.uk"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <Mail size={14} />
              info@asg-group.co.uk
            </a>
          </div>
          <div className="text-slate-light text-xs">
            997 London Road, Derby, DE24 8PX
          </div>
        </div>
      </motion.div>

      {/* Main nav */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-lg shadow-lg"
            : "top-0 md:top-[36px] bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">A</span>
            </motion.div>
            <div>
              <span className="text-charcoal font-bold text-xl tracking-tight group-hover:text-orange transition-colors">
                ASG Group
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="/about">About</NavLink>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProdOpen(true)}
              onMouseLeave={() => setProdOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate font-medium hover:text-charcoal transition-colors">
                Products{" "}
                <motion.span
                  animate={{ rotate: prodOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>
              <AnimatePresence>
                {prodOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 w-64"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-border p-2 overflow-hidden">
                      {products.map((item, i) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-slate hover:bg-off-white hover:text-orange rounded-lg transition-all"
                            onClick={() => setProdOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Capabilities dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCapOpen(true)}
              onMouseLeave={() => setCapOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate font-medium hover:text-charcoal transition-colors">
                Capabilities{" "}
                <motion.span
                  animate={{ rotate: capOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>
              <AnimatePresence>
                {capOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 w-64"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-border p-2 overflow-hidden">
                      {capabilities.map((item, i) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <Link
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-slate hover:bg-off-white hover:text-orange rounded-lg transition-all"
                            onClick={() => setCapOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/clients">Clients</NavLink>
            <NavLink href="/quality">Quality</NavLink>
            <NavLink href="/companies">Companies</NavLink>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {[
                  { name: "About", href: "/about" },
                  { name: "Clients", href: "/clients" },
                  { name: "Quality", href: "/quality" },
                  { name: "Companies", href: "/companies" },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-slate font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div>
                  <p className="text-xs font-semibold text-slate-light uppercase tracking-wider mb-2">
                    Products
                  </p>
                  {products.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-slate py-1.5 pl-3 text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-light uppercase tracking-wider mb-2">
                    Capabilities
                  </p>
                  {capabilities.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-slate py-1.5 pl-3 text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 space-y-3">
                  <a
                    href="tel:+441332753333"
                    className="flex items-center gap-2 text-slate text-sm"
                  >
                    <Phone size={14} />
                    +44 (0) 1332 753 333
                  </a>
                  <Link
                    href="/contact"
                    className="block bg-orange text-white font-semibold px-6 py-3 rounded-lg text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-slate font-medium hover:text-charcoal transition-colors group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
