import Consequat from "../../components/about/Consequat";
import HowWork from "../../components/about/HowWork";
import Info from "../../components/about/Info";
import Photogallery from "../../components/about/Photogallery";
import Breadcrumbs from "../../components/layouts/Breadcrumbs";
import MainLayouts from "../../components/layouts/MainLayouts";

const AboutPage = () => {
    return (
        <MainLayouts>
            <Breadcrumbs title={'О нас'} />
            <section className="vg-about-page">
                <div className="container">
                    <Info />
                </div>
                <Consequat />
                <HowWork />
                <Photogallery />
            </section>
        </MainLayouts>
    )
}

export default AboutPage;