import Link from 'next/link';

export const metadata = {
  title: 'Our Work — AG Joburg',
  description: 'Recent jobs across greater Joburg — waterproofing, renovations, roofing and more.',
};

export default function WorkPage() {
  return (
    <section className="agk-section">
      <div className="agk-container">
        <div className="agk-crumbs">
          <Link href="/">Home</Link>
          <span className="agk-crumbs__sep">/</span>
          <span className="agk-crumbs__current">Our work</span>
        </div>
        <div className="agk-section__head agk-section__head--flush">
          <div className="agk-eyebrow">Our work</div>
          <h1 className="agk-page-title">Recent jobs across greater Joburg.</h1>
        </div>
        <div className="agk-placeholder-block">
          <p>Project photos and case studies coming soon.</p>
          <Link href="/contact" className="agk-btn agk-btn--primary">
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
