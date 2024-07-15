// 'use client';

import Head from 'next/head'
import Image from 'next/image'

export default function About({ Component, pageProps }) {

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Glitch: About</title>
    </Head>
    <div className='content'>
      <div>
        <h2>Hi, I'm <b>Mahi</b></h2>
        <p>A programmer, writer, etc ...</p>
        <p>I enjoy nature, science, music and art :3</p>
        <p>This website is just for passing time and archiving some of my knowledge and stories.</p>
        <p>My field of work is not limited, but I'm more interested in AI, web and software development in programming.</p>
        <p>I love traveling alone, uninterrupted reading of books, swimming, and dancing.</p>
        <p>I like Jasmine and Viola(violet) flowers.</p>
        <p>For me, Quality is more important than quantity...</p>
        <p>I like piano and violin ...</p>
      </div>
    </div>
    <style jsx>{`
.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: calc((60 * (var(--height) - 50px)) / 100);
}

h2 {
  margin: 20px 10px 15px;
  font-size: 22px;
}

p {
  line-height: 1.7;
  margin: 5px 14px;
  font-size: 18px;
}
  `}</style>
  </>
}
