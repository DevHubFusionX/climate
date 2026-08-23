import React from 'react'
import { motion } from 'framer-motion'
import ctaImg from '../../../assets/images/Cta.jpeg'
import { fadeInUp, buttonHover, buttonTap } from '../../../utils/motion'

export default function CTA() {
  return (
    <section id="partner-cta" className="relative z-10 mx-4 lg:mx-8 my-10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full rounded-sm p-2 sm:p-3"
        style={{
          background: 'rgb(0, 86, 184)',
        }}
      >
        {/* Inner Card */}
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
              background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.84) 0%, rgba(15, 23, 42, 0.60) 42%, rgba(15, 23, 42, 0.15) 72%, transparent 100%)',
            }}
          />

          {/* 1-Column Left-Aligned Content */}
          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-8 sm:py-10 text-left">
            <div className="max-w-xl">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-200 mb-2">
                Partner With Us
              </span>
              <h2
                className="text-white font-medium leading-[1.1] tracking-[-1px] m-0 mb-5"
                style={{ fontSize: 'clamp(26px, 3.8vw, 44px)' }}
              >
                Build Africa's next<br />
                cold chain with us.
              </h2>

              <div className="flex flex-wrap items-center gap-3">
                <motion.a
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  href="#contact"
                  className="inline-block rounded-sm px-6 py-2.5 sm:px-7 sm:py-3 bg-white text-slate-900 font-semibold text-xs sm:text-sm shadow-md no-underline hover:bg-slate-100 transition-colors"
                >
                  Partner with Dara
                </motion.a>
                <motion.a
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  href="mailto:hello@daraexpress.com"
                  className="inline-block rounded-sm px-6 py-2.5 sm:px-7 sm:py-3 border border-white/40 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-colors no-underline"
                >
                  Talk to our team
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
