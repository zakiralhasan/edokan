import React from 'react';
import FlashDealCard from '../../components/FlashDealCard';
import HeroCard from '../../components/HeroCard';

const FlashDealSection = () => {
    return (
        <div>
            <div>
                <div className="flash-deals">
                    <div className='flash-deals__title-container'>
                        <h2 className='hot-trending-porducts__title'>Flash Deasl</h2>
                    </div>
                    <div className='flash-deals__hero-card-container'>
                        <HeroCard></HeroCard>
                        <HeroCard></HeroCard>
                    </div>
                    <div className="flash-deals__card-container">
                        <FlashDealCard></FlashDealCard>
                        <FlashDealCard></FlashDealCard>
                        <FlashDealCard></FlashDealCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashDealSection;