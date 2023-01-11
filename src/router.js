import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import SignIn from './scenes/main/SignIn'
import SignUp from './scenes/main/SignUp'
import Dashboard from './scenes/admin/Dashboard'
import Batch from './scenes/admin/Batch';
import Batches from './scenes/admin/Batches'
import Student from './scenes/admin/Student';
import Teacher from './scenes/admin/Teacher';
import Home from './scenes/admin/Home';
import StudentHome from './scenes/student/Home';
import TeacherHome from './scenes/teacher/Home';

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
                element: <Dashboard />,
                children: [
                    {
                        path: '/admin/home',
                        element: <Home />
                    },
                    {
                        path: '/admin/batches',
                        element: <Batches />
                    },
                    {
                        path: '/admin/batches/:batchId',
                        element: <Batch />
                    },
                    {
                        path: '/admin/students',
                        element: <Student />
                    },
                    {
                        path: '/admin/teachers',
                        element: <Teacher />
                    }
                ]
            },
            {
                path: 'student',
                element: <StudentHome />
            },
            {
                path: 'teacher',
                element: <TeacherHome />
            }
        ]
    },
]);