import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover } from '../../../utils/motion'

const pillars = [
  {
    num: '01',
    title: 'Distributed',
    desc: 'Positioned closer to farms, warehouses, and distribution corridors to cut transit exposure.',
  },
  {
    num: '02',
    title: 'Digitally Connected',
    desc: 'Every asset provides live temperature, location, power, and route telemetry.',
  },
  {
    num: '03',
    title: 'Energy-Efficient',
    desc: 'Smart thermal insulation and optimized compressors reducing overall energy demands.',
  },
  {
    num: '04',
    title: 'Renewable-Powered',
    desc: 'Solar-integrated refrigeration and electrified transport displacing diesel dependence.',
  },
]

export default function InfrastructureOpportunity() {
  return (
    <section className="relative z-10 bg-white rounded-t-3xl px-6 lg:px-16 pt-24 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-4">
              The Opportunity
            </div>
            <h2 className="text-[34px] sm:text-[42px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0">
              What kind of cold chain should Africa build?
            </h2>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="lg:pt-8"
          >
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-500 m-0 font-normal">
              Africa's cold chain is still being built. The opportunity isn't just adding more capacity — it's designing infrastructure that is distributed, digitally connected, and powered by cleaner energy from day one.
            </p>
          </motion.div>
        </div>

        {/* ── Bespoke Asymmetrical 4-Card Composition with Stagger Delay ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={index}
              whileHover={cardHover}
              className="relative rounded-2xl p-7 bg-[#fbfbfa] border border-slate-200/60 flex flex-col justify-between min-h-[260px] group shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Top Row: Number & Status */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[12px] font-mono font-bold text-slate-400 tracking-wider">
                  {item.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[rgb(0,86,184)] transition-colors duration-300" />
              </div>

              {/* Bottom Content */}
              <div>
                <h3 className="text-[18px] font-bold text-slate-900 m-0 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-500 m-0 font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
