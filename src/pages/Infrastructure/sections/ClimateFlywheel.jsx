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

const partners = [
  'Fleet Owners',
  'EV Manufacturers',
  'Solar Energy Companies',
  'Cold Storage Operators',
  'Equipment Financiers',
  'IoT & Sensor Providers',
  'Infrastructure Funds',
  'Development Finance (DFIs)',
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

        {/* ── Flywheel Interactive Sequence ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* ── Asset-Efficient Partner Integration ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-1">
                Capital-Efficient Scale
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 m-0 tracking-tight">
                Powered by a connected, multi-partner network
              </h3>
            </div>
            <div className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-blue-50 text-[rgb(0,86,184)] self-start lg:self-center">
              Tech + Demand + Operating Standards
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={index}
                whileHover={cardHover}
                className="p-3 rounded-xl bg-[#f8f9fa] border border-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-2 hover:bg-blue-50/50 hover:border-blue-100 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[rgb(0,86,184)] shrink-0" />
                <span>{partner}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
