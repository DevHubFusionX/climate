import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sun, Zap, Radio, ShieldCheck, Activity } from 'lucide-react'
import { fadeInUp, cardVariant, cardHover, buttonHover, buttonTap, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

export default function InfrastructureStack() {
  return (
    <section
      id="stack"
      className="relative z-10 bg-[#fbfbfa] overflow-hidden px-4 sm:px-8 lg:px-14 py-16 sm:py-24 lg:py-32 border-t border-slate-200/50"
    >
      {/* Background Decorative Flow Curves */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full text-blue-900/[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 200 C 300 150, 400 450, 800 320 C 1200 190, 1300 500, 1600 400"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <path
          d="M-50 650 C 250 500, 450 780, 850 620 C 1250 460, 1400 700, 1550 580"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M100 80 C 400 300, 200 600, 700 750"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* ── LEFT COLUMN: Headline & Brand Identity ── */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch pt-2">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-3 sm:mb-4">
                Climate Infrastructure Stack
              </div>

              <WordColorReveal
                text={['Clean tech,', 'not only in', 'commitments...']}
                as="h2"
                className="text-[26px] xs:text-[32px] sm:text-[42px] lg:text-[52px] font-extrabold tracking-tight leading-[1.08] m-0 mb-4 sm:mb-5 text-slate-900"
                wordColorMap={{
                  'commitments...': 'rgb(0, 86, 184)',
                  commitments: 'rgb(0, 86, 184)',
                }}
              />

              <p className="text-[13.5px] sm:text-[15px] leading-relaxed text-slate-500 font-normal m-0 max-w-sm">
                Five technologies unified into one connected ecosystem for moving, cooling, and monitoring food and pharmaceuticals across Africa.
              </p>
            </motion.div>

            {/* Bottom Brand Identity */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              className="mt-12 lg:mt-auto pt-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[rgb(0,86,184)] text-white flex items-center justify-center font-bold text-lg shadow-[0_4px_14px_rgba(0,86,184,0.3)]">
                <span className="text-white text-base font-extrabold tracking-tighter">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[19px] font-extrabold text-slate-900 tracking-tight leading-none">
                  dara<span className="text-[#4ade80]">.</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5">
                  Climate Network
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Bespoke Bento Cards Grid ── */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* ── Top Row: 2 Big Feature Cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Dara Navy Clean Stack Card */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={0}
                whileHover={cardHover}
                className="relative bg-[#081028] rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 text-white flex flex-col justify-between min-h-[340px] shadow-xl overflow-hidden group cursor-pointer border border-white/10"
              >
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-[rgb(0,86,184)]/25 blur-3xl" />

                {/* Top Green Accent Sparkle */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold tracking-[1.4px] uppercase text-white/60 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    Clean Architecture
                  </span>
                  <span className="text-[#4ade80] text-3xl font-serif font-bold leading-none select-none">
                    *
                  </span>
                </div>

                {/* Card Title */}
                <div className="my-auto py-4 z-10">
                  <h3 className="text-[24px] sm:text-[28px] font-bold text-white leading-[1.22] tracking-tight m-0 max-w-[290px]">
                    Connects to the entire clean stack for zero-loss distribution
                  </h3>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2 z-10 flex items-center justify-between">
                  <span className="text-xs text-white/60 font-medium">
                    Off-grid solar &amp; storage
                  </span>
                  <motion.div
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                    className="w-11 h-11 rounded-full bg-white text-[rgb(0,86,184)] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#4ade80] group-hover:text-slate-900"
                  >
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Card 2: Sustainability Green Metric Card */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={1}
                whileHover={cardHover}
                className="relative bg-[#4ade80] rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 text-[#081028] flex flex-col justify-between min-h-[340px] shadow-lg overflow-hidden group"
              >
                {/* Background Diagonal Shading */}
                <div className="pointer-events-none absolute -right-10 -top-10 w-60 h-60 rounded-full bg-white/25 blur-2xl" />
                <div className="pointer-events-none absolute right-0 top-0 w-44 h-44 bg-gradient-to-bl from-white/20 to-transparent" />

                {/* Top Row: Pill Tag + Icon Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold tracking-[1.4px] uppercase text-[#081028]/80 bg-black/5 px-3 py-1.5 rounded-full border border-black/5">
                    FLEET EFFICIENCY
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#081028] text-white flex items-center justify-center shadow-sm">
                    <Zap className="w-4 h-4 text-[#4ade80] stroke-[2.5]" />
                  </div>
                </div>

                {/* Main Content */}
                <div className="my-auto py-3 z-10">
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-[#081028] leading-[1.28] tracking-tight m-0">
                    Electric Fleet Integration Displaces 45% Diesel Across Corridors
                  </h3>
                </div>

                {/* Bottom Row: Stat + Action Pill */}
                <div className="flex items-end justify-between gap-3 pt-2 z-10">
                  <div>
                    <div className="text-[32px] sm:text-[36px] font-extrabold text-[#081028] tracking-tight leading-none">
                      1.6x
                    </div>
                    <p className="text-[10.5px] leading-tight text-[#081028]/80 font-medium m-0 mt-1 max-w-[150px]">
                      thermal efficiency realized above standard diesel transport in year one.
                    </p>
                  </div>

                  <motion.a
                    href="#measurement"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                    className="rounded-full bg-[#081028] text-white text-[11px] font-semibold px-4 sm:px-5 py-2.5 shadow-md hover:bg-slate-900 transition-colors flex-shrink-0"
                  >
                    View Metrics
                  </motion.a>
                </div>
              </motion.div>

            </div>

            {/* ── Middle Row: 3 White Pill Cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              
              {/* White Card 1: DaraOS Orchestration */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={2}
                whileHover={cardHover}
                className="bg-white rounded-[28px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200/60 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-md hover:border-slate-300/80"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[17px] font-extrabold text-slate-900 tracking-tight">
                    daraOS<span className="text-[rgb(0,86,184)]">.</span>
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 border border-slate-200/90 rounded-full px-2.5 py-0.5 bg-slate-50">
                    v2.4 Live
                  </span>
                </div>

                <div className="pt-6">
                  <h4 className="text-[15.5px] sm:text-[16px] font-bold text-slate-900 leading-snug tracking-tight m-0 mb-1.5">
                    Native Cloud Orchestration
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed m-0">
                    Physical hubs underneath with software dispatch, load booking, and analysis.
                  </p>
                </div>
              </motion.div>

              {/* White Card 2: Solar Refrigeration Nodes */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={3}
                whileHover={cardHover}
                className="bg-white rounded-[28px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200/60 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-md hover:border-slate-300/80"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-5 shadow-sm">
                    <Sun className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h4 className="text-[16px] font-bold text-slate-900 tracking-tight m-0 mb-1.5">
                    Off-Grid Solar Hubs
                  </h4>
                </div>
                <div>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-normal m-0">
                    Distributed solar cooling deployed independently of fragile municipal power grids.
                  </p>
                </div>
              </motion.div>

              {/* White Card 3: IoT Telemetry */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={4}
                whileHover={cardHover}
                className="bg-white rounded-[28px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200/60 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-md hover:border-slate-300/80"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-blue-100/70 text-[rgb(0,86,184)] flex items-center justify-center mb-5 shadow-sm">
                    <Activity className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h4 className="text-[16px] font-bold text-slate-900 tracking-tight m-0 mb-1.5">
                    Live Telemetry
                  </h4>
                </div>
                <div>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-normal m-0">
                    Real-time monitoring of temperature, battery health, and transit security at every node.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* ── Bottom Row: 4 Metric Stats Strip ── */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-2 border-t border-slate-200/70"
            >
              {/* Stat 1 */}
              <div>
                <div className="text-[22px] sm:text-[26px] font-extrabold text-[rgb(0,86,184)] tracking-tight">
                  99.8%
                </div>
                <div className="text-[9.5px] sm:text-[10px] font-bold tracking-[1.2px] uppercase text-slate-400 mt-1">
                  COLD CHAIN INTEGRITY
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-[22px] sm:text-[26px] font-extrabold text-slate-900 tracking-tight">
                  45%
                </div>
                <div className="text-[9.5px] sm:text-[10px] font-bold tracking-[1.2px] uppercase text-slate-400 mt-1">
                  DIESEL DISPLACED
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="text-[22px] sm:text-[26px] font-extrabold text-emerald-600 tracking-tight">
                  0
                </div>
                <div className="text-[9.5px] sm:text-[10px] font-bold tracking-[1.2px] uppercase text-slate-400 mt-1">
                  TEMP EXCURSIONS LOGGED
                </div>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="text-[22px] sm:text-[26px] font-extrabold text-slate-900 tracking-tight">
                  120+
                </div>
                <div className="text-[9.5px] sm:text-[10px] font-bold tracking-[1.2px] uppercase text-slate-400 mt-1">
                  CONNECTED SOLAR NODES
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
