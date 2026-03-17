"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Envelope, MapPin, Clock, ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { FadeIn, SlideIn, MagneticHover } from "@/components/animations";

const ease = [0.32, 0.72, 0, 1] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0C0C1D] py-36 md:py-44 mt-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="eyebrow">Contact Us</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter mt-6"
            >
              Let&apos;s Discuss Your Project
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="text-[#8A8DA0] text-lg mt-6 leading-relaxed"
            >
              Whether you have a specific requirement or just want to explore
              how we can help, we&apos;d love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact details */}
            <SlideIn direction="left" className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0C0C1D] mb-10 tracking-tighter">
                Get in Touch
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: (
                      <>
                        <a
                          href="tel:+441332753333"
                          className="text-[#52556A] hover:text-[#E8552D] transition-colors"
                        >
                          +44 (0) 1332 753 333
                        </a>
                        <div className="text-[#52556A] text-sm mt-1">
                          Fax: +44 (0) 1332 756 333
                        </div>
                      </>
                    ),
                  },
                  {
                    icon: Envelope,
                    title: "Email",
                    content: (
                      <a
                        href="mailto:info@asg-group.co.uk"
                        className="text-[#52556A] hover:text-[#E8552D] transition-colors"
                      >
                        info@asg-group.co.uk
                      </a>
                    ),
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: (
                      <p className="text-[#52556A] text-sm leading-relaxed">
                        ASG Group Limited
                        <br />
                        997 London Road
                        <br />
                        Derby, Derbyshire
                        <br />
                        DE24 8PX
                        <br />
                        United Kingdom
                      </p>
                    ),
                  },
                  {
                    icon: Clock,
                    title: "Hours",
                    content: (
                      <p className="text-[#52556A] text-sm">
                        Monday – Friday: 8:00 – 17:00
                        <br />
                        Saturday – Sunday: Closed
                      </p>
                    ),
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, ease }}
                  >
                    <div className="card-shell">
                      <div className="card-core p-5">
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ scale: 1.08, rotate: 4 }}
                            transition={{ duration: 0.5, ease }}
                            className="w-11 h-11 bg-[#E8552D]/8 rounded-xl flex items-center justify-center shrink-0"
                          >
                            <item.icon
                              className="text-[#E8552D]"
                              size={20}
                              weight="light"
                            />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-[#0C0C1D] mb-1">
                              {item.title}
                            </h3>
                            {item.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SlideIn>

            {/* Form */}
            <SlideIn direction="right" className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease }}
                  >
                    <div className="card-shell">
                      <div className="card-core p-14 text-center">
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 180,
                            damping: 14,
                            delay: 0.2,
                          }}
                          className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        >
                          <CheckCircle
                            className="text-emerald-500"
                            size={36}
                            weight="light"
                          />
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, ease }}
                          className="text-2xl font-bold text-[#0C0C1D] mb-3 tracking-tighter"
                        >
                          Thank You!
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, ease }}
                          className="text-[#52556A]"
                        >
                          We&apos;ve received your enquiry and will be in touch
                          shortly.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease }}
                  >
                    <div className="card-shell">
                      <div className="card-core p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-[#0C0C1D] mb-2 tracking-tighter">
                          Send an Enquiry
                        </h2>
                        <p className="text-[#52556A] text-sm mb-8">
                          Fill out the form below and our team will get back to
                          you within 24 hours.
                        </p>

                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            setSubmitted(true);
                          }}
                          className="space-y-6"
                        >
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              label="First Name"
                              name="firstName"
                              required
                              placeholder="John"
                              focusedField={focusedField}
                              setFocusedField={setFocusedField}
                            />
                            <FormField
                              label="Last Name"
                              name="lastName"
                              required
                              placeholder="Smith"
                              focusedField={focusedField}
                              setFocusedField={setFocusedField}
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              label="Email"
                              name="email"
                              type="email"
                              required
                              placeholder="john@company.com"
                              focusedField={focusedField}
                              setFocusedField={setFocusedField}
                            />
                            <FormField
                              label="Phone"
                              name="phone"
                              type="tel"
                              placeholder="+44 (0) 1234 567 890"
                              focusedField={focusedField}
                              setFocusedField={setFocusedField}
                            />
                          </div>
                          <FormField
                            label="Company"
                            name="company"
                            placeholder="Company name"
                            focusedField={focusedField}
                            setFocusedField={setFocusedField}
                          />

                          <div>
                            <motion.label
                              animate={{
                                color:
                                  focusedField === "subject"
                                    ? "#E8552D"
                                    : "#0C0C1D",
                              }}
                              transition={{ duration: 0.5, ease }}
                              className="block text-sm font-semibold mb-2"
                            >
                              Subject *
                            </motion.label>
                            <select
                              required
                              onFocus={() => setFocusedField("subject")}
                              onBlur={() => setFocusedField(null)}
                              className="w-full px-4 py-3 rounded-xl border border-[#0C0C1D]/8 bg-white text-[#0C0C1D] focus:outline-none focus:ring-2 focus:ring-[#E8552D]/20 focus:border-[#E8552D]/40 transition-all duration-500"
                            >
                              <option value="">Select a topic</option>
                              <option value="quote">Request a Quote</option>
                              <option value="capabilities">
                                Capabilities Enquiry
                              </option>
                              <option value="products">Product Enquiry</option>
                              <option value="partnership">Partnership</option>
                              <option value="careers">Careers</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div>
                            <motion.label
                              animate={{
                                color:
                                  focusedField === "message"
                                    ? "#E8552D"
                                    : "#0C0C1D",
                              }}
                              transition={{ duration: 0.5, ease }}
                              className="block text-sm font-semibold mb-2"
                            >
                              Message *
                            </motion.label>
                            <textarea
                              required
                              rows={5}
                              onFocus={() => setFocusedField("message")}
                              onBlur={() => setFocusedField(null)}
                              className="w-full px-4 py-3 rounded-xl border border-[#0C0C1D]/8 bg-white text-[#0C0C1D] focus:outline-none focus:ring-2 focus:ring-[#E8552D]/20 focus:border-[#E8552D]/40 transition-all duration-500 resize-none"
                              placeholder="Tell us about your project or requirements..."
                            />
                          </div>

                          <MagneticHover>
                            <motion.button
                              type="submit"
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.5, ease }}
                              className="w-full bg-[#E8552D] hover:bg-[#D14A26] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-500 inline-flex items-center justify-center gap-3"
                            >
                              Send Enquiry
                              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                                <ArrowRight size={16} weight="light" />
                              </span>
                            </motion.button>
                          </MagneticHover>
                        </form>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <FadeIn>
        <section className="h-[400px] bg-[#F4F5F7]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2408.5!2d-1.455!3d52.895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f13b9a95c0a1%3A0x0!2s997+London+Road%2C+Derby+DE24+8PX!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ASG Group Location"
          />
        </section>
      </FadeIn>
    </>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  focusedField,
  setFocusedField,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  focusedField: string | null;
  setFocusedField: (field: string | null) => void;
}) {
  return (
    <div>
      <motion.label
        animate={{
          color: focusedField === name ? "#E8552D" : "#0C0C1D",
        }}
        transition={{ duration: 0.5, ease }}
        className="block text-sm font-semibold mb-2"
      >
        {label} {required && "*"}
      </motion.label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        className="w-full px-4 py-3 rounded-xl border border-[#0C0C1D]/8 bg-white text-[#0C0C1D] focus:outline-none focus:ring-2 focus:ring-[#E8552D]/20 focus:border-[#E8552D]/40 transition-all duration-500"
      />
    </div>
  );
}
