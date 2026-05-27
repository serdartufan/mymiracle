'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    geslacht: '',
    voornaam: '',
    achternaam: '',
    telefoonnummer: '',
    email: '',
    geboortedatum: '',
    toelichting: '',
    website: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const labelClass = 'mb-1.5 block text-sm font-medium text-[#1c1c1e]';
  const required = <span className="text-[#4a1a7a]"> *</span>;

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[#d4a8b8]/40 bg-[#d4a8b8]/10 p-10 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4a1a7a]">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 font-serif text-xl font-semibold text-[#1a0a2e]">Aanvraag ontvangen!</h3>
        <p className="text-sm text-[#1c1c1e]/70">
          Bedankt voor uw aanvraag! Kader neemt zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — verborgen voor mensen, zichtbaar voor bots */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      {/* Geslacht */}
      <div>
        <p className={labelClass}>Geslacht{required}</p>
        <div className="flex gap-6">
          {(['Vrouw', 'Man'] as const).map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm text-[#1c1c1e]">
              <input
                type="radio"
                name="geslacht"
                value={opt}
                required
                checked={form.geslacht === opt}
                onChange={handleChange}
                className="h-4 w-4 accent-[#4a1a7a]"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Voornaam + Achternaam */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="voornaam" className={labelClass}>
            Voornaam{required}
          </label>
          <input
            id="voornaam"
            name="voornaam"
            type="text"
            required
            value={form.voornaam}
            onChange={handleChange}
            placeholder="Voornaam"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="achternaam" className={labelClass}>
            Achternaam{required}
          </label>
          <input
            id="achternaam"
            name="achternaam"
            type="text"
            required
            value={form.achternaam}
            onChange={handleChange}
            placeholder="Achternaam"
            className={inputClass}
          />
        </div>
      </div>

      {/* Telefoonnummer */}
      <div>
        <label htmlFor="telefoonnummer" className={labelClass}>
          Telefoonnummer{required}
        </label>
        <input
          id="telefoonnummer"
          name="telefoonnummer"
          type="tel"
          required
          value={form.telefoonnummer}
          onChange={handleChange}
          placeholder="+31 6 xx xx xx xx"
          className={inputClass}
        />
      </div>

      {/* E-mailadres */}
      <div>
        <label htmlFor="email" className={labelClass}>
          E-mailadres{required}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="uw@email.nl"
          className={inputClass}
        />
      </div>

      {/* Geboortedatum */}
      <div>
        <label htmlFor="geboortedatum" className={labelClass}>
          Geboortedatum{required}
        </label>
        <input
          id="geboortedatum"
          name="geboortedatum"
          type="date"
          required
          value={form.geboortedatum}
          onChange={handleChange}
          className={inputClass}
        />
        <p className="mt-1.5 text-xs leading-relaxed text-[#1c1c1e]/55">
          Voor een aantal behandelingen gelden minimumleeftijden. We zijn daarom verplicht uw leeftijd te registreren.
        </p>
      </div>

      {/* Toelichting */}
      <div>
        <label htmlFor="toelichting" className={labelClass}>
          Toelichting
        </label>
        <textarea
          id="toelichting"
          name="toelichting"
          rows={4}
          value={form.toelichting}
          onChange={handleChange}
          placeholder="Heeft u nog vragen of aanvullende informatie?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Er is iets misgegaan. Probeer het opnieuw of stuur een e-mail naar{' '}
          <a href="mailto:kader@mymiracle.nl" className="underline">
            kader@mymiracle.nl
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-[#4a1a7a] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#5e2490] disabled:opacity-60"
      >
        {status === 'loading' ? 'Versturen...' : 'Stuur aanvraag in'}
      </button>
    </form>
  );
}
