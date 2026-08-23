import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardHover } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'
import Button from '../../../components/ui/Button'

export default function Ecosystem() {
  const pillars = [
    {
      step: '01',
      tag: 'SOLAR ARRAY',
      title: 'Solar Refrigeration',
      subtitle: 'Keep products cold using the power of the sun.',
      desc: 'Dara integrates solar-powered refrigeration into its cold-chain infrastructure, reducing dependence on diesel generators and enabling distributed cold infrastructure closer to farms, markets and warehouses.',
      icon: (
        <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m12.72-12.72l-1.41 1.41" />
        </svg>
      ),
    },
    {
      step: '02',
      tag: 'ELECTRIC MOBILITY',
      title: 'Electric Fleet',
      subtitle: 'Cleaner movement across our delivery zones.',
      desc: 'Electric refrigerated vans and trucks power first-mile, last-mile and selected distribution corridors — connecting clean refrigeration with clean transport.',
      icon: (
        <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      step: '03',
      tag: 'COLD STORAGE',
      title: 'Smart Cold Storage',
      subtitle: 'Cold infrastructure where businesses need it.',
      desc: 'Distributed cold-storage facilities combine solar refrigeration, smart energy systems and digital monitoring — bringing temperature-controlled infrastructure closer to production and consumption points.',
      icon: (
        <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      step: '04',
      tag: 'IOT INTELLIGENCE',
      title: 'IoT Temperature Intelligence',
      subtitle: 'Visibility beyond vehicle location.',
      desc: 'Real-time monitoring of shipment temperature, vehicle location, route progress, temperature excursions and storage conditions — creating a complete digital record of every temperature-sensitive shipment.',
      icon: (
        <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: '05',
      tag: 'DARAOS',
      title: 'DaraOS',
      subtitle: 'The intelligence layer connecting everything.',
      desc: 'DaraOS is the technology layer designed to connect customers, vehicles, cold-storage infrastructure, IoT devices and operational data. As our climate infrastructure expands, DaraOS becomes the operating layer connecting the physical and digital cold chain.',
      icon: (
        <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative z-10 bg-[#f4f3ef] px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-start">
        {/* Left Column: Sticky Title block */}
        <div className="lg:sticky lg:top-28 self-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: '0px 0px -40px 0px' }}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.2px] uppercase text-slate-400 mb-5">
              <span className="w-4 h-4 bg-slate-200 rounded-[4px] flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <rect width="8" height="8" rx="1.5" fill="#94a3b8" />
                </svg>
              </span>
              The Dara Climate-Tech Ecosystem
            </div>
            <WordColorReveal
              as="h2"
              theme="light"
              text="One connected system for moving, cooling and monitoring products."
              className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-4 sm:mb-6"
              delay={0.1}
            />
            <p className="text-[14px] sm:text-[16px] leading-relaxed text-slate-500 m-0 mb-6 sm:mb-8">
              Five integrated pillars — clean energy, intelligent refrigeration, electric mobility, IoT intelligence, and DaraOS — working as one cold-chain network.
            </p>
            <Button
              text="Explore technology"
              href="#technology"
              variant="dark"
              iconBg="rgb(0, 86, 184)"
              dotColor="#ffffff"
            />
          </motion.div>
        </div>

        {/* Right Column: Stacking Cards on Mobile and Desktop */}
        <div className="relative">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative mb-8 sm:mb-12 lg:mb-16 last:mb-0 sticky"
              style={{
                top: `clamp(${68 + index * 12}px, 7vh + ${index * 14}px, ${96 + index * 24}px)`,
                zIndex: index + 1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08, margin: '0px 0px -30px 0px' }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.04,
                }}
                whileHover={cardHover}
                className="bg-white rounded-2xl sm:rounded-[24px] p-5 sm:p-7 lg:p-8 border border-slate-200/90 shadow-[0_10px_28px_-4px_rgba(0,0,0,0.08),0_4px_10px_rgba(0,0,0,0.04)] flex flex-col items-start transition-all duration-300 hover:border-slate-300 hover:shadow-[0_20px_48px_-6px_rgba(0,0,0,0.12)]"
              >
                {/* Header row: Icon, Tag & Step Number */}
                <div className="w-full flex items-center justify-between mb-3.5 sm:mb-5">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div
                      className="p-2 sm:p-2.5 rounded-xl flex items-center justify-center shadow-sm"
                      style={{ background: 'rgb(0, 86, 184)' }}
                    >
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[12px] font-mono font-bold text-slate-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-100 border border-slate-200/60">
                    {pillar.step}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-[16.5px] sm:text-[20px] font-extrabold text-slate-900 tracking-tight m-0 mb-1 sm:mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-[12.5px] sm:text-[14px] font-semibold text-[rgb(0,86,184)] m-0 mb-2 sm:mb-3">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-[12.5px] sm:text-[14px] leading-relaxed text-slate-500 m-0">
                  {pillar.desc}
                </p>
              </motion.div>
            </div>
          ))}
          {/* Scroll runway so the last sticky card has room to reach its stacked position */}
          <div className="h-[20vh] sm:h-[15vh]" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
