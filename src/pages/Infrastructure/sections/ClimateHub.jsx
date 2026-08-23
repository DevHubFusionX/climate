import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Check, Activity } from 'lucide-react'
import { fadeInUp, cardVariant, cardHover, buttonHover, buttonTap } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

export default function ClimateHub() {
  const [booked, setBooked] = useState(false)

  return (
    <section className="relative z-10 bg-[#fbfbfa] border-t border-slate-200/50 px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-left mb-14 max-w-xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-3"
          >
            Dara Climate Hub
          </motion.div>
          <WordColorReveal
            text="Climate Hub Operations"
            as="h2"
            className="text-[36px] sm:text-[46px] font-extrabold leading-[1.12] tracking-tight text-slate-900 m-0 mb-3"
            wordColorMap={{
              Climate: 'rgb(0, 86, 184)',
            }}
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            className="text-[15px] sm:text-[16px] leading-relaxed text-slate-500 m-0 font-normal"
          >
            Decentralized solar cooling, fleet dispatch, and live telemetry orchestrated in one platform.
          </motion.p>
        </div>

        {/* ── ASYMMETRICAL BENTO GRID with Progressive Stagger Delays ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* ── CARD 1: WIDE FEATURED (7/12 columns) ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={0}
            whileHover={cardHover}
            className="lg:col-span-7 relative overflow-hidden rounded-[32px] p-8 bg-[#081028] text-white min-h-[400px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10 mb-4">
              <div>
                <h3 className="text-[20px] font-bold text-white m-0 mb-1 tracking-tight">
                  Telemetry &amp; Video Streams
                </h3>
                <p className="text-[13px] text-white/60 m-0 font-normal">
                  Live camera feeds and environmental sensors streamed from cold rooms.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white shadow-md flex-shrink-0">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
            </div>

            {/* Panoramic Media Stream Graphic Container */}
            <div className="relative my-2 w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-overlay"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&auto=format&fit=crop&q=80')` }}
              />

              {/* Play Badge */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>

              {/* Status overlay badge */}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                <span>CAM-01 • LAGOS COLD HUB (+3.8°C)</span>
              </div>
            </div>
          </motion.div>

          {/* ── CARD 2: VERTICAL TALL (5/12 columns) ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={1}
            whileHover={cardHover}
            className="lg:col-span-5 relative overflow-hidden rounded-[32px] p-8 text-white min-h-[400px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
            style={{
              background: 'linear-gradient(135deg, #00b87c 0%, #059669 45%, #047857 100%)',
            }}
          >
            {/* Top Text */}
            <div className="z-10">
              <h3 className="text-[20px] font-bold text-white m-0 mb-1.5 tracking-tight">
                99% Temperature Reliability
              </h3>
              <p className="text-[13px] text-emerald-100/85 m-0 font-normal">
                Unbroken solar cooling &amp; thermal reserves protect cargo.
              </p>
            </div>

            {/* Center Circular Speedometer Graphic */}
            <div className="relative my-4 flex items-center justify-center">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[10px] border-white/20" />
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 45 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="absolute inset-0 rounded-full border-[10px] border-white border-t-transparent border-r-transparent shadow-lg"
                />

                <div className="flex flex-col items-center justify-center">
                  <span className="text-[44px] font-extrabold text-white leading-none tracking-tight">
                    99%
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200 mt-1">
                    Optimal Temp
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── CARD 3: VERTICAL TALL (5/12 columns) ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={2}
            whileHover={cardHover}
            className="lg:col-span-5 relative overflow-hidden rounded-[32px] p-8 text-white min-h-[380px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
            style={{
              background: 'linear-gradient(135deg, rgb(0, 86, 184) 0%, rgb(0, 68, 150) 60%, rgb(0, 48, 115) 100%)',
            }}
          >
            {/* Top Header */}
            <div className="z-10">
              <h3 className="text-[20px] font-bold text-white m-0 mb-1.5 tracking-tight">
                Instant Cold Dispatch
              </h3>
              <p className="text-[13px] text-blue-100/85 m-0 font-normal">
                Book transport or storage space in seconds.
              </p>
            </div>

            {/* Input Form Fields Graphic */}
            <div className="my-5 space-y-3 z-10">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  readOnly
                  value="Origin: Lagos Hub"
                  className="bg-white/15 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/60 font-medium focus:outline-none select-none cursor-default"
                />
                <input
                  type="text"
                  readOnly
                  value="Target: +4.0°C"
                  className="bg-white/15 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/60 font-medium focus:outline-none select-none cursor-default"
                />
              </div>

              <input
                type="text"
                readOnly
                value="Cargo Type: Pharmaceuticals & Perishables"
                className="w-full bg-white/15 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/60 font-medium focus:outline-none select-none cursor-default"
              />

              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                onClick={() => setBooked(true)}
                className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs py-3 rounded-xl shadow-lg border border-white/15 flex items-center justify-center gap-2"
              >
                {booked ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Shipment Allocated!</span>
                  </>
                ) : (
                  <>
                    <span>Book Cold Shipment</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-300" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* ── CARD 4: WIDE FEATURED (7/12 columns) ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={3}
            whileHover={cardHover}
            className="lg:col-span-7 relative overflow-hidden rounded-[32px] p-8 bg-white text-slate-900 min-h-[380px] flex flex-col justify-between shadow-sm border border-slate-200/70 hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Top Text */}
            <div className="z-10 flex items-start justify-between">
              <div>
                <h3 className="text-[20px] font-bold text-slate-900 m-0 mb-1.5 tracking-tight">
                  Real-Time Impact Analytics
                </h3>
                <p className="text-[13px] text-slate-500 m-0 font-normal">
                  Track cargo preserved, carbon avoided, and diesel displaced.
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[rgb(0,86,184)] flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5" />
              </div>
            </div>

            {/* Line Chart Vector & Floating Analytics Tooltip Card */}
            <div className="relative my-4 w-full h-44 flex flex-col justify-end">
              {/* Floating Tooltip Card */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-2 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-slate-100 text-xs space-y-1.5 z-10"
              >
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Jun 18, 2026
                </div>
                <div className="flex items-center justify-between gap-6 font-semibold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Cargo Preserved:
                  </span>
                  <span className="font-mono font-bold text-slate-900">7,702 kg</span>
                </div>
                <div className="flex items-center justify-between gap-6 font-semibold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Diesel Saved:
                  </span>
                  <span className="font-mono font-bold text-emerald-600">1,840 L</span>
                </div>
              </motion.div>

              {/* Vector Wave Graph Lines */}
              <svg className="w-full h-28 overflow-visible" viewBox="0 0 400 100" fill="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  d="M0 80 Q 80 20, 160 60 T 320 20 T 400 30"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  d="M0 90 Q 80 50, 160 80 T 320 40 T 400 50"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <circle cx="320" cy="20" r="5" fill="#3b82f6" className="animate-ping" />
                <circle cx="320" cy="20" r="4" fill="#3b82f6" />
                <circle cx="320" cy="40" r="4" fill="#10b981" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
