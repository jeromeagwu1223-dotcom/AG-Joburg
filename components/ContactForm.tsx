'use client';

import { useState } from 'react';
import Icon from './Icon';

const FORMSPREE_ID = 'xgodqzog';

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  notes: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', email: '', service: '', address: '', notes: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const update = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Please tell us your name.';
    if (!form.phone.trim()) errs.phone = 'We need a number to call you back on.';
    if (!form.service) errs.service = 'Pick the closest service.';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrors({ notes: 'Something went wrong. Please call us directly on 060 332 5955.' });
      }
    } catch {
      setErrors({ notes: 'Something went wrong. Please call us directly on 060 332 5955.' });
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section className="agk-section" id="quote">
        <div className="agk-container">
          <div className="agk-form-success">
            <div className="agk-form-success__icon">
              <Icon name="check" size={28} color="#FFFFFF" />
            </div>
            <h3 className="agk-form-success__title">Got it, {form.name.split(' ')[0]}.</h3>
            <p className="agk-form-success__body">
              We&apos;ll call you on <strong>{form.phone}</strong> within the next four working
              hours to confirm details and book a free site visit if needed.
            </p>
            <button
              className="agk-btn agk-btn--secondary"
              onClick={() => {
                setSubmitted(false);
                setForm({ name: '', phone: '', email: '', service: '', address: '', notes: '' });
              }}
            >
              Send another
            </button>
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
              <li><Icon name="mail" size={18} color="#EF4D48" /><span>heyjeromeagwu@gmail.com</span></li>
              <li><Icon name="mapPin" size={18} color="#EF4D48" /><span>97, 14th Ave, Northcliff · Joburg</span></li>
              <li><Icon name="clock" size={18} color="#EF4D48" /><span>Mon–Fri 07:00–17:00 · Sat 08:00–13:00</span></li>
            </ul>
          </div>

          <form className="agk-form" onSubmit={submit} noValidate>
            <div className="agk-field">
              <label className="agk-field__label">Full name</label>
              <input
                className={'agk-input' + (errors.name ? ' is-error' : '')}
                value={form.name}
                onChange={update('name')}
                placeholder="Sipho Dlamini"
              />
              {errors.name && <div className="agk-field__error">{errors.name}</div>}
            </div>

            <div className="agk-field-row">
              <div className="agk-field">
                <label className="agk-field__label">Phone</label>
                <input
                  className={'agk-input' + (errors.phone ? ' is-error' : '')}
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="082 555 0123"
                />
                {errors.phone && <div className="agk-field__error">{errors.phone}</div>}
              </div>
              <div className="agk-field">
                <label className="agk-field__label">
                  Email <span className="agk-field__opt">(optional)</span>
                </label>
                <input
                  className="agk-input"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.co.za"
                />
              </div>
            </div>

            <div className="agk-field">
              <label className="agk-field__label">Service you need</label>
              <select
                className={'agk-input' + (errors.service ? ' is-error' : '')}
                value={form.service}
                onChange={update('service')}
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
              {errors.service && <div className="agk-field__error">{errors.service}</div>}
            </div>

            <div className="agk-field">
              <label className="agk-field__label">
                Property address <span className="agk-field__opt">(suburb is fine)</span>
              </label>
              <input
                className="agk-input"
                value={form.address}
                onChange={update('address')}
                placeholder="Parkhurst"
              />
            </div>

            <div className="agk-field">
              <label className="agk-field__label">What&apos;s going on?</label>
              <textarea
                className="agk-input agk-input--textarea"
                value={form.notes}
                onChange={update('notes')}
                placeholder="Leak above the bedroom every time it rains. Started last summer."
              />
            </div>

            <div className="agk-form__submit">
              <button type="submit" className="agk-btn agk-btn--primary" disabled={sending}>
                {sending ? 'Sending…' : 'Get my quote'}
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
