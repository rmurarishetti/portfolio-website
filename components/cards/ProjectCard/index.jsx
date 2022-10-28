import Image from 'next/image';
import styles from './ProjectCard.module.scss'
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import { Tag, DateDiv, TypeTag } from '../../badges';
import { projectTypeStyleClasses } from '../../../data/projectTypeStyleClasses';

function ProjectCard({ id, name, subtitle, start, end, featured, type, tags, thumbnail }) {
    return (
        <Tilt
            tiltReverse
            glareEnable
            scale={1.02}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareColor='var(--color-accent-primary)'
            glarePosition="all"
            glareMaxOpacity={0.7}
            glareBorderRadius={10}
            perspective={500}
            transitionSpeed={500}
            className={[styles.card, styles.featured, projectTypeStyleClasses(styles, type)].join(' ')}>
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