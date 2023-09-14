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
                        Hi There! I am Rohit, originally from Hyderabad, India and currently pursuing a Bachelor&apos;s degree in Computer Science in Singapore.
                        I&apos;m all about that tech life and being a gadget junkie. I have a weakness for shiny new objects, especially if they&apos;re related to technology.

                        <br/><br/>
                        While I&apos;m not buried in coursework, you can find me with a backpack, ready to tick off countries I&apos;ve visited. I&apos;ve already visited 
                        8 countries and I&apos;ve got my sights set on seeing the whole wide world someday. My insatiable wanderlust is nourished by my love for geopolitics documentaries, which offer me fresh perspectives on our world.
                        <br/>

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