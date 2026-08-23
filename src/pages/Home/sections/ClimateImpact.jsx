import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShieldCheck, Warehouse, Radio, Sun } from 'lucide-react'
import { fadeInUp, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

export default function ClimateImpact() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef([])

  const solutions = [
    {
      id: 1,
      tag: '01',
      title: 'Reduce Product Loss',
      desc: 'Better temperature management helps prevent avoidable spoilage, preserving commercial and nutritional value from origin to destination.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1400&q=80',
      alt: 'Fresh food cold-chain preservation',
      action: 'Learn More',
    },
    {
      id: 2,
      tag: '02',
      title: 'Reduce Infrastructure Burden',
      desc: 'Businesses access high-performance cold-chain capacity on demand without owning every vehicle, cold room, or monitoring system themselves.',
      icon: Warehouse,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
      alt: 'Distributed smart cold warehouse network',
      action: 'Learn More',
    },
    {
      id: 3,
      tag: '03',
      title: 'Improve Visibility',
      desc: 'IoT monitoring gives businesses greater insight into shipment conditions, location history, and live 24/7 temperature excursion alerts.',
      icon: Radio,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
      alt: 'Real-time IoT cold chain telemetry',
      action: 'Learn More',
    },
    {
      id: 4,
      tag: '04',
      title: 'Reduce Diesel Dependence',
      desc: 'Solar-powered refrigeration and electric mobility create a direct commercial pathway toward lower dependence on diesel-powered systems.',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
      alt: 'Solar powered refrigeration and clean energy',
      action: 'Learn More',
    },
  ]

  // Track active step on scroll
  useEffect(() => {
    const observers = []
    stepRefs.current.forEach((el, index) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index)
          }
        },
        {
          threshold: 0.4,
          rootMargin: '-15% 0px -25% 0px',
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const handleStepClick = (index) => {
    setActiveStep(index)
    if (stepRefs.current[index]) {
      stepRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="relative z-10 bg-[#fbfbfa] border-t border-slate-200/60 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Top Header Block ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-20 items-end">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/70 border border-slate-300/50 text-[11px] font-semibold text-slate-700 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[rgb(0,86,184)]" />
              Solutions
            </div>
            <WordColorReveal
              as="h2"
              theme="light"
              text={[
                'Better for Business.',
                'Better for the Infrastructure Around Us.',
              ]}
              className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.15] tracking-tight text-slate-900 m-0"
              delay={0.1}
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={1}
            className="lg:col-span-5 text-[14px] sm:text-[15.5px] leading-relaxed text-slate-500 m-0 font-normal lg:pb-2"
          >
            Dara's climate technology is designed to create commercial value first, building a cleaner, more resilient food and logistics infrastructure.
          </motion.p>
        </div>

        {/* ── Main 2-Column Sticky Scroll Architecture ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ── Left Column: Scrollable Step Milestones ── */}
          <div className="lg:col-span-6 relative flex flex-col">
            {/* Continuous vertical timeline guide */}
            <div className="hidden sm:block absolute left-[19px] sm:left-[21px] top-6 bottom-16 w-[2px] bg-slate-200 z-0" />

            {solutions.map((item, index) => {
              const isActive = activeStep === index

              return (
                <div
                  key={item.title}
                  ref={(el) => (stepRefs.current[index] = el)}
                  onClick={() => handleStepClick(index)}
                  className={`group relative cursor-pointer flex items-start gap-4 sm:gap-6 py-7 sm:py-10 lg:py-16 first:pt-2 last:pb-4 lg:last:pb-8 transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  {/* Step Numbered Badge */}
                  <div
                    className={`relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-none flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-[rgb(0,86,184)] text-white shadow-lg ring-2 ring-blue-100 scale-105'
                        : 'bg-white border border-slate-200 text-slate-400 group-hover:border-slate-300'
                    }`}
                  >
                    {item.id}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 pt-0.5">
                    <h3
                      className={`text-[17px] sm:text-[20px] lg:text-[22px] font-extrabold tracking-tight m-0 mb-1.5 sm:mb-2 transition-colors duration-200 ${
                        isActive ? 'text-slate-900' : 'text-slate-600'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[15px] leading-relaxed text-slate-500 m-0 font-normal max-w-lg mb-2.5 sm:mb-3">
                      {item.desc}
                    </p>

                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? 'text-[rgb(0,86,184)] opacity-100 translate-x-0'
                          : 'text-slate-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}
                    >
                      <span>{item.action}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Right Column: Sticky Image Container (Desktop) ── */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28 self-start pt-2">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative w-full h-[480px] lg:h-[520px] rounded-none overflow-hidden bg-slate-950 shadow-md border border-slate-200/90"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full rounded-none"
                >
                  <img
                    src={solutions[activeStep].image}
                    alt={solutions[activeStep].alt}
                    className="w-full h-full object-cover object-center rounded-none"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent rounded-none" />

                  {/* Floating info pills */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div className="backdrop-blur-md bg-black/50 px-4 py-2 rounded-none border border-white/20 text-xs font-semibold">
                      {solutions[activeStep].title}
                    </div>
                    <div className="backdrop-blur-md bg-black/50 px-3.5 py-2 rounded-none border border-white/20 text-xs font-mono font-bold text-[#4ade80]">
                      Step {solutions[activeStep].tag}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
