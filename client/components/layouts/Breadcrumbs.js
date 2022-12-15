import Link from "next/link";

const Breadcrumbs = ({ title, link, name }) => {
    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="title-area">
                    <img src="/images/resource/breadcrumbs/breadcrumbs.png" alt="#" />
                    <h1 className="h5">{title}</h1>
                </div>
                <ul className="list-breadcrumbs">
                    <li>
                        <Link href="/"><a>Main</a></Link>
                        <i className="lines" />
                    </li>
                    {link ?
                        <>
                            <li className="last">
                                <Link href={link}><a>{title}</a></Link>
                                <i className="lines" />
                            </li>
                            <li className="last">
                                <a>{name}</a>
                                <i className="lines" />
                            </li>
                        </>
                        : <li className="last">
                            <span>{title}</span>
                            <i className="lines" />
                        </li>
                    }

                </ul>
            </div>
        </section>
    )
}

export default Breadcrumbs;
