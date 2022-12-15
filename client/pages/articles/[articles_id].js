import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useMainContext } from "../../components/context/MainContext";
import MainLayouts from "../../components/layouts/MainLayouts";
import Breadcrumbs from "../../components/layouts/Breadcrumbs";

const Article = () => {
    const { article, loadArticle } = useMainContext();
    const router = useRouter();
    const articleId = router.query.articles_id;

    useEffect(() => {
        if (!articleId) {
            return
        }

        loadArticle(articleId)
    }, [articleId])

    return (
        <MainLayouts>
            <Breadcrumbs title={'Blog'} link={'/articles'} name={article.title} />
            <section className="section section-padding-sm blog-show">
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-xxl-8 col-xl-8">
                            <figure className="image-area">
                               <img src={article.images} alt="#" />
                            </figure>
                            <div className="content-area">
                                <h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
                                    facilis omnis saepe.
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                    adipisci aliquam amet animi atque, culpa cum cumque doloremque fugit
                                    hic ipsam maiores maxime nihil non officiis optio perferendis
                                    placeat quaerat quisquam repudiandae rerum sit, veritatis! Ab
                                    consectetur, cupiditate doloremque earum excepturi fuga incidunt
                                    ipsa laboriosam modi mollitia officia omnis tempore.
                                </p>
                                <p>
                                    Commodi facere natus odio velit! Aperiam, blanditiis fuga incidunt
                                    nostrum quaerat sed. Commodi facere natus odio velit! Aperiam,
                                    blanditiis fuga incidunt nostrum quaerat sed.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                    adipisci aliquam amet animi atque, culpa cum cumque doloremque fugit
                                    hic ipsam maiores maxime nihil non officiis optio perferendis
                                    placeat quaerat quisquam repudiandae rerum sit, veritatis! Ab
                                    consectetur, cupiditate doloremque earum excepturi fuga incidunt
                                    ipsa laboriosam modi mollitia officia omnis tempore.
                                </p>
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-check" />
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                                            minima.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check" />
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                                            voluptas voluptates voluptatibus.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check" />
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check" />
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Eveniet exercitationem facilis mollitia nesciunt, reiciendis
                                            unde.
                                        </span>
                                    </li>
                                </ul>
                                <div className="swiper" id="slider-news-show">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <figure className="image-area">
                                                <img src="/images/resource/courses/show1.jpg" alt="#" />
                                            </figure>
                                        </div>
                                        <div className="swiper-slide">
                                            <figure className="image-area">
                                                <img src="/images/resource/courses/show2.jpg" alt="#" />
                                            </figure>
                                        </div>
                                        <div className="swiper-slide">
                                            <figure className="image-area">
                                                <img src="/images/resource/courses/show3.jpg" alt="#" />
                                            </figure>
                                        </div>
                                        <div className="swiper-slide">
                                            <figure className="image-area">
                                                <img src="/images/resource/courses/show4.jpg" alt="#" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination" />
                                </div>
                                <h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
                                    atque, molestiae nisi sunt. Ducimus molestiae odio sequi.
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium aut beatae consequatur corporis cum dignissimos
                                    doloribus ea eos ex facere, in molestias mollitia nostrum nulla
                                    perferendis praesentium provident repudiandae sapiente sequi,
                                    tempore ut vitae voluptatum.
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4">
                            <div className="widgets">
                                <div className="widgets-item">
                                    <h4 className="title">
                                        <span>Popular</span> topics
                                    </h4>
                                    <ul className="list list-categories">
                                        <li className="list-item">
                                            <a href="#">
                                                <span className="box box-green" />
                                                <span>Idea</span>
                                                <div className="count">18 articles</div>
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">
                                                <span className="box box-red" />
                                                <span>Journey</span>
                                                <div className="count">23 articles</div>
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">
                                                <span className="box box-light-green" />
                                                <span>Languages</span>
                                                <div className="count">14 articles</div>
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">
                                                <span className="box box-dark-green" />
                                                <span>Education</span>
                                                <div className="count">6 articles</div>
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">
                                                <span className="box box-gray" />
                                                <span>Stories</span>
                                                <div className="count">8 articles</div>
                                            </a>
                                        </li>
                                    </ul>
                                    <form className="vg-form vg-form-widgets">
                                        <h4>Subscribe</h4>
                                        <p>
                                            Subscribe to our newsletter. We deliver the best health related
                                            articles to your inbox
                                        </p>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="user_email"
                                                id="user_email"
                                                placeholder="your email address"
                                                className="vg-form-control"
                                            />
                                        </div>
                                        <button className="btn btn--primary w-100 mt-4">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayouts>
    )
}

export default Article;