import React from 'react';
import HeroCard from '../../components/HeroCard';
import TopFeatureCard from '../../components/TopFeatureCard';

const TopFeatureSection = () => {
    return (
        <div>
            <div className="top-feature">
                <div className='top-feature__title-container'>
                    <h2 className='top-feature__title'>Top Featured Products</h2>
                </div>
                <div className="top-feature__container">
                    <div className='torp-feature__hero-card-container'>
                        <HeroCard></HeroCard>
                    </div>
                    <div className="top-feature__card-container">
                        <TopFeatureCard></TopFeatureCard>
                        <TopFeatureCard></TopFeatureCard>
                        <TopFeatureCard></TopFeatureCard>
                        <TopFeatureCard></TopFeatureCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFeatureSection;