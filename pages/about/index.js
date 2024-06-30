// 'use client';

import Head from 'next/head'
import Image from 'next/image'

export default function About({ Component, pageProps }) {

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Glitch: About</title>
    </Head>
    <div>
      <span>This page will be ready soon...</span>
    </div>
    <style jsx>{`
h2 {
  margin: 30px 0 20px;
}
span {
  font-size: 20px;
}
img {
  margin: 30px auto 0;
}
  `}</style>
  </>
}
