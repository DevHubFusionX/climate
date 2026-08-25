import React from 'react'
import Hero from './sections/Hero'
import InfrastructureStack from './sections/InfrastructureStack'
import ClimateHub from './sections/ClimateHub'
import ClimateFlywheel from './sections/ClimateFlywheel'
import ImpactMeasurement from './sections/ImpactMeasurement'
import CTA from './sections/CTA'

export default function Infrastructure() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-white rounded-t-[28px] md:rounded-t-[36px] shadow-[0_-12px_40px_rgba(10,18,45,0.05)]">
        <InfrastructureStack />
        <ClimateHub />
        <ClimateFlywheel />
        <ImpactMeasurement />
        <CTA />
      </div>
    </>
  )
}
