import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
import { HomeCard } from '../components/cards';
import { ProjectsSwiper, ArtsSwiper } from '../components/swipers';
import WinchScene from '../components/3d/WinchScene';
import KineticScene from '../components/3d/KineticScene';
import styles from '../styles/Home.module.scss';
import { projectsData } from '../data/projectsData';
import { artsData } from '../data/artsData';
import { pagesData } from '../data/pagesData';
import profilePic from '../public/images/profile/profile.jpg';
import { daysDiff } from '../helpers/math';
import { GalleryWLightbox } from '../components/layout';

export default function Home() {

  const designerTextArray = [
    "UI / UX",
    "Graphic",
    "Product"
  ];

  const [index, setIndex] = useState(0);
  const textTransitionTime = 1500;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index => index + 1)
    }, textTransitionTime);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const text = index ? designerTextArray[index % designerTextArray.length] : '';

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
            A Mechanical Engineering student at <a href="https://www.imperial.ac.uk/ " target="_blank" rel="noreferrer">Imperial College</a>.
          </div>
          <div className={styles.description}>
            Passionate about merging <em>Engineering</em>, <em>Computing</em> and <em>Design</em> with an interest in embedded systems, physics modelling and AI.
            <br />
            Also a questionable&nbsp;
            <TextTransition inline springConfig={presets.slow} direction='down'>
              {text}
            </TextTransition>
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
        {pagesData.slice(1).map((pageData, i) => {
          return (
            <HomeCard
              key={pageData.title}
              animationOrder={i}
              {...pageData} />
          )
        })}
      </div>
      <WinchScene />
      <div className={styles.block}>
        <h1>Featured Projects</h1>
        <ProjectsSwiper projectsData={projectsData.filter(projectData => projectData.featured)} />
        <Link href={pagesData.filter((pageData => pageData.title == 'Projects'))[0].link}>
          <a className={styles.link}>
            {pagesData.filter((pageData => pageData.title == 'Projects'))[0].emoji} All projects &rarr;
          </a>
        </Link>
      </div>
      <KineticScene />
      <div className={[styles.block, styles.artBlock].join(' ')}>
        <h1>New Artwork</h1>
        {/* <ArtsSwiper artsData={artsData.filter(artData => daysDiff(new Date(), artData.date) < 365)} /> */}
        <div className={styles.galleryContainer}>
          <GalleryWLightbox artsData={artsData.filter(artData => daysDiff(new Date(), artData.date) < 365)} />
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
