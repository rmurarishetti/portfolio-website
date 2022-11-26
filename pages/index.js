import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { HomeCard } from '../components/cards';
import { FeaturedProjectsSwiper } from '../components/swipers';
import WinchScene from '../components/3d/WinchScene';
import KineticScene from '../components/3d/KineticScene';
import styles from '../styles/Home.module.scss';
import { projectsData } from '../data/projectsData';
import { artsData } from '../data/artsData';
import { pagesData } from '../data/pagesData';
import profilePic from '../public/images/profile/profile.jpg';
import { daysDiff } from '../helpers/math';
import { GalleryWLightbox } from '../components/layout';
import { TextTransitionBadge } from '../components/badges';

export default function Home() {

  return (
    <>
      <Head>
        <title>Rohit Nag</title>
        <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
      </Head>
      <div className={styles.header}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Rohit Nag
          </h1>
          <div className={styles.role}>
            A Mechanical Engineering student at&nbsp;
            <a
              href="https://www.imperial.ac.uk/ "
              target="_blank"
              rel="noreferrer">
              Imperial College
            </a>.
          </div>
          <div className={styles.description}>
            Passionate about merging <em>Engineering</em>, <em>Computing</em> and <em>Design</em> with an interest in embedded systems, physics modelling and AI.
            <br />
            Also a questionable&nbsp;
            <TextTransitionBadge
              textArray={["UI / UX", "graphic", "product"]}
              speed={2000} />
            &nbsp;designer on the side 😁.
          </div>
        </div>
        <div className={styles.profile}>
          <Image
            src={profilePic}
            alt="Picture of Rohit Nag"
            placeholder='blur'
            objectFit='cover'
            layout='fill' />
        </div>
      </div>

      <div className={styles.grid}>
        {pagesData.slice(1).map((pageData) => {
          return (
            <HomeCard
              key={pageData.title}
              {...pageData} />
          )
        })}
      </div>
      <WinchScene />
      <div className={styles.block}>
        <h2>Featured Projects</h2>
        <FeaturedProjectsSwiper projectsData={projectsData.filter(projectData => projectData.featured)} />
        <Link href={pagesData.filter((pageData => pageData.title == 'Projects'))[0].link}>
          <a className={styles.link}>
            {pagesData.filter((pageData => pageData.title == 'Projects'))[0].emoji} All projects &rarr;
          </a>
        </Link>
      </div>
      <KineticScene />
      <div className={[styles.block, styles.artBlock].join(' ')}>
        <h2>New Artwork</h2>
        <div className={styles.galleryContainer}>
          <GalleryWLightbox data={artsData.filter(artData => daysDiff(new Date(), artData.date) < 365)} />
        </div>
        <Link href={pagesData.filter((pageData => pageData.title == 'Art'))[0].link} >
          <a className={styles.link}>
            {pagesData.filter((pageData => pageData.title == 'Art'))[0].emoji} All artwork &rarr;
          </a>
        </Link>
      </div>
    </>
  )
}
