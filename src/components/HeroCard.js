import React from 'react';
import cardImg from '../assets/porducts/Redmi-Note-8.jpg'
import { BsStarFill } from "react-icons/bs";
const HeroCard = () => {
    return (
        <div>
            <div className="hero-card">
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
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto assumenda ipsum tenetur in provident. Omnis ab necessitatibus, repellat eaque, cum nihil ullam eveniet laudantium aperiam dolor libero aliquid, harum nobis?</p>
                    <button className='hero-card__btn'>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;