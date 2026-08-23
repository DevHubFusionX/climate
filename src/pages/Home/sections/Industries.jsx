import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

const industries = [
  {
    tag: 'Pharma',
    title: 'Pharmaceuticals & Healthcare',
    short: 'Medicines, vaccines & healthcare products.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=900&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    tag: 'Agri',
    title: 'Food & Agriculture',
    short: 'Perishable produce from farms to markets.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&auto=format&fit=crop&q=80',
  },
  {
    tag: 'FMCG',
    title: 'FMCG & Food Processing',
    short: 'Frozen & chilled product distribution.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=700&auto=format&fit=crop&q=80',
  },
  {
    tag: 'Catering',
    title: 'Hospitality & Inflight Catering',
    short: 'Time-critical chilled logistics.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=700&auto=format&fit=crop&q=80',
  },
  {
    tag: 'Import',
    title: 'Importers & Distributors',
    short: 'Port-to-retail cold-chain networks.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&auto=format&fit=crop&q=80',
  },
]

function FeaturedCard({ item }) {
  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      custom={0}
      whileHover={cardHover}
      className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:row-span-4 shadow-sm hover:shadow-md transition-shadow duration-300 group"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="inline-block px-2.5 py-1 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase rounded mb-3">
          {item.tag}
        </span>
        <h3 className="text-white font-extrabold text-[22px] leading-tight m-0">{item.title}</h3>
        <p className="text-white/70 text-[13px] mt-2 m-0">{item.short}</p>
      </div>
    </motion.div>
  )
}

function SmallCard({ item, index }) {
  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      custom={index}
      whileHover={cardHover}
      className="relative rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase">{item.tag}</span>
        <p className="text-white font-bold text-[14px] leading-snug m-0 mt-0.5">{item.title}</p>
      </div>
    </motion.div>
  )
}

export default function Industries() {
  const featured = industries[0]
  const rest = industries.slice(1)

  return (
    <section className="relative z-10 bg-white border-t border-slate-100 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[1.2px] uppercase text-slate-400 mb-5">
              <span className="w-4 h-4 bg-slate-200 rounded-[4px] flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <rect width="8" height="8" rx="1.5" fill="#94a3b8" />
                </svg>
              </span>
              Target Industries
            </div>
            <WordColorReveal
              as="h2"
              theme="light"
              text="Built for what can't afford to fail."
              className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-3 sm:mb-0"
              delay={0.15}
            />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="text-[14px] sm:text-[16px] leading-relaxed text-slate-400 m-0 max-w-[420px] lg:text-right lg:ml-auto"
          >
            Temperature-sensitive industries that demand precision, visibility and reliability at every step.
          </motion.p>
        </div>

        {/* ── Asymmetric Grid with Stagger Delay ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5 lg:gap-6">
          {/* Left: Large featured card */}
          <FeaturedCard item={featured} />

          {/* Right: 2×2 small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 content-start">
            {rest.map((item, idx) => (
              <SmallCard
                key={item.tag}
                item={item}
                index={idx + 1}
              />
            ))}
          </div>
        </div>

        {/* ── Divider stat strip ── */}
        <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {[
            { stat: '5+', label: 'Industries served' },
            { stat: '100%', label: 'Temperature-tracked' },
            { stat: 'Solar', label: 'Powered cold storage' },
            { stat: 'IoT', label: 'Real-time monitoring' },
          ].map(({ stat, label }, i) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="flex flex-col"
            >
              <span className="text-[32px] font-extrabold text-slate-900 leading-none">{stat}</span>
              <span className="text-[13px] text-slate-400 mt-2">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
