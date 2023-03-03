import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../pages/shared/nav-bar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;