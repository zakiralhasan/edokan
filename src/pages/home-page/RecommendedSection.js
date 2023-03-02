import React from 'react';
import ProductCard from '../../components/ProductCard';

const RecommendedSection = () => {
    return (
        <div>
            <div className="hot-trending-porducts">
                <div className='hot-trending-porducts__title-container'>
                    <h2 className='hot-trending-porducts__title'>Recommended For You</h2>
                </div>
                <div className='hot-trending-porducts__card-container'>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </div>
        </div>
    );
};

export default RecommendedSection;