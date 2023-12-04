import Features from '@/component/Features/FeaturesComp'
import HomeHeroSectionWithImg from '@/component/HeroSection/HomeHeroComp'
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
  
   <div>
       

    <HomeHeroSectionWithImg />
     
    <Features />


   </div>
   
  )
}
