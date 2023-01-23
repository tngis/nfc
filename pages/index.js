import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='fixed -z-20 w-100%  h-screen top-0 right-0 left-0 bottom-0'>
        <Image
          className="grayscale-0 contrast-50"
          src='/homescreen.jpg'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </>
  )
}
