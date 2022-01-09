import Head from 'next/head'
import style from '../styles/Home.module.scss'
import Core from '../components/Core'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jenni&Dávid</title>
      </Head>
      <div className={style.invitation}>
        <Core></Core>
      </div>
      <a className={style.credits} href="http://www.freepik.com">Designed by BiZkettE1 / Freepik</a>
    </>
  )
}
