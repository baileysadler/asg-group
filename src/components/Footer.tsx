"use client";

import Link from "next/link";
import { Phone, Envelope, MapPin } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-orange rounded-[10px] flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tight">ASG</span>
              </div>
              <span className="font-bold text-lg tracking-tight">ASG Group</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-[280px]">
              Family-owned manufacturing & engineering company delivering
              quality engineering services for over 26 years from our 5,000m²
              facility in Derby, UK.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+441332753333"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-orange transition-premium"
              >
                <Phone size={15} weight="light" />
                +44 (0) 1332 753 333
              </a>
              <a
                href="mailto:info@asg-group.co.uk"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-orange transition-premium"
              >
                <Envelope size={15} weight="light" />
                info@asg-group.co.uk
              </a>
              <div className="flex items-start gap-3 text-sm text-white/40">
                <MapPin size={15} weight="light" className="mt-0.5 shrink-0" />
                997 London Road, Derby, DE24 8PX
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-8">
              Capabilities
            </h3>
            <ul className="space-y-3.5">
              {[
                "Design & Development",
                "Fabrication",
                "Advanced Laser Cutting",
                "CNC Tube Manipulation",
                "Press Forming",
                "Injection Moulding",
                "Vacuum Forming",
                "Product Finishing",
                "Assembly & Logistics",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/capabilities"
                    className="text-sm text-white/40 hover:text-orange transition-premium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Company */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-8">
              Products
            </h3>
            <ul className="space-y-3.5">
              {[
                "Dog Guards & Cargo Dividers",
                "Side Steps",
                "Commercial Vehicle Products",
                "Non-Automotive",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-sm text-white/40 hover:text-orange transition-premium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-8 mt-12">
              Company
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Clients", href: "/clients" },
                { name: "Quality", href: "/quality" },
                { name: "Associate Companies", href: "/companies" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/40 hover:text-orange transition-premium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-8">
              Certifications
            </h3>
            <div className="space-y-4">
              {[
                { cert: "ISO 9001", desc: "Quality Management Systems" },
                { cert: "ISO 14001", desc: "Environmental Management" },
                { cert: "IATF 16949", desc: "Automotive Quality Management" },
              ].map((item) => (
                <div
                  key={item.cert}
                  className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.04]"
                >
                  <div className="font-semibold text-orange text-sm">
                    {item.cert}
                  </div>
                  <div className="text-white/30 text-xs mt-1">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">
                Associate Companies
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.ansini.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/40 hover:text-orange transition-premium"
                >
                  Ansini Ltd
                </a>
                <a
                  href="https://www.travall.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/40 hover:text-orange transition-premium"
                >
                  Travall
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs tracking-wide">
            {new Date().getFullYear()} ASG Group Ltd. All rights reserved.
          </p>
          <p className="text-white/25 text-xs tracking-wide">
            997 London Road, Derby, Derbyshire, DE24 8PX, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
