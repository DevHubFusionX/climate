import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

const flywheelSteps = [
  {
    step: '01',
    title: 'Enterprise Volume',
    desc: 'Growing enterprise cargo increases volume across key regional delivery corridors.',
  },
  {
    num: '02',
    step: '02',
    title: 'Asset Utilization',
    desc: 'Higher density improves utilization across solar cold rooms and electric vans.',
  },
  {
    step: '03',
    title: 'Renewable Scaling',
    desc: 'Expanded scale justifies direct investment into localized solar generation and fast-charging.',
  },
  {
    step: '04',
    title: 'Unit Economics',
    desc: 'Displacing expensive diesel fuel lowers cost-per-kilogram, unlocking more customer demand.',
  },
]

export default function ClimateFlywheel() {
  return (
    <section className="relative z-10 bg-[#f8f9fa] border-t border-slate-200/50 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-left mb-16 lg:mb-20 max-w-2xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-4"
          >
            Network Effects
          </motion.div>
          <WordColorReveal
            text="The Dara Climate Flywheel"
            as="h2"
            className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-3 sm:mb-4"
            delay={0.1}
            wordColorMap={{
              Climate: 'rgb(0, 86, 184)',
              Flywheel: '#4ade80',
            }}
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={2}
            className="text-[14px] sm:text-[16px] leading-relaxed text-slate-500 m-0 font-normal"
          >
            Commercial growth directly reinforces climate efficiency. As shipment volume expands, infrastructure utilization rises, driving down costs and emissions simultaneously.
          </motion.p>
        </div>

        {/* ── Flywheel Interactive Sequence with Stagger Delay ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flywheelSteps.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={index}
              whileHover={cardHover}
              className="bg-white rounded-2xl p-7 border border-slate-200/60 shadow-sm flex flex-col justify-between min-h-[240px] group hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="w-8 h-8 rounded-full bg-blue-50 text-[rgb(0,86,184)] font-mono font-bold text-xs flex items-center justify-center">
                  {item.step}
                </span>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                  STAGE
                </span>
              </div>

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
