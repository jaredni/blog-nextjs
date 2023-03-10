import {Fragment} from "react";

import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Navbar from "./navigation/navbar";

const name = 'Jared Vicentillo';
export const siteTitle = 'Next.js Sample Website';
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name = "description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          name="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle}/>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home && (
          <Fragment>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </Fragment>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}