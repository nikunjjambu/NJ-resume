import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Nikunj Jambu is a MEL specialist, spatial data analyst and a conservation biologist.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">About this site</Link>
            </h2>
            <p>
              If you are here, it is likely that I’ve bragged about my website to you (most likely)
              or that you have chanced upon my Github profile (highly unlikely). Another possibility
              is that I have applied for a position with your organization and you were curious
              enough to be led here via a link I planted (very likely). Whatever be the reason,
              welcome!
            </p>
          </div>
        </header>
        <p>
          {' '}
          You can see there are five pages on my site. You are here in the landing page. The{' '}
          <Link href="/about">about me</Link> section has a few personal info on me. The{' '}
          <Link href="/resume">resume</Link> section is where you can find my professional details.
          You can also download a pdf of my resume there. In the{' '}
          <Link href="/projects">projects</Link> section, I have listed hyperlinked details to a few
          things I believe I did well. If the <Link href="/stats">site statistics</Link> or my{' '}
          <Link href="/contact">contact</Link> details interest you, well, head to those pages. Some
          quick facts: This website is responsive, statically-generated, and written using modern
          Java script. It is hosted on Github pages and linked to this domain.
        </p>
        {/* 
        <p>
          {' '}
          Source available <a href="https://github.com/mldangelo/personal-site">here</a>.
        </p>
        */}
      </article>
    </PageWrapper>
  );
}
