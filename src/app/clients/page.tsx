"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Car, Wrench } from "@phosphor-icons/react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  MagneticHover,
} from "@/components/animations";

const automotiveClients = [
  { name: "Audi", desc: "Premium vehicle accessories and components", featured: true },
  { name: "Bentley", desc: "Luxury automotive engineering solutions", featured: true },
  { name: "Ford", desc: "High-volume manufacturing partnership" },
  { name: "General Motors", desc: "Global automotive components supply" },
  { name: "Honda", desc: "Precision-engineered vehicle parts" },
  { name: "Hyundai", desc: "OEM manufacturing and supply" },
  { name: "Jaguar", desc: "Premium British automotive partnership", featured: true },
  { name: "Land Rover", desc: "Off-road and luxury vehicle components", featured: true },
  { name: "Porsche", desc: "High-performance vehicle accessories" },
  { name: "Seat", desc: "European automotive manufacturing" },
  { name: "Skoda", desc: "Vehicle-specific products and accessories" },
  { name: "Volkswagen", desc: "Large-scale automotive production" },
];

const industrialClients = [
  { name: "Arena Group", desc: "Event infrastructure and temporary structures" },
  { name: "Load Hog", desc: "Reusable transit packaging solutions" },
  { name: "Motion Simulation", desc: "Advanced motion simulator frameworks" },
  { name: "Radius Systems", desc: "Piping and infrastructure systems" },
];

const ease = [0.32, 0.72, 0, 1] as const;

export default function ClientsPage() {
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
              Our Clients
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tighter mt-6"
            >
              Trusted by the World&apos;s Leading Brands
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="text-[#52556A] text-lg md:text-xl mt-8 leading-relaxed max-w-2xl"
            >
              A diverse range of prestigious clients from within the global
              automotive industry and key industrial sectors around the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Automotive Clients */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="flex items-center gap-5 mb-16">
            <div className="w-12 h-12 bg-[#0C0C1D]/5 rounded-2xl flex items-center justify-center">
              <Car className="text-[#E8552D]" size={24} weight="light" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0C0C1D] tracking-tighter">
                Automotive Clients
              </h2>
              <p className="text-[#52556A] text-sm mt-1">Major OEMs from the global automotive industry</p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            staggerDelay={0.06}
          >
            {automotiveClients.map((client) => (
              <StaggerItem key={client.name}>
                <TiltCard className="h-full">
                  <div
                    className={`card-shell h-full ${
                      client.featured ? "md:min-h-[200px]" : ""
                    }`}
                  >
                    <div className="card-core p-8 md:p-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-5 mb-5">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, ease }}
                            className="w-14 h-14 bg-[#0C0C1D] rounded-xl flex items-center justify-center border border-[#0C0C1D]/10"
                          >
                            <span className="font-semibold text-white text-xl tracking-tight">
                              {client.name.charAt(0)}
                            </span>
                          </motion.div>
                          <div>
                            <h3 className="text-lg font-bold text-[#0C0C1D] tracking-tighter">
                              {client.name}
                            </h3>
                            <p className="text-[#52556A] text-sm mt-0.5">
                              {client.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                      {client.featured && (
                        <div className="flex items-center gap-2 mt-4">
                          <span className="text-xs font-medium text-[#E8552D]/70 uppercase tracking-widest">
                            Featured Partner
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industrial Clients */}
      <section className="py-28 md:py-36 bg-[#F4F5F7]">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="flex items-center gap-5 mb-16">
            <div className="w-12 h-12 bg-[#0C0C1D]/5 rounded-2xl flex items-center justify-center">
              <Wrench className="text-[#E8552D]" size={24} weight="light" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0C0C1D] tracking-tighter">
                Industrial Clients
              </h2>
              <p className="text-[#52556A] text-sm mt-1">Key industrial sector partnerships</p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-5"
            staggerDelay={0.1}
          >
            {industrialClients.map((client, i) => (
              <StaggerItem key={client.name} className={i === 0 ? "md:row-span-2" : ""}>
                <TiltCard className="h-full">
                  <div className={`card-shell h-full ${i === 0 ? "md:min-h-[280px]" : ""}`}>
                    <div className="card-core p-8 md:p-10 h-full flex flex-col">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease }}
                        className="w-14 h-14 bg-[#0C0C1D] rounded-xl flex items-center justify-center border border-[#0C0C1D]/10 mb-5"
                      >
                        <span className="font-semibold text-white text-xl tracking-tight">
                          {client.name.charAt(0)}
                        </span>
                      </motion.div>
                      <h3 className="text-lg font-bold text-[#0C0C1D] tracking-tighter">
                        {client.name}
                      </h3>
                      <p className="text-[#52556A] text-sm mt-2 leading-relaxed">
                        {client.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="eyebrow">Notable Projects</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0C0C1D] tracking-tighter mt-5">
              Where You&apos;ll Find Our Work
            </h3>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {["Silverstone Circuit", "Manchester United", "Fulham FC", "The Queen's Club"].map(
              (project) => (
                <StaggerItem key={project}>
                  <div className="card-shell">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.5, ease }}
                      className="card-core bg-[#0C0C1D] p-10 text-center cursor-default"
                    >
                      <span className="text-white font-bold text-lg tracking-tighter">
                        {project}
                      </span>
                    </motion.div>
                  </div>
                </StaggerItem>
              )
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0C1D] py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Join Our Client Roster
            </h2>
            <p className="text-[#52556A] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Discover why the world&apos;s leading automotive and industrial brands trust ASG Group.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="group bg-[#E8552D] hover:bg-[#d04a26] text-white font-semibold pl-8 pr-2 py-2 rounded-full text-lg transition-all duration-700 inline-flex items-center gap-4"
                style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
              >
                Get in Touch
                <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-700">
                  <ArrowRight size={20} weight="light" className="text-white" />
                </span>
              </Link>
            </MagneticHover>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
