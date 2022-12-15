const AppsMain = () => {
    return (
        <section className="vg-apps section section-padding">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-title section-title-mb-xl">
                            <div className="section-title--wrapper">
                                <div className="title title-red mb-0">
                                    Ready to <span>learn and enjoy</span> with us?
                                </div>
                            </div>
                        </div>
                        <div className="vg-apps-item">
                            <div className="text-area">
                                Join us and more than 300 successfull students to easy learn
                                languages by using Hola. ⚡
                            </div>
                            <div className="app-area">
                                <a href="#" className="app-store">
                                    <img src="/images/resource/apps/appStore.png" alt="#" />
                                </a>
                                <a href="#" className="google-pay">
                                    <img src="/images/resource/apps/googlePay.png" alt="#" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-phone" data-active="phone">
                    <img src="/images/resource/apps/phone2.png" alt="#" />
                    <div className="body-area">
                        <div className="logo-area">
                            <img src="/images/logo/logo.png" alt="#" className="img-fluid" />
                        </div>
                        <div className="title-area"></div>
                        <a href="#" className="btn btn--primary">
                            Start learning now
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default AppsMain;