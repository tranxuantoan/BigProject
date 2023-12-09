import Offer from "./Offer"

const WhatOffer=()=>{
    return(
      <div className='bg-gray-200 px-[50px] py-[50px] '>
        <div className='text-center text-4xl font-bold pb-[20px]'>What We Offer</div>
        <ul className='max-w-screen-xl mx-auto flex block justify-between'>
          <li>
            <img src="image/1.jpg" alt="" />
            <Offer title='Lighting Upgrades' desc='Electrical panel maintenance, therefore, should be part of your regular routine.'/>
          </li>
          <li>
            <img src="image/2.jpg" alt="" />
            <Offer title='Electrical repairs' desc='Electrical repairs should always be handled by a professional electrician.'/>
          </li>
          <li>
            <img src="image/3.jpg" alt="" />
            <Offer title='Surge Protection' desc='An electrical surge can happen for a number of reasons, including lightning strikes..'/>
          </li>
        </ul>
    </div>
    )
}
export default WhatOffer