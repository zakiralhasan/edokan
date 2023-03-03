import React from 'react';
import Navbar from '../shared/nav-bar/Navbar';
import Footer from '../shared/footer/Footer';
import BannerSection from './BannerSection';
import BestSellingSection from './BestSellingSection';
import FlashDealSection from './FlashDealSection';
import HotTrendingSection from './HotTrendingSection';
import RecommendedSection from './RecommendedSection';
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
                <RecommendedSection></RecommendedSection>
                <BestSellingSection></BestSellingSection>
            </div>
        </div>
    );
};

export default Home;