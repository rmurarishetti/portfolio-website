import Head from 'next/head';
import styles from '../styles/About.module.scss';

import { GlobeScene } from '../components/3d/GlobeScene';
import { homeCitiesData } from "../data/citiesData";
import { visitedCitiesData } from "../data/citiesData";

import { citiesData } from "../data/citiesData";

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
                        <div className={styles.text}>About</div>
                    </div>
                    <p>Find out about my background, experience and skills.</p>
                </div>

                <div className={styles.globe}>
                    <GlobeScene
                        homeCities={citiesData.filter(city => city.type == 'home')}
                        visitedCities={citiesData.filter(city => city.type == 'visited')} />
                </div>
            </div>
        </>
    );
}

export default About;