const Join = () => {
    return (
        <section className="join section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-7">
                                <div className="section-title section-title--white mb-0">
                                    <div className="section-title--wrapper">
                                        <div className="title title-red title-red-special">
                                            Join us <br />
                                            and <span>stay tuned!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <form action="" className="vg-form" method="post">
                                    <input
                                        type="text"
                                        className="vg-form-control w-100"
                                        placeholder="Enter your email *"
                                        name="user_email"
                                        required=""
                                    />
                                    <a href="#" className="btn-circle">
                                        <i className="fa-thin fa-arrow-right-long" />
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Join;