'use client';

import { useState } from 'react';
import Head from 'next/head'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';

export default function Media({ Component, pageProps }) {

  const items = ([
    {
      "type": "image",
      "url": "https://archive.org/download/thucydides-quote/thucydides-quote.png",
      "text": "The Nation that makes a great distinction between its scholars and its warriors will have its thinking done by cowards and its fighting done by fools."
    }, {
      "type": "video",
      "url": "https://archive.org/download/math-and-physics/physics.mp4"
    }, {
      "type": "video",
      "url": "https://archive.org/download/math-and-physics/math.mp4"
    }, {
      "type": "video",
      "url": "https://ia802905.us.archive.org/31/items/geometry_202406/geometry.mp4"
    }, {
      "type": "image",
      "url": "https://archive.org/download/hctilg_white_girl/art.jpg",
      "original_url": "https://archive.org/download/hctilg_white_girl/original_art.jpg"
    }, {
      "type": "image",
      "url": "https://archive.org/download/hctilg_colorful_girl/art.jpg",
      "original_url": "https://archive.org/download/hctilg_colorful_girl/original_art.jpg"
    }, {
      "type": "audio",
      "url": "https://archive.org/download/ludovico-einaudi-musics/Ludovico%20Einaudi%20-%20Experience%20%28Solo%20Piano%29.mp3"
    }, {
      "type": "audio",
      "url": "https://archive.org/download/ludovico-einaudi-musics/Ludovico%20Einaudi%20-%20Elements.mp3"
    }, {
      "type": "image",
      "url": "https://archive.org/download/hctilg_profile/home.jpg"
    }, {
      "type": "video",
      "url": "https://archive.org/download/hctilg_piano/piano.mp4"
    }, {
      "type": "audio",
      "url": "https://archive.org/download/evgeny-grinko-valse/EvgenyGrinko-Valse.mp3"
    }, {
      "type": "video",
      "url": "https://archive.org/download/alis_vatan/vatan.mp4"
    }, {
      "type": "audio",
      "url": "https://archive.org/download/alis_vatan/vatan.mp3"
    }, {
      "type": "image",
      "url": "https://archive.org/download/hctilg_nature/image.jpg"
    }, {
      "type": "audio",
      "url": "https://archive.org/download/hctilg_nature/music.mp3"
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
              <video controls>
                <source src={item.url} type="video/mp4" />
              </video>
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