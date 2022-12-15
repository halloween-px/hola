const MainAbout = () => {
    return (
        <section className="vg-about section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-5 col-lg-6">
                        <div className="vg-about-item">
                            <div className="section-title mb-4">
                                <div className="section-title--wrapper">
                                    <div className="title title-green">
                                        <span>Why</span> choose us?
                                    </div>
                                    <div className="subtitle">Some important facts</div>
                                </div>
                            </div>
                            <div className="text-area">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in.
                            </div>
                            <div className="d-inline-block">
                                <a href="/courses" className="btn btn--primary d-lg-block d-none">
                                    Sign up for a course
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-7 col-lg-6">
                        <div className="vg-about-video">
                            <a href="/images/resource/video.mp4">
                                <img src="/images/resource/about/about_video_poster.jpg" alt="#" />
                            </a>
                        </div>
                        <div>
                            <a href="#" className="btn btn--primary d-lg-none d-block">
                                Sign up for a course
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainAbout;