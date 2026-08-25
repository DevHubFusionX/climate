import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, viewportConfig } from '../../../utils/motion'
import Button from '../../../components/ui/Button'
import SkewButton from '../../../components/ui/SkewButton'
import WordColorReveal from '../../../components/ui/WordColorReveal'

export default function CTA() {
  return (
    <section id="partner-cta" className="relative z-10 w-full px-0 sm:px-6 lg:px-8 my-8 sm:my-16">
      <div
        className="relative w-full max-w-7xl mx-auto rounded-none sm:rounded-[36px] overflow-hidden"
        style={{
          background: 'linear-gradient(175deg, rgb(0, 86, 184) 0%, rgb(0, 58, 135) 60%, rgb(0, 32, 90) 100%)',
        }}
      >
        {/* Background ambient lighting */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(0, 86, 184) 0%)' }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)' }}
        />

        <div className="px-6 sm:px-10 lg:px-16 py-14 sm:py-18 lg:py-24 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
          >
            {/* Left Column: Eyebrow, Headline & CTA Buttons */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[1.5px] uppercase text-white/60 mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                Infrastructure &amp; Impact
              </div>
              <WordColorReveal
                text="Build Africa's next cold chain with us."
                as="h2"
                theme="dark"
                trigger="inView"
                className="text-[22px] xs:text-[26px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.15] tracking-tight text-white m-0 max-w-2xl"
                revealColor="#ffffff"
                baseColor="rgba(255, 255, 255, 0.3)"
              />
              <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  text="Partner with Dara"
                  href="mailto:hello@daraexpress.com?subject=Partner%20With%20Dara"
                  variant="white"
                  iconBg="#0056b8"
                  dotColor="#ffffff"
                  className="w-full sm:w-auto justify-center"
                />
                <SkewButton
                  text="Explore Technology"
                  to="/"
                  variant="hero"
                  className="w-full sm:w-auto text-center"
                />
              </div>
            </div>

            {/* Right Column: Narrative Copy */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right lg:pt-4">
              <p className="text-blue-100/75 text-xs sm:text-base leading-relaxed max-w-sm m-0">
                Join us at the intersection of climate technology, clean energy, electric mobility, cold-chain infrastructure and logistics software.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
