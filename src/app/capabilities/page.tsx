"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Pen,
  Flame,
  Zap,
  CircleDot,
  Gauge,
  Syringe,
  Layers,
  Paintbrush,
  Package,
  CheckCircle,
} from "lucide-react";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  MagneticHover,
} from "@/components/animations";

const capabilities = [
  {
    id: "design",
    icon: Pen,
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
    icon: Flame,
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
    icon: Zap,
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
    icon: CircleDot,
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
    icon: Layers,
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
    icon: Paintbrush,
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
      <section className="bg-charcoal py-32 md:py-40 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold text-orange uppercase tracking-widest mb-4"
            >
              Our Capabilities
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              9 Manufacturing Capabilities. One Facility.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-light text-lg mt-6 leading-relaxed"
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
            className={`py-20 md:py-28 scroll-mt-32 ${
              i % 2 === 1 ? "bg-off-white" : ""
            }`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <SlideIn direction={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center"
                    >
                      <cap.icon className="text-orange" size={28} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                        {cap.title}
                      </h3>
                      <p className="text-orange font-medium text-sm">
                        {cap.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate leading-relaxed text-lg mb-8">
                    {cap.desc}
                  </p>
                  <motion.div whileHover={{ x: 4 }} className="inline-block">
                    <Link
                      href="/contact"
                      className="text-orange font-semibold hover:underline inline-flex items-center gap-2"
                    >
                      Enquire About {cap.title}
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </SlideIn>
                <SlideIn direction={i % 2 === 0 ? "right" : "left"} className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className={`rounded-2xl p-8 ${
                      i % 2 === 1 ? "bg-white" : "bg-off-white"
                    }`}
                  >
                    <h4 className="font-bold text-charcoal mb-4 text-sm uppercase tracking-wider">
                      Key Features
                    </h4>
                    <StaggerContainer className="space-y-3" staggerDelay={0.06}>
                      {cap.details.map((detail) => (
                        <StaggerItem key={detail}>
                          <div className="flex items-start gap-3">
                            <CheckCircle
                              className="text-orange shrink-0 mt-0.5"
                              size={18}
                            />
                            <span className="text-slate text-sm">{detail}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </SlideIn>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Multiple Capabilities?
            </h2>
            <p className="text-slate-light text-lg mb-8">
              Our single-site strategy means all 9 capabilities under one roof —
              giving you focus, flexibility, and cost control.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </MagneticHover>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
