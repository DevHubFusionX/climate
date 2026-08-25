import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import heroBgSrc from '../../../assets/images/hero.webp'
import { fadeInUp } from '../../../utils/motion'
import WordColorReveal from '../../../components/ui/WordColorReveal'
import Button from '../../../components/ui/Button'
import SkewButton from '../../../components/ui/SkewButton'

// Tiny 20px-wide blurred LQIP — renders in <1ms, no network request
const HERO_LQIP = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgT/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIREv/EABgBAQADAQAAAAAAAAAAAAAAAAEAAwUC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwB8o16z4KnUEqUrhlmuMaUilZE4BVxDox//2Q=='

export default function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = heroBgSrc
    img.onload = () => setBgLoaded(true)
  }, [])

  return (
    /* ── Sticky full-viewport panel ───────────────────────
       Challenge section slides over this from below.
    ─────────────────────────────────────────────────────── */
    <div className="w-full bg-white">
      <div className="sticky top-0 z-[1] w-full h-[100dvh] min-h-[100dvh] overflow-hidden">
        {/* LQIP blur placeholder — visible instantly */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${HERO_LQIP})`,
            filter: 'blur(12px)',
            transform: 'scale(1.05)',
          }}
        />

        {/* Full WebP — fades in once loaded */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: bgLoaded ? 1 : 1.05, opacity: bgLoaded ? 1 : 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-[transform,opacity]"
          style={{ backgroundImage: `url(${heroBgSrc})` }}
        />

        {/* Dark navy overlay for contrast & readability */}
        <div className="absolute inset-0 bg-[rgba(10,18,45,0.78)]" />

        {/* Content — sits above bg + overlay */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1240px] grid grid-cols-1 gap-8 px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-12">
            {/* Left column */}
            <div>
              {/* Badge pill */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
                className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[1.5px] uppercase text-white/70"
              >
                Clean Energy &bull; Intelligent Refrigeration &bull; Smarter Movement
              </motion.div>

              {/* Headline with word-by-word text color reveal */}
              <WordColorReveal
                as="h1"
                theme="dark"
                trigger="load"
                text="Building Africa's Climate-Smart Cold Chain."
                delay={0.25}
                stagger={0.09}
                duration={0.75}
                baseColor="rgba(255, 255, 255, 0.2)"
                revealColor="#ffffff"
                className="m-0 text-[clamp(2.2rem,5vw,4.5rem)] lg:text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white"
                wordColorMap={{
                  "Cold": 'rgb(0, 86, 184)',
                  "Chain.": 'rgb(0, 86, 184)'
                }}
              />
            </div>

            {/* Right column */}
            {/* Right column */}
            <div className="flex flex-col justify-end lg:pb-3">
              {/* Sub-text with progressive word color illumination */}
              <WordColorReveal
                as="p"
                theme="dark"
                trigger="load"
                text="Combining off-grid solar refrigeration and electric transport under one native operating system to move and preserve critical cargo."
                delay={0.65}
                stagger={0.06}
                duration={0.75}
                baseColor="rgba(255, 255, 255, 0.25)"
                revealColor="rgba(255, 255, 255, 0.88)"
                blur={false}
                yOffset={4}
                className="mb-6 sm:mb-8 max-w-[480px] text-[13.5px] sm:text-[15.5px] lg:text-[17px] leading-relaxed text-white/85"
              />

              {/* CTA buttons */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.55}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  text="Ship With Dara"
                  href="#partner"
                  variant="brand"
                  iconBg="#ffffff"
                  dotColor="rgb(0, 86, 184)"
                />
                <SkewButton
                  text="Explore DaraOS"
                  href="#daraos"
                  variant="hero"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
