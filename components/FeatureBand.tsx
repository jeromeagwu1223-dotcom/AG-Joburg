'use client';

import Link from 'next/link';
import { useQuoteModal } from './QuoteModalProvider';
import Icon from './Icon';

export default function FeatureBand() {
  const { openModal } = useQuoteModal();

  return (
    <section className="agk-feature">
      <div className="agk-container agk-feature__inner">
        <div className="agk-feature__copy">
          <div className="agk-eyebrow agk-eyebrow--light">Waterproofing — our biggest call</div>
          <h2 className="agk-feature__title">Stop the leak before it stops you.</h2>
          <p className="agk-feature__lede">
            Joburg storms find every weak seam. We strip back, prep the substrate properly,
            and apply a multi-layer membrane system — then warranty the work for five years.
          </p>
          <div className="agk-feature__cta">
            <button className="agk-btn agk-btn--light" onClick={openModal}>
              Get a free quote
            </button>
            <Link href="/work" className="agk-btn agk-btn--ghost-light">
              See recent jobs <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
        <ul className="agk-feature__list">
          <li><Icon name="check" size={20} color="#FFFFFF" /> Roof, balcony, deck &amp; retaining-wall systems</li>
          <li><Icon name="check" size={20} color="#FFFFFF" /> Free site inspection within 24 hours</li>
          <li><Icon name="check" size={20} color="#FFFFFF" /> 5-year workmanship warranty, in writing</li>
          <li><Icon name="check" size={20} color="#FFFFFF" /> Single trade, single invoice, no surprises</li>
        </ul>
      </div>
    </section>
  );
}
