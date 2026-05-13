import Link from 'next/link';
import Icon from './Icon';
import { SERVICES } from '@/lib/data';

export default function ServicesGrid() {
  return (
    <section className="agk-section">
      <div className="agk-container">
        <div className="agk-section__head">
          <div className="agk-eyebrow">Our services</div>
          <h2 className="agk-section__title">Six trades. One number.</h2>
          <p className="agk-section__lede">
            We package the jobs nobody else wants to coordinate — so you stop chasing five
            different contractors for one renovation.
          </p>
        </div>
        <div className="agk-services-grid">
          {SERVICES.map(s => (
            <Link key={s.id} href="/services" className="agk-service-card">
              <div className="agk-service-card__icon">
                <Icon name={s.icon} size={28} color="#EF4D48" strokeWidth={1.75} />
              </div>
              <div className="agk-service-card__title">{s.title}</div>
              <p className="agk-service-card__blurb">{s.blurb}</p>
              <div className="agk-service-card__more">
                Learn more <Icon name="arrowRight" size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
