import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Truck, Warehouse, Radio, Cpu, Sparkles, ShieldCheck, Zap, Activity } from 'lucide-react'
import { fadeInUp, cardVariant, cardHover } from '../../../utils/motion'

export default function InfrastructureStack() {
  return (
    <section id="stack" className="relative z-10 bg-white px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-left mb-16 lg:mb-20 max-w-2xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-4"
          >
            Climate Infrastructure Stack
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="text-[34px] sm:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-4"
          >
            Our Climate Infrastructure Stack
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            className="text-[15px] sm:text-[16px] leading-relaxed text-slate-500 m-0 font-normal"
          >
            Five technologies. One connected ecosystem for moving, cooling, and monitoring products.
          </motion.p>
        </div>

        {/* ── 2x2 Bento Grid with Stagger Delays ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ── CARD 1: Concentric Orbital Radar (Solar & Cold Storage) ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={0}
            whileHover={cardHover}
            className="bg-[#f8f9fa] rounded-[28px] p-8 sm:p-10 border border-slate-200/50 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Top UI Graphic: Concentric Radar Arcs */}
            <div className="relative w-full h-56 sm:h-64 flex items-center justify-center mb-8 overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-72 h-72 rounded-full border border-blue-200/50"
              />
              <motion.div
                animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute w-56 h-56 rounded-full border border-blue-200/60"
              />
              <div className="absolute w-40 h-40 rounded-full border border-blue-300/70" />
              <div className="absolute w-24 h-24 rounded-full border border-blue-400/80" />

              {/* Center Glowing Core */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center shadow-[0_8px_20px_rgba(245,158,11,0.3)]">
                <Sun className="w-8 h-8 text-amber-950" />
              </div>

              {/* Orbital Floating Badges */}
              <div className="absolute top-4 left-10 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 transition-transform duration-500 group-hover:scale-110">
                <Warehouse className="w-4 h-4" />
              </div>

              <div className="absolute top-10 right-12 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-emerald-600 transition-transform duration-500 group-hover:scale-110">
                <Zap className="w-4 h-4" />
              </div>

              <div className="absolute bottom-8 left-16 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-indigo-600 transition-transform duration-500 group-hover:scale-110">
                <Radio className="w-4 h-4" />
              </div>

              <div className="absolute bottom-10 right-14 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-amber-600 transition-transform duration-500 group-hover:scale-110">
                <Activity className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Content */}
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 m-0 mb-2.5 tracking-tight">
                Connects to the entire clean stack
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-500 m-0 font-normal">
                Distributed solar nodes power refrigeration independently of the grid — enabling cold infrastructure to be deployed wherever products are produced, processed, or distributed.
              </p>
            </div>
          </motion.div>

          {/* ── CARD 2: Modular Fleet & Pipeline Cards ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={1}
            whileHover={cardHover}
            className="bg-[#f8f9fa] rounded-[28px] p-8 sm:p-10 border border-slate-200/50 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Top UI Graphic */}
            <div className="relative w-full h-56 sm:h-64 flex items-center justify-center gap-3 sm:gap-4 mb-8">
              {/* Card A: Last-Mile Vans */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-white rounded-xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col gap-2 w-28 sm:w-32"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <Truck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[9px] font-mono font-bold text-slate-400">EV VAN</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-emerald-100 rounded-full" />
                </div>
              </motion.div>

              {/* Card B: Distribution Trucks */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="bg-white rounded-xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col gap-2 w-28 sm:w-32 z-10"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-[9px] font-mono font-bold text-slate-400">CHARGING</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-blue-50 rounded-full" />
                  <div className="h-1.5 w-4/5 bg-blue-200 rounded-full" />
                </div>
              </motion.div>

              {/* Card C: Corridor Transport */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="bg-white rounded-xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col gap-2 w-28 sm:w-32"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-500" />
                  <span className="text-[9px] font-mono font-bold text-slate-400">VERIFIED</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-indigo-100 rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Bottom Content */}
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 m-0 mb-2.5 tracking-tight">
                Electric fleet controls, out of the box
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-500 m-0 font-normal">
                Electric refrigerated vans and trucks build a cleaner transport layer across urban, last-mile, and regional cold-chain corridors — progressively displacing diesel across Dara's network.
              </p>
            </div>
          </motion.div>

          {/* ── CARD 3: Telemetry Query Stack ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={2}
            whileHover={cardHover}
            className="bg-[#f8f9fa] rounded-[28px] p-8 sm:p-10 border border-slate-200/50 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Top UI Graphic */}
            <div className="relative w-full h-56 sm:h-64 flex flex-col justify-center gap-3 mb-8 px-2 sm:px-4">
              <div className="bg-white rounded-xl px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
                <Sparkles className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700 truncate">
                  Show live temperature across Lagos hubs
                </span>
              </div>

              <div className="bg-white rounded-xl px-4 py-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-slate-200 flex items-center gap-3 z-10 transition-transform duration-300 group-hover:translate-x-2">
                <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-900 truncate">
                  Battery capacity on regional EV fleet: 94%
                </span>
              </div>

              <div className="bg-white rounded-xl px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
                <Sparkles className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700 truncate">
                  Zero temperature excursions logged today
                </span>
              </div>
            </div>

            {/* Bottom Content */}
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 m-0 mb-2.5 tracking-tight">
                Real-time IoT intelligence &amp; telemetry
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-500 m-0 font-normal">
                Every connected asset becomes a data node — generating live telemetry on temperature, location, power, and route conditions across the entire network.
              </p>
            </div>
          </motion.div>

          {/* ── CARD 4: Cloud Node Graphic (DaraOS) ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={3}
            whileHover={cardHover}
            className="bg-[#f8f9fa] rounded-[28px] p-8 sm:p-10 border border-slate-200/50 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Top UI Graphic */}
            <div className="relative w-full h-56 sm:h-64 flex items-center justify-center mb-8">
              <div className="relative w-64 h-44 rounded-[40px] border-2 border-blue-400/60 bg-blue-50/30 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 transition-transform duration-300 hover:scale-110">
                  <Sun className="w-5 h-5 text-amber-500" />
                </div>
                <div className="w-11 h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-emerald-600 -ml-2 transition-transform duration-300 hover:scale-110">
                  <Truck className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="w-11 h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 -ml-2 transition-transform duration-300 hover:scale-110">
                  <Cpu className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 m-0 mb-2.5 tracking-tight">
                DaraOS native orchestration
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-500 m-0 font-normal">
                Physical infrastructure underneath with DaraOS software intelligence above it to book, dispatch, store, and analyze.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
