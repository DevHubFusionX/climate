import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover } from '../../../utils/motion'

export default function Challenge() {
  return (
    <section className="relative z-10 bg-white rounded-t-2xl px-6 lg:px-16 pt-24 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* ── Heading block ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(0, 86, 184)' }} />
              The Cold Chain Dilemma
            </div>
            <h2 className="text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0">
              Products shouldn't lose value between production and delivery.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="text-[15px] leading-relaxed text-slate-500 m-0 max-w-[440px] lg:pt-10 font-medium"
          >
            Africa's temperature-sensitive economy depends on a cold chain that is fragmented, expensive, and energy-intensive. Businesses are forced to choose between massive capital costs or high operational risk.
          </motion.p>
        </div>

        {/* ── Bento Grid Layout with Cascading Stagger Delay ── */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Two Equal-Width Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Lavender-Blue Gradient with Giant '01' */}
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={0}
              whileHover={cardHover}
              className="relative overflow-hidden rounded-[20px] border border-slate-200/50 bg-gradient-to-tr from-violet-100/70 via-indigo-50/50 to-blue-100/70 min-h-[320px] p-8 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Giant Metallic "01" */}
              <div className="absolute left-8 bottom-2 select-none pointer-events-none">
                <span className="text-[120px] font-black leading-none bg-gradient-to-b from-slate-300 to-slate-400/70 bg-clip-text text-transparent opacity-40 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.03)]">
                  01
                </span>
              </div>

              {/* Ribbed Bottom texture */}
              <div
                className="absolute inset-x-0 bottom-0 h-16 opacity-30 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(90deg, rgba(99,102,241,0.15), rgba(99,102,241,0.15) 1px, transparent 1px, transparent 6px)',
                }}
              />

              {/* Text Top-Right */}
              <div className="ml-auto text-right max-w-[220px] relative z-10">
                <h3 className="text-[16px] font-extrabold text-indigo-950 m-0 mb-2">
                  Unreliable Grid Power
                </h3>
                <p className="text-[12px] leading-relaxed text-indigo-950/75 m-0 font-medium">
                  Grid failures force heavy reliance on diesel. When backup generators fail, temperature spikes destroy produce, pharma, and protein before delivery.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Off-white with glowing cold storage container */}
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={1}
              whileHover={cardHover}
              className="relative overflow-hidden rounded-[20px] border border-slate-200/50 bg-[#fbfbfa] min-h-[320px] p-8 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Glowing Cold Box Visual */}
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="relative w-36 h-24 bg-[#fdfdfd] border border-slate-200/80 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between p-3 overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-400 shadow-[0_0_8px_#f97316] animate-pulse" />

                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-[9px] font-bold text-slate-400 tracking-wider">DARA HUB</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-800 tracking-tight px-2 py-0.5 bg-slate-50 border border-slate-100 rounded">
                      Temp: 22.4°C
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Bottom */}
              <div className="relative z-10">
                <p className="text-[13px] leading-relaxed text-slate-500 m-0 font-medium">
                  <span className="font-extrabold text-slate-900">Fragmented Operations.</span> Without integrated cold chains, operations are forced to patch together disconnected power generators, isolated warehouses, and unmonitored vehicles.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: 40% / 60% Split Columns */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6">
            {/* Card 3: CapEx Barrier with Floating Invoices (40% width) */}
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={2}
              whileHover={cardHover}
              className="relative overflow-hidden rounded-[20px] border border-slate-200/50 bg-[#fbfbfa] min-h-[360px] p-8 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stacked floating cost cards */}
              <div className="flex-1 flex flex-col justify-center gap-3 relative py-4">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative bg-white border border-slate-100 rounded-xl p-3 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center gap-3 max-w-[240px] self-start translate-x-2"
                >
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500 text-[13px] font-extrabold">
                    $
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-800 m-0">Warehouse Lease</h4>
                    <p className="text-[9px] text-slate-400 m-0">Due: $4,200 / month</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="relative bg-white border border-slate-100 rounded-xl p-3 shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center gap-3 max-w-[240px] self-start translate-x-8 z-10"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600 text-[12px] font-extrabold">
                    ⛽
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-800 m-0">Generator Diesel</h4>
                    <p className="text-[9px] text-slate-400 m-0">Paid: $1,850 / week</p>
                  </div>
                </motion.div>
              </div>

              {/* Text Bottom */}
              <div className="relative z-10">
                <span className="text-[11px] font-bold uppercase tracking-wider block mb-1.5" style={{ color: 'rgb(0, 86, 184)' }}>
                  Financial Strain
                </span>
                <h3 className="text-[16px] font-extrabold text-slate-900 m-0 mb-1.5">
                  The CapEx Barrier
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-500 m-0 font-medium">
                  Owning storage and transit requires heavy upfront capital, locking cash flow away from scaling core business growth.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Visibility Void with Geometric Track */}
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={3}
              whileHover={cardHover}
              className="relative overflow-hidden rounded-[20px] border border-slate-200/50 bg-[#fbfbfa] min-h-[360px] p-8 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Abstract Geometric Track visual */}
              <div className="flex-1 flex items-center justify-center relative py-6">
                <div className="w-full max-w-[380px] h-28 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute w-[90%] h-[2px] bg-slate-200/70 rounded-full" />
                  <motion.div
                    animate={{ x: [-20, 60, -20] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-[25%] w-5 h-5 rounded-full bg-gradient-to-br from-slate-100 to-slate-350 shadow-[0_4px_8px_rgba(0,0,0,0.1)] border border-slate-200/40"
                  />
                  <div className="absolute left-[45%] top-3 w-8 h-8 rounded-full bg-orange-100/60 border border-orange-200/40 shadow-sm" />
                  <div className="absolute right-[18%] top-5 w-16 h-5 bg-violet-100/60 border border-violet-200/30 rounded rotate-[14deg] shadow-sm" />
                  <div className="absolute left-[8%] bottom-1 flex gap-1 items-end">
                    <div className="w-1.5 h-6 bg-blue-400/15 border border-blue-400/20 rounded skew-x-[-12deg]" />
                    <div className="w-1.5 h-10 bg-blue-400/15 border border-blue-400/20 rounded skew-x-[-12deg]" />
                    <div className="w-1.5 h-8 bg-blue-400/15 border border-blue-400/20 rounded skew-x-[-12deg]" />
                  </div>
                  <div className="absolute right-[12%] bottom-2 w-3.5 h-3.5 bg-slate-100 border border-slate-200/80 rounded rotate-45 shadow-sm" />
                </div>
              </div>

              {/* Text Bottom Left */}
              <div className="relative z-10 max-w-[420px]">
                <h3 className="text-[16px] font-extrabold text-slate-900 m-0 mb-1.5">
                  Zero Visibility
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-500 m-0 font-medium">
                  Without continuous IoT monitoring, cargo is shipped in a blind box. Temperature alerts, route tracking, and power logs are completely missing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
