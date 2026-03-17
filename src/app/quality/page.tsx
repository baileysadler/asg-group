"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Award,
  Leaf,
  Car,
  ClipboardCheck,
  Users,
  FileCheck,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  MagneticHover,
  ScaleIn,
} from "@/components/animations";

const certifications = [
  {
    icon: Award,
    cert: "ISO 9001",
    title: "Quality Management Systems",
    desc: "Internationally recognised standard demonstrating our ability to consistently provide products and services that meet customer and regulatory requirements.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Leaf,
    cert: "ISO 14001",
    title: "Environmental Management Systems",
    desc: "Certification confirming our systematic approach to managing environmental responsibilities, reducing waste, and improving resource efficiency.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Car,
    cert: "IATF 16949",
    title: "Automotive Quality Management",
    desc: "The highest automotive quality standard, demonstrating our commitment to continual improvement, defect prevention, and reduction of variation and waste in the supply chain.",
    color: "bg-amber-50 text-amber-600",
  },
];

const practices = [
  {
    icon: Users,
    title: "Experienced QA Team",
    desc: "A talented and highly experienced Quality Assurance team overseeing a well-integrated programme of development, testing and production.",
  },
  {
    icon: ClipboardCheck,
    title: "Supplier Verification",
    desc: "Full specification compliance issued to outside suppliers with verification of all subcontractors against stringent internal standards.",
  },
  {
    icon: FileCheck,
    title: "IP Protection",
    desc: "Copyright and patent protection for designs and products where possible, safeguarding innovation and intellectual property.",
  },
  {
    icon: Shield,
    title: "Continuous Improvement",
    desc: "Ongoing investment in people, processes, and technology to maintain the highest standards of manufacturing excellence.",
  },
];

export default function QualityPage() {
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
              Quality Assurance
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Uncompromising Standards
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-light text-lg mt-6 leading-relaxed"
            >
              We are proud to have been recognised for our continuing efforts
              through certification by leading industry bodies and international
              standards organisations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Accreditations
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">Our Certifications</h3>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.cert}>
                <TiltCard className="h-full">
                  <div className="service-card bg-white rounded-2xl p-10 border border-border text-center h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${cert.color}`}
                    >
                      <cert.icon size={32} />
                    </motion.div>
                    <div className="text-2xl font-bold text-charcoal mb-1">{cert.cert}</div>
                    <div className="text-orange font-medium text-sm mb-4">{cert.title}</div>
                    <p className="text-slate text-sm leading-relaxed">{cert.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quality Practices */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              How We Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal">Quality Practices</h3>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {practices.map((practice) => (
              <StaggerItem key={practice.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-8 border border-border flex gap-6 h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center shrink-0"
                  >
                    <practice.icon className="text-orange" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-charcoal mb-2">{practice.title}</h4>
                    <p className="text-slate text-sm leading-relaxed">{practice.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <ScaleIn>
            <div className="bg-charcoal rounded-2xl p-12 md:p-16 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <Shield className="text-orange mx-auto mb-6" size={48} />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Quality Commitment
              </h3>
              <p className="text-slate-light leading-relaxed max-w-2xl mx-auto">
                Quality is not just a department at ASG Group — it&apos;s a mindset that
                runs through everything we do. From incoming material inspection to
                final product despatch, every step is monitored, measured, and
                continuously improved.
              </p>
              <StaggerContainer className="grid grid-cols-3 gap-6 mt-10 max-w-lg mx-auto" staggerDelay={0.15}>
                {[
                  { label: "On Time", value: "Delivery" },
                  { label: "Every Time", value: "Quality" },
                  { label: "Zero", value: "Compromise" },
                ].map((item) => (
                  <StaggerItem key={item.label}>
                    <div>
                      <div className="text-orange font-bold text-lg">{item.value}</div>
                      <div className="text-slate-light text-xs mt-1">{item.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-slate text-lg mb-8">
              Learn more about how our quality systems can support your project requirements.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
              >
                Contact Our QA Team
                <ArrowRight size={20} />
              </Link>
            </MagneticHover>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
