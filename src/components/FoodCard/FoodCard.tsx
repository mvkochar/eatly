import classes from './FoodCard.module.css'

type FoodCardProps = {
    id: number
    image: string
    highlight: string
    title: string
    time: string
    rating: string
    price: string
    priceFloat: string
}

const FoodCard = ({ id, image, highlight, title, time, rating, price, priceFloat}: FoodCardProps) => {
    return (
    <div className={classes.food_card}>
        <button className={classes.food_card_favour}>
            <img src="/images/heart.png" alt="heart" />
        </button>
        <div className={classes.food_card_img}><img src={image} alt={`food${id}`} width={180.14} /></div>
        <p 
            className={classes.food_card_highlight} 
            style={highlight === "Healthy" ? {backgroundColor: "#F7EDD0", color: "#DAA31A"} 
                : highlight ===  "Trending" ? {backgroundColor: "#F7C5BA", color: "#FB471D" }
                : highlight ===  "Supreme" ? {backgroundColor: "#33AC64", color: "#FFFFFF"}
                : {} 
            }
        >
         {highlight}
         </p>
        <h3 className={classes.food_card_title}>{title}</h3>
        <div className={classes.food_card_details}>
            <p>{time}</p>
            <div className={classes.food_card_rating}>
                <div><img src="/images/star.png" alt="star" width={23.05}/></div>
                <p>{rating}</p>
            </div>
        </div>
        <div className={classes.food_card_control}>
            <h5 className={classes.food_card_price}>{price}.<span>{priceFloat}</span></h5>
            <button className={classes.food_card_add}>
                <img src="/images/plus.png" alt="plus" />
            </button>
        </div>
    </div >
  )
}

export default FoodCard