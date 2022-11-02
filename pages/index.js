import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Image } from '@nextui-org/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valinatic</title>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/115374401?s=400&u=79af223485ae14410b899d6a7cf707d8c362f315&v=4"
        />
        <meta name="title" content="Valinatic" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="THE HOME OF REBEL DEVELOPER'S." />
        <meta name="robots" content="noindex, nofollow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="@valinatic" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://valinatic.tech/" />
        <meta property="og:title" content="Valinatic" />
        <meta
          property="og:description"
          content="THE HOME OF REBEL DEVELOPER'S."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/valinatic/.github/main/assets/wicked.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://valinatic.tech/" />
        <meta property="twitter:title" content="Valinatic" />
        <meta
          property="twitter:description"
          content="THE HOME OF REBEL DEVELOPER'S."
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/valinatic/.github/main/assets/wicked.jpg"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>We&apos;ll be back.</h1>
        <p className={styles.description}>
          We&apos;re busy updating the
          <code className={styles.code}>Valinatic Studio</code> for you and will
          be back soon.
        </p>
        <Image
          showSkeleton
          width={1000}
          height={400}
          maxDelay={1000}
          src="https://raw.githubusercontent.com/valinatic/.github/main/assets/wicked.jpg"
          alt="Valinatic Banner"
        />

        <p className={styles.description}>
          valinatic is a boutique studio who make cool shit that perform&apos;s.
        </p>
      </main>

      <footer className={styles.footer}>
        THE HOME OF REBEL DEVELOPER&apos;S.
      </footer>
    </div>
  )
}
