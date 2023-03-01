import React from 'react';
import BannerCard from '../../components/BannerCard';

const BannerSection = () => {
    return (
        <div>
            <div className='banner-container'>
                <div className='banner-container__banner-slider'>
                    <h2 className='banner-slider__title'>Slider title</h2>
                    <p className='banner-slider__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nobis.</p>
                    <button className='banner-slider__btn'>DISCOVER NOW</button>
                </div>
                <div className="banner-container__card-section">
                    <BannerCard></BannerCard>
                    <BannerCard></BannerCard>
                    <BannerCard></BannerCard>
                    <BannerCard></BannerCard>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;