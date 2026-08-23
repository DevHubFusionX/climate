import React from 'react'
import { motion } from 'framer-motion'
import ctaImg from '../../../assets/images/Cta.jpeg'
import { fadeInUp, buttonHover, buttonTap } from '../../../utils/motion'

export default function CTA() {
  return (
    <section className="relative z-10 mx-4 lg:mx-8 my-10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full rounded-sm p-2 sm:p-3"
      >
        {/* ── Inner Main Card ── */}
        <div
          className="relative w-full overflow-hidden rounded-sm min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] flex items-center"
          style={{
            backgroundImage: `url(${ctaImg})`,
            backgroundSize: 'cover',
          }}
        >
          {/* Left vignette gradient overlay */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.58) 40%, rgba(15, 23, 42, 0.15) 70%, transparent 100%)',
            }}
          />

          {/* ── Content ── */}
          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-8 sm:py-10 text-left">
            <div className="max-w-xl">
              <h2
                className="text-white font-medium leading-[1.1] tracking-[-1px] m-0 mb-5"
                style={{ fontSize: 'clamp(26px, 3.8vw, 44px)' }}
              >
                Ready to remove<br />
                risk and cost?
              </h2>

              <motion.a
                whileHover={buttonHover}
                whileTap={buttonTap}
                href="#partner"
                className="inline-block rounded-sm px-6 py-2.5 sm:px-7 sm:py-3 bg-white text-slate-900 font-semibold text-xs sm:text-sm shadow-md no-underline hover:bg-slate-100 transition-colors"
              >
                Start shipping with us
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
