"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Trophy,
  Leaf,
  Car,
  ClipboardText,
  Users,
  FileText,
} from "@phosphor-icons/react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  MagneticHover,
  ScaleIn,
} from "@/components/animations";

const premiumEase = [0.32, 0.72, 0, 1] as const;

const certifications = [
  {
    icon: Trophy,
    cert: "ISO 9001",
    title: "Quality Management Systems",
    desc: "Internationally recognised standard demonstrating our ability to consistently provide products and services that meet customer and regulatory requirements.",
    color: "bg-[#E8552D]/[0.06] text-[#E8552D]",
  },
  {
    icon: Leaf,
    cert: "ISO 14001",
    title: "Environmental Management Systems",
    desc: "Certification confirming our systematic approach to managing environmental responsibilities, reducing waste, and improving resource efficiency.",
    color: "bg-[#E8552D]/[0.06] text-[#E8552D]",
  },
  {
    icon: Car,
    cert: "IATF 16949",
    title: "Automotive Quality Management",
    desc: "The highest automotive quality standard, demonstrating our commitment to continual improvement, defect prevention, and reduction of variation and waste in the supply chain.",
    color: "bg-[#E8552D]/[0.06] text-[#E8552D]",
  },
];

const practices = [
  {
    icon: Users,
    title: "Experienced QA Team",
    desc: "A talented and highly experienced Quality Assurance team overseeing a well-integrated programme of development, testing and production.",
  },
  {
    icon: ClipboardText,
    title: "Supplier Verification",
    desc: "Full specification compliance issued to outside suppliers with verification of all subcontractors against stringent internal standards.",
  },
  {
    icon: FileText,
    title: "IP Protection",
    desc: "Copyright and patent protection for designs and products where possible, safeguarding innovation and intellectual property.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Improvement",
    desc: "Ongoing investment in people, processes, and technology to maintain the highest standards of manufacturing excellence.",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0C0C1D] py-36 md:py-44 mt-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: premiumEase }}
            >
              <span className="eyebrow">Quality Assurance</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter mt-6"
            >
              Uncompromising Standards
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: premiumEase }}
              className="text-[#52556A] text-lg mt-6 leading-relaxed max-w-xl"
            >
              We are proud to have been recognised for our continuing efforts
              through certification by leading industry bodies and international
              standards organisations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="eyebrow">Accreditations</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0C0C1D] tracking-tighter mt-4">
              Our Certifications
            </h3>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-6"
            staggerDelay={0.15}
          >
            {certifications.map((cert, i) => (
              <StaggerItem key={cert.cert}>
                <TiltCard className="h-full">
                  <div className="card-shell h-full">
                    <div
                      className={`card-core h-full ${
                        i === 0 ? "p-12" : "p-10"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ ease: premiumEase, duration: 0.5 }}
                        className={`${
                          i === 0 ? "w-16 h-16" : "w-14 h-14"
                        } rounded-2xl flex items-center justify-center mb-6 ${cert.color}`}
                      >
                        <cert.icon
                          size={i === 0 ? 32 : 28}
                          weight="light"
                        />
                      </motion.div>
                      <div
                        className={`${
                          i === 0 ? "text-3xl" : "text-2xl"
                        } font-bold text-[#0C0C1D] tracking-tighter mb-1`}
                      >
                        {cert.cert}
                      </div>
                      <div className="text-[#E8552D] font-medium text-sm mb-4">
                        {cert.title}
                      </div>
                      <p className="text-[#52556A] text-sm leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quality Practices */}
      <section className="py-28 md:py-36 bg-[#F4F5F7]">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="eyebrow">How We Work</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0C0C1D] tracking-tighter mt-4">
              Quality Practices
            </h3>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            staggerDelay={0.1}
          >
            {practices.map((practice) => (
              <StaggerItem key={practice.title}>
                <div className="card-shell h-full">
                  <div className="card-core p-8 flex gap-6 h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ ease: premiumEase, duration: 0.5 }}
                      className="w-12 h-12 bg-[#E8552D]/[0.06] rounded-xl flex items-center justify-center shrink-0"
                    >
                      <practice.icon
                        className="text-[#E8552D]"
                        size={24}
                        weight="light"
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0C0C1D] mb-2">
                        {practice.title}
                      </h4>
                      <p className="text-[#52556A] text-sm leading-relaxed">
                        {practice.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <ScaleIn>
              <div className="bg-[#0C0C1D] rounded-3xl p-12 md:p-16 text-center border border-white/[0.04] relative overflow-hidden">
                {/* Subtle radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,85,45,0.04),transparent_70%)] pointer-events-none" />

                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  >
                    <ShieldCheck
                      className="text-[#E8552D] mx-auto mb-6"
                      size={48}
                      weight="light"
                    />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tighter">
                    Our Quality Commitment
                  </h3>
                  <p className="text-[#52556A] leading-relaxed max-w-2xl mx-auto">
                    Quality is not just a department at ASG Group — it&apos;s a
                    mindset that runs through everything we do. From incoming
                    material inspection to final product despatch, every step is
                    monitored, measured, and continuously improved.
                  </p>
                  <StaggerContainer
                    className="grid grid-cols-3 gap-6 mt-10 max-w-lg mx-auto"
                    staggerDelay={0.15}
                  >
                    {[
                      { label: "On Time", value: "Delivery" },
                      { label: "Every Time", value: "Quality" },
                      { label: "Zero", value: "Compromise" },
                    ].map((item) => (
                      <StaggerItem key={item.label}>
                        <div className="border border-white/[0.06] rounded-xl py-4 px-3">
                          <div className="text-[#E8552D] font-bold text-lg">
                            {item.value}
                          </div>
                          <div className="text-[#52556A] text-xs mt-1">
                            {item.label}
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F5F7] py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C1D] mb-6 tracking-tighter">
              Quality You Can Trust
            </h2>
            <p className="text-[#52556A] text-lg mb-10 max-w-xl mx-auto">
              Learn more about how our quality systems can support your project
              requirements.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="bg-[#E8552D] hover:bg-[#d14a27] text-white font-semibold pl-8 pr-6 py-4 rounded-full text-lg transition-all duration-700 inline-flex items-center gap-3"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                Contact Our QA Team
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
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
