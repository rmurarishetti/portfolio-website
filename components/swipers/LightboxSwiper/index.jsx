import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Mousewheel } from 'swiper';
import LightboxSlide from './LightboxSlide';
import styles from './LightboxSwiper.module.scss'

import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css';

function LightboxSwiper({ data, initialSlide = 0, setLightbox, onClick, showDetails = True }) {

    const [mobile, setMobile] = useState(window.innerWidth < 800)
    useEffect(() => {
        function handleResize() {
            setMobile(window.innerWidth < 500)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <Swiper
            onClick={onClick}
            className={styles.swiper}
            modules={[Keyboard, Pagination, Mousewheel]}
            slidesPerView={mobile ? 1 : 2}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            initialSlide={initialSlide}
            centeredSlides={true}
            mousewheel
            grabCursor
            rewind>
            {data.map((artData, i) => {
                return (
                    <SwiperSlide
                        key={artData.id}
                        className={styles.swiperSlide}>
                        <LightboxSlide {...artData} showDetails={showDetails} />
                    </SwiperSlide>
                )
            })}
        </Swiper >
    );
}

export default LightboxSwiper;