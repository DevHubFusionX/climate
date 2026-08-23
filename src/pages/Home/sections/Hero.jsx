import React from 'react'
import { motion } from 'framer-motion'
import heroBg from '../../../assets/images/hero.jpeg'
import { fadeInUp, buttonHover, buttonTap } from '../../../utils/motion'

export default function Hero() {
  return (
    /* ── Sticky full-viewport panel ───────────────────────
       Challenge section slides over this from below.
    ─────────────────────────────────────────────────────── */
    <div className="w-full bg-white">
      <div className="sticky top-0 z-[1] w-full h-screen min-h-screen overflow-hidden">
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-[rgba(10,18,45,0.52)]" />

        {/* Content — sits above bg + overlay */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1240px] grid grid-cols-1 gap-10 px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:px-12">
            {/* Left column */}
            <div>
              {/* Badge pill */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
                className="mb-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-white/60"
              >
                Introducing the Dara Climate-Tech Ecosystem &bull; Solar &amp; Electric
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.25}
                className="m-0 text-[48px] font-extrabold leading-[1.15] tracking-[-1.2px] text-white md:text-[40px] sm:text-[32px]"
              >
                Building Africa's cold chain.<br />
                In one unified network.
              </motion.h1>
            </div>

            {/* Right column */}
            <div className="lg:pt-[54px]">
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
                className="mb-9 max-w-[480px] text-[18px] leading-relaxed text-white/85 sm:text-[16px]"
              >
                Move and preserve temperature-sensitive products with a smarter,
                cleaner cold chain. Solar refrigeration, electric vehicles, IoT
                intelligence, and logistics software — all in one network.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.55}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.a
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  href="#partner"
                  className="inline-block rounded-full px-[30px] py-3.5 text-[15px] font-semibold text-white no-underline shadow-[0_4px_16px_rgba(0,86,184,0.35)] transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(0,86,184,0.5)]"
                  style={{ background: 'rgb(0, 86, 184)' }}
                >
                  Ship With Dara
                </motion.a>
                <motion.a
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  href="#technology"
                  className="inline-block rounded-full border border-white/35 bg-transparent px-7 py-[13px] text-[15px] font-semibold text-white no-underline hover:border-white hover:bg-white/10 transition-colors duration-200"
                >
                  Explore technology
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
