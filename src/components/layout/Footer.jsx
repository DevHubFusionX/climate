import React from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '../../assets/white.svg'

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
    lines: [
      { text: '+234 811 577 9007', href: 'tel:+2348115779007' },
      { text: '+234 912 116 8485', href: 'tel:+2349121168485' },
    ],
  },
  {
    icon: (
      <svg className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    lines: [
      { text: 'contact@darafort.com', href: 'mailto:contact@darafort.com' },
      { text: 'hello@darafort.com', href: 'mailto:hello@darafort.com' },
    ],
  },
  {
    icon: (
      <svg className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    lines: [
      {
        text: 'MJS House, 366 Murtala Muhammed Road, Yaba, Lagos',
        href: 'https://maps.google.com/?q=MJS+House,+366+Murtala+Muhammed+Road,+Yaba,+Lagos',
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    ],
  },
]


export default function Footer() {
  return (
    <footer
      className="relative z-10 bg-[rgb(0,86,184)] text-white px-4 sm:px-10 lg:px-20 pt-8 sm:pt-12 pb-12 font-sans overflow-hidden border-t border-white/10"
      style={{
        background: 'linear-gradient(175deg, rgb(0, 86, 184) 0%, rgb(0, 58, 135) 60%, rgb(0, 32, 90) 100%)'
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, rgba(0, 86, 184) 0%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── MOBILE HEADER & CONTACT BAR (Mobile Only) ── */}
        <div className="flex md:hidden flex-col gap-6 py-8 border-b border-white/15 text-left">
          <Link to="/" aria-label="Dara Home" className="inline-block no-underline">
            <img src={whiteLogo} alt="Dara logo" className="h-[20px] w-auto object-contain" />
          </Link>

          <div className="flex flex-col gap-4 text-xs text-white/85">
            {contactInfo.map(({ icon, lines }, i) => (
              <div key={i} className="flex items-start gap-3">
                {icon}
                <div className="flex flex-col gap-1.5">
                  {lines.map((l) => {
                    const isMono = l.href && (l.href.startsWith('tel:') || l.href.startsWith('mailto:'));
                    return l.href ? (
                      <a
                        key={l.text}
                        href={l.href}
                        target={l.target}
                        rel={l.rel}
                        className={`text-white/90 hover:text-[#4ade80] no-underline transition-colors leading-tight block ${isMono ? 'font-mono' : 'font-sans'}`}
                      >
                        {l.text}
                      </a>
                    ) : (
                      <span key={l.text} className="text-white/85 leading-tight">
                        {l.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.linkedin.com/company/darafort-global-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs no-underline hover:bg-white/20 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://instagram.com/dara.express"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs no-underline hover:bg-white/20 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* ── MIDDLE SECTION: Desktop Links Grid (Hidden on Mobile) ── */}
        <div className="hidden md:grid grid-cols-12 gap-8 lg:gap-12 py-12 md:py-16 text-left border-b border-white/15">

          {/* Column 1: Brand & Mission */}
          <div className="col-span-6 lg:col-span-3 pr-6">
            <Link to="/" aria-label="Dara Home" className="inline-block no-underline mb-4 transition-transform hover:-translate-y-0.5">
              <img src={whiteLogo} alt="Dara logo" className="h-[24px] lg:h-[26px] w-auto object-contain" />
            </Link>
            <p className="text-xs sm:text-[13px] leading-relaxed text-white/75 max-w-xs m-0">
              Building Africa's climate-smart cold chain through solar refrigeration, electric mobility, and intelligent IoT orchestration.
            </p>
          </div>

          {/* Column 2: Ecosystem */}
          <div className="col-span-3 lg:col-span-2">
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

          {/* Column 3: Infrastructure */}
          <div className="col-span-3 lg:col-span-2">
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

          {/* Column 4: Direct Contact */}
          <div className="col-span-6 lg:col-span-3">
            <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              Direct Contact
            </p>
            <ul className="space-y-4 p-0 m-0 list-none">
              {contactInfo.map(({ icon, lines }, i) => (
                <li key={i} className="flex items-start gap-3">
                  {icon}
                  <div className="space-y-1">
                    {lines.map((l) => {
                      const isMono = l.href && (l.href.startsWith('tel:') || l.href.startsWith('mailto:'));
                      return l.href ? (
                        <a
                          key={l.text}
                          href={l.href}
                          target={l.target}
                          rel={l.rel}
                          className={`text-xs sm:text-sm text-white/85 hover:text-[#4ade80] transition-colors duration-200 no-underline leading-tight block ${isMono ? 'font-mono' : 'font-sans'}`}
                        >
                          {l.text}
                        </a>
                      ) : (
                        <span key={l.text} className="text-xs sm:text-sm text-white/85 leading-tight block">
                          {l.text}
                        </span>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className="col-span-6 lg:col-span-2">
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
