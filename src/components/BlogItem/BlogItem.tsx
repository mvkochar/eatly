import { Link } from "react-router-dom"
import classes from "./BlogItem.module.css"

type BlogItemProps = {
    id: number
    image: string
    title: string
    authorName: string
    authorPhoto: string
    date: string
}

const BlogItem = ({ id, image, title, authorName, authorPhoto, date }: BlogItemProps) => {
    return (
        <div className={classes.blog_item}>
            <div className={classes.blog_item_content}>
                {
                    id === 1 ?
                        <div className={classes.blog_item_img}>
                            <Link to="/post"><img src={image} alt={`post${id}`} width={309.7} /></Link>
                        </div>
                        :
                        <div className={classes.blog_item_img}><img src={image} alt={`post${id}`} width={309.7} /></div>
                }
                <h3 className={classes.blog_item_title}>{title}</h3>
                <div className={classes.blog_item_info}>
                    <div className={classes.blog_item_author}>
                        <div><img src={authorPhoto} alt="author" /></div>
                        <div>
                            <p className={classes.author_above}>Written By</p>
                            <p className={classes.author_name}>{authorName}</p>
                        </div>
                    </div>
                    <p className={classes.blog_item_date}>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem