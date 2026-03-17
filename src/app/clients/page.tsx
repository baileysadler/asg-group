"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Car, Wrench } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  MagneticHover,
} from "@/components/animations";

const automotiveClients = [
  { name: "Audi", desc: "Premium vehicle accessories and components" },
  { name: "Bentley", desc: "Luxury automotive engineering solutions" },
  { name: "Ford", desc: "High-volume manufacturing partnership" },
  { name: "General Motors", desc: "Global automotive components supply" },
  { name: "Honda", desc: "Precision-engineered vehicle parts" },
  { name: "Hyundai", desc: "OEM manufacturing and supply" },
  { name: "Jaguar", desc: "Premium British automotive partnership" },
  { name: "Land Rover", desc: "Off-road and luxury vehicle components" },
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

export default function ClientsPage() {
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
              Our Clients
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Trusted by the World&apos;s Leading Brands
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-light text-lg mt-6 leading-relaxed"
            >
              A diverse range of prestigious clients from within the global
              automotive industry and key industrial sectors around the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Automotive Clients */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex items-center gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center"
            >
              <Car className="text-orange" size={24} />
            </motion.div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                Automotive Clients
              </h2>
              <p className="text-slate text-sm">Major OEMs from the global automotive industry</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
            {automotiveClients.map((client) => (
              <StaggerItem key={client.name}>
                <TiltCard className="h-full">
                  <div className="service-card bg-off-white rounded-xl p-8 border border-border h-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm"
                    >
                      <span className="font-bold text-orange text-2xl">
                        {client.name.charAt(0)}
                      </span>
                    </motion.div>
                    <h3 className="text-lg font-bold text-charcoal">{client.name}</h3>
                    <p className="text-slate text-sm mt-1">{client.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industrial Clients */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex items-center gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center"
            >
              <Wrench className="text-orange" size={24} />
            </motion.div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Industrial Clients</h2>
              <p className="text-slate text-sm">Key industrial sector partnerships</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {industrialClients.map((client) => (
              <StaggerItem key={client.name}>
                <TiltCard className="h-full">
                  <div className="service-card bg-white rounded-xl p-8 border border-border h-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 bg-off-white rounded-lg flex items-center justify-center mb-4"
                    >
                      <span className="font-bold text-orange text-2xl">
                        {client.name.charAt(0)}
                      </span>
                    </motion.div>
                    <h3 className="text-lg font-bold text-charcoal">{client.name}</h3>
                    <p className="text-slate text-sm mt-1">{client.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Notable Projects
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
              Where You&apos;ll Find Our Work
            </h3>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
            {["Silverstone Circuit", "Manchester United", "Fulham FC", "The Queen's Club"].map(
              (project) => (
                <StaggerItem key={project}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-charcoal rounded-xl p-8 text-center cursor-default"
                  >
                    <span className="text-white font-bold">{project}</span>
                  </motion.div>
                </StaggerItem>
              )
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Client Roster
            </h2>
            <p className="text-slate-light text-lg mb-8">
              Discover why the world&apos;s leading automotive and industrial brands trust ASG Group.
            </p>
            <MagneticHover className="inline-block">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </MagneticHover>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
