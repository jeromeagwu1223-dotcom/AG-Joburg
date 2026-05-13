const STEPS = [
  { n: '01', title: 'You call or message', body: "Describe the problem in plain language. A photo helps but isn't required." },
  { n: '02', title: 'We quote within 24 hours', body: 'Free site visit where needed. Quote is itemised and valid for 30 days.' },
  { n: '03', title: 'We do the work', body: 'One team, one site supervisor. We protect floors, keep tidy, work to schedule.' },
  { n: '04', title: 'Sign-off & warranty', body: 'Walk-through with you. Workmanship warranty issued in writing on completion.' },
];

export default function ProcessSteps() {
  return (
    <section className="agk-section agk-section--muted">
      <div className="agk-container">
        <div className="agk-section__head">
          <div className="agk-eyebrow">How it works</div>
          <h2 className="agk-section__title">Four steps. No surprises.</h2>
        </div>
        <div className="agk-process-grid">
          {STEPS.map(s => (
            <div className="agk-step" key={s.n}>
              <div className="agk-step__num">{s.n}</div>
              <div className="agk-step__title">{s.title}</div>
              <p className="agk-step__body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
