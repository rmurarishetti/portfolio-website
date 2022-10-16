import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useState, useEffect, useContext } from 'react';
import { HomeCard } from '../components/cards';
import TextTransition, { presets } from "react-text-transition";
import profilePic from '../public/images/profile/profile.jpeg';
import { pagesData } from '../data/pagesData';

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
    <div className={styles.container}>
      <Head>
        <title>Rohit Nag</title>
        <meta name="Rohit Nag" content="Engineer, Developer, Designer" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.header}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Rohit Nag
            </h1>
            <div className={styles.role}>
              A Mechanical Engineering student at <a href="https://www.imperial.ac.uk/ " target="_blank">Imperial College</a>.
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
          {pagesData.slice(1).map((page, idx) => {
            return (
              <HomeCard
                key={page.title}
                link={page.link}
                title={page.title}
                emoji={page.emoji}
                description={page.description} />
            )
          })}
        </div>
      </main >
    </div >
  )
}
