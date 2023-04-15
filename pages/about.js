import Head from 'next/head';
import styles from '../styles/About.module.scss';
import { GlobeScene } from '../components/3d';
import { HoverBadge } from '../components/badges';
import { XpPane } from '../components/layout';
import { citiesData } from "../data/citiesData";
import { xpData } from '../data/xpData';
import { eduData } from '../data/eduData';

function About() {
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
                        <div className={styles.emoji}>👋</div>
                        <div className={styles.text}>About Me</div>
                    </div>
                </div>
                <div className={styles.about}>
                    <div className={styles.globe}>
                        <GlobeScene
                            homeCities={citiesData.filter(city => city.type == 'home')}
                            visitedCities={citiesData.filter(city => city.type == 'visited')} />
                    </div>
                    <div className={styles.text}>
                        I&apos;m a Master&apos;s Mechanical Engineering student at&nbsp;
                        <a
                            href="https://www.imperial.ac.uk"
                            target="_blank"
                            rel="noreferrer">
                            Imperial College London
                        </a>
                        &nbsp;, specialising in Mechatronics and Aircraft Engine Technology. Currently, I&apos;m working on my Master&apos;s project on locating optimal peg-fixation positions for&nbsp;
                        <a
                            href="https://www.osstec.uk"
                            target="_blank"
                            rel="noreferrer">
                            OSSTEC&apos;s
                        </a>
                        &nbsp;knee arthroplasty implants using modern and novel computational methods. My dream is to work on impactful solutions that combine engineering, design, and computing.
                    </div>
                    <div className={styles.text}>
                        Outside work, I also enjoy drawing, playing <HoverBadge hoverText={'🏃‍♂️ 🚴‍♂️ 🎾 🏸 🏓 🏏'}> sports</HoverBadge> and <HoverBadge hoverText={'Bucket List: 🇯🇵, 🇧🇴, 🇵🇪, 🇪🇸'}>travelling</HoverBadge>. I&apos;m lucky to have grown up in Oman, Libya, Brunei, Qatar and the UK, all of which I consider home. Enjoy exploring the globe to find the cities I&apos;ve lived in and the ones I&apos;ve visited.
                    </div>
                </div>
                {/* <div className={styles.note}>
                    Feel free leave any feedback or appreciation by signing my <Link href='/guestbook'>Guestbook</Link>!
                </div> */}
                <div className={styles.xp}>
                    <h2>Experience</h2>
                    <XpPane xpData={xpData} />
                </div>
                <div className={styles.edu}>
                    <h2>Education</h2>
                    <XpPane xpData={eduData} />
                </div>
            </div>
        </>
    );
}

export default About;