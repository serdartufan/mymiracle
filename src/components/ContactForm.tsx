'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const behandelingOpties = [
  'Lichaamsbehandeling',
  'Gezichtsbehandeling',
  'Kennismaking',
  'Anders',
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    behandeling: '',
    bericht: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-xl border border-[#d4a8b8]/30 bg-white/80 px-4 py-3 text-sm text-[#1c1c1e] placeholder-[#1c1c1e]/40 outline-none transition focus:border-[#4a1a7a] focus:ring-2 focus:ring-[#4a1a7a]/20';

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[#d4a8b8]/40 bg-[#d4a8b8]/10 p-10 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4a1a7a]">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-serif font-semibold text-[#1a0a2e]">Bericht ontvangen!</h3>
        <p className="text-sm text-[#1c1c1e]/70">
          Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="naam" className="mb-1.5 block text-sm font-medium text-[#1c1c1e]">
          Naam <span className="text-[#4a1a7a]">*</span>
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          required
          value={form.naam}
          onChange={handleChange}
          placeholder="Jouw volledige naam"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1c1c1e]">
          E-mail <span className="text-[#4a1a7a]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="jouw@email.be"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="telefoon" className="mb-1.5 block text-sm font-medium text-[#1c1c1e]">
          Telefoon
        </label>
        <input
          id="telefoon"
          name="telefoon"
          type="tel"
          value={form.telefoon}
          onChange={handleChange}
          placeholder="+32 xxx xxx xxx"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="behandeling" className="mb-1.5 block text-sm font-medium text-[#1c1c1e]">
          Interesse in
        </label>
        <select
          id="behandeling"
          name="behandeling"
          value={form.behandeling}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Selecteer een behandeling</option>
          {behandelingOpties.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="bericht" className="mb-1.5 block text-sm font-medium text-[#1c1c1e]">
          Bericht <span className="text-[#4a1a7a]">*</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          required
          value={form.bericht}
          onChange={handleChange}
          placeholder="Stel gerust je vraag of vertel ons wat je doelstellingen zijn..."
          className={`${inputClass} resize-none`}
        />
      </div>
      {status === 'error' && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Er is iets misgegaan. Probeer het opnieuw of stuur een e-mail naar{' '}
          <a href="mailto:info@mymiracle.be" className="underline">
            info@mymiracle.be
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-[#4a1a7a] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#5e2490] disabled:opacity-60"
      >
        {status === 'loading' ? 'Versturen...' : 'Verstuur bericht'}
      </button>
    </form>
  );
}
