import SwiperLayout from "./Swiper";
import { SwiperSlide } from 'swiper/react'

const Slider = () => {
    const slides = [
        {
            id: 1,
            title: 'You can learn ; anything',
            subtitle: 'Select desired way of learning. We have a wide range of courses for the most selective taste! ⚡',
            btn: 'Start learning now',
            link: 'Get started for free'
        },
        {
            id: 2,
            title: 'You can learn ; anything',
            subtitle: 'Select desired way of learning. We have a wide range of courses for the most selective taste!',
            btn: 'Start learning now',
            link: 'Get started for free'
        },
    ]
    const separatet = (str, elem, index) => {
        return str.split(elem)[index]
    }
    return (
        <section className="vg-slider">
            <SwiperLayout items={1}>
                {slides.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className="vg-slider-item">
                                <img src="/images/resource/slide1.jpg" alt="#" />
                                <div className="vg-slider-wrapper">
                                    <div className="container">
                                        <div className="row h-100 align-items-center justify-content-center">
                                            <div className="col-xl-10 text-center">
                                                <h2 className="title">
                                                    {separatet(item.title, ';', 0)}
                                                    <span>{separatet(item.title, ';', 1)}</span>
                                                </h2>
                                                <h4 className="subtitle">
                                                    {item.subtitle}
                                                </h4>
                                                <div>
                                                    <a href="/courses" className="btn btn--primary mb-2">
                                                        {item.btn}
                                                    </a>
                                                </div>
                                                <a href="/courses" className="link-area">
                                                    {item.link}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </SwiperLayout>
        </section>
    )
}

export default Slider;