import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

const capabilities = [
  {
    title: 'Booking & Dispatch',
    desc: 'Customers request temperature-controlled transportation or storage through a single interface.',
    icon: (
      <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    title: 'IoT Monitoring',
    desc: 'Real-time tracking of temperature, location and vehicle status across every connected asset.',
    icon: (
      <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
      </svg>
    ),
  },
  {
    title: 'Route Optimisation',
    desc: "Smart routing across Dara's delivery network to ensure products move efficiently and reliably.",
    icon: (
      <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    title: 'Cold Storage Management',
    desc: 'Solar-powered distributed cold rooms connected into a single intelligent storage network.',
    icon: (
      <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75H21m-3 3.75H21" />
      </svg>
    ),
  },
  {
    title: 'Data & Analytics',
    desc: 'Operational intelligence from every shipment, storage event and vehicle interaction across the network.',
    icon: (
      <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: 'Fleet Integration',
    desc: 'Connects refrigerated vehicles — including electric vans and trucks — into a single coordinated fleet layer.',
    icon: (
      <svg className="w-5 h-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25m-17.25 7.5H21" />
      </svg>
    ),
  },
]

export default function DaraOS() {
  return (
    <section
      id="daraos"
      className="relative z-10 border-t border-slate-100 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32"
      style={{ background: 'rgb(0, 86, 184)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-end">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.2px] uppercase text-white/50 mb-5">
              <span className="w-4 h-4 bg-white/15 rounded-[4px] flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <rect width="8" height="8" rx="1.5" fill="white" fillOpacity="0.6" />
                </svg>
              </span>
              DaraOS
            </div>
            <WordColorReveal
              as="h2"
              theme="dark"
              text="The intelligence connecting everything."
              className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[1.12] tracking-tight text-white m-0 mb-3 sm:mb-0"
              delay={0.1}
            />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={1}
            className="text-[14px] sm:text-[16px] leading-relaxed text-white/75 m-0 max-w-[440px]"
          >
            DaraOS is the technology layer designed to connect customers, vehicles, cold-storage infrastructure, IoT devices and operational data into one system.
          </motion.p>
        </div>

        {/* ── 6-Card Grid with Stagger Delay ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={index}
              whileHover={cardHover}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 flex flex-col justify-between min-h-[220px] transition-colors duration-300 hover:bg-white/[0.14] hover:border-white/25 shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-[18px] font-bold text-white m-0 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-white/70 m-0">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
