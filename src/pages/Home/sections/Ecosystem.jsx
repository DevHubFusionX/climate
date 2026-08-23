import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover } from '../../../utils/motion'

export default function Ecosystem() {
  const pillars = [
    {
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
    <section className="relative z-10 bg-[#f4f3ef] px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
        {/* Left Column: Sticky Title block */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:sticky lg:top-28"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.2px] uppercase text-slate-400 mb-5">
            <span className="w-4 h-4 bg-slate-200 rounded-[4px] flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <rect width="8" height="8" rx="1.5" fill="#94a3b8" />
              </svg>
            </span>
            The Dara Climate-Tech Ecosystem
          </div>
          <h2 className="text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-6">
            One connected system for moving, cooling and monitoring products.
          </h2>
          <p className="text-[16px] leading-relaxed text-slate-500 m-0">
            Five integrated pillars — clean energy, intelligent refrigeration, electric mobility, IoT intelligence, and DaraOS — working as one cold-chain network.
          </p>
        </motion.div>

        {/* Right Column: Vertical List of Cards with Progressive Scroll Delay */}
        <div className="flex flex-col gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={index}
              whileHover={cardHover}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="p-3 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgb(0, 86, 184)' }}>
                {pillar.icon}
              </div>

              {/* Tag / Category */}
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-3">
                {pillar.tag}
              </span>

              {/* Title & Description */}
              <p className="text-[15px] leading-relaxed text-slate-500 m-0">
                <span className="font-extrabold text-slate-900 text-[16px] mr-2">
                  {pillar.title}
                </span>
                <span className="font-semibold text-slate-700 mr-2">
                  {pillar.subtitle}
                </span>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
