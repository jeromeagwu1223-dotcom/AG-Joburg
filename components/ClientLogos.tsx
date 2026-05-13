function FishChipMark() {
  return (
    <svg viewBox="0 0 160 56" width="100%" height="100%" aria-label="Fish &amp; Chip Co">
      <text x="80" y="26" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontWeight="700" fontSize="22" fill="currentColor">Fish &amp; Chip</text>
      <text x="80" y="44" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="10" letterSpacing="6" fill="currentColor">— C O —</text>
    </svg>
  );
}

function KingsLodgeMark() {
  return (
    <svg viewBox="0 0 200 56" width="100%" height="100%" aria-label="The Kings Lodge">
      <text x="100" y="22" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="500" fontSize="9" letterSpacing="3" fill="currentColor">THE</text>
      <text x="100" y="40" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontSize="22" fill="currentColor">KINGS LODGE</text>
      <text x="100" y="52" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="7" letterSpacing="2" fill="currentColor">NORTHCLIFF · JHB</text>
    </svg>
  );
}

function SoberlinMark() {
  return (
    <svg viewBox="0 0 180 56" width="100%" height="100%" aria-label="Soberlin Parlour">
      <text x="90" y="28" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="200" fontSize="22" letterSpacing="2" fill="currentColor">SOBERLIN</text>
      <text x="90" y="46" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="9" letterSpacing="6" fill="currentColor">P A R L O U R</text>
    </svg>
  );
}

function FNBMark() {
  return (
    <svg viewBox="0 0 120 56" width="100%" height="100%" aria-label="FNB">
      <rect x="14" y="10" width="92" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="60" y="35" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" letterSpacing="6" fill="currentColor">FNB</text>
    </svg>
  );
}

const CLIENTS = [
  { Mark: FishChipMark, name: 'Fish & Chip Co' },
  { Mark: KingsLodgeMark, name: 'The Kings Lodge · Northcliff' },
  { Mark: SoberlinMark, name: 'Soberlin Parlour · Randburg' },
  { Mark: FNBMark, name: 'FNB' },
];

export default function ClientLogos() {
  return (
    <section className="agk-clients">
      <div className="agk-container">
        <div className="agk-clients__head">
          <div className="agk-eyebrow">Trusted by</div>
          <h2 className="agk-clients__title">Businesses and homes across Joburg.</h2>
          <p className="agk-clients__lede">A few of the people who&apos;ve called us back for the next job.</p>
        </div>
        <div className="agk-clients__grid">
          {CLIENTS.map((c, i) => (
            <div className="agk-client" key={i} title={c.name}>
              <c.Mark />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
