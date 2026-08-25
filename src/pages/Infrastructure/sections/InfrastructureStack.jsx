import React from 'react'
import StackDesktopView from './stack/StackDesktopView'
import StackMobileView from './stack/StackMobileView'

export default function InfrastructureStack() {
  return (
    <section
      id="stack"
      className="relative z-10 bg-[#fbfbfa] overflow-hidden border-t border-slate-200/50"
    >
      {/* Background Decorative Flow Curves */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full text-blue-900/[0.03] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 200 C 300 150, 400 450, 800 320 C 1200 190, 1300 500, 1600 400"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <path
          d="M-50 650 C 250 500, 450 780, 850 620 C 1250 460, 1400 700, 1550 580"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M100 80 C 400 300, 200 600, 700 750"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* Responsive View Sub-components */}
      <StackDesktopView />
      <StackMobileView />
    </section>
  )
}
