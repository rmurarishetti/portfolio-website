import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useState, useEffect } from 'react';
import { HomeCard } from '../components/cards';
import TextTransition, { presets } from "react-text-transition";
import profilePic from '../public/images/profile/profile.jpeg';
import { pagesData } from '../data/pagesData';
import { projectsData } from '../data/projectsData';
import WinchScene from '../components/3d/WinchScene';
import Link from 'next/link';

import { ProjectsSwiper } from '../components/swipers';

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
        <link rel="icon" type="image/png" href="/favicon.ico" />
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
        {pagesData.slice(1).map((pageData) => {
          return (
            <HomeCard
              key={pageData.title} {...pageData} />
          )
        })}
      </div>
      <WinchScene />
      <div className={styles.block}>
        <h1>Featured Projects</h1>
        {/* <HScrollDiv>
          {projectsData.filter(projectData => projectData.featured).map((projectData, idx) => {
            return (
              <ProjectCard key={projectData.id} {...projectData} />
            )
          })}
        </HScrollDiv> */}
        <ProjectsSwiper projectsData={projectsData.filter(projectData => projectData.featured)} />
        <Link href={pagesData.filter((pageData => pageData.title == 'Projects'))[0].link}>
          <a className={styles.link}>
            {pagesData.filter((pageData => pageData.title == 'Projects'))[0].emoji} All projects &rarr;
          </a>
        </Link>
      </div>
      <div className={styles.block}>
        <h1>New Artwork</h1>
        {/* <HScrollDiv>
              {projectsData.filter(projectData => projectData.featured).map((projectData, idx) => {
                return (
                  <ProjectCard key={projectData.id} {...projectData} />
                )
              })}
            </HScrollDiv> */}
        <Link href={pagesData.filter((pageData => pageData.title == 'Art'))[0].link}>
          <a className={styles.link}>
            {pagesData.filter((pageData => pageData.title == 'Art'))[0].emoji} All artwork &rarr;
          </a>
        </Link>
      </div>
    </>
  )
}
