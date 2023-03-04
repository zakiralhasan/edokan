import React from 'react';
import { BiCategory } from "react-icons/bi";
import { BsSearch, BsPerson, BsBagX } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const topMenuItems = <>
        <li>My Account</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>FAQs</li>
    </>
    const menuItems = <>
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link>SHOP</Link>
        </li>
        <li>CONTACT US</li>
        <li>ABOUT US</li>
    </>
    return (
        <div className='navbar-section'>
            <div className='navbar-container'>
                {/* top section start */}
                <div className="navbar-container__top-section">
                    <div className='navbar-container__top-section__content'>
                        <div>
                            <select>
                                <option value="English">English</option>
                                <option value="Bengali">Bengali</option>
                            </select>
                        </div>
                        <div>
                            <select>
                                <option value="USD-BD">USD-BD</option>
                                <option value="BD-USD">BD-USD</option>
                            </select>
                        </div>
                        <p>Need help? webdeveloperzakir@gmail.com</p>
                    </div>
                    <div className='navbar-container__top-section__menu-items'>
                        <ul>
                            {topMenuItems}
                        </ul>
                    </div>
                </div>
                {/* middle section start */}
                <div className="navbar-container__middle-section">
                    <h2>EDOKAN</h2>
                    <div className='middle-section__search-section-container'>
                        <select>
                            <option value="All Categories">All Categories</option>
                            <option value="category one">category one</option>
                            <option value="category two">category two</option>
                        </select>
                        <input type="text" name="" id="" placeholder='Search porduct here...' />
                        <BsSearch className='middle-section__search-section-logo' />
                    </div>
                    <div className='navbar-container__middle-section__icons-container'>
                        <div className='middle-section__icon-container'>
                            <BsPerson className='middle-section__icon' />
                            <div className='middle-section__icon-content'>
                                <Link to="/login">Sign In</Link>
                                <p>Creat An Account</p>
                            </div>
                        </div>
                        <div className='middle-section__icon-container'>
                            <AiOutlineHeart className='middle-section__icon' />
                            <div className='middle-section__icon-content'>
                                <Link to="/wishlist">Favorite</Link>
                                <p>My Wish List</p>
                            </div>
                        </div>
                        <div className='middle-section__icon-container'>
                            <BsBagX className='middle-section__icon' />
                            <div className='middle-section__icon-content'>
                                <span>My Cart</span>
                                <p>$0.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom section start */}
                <div className="navbar-container__bottom-section">
                    <div className='bottom-section__category-container'>
                        <BiCategory className='bottom-section__category-logo' />
                        <h2>SHOP BY CATAGORY</h2>
                    </div>
                    <div className='bottom-section__menu-items'>
                        <ul >
                            {menuItems}
                        </ul>
                    </div>
                    <p>Spend $120 more and get free shipping!</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;