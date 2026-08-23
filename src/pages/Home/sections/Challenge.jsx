import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { fadeInUp, viewportConfig } from '../../../utils/motion'

export default function Challenge() {
  return (
    <section className="relative z-10 bg-[#fafaf9] border-t border-slate-200/60 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        {/* ── Section Title ── */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-[28px] xs:text-[34px] sm:text-[42px] lg:text-[48px] font-normal tracking-tight text-slate-900 m-0"
          >
            Problem and Solution
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="hidden sm:inline-flex items-center px-3 py-1 rounded-md bg-[#dcfce7] text-[#166534] text-xs font-semibold tracking-wide"
          >
            Cold Chain
          </motion.div>
        </div>

        {/* ── Stepped Layout with Connecting Bridge ── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
          {/* ── Left / Upper: PROBLEM CARD (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-3 relative z-10">
            {/* Top Pill Header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="w-full sm:w-[260px] h-11 px-4 rounded-xl bg-[#ececec] border border-slate-200/80 flex items-center justify-between shadow-xs"
            >
              <span className="text-[14px] font-medium text-slate-800 tracking-tight">
                Problem
              </span>
              <div className="w-5 h-5 rounded-md bg-amber-400 flex items-center justify-center text-slate-950">
                <AlertCircle className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </motion.div>

            {/* Problem Main Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative bg-[#f0f0ed] rounded-[28px] p-7 sm:p-9 border border-slate-200/80 shadow-xs min-h-[220px] sm:min-h-[260px] flex flex-col justify-center"
            >
              {/* Connector Anchor Dot (Desktop right edge) */}
              <div className="hidden lg:block absolute -right-[7px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-400 z-20" />

              <h3 className="text-[19px] sm:text-[21px] font-semibold text-slate-900 tracking-tight m-0 mb-3">
                Fragmented Operations
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-500 m-0 font-normal">
                Businesses struggle with unmonitored transit, manual coordination across multiple vendors, and costly diesel cooling with high spoilage risk.
              </p>
            </motion.div>
          </div>

          {/* ── Center SVG Connector (Desktop 2 cols) ── */}
          <div className="hidden lg:flex lg:col-span-2 h-full min-h-[340px] items-center justify-center relative pointer-events-none">
            <svg
              className="w-full h-[180px] overflow-visible"
              viewBox="0 0 160 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stepped Circuit Path from Left Card to Right Card */}
              <path
                d="M 0 30 H 45 L 115 110 H 160"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* ── Mobile Vertical Connector ── */}
          <div className="flex lg:hidden justify-center -my-3 relative z-0">
            <div className="w-px h-8 bg-slate-300" />
          </div>

          {/* ── Right / Lower: SOLUTION CARD (5 cols, stepped down) ── */}
          <div className="lg:col-span-5 lg:pt-16 flex flex-col gap-3 relative z-10">
            {/* Solution Main Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative bg-[#f0f0ed] rounded-[28px] p-7 sm:p-9 border border-slate-200/80 shadow-xs min-h-[220px] sm:min-h-[260px] flex flex-col justify-center"
            >
              {/* Connector Anchor Dot (Desktop left edge) */}
              <div className="hidden lg:block absolute -left-[7px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-400 z-20" />

              <h3 className="text-[19px] sm:text-[21px] font-semibold text-slate-900 tracking-tight m-0 mb-3">
                Unified Intelligence
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-500 m-0 font-normal">
                We unified renewable cold storage, electric transit, and real-time IoT telemetry into one automated operating system with zero temperature risk.
              </p>
            </motion.div>

            {/* Bottom Pill Footer */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="w-full sm:w-[260px] h-11 px-4 rounded-xl text-white flex items-center justify-between shadow-md self-end"
              style={{
                background: 'linear-gradient(90deg, rgb(0, 86, 184) 0%, rgb(0, 110, 220) 100%)',
              }}
            >
              <span className="text-[14px] font-medium text-white tracking-tight">
                Solution
              </span>
              <div className="w-5 h-5 rounded-md bg-[#4ade80] flex items-center justify-center text-slate-950">
                <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
