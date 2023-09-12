import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.scss';
import Image from 'next/image';
import aboutPic from '../public/images/profile/about-pic.jpg';
import { GlobeScene } from '../components/3d';
import { HoverBadge } from '../components/badges';
import { XpPane } from '../components/layout';
import { travelData } from "../data/travelData";
import { xpData } from '../data/xpData';
import { eduData } from '../data/eduData';
import { useAOS } from '../helpers/hooks';

function About() {
    useAOS();
    return (
        <>
            <Head>
                <title>Rohit Murarishetti | About</title>
                <meta name="keywords" content="Engineer, Developer, Entrepreneur, Portfolio" />
                <meta name="description" content="My background, experiences and skills." />
            </Head>
            <div className={styles.aboutPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {/* <div className={styles.emoji}>👋</div> */}
                        <div className={styles.profile}>
                            <Image
                                src={aboutPic}
                                alt="Picture of Rohit Nag"
                                placeholder='blur'
                                objectFit='cover'
                                layout='fill' />
                        </div>
                        <div className={styles.text}>About Me</div>
                    </div>
                </div>
                <div className={styles.about} data-aos="fade-up">
                    <div className={styles.globe}>
                        <GlobeScene
                            homeCities={travelData.filter(city => city.type == 'home')}
                            visitedCities={travelData.filter(city => city.type == 'visited')} />
                    </div>
                    <div className={styles.text}>
                        Hi There! I am Rohit, a computer science and design senior at the <Link href="https://sutd.edu.sg">Singapore University of Technology and Design</Link>.
                        I am an avid geek about electric cars and consumer electronics. I take a deep interest in knowing people around me and being aware about my surroundings.

                        <br/><br/>
                        I absolutely love watching documentaries about the geopolitics of the world and often fantasize about travelling to some of these places. I care a lot about personal finance and spend a lot of time identifying stocks I can invest in.
                        As a photography enthusiast, you can find me obsessing over how photos are taken and what can you do better to take good pictures.
                        <br/>

                        <br/>
                        I try to use every opportunity to <HoverBadge hoverText={'Bucket List: 🇮🇹, 🇨🇭, 🇦🇺'}>travel</HoverBadge> and wait to escape on my next vacation. I love being myself and appreciate the people who value me for my personality.
                    </div>
                    
                </div>
                <div className={styles.block} data-aos="fade-up">
                    <h2>Experience</h2>
                    <XpPane xpData={xpData} />
                </div>
                <div className={styles.block} data-aos="fade-up">
                    <h2>Education</h2>
                    <XpPane xpData={eduData} />
                </div>
            </div>
        </>
    );
}

export default About;