import React from 'react'
import { motion } from 'framer-motion'
import ctaImg from '../../../assets/images/Cta.jpeg'
import { fadeInUp } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'
import Button from '../../../components/ui/Button'

export default function CTA() {
  const infraTags = [
    'DECENTRALIZED SOLAR HUBS',
    'COMMERCIAL FLEET ELECTRIFICATION',
    'REAL-TIME TELEMETRY & AUDIT',
    'ASSET-EFFICIENT FINANCING',
  ]

  return (
    <section id="partner-cta" className="relative z-10 mx-4 lg:mx-8 my-16">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${ctaImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark navy overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(8, 16, 40, 0.94) 0%, rgba(10, 18, 45, 0.82) 50%, rgba(8, 16, 40, 0.90) 100%)',
          }}
        />

        {/* Ambient subtle glow */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(74, 222, 128, 0.6) 0%, transparent 70%)',
          }}
        />

        {/* Main Content Container */}
        <div className="relative z-10 w-full p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[500px] lg:min-h-[540px]">
          {/* ── Top / Middle Row: 2-Column Split ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
            {/* Left: Big Headline & Copy */}
            <div className="lg:col-span-8 text-left">
              <WordColorReveal
                as="h2"
                theme="dark"
                text={[
                  'Clean Infrastructure',
                  'That Powers',
                  "Africa's Future",
                ]}
                className="text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold text-white leading-[1.06] tracking-[-1.5px] m-0 mb-5"
                delay={0.15}
              />
              <p className="text-[15px] sm:text-[16.5px] leading-relaxed text-white/75 m-0 max-w-xl font-normal">
                Join specialized asset owners, enterprise shippers, and financiers building the continent’s interconnected cold-chain backbone.
              </p>
            </div>

            {/* Right: Vertical Service Stack */}
            <div className="lg:col-span-4 flex flex-col lg:items-end justify-start pt-2 lg:pt-4">
              <div className="flex flex-col gap-3.5 text-left lg:text-right">
                {infraTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[1.8px] text-white/80 uppercase hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom Floating Action Bar ── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="w-full rounded-2xl sm:rounded-full bg-[#4ade80] p-3.5 sm:p-4 pl-6 sm:pl-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
          >
            {/* Prompt text */}
            <div className="text-slate-950 font-extrabold text-xs sm:text-[13.5px] tracking-[1.2px] uppercase text-center sm:text-left">
              Ready to build Africa's next infrastructure?
            </div>

            {/* Action CTA Button */}
            <Button
              text="Partner with Dara"
              href="#contact"
              variant="dark"
              iconBg="#0a122d"
              dotColor="#4ade80"
              className="w-full sm:w-auto justify-center"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
