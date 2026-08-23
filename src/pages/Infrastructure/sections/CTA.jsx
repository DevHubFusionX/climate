import React from 'react'
import { motion } from 'framer-motion'
import ctaImg from '../../../assets/images/Cta.jpeg'
import { fadeInUp } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'
import Button from '../../../components/ui/Button'
import SkewButton from '../../../components/ui/SkewButton'

export default function CTA() {
  const partnerTypes = [
    'CLIMATE INVESTORS',
    'EV MANUFACTURERS',
    'SOLAR COMPANIES',
    'INFRASTRUCTURE FUNDS',
    'DFIs & OPERATORS',
  ]

  return (
    <section id="partner-cta" className="relative z-10 mx-3 sm:mx-6 lg:mx-8 my-14 sm:my-20">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full rounded-[28px] sm:rounded-[40px] overflow-hidden shadow-2xl"
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
        <div className="relative z-10 w-full p-6 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[460px] lg:min-h-[540px]">
          {/* ── Top / Middle Row: 2-Column Split ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 lg:mb-16">
            {/* Left: Big Headline & Copy */}
            <div className="lg:col-span-8 text-left">
              <WordColorReveal
                as="h2"
                theme="dark"
                text={[
                  "Build Africa's next",
                  'cold chain with us.',
                ]}
                className="text-[26px] xs:text-[32px] sm:text-[42px] lg:text-[54px] font-extrabold text-white leading-[1.08] tracking-tight m-0 mb-4 sm:mb-5"
                delay={0.15}
                wordColorMap={{
                  'cold': 'rgb(0, 86, 184)',
                  'chain': '#4ade80',
                }}
              />
              <p className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-white/80 m-0 max-w-xl font-normal">
                We are building at the intersection of climate technology, clean energy, electric mobility, cold-chain infrastructure and logistics software. Join us in building a cleaner, smarter and more resilient cold chain for Africa.
              </p>
            </div>

            {/* Right: Partner Ecosystem Tags */}
            <div className="lg:col-span-4 flex flex-col lg:items-end justify-start pt-2 lg:pt-4">
              <div className="flex flex-wrap lg:flex-col gap-2.5 sm:gap-3.5 text-left lg:text-right">
                {partnerTypes.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] sm:text-[12px] font-bold tracking-[1.5px] text-white/75 bg-white/5 lg:bg-transparent px-3 py-1 lg:px-0 lg:py-0 rounded-full uppercase hover:text-white transition-colors"
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
            className="w-full rounded-2xl sm:rounded-full bg-[#4ade80] p-3.5 sm:p-4 sm:pl-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
          >
            {/* Prompt text */}
            <div className="text-slate-950 font-extrabold text-xs sm:text-[13.5px] tracking-[1.2px] uppercase text-center sm:text-left">
              Ready to scale clean infrastructure?
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <Button
                text="Partner With Dara"
                href="mailto:hello@daraexpress.com?subject=Partner%20With%20Dara"
                variant="dark"
                iconBg="#0a122d"
                dotColor="#4ade80"
                className="w-full sm:w-auto justify-center"
              />
              <SkewButton
                text="Talk to Our Team"
                href="tel:+2348115779007"
                variant="hero"
                className="w-full sm:w-auto text-center border-slate-900/30 text-slate-900 bg-black/10 hover:bg-slate-900 hover:text-white"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
