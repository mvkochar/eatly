type TFood = {
    id: number
    image: string
    highlight: string
    title: string
    time: string
    rating: string
    price: string
    priceFloat: string
}

const DishesList: TFood[] = [
    {
        id: 1,
        image: '/images/dishes/1.png',
        highlight: 'Healthy',
        title: "Chicken Hell",
        time: "24min •",
        rating: "4.8",
        price: "$12",
        priceFloat: "99"
    },

    {
        id: 2,
        image: '/images/dishes/2.png',
        highlight: 'Trending',
        title: "Swe Dish",
        time: "34min •",
        rating: "4.9",
        price: "$19",
        priceFloat: "99"
    },

    {
        id: 3,
        image: '/images/dishes/3.png',
        highlight: 'Supreme',
        title: "Swe Dish",
        time: "34min •",
        rating: "4.9",
        price: "$19",
        priceFloat: "99"
    },

    {
        id: 4,
        image: '/images/dishes/4.png',
        highlight: 'Healthy',
        title: "Chicken Hell",
        time: "24min •",
        rating: "4.8",
        price: "$12",
        priceFloat: "99"
    },

    {
        id: 5,
        image: '/images/dishes/5.png',
        highlight: 'Trending',
        title: "Swe Dish",
        time: "34min •",
        rating: "4.9",
        price: "$19",
        priceFloat: "99"
    },

]

export default DishesList