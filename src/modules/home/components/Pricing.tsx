import {} from 'react'
import PricingCard from './PricingCard'
import { pricingList } from '@/config/pricing'

const Pricing = () => {
    return (
        <div className='bg-inherit p-4 md:py-10 md:px-40' id='pricing'>
            <h1 className='my-10 text-4xl font-bold'>Check Our Pricing</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {pricingList.map((item, idx) => (
                    <PricingCard key={idx} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default Pricing
