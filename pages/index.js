import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { HomeCard } from '../components/cards';
import { ThumbnailSwiper } from '../components/swipers';
import { WinchScene } from '../components/3d';
import styles from '../styles/Home.module.scss';
import { projectsData } from '../data/projectsData';
import { artsData } from '../data/artsData';
import { pagesData } from '../data/pagesData';
import profilePic from '../public/images/profile/profile.jpg';
import { daysDiff } from '../helpers/math';
import { GalleryWLightbox } from '../components/layout';
import { TextTransitionBadge } from '../components/badges';
import { useAOS, useScrollPercentage } from '../helpers/hooks';

export default function Home() {
  useAOS();
  // const [scrolRef, percentage] = useScrollPercentage()

  return (
    <>
      <Head>
        <title>Rohit Nag</title>
        <meta name="description" content="My personal portfolio of projects, artwork and graphics." />
        <meta name="keywords" content="Mechnical Engineer, Developer, Designer, Portfolio" />
      </Head>
      <div className={styles.header}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Rohit Nag
          </h1>
          <div className={styles.role}>
            A Master&#39;s Mechanical Engineering student at&nbsp;
            <a
              href="https://www.imperial.ac.uk/ "
              target="_blank"
              rel="noreferrer">
              Imperial College London
            </a>.
          </div>
          <div className={styles.description}>
            Passionate about merging <em>Engineering</em>, <em>Computing</em> and <em>Design</em> with an interest in embedded systems, physics modelling and AI.
            <br />
            Also a questionable&nbsp;
            <TextTransitionBadge
              textArray={["UI / UX", "graphic", "product"]}
              speed={2000} />
            &nbsp;designer on the side.
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

      <div className={styles.grid} data-aos="fade-up">
        {pagesData.slice(1, -1).map((pageData) => {
          return (
            <HomeCard
              key={pageData.title}
              {...pageData} />
          )
        })}
      </div>
      <div
        className={styles.winchSceneContainer}
        data-aos="fade-up"
      // ref={scrolRef}
      >
        <WinchScene scrollStart={0} scrollEnd={0.6} />
        <Link href='/projects/lunar-deployer'>
          <a className={styles.link}>
            <div className={styles.parent}>Projects / Lunar Rover Deployer</div>
            <div className={styles.arrow}>&rarr;</div>
          </a>
        </Link>
      </div>
      <div className={styles.block}>
        <h2>Featured Projects</h2>
        <ThumbnailSwiper projectsData={projectsData.filter(projectData => projectData.featured)} />
        <Link href={pagesData.filter((pageData => pageData.title == 'Projects'))[0].link}>
          <a className={styles.link}>
            <div className={styles.parent}>View all projects</div>
            <div className={styles.arrow}>&rarr;</div>
          </a>
        </Link>
      </div>
      {/* <KineticScene /> */}
      <div className={[styles.block, styles.artBlock].join(' ')}>
        <h2>Recent Artwork</h2>
        <div className={styles.galleryContainer}>
          <GalleryWLightbox data={artsData.sort(artData => daysDiff(new Date(), artData.date)).slice(0, 8)} />
        </div>
        <Link href={pagesData.filter((pageData => pageData.title == 'Art'))[0].link} >
          <a className={styles.link}>
            <div className={styles.parent}>View all artwork</div>
            <div className={styles.arrow}>&rarr;&nbsp;</div>
          </a>
        </Link>
      </div>
      <div className={styles.guestbookNote} data-aos="fade-up">
        <div className={styles.main}>
          Feel free to leave some feedback or appreciation by signing my&nbsp;
          <Link href='/guestbook'>
            <a className={styles.link}>
              <div className={styles.parent}>Guestbook</div>
              <div className={styles.arrow}>&rarr;</div>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
