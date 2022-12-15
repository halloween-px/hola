import MainAbout from "../components/home/MainAbout";
import AppsMain from "../components/home/Apps";
import FormMain from "../components/home/FormMain";
import Infoblock from "../components/home/Infoblock";
import Join from "../components/home/JoinMain";
import News from "../components/home/News";
import Reviews from "../components/home/Reviews";
import Teams from "../components/home/Teams";
import MainLayouts from "../components/layouts/MainLayouts";
import Slider from "../components/slider/Slider";

const MainPage = () => {
    // const [active, setActive] = useState(null);
    return (
        <MainLayouts>
            <Slider />
            <Infoblock />
            <FormMain />
            <MainAbout />
            <Teams />
            <Reviews />
            <div className="section-lines-apps overflow-hidden">
                <AppsMain />
                <News />
            </div>
            <Join />
        </MainLayouts>
    )
}

// const CreateContext = () => {
//     const storage = {}
//     const Provider = ({value}) => {
//         storage.value = value;
//     }

//     return {
//         Provider, 
//         getValue: () => {
//             return storage.value
//         }
//     }
// }

// const useState = (defaultValue) => {
//     const storage = {
//         value: defaultValue,
//     }
//     const setValue = (newValue) => {
//         storage.value = newValue;
//         this.coller()
//     }
//     return [storage.value, setValue]
// }

export default MainPage;