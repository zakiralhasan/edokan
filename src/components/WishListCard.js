import React from 'react';
import cardImg from '../assets/porducts/Redmi-Note-8.jpg';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const WishListCard = () => {
    return (
        <div>
            <div className="hero-card wish-list-card-container">
                <div className='hero-card__img wishlist-card-img'>
                    <img src={cardImg} alt="" />
                    <Link>Add To Cart</Link>
                </div>
                <div className='hero-card__content'>
                    <h2 className='hero-card__content__title'>Redmi-8 smart phone</h2>
                    <h2 className='product-card__price'>$90</h2>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;