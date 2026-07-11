import React from 'react'
import Header1 from '@/components/header/Header1'
import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import Link from 'next/link'

const Cart = () => {
    return (
        <>
            <Header1 style={"inner-page"} fluid='container' />
            <Breadcrum pageTitle={'Instant Purchase'} pagename={'Instant Purchase'} />
            <div className="cart-page pt-150 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row g-lg-4 gy-5">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cart-shopping-wrapper">
                                <div className="cart-widget-title">
                                    <h4>My Shopping</h4>
                                </div>
                                <table className="cart-table">
                                    <thead>
                                        <tr>
                                            <th>Product Info</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Product Info">
                                                <div className="product-info-wrapper">
                                                    <div className="product-info-img">
                                                        <img src="/assets/img/inner-pages/cart-img1.png" alt="" />
                                                    </div>
                                                    <div className="product-info-content">
                                                        <h6>ZARA Crimson</h6>
                                                        <p><span>SKU: </span>D32-5H23</p>
                                                        <ul>
                                                            <li>remove</li>
                                                            <li>
                                                                <div className="qty-btn">quantity</div>
                                                                <div className="quantity-area">
                                                                    <div className="quantity">
                                                                        <a className="quantity__minus"><span><i className="bi bi-dash" /></span></a>
                                                                        <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                                                        <a className="quantity__plus"><span><i className="bi bi-plus" /></span></a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-label="Price"><span>$214.00</span></td>
                                            <td data-label="Total">$214.00</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Product Info">
                                                <div className="product-info-wrapper">
                                                    <div className="product-info-img">
                                                        <img src="/assets/img/inner-pages/cart-img2.png" alt="" />
                                                    </div>
                                                    <div className="product-info-content">
                                                        <h6>Fashion Forward</h6>
                                                        <p><span>SKU: </span>D32-5H23</p>
                                                        <ul>
                                                            <li>remove</li>
                                                            <li>
                                                                <div className="qty-btn">quantity</div>
                                                                <div className="quantity-area">
                                                                    <div className="quantity">
                                                                        <a className="quantity__minus"><span><i className="bi bi-dash" /></span></a>
                                                                        <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                                                        <a className="quantity__plus"><span><i className="bi bi-plus" /></span></a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-label="Price"><span>$214.00</span></td>
                                            <td data-label="Total">$214.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link href="/shop" className="details-button">
                                    Continue Shoping
                                    <svg viewBox="0 0 13 20">
                                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 ">
                            <div className="cart-order-sum-area">
                                <div className="cart-widget-title">
                                    <h4>Order Summary</h4>
                                </div>
                                <div className="order-summary-wrap">
                                    <ul className="order-summary-list">
                                        <li>
                                            <span>Sub Total</span>
                                            <span>$214.00</span>
                                        </li>
                                        <li>
                                            <span>Shipping</span>
                                            <div className="order-info">
                                                <p>Shipping Free*</p>
                                                <strong> Pickup fee $10.00</strong>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="coupon-area">
                                                <span>Coupon Code</span>
                                                <form>
                                                    <div className="form-inner">
                                                        <input type="text" placeholder="Your code" />
                                                        <button type="submit" className="apply-btn">Apply</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Total</span>
                                            <span>$214.00</span>
                                        </li>
                                    </ul>
                                    <Link href="/shop/checkout" className="primary-btn" data-text="Processed Checkout"><span>Processed Checkout</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer1 />
        </>
    )
}

export default Cart