import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

const markets = [
  { title: 'Food & Agriculture', desc: 'Growing production requires localized preservation to cut post-harvest waste.' },
  { title: 'Pharmaceuticals', desc: 'Expanding healthcare systems require unbroken, audited cold distribution.' },
  { title: 'Digital Logistics', desc: 'Modern enterprises demand real-time visibility, automated booking, and SLAs.' },
  { title: 'Clean Energy', desc: 'Commercial operators need distributed alternatives to costly diesel generation.' },
  { title: 'Electric Mobility', desc: 'Commercial transportation is electrifying rapidly along high-density corridors.' },
  { title: 'IoT Telemetry', desc: 'Physical cooling and fleet assets become fully connected digital data nodes.' },
]

export default function WhyDara() {
  return (
    <section className="relative z-10 bg-white px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-left mb-16 lg:mb-20 max-w-2xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-4"
          >
            Market Position
          </motion.div>
          <WordColorReveal
            text="At the intersection of Africa's fastest-growing sectors."
            as="h2"
            className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-3 sm:mb-4"
            delay={0.1}
            wordColorMap={{
              intersection: 'rgb(0, 86, 184)',
              'fastest-growing': '#4ade80',
            }}
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={2}
            className="text-[13.5px] sm:text-[16px] leading-relaxed text-slate-500 m-0 font-normal"
          >
            Climate Tech × Cold Chain × Energy × EVs × IoT × Logistics
          </motion.p>
        </div>

        {/* 6 Market Cards with Progressive Stagger Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {markets.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={index}
              whileHover={cardHover}
              className="bg-[#fbfbfa] rounded-2xl p-7 border border-slate-200/60 flex flex-col justify-between min-h-[190px] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-[17px] font-bold text-slate-900 m-0 mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 m-0 font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Closing Statement ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="border-t border-slate-200/60 pt-16 max-w-3xl"
        >
          <p className="text-[22px] sm:text-[26px] font-extrabold leading-[1.3] tracking-tight text-slate-900 m-0 mb-4">
            Dara connects these transitions — building the intelligence layer across every link in the clean cold chain.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-500 m-0">
            As each sector accelerates, Dara's infrastructure becomes more valuable, more utilized, and more connected.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
