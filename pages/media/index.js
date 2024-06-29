'use client';

import { useState } from 'react';
import Head from 'next/head'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';

export default function Media({ Component, pageProps }) {

  const items = ([
    {
      "type": "video",
      "url": "https://hctilg.github.io/files/video/physics.mp4"
    }, {
      "type": "video",
      "url": "https://hctilg.github.io/files/video/math.mp4"
    }, {
      "type": "image",
      "url": "https://hctilg.github.io/files/image/dina_01.jpg",
      "original_url": "https://hctilg.github.io/files/image/dina_01_original.jpg"
    }, {
      "type": "image",
      "url": "https://hctilg.github.io/files/image/dina_02.jpg",
      "original_url": "https://hctilg.github.io/files/image/dina_02_original.jpg"
    }, {
      "type": "image",
      "url": "https://hctilg.github.io/files/image/sexy.jpg"
    }, {
      "type": "image",
      "url": "https://hctilg.github.io/files/image/cute.jpg"
    }, {
      "type": "image",
      "url": "https://hctilg.github.io/files/image/home.jpg"
    }, {
      "type": "video",
      "url": "https://hctilg.github.io/files/video/piano.mp4"
    }, {
      "type": "audio",
      "url": "https://hctilg.github.io/files/audio/Evgeny%20Grinko%20-%20Valse.mp3"
    }, {
      "type": "video",
      "url": "https://hctilg.github.io/files/video/Alis%20-%20Vatan%20LQ.mp4"
    }, {
      "type": "audio",
      "url": "https://hctilg.github.io/files/audio/VATAN.mp3"
    }
  ]);

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Glitch: Media</title>
    </Head>
    <Splide id='slider' options={ {
      direction: 'ttb',
      wheel : true,
      height: "100%"
    } } aria-label="My Favorite Medias">
      {
        items.map(item => {
          if (item.type == "video") return (
            <SplideSlide key={Math.random()}>
              <video controls sre={item.url}></video>
            </SplideSlide>
          )

          if (item.type == "audio") return (
            <SplideSlide key={Math.random()}>
              <audio controls src={item.url}></audio>
            </SplideSlide>
          )

          if (item.type == "image") return (
            <SplideSlide key={Math.random()}>
              <img src={item.url} loading="lazy" />
            </SplideSlide>
          )
        })
      }
    </Splide>
  </>
}