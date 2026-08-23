export const easeDara = [0.16, 1, 0.3, 1]

export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: typeof custom === 'number' ? custom * 0.15 : 0,
      ease: easeDara,
    },
  }),
}

export const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: typeof custom === 'number' ? custom * 0.15 : 0,
      ease: easeDara,
    },
  }),
}

export const staggerContainer = (staggerTime = 0.16, delayChildren = 0.08) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: typeof staggerTime === 'number' ? staggerTime : 0.16,
      delayChildren: typeof delayChildren === 'number' ? delayChildren : 0.08,
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
