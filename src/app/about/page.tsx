"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Target,
  Trophy,
  Factory,
  GearSix,
  Heart,
  TrendUp,
  ArrowRight,
} from "@phosphor-icons/react";
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  Counter,
  MagneticHover,
  TextReveal,
  TiltCard,
} from "@/components/animations";

const ease = [0.32, 0.72, 0, 1] as const;

const values = [
  {
    icon: Target,
    title: "Customer Focused",
    desc: "Everything we do starts and ends with our customers. We build lasting partnerships through transparency, responsiveness, and a relentless commitment to exceeding expectations.",
  },
  {
    icon: Trophy,
    title: "Quality First",
    desc: "Certified to ISO 9001, ISO 14001 and IATF 16949, quality isn\u2019t just a department \u2014 it\u2019s embedded in every process, every team, and every product that leaves our facility.",
  },
  {
    icon: Heart,
    title: "Family Owned",
    desc: "As a family-owned business, we think long-term. Decisions are made with care, integrity, and a genuine commitment to the people and communities we serve.",
  },
  {
    icon: TrendUp,
    title: "Continuous Investment",
    desc: "We continually invest in the latest manufacturing technology, training, and facility upgrades to stay at the forefront of UK engineering capability.",
  },
];

const sectors = [
  "Automotive",
  "Aerospace",
  "Agriculture",
  "Marine",
  "Medical",
  "Industrial",
  "Leisure",
  "Architectural",
];

const timeline = [
  {
    year: "1997",
    title: "Founded",
    desc: "ASG Group established in Derby, UK, with a vision to deliver world-class precision manufacturing services.",
  },
  {
    year: "2000s",
    title: "Growth",
    desc: "Rapid expansion of capabilities and client base, investing in advanced CNC, laser cutting, and fabrication technology.",
  },
  {
    year: "2007",
    title: "Travall",
    desc: "Launch of Travall \u2014 our own consumer brand of vehicle-specific pet barriers, dividers, and accessories, now sold globally.",
  },
  {
    year: "2010s",
    title: "Advanced Manufacturing",
    desc: "Major investment in injection moulding, robotic welding, and automated laser systems \u2014 expanding capacity and precision.",
  },
  {
    year: "Today",
    title: "World-Class",
    desc: "A truly world-class manufacturing organisation with 9 capabilities under one roof, serving OEMs across multiple sectors worldwide.",
  },
];

const stats = [
  { value: 26, suffix: "+", label: "Years", icon: Clock },
  { value: 5000, suffix: "", label: "m\u00B2", icon: Factory },
  { value: 9, suffix: "", label: "Capabilities", icon: GearSix },
  { value: 16, suffix: "+", label: "OEM Clients", icon: Users },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-36 md:py-44 mt-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="eyebrow"
            >
              About ASG Group
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-none mt-5"
            >
              Precision Engineering.
              <br />
              <span className="text-orange">Family Values.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="text-white/50 text-lg mt-6 leading-relaxed max-w-2xl"
            >
              Customer-focused and family-owned, ASG Group is a world-class
              manufacturing organisation delivering a comprehensive range of
              quality engineering services from our 5,000m&sup2; facility in
              Derby, UK.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story — video + stats overlay */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="eyebrow mb-6">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tighter mt-6 max-w-2xl">
              <TextReveal>
                Over 26 years of precision engineering excellence from the heart
                of the UK
              </TextReveal>
            </h2>
          </FadeIn>

          <div className="relative">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden aspect-video">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/about-heritage.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </FadeIn>

            {/* Stats overlay */}
            <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 z-10">
              <div className="max-w-[1200px] mx-auto md:px-8 md:pb-8">
                <ScaleIn delay={0.3}>
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black/5">
                      {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                          <div
                            key={stat.label}
                            className="p-6 md:p-8 text-center"
                          >
                            <Icon
                              size={24}
                              weight="light"
                              className="text-orange mx-auto mb-3"
                            />
                            <div className="text-3xl md:text-4xl font-bold text-charcoal">
                              <Counter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-slate text-sm mt-1">
                              {stat.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — 2-column zig-zag */}
      <section className="py-28 md:py-36 bg-surface">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="mb-20">
            <span className="eyebrow mb-6">Our Values</span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tighter mt-6">
              What Drives Us
            </h2>
          </FadeIn>

          <div className="space-y-16 md:space-y-24">
            {values.map((value, i) => {
              const Icon = value.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={value.title}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
                >
                  <SlideIn
                    direction={isEven ? "left" : "right"}
                    className={!isEven ? "md:order-2" : ""}
                  >
                    <TiltCard>
                      <div className="card-shell">
                        <div className="card-core p-10 md:p-14 flex flex-col items-center text-center min-h-[280px] justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-6"
                          >
                            <Icon
                              size={32}
                              weight="light"
                              className="text-orange"
                            />
                          </motion.div>
                          <h3 className="text-2xl md:text-3xl font-bold text-charcoal tracking-tighter">
                            {value.title}
                          </h3>
                        </div>
                      </div>
                    </TiltCard>
                  </SlideIn>

                  <SlideIn
                    direction={isEven ? "right" : "left"}
                    delay={0.15}
                    className={!isEven ? "md:order-1" : ""}
                  >
                    <p className="text-slate text-lg leading-relaxed">
                      {value.desc}
                    </p>
                  </SlideIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="eyebrow mb-6">Sectors We Serve</span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tighter mt-6">
              Cross-Industry Expertise
            </h2>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            staggerDelay={0.06}
          >
            {sectors.map((sector) => (
              <StaggerItem key={sector}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="card-shell"
                >
                  <div className="card-core flex items-center justify-center h-24 px-4">
                    <span className="font-bold text-charcoal text-base text-center">
                      {sector}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 md:py-36 bg-charcoal overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="mb-20">
            <span className="eyebrow !bg-white/5 !text-orange mb-6">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mt-6">
              A Legacy of Growth
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <FadeIn key={item.year} delay={i * 0.1}>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                      {/* Dot */}
                      <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-orange -translate-x-1.5 md:-translate-x-1.5 z-10" />

                      {/* Content */}
                      <div
                        className={`pl-12 md:pl-0 ${
                          isEven
                            ? "md:text-right md:pr-16"
                            : "md:col-start-2 md:pl-16"
                        }`}
                      >
                        <span className="text-orange font-bold text-sm uppercase tracking-widest">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-bold text-white tracking-tighter mt-2">
                          {item.title}
                        </h3>
                        <p className="text-white/40 leading-relaxed mt-3 max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-surface">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <FadeIn>
            <span className="eyebrow mb-6">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tighter mt-6 mb-6">
              <TextReveal>Ready to Work With Us?</TextReveal>
            </h2>
            <p className="text-slate text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you need a full design-to-delivery service or expert
              manufacturing support, we&apos;re ready to discuss your next
              project.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="group bg-orange hover:bg-orange-dark text-white font-semibold pl-8 pr-2 py-2 rounded-full text-lg transition-all duration-700 inline-flex items-center gap-4"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                Start Your Project
                <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-700">
                  <ArrowRight
                    size={20}
                    weight="light"
                    className="text-white"
                  />
                </span>
              </Link>
            </MagneticHover>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
