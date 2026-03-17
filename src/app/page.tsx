"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PenNib,
  FireSimple,
  Lightning,
  Crosshair,
  Gauge,
  Syringe,
  Stack,
  PaintBrush,
  Package,
  ArrowRight,
  ShieldCheck,
  Clock,
  Factory,
  Users,
  Phone,
} from "@phosphor-icons/react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Counter,
  TiltCard,
  TextReveal,
  MagneticHover,
} from "@/components/animations";

const services = [
  {
    icon: PenNib,
    title: "Design & Development",
    desc: "Full lifecycle CAD design with Catia V5 & SolidWorks, 3D scanning, and rapid prototyping.",
  },
  {
    icon: FireSimple,
    title: "Fabrication",
    desc: "Manual and robotic MIG/TIG welding in mild steel, stainless steel, and aluminium.",
  },
  {
    icon: Lightning,
    title: "Advanced Laser Cutting",
    desc: "Amada C1 laser/punch combo, 24hr unmanned operation, tubes up to 152mm diameter.",
  },
  {
    icon: Crosshair,
    title: "CNC Tube Manipulation",
    desc: "BLM E-Turn 40 fully-electric forming, variable radius, up to 63.5mm diameter.",
  },
  {
    icon: Gauge,
    title: "Press Forming",
    desc: "Mechanical and CNC press forming up to 120 tonnes with in-house CNC punching.",
  },
  {
    icon: Syringe,
    title: "Injection Moulding",
    desc: "Arburg & Engel machines, 50t–1300t capacity, engineering polymers and composites.",
  },
  {
    icon: Stack,
    title: "Vacuum Forming",
    desc: "Thermoplastic moulding via Ansini — CNC routing, hot wire forming, ultrasonic welding.",
  },
  {
    icon: PaintBrush,
    title: "Product Finishing",
    desc: "Shot blasting, nylon powder coating, stainless polishing, antimicrobial Rilsan coatings.",
  },
  {
    icon: Package,
    title: "Assembly & Logistics",
    desc: "12,000 products weekly, 1M+ components, global dispatch with tamper-evident packaging.",
  },
];

const stats = [
  { value: 26, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 5000, suffix: "", label: "m\u00B2 Facility", icon: Factory },
  { value: 12000, suffix: "", label: "Products Weekly", icon: Package },
  { value: 16, suffix: "", label: "Major OEM Clients", icon: Users },
];

const clients = [
  { name: "Audi", logo: "/logos/audi.svg" },
  { name: "Bentley", logo: "/logos/bentley.svg" },
  { name: "Ford", logo: "/logos/ford.svg" },
  { name: "Honda", logo: "/logos/honda.svg" },
  { name: "Hyundai", logo: "/logos/hyundai.svg" },
  { name: "Jaguar", logo: "/logos/jaguar.svg" },
  { name: "Land Rover", logo: "/logos/land-rover.svg" },
  { name: "Porsche", logo: "/logos/porsche.svg" },
  { name: "Seat", logo: "/logos/seat.svg" },
  { name: "Skoda", logo: "/logos/skoda.svg" },
  { name: "Volkswagen", logo: "/logos/volkswagen.svg" },
  { name: "General Motors", logo: "/logos/general-motors.svg" },
];

