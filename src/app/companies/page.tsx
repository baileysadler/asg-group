"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Globe,
} from "lucide-react";
import { FadeIn, SlideIn, MagneticHover } from "@/components/animations";

export default function CompaniesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-32 md:py-40 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold text-orange uppercase tracking-widest mb-4"
            >
              The ASG Group
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Associate Companies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-light text-lg mt-6 leading-relaxed"
            >
              The ASG Group comprises specialist companies that complement and
              extend our core manufacturing capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Ansini */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <SlideIn direction="left">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center"
                  >
                    <span className="text-orange font-bold text-xl">A</span>
                  </motion.div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                      Ansini Limited
                    </h2>
                    <div className="flex items-center gap-2 text-slate text-sm">
                      <Calendar size={14} />
                      Established 1992
                    </div>
                  </div>
                </div>

                <p className="text-slate leading-relaxed mb-6">
                  Established in 1992, Ansini is a highly successful business
                  driven by the most demanding industry standards and lean practice
                  procedures. Specialists in vacuum forming and thermoplastic
                  moulding, serving prestigious clients across multiple sectors.
                </p>

                <h3 className="font-bold text-charcoal mb-3">Capabilities</h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    "Vacuum Forming", "Thermoplastic Moulding", "Engineering Design",
                    "Tooling Development", "CNC 5-Axis Routing", "Hot Wire Forming",
                    "Ultrasonic Welding", "Leather & Fabric Trimming",
                    "Product Assembly", "Kit Building",
                  ].map((cap) => (
                    <div key={cap} className="text-slate text-sm py-1">• {cap}</div>
                  ))}
                </div>

                <h3 className="font-bold text-charcoal mb-3">Industries</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Aerospace", "Agricultural", "Architectural", "Automotive", "Industrial", "Marine", "Medical"].map((ind) => (
                    <motion.span
                      key={ind}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="bg-off-white text-slate text-xs px-3 py-1.5 rounded-full"
                    >
                      {ind}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href="https://www.ansini.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange font-semibold hover:underline inline-flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  Visit ansini.co.uk <ExternalLink size={16} />
                </motion.a>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="bg-off-white rounded-2xl p-8">
                <h3 className="font-bold text-charcoal mb-6">Contact Ansini</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-orange shrink-0 mt-1" size={18} />
                    <div className="text-slate text-sm">
                      Mill 3, Pleasley Vale Business Park, Outgang Lane, Pleasley
                      Vale, Mansfield, Nottinghamshire, NG19 8RL, UK
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-orange shrink-0" size={18} />
                    <a href="tel:+441623812333" className="text-slate text-sm hover:text-orange transition-colors">
                      +44 (0) 1623 812 333
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-orange shrink-0" size={18} />
                    <a href="mailto:info@ansini.co.uk" className="text-slate text-sm hover:text-orange transition-colors">
                      info@ansini.co.uk
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-orange shrink-0" size={18} />
                    <a href="https://www.ansini.co.uk" target="_blank" rel="noopener noreferrer" className="text-slate text-sm hover:text-orange transition-colors">
                      www.ansini.co.uk
                    </a>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-xs text-slate">
                    <div><span className="font-semibold text-charcoal">Company No:</span> 03120759</div>
                    <div><span className="font-semibold text-charcoal">VAT No:</span> GB593405332</div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Travall */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <SlideIn direction="left" className="lg:order-2">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center"
                  >
                    <span className="text-orange font-bold text-xl">T</span>
                  </motion.div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Travall</h2>
                    <div className="flex items-center gap-2 text-slate text-sm">
                      <Calendar size={14} /> Established 2007
                    </div>
                  </div>
                </div>

                <p className="text-slate leading-relaxed mb-6">
                  Travall is widely acknowledged as the world&apos;s leading brand
                  for vehicle-specific dog guards and load space dividers. With
                  distribution centres in Derby, UK and Kranenburg, Germany,
                  Travall serves customers worldwide through retail and trade networks.
                </p>

                <h3 className="font-bold text-charcoal mb-3">Products</h3>
                <div className="space-y-2 mb-6">
                  {["Vehicle-specific dog guards", "Load space separators", "Vehicle side pipes", "Universal waterproof seat covers"].map((prod) => (
                    <div key={prod} className="text-slate text-sm">• {prod}</div>
                  ))}
                </div>

                <h3 className="font-bold text-charcoal mb-3">Distribution</h3>
                <p className="text-slate text-sm leading-relaxed mb-8">
                  Global headquarters in Derby, UK with a secondary warehouse in
                  Kranenburg, Germany. Ecommerce sites, multilingual customer
                  service, and worldwide logistics networks.
                </p>

                <motion.a
                  href="https://www.travall.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange font-semibold hover:underline inline-flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  Visit travall.com <ExternalLink size={16} />
                </motion.a>
              </div>
            </SlideIn>

            <SlideIn direction="right" className="lg:order-1">
              <div className="bg-off-white rounded-2xl p-8">
                <h3 className="font-bold text-charcoal mb-6">Contact Travall</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-orange shrink-0 mt-1" size={18} />
                    <div className="text-slate text-sm">Gosforth Road, Derby, Derbyshire, DE24 8HU, UK</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-orange shrink-0" size={18} />
                    <div className="text-slate text-sm">
                      <div>UK: +44 (0) 800 311 2175</div>
                      <div>Int: +44 (0) 1332 758 531</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-orange shrink-0" size={18} />
                    <a href="mailto:info@travall.com" className="text-slate text-sm hover:text-orange transition-colors">
                      info@travall.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-orange shrink-0" size={18} />
                    <a href="https://www.travall.com" target="_blank" rel="noopener noreferrer" className="text-slate text-sm hover:text-orange transition-colors">
                      www.travall.com
                    </a>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-xs text-slate">
                    <div><span className="font-semibold text-charcoal">Company No:</span> 957576</div>
                    <div><span className="font-semibold text-charcoal">VAT No:</span> GB945628295</div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Work With the ASG Group
            </h2>
            <p className="text-slate-light text-lg mb-8">
              Together, our group of companies offers a comprehensive range of
              manufacturing, forming, and distribution capabilities.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight size={20} />
              </Link>
            </MagneticHover>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
