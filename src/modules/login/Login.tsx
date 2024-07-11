import {} from 'react'
import LoginSVG from '@/assets/login.svg'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'
import LoginForm from './components/LoginForm'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full min-h-screen flex relative'>
            <ArrowLeft className='absolute text-2xl cursor-pointer top-10 left-10 hover:scale-110 ease-in-out' onClick={() => navigate(-1)}/>
            <div className='hidden md:flex w-1/2 justify-center items-center'>
                <img className='w-[50%]' src={LoginSVG} alt='' />
            </div>
            <div className='w-full md:w-1/2 p-4 md:p-10 md:border-r-2 md:shadow-2xl flex justify-center items-center'>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
