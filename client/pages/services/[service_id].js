import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useMainContext } from "../../components/context/MainContext";
import Breadcrumbs from "../../components/layouts/Breadcrumbs";
import MainLayouts from "../../components/layouts/MainLayouts";
import Widgets from "../../components/widgets/Widgets";
import WidgetsForm from "../../components/widgets/WidgetsForm";
import SwiperLayout from "../../components/slider/Swiper";
import { SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { loadService, loadServices } from "../../modules/services/redux/actions";

const ServicePage = ({defaultService}) => {
    const service = useSelector((store) => store.services.item) || defaultService;
    const services = useSelector((store) => store.services.items);
    const dispatch = useDispatch();
    const router = useRouter();
    const serviceId = router.query.service_id;
    const numbers = [1, 2, 3, 4];

    useEffect(() => {
        if (!serviceId) {
            return
        }
        dispatch(loadService(serviceId))
        dispatch(loadServices())
    }, [serviceId])

    return (
        <MainLayouts>
            {!!service && <Breadcrumbs title={'Услуги'} link={'/services'} name={service.title} />}
            <section className="section section-padding-sm courses-show">
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-xxl-9 col-xl-8">
                            {!!service &&
                                <figure className="image-area">
                                    <img src={service.image} alt="#" />
                                    <img
                                        className="flag"
                                        src={service.flag}
                                        alt="#"
                                    />
                                </figure>
                            }
                            <div className="content-area">
                                {!!service?.text && <div dangerouslySetInnerHTML={{ __html: service.text }} />}
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-check" />
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                                            minima.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check" />
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                                            voluptas voluptates voluptatibus.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check" />
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check" />
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Eveniet exercitationem facilis mollitia nesciunt, reiciendis
                                            unde.
                                        </span>
                                    </li>
                                </ul>
                                <SwiperLayout items={3} margin={24} pagination={true}>
                                    {numbers.map((el, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <figure className="image-area">
                                                    <img src={`/images/resource/courses/show${el}.jpg`} alt="#" />
                                                </figure>
                                            </SwiperSlide>
                                        )
                                    })}
                                </SwiperLayout>
                                <h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
                                    atque, molestiae nisi sunt. Ducimus molestiae odio sequi.
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium aut beatae consequatur corporis cum dignissimos
                                    doloribus ea eos ex facere, in molestias mollitia nostrum nulla
                                    perferendis praesentium provident repudiandae sapiente sequi,
                                    tempore ut vitae voluptatum.
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4">
                            <div className="widgets">
                                <div className="widgets-wrapper">
                                    {!!services && <Widgets title={'Другие услуги'} list={services.map((item) => {
                                        let activeClass = serviceId === item._id ? 'active' : ' ';
                                        return {
                                            image: item.flag,
                                            title: item.title,
                                            id: item._id,
                                            link: `/services/${item._id}`,
                                            activeClass: activeClass
                                        }

                                    })} />}
                                    <WidgetsForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayouts>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3001/services/${context.params.service_id}`);
    const data = await res.json();
    return {
        props: {
            defaultService: data.item,
        },
    }
}

export default ServicePage;