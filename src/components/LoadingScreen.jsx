import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check session storage or display smooth initial loader
    const hasLoaded = sessionStorage.getItem('dara_climate_loaded')

    const timer = setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem('dara_climate_loaded', 'true')
    }, 1400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(8px)',
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#081028] text-white select-none pointer-events-auto"
        >
          {/* Ambient Glows */}
          <div
            className="pointer-events-none absolute w-[400px] h-[400px] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(0, 86, 184, 0.8) 0%, transparent 70%)',
            }}
          />
          <div
            className="pointer-events-none absolute w-[300px] h-[300px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(74, 222, 128, 0.6) 0%, transparent 70%)',
            }}
          />

          {/* 3D Isometric Rotating Boxes */}
          <div className="relative z-10 my-10">
            <div className="boxes">
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>

          {/* Brand Identity & Status */}
          <div className="relative z-10 flex flex-col items-center gap-2 mt-8">
            <div className="flex items-center gap-1.5">
              <span className="text-[24px] font-extrabold tracking-tight text-white">
                dara
              </span>
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            </div>
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-white/50 m-0">
              Climate Infrastructure Network
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
