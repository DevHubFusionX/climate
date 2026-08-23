import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function useVisible(threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

const ecosystemLinks = [
  { label: 'Solar Refrigeration', to: '/' },
  { label: 'Electric Fleet', to: '/' },
  { label: 'Smart Cold Storage', to: '/' },
  { label: 'IoT Intelligence', to: '/' },
  { label: 'DaraOS Orchestration', to: '/#daraos' },
]

const infrastructureLinks = [
  { label: 'Climate Hub Model', to: '/infrastructure' },
  { label: 'Asset-Efficient Network', to: '/infrastructure' },
  { label: 'Impact Measurement', to: '/infrastructure' },
  { label: 'Commercial Benefits', to: '/infrastructure' },
]

const contactInfo = [
  {
    icon: (
      <svg className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    lines: ['+234 811 577 9007', '+234 912 116 8485'],
  },
  {
    icon: (
      <svg className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    lines: ['hello@daraexpress.com'],
  },
  {
    icon: (
      <svg className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    lines: ['MJS House, 366 Murtala Muhammed Road, Yaba, Lagos'],
  },
]

export default function Footer() {
  const [footerRef, visible] = useVisible(0.08)
  const wordmark = "Dara Climate"

  return (
    <footer
      ref={footerRef}
      className="relative z-10 bg-[rgb(0,86,184)] text-white px-6 sm:px-12 lg:px-20 pt-16 md:pt-24 pb-12 font-sans overflow-hidden border-t border-white/10"
      style={{
        background: 'linear-gradient(175deg, rgb(0, 86, 184) 0%, rgb(0, 58, 135) 60%, rgb(0, 32, 90) 100%)'
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, rgba(0, 86, 184, 0) 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── TOP SECTION: Large Headline & Action ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 md:pb-16 border-b border-white/15">
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
              Climate-Smart Cold Chain
            </div>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.12] tracking-tight text-white m-0 max-w-2xl">
              Start moving and preserving with Dara.
            </h2>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#partner"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[rgb(0,86,184)] hover:bg-blue-50 active:scale-98 font-bold rounded-full text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                Partner with Dara
              </a>
              <a
                href="#technology"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white hover:bg-white/10 active:scale-98 font-semibold rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Technology
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right lg:pt-4">
            <p className="text-blue-100/75 text-sm sm:text-base leading-relaxed max-w-sm m-0">
              Clean energy, intelligent refrigeration, electric mobility, and logistics software for Africa's temperature-sensitive economy.
            </p>
          </div>
        </div>

        {/* ── MIDDLE SECTION: Links Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 py-12 md:py-16 text-left border-b border-white/15">

          {/* Column 1: Ecosystem */}
          <div className="col-span-1">
            <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              Ecosystem
            </p>
            <ul className="space-y-3 p-0 m-0 list-none">
              {ecosystemLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors duration-200 no-underline inline-block hover:translate-x-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Infrastructure */}
          <div className="col-span-1">
            <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              Infrastructure
            </p>
            <ul className="space-y-3 p-0 m-0 list-none">
              {infrastructureLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors duration-200 no-underline inline-block hover:translate-x-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-span-1">
            <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              Direct Contact
            </p>
            <ul className="space-y-4 p-0 m-0 list-none">
              {contactInfo.map(({ icon, lines }, i) => (
                <li key={i} className="flex items-start gap-3">
                  {icon}
                  <div className="space-y-0.5">
                    {lines.map((l) => (
                      <p key={l} className="text-xs sm:text-sm text-white/85 m-0 leading-tight">
                        {l}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="col-span-1">
            <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/company/darafort-global-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors duration-200 no-underline"
              >
                <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://instagram.com/dara.express"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors duration-200 no-underline"
              >
                <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* ── BOTTOM SHOWPIECE: Wordmark with Animated Refrigerated Truck ── */}
        <div className="hidden md:flex w-full items-center justify-center py-16 select-none overflow-hidden text-center relative">
          <div className="flex items-center justify-center gap-4 group transition-all duration-700 cursor-default relative">

            {/* Letter reveal */}
            <div className="flex items-center select-none tracking-tighter relative z-0">
              {wordmark.split('').map((char, index) => {
                const totalChars = wordmark.length
                const delay = 0.2 + (index / totalChars) * 1.8
                return (
                  <span
                    key={index}
                    className="inline-block font-black text-white/95 leading-none tracking-tighter text-[8vw] select-none transition-all duration-700"
                    style={{
                      textShadow: '0px 10px 35px rgba(0, 0, 0, 0.25)',
                      whiteSpace: char === ' ' ? 'pre' : 'normal',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(36px)',
                      transitionDelay: `${delay}s`,
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {char}
                  </span>
                )
              })}
            </div>

            {/* Refrigerated Clean Electric Truck SVG */}
            <div
              className="flex items-center relative z-10 self-center transition-all duration-[2200ms]"
              style={{
                transform: visible ? 'translateX(0)' : 'translateX(-50vw)',
                opacity: visible ? 1 : 0,
                transitionDelay: '0.2s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Electric / Speed lines fading out */}
              <div
                className="absolute right-full mr-2 flex flex-col gap-1 items-end transition-opacity duration-1000"
                style={{ opacity: visible ? 0 : 0.85, transitionDelay: '2.4s' }}
              >
                <div className="w-16 h-[2.5px] bg-gradient-to-l from-[#4ade80] to-transparent rounded-full" />
                <div className="w-24 h-[3px] bg-gradient-to-l from-white/80 to-transparent rounded-full" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-[#4ade80] to-transparent rounded-full" />
              </div>

              {/* Truck SVG Icon */}
              <svg
                viewBox="0 0 612 612"
                fill="currentColor"
                className="w-[6vw] h-[6vw] text-white/90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              >
                <g>
                  <path d="M226.764,375.35c-28.249,0-51.078,22.91-51.078,51.16c0,28.166,22.829,51.078,51.078,51.078s51.078-22.912,51.078-51.078 C277.841,398.26,255.013,375.35,226.764,375.35z M226.764,452.049c-14.125,0-25.54-11.498-25.54-25.541 c0-14.123,11.415-25.539,25.54-25.539c14.124,0,25.539,11.416,25.539,25.539C252.302,440.551,240.888,452.049,226.764,452.049z M612,337.561v54.541c0,13.605-11.029,24.635-24.636,24.635h-26.36c-4.763-32.684-32.929-57.812-66.927-57.812 c-33.914,0-62.082,25.129-66.845,57.812H293.625c-4.763-32.684-32.93-57.812-66.845-57.812c-33.915,0-62.082,25.129-66.845,57.812 h-33.012c-13.606,0-24.635-11.029-24.635-24.635v-54.541H612L612,337.561z M494.143,375.35c-28.249,0-51.16,22.91-51.16,51.16 c0,28.166,22.912,51.078,51.16,51.078c28.166,0,51.077-22.912,51.077-51.078C545.22,398.26,522.309,375.35,494.143,375.35z M494.143,452.049c-14.125,0-25.539-11.498-25.539-25.541c0-14.123,11.414-25.539,25.539-25.539 c14.042,0,25.539,11.416,25.539,25.539C519.682,440.551,508.185,452.049,494.143,452.049z M602.293,282.637l-96.817-95.751 c-6.159-6.077-14.453-9.526-23.076-9.526h-48.86v-18.313c0-13.631-11.004-24.635-24.635-24.635H126.907 c-13.55,0-24.635,11.005-24.635,24.635v3.86L2.3,174.429l177.146,23.068L0,215.323l178.814,25.423L0,256.25l102.278,19.29 l-0.007,48.403h509.712v-17.985C611.983,297.171,608.452,288.796,602.293,282.637z M560.084,285.839h-93.697 c-2.135,0-3.86-1.724-3.86-3.859v-72.347c0-2.135,1.725-3.86,3.86-3.86h17.82c0.985,0,1.971,0.411,2.71,1.068l75.796,72.347 C565.257,281.569,563.532,285.839,560.084,285.839z"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* ── COPYRIGHT ROW ── */}
        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-blue-100/60">
          <p className="m-0">
            © {new Date().getFullYear()} Dara Climate Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-200 no-underline text-blue-100/60">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors duration-200 no-underline text-blue-100/60">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
