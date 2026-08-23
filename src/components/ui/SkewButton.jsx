import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * SkewButton - Dual-skew sliding curtain hover animation button
 * Custom styled with Dara brand colors.
 *
 * @param {string} text - Button label text (e.g. "Explore DaraOS", "Learn More")
 * @param {string} href - Optional link URL
 * @param {string} to - Optional React Router link destination
 * @param {function} onClick - Optional click handler
 * @param {'hero'|'brand'|'emerald'} variant - Color preset
 * @param {string} className - Additional CSS classes
 */
export default function SkewButton({
  text = 'Learn More',
  children,
  href,
  to,
  onClick,
  variant = 'hero',
  className = '',
  ...props
}) {
  const label = children || text
  const targetLink = to || href

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

  const variantClass =
    variant === 'brand'
      ? 'skew-btn-brand'
      : variant === 'emerald'
      ? 'skew-btn-emerald'
      : 'skew-btn-hero'

  const baseClass = `skew-btn ${variantClass} px-7 py-[13px] text-[14px] sm:text-[15px] font-semibold ${className}`

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {label}
    </span>
  )

  if (isInternalRoute) {
    return (
      <Link to={targetLink} className={baseClass} onClick={handleClick} {...props}>
        {content}
      </Link>
    )
  }

  if (targetLink) {
    return (
      <motion.a
        href={targetLink}
        onClick={handleClick}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={baseClass}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={baseClass}
      {...props}
    >
      {content}
    </motion.button>
  )
}
