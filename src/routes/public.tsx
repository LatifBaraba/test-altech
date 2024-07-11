import { lazy } from 'react'

const MainLayouts = lazy(() => import('@/components/layouts/MainLayouts'))
const Home = lazy(() => import('@/modules/home/Home'))
const Login = lazy(() => import('@/modules/login/Login'))

export const publicRoute = [
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
]
