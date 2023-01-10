import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Mousewheel } from 'swiper';
import { ArtCard } from "../../cards";

import styles from './ThumbnailSwiper.module.scss'

import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css';

function ArtsSwiper({ artsData }) {
    return (
        <Swiper
            className={[styles.swiper, styles.artSwiper].join(' ')}
            modules={[Keyboard, Pagination, Mousewheel]}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            initialSlide={0}
            mousewheel
            grabCursor
            loop>
            <div className={styles.fade} />
            {artsData.map((artData, i) => {
                return (
                    <SwiperSlide key={artData.id} className={styles.swiperSlide} >
                        <ArtCard {...artData} />
                    </SwiperSlide>
                )
            })}
        </Swiper >
    );
}

export default ArtsSwiper;