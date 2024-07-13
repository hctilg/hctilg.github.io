// 'use client';

// import { Image } from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

  // Calling useRouter() hook
  const router = useRouter();

  const active_link = cfl => {
    return router.pathname == cfl ? "active" : "";
  }

  let page_title;

  /**/ if (router.pathname == '/') page_title = 'Home';
  else if (router.pathname == '/journal') page_title = 'Journal';
  else if (router.pathname == '/media') page_title = 'Media';
  else if (router.pathname == '/about') page_title = 'About';
  else page_title = '404';

  function breadcrumbs() {
    var text = `Home`;

    if (router.pathname !== '/') text += ' > ';
    
    if (router.pathname == '/');
    else if (router.pathname == '/journal') text += 'Journal';
    else if (router.pathname == '/media') text += 'Media';
    else if (router.pathname == '/about') text += 'About';
    else text += '404';
    
    return text;
  }

  return <>
    <aside id='sidebar' className='readonly'>
      <header id='sidebar-top' translate='no'>
        <h1 className='title' title="Don't Touch Me">
          <div className="stack">
            <span>Glitch</span>
            <span>Glitch</span>
            <span>Glitch</span>
          </div>
        </h1>
        <h2 className='name'>
          <span>Mahi</span>
          <span> ∞ </span>
          <span>Rira</span>
        </h2>
      </header>
      <ul id='sidebar-menu'>
        <li>
          <Link href="/" className={active_link('/')}>
            <i className='fa-fw fas fa-home'></i>
            <span>HOME</span>
          </Link>
        </li>
        <li>
          <Link href="/journal" className={active_link('/journal')}>
            <i className='fa-fw fas fa-book'></i>
            <span>JOURNAL</span>
          </Link>
        </li>
        <li>
          <Link href="/media" className={active_link('/media')}>
            <i className='fa-fw fas fa-file'></i>
            <span>MEDIA</span>
          </Link>
        </li>
        <li>
          <Link href="/about" className={active_link('/about')}>
            <i className='fa-fw fas fa-info'></i>
            <span>ABOUT</span>
          </Link>
        </li>
      </ul>
      <footer id='sidebar-bottom'>
        <buttom id="mode-toggle" className="btn" aria-label="Switch Mode" title="Switch Theme">
          <i className="fas fa-adjust"></i>
        </buttom>
        <a className="btn" href='https://github.com/hctilg' target='__blank' aria-label="github" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a className="btn" href='mailto:hctilg@duck.com' aria-label="email" title="Email">
          <i className="far fa-envelope"></i>
        </a>
      </footer>
    </aside>
    <div id='main'>
      <header className='readonly'>
        <nav id='navbar'>
          <button id='sidebar-trigger' onClick={() => document.body.classList.toggle('active-sidebar')}>
            <i className='fas fa-bars fa-fw'></i>
          </button>
          <h2 className='title'>{page_title}</h2>
          <label id='search-wrapper-mobile' form='search-input-mobile'>
            <input id='search-input-mobile' type="search" aria-label="search" autoComplete="off" placeholder="Search..." spellCheck="false" dir='auto' maxLength={255} />
          </label>
          <button id='search-trigger' onClick={() => {
            document.body.classList.toggle('active-search');
            document.getElementById('search-input-mobile').focus();
          }}>
            <i className='fas fa-search fa-fw'></i>
            <i className='fas fa-close fa-fw'></i>
          </button>
        </nav>
        <div id='header'>
          <span id='breadcrumbs' className='title'>{breadcrumbs()}</span>
          <label id='search-wrapper' form='search-input'>
            <input id='search-input' type="search" aria-label="search" autoComplete="off" placeholder="Search..." spellCheck="false" dir='auto' maxLength={255} />
            <i className='fas fa-search fa-fw'></i>
          </label>
        </div>
      </header>
      <main id='container'>
        <Component {...pageProps} />
      </main>
    </div>
  </>
}
