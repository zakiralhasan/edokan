import React from 'react';
import { FiTruck } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaHandHoldingUsd, FaGooglePlay, FaFacebookSquare, FaGooglePlusSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import logo1 from "../../../assets/logos/paypal.png"
import logo2 from "../../../assets/logos/amazon-pay.png"
import logo3 from "../../../assets/logos/visa.png"
import logo4 from "../../../assets/logos/amex.png"
import logo5 from "../../../assets/logos/mastercard.png"

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className="footer-container">
                    <div className='footer-container__top-section'>
                        <div className='footer-container__top-section__content'>
                            <FiTruck className='top-section__content__icon' />
                            <div className='top-section__content__content'>
                                <p>FREE DELIVERY</p>
                                <span>For all orders over $120</span>
                            </div>
                        </div>
                        <div className='footer-container__top-section__content'>
                            <MdOutlinePayment className='top-section__content__icon' />
                            <div className='top-section__content__content'>
                                <p>SAFE PAYMENT</p>
                                <span>If goods have problem.</span>
                            </div>
                        </div>
                        <div className='footer-container__top-section__content'>
                            <BiMessageDetail className='top-section__content__icon' />
                            <div className='top-section__content__content'>
                                <p>24/7 HELP CENTER</p>
                                <span>24/7 Customer Support.</span>
                            </div>
                        </div>
                        <div className='footer-container__top-section__content'>
                            <FaHandHoldingUsd className='top-section__content__icon' />
                            <div className='top-section__content__content'>
                                <p>RETURN MONEY</p>
                                <span>If goods have problem</span>
                            </div>
                        </div>
                    </div>
                    {/* middle section start */}
                    <div className='footer-container__middle-section'>
                        <div className='footer-container__middle-section__content'>
                            <h2>DOWNLOAD APP</h2>
                            <p>EDOKAN App is now avilable App Stor & Google Play.</p>
                            <p>Get it now</p>
                            <div className='middle-section__content__app-section'>
                                <div className='app-section__content'>
                                    <BsApple className='app-section__content__icon' />
                                    <div className='app-section__content__content'>
                                        <p>Download it from</p>
                                        <span>APP STORE</span>
                                    </div>
                                </div>
                                <div className='app-section__content'>
                                    <FaGooglePlay className='app-section__content__icon' />
                                    <div className='app-section__content__content'>
                                        <p>Download it from</p>
                                        <span>GOOGLE PLAY</span>
                                    </div>
                                </div>
                            </div>
                            <div className='middle-section__content__social-icon-container'>
                                <FaFacebookSquare className='social-icon-container__facebook' />
                                <FaTwitterSquare className='social-icon-container__twitter' />
                                <FaLinkedin className='social-icon-container__linkedin' />
                                <FaGooglePlusSquare className='social-icon-container__google' />
                            </div>
                        </div>
                        <div className='footer-container__middle-section__content'>
                            <h2>Help & Customer</h2>
                            <p>New Customer</p>
                            <p>How To Use My Account</p>
                            <p>Placing On Order</p>
                            <p>Payment Methods</p>
                            <p>Problems With Orders</p>
                        </div>
                        <div className='footer-container__middle-section__content'>
                            <h2>Customer Service</h2>
                            <p>Help Center</p>
                            <p>Contc Us</p>
                            <p>Report Abuse</p>
                            <p>Submit a Dispute</p>
                            <p>Policies and Rules</p>
                        </div>
                        <div className='footer-container__middle-section__content'>
                            <h2>My Account</h2>
                            <p>Check Out</p>
                            <p>Product Support</p>
                            <p>Shopping Cart</p>
                            <p>Wish List</p>
                            <p>Cust Link</p>
                            <p>Redeem Voucher</p>
                        </div>
                        <div className='footer-container__middle-section__content'>
                            <h2>Signup To Newsletter</h2>
                            <p>Join 180+ subscribers and get a new discount coupon every Saturdy</p>
                            <div className='middle-section__email-section'>
                                <input type="text" name="" id="" placeholder='Enter your email' />
                                <button>SUBSCRIBE</button>
                            </div>
                            <p>By providing your email address you agree to our Privacy Policy and Terms of Service</p>
                        </div>
                    </div>
                    <div className='footer-container__bottom-section'>
                        <div className='footer-container__bottom-section__logo-container'>
                            <div className='footer-container__bottom-section__logo'>
                                <img src={logo1} alt="" />
                            </div>
                            <div className='footer-container__bottom-section__logo'>
                                <img src={logo2} alt="" />
                            </div>
                            <div className='footer-container__bottom-section__logo'>
                                <img src={logo3} alt="" />
                            </div>
                            <div className='footer-container__bottom-section__logo'>
                                <img src={logo4} alt="" />
                            </div>
                            <div className='footer-container__bottom-section__logo'>
                                <img src={logo5} alt="" />
                            </div>
                        </div>
                        <p>Copyright &copy; EDOKAN. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;