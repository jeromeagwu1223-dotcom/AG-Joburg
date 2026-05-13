const STATS = [
  { num: '24', accent: 'h', label: 'quote turnaround' },
  { num: '6',  accent: '',  label: 'trades, one number' },
  { num: '100', accent: '%', label: 'workmanship warranty' },
];

export default function StatStrip() {
  return (
    <section className="agk-stats">
      <div className="agk-container">
        <div className="agk-stats__grid">
          {STATS.map((s, i) => (
            <div className="agk-stat" key={i}>
              <div className="agk-stat__num">
                {s.num}<span className="agk-stat__accent">{s.accent}</span>
              </div>
              <div className="agk-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
