import {} from 'react'
import About from './components/About'
import Ilustration1 from '@/assets/ilustration1.svg'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

const Home = () => {
    return (
        <>
            <div className='home pt-32 p-10'>
                <div className='shape1' />
                <div className='shape2' />
                <div className='flex flex-col gap-20 justify-around'>
                    <div className='w-full md:w-1/2 ml-auto my-8'>
                        <span className='text-lg font-semibold text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores aliquid eveniet voluptas commodi
                            maiores dolorem laborum amet dicta vitae.
                        </span>
                    </div>
                    <div className='w-full md:w-1/2 my-8'>
                        <span className='text-xl font-semibold text-gray-500'>
                            "Lorem ipsum dolor sit amet consectetur adipisicing"
                        </span>
                    </div>
                    {/* ilustration */}
                    <img className='w-60' src={Ilustration1} alt="" />
                </div>
            </div>
            <About />
            <Pricing />
            <Contact />
        </>
    )
}

export default Home
