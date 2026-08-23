import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

const visionPillars = [
  'Renewable-powered',
  'Electrified',
  'Digitally connected',
  'Data-driven',
  'Distributed',
  'Measurable',
]

export default function Vision() {
  return (
    <section
      className="relative z-10 w-full mx-0 sm:mx-6 lg:mx-8 my-8 sm:my-12 rounded-none sm:rounded-[36px] overflow-hidden"
      style={{ background: 'rgb(0, 86, 184)' }}
    >
      {/* Subtle radial glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(150,210,255,0.6) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left Column */}
        <div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-[12px] font-bold tracking-[2.5px] uppercase text-white/40 mb-6 m-0"
          >
            Our Vision
          </motion.p>

          <WordColorReveal
            text={['A cold chain', 'built for a', 'warmer world.']}
            as="h2"
            theme="dark"
            className="m-0 font-extrabold tracking-tight leading-[1.12] text-[26px] xs:text-[32px] sm:text-[40px] lg:text-[52px]"
            delay={0.1}
            wordColorMap={{
              warmer: '#4ade80',
              world: '#4ade80',
              'world.': '#4ade80',
            }}
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <ul className="m-0 p-0 list-none flex flex-col divide-y divide-white/10">
            {visionPillars.map((label, index) => (
              <motion.li
                key={label}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={index}
                className="flex items-center justify-between py-3 text-white/85 text-[15px] font-medium tracking-tight"
              >
                <span>{label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
              </motion.li>
            ))}
          </ul>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={3}
            className="m-0 text-[15px] leading-relaxed text-white/65 max-w-[440px]"
          >
            From farms preserving harvest at the source to medicines monitored continuously in transit — infrastructure that is clean, resilient, and verifiable.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
