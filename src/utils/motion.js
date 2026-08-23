export const easeDara = [0.16, 1, 0.3, 1]

// Optimized viewport detection for immediate, buttery-smooth trigger on mobile
export const viewportConfig = {
  once: true,
  amount: 0.05,
  margin: '0px 0px -40px 0px',
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: typeof custom === 'number' ? custom * 0.08 : 0,
      ease: easeDara,
    },
  }),
}

export const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: typeof custom === 'number' ? custom * 0.08 : 0,
      ease: easeDara,
    },
  }),
}

export const staggerContainer = (staggerTime = 0.1, delayChildren = 0.04) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: typeof staggerTime === 'number' ? staggerTime : 0.1,
      delayChildren: typeof delayChildren === 'number' ? delayChildren : 0.04,
    },
  },
})

export const cardHover = {
  y: -5,
  transition: {
    duration: 0.25,
    ease: easeDara,
  },
}

export const buttonHover = {
  scale: 1.02,
  y: -2,
  transition: {
    duration: 0.2,
    ease: easeDara,
  },
}

export const buttonTap = {
  scale: 0.98,
}

export const wordRevealContainer = (delay = 0.15, stagger = 0.05) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: typeof stagger === 'number' ? stagger : 0.05,
      delayChildren: typeof delay === 'number' ? delay : 0.15,
    },
  },
})

export const wordRevealItem = {
  hidden: {
    color: 'rgba(255, 255, 255, 0.2)',
    opacity: 0.25,
    y: 4,
  },
  visible: (customColor = '#ffffff') => ({
    color: customColor,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeDara,
    },
  }),
}

