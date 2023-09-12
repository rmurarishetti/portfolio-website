import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { HomeCard } from '../components/cards';
import { ThumbnailSwiper } from '../components/swipers';
import styles from '../styles/Home.module.scss';
import { projectsData } from '../data/projectsData';
import { pagesData } from '../data/pagesData';
import profilePic from '../public/images/profile/profile-pic.jpg';
import { TextTransitionBadge } from '../components/badges';
import { useAOS, useScrollPercentage } from '../helpers/hooks';
import { WinchScene } from '../components/3d';
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
            A senior year Computer Science and Design student at the 
            <Link href="https://www.sutd.edu.sg/"> Singapore University of Technology and Design.</Link>
          </div>
          <div className={styles.description}>
            I identify myself to be a curious and aware individual. I welcome every opportunity that comes my way where I can 
            &nbsp;
            <TextTransitionBadge
              textArray={["learn", "share", "apply"]}
              speed={2000} />
            &nbsp; knowledge. 
            <br/> <br/>

            I take a deep interst in <em>consumer electronics</em>, <em>electric vehicles</em>, and <em>software engineering</em>, furthermore their potential impact on life in the 21st century. 
            <br/>Moreover, I actively trade in the stock market, trying my luck at the bullish and bearish. 
            <br/><br/>
            I believe my diverse set of interests will help me present a unique perspective in the tasks I undertake.
            
            <br />
            
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
        {pagesData.slice(1).map((pageData) => {
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

      <div data-aos="fade-up" ref={scrolRef}>
        <WinchScene />
      </div>
    </>
  )
}
