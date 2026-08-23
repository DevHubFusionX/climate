import React from 'react'
import { motion } from 'framer-motion'
import { easeDara } from '../../utils/motion'

/**
 * WordColorReveal - Animates text word-by-word, sequentially transitioning
 * each word from a dimmed/muted initial tone to its full vibrant color.
 *
 * @param {string|string[]} text - Text string or array of line strings
 * @param {string} className - Wrapper element class names
 * @param {string} as - HTML tag to render ('h1', 'h2', 'p', 'div', 'span')
 * @param {'light'|'dark'} theme - Color scheme: 'light' (slate-900 on light bg) or 'dark' (white on dark bg)
 * @param {string} baseColor - Custom override for unrevealed muted color
 * @param {string} revealColor - Custom override for primary revealed text color
 * @param {number} delay - Initial start delay in seconds
 * @param {number} stagger - Stagger delay between consecutive words in seconds
 * @param {number} duration - Transition duration for each word in seconds
 * @param {boolean} blur - Whether to include subtle optical de-blur
 * @param {number} yOffset - Subtle vertical rise distance in px
 * @param {Object} wordColorMap - Optional map of specific words to custom colors
 * @param {'inView'|'load'} trigger - Trigger type: 'inView' (when scrolled into viewport) or 'load' (immediate on mount)
 * @param {Object} viewport - Framer motion viewport configuration
 */
export default function WordColorReveal({
  text,
  className = '',
  as = 'h2',
  theme = 'light',
  baseColor,
  revealColor,
  delay = 0.15,
  stagger = 0.07,
  duration = 0.55,
  blur = true,
  yOffset = 4,
  wordColorMap = {},
  trigger = 'inView',
  viewport = { once: true, amount: 0.2 },
  ...props
}) {
  const isDark = theme === 'dark'
  const computedBaseColor = baseColor || (isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.18)')
  const computedRevealColor = revealColor || (isDark ? '#ffffff' : '#0f172a')

  const lines = Array.isArray(text) ? text : [text]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      color: computedBaseColor,
      opacity: 0.28,
      y: yOffset,
      filter: blur ? 'blur(3px)' : 'blur(0px)',
    },
    visible: (customColor) => ({
      color: customColor || computedRevealColor,
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: easeDara,
      },
    }),
  }

  const MotionComponent = motion[as] || motion.div

  const animationProps = trigger === 'load'
    ? { initial: 'hidden', animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport }

  return (
    <MotionComponent
      variants={containerVariants}
      {...animationProps}
      className={className}
      {...props}
    >
      {lines.map((line, lineIndex) => {
        const words = typeof line === 'string' ? line.trim().split(/\s+/) : []
        const isMultiLine = lines.length > 1

        return (
          <span
            key={lineIndex}
            className={isMultiLine ? 'block' : 'inline'}
          >
            {words.map((word, wordIndex) => {
              const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
              const customColor =
                wordColorMap[word] ||
                wordColorMap[cleanWord] ||
                computedRevealColor

              return (
                <motion.span
                  key={`${lineIndex}-${wordIndex}`}
                  variants={wordVariants}
                  custom={customColor}
                  className="inline-block mr-[0.26em] will-change-[color,opacity,transform,filter]"
                >
                  {word}
                </motion.span>
              )
            })}
          </span>
        )
      })}
    </MotionComponent>
  )
}
