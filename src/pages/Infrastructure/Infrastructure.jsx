import React from 'react'
import Hero from './sections/Hero'
import InfrastructureOpportunity from './sections/InfrastructureOpportunity'
import InfrastructureStack from './sections/InfrastructureStack'
import ClimateHub from './sections/ClimateHub'
import ClimateFlywheel from './sections/ClimateFlywheel'
import ImpactMeasurement from './sections/ImpactMeasurement'
import AssetEfficientModel from './sections/AssetEfficientModel'
import WhyDara from './sections/WhyDara'
import Vision from './sections/Vision'
import CTA from './sections/CTA'

export default function Infrastructure() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-white">
        <InfrastructureOpportunity />
        <InfrastructureStack />
        <ClimateHub />
        <ClimateFlywheel />
        <ImpactMeasurement />
        <AssetEfficientModel />
        <WhyDara />
        <Vision />
        <CTA />
      </div>
    </>
  )
}
