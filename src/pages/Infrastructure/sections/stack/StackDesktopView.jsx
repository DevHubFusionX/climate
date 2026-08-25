import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../../../utils/motion'
import WordColorReveal from '../../../../components/ui/WordColorReveal'

export default function StackDesktopView() {
  return (
    <div className="hidden md:block py-24 px-6 lg:px-12 max-w-[1240px] mx-auto">
      <div className="mb-16 max-w-2xl text-left">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-slate-400 block mb-2">
          CLIMATE INFRASTRUCTURE STACK
        </span>
        <WordColorReveal
          text="ONE CONNECTED SYSTEM FOR MOVING, COOLING AND MONITORING CRITICAL GOODS."
          as="h2"
          theme="light"
          trigger="inView"
          className="text-[36px] lg:text-[44px] font-extrabold tracking-tight text-slate-900 mb-4 leading-tight uppercase"
          wordColorMap={{
            MOVING: 'rgb(0, 86, 184)',
            COOLING: 'rgb(0, 86, 184)',
            MONITORING: 'rgb(0, 86, 184)',
            "MOVING,": 'rgb(0, 86, 184)',
          }}
        />
      </div>

      {/* Asymmetric Infrastructure Grid with 1px border lines */}
      <div className="grid grid-cols-12 gap-px bg-slate-200 border border-slate-200 rounded-[4px] overflow-hidden">
        
        {/* Card 01 - SOLAR VISUAL */}
        <div className="col-span-5 bg-white p-8 min-h-[360px] flex flex-col justify-between">
          <div className="text-[11px] font-mono tracking-wider text-slate-400">01</div>
          
          <div className="flex-1 flex items-center justify-center py-6">
            <svg className="w-full max-w-[200px] h-auto text-slate-900 stroke-slate-900 fill-none" viewBox="0 0 160 160">
              {/* Sun Core */}
              <circle cx="80" cy="50" r="12" className="stroke-slate-900" strokeWidth="1.5" />
              {/* Sun Rays */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                const rad = (angle * Math.PI) / 180
                const x1 = 80 + Math.cos(rad) * 18
                const y1 = 50 + Math.sin(rad) * 18
                const x2 = 80 + Math.cos(rad) * 26
                const y2 = 50 + Math.sin(rad) * 26
                return (
                  <motion.line
                    key={idx}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    strokeWidth="1"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.15 }}
                  />
                )
              })}

              {/* Downward network lines to power bus */}
              <motion.path
                d="M 80 62 L 80 110"
                strokeWidth="1"
                strokeDasharray="3 3"
                animate={{ strokeDashoffset: [0, -12] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
              <motion.path
                d="M 80 75 L 40 110"
                strokeWidth="1"
                strokeDasharray="3 3"
                animate={{ strokeDashoffset: [0, -12] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
              <motion.path
                d="M 80 75 L 120 110"
                strokeWidth="1"
                strokeDasharray="3 3"
                animate={{ strokeDashoffset: [0, -12] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />

              {/* Power Bus Line */}
              <line x1="20" y1="110" x2="140" y2="110" strokeWidth="1.5" />

              {/* Terminal Nodes */}
              <circle cx="40" cy="110" r="3.5" className="fill-white stroke-slate-900" strokeWidth="1.5" />
              <circle cx="80" cy="110" r="3.5" className="fill-white stroke-slate-900" strokeWidth="1.5" />
              <circle cx="120" cy="110" r="3.5" className="fill-white stroke-slate-900" strokeWidth="1.5" />
            </svg>
          </div>
          
          <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            POWER GENERATION
          </div>
        </div>

        {/* Card 01 - OFF-GRID ENERGY INFO */}
        <div className="col-span-7 bg-white p-8 min-h-[360px] flex flex-col justify-between">
          <div className="text-[11px] font-mono tracking-wider text-slate-400">01</div>
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 block mb-2">
              POWER LAYER
            </span>
            <h3 className="text-[24px] font-extrabold tracking-tight text-slate-900 uppercase mb-4">
              OFF-GRID ENERGY
            </h3>
            <p className="text-[15px] leading-relaxed text-slate-500 max-w-md font-normal">
              Distributed solar generation coupled with local battery storage systems. 
              Provides independent, high-uptime power directly to cold infrastructure nodes, bypasses fragile municipal grids, and guarantees continuous cooling.
            </p>
          </div>
          <div className="border-t border-slate-100 pt-6">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
              HARDWARE STANDARD
            </span>
            <span className="text-xs font-semibold text-slate-800">
              Tier-1 Bifacial PV + Industrial LFP Batteries
            </span>
          </div>
        </div>

        {/* Card 02 - ELECTRIC FLEET */}
        <div className="col-span-5 bg-white p-8 min-h-[340px] flex flex-col justify-between">
          <div className="text-[11px] font-mono tracking-wider text-slate-400">02</div>
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 block mb-4">
              MOBILITY LAYER
            </span>
            <WordColorReveal
              text="45%"
              as="div"
              theme="light"
              trigger="inView"
              className="text-[72px] font-mono font-extrabold tracking-tighter text-[rgb(0,86,184)] leading-none mb-4"
              revealColor="rgb(0, 86, 184)"
            />
            <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase mb-2">
              DIESEL DISPLACED
            </h3>
            <p className="text-[13px] leading-relaxed text-slate-500 font-normal">
              Electric fleet integration displaces 45% of standard diesel fuel consumption across regional delivery corridors.
            </p>
          </div>
          <div className="border-t border-slate-100 pt-4">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
              FLEET MODEL
            </span>
            <span className="text-xs font-semibold text-slate-800">
              3.5T &amp; 10T Electric Refrigerated Vans
            </span>
          </div>
        </div>

        {/* Card 03 - COLD CHAIN */}
        <div className="col-span-7 bg-white p-8 min-h-[340px] flex flex-col justify-between">
          <div className="text-[11px] font-mono tracking-wider text-slate-400">03</div>
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 block mb-2">
              LOGISTICS LAYER
            </span>
            <h3 className="text-[24px] font-extrabold tracking-tight text-slate-900 uppercase mb-4">
              COLD CHAIN
            </h3>
            <p className="text-[15px] leading-relaxed text-slate-500 max-w-md font-normal mb-6">
              Temperature-controlled transit and localized off-grid distribution hubs. 
              Keeps temperature-sensitive food and medical products preserved from first-mile collection to final-mile delivery.
            </p>
          </div>
          <div className="w-full">
            <svg className="w-full h-12 text-slate-200 stroke-slate-300 fill-none" viewBox="0 0 300 48">
              <line x1="0" y1="24" x2="300" y2="24" stroke="rgb(0,86,184)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
              <text x="5" y="16" className="fill-[rgb(0,86,184)] font-mono text-[8px] uppercase tracking-wider" stroke="none">Stable: 2°C - 8°C</text>
              <motion.path
                d="M 0 24 Q 75 16, 150 26 T 300 22"
                stroke="rgb(0,86,184)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <circle cx="150" cy="26" r="3" className="fill-[rgb(0,86,184)]" />
            </svg>
          </div>
        </div>

        {/* Card 04 - LIVE TELEMETRY */}
        <div className="col-span-12 bg-white p-8 min-h-[260px] flex flex-col justify-between">
          <div className="text-[11px] font-mono tracking-wider text-slate-400">04</div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 block mb-2">
                DATA STANDARD
              </span>
              <h3 className="text-[24px] font-extrabold tracking-tight text-slate-900 uppercase">
                LIVE TELEMETRY
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">TEMP</span>
                <WordColorReveal
                  text="2.8°C"
                  as="span"
                  theme="light"
                  trigger="inView"
                  className="text-xl font-mono font-semibold text-slate-900"
                />
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">BATTERY</span>
                <WordColorReveal
                  text="87%"
                  as="span"
                  theme="light"
                  trigger="inView"
                  className="text-xl font-mono font-semibold text-slate-900"
                />
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">SECURITY</span>
                <WordColorReveal
                  text="SECURE"
                  as="span"
                  theme="light"
                  trigger="inView"
                  className="text-xl font-mono font-semibold text-emerald-600"
                  revealColor="rgb(16, 185, 129)"
                />
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">GPS</span>
                <span className="text-xl font-mono font-semibold text-slate-900 flex items-center gap-1.5">
                  <WordColorReveal
                    text="ACTIVE"
                    as="span"
                    theme="light"
                    trigger="inView"
                    className="inline-block"
                  />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <svg className="w-full h-8 text-slate-200 stroke-slate-200 fill-none" viewBox="0 0 800 32" preserveAspectRatio="none">
              <line x1="0" y1="16" x2="800" y2="16" strokeWidth="1" strokeDasharray="4 4" />
              <motion.circle cx="0" cy="16" r="3.5" className="fill-[rgb(0,86,184)]" animate={{ cx: [0, 800] }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} />
              <motion.circle cx="0" cy="16" r="3.5" className="fill-[rgb(0,86,184)]" animate={{ cx: [0, 800] }} transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1.33 }} />
              <motion.circle cx="0" cy="16" r="3.5" className="fill-[rgb(0,86,184)]" animate={{ cx: [0, 800] }} transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 2.66 }} />
            </svg>
          </div>
        </div>

        {/* Card 05 - daraOS */}
        <div className="col-span-8 bg-white p-8 min-h-[360px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
                daraOS v2.4
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-600 flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-[4px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE SYSTEM
              </span>
            </div>
            <h3 className="text-[24px] font-extrabold tracking-tight text-slate-900 uppercase mb-2">
              NATIVE CLOUD ORCHESTRATION
            </h3>
            <p className="text-[14px] leading-relaxed text-slate-500 max-w-xl font-normal mb-8">
              Our central intelligence layer coordinating physical hubs, cold chains, solar systems, and electric fleet routing into a single operating standard.
            </p>
          </div>
          <div className="w-full flex justify-center py-4 bg-slate-50/50 border border-slate-100 rounded-[4px]">
            <svg viewBox="0 0 400 120" className="w-full max-w-[400px] h-24 stroke-slate-300 fill-none">
              <path d="M 50 60 L 150 25 L 250 25 L 350 60 L 250 95 L 150 95 Z" strokeWidth="1" />
              <path d="M 150 25 L 150 95" strokeWidth="1" />
              <path d="M 250 25 L 250 95" strokeWidth="1" />
              <path d="M 50 60 L 250 25" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 350 60 L 150 95" strokeWidth="1" strokeDasharray="3 3" />
              <motion.circle cx="50" cy="60" r="4.5" className="fill-white stroke-slate-900" strokeWidth="1.5" animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
              <motion.circle cx="150" cy="25" r="4.5" className="fill-white stroke-[rgb(0,86,184)]" strokeWidth="1.5" animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }} />
              <motion.circle cx="250" cy="25" r="4.5" className="fill-white stroke-slate-900" strokeWidth="1.5" animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.6 }} />
              <motion.circle cx="350" cy="60" r="4.5" className="fill-white stroke-slate-900" strokeWidth="1.5" animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.9 }} />
              <motion.circle cx="250" cy="95" r="4.5" className="fill-white stroke-[rgb(0,86,184)]" strokeWidth="1.5" animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.2 }} />
              <motion.circle cx="150" cy="95" r="4.5" className="fill-white stroke-slate-900" strokeWidth="1.5" animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.5 }} />
            </svg>
          </div>
          <div className="text-[10px] font-mono tracking-widest text-slate-400 mt-4 uppercase">
            DISPATCH &bull; LOAD BOOKING &bull; ROUTE ANALYSIS
          </div>
        </div>

        {/* Card 05 - THERMAL EFFICIENCY */}
        <div className="col-span-4 bg-white p-8 min-h-[360px] flex flex-col justify-between">
          <div className="text-[11px] font-mono tracking-wider text-slate-400">05</div>
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 block mb-4">
              EFFICIENCY INDEX
            </span>
            <div className="text-[72px] font-mono font-extrabold tracking-tighter text-[rgb(0,86,184)] leading-none mb-4">
              1.6&times;
            </div>
            <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase mb-2">
              THERMAL EFFICIENCY
            </h3>
            <p className="text-[13px] leading-relaxed text-slate-500 font-normal">
              High-efficiency insulation materials and active cooling loops achieving a 1.6x enhancement in cargo preservation performance compared to traditional operations.
            </p>
          </div>
          <div className="border-t border-slate-100 pt-4">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
              BENCHMARK
            </span>
            <span className="text-xs font-semibold text-slate-800">
              vs. Conventional Diesel Refrigeration
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
