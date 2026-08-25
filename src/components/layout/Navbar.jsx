import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import whiteLogo from '../../assets/white.svg'
import blackLogo from '../../assets/black.svg'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const lastY = useRef(0)
  const location = useLocation()

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  // Lock background scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastY.current

      if (delta < -6 || currentY < 60) setVisible(true)
      else if (delta > 6 && currentY > 80 && !sidebarOpen) setVisible(false)

      setScrolled(currentY > 40)
      lastY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sidebarOpen])

  const navItems = [
    { label: 'Technology', to: '/' },
    { label: 'Infrastructure', to: '/infrastructure' },
  ]

  return (
    <>
      {/* ── Fixed Floating Top Navbar ───────────────────────── */}
      <nav
        className={[
          // Base layout
          'fixed left-3 right-3 sm:left-6 sm:right-6 top-3 sm:top-4 z-[100]',
          'flex items-center justify-between',
          'px-4 sm:px-8 py-3 sm:py-[14px]',
          'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          // Scroll-hide/show
          visible ? 'translate-y-0' : '-translate-y-[120%]',
          // Background state
          scrolled
            ? 'bg-[#0a122d]/85 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-white/15 backdrop-blur-lg'
            : 'bg-transparent border-b border-white/10 rounded-2xl',
        ].join(' ')}
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Dara Home"
            className="flex items-center transition-all duration-200 hover:-translate-y-px hover:opacity-90 no-underline shrink-0"
          >
            <img
              src={whiteLogo}
              alt="Dara logo"
              className="h-[18px] sm:h-[22px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-3.5">
            <div className="flex items-center gap-6 px-6 py-2 bg-white/10 backdrop-blur-lg border border-white/15 rounded-xl shadow-lg transition-all duration-200 hover:bg-white/15 hover:border-white/25">
              {navItems.map((item) => {
                const isActive =
                  (item.to === '/' && (location.pathname === '/' || location.pathname === '/technology')) ||
                  (item.to === '/infrastructure' && location.pathname === '/infrastructure')

                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`relative text-[13.5px] font-medium tracking-wide py-0.5 transition-colors duration-200 no-underline ${
                      isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                    } after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#4ade80] after:transition-[width] after:duration-200 hover:after:w-full ${
                      isActive ? 'after:w-full' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            <Button
              text="Ship with Dara"
              href="#partner"
              variant="brand"
              iconBg="#ffffff"
              dotColor="rgb(0, 86, 184)"
              className="text-[13px] py-1 pl-4 pr-1 gap-2"
            />
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white transition-colors duration-200 active:scale-95"
              aria-label="Open mobile navigation sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Clean White Sidebar & Backdrop ───────────────── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              key="sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-[105] bg-slate-950/50 backdrop-blur-xs md:hidden"
            />

            {/* White Background Drawer */}
            <motion.div
              key="sidebar-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[110] w-[280px] sm:w-[320px] bg-white text-slate-900 shadow-[-8px_0_30px_rgba(0,0,0,0.12)] border-l border-slate-100 flex flex-col justify-between p-6 md:hidden"
            >
              {/* Top Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <Link
                    to="/"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Dara Home"
                    className="flex items-center no-underline"
                  >
                    <img
                      src={blackLogo}
                      alt="Dara logo"
                      className="h-[18px] sm:h-[20px] w-auto object-contain"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
                    aria-label="Close sidebar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="py-6 flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive =
                      (item.to === '/' && (location.pathname === '/' || location.pathname === '/technology')) ||
                      (item.to === '/infrastructure' && location.pathname === '/infrastructure')

                    return (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl no-underline font-semibold text-[15px] transition-all duration-200 ${
                          isActive
                            ? 'bg-[rgb(0,86,184)] text-white shadow-sm'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight
                          className={`w-4 h-4 ${
                            isActive ? 'text-white' : 'text-slate-400'
                          }`}
                        />
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Bottom Actions & Contact */}
              <div className="pt-5 border-t border-slate-100 flex flex-col gap-4">
                <Button
                  text="Ship with Dara"
                  href="mailto:hello@daraexpress.com?subject=Ship%20With%20Dara"
                  variant="brand"
                  iconBg="#ffffff"
                  dotColor="rgb(0, 86, 184)"
                  className="w-full justify-between py-2.5 text-sm"
                  onClick={() => setSidebarOpen(false)}
                />

                <div className="text-center text-xs text-slate-400">
                  <a
                    href="mailto:hello@daraexpress.com"
                    className="text-slate-600 font-mono hover:text-[rgb(0,86,184)] no-underline transition-colors"
                  >
                    hello@daraexpress.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
