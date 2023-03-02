import React from 'react';
import ProductCard from '../../components/ProductCard';
import logo1 from '../../assets/logos/huawei.png';
import logo2 from '../../assets/logos/symphony.jpg';
import logo3 from '../../assets/logos/xiaomi.png';
import logo4 from '../../assets/logos/lenovo.png';
import logo5 from '../../assets/logos/vivo.png';
import logo6 from '../../assets/logos/samsung.png';

const BestSellingSection = () => {
    return (
        <div>
            <div className="hot-trending-porducts best-selling-products">
                <div className='hot-trending-porducts__title-container'>
                    <h2 className='hot-trending-porducts__title'>Best Selling Products</h2>
                </div>
                <div className='hot-trending-porducts__card-container'>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
                <div className='best-selling-products__logo-container'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BestSellingSection;