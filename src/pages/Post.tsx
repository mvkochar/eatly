import { BlogItem } from "../components"
import { BlogItemsList } from "../db"
import "./css/Post.css"

const Post = () => {
    return (
        <>
            <main className="post-main">
                <h1 className="post-main-title">How To Order Food On eatly ?</h1>
                <div className="post-main-author d-f align-center">
                    <div><img src="/images/blog-author.png" alt="blog-author" width={55.76} /></div>
                    <div>
                        <p className="author-above">Written By</p>
                        <p className="author-name">Perperzon</p>
                    </div>
                </div>
                <div><img src="/images/post-main.png" alt="post-main" /></div>
            </main>
            <div className="post-content d-f">
                <article>
                    <div>
                        <h3 className="article-bl-title">Browse restaurants and menus</h3>
                        <p className="article-bl-desc">
                            Once you're logged in, you can browse through the list of available
                            restaurants on the Eatly website. You can filter by cuisine, price,
                            and distance to find the perfect restaurant for your needs. Click on
                            a restaurant to view its menu. Once you're logged in, you can browse
                            through the list of available restaurants on the Eatly website.
                            You can filter by cuisine, price, and distance.
                        </p>
                        <ul className="article-bl-list">
                            <li>It was popularized in the 1960s with the release</li>
                            <li>Lorem Ipsum passages, and more recently </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="article-bl-title">Select your items</h3>
                        <p className="article-bl-desc">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered the undoubtable source
                        </p>
                    </div>
                    <div>
                        <h3 className="article-bl-title">Place your order</h3>
                        <p className="article-bl-desc">
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
                            "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                            by Cicero, written in 45 BC. This book is a treatise on the theory 
                            of ethics, very popular during the Renaissance.
                        </p>
                    </div>
                    <a href="" className="post-next">Next Article</a>
                </article>
                <aside className="post-top">
                    <h3 className="post-top-title">Top Articles</h3>
                    <div className="post-top-box d-f">
                        {
                          BlogItemsList.filter((elem)=> elem.id < 5).map((post) => {
                            return (
                               <BlogItem
                                 key={`top-post${post.id}`}
                                 {...post}
                               />
                            )
                          })
                        }
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Post