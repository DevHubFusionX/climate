import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

const clients = [
  { name: 'Emzor', full: 'Emzor Pharmaceutical', sector: 'Pharmaceuticals' },
  { name: 'UNICEF', full: 'UNICEF', sector: 'Child Health' },
  { name: 'NPHCDA', full: 'National Primary Health Care Development Agency', sector: 'Public Health' },
  { name: 'Newrest', full: 'NewRest', sector: 'Inflight Catering' },
  { name: 'WHO', full: 'World Health Organization', sector: 'Global Health' },
]

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative z-10 bg-[#fbfbfa] border-t border-slate-100 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-14 sm:mb-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.2px] uppercase text-slate-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
              Customers &amp; Clients
            </div>
            <WordColorReveal
              as="h2"
              theme="light"
              text="Trusted by those who move what matters."
              className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0"
              delay={0.15}
            />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="text-[14px] sm:text-[16px] leading-relaxed text-slate-400 m-0 max-w-[420px] lg:text-right lg:ml-auto"
          >
            Health, pharma and catering leaders rely on Dara for cold-chain delivery.
          </motion.p>
        </div>

        {/* ── Client wordmark rail ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-l border-slate-200/70 rounded-2xl overflow-hidden bg-white">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={i}
              title={c.full}
              className={`group relative flex flex-col justify-between gap-10 p-6 sm:p-8 min-h-[170px] sm:min-h-[210px] border-r border-b border-slate-200/70 transition-colors duration-500 hover:bg-[rgb(0,86,184)] ${
                i === clients.length - 1 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <span className="text-[11px] font-bold tracking-[1.5px] text-slate-300 group-hover:text-white/40 transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <span className="block text-[24px] sm:text-[28px] font-extrabold tracking-[-1px] leading-none text-slate-900 group-hover:text-white transition-colors duration-500">
                  {c.name}
                </span>
                <span className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold tracking-[1px] uppercase text-slate-400 group-hover:text-white/70 transition-colors duration-500">
                  <span className="w-1 h-1 rounded-full bg-[#4ade80]" />
                  {c.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
