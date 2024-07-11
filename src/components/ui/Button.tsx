import { cn } from '@/lib/utils'
import {} from 'react'

const Button = ({ className, children, ...props }: any) => {
    return (
        <button
            className={cn(
                'text-blue-500 bg-white border-2 border-blue-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
