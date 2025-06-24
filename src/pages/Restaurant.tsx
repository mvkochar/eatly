import { Faq, FoodCard } from '../components'
import { DishesList } from '../db'
import './css/Restaurant.css'

const Restaurant = () => {
    return (
        <>
            <main className='restaurant-main'>
                <div><img src="/images/restaurant-main.png" alt="restaurant-main" /></div>
                <div className="restaurant-main-info d-f jc-sb align-center">
                    <h1 className="restaurant-main-title">The Chicken King</h1>
                    <div className="d-f align-center">
                        <p className="restaurant-main-time">24min •</p>
                        <p className="restaurant-main-rating">4.8</p>
                    </div>
                    <div><img src="/images/bookmark.png" alt="bookmark" width={61.78} /></div>
                </div>
            </main>
            <section className="restaurant-popular">
                <h2 className="restaurant-popular-title">Popular 🔥</h2>
                <div className="restaurant-popular-box d-f jc-sb">
                    {
                        DishesList.map((dish)=> {
                            return (
                                <FoodCard
                                    key={`popular-dish${dish.id}`}
                                    {...dish}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className='restaurant-chicken'>
                <h2 className="restaurant-chicken-title">Chicken Vegetables</h2>
                <div className="restaurant-chicken-box d-f">
                    {
                        DishesList.filter((elem)=> elem.id < 3).map((chicken)=> {
                            return (
                                <FoodCard
                                    key={`chicken${chicken.id}`}
                                    {...chicken}
                                />
                            )
                        })
                    }
                </div>
                <div className="restaurant-chicken-line"></div>
            </section>
            <section className='restaurant-faq'>
                <Faq/>
            </section>
        </>
    )
}

export default Restaurant