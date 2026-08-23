import React from 'react'
import { motion } from 'framer-motion'
import { Package, Sun, Zap, Fuel, ShieldCheck, Leaf, ArrowUpRight } from 'lucide-react'
import { fadeInUp, cardVariant, cardHover, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

const metrics = [
  {
    step: '01',
    label: 'Cold Preservation',
    metric: 'Tonnes Moved & Preserved',
    desc: 'Volume of temperature-critical food, pharmaceuticals, and proteins protected from spoilage across our network.',
    icon: Package,
  },
  {
    step: '02',
    label: 'Clean Power',
    metric: 'Solar Energy Consumed',
    desc: 'Kilowatt-hours generated on-site to power cooling systems and cold hubs without grid strain.',
    icon: Sun,
  },
  {
    step: '03',
    label: 'Zero Emissions',
    metric: 'Electric Kilometres',
    desc: 'Total distance travelled by battery-electric refrigerated delivery vans and distribution trucks.',
    icon: Zap,
  },
  {
    step: '04',
    label: 'Fuel Abatement',
    metric: 'Diesel Displaced',
    desc: 'Litres of generator and diesel commercial vehicle fuel permanently removed from supply chains.',
    icon: Fuel,
  },
  {
    step: '05',
    label: 'Quality Assurance',
    metric: 'Excursions Prevented',
    desc: 'Automated digital IoT alerts intercepting temperature drift before cargo quality is compromised.',
    icon: ShieldCheck,
  },
  {
    step: '06',
    label: 'Decarbonisation',
    metric: 'CO₂e Emissions Avoided',
    desc: 'Calculated and audited tonnes of carbon emissions avoided through localized solar refrigeration and active fleet electrification.',
    icon: Leaf,
  },
]

export default function ImpactMeasurement() {
  return (
    <section className="relative z-10 bg-[#fbfbfa] border-t border-slate-200/50 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-4">
              Measurable Impact
            </div>
            <WordColorReveal
              text="Turning commercial activity into climate impact."
              as="h2"
              className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-3 sm:mb-0"
              delay={0.1}
              wordColorMap={{
                commercial: 'rgb(0, 86, 184)',
                climate: '#4ade80',
                impact: '#4ade80',
              }}
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={1}
            className="lg:pt-8"
          >
            <p className="text-[14px] sm:text-[16px] leading-relaxed text-slate-500 m-0 font-normal">
              Real data from every cold room, route, and kilowatt-hour. We quantify emissions prevented, product preserved, and diesel displaced across the network.
            </p>
          </motion.div>
        </div>

        {/* ── Mature Asymmetrical Bento Grid with Gray-Toned Palette ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* ── BENTO CARD 1: Wide Featured (7/12 cols) — Cold Preservation ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0}
            whileHover={cardHover}
            className="lg:col-span-7 relative overflow-hidden rounded-[28px] p-8 sm:p-9 bg-white border border-slate-200/80 text-slate-900 flex flex-col justify-between min-h-[320px] shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                  01
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {metrics[0].label}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/70 flex items-center justify-center text-slate-600 shadow-sm">
                <Package className="w-4 h-4" />
              </div>
            </div>

            {/* Middle Metric Indicator */}
            <div className="my-2 z-10">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[36px] sm:text-[42px] font-extrabold tracking-tight text-slate-900 leading-none">
                  100%
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Cargo Integrity Maintained
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '94%' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-slate-700 h-full rounded-full"
                />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="z-10 pt-4">
              <h3 className="text-[20px] font-bold text-slate-900 m-0 mb-1.5 tracking-tight">
                {metrics[0].metric}
              </h3>
              <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-500 m-0 font-normal max-w-lg">
                {metrics[0].desc}
              </p>
            </div>
          </motion.div>

          {/* ── BENTO CARD 2: Tall Right (5/12 cols) — Clean Power ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={1}
            whileHover={cardHover}
            className="lg:col-span-5 relative overflow-hidden rounded-[28px] p-8 sm:p-9 bg-white border border-slate-200/80 text-slate-900 flex flex-col justify-between min-h-[320px] shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                  02
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {metrics[1].label}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/70 flex items-center justify-center text-slate-600 shadow-sm">
                <Sun className="w-4 h-4" />
              </div>
            </div>

            {/* Middle Content */}
            <div>
              <span className="inline-block px-2.5 py-1 bg-slate-100 rounded-md text-[10px] font-mono font-bold text-slate-600 mb-3 border border-slate-200/60">
                ON-SITE SOLAR GENERATION
              </span>
              <h3 className="text-[20px] font-bold text-slate-900 m-0 mb-2 tracking-tight">
                {metrics[1].metric}
              </h3>
              <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-500 m-0 font-normal">
                {metrics[1].desc}
              </p>
            </div>

            {/* Bottom Tag */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Grid-Independent Operation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>

          {/* ── BENTO CARD 3: 1/3 Width (4/12 cols) — Zero Emissions ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={2}
            whileHover={cardHover}
            className="lg:col-span-4 rounded-[26px] p-7 sm:p-8 bg-white border border-slate-200/80 shadow-sm hover:shadow-md flex flex-col justify-between min-h-[240px] transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                03
              </span>
              <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/70 flex items-center justify-center text-slate-600 shadow-sm">
                <Zap className="w-4 h-4" />
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                {metrics[2].label}
              </span>
              <h3 className="text-[17px] font-bold text-slate-900 m-0 mb-1.5 tracking-tight">
                {metrics[2].metric}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 m-0 font-normal">
                {metrics[2].desc}
              </p>
            </div>
          </motion.div>

          {/* ── BENTO CARD 4: 1/3 Width (4/12 cols) — Fuel Abatement ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={3}
            whileHover={cardHover}
            className="lg:col-span-4 rounded-[26px] p-7 sm:p-8 bg-white border border-slate-200/80 shadow-sm hover:shadow-md flex flex-col justify-between min-h-[240px] transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                04
              </span>
              <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/70 flex items-center justify-center text-slate-600 shadow-sm">
                <Fuel className="w-4 h-4" />
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                {metrics[3].label}
              </span>
              <h3 className="text-[17px] font-bold text-slate-900 m-0 mb-1.5 tracking-tight">
                {metrics[3].metric}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 m-0 font-normal">
                {metrics[3].desc}
              </p>
            </div>
          </motion.div>

          {/* ── BENTO CARD 5: 1/3 Width (4/12 cols) — Quality Assurance ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={4}
            whileHover={cardHover}
            className="lg:col-span-4 rounded-[26px] p-7 sm:p-8 bg-white border border-slate-200/80 shadow-sm hover:shadow-md flex flex-col justify-between min-h-[240px] transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                05
              </span>
              <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/70 flex items-center justify-center text-slate-600 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                {metrics[4].label}
              </span>
              <h3 className="text-[17px] font-bold text-slate-900 m-0 mb-1.5 tracking-tight">
                {metrics[4].metric}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 m-0 font-normal">
                {metrics[4].desc}
              </p>
            </div>
          </motion.div>

          {/* ── BENTO CARD 6: Wide Bottom (12/12 cols) — Decarbonisation ── */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={5}
            whileHover={cardHover}
            className="lg:col-span-12 relative overflow-hidden rounded-[28px] p-8 sm:p-9 bg-white border border-slate-200/80 text-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            {/* Left Narrative */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                  06
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {metrics[5].label}
                </span>
              </div>
              <h3 className="text-[21px] sm:text-[23px] font-bold text-slate-900 m-0 mb-1.5 tracking-tight">
                {metrics[5].metric}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-slate-500 m-0 font-normal">
                {metrics[5].desc}
              </p>
            </div>

            {/* Right Badge Graphic */}
            <div className="flex items-center gap-3.5 flex-shrink-0">
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-200/70 text-slate-700 flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Audit Standard
                  </div>
                  <div className="text-[15px] font-bold text-slate-900">
                    Audited CO₂e
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
