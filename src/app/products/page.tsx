"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Car,
  Wrench,
  Buildings,
  Airplane,
  Trophy,
  Wheelchair,
} from "@phosphor-icons/react";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  MagneticHover,
} from "@/components/animations";

const ease = [0.32, 0.72, 0, 1] as const;

export default function ProductsPage() {
  return (
    <>
      {/* Hero — left-aligned, dark charcoal */}
      <section className="bg-[#0C0C1D] py-36 md:py-44 mt-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="eyebrow">Our Products</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter mt-6"
            >
              Engineered Products for Every Sector
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="text-[#52556A] text-lg mt-6 leading-relaxed max-w-2xl"
            >
              From vehicle-specific automotive accessories to bespoke industrial
              components — precision manufactured in Derby, UK.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Dog Guards — asymmetric 1.2fr / 1fr */}
      <section id="dog-guards" className="py-28 md:py-36 scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <span className="eyebrow">Travall Brand</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0C0C1D] mb-6 mt-5 tracking-tighter">
                  Dog Guards & Cargo Dividers
                </h3>
                <p className="text-[#52556A] leading-relaxed mb-6">
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
                          className="text-[#E8552D] shrink-0 mt-0.5"
                          size={18}
                          weight="light"
                        />
                        <span className="text-[#52556A] text-sm">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <MagneticHover className="inline-block">
                  <motion.a
                    href="https://www.travall.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#E8552D] hover:bg-[#d14a27] text-white font-semibold pl-7 pr-2 py-2 rounded-full text-sm transition-all inline-flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ ease }}
                  >
                    Visit Travall.com
                    <span className="bg-white/20 rounded-full p-2 inline-flex items-center justify-center">
                      <ArrowRight size={14} weight="light" />
                    </span>
                  </motion.a>
                </MagneticHover>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="card-shell">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.7, ease }}
                  className="card-core p-12 flex items-center justify-center min-h-[400px]"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                      <Car className="text-[#E8552D] mx-auto mb-4" size={56} weight="light" />
                    </motion.div>
                    <p className="text-[#0C0C1D] font-bold text-xl tracking-tighter">
                      500+ Vehicle Applications
                    </p>
                    <p className="text-[#52556A] text-sm mt-2">
                      Global distribution from Derby, UK & Kranenburg, Germany
                    </p>
                  </div>
                </motion.div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Side Steps — zig-zag (image left, text right) */}
      <section id="side-steps" className="py-28 md:py-36 bg-[#F4F5F7] scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <SlideIn direction="left" className="order-2 lg:order-1">
              <div className="card-shell">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.7, ease }}
                  className="card-core p-12 flex items-center justify-center min-h-[400px]"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                    >
                      <Truck className="text-[#E8552D] mx-auto mb-4" size={56} weight="light" />
                    </motion.div>
                    <p className="text-[#0C0C1D] font-bold text-xl tracking-tighter">
                      Fixed & Deployable Systems
                    </p>
                    <p className="text-[#52556A] text-sm mt-2">
                      OE supplier for premium 4x4s & commercial vehicles
                    </p>
                  </div>
                </motion.div>
              </div>
            </SlideIn>
            <SlideIn direction="right" className="order-1 lg:order-2">
              <div>
                <span className="eyebrow">OE Supplier</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0C0C1D] mb-6 mt-5 tracking-tighter">
                  Side Steps
                </h3>
                <p className="text-[#52556A] leading-relaxed mb-6">
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
                      <div className="card-shell h-full">
                        <motion.div
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.7, ease }}
                          className="card-core p-4 h-full"
                        >
                          <h4 className="font-bold text-[#0C0C1D] text-sm">{item.title}</h4>
                          <p className="text-[#52556A] text-xs mt-1">{item.desc}</p>
                        </motion.div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Commercial Vehicle Products — asymmetric 2-col layout */}
      <section id="commercial" className="py-28 md:py-36 scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="max-w-3xl mb-16">
            <span className="eyebrow">OEM & Conversion Specialists</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0C0C1D] mb-6 mt-5 tracking-tighter">
              Commercial Vehicle Products
            </h3>
            <p className="text-[#52556A] leading-relaxed">
              Working with leading OEMs and conversion specialists to develop
              customised commercial vehicle solutions. Available as a
              manufacturing-only service or as a full design and manufacturing
              partner.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-[1.2fr_1fr] gap-6" staggerDelay={0.08}>
            {[
              { icon: Wrench, title: "Rear Van Steps", desc: "Vehicle access solutions for commercial fleet vehicles" },
              { icon: ShieldCheck, title: "Bulkheads", desc: "Mesh and solid configurations for cargo containment" },
              { icon: Buildings, title: "Floor Systems", desc: "Structures, sub-structures, panels and complete assemblies" },
              { icon: ShieldCheck, title: "Window Protection", desc: "Blanking panels and guard installations" },
              { icon: Car, title: "Interior Components", desc: "Protective panels, moulded elements, and trim pieces" },
              { icon: ShieldCheck, title: "Safety Features", desc: "Seatbelt and switchgear blanking panels" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard className="h-full">
                  <div className="card-shell h-full">
                    <div className="card-core p-8 h-full">
                      <motion.div
                        whileHover={{ rotate: 6, scale: 1.05 }}
                        transition={{ duration: 0.7, ease }}
                      >
                        <item.icon className="text-[#E8552D] mb-4" size={28} weight="light" />
                      </motion.div>
                      <h4 className="font-bold text-[#0C0C1D] mb-2">{item.title}</h4>
                      <p className="text-[#52556A] text-sm">{item.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Non-Automotive — asymmetric 2-col layout */}
      <section id="non-automotive" className="py-28 md:py-36 bg-[#F4F5F7] scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="max-w-3xl mb-16">
            <span className="eyebrow">Beyond Automotive</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0C0C1D] mb-6 mt-5 tracking-tighter">
              Non-Automotive Products
            </h3>
            <p className="text-[#52556A] leading-relaxed">
              Parts, systems and assemblies across aerospace, agricultural,
              leisure, medical, and marine sectors.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-[1fr_1.2fr] gap-6" staggerDelay={0.08}>
            {[
              { icon: Trophy, title: "Stadium Seating", desc: "Injection-moulded seats and steel frameworks for Silverstone, Manchester United, Fulham FC, The Queen's Club." },
              { icon: Buildings, title: "Motion Simulators", desc: "Metal frameworks for 200-degree spherical projector screens with Motion Simulation Ltd." },
              { icon: Airplane, title: "Aerospace", desc: "Aircraft cabin products including seat trims, cabin mouldings, head/arm/foot rest assemblies." },
              { icon: Wheelchair, title: "Medical & Disability Aids", desc: "Walking aids and medical device components manufactured to exacting standards." },
              { icon: Buildings, title: "Architectural Steelwork", desc: "Structural steel components for architectural and construction applications." },
              { icon: Wrench, title: "Table & Chair Assemblies", desc: "Commercial furniture components and complete assembly solutions." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard className="h-full">
                  <div className="card-shell h-full">
                    <div className="card-core p-8 h-full">
                      <motion.div
                        whileHover={{ rotate: 6, scale: 1.05 }}
                        transition={{ duration: 0.7, ease }}
                      >
                        <item.icon className="text-[#E8552D] mb-4" size={28} weight="light" />
                      </motion.div>
                      <h4 className="font-bold text-[#0C0C1D] mb-2">{item.title}</h4>
                      <p className="text-[#52556A] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0C1D] py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter">
              Need a Custom Product?
            </h2>
            <p className="text-[#52556A] text-lg mb-10 max-w-2xl mx-auto">
              From initial concept to final delivery, we manage every stage of the
              design and manufacturing process.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="bg-[#E8552D] hover:bg-[#d14a27] text-white font-semibold pl-8 pr-2.5 py-3 rounded-full text-lg transition-all inline-flex items-center gap-3"
              >
                Discuss Your Project
                <span className="bg-white/20 rounded-full p-2.5 inline-flex items-center justify-center">
                  <ArrowRight size={18} weight="light" />
                </span>
              </Link>
            </MagneticHover>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
