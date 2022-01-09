import Head from 'next/head'
import * as styles from '../styles/Home.module.scss'
import Core from '../components/Core'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jenni&Dávid</title>
      </Head>
      <div className={styles.invitation}>
        <Core></Core>
      </div>
      <a className={styles.credits} href="http://www.freepik.com">Designed by BiZkettE1 / Freepik</a>
    </>
  )
}
