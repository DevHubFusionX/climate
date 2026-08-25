import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../../../utils/motion'
import WordColorReveal from '../../../../components/ui/WordColorReveal'

export default function StackMobileView() {
  return (
    <div className="block md:hidden flex flex-col bg-white">
      
      {/* Slide 1: CLIMATE INFRASTRUCTURE STACK */}
      <div className="min-h-[80vh] flex flex-col justify-center py-12 bg-white text-slate-900 border-b border-slate-100 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col text-left h-full justify-between"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
              SYSTEM OVERVIEW
            </span>
            <WordColorReveal
              text="CLIMATE INFRASTRUCTURE STACK"
              as="h2"
              theme="light"
              trigger="inView"
              className="text-[32px] font-extrabold tracking-[-1.5px] uppercase text-slate-900 leading-none mb-6"
              wordColorMap={{
                CLIMATE: 'rgb(0, 86, 184)',
              }}
            />
            <p className="text-[14px] leading-relaxed text-slate-500 font-normal max-w-xs">
              Five technologies unified into one connected physical and digital ecosystem across Africa.
            </p>
          </div>
          <div className="text-slate-300 text-xl font-light pt-8 select-none">↓</div>
        </motion.div>
      </div>

      {/* Slide 2: CLEANTECH, NOT ONLY IN COMMITMENTS */}
      <div className="min-h-[80vh] flex flex-col justify-center py-12 bg-white text-slate-900 border-b border-slate-100 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col text-left h-full justify-between"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
              CORE CONVICTION
            </span>
            <WordColorReveal
              text="CLEANTECH, NOT ONLY IN COMMITMENTS"
              as="h2"
              theme="light"
              trigger="inView"
              className="text-[32px] font-extrabold tracking-[-1.5px] uppercase text-slate-900 leading-[1.05] mb-6"
              wordColorMap={{
                CLEANTECH: 'rgb(0, 86, 184)',
                "CLEANTECH,": 'rgb(0, 86, 184)',
              }}
            />
            <p className="text-[14px] leading-relaxed text-slate-500 font-normal max-w-xs">
              Realized physical systems displacing carbon and reducing waste in daily commercial food supply chains.
            </p>
          </div>
          <div className="text-slate-300 text-xl font-light pt-8 select-none">↓</div>
        </motion.div>
      </div>

      {/* Slide 3: CLEAN ARCHITECTURE */}
      <div className="min-h-[80vh] flex flex-col justify-center py-12 bg-white text-slate-900 border-b border-slate-100 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col text-left h-full justify-between"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
              MODULE 01
            </span>
            <WordColorReveal
              text="CLEAN ARCHITECTURE"
              as="h3"
              theme="light"
              trigger="inView"
              className="text-[30px] font-extrabold tracking-[-1px] uppercase text-slate-900 leading-none mb-6"
              wordColorMap={{
                CLEAN: 'rgb(0, 86, 184)',
              }}
            />
            <p className="text-[14px] leading-relaxed text-slate-500 font-normal max-w-xs mb-6">
              Connects to the entire clean stack for zero-loss distribution across logistics networks.
            </p>
            <div className="border-t border-slate-200 pt-4">
              <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">POWERED BY</span>
              <span className="text-xs font-semibold text-slate-800">Off-grid solar generation &amp; local battery storage</span>
            </div>
          </div>
          <div className="text-slate-300 text-xl font-light pt-8 select-none">↓</div>
        </motion.div>
      </div>

      {/* Slide 4: SYSTEM DIAGRAM */}
      <div className="min-h-[80vh] flex flex-col justify-center py-12 bg-white text-slate-900 border-b border-slate-100 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col text-left h-full justify-between"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
              SCHEMATIC
            </span>
            <WordColorReveal
              text="SYSTEM DIAGRAM"
              as="h3"
              theme="light"
              trigger="inView"
              className="text-xl font-bold text-slate-900 tracking-tight leading-none uppercase mb-6"
              wordColorMap={{
                SYSTEM: 'rgb(0, 86, 184)',
              }}
            />
            
            {/* SVG Schematic */}
            <svg viewBox="0 0 320 180" className="w-full max-w-sm stroke-slate-900 fill-none mt-4 border border-slate-200 p-4 bg-white" style={{ fontFamily: 'monospace' }}>
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" stroke="none" />
              
              {/* Nodes */}
              <rect x="15" y="20" width="80" height="40" strokeWidth="1" />
              <text x="55" y="42" textAnchor="middle" fontSize="8" fontWeight="bold" stroke="none" fill="currentColor">SOLAR HUBS</text>
              <text x="55" y="50" textAnchor="middle" fontSize="6" stroke="none" fill="currentColor" opacity="0.6">120+ Nodes</text>
              
              <rect x="120" y="70" width="80" height="40" strokeWidth="1" />
              <text x="160" y="92" textAnchor="middle" fontSize="8" fontWeight="bold" stroke="none" fill="currentColor">daraOS</text>
              <text x="160" y="100" textAnchor="middle" fontSize="6" stroke="none" fill="currentColor" opacity="0.6">Orchestration</text>
              
              <rect x="225" y="120" width="80" height="40" strokeWidth="1" />
              <text x="265" y="142" textAnchor="middle" fontSize="8" fontWeight="bold" stroke="none" fill="currentColor">EV FLEET</text>
              <text x="265" y="150" textAnchor="middle" fontSize="6" stroke="none" fill="currentColor" opacity="0.6">Diesel Cut</text>
              
              {/* Connection Lines */}
              <path d="M 95 40 L 160 40 L 160 70" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 160 110 L 160 140 L 225 140" strokeWidth="1" />
              
              {/* Telemetry back loop */}
              <path d="M 265 120 L 265 90 L 200 90" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
              
              <text x="100" y="34" fontSize="5" stroke="none" fill="currentColor" opacity="0.5">POWER</text>
              <text x="220" y="96" fontSize="5" stroke="none" fill="currentColor" opacity="0.5">TELEMETRY</text>
              <text x="180" y="134" fontSize="5" stroke="none" fill="currentColor" opacity="0.5">DISPATCH</text>
            </svg>
          </div>
          <div className="text-slate-300 text-xl font-light pt-8 select-none">↓</div>
        </motion.div>
      </div>

      {/* Slide 5: 45% DIESEL DISPLACED */}
      <div className="min-h-[80vh] flex flex-col justify-center py-12 bg-white text-slate-900 border-b border-slate-100 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col text-left h-full justify-between"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
              IMPACT
            </span>
            <WordColorReveal
              text="45%"
              as="div"
              theme="light"
              trigger="inView"
              className="text-[72px] font-mono font-extrabold tracking-tighter text-[rgb(0,86,184)] leading-none mb-4"
              revealColor="rgb(0, 86, 184)"
            />
            <WordColorReveal
              text="DIESEL DISPLACED"
              as="h3"
              theme="light"
              trigger="inView"
              className="text-xl font-bold uppercase text-slate-900 tracking-tight leading-none mb-6"
              wordColorMap={{
                DIESEL: 'rgb(0, 86, 184)',
              }}
            />
            <p className="text-[14px] leading-relaxed text-slate-500 font-normal max-w-xs mb-6">
              Electric fleet integration displaces 45% of standard diesel fuel consumption across delivery corridors.
            </p>
            <div className="border-t border-slate-200 pt-4">
              <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">THERMAL EFFICIENCY</span>
              <span className="text-xs font-semibold text-slate-800">1.6x compared to standard cold chain operations</span>
            </div>
          </div>
          <div className="text-slate-300 text-xl font-light pt-8 select-none">↓</div>
        </motion.div>
      </div>

      {/* Slide 6: DARAOS V2.4 */}
      <div className="min-h-[80vh] flex flex-col justify-center py-12 bg-white text-slate-900 border-b border-slate-100 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col text-left h-full justify-between"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
              SOFTWARE LAYER
            </span>
            <WordColorReveal
              text="DARAOS V2.4"
              as="h3"
              theme="light"
              trigger="inView"
              className="text-[30px] font-extrabold tracking-[-1px] uppercase text-slate-900 leading-none mb-6"
              wordColorMap={{
                DARAOS: 'rgb(0, 86, 184)',
              }}
            />
            <p className="text-[14px] leading-relaxed text-slate-500 font-normal max-w-xs mb-6">
              Native cloud orchestration system managing software dispatch, real-time load booking, and route analysis.
            </p>
            <div className="border-t border-slate-200 pt-4">
              <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">CAPABILITY</span>
              <span className="text-xs font-semibold text-slate-800">Physical hubs and electric vehicles coordinated under a single operating standard</span>
            </div>
          </div>
          <div className="text-slate-300 text-xl font-light pt-8 select-none">↓</div>
        </motion.div>
      </div>

      {/* Slide 7: Pillars List */}
      <div className="min-h-[80vh] flex flex-col justify-center py-12 bg-white text-slate-900 border-b border-slate-100 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col text-left h-full justify-between"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
              SYSTEM PILLARS
            </span>
            <WordColorReveal
              text="CORE INFRASTRUCTURE"
              as="h3"
              theme="light"
              trigger="inView"
              className="text-xl font-bold uppercase text-slate-900 tracking-tight leading-none mb-8"
              wordColorMap={{
                CORE: 'rgb(0, 86, 184)',
              }}
            />
            
            <div className="flex flex-col gap-6">
              <div className="border-l border-slate-300 pl-4">
                <div className="text-xs font-mono font-bold text-[rgb(0,86,184)] uppercase mb-1">01 SOLAR</div>
                <p className="text-[12px] text-slate-500 leading-relaxed m-0 font-normal">
                  Distributed solar cooling independent of fragile municipal power grids.
                </p>
              </div>
              <div className="border-l border-slate-300 pl-4">
                <div className="text-xs font-mono font-bold text-[rgb(0,86,184)] uppercase mb-1">02 TELEMETRY</div>
                <p className="text-[12px] text-slate-500 leading-relaxed m-0 font-normal">
                  Real-time monitoring of temperature, battery health, and transit security at every node.
                </p>
              </div>
              <div className="border-l border-slate-300 pl-4">
                <div className="text-xs font-mono font-bold text-[rgb(0,86,184)] uppercase mb-1">03 INFRASTRUCTURE</div>
                <p className="text-[12px] text-slate-500 leading-relaxed m-0 font-normal">
                  Unified physical infrastructure stack deployed across regional corridors.
                </p>
              </div>
            </div>
          </div>
          <div className="text-slate-300 text-xl font-light pt-8 select-none">↓</div>
        </motion.div>
      </div>

      {/* Slide 8: Measured Performance */}
      <div className="min-h-[85vh] flex flex-col justify-center py-12 bg-white text-slate-900 border-b border-slate-100 last:border-b-0 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col text-left h-full justify-between"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
              METRICS
            </span>
            <WordColorReveal
              text="MEASURED PERFORMANCE"
              as="h3"
              theme="light"
              trigger="inView"
              className="text-xl font-bold text-slate-900 tracking-tight leading-none uppercase mb-8"
              wordColorMap={{
                MEASURED: 'rgb(0, 86, 184)',
              }}
            />
            
            {/* 2x2 Grid with thin borders */}
            <div className="grid grid-cols-2 border-t border-l border-slate-200">
              <div className="p-6 border-r border-b border-slate-200">
                <WordColorReveal
                  text="99.8%"
                  as="div"
                  theme="light"
                  trigger="inView"
                  className="text-[36px] font-mono font-bold tracking-tight text-slate-900 leading-none"
                  revealColor="rgb(0, 86, 184)"
                />
                <div className="text-[8px] font-bold tracking-widest text-slate-400 uppercase mt-2">
                  Cold Chain Integrity
                </div>
              </div>
              <div className="p-6 border-r border-b border-slate-200">
                <WordColorReveal
                  text="45%"
                  as="div"
                  theme="light"
                  trigger="inView"
                  className="text-[36px] font-mono font-bold tracking-tight text-slate-900 leading-none"
                  revealColor="rgb(0, 86, 184)"
                />
                <div className="text-[8px] font-bold tracking-widest text-slate-400 uppercase mt-2">
                  Diesel Displaced
                </div>
              </div>
              <div className="p-6 border-r border-b border-slate-200">
                <WordColorReveal
                  text="0"
                  as="div"
                  theme="light"
                  trigger="inView"
                  className="text-[36px] font-mono font-bold tracking-tight text-slate-900 leading-none"
                  revealColor="rgb(0, 86, 184)"
                />
                <div className="text-[8px] font-bold tracking-widest text-slate-400 uppercase mt-2">
                  Temp Excursions
                </div>
              </div>
              <div className="p-6 border-r border-b border-slate-200">
                <WordColorReveal
                  text="120+"
                  as="div"
                  theme="light"
                  trigger="inView"
                  className="text-[36px] font-mono font-bold tracking-tight text-slate-900 leading-none"
                  revealColor="rgb(0, 86, 184)"
                />
                <div className="text-[8px] font-bold tracking-widest text-slate-400 uppercase mt-2">
                  Solar Nodes
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  )
}
