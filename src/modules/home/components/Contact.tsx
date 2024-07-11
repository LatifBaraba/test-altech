import { Mail, MapPin, Phone } from 'lucide-react'
import {} from 'react'

const Contact = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-between bg-purple-600 text-white p-10 gap-5' id='contact'>
                {/* tentang */}
                <div className='tentang flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>Information</h2>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur dolorum perspiciatis iusto eveniet, non nihil
                        quas officiis in pariatur.
                    </span>
                </div>
                {/* service */}
                <div className='tentang flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>Our Services</h2>
                    <span>Project</span>
                    <span>Office</span>
                    <span>Technology</span>
                    <span>Maintenance</span>
                </div>
                {/* contact us */}
                <div className='tentang flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>Our Contact</h2>
                    <div className='flex gap-2'>
                        <Phone />
                        <span>+999 6811333</span>
                    </div>
                    <div className='flex gap-2'>
                        <Mail />
                        <span>Mail@mail.com</span>
                    </div>
                    <div className='flex gap-2'>
                        <MapPin />
                        <span>Jl. Koran tiga no.14, Kab. Cimahi 40511</span>
                    </div>
                </div>
            </div>

            <div className='p-5 flex justify-center items-center'>
                <h3>Copyright by PT. Andalan, 2024</h3>
            </div>
        </>
    )
}

export default Contact
