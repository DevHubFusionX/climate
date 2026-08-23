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
      <div className="relative z-10 bg-white">
        <InfrastructureStack />
        <ClimateHub />
        <ClimateFlywheel />
        <ImpactMeasurement />
        <CTA />
      </div>
    </>
  )
}
