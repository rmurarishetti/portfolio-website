import { projectsData } from '../../data/projectsData';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectCard } from '../../components/cards';
import { PersonButton, URLButton } from '../../components/buttons';
import { Tag, DateDiv, TypeTag } from '../../components/badges';
import { GalleryWLightbox, DocGalleryWLightbox } from '../../components/layout';
import { AdaptiveViewer } from '../../components/3d';
import styles from '../../styles/Project.module.scss'
import ReactPlayer from 'react-player'
import { useCorrectedTheme } from '../../helpers/hooks';
import { useGLTF } from '@react-three/drei';
// export const getStaticPaths = async () => {
//     const res = projectsData
//     console.log(res)
// }

export const getStaticPaths = async () => {
    const paths = projectsData.map(project => {
        return {
            params: {
                id: project.id
            }
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
    const theme = useCorrectedTheme();
    const formattedType = project.type.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')
    const typeStyle = {
        color: `var(--color-${formattedType})`
    }

    const relatedProjects = projectsData.filter((p) => {
        return (p.type === project.type && p.id !== project.id)
    })
    const images = project.media.filter(obj => 'image' in obj);
    const videos = project.media.filter(obj => 'video' in obj);
    return (
        <>
            <Head>
                <title>Rohit Nag | Projects | {project.name}</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
            </Head>
            <div className={styles.path}>
                <Link href={'/projects'}>
                    <a>
                        <div className={styles.arrow}>&larr;</div>
                        <div className={styles.parent}>Projects</div>
                    </a>
                </Link>
                <div className={styles.seperator}>/</div>
                <div className={styles.name}>{project.name}</div>
            </div>
            <div className={styles.thumbnail}>
                {project.link.href && <div className={styles.link}>
                    <URLButton name={project.link.name} href={project.link.href} />
                </div>}
                <Image
                    src={project.thumbnail.href}
                    alt={project.thumbnail.alt}
                    objectFit='cover'
                    layout='fill' />
            </div>
            <div className={styles.text}>
                <div className={styles.header}>
                    <DateDiv
                        start={new Date(project.start)}
                        end={project.end ? new Date(project.end) : null}
                        longDate
                        duration />
                </div>
                <h1 className={styles.name}>{project.name}</h1>
                <div className={styles.subtitle}>{project.subtitle}</div>
                <div className={styles.tags}>
                    <div className={styles.typeTag}>
                        <TypeTag type={project.type}></TypeTag>
                    </div>
                    {project.tags.map((tag) => {
                        return (
                            <Tag key={tag} >{tag}</Tag>
                        )
                    })}
                </div>
                {project.description[0] && <div className={styles.description}>
                    {project.description.map((paragraph, i) => {
                        return (
                            <p key={i}>{paragraph}</p>
                        )
                    })}
                </div>}
            </div>
            {project.model && <AdaptiveViewer {...project.model} />}
            {images[0] && <div className={styles.galleryContainer}>
                <GalleryWLightbox data={images} showDetails={false} />
            </div>}
            {videos[0] &&
                <div
                    className={styles.videosContainer}>
                    {videos.map((obj, i) => {
                        const aspectRatio = obj.video.aspectRatio ? obj.video.aspectRatio : 16 / 9
                        return (
                            <div className={styles.video} key={i} style={{ aspectRatio: aspectRatio }}>
                                <ReactPlayer url={obj.video.href} controls={true} pip light={theme == 'light'} />
                            </div>
                        )
                    })}
                </div>}
            {project.documents[0] &&
                <div className={styles.documentsContainer}>
                    <div className={styles.header}>Documents</div>
                    <DocGalleryWLightbox docsData={project.documents} />
                </div>}
            {project.people[0] && <div className={styles.peopleContainer}>
                <div className={styles.header}>Contributors</div>
                <div className={styles.people}>
                    {project.people.map((person, i) => {
                        return (
                            <PersonButton
                                key={i}
                                name={person.name}
                                link={person.linkedin}
                                gender={person.gender} />
                        )
                    })}
                </div>
            </div>}

            <div className={styles.otherProjects}>
                {relatedProjects[0] && <>
                    <div className={styles.header}>
                        Other&nbsp;
                        <div className={styles.type} style={typeStyle}>{project.type.toLowerCase()}</div>
                        &nbsp;projects
                    </div>
                    <div className={styles.grid}>
                        {relatedProjects.map((project) => {
                            return (
                                <div
                                    className={styles.cardContainer}
                                    key={project.id}>
                                    <ProjectCard {...project} />
                                </div>
                            )
                        })}
                    </div>
                </>}
            </div>
            <Link href={'/projects'}>
                <a className={styles.prevLink}>
                    <div className={styles.arrow}>&larr;&nbsp;</div>
                    <div className={styles.parent}>Back to all projects</div>
                </a>
            </Link>
        </>
    );
    { useGLTF.preload(project.model.href); }
}

export default ProjectPage;