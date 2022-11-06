import Head from 'next/head';
import styles from '../styles/About.module.scss';

import { GlobeScene } from '../components/3d/GlobeScene';
import { homeCitiesData } from "../data/citiesData";
import { visitedCitiesData } from "../data/citiesData";

function About() {
    return (
        <>
            <Head>
                <title>Rohit Nag | About</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
                <link rel="icon" type="image/png" href="/favicon.ico" />
            </Head>
            <h1>About</h1>
            <div className={styles.globe}>
                <GlobeScene
                    homeCities={homeCitiesData}
                    visitedCities={visitedCitiesData} />
            </div>
        </>
    );
}

export default About;