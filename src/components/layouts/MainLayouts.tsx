import { Menu, X, Zap } from 'lucide-react'
import { Outlet, useNavigate } from 'react-router'
import Nav from './Header/Nav'
import Button from '../ui/Button'
import { useState } from 'react'

const MainLayouts = () => {
    const navigate = useNavigate()

    const [activeNav, setActiveNav] = useState<boolean>(false)

    return (
        <div className='flex flex-col min-h-full max-w-full'>
            {/* Header */}
            <div className='hidden md:flex justify-between py-4 px-8 fixed top-0 left-0 w-full z-10'>
                <Zap className='w-16 h-auto cursor-pointer' onClick={() => window.scrollTo(0, 0)} />
                <div className='flex gap-4'>
                    <Nav />
                    <Button onClick={() => navigate('/login')}>Login</Button>
                </div>
            </div>
            {/* END Header */}
            <Menu className='absolute top-5 left-5 z-20 md:hidden' onClick={() => setActiveNav(!activeNav)} />
            {/* Mobile Header Nav */}
            <div
                className={`bg-white flex flex-col gap-4 h-full md:min-h-full z-20 w-[300px] p-6 ${
                    activeNav ? 'translate-x-0' : '-translate-x-full'
                } fixed md:hidden transition ease-in delay-100`}
            >
                <Zap className='w-16 h-auto cursor-pointer mb-10' />
                <span>About</span>
                <span>Price</span>
                <span>Contact</span>
                <Button onClick={() => navigate('/login')}>Login</Button>
                <X className='absolute top-5 right-5' onClick={() => setActiveNav(!activeNav)} />
            </div>
            {/* END Mobile Header Nav */}
            <div className=''>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayouts
