import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home-page/Home";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import Shop from "../pages/shop/Shop";
import WishList from "../pages/wish-list/WishList";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/shop', element: <Shop></Shop> },
            { path: '/wishlist', element: <WishList></WishList> },
        ]
    }
])

export default router;