import Head from 'next/head'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkedIn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      linked in clone
      <Hero/>
    </div>
  );
}
