import Features from '@/component/Features/FeaturesComp'
import HomeHeroSectionWithImg from '@/component/HeroSection/HomeHeroComp'
import PetParentToolComp from '@/component/HeroSection/PetParentToolComp'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'


export default function Home() {
  return (
   <div>
   
    <HomeHeroSectionWithImg />
     
    <Features />


   </div>
  )
}
