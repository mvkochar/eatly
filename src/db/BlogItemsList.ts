type TPost = {
    id: number
    image: string
    title: string
    authorName: string
    authorPhoto: string
    date: string
}

const BlogItemsList: TPost[] = [
    {
        id: 1,
        image: '/images/blog/1.png',
        title: "How To Order Food ?",
        authorName: "Perperzon",
        authorPhoto: '/images/blog-author.png',
        date: '15 DEC, 2022'
    },

    {
        id: 2,
        image: '/images/blog/2.png',
        title: "How To Track The Order ?",
        authorName: "Perperzon",
        authorPhoto: '/images/blog-author.png',
        date: '15 DEC, 2022'
    },

    {
        id: 3,
        image: '/images/blog/3.png',
        title: "How To Manage Cards ?",
        authorName: "Perperzon",
        authorPhoto: '/images/blog-author.png',
        date: '15 DEC, 2022'
    },

    {
        id: 4,
        image: '/images/blog/4.png',
        title: "Tips & Tricks For Business",
        authorName: "Perperzon",
        authorPhoto: '/images/blog-author.png',
        date: '15 DEC, 2022'
    },

    {
        id: 5,
        image: '/images/blog/5.png',
        title: "How To Control Money ?",
        authorName: "Perperzon",
        authorPhoto: '/images/blog-author.png',
        date: '15 DEC, 2022'
    },

    {
        id: 6,
        image: '/images/blog/6.png',
        title: "Top 5 Business Ideas",
        authorName: "Perperzon",
        authorPhoto: '/images/blog-author.png',
        date: '15 DEC, 2022'
    },

]

export default BlogItemsList 