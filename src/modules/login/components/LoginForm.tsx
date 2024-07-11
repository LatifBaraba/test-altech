import Button from '@/components/ui/Button'
import {} from 'react'

const LoginForm = () => {
    return (
        <form>
            <div className='mb-10'>
                <h1 className='text-4xl font-bold '>Sign in</h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, autem!</span>
            </div>
            <div className='flex flex-col gap-10'>
                <label className='form-control w-full max-w-xs'>
                    <div className='label'>
                        <span className='label-text text-lg font-semibold'>Username or Email</span>
                    </div>
                    <input type='text' placeholder='Jake Winkon' className='input input-bordered w-full' />
                </label>
                <label className='form-control w-full max-w-xs'>
                    <div className='label'>
                        <span className='label-text text-lg font-semibold'>Password</span>
                    </div>
                    <input type='password' placeholder='******' className='input input-bordered w-full' />
                </label>
            </div>
            <div className='mt-10 flex gap-4 items-center justify-evenly'>
                <Button className='border-purple-700 text-purple-700 w-full'>Register</Button>
                or
                <Button className='w-full'>Login</Button>
            </div>
        </form>
    )
}

export default LoginForm
