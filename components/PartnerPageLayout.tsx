import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PartnerPageLayoutProps {
  eyebrow: string;
  title: string;
  introduction: string;
  heroImage: string;
  heroImageAlt: string;
  websiteUrl: string;
  websiteLabel: string;
  children: React.ReactNode;
}

export const PartnerPageLayout: React.FC<PartnerPageLayoutProps> = ({
  eyebrow,
  title,
  introduction,
  heroImage,
  heroImageAlt,
  websiteUrl,
  websiteLabel,
  children,
}) => {
  return (
    <div className="min-h-screen bg-white font-sans text-henria-dark">
      <Header />
      <main>
        <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-henria-dark pt-32">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 text-white md:pb-20">
            <a
              href="/#reseau"
              className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/80 transition hover:text-white"
            >
              <ArrowLeft size={14} /> Notre réseau
            </a>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e2bd61]">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] md:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/90 md:text-xl">{introduction}</p>
          </div>
        </section>

        {children}

        <section className="bg-[#f4f0e8] py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-henria-gold">Pour aller plus loin</p>
            <h2 className="mt-4 font-serif text-3xl text-henria-dark md:text-4xl">Découvrir {websiteLabel}</h2>
            <p className="mx-auto mt-4 max-w-xl font-light leading-relaxed text-stone-600">
              Retrouvez toutes les informations, les disponibilités et les possibilités proposées directement sur son site.
            </p>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-henria-dark px-7 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition hover:bg-henria-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-henria-gold focus-visible:ring-offset-2"
            >
              Visiter le site <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
