import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

export default function HowItWorks() {
  return (
    <section className="relative z-10 bg-[#f8f9fa] border-t border-neutral-200/50 px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-left mb-16 lg:mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-neutral-400 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(0,86,184)]" />
            Shipment Flow
          </motion.div>
          <WordColorReveal
            as="h2"
            theme="light"
            text="How a Dara Climate-Smart Shipment Works"
            className="text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-neutral-900 m-0 mb-4"
            delay={0.15}
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            className="text-[16px] leading-relaxed text-neutral-500 max-w-[620px] m-0"
          >
            A seamless journey orchestrated from booking to final receipt, ensuring complete temperature preservation and tracking.
          </motion.p>
        </div>

        {/* ── Bento-Style Grid with Progressive Stagger Delays ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Book — Blue Wave */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={0}
            whileHover={cardHover}
            className="relative rounded-[28px] p-8 lg:p-9 border border-[rgb(0,86,184)]/20 shadow-[0_20px_50px_-12px_rgba(0,86,184,0.3)] flex flex-col items-start min-h-[280px] lg:col-start-1 lg:row-start-1 overflow-hidden"
            style={{ background: 'linear-gradient(150deg, rgb(0,86,184) 0%, rgb(0,60,140) 55%, rgb(0,38,100) 100%)' }}
          >
            {/* Blue organic wave overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[28px]">
              <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 400 200" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 120C60 80 120 170 200 110C260 65 320 150 400 90V200H0V120Z" fill="rgba(255,255,255,0.06)" />
                <path d="M0 155C70 110 140 190 230 140C300 98 360 170 400 125V200H0V155Z" fill="rgba(255,255,255,0.04)" />
                <path d="M0 175C80 145 160 200 260 168C330 145 375 185 400 165V200H0V175Z" fill="rgba(255,255,255,0.03)" />
              </svg>
              <svg className="absolute top-0 right-0 w-48 h-48 opacity-[0.07]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="50" r="100" fill="white" />
              </svg>
            </div>
            <div className="w-11 h-11 rounded-full border border-white/20 bg-white/10 flex items-center justify-center mb-6 shadow-sm z-10 backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-white m-0 mb-3 tracking-tight z-10">
              Book
            </h3>
            <p className="text-[14px] leading-relaxed text-blue-100/75 m-0 z-10">
              A business requests temperature-controlled transportation or storage through Dara.
            </p>
          </motion.div>

          {/* Card 2: Preserve */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={1}
            whileHover={cardHover}
            className="bg-white rounded-[28px] p-8 lg:p-9 border border-neutral-200/60 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-start min-h-[280px] lg:col-start-2 lg:row-start-1"
          >
            <div className="w-11 h-11 rounded-full border border-neutral-200/80 bg-neutral-50/50 flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-5 h-5 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-neutral-900 m-0 mb-3 tracking-tight">
              Preserve
            </h3>
            <p className="text-[14px] leading-relaxed text-neutral-500 m-0">
              Products connect to appropriate temperature-controlled infrastructure, including solar-powered refrigeration where deployed.
            </p>
          </motion.div>

          {/* Card 3: Move (Special Card) */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={2}
            whileHover={cardHover}
            className="relative rounded-[28px] p-8 lg:p-9 border border-neutral-200/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] flex flex-col items-start min-h-[320px] lg:col-start-3 lg:row-start-1 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f1f4f8 60%, #e2e8f0 100%)' }}
          >
            {/* Glossy Wave Overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[28px]">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50 120C60 70 120 220 280 150C330 120 370 160 420 80V350H-50V120Z" fill="url(#special-wave-grad)" opacity="0.4" />
                <path d="M-50 170C80 100 140 250 300 130C340 90 380 130 420 60V350H-50V170Z" fill="url(#special-wave-grad-2)" opacity="0.2" />
                <defs>
                  <linearGradient id="special-wave-grad" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#cbd5e1" />
                  </linearGradient>
                  <linearGradient id="special-wave-grad-2" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#94a3b8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="w-11 h-11 rounded-full border border-neutral-200/80 bg-white flex items-center justify-center mb-6 shadow-sm z-10">
              <svg className="w-5 h-5 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>

            <div className="mt-auto z-10 w-full">
              <span className="text-[52px] lg:text-[60px] font-black text-neutral-900 leading-none mb-1 block select-none">
                100%
              </span>
              <h3 className="text-[18px] font-bold text-neutral-900 m-0 mb-2 tracking-tight">
                Move
              </h3>
              <p className="text-[13px] leading-relaxed text-neutral-500 m-0">
                Dara matches shipments with suitable refrigerated transportation, with electric refrigerated vans and trucks progressively integrated across appropriate zones.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Monitor */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={3}
            whileHover={cardHover}
            className="bg-white rounded-[28px] p-8 lg:p-9 border border-neutral-200/60 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-start min-h-[280px] lg:col-start-2 lg:row-start-2"
          >
            <div className="w-11 h-11 rounded-full border border-neutral-200/80 bg-neutral-50/50 flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-5 h-5 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-neutral-900 m-0 mb-3 tracking-tight">
              Monitor
            </h3>
            <p className="text-[14px] leading-relaxed text-neutral-500 m-0">
              IoT technology provides temperature and location visibility throughout the shipment.
            </p>
          </motion.div>

          {/* Card 5: Deliver — Dark Geometric Wave */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={4}
            whileHover={cardHover}
            className="relative rounded-[28px] p-8 lg:p-9 border border-neutral-800/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col items-start min-h-[280px] lg:col-start-3 lg:row-start-2 overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #111827 0%, #1a2540 60%, #0f172a 100%)' }}
          >
            {/* Diagonal geometric wave lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[28px]">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="-40" y1="260" x2="160" y2="-40" stroke="rgba(255,255,255,0.04)" strokeWidth="40" />
                <line x1="40" y1="320" x2="280" y2="-40" stroke="rgba(255,255,255,0.04)" strokeWidth="40" />
                <line x1="160" y1="360" x2="440" y2="-40" stroke="rgba(255,255,255,0.03)" strokeWidth="40" />
                <path d="M280 320C340 260 400 280 400 220" stroke="rgba(0,150,255,0.12)" strokeWidth="60" fill="none" />
                <path d="M320 320C370 275 400 295 400 250" stroke="rgba(0,120,220,0.08)" strokeWidth="30" fill="none" />
                <circle cx="360" cy="60" r="50" fill="rgba(0,86,184,0.08)" />
              </svg>
            </div>
            <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 shadow-sm z-10">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-white m-0 mb-3 tracking-tight z-10">
              Deliver
            </h3>
            <p className="text-[14px] leading-relaxed text-neutral-400 m-0 z-10">
              Products arrive at their destination with greater visibility and temperature control.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
