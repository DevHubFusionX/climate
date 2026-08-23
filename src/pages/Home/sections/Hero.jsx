import React from 'react'
import { motion } from 'framer-motion'
import heroBg from '../../../assets/images/hero.jpeg'
import { fadeInUp } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'
import Button from '../../../components/ui/Button'
import SkewButton from '../../../components/ui/SkewButton'

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
        <div className="absolute inset-0 bg-[rgba(10,18,45,0.56)]" />

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
                className="mb-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-white/70"
              >
                Clean Energy &bull; Intelligent Refrigeration &bull; Smarter Movement
              </motion.div>

              {/* Headline with word-by-word text color reveal */}
              <WordColorReveal
                as="h1"
                theme="dark"
                trigger="load"
                text={[
                  "Building Africa's",
                  "Climate-Smart",
                  "Cold Chain."
                ]}
                delay={0.25}
                stagger={0.09}
                duration={0.65}
                baseColor="rgba(255, 255, 255, 0.2)"
                revealColor="#ffffff"
                className="m-0 text-[48px] font-extrabold leading-[1.12] tracking-[-1.2px] text-white md:text-[42px] sm:text-[34px]"
                wordColorMap={{
                  'Climate-Smart': '#4ade80',
                }}
              />
            </div>

            {/* Right column */}
            <div className="lg:pt-[44px]">
              {/* Sub-text with progressive word color illumination */}
              <WordColorReveal
                as="p"
                theme="dark"
                trigger="load"
                text="Dara is building a technology-enabled cold-chain ecosystem combining solar-powered refrigeration, electric refrigerated vans and trucks, IoT temperature monitoring, cold storage and intelligent logistics software to move and preserve temperature-sensitive products across our delivery network."
                delay={0.65}
                stagger={0.02}
                duration={0.45}
                baseColor="rgba(255, 255, 255, 0.25)"
                revealColor="rgba(255, 255, 255, 0.88)"
                blur={false}
                yOffset={4}
                className="mb-9 max-w-[500px] text-[16px] sm:text-[17px] leading-relaxed text-white/85"
              />

              {/* CTA buttons */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.55}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  text="Ship With Dara"
                  href="#partner"
                  variant="brand"
                  iconBg="#ffffff"
                  dotColor="rgb(0, 86, 184)"
                />
                <SkewButton
                  text="Explore DaraOS"
                  href="#daraos"
                  variant="hero"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
