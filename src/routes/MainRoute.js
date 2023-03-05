import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home-page/Home";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import Shop from "../pages/shop/Shop";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/shop', element: <Shop></Shop> },
        ]
    }
])

export default router;