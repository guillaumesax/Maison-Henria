import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { EMAIL_ADDRESS, MEAL_FORMULAS, MEAL_OPTIONS, PHONE_NUMBER } from '../constants';

const products = [...MEAL_FORMULAS, ...MEAL_OPTIONS];
const inputClass = 'w-full min-w-0 rounded-sm border border-stone-300 bg-white px-4 py-3 text-base text-henria-dark focus:outline-none focus:ring-2 focus:ring-henria-gold focus:border-henria-gold';

// The ordering deadline follows Maison Henria's timezone, wherever the customer is.
export function earliestDeliveryDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23',
  }).formatToParts(now);
  const part = (type: string) => Number(parts.find(item => item.type === type)?.value);
  const date = new Date(Date.UTC(part('year'), part('month') - 1, part('day') + (part('hour') >= 15 ? 2 : 1)));
  return date.toISOString().slice(0, 10);
}

export const OrderPage: React.FC = () => {
  const [error, setError] = useState('');
  const [draft, setDraft] = useState('');
  const [copied, setCopied] = useState(false);
  const [minimumDate, setMinimumDate] = useState(earliestDeliveryDate);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setDraft('');
    setCopied(false);
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) || '').trim();
    const quantities = products.map((_, index) => Number(data.get(`quantity-${index}`)));
    if (quantities.some(quantity => !Number.isSafeInteger(quantity) || quantity < 0) || !quantities.some(quantity => quantity > 0)) {
      setError('Choisissez au moins un article et renseignez des quantités entières positives ou nulles.');
      return;
    }
    const earliest = earliestDeliveryDate();
    setMinimumDate(earliest);
    if (value('delivery') < earliest) {
      setError('Cette date ne respecte plus le délai de commande : au plus tard la veille avant 15h. Choisissez une date ultérieure ou contactez-nous par téléphone.');
      return;
    }
    if (['lastName', 'firstName', 'address', 'postalCode', 'city', 'phone', 'email'].some(name => !value(name))) {
      setError('Merci de renseigner tous les champs obligatoires.');
      return;
    }
    const date = value('delivery').split('-').reverse().join('/');
    const body = [
      'Bonjour Maison Henria,', '', 'Je souhaite passer la commande suivante :', '',
      `Date de livraison souhaitée : ${date}`, '',
      ...products.flatMap((product, index) => quantities[index] > 0 ? [`${quantities[index]} × ${product.name} — ${product.price} € TTC / unité`] : []),
      '', 'Coordonnées et livraison :',
      `Nom : ${value('lastName')}`, `Prénom : ${value('firstName')}`,
      ...(value('company') ? [`Entreprise : ${value('company')}`] : []),
      `Adresse : ${value('address')}`, `Code postal : ${value('postalCode')}`, `Ville : ${value('city')}`,
      `Téléphone : ${value('phone')}`, `Email : ${value('email')}`,
      ...(value('notes') ? ['', `Précisions : ${value('notes')}`] : []), '',
      'Je comprends que cette demande m’engage dès lors qu’elle est confirmée par retour de mail de Maison Henria. Seule cette confirmation valide définitivement ma commande. En l’absence de réponse, ma commande n’est pas validée.',
      '', 'Merci.',
    ].join('\n');
    setDraft(body);
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(`Demande de commande — ${date} — ${value('company') || `${value('firstName')} ${value('lastName')}`}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-stone-50 text-henria-dark font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-6 pt-40 md:pt-48 pb-20">
        <a href="/#plateaux-repas" className="text-xs text-stone-600 hover:text-henria-dark">← Retour aux plateaux repas</a>
        <div className="mt-8 mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-henria-gold font-bold mb-4">À votre table</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">Votre demande de commande</h1>
          <p className="mt-5 text-stone-600 leading-relaxed">Choisissez vos quantités, indiquez vos coordonnées et transmettez-nous votre demande par e-mail.</p>
        </div>

        <aside aria-label="Conditions de commande" className="border-l-4 border-henria-gold bg-white p-6 md:p-8 mb-10 space-y-4 text-sm leading-relaxed text-stone-700">
          <p className="font-bold text-henria-dark">Les commandes doivent être envoyées au plus tard la veille avant 15h.</p>
          <div>
            <p>Toute demande de commande vous engage dès lors qu’elle est confirmée par retour de mail de Maison Henria.</p>
            <p>Seule cette confirmation valide définitivement votre commande.</p>
            <p className="font-bold text-henria-dark">En l’absence de réponse de notre part, la commande doit être considérée comme non validée.</p>
          </div>
          <p>Pour toute demande urgente, merci de contacter directement notre standard téléphonique pendant les horaires d’ouverture. <a className="underline underline-offset-4 whitespace-nowrap" href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}>{PHONE_NUMBER}</a></p>
        </aside>

        <form onSubmit={handleSubmit} onChange={() => { setDraft(''); setError(''); }} className="space-y-8">
          <fieldset className="bg-white border border-stone-200 p-6 md:p-10">
            <legend className="sr-only">Votre sélection</legend>
            <h2 className="font-serif text-2xl md:text-3xl mb-2"><span className="text-henria-gold">01.</span> Votre sélection</h2>
            <p className="text-sm text-stone-500 mb-6">Prix unitaires TTC. Indiquez une quantité pour chaque article souhaité.</p>
            {products.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between gap-4 py-5 border-b border-stone-100 last:border-0">
                <div>
                  <label htmlFor={`quantity-${index}`} className="font-serif text-lg md:text-xl">{product.name}</label>
                  {'description' in product && <p className="text-sm text-stone-500 mt-1">{product.description}</p>}
                  <p className="mt-2 text-sm text-stone-600">{product.price} € TTC</p>
                </div>
                <div className="w-24 shrink-0">
                  <label htmlFor={`quantity-${index}`} className="block text-xs text-stone-500 mb-2">Quantité</label>
                  <input id={`quantity-${index}`} name={`quantity-${index}`} aria-label={`Quantité — ${product.name}`} type="number" min="0" step="1" defaultValue="0" required className={`${inputClass} text-center`} />
                </div>
              </div>
            ))}
            <p className="text-sm text-stone-600 mt-6 leading-relaxed">Livraison offerte sur Montélimar, pour un minimum de commande de 50 € et selon tournée optimisée. En dehors de Montélimar, frais de livraison en supplément.</p>
          </fieldset>

          <fieldset className="bg-white border border-stone-200 p-6 md:p-10">
            <legend className="sr-only">Vos coordonnées et la livraison</legend>
            <h2 className="font-serif text-2xl md:text-3xl mb-2"><span className="text-henria-gold">02.</span> Vos coordonnées & la livraison</h2>
            <p className="text-sm text-stone-500 mb-8">Tous les champs marqués d’un astérisque sont obligatoires.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label htmlFor="delivery" className="block text-sm mb-2">Date de livraison souhaitée *</label>
                <input id="delivery" name="delivery" type="date" min={minimumDate} onFocus={() => setMinimumDate(earliestDeliveryDate())} required className={inputClass} aria-describedby="delivery-help" />
                <p id="delivery-help" className="text-xs text-stone-500 mt-2">Commande à envoyer la veille avant 15h, heure de Paris. Date soumise à confirmation.</p>
              </div>
              {[
                ['lastName', 'Nom', 'text', 'family-name'], ['firstName', 'Prénom', 'text', 'given-name'],
                ['company', 'Entreprise', 'text', 'organization'], ['email', 'Adresse e-mail', 'email', 'email'],
                ['phone', 'Téléphone', 'tel', 'tel'], ['address', 'Adresse de livraison', 'text', 'street-address'],
                ['postalCode', 'Code postal', 'text', 'postal-code'], ['city', 'Ville', 'text', 'address-level2'],
              ].map(([name, label, type, autoComplete]) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm mb-2">{label}{name === 'company' ? ' (facultatif)' : ' *'}</label>
                  <input id={name} name={name} type={type} autoComplete={autoComplete} required={name !== 'company'} maxLength={name === 'address' ? 250 : 120} className={inputClass} />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="notes" className="block text-sm mb-2">Précisions (facultatif)</label>
                <textarea id="notes" name="notes" rows={3} maxLength={1000} placeholder="Régimes alimentaires, allergies, indications d’accès…" className={inputClass} />
              </div>
            </div>
          </fieldset>

          <div className="bg-henria-dark text-white p-6 md:p-10 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl"><span className="text-henria-gold">03.</span> Transmettre votre demande</h2>
            <label className="flex items-start gap-3 text-sm leading-relaxed">
              <input type="checkbox" required name="confirmation" className="mt-1 w-5 h-5 shrink-0 accent-henria-gold" />
              <span>J’ai compris que ma commande sera validée uniquement après confirmation par e-mail de Maison Henria et qu’en l’absence de réponse, elle n’est pas validée. *</span>
            </label>
            <p className="text-sm text-stone-300 leading-relaxed">Le bouton ouvre votre messagerie avec un e-mail prérempli à {EMAIL_ADDRESS}. Vous devez ensuite l’envoyer depuis votre boîte mail. Une réponse automatique ne vaut pas confirmation de commande.</p>
            {error && <p role="alert" className="bg-white text-red-800 p-4 text-sm">{error}</p>}
            <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-henria-gold text-henria-dark text-xs uppercase tracking-[0.15em] font-bold hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-henria-gold">Préparer mon e-mail de commande</button>
          </div>
          {draft && <div role="status" className="border border-henria-gold bg-white p-6 md:p-8 space-y-4">
            <h2 className="font-serif text-2xl">Dernière étape : envoyez votre e-mail</h2>
            <p className="text-sm text-stone-600 leading-relaxed">Le site ne peut pas vérifier l’envoi. Si votre messagerie ne s’est pas ouverte, copiez le texte ci-dessous et envoyez-le à <a className="underline" href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>. Attendez ensuite notre confirmation personnelle pour considérer votre commande comme validée.</p>
            <textarea aria-label="Texte de votre demande à copier" readOnly value={draft} rows={12} className={`${inputClass} text-sm`} />
            <button type="button" className="text-sm underline underline-offset-4" onClick={async () => {
              try { await navigator.clipboard.writeText(draft); setCopied(true); }
              catch { setCopied(false); }
            }}>{copied ? 'Texte copié' : 'Copier la demande'}</button>
          </div>}
        </form>
      </main>
      <Footer />
    </div>
  );
};
