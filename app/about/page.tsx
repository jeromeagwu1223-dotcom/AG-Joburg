import Link from 'next/link';

export const metadata = {
  title: 'About AG Joburg',
  description: 'All Grounds Joburg — one team, every trade, all of greater Joburg.',
};

export default function AboutPage() {
  return (
    <section className="agk-section">
      <div className="agk-container">
        <div className="agk-crumbs">
          <Link href="/">Home</Link>
          <span className="agk-crumbs__sep">/</span>
          <span className="agk-crumbs__current">About</span>
        </div>
        <div className="agk-section__head agk-section__head--flush">
          <div className="agk-eyebrow">About AG Joburg</div>
          <h1 className="agk-page-title">The team your neighbour recommended.</h1>
        </div>
        <div className="agk-placeholder-block">
          <p>
            AG Joburg — All Grounds Joburg — is a Johannesburg-based construction and renovation company.
            One number. Every trade. All grounds covered.
          </p>
          <Link href="/contact" className="agk-btn agk-btn--primary">
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
