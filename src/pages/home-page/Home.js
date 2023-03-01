import React from 'react';
import BannerSection from './BannerSection';
import HotTrendingSection from './HotTrendingSection';

const Home = () => {
    return (
        <div>
            <div className="home-page">
                <BannerSection></BannerSection>
                <HotTrendingSection></HotTrendingSection>
            </div>
        </div>
    );
};

export default Home;