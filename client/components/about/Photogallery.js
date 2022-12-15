import { SwiperSlide } from "swiper/react";
import SwiperLayout from "../slider/Swiper";

const Photogallery = () => {
    const photogallery = [
        {
            id: 1,
            image: '/images/resource/photogallery/1.png'
        },
        {
            id: 2,
            image: '/images/resource/photogallery/2.png'
        },
        {
            id: 3,
            image: '/images/resource/photogallery/3.png'
        },
        {
            id: 4,
            image: '/images/resource/photogallery/4.png'
        },
        {
            id: 5,
            image: '/images/resource/photogallery/5.png'
        },
        {
            id: 6,
            image: '/images/resource/photogallery/6.png'
        },
        {
            id: 7,
            image: '/images/resource/photogallery/7.png'
        },
        {
            id: 8,
            image: '/images/resource/photogallery/8.png'
        },
    ]
    return (
        <section className="photogallery section section-padding pb-0">
            <div className="section-title section-title--white justify-content-center section-title-mb-xl">
                <div className="section-title--wrapper">
                    <div className="title title-green">
                        Our photo <span>happy</span> gallery
                    </div>
                </div>
            </div>
            <div className="container position-relative">
                <SwiperLayout items={6} margin={24}>
                    {photogallery.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <a href={item.image} className="image-area">
                                    <img src={item.image} alt="#" />
                                </a>
                            </SwiperSlide>
                        )
                    })}
                </SwiperLayout>
            </div>
        </section>
    )
}

export default Photogallery;