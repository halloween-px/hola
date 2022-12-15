import Link from 'next/link';

const Header = () => {
    const nav = [
        {
            nav: 'Home',
            link: '/'
        },
        {
            nav: 'Courses',
            link: '/services'
        },
        {
            nav: 'About us',
            link: '/about'
        },
        {
            nav: 'Blog',
            link: '/articles'
        },
        {
            nav: 'News',
            link: '/news'
        },
        {
            nav: 'Сontacts',
            link: '/contacts'
        },
    ]
    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="header-top">
                    <div className="container">
                        <div className="row row-gap align-items-center">
                            <div className="col-lg-2 col-auto">
                                <Link href="/">
                                    <a className="logo-area">
                                        <img src="/images/logo/logo.png" alt="Hola" className="img-fluid" />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-lg-6 col-auto ms-lg-0 order-lg-2 order-3">
                                <nav className="nav d-lg-flex d-none">
                                    <ul className="list">
                                        {nav.map((item, index) => {
                                            return (
                                                <li className="list-item" key={index}>
                                                    <Link href={item.link}><a>{item.nav}</a></Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                                <a href="#sidebar" className="hamburger-area d-lg-none d-block" data-bs-toggle="offcanvas" aria-controls="offcanvasExample">
                                    <span />
                                    <span />
                                    <span />
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-auto col-12 order-lg-3 order-3 ms-auto">
                                <div className="interaction-area">
                                    <Link href="/registration">
                                        <a className="btn btn-outline-light btn-lg signup-area">
                                            Log in
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;