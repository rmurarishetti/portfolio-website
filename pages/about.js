import Head from 'next/head';
import styles from '../styles/About.module.scss';

import { GlobeScene } from '../components/3d/GlobeScene';
import { homeCitiesData } from "../data/citiesData";
import { visitedCitiesData } from "../data/citiesData";
import { HoverBadge } from '../components/badges';
import { XpPane } from '../components/layout';

import { citiesData } from "../data/citiesData";
import { xpData } from '../data/xpData';

function About() {
    return (
        <>
            <Head>
                <title>Rohit Nag | About</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
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
                        I&apos;m a Mechanical Engineering student at Imperial College London, specialising in Mechatronics and Robotics. My dream is to work on impactful solutions that combine engineering, design, and computing. I also enjoy drawing, <HoverBadge hoverText={'Bucket List: 🇯🇵, 🇧🇴, 🇵🇪, 🇪🇸'}>travelling</HoverBadge>, and <HoverBadge hoverText={'🏃‍♂️ 🚴‍♂️ 🎾 🏸 🏓 🏏'}>playing</HoverBadge> and <HoverBadge hoverText={'🏎️ | 👕 ⚽️'}>watching</HoverBadge> sports.
                    </div>
                    <div className={styles.text}>
                        I&apos;m lucky to have grown up in Oman, Libya, Brunei, and Qatar, all of which I consider home. Somehow, I have picked up something from every place, but any languages 😆. Have fun exploring the globe to find the countries I&apos;ve lived in and the ones I&apos;ve visited.
                    </div>
                </div>
                <div className={styles.xp}>
                    <h2>Experience</h2>
                    <XpPane xpData={xpData} />
                </div>
            </div>
        </>
    );
}

export default About;