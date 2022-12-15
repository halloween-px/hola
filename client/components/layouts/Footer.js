const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-3 col-sm-6">
                            <div className="logo-area mb-4">
                                <img src="/images/logo/logo.png" alt="#" className="img-fluid" />
                            </div>
                            <ul className="list list-icon flex-column">
                                <li className="list-item">
                                    <i className="fa-solid fa-location-dot" />
                                    <a href="#">99 Barnard St - Suite 111 United States GA 22222</a>
                                </li>
                                <li className="list-item">
                                    <i className="fa-solid fa-envelope" />
                                    <a href="#">mail@ourcourses.com</a>
                                </li>
                                <li className="list-item">
                                    <i className="fa-solid fa-phone" />
                                    <a href="#"> 99 (234) 333-22111</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h5 className="title-area">Educational Program</h5>
                            <ul className="list flex-column">
                                <li className="list-item">
                                    <a href="#">Course for adults</a>
                                </li>
                                <li className="list-item">
                                    <a href="#">Courses for children</a>
                                </li>
                                <li className="list-item">
                                    <a href="#">Corporate training</a>
                                </li>
                                <li className="list-item">
                                    <a href="#">Online learning</a>
                                </li>
                                <li className="list-item">
                                    <a href="#">Exam preparation</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h5 className="title-area">Additionally</h5>
                            <ul className="list flex-column">
                                <li className="list-item">
                                    <a href="#">Seasonal programs</a>
                                </li>
                                <li className="list-item">
                                    <a href="#">Speaking classes</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="section-title section-title--white mb-0">
                                <div className="section-title--wrapper">
                                    <div className="title title-red title-green">
                                        Follow <span>us</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="list list-social">
                                <li className="list-item">
                                    <a href="#">
                                        <i className="fa-brands fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href="#">
                                        <i className="fa-brands fa-instagram" />
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href="#">
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href="#">
                                        <i className="fa-brands fa-youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="footer-bottom">
                <div className="container">
                    <a href="#">© Copyrights 2022 All rights reserved.</a>
                </div>
            </section>
        </section>
    )
}

export default Footer;