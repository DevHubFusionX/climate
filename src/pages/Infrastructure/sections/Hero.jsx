import React from 'react'
import { motion } from 'framer-motion'
import heroBg from '../../../assets/images/AdobeStock_1579974778.jpeg'
import { fadeInUp } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'
import Button from '../../../components/ui/Button'
import SkewButton from '../../../components/ui/SkewButton'

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
                className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[1.5px] uppercase text-white/70"
              >
                Solar Refrigeration &bull; Electric Mobility &bull; Intelligent Cold Infrastructure
              </motion.div>

              {/* Headline */}
              <WordColorReveal
                as="h1"
                theme="dark"
                trigger="load"
                text={[
                  "Building the Clean",
                  "Infrastructure Behind",
                  "Africa's Economy."
                ]}
                delay={0.25}
                stagger={0.09}
                duration={0.65}
                baseColor="rgba(255, 255, 255, 0.2)"
                revealColor="#ffffff"
                className="m-0 text-[28px] xs:text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.12] tracking-tight text-white"
                wordColorMap={{
                  Clean: '#4ade80',
                  Infrastructure: 'rgb(0, 86, 184)',
                }}
              />
            </div>

            {/* Right column */}
            <div className="lg:pt-10">
              <WordColorReveal
                as="p"
                theme="dark"
                trigger="load"
                text="Dara is building a climate-smart infrastructure network that combines renewable-powered refrigeration, electric refrigerated vehicles, distributed cold storage, IoT intelligence and logistics technology to help Africa move and preserve more temperature-sensitive products while progressively reducing diesel dependence."
                delay={0.65}
                stagger={0.02}
                duration={0.45}
                baseColor="rgba(255, 255, 255, 0.25)"
                revealColor="rgba(255, 255, 255, 0.88)"
                blur={false}
                yOffset={4}
                className="mb-6 sm:mb-8 max-w-[480px] text-[13.5px] sm:text-[15.5px] lg:text-[17px] leading-relaxed text-white/85"
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
                <SkewButton
                  text="Explore Climate Technology"
                  to="/"
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
