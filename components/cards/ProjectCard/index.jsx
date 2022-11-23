import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './ProjectCard.module.scss'
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import { Tag, DateDiv, TypeTag } from '../../badges';
import { projectTypeStyleClasses } from '../../../data/projectTypeStyleClasses';
import { rgbDataURL } from '../../../helpers/format';

function ProjectCard({ id, name, subtitle, start, end, featured, type, tags, thumbnail, hidden }) {

    const [mobile, setMobile] = useState(window.innerWidth < 500)
    useEffect(() => {
        function handleResize() {
            setMobile(window.innerWidth < 500)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <Tilt
            tiltReverse
            scale={1.02}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareColor={featured ? `var(--color-${type.toLowerCase()})` : 'var(--color-accent-primary)'}
            glarePosition="all"
            glareMaxOpacity={0.3}
            glareBorderRadius={10}
            perspective={500}
            transitionSpeed={500}
            glareEnable
            tiltEnable={!mobile}
            className={[styles.card, featured ? styles.featured : '', projectTypeStyleClasses(styles, type), hidden ? styles.hidden : ''].join(' ')}>
            <Link href={`/projects/${id}`}>
                <a>
                    <div className={styles.thumbnail}>
                        <Image
                            src={thumbnail.href}
                            alt={thumbnail.alt}
                            objectFit='cover'
                            layout='fill' />
                        <div className={styles.typeTag}>
                            <TypeTag type={type}></TypeTag>
                        </div>
                        <div className={styles.arrow}>
                            &rarr;
                        </div>
                        <div className={styles.tags}>
                            {tags.map((tag, idx) => {
                                return (
                                    <Tag key={tag}>{tag}</Tag>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.date}>
                            <DateDiv
                                start={start}
                                end={end} />
                        </div>
                        <h2 className={styles.title}>{name}</h2>
                        <p className={styles.subtitle}>{subtitle}</p>
                    </div>
                </a>
            </Link>
        </Tilt>
    )
}

export default ProjectCard