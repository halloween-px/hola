import MainLayouts from "../../components/layouts/MainLayouts";
import Breadcrumbs from "../../components/layouts/Breadcrumbs";
import Link from "next/link";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadServices } from "../../modules/services/redux/actions";

const Services = () => {
    const services = useSelector((store) => store.services.items);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(loadServices())
    }, [])
    return (
        <MainLayouts>
            <Breadcrumbs title={'Наши курсы'} />
            <section className="section section-padding-sm courses">
                <div className="container">
                    <div className="row row-gap">
                        {services.map((service) => {
                            return (
                                <div className="col-xl-4 col-md-6 courses-wrapper" key={service._id}>
                                    <Link href={`/services/${service._id}`}>
                                        <a className="courses-item">
                                            <img
                                                className="flag"
                                                src={service.flag}
                                                alt="#"
                                            />
                                            <img className="image" src={service.image} alt="#" />
                                            <span className="title-area">{service.title}</span>
                                            <span className="link-area">
                                                <span className="link">
                                                    Подробнее <i className="fa-regular fa-arrow-right-long" />
                                                </span>
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </MainLayouts>
    )
}

export default Services;