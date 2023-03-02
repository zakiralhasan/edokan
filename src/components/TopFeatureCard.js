import React from 'react';
import cardImg from '../assets/porducts/Redmi-Note-8.jpg'
import { BsStarFill } from "react-icons/bs";
const TopFeatureCard = () => {
    return (
        <div>
            <div className="hero-card top-feature-card">
                <div className='hero-card__img'>
                    <img src={cardImg} alt="" />
                </div>
                <div className='hero-card__content'>
                    <h2 className='hero-card__content__title'>Redmi-8 smart phone</h2>
                    <div className='hero-card__star-icon-container'>
                        <div>
                            <BsStarFill className='star-icon-gold' />
                            <BsStarFill className='star-icon-gold' />
                            <BsStarFill className='star-icon-gray' />
                            <BsStarFill className='star-icon-gray' />
                            <BsStarFill className='star-icon-gray' />
                        </div>
                        <div className='star-icon-container_value'>(2)</div>
                    </div>
                    <h2 className='product-card__price'>$90</h2>
                </div>
            </div>
        </div>
    );
};

export default TopFeatureCard;