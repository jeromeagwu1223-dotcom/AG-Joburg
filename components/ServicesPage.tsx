'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useQuoteModal } from './QuoteModalProvider';
import Icon from './Icon';
import { SERVICES, SERVICE_DETAIL } from '@/lib/data';

export default function ServicesPage() {
  const [active, setActive] = useState('damp');
  const { openModal } = useQuoteModal();
  const detail = SERVICE_DETAIL[active];

  return (
    <section className="agk-section">
      <div className="agk-container">
        <div className="agk-crumbs">
          <Link href="/">Home</Link>
          <span className="agk-crumbs__sep">/</span>
          <span className="agk-crumbs__current">Services</span>
        </div>

        <div className="agk-section__head agk-section__head--flush">
          <div className="agk-eyebrow">All services</div>
          <h1 className="agk-page-title">Pick a trade. We probably do it.</h1>
        </div>

        <div className="agk-tabs" role="tablist">
          {SERVICES.map(s => (
            <button
              key={s.id}
              className={'agk-tab' + (active === s.id ? ' is-active' : '')}
              onClick={() => setActive(s.id)}
              role="tab"
              aria-selected={active === s.id}
            >
              <Icon
                name={s.icon}
                size={18}
                color={active === s.id ? '#EF4D48' : '#54595F'}
                strokeWidth={1.75}
              />
              <span>{s.title.split(/[,&]/)[0].trim()}</span>
            </button>
          ))}
        </div>

        <div className="agk-service-detail">
          <div className="agk-service-detail__main">
            <h2 className="agk-service-detail__title">{detail.title}</h2>
            <p className="agk-service-detail__blurb">{detail.blurb}</p>
            <ul className="agk-service-detail__list">
              {detail.bullets.map((b, i) => (
                <li key={i}>
                  <Icon name="check" size={18} color="#EF4D48" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="agk-service-detail__cta">
              <button className="agk-btn agk-btn--primary" onClick={openModal}>
                Quote this job
              </button>
              <Link href="/contact" className="agk-btn agk-btn--ghost">
                or talk to us first
              </Link>
            </div>
          </div>

          <aside className="agk-service-detail__side">
            <div className="agk-info-card">
              <div className="agk-info-card__label">Typical price range</div>
              <div className="agk-info-card__value">{detail.typical}</div>
              <div className="agk-info-card__note">Final price quoted after free site visit.</div>
            </div>
            <div className="agk-info-card">
              <div className="agk-info-card__label">Typical timeline</div>
              <div className="agk-info-card__value">{detail.timeline}</div>
              <div className="agk-info-card__note">From accepted quote to sign-off.</div>
            </div>
            <div className="agk-info-card agk-info-card--red">
              <div className="agk-info-card__label" style={{ color: 'rgba(255,255,255,0.85)' }}>Emergency?</div>
              <div className="agk-info-card__value" style={{ color: '#FFFFFF' }}>011 555 0100</div>
              <div className="agk-info-card__note" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Burst pipe, active leak, roof damage — call us.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
