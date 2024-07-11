import {} from 'react'
import { navMenu } from '@/config/nav'

const Nav = () => {
    return (
        <div className='flex justify-center items-center gap-4'>
            {navMenu.map((nav, idx) => (
                <span key={idx} className='text-2xl font-bold'>
                    <a href={nav.scrollTo}>{nav.title}</a>
                </span>
            ))}
        </div>
    )
}

export default Nav
