import Head from 'next/head';
import Link from 'next/link';

// data
import { getCrypto } from '../../lib/api';

// styles
import styles from '../../styles/Home.module.css';
import cryptoStyles from '../../styles/Cryptocurrency.module.css';

export default function Cryptocurrency({Cryptos}){
    return (
    <div className={styles.container}>
        <Head>
            <title>Favorite cryptocurrency page</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
      
        <main className={styles.main}>
            <h1 className={styles.title}>Favorite Cryptocurrencies</h1>
                {
                    Object.entries(Cryptos).map(([key, value]) => 
                    (
                        
                        <div className={cryptoStyles.crypto_container}>
                            <div className={cryptoStyles.crypto_text_container}>
                                <h2>{value.name}</h2>
                                <img src={value.logo}></img>
                            </div>
                            <p>{value.description}</p>
                            <a href={value.urls.website} target="_blank">{value.urls.website}</a>
                            <p>Relacionados :</p>
                            <span>
                                {Object.entries(value.tags).map(([key, result])=>
                                (
                                    ` ${result},`
                                ))}
                            </span>
                        </div>
                        
                ))}
            <button onClick={getCrypto}></button>
        </main>
    </div>
    )
}

export async function getStaticProps() {
    const Cryptos = await getCrypto();
    return {
        props: {
        Cryptos
      }
    };
}

/*
Object.entries(Cryptos).forEach(([key, value]) => {
                        console.log(key + ' ' + JSON.stringify(value.name));
                        
                    })
{Object.entries(Cryptos).map(([key, value]) => (
                    <p></p>
                ))}


Object.keys(json).map(i => JSON.parse(json[Number(i)]));
{Cryptos.map(({ node }) => (
                <div>
                    <img src={node.logo}></img>
                </div>
            ))}
{Object.entries(Cryptos).map(([key, value]) => (
                    <p></p>
                ))}

            */