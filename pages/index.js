import Head from 'next/head'
import { getCrypto } from '../lib/api';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home({ Cryptos }) {
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

          <a href='https://www.linkedin.com/in/n%C3%ADcolas-marcondes-molina-55121a197/' target='_blank' className={styles.navigation_card}>
            <div className={styles.navigation_card_title}>
              <span>
                SEE MY
              </span>
            </div>

            <h2 className={styles.navigation_card_headline}>Linkedin</h2>
            <span className={styles.navigation_card_description}>You can see all my experience</span>
          </a>
        </div>

        <a href="https://github.com/nicmolina" target='_blank' style={{ width: "100%" }} className={styles.navigation_card}>
          <div className={styles.navigation_card_title}>
            <span>
              SEE MY
            </span>
          </div>

          <h2 className={styles.navigation_card_headline}>Github</h2>
          <span className={styles.navigation_card_description}>You can see all my commits and public projects</span>
        </a>

        <a href='https://controlworkinghours.netlify.app/' target='_blank' style={{ width: "100%" }} className={styles.navigation_card}>
          <div className={styles.navigation_card_title}>
            <span>
              SEE MY
            </span>
            <img></img>
          </div>

          <h2 className={styles.navigation_card_headline}>Other website</h2>
          <span className={styles.navigation_card_description}>
            Wanna check how I handle to do web applications that involves portal
            <br />in ReactJS? Click here to see a web application that I did for users
            <br />create and manage working days. The name of the application is WorkSpaceHours +.
            <br />PS: you can create a new user on sign up and test it.
          </span>
        </a>

      </div>


      <div className={styles.aboutme_container}>
        <h2>About me</h2>
        <h1>Hello I am Nicolas Marcondes Molina<br />and I am a frontend developer</h1>

        <p>
          I started programmming in 2017 with my graduation and learned about Web Development in 2019, it was really
          love at first sight, i really enjoyed how you can transform into reality anything that you have in your mind;

        </p>
        <p>I kinda like to study everyday about new things of progamming and find even more about frontend, specially when it evolves JS or TS;</p>
        <p>Also enjoy to have some time working out in the gym with my friends;</p>
        <p>As hobby I like to play some games like Monster Hunter and League of Legends. I also spend sometime learning about cryptocurrency market.</p>
        <p>PS: this website will soon be updated, the other website that is mentioned on the cards is more recent but its about portal concept in Reactjs.</p>
      </div>

    </div>
  )
}