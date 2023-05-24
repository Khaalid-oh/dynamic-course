import React from 'react'
import PricingCard from './PricingCard'

function PricingSectionRecord({details}) {
  return (
    <div id='Pricing' className='bg-purple-600 py-10 px-10 max-w-100'>
       <h1 className='text-center text-4xl md:text-6xl font-bold text-white mb-10 md:mb-14'>{details.title}</h1>
       <div className='flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-4 justify-center wrap max-w-6xl mx-auto items-center'>
        {details.pricingCard.map((card, index) => (<PricingCard details={card} key={index}/>
        ))}
       </div>
    </div>
  )
}

export default PricingSectionRecord
 