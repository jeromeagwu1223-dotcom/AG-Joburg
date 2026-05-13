'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useQuoteModal } from './QuoteModalProvider';
import Icon from './Icon';

const LINKS = [
  { id: '/', label: 'Home' },
  { id: '/services', label: 'Services' },
  { id: '/work', label: 'Our work' },
  { id: '/about', label: 'About' },
  { id: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useQuoteModal();

  return (
    <header className="agk-header">
      <div className="agk-header__inner">
        <Link href="/" className="agk-header__logo">
          <Image src="/assets/logo.svg" alt="AG Joburg" width={320} height={96} style={{ height: '44px', width: 'auto' }} />
        </Link>

        <nav className="agk-header__nav">
          {LINKS.map(l => (
            <Link
              key={l.id}
              href={l.id}
              className={'agk-header__link' + (pathname === l.id ? ' is-active' : '')}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="agk-header__cta">
          <a className="agk-header__phone" href="tel:+27115550100">
            <Icon name="phone" size={16} />
            <span>011 555 0100</span>
          </a>
          <button className="agk-btn agk-btn--primary agk-btn--sm" onClick={openModal}>
            Get a free quote
          </button>
        </div>

        <button
          className="agk-header__menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <Icon name={menuOpen ? 'x' : 'menu'} />
        </button>
      </div>

      {menuOpen && (
        <div className="agk-header__mobile">
          {LINKS.map(l => (
            <Link
              key={l.id}
              href={l.id}
              className={'agk-header__mobile-link' + (pathname === l.id ? ' is-active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