const premiumEase = [0.32, 0.72, 0, 1] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero — left-aligned split with full video background */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden mt-28">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
              className="eyebrow mb-6 inline-flex"
            >
              Derby, UK — Est. 1997
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: premiumEase }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.95]"
            >
              Precision
              <br />
              Engineering.
              <br />
              <span className="text-orange">Built in Britain.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: premiumEase }}
              className="text-lg md:text-xl text-white/70 mt-8 max-w-lg leading-relaxed"
            >
              Advanced manufacturing processes with full in-house capability.
              Delivering excellence to the world&apos;s leading automotive brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: premiumEase }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <MagneticHover>
                <Link
                  href="/contact"
                  className="group bg-orange hover:bg-orange-dark text-white font-semibold pl-8 pr-2 py-2 rounded-full text-lg transition-all duration-700 inline-flex items-center gap-4"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                >
                  Start Your Project
                  <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-700">
                    <ArrowRight size={20} weight="light" className="text-white" />
                  </span>
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href="/capabilities"
                  className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-700 inline-flex items-center justify-center gap-2"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                >
                  Our Capabilities
                </Link>
              </MagneticHover>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Intro — left-aligned with asymmetric layout */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 items-start">
            <div>
              <FadeIn>
                <span className="eyebrow mb-6">Welcome to ASG Group</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-snug tracking-tighter mt-6">
                  <TextReveal>
                    From design and development to manufacturing, assembly and
                    packaging — delivering a comprehensive range of quality
                    engineering services for over 26 years.
                  </TextReveal>
                </h2>
              </FadeIn>
            </div>
            <div className="md:pt-16">
              <FadeIn delay={0.2}>
                <p className="text-slate text-lg leading-relaxed">
                  Customer-focused and family-owned, we are a truly world-class
                  organisation that continues to attract major clients from the
                  automotive and industrial sector through significant, ongoing
                  investment in our highly skilled teams and the very latest
                  manufacturing technology.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services — asymmetric bento grid */}
      <section className="py-28 md:py-36 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="mb-16">
            <span className="eyebrow mb-6">What We Do</span>
            <h3 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tighter mt-6">
              Full In-House Capability
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6">
            {/* Featured large card — first service */}
            {(() => { const FeaturedIcon = services[0].icon; return (
            <FadeIn>
              <TiltCard>
                <Link href="/capabilities" className="card-shell block h-full">
                  <div className="card-core p-10 md:p-14 h-full flex flex-col justify-between min-h-[400px]">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center"
                    >
                      <FeaturedIcon size={28} weight="light" className="text-orange" />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 tracking-tighter">
                        {services[0].title}
                      </h4>
                      <p className="text-slate text-base leading-relaxed max-w-md">
                        {services[0].desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </FadeIn>
            ); })()}

            {/* Right stack — next two services */}
            <div className="flex flex-col gap-6">
              {services.slice(1, 3).map((service, i) => {
                const Icon = service.icon;
                return (
                <FadeIn key={service.title} delay={0.1 * (i + 1)}>
                  <TiltCard>
                    <Link href="/capabilities" className="card-shell block">
                      <div className="card-core p-8 flex items-start gap-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center shrink-0"
                        >
                          <Icon size={24} weight="light" className="text-orange" />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold text-charcoal mb-1">
                            {service.title}
                          </h4>
                          <p className="text-slate text-sm leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Bottom rows — zig-zag two-column */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 mt-6">
            {/* Left stack */}
            <div className="flex flex-col gap-6">
              {services.slice(3, 5).map((service, i) => {
                const Icon = service.icon;
                return (
                <FadeIn key={service.title} delay={0.1 * (i + 1)}>
                  <TiltCard>
                    <Link href="/capabilities" className="card-shell block">
                      <div className="card-core p-8 flex items-start gap-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center shrink-0"
                        >
                          <Icon size={24} weight="light" className="text-orange" />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold text-charcoal mb-1">
                            {service.title}
                          </h4>
                          <p className="text-slate text-sm leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </FadeIn>
                );
              })}
            </div>

            {/* Right featured card */}
            <FadeIn delay={0.15}>
              <TiltCard>
                <Link href="/capabilities" className="card-shell block h-full">
                  <div className="card-core p-10 md:p-14 h-full flex flex-col justify-between min-h-[300px]">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center"
                    >
                      <Syringe size={28} weight="light" className="text-orange" />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 tracking-tighter">
                        {services[5].title}
                      </h4>
                      <p className="text-slate text-base leading-relaxed max-w-md">
                        {services[5].desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </FadeIn>
          </div>

          {/* Final row — three remaining */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-6 mt-6">
            {services.slice(6).map((service, i) => {
              const Icon = service.icon;
              return (
              <FadeIn key={service.title} delay={0.1 * (i + 1)}>
                <TiltCard>
                  <Link href="/capabilities" className="card-shell block h-full">
                    <div className="card-core p-8 h-full">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-5"
                      >
                        <Icon size={24} weight="light" className="text-orange" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-charcoal mb-2">
                        {service.title}
                      </h4>
                      <p className="text-slate text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                </TiltCard>
              </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats — divide-x layout */}
      <section className="bg-charcoal py-28 md:py-36 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="mb-16">
            <span className="eyebrow mb-6 !bg-white/5 !text-orange">By the Numbers</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mt-6">
              Scale That Speaks
            </h3>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                <div key={stat.label} className="flex-1 py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                  <Icon size={28} weight="light" className="text-orange mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white font-mono tabular-nums">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/40 text-sm mt-3 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Logos — asymmetric floating tiles */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="mb-16">
            <span className="eyebrow mb-6">Trusted By Industry Leaders</span>
            <h3 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tighter mt-6">
              Our Clients
            </h3>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr] gap-4"
            staggerDelay={0.06}
          >
            {clients.map((client) => (
              <StaggerItem key={client.name}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="client-logo card-shell"
                >
                  <div className="card-core flex items-center justify-center h-20 px-6">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-10 max-w-[120px] w-auto object-contain"
                    />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="mt-12">
            <Link
              href="/clients"
              className="group text-orange font-semibold inline-flex items-center gap-3"
            >
              View All Clients
              <span className="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-700">
                <ArrowRight size={14} weight="light" className="text-orange" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { cert: "ISO 9001", label: "Quality Management" },
              { cert: "ISO 14001", label: "Environmental Management" },
              { cert: "IATF 16949", label: "Automotive Quality" },
            ].map((item) => (
              <FadeIn key={item.cert} className="flex-1 py-6 md:py-0 md:px-12 first:md:pl-0 last:md:pr-0">
                <div className="flex items-center gap-4 justify-center">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ShieldCheck size={28} weight="light" className="text-orange" />
                  </motion.div>
                  <div>
                    <div className="font-bold text-charcoal">{item.cert}</div>
                    <div className="text-slate text-sm">{item.label}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-28 md:py-36 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.95]">
                  <TextReveal>Let&apos;s Build Something Together</TextReveal>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-white/50 text-lg mt-6 max-w-xl leading-relaxed">
                  Whether you need a full design-to-delivery service or expert
                  manufacturing support, we&apos;re ready to discuss your next
                  project.
                </p>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={0.4}>
                <div className="flex flex-col gap-4">
                  <MagneticHover>
                    <Link
                      href="/contact"
                      className="group bg-orange hover:bg-orange-dark text-white font-semibold pl-8 pr-2 py-2 rounded-full text-lg transition-all duration-700 inline-flex items-center gap-4 w-full justify-between"
                      style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                    >
                      Get a Quote
                      <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-700">
                        <ArrowRight size={20} weight="light" className="text-white" />
                      </span>
                    </Link>
                  </MagneticHover>
                  <MagneticHover>
                    <a
                      href="tel:+441332753333"
                      className="group border border-white/20 hover:border-white/50 text-white font-semibold pl-8 pr-2 py-2 rounded-full text-lg transition-all duration-700 inline-flex items-center gap-4 w-full justify-between"
                      style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                    >
                      Call Us Now
                      <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-700">
                        <Phone size={20} weight="light" className="text-white" />
                      </span>
                    </a>
                  </MagneticHover>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
