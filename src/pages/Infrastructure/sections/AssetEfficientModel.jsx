import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover } from '../../../utils/motion'

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

export default function AssetEfficientModel() {
  return (
    <section className="relative z-10 bg-[#f4f3ef] px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Main Layout: Asymmetric Split ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 text-left"
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-4">
              Capital Efficiency
            </div>
            <h2 className="text-[34px] sm:text-[42px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-6">
              An asset-efficient pathway to continental scale.
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-500 m-0 mb-6 font-normal">
              Dara doesn’t need to balance-sheet every truck, cold room, or solar installation. We provide the intelligence, demand aggregation, and operating standards connecting specialized asset owners into one unified network.
            </p>
            <div className="p-4 rounded-xl bg-white border border-slate-200/60 text-xs font-semibold text-slate-700">
              Technology + Customer Demand + Operational Standards = Network Scale
            </div>
          </motion.div>

          {/* Right Column: Ecosystem Orbit Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-sm">
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-6">
                Connected Ecosystem
              </span>

              <div className="grid grid-cols-2 gap-3">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner}
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    custom={index}
                    whileHover={cardHover}
                    className="p-3.5 rounded-xl bg-[#f8f9fa] border border-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-2 hover:bg-blue-50/50 hover:border-blue-100 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(0,86,184)]" />
                    <span>{partner}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Dara Operating System</span>
                <span className="font-mono text-emerald-600 font-bold">100% Interoperable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
