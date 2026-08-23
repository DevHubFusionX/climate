import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * ArrowDotPillButton (Button)
 *
 * Modern interactive pill button with a circular dot-matrix arrow badge that
 * pulses on hover, fully configurable with themes (dark, brand, emerald, white).
 *
 * @param {string} text - Button label text (e.g. "Let's go!", "Ship With Dara")
 * @param {string} href - Optional link URL (renders as <a> or react-router <Link> if provided)
 * @param {string} to - Optional React Router destination
 * @param {function} onClick - Click handler
 * @param {'dark'|'brand'|'emerald'|'white'} variant - Preset styling theme
 * @param {string} iconBg - Custom background color for the circular badge
 * @param {string} dotColor - Custom color for the SVG dot-matrix arrow
 * @param {string} className - Additional CSS class names
 */
export default function Button({
  text = "let's go!",
  children,
  href,
  to,
  onClick,
  variant = 'dark',
  iconBg,
  dotColor,
  className = '',
  ...props
}) {
  const label = children || text
  const targetLink = to || href

  // Variant themes
  const variantStyles = {
    dark: {
      btnBg: 'bg-[#1d2129] hover:bg-[#272c37] text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)]',
      defaultIconBg: '#4ade80',
      defaultDotColor: '#1d2129',
      border: 'border border-slate-700/50',
    },
    brand: {
      btnBg: 'bg-[rgb(0,86,184)] hover:bg-[rgb(0,72,160)] text-white shadow-[0_4px_18px_rgba(0,86,184,0.35)]',
      defaultIconBg: '#4ade80',
      defaultDotColor: '#0b2341',
      border: 'border border-white/20',
    },
    emerald: {
      btnBg: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_4px_18px_rgba(16,185,129,0.35)]',
      defaultIconBg: '#ffffff',
      defaultDotColor: '#065f46',
      border: 'border border-white/20',
    },
    white: {
      btnBg: 'bg-white hover:bg-slate-50 text-slate-900 shadow-[0_4px_18px_rgba(0,0,0,0.08)]',
      defaultIconBg: '#1d2129',
      defaultDotColor: '#ffffff',
      border: 'border border-slate-200/80',
    },
  }

  const currentTheme = variantStyles[variant] || variantStyles.dark
  const resolvedIconBg = iconBg || currentTheme.defaultIconBg
  const resolvedDotColor = dotColor || currentTheme.defaultDotColor

  const handleClick = (e) => {
    if (onClick) onClick(e)

    if (targetLink && targetLink.startsWith('#')) {
      e.preventDefault()
      const element = document.getElementById(targetLink.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const isInternalRoute = targetLink && targetLink.startsWith('/') && !targetLink.startsWith('//')

  const buttonContent = (
    <>
      {/* Label Text */}
      <span className="font-semibold text-[14px] sm:text-[15px] tracking-[0.6px] whitespace-nowrap">
        {label}
      </span>

      {/* Circular Dot-Matrix Arrow Badge */}
      <span
        className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm shrink-0"
        style={{
          backgroundColor: resolvedIconBg,
        }}
      >
        <svg
          width={16}
          height={19}
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:translate-x-0.5 animate-dot-arrow"
        >
          <circle cx="1.61321" cy="1.61321" r="1.5" fill={resolvedDotColor} />
          <circle cx="5.73583" cy="1.61321" r="1.5" fill={resolvedDotColor} />
          <circle cx="5.73583" cy="5.5566" r="1.5" fill={resolvedDotColor} />
          <circle cx="9.85851" cy="5.5566" r="1.5" fill={resolvedDotColor} />
          <circle cx="9.85851" cy="9.5" r="1.5" fill={resolvedDotColor} />
          <circle cx="13.9811" cy="9.5" r="1.5" fill={resolvedDotColor} />
          <circle cx="5.73583" cy="13.4434" r="1.5" fill={resolvedDotColor} />
          <circle cx="9.85851" cy="13.4434" r="1.5" fill={resolvedDotColor} />
          <circle cx="1.61321" cy="17.3868" r="1.5" fill={resolvedDotColor} />
          <circle cx="5.73583" cy="17.3868" r="1.5" fill={resolvedDotColor} />
        </svg>
      </span>
    </>
  )

  const commonClass = `group relative inline-flex items-center justify-between gap-3 pl-6 pr-1.5 py-1.5 rounded-full no-underline cursor-pointer transition-all duration-300 select-none ${currentTheme.btnBg} ${currentTheme.border} ${className}`

  if (isInternalRoute) {
    return (
      <Link to={targetLink} className={commonClass} onClick={handleClick} {...props}>
        {buttonContent}
      </Link>
    )
  }

  if (targetLink) {
    return (
      <motion.a
        href={targetLink}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={commonClass}
        {...props}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={commonClass}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}
