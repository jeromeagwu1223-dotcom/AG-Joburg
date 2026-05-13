import Icon from './Icon';

const REVIEWS = [
  {
    quote: "AG quoted within four hours and had a team on the roof on Monday. The leak we've fought for two summers is finally gone.",
    name: 'Lerato M.',
    area: 'Parkhurst',
    job: 'Roof waterproofing',
  },
  {
    quote: 'Three jobs we kept putting off — geyser, kitchen tiles, dodgy plug points — done in one week, one bill. No bouncing around contractors.',
    name: 'Andrew S.',
    area: 'Linden',
    job: 'Multi-trade renovation',
  },
];

export default function Testimonials() {
  return (
    <section className="agk-section">
      <div className="agk-container">
        <div className="agk-section__head">
          <div className="agk-eyebrow">What clients say</div>
          <h2 className="agk-section__title">Recommended by neighbours.</h2>
        </div>
        <div className="agk-reviews">
          {REVIEWS.map((r, i) => (
            <figure className="agk-review" key={i}>
              <div className="agk-review__stars">
                {[0, 1, 2, 3, 4].map(n => (
                  <Icon key={n} name="star" size={16} color="#FFB100" strokeWidth={1.5} />
                ))}
              </div>
              <blockquote className="agk-review__quote">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="agk-review__cite">
                <span className="agk-review__name">{r.name}</span>
                <span className="agk-review__meta">{r.area} · {r.job}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
