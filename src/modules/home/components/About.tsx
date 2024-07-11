import Button from '@/components/ui/Button'
import {} from 'react'

const About = () => {
    return (
        <div className='bg-[#45caef] w-full flex flex-col justify-around items-center gap-20 px-10 py-24' id='about'>
            <span className='text-2xl font-semibold text-gray-500'>About Us</span>
            <h2 className='text-5xl font-bold'>"Lorem ipsum dolor sit amet."</h2>
            <Button>Start Free Trial</Button>
            <span className='w-full md:w-[50%] text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cupiditate officia sint a earum ad cumque ipsum eaque
                molestiae repellendus, similique debitis placeat deserunt facere quaerat praesentium impedit nobis quasi iure velit quia?
                Voluptatem, expedita commodi excepturi in consequatur culpa!
            </span>
        </div>
    )
}

export default About
