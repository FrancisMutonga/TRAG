
import React from "react";
import Hero from "../components/hero";
import SchoolStats from "../components/stats";
import ProgramsSection from "../components/programs";
import CTASection from "../components/cta";
import Reviews from "../components/reviews";
import LocationSection from "../components/map";
import MottoSection from "../components/motto";


 

function Home() {
  
  return (
    <div className="flex flex-col items-center max-w-6xl gap-8 mt-20  mx-auto">
     <Hero/>
     <MottoSection/>
     <SchoolStats/>
     <ProgramsSection/>
   
     <CTASection/>
     <Reviews/>
     <LocationSection/>
        
    </div>
  );
}

export default Home;
