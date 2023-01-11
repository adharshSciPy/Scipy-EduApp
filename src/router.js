import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import Home from './scenes/Dashboard'
import SignIn from './scenes/SignIn'
import SignUp from './scenes/SignUp'

export const router = createBrowserRouter([
    {
        // element: <App />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/register',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <SignIn />
            },
            {
                path: 'admin',
                children: [
                    {
                        index: true,
                        element: <Home />
                    }, 
                ]

            }
        ]
    },
]);