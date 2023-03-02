import React from 'react';
import BannerSection from './BannerSection';
import FlashDealSection from './FlashDealSection';
import HotTrendingSection from './HotTrendingSection';

const Home = () => {
    return (
        <div>
            <div className="home-page">
                <BannerSection></BannerSection>
                <HotTrendingSection></HotTrendingSection>
                <FlashDealSection></FlashDealSection>
            </div>
        </div>
    );
};

export default Home;