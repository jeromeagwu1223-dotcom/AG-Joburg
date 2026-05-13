'use client';

import { useState, useEffect } from 'react';
import Icon from './Icon';

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

interface QuoteData {
  service: string;
  urgency: string;
  name: string;
  phone: string;
}

const SERVICES_LIST = [
  'Damp & Waterproofing',
  'Roofing',
  'Painting',
  'Kitchen / Bathroom',
  'Paving',
  'Renovation / Extension',
];

const URGENCIES = [
  { id: 'emergency', label: 'Right now', sub: 'Burst pipe, no power, active leak' },
  { id: 'week',      label: 'This week', sub: 'Soon but no crisis' },
  { id: 'planning',  label: 'Planning ahead', sub: 'Quoting for later' },
];

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteData>({ service: '', urgency: '', name: '', phone: '' });

  useEffect(() => {
    if (open) {
      setStep(1);
      setData({ service: '', urgency: '', name: '', phone: '' });
    }
  }, [open]);

  if (!open) return null;

  const currentUrgency = URGENCIES.find(u => u.id === data.urgency);

  return (
    <div className="agk-modal" onClick={onClose}>
      <div className="agk-modal__panel" onClick={e => e.stopPropagation()}>
        <button className="agk-modal__close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={20} />
        </button>

        <div className="agk-modal__progress">
          <span className={step >= 1 ? 'on' : ''}>Service</span>
          <span className="sep" />
          <span className={step >= 2 ? 'on' : ''}>When</span>
          <span className="sep" />
          <span className={step >= 3 ? 'on' : ''}>Details</span>
        </div>

        {step === 1 && (
          <>
            <h3 className="agk-modal__title">What&apos;s the job?</h3>
            <div className="agk-choice-grid">
              {SERVICES_LIST.map(s => (
                <button
                  key={s}
                  className={'agk-choice' + (data.service === s ? ' is-active' : '')}
                  onClick={() => { setData({ ...data, service: s }); setStep(2); }}
                >
                  {s}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="agk-modal__title">How urgent?</h3>
            <div className="agk-choice-stack">
              {URGENCIES.map(u => (
                <button
                  key={u.id}
                  className={'agk-choice agk-choice--stacked' + (data.urgency === u.id ? ' is-active' : '')}
                  onClick={() => { setData({ ...data, urgency: u.id }); setStep(3); }}
                >
                  <div className="agk-choice__label">{u.label}</div>
                  <div className="agk-choice__sub">{u.sub}</div>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="agk-modal__title">Who do we call back?</h3>
            <div className="agk-summary">
              <span className="agk-badge agk-badge--neutral">{data.service}</span>
              {currentUrgency && (
                <span className="agk-badge agk-badge--neutral">{currentUrgency.label}</span>
              )}
            </div>
            <div className="agk-field" style={{ marginBottom: '12px' }}>
              <label className="agk-field__label">Name</label>
              <input
                className="agk-input"
                value={data.name}
                onChange={e => setData({ ...data, name: e.target.value })}
                placeholder="Sipho Dlamini"
              />
            </div>
            <div className="agk-field" style={{ marginBottom: '16px' }}>
              <label className="agk-field__label">Phone</label>
              <input
                className="agk-input"
                value={data.phone}
                onChange={e => setData({ ...data, phone: e.target.value })}
                placeholder="082 555 0123"
              />
            </div>
            <button
              className="agk-btn agk-btn--primary agk-modal__submit"
              disabled={!data.name || !data.phone}
              onClick={() => setStep(4)}
            >
              Send my details
            </button>
            <button className="agk-btn agk-btn--ghost" style={{ marginTop: '12px' }} onClick={() => setStep(2)}>
              ← Back
            </button>
          </>
        )}

        {step === 4 && (
          <div className="agk-modal__success">
            <div className="agk-form-success__icon">
              <Icon name="check" size={28} color="#FFFFFF" />
            </div>
            <h3 className="agk-modal__title">Got it.</h3>
            <p className="agk-modal__success-body">
              We&apos;ll call {data.name.split(' ')[0] || 'you'} on <strong>{data.phone}</strong> within four working hours.
            </p>
            <button className="agk-btn agk-btn--secondary" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
