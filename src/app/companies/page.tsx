"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowSquareOut,
  Phone,
  Envelope,
  MapPin,
  Calendar,
  Globe,
} from "@phosphor-icons/react";
import { FadeIn, SlideIn, MagneticHover } from "@/components/animations";

const ease = [0.32, 0.72, 0, 1] as const;

export default function CompaniesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0C0C1D] py-36 md:py-44 mt-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="eyebrow">The ASG Group</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter mt-6"
            >
              Associate Companies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="text-[#8E90A0] text-lg mt-6 leading-relaxed max-w-xl"
            >
              The ASG Group comprises specialist companies that complement and
              extend our core manufacturing capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Ansini */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <SlideIn direction="left">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease }}
                    className="w-14 h-14 bg-[#0C0C1D] border border-[#0C0C1D]/10 rounded-2xl flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-xl">A</span>
                  </motion.div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C0C1D] tracking-tighter">
                      Ansini Limited
                    </h2>
                    <div className="flex items-center gap-2 text-[#52556A] text-sm">
                      <Calendar size={14} weight="light" />
                      Established 1992
                    </div>
                  </div>
                </div>

                <p className="text-[#52556A] leading-relaxed mb-6">
                  Established in 1992, Ansini is a highly successful business
                  driven by the most demanding industry standards and lean practice
                  procedures. Specialists in vacuum forming and thermoplastic
                  moulding, serving prestigious clients across multiple sectors.
                </p>

                <h3 className="font-bold text-[#0C0C1D] mb-3">Capabilities</h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    "Vacuum Forming", "Thermoplastic Moulding", "Engineering Design",
                    "Tooling Development", "CNC 5-Axis Routing", "Hot Wire Forming",
                    "Ultrasonic Welding", "Leather & Fabric Trimming",
                    "Product Assembly", "Kit Building",
                  ].map((cap) => (
                    <div key={cap} className="text-[#52556A] text-sm py-1">
                      <span className="text-[#E8552D] mr-2">&bull;</span>
                      {cap}
                    </div>
                  ))}
                </div>

                <h3 className="font-bold text-[#0C0C1D] mb-3">Industries</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Aerospace", "Agricultural", "Architectural", "Automotive", "Industrial", "Marine", "Medical"].map((ind) => (
                    <motion.span
                      key={ind}
                      whileHover={{ scale: 1.05, y: -1 }}
                      transition={{ duration: 0.4, ease }}
                      className="bg-[#F4F5F7] text-[#52556A] text-xs px-3.5 py-1.5 rounded-full border border-[#0C0C1D]/[0.06]"
                    >
                      {ind}
                    </motion.span>
                  ))}
                </div>

                <MagneticHover className="inline-block">
                  <a
                    href="https://www.ansini.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#E8552D] hover:bg-[#D14A26] text-white font-semibold pl-6 pr-2 py-2.5 rounded-full text-sm transition-all duration-500"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    Visit ansini.co.uk
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowSquareOut size={16} weight="light" />
                    </span>
                  </a>
                </MagneticHover>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="card-shell">
                <div className="card-core p-8">
                  <h3 className="font-bold text-[#0C0C1D] mb-6">Contact Ansini</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#E8552D] shrink-0 mt-0.5" size={18} weight="light" />
                      <div className="text-[#52556A] text-sm">
                        Mill 3, Pleasley Vale Business Park, Outgang Lane, Pleasley
                        Vale, Mansfield, Nottinghamshire, NG19 8RL, UK
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-[#E8552D] shrink-0" size={18} weight="light" />
                      <a href="tel:+441623812333" className="text-[#52556A] text-sm hover:text-[#E8552D] transition-all duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}>
                        +44 (0) 1623 812 333
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Envelope className="text-[#E8552D] shrink-0" size={18} weight="light" />
                      <a href="mailto:info@ansini.co.uk" className="text-[#52556A] text-sm hover:text-[#E8552D] transition-all duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}>
                        info@ansini.co.uk
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="text-[#E8552D] shrink-0" size={18} weight="light" />
                      <a href="https://www.ansini.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#52556A] text-sm hover:text-[#E8552D] transition-all duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}>
                        www.ansini.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#0C0C1D]/[0.06]">
                    <div className="grid grid-cols-2 gap-4 text-xs text-[#52556A]">
                      <div><span className="font-semibold text-[#0C0C1D]">Company No:</span> 03120759</div>
                      <div><span className="font-semibold text-[#0C0C1D]">VAT No:</span> GB593405332</div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-8"><div className="border-t border-[#0C0C1D]/[0.06]" /></div>

      {/* Travall */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <SlideIn direction="left" className="lg:order-2">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease }}
                    className="w-14 h-14 bg-[#0C0C1D] border border-[#0C0C1D]/10 rounded-2xl flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-xl">T</span>
                  </motion.div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C0C1D] tracking-tighter">Travall</h2>
                    <div className="flex items-center gap-2 text-[#52556A] text-sm">
                      <Calendar size={14} weight="light" /> Established 2007
                    </div>
                  </div>
                </div>

                <p className="text-[#52556A] leading-relaxed mb-6">
                  Travall is widely acknowledged as the world&apos;s leading brand
                  for vehicle-specific dog guards and load space dividers. With
                  distribution centres in Derby, UK and Kranenburg, Germany,
                  Travall serves customers worldwide through retail and trade networks.
                </p>

                <h3 className="font-bold text-[#0C0C1D] mb-3">Products</h3>
                <div className="space-y-2 mb-6">
                  {["Vehicle-specific dog guards", "Load space separators", "Vehicle side pipes", "Universal waterproof seat covers"].map((prod) => (
                    <div key={prod} className="text-[#52556A] text-sm">
                      <span className="text-[#E8552D] mr-2">&bull;</span>
                      {prod}
                    </div>
                  ))}
                </div>

                <h3 className="font-bold text-[#0C0C1D] mb-3">Distribution</h3>
                <p className="text-[#52556A] text-sm leading-relaxed mb-8">
                  Global headquarters in Derby, UK with a secondary warehouse in
                  Kranenburg, Germany. Ecommerce sites, multilingual customer
                  service, and worldwide logistics networks.
                </p>

                <MagneticHover className="inline-block">
                  <a
                    href="https://www.travall.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#E8552D] hover:bg-[#D14A26] text-white font-semibold pl-6 pr-2 py-2.5 rounded-full text-sm transition-all duration-500"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    Visit travall.com
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowSquareOut size={16} weight="light" />
                    </span>
                  </a>
                </MagneticHover>
              </div>
            </SlideIn>

            <SlideIn direction="right" className="lg:order-1">
              <div className="card-shell">
                <div className="card-core p-8">
                  <h3 className="font-bold text-[#0C0C1D] mb-6">Contact Travall</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#E8552D] shrink-0 mt-0.5" size={18} weight="light" />
                      <div className="text-[#52556A] text-sm">Gosforth Road, Derby, Derbyshire, DE24 8HU, UK</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-[#E8552D] shrink-0" size={18} weight="light" />
                      <div className="text-[#52556A] text-sm">
                        <div>UK: +44 (0) 800 311 2175</div>
                        <div>Int: +44 (0) 1332 758 531</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Envelope className="text-[#E8552D] shrink-0" size={18} weight="light" />
                      <a href="mailto:info@travall.com" className="text-[#52556A] text-sm hover:text-[#E8552D] transition-all duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}>
                        info@travall.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="text-[#E8552D] shrink-0" size={18} weight="light" />
                      <a href="https://www.travall.com" target="_blank" rel="noopener noreferrer" className="text-[#52556A] text-sm hover:text-[#E8552D] transition-all duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}>
                        www.travall.com
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#0C0C1D]/[0.06]">
                    <div className="grid grid-cols-2 gap-4 text-xs text-[#52556A]">
                      <div><span className="font-semibold text-[#0C0C1D]">Company No:</span> 957576</div>
                      <div><span className="font-semibold text-[#0C0C1D]">VAT No:</span> GB945628295</div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0C1D] py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter">
              Work With the ASG Group
            </h2>
            <p className="text-[#8E90A0] text-lg mb-10 max-w-xl mx-auto">
              Together, our group of companies offers a comprehensive range of
              manufacturing, forming, and distribution capabilities.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E8552D] hover:bg-[#D14A26] text-white font-semibold pl-8 pr-3 py-3.5 rounded-full text-lg transition-all duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
              >
                Contact Us
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight size={20} weight="light" />
                </span>
              </Link>
            </MagneticHover>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
