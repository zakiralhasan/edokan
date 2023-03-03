import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home-page/Home";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>, children: [
            { path: '/', element: <Home></Home> },
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> },
        ]
    }
])

export default router;