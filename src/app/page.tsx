"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Pen,
  Flame,
  Zap,
  CircleDot,
  Gauge,
  Syringe,
  Layers,
  Paintbrush,
  Package,
  ArrowRight,
  Shield,
  Clock,
  Factory,
  Users,
  Phone,
} from "lucide-react";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  Counter,
  TiltCard,
  TextReveal,
  MagneticHover,
} from "@/components/animations";

const services = [
  {
    icon: Pen,
    title: "Design & Development",
    desc: "Full lifecycle CAD design with Catia V5 & SolidWorks, 3D scanning, and rapid prototyping.",
  },
  {
    icon: Flame,
    title: "Fabrication",
    desc: "Manual and robotic MIG/TIG welding in mild steel, stainless steel, and aluminium.",
  },
  {
    icon: Zap,
    title: "Advanced Laser Cutting",
    desc: "Amada C1 laser/punch combo, 24hr unmanned operation, tubes up to 152mm diameter.",
  },
  {
    icon: CircleDot,
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
    icon: Layers,
    title: "Vacuum Forming",
    desc: "Thermoplastic moulding via Ansini — CNC routing, hot wire forming, ultrasonic welding.",
  },
  {
    icon: Paintbrush,
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
  { value: 5000, suffix: "", label: "m² Facility", icon: Factory },
  { value: 12000, suffix: "", label: "Products Weekly", icon: Package },
  { value: 16, suffix: "", label: "Major OEM Clients", icon: Users },
];

const clients = [
  "Audi",
  "Bentley",
  "Ford",
  "Honda",
  "Hyundai",
  "Jaguar",
  "Land Rover",
  "Porsche",
  "Seat",
  "Skoda",
  "Volkswagen",
  "General Motors",
];

export default function HomePage() {
  return (
    <>
      {/* Hero with video background */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight leading-tight"
          >
            Precision Engineering.
            <br />
            Built in Britain.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            ASG Group in Derby, UK — Advanced manufacturing processes with full
            in-house capability. Delivering excellence since 1997.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <MagneticHover>
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </MagneticHover>
            <MagneticHover>
              <Link
                href="/capabilities"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Our Capabilities
              </Link>
            </MagneticHover>
          </motion.div>
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

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
                Welcome to ASG Group
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-3xl md:text-4xl font-bold text-charcoal leading-snug">
                <TextReveal>
                  From design and development to manufacturing, assembly and
                  packaging — delivering a comprehensive range of quality
                  engineering services for over 26 years.
                </TextReveal>
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate mt-6 text-lg leading-relaxed">
                Customer-focused and family-owned, we are a truly world-class
                organisation that continues to attract major clients from the
                automotive and industrial sector through significant, ongoing
                investment in our highly skilled teams and the very latest
                manufacturing technology.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              What We Do
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">
              Full In-House Capability
            </h3>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <TiltCard>
                  <Link
                    href="/capabilities"
                    className="service-card block bg-white rounded-xl p-8 border border-border h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-5"
                    >
                      <service.icon className="text-orange" size={24} />
                    </motion.div>
                    <h4 className="text-lg font-bold text-charcoal mb-2">
                      {service.title}
                    </h4>
                    <p className="text-slate text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.15}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="text-orange mx-auto mb-3" size={28} />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-light text-sm mt-2 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Trusted By Industry Leaders
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">
              Our Clients
            </h3>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center"
            staggerDelay={0.06}
          >
            {clients.map((client) => (
              <StaggerItem key={client}>
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="client-logo flex items-center justify-center h-20 bg-off-white rounded-lg px-4 cursor-default"
                >
                  <span className="font-bold text-charcoal text-sm text-center">
                    {client}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="text-center mt-10">
            <Link
              href="/clients"
              className="text-orange font-semibold hover:underline inline-flex items-center gap-2 group"
            >
              View All Clients
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer
            className="flex flex-col md:flex-row items-center justify-center gap-12"
            staggerDelay={0.15}
          >
            {[
              { cert: "ISO 9001", label: "Quality Management" },
              { cert: "ISO 14001", label: "Environmental Management" },
              { cert: "IATF 16949", label: "Automotive Quality" },
            ].map((item, i) => (
              <StaggerItem key={item.cert}>
                <div className="flex items-center gap-3">
                  {i > 0 && (
                    <div className="hidden md:block w-px h-12 bg-border absolute -left-6" />
                  )}
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="text-orange" size={24} />
                  </motion.div>
                  <div>
                    <div className="font-bold text-charcoal">{item.cert}</div>
                    <div className="text-slate text-sm">{item.label}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <TextReveal>Let&apos;s Build Something Together</TextReveal>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-light text-lg mb-10 max-w-2xl mx-auto">
              Whether you need a full design-to-delivery service or expert
              manufacturing support, we&apos;re ready to discuss your next
              project.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticHover>
                <Link
                  href="/contact"
                  className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get a Quote
                  <ArrowRight size={20} />
                </Link>
              </MagneticHover>
              <MagneticHover>
                <a
                  href="tel:+441332753333"
                  className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Us Now
                </a>
              </MagneticHover>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
