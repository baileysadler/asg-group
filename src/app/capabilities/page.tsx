"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PenNib,
  Fire,
  Lightning,
  CircleNotch,
  Gauge,
  Syringe,
  Stack,
  PaintBrush,
  Package,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  MagneticHover,
} from "@/components/animations";

const ease = [0.32, 0.72, 0, 1] as const;

const capabilities = [
  {
    id: "design",
    icon: PenNib,
    title: "Design & Development",
    subtitle: "Concept to Delivery",
    desc: "From initial concept right through to final delivery, we manage every stage of the design and development process.",
    details: [
      "CAD software: Catia V5 and SolidWorks",
      "3D scanning and rapid prototyping equipment",
      "Fully equipped modelling shop",
      "Secure studio facilities with electronic data transmission",
      "Concurrent engineering capabilities with partners",
      "Access to leading test facilities throughout Europe",
      "Copyright and patent protection for designs",
    ],
  },
  {
    id: "fabrication",
    icon: Fire,
    title: "Fabrication",
    subtitle: "Steel, Stainless & Aluminium",
    desc: "Expert fabrication services specialising in small and medium scale runs of fabricated parts, products and sub-assemblies with quality, versatility and value.",
    details: [
      "Manual TIG welding",
      "Manual MIG welding",
      "Robotic MIG welding",
      "CNC tube forming",
      "Automated rotary welding",
      "Materials: mild steel, stainless steel, aluminium",
    ],
  },
  {
    id: "laser",
    icon: Lightning,
    title: "Advanced Laser Cutting",
    subtitle: "24hr Unmanned Operation",
    desc: "At the forefront of UK manufacturing in advanced laser tube cutting technology, supporting both small batches and large production runs.",
    details: [
      "Amada C1 combination laser/punching machine",
      "Amada sheet load/unload unit — handles up to 3 tonnes",
      "24-hour unmanned operation capability",
      "Tube diameter capacity up to 152mm",
      "Maximum tube length: 6,500mm",
      "Job changeovers in under 3 minutes",
      "70% productivity improvement through reduced processes",
      "Eliminates tooling needs for early-stage prototyping",
    ],
  },
  {
    id: "cnc",
    icon: CircleNotch,
    title: "CNC Tube Manipulation",
    subtitle: "Precision Tube Forming",
    desc: "State-of-the-art tube forming with the widest range of tube manipulation and forming options, with extensive in-house tooling.",
    details: [
      "BLM E-Turn 40 — fully-electric, variable radius",
      "Right-and-left forming, diameters up to 40mm",
      "3D graphic visual programming",
      "Larger machines handling tubes up to 63.5mm diameter",
      "Reduced programming and changeover time",
      "Enhanced controllability and repeatability",
      "Extensive in-house tooling for various profiles",
    ],
  },
  {
    id: "press",
    icon: Gauge,
    title: "Press Forming",
    subtitle: "Up to 120 Tonnes",
    desc: "Mechanical and CNC press forming for all types of components, optimising tooling and manufacturing expenses.",
    details: [
      "Press capacity up to 120 tonnes",
      "In-house CNC punching capability",
      "Multiple forming machines of varying capacities",
      "Both mechanical and CNC-controlled forming",
      "Suitable for diverse component types",
    ],
  },
  {
    id: "injection",
    icon: Syringe,
    title: "Injection Moulding",
    subtitle: "50t to 1,300t Capacity",
    desc: "State-of-the-art plastic injection moulding focused on small to medium batch production, with flexibility and cost-effectiveness.",
    details: [
      "Arburg machines",
      "Engel machines",
      "Capacity range: 50t to 1,300t",
      "General and specialist engineering polymers",
      "Composites and elastomers",
      "Simple and complex insert moulding",
      "Expert tooling and processing consultation",
    ],
  },
  {
    id: "vacuum",
    icon: Stack,
    title: "Thermoplastic Vacuum Forming",
    subtitle: "Via Ansini (Est. 1992)",
    desc: "Specialist vacuum forming and thermoplastic moulding solutions through our associate company Ansini, serving aerospace, automotive, medical and more.",
    details: [
      "Product design and engineering",
      "Tooling design and manufacture",
      "CNC 5-axis routing",
      "Hot wire forming",
      "Ultrasonic welding",
      "Leather and fabric trimming",
      "Product assembly and kit building",
    ],
  },
  {
    id: "finishing",
    icon: PaintBrush,
    title: "Product Finishing",
    subtitle: "In-House & Partner Services",
    desc: "A reliable single point of contact for finishing your products, using in-house processes and specialist finishes by trusted partners.",
    details: [
      "Degreasing",
      "Shot blasting",
      "Nylon powder coating (250–500 microns, up to 2mm)",
      "Stainless steel polishing",
      "Galvanizing (via partners)",
      "EP and powder coating (via partners)",
      "Exclusive Rilsan Active antimicrobial coating",
      "Wide colour palette available",
    ],
  },
  {
    id: "assembly",
    icon: Package,
    title: "Assembly, Packaging & Logistics",
    subtitle: "12,000 Products Weekly",
    desc: "We take the same care packaging and dispatching your products as we do fabricating and finishing them — tailored to each customer's unique requirements.",
    details: [
      "12,000 different products weekly",
      "1 million+ individual components processed",
      "Part-product or comprehensive kit assembly",
      "Tamper-evident packaging with pictorial instructions",
      "Full warehouse management",
      "International dispatch capability",
      "Complete component inspection",
      "Indelible warranty labels for traceability",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0C0C1D] py-36 md:py-44 mt-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="eyebrow"
            >
              Our Capabilities
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter mt-5"
            >
              9 Manufacturing Capabilities. One Facility.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="text-[#52556A] text-lg mt-6 leading-relaxed max-w-2xl"
            >
              Full in-house capability from our 5,000m² facility in Derby —
              design, fabrication, laser cutting, CNC, moulding, finishing, and
              complete assembly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <div>
        {capabilities.map((cap, i) => (
          <section
            key={cap.id}
            id={cap.id}
            className={`py-28 md:py-36 scroll-mt-32 ${
              i % 2 === 1 ? "bg-[#F4F5F7]" : "bg-[#FAFAFA]"
            }`}
          >
            <div className="max-w-[1400px] mx-auto px-8">
              <div className="grid lg:grid-cols-2 gap-20 items-start">
                {/* Content side */}
                <SlideIn
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="flex items-center gap-5 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      transition={{ duration: 0.4, ease }}
                      className="w-16 h-16 bg-[#E8552D]/8 rounded-2xl flex items-center justify-center"
                    >
                      <cap.icon
                        className="text-[#E8552D]"
                        size={30}
                        weight="light"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0C0C1D] tracking-tighter">
                        {cap.title}
                      </h3>
                      <p className="text-[#E8552D] font-medium text-sm mt-0.5">
                        {cap.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#52556A] leading-relaxed text-lg mb-10">
                    {cap.desc}
                  </p>
                  <MagneticHover className="inline-block">
                    <Link
                      href="/contact"
                      className="bg-[#E8552D] hover:bg-[#d14a26] text-white font-semibold pl-7 pr-5 py-3 rounded-full text-sm transition-colors inline-flex items-center gap-3"
                    >
                      Enquire About {cap.title}
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowRight size={16} weight="light" />
                      </span>
                    </Link>
                  </MagneticHover>
                </SlideIn>

                {/* Details card side */}
                <SlideIn
                  direction={i % 2 === 0 ? "right" : "left"}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div className="card-shell">
                    <div className="card-core p-8 md:p-10">
                      <span className="eyebrow mb-8">Key Features</span>
                      <StaggerContainer
                        className="space-y-5 mt-8"
                        staggerDelay={0.06}
                      >
                        {cap.details.map((detail) => (
                          <StaggerItem key={detail}>
                            <div className="flex items-start gap-4">
                              <div className="w-5 h-5 rounded-full bg-[#E8552D]/8 flex items-center justify-center shrink-0 mt-0.5">
                                <CheckCircle
                                  className="text-[#E8552D]"
                                  size={12}
                                  weight="fill"
                                />
                              </div>
                              <span className="text-[#52556A] text-sm leading-relaxed">
                                {detail}
                              </span>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#0C0C1D] py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <FadeIn>
            <span className="eyebrow">Get Started</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 mt-5 tracking-tighter">
              Need Multiple Capabilities?
            </h2>
            <p className="text-[#52556A] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Our single-site strategy means all 9 capabilities under one roof —
              giving you focus, flexibility, and cost control.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="bg-[#E8552D] hover:bg-[#d14a26] text-white font-semibold pl-8 pr-6 py-4 rounded-full text-lg transition-colors inline-flex items-center gap-3"
              >
                Start Your Project
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
