import CampusLife from '@/app/components/campuslife'
import MissionVisionValues from '@/app/components/mission'
import OurTeam from '@/app/components/team'
import React from 'react'
import WhyChooseUs from '@/app/components/whyus'
import Join from '@/app/components/join'
import History from '@/app/components/history'

function page() {
  return (
    <div className='flex flex-col items-center gap-8 mt-20 p-6 mx-auto'>
      <History/>
        <MissionVisionValues/>
        <WhyChooseUs/>
        <OurTeam/>
        <CampusLife/>
        <Join/>
       
    </div>
  )
}

export default page