import Link from "next/link";
import Author from "../Author";

const ItemHero = ({ article, team, category }) => {
    return (
        <div className="blog-other">
            <div className="row">
                <div className="col-md-4 pe-md-0">
                    <figure>
                        <Link href={`/articles/${article._id}`}>
                            <a>
                                <img src={article.images} alt="#" />
                                <span className="chapter">{!!category && category.title}</span>
                            </a>
                        </Link>
                    </figure>
                </div>
                <div className="col-md-8 ps-md-0">
                    <div className="content-area">
                        <Link href={`/articles/${article._id}`}>
                            <a className="title">{article.title}</a>
                        </Link>
                        <div className="text-area">{article.preview}</div>
                        {!!team && <Author team={team} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemHero;