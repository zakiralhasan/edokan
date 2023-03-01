import React from 'react';
import cardImg from '../assets/porducts/Redmi-Note-8.jpg'
import { BsStarFill } from "react-icons/bs";

const ProductCard = () => {
    return (
        <div className='product-card'>
            <img className='product-card__img' src={cardImg} alt="Redmi-8 mobile" />
            <h2 className='product-card__title'>Redmi-8 smart phone</h2>
            <div className='product-card__star-icon-container'>
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
            <button className='product-card__btn'>ADD TO CART</button>
        </div>
    );
};

export default ProductCard;