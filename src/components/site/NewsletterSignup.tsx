import React, {useState} from 'react';
import Link from '@docusaurus/Link';

type Variant = 'card' | 'band' | 'compact';
type Props = { variant?: Variant; title?: string; text?: string; };
type Status = 'idle' | 'loading' | 'success' | 'invalid' | 'error';

const defaultText = 'Recevez les nouvelles importantes de ClubManager : nouveautés, améliorations, conseils de configuration et informations de disponibilité.';

export function NewsletterSignup({variant = 'card', title = 'Restez informé des nouveautés ClubManager', text = defaultText}: Props): React.ReactNode {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get('firstName') ?? '').trim(),
      lastName: String(data.get('lastName') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      website: String(data.get('website') ?? '').trim(),
      consent: data.get('consent') === 'on',
    };

    if (!payload.email || !payload.consent) {
      setStatus('invalid');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/newsletter/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
        return;
      }
      setStatus(response.status === 400 ? 'invalid' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={`site-newsletter site-newsletter--${variant}`}>
      <div className="site-newsletter__content">
        <span className="site-eyebrow">Infolettre</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <ul className="site-newsletter__bullets">
          <li>Nouvelles versions et améliorations.</li>
          <li>Conseils pour mieux gérer votre club.</li>
          <li>Aucun envoi inutile : seulement les informations importantes.</li>
        </ul>
      </div>
      <form className="site-newsletter__form" onSubmit={handleSubmit}>
        <div className="site-newsletter__row">
          <label><span>Prénom</span><input name="firstName" type="text" autoComplete="given-name" /></label>
          <label><span>Nom</span><input name="lastName" type="text" autoComplete="family-name" /></label>
        </div>
        <label><span>Adresse courriel *</span><input name="email" type="email" autoComplete="email" required placeholder="vous@exemple.com" /></label>
        <label><span>Téléphone</span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label className="site-newsletter__honeypot" aria-hidden="true"><span>Site web</span><input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
        <label className="site-newsletter__consent"><input name="consent" type="checkbox" required /><span>J’accepte de recevoir l’infolettre de ClubManager. Je pourrai me désabonner à tout moment.</span></label>
        <button className="site-button site-button--primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Inscription...' : 'S’inscrire à l’infolettre'}</button>
        {status === 'success' && <p className="site-newsletter__message site-newsletter__message--success">Votre inscription a bien été envoyée.</p>}
        {status === 'invalid' && <p className="site-newsletter__message site-newsletter__message--error">Veuillez entrer un courriel valide et accepter le consentement.</p>}
        {status === 'error' && <p className="site-newsletter__message site-newsletter__message--error">Impossible d’inscrire l’adresse pour le moment. Réessayez plus tard ou passez par la page contact.</p>}
        <p className="site-newsletter__privacy">Les données sont utilisées uniquement pour l’infolettre ClubManager. <Link to="/contact">Nous contacter</Link></p>
      </form>
    </div>
  );
}
