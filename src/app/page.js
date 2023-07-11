import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from "next/Link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        <a href ="https://distressedsoultabloid.com/wigxnmi73?key=09c32fa9dcee2acb56f088a76f29e86f">Get started translate </a>&nbsp;
          <code className={styles.code}>So makang ?</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By&nbsp; <a href="https://instagram.com/mc.l_j/">Mc.Crazy</a>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Link
        href="https://manado-translate.vercel.app/translate"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
        >
        <h1 className="text-4xl font-bold underline">Manado to Indonesia</h1>
        </Link>

      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}><a href="https://distressedsoultabloid.com/y7m1mhvp60?key=a4f3502d0b644c03c4a24c88cefd7bad">Explore the Next.js 13 playground.</a></p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <a href="https://distressedsoultabloid.com/gqsffr5nhu?key=fe291f3f7a850f89253ebf3101f37703"> Instantly deploy your Next.js site to a shareable URL with Vercel.</a>
          </p>
        </a>
      </div>
    </main>
  )
}
