import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperLayout from "../slider/Swiper";

const Reviews = () => {
    const reviews = [
        {
            name: 'Devin Winters',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt adipisicing elit, dolor ut labore.',
            avatar: 'https://i.pravatar.cc/150?img=1'
        },
        {
            name: 'Devin Winters',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt adipisicing elit, dolor ut labore.',
            avatar: 'https://i.pravatar.cc/150?img=1'
        },
        {
            name: 'Devin Winters',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt adipisicing elit, dolor ut labore.',
            avatar: 'https://i.pravatar.cc/150?img=1'
        },
    ]
    useEffect(() => {
        if(AnimateCanvas) {
            AnimateCanvas()
        }
    }, [])
    return (
        <>
            <section className="vg-reviews section section-padding">
                <canvas></canvas>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title section-title--center">
                                <div className="section-title--wrapper text-center">
                                    <div className="title title-green">
                                        What our <span>students</span> say about courses
                                    </div>
                                    <div className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SwiperLayout items={3} margin={24}>
                        {reviews.map((review, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="vg-reviews-item">
                                        <div className="text-area">
                                            {review.text}
                                        </div>
                                        <div className="author-area">
                                            <div className="avatar">
                                                <img src={review.avatar} alt="#" />
                                            </div>
                                            <div>
                                                <div className="name">{review.name}</div>
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </SwiperLayout>
                </div>
            </section>
        </>
    )
}

export default Reviews;