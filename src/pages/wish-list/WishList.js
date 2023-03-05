import React from 'react';
import img1 from '../../assets/porducts/Redmi-Note-8.jpg';
import { BsCart } from "react-icons/bs";

const WishList = () => {
    return (
        <div className='wish-list-page'>
            <h2>Wish List</h2>
            <table>
                <tr>
                    <th style={{ width: "60%" }}>Item</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>
                        <div className='table-data'>
                            <img src={img1} alt="" />
                            <p>Redmi-8 smart phone</p>
                        </div>
                    </td>
                    <td>$60</td>
                    <td>
                        <div className='cart-container'>
                            <BsCart />
                            <button>X</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='table-data'>
                            <img src={img1} alt="" />
                            <p>Redmi-8 smart phone</p>
                        </div>
                    </td>
                    <td>$60</td>
                    <td>
                        <div className='cart-container'>
                            <BsCart />
                            <button>X</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default WishList;