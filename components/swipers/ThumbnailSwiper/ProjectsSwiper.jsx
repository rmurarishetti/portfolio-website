import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Mousewheel } from 'swiper';
import { ProjectCard } from "../../cards";

import styles from './ThumbnailSwiper.module.scss'

import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css';

function ProjectsSwiper({ projectsData }) {
    return (
        <Swiper
            className={styles.swiper}
            modules={[Keyboard, Pagination, Mousewheel]}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            initialSlide={0}
            mousewheel
            grabCursor
            rewind>
            <div className={styles.fade} />
            {projectsData.map((projectData, i) => {
                return (
                    <SwiperSlide key={projectData.id} className={styles.swiperSlide} >
                        <ProjectCard {...projectData} />
                    </SwiperSlide>
                )
            })}
        </Swiper >
    );
}

export default ProjectsSwiper;