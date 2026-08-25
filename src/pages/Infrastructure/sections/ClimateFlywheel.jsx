import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, cardHover, viewportConfig } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'

const flywheelSteps = [
  {
    step: '01',
    title: 'Enterprise Volume',
    desc: 'Growing enterprise cargo increases volume across key regional delivery corridors.',
    highlights: ['More cargo.', 'More density.', 'More utilization.'],
  },
  {
    step: '02',
    title: 'Asset Utilization',
    desc: 'Higher density improves utilization across solar cold rooms and electric vans.',
    highlights: ['Higher density.', 'Better infrastructure utilization.'],
  },
  {
    step: '03',
    title: 'Renewable Scaling',
    desc: 'Expanded scale justifies direct investment into localized solar generation and fast-charging.',
    highlights: ['Direct solar investment.', 'Localized fast-charging.', 'Sustained power.'],
  },
  {
    step: '04',
    title: 'Unit Economics',
    desc: 'Displacing expensive diesel fuel lowers cost-per-kilogram, unlocking more customer demand.',
    highlights: ['Lower cost-per-kg.', 'Displaced diesel fuel.', 'Unlock customer demand.'],
  },
]

const partners = [
  'Fleet Owners',
  'EV Manufacturers',
  'Solar Energy Companies',
  'Cold Storage Operators',
  'Equipment Financiers',
  'IoT & Sensor Providers',
  'Infrastructure Funds',
  'Development Finance (DFIs)',
]

