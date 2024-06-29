// 'use client';

import Head from 'next/head'

export default function Error({ Component, pageProps }) {

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="refresh" content="60; url=/" />
      <title>Glitch: Page not found</title>
    </Head>
    <div>
      <span>Page not found</span>
    </div>
    <style jsx>{`
div {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}
span {
  font-size: 26px;
}
    `}</style>
  </>
}
