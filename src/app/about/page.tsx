"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Users,
  Target,
  Award,
  Factory,
  Cog,
  Heart,
  TrendingUp,
} from "lucide-react";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  Counter,
  TiltCard,
  TextReveal,
} from "@/components/animations";

const values = [
  {
    icon: Target,
    title: "Customer Focused",
    desc: "Every decision we make is driven by our commitment to delivering exceptional results for our clients.",
  },
  {
    icon: Award,
    title: "Quality First",
    desc: "Uncompromising commitment to the highest standards — on time, every time.",
  },
  {
    icon: Heart,
    title: "Family Owned",
    desc: "Independent and family-owned, we invest in long-term relationships, not short-term gains.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Investment",
    desc: "Significant ongoing investment in our people, processes, and the very latest manufacturing technology.",
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
    title: "Founded in Derby",
    desc: "ASG Group established as a steel fabrication company in Derby, Derbyshire.",
  },
  {
    year: "2000s",
    title: "Growth & Diversification",
    desc: "Expanded capabilities to include laser cutting, CNC manipulation, and injection moulding.",
  },
  {
    year: "2007",
    title: "Travall Launched",
    desc: "Established Travall as the world's leading brand for vehicle-specific dog guards.",
  },
  {
    year: "2010s",
    title: "Advanced Manufacturing",
    desc: "Major investment in state-of-the-art equipment including Amada laser systems and BLM tube forming.",
  },
  {
    year: "Today",
    title: "World-Class Facility",
    desc: "5,000m² facility with 9 manufacturing capabilities, serving major automotive OEMs globally.",
  },
];

export default function AboutPage() {
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
              About ASG Group
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Engineering Excellence Since 1997
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-light text-lg mt-6 leading-relaxed"
            >
              From day one, ASG has been involved in steel fabrication. Today,
              manual operations run alongside robotic and CNC equipment
              providing a strong and versatile production plant of plastic,
              steel, stainless steel and aluminium product.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
                  Our Story
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  A Real Passion for Engineering
                </h3>
                <div className="space-y-4 text-slate leading-relaxed">
                  <p>
                    Customer-focused and family-owned, ASG Group is a truly
                    world-class organisation that continues to attract major
                    clients from the automotive and industrial sector.
                  </p>
                  <p>
                    We believe that investment within our people and facilities is
                    paramount to maintaining our success. It&apos;s a position we
                    maintain through significant, ongoing investment in our highly
                    skilled teams and the very latest manufacturing technology.
                  </p>
                  <p>
                    Operating from our 5,000m² single-site facility in Derby, our
                    single-site strategy provides our clients with focus,
                    flexibility, and cost control — while enabling us to deliver a
                    comprehensive range of quality engineering services across
                    multiple sectors.
                  </p>
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="bg-off-white rounded-2xl p-10">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: Clock, value: 26, suffix: "+", label: "Years" },
                    { icon: Factory, value: 5000, suffix: "", label: "m² Facility" },
                    { icon: Cog, value: 9, suffix: "", label: "Capabilities" },
                    { icon: Users, value: 16, suffix: "+", label: "OEM Clients" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <stat.icon className="text-orange mx-auto mb-3" size={32} />
                      </motion.div>
                      <div className="text-3xl font-bold text-charcoal">
                        <Counter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-slate text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Our Values
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">
              What Drives Us
            </h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <TiltCard className="h-full">
                  <div className="bg-white rounded-xl p-8 border border-border h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-5"
                    >
                      <value.icon className="text-orange" size={24} />
                    </motion.div>
                    <h4 className="text-lg font-bold text-charcoal mb-2">
                      {value.title}
                    </h4>
                    <p className="text-slate text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Our Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">
              Heritage & Growth
            </h3>
          </FadeIn>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.15}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-14 h-14 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg shadow-orange/20"
                    >
                      {item.year}
                    </motion.div>
                    {i < timeline.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-px bg-border min-h-[60px]"
                      />
                    )}
                  </div>
                  <div className="pb-10">
                    <h4 className="text-lg font-bold text-charcoal">
                      {item.title}
                    </h4>
                    <p className="text-slate text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Industries We Serve
            </h2>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.08}>
            {sectors.map((sector) => (
              <StaggerItem key={sector}>
                <motion.div
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="bg-charcoal-light text-white px-6 py-3 rounded-full font-medium text-sm cursor-default border border-white/10 hover:border-orange/40 transition-colors"
                >
                  {sector}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-slate text-lg mb-8">
              Discover how our 26+ years of engineering expertise can support your
              next project.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
