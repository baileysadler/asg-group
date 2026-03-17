"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { List, X, CaretDown, Phone, Envelope } from "@phosphor-icons/react";
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

const EASE = [0.32, 0.72, 0, 1] as const;

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
      {/* Top contact bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: scrolled ? -40 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="bg-charcoal text-white text-sm hidden md:block fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-[1400px] mx-auto px-8 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a
              href="tel:+441332753333"
              className="flex items-center gap-2 text-white/70 hover:text-orange transition-premium"
            >
              <Phone size={13} weight="light" />
              <span className="text-xs tracking-wide">+44 (0) 1332 753 333</span>
            </a>
            <a
              href="mailto:info@asg-group.co.uk"
              className="flex items-center gap-2 text-white/70 hover:text-orange transition-premium"
            >
              <Envelope size={13} weight="light" />
              <span className="text-xs tracking-wide">info@asg-group.co.uk</span>
            </a>
          </div>
          <div className="text-white/40 text-xs tracking-wide">
            997 London Road, Derby, DE24 8PX
          </div>
        </div>
      </motion.div>

      {/* Floating nav pill */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "top-4 mx-4 md:mx-8"
            : "top-0 md:top-[40px] mx-0"
        }`}
      >
        <div
          className={`max-w-[1400px] mx-auto transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "bg-white/90 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(12,12,29,0.08)] rounded-2xl border border-charcoal/[0.04]"
              : "bg-white shadow-[0_1px_0_rgba(12,12,29,0.04)]"
          }`}
        >
          <div className="px-8 flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-charcoal rounded-[10px] flex items-center justify-center group-hover:bg-orange transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <span className="text-white font-bold text-sm tracking-tight">ASG</span>
              </div>
              <span className="text-charcoal font-bold text-lg tracking-tight">
                ASG Group
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              <NavLink href="/about">About</NavLink>

              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProdOpen(true)}
                onMouseLeave={() => setProdOpen(false)}
              >
                <button className="flex items-center gap-1.5 text-slate text-sm font-medium hover:text-charcoal transition-premium">
                  Products
                  <motion.span
                    animate={{ rotate: prodOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <CaretDown size={12} weight="bold" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {prodOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
                    >
                      <div className="card-shell">
                        <div className="card-core p-1.5">
                          {products.map((item, i) => (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04, ease: EASE }}
                            >
                              <Link
                                href={item.href}
                                className="block px-4 py-2.5 text-sm text-slate hover:bg-off-white hover:text-charcoal rounded-xl transition-premium"
                                onClick={() => setProdOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
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
                <button className="flex items-center gap-1.5 text-slate text-sm font-medium hover:text-charcoal transition-premium">
                  Capabilities
                  <motion.span
                    animate={{ rotate: capOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <CaretDown size={12} weight="bold" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {capOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72"
                    >
                      <div className="card-shell">
                        <div className="card-core p-1.5">
                          {capabilities.map((item, i) => (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.03, ease: EASE }}
                            >
                              <Link
                                href={item.href}
                                className="block px-4 py-2.5 text-sm text-slate hover:bg-off-white hover:text-charcoal rounded-xl transition-premium"
                                onClick={() => setCapOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/clients">Clients</NavLink>
              <NavLink href="/quality">Quality</NavLink>
              <NavLink href="/companies">Companies</NavLink>

              {/* CTA — pill with nested icon */}
              <Link
                href="/contact"
                className="group bg-charcoal hover:bg-orange text-white text-sm font-semibold pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] inline-flex items-center gap-3"
              >
                Get a Quote
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-0.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
                    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
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
                    <X size={24} weight="light" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <List size={24} weight="light" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile nav — full overlay */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="lg:hidden border-t border-border/50 overflow-hidden"
              >
                <div className="px-8 py-8 space-y-5">
                  {[
                    { name: "About", href: "/about" },
                    { name: "Clients", href: "/clients" },
                    { name: "Quality", href: "/quality" },
                    { name: "Companies", href: "/companies" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, ease: EASE }}
                    >
                      <Link
                        href={item.href}
                        className="block text-charcoal font-medium text-lg"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="pt-2">
                    <p className="text-[10px] font-semibold text-slate-light uppercase tracking-[0.2em] mb-3">
                      Products
                    </p>
                    {products.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-slate py-1.5 text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-light uppercase tracking-[0.2em] mb-3">
                      Capabilities
                    </p>
                    {capabilities.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-slate py-1.5 text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="pt-6 space-y-4">
                    <a
                      href="tel:+441332753333"
                      className="flex items-center gap-2 text-slate text-sm"
                    >
                      <Phone size={14} weight="light" />
                      +44 (0) 1332 753 333
                    </a>
                    <Link
                      href="/contact"
                      className="block bg-charcoal text-white font-semibold px-6 py-3.5 rounded-full text-center text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
      className="relative text-slate text-sm font-medium hover:text-charcoal transition-premium group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-full" />
    </Link>
  );
}
