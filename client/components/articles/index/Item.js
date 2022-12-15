import Link from "next/link";
import Author from "../Author";

const ItemArticle = ({article, team, category}) => {
    return (
        <div className="blog-hero">
            <figure>
                <Link href={`/articles/${article._id}`}>
                    <a>
                        <img className="image-bg" src={article.images} alt="#" />
                    </a>
                </Link>
                <figcaption>
                    <h6 className="chapter">{!!category && category.title}</h6>
                    <p>{article.title}</p>
                    {!!team && <Author team={team} />}
                </figcaption>
            </figure>
        </div>
    )
}

export default ItemArticle;