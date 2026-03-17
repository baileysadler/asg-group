import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">ASG Group</span>
            </div>
            <p className="text-slate-light text-sm leading-relaxed mb-6">
              Family-owned manufacturing & engineering company delivering
              quality engineering services for over 26 years from our 5,000m²
              facility in Derby, UK.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+441332753333"
                className="flex items-center gap-3 text-sm text-slate-light hover:text-orange transition-colors"
              >
                <Phone size={16} />
                +44 (0) 1332 753 333
              </a>
              <a
                href="mailto:info@asg-group.co.uk"
                className="flex items-center gap-3 text-sm text-slate-light hover:text-orange transition-colors"
              >
                <Mail size={16} />
                info@asg-group.co.uk
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-light">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                997 London Road, Derby, Derbyshire, DE24 8PX, UK
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6">
              Capabilities
            </h3>
            <ul className="space-y-3">
              {[
                "Design & Development",
                "Fabrication",
                "Advanced Laser Cutting",
                "CNC Tube Manipulation",
                "Press Forming",
                "Injection Moulding",
                "Vacuum Forming",
                "Product Finishing",
                "Assembly & Logistics",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/capabilities"
                    className="text-sm text-slate-light hover:text-orange transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {[
                "Dog Guards & Cargo Dividers",
                "Side Steps",
                "Commercial Vehicle Products",
                "Non-Automotive",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-sm text-slate-light hover:text-orange transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 mt-10">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Clients", href: "/clients" },
                { name: "Quality", href: "/quality" },
                { name: "Associate Companies", href: "/companies" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-light hover:text-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {[
                {
                  cert: "ISO 9001",
                  desc: "Quality Management Systems",
                },
                {
                  cert: "ISO 14001",
                  desc: "Environmental Management",
                },
                {
                  cert: "IATF 16949",
                  desc: "Automotive Quality Management",
                },
              ].map((item) => (
                <div
                  key={item.cert}
                  className="bg-charcoal-light rounded-lg p-4"
                >
                  <div className="font-semibold text-orange text-sm">
                    {item.cert}
                  </div>
                  <div className="text-slate-light text-xs mt-1">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                Associate Companies
              </h3>
              <div className="space-y-2">
                <a
                  href="https://www.ansini.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-light hover:text-orange transition-colors"
                >
                  Ansini Ltd →
                </a>
                <a
                  href="https://www.travall.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-light hover:text-orange transition-colors"
                >
                  Travall →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-light">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-light text-xs">
            © {new Date().getFullYear()} ASG Group Ltd. All rights reserved.
          </p>
          <p className="text-slate-light text-xs">
            997 London Road, Derby, Derbyshire, DE24 8PX, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
