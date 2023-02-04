import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/layouts/Breadcrumbs";
import MainLayouts from "../../components/layouts/MainLayouts";
import YandexMap from "../../components/yandexMap/YandexMap";
import { loadParamsInfo } from "../../modules/paramsInfo/redux/actions";

const Contacts = () => {
    const paramsInfo = useSelector((store) => store.paramsInfo.items);
    const dispatch = useDispatch();
    const optionMaps = {
        defaultState: {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: ["zoomControl", "fullscreenControl"],
        },
        modulesMap:["control.ZoomControl", "control.FullscreenControl"],
        modulesPlacemark:["geoObject.addon.balloon"],
        geometry: [55.751574, 37.573856],
        properties:{
            balloonContentBody:
              "Привет, это же Москва",
          }
    }
    console.log(paramsInfo);
    useEffect(() => {
        dispatch(loadParamsInfo())
    }, [])
    return (
        <MainLayouts>
            <Breadcrumbs title={'Блог'} />
            <section className="contacts section section-padding-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-9 col-xl-8">
                            <div className="contacts-wrapper">
                                <div className="section-title">
                                    <div className="section-title--wrapper">
                                        <div className="title title-green">
                                            We’d Love To <span>Help You</span>
                                        </div>
                                        <div className="text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-gap">
                                    <div className="col-xxl-4 col-xl-12">
                                        <a href="#map-contacts" className="contacts-item">
                                            <i className="fa-solid fa-location-dot" />
                                            <span className="info-area">
                                                <span className="title">Our Location</span>
                                                <span className="text">
                                                    
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-xxl-4 col-md-6">
                                        <a href="#" className="contacts-item">
                                            <i className="fa-solid fa-phone" />
                                            <span className="info-area">
                                                <span className="title">Phone Number</span>
                                                <span className="text" href="#">
                                                    
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="#" className="contacts-item">
                                            <i className="fa-solid fa-envelope" />
                                            <span className="info-area">
                                                <span className="title">Email Address</span>
                                                <span className="text"></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <a href="#" className="contacts-item social-area">
                                            <span>
                                                <i className="fa-brands fa-twitter" />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <a href="#" className="contacts-item social-area">
                                            <span>
                                                <i className="fa-brands fa-instagram" />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <a href="#" className="contacts-item social-area">
                                            <span>
                                                <i className="fa-brands fa-facebook-f" />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <a href="#" className="contacts-item social-area">
                                            <span>
                                                <i className="fa-brands fa-youtube" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-xl-0 mb-4" id="map-contacts">
                                <YandexMap optionMap={optionMaps} $class='map-container' />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4">
                            <div className="widgets">
                                <div className="widgets-item">
                                    <h4>
                                        Write to <span>us</span>
                                    </h4>
                                    <p>
                                        Our specialists will contact you as soon as possible and answer
                                        all your questions
                                    </p>
                                    <form action="#" className="vg-form" method="post">
                                        <div className="row row-gap form-item">
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="vg-form-control"
                                                    placeholder="Name *"
                                                    name="user_name"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="vg-form-control"
                                                    placeholder="Phone *"
                                                    name="user_phone"
                                                    data-mask="phone"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-12">
                                                <textarea
                                                    placeholder="Message *"
                                                    className="vg-form-control"
                                                    name="user_message"
                                                    required=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn--primary w-100">
                                                    <span>Send an application</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayouts>

    )
}

export default Contacts;