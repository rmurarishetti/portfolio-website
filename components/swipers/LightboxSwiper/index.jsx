import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Mousewheel } from 'swiper';
import LightboxSlide from './LightboxSlide';
import styles from './LightboxSwiper.module.scss'

import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css';

function LightboxSwiper({ data, initialSlide = 0, setLightbox, onClick, showDetails = True }) {
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(initialSlide);

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
    const len = data.length;

    const incrementSlide = (i) => {
        i > 0 ? swiper.slideNext() : swiper.slidePrev();
    }

    const isArrowActive = activeIndex === 0 || activeIndex === len - 1;

    return (
        <Swiper
            onClick={onClick}
            onSwiper={setSwiper}
            className={styles.swiper}
            modules={[Keyboard, Pagination, Mousewheel]}
            slidesPerView={mobile ? 1 : 2}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            initialSlide={initialSlide}
            onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
            }}
            centeredSlides={true}
            mousewheel
            grabCursor
            loop>
            {data.map((artData, i) => {
                return (
                    <SwiperSlide
                        key={artData.id}
                        className={styles.swiperSlide}>
                        <LightboxSlide {...artData} showDetails={showDetails} />
                    </SwiperSlide>
                )
            })}
            {swiper &&
                <div className={styles.footer}>
                    <div
                        className={[styles.arrow, styles.leftArrow].join(' ')}
                        onClick={() => incrementSlide(-1)}>
                        ←
                    </div>
                    <div className={styles.fraction}>
                        <div className={styles.current}>{activeIndex + 1}</div>
                        <div className={styles.seperator}>/</div>
                        <div className={styles.total}>{len}</div>
                    </div>
                    <div
                        className={[styles.arrow, styles.rightArrow].join(' ')}
                        onClick={() => incrementSlide(1)}>
                        →
                    </div>
                </div>
            }
        </Swiper >
    );
}

export default LightboxSwiper;