export default function ClimateFlywheel() {
  const [activeStage, setActiveStage] = React.useState(0)
  return (
    <section className="relative z-10 bg-[#f8f9fa] border-t border-slate-200/50 px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        
        {/* ── DESKTOP VIEW ── */}
        <div className="hidden md:block">
          {/* ── Section Header ── */}
          <div className="text-left mb-16 lg:mb-20 max-w-2xl">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-4"
            >
              Network Effects
            </motion.div>
            <WordColorReveal
              text="The Dara Climate Flywheel"
              as="h2"
              className="text-[26px] xs:text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-slate-900 m-0 mb-3 sm:mb-4"
              delay={0.1}
              wordColorMap={{
                Climate: 'rgb(0, 86, 184)',
                Flywheel: 'rgb(0, 86, 184)',
              }}
            />
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={2}
              className="text-[14px] sm:text-[16px] leading-relaxed text-slate-500 m-0 font-normal"
            >
              Commercial growth directly reinforces climate efficiency. As shipment volume expands, infrastructure utilization rises, driving down costs and emissions simultaneously.
            </motion.p>
          </div>

          {/* ── Flywheel Interactive Sequence ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {flywheelSteps.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={index}
                whileHover={cardHover}
                className="bg-white rounded-2xl p-7 border border-slate-200/60 shadow-sm flex flex-col justify-between min-h-[240px] group hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-[rgb(0,86,184)] font-mono font-bold text-xs flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                    STAGE
                  </span>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-slate-900 m-0 mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-slate-500 m-0 font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Asset-Efficient Partner Integration (Ecosystem Diagram) ── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.02)] flex flex-col items-center"
          >
            {/* The SVG Diagram */}
            <div className="w-full max-w-3xl mb-10">
              <svg viewBox="0 0 800 420" className="w-full h-auto text-slate-800 fill-none select-none">
                {/* Grid Pattern */}
                <defs>
                  <pattern id="ecosystem-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,86,184,0.015)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ecosystem-grid)" stroke="none" />

                {/* DARA CLIMATE Headline */}
                <text x="400" y="45" textAnchor="middle" className="fill-[rgb(0,86,184)] font-mono font-bold tracking-[3px]" fontSize="13">
                  DARA CLIMATE
                </text>

                {/* Connecting Lines */}
                {/* 1. Fleet Owners */}
                <g className="group/node cursor-pointer">
                  <line x1="185" y1="98" x2="400" y2="200" className="stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)]/60 transition-colors duration-300" strokeWidth="1.5" strokeDasharray="3 3" />
                  <g transform="translate(120, 80)">
                    <rect x="0" y="0" width="130" height="36" rx="18" className="fill-white stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)] transition-all duration-300" strokeWidth="1.5" />
                    <text x="65" y="22" className="fill-slate-600 group-hover/node:fill-[rgb(0,86,184)] transition-colors duration-300" textAnchor="middle" fontSize="10.5" fontWeight="bold">Fleet Owners</text>
                  </g>
                </g>

                {/* 2. EV Manufacturers */}
                <g className="group/node cursor-pointer">
                  <line x1="615" y1="98" x2="400" y2="200" className="stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)]/60 transition-colors duration-300" strokeWidth="1.5" strokeDasharray="3 3" />
                  <g transform="translate(550, 80)">
                    <rect x="0" y="0" width="130" height="36" rx="18" className="fill-white stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)] transition-all duration-300" strokeWidth="1.5" />
                    <text x="65" y="22" className="fill-slate-600 group-hover/node:fill-[rgb(0,86,184)] transition-colors duration-300" textAnchor="middle" fontSize="10.5" fontWeight="bold">EV Manufacturers</text>
                  </g>
                </g>

                {/* 3. Solar Companies */}
                <g className="group/node cursor-pointer">
                  <line x1="120" y1="200" x2="400" y2="200" className="stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)]/60 transition-colors duration-300" strokeWidth="1.5" />
                  <g transform="translate(50, 182)">
                    <rect x="0" y="0" width="140" height="36" rx="18" className="fill-white stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)] transition-all duration-300" strokeWidth="1.5" />
                    <text x="70" y="22" className="fill-slate-600 group-hover/node:fill-[rgb(0,86,184)] transition-colors duration-300" textAnchor="middle" fontSize="10.5" fontWeight="bold">Solar Companies</text>
                  </g>
                </g>

                {/* 4. Cold Storage */}
                <g className="group/node cursor-pointer">
                  <line x1="680" y1="200" x2="400" y2="200" className="stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)]/60 transition-colors duration-300" strokeWidth="1.5" />
                  <g transform="translate(610, 182)">
                    <rect x="0" y="0" width="140" height="36" rx="18" className="fill-white stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)] transition-all duration-300" strokeWidth="1.5" />
                    <text x="70" y="22" className="fill-slate-600 group-hover/node:fill-[rgb(0,86,184)] transition-colors duration-300" textAnchor="middle" fontSize="10.5" fontWeight="bold">Cold Storage</text>
                  </g>
                </g>

                {/* 5. Equipment Financiers */}
                <g className="group/node cursor-pointer">
                  <line x1="185" y1="300" x2="400" y2="200" className="stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)]/60 transition-colors duration-300" strokeWidth="1.5" strokeDasharray="3 3" />
                  <g transform="translate(110, 282)">
                    <rect x="0" y="0" width="150" height="36" rx="18" className="fill-white stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)] transition-all duration-300" strokeWidth="1.5" />
                    <text x="75" y="22" className="fill-slate-600 group-hover/node:fill-[rgb(0,86,184)] transition-colors duration-300" textAnchor="middle" fontSize="10.5" fontWeight="bold">Equipment Financiers</text>
                  </g>
                </g>

                {/* 6. IoT & Sensors */}
                <g className="group/node cursor-pointer">
                  <line x1="605" y1="300" x2="400" y2="200" className="stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)]/60 transition-colors duration-300" strokeWidth="1.5" strokeDasharray="3 3" />
                  <g transform="translate(540, 282)">
                    <rect x="0" y="0" width="130" height="36" rx="18" className="fill-white stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)] transition-all duration-300" strokeWidth="1.5" />
                    <text x="65" y="22" className="fill-slate-600 group-hover/node:fill-[rgb(0,86,184)] transition-colors duration-300" textAnchor="middle" fontSize="10.5" fontWeight="bold">IoT &amp; Sensors</text>
                  </g>
                </g>

                {/* 7. Infrastructure Funds */}
                <g className="group/node cursor-pointer">
                  <line x1="290" y1="368" x2="400" y2="200" className="stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)]/60 transition-colors duration-300" strokeWidth="1.5" />
                  <g transform="translate(220, 350)">
                    <rect x="0" y="0" width="140" height="36" rx="18" className="fill-white stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)] transition-all duration-300" strokeWidth="1.5" />
                    <text x="70" y="22" className="fill-slate-600 group-hover/node:fill-[rgb(0,86,184)] transition-colors duration-300" textAnchor="middle" fontSize="10.5" fontWeight="bold">Infrastructure Funds</text>
                  </g>
                </g>

                {/* 8. DFIs */}
                <g className="group/node cursor-pointer">
                  <line x1="510" y1="368" x2="400" y2="200" className="stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)]/60 transition-colors duration-300" strokeWidth="1.5" />
                  <g transform="translate(440, 350)">
                    <rect x="0" y="0" width="140" height="36" rx="18" className="fill-white stroke-slate-200 group-hover/node:stroke-[rgb(0,86,184)] transition-all duration-300" strokeWidth="1.5" />
                    <text x="70" y="22" className="fill-slate-600 group-hover/node:fill-[rgb(0,86,184)] transition-colors duration-300" textAnchor="middle" fontSize="10.5" fontWeight="bold">DFIs</text>
                  </g>
                </g>

                {/* Center Node: DARA */}
                <g className="cursor-pointer">
                  <rect x="350" y="180" width="100" height="40" rx="20" className="fill-white stroke-[rgb(0,86,184)] shadow-md" strokeWidth="2.5" />
                  <text x="400" y="204" className="fill-slate-950 font-extrabold tracking-widest" textAnchor="middle" fontSize="11.5">DARA</text>
                </g>
              </svg>
            </div>

            {/* Statement and details underneath */}
            <div className="text-center">
              <p className="text-[17px] font-semibold text-slate-800 tracking-tight m-0 mb-3">
                Powered by a connected, multi-partner network.
              </p>
              
              <div className="inline-flex text-xs font-extrabold px-5 py-2 rounded-full bg-blue-50 text-[rgb(0,86,184)] tracking-wide uppercase">
                Tech + Demand + Operating Standards
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE VIEW (One Thought Per Screen, Steve Jobs-like) ── */}
        {/* ── MOBILE VIEW (Interactive Orbit Layout, Steve Jobs-style) ── */}
        <div className="block md:hidden">
          
          {/* Header Area */}
          <div className="text-left mb-8">
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400 block mb-2">
              Network Effects
            </span>
            <WordColorReveal
              text="The Dara Climate Flywheel"
              as="h2"
              theme="light"
              trigger="inView"
              className="text-[28px] font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-3 uppercase"
              wordColorMap={{
                Climate: 'rgb(0, 86, 184)',
                Flywheel: 'rgb(0, 86, 184)',
              }}
            />
            <p className="text-[13.5px] leading-relaxed text-slate-500 font-normal m-0 max-w-sm">
              Commercial growth directly reinforces climate efficiency. Click each node below to view the interconnected ecosystem stages.
            </p>
          </div>

          {/* Interactive Radial Orbit SVG */}
          <div className="relative w-[320px] h-[320px] mx-auto my-8">
            <svg viewBox="0 0 320 320" className="w-full h-full text-slate-800 fill-none select-none overflow-visible">
              {/* Orbit Dotted Path */}
              <circle cx="160" cy="160" r="60" className="stroke-slate-200" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Center Label Group */}
              <g>
                {/* Subtle center background circle for text boundary */}
                <circle cx="160" cy="160" r="40" className="fill-[#f8f9fa] stroke-none" />
                <text x="160" y="148" textAnchor="middle" className="fill-slate-400 font-mono font-bold tracking-[2px]" fontSize="9">DARA</text>
                <text x="160" y="162" textAnchor="middle" className="fill-slate-900 font-sans font-extrabold tracking-wide" fontSize="10">CLIMATE</text>
                <text x="160" y="176" textAnchor="middle" className="fill-slate-400 font-mono font-bold tracking-[2px]" fontSize="9">NETWORK</text>
              </g>

              {/* Rotating Orbit Particle */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                style={{ originX: '160px', originY: '160px' }}
              >
                <circle cx="160" cy="100" r="3.5" className="fill-[rgb(0,86,184)]" />
              </motion.g>

              {/* Clickable Nodes & Labels */}
              {[
                { cx: 160, cy: 100, label: "ENTERPRISE", label2: "VOLUME", anchor: "middle", textX: 160, textY: 82, num: "01" },
                { cx: 220, cy: 160, label: "ASSET", label2: "UTILIZATION", anchor: "start", textX: 232, textY: 158, num: "02" },
                { cx: 160, cy: 220, label: "RENEWABLE", label2: "SCALING", anchor: "middle", textX: 160, textY: 242, num: "03" },
                { cx: 100, cy: 160, label: "UNIT", label2: "ECONOMICS", anchor: "end", textX: 88, textY: 158, num: "04" }
              ].map((node, index) => {
                const isActive = activeStage === index
                return (
                  <g 
                    key={index} 
                    onClick={() => setActiveStage(index)} 
                    className="cursor-pointer"
                  >
                    {/* Node Connection Line highlight when active */}
                    {isActive && (
                      <circle cx="160" cy="160" r="60" className="stroke-[rgb(0,86,184)]/20" strokeWidth="3" />
                    )}

                    {/* Tap target area helper (invisible but captures click easily) */}
                    <circle cx={node.cx} cy={node.cy} r="20" className="fill-transparent stroke-none pointer-events-auto" />
                    
                    {/* Visual Node */}
                    <circle 
                      cx={node.cx} 
                      cy={node.cy} 
                      r={isActive ? "7" : "5"} 
                      className={`transition-all duration-300 ${isActive ? "fill-white stroke-[rgb(0,86,184)]" : "fill-white stroke-slate-300"}`} 
                      strokeWidth={isActive ? "2.5" : "1.5"} 
                    />
                    {isActive && (
                      <circle cx={node.cx} cy={node.cy} r="2.5" className="fill-[rgb(0,86,184)]" />
                    )}

                    {/* Stage Number label (super small uppercase eyebrow) */}
                    <text
                      x={node.textX}
                      y={node.num === "01" ? node.textY - 12 : node.num === "03" ? node.textY + 22 : node.textY - 10}
                      textAnchor={node.anchor}
                      className={`font-mono text-[8px] font-bold tracking-[1.5px] transition-colors duration-300 ${isActive ? "fill-[rgb(0,86,184)]" : "fill-slate-300"}`}
                    >
                      STAGE {node.num}
                    </text>

                    {/* Node Title Line 1 */}
                    <text
                      x={node.textX}
                      y={node.num === "03" ? node.textY + 6 : node.textY}
                      textAnchor={node.anchor}
                      className={`font-sans text-[9px] font-bold tracking-tight transition-colors duration-300 ${isActive ? "fill-slate-900" : "fill-slate-400"}`}
                    >
                      {node.label}
                    </text>

                    {/* Node Title Line 2 */}
                    <text
                      x={node.textX}
                      y={node.num === "03" ? node.textY + 14 : node.textY + 8}
                      textAnchor={node.anchor}
                      className={`font-sans text-[9px] font-bold tracking-tight transition-colors duration-300 ${isActive ? "fill-slate-900" : "fill-slate-400"}`}
                    >
                      {node.label2}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Explanation Detail Card */}
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-slate-200/50 p-6 rounded-xl min-h-[140px] flex flex-col justify-between"
          >
            <div>
              <span className="text-[9px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
                STAGE 0{activeStage + 1} &bull; DETAIL
              </span>
              <h4 className="text-[17px] font-extrabold text-slate-900 tracking-tight mb-2 uppercase">
                {flywheelSteps[activeStage].title}
              </h4>
              <p className="text-[13px] leading-relaxed text-slate-500 font-normal m-0">
                {flywheelSteps[activeStage].desc}
              </p>
            </div>
          </motion.div>

          {/* Bottom Footer Statement */}
          <div className="mt-16 text-center border-t border-slate-200/50 pt-10">
            <span className="text-[9px] font-mono tracking-[3px] uppercase text-slate-400 block mb-2">
              POWERED BY
            </span>
            <div className="text-xs font-extrabold text-slate-900 tracking-wider uppercase mb-3">
              TECH &bull; DEMAND &bull; OPERATING STANDARDS
            </div>
            <div className="w-12 h-[1px] bg-slate-200/60 mx-auto my-3" />
            <p className="text-[13px] leading-relaxed text-slate-500 font-normal m-0 max-w-[240px] mx-auto">
              A connected multi-partner network.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
