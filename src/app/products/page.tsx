"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Car,
  Wrench,
  Building2,
  Plane,
  Trophy,
  Accessibility,
} from "lucide-react";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  MagneticHover,
} from "@/components/animations";

export default function ProductsPage() {
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
              Our Products
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Engineered Products for Every Sector
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-light text-lg mt-6 leading-relaxed"
            >
              From vehicle-specific automotive accessories to bespoke industrial
              components — precision manufactured in Derby, UK.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Dog Guards */}
      <section id="dog-guards" className="py-20 md:py-28 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
                  Travall Brand
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  Dog Guards & Cargo Dividers
                </h3>
                <p className="text-slate leading-relaxed mb-6">
                  ASG Group is the world&apos;s leading manufacturer of
                  vehicle-specific dog guards and load space dividers, with over
                  500 vehicle applications available. Distributed globally through
                  our Travall brand, established in 2007.
                </p>
                <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.06}>
                  {[
                    "Laser-cut, precision-welded mild steel construction",
                    "Organic-based nylon-powder coating — ultra-tough, scratch-resistant",
                    "Quick installation in minutes — no interior modifications required",
                    "Complete kits with fixings and pictorial instructions",
                    "Lifetime guarantee included",
                    "Safety-tested: redirects impact forces toward C-pillar",
                  ].map((feature) => (
                    <StaggerItem key={feature}>
                      <div className="flex items-start gap-3">
                        <ShieldCheck
                          className="text-orange shrink-0 mt-0.5"
                          size={18}
                        />
                        <span className="text-slate text-sm">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <motion.a
                  href="https://www.travall.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange font-semibold hover:underline inline-flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  Visit Travall.com
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-off-white rounded-2xl p-12 flex items-center justify-center min-h-[400px]"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <Car className="text-orange mx-auto mb-4" size={64} />
                  </motion.div>
                  <p className="text-charcoal font-bold text-xl">
                    500+ Vehicle Applications
                  </p>
                  <p className="text-slate text-sm mt-2">
                    Global distribution from Derby, UK & Kranenburg, Germany
                  </p>
                </div>
              </motion.div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Side Steps */}
      <section id="side-steps" className="py-20 md:py-28 bg-off-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left" className="order-2 lg:order-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-12 flex items-center justify-center min-h-[400px]"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Truck className="text-orange mx-auto mb-4" size={64} />
                  </motion.div>
                  <p className="text-charcoal font-bold text-xl">
                    Fixed & Deployable Systems
                  </p>
                  <p className="text-slate text-sm mt-2">
                    OE supplier for premium 4x4s & commercial vehicles
                  </p>
                </div>
              </motion.div>
            </SlideIn>
            <SlideIn direction="right" className="order-1 lg:order-2">
              <div>
                <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
                  OE Supplier
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  Side Steps
                </h3>
                <p className="text-slate leading-relaxed mb-6">
                  One of Europe&apos;s leading suppliers of OE vehicle side steps,
                  offering both fixed and deployable variants for luxury 4x4s,
                  commercial vehicles, caravans, and motor homes.
                </p>
                <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
                  {[
                    { title: "Deployable Steps", desc: "Automated systems for premium 4×4 vehicles with cutting-edge technology" },
                    { title: "Fixed Steps", desc: "Unique aluminium fabricated sub-structure, bespoke or universal" },
                    { title: "OEM Partnerships", desc: "Direct supply to original equipment manufacturers worldwide" },
                    { title: "Design Patents", desc: "Protected designs with ongoing R&D investment" },
                  ].map((item) => (
                    <StaggerItem key={item.title}>
                      <motion.div
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="bg-white lg:bg-off-white rounded-lg p-4 h-full"
                      >
                        <h4 className="font-bold text-charcoal text-sm">{item.title}</h4>
                        <p className="text-slate text-xs mt-1">{item.desc}</p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Commercial Vehicle */}
      <section id="commercial" className="py-20 md:py-28 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              OEM & Conversion Specialists
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Commercial Vehicle Products
            </h3>
            <p className="text-slate leading-relaxed">
              Working with leading OEMs and conversion specialists to develop
              customised commercial vehicle solutions. Available as a
              manufacturing-only service or as a full design and manufacturing
              partner.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.08}>
            {[
              { icon: Wrench, title: "Rear Van Steps", desc: "Vehicle access solutions for commercial fleet vehicles" },
              { icon: ShieldCheck, title: "Bulkheads", desc: "Mesh and solid configurations for cargo containment" },
              { icon: Building2, title: "Floor Systems", desc: "Structures, sub-structures, panels and complete assemblies" },
              { icon: ShieldCheck, title: "Window Protection", desc: "Blanking panels and guard installations" },
              { icon: Car, title: "Interior Components", desc: "Protective panels, moulded elements, and trim pieces" },
              { icon: ShieldCheck, title: "Safety Features", desc: "Seatbelt and switchgear blanking panels" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard className="h-full">
                  <div className="service-card bg-off-white rounded-xl p-8 h-full">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                      <item.icon className="text-orange mb-4" size={28} />
                    </motion.div>
                    <h4 className="font-bold text-charcoal mb-2">{item.title}</h4>
                    <p className="text-slate text-sm">{item.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Non-Automotive */}
      <section id="non-automotive" className="py-20 md:py-28 bg-off-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Beyond Automotive
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Non-Automotive Products
            </h3>
            <p className="text-slate leading-relaxed">
              Parts, systems and assemblies across aerospace, agricultural,
              leisure, medical, and marine sectors.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {[
              { icon: Trophy, title: "Stadium Seating", desc: "Injection-moulded seats and steel frameworks for Silverstone, Manchester United, Fulham FC, The Queen's Club." },
              { icon: Building2, title: "Motion Simulators", desc: "Metal frameworks for 200-degree spherical projector screens with Motion Simulation Ltd." },
              { icon: Plane, title: "Aerospace", desc: "Aircraft cabin products including seat trims, cabin mouldings, head/arm/foot rest assemblies." },
              { icon: Accessibility, title: "Medical & Disability Aids", desc: "Walking aids and medical device components manufactured to exacting standards." },
              { icon: Building2, title: "Architectural Steelwork", desc: "Structural steel components for architectural and construction applications." },
              { icon: Wrench, title: "Table & Chair Assemblies", desc: "Commercial furniture components and complete assembly solutions." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard className="h-full">
                  <div className="bg-white rounded-xl p-8 border border-border h-full">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                      <item.icon className="text-orange mb-4" size={28} />
                    </motion.div>
                    <h4 className="font-bold text-charcoal mb-2">{item.title}</h4>
                    <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Product?
            </h2>
            <p className="text-slate-light text-lg mb-8">
              From initial concept to final delivery, we manage every stage of the
              design and manufacturing process.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
              >
                Discuss Your Project
                <ArrowRight size={20} />
              </Link>
            </MagneticHover>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
