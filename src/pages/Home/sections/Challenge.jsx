import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Layers, Activity, Star } from 'lucide-react'
import { fadeInUp, cardVariant, cardHover, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

export default function Challenge() {
  const stats = [
    {
      value: '45%+',
      desc: 'Product value lost across fragmented and unmonitored African delivery corridors.',
    },
    {
      value: '80%',
      desc: 'Cold storage infrastructure currently reliant on expensive diesel generator power.',
    },
    {
      value: '3.2x',
      desc: 'Higher operational cost per kilometer under legacy unintegrated logistics models.',
    },
    {
      value: '24/7',
      desc: 'Continuous live IoT telemetry required to eliminate spoilage and guarantee compliance.',
    },
  ]

  const featurePills = [
    { icon: Zap, label: 'Efficiency' },
    { icon: ShieldCheck, label: 'Precision' },
    { icon: Layers, label: 'Network Scale' },
    { icon: Activity, label: 'Live Telemetry' },
  ]

  return (
    <section className="relative z-10 bg-[#fbfbfa] rounded-t-none sm:rounded-t-3xl border-t border-slate-200/60 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Top Header Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-slate-200/60 border border-slate-300/40 text-[10px] sm:text-[11px] font-bold tracking-[1.5px] uppercase text-slate-600 mb-4 sm:mb-5">
              The Cold Chain Dilemma
            </div>
            <WordColorReveal
              as="h2"
              theme="light"
              text="Products shouldn't lose value before delivery."
              className="text-[26px] xs:text-[30px] sm:text-[38px] lg:text-[46px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0"
              delay={0.1}
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={1}
            className="lg:col-span-5 text-[14px] sm:text-[15.5px] leading-relaxed text-slate-500 m-0 lg:pt-14 font-normal"
          >
            Africa's temperature-sensitive economy depends on fragmented, expensive infrastructure. Businesses are forced to choose between massive capital costs and high operational risk.
          </motion.p>
        </div>

        {/* ── Bento Grid: Left Featured Tall Card + Right 2×2 Stat Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ── Left Column: Featured Brand Gradient Card (5 / 12 cols) ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0}
            whileHover={cardHover}
            className="lg:col-span-5 relative overflow-hidden rounded-[28px] p-8 sm:p-9 flex flex-col justify-between shadow-xl transition-shadow duration-300 group min-h-[480px] lg:min-h-full border border-white/15"
            style={{
              background: 'linear-gradient(155deg, rgb(0, 86, 184) 0%, rgb(0, 52, 125) 55%, rgb(8, 18, 45) 100%)',
            }}
          >
            {/* Ambient Background Torus Swirl */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[28px] opacity-40">
              <svg className="absolute w-[160%] h-[160%] -top-[30%] -left-[30%]" viewBox="0 0 400 400" fill="none">
                <defs>
                  <radialGradient id="torusGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
                    <stop offset="60%" stopColor="#0056b8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#031e50" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="torusSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#002b66" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                <path
                  d="M200 70C128.203 70 70 128.203 70 200C70 271.797 128.203 330 200 330C271.797 330 330 271.797 330 200C330 128.203 271.797 70 200 70ZM200 135C235.899 135 265 164.101 265 200C265 235.899 235.899 265 200 265C164.101 265 135 235.899 135 200C135 164.101 164.101 135 200 135Z"
                  fill="url(#torusSwirl)"
                  filter="blur(16px)"
                />
                <circle cx="200" cy="200" r="110" fill="url(#torusGlow)" filter="blur(26px)" />
              </svg>
            </div>

            {/* Top: Feature Pillar Tags */}
            <div className="relative z-10 space-y-3">
              {featurePills.map((pill) => {
                const Icon = pill.icon
                return (
                  <div
                    key={pill.label}
                    className="flex items-center gap-3 text-white/90 text-[13.5px] font-semibold tracking-wide"
                  >
                    <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-white/80 shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{pill.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Bottom: Customer Proof Quote & Rating */}
            <div className="relative z-10 mt-12 pt-6 border-t border-white/15">
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3 text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-300 stroke-amber-300" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-white/90 m-0 mb-4 font-normal">
                "Dara has completely transformed how we move temperature-critical cargo, cutting spoilage risk and fuel volatility across our routes."
              </p>

              {/* Author Info */}
              <div>
                <div className="text-[13px] font-bold text-white tracking-wide">
                  Sarah Mitchel
                </div>
                <div className="text-[11px] text-white/60 font-medium">
                  Head of Supply Chain, FreshLogix Africa
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: 2×2 Stat Grid (7 / 12 cols) ── */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={item.value}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={index + 1}
                whileHover={cardHover}
                className="bg-white rounded-[26px] p-8 sm:p-9 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[230px] group"
              >
                {/* Stat Numeral */}
                <div>
                  <span className="text-[34px] xs:text-[38px] sm:text-[46px] lg:text-[50px] font-extrabold tracking-tight text-slate-900 leading-none block mb-3 sm:mb-4 group-hover:text-[rgb(0,86,184)] transition-colors duration-300">
                    {item.value}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-500 m-0 font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
