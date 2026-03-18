import React from "react";
import { motion } from "framer-motion";
import { contactData } from "../constants/contact";
import AnimatedSection from "../components/animations/AnimatedSection";
import WaveLine from "../assets/icons/contact-vector.svg?react";
import SectionTitle from "../components/ui/SectionTitle";

const ContactSection = ({ lang }) => {
  const data = contactData[lang];

  return (
    <section
      id="contact"
      className="relative scroll-mt-32 py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-[var(--color-primary)] overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0 project-pattern"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <WaveLine />
        </motion.div>

        <AnimatedSection direction="up">
          {/* العنوان الرئيسي مع الانيميشن الخاص بك */}
          <div className="flex flex-col items-center gap-1 relative group mb-8">
            <h2 className="duration-300 group-hover:text-secondary text-[var(--color-white)]">
              {data.title}
            </h2>
            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[var(--color-white)] transition-transform duration-500 group-hover:-translate-x-[300%]"></span>
          </div>

          <p className="text-white opacity-70 mb-8 max-w-2xl mx-auto">{data.body}</p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-4">
            {data.socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 hover:bg-white/20 p-2 md:p-[12px] rounded-xl backdrop-blur-sm transition-colors duration-300"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-white/40 text-sm font-['Montserrat'] order-2 md:order-1">
          © {new Date().getFullYear()} Amer Shammout. All rights reserved.
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-100 transition-colors order-1 md:order-2"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 29.9871L16.487 18.4936L23.5 29.9871"
              stroke="#2756CD"
              strokeWidth="2"
            />
            <path
              d="M8.5 15.4934L16.487 3.9999L23.5 15.4934"
              stroke="#2756CD"
              strokeWidth="2"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default ContactSection;