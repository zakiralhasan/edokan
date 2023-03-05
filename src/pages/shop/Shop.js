import React from 'react';
import WishListCard from '../../components/WishListCard';
import banner from '../../assets/shop-banner.png';
import ShopCard from '../../components/ShopCard';

const Shop = () => {
    return (
        <div className='shop-page'>
            <div className='shop-container'>
                <div className='shop-container__left-section'>
                    <div className='shop-container__left-section__category-container'>
                        <div className='left-section__container-title'>
                            <h2>Categories</h2>
                        </div>
                        <div className='category-container__content-section'>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Top Selling</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Top Selling Product</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Cameras & Accessories</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Coumputer & Desktop</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Tablet & Mobile</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Kitchen & Accessories</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Home & Accessories</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Sport & Outdors</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Audio & Headphones</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Toys & Hobbies</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Fasion & Clothing</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Decor & Furniture</span>
                            </div>
                        </div>
                    </div>
                    <div className='shop-container__left-section__color-container'>
                        <div className='left-section__container-title'>
                            <h2>Colors</h2>
                        </div>
                        <div className='color-container'>
                            <div className='color-container__red'></div>
                            <div className='color-container__yellow'></div>
                            <div className='color-container__brown'></div>
                            <div className='color-container__black'></div>
                            <div className='color-container__pink'></div>
                            <div className='color-container__orange'></div>
                            <div className='color-container__blue'></div>
                            <div className='color-container__sky'></div>
                        </div>
                    </div>
                    <div className='shop-container__left-section__price-container'>
                        <div className='left-section__container-title'>
                            <h2>Price</h2>
                        </div>
                        <div className='price-container'>
                            <input type="number" name="" id="" placeholder='Min' />
                            <input type="number" name="" id="" placeholder='Max' />
                            <p>Filter</p>
                        </div>
                    </div>
                    <div className='shop-container__left-section__category-container'>
                        <div className='left-section__container-title'>
                            <h2>Product Brand</h2>
                        </div>
                        <div className='category-container__content-section'>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Huawei</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Symphony</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Xiaomi</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Lenovo</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Vivo</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Samsung</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Nokia</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Oppo</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Itel</span>
                            </div>
                            <div className='category-container__content'>
                                <input type="radio" name="" id="" />
                                <span>Apple</span>
                            </div>
                        </div>
                    </div>
                    <div className='shop-container__left-section__compare-product-container'>
                        <div className='left-section__container-title'>
                            <h2>Compare Product</h2>
                        </div>
                        <p>You Have No Items To Compare Product</p>
                    </div>
                    <div className='shop-container__left-section__wishlist-container'>
                        <div className='left-section__container-title'>
                            <h2>Compare Product</h2>
                        </div>
                        <div className='wishlist-container__content'>
                            <WishListCard></WishListCard>
                            <WishListCard></WishListCard>
                        </div>
                    </div>
                </div>
                {/* right section start */}
                <div className='shop-container__right-section'>
                    <div className='shop-container__right-section__banner'>
                        <img src={banner} alt="" />
                    </div>
                    <div className='shop-container__right-section__products-container'>
                        <ShopCard></ShopCard>
                        <ShopCard></ShopCard>
                        <ShopCard></ShopCard>
                        <ShopCard></ShopCard>
                        <ShopCard></ShopCard>
                        <ShopCard></ShopCard>
                        <ShopCard></ShopCard>
                        <ShopCard></ShopCard>
                        <ShopCard></ShopCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;