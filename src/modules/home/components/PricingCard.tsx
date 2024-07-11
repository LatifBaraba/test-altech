import Button from '@/components/ui/Button'
import {} from 'react'

const PricingCard = (item: any) => {
    const { title, tier, desc } = item

    return (
        <div className='card rounded-xl p-3 flex flex-col shadow-2xl hover:scale-110 transition ease-in-out delay-80 bg-[#45caef] hover:bg-transparent'>
            <div className='cardHeader flex flex-col gap-4 text-center mb-5'>
                <h2 className='text-xl font-bold text-gray-600'>{title}</h2>
                <span className='text-4xl font-bold'>{tier}</span>
            </div>
            <div className='cardContent flex flex-col gap-2 border-t-2 border-black py-4'>
                <ul className='flex flex-col gap-4 list-disc px-4'>
                    {desc.map((des: string, idx: number) => (
                        <li className='text-md font-medium' key={idx}>
                            {des}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='cardFooter border-t-2 border-black py-5 mt-auto'>
                <Button className='w-full'>Join us!</Button>
            </div>
        </div>
    )
}

export default PricingCard
