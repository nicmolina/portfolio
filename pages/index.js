import Head from 'next/head'
import { getCrypto } from '../lib/api';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({Cryptos}) {
  return (
    <div className={styles.container}>
  
      <div className={styles.navigation_container}>
        
        

        <div className={styles.navigation_double_card}>
          <Link href="/cryptocurrency">
            <a className={styles.navigation_card}>
              <div className={styles.navigation_card_title}>
                <span>
                  SEE MY
                </span>
              </div>

              <h2 className={styles.navigation_card_headline}>Favorite Cryptos</h2>
              <span className={styles.navigation_card_description}>Love to take some time studying about cryptocurrency</span>
            </a>    
          </Link>

          <div className={styles.navigation_card}>
              <div className={styles.navigation_card_title}>
                <span>
                  SEE MY
                </span>
                <img></img>
              </div>

              <h2 className={styles.navigation_card_headline}>Blog</h2>
              <span className={styles.navigation_card_description}>Posts about my experience and web tips</span>
            </div>
        </div>
        
        <div className={styles.navigation_double_card}>
          <div className={styles.navigation_card}>

            <div className={styles.navigation_card_title}>
              <span>
                SEE MY
              </span>
            </div>

            <h2 className={styles.navigation_card_headline}>Favorite Cryptos</h2>
            <span className={styles.navigation_card_description}>Love to take some time studying about cryptocurrency</span>
          </div>

          <div className={styles.navigation_card}>
            <div className={styles.navigation_card_title}>
              <span>
                SEE MY
              </span>
              <img></img>
            </div>

            <h2 className={styles.navigation_card_headline}>Blog</h2>
            <span className={styles.navigation_card_description}>Posts about my experience and web tips</span>
          </div>
        </div>

        <div style={{width: "100%"}} className={styles.navigation_card}>
          <div className={styles.navigation_card_title}>
            <span>
              SEE MY
            </span>
            <img></img>
          </div>

          <h2 className={styles.navigation_card_headline}>Blog</h2>
          <span className={styles.navigation_card_description}>Posts about my experience and web tips</span>
        </div>

      </div>


      <div className={styles.aboutme_container}>
        <h2>About me</h2>
        <h1>Hello im Nicolas Marcondes/Verinha</h1>
        <p>I kinda like to study everyday about new things of progamming and find even more about frontend, specially when it evolves JS</p>
      </div>

    </div>
  )
}

/*
export async function getStaticProps() {
  const Cryptos = await getCrypto();
  return {
    props: {
      Cryptos
    }
  };
}

<div className={styles.navigation_double_card}>

          <div className={styles.navigation_card}>
            <div className={styles.navigation_card_title}>
              <span>
                SEE SOME
              </span>
            </div>

            <h2 className={styles.navigation_card_headline}>Projects</h2>
            <span>Projects that I have developed or participated</span>
          </div>
*/