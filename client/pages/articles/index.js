import { Pagination } from 'antd';
import { useEffect, useState } from "react";
import { useMainContext } from "../../components/context/MainContext";
import ItemArticle from "../../components/articles/index/Item";
import ItemHero from "../../components/articles/index/ItemHero";
import Breadcrumbs from "../../components/layouts/Breadcrumbs";
import MainLayouts from "../../components/layouts/MainLayouts";

const Articles = ({ defaultArticles }) => {
    const {
        articles: contextArticles, loadArticles, countArticles,
        teams, loadTeams,
        categories, loadCategories
    } = useMainContext();
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const [page, setPage] = useState(1);
    const [pageActive, setPageActive] = useState('active');
    const teamsDictionary = {};
    const categoriesDictionary = {};
    const articles = contextArticles.length ? contextArticles : defaultArticles;
    const limit = 5;
    const skip = (page - 1) * limit;

    for (let team of teams) {
        teamsDictionary[team._id] = team;
    }
    for (let item of categories) {
        categoriesDictionary[item._id] = item;
    }

    useEffect(() => {
        setTimeout(() => {
            loadArticles(limit, skip)
            loadTeams()
            loadCategories()
        }, 300)
    }, [page])

    const filterArticles = articles.filter(article => {
        if (!activeCategoryId) {
            return true
        }
        return article.categoryId === activeCategoryId
    })
        .map((article, index) => {
            const team = teamsDictionary[article.memberId];
            const category = categoriesDictionary[article.categoryId];
            return { ...article, team, category, type: index <= 1 ? 'hero' : 'article' }
        })
    return (
        <MainLayouts>
            <Breadcrumbs title={'Блог'} />
            <section className={`blog section section-padding-sm `}>
                <div className="container">
                    <div className={`blog-area ${pageActive} ${filterArticles.length === 1 ? 'single' : 'multiple'}`}>
                        {filterArticles.map((article) => {
                            return article.type === 'hero' ?
                                <ItemArticle article={article} key={article._id} team={article.team} category={article.category} />
                                : <ItemHero article={article} key={article._id} team={article.team} category={article.category} />

                        })}
                        <div className="widgets-area">
                            <div className="widgets">
                                <div className="widgets-wrapper">
                                    <div className="widgets-item">
                                        <h4 className="title">
                                            <span>Popular</span> topics
                                        </h4>
                                        <ul className="list list-categories">
                                            {categories.map((category) => {
                                                return (
                                                    <li className="list-item" key={category._id}>
                                                        <a href="#" onClick={(event) => {
                                                            event.preventDefault();
                                                            setActiveCategoryId(category._id)
                                                        }}>
                                                            <span className="box" style={{ background: category.color }} />
                                                            <span>{category.title}</span>
                                                            <div className="count">{category.count}</div>
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <form className="vg-form vg-form-widgets">
                                            <h4>Subscribe</h4>
                                            <p>
                                                Subscribe to our newsletter. We deliver the best health
                                                related articles to your inbox
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
                                            <button className="btn btn--primary w-100 mt-4">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 d-inline-block pagination">
                        <Pagination current={page} total={countArticles} pageSize={limit} onChange={(page) => {
                            setPage(page)
                            setPageActive('')
                            setTimeout(() => {
                                setPageActive('active')
                            }, 500)
                        }} />
                    </div>
                </div>
            </section>
        </MainLayouts>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3001/articles`);
    const data = await res.json();
    return {
        props: {
            defaultArticles: data.items,
        },
    }
}

export default Articles;