import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperLayout = ({ items, margin, navigation, pagination, children }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={margin ? margin : 12}
            slidesPerView={items ? items : 1}
            navigation={!!navigation && navigation}
            pagination={pagination ? true && {clickable:true} : false}
        >
            {children}
        </Swiper>
    )
}

export default SwiperLayout;