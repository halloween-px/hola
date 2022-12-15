import { SwiperSlide } from "swiper/react";
import SwiperLayout from "../slider/Swiper";

const Infoblock = () => {
    const infoblock = [
        {
            id: 1,
            image: "/images/resource/infoblock/1.jpg",
            flag: "/images/resource/infoblock/flags/1.png"
        },
        {
            id: 2,
            image: "/images/resource/infoblock/2.jpg",
            flag: "/images/resource/infoblock/flags/2.png"
        },
        {
            id: 3,
            image: "/images/resource/infoblock/3.jpg",
            flag: "/images/resource/infoblock/flags/3.png"
        },
        {
            id: 4,
            image: "/images/resource/infoblock/4.jpg",
            flag: "/images/resource/infoblock/flags/4.png"
        },
        {
            id: 5,
            image: "/images/resource/infoblock/5.jpg",
            flag: "/images/resource/infoblock/flags/5.png"
        },
        {
            id: 6,
            image: "/images/resource/infoblock/6.jpg",
            flag: "/images/resource/infoblock/flags/6.png"
        },
    ]
    return (
        <section className="vg-infoblock">
            <div className="container">
                <SwiperLayout items={6} margin={24}>
                    {infoblock.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div className="image-area">
                                    <img
                                        className="country"
                                        src={item.image}
                                        alt="#"
                                    />
                                    <img
                                        className="flag"
                                        src={item.flag}
                                        alt="#"
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </SwiperLayout>
            </div>
        </section>
    )
}

export default Infoblock;