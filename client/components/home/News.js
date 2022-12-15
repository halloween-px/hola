const News = () => {
    return (
        <>
            <section className="vg-news section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title section-title--center">
                                <div className="section-title--wrapper">
                                    <div className="title title-green">
                                        Latest <span>news</span>
                                    </div>
                                    <div className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-gap">
                        <div className="col-lg-4 col-sm-6">
                            <div className="vg-news-item">
                                <a href="/news" className="image-area">
                                    <img src="/images/resource/news/news1.jpg" alt="#" />
                                </a>
                                <div className="vg-news-body">
                                    <time>26 april 2019</time>
                                    <h5>
                                        <a href="/news">
                                            Creative Problem Solving: Design Thinking in Health
                                        </a>
                                    </h5>
                                    <div className="interaction-area">
                                        <a href="#">
                                            <i className="fa-solid fa-heart" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-solid fa-comment" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-solid fa-bookmark" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="vg-news-item">
                                <a href="/news" className="image-area">
                                    <img src="/images/resource/news/news4.jpg" alt="#" />
                                </a>
                                <div className="vg-news-body">
                                    <time>26 april 2019</time>
                                    <h5>
                                        <a href="/news">
                                            Creative Problem Solving: Design Thinking in Health
                                        </a>
                                    </h5>
                                    <div className="interaction-area">
                                        <a href="#">
                                            <i className="fa-solid fa-heart" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-solid fa-comment" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-solid fa-bookmark" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="vg-news-item">
                                <a href="/news" className="image-area">
                                    <img src="/images/resource/news/news3.jpg" alt="#" />
                                </a>
                                <div className="vg-news-body">
                                    <time>26 april 2019</time>
                                    <h5>
                                        <a href="/news">
                                            Creative Problem Solving: Design Thinking in Health
                                        </a>
                                    </h5>
                                    <div className="interaction-area">
                                        <a href="#">
                                            <i className="fa-solid fa-heart" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-solid fa-comment" />
                                        </a>
                                        <a href="#">
                                            <i className="fa-solid fa-bookmark" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News;