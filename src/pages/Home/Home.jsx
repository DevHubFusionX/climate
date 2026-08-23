import Hero from './sections/Hero'
import Challenge from './sections/Challenge'
import Vision from './sections/Vision'
import Ecosystem from './sections/Ecosystem'
import DaraOS from './sections/DaraOS'
import HowItWorks from './sections/HowItWorks'
import Industries from './sections/Industries'
import ClimateImpact from './sections/ClimateImpact'
import CTA from './sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-white">
        <Challenge />
        <Vision />
        <Ecosystem />
        <DaraOS />
        <HowItWorks />
        <Industries />
        <ClimateImpact />
        <CTA />
      </div>
    </>
  )
}

