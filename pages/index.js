import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { HomeCard } from '../components/cards';
import { ThumbnailSwiper } from '../components/swipers';
import styles from '../styles/Home.module.scss';
import { projectsData } from '../data/projectsData';
import { pagesData } from '../data/pagesData';
import { xpData } from '../data/xpData';
import { navData } from '../data/navData';
import profilePic from '../public/images/profile/profile-pic.jpg';
import { useAOS, useScrollPercentage } from '../helpers/hooks';
import { XpPane } from '../components/layout';
import { eduData } from '../data/eduData';

export default function Home() {
  useAOS();
  const [scrolRef, percentage] = useScrollPercentage()

  return (
    <>
      <Head>
        <title>Rohit Murarishetti</title>
        <meta name="description" content="My personal portfolio of projects, experience and education." />
        <meta name="keywords" content="Computer Science Engineer, Developer, Portfolio" />
      </Head>
      <div className={styles.header}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Rohit Murarishetti
          </h1>
          <div className={styles.role}>
            Software and Devops Engineering for Weborion at 
            <Link href="https://www.cloudsine.tech/"> Cloudsine AI</Link> (Cloudsine).
          </div>
          <div className={styles.description} data-aos="fade-up">
            I thrive on exploring and unravelling the world around me. The world is my classroom, and I&apos;m always eager to learn, share, and grow.
            <br/> <br/>

            I&apos;m deeply passionate about all things tech and have an enduring fascination with electric automotives. 
            <br/>When I&apos;m not engrossed in work, I find joy in investing in the stock market, riding the waves of bull and bear runs.  
            <br/><br/>
            I am confident that my diverse experiences
            will enable me to provide unique and valuable insights into my undertakings.

          </div>
          
        </div>
        <div className={styles.profile}>
          <Image
            src={profilePic}
            alt="Picture of Rohit Murarishetti"
            placeholder='blur'
            objectFit='cover'
            layout='fill' />
        </div>
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

      <div className={styles.grid} data-aos="fade-up">
        {navData.slice(1).map((pageData) => {
          return (
            <HomeCard
              key={pageData.title}
              {...pageData} />
          )
        })}
      </div>
      
      <div className={styles.block} data-aos="fade-up">
          <h2>Education</h2>
          <XpPane xpData={eduData} />
      </div>

      <div className={styles.block} data-aos="fade-up">
          <h2>Experience</h2>
          <XpPane xpData={xpData} />
      </div>
    </>
  )
}
