import React from 'react';
import { About } from './About';
import { Features } from './Features';
import { CTA } from './CTA';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Testimonials } from './Testimonials';
import { Pricing } from './Pricing';
import { FAQ } from './FAQ';
import { Team } from './Team';
import { Contact } from './Contact';

export const Main = () => {
  return (
    <main>
      <About />
      <Features />
      {/* <CTA /> */}
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      <Team />
      <Contact />
    </main>
  );
};
