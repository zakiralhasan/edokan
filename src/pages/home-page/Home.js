import React from 'react';
import BannerSection from './BannerSection';
import FlashDealSection from './FlashDealSection';
import HotTrendingSection from './HotTrendingSection';
import TopFeatureSection from './TopFeatureSection';

const Home = () => {
    return (
        <div>
            <div className="home-page">
                <BannerSection></BannerSection>
                <HotTrendingSection></HotTrendingSection>
                <FlashDealSection></FlashDealSection>
                <TopFeatureSection></TopFeatureSection>
                <div className='home-page__add'>
                    <p>Free UK delivery - Return Over $100.00 (Excluding Homeware)| Free</p>
                </div>
            </div>
        </div>
    );
};

export default Home;