import Head from 'next/head';
import styles from '../styles/About.module.scss';
import Image from 'next/image';
import aboutPic from '../public/images/profile/about.jpeg';
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
                <title>Rohit Nag | About</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
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
                        Hi there! A brief introduction: I&apos;m a Master&apos;s Mechanical Engineering student at&nbsp;
                        <a
                            href="https://www.imperial.ac.uk"
                            target="_blank"
                            rel="noreferrer">
                            Imperial College London
                        </a>
                        , specialising in Mechatronics and Aircraft Engine Technology. Currently, I&apos;m working on my Master&apos;s project on locating optimal peg-fixation positions for&nbsp;
                        <a
                            href="https://www.osstec.uk"
                            target="_blank"
                            rel="noreferrer">
                            OSSTEC&apos;s
                        </a>
                        &nbsp;knee arthroplasty implants using modern and novel computational methods. My dream is to work on impactful solutions that combine engineering, design, and computing.
                    </div>
                    <div className={styles.text}>
                        Outside work, I enjoy drawing, playing <HoverBadge hoverText={'🏃‍♂️ 🚴‍♂️ 🎾 🏸 🏓 🏏'}> sports</HoverBadge> and <HoverBadge hoverText={'Bucket List: 🇯🇵, 🇧🇴, 🇵🇪, 🇪🇸'}>travelling</HoverBadge>. I&apos;m lucky to have grown up in Oman, Libya, Brunei, Qatar and the UK, all of which I consider home. Enjoy exploring the globe to find the cities I&apos;ve lived in and the ones I&apos;ve visited.
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