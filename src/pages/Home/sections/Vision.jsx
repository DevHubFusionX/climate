import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Radio, Truck, ArrowRight } from 'lucide-react'
import { fadeInUp, cardVariant, cardHover, buttonHover, buttonTap } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'
import Button from '../../../components/ui/Button'

const capabilities = [
  {
    step: '01',
    keyword: 'Preserve',
    title: 'Precision Temperature Control',
    desc: 'Solar-powered cold storage and active refrigeration protecting product value from origin to destination.',
    icon: ShieldCheck,
    tag: 'Solar Cooling',
  },
  {
    step: '02',
    keyword: 'Monitor',
    title: 'Live IoT Telemetry',
    desc: 'Continuous sensor monitoring tracking temperature, vehicle location, and excursion alerts in real time.',
    icon: Radio,
    tag: 'Real-Time Visibility',
  },
  {
    step: '03',
    keyword: 'Move',
    title: 'Clean Electric Mobility',
    desc: 'Refrigerated transit matched to your volume, progressively powered by zero-emission electric vehicles.',
    icon: Truck,
    tag: 'Zero-Emission Transit',
  },
]

export default function Vision() {
  return (
    <section
      className="relative z-10 mx-3 sm:mx-6 lg:mx-8 my-8 sm:my-10 rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-sm"
      style={{
        background: 'linear-gradient(145deg, rgb(0, 75, 165) 0%, rgb(0, 52, 125) 60%, rgb(3, 30, 80) 100%)',
      }}
    >
      {/* Ambient background glow accents */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(140, 200, 255, 0.5) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, transparent 70%)' }}
      />

      {/* Subtle dot texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="home-vision-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#home-vision-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24">
        {/* ── Top Header Block ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-16 border-b border-white/10 pb-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mb-3.5">
              What We Do
            </div>
            <WordColorReveal
              as="h2"
              theme="dark"
              text="Move temperature-sensitive products smarter."
              className="text-[24px] xs:text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold leading-[1.18] tracking-tight text-white m-0 mb-3 sm:mb-0"
              delay={0.15}
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="text-[13.5px] sm:text-[15px] leading-relaxed text-white/75 m-0 max-w-md font-normal"
          >
            From solar-powered cold hubs to IoT-monitored transportation, Dara delivers a connected, reliable, and lower-carbon cold chain for your business.
          </motion.p>
        </div>

        {/* ── 3-Column Bespoke Cards with Stagger Delay ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.keyword}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={index}
                whileHover={cardHover}
                className="group relative rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
              >
                {/* Top Row: Icon + Step */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#4ade80] shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-white/40 tracking-wider">
                      {item.step}
                    </span>
                  </div>

                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#4ade80] mb-2">
                    {item.tag}
                  </div>

                  <h3 className="text-[17px] font-bold text-white m-0 mb-2.5 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-white/65 m-0 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                  <span className="font-semibold text-white/80">{item.keyword}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-[#4ade80]" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Actions Row ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-4 pt-4"
        >
          <div className="flex flex-wrap items-center gap-3.5">
            <Button
              text="Ship With Dara"
              href="#partner"
              variant="white"
              iconBg="rgb(0, 86, 184)"
              dotColor="#ffffff"
            />
            <motion.a
              whileHover={buttonHover}
              whileTap={buttonTap}
              href="#technology"
              className="inline-block rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25 no-underline bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              Explore technology
            </motion.a>
          </div>

          <div className="text-[12px] font-medium text-white/50 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            Active cold-chain logistics across key delivery zones
          </div>
        </motion.div>
      </div>
    </section>
  )
}
