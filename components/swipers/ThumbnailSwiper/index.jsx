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

    const isLeftActive = activeSlide > 0;
    const isRightActive = activeSlide < len - 1;
    return (
        <Swiper
            onSwiper={setSwiper}
            className={[styles.swiper, styles.projectSwiper].join(' ')}
            modules={[Keyboard, Pagination, Mousewheel]}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            centeredSlides={true}
            // centeredSlidesBounds={true}
            initialSlide={0}
            mousewheel
            grabCursor
            onSlideChange={(swiper) => {
                setActiveSlide(swiper.realIndex);
            }}
        >
            <div className={styles.fade} />
            {projectsData.map((projectData, i) => {
                return (
                    <SwiperSlide key={projectData.id} className={styles.swiperSlide} >
                        <ProjectCard {...projectData} />
                    </SwiperSlide>
                )
            })}
            {swiper &&
                <div className={styles.footer}>
                    <div
                        className={[styles.arrow, styles.leftArrow, !isLeftActive ? styles.disabled : ''].join(' ')}
                        onClick={() => isLeftActive ? incrementSlide(-1) : null}>
                        ←
                    </div>
                    <div className={styles.fraction}>
                        <div className={styles.current}>{activeSlide + 1}</div>
                        <div className={styles.seperator}>/</div>
                        <div className={styles.total}>{len}</div>
                    </div>
                    <div
                        className={[styles.arrow, styles.rightArrow, !isRightActive ? styles.disabled : ''].join(' ')}
                        onClick={() => isRightActive ? incrementSlide(1) : null}>
                        →
                    </div>
                </div>
            }
        </Swiper >
    );
}

export default ThumbnailSwiper;