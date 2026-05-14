'use client';

import Link from 'next/link';
import { useQuoteModal } from './QuoteModalProvider';
import Icon from './Icon';

export default function Hero() {
  const { openModal } = useQuoteModal();

  return (
    <section className="agk-hero">
      <div className="agk-container agk-hero__inner">
        <div className="agk-hero__copy">
          <div className="agk-eyebrow">All Grounds Joburg · Established Joburg</div>
          <h1 className="agk-hero__title">
            One call.<br />
            Every trade.<br />
            <span className="agk-hero__title-accent">Done right.</span>
          </h1>
          <p className="agk-hero__lede">
            Renovations, repairs, waterproofing, plumbing, electrical, tiling and damp
            proofing — handled by one team. Quotes within 24 hours across greater Joburg.
          </p>
          <div className="agk-hero__cta">
            <button className="agk-btn agk-btn--primary" onClick={openModal}>
              Get a quote
            </button>
            <Link href="/services" className="agk-btn agk-btn--secondary">
              See our services
            </Link>
          </div>
          <div className="agk-hero__trust">
            <Icon name="shieldCheck" size={18} color="#EF4D48" />
            <span>Workmanship warranty on every job · POPIA-compliant quotes</span>
          </div>
        </div>

        <div className="agk-hero__art">
          <div className="agk-hero__photo agk-photo">
            <div className="agk-photo__label">Bryanston roof — recent waterproofing job</div>
          </div>
          <div className="agk-hero__floating-card">
            <div className="agk-fc__row">
              <div className="agk-fc__dot" />
              <div className="agk-fc__title">Booked for Tuesday, 09:00</div>
            </div>
            <div className="agk-fc__sub">Geyser replacement · Linden</div>
            <div className="agk-fc__divider" />
            <div className="agk-fc__row agk-fc__row--small">
              <Icon name="clock" size={14} color="#54595F" />
              <span>Quote responded within 4 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
