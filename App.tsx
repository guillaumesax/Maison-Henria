import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Presentation } from './components/Presentation';
import { MealTrays } from './components/MealTrays';
import { MoreChoice } from './components/MoreChoice';
import { Subscriptions } from './components/Subscriptions';
import { Events } from './components/Events';
import { Story } from './components/Story';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white overflow-x-hidden text-henria-dark">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Presentation />
        <MealTrays />
        <MoreChoice />
        <Subscriptions />
        <Events />
        <Story />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;