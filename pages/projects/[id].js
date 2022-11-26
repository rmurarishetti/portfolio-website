import { projectsData } from '../../data/projectsData';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { DateDiv } from '../../components/badges';
import { TypeTag } from '../../components/badges';
import { GalleryWLightbox } from '../../components/layout';
import styles from '../../styles/Project.module.scss'
// export const getStaticPaths = async () => {
//     const res = projectsData
//     console.log(res)
// }

export const getStaticPaths = async () => {
    const paths = projectsData.map(project => {
        return {
            params: { id: project.id }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = projectsData.filter((project) => project.id == id)[0]

    return {
        props: { project: JSON.parse(JSON.stringify(data)) }
    }
}

function ProjectPage({ project }) {
    // console.log(project.media.filter(obj => 'image' in obj))
    return (
        <>
            <Head>
                <title>Rohit Nag | Projects | {project.name}</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
            </Head>
            <div className={styles.thumbnail}>
                <div className={styles.path}>
                    <div className={styles.arrow}>&larr;</div>
                    <div className={styles.parent}><Link href={'/projects'}>Projects</Link></div>
                    <div className={styles.seperator}>/</div>
                    <div className={styles.name}>{project.name}</div>
                </div>
                <div className={styles.typeTag}>
                    <TypeTag type={project.type}></TypeTag>
                </div>
                <Image
                    src={project.thumbnail.href}
                    alt={project.thumbnail.alt}
                    objectFit='cover'
                    layout='fill' />
            </div>
            <div className={styles.text}>
                <DateDiv start={new Date(project.start)} end={new Date(project.end)} longDate duration />
                <h1 className={styles.name}>{project.name}</h1>
                <div className={styles.subtitle}>{project.subtitle}</div>
                <div className={styles.description}>{project.description.map((p, i) => {
                    return (
                        <p key={i}>{p}</p>
                    )
                })
                }</div>
            </div>
            <div className={styles.galleryContainer}>
                <GalleryWLightbox data={project.media.filter(obj => 'image' in obj)} showDetails={false} />
            </div>
        </>
    );
}

export default ProjectPage;