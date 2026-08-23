import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover, buttonHover, buttonTap } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

export default function ClimateImpact() {
  const scrollContainerRef = useRef(null)
  const [scrollPercent, setScrollPercent] = useState(0)

  const benefits = [
    {
      title: 'Reduce Product Loss',
      desc: 'Better temperature management can help prevent avoidable spoilage, preserving commercial and nutritional value from origin to destination.',
      icon: (
        <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      ),
    },
    {
      title: 'Reduce Infrastructure Burden',
      desc: 'Businesses can access cold-chain infrastructure without owning every vehicle, cold room or monitoring system themselves.',
      icon: (
        <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75H21m-3 3.75H21" />
        </svg>
      ),
    },
    {
      title: 'Improve Visibility',
      desc: 'IoT monitoring gives businesses greater insight into shipment conditions, location history, and live temperature tracking.',
      icon: (
        <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Reduce Diesel Dependence',
      desc: 'Solar-powered refrigeration and electric mobility create a direct pathway toward lower dependence on diesel-powered systems.',
      icon: (
        <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
    },
    {
      title: 'Build Resilient Supply Chains',
      desc: 'Distributed infrastructure helps businesses reach more locations reliably, insulating logistics networks from fuel costs and energy price shocks.',
      icon: (
        <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
    },
  ]

  const handleScroll = () => {
    const el = scrollContainerRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    if (maxScroll <= 0) return
    setScrollPercent((el.scrollLeft / maxScroll) * 100)
  }

  const scrollBy = (direction) => {
    const el = scrollContainerRef.current
    if (!el) return
    const scrollAmount = 340
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative z-10 bg-white border-t border-slate-100 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.2px] uppercase mb-5"
            style={{ color: 'rgb(0, 86, 184)' }}
          >
            <span className="w-2.5 h-2.5 rounded-[2px]" style={{ background: 'rgb(0, 86, 184)' }} />
            Solutions
          </motion.div>
          <WordColorReveal
            as="h2"
            theme="light"
            text={[
              "Better for Business.",
              "Better for the Infrastructure Around Us."
            ]}
            delay={0.15}
            className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-3 sm:mb-4"
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            className="text-[14px] sm:text-[16px] leading-relaxed text-slate-500 max-w-[620px] m-0"
          >
            Dara's climate technology is designed to create commercial value first, building a cleaner, more resilient food and logistics infrastructure.
          </motion.p>
        </div>

        {/* ── Horizontal Scroll Slider with Progressive Card Delay ── */}
        <div className="relative -mx-6 lg:-mx-16 border-t border-b border-slate-100">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {benefits.map((b, index) => (
              <motion.div
                key={b.title}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={index}
                whileHover={cardHover}
                className="flex-shrink-0 w-[300px] md:w-[350px] px-8 py-12 snap-start border-r border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="mb-6 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ background: 'rgb(0, 86, 184)' }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="text-[18px] font-extrabold text-slate-900 m-0 mb-4 leading-tight">
                    {b.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-slate-500 m-0">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <motion.button
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                    className="group relative overflow-hidden border border-slate-200 text-slate-800 text-[12px] font-bold px-4 py-2 rounded cursor-pointer transition-colors duration-300 hover:border-[rgb(0,86,184)] hover:text-white"
                  >
                    <span
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                      style={{ background: 'rgb(0, 86, 184)' }}
                    />
                    <span className="relative z-10">Learn More →</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Footer Controls ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-between mt-10"
        >
          {/* Scroll progress bar */}
          <div className="relative w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 bottom-0"
              style={{ background: 'rgb(0, 86, 184)', width: `${scrollPercent}%` }}
            />
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              onClick={() => scrollBy('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors duration-200 cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              onClick={() => scrollBy('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors duration-200 cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
