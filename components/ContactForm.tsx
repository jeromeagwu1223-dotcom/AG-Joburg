'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Icon from './Icon';

export default function ContactForm() {
  const [state, handleFormspreeSubmit] = useForm('xgodqzog');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [localErrors, setLocalErrors] = useState<{ name?: string; phone?: string; service?: string }>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs: { name?: string; phone?: string; service?: string } = {};
    if (!name.trim()) errs.name = 'Please tell us your name.';
    if (!phone.trim()) errs.phone = 'We need a number to call you back on.';
    if (!service) errs.service = 'Pick the closest service.';
    setLocalErrors(errs);
    if (Object.keys(errs).length > 0) return;
    handleFormspreeSubmit(e);
  };

  if (state.succeeded) {
    return (
      <section className="agk-section" id="quote">
        <div className="agk-container">
          <div className="agk-form-success">
            <div className="agk-form-success__icon">
              <Icon name="check" size={28} color="#FFFFFF" />
            </div>
            <h3 className="agk-form-success__title">Got it, {name.split(' ')[0]}.</h3>
            <p className="agk-form-success__body">
              We&apos;ll call you on <strong>{phone}</strong> within the next four working
              hours to confirm details and book a free site visit if needed.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="agk-section" id="quote">
      <div className="agk-container">
        <div className="agk-form-wrap">
          <div className="agk-form-side">
            <div className="agk-eyebrow">Get in touch</div>
            <h2 className="agk-section__title">Tell us what&apos;s broken.</h2>
            <p className="agk-form-side__lede">
              Quick form, no spam. We respond within four working hours — usually quicker.
            </p>
            <ul className="agk-form-side__contacts">
              <li><Icon name="phone" size={18} color="#EF4D48" /><span>060 332 5955</span></li>
              <li><Icon name="mail" size={18} color="#EF4D48" /><span>agjoburgconstruction@gmail.com</span></li>
              <li><Icon name="mapPin" size={18} color="#EF4D48" /><span>97, 14th Ave, Northcliff · Joburg</span></li>
              <li><Icon name="clock" size={18} color="#EF4D48" /><span>Mon–Fri 07:00–17:00 · Sat 08:00–13:00</span></li>
            </ul>
          </div>

          <form className="agk-form" onSubmit={submit} noValidate>
            <div className="agk-field">
              <label className="agk-field__label">Full name</label>
              <input
                name="name"
                className={'agk-input' + (localErrors.name ? ' is-error' : '')}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Sipho Dlamini"
              />
              {localErrors.name && <div className="agk-field__error">{localErrors.name}</div>}
              <ValidationError field="name" errors={state.errors} className="agk-field__error" />
            </div>

            <div className="agk-field-row">
              <div className="agk-field">
                <label className="agk-field__label">Phone</label>
                <input
                  name="phone"
                  className={'agk-input' + (localErrors.phone ? ' is-error' : '')}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="082 555 0123"
                />
                {localErrors.phone && <div className="agk-field__error">{localErrors.phone}</div>}
                <ValidationError field="phone" errors={state.errors} className="agk-field__error" />
              </div>
              <div className="agk-field">
                <label className="agk-field__label">
                  Email <span className="agk-field__opt">(optional)</span>
                </label>
                <input
                  name="email"
                  className="agk-input"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.co.za"
                />
                <ValidationError field="email" errors={state.errors} className="agk-field__error" />
              </div>
            </div>

            <div className="agk-field">
              <label className="agk-field__label">Service you need</label>
              <select
                name="service"
                className={'agk-input' + (localErrors.service ? ' is-error' : '')}
                value={service}
                onChange={e => setService(e.target.value)}
              >
                <option value="">Pick the closest match…</option>
                <option>Damp proofing &amp; waterproofing</option>
                <option>Roof installation or repairs</option>
                <option>Interior or exterior painting</option>
                <option>Kitchen or bathroom renovation</option>
                <option>Driveway, patio or paving</option>
                <option>Home extension or alteration</option>
                <option>Not sure — multiple issues</option>
              </select>
              {localErrors.service && <div className="agk-field__error">{localErrors.service}</div>}
            </div>

            <div className="agk-field">
              <label className="agk-field__label">
                Property address <span className="agk-field__opt">(suburb is fine)</span>
              </label>
              <input
                name="address"
                className="agk-input"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Parkhurst"
              />
            </div>

            <div className="agk-field">
              <label className="agk-field__label">What&apos;s going on?</label>
              <textarea
                name="notes"
                className="agk-input agk-input--textarea"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Leak above the bedroom every time it rains. Started last summer."
              />
            </div>

            {state.errors && state.errors.getFormErrors().length > 0 && (
              <div className="agk-field__error">
                Something went wrong. Please call us directly on 060 332 5955.
              </div>
            )}

            <div className="agk-form__submit">
              <button type="submit" className="agk-btn agk-btn--primary" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Get my quote'}
              </button>
              <span className="agk-form__note">
                POPIA-compliant · we only use your details to send a quote.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
