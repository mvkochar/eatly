import './css/Pricing.css'

const Pricing = () => {
    return (
        <>
            <main className='pricing-main'>
                <h1 className="pricing-main-title">Our Pricing</h1>
            </main>
            <div className="pricing-dashboard">
                <img src="/images/pricing-dashboard.png" alt="pricing-dashboard" />
            </div>
            <div className="pricing-content">
                <div className="pricing-heading d-f jc-sb">
                    <dl>
                        <dt>Pricing</dt>
                        <dd>Affordable Basic <br /> & Pro Plans</dd>
                    </dl>
                    <div className="d-f" style={{ gap: "225px" }}>
                        <dl>
                            <dt>Basic</dt>
                            <dd>Completely 100% <br /> Free Plan</dd>
                        </dl>
                        <dl>
                            <dt>Premium</dt>
                            <dd>Amazing Premium <br /> Features Plan</dd>
                        </dl>
                    </div>
                </div>
                <div className="priving-values d-f">
                    <div className="value"><sup>$</sup>0 <sub>/month</sub></div>
                    <div className="value"><sup>$</sup>5 <sub>/month</sub></div>
                </div>
                <div className="pricing-features">
                    <h3 className="pricing-features-title">Core features</h3>
                    <div className="pricing-features-box d-f jc-sb">
                        <ul className='pricing-features-list'>
                            <li>Support 24/7</li>
                            <li>Fast Delivery</li>
                            <li>20% Off Food Deals</li>
                            <li>Transaction History</li>
                            <li>Weekend Deals</li>
                            <li>Dashboard Access</li>
                            <li>Premium Group Access</li>
                        </ul>
                        <div className="d-f" style={{ gap: "338px" }}>
                            <ul className='pricing-features-list'>
                                <li><img src="/images/tick.png" alt="tick" /></li>
                                <li><img src="/images/tick.png" alt="tick" /></li>
                                <li><img src="/images/tick.png" alt="tick" /></li>
                                <li><img src="/images/tick.png" alt="tick" /></li>
                                <li><img src="/images/cross.png" alt="cross" /></li>
                                <li><img src="/images/cross.png" alt="cross" /></li>
                                <li><img src="/images/cross.png" alt="cross" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pricing-actions d-f">
                    <a href='' className='action-btn'>Start Free</a>
                    <a href='' className='action-btn'>Start Pro</a>
                </div>
            </div>
            <section className='home-purchases d-f'>
                <div>
                    <h2 className="page-bl-title">Control <span>Purchases</span> <br /> Via Dashboard</h2>
                    <div className="home-purchases-orders d-f">
                        <div className="order d-f jc-sb">
                            <div className='order-food d-f align-center'>
                                <div><img src="/images/order1.png" alt="order1" width={77.26} /></div>
                                <div>
                                    <h3 className="order-food-title">Chicken Hell</h3>
                                    <p className="order-food-status">On The Way</p>
                                </div>
                            </div>
                            <p className="order-time">3:09 PM</p>
                        </div>
                        <div className="order d-f jc-sb">
                            <div className='order-food d-f align-center'>
                                <div><img src="/images/order2.png" alt="order2" width={77.26} /></div>
                                <div>
                                    <h3 className="order-food-title">Swe Dish</h3>
                                    <p className="order-food-status">Delivered</p>
                                </div>
                            </div>
                            <p className="order-time">Yesterday</p>
                        </div>
                        <div className="order d-f jc-sb">
                            <div className='order-food d-f align-center'>
                                <div><img src="/images/order3.png" alt="order3" width={77.26} /></div>
                                <div>
                                    <h3 className="order-food-title">Fish Hell Veg</h3>
                                    <p className="order-food-status">Cancelled</p>
                                </div>
                            </div>
                            <p className="order-time">Yesterday</p>
                        </div>
                    </div>
                </div>
                <div className='home-purchases-saving'>
                    <div className="purchases-saving-heading d-f jc-sb align-cnenter">
                        <h3 className="purchases-saving-title">Purchases</h3>
                        <div className="select-wr">
                            <select name="month">
                                <option value="this">This month</option>
                            </select>
                        </div>
                    </div>
                    <div className="home-purchases-card">
                        <div className="d-f jc-sb align-center">
                            <div className="purchases-card-info d-f align-center">
                                <div><img src="/images/purchases1.png" alt="purchases1" /></div>
                                <div>
                                    <h4 className="info-title">Expense</h4>
                                    <p className="info-desc">Increased By 10%</p>
                                </div>
                                <h4 className="purchases-card-price">$409.00</h4>
                            </div>
                        </div>
                        <div className="purchases-card-divider"><img src="/images/divider1.png" alt="divider1" width={290.38} /></div>
                    </div>
                    <div className="home-purchases-card">
                        <div className="d-f jc-sb align-center">
                            <div className="purchases-card-info d-f align-center">
                                <div><img src="/images/purchases2.png" alt="purchases2" /></div>
                                <div>
                                    <h4 className="info-title">Vocher Usage</h4>
                                    <p className="info-desc">Increased By 5%</p>
                                </div>
                                <h4 className="purchases-card-price">$45.78</h4>
                            </div>
                        </div>
                        <div className="purchases-card-divider"><img src="/images/divider2.png" alt="divider2" width={290.38} /></div>
                    </div>
                </div>
            </section>
            <section className='home-testimonials pricing-testimonials'>
                <h2 className="page-bl-title text-center"><span>Customer</span> Say</h2>
                <div className="home-testimonials-review">
                    <div className="testimonials-review-heading d-f jc-sb align-center">
                        <div className="testimonials-review-author d-f align-center">
                            <div><img src="/images/review-author.png" alt="review-author" /></div>
                            <div>
                                <p className="review-author-name">Alexander R.</p>
                                <p className="review-author-desc">01 Year With Us</p>
                            </div>
                        </div>
                        <div><img src="/images/quote.png" alt="quote" /></div>
                    </div>
                    <p className="testimonials-review-text">
                        “ Online invoice payment helps companies save time, are faster
                        and save maximum effort for the clients and save maximum effort.
                        Online invoice payment helps companies save time ”
                    </p>
                    <div><img src="/images/stars.png" alt="stars" /></div>
                </div>
            </section>
        </>
    )
}

export default Pricing