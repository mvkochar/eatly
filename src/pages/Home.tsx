import { FoodCard } from '../components'
import { DishesList } from '../db'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main d-f align-center'>
        <div>
          <p className="home-main-above">Over 1000 users</p>
          <h1 className="home-main-title">
            Enjoy Foods All Over The <span>World</span>
          </h1>
          <p className="home-main-desc">
            EatLy help you set saving goals, earn cash back offers,
            Go to disclaimer for more details and get paychecks up
            to two days early. Get a <span>$20 bonus.</span>
          </p>
          <div className="home-main-actions d-f">
            <a href="" className="started-link d-b">Get Started</a>
            <a href="" className="pro-link d-b">Go Pro</a>
          </div>
          <div className="home-main-info d-f align-center">
            <div><img src="/images/trustpilot.svg" alt="trustpilot" /></div>
            <div className="home-main-reviews d-f">
              <div><img src="/images/stars.png" alt="stars" /></div>
              <p className="reviews-num">4900+</p>
            </div>
          </div>
        </div>
        <div><img src="/images/home-main.png" alt="home-main" /></div>
      </main>
      <section className='home-features d-f align-center'>
        <dl>
          <dt>10K+</dt>
          <dd>Satisfied Costumers <br /> All Great Over The World </dd>
        </dl>
        <div className="line"></div>
        <dl>
          <dt>4M</dt>
          <dd>
            Healthy Dishes Sold <br /> Including Milk Shakes Smooth
          </dd>
        </dl>
        <div className="line"></div>
        <dl>
          <dt>99.99%</dt>
          <dd>Reliable Customer Support We Provide Great Experiences </dd>
        </dl>
      </section>
      <section className='home-download d-f'>
        <div><img src="/images/mobile.png" alt="mobile" /></div>
        <div>
          <h2 className="home-download-title">Premium <span>Quality</span> <br /> For Your Health</h2>
          <ul className="home-download-list">
            <li>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
            <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
          </ul>
          <div className="home-download-more">
            <div className="home-download-action d-f">
              <p className="action-name">Download</p>
              <a href="" className="d-b">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.55469 13.5469H22.3588" stroke="white" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487" stroke="white" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
            <div className='home-download-vector'><img src="/images/vector1.png" alt="vector1" /></div>
          </div>
        </div>
      </section>
      <section className='home-restaurants'>
        <h2 className="page-bl-title text-center">Our Top <span>Restaurants</span></h2>
        <div className="home-restaurants-box d-f jc-sb">
          <div className="home-restaurants-card">
            <div><img src="/images/restaurant1.png" alt="restaurant1" /></div>
            <div className="restaurants-card-info d-f jc-sb">
              <div>
                <div className="restaurants-card-highlight highlight-healthy">Healthy</div>
                <h3 className="restaurants-card-title">The Chicken King</h3>
                <div className="restaurants-card-details d-f align-center">
                  <p className="restaurants-card-time">24min •</p>
                  <div className="restaurants-card-rating d-f align-center">
                    <div><img src="/images/star.png" alt="Star" /></div>
                    <p className="rating-num">4.8</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "flex-end" }}>
                <img src="/images/bookmark.png" alt="bookmark" />
              </div>
            </div>
          </div>
          <div className="home-restaurants-card">
            <div><img src="/images/restaurant2.png" alt="restaurant2" width={396} /></div>
            <div className="restaurants-card-info d-f jc-sb">
              <div>
                <div className="restaurants-card-highlight highlight-trending">Trending</div>
                <h3 className="restaurants-card-title">The Burger King</h3>
                <div className="restaurants-card-details d-f align-center">
                  <p className="restaurants-card-time">24min •</p>
                  <div className="restaurants-card-rating d-f align-center">
                    <div><img src="/images/star.png" alt="Star" /></div>
                    <p className="rating-num">4.9</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "flex-end" }}>
                <img src="/images/bookmark.png" alt="bookmark" />
              </div>
            </div>
          </div>
          <div className="home-restaurants-card">
            <div><img src="/images/restaurant3.png" alt="restaurant3" width={396} /></div>
            <div className="restaurants-card-info d-f jc-sb">
              <div>
                <div className="restaurants-card-highlight highlight-healthy">Healthy</div>
                <h3 className="restaurants-card-title">The Chicken King</h3>
                <div className="restaurants-card-details d-f align-center">
                  <p className="restaurants-card-time">24min •</p>
                  <div className="restaurants-card-rating d-f align-center">
                    <div><img src="/images/star.png" alt="Star" /></div>
                    <p className="rating-num">4.9</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "flex-end" }}>
                <img src="/images/bookmark.png" alt="bookmark" />
              </div>
            </div>
          </div>
        </div>
        <div className="home-restaurants-all d-f align-center">
          <p className="all-name">View All</p>
          <a href="" className="d-b">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.90234H17.8041" stroke="#ACADB9" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.90234 2L17.8044 9.90206L9.90234 17.8041" stroke="#ACADB9" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </section>
      <section className='home-dishes'>
        <h2 className="page-bl-title text-center">Our Top <span>Dishes</span></h2>
        <div className="home-dishes-box d-f jc-sb">
          {
            DishesList.map((food) => {
              return (
                <FoodCard
                  key={`top-dishes${food.id}`}
                  {...food}
                />
              )
            })
          }
        </div>
        <div className="home-dishes-all d-f align-center">
          <p className="all-name">View All</p>
          <a href="" className="d-b">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.90234H17.8041" stroke="#ACADB9" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.90234 2L17.8044 9.90206L9.90234 17.8041" stroke="#ACADB9" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </section>
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
      <section className='home-testimonials'>
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
      <section className='home-subscribe'>
        <div className="home-subscribe-mask">
          <h2 className="home-subscribe-title">Get 50%</h2>
          <form action="" className='home-subscribe-fm'>
            <input type="text" name='subscribeEmail' placeholder='Enter Your Email Address' />
            <button type="button">Subscribe</button>
          </form>
        </div>
        <div className='home-subscribe-pic'><img src="/images/food.png" alt="food" /></div>
      </section>
    </>
  )
}

export default Home