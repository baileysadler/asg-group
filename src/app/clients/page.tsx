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
  { name: "Audi", desc: "Premium vehicle accessories and components", logo: "/logos/audi.svg", featured: true },
  { name: "Bentley", desc: "Luxury automotive engineering solutions", logo: "/logos/bentley.svg", featured: true },
  { name: "Ford", desc: "High-volume manufacturing partnership", logo: "/logos/ford.svg" },
  { name: "General Motors", desc: "Global automotive components supply", logo: "/logos/general-motors.svg" },
  { name: "Honda", desc: "Precision-engineered vehicle parts", logo: "/logos/honda.svg" },
  { name: "Hyundai", desc: "OEM manufacturing and supply", logo: "/logos/hyundai.svg" },
  { name: "Jaguar", desc: "Premium British automotive partnership", logo: "/logos/jaguar.svg", featured: true },
  { name: "Land Rover", desc: "Off-road and luxury vehicle components", logo: "/logos/land-rover.svg", featured: true },
  { name: "Porsche", desc: "High-performance vehicle accessories", logo: "/logos/porsche.svg" },
  { name: "Seat", desc: "European automotive manufacturing", logo: "/logos/seat.svg" },
  { name: "Skoda", desc: "Vehicle-specific products and accessories", logo: "/logos/skoda.svg" },
  { name: "Volkswagen", desc: "Large-scale automotive production", logo: "/logos/volkswagen.svg" },
];

const industrialClients = [
  { name: "Arena Group", desc: "Event infrastructure and temporary structures", logo: "/logos/arena-group.svg" },
  { name: "Load Hog", desc: "Reusable transit packaging solutions", logo: "/logos/load-hog.svg" },
  { name: "Motion Simulation", desc: "Advanced motion simulator frameworks", logo: "/logos/motion-simulation.svg" },
  { name: "Radius Systems", desc: "Piping and infrastructure systems", logo: "/logos/radius-systems.svg" },
];

const notableProjects = [
  { name: "Silverstone Circuit", logo: "/logos/silverstone.svg" },
  { name: "Manchester United", logo: "/logos/manchester-united.svg" },
  { name: "Fulham FC", logo: "/logos/fulham-fc.svg" },
  { name: "The Queen's Club", logo: "/logos/queens-club.svg" },
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
                        <div className="flex items-center gap-6 mb-5">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 p-2.5">
                            <img
                              src={client.logo}
                              alt={client.name}
                              className="max-h-10 max-w-[48px] w-auto object-contain"
                            />
                          </div>
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
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 p-2.5 mb-5">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-10 max-w-[48px] w-auto object-contain"
                        />
                      </div>
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
            {notableProjects.map((project) => (
                <StaggerItem key={project.name}>
                  <div className="card-shell">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.5, ease }}
                      className="bg-[#0C0C1D] rounded-[calc(1.5rem-6px)] p-10 flex items-center justify-center cursor-default min-h-[120px]"
                    >
                      <span className="text-white font-bold text-lg tracking-tighter text-center">
                        {project.name}
                      </span>
                    </motion.div>
                  </div>
                </StaggerItem>
              ))}
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
