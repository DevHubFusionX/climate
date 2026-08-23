import React from 'react'
import { motion } from 'framer-motion'
import heroBg from '../../../assets/images/AdobeStock_1579974778.jpeg'
import { fadeInUp, buttonHover, buttonTap } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'
import Button from '../../../components/ui/Button'

export default function Hero() {
  return (
    /* ── Sticky full-viewport panel ───────────────────────
       Subsequent sections slide smoothly over this from below.
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

        {/* Dark navy overlay for contrast & readability */}
        <div className="absolute inset-0 bg-[rgba(8,16,40,0.65)]" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1240px] grid grid-cols-1 gap-8 px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-12">
            {/* Left column */}
            <div>
              {/* Eyebrow badge */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
                className="mb-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-white/60"
              >
                CLIMATE INFRASTRUCTURE &amp; IMPACT
              </motion.div>

              {/* Headline */}
              <WordColorReveal
                as="h1"
                text="Building the Clean Infrastructure Behind Africa’s Economy."
                delay={0.25}
                stagger={0.09}
                duration={0.65}
                baseColor="rgba(255, 255, 255, 0.2)"
                revealColor="#ffffff"
                className="m-0 text-[42px] font-extrabold leading-[1.12] tracking-[-1.5px] text-white sm:text-[48px] lg:text-[56px]"
              />
            </div>

            {/* Right column */}
            <div className="lg:pt-10">
              <WordColorReveal
                as="p"
                text="Solar refrigeration. Electric mobility. Intelligent cold infrastructure. One connected network to move and preserve temperature-sensitive products."
                delay={0.7}
                stagger={0.03}
                duration={0.5}
                baseColor="rgba(255, 255, 255, 0.25)"
                revealColor="rgba(255, 255, 255, 0.88)"
                blur={false}
                yOffset={4}
                className="mb-8 max-w-[460px] text-[16px] leading-relaxed text-white/85 sm:text-[18px]"
              />

              {/* Actions */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.55}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  text="Partner With Dara"
                  href="#partner-cta"
                  variant="brand"
                  iconBg="#ffffff"
                  dotColor="rgb(0, 86, 184)"
                />
                <motion.a
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  href="#stack"
                  className="inline-block rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-[14px] font-semibold text-white no-underline backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                >
                  Explore Infrastructure
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
