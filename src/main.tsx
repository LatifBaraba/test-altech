import ReactDOM from 'react-dom/client'
import { Suspense } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutSplashScreen from './components/layouts/LayoutSplashScreen.tsx'
import { publicRoute } from './routes/public.tsx'

const router = createBrowserRouter([...publicRoute])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Suspense fallback={<LayoutSplashScreen />}>
        <RouterProvider router={router} />
    </Suspense>
)
