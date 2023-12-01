import HealthHeroSectionWithImg from "@/component/HeroSection/HealthPageHero";
import KibbleToolCard from "@/component/Tools/ImgKibbleTool-Card";
import RecipeBuilder from "@/component/Tools/RecipeBuilderCard";

export default async function DogHealthPage() {

    return (
        <div>
           
        <HealthHeroSectionWithImg />
    

         <KibbleToolCard />
         <RecipeBuilder/>

        </div>
    );
   }
   
   
   //
    