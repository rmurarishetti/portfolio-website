import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Mousewheel } from 'swiper';
import { ProjectCard } from "../../cards";
import { useState } from 'react';

import styles from './ThumbnailSwiper.module.scss'

import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css';

function ThumbnailSwiper({ projectsData, activeIndex = 0 }) {
    const [swiper, setSwiper] = useState(null);
    const [activeSlide, setActiveSlide] = useState(activeIndex);
    const len = projectsData.length;

    const incrementSlide = (i) => {
        i > 0 ? swiper.slideNext() : swiper.slidePrev();
    }
    return (
        <Swiper
            onSwiper={setSwiper}
            className={[styles.swiper, styles.projectSwiper].join(' ')}
            modules={[Keyboard, Pagination, Mousewheel]}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            loop={true}
            centeredSlides={true}
            initialSlide={5}
            mousewheel
            grabCursor
            onSlideChange={(swiper) => {
                setActiveSlide(swiper.realIndex);
            }}
        >
            <div className={styles.fade} />
            {projectsData.map((projectData, i) => {
                return (
                    <SwiperSlide key={projectData.id} className={[styles.swiperSlide, i === activeSlide ? styles.active : ''].join(' ')}>
                        <ProjectCard {...projectData} />
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
                        <div className={styles.current}>{activeSlide + 1}</div>
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

export default ThumbnailSwiper;